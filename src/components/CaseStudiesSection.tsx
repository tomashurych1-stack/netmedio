import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    industry: "E-commerce / Móda",
    problem: "Vysoká cena za akvizici a klesající ROAS v Google Ads.",
    solution: "Restrukturalizace kampaní, server-side tracking, feed optimalizace.",
    result: "+182 % obrat z PPC za 6 měsíců",
  },
  {
    industry: "B2B / Strojírenství",
    problem: "Web negeneroval poptávky, nulové měření kanálů.",
    solution: "Nový web, GA4, Looker Studio reporting, výkonnostní kampaně.",
    result: "5× více poptávek měsíčně",
  },
  {
    industry: "Služby / SaaS",
    problem: "Manuální zpracování leadů a chybějící automatizace.",
    solution: "AI workflow, CRM integrace, automatický nurturing.",
    result: "−70 % času na administrativě",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Případové studie</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Výsledky, ne sliby.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Vybrané projekty napříč e-commerce, B2B a službami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-border bg-card p-8 flex flex-col hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Problém</p>
                  <p className="text-sm">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Řešení</p>
                  <p className="text-sm">{c.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Výsledek</p>
                <p className="text-xl font-semibold text-primary">{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
