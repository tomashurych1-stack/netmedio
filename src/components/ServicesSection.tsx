import { LineChart, Code2, Workflow, BarChart3 } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Výkonnostní marketing",
    desc: "Kampaně, které měřitelně zvyšují obrat a poptávky.",
    items: ["Google Ads", "Sklik", "Meta Ads", "Remarketing", "Měření výkonu"],
  },
  {
    icon: Code2,
    title: "Tvorba webů",
    desc: "Rychlé, čisté weby postavené pro konverze.",
    items: ["Firemní weby", "Landing pages", "WordPress", "Loveable", "Cloudflare"],
  },
  {
    icon: Workflow,
    title: "Automatizace",
    desc: "Spojujeme nástroje a šetříme hodiny manuální práce.",
    items: ["AI workflow", "Automatizace procesů", "Reporting", "Integrace nástrojů"],
  },
  {
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
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--gold-soft)] flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{s.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
