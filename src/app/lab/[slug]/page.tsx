import { notFound } from "next/navigation";
import { posts } from "@/data/lab-posts";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  const article = articles[slug];

  if (!post || !article) {
    notFound();
    
  }

  return (
  <main className="max-w-6xl mx-auto px-6 lg:px-12 py-section">
    <header className="max-w-3xl mb-20">
      <p className="font-mono text-label uppercase tracking-[0.2em] text-violet mb-5">
        {post.category} · {post.readTime}
      </p>

      <h1 className="font-display text-display-xl text-ink leading-tight mb-8">
        {post.title}
      </h1>

      <p className="text-xl text-ink-muted leading-relaxed max-w-2xl">
        {post.excerpt}
      </p>
    </header>

    <div className="border-t border-border pt-16">
      <article
        className="
          max-w-3xl
          [&>p]:mb-8
          [&>p]:text-lg
          [&>p]:leading-8
          [&>p]:text-ink
          [&>h2]:mt-16
          [&>h2]:mb-6
          [&>h2]:font-display
          [&>h2]:text-4xl
          [&>h2]:leading-tight
          [&>h2]:text-ink
        "
      >
        {article.content}
      </article>
    </div>
  </main>
);
}