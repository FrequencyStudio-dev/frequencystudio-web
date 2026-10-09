import {
  WAVE_HEIGHT,
  WAVE_WIDTH,
  generatePeaks,
  peaksToPath,
  type WaveKind,
} from "@/animations/shared/waveform-data";

// A small waveform that shows up under a project's image while it's hovered and
// plays through. Goes between the image and the text; it takes no space and
// renders `hidden` until hover-wave.css reveals it, so commenting out that
// import in layout.tsx removes it. No JS: the wave is generated at render.

const kinds: WaveKind[] = ["vocal", "guitar", "drums", "bass"];

// Same text → same number, so each project keeps its own wave
function hash(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (Math.imul(h, 31) + text.charCodeAt(i)) >>> 0;
  return h;
}

export function HoverWave({ seed }: { seed: string }) {
  const h = hash(seed);
  const d = peaksToPath(generatePeaks(kinds[h % kinds.length], h, 120));

  const wave = (
    <svg
      className="rec-hover-wave__svg"
      viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <path d={d} />
    </svg>
  );

  return (
    <div hidden aria-hidden="true" className="rec-hover-wave">
      <div className="rec-hover-wave__track">
        {wave}
        <div className="rec-hover-wave__played">{wave}</div>
        <span className="rec-hover-wave__head" />
      </div>
    </div>
  );
}
