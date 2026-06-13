import {
  LineChart,
  Search,
  Code2,
  Workflow,
  BarChart3,
  MessageSquare,
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
  "Konkrétní cenu vždy potvrdíme až po krátké konzultaci a auditu. Nikdy nepřeprodáváme media spend — fakturujeme transparentně oddělenou správu a útratu v reklamních systémech.";

export const services: Service[] = [
  {
    slug: "google-ads",
    icon: LineChart,
    title: "Google Ads — výkonnostní kampaně, které měřitelně zvyšují obrat",
    shortTitle: "Google Ads",
    metaTitle: "Google Ads správa | Certifikovaný Google Partner — Netmedio",
    metaDescription:
      "Správa Google Ads kampaní pro e-shopy a B2B. Performance Max, Search, server-side tracking, ROAS reporting. Google Partner od roku 2010.",
    category: "Výkonnostní marketing",
    benefit:
      "Více poptávek a vyšší obrat z Google Ads bez plýtvání rozpočtem.",
    audience: "E-shopy, B2B firmy a poskytovatelé služeb s rozpočtem od 30 000 Kč měsíčně.",
    heroIntro:
      "Spravujeme Google Ads kampaně od roku 2010 jako certifikovaný Google Partner. Stavíme strukturu účtu, měření a bid strategy tak, aby každá utracená koruna měla měřitelný dopad na obrat — ne jen na počet kliků.",
    problems: [
      {
        symptom: "Klesající ROAS u Performance Max",
        impact: "Rozpočet roste, ale tržby stagnují. Algoritmus tlačí prokliky na špatné publikum.",
      },
      {
        symptom: "Nemáte jistotu, co reálně přináší obchod",
        impact: "Bez server-side trackingu a offline konverzí se rozhodujete podle zkresleného GA4.",
      },
      {
        symptom: "Účet zdědili po předchozí agentuře",
        impact: "Stovky aktivních klíčových slov, žádná struktura, dvojité započítávání konverzí.",
      },
      {
        symptom: "Tlak na nižší cenu za lead",
        impact: "Sales se brání nekvalitním leadům, marketing dohání KPI a celá kampaň ztrácí směr.",
      },
    ],
    approach: [
      {
        title: "1. Audit účtu a měření",
        desc: "Projdeme strukturu kampaní, konverze, publika a napojení na GA4 a CRM. Výstupem je seznam ztrát a rychlých výher.",
      },
      {
        title: "2. Plán a struktura",
        desc: "Navrhneme strukturu kampaní podle marže, produktových skupin a fáze nákupu. Stanovíme bid strategy a cílový ROAS / CPA.",
      },
      {
        title: "3. Měření a server-side tracking",
        desc: "Nasadíme GA4, Google Tag Manager (klient + server-side), Enhanced Conversions a offline konverze z CRM.",
      },
      {
        title: "4. Spuštění a optimalizace",
        desc: "Týdenní cyklus: kontrola výkonu, úpravy bid strategy, testy creative a feedu, eliminace ztrátových segmentů.",
      },
      {
        title: "5. Reporting a růst",
        desc: "Měsíční Looker Studio report s ROAS, marží a doporučenými kroky. Růst rozpočtu vždy proti dosaženým výsledkům.",
      },
    ],
    includes: [
      "Audit stávajícího Google Ads účtu a měření",
      "Strategie kampaní: Search, Performance Max, Shopping, Demand Gen",
      "Strukturalizace kampaní podle marže a produktových skupin",
      "Nastavení a údržba bid strategy (tROAS, tCPA, Maximize Conversions)",
      "Server-side tracking přes Google Tag Manager",
      "Enhanced Conversions a offline konverze z CRM",
      "A/B testy reklamních textů, creative assetů a landing pages",
      "Optimalizace produktového feedu (Merchant Center)",
      "Měsíční Looker Studio report a strategická konzultace",
    ],
    tools: [
      "Google Ads",
      "Google Merchant Center",
      "Google Tag Manager (server-side)",
      "Google Analytics 4",
      "BigQuery",
      "Looker Studio",
      "Performance Max scripts",
      "Optmyzr",
    ],
    outcomes: [
      { kpi: "ROAS u e-shopů", value: "500–1200 %" },
      { kpi: "Snížení CPA u leadů", value: "−30 až −60 %" },
      { kpi: "Růst obratu z PPC", value: "+40 až +180 % / rok" },
      { kpi: "Pokrytí konverzí (server-side)", value: "+15 až +35 %" },
    ],
    pricing: [
      {
        tier: "Audit a strategie",
        range: "od 24 000 Kč jednorázově",
        note: "Detailní audit účtu, měření, doporučená struktura a rozpočet.",
      },
      {
        tier: "Správa kampaní — paušál",
        range: "od 15 000 Kč / měsíc",
        note: "Pro účty s media spendem do 100 000 Kč. Fixní cena, transparentní reporting.",
      },
      {
        tier: "Správa kampaní — procentuální",
        range: "10–15 % z media spendu",
        note: "Pro účty nad 100 000 Kč / měsíc. Cena škáluje s objemem práce.",
      },
    ],
    faq: [
      {
        q: "Za jak dlouho uvidíme první výsledky?",
        a: "U Search kampaní s jasnou nákupní poptávkou typicky během 1–2 týdnů. Performance Max a Smart Bidding potřebují 4–8 týdnů na zaučení algoritmu.",
      },
      {
        q: "Pracujete i s malými rozpočty pod 30 000 Kč?",
        a: "Pro menší rozpočty doporučujeme nejdřív audit a strategii. Pokud má smysl spustit kampaně, navrhneme variantu, kde fee nesní celý rozpočet.",
      },
      {
        q: "Co je to server-side tracking a proč ho potřebujeme?",
        a: "Server-side tracking přenese měření z prohlížeče na váš server. Dramaticky zlepší přesnost konverzí, sníží vliv blokátorů a prodlouží životnost cookies. Standardně ho nasazujeme u všech klientů s media spendem nad 50 000 Kč.",
      },
      {
        q: "Jak řešíte přístupy a vlastnictví účtu?",
        a: "Google Ads účet vždy vlastní klient. Pracujeme z MCC účtu Netmedia. Pokud spolupráci ukončíte, přístupy jen odebereme — žádný lock-in.",
      },
      {
        q: "Reportujete jen kliky a ROAS, nebo i marži?",
        a: "Pracujeme s marží, pokud nám klient sdílí marže produktů nebo skupin. Optimalizace na čistý zisk dává mnohem lepší výsledky než optimalizace na tržbu.",
      },
      {
        q: "Děláte i Sklik a Meta Ads?",
        a: "Ano. Sklik vedeme ve službě PPC správa, Meta Ads přidáváme jako doplňkový kanál tam, kde dávají smysl (e-commerce, lifestyle, lokální služby).",
      },
    ],
    relatedServices: ["ppc-sprava", "analytika-mereni", "marketingova-automatizace"],
    relatedCases: ["google-ads-eshop-moda", "automatizace-lead-generation"],
    relatedPosts: ["kolik-stoji-ppc-kampane-2026", "google-ads-vs-sklik", "server-side-tracking-standard"],
  },

  {
    slug: "ppc-sprava",
    icon: Search,
    title: "PPC správa — Google Ads, Sklik a Meta Ads pod jednou střechou",
    shortTitle: "PPC správa",
    metaTitle: "PPC správa kampaní — Google Ads, Sklik, Meta Ads | Netmedio",
    metaDescription:
      "Komplexní správa PPC kampaní. Google Ads, Sklik, Meta Ads s jednotnou strategií, měřením a reportingem. Certifikovaný Google Partner.",
    category: "Výkonnostní marketing",
    benefit:
      "Sjednocená výkonnostní strategie napříč Google, Seznamem a Metou — bez duplicit a se společným měřením.",
    audience: "Firmy, které chtějí jednu zodpovědnou osobu pro celý výkonnostní marketing.",
    heroIntro:
      "Místo tří dodavatelů pro tři kanály vedeme všechny PPC platformy z jednoho místa. Sjednotíme strukturu, měření, atribuci a reporting tak, aby kanály spolupracovaly — ne aby si kanibalizovaly konverze.",
    problems: [
      {
        symptom: "Tři kanály, tři reporty, tři pravdy",
        impact: "Sečtené konverze z Google + Sklik + Meta jsou vyšší než reálné objednávky.",
      },
      {
        symptom: "Sklik běží jen ze setrvačnosti",
        impact: "Kampaně bez aktivní správy, žádný feed na Zboží.cz, mizí celý regionální potenciál.",
      },
      {
        symptom: "Meta Ads dělá brand awareness, ne obchod",
        impact: "Bez napojení na CRM a server-side eventy se prodejní hodnota Mety neměří správně.",
      },
      {
        symptom: "Klient nerozumí, kam jdou peníze",
        impact: "Tři faktury, tři rozhraní, žádný společný KPI dashboard.",
      },
    ],
    approach: [
      {
        title: "1. Audit všech kanálů",
        desc: "Projdeme Google Ads, Sklik, Meta Ads, Merchant Center, Zboží.cz a měření. Společný výstup, jeden plán.",
      },
      {
        title: "2. Společná atribuce",
        desc: "Postavíme jednotné měření v GA4 + server-side GTM. Eliminujeme dvojité započítávání konverzí mezi kanály.",
      },
      {
        title: "3. Rozdělení rolí kanálů",
        desc: "Každý kanál dostane jasnou roli (akvizice, retence, brand). Rozpočet alokujeme podle marginal ROAS, ne podle pocitu.",
      },
      {
        title: "4. Týdenní cyklus optimalizací",
        desc: "Konzistentní rytmus: úpravy bid strategy, feedu, kreativ, vylučovacích slov, publik a remarketingových sekvencí.",
      },
      {
        title: "5. Jeden report, jedno rozhodnutí",
        desc: "Looker Studio dashboard s tržbou, marží, ROAS a CPL napříč kanály. Měsíční strategické call.",
      },
    ],
    includes: [
      "Správa Google Ads, Sklik a Meta Ads",
      "Optimalizace Merchant Center a Zboží.cz feedu",
      "Společné měření a atribuce přes GA4 a server-side GTM",
      "Remarketingové sekvence napříč kanály",
      "Týdenní optimalizace bid strategy a publik",
      "A/B testy reklamních kreativ a landing pages",
      "Looker Studio dashboard sjednocený přes kanály",
      "Měsíční strategické call + akční plán",
    ],
    tools: [
      "Google Ads",
      "Sklik",
      "Meta Ads",
      "Google Merchant Center",
      "Zboží.cz",
      "Google Tag Manager (server-side)",
      "Google Analytics 4",
      "Looker Studio",
    ],
    outcomes: [
      { kpi: "Snížení duplicitních konverzí", value: "−10 až −25 %" },
      { kpi: "Růst obratu z Skliku po reaktivaci", value: "+30 až +80 %" },
      { kpi: "Pokles celkového CPA", value: "−20 až −45 %" },
      { kpi: "Lepší marginal ROAS", value: "Až o 35 % vyšší" },
    ],
    pricing: [
      {
        tier: "Audit PPC ekosystému",
        range: "od 32 000 Kč jednorázově",
        note: "Audit všech kanálů, atribuce a doporučená struktura.",
      },
      {
        tier: "Správa 2 kanálů",
        range: "od 22 000 Kč / měsíc",
        note: "Typicky Google Ads + Sklik nebo Google Ads + Meta.",
      },
      {
        tier: "Správa 3 kanálů (kompletní)",
        range: "od 32 000 Kč / měsíc",
        note: "Google Ads + Sklik + Meta s jednotným reportingem.",
      },
    ],
    faq: [
      {
        q: "Proč mít všechny PPC kanály u jedné agentury?",
        a: "Hlavně kvůli atribuci. Když Google, Sklik a Meta běží odděleně, každý kanál si připisuje stejné konverze. Sjednocené měření vám ukáže reálný incremental přínos každého kanálu.",
      },
      {
        q: "Sklik dnes ještě dává smysl?",
        a: "Pro většinu e-shopů ano — Zboží.cz a regionální poptávka jsou stále silné. Pro B2B s mladší cílovkou často ne. Vyhodnocujeme to z dat klienta, ne ze stereotypu.",
      },
      {
        q: "Kolik měsíčně do Mety, aby to mělo smysl?",
        a: "Pro výkonnostní Meta Ads s katalogem doporučujeme minimum 20 000 Kč media spendu měsíčně. Pod touto hranicí algoritmus Mety nestihne projít fází učení.",
      },
      {
        q: "Co když máme jen Google Ads a chceme přidat další kanál?",
        a: "Začneme analýzou cílovky a sortimentu. Někdy dává smysl Sklik, jindy Meta, často kombinace. Doporučení vždy stavíme na datech, ne na trendech.",
      },
      {
        q: "Jak řešíte reporting napříč kanály?",
        a: "Stavíme klientovi vlastní Looker Studio dashboard, kde vidí tržbu, marži, ROAS a CPL napříč Google, Sklikem a Metou. Aktualizace dat denně.",
      },
    ],
    relatedServices: ["google-ads", "analytika-mereni", "marketingova-automatizace"],
    relatedCases: ["google-ads-eshop-moda", "b2b-web-analytika"],
    relatedPosts: ["google-ads-vs-sklik", "kolik-stoji-ppc-kampane-2026", "jak-poznat-dobrou-ppc-agenturu"],
  },

  {
    slug: "tvorba-webu",
    icon: Code2,
    title: "Tvorba webů — rychlé, čisté weby postavené pro konverze",
    shortTitle: "Tvorba webů",
    metaTitle: "Tvorba webů — moderní firemní weby a landing pages | Netmedio",
    metaDescription:
      "Tvorba moderních firemních webů, landing pages a e-shopů. Performance-first, perfektně měřitelné, SEO-ready. Cloudflare, WordPress, Lovable.",
    category: "Weby a vývoj",
    benefit:
      "Web, který se rychle načítá, dobře měří a převádí návštěvníky na poptávky.",
    audience: "Firmy, které potřebují web jako reálný akviziční kanál — ne jako digitální vizitku.",
    heroIntro:
      "Děláme weby, které vydrží roky a hlavně přinášejí výsledky. Stavíme na moderním stacku (Cloudflare, WordPress, Lovable), s důrazem na rychlost, SEO základ, čisté měření a snadné rozšiřování o landing pages.",
    problems: [
      {
        symptom: "Web vypadá hezky, ale negeneruje poptávky",
        impact: "Hero bez jasné nabídky, žádné CTA, neměřené formuláře. Marketing nemá co optimalizovat.",
      },
      {
        symptom: "Pomalé načítání, špatné Core Web Vitals",
        impact: "Vyšší cena PPC kampaní, horší pozice v Google, ztráta mobilních návštěvníků.",
      },
      {
        symptom: "Nikdo neumí web aktualizovat",
        impact: "Každá změna trvá týdny a stojí tisíce. Tým se vyhýbá zveřejňování nových služeb.",
      },
      {
        symptom: "Nelze postavit landing page za den",
        impact: "PPC strategie je svázaná nepružným CMS. Kampaně cílí na nevhodný obsah.",
      },
    ],
    approach: [
      {
        title: "1. Brief, cíle a měření",
        desc: "Začínáme byznys cíli a KPI, ne wireframem. Definujeme, co web musí umět měřit a generovat.",
      },
      {
        title: "2. Informační architektura a wireframe",
        desc: "Postavíme strukturu, navigaci a hierarchii sekcí. Rozhodneme, co je primární a co může počkat na fázi 2.",
      },
      {
        title: "3. Design a UX",
        desc: "Vizuální systém v souladu s brandem. Důraz na čitelnost, jasné CTA a konzistentní šablony pro budoucí landing pages.",
      },
      {
        title: "4. Vývoj a performance",
        desc: "Stavíme na rychlém stacku (Cloudflare CDN, edge rendering, optimalizovaný JS/CSS, server-side i hybrid renderování).",
      },
      {
        title: "5. Měření, SEO a launch",
        desc: "GA4 + GTM, server-side tracking, schema.org, sitemap, robots.txt, on-page SEO a redirect plán z původního webu.",
      },
    ],
    includes: [
      "Strategie, IA a UX wireframy",
      "Vizuální design (firemní web nebo landing page)",
      "Frontend vývoj (Cloudflare, WordPress, Lovable / TanStack Start)",
      "Optimalizace Core Web Vitals a obrázků",
      "GA4, Google Tag Manager (klient + server-side)",
      "Schema.org markup (Organization, Article, FAQ, Breadcrumb)",
      "On-page SEO základ a redirect plán",
      "Sitemap, robots.txt a indexace v Google Search Console",
      "Školení klienta na úpravu obsahu",
    ],
    tools: [
      "Cloudflare (Workers, R2, CDN)",
      "WordPress",
      "Lovable / TanStack Start",
      "Figma",
      "Google Tag Manager",
      "Google Search Console",
      "Google PageSpeed Insights",
    ],
    outcomes: [
      { kpi: "Zlepšení Core Web Vitals", value: "Z červené do zelené" },
      { kpi: "Růst organické návštěvnosti", value: "+30 až +120 % / 6 měsíců" },
      { kpi: "Konverzní poměr formulářů", value: "+40 až +150 %" },
      { kpi: "Čas na vytvoření landing page", value: "1 den vs. 2 týdny" },
    ],
    pricing: [
      {
        tier: "Landing page",
        range: "od 45 000 Kč",
        note: "Jednostránka pro PPC kampaň. Včetně designu, vývoje a měření.",
      },
      {
        tier: "Firemní web",
        range: "od 120 000 Kč",
        note: "5–15 stránek, šablonový systém, redakce obsahu, SEO základ.",
      },
      {
        tier: "Web na míru",
        range: "individuální nabídka",
        note: "Komplexní weby s integracemi (CRM, ERP, rezervace, fakturace).",
      },
    ],
    faq: [
      {
        q: "Na čem stavíte weby?",
        a: "Podle požadavků klienta. Pro firmy s častou redakcí obsahu volíme WordPress. Pro rychlé a moderní weby Lovable / TanStack Start na Cloudflare. Pro landing pages často kombinaci s headless CMS.",
      },
      {
        q: "Jak dlouho trvá vyrobit firemní web?",
        a: "Standardní firemní web 6–10 týdnů od briefu po launch. Landing page 2–3 týdny. Závisí na rychlosti dodání obsahu od klienta.",
      },
      {
        q: "Děláte i e-shopy?",
        a: "Pro velké e-shopy doporučujeme specializované řešení (Shopify, Shoptet Premium, Shopware). Postavíme měření, PPC a feedy. Pro produktové katalogy s objednávkou e-mailem stavíme vlastní řešení.",
      },
      {
        q: "Co po launchi? Údržba?",
        a: "Nabízíme měsíční údržbu (aktualizace, bezpečnost, drobné úpravy) nebo pracujeme na bázi vyčerpání hodin podle potřeby.",
      },
      {
        q: "Můžeme web v budoucnu rozšířit?",
        a: "Ano, weby stavíme tak, aby šly škálovat. Šablonový systém umožňuje přidávat nové stránky, sekce a landing pages bez nutnosti přestavby.",
      },
    ],
    relatedServices: ["analytika-mereni", "google-ads", "konzultace"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda"],
    relatedPosts: ["server-side-tracking-standard", "kolik-stoji-ppc-kampane-2026"],
  },

  {
    slug: "marketingova-automatizace",
    icon: Workflow,
    title: "Marketingová automatizace — méně manuální práce, víc leadů",
    shortTitle: "Marketingová automatizace",
    metaTitle: "Marketingová automatizace a AI workflow | Netmedio",
    metaDescription:
      "Automatizace lead generation, nurturingu a reportingu. Propojení marketingu, CRM a AI nástrojů. Make, n8n, Zapier, Apify, OpenAI.",
    category: "Automatizace a AI",
    benefit:
      "Procesy, které běží 24/7 bez zásahu týmu — lead nurturing, reporting, kvalifikace, AI workflow.",
    audience: "Firmy s rostoucím počtem leadů, kde tým utíká za administrativou místo prodeje.",
    heroIntro:
      "Marketingová automatizace není jen e-mail sequence. Stavíme workflow, které propojí web, PPC, CRM, fakturaci a AI nástroje tak, aby váš tým řešil obchod a ne kopírování dat mezi systémy.",
    problems: [
      {
        symptom: "Leady chodí, ale tým je nestíhá kvalifikovat",
        impact: "Studené leady se prodávají rovnou. Horké leady čekají dny na odpověď. Konverze klesá.",
      },
      {
        symptom: "Marketing a obchod nemají společný report",
        impact: "Marketing tlačí na kvantitu, obchod žaluje kvalitu. Žádná shoda nad daty.",
      },
      {
        symptom: "Reporting zabírá lidem desítky hodin měsíčně",
        impact: "Stažení dat z 5 systémů, ruční copy-paste do Excelu, e-mail vedení každé pondělí.",
      },
      {
        symptom: "AI nástroje se zkoušejí, ale neškálují",
        impact: "Někdo z týmu objevil ChatGPT, ale nikdo neumí postavit produkční workflow.",
      },
    ],
    approach: [
      {
        title: "1. Mapa procesů",
        desc: "Projdeme cestu leadu od kampaně po platbu. Označíme, kde tým ručně přenáší data nebo čeká na schválení.",
      },
      {
        title: "2. Návrh automatizace",
        desc: "Vybereme procesy s nejvyšším poměrem zisk/náklad. Nezačínáme tím, co je technicky cool, ale co šetří hodiny.",
      },
      {
        title: "3. Implementace workflow",
        desc: "Stavíme v Make, n8n nebo přímo v API. Propojíme web, CRM, e-mail, kalendář, fakturaci a AI nástroje.",
      },
      {
        title: "4. AI vrstva",
        desc: "Kvalifikace leadů, automatické odpovědi, zpracování dokumentů a generování obsahu přes OpenAI / Claude API.",
      },
      {
        title: "5. Monitoring a údržba",
        desc: "Každé workflow má alerting a fallback. Měsíční review výkonu a rozšiřování o další procesy.",
      },
    ],
    includes: [
      "Audit současných procesů a nástrojů",
      "Návrh architektury automatizace",
      "Implementace workflow v Make / n8n / Zapier",
      "Integrace web ↔ CRM ↔ e-mail ↔ kalendář ↔ fakturace",
      "AI workflow (OpenAI, Claude, Gemini API)",
      "Automatizovaný reporting do Looker Studio / Slack / e-mail",
      "Monitoring, alerting a dokumentace",
      "Školení interního týmu",
    ],
    tools: [
      "Make (Integromat)",
      "n8n",
      "Zapier",
      "OpenAI / Claude / Gemini API",
      "Apify",
      "Airtable",
      "HubSpot / Pipedrive",
      "Slack",
    ],
    outcomes: [
      { kpi: "Úspora času týmu", value: "−40 až −70 % manuální práce" },
      { kpi: "Reakční čas na lead", value: "Z hodin na sekundy" },
      { kpi: "Pokrytí kvalifikace AI", value: "60–90 % leadů" },
      { kpi: "Náklady na reporting", value: "−80 % vs. ruční" },
    ],
    pricing: [
      {
        tier: "Audit a návrh",
        range: "od 28 000 Kč jednorázově",
        note: "Mapa procesů, návrh automatizace a odhad nákladů na nástroje.",
      },
      {
        tier: "Implementace workflow",
        range: "od 35 000 Kč / workflow",
        note: "Závisí na složitosti, počtu integrací a AI vrstvě.",
      },
      {
        tier: "Měsíční údržba",
        range: "od 8 000 Kč / měsíc",
        note: "Monitoring, alerting, drobné úpravy a rozšíření workflow.",
      },
    ],
    faq: [
      {
        q: "V čem stavíte automatizace?",
        a: "Pro většinu klientů volíme Make nebo n8n. Pro jednoduché propojení 2–3 nástrojů stačí Zapier. Pro náročné případy stavíme přímo na API klienta.",
      },
      {
        q: "Co když nepoužíváme CRM?",
        a: "Doporučíme jednoduché řešení (Pipedrive, HubSpot Free, Airtable) a postavíme automatizaci tak, aby CRM bylo místem pravdy.",
      },
      {
        q: "Kolik měsíčně stojí provoz nástrojů?",
        a: "Typicky 1 000–8 000 Kč měsíčně podle objemu operací. Vždy hledáme řešení, kde licence nesní úsporu z automatizace.",
      },
      {
        q: "Můžeme začít s jedním workflow a postupně rozšiřovat?",
        a: "Ano, doporučujeme to. Začínáme s 1–2 procesy s nejvyšším dopadem a každý měsíc přidáváme další.",
      },
      {
        q: "Co když workflow přestane fungovat?",
        a: "Každé workflow má monitoring a alerting. V rámci údržby reagujeme typicky do několika hodin. Kritické procesy mají fallback.",
      },
    ],
    relatedServices: ["analytika-mereni", "google-ads", "konzultace"],
    relatedCases: ["automatizace-lead-generation", "b2b-web-analytika"],
    relatedPosts: ["ai-workflow-pro-marketing", "server-side-tracking-standard"],
  },

  {
    slug: "analytika-mereni",
    icon: BarChart3,
    title: "Analytika a měření — data, na kterých můžete stavět rozhodnutí",
    shortTitle: "Analytika a měření",
    metaTitle: "GA4, server-side tracking a měření konverzí | Netmedio",
    metaDescription:
      "Implementace GA4, Google Tag Manager, server-side trackingu a Looker Studio reportingu. Přesné měření konverzí napříč kanály.",
    category: "Data a analytika",
    benefit:
      "Přesné, ucelené měření, ze kterého poznáte, co reálně přináší obchod — a kde plýtváte rozpočtem.",
    audience: "Firmy s rostoucími rozpočty na marketing, které potřebují důvěryhodnou datovou základnu.",
    heroIntro:
      "Bez správně postaveného měření je každá optimalizace jen tipování. Stavíme GA4, GTM, server-side tracking a Looker Studio reporting tak, abyste viděli reálnou cestu zákazníka od první návštěvy až k platbě — napříč kanály a zařízeními.",
    problems: [
      {
        symptom: "GA4 ukazuje jiná čísla než PPC platformy",
        impact: "Sales se rozhoduje podle Excelu, marketing podle GA4, vedení podle ROAS. Tři pravdy.",
      },
      {
        symptom: "Blokátory a iOS sní 20–40 % konverzí",
        impact: "Smart Bidding v Google Ads se učí na zkreslených datech a optimalizuje špatně.",
      },
      {
        symptom: "Žádný report nad GA4",
        impact: "Každé pondělí někdo ručně dělá screenshoty a posílá je vedení. Drahé a chybové.",
      },
      {
        symptom: "Offline konverze (telefon, prodejna) nejsou v měření",
        impact: "Polovina obchodu se ztrácí. PPC algoritmy vidí jen e-commerce konverze.",
      },
    ],
    approach: [
      {
        title: "1. Audit současného měření",
        desc: "Projdeme GA4, GTM, konverze, publika a napojení na reklamní systémy. Najdeme duplicity, mezery a chyby.",
      },
      {
        title: "2. Plán měření (Measurement Plan)",
        desc: "Definujeme business KPI, eventy, konverze, vlastní rozměry a publika. Dokument, který přežije obměnu týmu.",
      },
      {
        title: "3. Implementace GA4 a GTM",
        desc: "Čisté nasazení GA4 přes Google Tag Manager. Konzistentní pojmenování eventů a struktur.",
      },
      {
        title: "4. Server-side tracking",
        desc: "Postavíme server-side GTM na Cloudflare nebo Google Cloud. Posíláme data přímo do GA4, Google Ads, Meta a Skliku.",
      },
      {
        title: "5. Reporting a aktivace dat",
        desc: "Looker Studio dashboard sjednocený přes kanály. Customer Match, offline konverze, audience export do PPC.",
      },
    ],
    includes: [
      "Audit GA4, GTM a měření konverzí",
      "Measurement Plan (business KPI → eventy → konverze)",
      "Implementace GA4 a Google Tag Manager",
      "Server-side tracking (GTM Server-Side na Cloudflare / GCP)",
      "Enhanced Conversions a offline konverze",
      "Customer Match a publika do PPC kanálů",
      "Looker Studio dashboardy podle rolí (vedení, marketing, e-commerce)",
      "BigQuery export a vlastní analýzy",
      "Dokumentace a školení interního týmu",
    ],
    tools: [
      "Google Analytics 4",
      "Google Tag Manager (client + server-side)",
      "Looker Studio",
      "BigQuery",
      "Google Search Console",
      "Cloudflare Workers",
      "Stape.io",
      "Segment / RudderStack",
    ],
    outcomes: [
      { kpi: "Pokrytí konverzí po server-side", value: "+15 až +40 %" },
      { kpi: "Shoda mezi GA4 a sales reporty", value: "95+ %" },
      { kpi: "Čas na měsíční reporting", value: "−80 %" },
      { kpi: "Přesnost atribuce napříč kanály", value: "Jednotný zdroj pravdy" },
    ],
    pricing: [
      {
        tier: "Audit měření",
        range: "od 18 000 Kč jednorázově",
        note: "Detailní audit GA4, GTM a měření konverzí + akční plán.",
      },
      {
        tier: "Implementace GA4 + GTM",
        range: "od 45 000 Kč jednorázově",
        note: "Měření přes klientský GTM, eventy, konverze, publika.",
      },
      {
        tier: "Server-side tracking",
        range: "od 35 000 Kč + provoz",
        note: "Implementace na Cloudflare nebo GCP. Provoz 500–2 500 Kč / měsíc podle objemu.",
      },
      {
        tier: "Looker Studio dashboard",
        range: "od 18 000 Kč / dashboard",
        note: "Včetně datových konektorů a sjednocení zdrojů.",
      },
    ],
    faq: [
      {
        q: "Co je server-side tracking a kdy ho potřebujeme?",
        a: "Server-side tracking přenáší měření z prohlížeče na váš server. Doporučujeme ho pro každého klienta s media spendem nad 50 000 Kč měsíčně — zlepší přesnost konverzí a prodlouží životnost cookies.",
      },
      {
        q: "Stačí jen GA4 bez GTM?",
        a: "Pro jednoduché firemní weby ano. Pro e-shopy, B2B s formuláři nebo víc kanály doporučujeme GTM kvůli udržovatelnosti a server-side trackingu.",
      },
      {
        q: "Pracujete s BigQuery?",
        a: "Ano. GA4 → BigQuery export nasazujeme všem klientům s vyšším objemem dat. Otevírá to možnosti pro vlastní analýzy a long-term reporting.",
      },
      {
        q: "Jak řešíte cookie consent (GDPR)?",
        a: "Implementujeme Consent Mode v2 (Google), případně CMP třetí strany (Cookiebot, OneTrust). Měření respektuje souhlas a využívá modelované konverze.",
      },
      {
        q: "Děláte i e-commerce tracking pro Shoptet, Shopify, WooCommerce?",
        a: "Ano, máme předpřipravené šablony GTM pro nejčastější platformy. Stavíme Enhanced E-commerce s view_item, add_to_cart, begin_checkout a purchase eventy.",
      },
    ],
    relatedServices: ["google-ads", "ppc-sprava", "marketingova-automatizace"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda"],
    relatedPosts: ["server-side-tracking-standard", "kolik-stoji-ppc-kampane-2026"],
  },

  {
    slug: "konzultace",
    icon: MessageSquare,
    title: "Konzultace — strategický pohled, který odemkne další růst",
    shortTitle: "Konzultace",
    metaTitle: "Marketingová konzultace s Ing. Tomášem Hurychem | Netmedio",
    metaDescription:
      "Hodinové i dlouhodobé konzultace v digitálním marketingu. PPC, weby, analytika, automatizace. 15+ let praxe, certifikovaný Google Partner.",
    category: "Strategie",
    benefit:
      "Konkrétní doporučení k vašemu marketingu — bez závazku ke správě a bez prodejní omáčky.",
    audience: "Majitelé firem, marketing manažeři a interní týmy, které potřebují externí pohled.",
    heroIntro:
      "Někdy nepotřebujete novou agenturu, ale jen pár hodin s někým, kdo si tím už prošel. Konzultace s Tomášem Hurychem (zakladatel Netmedia, 15+ let v digital marketingu) přináší konkrétní doporučení pro vaši situaci — PPC, weby, analytiku, automatizaci nebo celkovou strategii.",
    problems: [
      {
        symptom: "Nejste si jistí, jestli vaše agentura odvádí dobrou práci",
        impact: "Účet vypadá zdravě, ale chybí nezávislý pohled. Druhý názor odhalí, co se přehlíží.",
      },
      {
        symptom: "Plánujete velkou investici do marketingu",
        impact: "Před spuštěním kampaní za stovky tisíc dává smysl 1 den s konzultantem.",
      },
      {
        symptom: "Interní tým potřebuje sparing",
        impact: "Senior pohled na strategii, prioritizaci a řešení konkrétních problémů.",
      },
      {
        symptom: "Stojíte před výběrem agentury nebo nástroje",
        impact: "Konzultant ušetří měsíce hledání a chybných rozhodnutí.",
      },
    ],
    approach: [
      {
        title: "1. Krátký brief",
        desc: "Před call si projdeme situaci v 15 minutách — vaše cíle, čísla a hlavní otázky.",
      },
      {
        title: "2. Příprava na konzultaci",
        desc: "Projdeme váš web, účty, analytiku a konkurenci. Konzultace pak neslouží k sběru informací.",
      },
      {
        title: "3. Konzultační call",
        desc: "60–120 minut konkrétních doporučení. Zaznamenáno, abyste se mohli vrátit.",
      },
      {
        title: "4. Akční plán",
        desc: "Stručný dokument s prioritami a kroky, který si můžete převzít interně nebo dát jiné agentuře.",
      },
      {
        title: "5. Follow-up (volitelně)",
        desc: "Možnost dalších konzultací, auditu nebo přechodu na plnou spolupráci.",
      },
    ],
    includes: [
      "Příprava nad vaším účtem, webem a daty",
      "60–120 minut osobní konzultace (online nebo osobně)",
      "Záznam a poznámky z konzultace",
      "Akční plán s prioritami",
      "Doporučení dodavatelů a nástrojů (bez provizí)",
      "1× follow-up otázka e-mailem do 14 dnů",
    ],
    tools: [
      "Google Meet / Zoom",
      "Loom (záznam)",
      "Notion (akční plán)",
      "Looker Studio (rychlá analýza)",
    ],
    outcomes: [
      { kpi: "Konkrétní akční kroky", value: "5–15 ks na call" },
      { kpi: "Úspora času interního týmu", value: "Týdny rozhodování" },
      { kpi: "Nezávislý druhý názor", value: "Bez prodejní omáčky" },
      { kpi: "Návratnost konzultace", value: "Typicky 10× a víc" },
    ],
    pricing: [
      {
        tier: "Hodinová konzultace",
        range: "3 500 Kč / 60 min",
        note: "Online, bez přípravy. Vhodné pro konkrétní jednorázové otázky.",
      },
      {
        tier: "Konzultace s přípravou",
        range: "12 000 Kč / 90 min",
        note: "Včetně přípravy nad účtem, webem a daty + akční plán.",
      },
      {
        tier: "Pravidelný sparing",
        range: "od 14 000 Kč / měsíc",
        note: "2× 90 min měsíčně + průběžná podpora e-mailem.",
      },
    ],
    faq: [
      {
        q: "S čím nejčastěji klienti přicházejí?",
        a: "Druhý názor na PPC účty, plánování nového webu, audit měření, výběr nástroje (CRM, CMS, automatizační platforma) a strategické rozhodnutí o rozpočtech.",
      },
      {
        q: "Můžeme po konzultaci přejít na plnou spolupráci?",
        a: "Ano, ale není to podmínka. Konzultace funguje samostatně a často je výstupem doporučení, aby si klient pokračoval interně nebo s jinou agenturou.",
      },
      {
        q: "Děláte i audity bez konzultace?",
        a: "Ano, nabízíme samostatné audity (PPC, měření, web). Konzultace dává smysl, když chcete výstup probrat a získat doporučení.",
      },
      {
        q: "Konzultujete i pro malé firmy a živnostníky?",
        a: "Ano, hodinová konzultace je dostupná i pro malé rozpočty. Často ušetří víc, než stojí.",
      },
      {
        q: "Jak rychle se na konzultaci dostanu?",
        a: "Standardně do 7–10 dnů. Pro urgentní rozhodnutí se snažíme najít termín dříve.",
      },
    ],
    relatedServices: ["google-ads", "tvorba-webu", "analytika-mereni"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda", "automatizace-lead-generation"],
    relatedPosts: ["jak-poznat-dobrou-ppc-agenturu", "kolik-stoji-ppc-kampane-2026"],
  },
];

export const pricingNote = CONSULT_NOTE;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
