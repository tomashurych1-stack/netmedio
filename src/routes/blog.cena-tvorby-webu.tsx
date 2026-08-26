import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock, User } from "lucide-react";
import { author, posts } from "@/data/posts";
import { SITE, absoluteUrl, imageMeta } from "@/lib/seo";
import coverImage from "@/assets/blog-cena-webu.jpg";
import shotMimi from "@/assets/portfolio/mimiplavani.webp";
import shotMasaze from "@/assets/portfolio/masaze-praha2.webp";
import shotPriprava from "@/assets/portfolio/priprava-na-prijimacky.webp";
import shotTapas from "@/assets/portfolio/tapasbarmiro.webp";

const SLUG = "cena-tvorby-webu";
const URL = `${SITE}/blog/${SLUG}`;
const TITLE = "Kolik stojí tvorba webu? Co dostanete za 20, 30 nebo 50 tisíc Kč";
const META_TITLE = "Cena tvorby webu: Co dostanete za 20, 30 nebo 50 tisíc Kč?";
const META_DESC =
  "Kolik stojí profesionální web? Porovnáváme, co lze očekávat od webu za 20, 30 nebo 50 tisíc Kč, co cenu ovlivňuje a kdy se vyplatí řešení na míru.";
const DATE = "2026-08-26";
const DATE_LABEL = "26. srpna 2026";
const READING_TIME = 15;
const OG_IMAGE = absoluteUrl(coverImage);

const toc = [
  { id: "strucna-odpoved", label: "Stručná odpověď" },
  { id: "web-za-20000", label: "Web kolem 20 000 Kč" },
  { id: "web-za-25-35", label: "Standardní firemní web" },
  { id: "web-za-50000", label: "Investice 50 000 Kč a více" },
  { id: "srovnani", label: "Srovnání rozpočtů" },
  { id: "co-ovlivnuje-cenu", label: "Co cenu webu ovlivňuje" },
  { id: "technologie", label: "WordPress vs. moderní stack" },
  { id: "ai", label: "AI a cena webu" },
  { id: "za-co-platite", label: "Za co skutečně platíte" },
  { id: "web-marketing-data", label: "Web + marketing + data" },
  { id: "provoz", label: "Provozní náklady" },
  { id: "hodnota", label: "Cena vs. obchodní hodnota" },
  { id: "otazky", label: "5 otázek před poptávkou" },
  { id: "reference", label: "Ukázky realizací" },
  { id: "ceny-netmedio", label: "Ceny u Netmedio" },
  { id: "faq", label: "Často kladené otázky" },
];

