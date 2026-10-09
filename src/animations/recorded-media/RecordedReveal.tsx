"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Images and mockups marked with `data-rec-reveal` get "recorded" in, left to
// right behind a record head, when they scroll into view. Mounted once in the
// layout; the look lives in recorded-reveal.css.
//
// Only elements this component marks `data-rec-revealed="pending"` are hidden,
// so without the CSS, without JS, or for anything already on screen when it
// mounts, everything simply stays visible.

const STAGGER_SECONDS = 0.15;

export function RecordedReveal() {
  const probeRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const probe = probeRef.current;
    if (!probe || getComputedStyle(probe).display === "none") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Elements entering together (e.g. a row of cards) start one after another
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.left - b.boundingClientRect.left);

        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty("--rec-reveal-delay", `${(i * STAGGER_SECONDS).toFixed(2)}s`);
          el.dataset.recRevealed = "true";
          observer.unobserve(el);
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll<HTMLElement>("[data-rec-reveal]").forEach((el) => {
      const state = el.dataset.recRevealed;
      if (state === "true") return;
      // Still waiting from a previous run (effects re-run on route changes and
      // twice in dev): keep watching it
      if (state === "pending") {
        observer.observe(el);
        return;
      }
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) return;
      el.dataset.recRevealed = "pending";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <span ref={probeRef} hidden aria-hidden="true" className="rec-reveal-probe" />;
}
