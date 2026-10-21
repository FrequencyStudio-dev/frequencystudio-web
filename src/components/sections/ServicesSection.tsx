import { AnimateOnScroll, ConsultButton } from "@/components/ui";
import { SignalDivider } from "@/animations/signal-dividers/SignalDivider";
import type { ExtraService } from "@/types";

type Service = {
  title: string;
  description: string;
  image: string;
  url: string | null;
  tags: string[];
  includes: string[];
  price: string;
};

const services: Service[] = [
  {
    title: "Landing para artistas musicales y bandas",
    description:
      "Una landing pensada para músicos y bandas que necesitan presentar su proyecto, destacar un lanzamiento y centralizar su información en un solo lugar.",
    image: "/demos/artist-demo-landing-2.png",
    url: "https://musicianartistdemo.vercel.app/",
    tags: ["Artistas", "Bandas", "Lanzamientos"],
    includes: [
      "Presentación del artista o banda",
      "Lanzamiento destacado",
      "Música y enlaces de escucha",
      "Fechas y presentaciones",
      "Contacto y redes sociales",
      "Diseño personalizado y adaptado a la identidad del proyecto",
    ],
    price: "Desde USD 320",
  },
  {
  
    title: "Portfolio de proyectos visuales",
    description:
      "Un espacio visual para presentar tus mejores trabajos, destacar tu estilo y mostrar tus proyectos de forma cuidada y profesional",
    image: "/demos/mockup-portfolio-visual.png",
    url: "https://art-visual-portfolio-demo.vercel.app/",
    tags: ["Fotografía", "Editorial", "Artistas visuales"],
    includes: [
      "Presentación personal o de proyecto",
      "Selección de trabajos destacados",
      "información sobre tu práctica y servicios",
      "Contacto y redes sociales",
      "Diseño personalizado y adaptado a la identidad del proyecto",
    ],
    price: "Desde USD 320",
  },
  {
    title: "Sitio web completo para artistas",
    description:
      "Una web multipágina para artistas y bandas con actividad regular, lanzamientos y fechas, que necesitan una presencia más completa y profesional.",
    // TODO: reemplazar por captura de la demo multipágina cuando esté lista
    image: "/demos/artist-demo-landing.png",
    url: null,
    tags: ["Artistas", "Bandas", "Multipágina"],
    includes: [
      "Inicio, biografía y discografía",
      "Fechas y shows",
      "Contacto y redes sociales",
      "Integración con plataformas de música",
      "Diseño personalizado y adaptado a la identidad del proyecto",
    ],
    price: "Desde USD 600",
  },
];

const moreServices: ExtraService[] = [
  {
    title: "Estudios, salas y docentes",
    description:
      "Webs para estudios de grabación, salas de ensayo y docentes de música, con tarifas, equipamiento, portfolio y reservas o agenda.",
  },
  {
    title: "Sellos, colectivos y productoras",
    description:
      "Una estructura para varios artistas o proyectos, con roster, lanzamientos y novedades.",
    price: "Desde USD 1.800",
  },
  {
    title: "Festivales y ciclos",
    description:
      "Sitios para festivales y ciclos de eventos, con lineup, horarios, entradas y galería.",
  },
  {
    title: "Tienda de merch y discos",
    description:
      "Venta online de merch, vinilos y ediciones físicas, integrada a la web de tu proyecto.",
  },
];

function BrowserMockup({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div data-rec-reveal className="overflow-hidden border border-border bg-surface">
      {/* Browser bar */}
      <div className="flex h-10 items-center border-b border-border px-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-dim/50" />
          <span className="h-2 w-2 rounded-full bg-ink-dim/50" />
          <span className="h-2 w-2 rounded-full bg-ink-dim/50" />
        </div>

        <div className="mx-auto hidden border border-border-light px-8 py-1 font-mono text-[9px] uppercase tracking-widest text-ink-dim sm:block">
          {title}
        </div>

        <span className="font-mono text-[9px] text-ink-dim">
          ↗
        </span>
      </div>

      {/* Screenshot */}
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

function ServiceCard({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <article className="group  py-12 lg:py-20">
      <div
        className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Mockup */}
        <div className="lg:col-span-7">
          <BrowserMockup image={service.image} title={service.title} />
        </div>

        {/* Information */}
        <div className="lg:col-span-5 lg:pt-2">
          <div className="mb-8 flex items-center justify-between">

            <span className="font-mono text-label uppercase tracking-widest text-ink-muted">
              {service.price}
            </span>
          </div>

          <h3 className="max-w-lg font-display text-display-lg leading-[0.95] tracking-[-0.03em] text-ink">
            {service.title}
          </h3>

          <p className="mt-6 max-w-md text-body-sm leading-relaxed text-ink-muted">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <span className="font-mono text-label uppercase tracking-[0.15em] text-ink-muted">
              Incluye
            </span>

            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body-sm text-ink-muted"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-violet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.url ? (
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-violet px-5 py-3.5 font-mono text-label uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-violet"
            >
              Ver demo
              <span>↗</span>
            </a>
          ) : (
            <span className="mt-10 inline-flex items-center border border-border px-5 py-3.5 font-mono text-label uppercase tracking-widest text-ink-dim">
              Demo próximamente
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function MoreServiceRow({
  service,
  index,
}: {
  service: ExtraService;
  index: number;
}) {
  return (
    <AnimateOnScroll delay={index * 80}>
      <div className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors duration-500 hover:border-violet/30 lg:grid-cols-12 lg:gap-6 lg:py-10">
        <div className="flex items-start lg:col-span-4">
          <h4 className="font-display text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-violet">
            {service.title}
          </h4>
        </div>

        <div className="flex items-start lg:col-span-5">
          <p className="text-body-sm leading-relaxed text-ink-muted">
            {service.description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:col-span-3 lg:items-end">
          {service.price && (
            <span className="font-mono text-label uppercase tracking-widest text-ink">
              {service.price}
            </span>
          )}
          <ConsultButton
            message={`Hola! Me interesa: ${service.title}`}
            label={service.title}
          />
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative border-t border-border py-section"
    >
      <SignalDivider seed={3} />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
  
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-4xl font-display text-display-xl leading-[0.9] tracking-[-0.04em] text-ink">
              Servicios
            </h2>

            <p className="max-w-md text-body-sm leading-relaxed text-ink-muted">
              Explorá nuestras demos y descubrí qué podemos
              construir para tu proyecto.
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* More services */}
        <div className="mt-16 lg:mt-24">
          <AnimateOnScroll>
            <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="font-display text-display-md leading-tight text-ink">
                  Más proyectos creativos
                </h3>
              </div>
              <div className="flex items-end lg:col-span-6 lg:col-start-7">
                <p className="text-body-sm leading-relaxed text-ink-muted">
                  También diseñamos webs para espacios, sellos, eventos y
                  proyectos que necesitan algo a medida.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div>
            {moreServices.map((service, index) => (
              <MoreServiceRow
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}