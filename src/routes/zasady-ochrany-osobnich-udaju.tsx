import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/seo";

const URL = `${SITE}/zasady-ochrany-osobnich-udaju`;
const TITLE = "Zásady ochrany osobních údajů | Netmedio";
const DESCRIPTION =
  "Jak Netmedio zpracovává osobní údaje z kontaktního formuláře, AI asistenta a spolupráce s klienty.";

const contents = [
  { id: "spravce", label: "1. Kdo je správcem údajů" },
  { id: "zpracovani", label: "2. Jaké údaje zpracováváme a proč" },
  { id: "zpracovatele", label: "3. Komu údaje předáváme (zpracovatelé)" },
  { id: "prava", label: "4. Vaše práva" },
  { id: "zabezpeceni", label: "5. Zabezpečení" },
  { id: "zmeny", label: "6. Změny těchto zásad" },
];

export const Route = createFileRoute("/zasady-ochrany-osobnich-udaju")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: PrivacyPolicy,
});

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-3 pl-5 marker:text-primary">{children}</ul>;
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="section-padding pb-10 pt-10">
          <div className="mx-auto max-w-[760px]">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Zásady ochrany osobních údajů
            </h1>
            <p className="mt-6 text-sm font-medium text-primary">Účinné od [DATUM]</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Na ochraně vašich osobních údajů nám záleží. Na této stránce vysvětlujeme, jaké údaje
              zpracováváme, proč, jak dlouho a jaká máte práva.
            </p>
          </div>
        </header>

        <div className="section-padding pt-0">
          <div className="mx-auto max-w-[760px]">
            <nav aria-label="Obsah stránky" className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Obsah</h2>
              <ol className="mt-4 space-y-2.5 text-sm leading-6">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-muted-foreground transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="mt-14 space-y-14">
              <Section id="spravce" title="1. Kdo je správcem údajů">
                <p>
                  Správcem osobních údajů je [Ing. Tomáš Hurych], IČO [DOPLNIT], se sídlem [DOPLNIT
                  ADRESU] (dále „Netmedio“ nebo „my“).
                </p>
                <p>
                  Kontakt pro otázky ochrany osobních údajů:{" "}
                  <a href="mailto:tomas@netmedio.cz" className="text-foreground underline decoration-border underline-offset-4 hover:text-primary">
                    tomas@netmedio.cz
                  </a>
                  ,{" "}
                  <a href="tel:+420776691696" className="text-foreground underline decoration-border underline-offset-4 hover:text-primary">
                    +420 776 691 696
                  </a>
                  .
                </p>
              </Section>

              <Section id="zpracovani" title="2. Jaké údaje zpracováváme a proč">
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-foreground">2.1 Kontaktní formulář, e-mail a telefon</h3>
                  <List>
                    <li>Údaje: jméno, e-mail, telefon (nepovinný), obsah zprávy.</li>
                    <li>Účel: vyřízení vaší poptávky a komunikace o možné spolupráci.</li>
                    <li>Právní základ: jednání o smlouvě na vaši žádost (čl. 6 odst. 1 písm. b) GDPR).</li>
                    <li>
                      Doba uchování: 12 měsíců od posledního kontaktu, pokud nedojde ke spolupráci.
                      [OVĚŘIT]
                    </li>
                  </List>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground">2.2 AI asistent (chatbot) na webu</h3>
                  <p className="mt-4">
                    Na webu můžete využít AI asistenta, který odpovídá na otázky o našich službách na
                    základě veřejného obsahu tohoto webu.
                  </p>
                  <div className="mt-4">
                    <List>
                      <li>
                        Obsah konverzace: vaše zprávy jsou odeslány k vygenerování odpovědi poskytovateli
                        AI služby OpenAI. Celé konverzace neukládáme. Ukládáme pouze technické údaje bez
                        obsahu konverzace (např. počet zpracovaných tokenů) pro kontrolu nákladů a provozu.
                      </li>
                      <li>
                        Poptávka přes AI asistenta: pokud se rozhodnete odeslat nezávaznou poptávku,
                        zpracujeme jméno nebo název firmy, web firmy, požadovanou službu, popis požadavku a
                        e-mail. Poptávka je odeslána až po vašem potvrzení souhrnu.
                      </li>
                      <li>
                        Právní základ: jednání o smlouvě na vaši žádost (čl. 6 odst. 1 písm. b) GDPR); u
                        provozu a zabezpečení asistenta náš oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR).
                      </li>
                      <li>Doba uchování poptávek: 12 měsíců, poté jsou automaticky smazány. [OVĚŘIT]</li>
                      <li>
                        Do AI asistenta prosím nezadávejte citlivé údaje (např. o zdraví) ani údaje jiných
                        osob.
                      </li>
                      <li>
                        AI asistent nečiní žádná automatizovaná rozhodnutí s právními účinky. Odpovědi
                        generuje umělá inteligence a mohou být nepřesné; závazné informace vám vždy potvrdí
                        náš specialista.
                      </li>
                    </List>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground">2.3 Spolupráce s klienty</h3>
                  <div className="mt-4">
                    <List>
                      <li>Údaje: identifikační a kontaktní údaje, fakturační údaje, komunikace.</li>
                      <li>Účel: plnění smlouvy, fakturace, plnění zákonných povinností.</li>
                      <li>
                        Právní základ: plnění smlouvy a právní povinnost (čl. 6 odst. 1 písm. b) a c) GDPR).
                      </li>
                      <li>
                        Doba uchování: po dobu spolupráce a dále po dobu stanovenou právními předpisy (např.
                        účetní a daňové doklady).
                      </li>
                    </List>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground">2.4 Cookies a analytika</h3>
                  <p className="mt-4">
                    [DOPLNIT podle skutečně používaných nástrojů, např. Google Analytics 4, Google Ads,
                    Sklik, Meta Pixel.]
                  </p>
                  <p>
                    Web používá Google Tag Manager od společnosti Google pro správu měřicích a marketingových
                    značek a odesílání událostí, například odeslání formuláře nebo kliknutí na telefon či
                    e-mail. Podle nastavení jednotlivých značek může dojít ke zpracování technických údajů o
                    zařízení a prohlížeči a k použití cookies; údaje z těchto značek přijímají příslušní
                    poskytovatelé měřicích a reklamních služeb.
                  </p>
                  <p>
                    K měření návštěvnosti používáme také analytiku Lovable. Nepoužívá cookies, nic neukládá
                    do vašeho zařízení, neuchovává IP adresy a neidentifikuje návštěvníky. Tyto údaje pro nás
                    shromažďuje Lovable.{" "}
                    <a href="https://lovable.dev/privacy" target="_blank" rel="noreferrer" className="text-foreground underline decoration-border underline-offset-4 hover:text-primary">
                      Zásady ochrany osobních údajů Lovable
                    </a>{" "}
                    vysvětlují, jak s nimi nakládá.
                  </p>
                  <p>
                    Lovable zaznamenává navštívené stránky, odkud návštěvníci přišli, jejich zemi, prohlížeč,
                    operační systém a typ zařízení, jak dlouho zůstávají na webu, jak rychle se stránky
                    načítají, chyby a kliknutí na tlačítka a odkazy. Podrobné údaje uchovává 90 dní a denní
                    souhrny jeden rok.
                  </p>
                  <p>
                    Kliknutí na tlačítka a odkazy se zaznamenávají při každé návštěvě. Návštěvy stránek, doba
                    na stránce, rychlost načítání a chyby se zaznamenávají u každého návštěvníka, bez cookies
                    a bez identifikace konkrétní osoby.
                  </p>
                  <p>
                    Analytické a marketingové cookies používáme pouze s vaším souhlasem, který můžete kdykoli
                    změnit v [nastavení cookies]. Nezbytné technické cookies a podobné technologie používáme na
                    základě oprávněného zájmu pro správné fungování webu.
                  </p>
                  <p>
                    Ochrana proti robotům (Cloudflare Turnstile) zpracovává technické údaje o zařízení a
                    prohlížeči výhradně za účelem zabezpečení.
                  </p>
                </div>
              </Section>

              <Section id="zpracovatele" title="3. Komu údaje předáváme (zpracovatelé)">
                <p>
                  Údaje předáváme pouze prověřeným poskytovatelům, kteří je zpracovávají podle našich pokynů:
                </p>
                <List>
                  <li>OpenAI – generování odpovědí AI asistenta [OVĚŘIT: OpenAI Ireland Ltd. / OpenAI, L.L.C.]</li>
                  <li>Cloudflare, Inc. – hosting, zabezpečení a ochrana proti robotům</li>
                  <li>Resend – doručování e-mailů s poptávkami</li>
                  <li>Formspree – přijímání a doručování poptávek z kontaktního formuláře</li>
                  <li>Google – provoz Google Tag Manageru a podle nastavení měřicích a reklamních značek</li>
                  <li>Lovable – měření návštěvnosti webu</li>
                  <li>[DOPLNIT: poskytovatel e-mailu, hostingu webu, analytických nástrojů, účetní apod.]</li>
                </List>
                <p>
                  Někteří poskytovatelé mohou zpracovávat údaje mimo EU (zejména v USA). V takovém případě je
                  předání zajištěno rozhodnutím Evropské komise o odpovídající ochraně (EU-US Data Privacy
                  Framework) nebo standardními smluvními doložkami. [OVĚŘIT u každého poskytovatele]
                </p>
                <p>Údaje neprodáváme a nepředáváme třetím stranám pro jejich marketing.</p>
              </Section>

              <Section id="prava" title="4. Vaše práva">
                <p>Máte právo:</p>
                <List>
                  <li>na přístup ke svým údajům a jejich kopii,</li>
                  <li>na opravu nepřesných údajů,</li>
                  <li>na výmaz („právo být zapomenut“),</li>
                  <li>na omezení zpracování,</li>
                  <li>na přenositelnost údajů,</li>
                  <li>vznést námitku proti zpracování na základě oprávněného zájmu,</li>
                  <li>kdykoli odvolat udělený souhlas (nemá vliv na zpracování před odvoláním).</li>
                </List>
                <p>
                  Své požadavky posílejte na{" "}
                  <a href="mailto:tomas@netmedio.cz" className="text-foreground underline decoration-border underline-offset-4 hover:text-primary">
                    tomas@netmedio.cz
                  </a>
                  . Odpovíme bez zbytečného odkladu, nejpozději do 1 měsíce.
                </p>
                <p>
                  Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00
                  Praha 7,{" "}
                  <a href="https://www.uoou.cz" target="_blank" rel="noreferrer" className="text-foreground underline decoration-border underline-offset-4 hover:text-primary">
                    www.uoou.cz
                  </a>
                  .
                </p>
              </Section>

              <Section id="zabezpeceni" title="5. Zabezpečení">
                <p>
                  Údaje chráníme technickými a organizačními opatřeními, mimo jiné šifrovaným přenosem (HTTPS),
                  omezeným přístupem k datům a automatickým mazáním po uplynutí doby uchování.
                </p>
              </Section>

              <Section id="zmeny" title="6. Změny těchto zásad">
                <p>
                  Zásady můžeme aktualizovat, například při změně používaných služeb. Aktuální verze je vždy
                  zveřejněna na této stránce.
                </p>
              </Section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
