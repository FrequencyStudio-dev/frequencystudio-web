import { SectionLabel, AnimateOnScroll, Tag } from "@/components/ui";
import type { Tool } from "@/types";
import { NewsletterStrip } from "@/components/sections/NewsletterStrip";

const tools: Tool[] = [
  {
    title: "Calculadora de Caché",
    description:
      "Calcula cuánto cobrar por un show considerando gastos, cantidad de integrantes y objetivos de ganancia.",
    status: "beta",
    icon: "◉",
    featured: true,
    href: "https://calculadoracache.vercel.app",
  },
  {
    title: "Constructor de Media Kit",
    description:
      "Crea un media kit profesional para presentar tu proyecto artístico. Organiza biografía, fotos, discografía y enlaces en un formato listo para compartir.",
    status: "próximamente",
    icon: "◈",
    featured: false,
    href: "#",
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
      <div
        className={`
            group relative transition-all duration-500 p-7 lg:p-8 cursor-pointer overflow-hidden
            ${
              tool.featured
                ? "border border-violet/40 bg-surface/50 shadow-[0_0_40px_rgba(147,64,255,0.08)] hover:border-violet/60 hover:shadow-[0_0_60px_rgba(147,64,255,0.15)]"
                : "border border-border bg-surface/30 hover:border-violet/30 hover:bg-surface/60"
            }
          `}
        >

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

        {tool.featured && (
          <div className="mt-5">
            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-label uppercase tracking-widest text-green-400">
              Gratis
            </span>
          </div>
        )}

        {/* Bottom CTA */}
       {tool.href ? (
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 flex items-center gap-2 transition-all duration-300 ${
              tool.featured
                ? "text-ink-dim hover:text-violet"
                : "text-ink-dim/0 group-hover:text-ink-dim"
            }`}
          >
            <span className="font-mono text-label uppercase tracking-widest">
              {tool.featured ? "Probar ahora" : "Notificarme"}
            </span>
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </a>
        ) : (
          <div className="mt-6 flex items-center gap-2 text-ink-dim/0 group-hover:text-ink-dim transition-all duration-300">
            <span className="font-mono text-label uppercase tracking-widest">
              Notificarme
            </span>
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
}

export function ToolsSection() {
  return (
    <section id="herramientas" className="py-section bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="lg:col-span-6">
            <SectionLabel label="Herramientas & Recursos" />
            <h2 className="font-display text-display-xl text-ink max-w-5xl leading-tight">
              Herramientas para{" "}
              <span
                className="text-violet"
              >
                optimizar
              </span>{" "}
            tu flujo de trabajo.
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
        <div className="mt-16">
          <NewsletterStrip />
        </div>
      </div>
    </section>
  );
}
