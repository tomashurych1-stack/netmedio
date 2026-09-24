import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  ShoppingCart,
  Building2,
  Handshake,
  BarChart3,
  Database,
  RefreshCw,
  Award,
} from "lucide-react";
import { SITE } from "@/lib/seo";
import { cases } from "@/data/cases";
import { posts } from "@/data/posts";
import partnerBadge from "@/assets/google-partner-badge.png";

const URL = `${SITE}/sluzby/vykonnostni-reklama`;
const TITLE = "PPC reklama a správa kampaní | Google Ads, Sklik, Meta Ads | Netmedio";
const DESCRIPTION =
  "Správa PPC kampaní pod jednou střechou: Google Ads, Sklik, Meta Ads, Performance Max, Heureka.cz i produktové feedy. Reklamu propojujeme s webem, měřením a daty. Správa od 5 000 Kč / měsíc.";

const channels = [
  {
    title: "Google Ads",
    chips: ["Search", "Performance Max", "Shopping", "Demand Gen", "YouTube", "Remarketing"],
    desc: "Od zachycení existující poptávky ve vyhledávání až po akvizici nových zákazníků a produktové kampaně pro e-shopy.",
    to: "/sluzby/google-ads",
  },
  {
    title: "Sklik & Seznam",
    chips: ["Search", "Obsahová síť", "Remarketing", "Dynamický retargeting", "Zboží.cz"],
    desc: "Výkonnostní kampaně v českém ekosystému Seznamu jako doplněk Google Ads nebo samostatný akviziční kanál.",
    to: "/sluzby/sklik",
  },
  {
    title: "Meta Ads",
    chips: ["Facebook", "Instagram", "Akvizice", "Remarketing", "Katalogové kampaně"],
    desc: "Meta Ads používáme pro získávání nové poptávky, podporu e-commerce i opětovné oslovení návštěvníků.",
    to: "/sluzby/meta-ads",
  },
  {
    title: "Produktové srovnávače",
    chips: ["Heureka.cz", "Zboží.cz", "Glami", "Produktové feedy"],
    desc: "Správa produktové inzerce, feedů a srovnávačů tak, aby e-shop využíval celý svůj výkonnostní potenciál.",
    to: "/sluzby/produktove-srovnavace",
  },
  {
    title: "Měření & analytika",
    chips: ["GA4", "Google Tag Manager", "Consent Mode", "Enhanced Conversions", "Server-side tracking"],
    desc: "Bez kvalitních dat nelze kampaně správně optimalizovat. Proto řešíme také technickou stránku měření.",
    to: "/sluzby/$slug",
    slug: "analytika-reporting",
  },
] as const;

const audiences = [
  {
    icon: ShoppingCart,
    title: "E-shopy",
    items: [
      "Google Shopping",
      "Performance Max",
      "Search",
      "Meta Ads",
      "Remarketing",
      "Merchant Center",
      "Heureka / Zboží / Glami",
      "Produktové feedy",
    ],
  },
  {
    icon: Building2,
    title: "B2B",
    items: [
      "Zachycení relevantní poptávky",
      "Search kampaně",
      "Remarketing",
      "Landing pages",
      "Měření leadů",
      "Offline konverze",
    ],
  },
  {
    icon: Handshake,
    title: "Služby",
    items: [
      "Lokální i celorepublikové kampaně",
      "Google Ads",
      "Sklik",
      "Meta Ads",
      "Formuláře a telefonní konverze",
      "Optimalizace podle ceny za poptávku",
    ],
  },
];

const scope = [
  {
    title: "Kampaně",
    items: ["Google Ads", "Sklik", "Meta Ads", "YouTube Ads", "Remarketing"],
  },
  {
    title: "E-commerce",
    items: [
      "Google Merchant Center",
      "Shopping",
      "Performance Max",
      "Heureka.cz",
      "Zboží.cz",
      "Glami",
      "Produktové feedy",
    ],
  },
  {
    title: "Měření",
    items: [
      "GA4",
      "Google Tag Manager",
      "Enhanced Conversions",
      "Consent Mode",
      "Server-side tracking",
      "Offline konverze",
    ],
  },
  {
    title: "Optimalizace",
    items: [
      "Struktura účtu",
      "Nabídkové strategie",
      "Vyhledávací dotazy",
      "Publika",
      "Kreativy",
      "Landing pages",
      "A/B testování",
    ],
  },
  {
    title: "Reporting",
    items: [
      "Pravidelné vyhodnocení",
      "ROAS",
      "CPA",
      "Obrat",
      "Leady",
      "Doporučení dalších kroků",
    ],
  },
];

