import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Globe } from "lucide-react";
import type { PpcPlatform } from "@/data/ppc-platforms";
import { SITE } from "@/lib/seo";

export function platformHead(p: PpcPlatform) {
  const url = `${SITE}/sluzby/${p.slug}`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Služby", item: `${SITE}/sluzby` },
        { "@type": "ListItem", position: 3, name: "Výkonnostní reklama", item: `${SITE}/sluzby/vykonnostni-reklama` },
        { "@type": "ListItem", position: 4, name: p.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.h1,
      description: p.description,
      provider: { "@type": "Organization", name: "Netmedio", url: SITE },
      areaServed: "CZ",
      serviceType: p.name,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: ld.map((x) => ({ type: "application/ld+json", children: JSON.stringify(x) })),
  };
}

function PrimaryCta() {
  return (
    <Link
      to="/"
      hash="kontakt"
      className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
    >
      Nezávazná konzultace
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{title}</h2>
      {intro && <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">{intro}</p>}
    </>
  );
}

export default function PlatformServicePage({ p }: { p: PpcPlatform }) {
  return (
    <article>
      <div className="section-padding pt-8 pb-0">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Domů</Link></li>
              <li aria-hidden>›</li>
              <li><Link to="/sluzby" className="hover:text-foreground">Služby</Link></li>
              <li aria-hidden>›</li>
              <li><Link to="/sluzby/vykonnostni-reklama" className="hover:text-foreground">Výkonnostní reklama</Link></li>
              <li aria-hidden>›</li>
              <li className="text-foreground">{p.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{p.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">{p.h1}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">{p.lead}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {p.chips.map((c) => (
              <span key={c} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">{c}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryCta />
            <a href="#pristup" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors">
              Jak pracujeme
            </a>
          </div>
        </div>
      </header>

      {/* Vysvětlení */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-14 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Jak služba funguje</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{p.explanationTitle}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{p.explanation}</p>
        </div>
      </section>

      {/* Pro koho */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Pro koho" title={p.audienceTitle} intro={p.audienceIntro} />
          <div className="grid md:grid-cols-3 gap-4">
            {p.audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-l-2 border-primary/40 pl-5 py-1 max-w-3xl">
            <h3 className="font-semibold mb-2">Kdy služba nemusí být vhodná</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.notSuitable}</p>
          </div>
        </div>
      </section>

      {/* Co spravujeme */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Co spravujeme" title={p.scopeTitle} intro={p.scopeIntro} />
          <div className="grid md:grid-cols-2 gap-4">
            {p.scope.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Očekávání */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Co očekávat" title={p.expectationsTitle} intro={p.expectationsIntro} />
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {p.expectations.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/90">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Přístup */}
      <section id="pristup" className="section-padding pt-0 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Náš přístup" title={p.processTitle} />
          <ol className="grid gap-4">
            {p.process.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card p-6 flex gap-5">
                <span className="text-primary font-semibold text-lg tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Průběžné CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto border-y border-border py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Nevíte, zda je {p.name} správný kanál?</h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">Projdeme vaši nabídku, současný marketing a možnosti měření. Doporučíme další krok bez závazku.</p>
          </div>
          <div className="shrink-0"><PrimaryCta /></div>
        </div>
      </section>

      {/* Rozsah správy */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Pravidelná správa" title={p.managementTitle} intro={p.managementIntro} />
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-4">
            <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
              <ul className="grid gap-4">
                {p.management.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
              <h3 className="text-lg font-semibold mb-3">Máte už existující účet?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.existingAccount}</p>
            </div>
          </div>
          {p.price && (
            <div className="mt-4 rounded-2xl border border-primary/30 bg-card p-6 md:px-8 flex gap-4 items-start">
              <span className="text-primary font-semibold shrink-0">Cena</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.price}</p>
            </div>
          )}
        </div>
      </section>

      {/* Měření */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Měření a optimalizace</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{p.measureTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{p.measureIntro}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {p.measure.map((m) => (
              <li key={m} className="flex gap-2 text-sm text-foreground/90">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/sluzby/$slug"
            params={{ slug: "analytika-reporting" }}
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            Více o měření a analytice <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Související */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Související služby" title="Co s tím souvisí" />
          <div className="grid md:grid-cols-3 gap-4">
            {p.related.map((r) => (
              <Link
                key={r.label}
                to={r.to}
                params={r.params as never}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{r.label}</h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="FAQ" title={`Časté otázky: ${p.name}`} />
          <div className="border-t border-border">
            {p.faq.map((f) => (
              <details key={f.q} className="group border-b border-border py-5">
                <summary className="cursor-pointer list-none flex justify-between gap-4 font-medium">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{p.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{p.ctaText}</p>
          <div className="flex justify-center">
            <PrimaryCta />
          </div>
        </div>
      </section>
    </article>
  );
}
