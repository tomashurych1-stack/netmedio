import { ArrowUpRight } from "lucide-react";
import aiWorkflow from "@/assets/blog-ai-workflow.jpg";
import serverTracking from "@/assets/blog-server-tracking.jpg";
import googleAds from "@/assets/blog-google-ads.jpg";

const posts = [
  {
    tag: "Automatizace",
    title: "AI workflow pro malé a střední firmy",
    excerpt:
      "Praktický návod, jak nasadit automatizaci do denního provozu a ušetřit desítky hodin administrativy.",
    date: "Nový článek",
    image: aiWorkflow,
  },
  {
    tag: "Analytika",
    title: "Server-side tracking: Proč standardní GA4 nestačí",
    excerpt:
      "Ztrácíte data kvůli blokátorům reklam a konci cookies? Server-side měření je jediné řešení pro přesný marketing.",
    date: "Nový článek",
    image: serverTracking,
  },
  {
    tag: "Google Ads",
    title: "Jak škálovat Google Ads v roce 2024",
    excerpt:
      "Zapomeňte na staré struktury. Ukážeme vám, jak pracovat se signály a Performance Max kampaněmi pro maximální ROAS.",
    date: "Nový článek",
    image: googleAds,
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
