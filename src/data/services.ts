import {
  Megaphone,
  Code2,
  Search,
  Mail,
  Workflow,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type Problem = { symptom: string; impact: string };
export type Step = { title: string; desc: string };
export type Pricing = { tier: string; range: string; note: string };
export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  benefit: string;
  audience: string;
  heroIntro: string;
  problems: Problem[];
  approach: Step[];
  includes: string[];
  tools: string[];
  outcomes: { kpi: string; value: string }[];
  pricing: Pricing[];
  faq: FaqItem[];
  relatedServices: string[];
  relatedCases: string[];
  relatedPosts: string[];
};

const CONSULT_NOTE =
  "Každou zakázku naceníme individuálně po krátkém nezávazném hovoru. Žádné skryté poplatky — platíte jen za skutečně odvedenou práci. Rozsah vždy přizpůsobíme velikosti vašeho projektu a rozpočtu.";

export const services: Service[] = [
  {
    slug: "vykonnostni-reklama",
    icon: Megaphone,
    title: "Výkonnostní reklama (PPC) — kampaně, které měřitelně zvyšují obrat",
    shortTitle: "Výkonnostní reklama (PPC)",
    metaTitle: "PPC reklama — Google Ads, Sklik, Heureka, Zboží.cz, Meta Ads | Netmedio",
    metaDescription:
      "Správa PPC kampaní a srovnávačů zboží: Google Ads, Sklik, Meta Ads, Performance Max, Heureka, Zboží.cz, Glami. Google Partner od 2010.",
    category: "Výkonnostní marketing",
    benefit:
      "Více poptávek, objednávek a vyšší obrat z PPC reklamy a srovnávačů zboží — bez plýtvání rozpočtem.",

    audience:
      "E-shopy, B2B firmy a poskytovatelé služeb, které chtějí měřitelný obchodní dopad z placené reklamy.",
    heroIntro:
      "Spravujeme výkonnostní kampaně od roku 2010 jako certifikovaný Google Partner. Vedeme Google Ads, Sklik a Meta Ads pod jednou střechou, s jednotnou strategií, atribucí a reportingem — tak, aby každá utracená koruna měla měřitelný dopad na obrat.",
    problems: [
      {
        symptom: "Performance Max kanibalizuje brand a snižuje ROAS",
        impact: "Algoritmus utrácí za levné brandové dotazy a podinvestuje vysokomaržový sortiment.",
      },
      {
        symptom: "Sklik běží jen ze setrvačnosti",
        impact: "Kampaně bez aktivní správy, nezoptimalizovaný feed na Zboží.cz, mizí celý regionální potenciál.",
      },
      {
        symptom: "Meta Ads dělá awareness, ne obchod",
        impact: "Bez napojení na CRM a server-side eventy se prodejní hodnota Mety neměří správně.",
      },
      {
        symptom: "Tři kanály, tři reporty, tři pravdy",
        impact: "Sečtené konverze z Google + Sklik + Meta jsou vyšší než reálné objednávky.",
      },
    ],
    approach: [
      { title: "1. Audit kanálů a měření", desc: "Projdeme Google Ads, Sklik, Meta Ads, Merchant Center, Heureka.cz, Zboží.cz a tracking. Jeden výstup, jeden plán." },
      { title: "2. Strategie a struktura", desc: "Navrhneme strukturu kampaní podle marže a fáze nákupu, stanovíme cíle ROAS / CPA a rozdělíme role kanálů." },
      { title: "3. Měření a server-side tracking", desc: "Nasadíme GA4, GTM (klient + server-side), Enhanced Conversions a offline konverze z CRM." },
      { title: "4. Spuštění a optimalizace", desc: "Týdenní cyklus: úpravy bid strategy, A/B testy kreativ a feedu, eliminace ztrátových segmentů." },
      { title: "5. Reporting a růst", desc: "Měsíční Looker Studio report napříč kanály s ROAS, marží a doporučenými kroky." },
    ],
    includes: [
      "Audit účtů (Google Ads, Sklik, Meta Ads) a měření",
      "Strategie a struktura kampaní: Search, Performance Max, Shopping, Demand Gen, Meta",
      "Správa Google Ads, Sklik a Meta Ads",
      "Správa srovnávačů zboží: Heureka.cz, Zboží.cz, Glami",
      "Google Merchant Center a XML feed management (bidding, kategorie, pravidla)",
      "YouTube Ads, TikTok Ads a remarketingové sekvence napříč kanály",
      "Server-side tracking přes Google Tag Manager",
      "Enhanced Conversions a offline konverze z CRM",
      "A/B testy reklamních textů, kreativ a landing pages",
      "Měsíční Looker Studio report a strategická konzultace",
    ],

    tools: [
      "PPC reklama",
      "Google Ads",
      "Sklik",
      "Meta Ads (Facebook & Instagram)",
      "Performance Max",
      "Google Shopping",
      "Google Merchant Center",
      "Heureka.cz",
      "Zboží.cz",
      "Glami",
      "YouTube Ads",
      "TikTok Ads",
      "Microsoft Ads (Bing)",
      "Remarketing",
      "Google Tag Manager (server-side)",
      "Looker Studio",
    ],

    outcomes: [
      { kpi: "ROAS u e-shopů", value: "500–1200 %" },
      { kpi: "Snížení CPA u leadů", value: "−30 až −60 %" },
      { kpi: "Růst obratu z PPC", value: "+40 až +180 % / rok" },
      { kpi: "Pokrytí konverzí (server-side)", value: "+15 až +35 %" },
    ],
    pricing: [
      { tier: "Audit a strategie", range: "od 7 900 Kč jednorázově", note: "Detailní audit kanálů, měření a doporučená struktura kampaní." },
      { tier: "Správa — paušál", range: "od 7 900 Kč / měsíc", note: "Transparentní měsíční správa s pravidelným reportingem." },
      { tier: "Správa — procentuální", range: "10–15 % z media spendu", note: "Pro větší účty nad 100 000 Kč / měsíc. Cena škáluje s objemem práce." },
    ],
    faq: [
      { q: "Za jak dlouho uvidíme první výsledky?", a: "U Search kampaní s jasnou poptávkou typicky během 1–2 týdnů. Performance Max a Smart Bidding potřebují 4–8 týdnů na zaučení algoritmu." },
      { q: "Sklik dnes ještě dává smysl?", a: "Pro většinu e-shopů ano — Zboží.cz a regionální poptávka jsou stále silné. Pro mladší cílovku v B2B často ne. Vyhodnocujeme z dat klienta." },
      { q: "Co je server-side tracking a proč ho potřebujeme?", a: "Server-side tracking přenese měření z prohlížeče na váš server. Zlepší přesnost konverzí, sníží vliv blokátorů. Standardně ho nasazujeme nad 50 000 Kč media spendu." },
      { q: "Jak řešíte vlastnictví účtů?", a: "Reklamní účty vždy vlastní klient. Pracujeme z MCC / Business Manageru Netmedia. Po ukončení spolupráce jen odebereme přístupy — žádný lock-in." },
      { q: "Reportujete jen ROAS, nebo i marži?", a: "Pracujeme s marží, pokud nám klient sdílí marže produktů. Optimalizace na čistý zisk dává mnohem lepší výsledky než optimalizace na tržbu." },
    ],
    relatedServices: ["analytika-reporting", "tvorba-webu", "ai-automatizace"],
    relatedCases: ["google-ads-eshop-moda", "b2b-web-analytika"],
    relatedPosts: ["kolik-stoji-ppc-kampane-2026", "google-ads-vs-sklik", "jak-poznat-dobrou-ppc-agenturu"],
  },

  {
    slug: "tvorba-webu",
    icon: Code2,
    title: "Tvorba webů — rychlé weby navržené pro výkon a získávání poptávek",
    shortTitle: "Tvorba webů",
    metaTitle: "Tvorba webů — firemní weby, landing pages, e-shopy | Netmedio",
    metaDescription:
      "Moderní rychlé weby navržené pro výkon, SEO a získávání poptávek. Firemní weby, landing pages, WordPress, Lovable, Cloudflare. Konverzní optimalizace.",
    category: "Weby a vývoj",
    benefit:
      "Web, který se rychle načítá, dobře měří a převádí návštěvníky na poptávky a objednávky.",
    audience:
      "Firmy, které potřebují web jako reálný akviziční kanál — ať už jde o první web nebo výměnu zastaralého řešení.",
    heroIntro:
      "Stavíme weby, které vydrží roky a hlavně přinášejí výsledky. Důraz na rychlost, SEO základ, čisté měření, UX a konverzní optimalizaci — od landing pages přes firemní weby až po komplexní řešení na Cloudflare.",
    problems: [
      { symptom: "Web vypadá hezky, ale negeneruje poptávky", impact: "Hero bez jasné nabídky, žádné CTA, neměřené formuláře. Marketing nemá co optimalizovat." },
      { symptom: "Pomalé načítání a špatné Core Web Vitals", impact: "Vyšší cena PPC kampaní, horší pozice v Google, ztráta mobilních návštěvníků." },
      { symptom: "Nikdo neumí web rychle aktualizovat", impact: "Každá změna trvá týdny a stojí tisíce. Tým se vyhýbá zveřejňování nového obsahu." },
      { symptom: "Nelze postavit landing page za den", impact: "PPC strategie je svázaná nepružným CMS. Kampaně cílí na nevhodný obsah." },
    ],
    approach: [
      { title: "1. Brief, cíle a měření", desc: "Začínáme byznys cíli a KPI, ne wireframem. Definujeme, co web musí měřit a generovat." },
      { title: "2. Informační architektura a UX", desc: "Postavíme strukturu, navigaci a hierarchii sekcí. UX wireframy a konverzní logika." },
      { title: "3. Design a obsah", desc: "Vizuální systém v souladu s brandem. Důraz na čitelnost, jasná CTA a šablonový systém pro budoucí landing pages." },
      { title: "4. Vývoj a performance", desc: "Rychlý stack (Cloudflare CDN, edge rendering, optimalizovaný JS/CSS). WordPress, Lovable nebo headless dle potřeby." },
      { title: "5. Měření, SEO a launch", desc: "GA4 + GTM, server-side tracking, schema.org, sitemap, robots.txt, on-page SEO a redirect plán." },
    ],
    includes: [
      "Strategie, IA a UX wireframy",
      "Vizuální design (firemní web nebo landing page)",
      "Frontend vývoj (Cloudflare, WordPress, Lovable / TanStack Start)",
      "Konverzní optimalizace (CTA, formuláře, mikrokonverze)",
      "Optimalizace Core Web Vitals a obrázků",
      "GA4 + Google Tag Manager (klient + server-side)",
      "Schema.org markup (Organization, Article, FAQ, Breadcrumb)",
      "On-page SEO základ a redirect plán",
      "Školení klienta na úpravu obsahu",
    ],
    tools: [
      "Firemní weby",
      "Landing pages",
      "Weby v Lovable",
      "WordPress",
      "Cloudflare",
      "UX a wireframy",
      "Konverzní optimalizace",
      "Figma",
      "Google Tag Manager",
    ],
    outcomes: [
      { kpi: "Zlepšení Core Web Vitals", value: "Z červené do zelené" },
      { kpi: "Růst organické návštěvnosti", value: "+30 až +120 % / 6 měsíců" },
      { kpi: "Konverzní poměr formulářů", value: "+40 až +150 %" },
      { kpi: "Čas na vytvoření landing page", value: "1 den vs. 2 týdny" },
    ],
    pricing: [
      { tier: "Landing page", range: "od 24 900 Kč", note: "Jednostránka pro kampaň nebo produkt. Včetně designu, vývoje a měření." },
      { tier: "Firemní web", range: "od 49 900 Kč", note: "5–15 stránek, šablonový systém, redakce obsahu, SEO základ." },
      { tier: "Web na míru", range: "individuální nabídka", note: "Komplexní weby s integracemi (CRM, ERP, rezervace, fakturace). Rozsah podle potřeby." },
    ],
    faq: [
      { q: "Na čem stavíte weby?", a: "Podle požadavků klienta. Pro firmy s častou redakcí obsahu WordPress. Pro rychlé moderní weby Lovable / TanStack Start na Cloudflare. Pro landing pages kombinace s headless CMS." },
      { q: "Jak dlouho trvá vyrobit firemní web?", a: "Standardní firemní web 6–10 týdnů od briefu po launch. Landing page 2–3 týdny. Závisí na rychlosti dodání obsahu." },
      { q: "Děláte i e-shopy?", a: "Pro velké e-shopy doporučujeme specializované řešení (Shopify, Shoptet Premium, Shopware). Postavíme měření, PPC a feedy." },
      { q: "Co po launchi? Údržba?", a: "Nabízíme měsíční údržbu (aktualizace, bezpečnost, drobné úpravy) nebo pracujeme na bázi vyčerpání hodin." },
    ],
    relatedServices: ["seo-obsahovy-marketing", "vykonnostni-reklama", "analytika-reporting"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda"],
    relatedPosts: ["server-side-tracking-standard", "kolik-stoji-ppc-kampane-2026"],
  },

  {
    slug: "seo-obsahovy-marketing",
    icon: Search,
    title: "SEO a obsahový marketing — dlouhodobá viditelnost a kvalitní obsah",
    shortTitle: "SEO a obsahový marketing",
    metaTitle: "SEO a obsahový marketing — audit, technické SEO, obsah | Netmedio",
    metaDescription:
      "Dlouhodobá viditelnost ve vyhledávání a kvalitní obsah podporující obchodní růst. SEO audit, technické SEO, lokální SEO, blog články, AI assisted content.",
    category: "SEO a obsah",
    benefit:
      "Stabilní příliv organické návštěvnosti a obsah, který přivádí relevantní klienty po měsících i letech.",
    audience:
      "Firmy, které chtějí snížit závislost na placené reklamě a postavit si vlastní akviziční kanál — i s menším rozpočtem.",
    heroIntro:
      "SEO není o klíčových slovech, ale o tom, jestli vás zákazník najde dřív než konkurenci. Spojujeme technické SEO, obsahovou strategii a AI assisted content do jednoho systému, který přivádí kvalifikované návštěvníky napříč fází nákupu.",
    problems: [
      { symptom: "Organická návštěvnost stagnuje nebo klesá", impact: "Závislost na PPC roste. Bez SEO je každý lead drahý a opakovaný." },
      { symptom: "Web má technické problémy, které brzdí indexaci", impact: "Crawl budget se utrácí na duplicity. Klíčové stránky Google podceňuje." },
      { symptom: "Blog se píše „když je čas“", impact: "Nesourodý obsah bez strategie. Žádný interní linking, žádná konverze." },
      { symptom: "Lokální vyhledávání nevyužíváte", impact: "Google Business Profile bez optimalizace, mizí poptávky z map a lokálních dotazů." },
    ],
    approach: [
      { title: "1. SEO audit", desc: "Technický audit (Core Web Vitals, indexace, struktura, schema), obsahový audit a analýza konkurence." },
      { title: "2. Klíčová slova a obsahová strategie", desc: "Mapa klíčových slov podle fáze nákupu. Plán pillar stránek a podpůrných článků." },
      { title: "3. Technické SEO a on-page", desc: "Opravy indexace, redirect plán, schema.org, interní prolinkování, on-page optimalizace klíčových stránek." },
      { title: "4. Produkce obsahu", desc: "Blog články, pillar pages a landing pages. AI assisted content s lidskou editací — rychlost AI, kvalita autora." },
      { title: "5. Měření a růst", desc: "Search Console, GA4 a Looker Studio reporting. Měsíční review pozic, organické návštěvnosti a konverzí." },
    ],
    includes: [
      "Kompletní SEO audit (technický + obsahový)",
      "Analýza klíčových slov a konkurence",
      "Obsahová strategie (pillar pages + supporting content)",
      "Technické SEO: indexace, schema.org, Core Web Vitals",
      "Lokální SEO: Google Business Profile, NAP konzistence",
      "On-page SEO: titulky, meta, headings, interní prolinkování",
      "Produkce blog článků (AI assisted + editace)",
      "Interní prolinkování mezi službami, blogem a case studies",
      "Měsíční reporting v Looker Studio (Search Console + GA4)",
    ],
    tools: [
      "SEO audit",
      "Technické SEO",
      "Lokální SEO",
      "Blog články",
      "AI assisted content",
      "Obsahová strategie",
      "Interní prolinkování",
      "Google Search Console",
      "Ahrefs / Marketing Miner",
      "Screaming Frog",
    ],
    outcomes: [
      { kpi: "Růst organické návštěvnosti", value: "+40 až +200 % / rok" },
      { kpi: "Růst pozic na klíčových slovech", value: "Top 10 do 6 měsíců" },
      { kpi: "Snížení závislosti na PPC", value: "Až o 30 % nákladů na lead" },
      { kpi: "Konverzní poměr z organiky", value: "+25 až +80 %" },
    ],
    pricing: [
      { tier: "SEO audit", range: "od 5 900 Kč jednorázově", note: "Technický + obsahový audit a jasná roadmapa priorit." },
      { tier: "SEO + obsah — paušál", range: "od 6 900 Kč / měsíc", note: "Technické úpravy, obsah, reporting — měsíční spolupráce podle rozsahu." },
      { tier: "Obsahový projekt", range: "od 15 000 Kč / projekt", note: "Strategická pillar stránka + podpůrné články s interním linkingem." },
    ],
    faq: [
      { q: "Za jak dlouho SEO přinese výsledky?", a: "První posuny v Search Console vidíme za 4–8 týdnů. Reálný dopad na návštěvnost a konverze za 3–6 měsíců. SEO je dlouhodobá investice s exponenciálním efektem." },
      { q: "Píšete obsah přes AI?", a: "Ano, AI assisted content je dnes standard — ale vždy s lidskou editací, faktickou kontrolou a brand voice. Bez editace AI obsah Google rozpozná a penalizuje." },
      { q: "Pomůže nám SEO, když máme jen lokální působnost?", a: "Pro lokální firmy je SEO často nejvýnosnější kanál. Google Business Profile, lokální landing pages a recenze často přebijí drahé PPC." },
      { q: "Jak řešíte interní prolinkování?", a: "Stavíme prolinkování mezi službami, blogem a case studies podle topické autority. Cílem je, aby každá stránka posilovala ty související." },
      { q: "Děláte i linkbuilding?", a: "Aktivní outreach linkbuilding ne — pracujeme s digitálním PR, hostováním na partnerských webech a kvalitním obsahem, který linky přitahuje přirozeně." },
    ],
    relatedServices: ["tvorba-webu", "analytika-reporting", "ai-automatizace"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda"],
    relatedPosts: ["ai-workflow-pro-marketing", "server-side-tracking-standard"],
  },

  {
    slug: "email-marketing",
    icon: Mail,
    title: "E-mail marketing — automatizace a kampaně, které generují opakované objednávky",
    shortTitle: "E-mail marketing",
    metaTitle: "E-mail marketing — newslettery, automatizace, lead nurturing | Netmedio",
    metaDescription:
      "Automatizované kampaně a newslettery, které budují vztahy a generují opakované objednávky. Segmentace, lead nurturing, e-mailové scénáře, CRM integrace.",
    category: "E-mail a retence",
    benefit:
      "Opakované objednávky, vyšší LTV zákazníků a leady, které dozrávají bez zásahu obchodu.",
    audience:
      "E-shopy, B2B firmy a SaaS, které chtějí systematicky pracovat s databází kontaktů a zvyšovat hodnotu zákazníka.",
    heroIntro:
      "E-mail marketing není o newsletteru jednou za měsíc. Stavíme segmentaci, automatizační scénáře a napojení na CRM tak, aby každý kontakt dostal relevantní zprávu ve správný čas — od welcome série přes lead nurturing po retenční kampaně.",
    problems: [
      { symptom: "Databáze kontaktů leží nevyužitá", impact: "Tisíce e-mailů bez segmentace. Pravidelná komunikace neexistuje, retence stagnuje." },
      { symptom: "Newslettery posíláte ručně a nepravidelně", impact: "Open rate klesá, doručitelnost trpí. Reportu nikdo nerozumí." },
      { symptom: "Leady přicházejí, ale nikdo s nimi nepracuje", impact: "Bez nurturingu zájemce vychladne. Sales řeší jen ty, kdo si o nabídku napíše sám." },
      { symptom: "Po nákupu zákazníka dál nevedete", impact: "Žádná welcome série, žádná cross-sell automatizace. Opakovaný nákup necháváte náhodě." },
    ],
    approach: [
      { title: "1. Audit databáze a procesů", desc: "Projdeme zdroje kontaktů, segmentaci, doručitelnost a stávající kampaně. Najdeme rychlé výhry." },
      { title: "2. Strategie a segmentace", desc: "Definujeme segmenty podle chování, fáze nákupu a hodnoty zákazníka. Plán kampaní a scénářů." },
      { title: "3. Automatizační scénáře", desc: "Postavíme welcome sérii, lead nurturing, abandoned cart, post-purchase, win-back a retenční scénáře." },
      { title: "4. Newslettery a kampaňová komunikace", desc: "Pravidelné kampaně s konzistentním brand voice. Šablony, copywriting, A/B testy." },
      { title: "5. CRM integrace a reporting", desc: "Propojení s CRM, e-shopem a webem. Reporting open rate, CTR, konverzí a obratu z e-mailu." },
    ],
    includes: [
      "Audit databáze, segmentace a doručitelnosti",
      "Strategie e-mail marketingu a kalendář kampaní",
      "Segmentace podle chování a hodnoty zákazníka",
      "Automatizační scénáře (welcome, nurturing, abandoned cart, post-purchase)",
      "Pravidelné newslettery — copywriting, design, odeslání",
      "Lead nurturing pro B2B a SaaS",
      "Integrace s CRM (HubSpot, Pipedrive) a e-shopem",
      "A/B testy předmětů, obsahu a CTA",
      "Měsíční reporting open rate, CTR, konverzí a obratu",
    ],
    tools: [
      "Newslettery",
      "Automatizace",
      "Segmentace",
      "Lead nurturing",
      "E-mailové scénáře",
      "CRM integrace",
      "Mailchimp / Ecomail / Klaviyo",
      "HubSpot",
      "Make / n8n",
    ],
    outcomes: [
      { kpi: "Podíl obratu z e-mailu", value: "10–30 % e-shopu" },
      { kpi: "Růst opakovaných objednávek", value: "+25 až +80 %" },
      { kpi: "Konverze lead → zákazník", value: "+15 až +50 %" },
      { kpi: "Open rate kampaní", value: "Stabilně 35–55 %" },
    ],
    pricing: [
      { tier: "Audit a strategie", range: "od 4 900 Kč jednorázově", note: "Audit databáze, segmentace, doručitelnosti a plán na míru." },
      { tier: "Setup automatizací", range: "od 9 900 Kč / scénář", note: "Welcome série, abandoned cart, post-purchase nebo nurturing — kompletní nastavení." },
      { tier: "Průběžná správa", range: "od 5 900 Kč / měsíc", note: "Pravidelné newslettery, údržba automatizací, reporting. Rozsah podle objemu." },
    ],
    faq: [
      { q: "Jakou platformu doporučujete?", a: "Pro e-shopy nejčastěji Klaviyo nebo Ecomail (kvůli integraci se Shoptetem a Shopify). Pro B2B HubSpot nebo Mailchimp. Volba vždy závisí na CRM a objemu kontaktů." },
      { q: "Jaká je minimální velikost databáze, aby to mělo smysl?", a: "Automatizace dávají smysl už od stovek kontaktů. Pro pravidelné newslettery doporučujeme alespoň 1 000 aktivních odběratelů." },
      { q: "Pomůžete i s GDPR a souhlasy?", a: "Ano. Nastavíme double opt-in, řízení souhlasů a unsubscribe procesy v souladu s GDPR i platformou." },
      { q: "Píšete i texty e-mailů?", a: "Ano, copywriting je součástí služby. Pracujeme s brand voice klienta a A/B testujeme předměty i obsah." },
      { q: "Jak řešíte doručitelnost?", a: "Nastavíme SPF, DKIM, DMARC, monitorujeme reputaci domény a čistíme databázi od neaktivních kontaktů." },
    ],
    relatedServices: ["ai-automatizace", "vykonnostni-reklama", "analytika-reporting"],
    relatedCases: ["automatizace-lead-generation", "google-ads-eshop-moda"],
    relatedPosts: ["ai-workflow-pro-marketing"],
  },

  {
    slug: "ai-automatizace",
    icon: Workflow,
    title: "AI automatizace — procesy, které šetří hodiny a zvyšují konverze",
    shortTitle: "AI automatizace",
    metaTitle: "AI automatizace — Make, n8n, ChatGPT, API integrace | Netmedio",
    metaDescription:
      "Automatizace procesů pomocí AI a moderních workflow nástrojů. Make, n8n, ChatGPT, Claude, Gemini, API integrace, reporting, lead qualification.",
    category: "Automatizace a AI",
    benefit:
      "Procesy, které běží 24/7 bez zásahu týmu — lead kvalifikace, reporting, interní workflow a AI asistence.",
    audience:
      "Firmy s rostoucím počtem leadů a opakujícími se procesy, kde tým utíká za administrativou místo prodeje.",
    heroIntro:
      "AI automatizace není experiment. Stavíme produkční workflow v Make, n8n a přímo nad API, které propojí web, PPC, CRM, fakturaci a AI modely tak, aby váš tým řešil obchod a ne kopírování dat mezi systémy.",
    problems: [
      { symptom: "Leady chodí, ale tým je nestíhá kvalifikovat", impact: "Studené leady se prodávají rovnou. Horké leady čekají dny na odpověď. Konverze klesá." },
      { symptom: "Marketing a obchod nemají společný report", impact: "Marketing tlačí na kvantitu, obchod žaluje kvalitu. Žádná shoda nad daty." },
      { symptom: "Reporting zabírá lidem desítky hodin měsíčně", impact: "Stažení dat z 5 systémů, ruční copy-paste do Excelu, e-mail vedení každé pondělí." },
      { symptom: "AI nástroje se zkoušejí, ale neškálují", impact: "Někdo z týmu objevil ChatGPT, ale nikdo neumí postavit produkční workflow." },
    ],
    approach: [
      { title: "1. Mapa procesů", desc: "Projdeme cestu leadu od kampaně po platbu. Označíme, kde tým ručně přenáší data nebo čeká na schválení." },
      { title: "2. Návrh automatizace", desc: "Vybereme procesy s nejvyšším poměrem zisk/náklad. Nezačínáme tím, co je technicky cool, ale co šetří hodiny." },
      { title: "3. Implementace workflow", desc: "Stavíme v Make, n8n nebo přímo nad API. Propojíme web, CRM, e-mail, kalendář, fakturaci a AI nástroje." },
      { title: "4. AI vrstva", desc: "Kvalifikace leadů, automatické odpovědi, zpracování dokumentů a generování obsahu přes OpenAI / Claude / Gemini API." },
      { title: "5. Monitoring a údržba", desc: "Každé workflow má alerting a fallback. Měsíční review výkonu a rozšiřování o další procesy." },
    ],
    includes: [
      "Audit současných procesů a nástrojů",
      "Návrh architektury automatizace",
      "Implementace workflow v Make / n8n",
      "Integrace web ↔ CRM ↔ e-mail ↔ kalendář ↔ fakturace",
      "AI workflow (OpenAI, Claude, Gemini API)",
      "Lead qualification přes AI",
      "Automatizovaný reporting do Looker Studio / Slack",
      "Monitoring, alerting a dokumentace",
      "Školení interního týmu",
    ],
    tools: [
      "Make",
      "n8n",
      "ChatGPT",
      "Claude",
      "Gemini",
      "API integrace",
      "Reporting",
      "Lead qualification",
      "Interní procesy",
      "HubSpot / Pipedrive",
    ],
    outcomes: [
      { kpi: "Úspora času týmu", value: "−40 až −70 % manuální práce" },
      { kpi: "Reakční čas na lead", value: "Z hodin na sekundy" },
      { kpi: "Pokrytí kvalifikace AI", value: "60–90 % leadů" },
      { kpi: "Náklady na reporting", value: "−80 % vs. ruční" },
    ],
    pricing: [
      { tier: "Audit a návrh", range: "od 9 900 Kč jednorázově", note: "Mapa procesů, návrh automatizace a odhad nákladů na nástroje." },
      { tier: "Implementace workflow", range: "od 15 000 Kč / workflow", note: "Závisí na složitosti a počtu integrací. Začínáme s jedním, rozšiřujeme postupně." },
      { tier: "Měsíční údržba", range: "od 3 900 Kč / měsíc", note: "Monitoring, alerting, drobné úpravy a rozšíření workflow." },
    ],
    faq: [
      { q: "V čem stavíte automatizace?", a: "Pro většinu klientů Make nebo n8n. Pro jednoduché propojení 2–3 nástrojů stačí Zapier. Pro náročné případy stavíme přímo nad API klienta." },
      { q: "Co když nepoužíváme CRM?", a: "Doporučíme jednoduché řešení (Pipedrive, HubSpot Free, Airtable) a postavíme automatizaci tak, aby CRM bylo místem pravdy." },
      { q: "Kolik měsíčně stojí provoz nástrojů?", a: "Typicky 1 000–8 000 Kč měsíčně podle objemu operací. Vždy hledáme řešení, kde licence nesní úsporu z automatizace." },
      { q: "Můžeme začít s jedním workflow a postupně rozšiřovat?", a: "Ano, doporučujeme to. Začínáme s 1–2 procesy s nejvyšším dopadem a každý měsíc přidáváme další." },
      { q: "Co když workflow přestane fungovat?", a: "Každé workflow má monitoring a alerting. V rámci údržby reagujeme typicky do několika hodin. Kritické procesy mají fallback." },
    ],
    relatedServices: ["analytika-reporting", "email-marketing", "vykonnostni-reklama"],
    relatedCases: ["automatizace-lead-generation", "b2b-web-analytika"],
    relatedPosts: ["ai-workflow-pro-marketing", "server-side-tracking-standard"],
  },

  {
    slug: "analytika-reporting",
    icon: BarChart3,
    title: "Analytika a reporting — přesné měření marketingu a obchodních výsledků",
    shortTitle: "Analytika a reporting",
    metaTitle: "Analytika a reporting — GA4, GTM, server-side tracking | Netmedio",
    metaDescription:
      "Přesné měření marketingu a obchodních výsledků. GA4, GTM, server-side tracking, BigQuery, Looker Studio, dashboardy a konverzní měření.",
    category: "Data a analytika",
    benefit:
      "Přesná data, ze kterých poznáte, co reálně přináší obchod — a kde plýtváte rozpočtem.",
    audience:
      "Firmy, které potřebují důvěryhodná data pro rozhodování — od základního měření až po pokročilou analytiku.",
    heroIntro:
      "Bez správně postaveného měření je každá optimalizace jen tipování. Stavíme GA4, GTM, server-side tracking a Looker Studio reporting tak, abyste viděli reálnou cestu zákazníka od první návštěvy až k platbě — napříč kanály a zařízeními.",
    problems: [
      { symptom: "GA4 ukazuje jiná čísla než PPC platformy", impact: "Sales se rozhoduje podle Excelu, marketing podle GA4, vedení podle ROAS. Tři pravdy." },
      { symptom: "Blokátory a iOS sní 20–40 % konverzí", impact: "Smart Bidding v Google Ads se učí na zkreslených datech a optimalizuje špatně." },
      { symptom: "Žádný report nad GA4", impact: "Každé pondělí někdo ručně dělá screenshoty a posílá je vedení. Drahé a chybové." },
      { symptom: "Offline konverze (telefon, prodejna) nejsou v měření", impact: "Polovina obchodu se ztrácí. PPC algoritmy vidí jen e-commerce konverze." },
    ],
    approach: [
      { title: "1. Audit současného měření", desc: "Projdeme GA4, GTM, konverze, publika a napojení na reklamní systémy. Najdeme duplicity, mezery a chyby." },
      { title: "2. Plán měření", desc: "Definujeme business KPI, eventy, konverze, vlastní rozměry a publika. Dokument, který přežije obměnu týmu." },
      { title: "3. Implementace GA4 a GTM", desc: "Čisté nasazení GA4 přes Google Tag Manager. Konzistentní pojmenování eventů a struktur." },
      { title: "4. Server-side tracking", desc: "Postavíme server-side GTM na Cloudflare nebo Google Cloud. Posíláme data přímo do GA4, Google Ads, Meta a Skliku." },
      { title: "5. Dashboardy a aktivace dat", desc: "Looker Studio dashboard sjednocený přes kanály. BigQuery, Customer Match, offline konverze, audience export do PPC." },
    ],
    includes: [
      "Audit GA4, GTM a měření konverzí",
      "Plán měření (business KPI → eventy → konverze)",
      "Implementace GA4 a Google Tag Manager",
      "Server-side tracking (GTM Server-Side na Cloudflare / GCP)",
      "Enhanced Conversions a offline konverze",
      "BigQuery export a vlastní analýzy",
      "Looker Studio dashboardy podle rolí (vedení, marketing, e-commerce)",
      "Konverzní měření napříč kanály a zařízeními",
      "Dokumentace a školení interního týmu",
    ],
    tools: [
      "GA4",
      "GTM",
      "Server-side tracking",
      "BigQuery",
      "Looker Studio",
      "Dashboardy",
      "Konverzní měření",
      "Cloudflare Workers",
      "Stape.io",
    ],
    outcomes: [
      { kpi: "Pokrytí konverzí po server-side", value: "+15 až +40 %" },
      { kpi: "Shoda mezi GA4 a sales reporty", value: "95+ %" },
      { kpi: "Čas na měsíční reporting", value: "−80 %" },
      { kpi: "Přesnost atribuce napříč kanály", value: "Jednotný zdroj pravdy" },
    ],
    pricing: [
      { tier: "Audit měření", range: "od 4 900 Kč jednorázově", note: "Detailní audit GA4, GTM a měření konverzí + akční plán." },
      { tier: "Implementace GA4 + GTM", range: "od 9 900 Kč jednorázově", note: "Měření přes klientský GTM, eventy, konverze, publika." },
      { tier: "Server-side tracking", range: "od 15 000 Kč + provoz", note: "Implementace na Cloudflare nebo GCP. Provoz 500–2 500 Kč / měsíc." },
      { tier: "Looker Studio dashboard", range: "od 5 900 Kč / dashboard", note: "Včetně datových konektorů a sjednocení zdrojů." },
    ],
    faq: [
      { q: "Co je server-side tracking a kdy ho potřebujeme?", a: "Server-side tracking přenáší měření z prohlížeče na váš server. Doporučujeme pro každého klienta s media spendem nad 50 000 Kč měsíčně." },
      { q: "Stačí jen GA4 bez GTM?", a: "Pro jednoduché firemní weby ano. Pro e-shopy, B2B s formuláři nebo víc kanály doporučujeme GTM kvůli udržovatelnosti a server-side trackingu." },
      { q: "Pracujete s BigQuery?", a: "Ano. GA4 → BigQuery export nasazujeme všem klientům s vyšším objemem dat. Otevírá to možnosti pro vlastní analýzy a long-term reporting." },
      { q: "Jak řešíte cookie consent (GDPR)?", a: "Implementujeme Consent Mode v2 (Google), případně CMP třetí strany (Cookiebot, OneTrust). Měření respektuje souhlas a využívá modelované konverze." },
      { q: "Děláte i e-commerce tracking pro Shoptet, Shopify, WooCommerce?", a: "Ano, máme předpřipravené šablony GTM pro nejčastější platformy. Stavíme Enhanced E-commerce s view_item, add_to_cart, begin_checkout a purchase eventy." },
    ],
    relatedServices: ["vykonnostni-reklama", "ai-automatizace", "seo-obsahovy-marketing"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda"],
    relatedPosts: ["server-side-tracking-standard", "kolik-stoji-ppc-kampane-2026"],
  },
];

export const pricingNote = CONSULT_NOTE;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
