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

// --- WhatsApp consult ---
const WHATSAPP = "59894399771";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

function Arrow() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 6h8M6 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ConsultButton({
  message,
  label,
  variant = "outline",
  className = "",
}: {
  message: string;
  label: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Consultar — ${label}`}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-label uppercase tracking-widest transition-all duration-300 ${
        variant === "solid"
          ? "bg-violet text-ink hover:bg-violet/80"
          : "border border-violet/40 text-violet hover:bg-violet/10 hover:border-violet"
      } ${className}`}
    >
      Consultar
      <Arrow />
    </a>
  );
}

// --- Divider ---
export function Divider() {
  return (
    <div className="w-full h-px bg-border my-0" />
  );
}
