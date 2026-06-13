import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { posts, categories } from "@/data/posts";

const SITE = "https://netmedio.lovable.app";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog Netmedio — PPC, weby, automatizace, analytika" },
      {
        name: "description",
        content:
          "Praktické články o výkonnostním marketingu, Google Ads, Skliku, server-side trackingu a AI automatizaci. Z 15+ let praxe Ing. Tomáše Hurycha.",
      },
      { property: "og:title", content: "Blog Netmedio" },
      {
        property: "og:description",
        content:
          "Praktické články o výkonnostním marketingu, server-side trackingu a AI automatizaci.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog` }],
  }),
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = !activeCat || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, activeCat]);

  const [featured, ...rest] = posts;

  return (
    <div>
      <section className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Blog</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 max-w-3xl">
            Insights z 15 let praxe v digitálním marketingu.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            PPC, weby, server-side tracking, AI automatizace. Žádný copy-paste z anglických blogů —
            jen reálná data a postupy z českých kampaní.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding pt-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid md:grid-cols-2 gap-8 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className="aspect-[16/10] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-border">
              <img
                src={featured.image}
                alt={featured.title}
                width={1280}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="uppercase tracking-wider text-primary">Doporučujeme</span>
                <span>·</span>
                <span>{featured.category}</span>
                <span>·</span>
                <span>{featured.readingTime} min čtení</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                Číst článek <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCat(null)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  !activeCat
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                Vše
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    activeCat === c
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Hledat článek…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-full bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </label>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {filtered.map((p) => (
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
                    Číst článek <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground col-span-full">Žádné články neodpovídají filtru.</p>
            )}
            {/* Spacer to align grid if filtered list excludes featured */}
            {filtered.length > 0 && rest.length === 0 && null}
          </div>
        </div>
      </section>
    </div>
  );
}
