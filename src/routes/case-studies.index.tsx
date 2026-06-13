import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cases } from "@/data/cases";

const SITE = "https://netmedio.lovable.app";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Případové studie — měřitelné výsledky klientů | Netmedio" },
      {
        name: "description",
        content:
          "Skutečné projekty Netmedia: Google Ads pro e-shopy, B2B weby s měřením a marketingová automatizace. Čísla, postup, ponaučení.",
      },
      { property: "og:title", content: "Případové studie Netmedio" },
      {
        property: "og:description",
        content:
          "Reálné projekty s konkrétními výsledky. Challenge → Solution → Result.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/case-studies` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/case-studies` }],
  }),
  component: CasesIndex,
});

function CasesIndex() {
  return (
    <div>
      <header className="section-padding pt-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Domů</Link></li>
              <li aria-hidden>›</li>
              <li className="text-foreground">Případové studie</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Případové studie</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
            Výsledky, ne sliby.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Vybrané projekty napříč e-commerce, B2B a SaaS. Každá studie obsahuje výchozí situaci,
            postup, použité nástroje a měřitelné výsledky.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group rounded-2xl border border-border bg-card p-8 flex flex-col hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {c.shortTitle}
              </h2>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{c.summary}</p>
              <div className="pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Výsledek</p>
                <p className="text-xl font-semibold text-primary">{c.headlineResult}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Chcete podobný výsledek?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Začneme nezávaznou konzultací nad vaší situací.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              hash="kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Nezávazná konzultace <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sluzby"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
            >
              Naše služby
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