const faq = [
  {
    q: "Kolik stojí profesionální web?",
    a: "Profesionální firemní web u nás začíná přibližně na 20 000 Kč. Většina standardních firemních realizací se podle rozsahu pohybuje přibližně mezi 20–35 tisíci Kč. Rozsáhlejší nebo technologicky náročnější projekty naceňujeme individuálně.",
  },
  {
    q: "Kolik stojí jednoduchý firemní web?",
    a: "Jednodušší web nebo landing page vyjde přibližně od 20 000 Kč. Obvykle jde o několik hlavních stránek nebo sekcí s responzivním designem, kontaktním formulářem, základním SEO a analytikou.",
  },
  {
    q: "Co dostanu za web za 20 000 Kč?",
    a: "Typicky landing page nebo menší firemní prezentaci: responzivní design, kontaktní formulář, základní on-page SEO, technické nasazení a základní analytiku. Přesný rozsah se vždy potvrzuje podle zadání.",
  },
  {
    q: "Kolik stojí web na míru?",
    a: "Web na míru s individuálními funkcemi, integracemi nebo rozsáhlejší strukturou se naceňuje individuálně — obvykle od 50 000 Kč výše podle skutečného rozsahu projektu.",
  },
  {
    q: "Proč některé weby stojí přes 100 000 Kč?",
    a: "Cenu tvoří rozsah a práce za ním: desítky unikátních šablon, více jazyků, katalogy, rezervace, kalkulačky, napojení na CRM a API, rozsáhlá práce s obsahem nebo specifické technické požadavky. Vyšší cena ale sama o sobě neznamená lepší web — musí odpovídat reálným potřebám projektu.",
  },
  {
    q: "Kolik stojí WordPress web?",
    a: "Stejné cenové hladiny jako výše — cenu neurčuje technologie, ale rozsah, obsah a funkce. WordPress je vhodný pro řadu firemních webů a cena se odvíjí od toho, co má web umět.",
  },
  {
    q: "Je WordPress levnější než web v Reactu?",
    a: "Ne nutně. Díky moderním vývojovým nástrojům a AI-assisted vývoji může být moderní stack velmi efektivní. Technologii volíme podle projektu — podle způsobu správy obsahu, funkcí a dlouhodobých nákladů, ne podle módy.",
  },
  {
    q: "Kolik stojí provoz webu?",
    a: "Doména stojí stovky korun ročně, hosting podle technologie (u WordPressu typicky stovky až jednotky tisíc ročně), k tomu případné licence, správa a externí služby. U moderních cloudových webů může být hosting velmi levný, v základním provozu i bez dodatečných nákladů.",
  },
  {
    q: "Musím platit hosting?",
    a: "Web musí někde běžet, takže ano — otázkou je kolik. U moderních cloudových řešení (například Cloudflare) může být hosting v základním provozu velmi levný nebo bez dodatečných nákladů, ale není fér slibovat „zdarma navždy“. Sledujte celkové náklady vlastnictví, ne jen pořizovací cenu.",
  },
  {
    q: "Jak dlouho trvá vytvoření firemního webu?",
    a: "Landing page obvykle 2–3 týdny, firemní web 4–8 týdnů od briefu po spuštění. Největší vliv má rychlost dodání podkladů a schvalování.",
  },
  {
    q: "Co nejvíce ovlivňuje cenu webu?",
    a: "Rozsah a struktura, množství obsahu, individuální design, funkcionalita (formuláře, rezervace, kalkulačky), integrace a jazykové mutace. Dva weby s deseti podstránkami mohou mít naprosto rozdílnou cenu.",
  },
  {
    q: "Jak získám přesnou cenovou nabídku?",
    a: "Po krátké nezávazné konzultaci. Probereme, co má web dělat, jaký má mít rozsah a funkce — a připravíme konkrétní nabídku s pevnou cenou a termínem.",
  },
];

const comparisonRows = [
  { label: "Typ projektu", a: "Landing page / menší prezentace", b: "Standardní firemní web", c: "Rozsáhlý web / řešení na míru" },
  { label: "Rozsah", a: "1–5 stránek", b: "typicky 5–15 stránek", c: "dle projektu" },
  { label: "Individuální design", a: "základní", b: "standardní", c: "rozšířený" },
  { label: "SEO", a: "základní", b: "standardní (metadata, schema.org)", c: "rozšířené dle projektu" },
  { label: "Analytika", a: "základní (GA4)", b: "GA4, GTM, měření konverzí", c: "dle projektu" },
  { label: "Funkcionalita", a: "kontaktní formulář", b: "formuláře, reference, blog", c: "rezervace, kalkulačky, klientské sekce" },
  { label: "Integrace", a: "volitelné", b: "marketingové nástroje", c: "CRM, API, automatizace" },
  { label: "Marketingová připravenost", a: "základní", b: "ano", c: "ano, rozšířená" },
  { label: "Typický klient", a: "živnostník, nový projekt", b: "malá a střední firma", c: "rostoucí firma, e-commerce" },
];

