import { SectionLabel, AnimateOnScroll, Tag } from "@/components/ui";

const skills = [
  "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Web Audio API", "Figma", "Diseño Editorial", "Branding",
  "Motion Design", "React", "Node.js", "Automatización",
];

export function AboutSection() {
  return (
    <section id="studio" className="py-section bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel label="Sobre el Estudio"/>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: big statement */}
          <div className="lg:col-span-6">
            <AnimateOnScroll>
              <h2 className="font-display text-display-xl text-ink leading-[1.0] tracking-[-0.03em] mb-10">
                Frequency{" "}
                <span className="text-violet">Studio</span>{" "}
              </h2>
            </AnimateOnScroll>

            {/* Visual: frequency bars */}
            <AnimateOnScroll delay={150}>
              <div className="relative h-20 flex items-end gap-[3px] mb-10">
                {Array.from({ length: 28 }).map((_, i) => {
                  const heights = [30, 55, 80, 45, 70, 95, 60, 40, 75, 50, 85, 35, 65, 90, 55, 45, 70, 80, 40, 60, 50, 85, 35, 65, 50, 75, 45, 30];
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${heights[i] ?? 40}%`,
                        background: i % 3 === 0 ? "#9340ff" : i % 3 === 1 ? "rgba(147,64,255,0.3)" : "rgba(147,64,255,0.15)",
                        opacity: 0.6 + (i / 28) * 0.4,
                      }}
                    />
                  );
                })}
                <div className="absolute inset-0 bg-gradient-to-r from-base via-transparent to-base pointer-events-none" />
              </div>
            </AnimateOnScroll>

            {/* Skills */}
            
          </div>

          {/* Right: bio */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-between gap-10">
            <AnimateOnScroll delay={100}>
              <div className="space-y-5">
                <p className="text-ink text-body-lg leading-relaxed">
                  Frequency Studio explora la intersección entre creatividad y tecnología, 
                  desarrollando soluciones digitales para artistas, bandas y proyectos culturales.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                 El trabajo parte de comprender los procesos creativos en su contexto real: 
                 desde lanzar música o construir una identidad hasta dar forma a una propuesta 
                 artística desde cero. Ese entendimiento guía el diseño de herramientas digitales 
                 que acompañan y potencian cada proyecto.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                 El estudio desarrolla sitios web, productos digitales y herramientas a medida, 
                 combinando diseño, estrategia y tecnología con un enfoque en claridad, funcionalidad e identidad.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                  Frequency Studio trabaja de forma cercana con cada proyecto, desde la idea inicial hasta la implementación final.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Stats row */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