const kpis = [
  {
    title: "E-shop",
    items: ["Tržby", "ROAS", "PNO", "Marže", "Počet objednávek"],
  },
  {
    title: "Lead generation",
    items: ["Počet relevantních poptávek", "CPA / CPL", "Kvalita leadů", "Obchodní výsledek"],
  },
  {
    title: "B2B",
    items: ["Relevantní leady", "Kvalifikované příležitosti", "Offline konverze", "Dlouhodobá návratnost"],
  },
];

const caseSlugs = ["google-ads-eshop-moda", "b2b-web-analytika", "automatizace-lead-generation"];
const featuredCases = caseSlugs
  .map((slug) => cases.find((c) => c.slug === slug))
  .filter((c): c is (typeof cases)[number] => Boolean(c));

const ppcPostSlugs = [
  "kolik-stoji-ppc-kampane-2026",
  "google-ads-vs-sklik",
  "jak-poznat-dobrou-ppc-agenturu",
  "server-side-tracking-standard",
];
const ppcPosts = ppcPostSlugs
  .map((slug) => posts.find((p) => p.slug === slug))
  .filter((p): p is (typeof posts)[number] => Boolean(p));

const process = [
  {
    title: "01 — Audit a měření",
    desc: "Projdeme současné kampaně, účty, měření, web a případně produktové feedy.",
  },
  {
    title: "02 — Strategie",
    desc: "Určíme vhodné kanály, strukturu kampaní, cíle a KPI.",
  },
  {
    title: "03 — Implementace",
    desc: "Nastavíme nebo přepracujeme kampaně a podle potřeby upravíme tracking, Merchant Center nebo feedy.",
  },
  {
    title: "04 — Optimalizace",
    desc: "Pravidelně pracujeme s vyhledávacími dotazy, biddingem, publikem, kreativitou, rozpočty a landing pages.",
  },
  {
    title: "05 — Vyhodnocení",
    desc: "Výsledky interpretujeme v obchodním kontextu a navrhujeme další kroky.",
  },
];

const measurementTech = [
  "GA4",
  "Google Tag Manager",
  "Consent Mode",
  "Enhanced Conversions",
  "Server-side tracking",
  "Offline conversions",
];

