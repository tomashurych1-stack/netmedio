import ppcPricing from "@/assets/blog-ppc-pricing.jpg";
import adsVsSklik from "@/assets/blog-ads-vs-sklik.jpg";
import ppcAgency from "@/assets/blog-ppc-agency.jpg";
import serverTracking from "@/assets/blog-server-tracking.jpg";
import aiWorkflow from "@/assets/blog-ai-workflow.jpg";

export type Section = { id: string; heading: string; paragraphs: string[] };
export type FaqItem = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tag: string;
  date: string; // ISO
  dateLabel: string;
  readingTime: number; // minutes
  image: string;
  sections: Section[];
  faq: FaqItem[];
  related: string[]; // slugs
};

const AUTHOR = {
  name: "Ing. Tomáš Hurych",
  role: "Founder Netmedio · Digital Marketing Consultant",
};

export const author = AUTHOR;

export const posts: Post[] = [
  {
    slug: "kolik-stoji-ppc-kampane-2026",
    title: "Kolik stojí PPC kampaně v roce 2026",
    metaTitle: "Kolik stojí PPC kampaně v roce 2026 | Netmedio",
    metaDescription:
      "Reálné rozpočty pro Google Ads a Sklik v roce 2026 — pro malé firmy, e-shopy i B2B. Rozdíl mezi mediálním rozpočtem a správou, doporučené částky a nejčastější chyby.",
    excerpt:
      "Reálné rozpočty pro Google Ads a Sklik v roce 2026. Rozdíl mezi mediálním rozpočtem a správou, doporučené částky pro malé firmy, e-shopy a B2B.",
    category: "PPC",
    tag: "PPC",
    date: "2026-06-01",
    dateLabel: "1. června 2026",
    readingTime: 12,
    image: ppcPricing,
    sections: [
      {
        id: "uvod",
        heading: "Proč je otázka ceny PPC tak složitá",
        paragraphs: [
          "Když se klient zeptá „kolik stojí PPC kampaně“, odpověď „to záleží“ je sice pravdivá, ale zoufale nepoužitelná. Realita je taková, že v roce 2026 se rozpočty na výkonnostní marketing pohybují od jednotek tisíc korun měsíčně až po stovky tisíc — a obě krajnosti mohou dávat smysl. Cena PPC je vždy součtem dvou položek: mediálního rozpočtu, který odchází přímo Googlu nebo Seznamu, a odměny za správu, která zůstává agentuře nebo specialistovi.",
          "Za posledních pět let se zvýšila konkurence ve většině segmentů, zdražila se proklik v Google Ads o desítky procent a Performance Max úplně přepsal pravidla pro e-commerce. Rozpočty, které fungovaly v roce 2021, dnes nemusí stačit ani na rozjezd. V tomto článku najdete reálné částky, které vidíme napříč klienty Netmedio, rozdělené podle typu podnikání, a hlavně vysvětlení, proč právě tyto rozpočty fungují.",
        ],
      },
      {
        id: "rozpocet-vs-sprava",
        heading: "Rozpočet vs. správa: dvě úplně jiné věci",
        paragraphs: [
          "První a nejčastější nedorozumění: klient slyší „kampaně za 15 000 měsíčně“ a neví, jestli je v tom zahrnutá útrata na reklamu, nebo jen práce specialisty. Tyto dvě věci je nutné oddělit, protože se chovají úplně jinak. Mediální rozpočet je proměnlivá položka, kterou Google nebo Seznam fakturuje přímo vám podle proklikání reklam. Správa je fixní odměna agentury za nastavení, optimalizaci a reporting.",
          "Praktický příklad: e-shop investuje 40 000 Kč měsíčně do Google Ads. Z toho 30 000 Kč jde Googlu jako media spend a 10 000 Kč platí agentuře za správu. V Google Ads účtu uvidíte 30 000 Kč útraty, ne 40 000 Kč. Pokud agentura nabídne „all-in 40 000 Kč“, ptejte se, kolik z toho doopravdy půjde do reklamy. U menších rozpočtů totiž fee často sní polovinu i víc.",
          "Správa se nejčastěji účtuje třemi způsoby: fixní měsíční paušál, procento z mediálního rozpočtu (typicky 10–20 %) nebo hodinová sazba (1 500–3 000 Kč/h pro seniorního specialistu). Pro stabilní kampaně dává smysl paušál — předvídatelný náklad a motivace specialisty pracovat efektivně, ne víc.",
        ],
      },
      {
        id: "male-firmy",
        heading: "Malé firmy a živnostníci: realistické rozpočty",
        paragraphs: [
          "Pro lokální služby (řemeslníci, právníci, lékaři, kavárny) má smysl začít od 8 000 do 20 000 Kč měsíčně mediálního rozpočtu. Pod touto hranicí Google Ads jednoduše nemá dost dat na to, aby se algoritmus naučil optimalizovat. Zaplatíte poplatky a do účtu nedostanete reálnou zpětnou vazbu, co funguje.",
          "Správa malého účtu zabere zkušenému specialistovi 4–8 hodin měsíčně. To znamená odměnu typicky 6 000–12 000 Kč. Když k tomu připočtete media spend, celkový měsíční náklad začíná kolem 15 000 Kč. Cokoliv levnějšího je buď automatizovaná služba bez lidského dohledu, nebo nezkušený specialista, který vás bude stát ztracené konverze.",
          "Pro malé firmy zpravidla nedoporučuji rozjíždět víc kanálů najednou. Jeden zvládnutý kanál — typicky Google Search pro konkrétní poptávkové dotazy — přinese víc než pět napůl běžících kampaní rozhozených mezi Sklik, Meta Ads, YouTube a Performance Max.",
        ],
      },
      {
        id: "eshopy",
        heading: "E-shopy: Performance Max a realita ROAS",
        paragraphs: [
          "Pro e-shopy začíná smysluplný rozpočet kolem 30 000 Kč měsíčně media spendu, ideálně 50 000 Kč a více. Důvod je čistě technický: Performance Max potřebuje minimálně 30 konverzí měsíčně, aby Google algoritmus měl dostatek dat na učení. Při průměrné konverzní ceně 300–800 Kč to vychází právě na zmíněné rozpočty.",
          "U e-shopů se naprosto klíčové stává sledování ROAS (Return on Ad Spend). Cíl 400 % ROAS znamená, že za každou utracenou korunu se vrátí čtyři. Pro mnoho segmentů (móda, sport, elektronika) je realistický cíl mezi 500 % a 1000 %, u luxusního zboží i 1500 %. Pozor ale na rozdíl mezi tržbou a maržou — kampaň s ROAS 600 % na produktu s 15% marží není zisková, jen tak vypadá.",
          "Správa e-shopového účtu s rozpočtem 50 000 Kč obvykle vyjde na 12 000–20 000 Kč měsíčně. U větších účtů (200 000+ Kč media spend) je standardem procentuální fee 10–15 %, protože práce na feedu produktů, segmentaci a testování je v podstatě nekonečná.",
        ],
      },
      {
        id: "b2b",
        heading: "B2B firmy: drahé prokliky, vysoká hodnota leadu",
        paragraphs: [
          "B2B segmenty mají typicky výrazně dražší proklik — v IT službách, právních službách nebo průmyslových řešeních se cena za klik běžně pohybuje od 30 do 200 Kč. Rozpočet pod 25 000 Kč měsíčně tu většinou nedává smysl, protože získáte tak málo prokliků, že nelze nic statisticky vyhodnocovat.",
          "Specifikum B2B je dlouhý prodejní cyklus a vysoká hodnota jednoho zákazníka. Lead generation kampaň, která získá tři kvalifikované leady měsíčně za 10 000 Kč/lead, může být absolutně klíčová — pokud z jednoho leadu uzavřete kontrakt na 500 000 Kč ročně, ROI je 1500 %.",
          "Pro B2B doporučuji rozpočet 30 000–80 000 Kč media spendu měsíčně, kombinaci Search kampaní pro výkupní fráze a LinkedIn Ads pro brand awareness u rozhodovatelů. Správa B2B kampaní je technicky složitější (negativní klíčová slova, segmentace podle pozice/firmy, content offers) a vyžaduje 15 000–25 000 Kč měsíčně.",
        ],
      },
      {
        id: "google-vs-sklik",
        heading: "Google Ads vs. Sklik: rozdíl v ceně",
        paragraphs: [
          "Google Ads je v Česku dominantní platforma s 90+ % podílem na vyhledávání. Cena za proklik je obvykle vyšší kvůli silnější konkurenci, ale dosah a kvalita dat jsou nesrovnatelné. Sklik nabízí často levnější CPC (občas o 30–50 %), zejména u dotazů, kde má Seznam stále silnou uživatelskou základnu — typicky starší cílová skupina a regionální dotazy.",
          "Pro většinu byznysů dává smysl primárně Google Ads, Sklik jako doplněk pro maximalizaci zásahu. Pro firmy zaměřené na seniorní zákazníky nebo regionální služby v menších městech může být poměr opačný. Detailnější srovnání rozebírám v článku „Google Ads vs Sklik — co funguje lépe pro české firmy“.",
        ],
      },
      {
        id: "nejcastejsi-chyby",
        heading: "Nejčastější chyby v rozpočtování PPC",
        paragraphs: [
          "Chyba č. 1: rozpočet roztříštěný do moc kampaní. Klient se rozhodne investovat 20 000 Kč a chce „všechno“: Search, Display, YouTube, Performance Max, Discovery. Výsledkem je pět kampaní po 4 000 Kč, kde žádná nemá dost dat na optimalizaci. Lepší strategie je 100 % rozpočtu v jednom dobře nastaveném kanálu.",
          "Chyba č. 2: ignorování měření. Bez správně zapojeného GA4, konverzí v Google Ads a ideálně server-side trackingu jsou všechna rozhodnutí o rozpočtu jen pocitové. Spousta firem investuje statisíce ročně do reklamy, ale nemají jistotu, které kampaně reálně generují obchod. Tématu se podrobně věnuji v článku „Server-side tracking: proč se stává standardem“.",
          "Chyba č. 3: častá změna strategie. Performance Max a Smart Bidding potřebují minimálně 4–6 týdnů na rozjezd. Když rozpočet otáčíte každý měsíc nahoru a dolů podle nálady CFO, algoritmus nikdy nedostane šanci konvergovat k optimálním nabídkám.",
          "Chyba č. 4: spoléhání na čistě automatické nastavení bez specialisty. „Inteligentní kampaně“ a doporučení Google Ads asistenta jsou typicky optimalizované na maximální útratu, ne na maximální zisk pro inzerenta. Jakékoliv větší rozpočty bez lidského dohledu jsou hazard.",
        ],
      },
      {
        id: "doporucene-rozpocty",
        heading: "Souhrn: doporučené měsíční rozpočty 2026",
        paragraphs: [
          "Lokální služba / živnostník: 10 000–20 000 Kč media spend + 6 000–12 000 Kč správa. Celkem 16 000–32 000 Kč.",
          "Malý e-shop (1–3 mil. ročně): 30 000–60 000 Kč media spend + 10 000–18 000 Kč správa. Celkem 40 000–78 000 Kč.",
          "Střední e-shop (10–50 mil. ročně): 80 000–200 000 Kč media spend + 15 000–30 000 Kč správa. Celkem 95 000–230 000 Kč.",
          "B2B služby a software: 30 000–100 000 Kč media spend + 15 000–25 000 Kč správa. Celkem 45 000–125 000 Kč.",
          "Tyto rozpočty pokrývají Google Ads + Sklik. Meta Ads, LinkedIn Ads nebo TikTok Ads jsou samostatné kanály s vlastní logikou. Pokud potřebujete přesnější odhad pro vaši konkrétní situaci, nabízíme nezávaznou hodinovou konzultaci, kde projdeme data a navrhneme realistický rozpočet.",
        ],
      },
    ],
    faq: [
      {
        q: "Kolik minimálně musím investovat do Google Ads, aby to dávalo smysl?",
        a: "Pro většinu segmentů je smysluplné minimum kolem 10 000 Kč měsíčně mediálního rozpočtu. Pod touto hranicí algoritmus nemá dost dat na optimalizaci a část rozpočtu se spotřebuje na učení.",
      },
      {
        q: "Je lepší fixní paušál za správu, nebo procento z rozpočtu?",
        a: "Pro stabilní kampaně do 100 000 Kč media spendu doporučuji fixní paušál — předvídatelný náklad a férová motivace. Nad touto hranicí dává smysl procentuální fee, protože práce roste s objemem kampaní.",
      },
      {
        q: "Co když mám rozpočet jen 5 000 Kč měsíčně?",
        a: "V tomto případě má smysl spíš SEO, organický obsah nebo budování referencí. PPC za 5 000 Kč skoro nikdy nepřinese použitelná data ani konverze, ale spotřebuje čas a peníze za fee.",
      },
      {
        q: "Jak rychle se PPC vrátí?",
        a: "U Search kampaní s jasnou nákupní poptávkou (e-shop, opravy, akutní služby) lze první konverze vidět během prvního týdne. Performance Max a brandbuilding kampaně potřebují 4–8 týdnů na zaučení.",
      },
      {
        q: "Jak poznám, že platím agentuře férovou cenu?",
        a: "Férová agentura vám transparentně ukáže, kolik jde do reklamy a kolik na fee, pravidelně reportuje výsledky a vysvětluje rozhodnutí. Detaily v článku „Jak poznat, že PPC agentura odvádí dobrou práci“.",
      },
    ],
    related: ["google-ads-vs-sklik", "jak-poznat-dobrou-ppc-agenturu", "server-side-tracking-standard"],
  },

  {
    slug: "google-ads-vs-sklik",
    title: "Google Ads vs Sklik – co funguje lépe pro české firmy",
    metaTitle: "Google Ads vs Sklik 2026 — co funguje lépe pro české firmy | Netmedio",
    metaDescription:
      "Praktické srovnání Google Ads a Skliku pro lokální firmy, e-shopy a B2B. Kdy zvolit jeden, druhý nebo kombinaci obou. Z praxe od roku 2010.",
    excerpt:
      "Praktické srovnání Google Ads a Skliku pro české firmy. Pro koho je který systém vhodnější a kdy dává smysl kombinace obou.",
    category: "PPC",
    tag: "PPC",
    date: "2026-05-20",
    dateLabel: "20. května 2026",
    readingTime: 11,
    image: adsVsSklik,
    sections: [
      {
        id: "uvod",
        heading: "Dvě platformy, dva světy",
        paragraphs: [
          "V Česku je situace na trhu vyhledávačů unikátní. Zatímco ve většině zemí má Google podíl 95+ %, tady stále funguje Seznam s vlastním fulltextem, který využívá hlavně starší demografie a část tradičních uživatelů. Pro inzerenty to znamená, že přemýšlet pouze o Google Ads je strategická chyba — ale spoléhat hlavně na Sklik je dnes ještě větší chyba.",
          "V Netmediu spravujeme oba systémy už od roku 2010 a vidíme, jak se poměr výkonu mezi platformami posunul. V roce 2015 ještě dávalo smysl rozdělit rozpočet zhruba 50/50, dnes je realistický poměr spíš 80/20 ve prospěch Google Ads — s výjimkami, které popíšu níže.",
        ],
      },
      {
        id: "vyhody-google-ads",
        heading: "Výhody Google Ads",
        paragraphs: [
          "Google Ads je nejvyspělejší reklamní platforma na světě. Performance Max, Smart Bidding, široké možnosti targetingu publika, integrace s YouTube, Google Mapy, Discover a Display Network — to vše nabízí jedna platforma s jedním účtem. Algoritmy strojového učení mají k dispozici nesrovnatelně víc dat než Sklik, takže optimalizace bid strategy je výrazně přesnější.",
          "Datová infrastruktura je další výhoda. Integrace s GA4, BigQuery, server-side trackingem přes GTM, Enhanced Conversions, Customer Match — všechny moderní nástroje pro měření a aktivaci dat fungují primárně v Google ekosystému. Pokud chcete měřit přesně a posílat zpět offline konverze, je Google Ads bezkonkurenční.",
          "Posledním kritickým bodem je dosah. Vyhledávací podíl Googlu na českém mobilním trhu přesahuje 95 %. Mladší demografická skupina (15–35 let) Sklik prakticky nepoužívá. Pokud cílíte na cokoliv mobile-first nebo na mladší cílovku, bez Google Ads se neobejdete.",
        ],
      },
      {
        id: "vyhody-skliku",
        heading: "Výhody Skliku",
        paragraphs: [
          "Sklik má své pevné místo, a kdo ho označuje za „mrtvý“, většinou ho jen nikdy pořádně neměřil. Hlavní výhodou je nižší cena za proklik — průměrně o 20–40 % levnější než Google Ads u stejných klíčových slov. U některých segmentů (regionální služby, tradiční řemesla, B2B s českou klientelou) jsou rozdíly i markantnější.",
          "Sklik je silný v partnerské síti Seznamu — Zboží.cz, Firmy.cz, Mapy.cz, e-mail Seznamu. Pro e-shopy je Zboží.cz stále zásadní akviziční kanál a inzerce přes Sklik je tu výrazně efektivnější než Google Shopping. Pro lokální podnikání (restaurace, opravy, ordinace) jsou Firmy.cz a Mapy.cz nepostradatelný zdroj poptávek.",
          "Demograficky Sklik exceluje u starší cílovky (50+) a v regionech mimo Prahu a Brno. Pokud prodáváte produkty nebo služby pro tuto skupinu — pohřební služby, zahradní technika, regionální stavební firmy, zdravotnické potřeby — Sklik bude často generovat lepší konverzní poměr i ROAS než Google Ads.",
        ],
      },
      {
        id: "lokalni-podnikani",
        heading: "Lokální podnikání: Sklik nepodceňujte",
        paragraphs: [
          "Pro lokální firmy je situace nejvíce vyrovnaná. Google Maps a Sklik partnerství s Mapy.cz/Firmy.cz fungují obě dobře, jen mírně jinou cílovku. Praktická rada: spustit obojí, měřit volání a formuláře pomocí call trackingu a po 2–3 měsících rozhodnout, kam dát víc.",
          "Pro řemeslníky (instalatéři, elektrikáři, opraváři) v menších městech a obcích bývá Sklik kvalitnější — uživatelé Seznamu jsou často přesně ta cílovka, která preferuje českou firmu, lokálního dodavatele a osobní kontakt. Ne náhodou většina živnostníků v regionech, se kterými spolupracujeme, hlásí lepší poměr cena/zakázka právě ze Skliku.",
        ],
      },
      {
        id: "ecommerce",
        heading: "E-commerce: Google Ads dominuje, Sklik je doplněk",
        paragraphs: [
          "V e-commerce má Google Ads jasnou převahu. Performance Max s product feedem je dnes hlavní výkonnostní kanál pro většinu e-shopů — kombinuje Search, Shopping, Display, YouTube a Discover v jednom. Žádný produkt na Skliku nemá srovnatelný ekvivalent.",
          "Sklik v e-commerce ale stále dává smysl jako doplněk: Sklik Search pro brandové dotazy, Zboží.cz pro produktové porovnávání, případně Sklik Display pro remarketing. Rozdělení rozpočtu 80 % Google Ads / 20 % Sklik je realistický průměr pro střední e-shopy.",
          "Výjimkou jsou e-shopy s produkty pro starší zákazníky (zdravotnické pomůcky, zahradní technika, ručně vyráběné věci) — tam může poměr být i 50/50, protože nákupní behaviour cílovky je výrazně víc orientovaný na Seznam.",
        ],
      },
      {
        id: "b2b",
        heading: "B2B: Google Ads s velkou převahou",
        paragraphs: [
          "V B2B segmentech je Google Ads téměř bezkonkurenční. Rozhodovatelé v IT, marketingu, prodeji nebo finance hledají v 95+ % na Googlu. Sklik tu má smysl pouze v některých tradičních odvětvích (strojírenství, stavebnictví, zemědělství), kde rozhodovatelé z generace 50+ stále preferují Seznam.",
          "Pro B2B navíc Google Ads nabízí Customer Match — možnost cílit reklamu na konkrétní e-mailové seznamy z vašeho CRM. Tato funkce je v ABM (account-based marketing) strategiích klíčová a Sklik nic podobného neumí v dostatečné kvalitě.",
        ],
      },
      {
        id: "kombinace",
        heading: "Kdy kombinovat oba systémy",
        paragraphs: [
          "Optimální strategie pro většinu byznysů je kombinace s jasným poměrem. Začněte s Google Ads — má lepší ROI v 80 % případů — a po 2–3 měsících přidejte Sklik jako test. Pokud Sklik dosáhne podobného CPA nebo ROAS, můžete rozpočet rozšířit. Pokud výrazně horšího, stáhněte ho zpět na minimum nebo úplně.",
          "Konkrétní rozpočtové rozdělení podle typu byznysu: lokální služby 60/40 (Google/Sklik), malý e-shop 80/20, střední/velký e-shop 85/15, B2B 95/5. Toto jsou orientační čísla, finální rozdělení vždy upravujte podle reálných výsledků v účtu.",
          "V Netmediu typicky spravujeme oba systémy pod jednou agenturní strukturou, takže rozpočet můžeme dynamicky přesouvat mezi platformami podle toho, kde aktuálně sedí lepší výkon. Jednotná správa také znamená konzistentní reporting, jednotné konverzní cíle a celkový obraz výkonnosti napříč kanály.",
        ],
      },
      {
        id: "zaver",
        heading: "Závěr a praktická doporučení",
        paragraphs: [
          "Otázka „Google Ads nebo Sklik“ je v roce 2026 špatně položená. Správná otázka je „v jakém poměru a v jaké roli“. Pro většinu českých firem je odpověď: Google Ads jako hlavní výkonnostní kanál, Sklik jako cenově efektivní doplněk pro specifické segmenty a cílovky.",
          "Pokud nevíte, jaký poměr je správný pro vaši situaci, nabízíme strategickou konzultaci, kde projdeme váš trh, cílovou skupinu a aktuální data a navrhneme konkrétní rozdělení rozpočtu. Více o naší práci najdete v sekci služby a případové studie.",
        ],
      },
    ],
    faq: [
      {
        q: "Je Sklik v roce 2026 ještě relevantní?",
        a: "Ano, pro určité segmenty (lokální služby, starší cílovka, B2B v tradičních odvětvích) zůstává Sklik velmi efektivní. Pro mobile-first a mladší cílovky je primární Google Ads.",
      },
      {
        q: "Jaký rozpočet je minimum, aby šel spustit současně Google Ads i Sklik?",
        a: "Realisticky 25 000–30 000 Kč měsíčně media spend. Méně znamená, že žádný z účtů nedostane dost dat na optimalizaci.",
      },
      {
        q: "Můžu spravovat Google Ads i Sklik z jednoho účtu?",
        a: "Ne, jsou to dvě separátní platformy. Lze ale využít importy kampaní mezi nimi a sjednotit reporting v GA4 nebo Looker Studiu.",
      },
      {
        q: "Funguje na Skliku Performance Max?",
        a: "Sklik nemá ekvivalent Performance Max. Nejblíže jsou Sklik kampaně se Zboží.cz feedem a dynamický remarketing přes Sklik Display.",
      },
      {
        q: "Které platformě se víc daří v B2B?",
        a: "Google Ads s výraznou převahou. Sklik v B2B dává smysl jen ve specifických oborech orientovaných na cílovku 50+.",
      },
    ],
    related: ["kolik-stoji-ppc-kampane-2026", "jak-poznat-dobrou-ppc-agenturu", "server-side-tracking-standard"],
  },

  {
    slug: "jak-poznat-dobrou-ppc-agenturu",
    title: "Jak poznat, že PPC agentura odvádí dobrou práci",
    metaTitle: "Jak poznat dobrou PPC agenturu — 7 měřitelných signálů | Netmedio",
    metaDescription:
      "Konkrétní signály, podle kterých poznáte, že PPC agentura pracuje pro vás, a ne pro svůj fee. Reporting, transparentnost, ROAS, PNO a nejčastější red flags.",
    excerpt:
      "Konkrétní signály, podle kterých poznáte, že PPC agentura odvádí dobrou práci — a největší red flags, kterých si všímat.",
    category: "PPC",
    tag: "Strategie",
    date: "2026-04-15",
    dateLabel: "15. dubna 2026",
    readingTime: 11,
    image: ppcAgency,
    sections: [
      {
        id: "uvod",
        heading: "Proč je tak těžké posoudit kvalitu agentury",
        paragraphs: [
          "Hodnocení PPC agentury je pro klienta zrádné. Reklamní účet je pro nezasvěceného člověka složitý systém — tisíce klíčových slov, desítky kampaní, grafy s pohybujícími se čísly. Když agentura pošle barevný report s rostoucími čísly, vypadá to dobře. Ale rostoucí čísla samy o sobě nic neznamenají, pokud nevíte, co byste měli porovnávat a podle čeho hodnotit.",
          "Za 15 let v oboru jsme se setkali se stovkami klientů, kteří k nám přišli od jiné agentury s pocitem „něco není v pořádku, ale nevím přesně co“. V tomto článku shrnuji konkrétní, měřitelné signály, podle kterých poznáte, jestli vaše agentura odvádí dobrou práci — i bez toho, abyste sami byli PPC specialista.",
        ],
      },
      {
        id: "reporting",
        heading: "Reporting: nejen čísla, ale i komentář",
        paragraphs: [
          "Dobrý report obsahuje tři vrstvy. První je číselná: útrata, konverze, ROAS, CPA, podíl impresí, vývoj v čase. Druhá je interpretační: co tato čísla znamenají, proč se hýbou tím směrem, kde jsou příležitosti a hrozby. Třetí je akční: co agentura dělá tento měsíc a co plánuje příští.",
          "Špatný reporting obsahuje jen první vrstvu — exportované grafy z Google Ads bez kontextu. Když report neumíte ani po pěti minutách rychlého čtení pochopit, není to vaše chyba, ale chyba agentury. Reporting je komunikační dokument, ne datový dump.",
          "Frekvence: měsíční report je standard. Pro větší účty má smysl týdenní krátký update a měsíční detailní rozbor. Kvartální strategický review by měl řešit širší kontext — kam směřuje účet, jaké jsou makro trendy, co testovat dál.",
        ],
      },
      {
        id: "transparentnost",
        heading: "Transparentnost: máte přístup k vlastnímu účtu?",
        paragraphs: [
          "Toto je první test, který doporučuji každému: máte plný admin přístup ke svému Google Ads účtu, Sklik účtu, GA4 a Google Tag Manageru? Pokud ne, je něco zásadně špatně. Agentura pracuje s vašimi penězi a vašimi daty — vy musíte mít kontrolu nad vlastním majetkem.",
          "Druhý test: víte přesně, kolik z měsíční fakturace jde na media spend a kolik na fee agentury? Pokud agentura fakturuje „all-in“ částku bez rozlišení, je tu prostor pro skrytou marži na rozpočtu. Některé agentury si přirážejí 10–30 % na rozpočet, aniž by o tom klient věděl.",
          "Třetí test: pokud byste se rozhodli ukončit spolupráci, můžete si účet vzít s sebou? Etická agentura má účet vedený přímo pod klientem (přes Manager Account / MCC s read-write přístupem klienta), takže odchod znamená jen odebrání agentury z přístupů. Pokud je účet veden „pod agenturou“ a vy nemáte přístup, je to klasický vendor lock-in.",
        ],
      },
      {
        id: "komunikace",
        heading: "Komunikace: proaktivní vs. reaktivní",
        paragraphs: [
          "Dobrá agentura se ozve sama, když se něco zásadního děje — propad konverzí, problém s feedem, neaktivní kampaň, výrazná změna na trhu. Špatná agentura čeká, až problém najdete vy a zeptáte se. Test je jednoduchý: kdy naposledy vám agentura napsala sama, mimo měsíční report?",
          "Druhý aspekt je rychlost reakce. Standard pro běžné dotazy je odpověď do 24 hodin, pro akutní problémy (pozastavená kampaň, vyčerpaný rozpočet) do 2–4 hodin v pracovní době. Pokud čekáte na odpověď tři dny, je vaše prioritizace u agentury nízká.",
          "Třetí aspekt: kdo s vámi komunikuje? Senior specialista, který kampaně skutečně spravuje, nebo account manager, který tahá informace z někoho jiného? Pro střední a větší účty má smysl mít přímý kontakt na specialistu, který rozumí detailům.",
        ],
      },
      {
        id: "roas-pno",
        heading: "ROAS a PNO: rozumíte, co měříte?",
        paragraphs: [
          "ROAS (Return on Ad Spend) = tržba z reklamy / útrata za reklamu. ROAS 500 % znamená, že za každou utracenou korunu se vrátí pět. PNO (Podíl Nákladů na Obratu) = útrata za reklamu / tržba z reklamy × 100. PNO 20 % znamená, že 20 % tržeb jde zpět do reklamy.",
          "Klíčové: ROAS a PNO se počítají z tržby, ne ze zisku. Kampaň s ROAS 600 % na produktu s 10% marží je ztrátová. Dobrá agentura s vámi sedne nad reálnou marži, započítá náklady na zpracování objednávky, dopravu a vratky a stanoví ROAS cíl, který znamená skutečnou ziskovost.",
          "Když vám agentura prezentuje ROAS jako jediné měřítko úspěchu a nezajímá ji vaše marže, je to varovný signál. Optimalizace na vysoký ROAS bez ohledu na ziskovost často znamená cílení jen na věrné brandové zákazníky — pěkné číslo v reportu, ale nulový růst byznysu.",
        ],
      },
      {
        id: "red-flags",
        heading: "Největší red flags",
        paragraphs: [
          "1. Garance pozic nebo konkrétních výsledků („garantujeme první místo“, „garantujeme 10x ROAS“). PPC se buduje na nabídkách v aukci — nikdo nemůže garantovat výsledek, protože záleží na konkurenci.",
          "2. Nulový přístup k účtům nebo „náš vlastní reportovací systém“ místo přímého přístupu do Google Ads. Skrývání zdrojových dat je téměř vždy snaha zakrýt podprůměrnou práci.",
          "3. „Optimalizujeme každý den“ jako marketingové prohlášení. Dobré PPC kampaně se nehackují denně — Smart Bidding potřebuje stabilitu. Časté zásahy obvykle znamenají, že agentura předstírá aktivitu.",
          "4. Růst útraty bez růstu konverzí. Pokud agentura každý měsíc zvyšuje rozpočet, ale konverze rostou pomaleji než útrata, ROAS klesá a vy platíte víc za horší výsledek.",
          "5. Žádné A/B testování. Dobrá agentura průběžně testuje nové reklamní texty, landing pages, audience, bid strategy. Když všechny kampaně vypadají stejně jako před rokem, agentura kampaně neoptimalizuje, jen je spravuje.",
          "6. Nezájem o váš byznys. Agentura, která neví, co prodáváte, jakou máte marži a kdo je váš zákazník, nikdy nedokáže udělat skvělé kampaně. Ptá se vaše agentura na vaše prodejní cíle, sezónnost, aktuality?",
          "7. Zelený report za každou cenu. Když vám agentura každý měsíc posílá „všechno super, rosteme“, ale váš obrat tomu neodpovídá, někde čísla skřípají. Skutečná agentura přiznává, co nefunguje, a navrhuje, jak to změnit.",
        ],
      },
      {
        id: "co-delat",
        heading: "Co dělat, když máte pochybnosti",
        paragraphs: [
          "Pokud máte podezření, že vaše agentura neodvádí dobrou práci, neukončujte spolupráci hned. Nejdřív si nechte udělat nezávislý PPC audit — od jiné agentury nebo nezávislého konzultanta. Audit by měl pokrýt strukturu účtu, kvalitu konverzních cílů, ROAS/CPA proti benchmarku, využití moderních nástrojů (Performance Max, Smart Bidding) a kvalitu reportingu.",
          "V Netmediu nabízíme tento typ auditu jako samostatnou jednorázovou službu, bez závazku k další spolupráci. Cílem auditu je dát vám objektivní pohled na to, jestli současný stav je v pořádku, nebo jestli máte nárok na lepší výsledky. Pro detaily viz služby a kontakt.",
        ],
      },
    ],
    faq: [
      {
        q: "Jak často by mi měla agentura reportovat?",
        a: "Standardem je měsíční detailní report. Pro větší účty (200 000+ Kč media spend) má smysl týdenní krátký update plus měsíční detailní rozbor.",
      },
      {
        q: "Měl bych mít přístup do svého Google Ads účtu?",
        a: "Absolutně ano, plný admin přístup. Účet patří vám, agentura ho pouze spravuje. Bez tohoto přístupu nemáte kontrolu nad vlastním majetkem.",
      },
      {
        q: "Jak poznám, že má agentura skrytou marži na rozpočtu?",
        a: "Požádejte o oddělené vykazování media spendu a fee. Pokud vám agentura odmítá toto rozlišení, prakticky vždy si přiráží na rozpočet.",
      },
      {
        q: "Co je realistický ROAS pro e-shop?",
        a: "Pro většinu e-shopů 400–800 % v závislosti na marži. U luxusního zboží a vysokých marží i 1500 %. Vždy ale relativně k marži, ne k tržbě.",
      },
      {
        q: "Měli bychom dělat PPC interně nebo přes agenturu?",
        a: "Pro menší účty (do 50 000 Kč media spend) je agentura efektivnější. Pro velké e-shopy (1M+ ročně media spend) má smysl interní tým, ideálně s externí supervizí.",
      },
    ],
    related: ["kolik-stoji-ppc-kampane-2026", "google-ads-vs-sklik", "server-side-tracking-standard"],
  },

  {
    slug: "server-side-tracking-standard",
    title: "Server-side tracking: proč se stává standardem",
    metaTitle: "Server-side tracking 2026 — proč se stává standardem | Netmedio",
    metaDescription:
      "Konec třetích stran cookies, blokátory reklam a iOS omezení. Proč server-side tracking přes GTM Server Side je dnes nutnost pro přesné měření GA4, Google Ads a Meta Ads.",
    excerpt:
      "Konec třetích stran cookies, ITP, blokátory. Proč server-side tracking přes GTM Server Side je v roce 2026 standard.",
    category: "Analytika",
    tag: "Analytika",
    date: "2026-03-10",
    dateLabel: "10. března 2026",
    readingTime: 12,
    image: serverTracking,
    sections: [
      {
        id: "uvod",
        heading: "Měření, které se rozpadlo",
        paragraphs: [
          "Pět let zpátky vypadalo měření jednoduše: do webu jste vložili GA tag, do Tag Manageru přidali pixely Google Ads a Facebooku a o čísla jste se moc nestarali — fungovalo to. Dnes je situace dramaticky jiná. Apple ITP, Safari, Firefox a Brave blokují third-party cookies, blokátory reklam jako uBlock Origin filtrují i first-party tracking, iOS 14+ rozbilo Facebook atribuci a chystaný konec third-party cookies v Chrome dorazí dříve než pozdě.",
          "Důsledek pro inzerenty je brutální. Standardní client-side tracking dnes ztrácí typicky 20–40 % konverzí. U mobilního Safari a iOS aplikací jsou ztráty ještě vyšší. Když Facebook Ads ukazuje 100 konverzí a v účtu prodejce vidíte 160, máte slepou skvrnu na 60 transakcích — a algoritmus optimalizuje na poloviční obraz reality.",
          "Server-side tracking je odpověď, která tyto problémy řeší na technické úrovni. V tomto článku rozeberu, proč je v roce 2026 prakticky nutností pro každého inzerenta s rozpočtem nad 30 000 Kč měsíčně.",
        ],
      },
      {
        id: "konec-cookies",
        heading: "Konec třetích stran cookies — co to znamená",
        paragraphs: [
          "Third-party cookies jsou cookies nastavené z jiné domény, než kterou uživatel navštěvuje. Klasický příklad: jste na e-shopu.cz a Facebook pixel nastaví cookies na doméně facebook.com. Tyto cookies umožňovaly cross-site tracking a sledování uživatele napříč webem.",
          "Safari a Firefox blokují third-party cookies už od roku 2019. Chrome jejich postupné vyřazování prošlo několika fázemi a zbývající podpora postupně mizí. Důsledek: cross-domain remarketing, lookalike audience postavené na třetích cookies a klasická atribuce přes Facebook pixel přestávají fungovat.",
          "First-party cookies (nastavené přímo doménou webu, který uživatel navštěvuje) zůstávají funkční. Server-side tracking využívá právě tento mechanismus — všechna měření probíhají z vaší domény jako first-party požadavek, takže prochází blokátory i přísnými nastaveními prohlížečů.",
        ],
      },
      {
        id: "ga4",
        heading: "GA4 a server-side: nutnost pro přesná data",
        paragraphs: [
          "GA4 byl od začátku navržen s ohledem na ztrátu signálu a používá AI modelování pro doplnění chybějících dat. To je dobrá zpráva — i bez server-side tracking dostanete použitelné metriky. Špatná zpráva: modelovaná data jsou odhadem, ne přesným měřením. Pro rozhodování o rozpočtech, atribuci kanálů a vyhodnocení A/B testů je rozdíl mezi odhadem a měřením zásadní.",
          "Server-side GA4 přes GTM Server Side posílá data přímo z vašeho serveru do Google Analytics, mimo prohlížeč uživatele. Tím obchází blokátory, ITP omezení i další client-side problémy. Typický nárůst přesných konverzí po nasazení je 15–35 %.",
          "Sekundárním benefitem je rychlost webu — místo desítek tracking skriptů v prohlížeči stahuje uživatel jen jeden lehký GTM kontejner a všechno ostatní řeší server. Core Web Vitals, který je SEO faktorem, se viditelně zlepší.",
        ],
      },
      {
        id: "meta-conversions-api",
        heading: "Meta Ads a Conversions API",
        paragraphs: [
          "Meta (Facebook + Instagram) Ads byly iOS 14 update nejvíc zasaženou platformou. Po jeho nasazení v roce 2021 ztratila Meta odhadem 40–60 % atribučních dat z mobilního Safari a iOS aplikací. Conversions API (CAPI) je odpověď — místo browser pixelu se konverze posílají přímo z vašeho serveru do Meta serveru.",
          "Server-side CAPI implementace přes GTM Server Side řeší tři problémy najednou: posílá data spolehlivě (bez ohledu na blokátory), doplňuje deduplikované konverze přes Event ID a poskytuje Meta vyšší kvalitu hash údajů (e-mail, telefon, IP) pro lepší match rate. V praxi typicky vidíme 25–50 % nárůst atribuovaných konverzí.",
          "Pro e-shopy s měsíčním Meta Ads rozpočtem nad 30 000 Kč je nasazení CAPI v roce 2026 v podstatě povinné. Bez něj Meta optimalizuje na neúplná data a vy ztrácíte 30+ % výkonu, který jste si zaplatili.",
        ],
      },
      {
        id: "google-ads",
        heading: "Google Ads: Enhanced Conversions a Consent Mode",
        paragraphs: [
          "Google má dva moderní mechanismy pro server-side měření: Enhanced Conversions a Consent Mode v2. Enhanced Conversions doplňují konverze o hash údaje (e-mail, telefon), které Google matchuje s přihlášenými uživateli Google účtu. Match rate se typicky pohybuje kolem 40–70 %, což znamená výrazné doplnění chybějících atribucí.",
          "Consent Mode v2 řeší soulad s GDPR a EU regulací AI. Uživatel, který nedá souhlas s cookies, posílá omezené signály, ze kterých Google modeluje konverze pomocí AI. Bez Consent Mode v2 se v EU od roku 2024 nesmí používat Google Ads remarketing — nasazení je tedy nutné nejen pro výkon, ale i právně.",
          "Obě tyto funkce běží primárně server-side přes GTM SS. Klientské Google Tag řešení v roce 2026 už nestačí, pokud chcete maximální výkonnost a soulad s legislativou.",
        ],
      },
      {
        id: "gtm-server-side",
        heading: "Google Tag Manager Server Side: jak to funguje",
        paragraphs: [
          "GTM Server Side je hostovaný kontejner běžící na vaší vlastní doméně (typicky sgtm.vasdomena.cz), ke kterému prohlížeč posílá tracking data místo přímo Googlu nebo Facebooku. Kontejner pak data přeposílá příslušným platformám server-to-server.",
          "Architektura má dvě části: client-side GTM (lehký kontejner v prohlížeči, posílá data jen na server endpoint) a server-side GTM (běží v Cloud Run nebo Cloudflare, zpracovává data a posílá je platformám). Komunikace probíhá přes vlastní doménu, takže blokátory neumí rozlišit tracking od běžných API volání.",
          "Nasazení vyžaduje jednorázovou investici 20 000–60 000 Kč podle složitosti webu a měsíční hosting kolem 500–2000 Kč (Google Cloud Run) nebo zdarma (Cloudflare Workers do určitého traffic limitu). Pro účet s media spendem 100 000+ Kč měsíčně se investice typicky vrátí během 2–3 měsíců díky zpřesnění atribuce.",
        ],
      },
      {
        id: "kdy-nasadit",
        heading: "Kdy má smysl server-side nasadit",
        paragraphs: [
          "Server-side tracking dává smysl prakticky vždy, ale priorita roste s velikostí rozpočtu. Pod 30 000 Kč měsíčního media spendu může implementace přesahovat krátkodobý benefit. Mezi 30 000 a 100 000 Kč je to vysoce doporučené. Nad 100 000 Kč je to v podstatě povinné, jinak ztrácíte výrazné procento výkonu.",
          "Druhý faktor je e-commerce vs. lead generation. E-shopy s vysokým podílem mobile trafficu (typicky 60+ %) ztrácí nejvíc dat — server-side má pro ně okamžitý ROI. B2B lead generation kampaně s nižším objemem konverzí přesnost dat oceňuje při atribuci napříč delším prodejním cyklem.",
          "Třetí faktor je legislativní soulad. Pokud máte web v EU a používáte Google Ads remarketing, Consent Mode v2 je povinný od roku 2024. Server-side GTM ho implementuje výrazně robustněji než client-side řešení.",
        ],
      },
      {
        id: "zaver",
        heading: "Závěr: server-side jako nový standard",
        paragraphs: [
          "Server-side tracking není v roce 2026 už „nice to have“ pro pokročilé inzerenty — je to základní infrastruktura pro přesné měření a efektivní výkonnostní marketing. Inzerenti, kteří ho nemají, ztrácejí 20–40 % výkonu, který si platí, a algoritmy reklamních platforem jim optimalizují na neúplný obraz reality.",
          "V Netmediu nasazujeme GTM Server Side jako součást komplexního měřicího setupu pro většinu klientů s media spendem nad 50 000 Kč měsíčně. Pokud chcete projít vaši aktuální situaci a zjistit, kolik dat ztrácíte, nabízíme měřicí audit jako samostatnou službu — detaily viz kontakt.",
        ],
      },
    ],
    faq: [
      {
        q: "Co je rozdíl mezi client-side a server-side trackingem?",
        a: "Client-side tracking posílá data přímo z prohlížeče (lze blokovat). Server-side posílá data ze serveru — přes vaši doménu — což blokátory neumí rozlišit od běžné API komunikace.",
      },
      {
        q: "Kolik stojí nasazení server-side GTM?",
        a: "Jednorázová implementace typicky 20 000–60 000 Kč, hosting 500–2 000 Kč měsíčně (Cloud Run) nebo zdarma na Cloudflare Workers do určitého traffic limitu.",
      },
      {
        q: "Je server-side tracking legální podle GDPR?",
        a: "Ano, naopak — Consent Mode v2, který běží primárně server-side, je v EU povinný pro Google Ads remarketing od roku 2024.",
      },
      {
        q: "Funguje server-side s WordPress nebo Shopify?",
        a: "Ano, oba systémy podporují integraci přes GTM. U Shopify navíc existuje hlavičkový GTM Server-Side wrapper pro headless implementaci.",
      },
      {
        q: "Jak rychle uvidím rozdíl po nasazení?",
        a: "Okamžitě — během prvních dnů uvidíte v GA4 nárůst zaznamenaných konverzí typicky o 15–35 %. Algoritmy reklamních platforem se zaučují na nová data 2–4 týdny.",
      },
    ],
    related: ["kolik-stoji-ppc-kampane-2026", "jak-poznat-dobrou-ppc-agenturu", "ai-automatizace-v-marketingu"],
  },

  {
    slug: "ai-automatizace-v-marketingu",
    title: "AI automatizace v marketingu – konkrétní příklady z praxe",
    metaTitle: "AI automatizace v marketingu — konkrétní příklady z praxe | Netmedio",
    metaDescription:
      "Reálné AI workflow, které šetří desítky hodin měsíčně. Automatické reporty, lead scoring, CRM integrace, e-mail automatizace a další konkrétní use case z praxe Netmedio.",
    excerpt:
      "Reálné AI workflow z praxe — automatické reporty, lead scoring, e-mail automatizace, CRM integrace. Desítky hodin úspory měsíčně.",
    category: "Automatizace",
    tag: "AI",
    date: "2026-02-05",
    dateLabel: "5. února 2026",
    readingTime: 13,
    image: aiWorkflow,
    sections: [
      {
        id: "uvod",
        heading: "Od hype k praxi",
        paragraphs: [
          "AI v marketingu byla v letech 2023–2024 hlavně marketingový buzzword — každý slibovat „revoluci“, ale konkrétní use case byly mlhavé. V roce 2026 už je situace jiná. ChatGPT, Claude, Gemini, n8n, Make a desítky dalších nástrojů poskytly stabilní infrastrukturu, na které lze postavit reálné firemní workflow — a my v Netmediu je posledních dva roky nasazujeme klientům.",
          "V tomto článku popíšu konkrétní AI automatizace, které jsme implementovali napříč klienty — co dělají, co k tomu potřebujete a kolik času reálně ušetří. Žádné teoretické případy ze sci-fi, jen praxe.",
        ],
      },
      {
        id: "automaticke-reporty",
        heading: "Automatické reporty z marketingových dat",
        paragraphs: [
          "Tradiční marketingový report zabere zkušenému specialistovi 4–8 hodin měsíčně. Stahování dat z Google Ads, GA4, Meta Ads, Skliku, jejich konsolidace, interpretace a formátování do prezentovatelné podoby. To je čistá manuální práce, kterou AI dokáže nahradit.",
          "Konkrétní setup: Looker Studio připojený na všechny reklamní platformy + GA4 generuje surová data. n8n nebo Make workflow tato data jednou měsíčně pošle do Claude/GPT API s promptem „proveď interpretaci, zvýrazni anomálie, navrhni hypotézy“. Výstup je strukturovaný report s komentáři, který specialista jen přečte a doladí.",
          "U klientů, kde jsme tento workflow nasadili, se reportovací doba zkrátila z 6 na 1 hodinu. Ušetřený čas specialista investuje do skutečné optimalizace kampaní, ne do tvorby grafů.",
        ],
      },
      {
        id: "lead-scoring",
        heading: "Lead scoring a kvalifikace",
        paragraphs: [
          "B2B firmy s vyšším objemem leadů (50+ měsíčně) řeší klasický problém: které leady mají prioritu, do kterých investovat čas obchodního týmu? Tradiční řešení je manuální scoring nebo jednoduchá pravidla v CRM (firma > 50 zaměstnanců = priority). AI to dokáže výrazně lépe.",
          "Workflow: nový lead z formuláře jde do CRM. n8n trigger zavolá Claude API s celým kontextem leadu — text z formuláře, doménu firmy, LinkedIn profil kontaktu (přes Apify scrape), data o firmě (Hospodářský rejstřík API). Claude posoudí lead podle definovaných kritérií a vrátí score 1–10 + krátké zdůvodnění. Lead s vysokým score automaticky upozorní senior obchodníka, lead s nízkým score jde do nurturing sekvence.",
          "U jednoho B2B klienta jsme tímto způsobem zvýšili konverzní poměr z leadu na schůzku z 18 % na 31 %, protože obchodníci přestali ztrácet čas na nevhodných kontaktech. Implementace zabrala 3 dny práce.",
        ],
      },
      {
        id: "crm-integrace",
        heading: "CRM integrace s AI obohacením dat",
        paragraphs: [
          "Klasický CRM (HubSpot, Pipedrive, Raynet) obsahuje strukturovaná data, ale chybí mu kontext. AI dokáže do CRM zápisů přidat hodnotu — automaticky shrnout e-mailovou komunikaci, vytvořit přepis hovoru, navrhnout follow-up.",
          "Konkrétní use case: po každém telefonátu (přes Daktela, JustCall nebo jiný call systém) Whisper přepíše hovor do textu. Claude vygeneruje shrnutí, vytáhne action items a navrhne datum follow-upu. Vše se automaticky uloží do CRM karty kontaktu. Obchodník po hovoru nemusí psát zápis, jen zkontroluje a odsouhlasí AI verzi.",
          "Druhý use case: AI sleduje historii komunikace s každým leadem a generuje personalizovaný follow-up e-mail podle aktuální fáze sales procesu. Není to spam — je to draft, který obchodník přečte, doladí a odešle. Ušetří 5–10 minut na každém leadu.",
        ],
      },
      {
        id: "ai-workflow",
        heading: "AI workflow pro běžné firemní úkony",
        paragraphs: [
          "Mimo marketing a sales je celá řada „neviditelných“ procesů, kde AI šetří hodiny týdně. Generování faktur podle e-mailové komunikace, klasifikace příchozí pošty do správných složek, sumarizace dlouhých dokumentů, kontrola smluv proti standardní šabloně, generování návrhů odpovědí na běžné dotazy.",
          "Konkrétní nástrojový stack, který doporučujeme: n8n (open-source, self-hosted automation), Claude/GPT API jako AI brain, Airtable/Google Sheets jako datová vrstva, Slack/e-mail jako notifikační kanál. Tento stack dokáže pokrýt 80 % firemních automatizací a má rozumný cenový rámec — typicky 2 000–8 000 Kč měsíčně na cloud služby.",
        ],
      },
      {
        id: "email-automatizace",
        heading: "E-mail automatizace s AI personalizací",
        paragraphs: [
          "Tradiční e-mail automatizace (Mailchimp, ActiveCampaign) má statické šablony a podmínkové větvení. AI přidává personalizaci, která dělá z hromadného e-mailu téměř 1-on-1 komunikaci.",
          "Příklad: e-shop s 50 000 zákazníky posílá týdně newsletter s novými produkty. Místo jednoho e-mailu pro všechny generuje AI personalizovaný text podle historie nákupů, prohlížených produktů a sezónnosti. Subject line, opening sentence a tři doporučené produkty se liší pro každého příjemce. Open rate se typicky zvýší o 30–60 %, click rate o 40–100 %.",
          "Implementace přes Klaviyo + GPT API nebo Mailchimp + Make/n8n je dnes realistická během 1–2 týdnů a vyžaduje rozpočet 50 000–150 000 Kč. Pro e-shopy s ročním obratem nad 10 mil. Kč je ROI typicky pod 3 měsíce.",
        ],
      },
      {
        id: "obsah-a-seo",
        heading: "Obsah a SEO s AI podporou",
        paragraphs: [
          "AI generování obsahu má reputaci „nekvalitního, generického textu“ — a často oprávněně. Klíč je v procesu: AI nepoužívat na finální výstup, ale na akceleraci tvorby. Workflow, který funguje: AI vytvoří první draft podle briefu a klíčových slov, human editor proškrtá generické pasáže, doplní vlastní zkušenost a příklady, finalizuje pro publikování.",
          "Tento přístup zkracuje dobu psaní článku z 6 na 2 hodiny při zachování (nebo zlepšení) kvality. Pro firemní blog je rozdíl mezi „3 články měsíčně“ a „12 článků měsíčně“ při stejném rozpočtu zásadní — víc obsahu = víc dlouhého ocasu SEO = víc organického trafficu.",
          "Pro samotnou SEO optimalizaci je dnes klíčové cílit i na AI vyhledávače — ChatGPT, Perplexity, Gemini, Google AI Overviews. Strukturované zmínky, FAQ sekce, schema markup a jasné odpovědi na konkrétní otázky jsou pro AI search důležitější než klasické SEO faktory.",
        ],
      },
      {
        id: "uspora-casu",
        heading: "Reálná úspora času a ROI",
        paragraphs: [
          "Spočítáno napříč našimi klienty, kteří mají nasazený AI workflow stack, se průměrná úspora pohybuje mezi 20 a 60 hodinami měsíčně na firmu střední velikosti (10–50 zaměstnanců). To se rovná polovině až celému jednomu úvazku, který může být přesměrován na strategickou práci.",
          "Investice do AI automatizace má dvě roviny: jednorázový setup (50 000–300 000 Kč podle složitosti) a měsíční provoz (3 000–15 000 Kč za API a hosting). Návratnost typicky pod 6 měsíců, často pod 3 měsíce.",
          "Důležité ale je nestavět AI workflow „pro AI“. Nejhorší implementace, které vidíme, jsou ty, kde firma chce „mít AI“ bez konkrétního use case. Vždy začněte mapou aktuálních manuálních procesů, vyberte ty s nejvyšším podílem opakování a nejnižší kreativitou, a teprve pak hledejte AI řešení. Více v sekci služby.",
        ],
      },
    ],
    faq: [
      {
        q: "Kolik stojí nasazení AI workflow ve firmě?",
        a: "Jednorázový setup typicky 50 000–300 000 Kč podle počtu a složitosti procesů. Měsíční provoz API a hostingu 3 000–15 000 Kč. Návratnost typicky pod 6 měsíců.",
      },
      {
        q: "Potřebuji pro AI workflow programátora?",
        a: "Pro většinu use case stačí no-code/low-code nástroje jako n8n nebo Make. Pro pokročilé integrace s vlastním softwarem už ano.",
      },
      {
        q: "Je AI generovaný obsah penalizovaný Googlem?",
        a: "Ne, pokud je kvalitní, originální a poskytuje uživateli reálnou hodnotu. Google penalizuje spam a generický obsah, nikoliv AI jako technologii.",
      },
      {
        q: "Jaká data o klientech jsou bezpečná posílat do AI?",
        a: "Pro citlivá data používejte AI s data privacy zárukami — Claude Enterprise, GPT API (bez trénování) nebo self-hosted modely. Osobní údaje by neměly opouštět EU bez DPA.",
      },
      {
        q: "Začněte malou automatizací, nebo rovnou velkým projektem?",
        a: "Vždy malou — nasaďte jeden use case, ověřte ROI, teprve potom škálujte. Velké projekty bez ověřených malých kroků mají vysokou míru selhání.",
      },
    ],
    related: ["server-side-tracking-standard", "kolik-stoji-ppc-kampane-2026", "jak-poznat-dobrou-ppc-agenturu"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));
