type Item = { title: string; desc: string };
type Related = { label: string; desc: string; to: string; params?: Record<string, string> };

export type PpcPlatform = {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  chips: string[];
  audienceTitle: string;
  audienceIntro: string;
  audiences: Item[];
  scopeTitle: string;
  scopeIntro: string;
  scope: Item[];
  processTitle: string;
  process: Item[];
  measureTitle: string;
  measureIntro: string;
  measure: string[];
  related: Related[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

const ppc: Related = {
  label: "Výkonnostní reklama",
  desc: "Přehled všech reklamních kanálů a jak je propojujeme do jedné strategie.",
  to: "/sluzby/vykonnostni-reklama",
};
const analytics: Related = {
  label: "Měření & analytika",
  desc: "GA4, Tag Manager, Consent Mode a server-side tracking pro spolehlivá data.",
  to: "/sluzby/$slug",
  params: { slug: "analytika-reporting" },
};
const web: Related = {
  label: "Tvorba webů",
  desc: "Landing pages a weby, které z placené návštěvnosti dělají poptávky.",
  to: "/sluzby/tvorba-webu",
};

export const googleAds: PpcPlatform = {
  slug: "google-ads",
  name: "Google Ads",
  title: "Správa Google Ads kampaní | Search, Performance Max, Shopping | Netmedio",
  description:
    "Správa a optimalizace Google Ads: vyhledávací kampaně, Performance Max, Shopping, YouTube a remarketing. Struktura účtu, měření konverzí a řízení podle obchodních cílů. Google Partner.",
  eyebrow: "Google Ads",
  h1: "Správa Google Ads kampaní",
  lead:
    "Google Ads zachytí zákazníky ve chvíli, kdy aktivně hledají, co nabízíte. Nastavíme strukturu účtu, cílení a měření tak, aby rozpočet šel do dotazů a produktů, které skutečně přinášejí poptávky a objednávky.",
  chips: ["Search", "Performance Max", "Shopping", "Demand Gen", "YouTube", "Remarketing"],
  audienceTitle: "Pro koho Google Ads dává smysl",
  audienceIntro:
    "Google Ads je nejsilnější, když lidé o vašem produktu nebo službě už vědí a hledají ho. Hodí se proto pro většinu firem s ověřenou poptávkou.",
  audiences: [
    { title: "E-shopy", desc: "Shopping a Performance Max nad produktovým feedem, řízení podle marže, ROAS a výkonu jednotlivých kategorií." },
    { title: "Poskytovatelé služeb", desc: "Vyhledávací kampaně na konkrétní dotazy, lokální cílení a měření telefonátů i formulářů." },
    { title: "B2B firmy", desc: "Delší rozhodovací proces, menší objem dotazů a důraz na kvalitu leadů — ideálně s propojením na CRM." },
  ],
  scopeTitle: "Co v Google Ads spravujeme",
  scopeIntro: "Každý typ kampaně má v účtu jinou roli. Rozhodujeme podle dat, ne podle toho, co Google zrovna doporučuje.",
  scope: [
    { title: "Vyhledávací kampaně", desc: "Analýza klíčových slov, struktura sestav, reklamní texty, rozšíření a průběžná práce s vyhledávacími dotazy a vylučujícími slovy." },
    { title: "Performance Max", desc: "Nastavení skupin podkladů, signálů publika a segmentace produktů. Kontrolujeme, kam kampaň skutečně utrácí, a nenecháváme ji běžet naslepo." },
    { title: "Shopping a Merchant Center", desc: "Napojení a čištění produktového feedu, řešení zamítnutých produktů, optimalizace názvů a vlastních štítků." },
    { title: "YouTube a Demand Gen", desc: "Video a obrazové formáty pro oslovení nových zákazníků a podporu značky tam, kde to dává smysl vzhledem k rozpočtu." },
    { title: "Remarketing", desc: "Oslovení návštěvníků, kteří nedokončili nákup nebo poptávku, s ohledem na Consent Mode a frekvenci zobrazení." },
    { title: "Strategie nabídek", desc: "Volba mezi manuálním řízením, cílovým CPA, ROAS nebo maximalizací hodnoty konverzí podle objemu dat a cílů." },
  ],
  processTitle: "Jak s Google Ads pracujeme",
  process: [
    { title: "Audit účtu a měření", desc: "Projdeme stávající účet, historii kampaní, nastavení konverzí a propojení s GA4 a Merchant Center. Zjistíme, kde rozpočet uniká." },
    { title: "Struktura a nastavení", desc: "Navrhneme strukturu kampaní podle produktů, marží nebo typů služeb a doplníme chybějící měření." },
    { title: "Spuštění a učení", desc: "Kampaně spouštíme postupně, aby automatické strategie nabídek měly dostatek kvalitních dat." },
    { title: "Pravidelná optimalizace", desc: "Vyhledávací dotazy, nabídky, reklamy, publika a rozpočty upravujeme průběžně podle výsledků." },
  ],
  measureTitle: "Optimalizujeme na obchodní výsledky, ne na prokliky",
  measureIntro:
    "Automatické strategie Google Ads jsou jen tak dobré, jak dobrá data dostávají. Proto řešíme měření stejně pečlivě jako samotné kampaně.",
  measure: [
    "Konverze v GA4 a Google Ads včetně hodnoty objednávky",
    "Enhanced Conversions a Consent Mode v2",
    "Import offline konverzí z CRM pro B2B",
    "Sledování CPA, ROAS, podílu zobrazení a marže",
    "Kontrola duplicitních a chybně započítaných konverzí",
    "Srozumitelný reporting s doporučenými kroky",
  ],
  related: [
    { label: "Sklik & Seznam", desc: "Doplnění Google Ads o český vyhledávač a síť Seznamu.", to: "/sluzby/sklik" },
    { label: "Produktové srovnávače", desc: "Heureka, Zboží.cz a feedy pro e-shopy.", to: "/sluzby/produktove-srovnavace" },
    analytics,
  ],
  faq: [
    { q: "Kolik stojí správa Google Ads?", a: "Správa jednoho reklamního systému začíná od 5 000 Kč měsíčně, při kombinaci více systémů od 8 000 Kč. Rozpočet na reklamu platíte přímo Googlu a je oddělený od ceny správy." },
    { q: "Jaký rozpočet na Google Ads potřebuji?", a: "Záleží na oboru, konkurenci a ceně za proklik. Rozpočet by měl stačit na dostatek kliknutí a konverzí, aby se kampaně mohly učit. Konkrétní doporučení dáme po analýze klíčových slov." },
    { q: "Je Performance Max vhodný pro každého?", a: "Ne. Pro e-shopy s kvalitním feedem a funkčním měřením bývá silný, pro malé B2B účty s málo konverzemi často méně vhodný než klasické vyhledávací kampaně." },
    { q: "Komu patří účet Google Ads?", a: "Vždy vám. Do účtu vstupujeme přes náš manažerský účet (MCC) a po ukončení spolupráce vám zůstane včetně historie." },
    { q: "Převezmete i existující účet?", a: "Ano. Nejprve uděláme audit a navrhneme úpravy. Funkční části účtu zachováme, aby se neztratila historie a data pro učení." },
    { q: "Jak rychle uvidím výsledky?", a: "První data jsou k dispozici během dnů, ale automatické strategie potřebují zpravidla několik týdnů na učení. Stabilní výkon hodnotíme v delším horizontu." },
  ],
  ctaTitle: "Chcete vědět, kde má váš Google Ads účet rezervy?",
  ctaText: "Projdeme účet, měření a cíle a navrhneme konkrétní další kroky. Nezávazně.",
};

export const sklik: PpcPlatform = {
  slug: "sklik",
  name: "Sklik",
  title: "Správa Sklik kampaní | Vyhledávání, obsahová síť, Zboží.cz | Netmedio",
  description:
    "Správa reklamy v Skliku: vyhledávání Seznamu, obsahová síť, remarketing a produktové kampaně se Zboží.cz. Sklik jako doplněk Google Ads nebo samostatný kanál pro český trh.",
  eyebrow: "Sklik & Seznam",
  h1: "Správa kampaní v Skliku",
  lead:
    "Sklik je reklamní systém Seznamu. Oslovíte přes něj uživatele českého vyhledávače a velké obsahové sítě Seznamu včetně zpravodajských webů. Pro řadu českých firem je vhodným doplňkem Google Ads.",
  chips: ["Vyhledávání Seznam", "Obsahová síť", "Remarketing", "Dynamický retargeting", "Zboží.cz"],
  audienceTitle: "Kdy má Sklik smysl",
  audienceIntro:
    "Sklik cílí výhradně na český trh. Jeho přínos se liší podle oboru a cílové skupiny, proto ho vždy vyhodnocujeme v porovnání s ostatními kanály.",
  audiences: [
    { title: "Firmy zaměřené na ČR", desc: "Lokální služby, řemesla, zdravotnictví či vzdělávání, kde je publikum Seznamu relevantní." },
    { title: "E-shopy na českém trhu", desc: "Produktové kampaně napojené na Zboží.cz a dynamický retargeting nad produktovým feedem." },
    { title: "Firmy s Google Ads", desc: "Rozšíření zásahu o uživatele, kteří Google nepoužívají, bez nutnosti stavět strategii od nuly." },
  ],
  scopeTitle: "Co v Skliku řešíme",
  scopeIntro: "Sklik se v nastavení i chování liší od Google Ads. Kampaně proto nekopírujeme 1:1, ale upravujeme pro prostředí Seznamu.",
  scope: [
    { title: "Vyhledávací kampaně", desc: "Klíčová slova s ohledem na českou morfologii, typy shody a vylučující slova specifická pro Sklik." },
    { title: "Obsahová síť Seznamu", desc: "Bannery a kombinovaná reklama na webech Seznamu a partnerů, s kontrolou umístění a výkonu." },
    { title: "Remarketing a retargeting", desc: "Oslovení návštěvníků webu a dynamický retargeting s konkrétními produkty z feedu." },
    { title: "Produktové kampaně a Zboží.cz", desc: "Napojení feedu, správa nabídek a propojení výkonu produktů na srovnávači se Sklikem." },
    { title: "Měřicí kód a konverze", desc: "Nasazení Sklik retargetingového a konverzního kódu přes Google Tag Manager v souladu se souhlasem s cookies." },
    { title: "Import a úpravy z Google Ads", desc: "Pokud kampaně už běží v Google Ads, využijeme je jako základ a upravíme strukturu, texty a nabídky pro Sklik." },
  ],
  processTitle: "Jak se Sklikem pracujeme",
  process: [
    { title: "Analýza poptávky na Seznamu", desc: "Ověříme, jak velký podíl vaší cílové skupiny Seznam používá a jaké dotazy zadává." },
    { title: "Nastavení měření", desc: "Zkontrolujeme konverzní kód Skliku a propojení s GA4, aby šel Sklik férově porovnat s dalšími kanály." },
    { title: "Spuštění kampaní", desc: "Začínáme vyhledáváním a retargetingem, obsahovou síť přidáváme podle výsledků." },
    { title: "Průběžná optimalizace", desc: "Upravujeme nabídky, klíčová slova, umístění a rozpočet mezi Sklikem a ostatními kanály." },
  ],
  measureTitle: "Sklik vyhodnocujeme v kontextu celého marketingu",
  measureIntro:
    "Sklik a Google Ads si často připisují stejné konverze. Díky jednotnému měření v GA4 vidíme skutečný přínos Skliku a rozpočet podle toho rozdělujeme.",
  measure: [
    "Konverzní a retargetingový kód Skliku přes GTM",
    "Porovnání výkonu Skliku a Google Ads v GA4",
    "UTM parametry a čisté přiřazení zdrojů",
    "Sledování ceny za konverzi a podílu na obratu",
    "Kontrola umístění v obsahové síti",
    "Pravidelný report s doporučením k rozpočtu",
  ],
  related: [
    { label: "Google Ads", desc: "Hlavní vyhledávací kanál pro většinu firem.", to: "/sluzby/google-ads" },
    { label: "Produktové srovnávače", desc: "Zboží.cz a Heureka pro e-shopy.", to: "/sluzby/produktove-srovnavace" },
    ppc,
  ],
  faq: [
    { q: "Má Sklik v dnešní době ještě smysl?", a: "Pro řadu českých firem ano, hlavně jako doplněk Google Ads. Jestli se vyplatí právě vám, ověříme podle oboru, cílové skupiny a dat z měření." },
    { q: "Můžu mít jen Sklik bez Google Ads?", a: "Můžete, ale pro většinu firem doporučujeme začít Google Ads a Sklik přidat jako rozšíření. Výjimkou jsou obory, kde je publikum Seznamu mimořádně silné." },
    { q: "Kolik stojí správa Skliku?", a: "Správa jednoho systému začíná od 5 000 Kč měsíčně. Při kombinaci se Google Ads nebo Meta Ads od 8 000 Kč měsíčně." },
    { q: "Stačí zkopírovat kampaně z Google Ads?", a: "Import je dobrý začátek, ale Sklik má jiné typy shody, jinou obsahovou síť i chování uživatelů. Kampaně je potřeba upravit." },
    { q: "Jak souvisí Sklik se Zboží.cz?", a: "Zboží.cz je srovnávač Seznamu. Produktové kampaně se Zboží.cz propojují s účtem Sklik, takže je vhodné řešit je společně." },
  ],
  ctaTitle: "Zjistěte, jestli se vám Sklik vyplatí",
  ctaText: "Podíváme se na váš obor, současné kampaně a měření a řekneme, jakou roli by Sklik měl hrát.",
};

export const metaAds: PpcPlatform = {
  slug: "meta-ads",
  name: "Meta Ads",
  title: "Správa Meta Ads | Reklama na Facebooku a Instagramu | Netmedio",
  description:
    "Správa reklamy na Facebooku a Instagramu: akviziční kampaně, remarketing, katalogové kampaně pro e-shopy a Conversions API. Kreativa, publika a měření pod jednou střechou.",
  eyebrow: "Meta Ads",
  h1: "Reklama na Facebooku a Instagramu",
  lead:
    "Meta Ads oslovuje lidi, kteří váš produkt zatím aktivně nehledají. Poptávku tedy spíš vytváří, než zachytává. Rozhoduje kvalita kreativy, správně zvolený cíl kampaně a spolehlivé měření.",
  chips: ["Facebook", "Instagram", "Akvizice", "Remarketing", "Katalogové kampaně", "Conversions API"],
  audienceTitle: "Pro koho je Meta Ads vhodná",
  audienceIntro:
    "Meta Ads funguje nejlépe u produktů, které se dají dobře ukázat vizuálně nebo příběhem, a tam, kde chcete oslovit nové zákazníky.",
  audiences: [
    { title: "E-shopy", desc: "Katalogové kampaně s dynamickými produkty, Advantage+ nákupní kampaně a remarketing opuštěných košíků." },
    { title: "Lokální a spotřebitelské služby", desc: "Oslovení lidí v okolí, sběr poptávek přes formuláře a podpora nových nabídek." },
    { title: "Značky s novým produktem", desc: "Když poptávka ve vyhledávání zatím neexistuje, Meta pomáhá produkt dostat k relevantním lidem." },
  ],
  scopeTitle: "Co v Meta Ads řešíme",
  scopeIntro: "Na Facebooku a Instagramu dnes rozhoduje hlavně kreativa a data. Cílení je z velké části automatizované.",
  scope: [
    { title: "Struktura kampaní a cíle", desc: "Volba správného cíle (prodej, potenciální zákazníci, návštěvnost) a jednoduchá struktura, která algoritmu umožní se učit." },
    { title: "Kreativa a sdělení", desc: "Navrhujeme koncepty reklam, texty a formáty (video, carousel, statické) a testujeme je proti sobě." },
    { title: "Katalogové kampaně", desc: "Napojení produktového katalogu a dynamické reklamy, které ukazují konkrétní produkty podle zájmu uživatele." },
    { title: "Publika a remarketing", desc: "Vlastní publika z návštěvníků webu, zákazníků a interakcí na sociálních sítích, podobná publika a vylučování." },
    { title: "Lead formuláře", desc: "Sběr poptávek přímo na Facebooku a Instagramu včetně napojení na e-mail nebo CRM." },
    { title: "Business Manager a pixel", desc: "Uspořádání účtů, ověření domény, správa oprávnění a nasazení Meta Pixelu." },
  ],
  processTitle: "Jak s Meta Ads pracujeme",
  process: [
    { title: "Kontrola účtu a dat", desc: "Ověříme Business Manager, pixel, Conversions API a události, na které má kampaň optimalizovat." },
    { title: "Strategie a kreativní koncepty", desc: "Definujeme, komu a co chceme sdělit, a připravíme několik odlišných kreativních směrů k testování." },
    { title: "Testování", desc: "Kreativy a sdělení porovnáváme s dostatečným rozpočtem, aby výsledky byly průkazné." },
    { title: "Škálování a obnova kreativy", desc: "Funkční reklamy postupně škálujeme a kreativu pravidelně obměňujeme, aby publikum neunavila." },
  ],
  measureTitle: "Spolehlivé měření je u Meta Ads zásadní",
  measureIntro:
    "Kvůli blokování cookies a omezením v prohlížečích ztrácí samotný pixel část dat. Conversions API a čisté nastavení událostí pomáhají algoritmu optimalizovat správným směrem.",
  measure: [
    "Meta Pixel a Conversions API (server-side)",
    "Deduplikace událostí mezi pixelem a serverem",
    "Ověření domény a priorita událostí",
    "Porovnání dat z Meta s GA4",
    "Sledování CPA, ROAS a frekvence zobrazení",
    "Vyhodnocení kreativ podle výkonu",
  ],
  related: [
    { label: "Google Ads", desc: "Zachycení poptávky, kterou Meta Ads pomáhá vytvořit.", to: "/sluzby/google-ads" },
    analytics,
    web,
  ],
  faq: [
    { q: "Kolik stojí správa Meta Ads?", a: "Správa samostatně začíná od 4 900 Kč měsíčně, v kombinaci s dalšími reklamními systémy od 8 000 Kč. Rozpočet na reklamu platíte přímo Meta." },
    { q: "Připravujete i kreativu?", a: "Navrhujeme koncepty, texty a jednoduché grafické a video formáty. U náročnější produkce spolupracujeme s vaším grafikem nebo dodanými materiály." },
    { q: "Je lepší Meta Ads nebo Google Ads?", a: "Mají jinou roli. Google Ads zachytává existující poptávku, Meta Ads ji vytváří. Často fungují nejlépe společně." },
    { q: "Co je Conversions API?", a: "Způsob, jak posílat konverze do Meta přímo ze serveru. Doplňuje pixel a zmenšuje ztrátu dat kvůli blokování cookies." },
    { q: "Spravujete i organické příspěvky?", a: "Zaměřujeme se na placenou reklamu. Organickou správu sociálních sítí běžně nedělamé, ale umíme se napojit na vašeho správce obsahu." },
  ],
  ctaTitle: "Chcete oslovit nové zákazníky na Facebooku a Instagramu?",
  ctaText: "Probereme váš produkt, cílovou skupinu a měření a navrhneme, jak by kampaně mohly vypadat.",
};

export const srovnavace: PpcPlatform = {
  slug: "produktove-srovnavace",
  name: "Produktové srovnávače",
  title: "Správa produktových srovnávačů | Heureka, Zboží.cz, feedy | Netmedio",
  description:
    "Správa e-shopu na srovnávačích Heureka.cz, Zboží.cz a Glami a optimalizace produktových feedů. Řízení nabídek podle marže, čisté XML feedy a napojení na Google Merchant Center.",
  eyebrow: "Produktové srovnávače",
  h1: "Správa produktových srovnávačů a feedů",
  lead:
    "Na srovnávačích zákazníci porovnávají ceny a obchody těsně před nákupem. Aby tam byl e-shop vidět za rozumnou cenu, potřebuje kvalitní produktový feed a nabídky řízené podle marže.",
  chips: ["Heureka.cz", "Zboží.cz", "Glami", "Google Merchant Center", "XML feedy"],
  audienceTitle: "Pro koho je správa srovnávačů",
  audienceIntro: "Tato služba je určená výhradně e-shopům. Její přínos roste se šíří sortimentu a konkurencí v kategorii.",
  audiences: [
    { title: "E-shopy s širokým sortimentem", desc: "Stovky až tisíce produktů, kde ruční správa nabídek není reálná a rozhoduje segmentace." },
    { title: "Obchody v konkurenčních kategoriích", desc: "Elektronika, domácnost, kosmetika či móda, kde zákazník srovnává cenu a hodnocení obchodů." },
    { title: "E-shopy s problémy ve feedu", desc: "Zamítnuté produkty, chybné kategorie nebo neaktuální ceny a dostupnost." },
  ],
  scopeTitle: "Co na srovnávačích spravujeme",
  scopeIntro: "Srovnávače stojí na produktových datech. Proto začínáme feedem, teprve pak řešíme nabídky a rozpočet.",
  scope: [
    { title: "Heureka.cz", desc: "Párování produktů, správa CPC nabídek podle kategorií a marže, sledování hodnocení obchodu a programu Ověřeno zákazníky." },
    { title: "Zboží.cz", desc: "Produktové kampaně napojené na Sklik, nabídky na úrovni kategorií a produktů a vyhodnocení v kontextu Seznamu." },
    { title: "Glami", desc: "Módní srovnávač pro e-shopy s oblečením, obuví a doplňky, včetně specifických požadavků na feed." },
    { title: "Optimalizace XML feedů", desc: "Názvy produktů, kategorie, parametry, EAN, dostupnost a doprava. Úpravy přes feed manager nebo přímo v e-shopu." },
    { title: "Google Merchant Center", desc: "Stejný feed často slouží i pro Shopping a Performance Max. Řešíme zamítnutí a diagnostiku v Merchant Center." },
    { title: "Segmentace produktů", desc: "Rozdělení sortimentu podle marže, prodejnosti nebo sezóny, aby rozpočet šel na produkty, které vydělávají." },
  ],
  processTitle: "Jak srovnávače spravujeme",
  process: [
    { title: "Audit feedu a účtů", desc: "Zkontrolujeme kvalitu dat, chyby v párování a zamítnuté produkty napříč srovnávači a Merchant Center." },
    { title: "Oprava a obohacení dat", desc: "Upravíme feed tak, aby produkty byly správně zařazené, spárované a měly úplné parametry." },
    { title: "Nastavení nabídek", desc: "Nabídky nastavíme podle marže a výkonu kategorií, ne plošně pro celý obchod." },
    { title: "Průběžné řízení", desc: "Sledujeme náklady a obrat po kategoriích i produktech a nabídky pravidelně upravujeme." },
  ],
  measureTitle: "Měříme náklady a obrat až na úroveň produktů",
  measureIntro:
    "Srovnávač může přivádět hodně návštěv, ale bez měření na úrovni kategorií a produktů snadno prodělává. Vyhodnocujeme proto náklady proti skutečnému obratu a marži.",
  measure: [
    "Konverzní kódy Heureky a Zboží.cz",
    "Vyhodnocení podílu nákladů na obratu (PNO)",
    "Výkon po kategoriích a produktech",
    "Porovnání srovnávačů s Google Shopping v GA4",
    "Hlídání chyb a výpadků feedu",
    "Pravidelné doporučení k sortimentu a cenám",
  ],
  related: [
    { label: "Google Ads", desc: "Shopping a Performance Max nad stejným feedem.", to: "/sluzby/google-ads" },
    { label: "Sklik & Seznam", desc: "Produktové kampaně a retargeting v síti Seznamu.", to: "/sluzby/sklik" },
    analytics,
  ],
  faq: [
    { q: "Který srovnávač je pro můj e-shop nejlepší?", a: "Záleží na sortimentu. Heureka a Zboží.cz jsou univerzální, Glami je zaměřené na módu. Obvykle začínáme tam, kde je v kategorii největší poptávka, a výkon pak porovnáváme." },
    { q: "Kolik stojí správa srovnávačů?", a: "Správa jednoho systému začíná od 5 000 Kč měsíčně, v kombinaci s dalšími kanály od 8 000 Kč. Náklady za prokliky platíte přímo srovnávačům." },
    { q: "Umíte upravit náš produktový feed?", a: "Ano. Feed upravujeme přes feed manager nebo ve spolupráci s vývojářem e-shopu, případně přímo, pokud máme k e-shopu přístup." },
    { q: "Proč jsou moje produkty na Heurece nespárované?", a: "Nejčastěji kvůli chybějícímu EAN, nepřesnému názvu nebo špatné kategorii. Po auditu feedu navrhneme konkrétní opravy." },
    { q: "Pomůže feed i pro Google Shopping?", a: "Ano. Kvalitní produktová data zlepšují výkon na srovnávačích i v Google Shopping a Performance Max." },
  ],
  ctaTitle: "Využívá váš e-shop srovnávače naplno?",
  ctaText: "Projdeme feed, nabídky a měření a ukážeme, kde e-shop zbytečně platí nebo ztrácí viditelnost.",
};
