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
                  Frequency Studio nace con una idea simple: los artistas independientes y los 
                  proyectos creativos no solo necesitan crear, también necesitan construir una 
                  presencia digital sólida y contar con herramientas que les ayuden a organizar su trabajo.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                  Un sitio web propio permite presentar un proyecto, comunicar su identidad y generar nuevas 
                  oportunidades. Al mismo tiempo, detrás de cada proyecto existen tareas de 
                  organización, presupuestos y gestión que muchas veces consumen tiempo y energía.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                  Por eso desarrollamos sitios web y herramientas digitales que les ayuden a 
                  trabajar mejor y comunicar su identidad. Creamos 
                  sitios web que representan su propuesta y herramientas que simplifican la 
                  gestión, permitiéndoles enfocarse en lo que realmente importa.
                </p>
                <div className="mt-12 border-t border-border pt-10">
                  <p className="font-display text-2xl lg:text-3xl text-ink leading-relaxed">
                   Nuestro objetivo es facilitar la organización del trabajo y fortalecer 
                   la presencia digital de artistas y creadores.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Stats row */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
