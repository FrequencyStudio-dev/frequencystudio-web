import { SectionLabel, AnimateOnScroll, Tag } from "@/components/ui";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: "01",
    title: "Resonance",
    category: "Plataforma de Música",
    year: "2024",
    description:
      "Web y sistema de streaming para un sello independiente. Identidad digital completa, player embebido y dashboard de lanzamientos.",
    tags: ["Next.js", "Audio API", "Diseño"],
    accentColor: "#9340ff",
    index: "01",
  },
  {
    id: "02",
    title: "Arco Festival",
    category: "Experiencia Web",
    year: "2024",
    description:
      "Sitio de festival de arte contemporáneo con galerías interactivas, agenda dinámica y venta de entradas integrada.",
    tags: ["Interacción", "Animación", "E-commerce"],
    accentColor: "#c084fc",
    index: "02",
  },
  {
    id: "03",
    title: "Mira Studio",
    category: "Portfolio Creativo",
    year: "2023",
    description:
      "Portfolio editorial para estudio de fotografía y dirección de arte. Galería inmersiva con transiciones cinematográficas.",
    tags: ["Portfolio", "GSAP", "Diseño Editorial"],
    accentColor: "#7c3aed",
    index: "03",
  },
  {
    id: "04",
    title: "Ondas Toolkit",
    category: "Herramienta Digital",
    year: "2024",
    description:
      "Suite de herramientas para gestión de presencia digital de músicos independientes. Kit de lanzamiento y media kit automatizado.",
    tags: ["SaaS", "Automatización", "Música"],
    accentColor: "#a855f7",
    index: "04",
  },
];

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <AnimateOnScroll
      className={`group relative flex flex-col ${featured ? "lg:col-span-2" : ""}`}
      delay={parseInt(project.id) * 100}
    >
      <div className="relative overflow-hidden border border-border hover:border-violet/40 transition-all duration-500 cursor-pointer">
        {/* Placeholder visual area */}
        <div
          className={`relative w-full bg-surface overflow-hidden ${
            featured ? "h-[420px] lg:h-[520px]" : "h-[280px] lg:h-[340px]"
          }`}
          style={{
            background: `radial-gradient(ellipse 70% 70% at 30% 50%, ${project.accentColor}15 0%, #1a1a1a 70%)`,
          }}
        >
          {/* Abstract visual element */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 400 260"
              className="w-full h-full opacity-30"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id={`g-${project.id}`} cx="50%" cy="50%">
                  <stop offset="0%" stopColor={project.accentColor} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={project.accentColor} stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Grid lines */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 37}
                  x2="400"
                  y2={i * 37}
                  stroke={project.accentColor}
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 36}
                  y1="0"
                  x2={i * 36}
                  y2="260"
                  stroke={project.accentColor}
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
              ))}
              {/* Central circle */}
              <circle
                cx="200"
                cy="130"
                r="60"
                fill={`url(#g-${project.id})`}
                stroke={project.accentColor}
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <circle
                cx="200"
                cy="130"
                r="30"
                fill="none"
                stroke={project.accentColor}
                strokeWidth="1"
                strokeOpacity="0.4"
              />
            </svg>
          </div>

          {/* Project index */}
          <div className="absolute top-4 left-4">
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 border"
              style={{
                borderColor: `${project.accentColor}40`,
                color: project.accentColor,
                background: `${project.accentColor}08`,
              }}
            >
              {project.index}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-violet/0 group-hover:bg-violet/5 transition-all duration-500" />
        </div>

        {/* Card info */}
        <div className="p-6 lg:p-8 border-t border-border bg-surface/50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="font-mono text-label text-ink-dim uppercase tracking-widest block mb-1.5">
                {project.category}
              </span>
              <h3 className="font-display text-display-md text-ink group-hover:text-violet transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <span className="font-mono text-label text-ink-dim mt-1 flex-shrink-0">
              {project.year}
            </span>
          </div>

          <p className="text-ink-muted text-body-sm mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="flex items-center gap-2 text-ink-dim group-hover:text-violet transition-colors duration-300">
              <span className="font-mono text-label uppercase tracking-wider">Ver</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-section bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel label="Proyectos destacados" index="01" />

        {/* Featured project (first, large) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ProjectCard project={projects[0]} featured />
          </div>
          <ProjectCard project={projects[1]} />
        </div>

        {/* Remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} />

          {/* CTA card */}
          <AnimateOnScroll delay={400}>
            <div className="border border-dashed border-border hover:border-violet/40 transition-all duration-500 cursor-pointer group h-full min-h-[200px] flex flex-col items-center justify-center p-8 text-center gap-4">
              <div
                className="w-10 h-10 border border-border group-hover:border-violet/40 flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 text-ink-dim group-hover:text-violet transition-colors duration-300" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-mono text-label text-ink-dim uppercase tracking-widest group-hover:text-ink transition-colors duration-300">
                Ver todos los proyectos
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
