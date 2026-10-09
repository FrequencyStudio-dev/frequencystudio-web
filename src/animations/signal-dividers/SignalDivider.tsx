"use client";

import { useEffect, useRef } from "react";
import { mulberry32 } from "@/animations/shared/waveform-data";

// A section's top border drawn as an audio signal: a flat line with a few
// bursts, recorded left to right when it scrolls into view. Place it as the
// first child of an element that has `border-t` and `relative`. It renders
// `hidden` and signal-dividers.css reveals it, so commenting out that import in
// layout.tsx leaves the plain border.

const WIDTH = 1000;
const HEIGHT = 24;
const MID = HEIGHT / 2;
const AMPLITUDE = 9;

// Seeded, so server and client draw the same signal
function burstsPath(seed: number) {
  const rand = mulberry32(seed);
  let d = "";
  let x = 40 + rand() * 120;

  while (x < WIDTH - 60) {
    const width = Math.min(30 + rand() * 70, WIDTH - 20 - x);
    const period = 5 + rand() * 4;
    const level = 0.5 + rand() * 0.5;
    const steps = Math.ceil(width / 1.5);

    d += `M${x.toFixed(1)},${MID}`;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      // Fast attack, exponential decay
      const envelope = t < 0.12 ? t / 0.12 : Math.exp(-(t - 0.12) * 4);
      const y = MID - Math.sin(((t * width) / period) * Math.PI * 2) * AMPLITUDE * level * envelope;
      d += `L${(x + t * width).toFixed(1)},${y.toFixed(1)}`;
    }

    x += width + 120 + rand() * 220;
  }

  return d;
}

export function SignalDivider({ seed }: { seed: number }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || getComputedStyle(root).display === "none") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        root.dataset.drawn = "true";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} hidden aria-hidden="true" className="signal-divider">
      <svg
        className="signal-divider__signal"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
      >
        <line
          className="signal-divider__trail"
          x1="0"
          y1={MID}
          x2={WIDTH}
          y2={MID}
          vectorEffect="non-scaling-stroke"
        />
        <path className="signal-divider__bursts" d={burstsPath(seed)} vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="signal-divider__head" />
    </div>
  );
}
