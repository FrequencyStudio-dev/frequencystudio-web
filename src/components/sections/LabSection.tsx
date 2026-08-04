import Link from "next/link";
import { SectionLabel, AnimateOnScroll } from "@/components/ui";
import type { LabPost } from "@/types";
import { posts } from "@/data/lab-posts";

function PostCard({
  post,
  index,
  large = false,
}: {
  post: LabPost;
  index: number;
  large?: boolean;
}) {
  const categoryColors: Record<string, string> = {
    Proceso: "text-violet",
    Reflexión: "text-ink-muted",
    Tecnología: "text-violet/70",
  };

  return (
    <AnimateOnScroll delay={index * 120}>
      <Link href={`/lab/${post.slug}`}>
        <article
          className={`group cursor-pointer hover:border-violet/30 transition-colors duration-500 ${
            large ? "pb-10 lg:pb-12" : "pb-8 lg:pb-10"
          }`}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <span
              className={`font-mono text-label uppercase tracking-widest ${
                categoryColors[post.category] ?? "text-ink-muted"
              }`}
            >
              {post.category}
            </span>

            <div className="flex items-center gap-3 text-ink-dim/50 flex-shrink-0">
              <span className="font-mono text-label">
                {post.readTime}
              </span>
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
            <span className="font-mono text-label uppercase tracking-widest">
              Leer
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
              />
            </svg>
          </div>
        </article>
      </Link>
    </AnimateOnScroll>
  );
}

export function LabSection() {
  return (
    <section id="lab" className="py-section bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <SectionLabel label="Laboratorio" />

            <h2 className="font-display text-display-xl text-ink leading-tight">
              Proceso,{" "}
              <span className="text-violet">experimentos</span>
              <br className="hidden lg:block" /> y reflexiones
            </h2>
          </div>

          <Link
            href="/lab"
            className="group flex items-center gap-2 font-mono text-label text-ink-muted hover:text-violet uppercase tracking-widest transition-colors duration-200"
          >
            Ver todo el Lab

            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 lg:pr-16 lg:border-r lg:border-border">
            <PostCard post={posts[0]} index={0} large />
          </div>
        </div>

        <AnimateOnScroll delay={300}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="font-mono text-label text-ink-dim uppercase tracking-widest mr-2">
              Temas:
            </span>

            {[
              "Tecnología",
              "Inteligencia Artificial",
              "Recursos",
              "Opinión",
              "Presencia Digital",
            ].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1.5 border border-border-light text-ink-dim font-mono text-label uppercase tracking-wider hover:border-violet/40 hover:text-violet transition-all duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}