const faq = [
  {
    q: "Kolik stojí správa PPC kampaní?",
    a: "Správa jednoho reklamního systému (např. Google Ads nebo Sklik) začíná od 5 000 Kč měsíčně, kombinace více systémů od 8 000 Kč měsíčně. Finální cena závisí na rozsahu kampaní a velikosti účtu — po úvodní konzultaci dostanete konkrétní nabídku.",
  },
  {
    q: "Jaký rozpočet na reklamu potřebuji?",
    a: "Pro většinu segmentů dává smysl začít zhruba od 10 000 Kč měsíčně mediálního rozpočtu, u e-shopů s Performance Max spíše od 30 000 Kč — algoritmus potřebuje dost dat na učení. Přesný rozpočet navrhneme podle vašeho segmentu a cílů.",
  },
  {
    q: "Google Ads nebo Sklik?",
    a: "Pro většinu firem je primární Google Ads, Sklik dává smysl jako doplněk — zejména pro regionální poptávku, starší cílovou skupinu a e-shopy přes Zboží.cz. Rozdělení rozpočtu vždy odvozujeme z dat, ne ze zvyku.",
  },
  {
    q: "Má pro českou firmu Sklik ještě smysl?",
    a: "Často ano. Sklik mívá nižší cenu za proklik a silnou pozici v partnerské síti Seznamu (Zboží.cz, Firmy.cz, Mapy.cz). Pro řadu segmentů — zejména regionální služby a produkty pro starší zákazníky — přináší velmi dobré výsledky.",
  },
  {
    q: "Potřebuji Google Ads i Meta Ads?",
    a: "Nemusíte. Google Ads zachytává existující poptávku, Meta Ads ji dokáže vytvářet a oslovovat nové zákazníky. Která kombinace dává smysl, záleží na produktu, marži a délce rozhodovacího procesu — doporučíme na konzultaci.",
  },
  {
    q: "Co je Performance Max?",
    a: "Automatizovaný typ kampaně v Google Ads, který kombinuje vyhledávání, Shopping, obsahovou síť, YouTube a Discover v jedné kampani. Pro e-shopy je dnes často hlavním výkonnostním kanálem — ale jen se správně nastavenou strukturou, feedem a měřením.",
  },
  {
    q: "Spravujete také Google Merchant Center?",
    a: "Ano. Řešíme nastavení a opravy Merchant Center, kvalitu produktového feedu, titulky, atributy i pravidla pro feed. Feed je u e-commerce kampaní často důležitější než samotné nastavení bidování.",
  },
  {
    q: "Umíte řešit Heureka.cz a Zboží.cz?",
    a: "Ano. Spravujeme produktovou inzerci na Heurece, Zboží.cz i Glami — včetně feedů, kategorií a optimalizace nákladů. Srovnávače hodnotíme společně s ostatními kanály, aby si vzájemně nekanibalizovaly výkon.",
  },
  {
    q: "Kdo bude vlastníkem reklamních účtů?",
    a: "Vždy vy. Reklamní účty, Merchant Center i analytika zůstávají ve vašem vlastnictví — my do nich vstupujeme přes partnerské přístupy. Po skončení spolupráce si necháváte všechna data i historii kampaní.",
  },
  {
    q: "Jak rychle můžeme kampaně spustit?",
    a: "Jednoduchou Search kampaň s hotovým měřením umíme spustit během několika pracovních dnů. U e-commerce s feedy, Merchant Center a nastavením měření počítejte typicky s 1–3 týdny přípravy.",
  },
  {
    q: "Za jak dlouho lze vyhodnotit výsledky?",
    a: "První signály jsou vidět obvykle do 2–4 týdnů. Stabilní výkon a smysluplné vyhodnocení — zejména u automatizovaných strategií jako Performance Max — vyžaduje typicky 2–3 měsíce průběžné optimalizace.",
  },
  {
    q: "Co když už Google Ads používáme?",
    a: "Nemusíme začínat od nuly. Provedeme audit současných účtů — strukturu kampaní, měření, bidding i vyhledávací dotazy — a navrhneme konkrétní změny. Často stačí přepracovat nastavení stávajících kampaní.",
  },
  {
    q: "Jak měříte konverze?",
    a: "Standardem je GA4 s Google Tag Managerem, Enhanced Conversions a správně nastavený Consent Mode. U větších rozpočtů nasazujeme server-side tracking pro přesnější data a u B2B umíme měřit i offline konverze z CRM.",
  },
  {
    q: "Řešíte také landing pages?",
    a: "Ano. Kampaň bez dobré landing page jen draze nakupuje návštěvnost. Landing pages navrhujeme i stavíme — včetně textů, formulářů a měření.",
  },
  {
    q: "Můžete upravit náš web, pokud kampaně brzdí?",
    a: "Ano — to je naše hlavní výhoda. Weby, analytiku i technické implementace řešíme vlastním týmem, takže problém nemusíme jen popsat do doporučení pro jiného dodavatele, ale přímo ho opravit.",
  },
  {
    q: "Jak probíhá reporting?",
    a: "Pravidelně a srozumitelně. Vyhodnocujeme výkon v obchodních číslech — obrat, objednávky, poptávky, CPA, ROAS — a vždy k nim přidáváme interpretaci a doporučené další kroky, ne jen tabulku dat.",
  },
];

export const Route = createFileRoute("/sluzby/vykonnostni-reklama")({
  head: () => {
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Služby", item: `${SITE}/sluzby` },
        { "@type": "ListItem", position: 3, name: "Výkonnostní reklama", item: URL },
      ],
    };
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Správa výkonnostní reklamy (PPC)",
      description: DESCRIPTION,
      provider: { "@type": "Organization", name: "Netmedio", url: SITE },
      areaServed: "CZ",
      serviceType: "Performance marketing",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        lowPrice: "5000",
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
  component: PpcMicrosite,
});

