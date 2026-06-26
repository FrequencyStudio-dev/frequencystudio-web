import { AnimateOnScroll } from "@/components/ui";

export function ContactSection() {
  return (
    <section id="contacto" className="py-section bg-base border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Big CTA headline */}
          <div className="lg:col-span-8">
            <AnimateOnScroll>
              <h2 className="font-display text-display-2xl text-ink leading-[0.93] tracking-[-0.03em] mb-10">
                Cuentanos sobre tu
               
                {" "}
                <span className="text-violet">proyecto</span>
              </h2>

              <a
                href="mailto:hola@studio.com"
                className="group inline-flex items-center gap-4"
              >
                <span className="font-display text-display-lg text-ink group-hover:text-violet transition-colors duration-300">
                  hola@studio.com
                </span>
                <div className="w-10 h-10 border border-ink/20 group-hover:border-violet flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-ink/40 group-hover:text-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 13L13 3M13 3H6M13 3v7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-4">
            <AnimateOnScroll delay={200}>
              <div className="border border-border p-6 lg:p-8 space-y-5">
                <h3 className="font-display text-lg text-ink mb-6">
                  Cuéntame sobre tu proyecto
                </h3>

                <div>
                  <label className="font-mono text-label text-ink-dim uppercase tracking-widest block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-base border border-border text-ink text-body-sm font-body placeholder:text-ink-dim/50 focus:outline-none focus:border-violet/50 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="font-mono text-label text-ink-dim uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-base border border-border text-ink text-body-sm font-body placeholder:text-ink-dim/50 focus:outline-none focus:border-violet/50 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="font-mono text-label text-ink-dim uppercase tracking-widest block mb-2">
                    Proyecto
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntame sobre lo que tienes en mente..."
                    className="w-full px-4 py-3 bg-base border border-border text-ink text-body-sm font-body placeholder:text-ink-dim/50 focus:outline-none focus:border-violet/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  className="w-full py-3.5 bg-violet text-ink font-display font-600 text-sm uppercase tracking-wider hover:bg-violet/80 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Enviar mensaje
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="font-mono text-label text-ink-dim/50 text-center">
                  Respondo en menos de 48h
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
