import Link from "next/link";
import { posts } from "@/data/lab-posts";

export default function LabPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-section">
      <h1 className="font-display text-display-xl text-ink mb-12">
        Laboratorio
      </h1>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-border pb-8"
          >
            <p className="font-mono text-label uppercase tracking-widest text-violet mb-3">
              {post.category} · {post.readTime}
            </p>

            <h2 className="font-display text-3xl text-ink mb-3">
              <Link
                href={`/lab/${post.slug}`}
                className="hover:text-violet transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            <p className="text-ink-muted max-w-2xl">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}