function PrimaryCta({ children = "Nezávazná konzultace" }: { children?: React.ReactNode }) {
  return (
    <Link
      to="/"
      hash="kontakt"
      className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
    >
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function PpcMicrosite() {
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
              <li className="text-foreground">Výkonnostní reklama</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 1. Hero */}
      <header className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Výkonnostní marketing</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            Výkonnostní reklama, která přivádí zákazníky
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Google Ads, Sklik, Meta Ads i produktové srovnávače spravujeme jako jeden celek.
            Od strategie a měření přes kampaně až po pravidelnou optimalizaci podle skutečných
            obchodních výsledků.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-10">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hlavní přínos</p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Více relevantních poptávek, objednávek a obratu z placené reklamy.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pro koho</p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                E-shopy, B2B firmy i poskytovatelé služeb, kteří chtějí mít reklamu postavenou
                na datech a měřitelných výsledcích.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryCta />
            <a
              href="#proces"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40 transition-colors"
            >
              Jak pracujeme
            </a>
          </div>
        </div>
      </header>

      {/* 2. Trust bar */}
      <section aria-label="Důvěra a zkušenosti" className="section-padding pt-0 pb-0">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-card px-6 py-5 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">15+ let zkušeností</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">100+ projektů</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Google Partner</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Google Ads • Sklik • Meta Ads</span></li>
            <li className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span className="text-foreground/90">Klienti v ČR i EU</span></li>
          </ul>
        </div>
      </section>

      {/* 3. Reklamní kanály */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Reklamní kanály</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Jeden partner pro celý výkonnostní marketing
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Každý reklamní systém má jinou roli. Nevybíráme kanály podle toho, co právě chceme
            prodávat, ale podle vašeho produktu, zákazníků a obchodních cílů.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {channels.map((ch) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{ch.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ch.chips.map((c) => (
                      <span key={c} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ch.desc}</p>
                  {"slug" in ch && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary/90 group-hover:text-primary">
                      Více o analytice <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                </>
              );
              return (
                <Link
                  key={ch.title}
                  to={ch.to}
                  params={"slug" in ch ? { slug: ch.slug } : (undefined as never)}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Pro koho */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Pro koho</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Výkonnostní reklama podle typu vašeho podnikání
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <a.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {a.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reklama není izolovaný kanál */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Netmedio approach</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Kampaň je jen jedna část výsledku
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Výsledek reklamy nevzniká pouze v reklamním účtu. Ovlivňuje ho kvalita webu,
            landing page, rychlost, měření, produktový feed i způsob zpracování poptávky.
            Proto dokážeme řešit celý řetězec:
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["Reklama", "Web / landing page", "Měření", "Data", "Optimalizace"].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">
                  {step}
                </span>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-primary" aria-hidden />}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Pokud zjistíme, že kampaně brzdí web, měření nebo technický problém, nemusíme končit
            doporučením „předejte to vývojáři".{" "}
            <Link to="/sluzby/tvorba-webu" className="text-primary hover:underline">Weby</Link>,{" "}
            <Link to="/sluzby/$slug" params={{ slug: "analytika-reporting" }} className="text-primary hover:underline">analytiku</Link>{" "}
            i{" "}
            <Link to="/sluzby/$slug" params={{ slug: "ai-automatizace" }} className="text-primary hover:underline">automatizace</Link>{" "}
            řešíme přímo — vlastním týmem, bez čekání na třetí stranu.
          </p>
        </div>
      </section>

      {/* 6. Co skutečně spravujeme */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Rozsah služby</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Od kampaně až po data
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scope.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">{g.title}</h3>
                <ul className="space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Jak poznáme, že reklama funguje */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">KPI</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Neoptimalizujeme na kliknutí. Optimalizujeme na výsledek.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Různé firmy potřebují různé ukazatele. Na začátku spolupráce definujeme, podle čeho
            se úspěch pozná — a podle toho kampaně nastavujeme i vyhodnocujeme.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {kpis.map((k) => (
              <div key={k.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{k.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {k.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Case studies */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Výsledky v praxi</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Když čísla mluví za nás
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredCases.map((c) => (
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

      {/* 9. Proces */}
      <section id="proces" className="section-padding pt-0 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Proces</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Od auditu k dlouhodobému růstu
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

      {/* 10. Měření jako základ PPC */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Měření</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Algoritmus je jen tak dobrý jako data, která dostává
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Google Ads i Meta Ads dnes výrazně spoléhají na automatizaci a machine learning.
            Pokud jim posíláme neúplná nebo chybná data, optimalizují podle neúplného obrazu
            reality — a rozpočet se utrácí tam, kde to nedává smysl. Proto měření neřešíme
            jako doplněk, ale jako základ každé spolupráce.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {measurementTech.map((t) => (
              <span key={t} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Prakticky to znamená: správně nastavené souhlasy, konverze měřené i na straně serveru,
            propojení s CRM pro offline obchody a kontrolu, že čísla v reklamních účtech odpovídají
            skutečným objednávkám a poptávkám.
          </p>
        </div>
      </section>

      {/* 11. Zkušenost / Google Partner */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Zkušenost</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Kampaně spravujeme od roku 2010
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Za tu dobu jsme vedli kampaně pro e-shopy, B2B firmy i poskytovatele služeb —
                v Česku i v zahraničí. Netmedio je certifikovaný Google Partner a drží aktivní
                certifikace Google Ads a Google Analytics 4.
              </p>
            </div>
            <img
              src={partnerBadge}
              alt="Google Partner — certifikovaný partner Google"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="w-32 md:w-40 h-auto"
            />
          </div>
        </div>
      </section>

      {/* 12. Ceník */}
      <section id="cenik" className="section-padding pt-0 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Ceník</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Kolik stojí správa reklamy
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Jeden reklamní systém</p>
              <p className="text-2xl font-semibold text-primary mb-3">od 5 000 Kč / měsíc</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Například Google Ads nebo Sklik. Pravidelná optimalizace, kontrola výkonu
                a základní reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-card p-6 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Více reklamních systémů</p>
              <p className="text-2xl font-semibold text-primary mb-3">od 8 000 Kč / měsíc</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Například Google Ads + Sklik nebo kombinace s Meta Ads. Společná strategie
                a vyhodnocování napříč kanály.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Komplexní výkonnostní marketing</p>
              <p className="text-2xl font-semibold text-primary mb-3">individuální nabídka</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pro větší účty, e-commerce a projekty kombinující více reklamních systémů,
                feedy, analytiku nebo technické řešení.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-2xl">
            Konkrétní cena závisí na rozsahu kampaní, počtu reklamních systémů, velikosti účtu
            a požadovaném rozsahu práce. Úvodní konzultace a základní posouzení současného stavu
            je zdarma.
          </p>
        </div>
      </section>

      {/* 13. Už PPC kampaně máte? */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-6 h-6 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Už kampaně máte?</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Kampaně už běží, ale nejste si jistí jejich výkonem?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Nemusíme začínat od nuly. Můžeme převzít existující účty, zkontrolovat jejich
            strukturu, měření a výkon a navrhnout konkrétní změny.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm mb-8">
            {[
              "Audit Google Ads / Sklik / Meta Ads",
              "Kontrola měření",
              "Kontrola Merchant Center a feedu",
              "Struktura kampaní",
              "Bidding",
              "Vyhledávací dotazy",
              "Rozpočty",
              "Landing pages",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90">{i}</span>
              </li>
            ))}
          </ul>
          <PrimaryCta>Probrat současné kampaně</PrimaryCta>
        </div>
      </section>

      {/* 14. FAQ */}
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

      {/* 15. Související služby */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Související služby</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Výkon kampaní často začíná mimo reklamní účet
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Tvorba webů",
                desc: "Weby a landing pages připravené pro marketing a konverze.",
                slug: "tvorba-webu",
              },
              {
                title: "Analytika a reporting",
                desc: "Přesná data pro rozhodování a optimalizaci.",
                slug: "analytika-reporting",
              },
              {
                title: "AI automatizace",
                desc: "Automatizace procesů, leadů a práce s daty.",
                slug: "ai-automatizace",
              },
            ].map((s) => (
              <Link
                key={s.title}
                to="/sluzby/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Blog */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Z blogu</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            PPC v praxi — podrobnosti v článcích
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ppcPosts.map((p) => (
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

      {/* 17. Finální CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Pojďme zjistit, kde může vaše reklama růst
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Projdeme současné kampaně, měření a cíle a navrhneme další postup.
            Bez závazku a bez obecné prezentace.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta />
            <Link
              to="/"
              hash="kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
