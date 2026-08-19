import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";

const featured = posts.slice(0, 3);

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Blog</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Insights z praxe.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                  <span className="uppercase tracking-wider">{p.category}</span>
                  <span>{p.readingTime} min</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
                  Číst článek
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Zobrazit všechny články
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
