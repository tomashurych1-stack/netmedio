import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  LayoutGrid,
  ShoppingCart,
  FileText,
  Building2,
  Sparkles,
  Bot,
  Code2,
  Server,
  RefreshCw,
} from "lucide-react";
import { SITE } from "@/lib/seo";

import shotNetmedio from "@/assets/portfolio/netmedio.webp";
import shotTomas from "@/assets/portfolio/tomashurych.webp";
import shotMimi from "@/assets/portfolio/mimiplavani.webp";
import shotMasaze from "@/assets/portfolio/masaze-praha2.webp";
import shotPriprava from "@/assets/portfolio/priprava-na-prijimacky.webp";
import shotTapas from "@/assets/portfolio/tapasbarmiro.webp";
import shotUdesign from "@/assets/portfolio/udesign.webp";

const URL = `${SITE}/sluzby/tvorba-webu`;
const TITLE = "Tvorba webových stránek — moderní weby, WordPress i React | Netmedio";
const DESCRIPTION =
  "Navrhujeme a stavíme moderní firemní weby, landing pages a e-commerce řešení. WordPress i rychlý cloudový stack, AI-assisted vývoj, SEO a analytika v ceně. Weby od 20 000 Kč.";

const webTypes = [
  {
    icon: Building2,
    title: "Firemní web",
    desc: "Profesionální prezentace firmy, služeb a referencí. Základ důvěry a akvizice.",
  },
  {
    icon: LayoutGrid,
    title: "Landing page",
    desc: "Jednoúčelová stránka pro kampaň, produkt nebo službu. Navržená pro konverze.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Prodejní řešení pro menší a střední obchody. Napojení na platební brány a dopravu.",
  },
  {
    icon: FileText,
    title: "Microsite a obsahové weby",
    desc: "Samostatné weby pro produkt, kampaň nebo personal branding — rychle a čistě.",
  },
];

const portfolio = [
  {
    img: shotNetmedio,
    name: "Netmedio.cz",
    type: "Firemní web — moderní cloudový stack",
    url: "https://www.netmedio.cz",
  },
  {
    img: shotTomas,
    name: "TomášHurych.cz",
    type: "Personal branding web",
    url: "https://www.tomashurych.cz",
  },
  {
    img: shotMimi,
    name: "MimiPlavani.cz",
    type: "Prezentační web s objednávkami",
    url: "https://www.mimiplavani.cz",
  },
  {
    img: shotMasaze,
    name: "Masaze-Praha2-Rehabilitace.cz",
    type: "Web služeb s rezervacemi",
    url: "https://www.masaze-praha2-rehabilitace.cz",
  },
  {
    img: shotPriprava,
    name: "Priprava-na-prijimacky.cz",
    type: "Vzdělávací web s přihláškami",
    url: "https://www.priprava-na-prijimacky.cz",
  },
  {
    img: shotTapas,
    name: "TapasBarMiro.cz",
    type: "Web restaurace s rezervacemi",
    url: "https://www.tapasbarmiro.cz",
  },
  {
    img: shotUdesign,
    name: "Udesign.cz",
    type: "Web designového studia",
    url: "https://www.udesign.cz",
  },
];

const comparison = [
  {
    label: "Kdy se hodí",
    wp: "Častá redakce obsahu, blog, větší redakční tým, osvědčené pluginy.",
    modern: "Maximální rychlost, prémiový vzhled, landing pages, weby navržené pro výkon.",
  },
  {
    label: "Rychlost a výkon",
    wp: "Závisí na hostingu a kvalitě šablony; vyžaduje průběžnou optimalizaci.",
    modern: "Edge hosting na Cloudflare, minimální JavaScript, Core Web Vitals v zelených číslech.",
  },
  {
    label: "Údržba a bezpečnost",
    wp: "Pravidelné aktualizace jádra a pluginů, vyšší nároky na bezpečnost.",
    modern: "Statické/edge nasazení, minimální útočná plocha, téměř žádná údržba.",
  },
  {
    label: "Rozvoj a integrace",
    wp: "Obrovský ekosystém pluginů, ale riziko nekompatibility.",
    modern: "Čistý kód připravený na API, CRM, rezervace i vlastní funkcionality.",
  },
];

