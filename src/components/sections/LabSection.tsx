import { SectionLabel, AnimateOnScroll } from "@/components/ui";
import type { LabPost } from "@/types";

const posts: LabPost[] = [
  {
    title: "Construyendo presencia digital para un artista desde cero",
    category: "Proceso",
    date: "Dic 2024",
    excerpt:
      "Un recorrido por las decisiones técnicas y de diseño al construir la presencia digital de un músico independiente sin presupuesto publicitario.",
    readTime: "8 min",
  },
  {
    title: "Por qué los músicos necesitan webs propias en 2025",
    category: "Reflexión",
    date: "Nov 2024",
    excerpt:
      "El algoritmo cambia. Las plataformas cambian. Tu dominio propio es el único espacio que controlas completamente.",
    readTime: "5 min",
  },
  {
    title: "Audio API en el browser: experimentos sonoros",
    category: "Tecnología",
    date: "Oct 2024",
    excerpt:
      "Explorando la Web Audio API para crear experiencias sonoras inmersivas directamente en el navegador. Sin plugins, sin dependencias.",
    readTime: "12 min",
  },
];

function PostCard({ post, index, large = false }: { post: LabPost; index: number; large?: boolean }) {
  const categoryColors: Record<string, string> = {
    Proceso: "text-violet",
    Reflexión: "text-ink-muted",
    Tecnología: "text-violet/70",
  };

  return (
    <AnimateOnScroll delay={index * 120}>
      <article className={`group cursor-pointer border-b border-border hover:border-violet/30 transition-colors duration-500 ${large ? "pb-10 lg:pb-12" : "pb-8 lg:pb-10"}`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className={`font-mono text-label uppercase tracking-widest ${categoryColors[post.category] ?? "text-ink-muted"}`}>
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-ink-dim/50 flex-shrink-0">
            <span className="font-mono text-label">{post.readTime}</span>
            <span className="font-mono text-label">{post.date}</span>
          </div>
        </div>

        <h3
          className={`font-display text-ink group-hover:text-violet transition-colors duration-300 mb-3 leading-tight ${
            large ? "text-display-md" : "text-xl"
          }`}
        >
          {post.title}
        </h3>

        <p className="text-ink-muted text-body-sm leading-relaxed max-w-2xl mb-5">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 text-ink-dim group-hover:text-violet transition-colors duration-300">
          <span className="font-mono text-label uppercase tracking-widest">Leer</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </article>
    </AnimateOnScroll>
  );
}

export function LabSection() {
  return (
    <section id="lab" className="py-section bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <SectionLabel label="Laboratorio" index="04" />
            <h2 className="font-display text-display-xl text-ink leading-tight">
              Proceso,{" "}
              <span className="text-gradient-subtle">experimentos</span>
              <br className="hidden lg:block" /> y reflexiones
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 font-mono text-label text-ink-muted hover:text-violet uppercase tracking-widest transition-colors duration-200"
          >
            Ver todo el Lab
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Featured post */}
          <div className="lg:col-span-7 lg:pr-16 lg:border-r lg:border-border">
            <PostCard post={posts[0]} index={0} large />
          </div>

          {/* Secondary posts */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pl-12 flex flex-col">
            {posts.slice(1).map((post, i) => (
              <PostCard key={post.title} post={post} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Tags strip */}
        <AnimateOnScroll delay={300}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="font-mono text-label text-ink-dim uppercase tracking-widest mr-2">
              Temas:
            </span>
            {["Diseño Web", "Música", "Proceso", "Next.js", "Artistas", "Audio API", "Identidad Digital"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-3 py-1.5 border border-border-light text-ink-dim font-mono text-label uppercase tracking-wider hover:border-violet/40 hover:text-violet transition-all duration-200"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
