// Generates fake-but-believable audio peaks for the background DAW clips.
// Seeded, so the same seed always produces the same shape.

export type WaveKind = "vocal" | "drums" | "bass" | "guitar" | "pad";

export const WAVE_WIDTH = 400;
export const WAVE_HEIGHT = 100;

// How much random "grain" each instrument gets on top of its envelope
const JITTER: Record<WaveKind, number> = {
  vocal: 0.3,
  drums: 0.25,
  bass: 0.12,
  guitar: 0.2,
  pad: 0.1,
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generatePeaks(kind: WaveKind, seed: number, columns = 180): number[] {
  const rand = mulberry32(seed);
  const peaks = new Array<number>(columns).fill(0);

  switch (kind) {
    case "drums": {
      // 16 hits with exponential decay, accent on every downbeat
      const step = columns / 16;
      for (let hit = 0; hit < 16; hit++) {
        const start = Math.round(hit * step + rand() * 1.5);
        const level = hit % 4 === 0 ? 1 : 0.65 + rand() * 0.25;
        for (let i = start; i < columns; i++) {
          const v = level * Math.exp(-(i - start) * 0.32);
          if (v < 0.02) break;
          peaks[i] = Math.max(peaks[i], v);
        }
      }
      break;
    }

    case "vocal": {
      // Phrases separated by breaths, modulated by syllables
      let cursor = Math.round(columns * (0.04 + rand() * 0.06));
      while (cursor < columns * 0.92) {
        const length = Math.round(columns * (0.16 + rand() * 0.18));
        const syllable = 0.28 + rand() * 0.22;
        const phase = rand() * Math.PI;
        const level = 0.6 + rand() * 0.35;
        for (let i = 0; i < length && cursor + i < columns; i++) {
          const phrase = Math.pow(Math.sin((Math.PI * i) / length), 0.5);
          const syllables = 0.45 + 0.55 * Math.abs(Math.sin(i * syllable + phase));
          peaks[cursor + i] = level * phrase * syllables;
        }
        cursor += length + Math.round(columns * (0.04 + rand() * 0.08));
      }
      break;
    }

    case "bass": {
      // Back-to-back notes: quick attack, slow sag, tiny gap between them
      let cursor = 0;
      while (cursor < columns) {
        const length = Math.round(columns * (0.08 + rand() * 0.1));
        const level = 0.5 + rand() * 0.25;
        for (let i = 0; i < length - 1 && cursor + i < columns; i++) {
          const attack = Math.min(1, (i + 1) / 2);
          const sustain = 1 - (i / length) * 0.35;
          peaks[cursor + i] = level * attack * sustain;
        }
        cursor += length;
      }
      break;
    }

    case "guitar": {
      // Strums that ring out and overlap the next one
      let cursor = Math.round(rand() * 4);
      while (cursor < columns) {
        const length = Math.round(columns * (0.12 + rand() * 0.14));
        const level = 0.7 + rand() * 0.3;
        for (let i = 0; cursor + i < columns; i++) {
          const ring = 0.25 + 0.75 * Math.exp(-i * 0.09);
          const release = i < length ? 1 : Math.exp(-(i - length) * 0.25);
          const v = level * ring * release;
          if (v < 0.02) break;
          peaks[cursor + i] = Math.max(peaks[cursor + i], v);
        }
        cursor += length;
      }
      break;
    }

    case "pad": {
      // One long swell with a slow wobble
      const wobble = 2 + rand() * 3;
      const phase = rand() * Math.PI * 2;
      for (let i = 0; i < columns; i++) {
        const t = i / (columns - 1);
        const swell = Math.pow(Math.sin(Math.PI * t), 1.4);
        peaks[i] = swell * (0.62 + 0.12 * Math.sin(t * Math.PI * 2 * wobble + phase));
      }
      break;
    }
  }

  const jitter = JITTER[kind];
  return peaks.map((p) => Math.min(1, p * (1 - jitter * rand()) + 0.02 * rand()));
}

// Mirrored, filled waveform (Pro Tools / Reaper style) as a single closed path
export function peaksToPath(peaks: number[]): string {
  const mid = WAVE_HEIGHT / 2;
  const amp = mid * 0.92;
  const step = WAVE_WIDTH / (peaks.length - 1);
  const x = (i: number) => +(i * step).toFixed(1);

  const top = peaks.map((p, i) => `${x(i)},${+(mid - p * amp).toFixed(1)}`);
  const bottom = peaks.map((p, i) => `${x(i)},${+(mid + p * amp).toFixed(1)}`).reverse();

  return `M${top.join("L")}L${bottom.join("L")}Z`;
}