const factors = [
  {
    title: "Struktura a UX",
    text: "Jak má návštěvník webem procházet, kde se rozhoduje a co má udělat. Promyšlená struktura znamená wireframy, práci s cílovou skupinou a testování — to je práce navíc oproti „naplnění šablony“.",
  },
  {
    title: "Design",
    text: "Šablonový design s úpravou barev je rychlý. Individuální design znamená návrh na míru, práci s typografií, komponentami a variantami.",
  },
  {
    title: "Obsah",
    text: "Kdo připravuje texty, fotografie a další materiály? Profesionální copywriting a fotografie umí cenu posunout — a obvykle výrazně posunou i výsledek.",
  },
  {
    title: "Technologie",
    text: "WordPress nebo moderní webový stack — každá volba má jinou ekonomiku vývoje i provozu. Více v samostatné kapitole níže.",
  },
  {
    title: "Funkcionalita",
    text: "Formuláře, rezervace, kalkulačky, katalogy, API. Každá funkce znamená analýzu, vývoj a testování.",
  },
  {
    title: "Jazykové mutace",
    text: "Každý další jazyk násobí práci s obsahem, SEO i testováním.",
  },
  {
    title: "SEO",
    text: "Od základních titulků a meta popisů po strukturovaná data, rychlost a obsahovou strategii.",
  },
  {
    title: "Analytika a měření",
    text: "GA4, Google Tag Manager, měření konverzí, případně server-side tracking. Bez měření je web jen hezký obrázek.",
  },
  {
    title: "Integrace",
    text: "CRM, newsletterové nástroje, rezervační systémy nebo produktové feedy — každá integrace přidává práci na obou stranách.",
  },
  {
    title: "Testování a nasazení",
    text: "Testování na zařízeních a v prohlížečích, rychlost, formuláře, přesměrování ze starého webu. Detaily, které se nevidí, dokud nechybí.",
  },
];

const flowSteps = [
  "Strategie",
  "Struktura",
  "Design",
  "Vývoj",
  "Obsah",
  "SEO",
  "Měření",
  "Testování",
  "Nasazení",
];

const references = [
  {
    img: shotMimi,
    name: "MimiPlavani.cz",
    type: "Prezentační web s objednávkami",
    url: "https://www.mimiplavani.cz",
  },
  {
    img: shotMasaze,
    name: "Masaze-Praha2.cz",
    type: "Web služeb s rezervacemi",
    url: "https://www.masaze-praha2.cz",
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
];

const relatedSlugs = ["kolik-stoji-ppc-kampane-2026", "ai-automatizace-v-marketingu"];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: META_DESC,
  datePublished: DATE,
  dateModified: DATE,
  author: {
    "@type": "Person",
    name: author.name,
    jobTitle: "Digital Marketing Consultant",
  },
  publisher: {
    "@type": "Organization",
    name: "Netmedio",
    logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
  },
  mainEntityOfPage: URL,
  image: OG_IMAGE,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
    { "@type": "ListItem", position: 3, name: TITLE, item: URL },
  ],
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

export const Route = createFileRoute("/blog/cena-tvorby-webu")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "author", content: author.name },
      { property: "article:author", content: author.name },
      { property: "article:published_time", content: DATE },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      ...imageMeta(OG_IMAGE),
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: META_DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [articleLd, breadcrumbLd, faqLd].map((ld) => ({
      type: "application/ld+json",
      children: JSON.stringify(ld),
    })),
  }),
  component: ArticlePage,
});

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h2>
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 my-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
          <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-primary/30 bg-card p-6">
      <p className="text-foreground leading-relaxed">{children}</p>
    </div>
  );
}

