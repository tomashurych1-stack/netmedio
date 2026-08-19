/**
 * Případové studie migrované z původního WordPressu netmedio.cz.
 * URL adresy /mediestetik/ a /nemocnice-melnik/ zůstávají zachované.
 */

export type LegacyCaseBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegacyCaseSection = {
  id: string;
  heading: string;
  blocks: LegacyCaseBlock[];
};

export type LegacyCase = {
  path: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  industry: string;
  intro: string[];
  sections: LegacyCaseSection[];
  results: { metric: string; value: string }[];
  relatedServices: string[];
};

export const legacyCases: LegacyCase[] = [
  {
    path: "/mediestetik",
    slug: "mediestetik",
    title: "Kliniky Mediestetik: akvizice klientů pro estetickou medicínu",
    metaTitle: "Případová studie Mediestetik — PPC, web a sociální sítě | Netmedio",
    metaDescription:
      "Jak jsme pro mezinárodní síť klinik Mediestetik postavili akviziční strategii: PPC kampaně, cenová komparace v rámci EU, nový web a e-mailové kampaně.",
    client: "Kliniky Mediestetik",
    industry: "Estetická medicína, plastická chirurgie, dermatologie",
    intro: [
      "Mezinárodní síť klinik Mediestetik patří mezi nejstarší evropská zdravotnická zařízení zaměřená na estetickou medicínu. Mezi hlavní obory patří plastická chirurgie, dermatologie, ale také stomatologie.",
      "Cílem marketingu bylo zajistit budování akvizice nových klientů s důrazem na obor plastické chirurgie.",
    ],
    sections: [
      {
        id: "nase-reseni",
        heading: "Naše řešení",
        blocks: [
          {
            type: "p",
            text: "Provedli jsme důkladnou analýzu návštěvnosti webových stránek, abychom dokázali přesně stanovit cílový segment zákazníků. Vytvořili jsme cenovou komparaci, a to dokonce v rámci EU. Vzhledem k tomu, že hlavním cílem bylo získání nových zákazníků, soustředili jsme většinu disponibilního rozpočtu do výkonnostních kampaní a dále do posilování brandu a pozitivních referencí.",
          },
        ],
      },
      {
        id: "ppc-reklamy",
        heading: "PPC reklamy",
        blocks: [
          {
            type: "ul",
            items: [
              "Audit a nastavení reklamních kampaní, nastavení konverzních událostí na webových stránkách.",
              "Příprava osobnostního marketingu plastického chirurga pro získání pozitivních referencí a obecné důvěry zákazníků.",
              "Na základě výsledků cenové komparace spuštěny PPC kampaně s cílením na cizince v ČR i mimo ČR, kteří aktivně vyhledávají plastickou chirurgii v Praze.",
              "Dynamický remarketing podle časového období a doby strávené na webových stránkách.",
              "Tvorba reklamních bannerů, rozšíření reklam a průběžné testování marketingové komunikace.",
            ],
          },
        ],
      },
      {
        id: "webove-stranky",
        heading: "Webové stránky",
        blocks: [
          {
            type: "p",
            text: "Návrh a spuštění nových webových stránek s cílením na Velkou Británii, abychom zvýšili celkový dosah plastické chirurgie v zahraničí.",
          },
        ],
      },
      {
        id: "socialni-site",
        heading: "Sociální sítě (Facebook, Instagram)",
        blocks: [
          {
            type: "ul",
            items: [
              "Správa reklamních účtů na sociálních sítích.",
              "Dynamický remarketing na Facebooku pomocí Facebook Pixel.",
              "Vytvoření publika z konkurenčních fanoušků a sledujících.",
              "Post plán dle plánovaných akcí a schválení šablony jednotlivých příspěvků.",
              "Facebooková soutěž k získání nových fanoušků a k celkové podpoře dosahu značky.",
            ],
          },
        ],
      },
      {
        id: "emailove-kampane",
        heading: "E-mailové kampaně",
        blocks: [
          {
            type: "ul",
            items: [
              "Podrobná segmentace dostupných kontaktů (pohlaví, geografické umístění, e-mailové aktivity a další).",
              "Dle historických statistik naplánováno rozesílání pravidelných e-mailů.",
              "Optimalizace konverzních poměrů e-mailových kampaní a minimalizace poměru odhlášených uživatelů.",
              "A/B testování podle času rozeslání, předmětu a CTA.",
            ],
          },
        ],
      },
    ],
    results: [
      { metric: "Zaměření", value: "Akvizice klientů v plastické chirurgii" },
      { metric: "Kanály", value: "PPC, web, sociální sítě, e-mailing" },
      { metric: "Trhy", value: "ČR a zahraničí (vč. Velké Británie)" },
    ],
    relatedServices: ["vykonnostni-reklama", "tvorba-webu", "email-marketing"],
  },
  {
    path: "/nemocnice-melnik",
    slug: "nemocnice-melnik",
    title: "Nemocnice ve středočeském kraji: nové klientky v porodnictví",
    metaTitle: "Případová studie nemocnice — PPC a UX v porodnictví | Netmedio",
    metaDescription:
      "Jak jsme nemocnici ve středočeském kraji pomohli získat nové klientky v porodnictví: PPC kampaně, měření konverzí, nový web a sociální sítě.",
    client: "Nemocnice — středočeský kraj",
    industry: "Zdravotnictví, porodnictví",
    intro: [
      "Nemocnice poskytuje vysokou kvalitu zdravotnických služeb napříč obory jako chirurgie, traumatologie, neurologie, ortopedie, gynekologie a porodnictví. Oslovila nás s cílem rozšířit akvizici nových klientů, zejména v oblasti porodnictví.",
      "Nemocnice potřebovala rozšířit spektrum návštěvníků v oblasti porodnictví a získat nové potenciální klientky, a to zejména z hlavního města. Maximální CPA jsme stanovili na 200 Kč, což představovalo snížení nákladů o více než 50 %.",
    ],
    sections: [
      {
        id: "nase-reseni",
        heading: "Naše řešení",
        blocks: [
          {
            type: "p",
            text: "Vzhledem k tomu, že cílovým segmentem jsou zejména ženy aktivně vyhledávající vhodnou nemocnici, soustředili jsme se na UX webových stránek a na výkonnostní PPC kampaně.",
          },
        ],
      },
      {
        id: "ppc-reklamy",
        heading: "PPC reklamy",
        blocks: [
          {
            type: "ul",
            items: [
              "Nastavení konverzních událostí na webových stránkách, například prokliku kontaktní e-mailové adresy nebo telefonního čísla.",
              "Založení a audit PPC kampaní ve vyhledávačích (Google, Seznam) a nastavení remarketingových kampaní podle vymezeného časového období.",
              "Reklamní kampaně na klíčová slova konkurence, která se nachází v Praze.",
              "Vytvoření nových reklamních sestav k získání zcela nových klientů.",
              "Optimalizace zobrazování rozšíření o volání z reklam a hodnocení.",
            ],
          },
        ],
      },
      {
        id: "webove-stranky",
        heading: "Webové stránky",
        blocks: [
          {
            type: "p",
            text: "Spuštěny nové webové stránky s větším důrazem na emoce a celkově lepší UX. Zavedeno testování okamžitého opuštění stránky a konverzních poměrů.",
          },
        ],
      },
      {
        id: "socialni-site",
        heading: "Sociální sítě (Facebook, Instagram)",
        blocks: [
          {
            type: "ul",
            items: [
              "Cílení reklam a získaných referencí na těhotné ženy a fanoušky relevantních stránek.",
              "Dynamický remarketing na Facebooku pomocí Facebook Pixel.",
            ],
          },
        ],
      },
      {
        id: "shrnuti",
        heading: "Shrnutí",
        blocks: [
          {
            type: "p",
            text: "Nemocnice získala již během prvního měsíce po spuštění kampaní výrazně vyšší počet relevantních poptávek v oblasti porodnictví, a to při nižší ceně za akvizici, než byl původní cíl.",
          },
        ],
      },
    ],
    results: [
      { metric: "Cílová CPA", value: "max. 200 Kč" },
      { metric: "Úspora nákladů", value: "více než 50 %" },
      { metric: "Kanály", value: "PPC, web a UX, sociální sítě" },
    ],
    relatedServices: ["vykonnostni-reklama", "tvorba-webu", "analytika-reporting"],
  },
];

export function getLegacyCase(slug: string) {
  return legacyCases.find((c) => c.slug === slug);
}
