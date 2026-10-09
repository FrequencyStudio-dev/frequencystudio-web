"use client";

import { useEffect, useRef } from "react";
import { WAVE_HEIGHT, WAVE_WIDTH, generatePeaks, peaksToPath, type WaveKind } from "./waveform-data";

// A single DAW track next to the hero title where takes get recorded one after
// another. The recording cycle lives in hero-recording.css; the root renders
// `hidden` and that CSS reveals it, so commenting out its import in layout.tsx
// removes the whole thing.
//
// JS only loads the next take (track, name, waveform) while the clip is
// invisible between cycles.

const tracks: { name: string; kind: WaveKind }[] = [
  { name: "VOX LEAD", kind: "vocal" },
  { name: "GTR L", kind: "guitar" },
  { name: "BASS DI", kind: "bass" },
  { name: "KICK", kind: "drums" },
  { name: "KEYS", kind: "pad" },
  { name: "VOX DBL", kind: "vocal" },
  { name: "GTR SOLO", kind: "guitar" },
  { name: "PAD", kind: "pad" },
];

const pad = (n: number) => String(n).padStart(2, "0");

const takeName = (track: number, take: number) =>
  `${tracks[track].name.replace(/ /g, "_")}_take${pad(take)}.wav`;

// The first take is fixed so server and client render the same markup
const firstWave = peaksToPath(generatePeaks(tracks[0].kind, 7));

export function HeroRecording() {
  const rootRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const trackNameRef = useRef<HTMLSpanElement>(null);
  const clipNameRef = useRef<HTMLSpanElement>(null);
  const waveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const clip = clipRef.current;
    if (!root || !clip || getComputedStyle(root).display === "none") return;

    const takes = tracks.map((_, i) => (i === 0 ? 1 : 0));
    let current = 0;

    const nextTake = (event: AnimationEvent) => {
      if (event.target !== clip) return;

      // Any track but the one that just recorded
      let track = Math.floor(Math.random() * (tracks.length - 1));
      if (track >= current) track += 1;
      current = track;
      takes[track] += 1;

      if (numRef.current) numRef.current.textContent = pad(track + 1);
      if (trackNameRef.current) trackNameRef.current.textContent = tracks[track].name;
      if (clipNameRef.current) clipNameRef.current.textContent = takeName(track, takes[track]);
      waveRef.current?.setAttribute(
        "d",
        peaksToPath(generatePeaks(tracks[track].kind, Math.floor(Math.random() * 1e9))),
      );
    };

    clip.addEventListener("animationiteration", nextTake);
    return () => clip.removeEventListener("animationiteration", nextTake);
  }, []);

  return (
    <div ref={rootRef} hidden aria-hidden="true" className="hero-rec">
      <div className="hero-rec__track">
        <span ref={numRef} className="hero-rec__num">
          {pad(1)}
        </span>
        <span ref={trackNameRef} className="hero-rec__name">
          {tracks[0].name}
        </span>
        <span className="hero-rec__arm">R</span>
      </div>

      <div className="hero-rec__lane">
        <div ref={clipRef} className="hero-rec__clip">
          <div className="hero-rec__clip-header">
            <span className="hero-rec__label hero-rec__label--rec">● REC</span>
            <span ref={clipNameRef} className="hero-rec__label hero-rec__label--name">
              {takeName(0, 1)}
            </span>
          </div>
          <div className="hero-rec__clip-body">
            <svg
              className="hero-rec__wave"
              viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
              preserveAspectRatio="none"
            >
              <line
                className="hero-rec__axis"
                x1="0"
                y1={WAVE_HEIGHT / 2}
                x2={WAVE_WIDTH}
                y2={WAVE_HEIGHT / 2}
                vectorEffect="non-scaling-stroke"
              />
              <path ref={waveRef} d={firstWave} />
            </svg>
          </div>
          <span className="hero-rec__head" />
        </div>
      </div>
    </div>
  );
}
