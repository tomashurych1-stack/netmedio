import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Google Ads",
    title: "Jak postavit Google Ads účet, který škáluje",
    excerpt: "Struktura kampaní, signály a měření, které dělají rozdíl mezi ztrátou a růstem.",
    date: "Připravujeme",
  },
  {
    tag: "Automatizace",
    title: "AI workflow pro malé a střední firmy",
    excerpt: "Praktické případy nasazení AI a automatizací v denním provozu.",
    date: "Připravujeme",
  },
  {
    tag: "Analytika",
    title: "Server-side tracking v GA4 — proč a jak",
    excerpt: "Kompletní průvodce přechodem na server-side measurement.",
    date: "Připravujeme",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Blog</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Insights z praxe.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Pravidelné články o výkonnostním marketingu, webech a automatizaci.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="aspect-[16/10] rounded-xl bg-[var(--surface-2)] border border-border mb-6" />
              <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                <span className="uppercase tracking-wider">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
                Číst článek
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
