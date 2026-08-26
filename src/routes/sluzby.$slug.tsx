import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { getServiceBySlug, services, pricingNote } from "@/data/services";
import { cases } from "@/data/cases";
import { posts } from "@/data/posts";

const SITE = "https://www.netmedio.cz";

const aiAutomationAreas = [
  {
    title: "Leady a obchod",
    items: [
      "automatické zpracování nových poptávek",
      "AI kvalifikace leadů",
      "zápis poptávky do CRM",
      "doplnění a strukturování informací",
      "přiřazení leadu správnému obchodníkovi",
      "automatické upozornění týmu",
      "follow-up komunikace",
      "rezervace schůzek",
      "příprava návrhu odpovědi pomocí AI",
    ],
  },
  {
    title: "Marketing",
    items: [
      "propojení webových formulářů s dalšími systémy",
      "automatizace e-mailových workflow",
      "segmentace kontaktů",
      "příprava a repurposing obsahu",
      "AI zpracování marketingových podkladů",
      "automatické předávání dat mezi marketingovými nástroji",
      "personalizace komunikace",
      "automatizace rutinních marketingových úkolů",
    ],
  },
  {
    title: "Reporting a analytika",
    items: [
      "automatický sběr dat z Google Ads, Meta Ads, GA4 a dalších zdrojů",
      "propojení marketingových dat s CRM",
      "pravidelné reporty",
      "automatická aktualizace dashboardů",
      "AI shrnutí výsledků",
      "upozornění na významné změny ve výkonu",
      "distribuce reportů e-mailem nebo do Slacku / Teams",
    ],
  },
  {
    title: "CRM a zákaznická data",
    items: [
      "automatické vytváření a aktualizace kontaktů",
      "synchronizace dat mezi systémy",
      "enrichment dat",
      "změny stavů leadů podle událostí",
      "automatické úkoly pro obchodní tým",
      "deduplikace a strukturování dat",
      "napojení CRM na web, e-mail a marketing",
    ],
  },
  {
    title: "Interní procesy",
    items: [
      "přenos dat mezi aplikacemi",
      "zpracování příchozích e-mailů",
      "zpracování dokumentů",
      "extrakce informací pomocí AI",
      "schvalovací workflow",
      "automatické notifikace",
      "práce s tabulkami a databázemi",
      "administrativní workflow",
      "automatizace opakovaných interních úkolů",
    ],
  },
  {
    title: "AI asistenti",
    items: [
      "interní AI asistent nad firemními informacemi",
      "třídění a shrnutí informací",
      "návrhy odpovědí",
      "práce s dokumenty",
      "kategorizace požadavků",
      "analýza textových dat",
      "příprava podkladů pro zaměstnance",
      "AI jako součást většího automatizovaného workflow",
    ],
  },
];

const aiWorkflows = [
  {
    title: "Nová poptávka",
    steps: [
      "Webový formulář",
      "AI vyhodnotí obsah poptávky",
      "Lead se zapíše do CRM",
      "Přiřadí se správné osobě",
      "Obchodník dostane upozornění",
      "Připraví se návrh odpovědi",
    ],
  },
  {
    title: "Marketingový reporting",
    steps: [
      "Google Ads + Meta Ads + GA4 + CRM",
      "Automatický sběr dat",
      "Spojení dat",
      "Aktualizace dashboardu",
      "AI shrnutí výsledků",
      "Report dorazí odpovědné osobě",
    ],
  },
  {
    title: "Zpracování dokumentů",
    steps: [
      "E-mail / PDF / dokument",
      "AI dokument zpracuje",
      "Vytáhne potřebné informace",
      "Data strukturuje",
      "Uloží je do firemního systému",
      "Spustí navazující workflow",
    ],
  },
  {
    title: "Interní AI asistent",
    steps: [
      "Dotaz zaměstnance",
      "AI pracuje s dostupnými firemními podklady",
      "Najde relevantní informace",
      "Připraví odpověď nebo podklad",
      "Člověk výsledek zkontroluje a použije",
    ],
  },
];


