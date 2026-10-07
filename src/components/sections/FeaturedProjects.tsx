
import type { Project } from "@/types";

const projects: Project[] = [
  
  {
    title: "El Asilo de la Bestia",
    category: "Música",
    description: "Banda de rock/metal.",
    url: "https://elasilodelabestia.com/",
    accentColor: "#c084fc",
    image: "/projects/el-asilo-de-la-bestia.png",
  },

   {
    title: "Kurtco Producciones",
    category: "Productora",
    description:
      "Proyecto colectivo orientado a la gestión, producción y difusión de músicos y artistas emergentes.",
    url: "https://kurtcoproducciones.com/",
    accentColor: "#9340ff",
    image: "/projects/kurtco-producciones.png",
  },
  
];

function ProjectImage({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden bg-surface ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

      <span className="absolute bottom-5 right-5 translate-y-2 border border-white/20 bg-base/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Ver proyecto ↗
      </span>
    </a>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-start justify-between gap-6">
        <div>
          <span className="mb-2 block font-mono text-label uppercase tracking-widest text-ink-dim">
            {project.category}
          </span>

          <h3 className="font-display text-display-md leading-none tracking-tight text-ink transition-colors duration-300 group-hover:text-violet">
            {project.title}
          </h3>
        </div>

      </div>

      <p className="max-w-xl text-body-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="proyectos" className="py-section">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 border-t border-border pt-5 lg:mb-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>

              <h2 className="mt-5 max-w-4xl font-display text-display-xl font-display leading-[0.9] tracking-[-0.04em] text-ink">
                Proyectos destacados
              </h2>
            </div>

            <p className="max-w-sm text-body-sm leading-relaxed text-ink-muted">
              Una selección de proyectos digitales desarrollados para
              artistas, bandas y proyectos creativos.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-12 lg:gap-y-20">
          {/* Project 01 */}
          <article className="group lg:col-span-7">
            <ProjectImage
              project={projects[0]}
              className="aspect-[16/10]"
            />
            <ProjectInfo project={projects[0]} />
          </article>

          {/* Project 02 */}
          <article className="group lg:col-span-5">
            <ProjectImage
              project={projects[1]}
              className="aspect-[16/10]"
            />
            <ProjectInfo project={projects[1]} />
          </article>

          {/* Project 03 */}
          
        </div>
      </div>
    </section>
  );
}
