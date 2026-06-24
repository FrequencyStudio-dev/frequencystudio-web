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
        <SectionLabel label="Sobre el Estudio" index="05" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: big statement */}
          <div className="lg:col-span-6">
            <AnimateOnScroll>
              <h2 className="font-display text-display-xl text-ink leading-[1.0] tracking-[-0.03em] mb-10">
                Donde la{" "}
                <span className="text-gradient">música</span>{" "}
                se encuentra
                <br />
                con el{" "}
                <span
                  style={{
                    WebkitTextStroke: "1px rgba(147,64,255,0.5)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  código
                </span>
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
            <AnimateOnScroll delay={200}>
              <div>
                <span className="font-mono text-label text-ink-dim uppercase tracking-widest block mb-4">
                  Stack & disciplinas
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: bio */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-between gap-10">
            <AnimateOnScroll delay={100}>
              <div className="space-y-5">
                <p className="text-ink text-body-lg leading-relaxed">
                  Soy diseñador, desarrollador y músico. Llevo años construyendo
                  proyectos en la intersección entre el arte y la tecnología, primero
                  para bandas y proyectos propios, y luego para una comunidad creciente
                  de creadores que necesitan herramientas digitales a su medida.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                  Entiendo el mundo creativo desde adentro. Sé lo que significa lanzar
                  un disco, organizar una exposición o construir una marca artística
                  desde cero. Ese contexto cambia completamente cómo diseño y desarrollo
                  soluciones digitales.
                </p>
                <p className="text-ink-muted text-body-sm leading-relaxed">
                  El estudio trabaja con proyectos pequeños y medianos que quieren
                  presencia digital de alto nivel sin los costes de una agencia grande.
                  Atención personalizada, proceso colaborativo, entrega impecable.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Stats row */}
            <AnimateOnScroll delay={250}>
              <div className="grid grid-cols-3 gap-0 border border-border">
                {[
                  { value: "40+", label: "Proyectos" },
                  { value: "4", label: "Años" },
                  { value: "3", label: "Países" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-5 lg:p-6 ${i < 2 ? "border-r border-border" : ""}`}
                  >
                    <div className="font-display text-3xl text-violet mb-1">{stat.value}</div>
                    <div className="font-mono text-label text-ink-dim uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
