import { SectionLabel, AnimateOnScroll, VioletDot } from "@/components/ui";
import type { Service } from "@/types";

const services: Service[] = [
  {
    title: "Sitios Web",
    description:
       "Sitios web personalizados para artistas y proyectos creativos que buscan una presencia digital profesional y una forma clara de presentar su trabajo.",
   
  },
  {
    title: "Landing Pages de Lanzamiento",
    description:
       "Páginas diseñadas para presentar lanzamientos, eventos y nuevos proyectos, centralizando la información y facilitando la promoción.",
   
  },
  {
    title: "Herramientas Digitales",
    description:
       "Aplicaciones y herramientas desarrolladas para simplificar tareas técnicas, administrativas y de gestión.",
   
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
