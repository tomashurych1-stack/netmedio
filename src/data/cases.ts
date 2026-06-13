export type ResultMetric = { metric: string; value: string; note?: string };
export type CaseSection = { heading: string; paragraphs: string[] };

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  industry: string;
  clientType: string;
  duration: string;
  date: string; // ISO
  dateLabel: string;
  summary: string;
  initialSituation: string[];
  challenges: string[];
  analysis: CaseSection;
  solution: CaseSection[];
  tools: string[];
  results: ResultMetric[];
  lessons: string[];
  headlineResult: string;
  relatedServices: string[];
  relatedCases: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "google-ads-eshop-moda",
    title: "Restrukturalizace Google Ads pro fashion e-shop: +182 % obrat z PPC",
    shortTitle: "Google Ads pro fashion e-shop",
    metaTitle: "Případová studie: Google Ads pro fashion e-shop | Netmedio",
    metaDescription:
      "Restrukturalizace Performance Max kampaní, server-side tracking a optimalizace feedu vedly k +182 % obratu z PPC za 6 měsíců.",
    industry: "E-commerce — móda a doplňky",
    clientType: "Střední e-shop, roční obrat 25 mil. Kč",
    duration: "6 měsíců spolupráce, pokračuje",
    date: "2026-03-15",
    dateLabel: "Březen 2026",
    summary:
      "Klient po dvou letech s předchozí agenturou viděl klesající ROAS a rostoucí závislost na slevových akcích. Po auditu jsme přebudovali strukturu kampaní, nasadili server-side tracking a optimalizovali produktový feed. Za 6 měsíců +182 % obratu z PPC a pokles CPA o 38 %.",
    initialSituation: [
      "Měsíční media spend v Google Ads kolem 220 000 Kč, ROAS 380 % (cíl byl 600 %).",
      "Jediná Performance Max kampaň pokrývala celý sortiment bez segmentace marže.",
      "GA4 ukazoval o 28 % méně konverzí než reálně proběhlo v e-shopu.",
      "Tým interního marketéra trávil polovinu času manuálním reportingem.",
    ],
    challenges: [
      "Rostoucí cena za akvizici v sezónních špičkách.",
      "Performance Max kanibalizoval brandové dotazy s lacinou Search kampaní.",
      "Produktový feed v Merchant Center obsahoval 14 % zamítnutých nabídek.",
      "Žádné rozdělení rozpočtu podle marže produktových skupin.",
    ],
    analysis: {
      heading: "Analýza a hypotézy",
      paragraphs: [
        "Audit účtu ukázal, že jediná Performance Max kampaň optimalizovala na průměrný ROAS napříč celým katalogem. Algoritmus tlačil rozpočet do nízkomaržových bestsellerů (slevy, sezónní akce) a podinvestoval do produktů s 60+ % marží.",
        "Server-side tracking byl naplánovaný, ale nikdy nedotažený. Část konverzí se ztrácela kvůli blokátorům a iOS — odhadem 20–35 % objednávek nevidělo Google Ads vůbec.",
        "Produktový feed neměl optimalizované titulky a chyběly povinné GTIN atributy. Část kategorií byla v Google Shopping potlačovaná.",
        "Brandové dotazy chytala Performance Max za vysoké CPA, místo aby je obsluhovala dedicated Search kampaň za třetinovou cenu.",
      ],
    },
    solution: [
      {
        heading: "1. Nová struktura kampaní podle marže",
        paragraphs: [
          "Sortiment jsme rozdělili do čtyř maržových skupin (premium 60+ %, standard 35–60 %, akce 15–35 %, výprodej < 15 %). Každá skupina dostala vlastní Performance Max kampaň s vlastním tROAS cílem.",
          "Premium skupina dostala agresivní tROAS 800 %, výprodej pouze 250 %. Algoritmus konečně viděl, kam má investovat extra rozpočet a kde držet brzdu.",
        ],
      },
      {
        heading: "2. Dedicated brandová Search kampaň",
        paragraphs: [
          "Brandové fráze (název e-shopu + variace, brand + produktová kategorie) jsme přesunuli do samostatné Search kampaně s manuálním CPC a tROAS jen kontrolně.",
          "Performance Max dostala brand jako vyloučená klíčová slova přes account-level. CPA na brandových dotazech klesla o 71 % a ROAS vystoupal na 1 400 %.",
        ],
      },
      {
        heading: "3. Server-side tracking přes Cloudflare",
        paragraphs: [
          "Nasadili jsme GTM Server-Side na Cloudflare Workers. Konverze, view_item a add_to_cart eventy se posílají z e-shopu přímo na náš endpoint a odtud do GA4, Google Ads, Meta a Skliku.",
          "Enhanced Conversions a hashované e-maily zajistily pokrytí cross-device cesty. Vykázané konverze v Google Ads vzrostly o 31 % bez jediné nové objednávky — jen díky lepšímu měření.",
        ],
      },
      {
        heading: "4. Optimalizace Merchant Center feedu",
        paragraphs: [
          "Přepsali jsme titulky podle pravidla [Značka] [Typ] [Klíčový atribut] [Barva] [Pohlaví]. Doplnili chybějící GTIN, ošetřili dostupnost variant a barevné atributy.",
          "Počet zamítnutých nabídek klesl z 14 % na 1,8 %. Imprese v Google Shopping vzrostly o 64 %.",
        ],
      },
      {
        heading: "5. Looker Studio reporting",
        paragraphs: [
          "Postavili jsme klientovi dashboard s denními tržbami, marží podle skupin a porovnáním kanálů. Marketér ušetřil ~12 hodin měsíčně na reportingu a měl víc času na obchodní rozhodnutí.",
        ],
      },
    ],
    tools: [
      "Google Ads",
      "Google Merchant Center",
      "Google Tag Manager Server-Side",
      "Cloudflare Workers",
      "Google Analytics 4",
      "BigQuery",
      "Looker Studio",
    ],
    results: [
      { metric: "Obrat z PPC", value: "+182 %", note: "vs. 6 měsíců před spoluprací" },
      { metric: "ROAS", value: "380 % → 920 %", note: "průměr napříč všemi kampaněmi" },
      { metric: "CPA", value: "−38 %" },
      { metric: "Pokrytí konverzí (server-side)", value: "+31 %" },
      { metric: "Imprese v Google Shopping", value: "+64 %" },
      { metric: "Čas na reporting", value: "−85 %" },
    ],
    lessons: [
      "Jediná Performance Max kampaň pro celý katalog skoro vždy podinvestuje vysokomaržové produkty.",
      "Server-side tracking není luxus — u media spendu nad 100 000 Kč přidává typicky 20–35 % dohledaných konverzí.",
      "Brandové dotazy si zaslouží vlastní Search kampaň. Performance Max si je rád vezme za 3× vyšší cenu.",
      "Feed je pořád nejvíc podceňovaná část e-commerce PPC. Hodina na titulcích vrátí víc než hodina na bid strategy.",
    ],
    headlineResult: "+182 % obrat z PPC za 6 měsíců",
    relatedServices: ["google-ads", "analytika-mereni", "ppc-sprava"],
    relatedCases: ["b2b-web-analytika", "automatizace-lead-generation"],
  },

  {
    slug: "b2b-web-analytika",
    title: "Nový B2B web a server-side měření: 5× více poptávek měsíčně",
    shortTitle: "B2B web + analytika",
    metaTitle: "Případová studie: B2B web a server-side tracking | Netmedio",
    metaDescription:
      "Redesign B2B webu pro strojírenskou firmu, nasazení GA4 + server-side trackingu a Looker Studio reportingu. 5× více poptávek za 4 měsíce.",
    industry: "B2B — strojírenství a obrábění",
    clientType: "Středně velká firma, 80 zaměstnanců, export 60 %",
    duration: "4 měsíce projektu + průběžná spolupráce",
    date: "2026-02-10",
    dateLabel: "Únor 2026",
    summary:
      "Klient měl 12 let starý web, nulové měření a poptávky chodily pouze přes telefon. Dodali jsme nový web na Cloudflare, postavili GA4 + server-side tracking, Looker Studio reporting a spustili lead generation kampaně. Za 4 měsíce 5× více poptávek a první mezinárodní zakázka přes web.",
    initialSituation: [
      "Statický web bez CMS, poslední větší úprava 2018.",
      "Žádné GA4, žádné měření formulářů, žádné PPC kampaně.",
      "Poptávky pouze telefonicky, sales tým nevěděl, odkud klienti přicházejí.",
      "Anglická verze webu byla mechanicky přeložená a obsahovala chyby.",
    ],
    challenges: [
      "Technický obsah (CNC obrábění, materiály, tolerance) bylo nutné zachovat odborný, ale srozumitelný.",
      "Sales tým neměl zkušenost s digitálním lead handlingem.",
      "Mezinárodní rozměr (export do DE, AT, NL) vyžadoval kvalitní anglickou a německou jazykovou mutaci.",
      "Konzervativní cílovka — rozhodovatelé 45+, často skeptičtí k „marketingovým“ řešením.",
    ],
    analysis: {
      heading: "Analýza a hypotézy",
      paragraphs: [
        "Audit ukázal, že firma má silný produkt a reference, ale web neukazuje ani jedno. Cesta od první návštěvy k poptávce neexistovala — žádný formulář na konkrétní službu, žádný case study, žádné technické specifikace ke stažení.",
        "Konkurence v segmentu (české i evropské CNC firmy) měla výrazně lépe zpracovanou online prezentaci. Naše konkurenční analýza ukázala 12 přímých konkurentů s aktivními Google Ads kampaněmi.",
        "Sales tým byl ochotný, ale potřeboval jasný proces pro online poptávky. Bez CRM se leady ztrácely v e-mailech jednotlivců.",
      ],
    },
    solution: [
      {
        heading: "1. Nový web na moderním stacku",
        paragraphs: [
          "Postavili jsme nový web na TanStack Start + Cloudflare. Tři jazykové mutace (CZ, EN, DE), separátní stránky pro každou službu (CNC frézování, soustružení, kontrola kvality, povrchové úpravy).",
          "Každá služba má vlastní landing page s technickými specifikacemi, ukázkami prací a poptávkovým formulářem. Schema.org markup pro Organization, Service a FAQ.",
        ],
      },
      {
        heading: "2. Profesionální překlady",
        paragraphs: [
          "Anglickou a německou verzi přeložili rodilí mluvčí se zkušenostmi v B2B strojírenství. Texty prošly korekturou klienta na technickou přesnost.",
          "Lokalizace zahrnula i jednotky (mm vs. inch), právní rámec (záruka, dodací podmínky) a obchodní pravidla pro EU export.",
        ],
      },
      {
        heading: "3. GA4 + server-side tracking",
        paragraphs: [
          "Nasadili jsme GA4 přes server-side GTM na Cloudflare Workers. Měříme stahování PDF specifikací, otevření videí, vyplnění formulářů i kliky na telefon.",
          "Call tracking přes dedicated čísla na webu rozliší volání z webu vs. z jiných zdrojů. Sales tým má v CRM automaticky zaznamenanou cestu leadu.",
        ],
      },
      {
        heading: "4. Lead handling proces a CRM",
        paragraphs: [
          "Nasadili jsme jednoduché CRM (Pipedrive) a vytvořili automatizaci: každá poptávka z webu jde okamžitě obchodníkovi na Slack + e-mail, vytvoří deal v Pipedrive a založí task na follow-up do 2 hodin.",
          "Sales tým prošel půldenním školením, jak online leady kvalifikovat — odlišný přístup než u telefonických poptávek.",
        ],
      },
      {
        heading: "5. Google Ads kampaně",
        paragraphs: [
          "Spustili jsme Search kampaně na české a německé fráze typu „CNC frézování zakázka“, „Lohnfertigung CNC“. Budget 35 000 Kč / měsíc.",
          "Postupně jsme přidali LinkedIn Ads pro brand awareness mezi nákupčími středních strojírenských firem v DACH regionu.",
        ],
      },
    ],
    tools: [
      "TanStack Start",
      "Cloudflare Workers + R2",
      "WordPress (blog modul)",
      "Pipedrive CRM",
      "Google Tag Manager Server-Side",
      "Google Analytics 4",
      "Google Ads",
      "LinkedIn Ads",
      "Looker Studio",
    ],
    results: [
      { metric: "Poptávky z webu / měsíc", value: "5× více", note: "z průměru 3 na 16" },
      { metric: "PageSpeed score", value: "39 → 96" },
      { metric: "Organická návštěvnost", value: "+118 %", note: "za 4 měsíce" },
      { metric: "První zahraniční zakázka přes web", value: "Měsíc 3", note: "DE klient, 1,2 mil. Kč" },
      { metric: "ROI projektu", value: "Návratnost do 5 měsíců" },
    ],
    lessons: [
      "B2B web bez měření je drahá vizitka. První investice musí být měření, ne nový design.",
      "Anglická a německá mutace musí být profesionálně přeloženy — Google Translate je v B2B trapas.",
      "CRM proces je důležitější než PPC rozpočet. Bez něj se leady ztrácí.",
      "Pro konzervativní cílovku funguje konkrétnost (specifikace, certifikace, reference), ne marketingové bullshity.",
    ],
    headlineResult: "5× více poptávek měsíčně a první mezinárodní zakázka přes web",
    relatedServices: ["tvorba-webu", "analytika-mereni", "google-ads"],
    relatedCases: ["google-ads-eshop-moda", "automatizace-lead-generation"],
  },

  {
    slug: "automatizace-lead-generation",
    title: "Marketingová automatizace pro SaaS: −70 % času na administrativě",
    shortTitle: "Automatizace lead generation",
    metaTitle: "Případová studie: Marketingová automatizace pro SaaS | Netmedio",
    metaDescription:
      "AI workflow, CRM integrace a automatický lead nurturing pro českou SaaS platformu. −70 % manuální práce a 3× vyšší konverze na demo.",
    industry: "SaaS — platforma pro správu obchodních týmů",
    clientType: "Český B2B SaaS, 18 zaměstnanců, 200+ aktivních zákazníků",
    duration: "3 měsíce implementace + průběžná údržba",
    date: "2026-01-25",
    dateLabel: "Leden 2026",
    summary:
      "SaaS firma chytala 80+ leadů měsíčně, ale sales tým je nestíhal kvalifikovat a polovina horkých leadů vychladla. Postavili jsme AI workflow pro kvalifikaci, automatický nurturing a integraci s HubSpot CRM. Výsledek: −70 % manuální práce a 3× vyšší konverze trial → platící zákazník.",
    initialSituation: [
      "80–120 nových leadů měsíčně přes web (trial signup, demo formulář, kontakt).",
      "Sales tým 3 lidi, kvalifikace probíhala manuálně přes Excel.",
      "Lead response time průměrně 11 hodin, často přes víkend nikdo.",
      "Nurturing e-maily se posílaly ručně, nepravidelně, bez segmentace.",
    ],
    challenges: [
      "Vysoké procento leadů z malých firem, které nebyly cílovkou.",
      "Sales tým ztrácel kapacitu manuální administrativou místo prodejních hovorů.",
      "Žádný společný report mezi marketingem (počty leadů) a obchodem (kvalita).",
      "Klient chtěl vyzkoušet AI, ale neuměl ji produkčně nasadit.",
    ],
    analysis: {
      heading: "Analýza a hypotézy",
      paragraphs: [
        "Mapa procesů odhalila 14 ručních úkonů mezi zachycením leadu a první obchodní schůzkou. Většina z nich byla čistý copy-paste mezi formuláři, e-mailem a CRM.",
        "Analýza historických dat ukázala, že 35 % leadů spadalo do kategorie „nevhodný produkt“ (příliš malá firma, nesouvisející segment). Tyto leady spotřebovávaly stejnou kapacitu sales jako kvalifikované.",
        "Nurturing fungoval, když si na něj někdo vzpomněl. Konverze trial → platící byla 8 %, ale u leadů s pravidelným nurturingem (manuálně řízeným seniorem) dosahovala 22 %.",
        "AI klient chtěl, ale neuměl jí dát konkrétní úkol. „Použít ChatGPT“ není automatizace.",
      ],
    },
    solution: [
      {
        heading: "1. AI kvalifikace v reálném čase",
        paragraphs: [
          "Postavili jsme workflow v n8n: nový lead → obohacení dat (Clearbit + LinkedIn API) → klasifikace přes OpenAI API (firma, velikost, segment, scoring 0–100) → routing do správné fronty v HubSpot.",
          "Leady se skóre 80+ chodí okamžitě seniornímu obchodníkovi na Slack + SMS. Skóre 50–80 do standardní fronty. Pod 50 do nurturingu nebo „nefit“ kategorie.",
        ],
      },
      {
        heading: "2. Automatický nurturing podle segmentu",
        paragraphs: [
          "Pro každý segment (e-commerce, B2B služby, agentury) jsme postavili e-mailovou sekvenci 6 e-mailů přes 30 dní. Obsah generovaný AI nad reálnými case studies, schválený seniorem.",
          "Sekvence se přizpůsobuje chování (otevření, klik, návštěva pricing stránky). Lead, který otevře pricing dvakrát, dostane okamžitě nabídku demo callu.",
        ],
      },
      {
        heading: "3. Lead handling do 60 sekund",
        paragraphs: [
          "Každý nový kvalifikovaný lead chodí obchodníkovi na Slack a do mobilu jako SMS. Cíl: první kontakt do 60 sekund, fallback 5 minut na druhého obchodníka.",
          "Pokud do 60 minut nikdo nezareaguje, AI workflow pošle leadovi „díky za zájem, ozveme se do hodiny“ e-mail, aby nezačal mluvit s konkurencí.",
        ],
      },
      {
        heading: "4. Integrace s HubSpot a fakturací",
        paragraphs: [
          "HubSpot CRM se stal centrálním místem pravdy. Web, fakturace, support tickety i e-maily se synchronizují přes API.",
          "Vytvořili jsme automatizaci: zákazník přejde z trial na placený plán → fakturační systém vystaví fakturu → CRM zaznamená MRR → marketing dashboard se aktualizuje.",
        ],
      },
      {
        heading: "5. Společný dashboard marketing × sales",
        paragraphs: [
          "Looker Studio dashboard ukazuje cestu od marketing leadu po MRR. Marketing vidí, které kampaně přinášejí nejlepší leady, sales vidí, kde se v procesu ztrácejí.",
          "Týdenní stand-up nad dashboardem nahradil tři oddělené e-maily a tři pravdy.",
        ],
      },
    ],
    tools: [
      "n8n",
      "OpenAI API (GPT-4)",
      "HubSpot CRM",
      "Clearbit",
      "Slack",
      "Twilio (SMS)",
      "Cloudflare Workers",
      "Looker Studio",
    ],
    results: [
      { metric: "Manuální práce sales týmu", value: "−70 %" },
      { metric: "Lead response time", value: "11 h → 47 s" },
      { metric: "Konverze trial → platící", value: "8 % → 23 %" },
      { metric: "Počet kvalifikovaných leadů / měsíc", value: "+40 %", note: "při stejném počtu vstupních leadů" },
      { metric: "MRR růst", value: "+34 % / 6 měsíců" },
      { metric: "Náklady na nástroje", value: "~ 4 200 Kč / měsíc", note: "vs. 1× plat juniora navíc" },
    ],
    lessons: [
      "AI dává smysl tam, kde má jasný úkol s měřitelným výstupem — kvalifikace, klasifikace, krátké odpovědi. Ne jako „univerzální chatbot“.",
      "Lead response time je nejvíc podceňovaná KPI v B2B. Pokles z hodin na sekundy zdvojnásobí konverzi.",
      "Nurturing musí být segmentovaný. Univerzální e-mail sequence je horší než žádná.",
      "Společný dashboard pro marketing a sales eliminuje 90 % konfliktů mezi týmy.",
    ],
    headlineResult: "−70 % manuální práce a 3× vyšší konverze trial → platící zákazník",
    relatedServices: ["marketingova-automatizace", "analytika-mereni", "konzultace"],
    relatedCases: ["b2b-web-analytika", "google-ads-eshop-moda"],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
