import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OG_IMAGE, imageMeta } from "@/lib/seo";

const SITE = "https://www.netmedio.cz";
const URL = `${SITE}/navody/jak-nasdilet-meta-business-manager`;
const TITLE = "Jak nasdílet přístup do Meta Business Manageru";
const DESC =
  "Návod, jak bezpečně nasdílet přístup do Meta Business Manageru / Business Portfolia přes Partner ID. Netmedio jako partner — bez sdílení hesla.";
const PARTNER_ID = "294006347961482";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Netmedio", item: SITE },
    { "@type": "ListItem", position: 2, name: "Návody", item: `${SITE}/navody` },
    { "@type": "ListItem", position: 3, name: "Meta", item: `${SITE}/navody` },
    { "@type": "ListItem", position: 4, name: TITLE, item: URL },
  ],
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: TITLE,
  description: DESC,
  totalTime: "PT3M",
  step: [
    {
      "@type": "HowToStep",
      name: "Otevřete nastavení firmy",
      text: "Přihlaste se do Meta Business Suite a vyberte Business Portfolio firmy, které chcete zpřístupnit. Otevřete Nastavení.",
    },
    {
      "@type": "HowToStep",
      name: "Přidejte nového partnera",
      text: "V nastavení Business Portfolia přejděte do Uživatelé → Partneři, klikněte na Přidat a zvolte Poskytnout partnerovi přístup k vašim prostředkům.",
    },
    {
      "@type": "HowToStep",
      name: "Zadejte Partner ID Netmedio",
      text: `Meta požádá o Business ID partnera. Zadejte ${PARTNER_ID} a pokračujte kliknutím na Další.`,
    },
    {
      "@type": "HowToStep",
      name: "Vyberte prostředky, které chcete nasdílet",
      text: "Vyberte Facebook stránku, reklamní účet, Instagram účet, Dataset / Meta Pixel a případně produktový katalog. Povolte potřebná oprávnění.",
    },
    {
      "@type": "HowToStep",
      name: "Nastavte potřebná oprávnění",
      text: "U jednotlivých prostředků nastavte oprávnění pro správu reklamních kampaní, práci s účtem, stránkou, Instagramem, měřením a katalogem. Vlastnictví zůstává vám.",
    },
    {
      "@type": "HowToStep",
      name: "Dokončete nasdílení",
      text: "Klikněte na Přiřadit prostředky. Netmedio se zobrazí mezi partnery vašeho Business Portfolia.",
    },
  ],
};

