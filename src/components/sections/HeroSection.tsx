import { AudioGrid } from "@/components/ui/AudioGrid";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-base">
      

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(147, 64, 255, 0.08) 0%, transparent 70%)",
        }}
      />
     
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-40 w-full">
        {/* Label row */}
        <div className="flex items-center gap-4 mb-10 lg:mb-14">
          <div className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
          <span className="font-mono text-label text-ink-dim uppercase tracking-[0.2em]">
            Diseño & Desarrollo
          </span>
          <div className="h-px w-10 bg-violet/30" />
          <span className="font-mono text-label text-ink-dim uppercase tracking-[0.2em]">
            Proyectos Creativos
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-display-2xl text-ink leading-[0.93] tracking-[-0.03em] max-w-5xl mb-8 lg:mb-10">
          Soluciones digitales{" "}
          <br className="hidden lg:block" />
          para{" "}
          <span className="text-violet">artistas</span>
          {", "}
          <br className="hidden lg:block" />
           y proyectos{" "}
          <span className="text-violet">creativos</span>
        </h1>

        {/* Subheadline + scroll cue */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p className="text-ink-muted text-body-lg max-w-xl leading-relaxed">
            Desarrollamos sitios web, herramientas y productos digitales que ayudan a 
            construir y escalar proyectos creativos.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#proyectos"
              className="group flex items-center gap-3 px-6 py-3.5 bg-violet text-ink text-body-sm font-display font-600 uppercase tracking-wider hover:bg-violet/80 transition-all duration-300"
            >
              Ver proyectos
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
            </a>
            <a
              href="#studio"
              className="font-mono text-label text-ink-muted hover:text-ink uppercase tracking-widest transition-colors duration-200"
            >
              El estudio
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 lg:mt-20 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            {["Desarrollo Web", "Diseño de Sistemas", "Productos digitales"].map(
              (item) => (
                <span
                  key={item}
                  className="font-mono text-label text-ink-dim/60 uppercase tracking-wider"
                >
                  {item}
                </span>
              )
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