function ArticlePage() {
  const related = posts.filter((p) => relatedSlugs.includes(p.slug));

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="section-padding pt-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-foreground">Domů</Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link to="/blog" className="hover:text-foreground">Blog</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-foreground">Weby</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="section-padding pt-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Weby</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">{TITLE}</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Web za 20 000 Kč a web za 100 000 Kč mohou na první pohled vypadat podobně. Rozdíl je
            v práci na struktuře, obsahu, funkcích a měření. Podívejte se, co za jednotlivé
            rozpočty reálně dostanete a podle čeho vybrat správné řešení.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="text-foreground">{author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{READING_TIME} min čtení</span>
            </div>
            <time dateTime={DATE}>{DATE_LABEL}</time>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <img
              src={coverImage}
              alt="Cena tvorby webu — abstraktní ilustrace webových rozhraní jako cenových hladin"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body + TOC */}
      <section className="section-padding pt-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_240px] gap-12">
          <div className="max-w-3xl">
            {/* TOC mobile */}
            <aside className="lg:hidden rounded-2xl border border-border bg-card p-6 mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Obsah článku</p>
              <ol className="space-y-2 text-sm">
                {toc.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground">
                      {i + 1}. {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="space-y-16">
              {/* Úvod */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Web za 20 000 Kč a web za 100 000 Kč mohou na první pohled vypadat podobně.
                  Rozdíl často není v počtu barev nebo podstránek, ale v množství práce věnované
                  struktuře, designu, obsahu, funkcím, měření a technickému řešení. Právě tyto věci
                  rozhodují o tom, jestli web bude jen online vizitkou, nebo nástrojem, který firmě
                  přináší poptávky.
                </p>
                <p>
                  Cena profesionálního firemního webu u Netmedio začíná přibližně na 20 000 Kč.
                  Většina standardních firemních realizací se podle rozsahu pohybuje přibližně mezi
                  20–35 tisíci Kč. Rozsáhlejší nebo technologicky náročnější projekty naceňujeme
                  individuálně.
                </p>
                <p>
                  V tomto článku proto neřešíme jen otázku „kolik web stojí“, ale především tu
                  praktičtější: co za daný rozpočet reálně dostanete a podle čeho vybrat správné
                  řešení pro vaši firmu.
                </p>
              </div>

              {/* Quick answer */}
              <section id="strucna-odpoved" className="scroll-mt-24">
                <SectionHeading eyebrow="Stručně" title="Kolik stojí web? Orientační odpověď" />
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Jednodušší web / landing page
                    </p>
                    <p className="text-xl font-semibold text-primary">od 20 000 Kč</p>
                  </div>
                  <div className="rounded-2xl border border-primary/40 bg-card p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Standardní firemní web
                    </p>
                    <p className="text-xl font-semibold text-primary">typicky 20–35 000 Kč</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Rozsáhlejší řešení
                    </p>
                    <p className="text-xl font-semibold text-primary">individuálně</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Cena závisí především na rozsahu, funkcích, obsahu, designu a použité technologii.
                </p>
                <Link
                  to="/sluzby/tvorba-webu"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Nechat nacenit web <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* 20 000 Kč */}
              <section id="web-za-20000" className="scroll-mt-24">
                <SectionHeading title="Co lze očekávat od webu kolem 20 000 Kč?" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Za rozpočet kolem 20 000 Kč typicky vzniká jednodušší web — například landing
                    page pro kampaň, menší firemní prezentace nebo web pro jednu jasně definovanou
                    službu. Neznamená to ale „odfláknutou“ práci: i menší web musí být rychlý,
                    responzivní a technicky správně postavený.
                  </p>
                  <p>Podle projektu může obsahovat:</p>
                </div>
                <BulletList
                  items={[
                    "landing page nebo několik hlavních stránek / sekcí",
                    "responzivní design pro mobil, tablet i desktop",
                    "kontaktní formulář s napojením na e-mail",
                    "základní on-page SEO (titulky, meta popisy, struktura nadpisů)",
                    "technické nasazení na doménu a hosting",
                    "základní analytiku (GA4)",
                  ]}
                />
                <p className="text-muted-foreground leading-relaxed">
                  Pro koho je vhodný: pro menší firmu, živnostníka, nový projekt nebo firmu s jasně
                  definovanou nabídkou, která nepotřebuje desítky stránek a složité funkce.
                </p>
                <Callout>
                  Menší web nemusí znamenat horší web. Pokud firma nepotřebuje desítky stránek a
                  složité funkce, jednoduché řešení může být obchodně nejefektivnější.
                </Callout>
              </section>

              {/* 25–35 000 Kč */}
              <section id="web-za-25-35" className="scroll-mt-24">
                <SectionHeading title="Co nabízí standardní firemní web za 25–35 tisíc Kč?" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Tohle je u nás nejčastější typ realizace — kompletní firemní web, který už
                    nevnímáme jako online vizitku, ale jako obchodní a marketingový nástroj. Podle
                    rozsahu projektu může obsahovat:
                  </p>
                </div>
                <BulletList
                  items={[
                    "individuálnější struktura a propracovanější homepage",
                    "samostatné stránky služeb",
                    "reference a případové studie",
                    "FAQ a kontaktní stránka",
                    "blogová struktura",
                    "responzivní provedení a optimalizace rychlosti",
                    "SEO základy, metadata a schema.org",
                    "GA4 a Google Tag Manager",
                    "měření konverzí",
                    "formuláře a napojení na marketingové nástroje",
                  ]}
                />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    V této cenové hladině už typicky řešíme i to, co přijde po spuštění — jestli web
                    má získávat poptávky z vyhledávání, z reklamy, nebo z obojího. Podle toho se
                    navrhuje struktura stránek, obsah i měření.
                  </p>
                  <p>
                    Ne vše uvedené je automaticky součástí každé realizace — finální rozsah vždy
                    definuje zadání a domluvená nabídka.
                  </p>
                </div>
              </section>

              {/* 50 000 Kč+ */}
              <section id="web-za-50000" className="scroll-mt-24">
                <SectionHeading title="Kdy dává smysl investovat 50 000 Kč a více?" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Vyšší rozpočet dává smysl tehdy, když projekt přesahuje rámec standardní
                    firemní prezentace. Typické důvody:
                  </p>
                </div>
                <BulletList
                  items={[
                    "rozsáhlý web s velkým množstvím unikátních šablon",
                    "složitější informační architektura",
                    "vícejazyčné verze",
                    "individuální funkce — pokročilé formuláře, kalkulačky, rezervace",
                    "rozsáhlejší katalog produktů nebo služeb",
                    "napojení na CRM, API a automatizace",
                    "klientské sekce",
                    "složitější animace a rozsáhlejší práce s obsahem",
                    "specifické technické požadavky",
                  ]}
                />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Vyšší cena sama o sobě neznamená lepší web. Smysl má pouze tehdy, pokud vyšší
                    rozpočet odpovídá reálným požadavkům projektu. Web za 80 000 Kč pro firmu, která
                    potřebuje pět stránek a formulář, je špatně investovaných 80 000 Kč — stejně
                    jako web za 15 000 Kč, který má obsloužit celý e-commerce byznys.
                  </p>
                </div>
              </section>

              {/* Srovnávací tabulka */}
              <section id="srovnani" className="scroll-mt-24">
                <SectionHeading title="Srovnání: co dostanete za jednotlivé rozpočty" />
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full min-w-[680px] text-sm">
                    <thead>
                      <tr className="bg-card border-b border-border">
                        <th className="text-left p-4 font-medium text-muted-foreground">Rozpočet</th>
                        <th className="text-left p-4 font-semibold">cca 20 000 Kč</th>
                        <th className="text-left p-4 font-semibold">cca 25–35 000 Kč</th>
                        <th className="text-left p-4 font-semibold">50 000 Kč+</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.label} className="border-b border-border last:border-b-0">
                          <th className="text-left p-4 font-medium text-muted-foreground align-top">
                            {row.label}
                          </th>
                          <td className="p-4 text-muted-foreground align-top">{row.a}</td>
                          <td className="p-4 text-muted-foreground align-top">{row.b}</td>
                          <td className="p-4 text-muted-foreground align-top">{row.c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Orientační přehled — konkrétní rozsah vždy závisí na projektu a domluvené
                  nabídce.
                </p>
              </section>

              {/* Co ovlivňuje cenu */}
              <section id="co-ovlivnuje-cenu" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="Co cenu webu ve skutečnosti ovlivňuje"
                  title="Počet podstránek je jen začátek"
                />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cena webu se neodvíjí od počtu stránek, ale od množství práce, která za nimi
                  stojí. Tohle jsou faktory, které cenu reálně tvoří:
                </p>
                <ol className="space-y-5">
                  {factors.map((f, i) => (
                    <li key={f.title} className="flex items-start gap-4">
                      <span className="text-primary font-semibold shrink-0 w-7">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-foreground font-medium mb-1">{f.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Callout>
                  Dva weby s deseti podstránkami mohou mít naprosto rozdílnou cenu — protože cena
                  se neodvíjí od počtu stránek, ale od množství práce, která za nimi stojí.
                </Callout>
              </section>

              {/* Technologie */}
              <section id="technologie" className="scroll-mt-24">
                <SectionHeading title="Má technologie vliv na cenu webu?" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Weby realizujeme podle projektu na WordPressu i pomocí moderního webového stacku —
                  například React s cloudovým nasazením. Obojí dává smysl, každé pro jiný typ
                  projektu.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold mb-4">WordPress</h3>
                    <BulletList
                      items={[
                        "jednoduchá správa obsahu",
                        "rozsáhlý ekosystém pluginů",
                        "flexibilita pro řadu firemních webů",
                        "nízká vstupní bariéra pro editaci",
                      ]}
                    />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-semibold mb-4">Moderní web (React / Cloud)</h3>
                    <BulletList
                      items={[
                        "vysoká rychlost načítání",
                        "flexibilita bez závislosti na pluginech",
                        "nízká technická režie a provozní náklady",
                        "moderní cloudové nasazení",
                      ]}
                    />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Moderní stack přitom nemusí znamenat dražší web. Díky moderním vývojovým nástrojům
                  a AI-assisted vývoji bývá naopak velmi efektivní. Technologii volíme podle
                  projektu — podle způsobu správy obsahu, funkcí a dlouhodobých nákladů, ne podle
                  módy.
                </p>
              </section>

              {/* AI */}
              <section id="ai" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="AI-assisted development"
                  title="Proč dnes nemusí kvalitní web stát 100 000 Kč"
                />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ekonomika tvorby webů se za poslední roky výrazně změnila. Moderní AI nástroje
                    při vývoji používáme denně — a šetří čas přesně tam, kde se dřív utrácelo nejvíc
                    hodin za rutinní práci.
                  </p>
                  <p>AI nám pomáhá urychlit například:</p>
                </div>
                <BulletList
                  items={[
                    "prototypování a návrh struktury",
                    "tvorbu komponent",
                    "část samotného vývoje",
                    "práci s kódem a refaktoring",
                    "testování variant",
                    "technické úpravy",
                  ]}
                />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Díky tomu se omezí množství času věnovaného rutinním činnostem — a rozpočet lze
                    více využít na strukturu, UX, obsah, marketing, měření a celkovou kvalitu
                    výsledku.
                  </p>
                </div>
                <Callout>
                  AI web za nás nevytvoří. Strategii, strukturu, UX, technologická rozhodnutí a
                  finální kontrolu řeší člověk. AI je nástroj, který používáme při vývoji — stejně
                  jako framework nebo design systém.
                </Callout>
              </section>

              {/* Za co platíte */}
              <section id="za-co-platite" className="scroll-mt-24">
                <SectionHeading title="Za co při tvorbě webu skutečně platíte?" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Web není pouze grafický návrh převedený do prohlížeče. Dobrý web musí spojit
                  technickou kvalitu, obsah a obchodní účel — a cena pokrývá celý tento řetězec:
                </p>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex flex-col items-center">
                    {flowSteps.map((step, i) => (
                      <div key={step} className="flex flex-col items-center">
                        {i > 0 && <ArrowDown className="w-4 h-4 text-primary my-1.5" />}
                        <span className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Web + marketing + data */}
              <section id="web-marketing-data" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="Netmedio approach"
                  title="Web stavíme s ohledem na to, co přijde po spuštění"
                />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Web většinou není konečným cílem. Má získávat návštěvnost, poptávky nebo
                    objednávky. Proto při tvorbě řešíme také{" "}
                    <Link
                      to="/sluzby/$slug"
                      params={{ slug: "seo-obsahovy-marketing" }}
                      className="text-primary hover:underline"
                    >
                      SEO
                    </Link>
                    ,{" "}
                    <Link to="/sluzby/vykonnostni-reklama" className="text-primary hover:underline">
                      PPC reklamu
                    </Link>
                    , landing pages,{" "}
                    <Link
                      to="/sluzby/$slug"
                      params={{ slug: "analytika-reporting" }}
                      className="text-primary hover:underline"
                    >
                      analytiku a měření konverzí
                    </Link>
                    , formuláře a další marketingový rozvoj.
                  </p>
                  <p>
                    Web, který je od začátku navržený pro marketing, se nemusí po půl roce draze
                    předělávat — protože struktura, rychlost i měření už jsou připravené.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-border bg-card p-8">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <span className="rounded-full border border-primary/40 bg-background px-6 py-3 font-semibold">
                      WEB
                    </span>
                    <span className="text-2xl text-primary font-semibold">+</span>
                    <span className="rounded-full border border-primary/40 bg-background px-6 py-3 font-semibold">
                      MARKETING
                    </span>
                    <span className="text-2xl text-primary font-semibold">+</span>
                    <span className="rounded-full border border-primary/40 bg-background px-6 py-3 font-semibold">
                      DATA
                    </span>
                  </div>
                </div>
              </section>

              {/* Provoz */}
              <section id="provoz" className="scroll-mt-24">
                <SectionHeading title="Po spuštění: doména, hosting a správa" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Pořizovací cena není jediný náklad. Web má i provozní náklady — u poctivé nabídky
                  byste je měli znát předem:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      t: "Doména",
                      d: "Stovky korun ročně. Jednoduchá, ale povinná položka.",
                    },
                    {
                      t: "Hosting",
                      d: "U WordPressu typicky stovky až jednotky tisíc ročně. U moderních cloudových webů díky službám typu Cloudflare velmi levný — v základním provozu může být i bez dodatečných nákladů.",
                    },
                    {
                      t: "E-mail",
                      d: "Firemní e-mail na vlastní doméně podle zvoleného řešení.",
                    },
                    {
                      t: "Licence",
                      d: "Prémiové pluginy, šablony nebo nástroje — typicky u WordPressu.",
                    },
                    {
                      t: "Správa",
                      d: "Aktualizace, zálohy a drobné úpravy. U moderního stacku je technická režie výrazně nižší.",
                    },
                    {
                      t: "Externí služby",
                      d: "Rezervační systémy, newsletterové nástroje nebo platební brány podle potřeby.",
                    },
                  ].map((item) => (
                    <div key={item.t} className="rounded-2xl border border-border bg-card p-6">
                      <p className="font-semibold mb-2">{item.t}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  U webu sledujte celkové náklady vlastnictví, ne jen pořizovací cenu. Levný web s
                  drahým provozem a nutnými předělávkami nakonec stojí víc než kvalitní řešení od
                  začátku. Hosting „zdarma navždy“ přitom neslíbíme — férové je říct, jaké náklady
                  vás čekají dnes a co se může změnit.
                </p>
              </section>

              {/* Hodnota */}
              <section id="hodnota" className="scroll-mt-24">
                <SectionHeading title="Cena webu vs. jeho obchodní hodnota" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nejlevnější web nemusí být nejlevnější. Web za 10 000 Kč, který firma musí za
                    dva roky celý předělat, protože nezvládá růst, neměří konverze a nejde rozšířit,
                    nakonec stojí víc než kvalitnější řešení za 30 000 Kč.
                  </p>
                  <p>
                    Stejně tak ale firma nepotřebuje web za 100 000 Kč jen proto, že takový rozpočet
                    existuje. Správná otázka zní: „Jaký web potřebujeme pro náš obchodní cíl?“ —
                    ne „Jak drahý web si můžeme koupit?“
                  </p>
                </div>
              </section>

              {/* 5 otázek */}
              <section id="otazky" className="scroll-mt-24">
                <SectionHeading title="5 otázek, které si zodpovězte před poptávkou webu" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Než oslovíte dodavatele, odpovězte si na pět otázek. Ušetříte čas sobě i jim — a
                  dostanete výrazně přesnější nabídku:
                </p>
                <ol className="space-y-4">
                  {[
                    "Co má web především dělat? (prezentovat, prodávat, sbírat poptávky…)",
                    "Kolik různých služeb nebo produktů potřebujeme prezentovat?",
                    "Budeme obsah často upravovat sami?",
                    "Potřebujeme nějaké integrace nebo speciální funkce?",
                    "Odkud budou na web přicházet zákazníci?",
                  ].map((q, i) => (
                    <li
                      key={q}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/40 text-primary font-semibold text-sm shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-foreground leading-relaxed pt-1">{q}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Pokud máte tyto odpovědi, lze cenu odhadnout výrazně přesněji — často už po první
                  konzultaci.
                </p>
              </section>

              {/* Reference */}
              <section id="reference" className="scroll-mt-24">
                <SectionHeading eyebrow="Reference" title="Ukázky realizací" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Různé typy projektů, různé rozpočty — od prezentačních webů po weby s rezervacemi
                  a objednávkami.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {references.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
                    >
                      <div className="aspect-[16/9] overflow-hidden border-b border-border">
                        <img
                          src={r.img}
                          alt={`Web ${r.name} — ${r.type}`}
                          width={1200}
                          height={675}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors">
                            {r.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{r.type}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
                <Link
                  to="/sluzby/tvorba-webu"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Prohlédnout tvorbu webů <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* Ceny u Netmedio */}
              <section id="ceny-netmedio" className="scroll-mt-24">
                <SectionHeading title="Kolik stojí tvorba webu u Netmedio?" />
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Webové stránky
                    </p>
                    <p className="text-xl font-semibold text-primary mb-2">od 20 000 Kč</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Jednodušší weby a landing pages včetně designu, vývoje a základního měření.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/40 bg-card p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Standardní firemní realizace
                    </p>
                    <p className="text-xl font-semibold text-primary mb-2">typicky 20–35 000 Kč</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Kompletní firemní web podle rozsahu — struktura, obsah, SEO, analytika.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Rozsáhlejší web
                    </p>
                    <p className="text-xl font-semibold text-primary mb-2">individuální nabídka</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Specifické funkce, integrace nebo e-commerce. Rozsah podle potřeby.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Konkrétní cenu určuje rozsah projektu, množství obsahu, funkcionalita a použitá
                    technologie. Po krátké úvodní konzultaci dokážeme doporučit vhodné řešení a
                    připravit konkrétní nabídku.
                  </p>
                  <p>
                    Aktuální ceník a detailní popis toho, co v jednotlivých hladinách dostanete,
                    najdete na stránce{" "}
                    <Link to="/sluzby/tvorba-webu" className="text-primary hover:underline">
                      tvorba webových stránek
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <SectionHeading eyebrow="FAQ" title="Často kladené otázky" />
                <div className="space-y-3">
                  {faq.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-border bg-card p-6"
                    >
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-foreground font-medium">
                        {f.q}
                        <span className="text-primary group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Author bio */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Autor</p>
                <h3 className="text-xl font-semibold mb-1">{author.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{author.role}</p>
                <p className="text-sm text-muted-foreground">
                  Zakladatel Netmedia. 15+ let v digitálním marketingu, Google Partner, specialista
                  na výkonnostní kampaně, weby a marketingovou automatizaci.{" "}
                  <Link to="/" hash="o-nas" className="text-primary hover:underline">
                    Více o Tomášovi
                  </Link>
                  .
                </p>
              </div>

              {/* Finální CTA */}
              <div className="rounded-2xl border border-primary/30 bg-card p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  Kolik bude stát právě váš web?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Každý projekt má jiný rozsah. Popište nám stručně, co potřebujete, a navrhneme
                  vhodné řešení i orientační rozpočet.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/"
                    hash="kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    Nezávazně nacenit web <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/sluzby/tvorba-webu"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
                  >
                    Tvorba webových stránek
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* TOC desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Obsah článku</p>
              <ol className="space-y-2 text-sm">
                {toc.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-muted-foreground hover:text-foreground block"
                    >
                      {i + 1}. {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Související</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Pokračujte ve čtení
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
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
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {p.category}
                    </span>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary">
                      Číst <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
