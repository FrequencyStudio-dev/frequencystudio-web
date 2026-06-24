import { SectionLabel, AnimateOnScroll, Tag } from "@/components/ui";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: "01",
    title: "Kurtco Producciones",
    category: "Productora",
    year: "2024",
    description:
      "Proyecto colectivo orientado a la gestión, producción y difusión de músicos y artistas emergentes",
    url: "https://kurtcoproducciones.com/",
    accentColor: "#9340ff",
    index: "01",
    image: "/projects/kurtco-producciones.png",
  },
  {
    id: "02",
    title: "Joy Amorín",
    category: "Música",
    year: "2024",
    description:
      "Artista musical independiente y creadora digital.",
    url: "https://joyamorin.vercel.app/",
    accentColor: "#c084fc",
    index: "02",
    image: "/projects/joy-amorin.png",
  },
  
];

function ProjectCard({ project }: { project: Project; }) {
  return (
    <AnimateOnScroll
      className="group relative flex flex-col"
      delay={parseInt(project.id) * 100}
    >
      <div className="relative overflow-hidden border border-border hover:border-violet/40 transition-all duration-500 cursor-pointer">

        {/* Screenshot visual area */}
        <div
          className="relative w-full bg-surface overflow-hidden h-[420px] lg:h-[320px]"
        >
          {/* Screenshot */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-violet/0 group-hover:bg-violet/5 transition-all duration-500" />

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

            <div className="flex items-center gap-2 text-ink-dim group-hover:text-violet transition-colors duration-300">
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
              <span className="font-mono text-label uppercase tracking-wider">
                Ver proyecto
              </span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 12L12 2M12 2H5M12 2v7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </a>
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
        <SectionLabel label="Proyectos" />

        {/* Remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

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