const deliverables = [
  "Strategie, struktura a UX wireframy",
  "Vizuální design sladěný s vaší značkou",
  "Vývoj na WordPressu nebo moderním cloudovém stacku",
  "Responzivita pro mobil, tablet i desktop",
  "Základní on-page SEO (titulky, meta, struktura H1–H3)",
  "Měření přes GA4 a Google Tag Manager",
  "Schema.org strukturovaná data",
  "Optimalizace rychlosti a Core Web Vitals",
  "Napojení formulářů na e-mail nebo CRM",
  "Školení k úpravám obsahu a předání přístupů",
];

const process = [
  {
    title: "1. Úvodní konzultace a brief",
    desc: "Zdarma. Projdeme cíle, cílovou skupinu a konkurenci. Navrhneme rozsah a technologii.",
  },
  {
    title: "2. Struktura a obsah",
    desc: "Informační architektura, wireframy a sběr podkladů. Pomůžeme i s texty a fotografiemi.",
  },
  {
    title: "3. Design",
    desc: "Vizuální návrh klíčových stránek. Schvalujete vždy konkrétní podobu, ne abstraktní sliby.",
  },
  {
    title: "4. Vývoj a naplnění",
    desc: "Naprogramujeme web, naplníme obsahem a připravíme formuláře, měření a integrace.",
  },
  {
    title: "5. Testování a spuštění",
    desc: "Kontrola rychlosti, responzivity, formulářů a SEO. Nasazení na doménu včetně redirectů.",
  },
  {
    title: "6. Podpora po spuštění",
    desc: "Doladění po launchi, školení a možnost průběžné správy, marketingu i rozvoje.",
  },
];

const faq = [
  {
    q: "Kolik stojí firemní web?",
    a: "Jednodušší web nebo landing page od 20 000 Kč, kompletní firemní web od 30 000 Kč. Přesnou cenu potvrdíme po úvodní konzultaci podle rozsahu, obsahu a integrací.",
  },
  {
    q: "Jak dlouho trvá vytvoření webu?",
    a: "Landing page obvykle 2–3 týdny, firemní web 4–8 týdnů od briefu po spuštění. Největší vliv má rychlost dodání podkladů a schvalování.",
  },
  {
    q: "WordPress, nebo moderní stack?",
    a: "Podle potřeby. WordPress doporučujeme tam, kde často upravujete obsah nebo potřebujete osvědčené pluginy. Moderní cloudový stack (React, Cloudflare) tam, kde je prioritou rychlost, výkon a prémiový vzhled. Obojí umíme a poradíme, co dává pro vás smysl.",
  },
  {
    q: "Co když už web mám, ale nefunguje?",
    a: "Začínáme auditem: rychlost, SEO, měření, obsah a konverzní cesta. Podle výsledku doporučíme buď cílené vylepšení, nebo redesign. Někdy stačí málo, jindy se vyplatí stavět znovu.",
  },
  {
    q: "Zajistíte i texty, fotky a logo?",
    a: "Ano. Texty píšeme s využitím AI a ruční korekturou, zajistíme fotobanky i focení a případně navrhneme jednoduchou vizuální identitu.",
  },
  {
    q: "Kdo se o web stará po spuštění?",
    a: "Web předáváme včetně přístupů a školení, takže běžné úpravy zvládnete sami. Pokud chcete, zajistíme průběžnou správu, hosting, aktualizace i další rozvoj.",
  },
];

export const Route = createFileRoute("/sluzby/tvorba-webu")({
  head: () => {
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Služby", item: `${SITE}/sluzby` },
        { "@type": "ListItem", position: 3, name: "Tvorba webů", item: URL },
      ],
    };
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Tvorba webových stránek",
      description: DESCRIPTION,
      provider: { "@type": "Organization", name: "Netmedio", url: SITE },
      areaServed: "CZ",
      serviceType: "Web development",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "20000",
        offerCount: "3",
      },
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: URL },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: [breadcrumbLd, serviceLd, faqLd].map((ld) => ({
        type: "application/ld+json",
        children: JSON.stringify(ld),
      })),
    };
  },
  component: WebDevMicrosite,
});

