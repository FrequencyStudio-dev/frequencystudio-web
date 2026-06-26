import { SectionLabel, AnimateOnScroll, VioletDot } from "@/components/ui";
import type { Service } from "@/types";

const services: Service[] = [
  {
    title: "Sitios Web",
    description:
      "Webs personalizadas construidas desde cero. Diseño y desarrollo a medida para proyectos creativos que necesitan presencia digital sólida y diferenciada.",
    details: ["Diseño personalizado", "Optimización de rendimiento", "SEO técnico"],
  },
  {
    title: "Landing Pages de Lanzamiento",
    description:
      "Páginas de alto impacto para lanzamientos de discos, proyectos y eventos. Diseñadas para convertir y crear expectativa desde el primer scroll.",
    details: ["Diseño en 72h", "Pre-save / Pre-venta", "Seguimiento de resultados", "Construcción de audiencia"],
  },
  {
    title: "Herramientas Digitales",
    description:
      "Herramientas digitales creadas para las necesidades reales de cada proyecto. Menos tareas repetitivas, más tiempo para crear.",
    details: ["Automatización", "Integraciones", "Paneles de gestión", "Procesos personalizados"],
  },
];

function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <AnimateOnScroll delay={index * 120}>
      <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 py-10 lg:py-12 border-b border-border hover:border-violet/30 transition-colors duration-500 cursor-pointer">
        {/* Index */}
        <div className="lg:col-span-1 flex items-start">
          <span className="font-mono text-label text-ink-dim/40 mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <div className="lg:col-span-4 flex items-start">
          <h3 className="font-display text-display-md text-ink group-hover:text-violet transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="lg:col-span-4 flex items-start">
          <p className="text-ink-muted text-body-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Details */}
        <div className="lg:col-span-3 flex flex-col gap-2 lg:items-end">
          {service.details.map((detail) => (
            <div key={detail} className="flex items-center gap-2">
              <VioletDot className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-mono text-label text-ink-dim uppercase tracking-wider">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-section bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          
            <SectionLabel label="Servicios" />
            <h2 className="font-display text-display-xl text-ink max-w-3xl leading-tight">
              Lo que{" "}
              <span className="text-violet">construimos</span>{" "}
              juntos
            </h2>
          
          <p className="text-ink-muted text-body-sm max-w-4xl leading-relaxed">
            Trabajamos con músicos, artistas visuales, colectivos y proyectos
            culturales. Si tienes algo que contar, construimos el espacio digital
            para contarlo.
          </p>
        </div>

        {/* Services list */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={500}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#contacto"
              className="group flex items-center gap-3 px-6 py-3.5 border border-violet text-violet font-mono text-label uppercase tracking-widest hover:bg-violet/10 transition-all duration-300"
            >
              Hablemos de tu proyecto
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span className="font-mono text-label text-ink-dim">
              Respuesta en menos de 48h
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
