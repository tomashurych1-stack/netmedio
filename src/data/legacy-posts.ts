/**
 * Články migrované z původního WordPressu netmedio.cz.
 * URL adresy zůstávají 1:1 shodné s WordPressem (/RRRR/MM/DD/slug/),
 * takže si stránky udrží odkazy, indexaci i pozice ve vyhledávání a v AI výsledcích.
 */

export type LegacyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "service"; slug: string; text: string; label: string };


export type LegacySection = {
  id: string;
  heading: string;
  blocks: LegacyBlock[];
};

export type LegacyPost = {
  /** Původní WP cesta bez lomítka na konci, např. /2023/12/30/kolik-stoji-reklama-na-facebooku */
  path: string;
  year: string;
  month: string;
  day: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  readingTime: number;
  intro: string[];
  sections: LegacySection[];
  /** Nové stránky, na které článek interně odkazuje */
  relatedServices: string[];
  relatedPosts: string[];
};

function fromPath(path: string) {
  const [, year, month, day, slug] = path.split("/");
  return { year, month, day, slug };
}

const raw: Omit<LegacyPost, "year" | "month" | "day" | "slug">[] = [
  {
    path: "/2023/12/30/kolik-stoji-reklama-na-facebooku",
    title: "Kolik stojí reklama na Facebooku? Rozkrýváme ceny internetových kampaní",
    metaTitle: "Kolik stojí reklama na Facebooku? Ceny kampaní 2026 | Netmedio",
    metaDescription:
      "Jak se počítá cena reklamy na Facebooku a Instagramu, co ovlivňuje CPC a CPM, orientační ceny a konkrétní tipy, jak snížit náklady na Meta Ads.",
    excerpt:
      "Aukční model, relevance, sezónnost i formát reklamy — co všechno rozhoduje o tom, kolik zaplatíte za reklamu na Facebooku, a jak cenu snížit.",
    category: "Marketing",
    date: "2023-12-30",
    dateLabel: "30. prosince 2023",
    readingTime: 8,
    intro: [
      "Sociální sítě jako Facebook, Instagram nebo TikTok patří ke klíčovým nástrojům online marketingu. Otázka „kolik stojí reklama na Facebooku“ ale nemá jednu odpověď — cena se odvíjí od aukce, cílení, kvality kreativy i sezóny.",
      "V tomto článku vysvětlíme, jak Meta stanovuje ceny, jaké faktory je ovlivňují a jak reálně snížit náklady na kliknutí i na konverzi.",
    ],
    sections: [
      {
        id: "aukcni-model",
        heading: "Jak funguje cenový model reklam na Facebooku?",
        blocks: [
          {
            type: "p",
            text: "Facebook reklamy fungují na aukčním systému. Inzerenti soutěží o zobrazení konkrétnímu publiku, každá reklama má maximální nabídku a rozpočet. O vítězi ale nerozhoduje jen nabídka — velkou roli hraje hodnocení relevance. I s vysokou nabídkou prohrajete, pokud je reklama pro publikum málo zajímavá.",
          },
        ],
      },
      {
        id: "faktory-ceny",
        heading: "Faktory ovlivňující cenu reklam na Facebooku",
        blocks: [
          {
            type: "ol",
            items: [
              "Cílení publika — vysoce konkurenční segmenty (mladí lidé ve velkých městech) jsou dražší než méně specifická publika.",
              "Účel reklamy — konverzní kampaně bývají dražší než kampaně na návštěvnost nebo dosah, protože Meta hledá uživatele s vyšší pravděpodobností nákupu.",
              "Sezónnost a denní čas — Vánoce, Black Friday a víkendové špičky zvyšují poptávku po reklamním prostoru a tím i cenu.",
              "Typ formátu — video a karusel mají jinou cenu i jinou míru interakce než statický obrázek.",
              "Skóre kvality — kvalitní reklama s dobrým hodnocením relevance dosahuje nižších nákladů za výsledek.",
            ],
          },
        ],
      },
      {
        id: "optimalizace-rozpoctu",
        heading: "Jak optimalizovat reklamní rozpočet na Facebooku",
        blocks: [
          {
            type: "ol",
            items: [
              "Zacilte na správné publikum — pracujte s daty o zájmech a demografii a nesnažte se oslovit „všechny“.",
              "Testujte kreativy — pravidelné A/B testy obrázků, videí a textů dokážou výrazně snížit cenu za kliknutí.",
              "Používejte remarketing — uživatelé, kteří vás už znají, konvertují levněji.",
              "Optimalizujte pro mobil — většina zobrazení přichází z telefonu.",
              "Nastavte limity rozpočtu a bidování — držte si kontrolu nad tím, kolik jste ochotni zaplatit za výsledek.",
            ],
          },
        ],
      },
      {
        id: "orientacni-ceny",
        heading: "Kolik stojí reklama na Facebooku? Orientační ceny",
        blocks: [
          {
            type: "ul",
            items: [
              "Cena za kliknutí (CPC): typicky v jednotkách korun, podle oboru a konkurence.",
              "Cena za tisíc zobrazení (CPM): obvykle v řádu desítek až nižších stovek korun.",
              "Cena za konverzi: nejvíce se liší podle oboru — od desítek po stovky korun u leadů, výrazně výše u drahých produktů.",
            ],
          },
          {
            type: "p",
            text: "Přesná čísla vždy sledujte přímo ve Správci reklam. Benchmarky slouží jen jako hrubý orientační bod, ne jako cíl.",
          },
        ],
      },
      {
        id: "zaver",
        heading: "Závěr: jaká je nejlepší strategie pro rozpočet",
        blocks: [
          {
            type: "p",
            text: "Efektivní reklama na Facebooku nestojí na výši rozpočtu, ale na znalosti cílové skupiny a na disciplíně v testování. Investujte čas do vyhodnocování a optimalizace — návratnost pak roste i při stejném rozpočtu.",
          },
        ],
      },
    ],
    relatedServices: ["vykonnostni-reklama", "analytika-reporting"],
    relatedPosts: [
      "/2023/10/20/google-ads-vs-facebook-ads-jak-rozhodovat-mezi-platformami",
      "/2023/09/22/podivejte-se-na-10-nejcastejsich-dotazu-ohledne-ppc",
    ],
  },
  {
    path: "/2023/10/21/jak-se-vyvarovat-sarlatanum-a-nekvalifikovanym-ppc-specialistum",
    title: "Jak se vyvarovat šarlatánům a nekvalifikovaným PPC specialistům",
    metaTitle: "Jak poznat kvalitního PPC specialistu | Netmedio",
    metaDescription:
      "Podle čeho poznáte kvalifikovaného PPC specialistu a jaké signály značí šarlatána. Otázky, které se ptejte před podpisem smlouvy.",
    excerpt:
      "PPC reklama je nepostradatelná, ale specialistou se dnes nazývá kdekdo. Podle čeho poznat odborníka od šarlatána.",
    category: "PPC",
    date: "2023-10-21",
    dateLabel: "21. října 2023",
    readingTime: 6,
    intro: [
      "V digitálním věku se PPC reklama stala nepostradatelnou součástí online marketingu. Stále více lidí se ale prohlašuje za PPC specialisty, aniž by měli dostatečné znalosti nebo zkušenosti.",
      "Následující body vám pomohou rozpoznat kvalifikovaného odborníka a vyhnout se drahé chybě.",
    ],
    sections: [
      {
        id: "varovne-signaly",
        heading: "Varovné signály, které byste neměli přehlédnout",
        blocks: [
          {
            type: "ul",
            items: [
              "Garantuje konkrétní pozici nebo počet konverzí — nikdo takový slib nemůže dát.",
              "Nechce vám dát vlastnictví reklamního účtu ani přístup do něj.",
              "Neumí vysvětlit, jak měří konverze a odkud data pochází.",
              "Reportuje pouze prokliky a imprese, ne obrat, leady nebo PNO.",
              "Nemá reference, certifikace ani doložitelné případové studie.",
            ],
          },
        ],
      },
      {
        id: "co-se-ptat",
        heading: "Otázky, které si položte před podpisem",
        blocks: [
          {
            type: "ol",
            items: [
              "Bude reklamní účet vedený na moji firmu a budu do něj mít plný přístup?",
              "Jak přesně se měří konverze a je nastavené i měření na straně serveru?",
              "Jak bude vypadat report a jaké obchodní metriky v něm uvidím?",
              "Jaká část odměny je fixní a jaká závisí na výkonu?",
              "Kdo konkrétně bude na účtu pracovat a jaké má certifikace?",
            ],
          },
        ],
      },
      {
        id: "jak-pracujeme",
        heading: "Jak k tomu přistupujeme v Netmediu",
        blocks: [
          {
            type: "p",
            text: "Účty vždy zůstávají majetkem klienta, reporting stavíme na obchodních číslech (obrat, leady, PNO, CPA) a před startem děláme audit měření. Bez důvěryhodných dat nemá smysl optimalizovat kampaně.",
          },
        ],
      },
    ],
    relatedServices: ["vykonnostni-reklama", "analytika-reporting"],
    relatedPosts: ["/2023/09/22/podivejte-se-na-10-nejcastejsich-dotazu-ohledne-ppc"],
  },
  {
    path: "/2023/10/20/google-ads-vs-facebook-ads-jak-rozhodovat-mezi-platformami",
    title: "Google Ads vs. Facebook Ads: Jak rozhodovat mezi platformami",
    metaTitle: "Google Ads vs. Facebook Ads — jak vybrat platformu | Netmedio",
    metaDescription:
      "Kdy použít Google Ads a kdy Facebook Ads, v čem se liší záměr uživatele, cílení i náklady, a jak obě platformy kombinovat.",
    excerpt:
      "Dva největší hráči placené reklamy. V čem se liší, kdy sáhnout po kterém a proč nejlepší výsledky přináší kombinace obou.",
    category: "PPC",
    date: "2023-10-20",
    dateLabel: "20. října 2023",
    readingTime: 7,
    intro: [
      "Google Ads a Facebook Ads (dnes Meta Ads) jsou dvě nejvýznamnější platformy placené reklamy. Obě mají své silné stránky a situace, kde dávají největší smysl.",
      "Klíčový rozdíl je v záměru: v Googlu oslovujete lidi, kteří už aktivně hledají řešení. Na Facebooku poptávku teprve vytváříte.",
    ],
    sections: [
      {
        id: "google-ads",
        heading: "Google Ads: kdy a proč je použít",
        blocks: [
          {
            type: "ul",
            items: [
              "Když potřebujete okamžité výsledky — oslovíte uživatele přesně ve chvíli, kdy hledají to, co nabízíte.",
              "Když chcete zvýšit návštěvnost webu z relevantních klíčových slov.",
              "Když potřebujete robustní měření a optimalizaci konverzí.",
              "Když prodáváte produkty a chcete využít Nákupy, Performance Max a srovnávače zboží.",
            ],
          },
        ],
      },
      {
        id: "facebook-ads",
        heading: "Facebook Ads: kdy a proč je použít",
        blocks: [
          {
            type: "ul",
            items: [
              "Když budujete povědomí o značce nebo uvádíte nový produkt.",
              "Když je vaše nabídka vizuální a emoční — gastronomie, móda, služby, zdravotnictví.",
              "Když chcete velmi přesné cílení podle zájmů, chování nebo podobných publik.",
              "Když stavíte remarketing na návštěvníky webu a diváky videí.",
            ],
          },
        ],
      },
      {
        id: "jak-vybrat",
        heading: "Jak se rozhodnout",
        blocks: [
          {
            type: "p",
            text: "Rozhodujte podle toho, zda po vašem produktu existuje aktivní poptávka. Pokud lidé váš typ služby vyhledávají, začněte Googlem. Pokud o řešení zatím nevědí, začněte Metou. U většiny firem je nakonec nejsilnější kombinace: Google sbírá existující poptávku, Meta ji vytváří a remarketing uzavírá.",
          },
        ],
      },
    ],
    relatedServices: ["vykonnostni-reklama"],
    relatedPosts: ["/2023/12/30/kolik-stoji-reklama-na-facebooku"],
  },
  {
    path: "/2023/09/22/podivejte-se-na-10-nejcastejsich-dotazu-ohledne-ppc",
    title: "Podívejte se na 10 nejčastějších dotazů ohledně PPC",
    metaTitle: "10 nejčastějších dotazů ohledně PPC reklamy | Netmedio",
    metaDescription:
      "Jak funguje PPC reklama, kolik stojí, jak se měří výsledky a jaké chyby dělají firmy nejčastěji. Odpovědi na deset nejčastějších otázek.",
    excerpt:
      "Jak funguje PPC, kolik stojí, jak vybrat klíčová slova a jak měřit výsledky — odpovědi na deset otázek, které dostáváme nejčastěji.",
    category: "PPC",
    date: "2023-09-22",
    dateLabel: "22. září 2023",
    readingTime: 7,
    intro: [
      "PPC reklama (Pay-Per-Click) funguje tak, že platíte za každé kliknutí na svoji reklamu. Níže najdete odpovědi na otázky, které od klientů slýcháme nejčastěji.",
    ],
    sections: [
      {
        id: "zaklady",
        heading: "Základy PPC",
        blocks: [
          {
            type: "ol",
            items: [
              "Jak funguje PPC reklama? Platíte za proklik, reklama se zobrazuje lidem, kteří odpovídají vašemu cílení nebo hledají vaše klíčová slova.",
              "Za jak dlouho uvidím výsledky? První data máte během několika dní, spolehlivé závěry po 4–6 týdnech sběru konverzí.",
              "Kolik peněz potřebuji na start? Rozpočet musí pokrýt dostatek konverzí pro učení systému — u malých firem typicky nižší desítky tisíc měsíčně včetně správy.",
              "Jaký je rozdíl mezi mediálním rozpočtem a správou? Mediální rozpočet jde Googlu nebo Seznamu, správa je odměna specialistovi za práci na účtu.",
            ],
          },
        ],
      },
      {
        id: "nastaveni",
        heading: "Nastavení a klíčová slova",
        blocks: [
          {
            type: "ol",
            items: [
              "Jak vybrat klíčová slova? Vycházejte z reálných hledaných dotazů a od začátku pracujte s vylučujícími slovy.",
              "Potřebuji vlastní landing page? Pokud nabídka na stránce neodpovídá reklamě, platíte za návštěvy, které nekonvertují.",
              "Vyplatí se Performance Max? Ano, ale jen s kvalitními daty o konverzích a hodnotě objednávky.",
            ],
          },
        ],
      },
      {
        id: "mereni",
        heading: "Měření a vyhodnocení",
        blocks: [
          {
            type: "ol",
            items: [
              "Jak měřím výsledky? Přes konverze v GA4 a v reklamních systémech, ideálně doplněné o server-side měření.",
              "Co je PNO a CPA? PNO je podíl nákladů na obratu, CPA cena za jednu konverzi. Obojí sledujte proti marži, ne proti pocitu.",
              "Jaká je nejčastější chyba? Optimalizace na prokliky místo na obchodní výsledek a chybějící nebo duplicitní měření konverzí.",
            ],
          },
        ],
      },
    ],
    relatedServices: ["vykonnostni-reklama", "analytika-reporting"],
    relatedPosts: ["/2023/10/20/google-ads-vs-facebook-ads-jak-rozhodovat-mezi-platformami"],
  },
  {
    path: "/2023/09/11/trendy-v-marketingu-ovlivni-nas-ai-a-jak-na-to",
    title: "Trendy v marketingu: Ovlivní nás AI a jak na to",
    metaTitle: "Trendy v marketingu: jak AI mění digitální marketing | Netmedio",
    metaDescription:
      "Jak umělá inteligence mění tvorbu obsahu, správu kampaní i analytiku a kde má v marketingu malých a středních firem reálný přínos.",
    excerpt:
      "Umělá inteligence otevírá nové možnosti v obsahu, kampaních i analytice. Kde má reálný přínos a kde je zatím jen hype.",
    category: "AI",
    date: "2023-09-11",
    dateLabel: "11. září 2023",
    readingTime: 6,
    intro: [
      "Svět marketingu se rychle mění díky nástupu umělé inteligence. AI otevírá možnosti, které by bylo škoda ignorovat — ale zároveň nenahrazuje strategii ani znalost zákazníka.",
    ],
    sections: [
      {
        id: "obsah",
        heading: "AI a tvorba obsahu",
        blocks: [
          {
            type: "p",
            text: "Generativní modely zrychlují přípravu variant textů, popisků produktů i reklamních headlines. Nejlepší výsledky přináší tam, kde má člověk jasné zadání, tón a fakta — AI pak řeší objem, ne odbornost.",
          },
        ],
      },
      {
        id: "kampane",
        heading: "AI ve správě kampaní",
        blocks: [
          {
            type: "p",
            text: "Google i Meta dnes stojí na strojovém učení. Performance Max, chytré bidování i dynamické kreativy fungují dobře jen tehdy, když jim dodáte kvalitní data o konverzích a jejich hodnotě. Bez čistého měření AI optimalizuje na špatný cíl.",
          },
        ],
      },
      {
        id: "automatizace",
        heading: "Automatizace procesů",
        blocks: [
          {
            type: "ul",
            items: [
              "Zpracování a třídění poptávek z formulářů.",
              "Automatické reportování a upozornění na odchylky v kampaních.",
              "Podpora zákaznického servisu nad vlastní znalostní bází.",
              "Rutinní práce s daty mezi CRM, e-shopem a e-mailingem.",
            ],
          },
        ],
      },
      {
        id: "jak-zacit",
        heading: "Jak začít prakticky",
        blocks: [
          {
            type: "p",
            text: "Začněte jedním procesem, který vás stojí nejvíc času, a zautomatizujte ho od začátku do konce. Teprve pak přidávejte další. Plošné nasazení AI bez měřitelného cíle obvykle skončí u experimentu bez návratnosti.",
          },
        ],
      },
    ],
    relatedServices: ["ai-automatizace", "analytika-reporting"],
    relatedPosts: ["/2022/10/25/marketingovy-slovnik"],
  },
  {
    path: "/2022/10/25/marketingovy-slovnik",
    title: "Ztrácíte se občas v marketingových pojmech? Pomůže vám náš slovník",
    metaTitle: "Marketingový slovník: PPC, CTR, PNO, ROAS a další pojmy | Netmedio",
    metaDescription:
      "Přehledný slovník marketingových pojmů — PPC, CTR, CPC, CPA, PNO, ROAS, remarketing, konverze, impression a další termíny z reportů.",
    excerpt:
      "Přehledný výklad pojmů, které potkáte v reportech kampaní — od CTR a CPC až po PNO, ROAS a remarketing.",
    category: "Slovník",
    date: "2022-10-25",
    dateLabel: "25. října 2022",
    readingTime: 9,
    intro: [
      "Každý měsíc připravujeme klientům reporty kampaní a detailní výkazy práce. Ne všem pojmům ale musí být na první pohled rozumět, a tak jsme připravili výběr těch nejčastějších.",
    ],
    sections: [
      {
        id: "vykonnostni-pojmy",
        heading: "Výkonnostní pojmy",
        blocks: [
          {
            type: "ul",
            items: [
              "PPC (Pay-Per-Click) — model reklamy, kde platíte za proklik, ne za zobrazení.",
              "CPC — cena za jeden proklik.",
              "CPM — cena za tisíc zobrazení.",
              "CTR — míra prokliku, tedy podíl prokliků k zobrazením.",
              "CPA — cena za jednu konverzi (objednávku, poptávku, hovor).",
              "PNO — podíl nákladů na obratu; kolik procent tržeb spolknou náklady na reklamu.",
              "ROAS — návratnost výdajů na reklamu, tedy kolik korun obratu přinesla jedna investovaná koruna.",
            ],
          },
        ],
      },
      {
        id: "analytika",
        heading: "Analytika a měření",
        blocks: [
          {
            type: "ul",
            items: [
              "Konverze — sledovaná akce s obchodní hodnotou (nákup, odeslání formuláře, hovor).",
              "Míra konverze — podíl návštěv, které skončily konverzí.",
              "Session / návštěva — jedna souvislá návštěva webu.",
              "Bounce rate / míra opuštění — podíl návštěv bez další interakce.",
              "GA4 — aktuální verze Google Analytics, postavená na událostech.",
              "GTM (Google Tag Manager) — nástroj pro správu měřicích kódů bez zásahu do webu.",
              "Server-side tracking — měření na straně serveru, odolnější vůči blokování cookies.",
            ],
          },
        ],
      },
      {
        id: "kampanove-pojmy",
        heading: "Kampaňové pojmy",
        blocks: [
          {
            type: "ul",
            items: [
              "Remarketing — cílení na uživatele, kteří už web navštívili.",
              "Publikum — skupina uživatelů definovaná chováním nebo vlastnostmi.",
              "Performance Max — kampaň Google Ads napříč všemi jeho plochami.",
              "Feed — datový soubor s produkty pro Nákupy a srovnávače zboží.",
              "Vylučující klíčová slova — dotazy, na které se reklama zobrazovat nemá.",
              "Impression share — podíl zobrazení, který jste získali z dostupných.",
            ],
          },
        ],
      },
    ],
    relatedServices: ["analytika-reporting", "vykonnostni-reklama"],
    relatedPosts: ["/2023/09/22/podivejte-se-na-10-nejcastejsich-dotazu-ohledne-ppc"],
  },
  {
    path: "/2022/08/01/jak-propagovat-restauraci",
    title: "Jak propagovat restauraci? Řekneme vám, jak na to!",
    metaTitle: "Jak propagovat restauraci — marketing pro gastro | Netmedio",
    metaDescription:
      "Praktický návod na propagaci restaurace: web, PPC reklamy a recenze, sociální sítě a e-mailing. Konkrétní tipy pro gastro marketing.",
    excerpt:
      "Web, PPC, sociální sítě a e-mailing. Konkrétní návod, jak nastavit marketing restaurace tak, aby přiváděl hosty.",
    category: "Business Analysis",
    date: "2022-08-01",
    dateLabel: "1. srpna 2022",
    readingTime: 7,
    intro: [
      "Štěstí přeje připraveným. Než začnete propagovat restauraci, připravte si důkladnou analýzu: silné a slabé stránky, srovnání s přímou i nepřímou konkurencí a hlavně konkrétní cílovou skupinu.",
      "Jinak se komunikuje rychlé občerstvení, jinak tradiční pivnice a zcela jinak luxusní restaurace v centru Prahy.",
    ],
    sections: [
      {
        id: "webove-stranky",
        heading: "Webové stránky",
        blocks: [
          {
            type: "p",
            text: "Web je internetová výloha vaší restaurace. Pokud se kolemjdoucím nabídka a prostředí nezalíbí, fyzicky vás nenavštíví. Samozřejmostí by měla být jasná navigace, výzva k rezervaci nebo odběru newsletteru a prostor pro limitované nabídky.",
          },
        ],
      },
      {
        id: "ppc-a-recenze",
        heading: "PPC reklamy a podpora recenzí",
        blocks: [
          {
            type: "p",
            text: "Inzerujte tam, kde vás lidé hledají. Obecnou frázi „restaurace praha“ zadá do Googlu měsíčně přes 18 000 lidí. Platíte jen za návštěvníka, u kterého je vysoká pravděpodobnost, že se stane hostem.",
          },
          {
            type: "ul",
            items: [
              "Cílení na okolí podniku, například do 1 km od restaurace.",
              "Remarketing na hosty, kteří si už v minulosti rezervovali stůl.",
              "Zdůraznění konkrétních výhod v textech reklam (rozvoz do 30 minut, denní menu).",
              "Aktivní podpora recenzí na Google a Tripadvisoru.",
            ],
          },
        ],
      },
      {
        id: "socialni-site",
        heading: "Facebook, Instagram a TikTok",
        blocks: [
          {
            type: "p",
            text: "Na sociálních sítích inzerujete přímo tam, kde vaši potenciální hosté tráví nejvíc času. Cílit můžete podle věku, pohlaví, zájmů i podle stránek konkurence. Gastronomický marketing stojí na emoci — a k tomu jsou sociální sítě jako stvořené.",
          },
        ],
      },
      {
        id: "emailing",
        heading: "E-mailing",
        blocks: [
          {
            type: "p",
            text: "Nejlevnější a historicky nejkonverznější nástroj přímého marketingu. Komunikujte polední menu i limitované akce a nebojte se říct si o recenzi — třeba výměnou za slevu na další návštěvu.",
          },
        ],
      },
    ],
    relatedServices: ["vykonnostni-reklama", "tvorba-webu", "email-marketing"],
    relatedPosts: ["/2023/12/30/kolik-stoji-reklama-na-facebooku"],
  },
  {
    path: "/2021/06/10/stejny-produkt-ruzna-cena",
    title: "Stejný produkt, různá cena? Aneb jak jste potrestáni za věrnost",
    metaTitle: "Dynamické ceny na e-shopech: stejný produkt, různá cena | Netmedio",
    metaDescription:
      "Proč u stejného produktu vidíte pokaždé jinou cenu, jak funguje dynamický pricing na e-shopech a jak se mu jako zákazník bránit.",
    excerpt:
      "Proč na e-shopech zaplatíte za stejný produkt pokaždé jinak a jak funguje dynamické stanovování cen.",
    category: "E-commerce",
    date: "2021-06-10",
    dateLabel: "10. června 2021",
    readingTime: 5,
    intro: [
      "Všimli jste si, že na mnoha e-shopech zaplatíte za stejný produkt různou cenu? Při delším rozhodování se cena najednou změní — a to je silná motivace k rychlému jednání.",
    ],
    sections: [
      {
        id: "jak-to-funguje",
        heading: "Jak dynamické ceny fungují",
        blocks: [
          {
            type: "p",
            text: "E-shopy pracují s daty o poptávce, konkurenci, skladových zásobách i o chování konkrétního návštěvníka. Cena se pak automaticky upravuje podle pravidel nebo algoritmu — někdy v řádu hodin.",
          },
          {
            type: "ul",
            items: [
              "Cena konkurence sledovaná v reálném čase.",
              "Aktuální poptávka a sezónnost.",
              "Historie návštěv a opakovaný zájem o produkt.",
              "Zařízení, ze kterého nakupujete.",
            ],
          },
        ],
      },
      {
        id: "jak-se-branit",
        heading: "Jak se tomu bránit",
        blocks: [
          {
            type: "ul",
            items: [
              "Porovnávejte ceny na srovnávačích (Heureka, Zboží.cz).",
              "Zkuste nákup v anonymním okně bez uložených cookies.",
              "Hlídejte cenové historie u sledovaných produktů.",
              "Nenechte se tlačit umělými odpočty — často se opakují.",
            ],
          },
        ],
      },
      {
        id: "pohled-prodejce",
        heading: "Pohled prodejce",
        blocks: [
          {
            type: "p",
            text: "Z pohledu e-shopu je dynamický pricing legitimní nástroj řízení marže. Rizikem je ale ztráta důvěry: pokud zákazník zjistí, že je za věrnost „potrestán“, jednou nakoupí levněji, ale podruhé už u vás vůbec.",
          },
        ],
      },
    ],
    relatedServices: ["vykonnostni-reklama", "analytika-reporting"],
    relatedPosts: ["/2022/10/25/marketingovy-slovnik"],
  },
];

export const legacyPosts: LegacyPost[] = raw.map((p) => ({ ...p, ...fromPath(p.path) }));

export function getLegacyPost(year: string, month: string, day: string, slug: string) {
  return legacyPosts.find(
    (p) => p.year === year && p.month === month && p.day === day && p.slug === slug,
  );
}