export const Route = createFileRoute("/sluzby/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { slug: params.slug };
  },
  notFoundComponent: () => (
    <div className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4">Služba nenalezena</h1>
        <Link to="/sluzby" className="text-primary">Zpět na služby</Link>
      </div>
    </div>
  ),
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const service = getServiceBySlug(loaderData.slug);
    if (!service) return {};
    const url = `${SITE}/sluzby/${params.slug}`;
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Služby", item: `${SITE}/sluzby` },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: url },
      ],
    };
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.shortTitle,
      description: service.metaDescription,
      provider: {
        "@type": "Organization",
        name: "Netmedio",
        url: SITE,
      },
      areaServed: "CZ",
      serviceType: service.category,
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [breadcrumbLd, serviceLd, faqLd].map((ld) => ({
        type: "application/ld+json",
        children: JSON.stringify(ld),
      })),
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const service = getServiceBySlug(slug)!;
  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));
  const relatedCases = cases.filter((c) => service.relatedCases.includes(c.slug));
  const relatedPosts = posts.filter((p) => service.relatedPosts.includes(p.slug));

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="section-padding pt-8 pb-0">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Domů</Link></li>
              <li aria-hidden>›</li>
              <li><Link to="/sluzby" className="hover:text-foreground">Služby</Link></li>
              <li aria-hidden>›</li>
              <li className="text-foreground">{service.shortTitle}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{service.category}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {service.heroIntro}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-10">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hlavní přínos</p>
              <p className="text-sm text-foreground/90 leading-relaxed">{service.benefit}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pro koho</p>
              <p className="text-sm text-foreground/90 leading-relaxed">{service.audience}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              hash="kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Nezávazná konzultace
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#cenik"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
            >
              Ceník služby
            </a>
          </div>
        </div>
      </header>

      {/* Trust bar */}
      <section aria-label="Důvěra a zkušenosti" className="section-padding pt-0 pb-0">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-card px-6 py-5 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">15+ let zkušeností</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">100+ projektů</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Google Partner</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Klienti v ČR i EU</span></li>
          </ul>
        </div>
      </section>

      {/* Problems */}
      <section id="problemy" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">S čím klienti přicházejí</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Typické problémy a jejich obchodní dopad
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.problems.map((p) => (
              <div key={p.symptom} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Symptom</p>
                <h3 className="text-lg font-semibold mb-3">{p.symptom}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Dopad</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Možnosti automatizace */}
      {service.slug === "ai-automatizace" && (
        <section id="moznosti-automatizace" className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Možnosti automatizace</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Co můžeme ve firmě automatizovat
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Od jednoduchého předávání dat mezi aplikacemi až po workflow propojující marketing, obchod, CRM a AI. Největší smysl mají automatizace u procesů, které se často opakují, zabírají lidem čas nebo zbytečně zpomalují práci s daty a zákazníky.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiAutomationAreas.map((area) => (
                <div key={area.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold mb-3">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Příklady workflow */}
      {service.slug === "ai-automatizace" && (
        <section id="priklady-workflow" className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Příklady workflow</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
              Od ručního procesu k automatickému workflow
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {aiWorkflows.map((w) => (
                <div key={w.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold mb-4">{w.title}</h3>
                  <div className="flex flex-col gap-2">
                    {w.steps.map((step, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground text-center leading-snug">
                          {step}
                        </div>
                        {i < w.steps.length - 1 && (
                          <ArrowDown className="w-4 h-4 text-primary shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Začít můžeme jedním procesem */}
      {service.slug === "ai-automatizace" && (
        <section id="zacatek" className="section-padding pt-0">
          <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Začít můžeme jedním procesem
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Automatizace nemusí znamenat velký transformační projekt. Často dává větší smysl začít jedním konkrétním workflow, které dnes zabírá zbytečně mnoho času. Po ověření přínosu můžeme řešení postupně rozšiřovat a propojovat s dalšími procesy.
            </p>
            <Link
              to="/"
              hash="kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Probrat možnosti automatizace
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      )}

      {/* Approach */}

      <section id="postup" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Jak to děláme</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Postup spolupráce
          </h2>
          <ol className="space-y-3">
            {service.approach.map((step) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Includes + Tools */}
      <section id="obsah" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Co je v ceně</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Konkrétní výstupy služby
            </h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Nástroje</p>
            <h2 className="text-xl font-semibold mb-4">Pracujeme s</h2>
            <ul className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <li key={t} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Outcomes */}
      <section id="vysledky" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Očekávané výsledky</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Realistické KPI a obchodní dopad
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {service.outcomes.map((o) => (
              <div key={o.kpi} className="bg-card p-6">
                <div className="text-xl md:text-2xl font-semibold text-primary mb-2">{o.value}</div>
                <div className="text-sm text-muted-foreground">{o.kpi}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Konkrétní KPI a cíle vždy definujeme na začátku spolupráce podle vaší situace a dostupných dat.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="cenik" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Ceník</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Transparentní ceny
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {service.pricing.map((p, i) => (
              <div key={p.tier} className={`rounded-2xl border bg-card p-6 flex flex-col ${i === 1 ? "border-primary/40" : "border-border"}`}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{p.tier}</p>
                <p className="text-2xl font-semibold text-primary mb-3">{p.range}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-2xl">{service.pricingNote ?? pricingNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Často kladené otázky
          </h2>
          <div className="space-y-3">
            {service.faq.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-foreground font-medium">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Související služby</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
              Často kombinujeme s
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to="/sluzby/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {s.shortTitle}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.benefit}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                    Detail služby <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Výsledky v praxi</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
              Jak to dopadlo v praxi
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
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
                      <p className="text-xs text-muted-foreground mb-1">Výchozí situace</p>
                      <p className="text-sm">{c.initialSituation[0]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Co jsme změnili</p>
                      <p className="text-sm">{c.solution.map((s) => s.heading.replace(/^\d+\.\s*/, "")).join(", ")}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">Výsledek</p>
                    <p className="text-xl font-semibold text-primary">{c.headlineResult}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary/90 group-hover:text-primary">
                      Detail případové studie <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Z blogu</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
              Pokračujte ve čtení
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors flex flex-col"
                >
                  <div className="aspect-[16/8] overflow-hidden border-b border-border">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={640}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                      <span className="uppercase tracking-wider">{p.category}</span>
                      <span>{p.readingTime} min</span>
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary/90 group-hover:text-primary">
                      Číst článek <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <service.icon className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Pojďme se k tomu pobavit
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            30 minut nezávazné konzultace. Projdeme vaši situaci a navrhneme další krok — bez závazku.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              hash="kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Nezávazná konzultace
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/sluzby"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
            >
              Všechny služby
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
