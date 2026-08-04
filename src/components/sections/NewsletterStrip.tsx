"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui";

export function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwVp_RpAbciY5U3fdPdowb4lIXZ0Kx08947wU15yVcFX2glyZT0Q-B7Vuz6hY-2a_i0kw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      setEmail("");
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <AnimateOnScroll delay={400}>
      <div className="mt-10 p-6 lg:p-8 border border-border-light/50 bg-surface/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-ink mb-1">
            Sé el primero en acceder
          </p>

          <p className="text-ink-muted text-body-sm">
            Recibe notificación cuando lancemos nuevas herramientas.
          </p>

          {sent && (
            <p className="mt-3 text-sm text-violet font-mono">
              Gracias por suscribirte.
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-0 w-full sm:w-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="flex-1 sm:w-64 px-4 py-3 bg-base border border-border text-ink text-body-sm font-mono placeholder:text-ink-dim/50 focus:outline-none focus:border-violet/50 transition-colors duration-200"
          />

          <button
            type="submit"
            className="px-5 py-3 bg-violet text-ink text-body-sm font-mono uppercase tracking-widest hover:bg-violet/80 transition-all duration-300 flex-shrink-0"
          >
            Avisar
          </button>
        </form>
      </div>
    </AnimateOnScroll>
  );
}