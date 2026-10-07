"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { WAVE_HEIGHT, WAVE_WIDTH, generatePeaks, peaksToPath, type WaveKind } from "./waveform-data";

// A DAW session sitting behind the page. Layout and motion live in the
// daw-*.css files next to this one: every part renders `hidden` and its CSS
// reveals it, so commenting out an import in layout.tsx removes that part.
//
// JS only does two things: map scroll to `--daw-progress` (parallax, playhead,
// timecode) and move the single recording clip to a new spot on each cycle.

const BPM = 120;
const BEATS_PER_BAR = 4;
const BAR_COUNT = 48;
const FPS = 30;
const SONG_SECONDS = (BAR_COUNT * BEATS_PER_BAR * 60) / BPM;

// The session is (1 + --daw-travel) screens tall, so keep ~8 tracks per screen
const tracks: { name: string; kind: WaveKind }[] = [
  { name: "VOX LEAD", kind: "vocal" },
  { name: "VOX DBL", kind: "vocal" },
  { name: "VOX BV", kind: "vocal" },
  { name: "VOX ADLIB", kind: "vocal" },
  { name: "GTR L", kind: "guitar" },
  { name: "GTR R", kind: "guitar" },
  { name: "GTR SOLO", kind: "guitar" },
  { name: "ACOUSTIC", kind: "guitar" },
  { name: "BASS DI", kind: "bass" },
  { name: "BASS AMP", kind: "bass" },
  { name: "SYNTH", kind: "bass" },
  { name: "KEYS", kind: "pad" },
  { name: "PAD", kind: "pad" },
  { name: "STRINGS", kind: "pad" },
  { name: "KICK", kind: "drums" },
  { name: "SNARE", kind: "drums" },
  { name: "HAT", kind: "drums" },
  { name: "TOMS", kind: "drums" },
  { name: "OH", kind: "drums" },
  { name: "ROOM", kind: "drums" },
  { name: "PERC", kind: "drums" },
  { name: "FX", kind: "pad" },
  { name: "REVERB", kind: "pad" },
  { name: "PRINT", kind: "pad" },
];

const pad = (n: number, length = 2) => String(n).padStart(length, "0");

function formatTimecode(seconds: number) {
  const frames = Math.floor(seconds * FPS);
  const whole = Math.floor(frames / FPS);
  return `${pad(Math.floor(whole / 3600))}:${pad(Math.floor(whole / 60) % 60)}:${pad(whole % 60)}:${pad(frames % FPS)}`;
}

function formatBar(seconds: number) {
  const beats = Math.min(Math.floor((seconds * BPM) / 60), BAR_COUNT * BEATS_PER_BAR - 1);
  return `${pad(Math.floor(beats / BEATS_PER_BAR) + 1, 3)}.${(beats % BEATS_PER_BAR) + 1}`;
}

