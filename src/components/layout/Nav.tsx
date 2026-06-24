"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Lab", href: "#lab" },
  { label: "Studio", href: "#studio" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-base/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 border border-violet rounded-sm rotate-45 transition-transform duration-300 group-hover:rotate-[225deg]" />
                <div className="absolute inset-[6px] bg-violet rounded-sm" />
              </div>
              <span className="font-display font-700 text-sm tracking-[0.15em] uppercase text-ink">
                Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-mono text-label text-ink-muted hover:text-ink transition-colors duration-200 tracking-widest uppercase"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#contacto")}
                className="hidden lg:flex items-center gap-2 px-4 py-2 border border-violet/40 text-violet text-label uppercase tracking-widest font-mono hover:bg-violet/10 hover:border-violet transition-all duration-300"
              >
                Contacto
              </button>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden flex flex-col gap-[5px] p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <span
                  className={`w-6 h-[1px] bg-ink transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`w-6 h-[1px] bg-ink transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-[1px] bg-ink transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-base/98 backdrop-blur-md flex flex-col justify-center transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 px-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-display-lg text-ink hover:text-violet transition-colors duration-200"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contacto")}
            className="mt-4 px-6 py-3 border border-violet text-violet font-mono text-sm uppercase tracking-widest hover:bg-violet/10 transition-all duration-300"
          >
            Contacto
          </button>
        </nav>
      </div>
    </>
  );
}
