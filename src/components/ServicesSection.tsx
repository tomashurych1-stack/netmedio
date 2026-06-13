import { LineChart, Code2, Workflow, BarChart3, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    slug: "google-ads",
    icon: LineChart,
    title: "Výkonnostní marketing",
    desc: "Kampaně, které měřitelně zvyšují obrat a poptávky.",
    items: ["Google Ads", "Sklik", "Meta Ads", "Remarketing", "Měření výkonu"],
  },
  {
    slug: "tvorba-webu",
    icon: Code2,
    title: "Tvorba webů",
    desc: "Rychlé, čisté weby postavené pro konverze.",
    items: ["Firemní weby", "Landing pages", "WordPress", "Lovable", "Cloudflare"],
  },
  {
    slug: "marketingova-automatizace",
    icon: Workflow,
    title: "Automatizace",
    desc: "Spojujeme nástroje a šetříme hodiny manuální práce.",
    items: ["AI workflow", "Automatizace procesů", "Reporting", "Integrace nástrojů"],
  },
  {
    slug: "analytika-mereni",
    icon: BarChart3,
    title: "Analytika a měření",
    desc: "Data, na kterých můžete stavět rozhodnutí.",
    items: ["GA4", "Google Tag Manager", "Server-side tracking", "Looker Studio"],
  },
];

export default function ServicesSection() {
  return (
    <section id="sluzby" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Služby</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Jeden partner pro celý digitální růst.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Performance marketing, weby, automatizace a analytika v jednom systému —
            bez agenturní byrokracie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/sluzby/$slug"
              params={{ slug: s.slug }}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--gold-soft)] flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6">{s.desc}</p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                  >
                    {i}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary">
                Detail služby <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/sluzby"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
          >
            Všechny služby <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
