import { SectionLabel } from "@/components/ui";

const services = [
  {
    title: "Landing para artista",
    description:
      "Una landing pensada para músicos y bandas que necesitan presentar su proyecto, destacar un lanzamiento y centralizar su información en un solo lugar.",
    image: "/demos/artist-demo-landing-2.png",
    url: "https://artistdemo.vercel.app/",
    tags: ["Artistas", "Bandas", "Lanzamientos"],
    includes: [
      "Presentación del artista o banda",
      "Lanzamiento destacado",
      "Música y enlaces de escucha",
      "Fechas y presentaciones",
      "Contacto y redes sociales",
    ],
    price: "Desde USD 320",
  },
  {
  
    title: "Portfolio creativo",
    description:
      "Un sitio editorial para mostrar trabajos, proyectos y trayectoria con una presencia digital cuidada y adaptada a la identidad de cada proyecto.",
    image: "/demos/mockup-portfolio-visual.png",
    url: "https://art-visual-portfolio-demo.vercel.app/",
    tags: ["Portfolio", "Editorial", "Artistas visuales"],
    includes: [
      "Presentación personal o de proyecto",
      "Selección de trabajos destacados",
      "información sobre tu práctica y servicios",
      "Contacto y redes sociales",
    ],
    price: "Desde USD 320",
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
    <div className="overflow-hidden border border-border bg-surface">
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
  service: (typeof services)[number];
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

          <a
            href= {service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-violet px-5 py-3.5 font-mono text-label uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-violet"
          >
            Ver demo
            <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="border-t border-border py-section"
    >
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
      </div>
    </section>
  );
}