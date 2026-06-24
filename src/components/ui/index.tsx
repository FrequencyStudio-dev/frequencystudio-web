"use client";

import { useEffect, useRef, useState } from "react";

// --- SectionLabel ---
interface SectionLabelProps {
  label: string;
  index?: string;
}

export function SectionLabel({ label, index }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12 lg:mb-16">
      {index && (
        <span className="font-mono text-label text-ink-dim">[ {index} ]</span>
      )}
      <div className="h-px w-8 bg-violet/40" />
      <span className="font-mono text-label text-ink-dim uppercase tracking-[0.15em]">
        {label}
      </span>
      <div className="h-px flex-1 bg-border max-w-24" />
    </div>
  );
}

// --- Tag ---
interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "violet";
}

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 font-mono text-label uppercase tracking-widest border ${
        variant === "violet"
          ? "border-violet/40 text-violet bg-violet/5"
          : "border-border-light text-ink-dim bg-surface"
      }`}
    >
      {children}
    </span>
  );
}

// --- AnimateOnScroll wrapper ---
interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// --- VioletDot decorative ---
export function VioletDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full bg-violet flex-shrink-0 ${className}`}
    />
  );
}

// --- Divider ---
export function Divider() {
  return (
    <div className="w-full h-px bg-border my-0" />
  );
}
