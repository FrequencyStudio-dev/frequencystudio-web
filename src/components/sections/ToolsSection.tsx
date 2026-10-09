import { SectionLabel } from "@/components/ui";
import { SignalDivider } from "@/animations/signal-dividers/SignalDivider";

const tools = [
  {
    title: "Calculadora de Caché",
    description:
      "Calculá cuánto cobrar por tu próximo show considerando gastos, cantidad de integrantes y objetivo de ganancia.",
    image: "/herramientas/calculadora-cache.png",
    tags: ["Shows", "Presupuestos", "Gestión"],
    status: "Beta",
    statusType: "available",
    price: "Gratis",
    href: "https://calculadoracache.vercel.app",
    cta: "Probar herramienta",
  },
  {
    title: "Generador de Setlist",
    description:
      "Organizá tus canciones y prepará el repertorio de tu próximo show de forma rápida y sencilla.",
    image: "/herramientas/generador-setlist.jpg",
    tags: ["Setlists", "Shows", "Repertorio"],
    status: "Próximamente",
    statusType: "soon",
    price: null,
    href: null,
    cta: null,
  },
];

function ToolMockup({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div data-rec-reveal className="overflow-hidden border border-border bg-surface">
      <div className="flex h-9 items-center border-b border-border px-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-dim/50" />
          <span className="h-2 w-2 rounded-full bg-ink-dim/50" />
          <span className="h-2 w-2 rounded-full bg-ink-dim/50" />
        </div>

        <div className="mx-auto hidden border border-border-light px-6 py-1 font-mono text-[9px] uppercase tracking-widest text-ink-dim sm:block">
          {title}
        </div>
      </div>

      <div className="aspect-[16/10] overflow-hidden bg-base">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

function ToolCard({
  tool,
}: {
  tool: (typeof tools)[number];
}) {
  return (
    <article className="group">
      <ToolMockup image={tool.image} title={tool.title} />

      <div className="pt-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="font-mono text-label uppercase tracking-[0.15em] text-violet">
            {tool.status}
          </span>

          <div className="flex flex-wrap justify-end gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest text-ink-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <h3 className="font-display text-display-md leading-none tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-violet">
            {tool.title}
          </h3>

          {tool.price && (
            <span className="font-mono text-label uppercase tracking-widest text-ink-muted text-violet">
              {tool.price}
            </span>
          )}
        </div>
        <p className="mt-3 max-w-xl text-body-sm leading-relaxed text-ink-muted">
          {tool.description}
        </p>

        

        {tool.href ? (
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 border border-violet px-5 py-3 font-mono text-label uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-violet"
          >
            {tool.cta}
            <span>↗</span>
          </a>
        ) : (
          <span className="mt-6 inline-flex items-center border border-border px-5 py-3 font-mono text-label uppercase tracking-widest text-ink-dim">
            Próximamente
          </span>
        )}
      </div>
    </article>
  );
}

export function ToolsSection() {
  return (
    <section id="herramientas" className="relative bg-base py-section">
      <SignalDivider seed={4} />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <SectionLabel label="Herramientas" />

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-4xl font-display text-display-xl leading-[0.9] tracking-[-0.04em] text-ink">
              Herramientas
              <br />
              <span className="text-violet">digitales</span>
            </h2>

            <p className="max-w-md text-body-sm leading-relaxed text-ink-muted">
              Herramientas digitales prácticas para la gestión de tu proyecto.
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-8">
          {tools.map((tool) => (
            <ToolCard key={tool.title} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}