export function DawScreen() {
  const rootRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);
  const transportRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const clipNameRef = useRef<HTMLSpanElement>(null);
  const clipWaveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || getComputedStyle(root).display === "none") return;

    let progress = 0;
    let frame = 0;
    let idleTimer: number | undefined;

    // --- Scroll → parallax, playhead, timecode -----------------------------

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--daw-progress", progress.toFixed(4));

      const seconds = progress * SONG_SECONDS;
      if (timeRef.current) timeRef.current.textContent = formatTimecode(seconds);
      if (barRef.current) barRef.current.textContent = formatBar(seconds);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const handleScroll = () => {
      scheduleUpdate();
      const transport = transportRef.current;
      if (!transport) return;
      transport.dataset.playing = "true";
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        transport.dataset.playing = "false";
      }, 250);
    };

    // --- Recording clip: one at a time, relocated while invisible ----------

    const clip = clipRef.current;
    const trackEls = root.querySelectorAll<HTMLElement>(".daw-track");
    const takes = tracks.map(() => 0);
    let lastTrack = -1;

    const placeClip = () => {
      const viewport = tracksRef.current;
      if (!clip || !viewport) return;

      // Only pick tracks fully on screen right now
      const bounds = viewport.getBoundingClientRect();
      const visible: number[] = [];
      trackEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= bounds.top - 1 && rect.bottom <= bounds.bottom + 1) visible.push(i);
      });
      const candidates = visible.filter((i) => i !== lastTrack);
      const track = candidates.length
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : (visible[0] ?? 0);

      // Recording starts at the playhead, kept inside the lane
      const width = 0.18 + Math.random() * 0.14;
      const left = Math.min(Math.max(progress, 0.02), 0.98 - width);

      clip.style.setProperty("--rec-track", String(track));
      clip.style.setProperty("--rec-left", `${(left * 100).toFixed(2)}%`);
      clip.style.setProperty("--rec-width", `${(width * 100).toFixed(2)}%`);

      takes[track] += 1;
      const { name, kind } = tracks[track];
      if (clipNameRef.current) {
        clipNameRef.current.textContent = `${name.replace(/ /g, "_")}_take${pad(takes[track])}.wav`;
      }
      clipWaveRef.current?.setAttribute(
        "d",
        peaksToPath(generatePeaks(kind, Math.floor(Math.random() * 1e9))),
      );

      if (lastTrack >= 0) delete trackEls[lastTrack].dataset.armed;
      trackEls[track].dataset.armed = "true";
      lastTrack = track;
    };

    const handleIteration = (event: AnimationEvent) => {
      if (event.target === clip) placeClip();
    };

    update();
    placeClip();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    clip?.addEventListener("animationiteration", handleIteration);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleUpdate);
      clip?.removeEventListener("animationiteration", handleIteration);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      hidden
      aria-hidden="true"
      className="daw-screen"
      style={{ "--daw-tracks": tracks.length, "--daw-bars": BAR_COUNT } as CSSProperties}
    >
      {/* Ruler (fixed under the nav) */}
      <div hidden className="daw-ruler">
        <span className="daw-ruler__corner">BARS</span>
        <div className="daw-ruler__scale">
          {Array.from({ length: BAR_COUNT }, (_, i) => (
            <span key={i} className="daw-ruler__bar">
              {i % 4 === 0 ? <span className="daw-ruler__label">{i + 1}</span> : null}
            </span>
          ))}
          <span className="daw-ruler__progress" />
        </div>
      </div>

      {/* Tracks (parallax) */}
      <div ref={tracksRef} className="daw-tracks">
        <div className="daw-session">
          {tracks.map((track, i) => (
            <div key={track.name} className="daw-track">
              <div className="daw-track__head">
                <span className="daw-track__title">
                  <span className="daw-track__num">{pad(i + 1)}</span>
                  {track.name}
                </span>
                <span className="daw-track__buttons">
                  <span className="daw-track__btn">M</span>
                  <span className="daw-track__btn">S</span>
                  <span className="daw-track__btn daw-track__btn--rec">R</span>
                </span>
              </div>
            </div>
          ))}

          <div className="daw-session__lanes">
            <div ref={clipRef} hidden className="daw-rec">
              <div className="daw-rec__header">
                <span className="daw-rec__label daw-rec__label--rec">● REC</span>
                <span ref={clipNameRef} className="daw-rec__label daw-rec__label--name" />
              </div>
              <div className="daw-rec__body">
                <svg
                  className="daw-rec__wave"
                  viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
                  preserveAspectRatio="none"
                >
                  <line
                    className="daw-rec__axis"
                    x1="0"
                    y1={WAVE_HEIGHT / 2}
                    x2={WAVE_WIDTH}
                    y2={WAVE_HEIGHT / 2}
                    vectorEffect="non-scaling-stroke"
                  />
                  <path ref={clipWaveRef} d="" />
                </svg>
              </div>
              <span className="daw-rec__head" />
            </div>
          </div>
        </div>
      </div>

      {/* Playhead (follows scroll) */}
      <div hidden className="daw-playhead" />

      {/* Transport bar */}
      <div ref={transportRef} hidden className="daw-transport" data-playing="false">
        <span className="daw-transport__state" />
        <span ref={timeRef} className="daw-transport__time">
          00:00:00:00
        </span>
        <span className="daw-transport__bar">
          BAR <span ref={barRef}>001.1</span>
        </span>
        <span className="daw-transport__rec">● REC</span>
        <span className="daw-transport__meta">{BPM} BPM</span>
        <span className="daw-transport__meta">
          {BEATS_PER_BAR}/4
        </span>
      </div>
    </div>
  );
}
