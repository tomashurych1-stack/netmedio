import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OG_IMAGE, imageMeta } from "@/lib/seo";

const SITE = "https://www.netmedio.cz";
const URL = `${SITE}/navody/jak-nasdilet-pristup-google-merchant-center`;
const TITLE = "Jak nasdílet přístup do Google Merchant Center";
const DESC =
  "Návod krok za krokem, jak nasdílet přístup do Google Merchant Center bez sdílení hesla. Stačí přidat náš Google účet jako uživatele s administrátorským přístupem.";
const EMAIL = "tomas@netmedio.cz";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Netmedio", item: SITE },
    { "@type": "ListItem", position: 2, name: "Návody", item: `${SITE}/navody` },
    { "@type": "ListItem", position: 3, name: "Google Merchant Center", item: `${SITE}/navody` },
    { "@type": "ListItem", position: 4, name: TITLE, item: URL },
  ],
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: TITLE,
  description: DESC,
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      name: "Přihlaste se do Google Merchant Center",
      text: "Přihlaste se do svého Google Merchant Center účtu a zkontrolujte, že máte otevřený správný účet, který chcete nasdílet.",
    },
    {
      "@type": "HowToStep",
      name: "Otevřete Přístup a služby",
      text: "V Google Merchant Center otevřete Nastavení → Přístup a služby a následně záložku Lidé a přístup.",
    },
    {
      "@type": "HowToStep",
      name: "Přidejte novou osobu",
      text: `V části Lidé klikněte na Přidat osobu a do pole pro e-mailovou adresu zadejte ${EMAIL}.`,
    },
    {
      "@type": "HowToStep",
      name: "Nastavte administrátorský přístup",
      text: "Jako typ přístupu vyberte Administrátor. Tento přístup nám umožní kompletní správu Merchant Center potřebnou v rámci spolupráce. Není potřeba nastavovat roli Superadministrátor.",
    },
    {
      "@type": "HowToStep",
      name: "Dokončete přidání",
      text: `Klikněte na Přidat uživatele. Na adresu ${EMAIL} přijde pozvánka, po jejímž přijetí bude přístup aktivní.`,
    },
  ],
};

export const Route = createFileRoute("/navody/jak-nasdilet-pristup-google-merchant-center")({
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
  component: GuideMerchantCenter,
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

function EmailBox() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
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
          Účet, který přidáte
        </p>
        <p className="text-base md:text-lg font-semibold text-foreground break-all">{EMAIL}</p>
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

function GuideMerchantCenter() {
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
                <li>Google Merchant Center</li>
                <li aria-hidden="true">›</li>
                <li className="text-foreground">{TITLE}</li>
              </ol>
            </nav>

            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Google Merchant Center — návod
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">{TITLE}</h1>
            <p className="text-lg text-muted-foreground">
              Pro správu produktů a nastavení Google Merchant Center není potřeba sdílet heslo. Stačí
              přidat náš Google účet jako dalšího uživatele.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 space-y-3">
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>
                  <strong className="text-foreground">Doba nastavení:</strong> přibližně 2 minuty
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Budete potřebovat:</strong> administrátorský
                přístup do Google Merchant Center
              </p>
              <EmailBox />
              <p className="text-sm text-primary">
                <strong>Upozornění:</strong> Není potřeba nám posílat heslo ani jiné přihlašovací
                údaje.
              </p>
            </div>
          </div>
        </header>

        <section className="section-padding pt-12">
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-4">
              <Step n={1} title="Přihlaste se do Google Merchant Center">
                <p>
                  Přihlaste se do svého Google Merchant Center účtu a zkontrolujte, že máte otevřený
                  správný účet, který chcete nasdílet.
                </p>
              </Step>

              <Step n={2} title="Otevřete Přístup a služby">
                <p>V Google Merchant Center otevřete:</p>
                <p>
                  <strong className="text-foreground">Nastavení</strong> →{" "}
                  <strong className="text-foreground">Přístup a služby</strong>
                </p>
                <p>
                  Následně otevřete záložku{" "}
                  <strong className="text-foreground">„Lidé a přístup“</strong>.
                </p>
              </Step>

              <Step n={3} title="Přidejte novou osobu">
                <p>
                  V části <strong className="text-foreground">„Lidé“</strong> klikněte na{" "}
                  <strong className="text-foreground">„Přidat osobu“</strong>.
                </p>
                <p>Do pole pro e-mailovou adresu zadejte:</p>
                <EmailBox />
              </Step>

              <Step n={4} title="Nastavte administrátorský přístup">
                <p>
                  V dalším kroku nastavte typ přístupu:{' '}
                  <strong className="text-foreground">Administrátor</strong>.
                </p>
                <p>
                  Administrátorský přístup nám umožní kompletní správu Merchant Center potřebnou v
                  rámci spolupráce, včetně nastavení účtu a propojených služeb.
                </p>
                <p className="text-primary">
                  <strong>Není potřeba nastavovat roli Superadministrátor.</strong>
                </p>
              </Step>

              <Step n={5} title="Dokončete přidání">
                <p>
                  Klikněte na <strong className="text-foreground">„Přidat uživatele“</strong>.
                </p>
                <p>
                  Na adresu <strong className="text-foreground">{EMAIL}</strong> následně přijde
                  pozvánka do vašeho Google Merchant Center. Po jejím přijetí bude přístup aktivní.
                </p>
              </Step>
            </ol>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold mb-3">Hotovo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Přístup do Google Merchant Center je tímto nastaven.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Každý uživatel se přihlašuje vlastním Google účtem, takže nám nemusíte posílat své
                heslo ani jiné přihlašovací údaje.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Přístup můžete později kdykoliv upravit nebo odebrat přímo v sekci „Lidé a přístup“.
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
