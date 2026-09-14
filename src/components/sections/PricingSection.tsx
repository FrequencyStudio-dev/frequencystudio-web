import { SectionLabel, AnimateOnScroll, VioletDot } from "@/components/ui";
import type { PricingTier, ExtraService } from "@/types";

const tiers: PricingTier[] = [
  {
    name: "Presencia",
    tagline: "Una web simple para empezar",
    description:
      "Para artistas y bandas que están comenzando y necesitan un espacio propio donde presentar su proyecto y reunir toda su información.",
    features: [
      { label: "Landing de una página" },
      { label: "Biografía o presentación" },
      { label: "Redes sociales" },
      { label: "Música y contenido embebido" },
      { label: "Información de contacto" },
      { label: "Diseño responsive" },
      { label: "Publicación del sitio" },
    ],
    pricePrefix: "Desde",
    priceValue: "USD 320",
  },
  {
    name: "Profesional",
    tagline: "Una web para acompañar tu proyecto",
    description:
      "Para artistas y bandas con actividad regular, lanzamientos, fechas y contenido que necesitan una presencia web más completa y profesional.",
    features: [
      {
        label: "Sitio web multipágina",
        sub: ["Inicio", "Biografía", "Discografía", "Fechas / shows", "Contacto"],
      },
      { label: "Integración con plataformas de música y redes sociales" },
      { label: "Diseño personalizado" },
      { label: "Diseño responsive" },
      { label: "Publicación del sitio" },
    ],
    pricePrefix: "Desde",
    priceValue: "USD 600",
    featured: true,
  },
  {
    name: "Studio",
    tagline: "Una solución diseñada para tu proyecto",
    description:
      "Para productoras, sellos, colectivos y proyectos que necesitan una estructura web más compleja o funcionalidades específicas.",
    features: [
      { label: "Arquitectura web a medida" },
      { label: "Diseño 100% personalizado" },
      { label: "Estructuras para múltiples artistas o proyectos" },
      { label: "Gestión de contenidos" },
      { label: "Integraciones personalizadas" },
      { label: "Funcionalidades específicas según las necesidades del proyecto" },
    ],
    pricePrefix: "Proyectos desde",
    priceValue: "USD 1.800",
  },
];

const extras: ExtraService[] = [
  {
    title: "Landing de lanzamiento",
    description:
      "Una página enfocada en promocionar un single, EP, videoclip, evento o campaña.",
    price: "Desde USD 250",
  },
  {
    title: "Rediseño visual",
    description:
      "Renovamos la apariencia de un sitio existente, manteniendo su estructura y funcionalidades principales.",
  },
  {
    title: "Rediseño + migración",
    description:
      "Rediseño integral de un sitio existente y migración a una nueva plataforma.",
  },
  {
    title: "SEO",
    description:
      "Analizamos y optimizamos tu sitio para mejorar su visibilidad en buscadores.",
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "Actualizaciones, ajustes y soporte técnico para mantener tu sitio funcionando y actualizado.",
    price: "Desde USD 30 / mes",
  },
];

const WHATSAPP = "59894399771";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

function Arrow() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 6h8M6 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultButton({
  href,
  label,
  variant = "outline",
  className = "",
}: {
  href: string;
  label: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Consultar — ${label}`}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-label uppercase tracking-widest transition-all duration-300 ${
        variant === "solid"
          ? "bg-violet text-ink hover:bg-violet/80"
          : "border border-violet/40 text-violet hover:bg-violet/10 hover:border-violet"
      } ${className}`}
    >
      Consultar
      <Arrow />
    </a>
  );
}

function TierCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <AnimateOnScroll className="h-full" delay={index * 100}>
      <div
        className={`
          group relative h-full flex flex-col transition-all duration-500 p-7 lg:p-8 overflow-hidden
          ${
            tier.featured
              ? "border border-violet/40 bg-surface/50 shadow-[0_0_40px_rgba(147,64,255,0.08)] hover:border-violet/60 hover:shadow-[0_0_60px_rgba(147,64,255,0.15)]"
              : "border border-border bg-surface/30 hover:border-violet/30 hover:bg-surface/60"
          }
        `}
      >
        {/* Name + tagline */}
        <h3 className="font-display text-2xl text-ink leading-snug">
          {tier.name}
        </h3>
        <p className="mt-2 font-mono text-label uppercase tracking-widest text-violet/70">
          {tier.tagline}
        </p>

        <div className="h-px bg-border my-6" />

        <p className="text-ink-muted text-body-sm leading-relaxed">
          {tier.description}
        </p>

        {/* Features */}
        <p className="mt-8 mb-4 font-mono text-label uppercase tracking-widest text-ink-dim">
          Incluye:
        </p>
        <ul className="flex flex-col gap-3">
          {tier.features.map((feature) => (
            <li key={feature.label}>
              <div className="flex items-start gap-3">
                <VioletDot className="mt-[7px]" />
                <span className="text-ink text-body-sm leading-relaxed">
                  {feature.label}
                </span>
              </div>

              {feature.sub && (
                <ul className="mt-2.5 ml-[18px] flex flex-col gap-2 border-l border-border pl-4">
                  {feature.sub.map((item) => (
                    <li
                      key={item}
                      className="text-ink-muted text-body-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto pt-10">
          <div className="h-px bg-border mb-6" />

          <p className="font-mono text-label uppercase tracking-widest text-ink-dim mb-2">
            {tier.pricePrefix}
          </p>
          <p className="font-display text-2xl text-ink">{tier.priceValue}</p>

          <ConsultButton
            href={waLink(`Hola! Me interesa el plan ${tier.name}`)}
            label={tier.name}
            variant={tier.featured ? "solid" : "outline"}
            className="mt-6 w-full"
          />
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function ExtraRow({ extra, index }: { extra: ExtraService; index: number }) {
  return (
    <AnimateOnScroll delay={index * 80}>
      <div className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-8 lg:py-10 border-b border-border hover:border-violet/30 transition-colors duration-500">
        <div className="lg:col-span-4 flex items-start">
          <h4 className="font-display text-xl text-ink group-hover:text-violet transition-colors duration-300 leading-snug">
            {extra.title}
          </h4>
        </div>

        <div className="lg:col-span-5 flex items-start">
          <p className="text-ink-muted text-body-sm leading-relaxed">
            {extra.description}
          </p>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-3 items-start lg:items-end">
          {extra.price && (
            <span className="font-mono text-label uppercase tracking-widest text-ink">
              {extra.price}
            </span>
          )}
          <ConsultButton
            href={waLink(`Hola! Me interesa: ${extra.title}`)}
            label={extra.title}
          />
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function PricingSection() {
  return (
    <section id="paquetes" className="py-section bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <SectionLabel label="Sitios Web" />
          <h2 className="font-display text-display-lg text-ink max-w-4xl leading-tight">
            Elegí la opción que{" "}
            <span className="text-violet">mejor se adapte</span> al momento y las
            necesidades de tu proyecto.
          </h2>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Otros servicios */}
        <div className="mt-24">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
              <div className="lg:col-span-5">
                <h3 className="font-display text-display-md text-ink leading-tight">
                  Otros servicios
                </h3>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="text-ink-muted text-body-sm leading-relaxed">
                  Además de nuestros paquetes, podemos desarrollar soluciones
                  específicas para distintas necesidades de tu proyecto.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div>
            {extras.map((extra, i) => (
              <ExtraRow key={extra.title} extra={extra} index={i} />
            ))}
          </div>
        </div>

        {/* Cierre */}
        <AnimateOnScroll delay={200}>
          <div className="mt-16 p-6 lg:p-8 border border-border-light/50 bg-surface/20">
            <p className="font-display text-display-md text-ink leading-tight">
              ¿No sabés qué opción elegir?
            </p>
            <p className="mt-4 text-ink-muted text-body-sm leading-relaxed max-w-2xl">
              Contanos sobre tu proyecto y te recomendamos la solución que mejor
              se adapte a tus necesidades.
            </p>

            <ConsultButton
              href={waLink("Hola! Quiero consultar sobre mi proyecto")}
              label="¿No sabés qué opción elegir?"
              variant="solid"
              className="mt-6 w-full sm:w-auto"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
