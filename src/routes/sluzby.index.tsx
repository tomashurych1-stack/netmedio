import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const SITE = "https://netmedio.lovable.app";

export const Route = createFileRoute("/sluzby/")({
  head: () => ({
    meta: [
      { title: "Služby — výkonnostní marketing, weby, automatizace | Netmedio" },
      {
        name: "description",
        content:
          "Kompletní digitální služby: Google Ads, PPC správa, tvorba webů, marketingová automatizace, analytika a konzultace. Google Partner od roku 2010.",
      },
      { property: "og:title", content: "Služby Netmedio — digital growth partner od roku 2010" },
      {
        property: "og:description",
        content:
          "Výkonnostní marketing, moderní weby, automatizace a analytika v jednom týmu. Google Partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/sluzby` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/sluzby` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div>
      <header className="section-padding pt-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Domů</Link></li>
              <li aria-hidden>›</li>
              <li className="text-foreground">Služby</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Služby</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
            Jeden partner pro celý digitální růst.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Výkonnostní marketing, weby, automatizace a analytika v jednom týmu — propojené
            jedním měřením a jednou strategií.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/sluzby/$slug"
              params={{ slug: s.slug }}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--gold-soft)] flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{s.shortTitle}</h2>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6">{s.benefit}</p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {s.tools.slice(0, 5).map((t) => (
                  <li key={t} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Nejste si jistí, kterou službu potřebujete?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            30 minut nezávazné konzultace stačí, abychom doporučili konkrétní další krok.
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
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
            >
              Případové studie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
