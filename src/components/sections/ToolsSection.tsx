import { SectionLabel, AnimateOnScroll, Tag } from "@/components/ui";
import type { Tool } from "@/types";

const tools: Tool[] = [
  {
    title: "Constructor de Media Kit",
    description:
      "Genera un media kit profesional en minutos. Biografía, fotos de prensa, discografía y links en un PDF/web listo para enviar.",
    status: "próximamente",
    icon: "◈",
  },
  {
    title: "Kit de Lanzamiento",
    description:
      "Plantillas, checklist y herramientas para lanzar un disco, single o proyecto con una estrategia digital coherente.",
    status: "próximamente",
    icon: "◎",
  },
  {
    title: "Generador de Portfolio",
    description:
      "Crea tu portfolio visual en minutos sin código. Diseños pensados para artistas visuales, fotógrafos y directores creativos.",
    status: "beta",
    icon: "◰",
  },
  {
    title: "Análisis de Presencia",
    description:
      "Auditoría automatizada de tu presencia digital. Redes, web, SEO y posicionamiento con recomendaciones accionables.",
    status: "próximamente",
    icon: "◑",
  },
];

const statusStyles: Record<Tool["status"], string> = {
  próximamente: "border-border-light text-ink-dim",
  disponible: "border-violet/40 text-violet",
  beta: "border-violet/30 text-violet/70",
};

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <AnimateOnScroll delay={index * 100}>
      <div className="group relative border border-border hover:border-violet/30 transition-all duration-500 p-7 lg:p-8 bg-surface/30 hover:bg-surface/60 cursor-pointer overflow-hidden">
        {/* Background glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 20% 20%, rgba(147,64,255,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Icon + status */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-3xl font-display text-ink-dim group-hover:text-violet transition-colors duration-300"
            aria-hidden="true"
          >
            {tool.icon}
          </span>
          <span
            className={`font-mono text-label uppercase tracking-widest px-2.5 py-1 border ${statusStyles[tool.status]}`}
          >
            {tool.status}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-display text-xl text-ink mb-3 group-hover:text-violet/90 transition-colors duration-300 leading-snug">
          {tool.title}
        </h3>
        <p className="text-ink-muted text-body-sm leading-relaxed">
          {tool.description}
        </p>

        {/* Bottom CTA */}
        <div className="mt-6 flex items-center gap-2 text-ink-dim/0 group-hover:text-ink-dim transition-all duration-300">
          <span className="font-mono text-label uppercase tracking-widest">
            Notificarme
          </span>
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function ToolsSection() {
  return (
    <section id="herramientas" className="py-section bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="lg:col-span-6">
            <SectionLabel label="Herramientas & Recursos" index="03" />
            <h2 className="font-display text-display-xl text-ink max-w-5xl leading-tight">
              Herramientas para{" "}
             
              el{" "}
              <span
                className="text-violet"
              >
                proceso
              </span>{" "}
              creativo
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-ink-muted text-body-sm leading-relaxed">
              Estamos construyendo un conjunto de herramientas digitales pensadas
              específicamente para proyectos creativos. Menos fricción, más foco
              en lo que importa.
            </p>
          </div>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {tools.map((tool, i) => (
            <ToolCard key={tool.title} tool={tool} index={i} />
          ))}
        </div>

        {/* Newsletter strip */}
        <AnimateOnScroll delay={400}>
          <div className="mt-10 p-6 lg:p-8 border border-border-light/50 bg-surface/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-display text-lg text-ink mb-1">
                Sé el primero en acceder
              </p>
              <p className="text-ink-muted text-body-sm">
                Recibe notificación cuando lancemos nuevas herramientas.
              </p>
            </div>
            <div className="flex items-center gap-0 w-full sm:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 sm:w-64 px-4 py-3 bg-base border border-border text-ink text-body-sm font-mono placeholder:text-ink-dim/50 focus:outline-none focus:border-violet/50 transition-colors duration-200"
              />
              <button className="px-5 py-3 bg-violet text-ink text-body-sm font-mono uppercase tracking-widest hover:bg-violet/80 transition-all duration-300 flex-shrink-0">
                Avisar
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