export const Route = createFileRoute("/navody/jak-nasdilet-meta-business-manager")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Netmedio` },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      ...imageMeta(OG_IMAGE),
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
      { type: "application/ld+json", children: JSON.stringify(howToLd) },
    ],
  }),
  component: GuideMetaBusinessManager,
});

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Krok {n}</p>
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">{children}</div>
    </li>
  );
}

function PartnerIdBox() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PARTNER_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* schránka není dostupná */
    }
  };
  return (
    <div className="rounded-xl border border-primary/30 bg-[var(--surface)]/60 p-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground/90 mb-1">
          Partner ID Netmedio
        </p>
        <p className="text-base md:text-lg font-semibold text-foreground break-all">{PARTNER_ID}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-primary/40 transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        {copied ? "Zkopírováno" : "Kopírovat"}
      </button>
    </div>
  );
}

function GuideMetaBusinessManager() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="section-padding pt-10">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Drobečková navigace" className="text-xs text-muted-foreground mb-6">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Netmedio
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link to="/navody" className="hover:text-foreground transition-colors">
                    Návody
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>Meta</li>
                <li aria-hidden="true">›</li>
                <li className="text-foreground">{TITLE}</li>
              </ol>
            </nav>

            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Meta Business Manager — návod
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">{TITLE}</h1>
            <p className="text-lg text-muted-foreground">
              Pro správu reklam na Facebooku a Instagramu nám nemusíte sdílet heslo ani přidávat
              osobní Facebook profil. Stačí přidat Netmedio jako partnera a nasdílet potřebné
              firemní prostředky.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 space-y-3">
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>
                  <strong className="text-foreground">Doba nastavení:</strong> přibližně 3 minuty
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Budete potřebovat:</strong> plný přístup ke svému
                Meta Business Portfoliu
              </p>
              <PartnerIdBox />
              <p className="text-sm text-primary">
                <strong>Upozornění:</strong> Není potřeba nám posílat heslo k Facebooku ani jiné
                přihlašovací údaje.
              </p>
            </div>
          </div>
        </header>

        <section className="section-padding pt-12">
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-4">
              <Step n={1} title="Otevřete nastavení firmy">
                <p>
                  Přihlaste se do Meta Business Suite a vyberte Business Portfolio firmy, které nám
                  chcete zpřístupnit.
                </p>
                <p>Následně otevřete:</p>
                <p>
                  <strong className="text-foreground">Nastavení</strong>
                </p>
                <p className="text-primary">
                  <strong>Upozornění:</strong> Pokud spravujete více firem, zkontrolujte, že máte
                  vybrané správné Business Portfolio.
                </p>
              </Step>

              <Step n={2} title="Přidejte nového partnera">
                <p>V nastavení Business Portfolia přejděte do:</p>
                <p>
                  <strong className="text-foreground">Uživatelé</strong> →{" "}
                  <strong className="text-foreground">Partneři</strong>
                </p>
                <p>
                  Klikněte na <strong className="text-foreground">„Přidat“</strong> a zvolte možnost:
                </p>
                <p>
                  <strong className="text-foreground">
                    „Poskytnout partnerovi přístup k vašim prostředkům“
                  </strong>
                </p>
              </Step>

              <Step n={3} title="Zadejte Partner ID Netmedio">
                <p>Meta vás požádá o Business ID partnera.</p>
                <p>Zadejte:</p>
                <PartnerIdBox />
                <p>
                  Poté klikněte na <strong className="text-foreground">„Další“</strong>.
                </p>
              </Step>

              <Step n={4} title="Vyberte prostředky, které nám chcete nasdílet">
                <p>
                  V dalším kroku vyberte jednotlivé firemní prostředky (assety), které potřebujeme
                  pro správu vašich reklam.
                </p>
                <p>Pro běžnou správu Meta Ads nám nasdílejte zejména:</p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-[var(--surface)]/40 p-4">
                    <p className="font-semibold text-foreground mb-1">Facebook stránka</p>
                    <p className="text-muted-foreground">
                      Vyberte Facebook stránku vaší firmy. Povolte oprávnění potřebná pro správu
                      reklam a práci se stránkou v rámci reklamních kampaní.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-[var(--surface)]/40 p-4">
                    <p className="font-semibold text-foreground mb-1">Reklamní účet</p>
                    <p className="text-muted-foreground">
                      Vyberte reklamní účet, který budeme spravovat. Povolte oprávnění potřebná pro
                      vytváření, správu a optimalizaci reklamních kampaní.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-[var(--surface)]/40 p-4">
                    <p className="font-semibold text-foreground mb-1">Instagram účet</p>
                    <p className="text-muted-foreground">
                      Pokud používáte Instagram, vyberte také firemní Instagram účet. Povolte
                      oprávnění potřebná pro jeho využití v reklamních kampaních.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-[var(--surface)]/40 p-4">
                    <p className="font-semibold text-foreground mb-1">Dataset / Meta Pixel</p>
                    <p className="text-muted-foreground">
                      Pokud máte na webu nastavený Meta Pixel nebo Dataset, nasdílejte také příslušný
                      Dataset. Povolte oprávnění potřebná pro práci s měřením a reklamními
                      kampaněmi.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-[var(--surface)]/40 p-4">
                    <p className="font-semibold text-foreground mb-1">Katalog</p>
                    <p className="text-muted-foreground">
                      Pokud provozujete e-shop a používáte produktový katalog v Meta, nasdílejte
                      také příslušný katalog. Tento krok není nutný u firem, které produktový katalog
                      nepoužívají.
                    </p>
                  </div>
                </div>
              </Step>

              <Step n={5} title="Nastavte potřebná oprávnění">
                <p>U jednotlivých prostředků nastavte oprávnění potřebná pro jejich správu.</p>
                <p>Pro správu reklam potřebujeme zejména možnost:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>vytvářet a spravovat reklamní kampaně</li>
                  <li>pracovat s reklamním účtem</li>
                  <li>používat Facebook stránku pro reklamy</li>
                  <li>používat Instagram účet pro reklamy</li>
                  <li>pracovat s Datasetem / Meta Pixelem a měřením</li>
                  <li>u e-shopů pracovat s produktovým katalogem</li>
                </ul>
                <p className="text-primary">
                  <strong>Není nutné nám předávat vlastnictví prostředků.</strong> Netmedio bude
                  přidané pouze jako partner a vaše firma zůstává vlastníkem všech účtů a
                  prostředků.
                </p>
              </Step>

              <Step n={6} title="Dokončete nasdílení">
                <p>
                  Po výběru všech potřebných prostředků a oprávnění klikněte na:
                </p>
                <p>
                  <strong className="text-foreground">„Přiřadit prostředky“</strong>
                </p>
                <p>
                  Po dokončení se Netmedio zobrazí mezi partnery vašeho Business Portfolia.
                </p>
              </Step>
            </ol>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold mb-3">Hotovo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Přístup je tímto nastaven.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Netmedio nyní může prostřednictvím svého Business Portfolia pracovat pouze s
                prostředky a oprávněními, které jste nám nasdíleli.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Vaše firma zůstává vlastníkem Facebook stránky, Instagram účtu, reklamního účtu,
                Datasetu i dalších prostředků.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Přístup partnera můžete později kdykoliv upravit nebo odebrat v:{" "}
                <strong className="text-foreground">Nastavení → Uživatelé → Partneři</strong>.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-primary/20 bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Co nám obvykle nasdílet?</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>Facebook stránku</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>reklamní účet</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>Instagram účet</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>Dataset / Meta Pixel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>produktový katalog – pouze pokud jej používáte</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-primary">
                Nemusíte nám sdílet své osobní Facebook přihlašovací údaje.
              </p>
            </div>

            <div className="mt-16 rounded-2xl border border-primary/30 bg-card p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Nedaří se vám přístup nastavit?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ozvěte se nám a s nastavením vám pomůžeme.
              </p>
              <Link
                to="/"
                hash="kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Napsat nám <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-10">
              <Link
                to="/navody"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Všechny návody
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
