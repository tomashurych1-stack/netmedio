import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.netmedio.cz";
const URL = `${SITE}/navody-zadani-platebni-metody-google-ads-a-overeni-inzerenta`;
const TITLE = "Google Ads návody: platební metody a ověření inzerenta";
const DESC =
  "Podrobný návod, jak přidat platební metodu do Google Ads, nastavit ji jako primární a jak projít dobrovolným ověřením inzerenta.";

export const Route = createFileRoute(
  "/navody-zadani-platebni-metody-google-ads-a-overeni-inzerenta",
)({
  head: () => ({
    meta: [
      { title: `${TITLE} | Netmedio` },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Jak přidat platební metodu do Google Ads",
          description: DESC,
          step: [
            { "@type": "HowToStep", name: "Přihlaste se do Google Ads účtu" },
            { "@type": "HowToStep", name: "Přejděte do Nastavení fakturace" },
            { "@type": "HowToStep", name: "Přidejte novou platební metodu" },
            { "@type": "HowToStep", name: "Vyplňte požadované údaje" },
            { "@type": "HowToStep", name: "Nastavte platební metodu jako primární" },
            { "@type": "HowToStep", name: "Potvrďte změny" },
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

function Step({ n, title, children }: { n: number; title: string; children?: React.ReactNode }) {
  return (
    <li className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Krok {n}</p>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children && <div className="text-sm text-muted-foreground space-y-2">{children}</div>}
    </li>
  );
}

function GuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="section-padding pt-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Google Ads — návody</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Zadání platební metody v Google Ads a ověření inzerenta
            </h1>
            <p className="text-lg text-muted-foreground">
              Google Ads umožňuje snadnou správu platebních metod a nabízí dobrovolné ověření
              inzerenta, které zvyšuje důvěryhodnost účtu. Tento návod vás provede přidáním nové
              platební metody, jejím nastavením jako primární a postupem ověření inzerenta.
            </p>
          </div>
        </header>

        <section className="section-padding pt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Jak přidat novou platební metodu do Google Ads
            </h2>
            <ol className="space-y-3">
              <Step n={1} title="Přihlaste se do svého Google Ads účtu">
                <p>Otevřete ads.google.com a přihlaste se pomocí svého Google účtu.</p>
              </Step>
              <Step n={2} title="Přejděte do sekce „Nastavení fakturace“">
                <p>
                  Klikněte na ikonu nástrojů a nastavení v pravém horním rohu a v části Fakturace
                  zvolte Nastavení fakturace.
                </p>
              </Step>
              <Step n={3} title="Přidejte novou platební metodu">
                <p>
                  Na stránce Nastavení fakturace zvolte Platební metody → Přidat platební metodu a
                  vyberte typ (kreditní karta, debetní karta, bankovní převod).
                </p>
              </Step>
              <Step n={4} title="Vyplňte požadované údaje">
                <p>
                  Zadejte číslo karty, datum expirace, CVV kód a fakturační adresu, poté klikněte na
                  Uložit.
                </p>
              </Step>
              <Step n={5} title="Nastavte platební metodu jako primární">
                <p>
                  V sekci Platební metody klikněte vedle nové metody na Nastavit jako primární.
                  Google Ads ji pak bude používat automaticky pro budoucí platby.
                </p>
              </Step>
              <Step n={6} title="Potvrďte změny">
                <p>Zkontrolujte správnost údajů a vyčkejte na potvrzovací zprávu od Google.</p>
              </Step>
            </ol>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-16 mb-4">
              Dobrovolné ověření inzerenta v Google Ads
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dobrovolné ověření inzerenta zvyšuje transparentnost kampaní. Google si ověří
                totožnost firmy nebo osoby stojící za reklamním účtem a u reklam se pak zobrazuje
                informace o inzerentovi. Ověřený účet působí důvěryhodněji a snižuje riziko
                omezení v citlivých oborech.
              </p>
              <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                <li>Ověření spustíte v sekci Nastavení → Ověření inzerenta.</li>
                <li>
                  Připravte si výpis z obchodního rejstříku nebo živnostenský list a doklad
                  totožnosti odpovědné osoby.
                </li>
                <li>Údaje musí odpovídat fakturačním údajům na účtu, jinak ověření neprojde.</li>
                <li>Zpracování obvykle trvá několik pracovních dní.</li>
              </ul>
            </div>

            <div className="mt-16 rounded-2xl border border-primary/30 bg-card p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Potřebujete pomoct s účtem Google Ads?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Provedeme audit účtu i nastavení fakturace a kampaní. První konzultace je nezávazná.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/"
                  hash="kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Nezávazná konzultace <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/sluzby/$slug"
                  params={{ slug: "vykonnostni-reklama" }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
                >
                  Výkonnostní reklama
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
