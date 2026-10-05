import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "Joy Amorín",
    category: "Música",
    description: "Artista musical independiente y creadora digital.",
    url: "https://joyamorin.com/",
    accentColor: "#c084fc",
    image: "/projects/joy-amorin.png",
  },
   {
    title: "Carina da Costa",
    category: "Noticias/fotografía",
    description: "Portfolio editorial.",
    url: "https://elasilodelabestia.com/",
    accentColor: "#c084fc",
    image: "/projects/editorial.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-surface"
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

      <div className="mt-5">
        <span className="mb-2 block font-mono text-label uppercase tracking-widest text-ink-dim">
          {project.category}
        </span>

        <h3 className="font-display text-display-md leading-none tracking-tight text-ink transition-colors duration-300 group-hover:text-violet">
          {project.title}
        </h3>

        <p className="mt-3 max-w-xl text-body-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="todos-los-proyectos" className="bg-base py-section">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-16 border-t border-border pt-5 lg:mb-24">

          <h2 className="mt-5 max-w-4xl font-display text-display-xl leading-[0.9] tracking-[-0.04em] text-ink">
            Otros proyectos
       
          
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}