function CtaButtons({ secondary = true }: { secondary?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/"
        hash="kontakt"
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Nezávazná konzultace
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
      {secondary && (
        <a
          href="#cenik"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
        >
          Ceník webů
        </a>
      )}
    </div>
  );
}

function WebDevMicrosite() {
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
              <li className="text-foreground">Tvorba webů</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Tvorba webových stránek</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            Moderní weby, které přinášejí poptávky.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Navrhujeme a stavíme firemní weby, landing pages a e-commerce řešení — na WordPressu
            i na rychlém cloudovém stacku. Díky AI-assisted vývoji dodáváme rychleji a efektivněji,
            vždy včetně SEO základu a kompletní analytiky.
          </p>
          <CtaButtons />
        </div>
      </header>

      {/* Trust bar */}
      <section aria-label="Důvěra a zkušenosti" className="section-padding pt-0 pb-0">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-card px-6 py-5 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">15+ let zkušeností</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Web + marketing + analytika</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Google Partner</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">SEO a analytika v ceně</span></li>
          </ul>
        </div>
      </section>

      {/* Jaký web potřebujete */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Jaký web potřebujete?</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Řešení pro každou fázi byznysu
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {webTypes.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <t.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vybrané realizace */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Vybrané realizace</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Weby, na kterých jsme pracovali
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[16/9] overflow-hidden border-b border-border">
                  <img
                    src={p.img}
                    alt={`Screenshot webu ${p.name}`}
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{p.type}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Web + marketing + data */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Web + marketing + data</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Web jako celek, ne samostatný díl
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Web není izolovaný projekt. Je to základ celého digitálního ekosystému — reklamy,
            SEO, e-mailingu i měření. Proto ho u nás staví tým, který zároveň řeší výkonnostní
            marketing a analytiku. Výsledek: web, který je od prvního dne připravený získávat
            poptávky a měřit výsledky.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Výkonnostní reklama", "SEO", "E-mail marketing", "AI automatizace", "Analytika a reporting"].map((s) => (
              <span key={s} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Ceník</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Transparentní ceny
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Jednodušší web / Landing page</p>
              <p className="text-2xl font-semibold text-primary mb-3">od 20 000 Kč</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Ideální pro kampaně, microsite nebo menší projekty. Včetně designu, vývoje a měření.</p>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-card p-6 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Firemní web</p>
              <p className="text-2xl font-semibold text-primary mb-3">od 30 000 Kč</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Kompletní profesionální prezentace s měřením, SEO základem a školením.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Rozsáhlejší řešení</p>
              <p className="text-2xl font-semibold text-primary mb-3">individuální nabídka</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Specifické funkce, integrace (CRM, rezervace) nebo e-commerce. Rozsah podle potřeby.</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-2xl">
            Finální cena vždy závisí na rozsahu, obsahu a integracích. Po úvodní konzultaci dostanete
            konkrétní nabídku s pevnou cenou a termínem.
          </p>
        </div>
      </section>

      {/* WordPress vs moderní web */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Technologie</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            WordPress, nebo moderní web?
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10">
            Obojí umíme a obojí dává smysl — vždy podle toho, co váš byznys skutečně potřebuje.
          </p>
          <div className="hidden md:block rounded-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-[180px_1fr_1fr] bg-card border-b border-border">
              <div className="p-5 hidden md:block" />
              <div className="p-5 md:border-l border-border">
                <div className="flex items-center gap-2 font-semibold"><Server className="w-4 h-4 text-primary" /> WordPress</div>
              </div>
              <div className="p-5 md:border-l border-border">
                <div className="flex items-center gap-2 font-semibold"><Code2 className="w-4 h-4 text-primary" /> Moderní web (React / Cloud)</div>
              </div>
            </div>
            {comparison.map((row) => (
              <div key={row.label} className="grid md:grid-cols-[180px_1fr_1fr] border-b border-border last:border-b-0">
                <div className="p-5 text-xs uppercase tracking-wider text-muted-foreground bg-card/50">{row.label}</div>
                <div className="p-5 text-sm text-muted-foreground leading-relaxed md:border-l border-border">{row.wp}</div>
                <div className="p-5 text-sm text-muted-foreground leading-relaxed md:border-l border-border">{row.modern}</div>
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 font-semibold mb-4 pb-4 border-b border-border">
                <Server className="w-4 h-4 text-primary" /> WordPress
              </div>
              <div className="space-y-4">
                {comparison.map((row) => (
                  <div key={row.label}>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{row.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.wp}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 font-semibold mb-4 pb-4 border-b border-border">
                <Code2 className="w-4 h-4 text-primary" /> Moderní web (React / Cloud)
              </div>
              <div className="space-y-4">
                {comparison.map((row) => (
                  <div key={row.label}>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{row.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.modern}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Na úvodní konzultaci doporučíme technologii, která sedí vašemu rozpočtu, týmu i plánům do budoucna.
          </p>
        </div>
      </section>

      {/* AI-assisted development */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-6 h-6 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">AI-assisted development</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Stavíme rychleji díky AI — kvalitu hlídá člověk
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            AI používáme při návrhu struktury, psaní kódu, tvorbě textů i testování. Zkracuje to
            dodací lhůty a snižuje náklady, aniž by utrpěla kvalita. Každý výstup prochází
            seniorskou kontrolou — design, kód i obsah finálně schvaluje člověk s 15+ lety praxe.
          </p>
          <ul className="grid sm:grid-cols-3 gap-3 text-sm">
            {["Rychlejší dodání", "Nižší náklady na vývoj", "Finální lidská kontrola"].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Co dostanete */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Co dostanete</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Kompletní realizace na klíč
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proces */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Proces</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Jak probíhá spolupráce
          </h2>
          <ol className="space-y-3">
            {process.map((step) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Doba realizace */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Doba realizace</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Reálné termíny bez slibů
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-2xl font-semibold text-primary mb-2">2–3 týdny</p>
              <p className="text-sm font-medium mb-1">Landing page</p>
              <p className="text-sm text-muted-foreground">Jednoúčelová stránka pro kampaň nebo produkt.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-2xl font-semibold text-primary mb-2">4–8 týdnů</p>
              <p className="text-sm font-medium mb-1">Firemní web</p>
              <p className="text-sm text-muted-foreground">Kompletní prezentace včetně obsahu, SEO a měření.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-2xl font-semibold text-primary mb-2">Dle rozsahu</p>
              <p className="text-sm font-medium mb-1">Řešení na míru</p>
              <p className="text-sm text-muted-foreground">Integrace, e-commerce nebo specifické funkce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO / AI readiness */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">SEO &amp; AI readiness</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Připravené pro Google i AI vyhledávače
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Každý web dodáváme s technickým SEO základem: správná struktura nadpisů, meta data,
            kanonické URL, sitemap, robots.txt a strukturovaná data schema.org. Díky tomu je web
            čitelný nejen pro Google, ale i pro AI vyhledávače a asistenty (ChatGPT, Perplexity,
            Google AI Overviews), které čím dál víc ovlivňují, jak zákazníci firmy nacházejí.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "Technické SEO a Core Web Vitals v základu",
              "Strukturovaná data (Organization, Service, FAQ)",
              "Čistá HTML struktura čitelná pro AI crawlery",
              "Připraveno pro měření a další rozvoj obsahu",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Už web máte? */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-6 h-6 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Už web máte?</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Audit, vylepšení, nebo redesign
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Nefunguje váš současný web? Provedeme bezplatnou úvodní kontrolu: rychlost, SEO,
            měření, obsah a konverzní cesta. Podle výsledku doporučíme cílené úpravy, nebo nový web —
            vždy s ohledem na návratnost investice.
          </p>
          <Link
            to="/"
            hash="kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
          >
            Chci posoudit svůj web <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Často kladené otázky
          </h2>
          <div className="space-y-3">
            {faq.map((f, i) => (
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

      {/* Final CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Pojďme probrat váš nový web
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            30 minut nezávazné konzultace zdarma. Projdeme vaši situaci, doporučíme technologii
            a navrhneme další krok — bez závazku.
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
              Všechny služby
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
