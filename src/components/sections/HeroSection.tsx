import { AudioGrid } from "@/components/ui/AudioGrid";
import { HeroRecording } from "@/animations/hero-recording/HeroRecording";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
     
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-40 w-full">
        {/* Headline + recording track (right of it on desktop, below on mobile) */}
        <div className="relative">
          <h1 className="font-display text-display-2xl text-ink leading-[0.93] tracking-[-0.03em] max-w-5xl mb-8 lg:mb-10">
            Desarrollo web{" "}
            <br className="hidden lg:block" />
            para{" "}
            <span className="text-violet">artistas</span>
            {", "}
            <br className="hidden lg:block" />
             y proyectos{" "}
            <span className="text-violet">creativos</span>
          </h1>

          <HeroRecording />
        </div>

        {/* Subheadline + scroll cue */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p className="text-ink-muted text-body-lg max-w-xl leading-relaxed">
            Llevamos tu proyecto artístico al siguiente nivel con un sitio web a medida, adaptado a tu identidad y necesidades.
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
            
          </div>
        </div>

        {/* Bottom strip */}
        
      </div>
    </section>
  );
}
