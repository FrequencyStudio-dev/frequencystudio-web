"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// A DAW session sitting behind the page. Layout and motion live in the
// daw-*.css files next to this one: every part renders `hidden` and its CSS
// reveals it, so commenting out an import in layout.tsx removes that part.
//
// JS only maps scroll to `--daw-progress` (track parallax), `--daw-scroll`
// (grid fade) and the transport's timecode and bar counter.

const BPM = 120;
const BEATS_PER_BAR = 4;
const BAR_COUNT = 48;
const FPS = 30;
const SONG_SECONDS = (BAR_COUNT * BEATS_PER_BAR * 60) / BPM;

// The session is (1 + --daw-travel) screens tall, so keep ~8 tracks per screen
const tracks = [
  "VOX LEAD",
  "VOX DBL",
  "VOX BV",
  "VOX ADLIB",
  "GTR L",
  "GTR R",
  "GTR SOLO",
  "ACOUSTIC",
  "BASS DI",
  "BASS AMP",
  "SYNTH",
  "KEYS",
  "PAD",
  "STRINGS",
  "KICK",
  "SNARE",
  "HAT",
  "TOMS",
  "OH",
  "ROOM",
  "PERC",
  "FX",
  "REVERB",
  "PRINT",
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
  const transportRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || getComputedStyle(root).display === "none") return;

    let frame = 0;
    let idleTimer: number | undefined;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--daw-progress", progress.toFixed(4));
      // Screens scrolled so far (unbounded), used by daw-fade.css
      root.style.setProperty("--daw-scroll", (window.scrollY / window.innerHeight).toFixed(3));

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

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleUpdate);
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
        </div>
      </div>

      {/* Tracks (parallax) */}
      <div className="daw-tracks">
        <div className="daw-session">
          {tracks.map((name, i) => (
            <div key={name} className="daw-track">
              <div className="daw-track__head">
                <span className="daw-track__title">
                  <span className="daw-track__num">{pad(i + 1)}</span>
                  {name}
                </span>
                <span className="daw-track__buttons">
                  <span className="daw-track__btn">M</span>
                  <span className="daw-track__btn">S</span>
                  <span className="daw-track__btn">R</span>
                </span>
              </div>
            </div>
          ))}

          <div className="daw-session__lanes" />
        </div>
      </div>

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
