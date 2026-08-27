import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OG_IMAGE, imageMeta } from "@/lib/seo";

const SITE = "https://www.netmedio.cz";
const URL = `${SITE}/navody/jak-nasdilet-pristup-google-ads`;
const TITLE = "Jak nasdílet přístup do Google Ads";
const DESC =
  "Návod krok za krokem, jak nasdílet přístup do Google Ads přes správcovský účet (MCC). Bez sdílení hesla — stačí 10místné ID účtu a potvrzení žádosti o propojení.";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Netmedio", item: SITE },
    { "@type": "ListItem", position: 2, name: "Návody", item: `${SITE}/navody` },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: `${SITE}/navody` },
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
      name: "Pošlete nám ID svého Google Ads účtu",
      text: "Přihlaste se do svého Google Ads účtu a v horní části rozhraní najděte 10místné ID zákazníka ve formátu například 123-456-7890. Toto číslo nám pošlete e-mailem.",
    },
    {
      "@type": "HowToStep",
      name: "Zašleme vám žádost o propojení",
      text: "Na základě ID vašeho Google Ads účtu vám zašleme žádost o propojení s naším správcovským účtem (MCC) Digitální marketing.",
    },
    {
      "@type": "HowToStep",
      name: "Otevřete Přístup a zabezpečení",
      text: "Ve svém Google Ads účtu přejděte do Administrátor → Přístup a zabezpečení a přepněte ze záložky Uživatelé na záložku Správci.",
    },
    {
      "@type": "HowToStep",
      name: "Potvrďte žádost",
      text: "V záložce Správci otevřete čekající žádost od správcovského účtu Digitální marketing a klikněte na Přijmout / Potvrdit.",
    },
    {
      "@type": "HowToStep",
      name: "Hotovo",
      text: "Po potvrzení získáme přístup ke správě vašeho Google Ads účtu prostřednictvím našeho správcovského účtu. Přihlašovací údaje zůstávají pouze vám.",
    },
  ],
};

export const Route = createFileRoute("/navody/jak-nasdilet-pristup-google-ads")({
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
  component: GuideGoogleAdsAccess,
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

function HighlightBox({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-primary/30 bg-[var(--surface)]/60 p-5">
      <p className="text-xs uppercase tracking-wider text-muted-foreground/90 mb-1">{label}</p>
      <p className="text-base md:text-lg font-semibold text-foreground break-all">{value}</p>
      {note ? <p className="mt-2 text-sm text-muted-foreground">{note}</p> : null}
    </div>
  );
}

function GuideGoogleAdsAccess() {
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
                <li>Google Ads</li>
                <li aria-hidden="true">›</li>
                <li className="text-foreground">{TITLE}</li>
              </ol>
            </nav>

            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Google Ads — návod
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">{TITLE}</h1>
            <p className="text-lg text-muted-foreground">
              Pro správu Google Ads není potřeba sdílet heslo ani přidávat dalšího uživatele. Účet
              propojíme s naším správcovským účtem Digitální marketing.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 space-y-3">
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>
                  <strong className="text-foreground">Doba nastavení:</strong> přibližně 2 minuty
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Budete potřebovat:</strong> přístup do svého
                Google Ads účtu
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Co nám pošlete:</strong> pouze 10místné ID
                Google Ads účtu
              </p>
              <p className="text-sm text-primary">
                <strong>Upozornění:</strong> Nikdy nám neposílejte heslo ani jiné přihlašovací
                údaje.
              </p>
            </div>
          </div>
        </header>

        <section className="section-padding pt-12">
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-4">
              <Step n={1} title="Pošlete nám ID svého Google Ads účtu">
                <p>Přihlaste se do svého Google Ads účtu.</p>
                <p>
                  V horní části rozhraní najdete{" "}
                  <strong className="text-foreground">10místné ID zákazníka Google Ads</strong> ve
                  formátu například:
                </p>
                <HighlightBox label="ID zákazníka Google Ads" value="123-456-7890" />
                <p>Toto číslo nám pošlete e-mailem.</p>
                <p className="text-primary">
                  <strong>Neposílejte nám své heslo ani jiné přihlašovací údaje.</strong>
                </p>
              </Step>

              <Step n={2} title="Zašleme vám žádost o propojení">
                <p>
                  Na základě ID vašeho Google Ads účtu vám zašleme žádost o propojení s naším
                  správcovským účtem (MCC):
                </p>
                <HighlightBox label="Náš správcovský účet (MCC)" value="Digitální marketing" />
                <p>
                  Po odeslání žádosti je potřeba propojení potvrdit přímo ve vašem Google Ads účtu.
                </p>
              </Step>

              <Step n={3} title="Otevřete Přístup a zabezpečení">
                <p>Ve svém Google Ads účtu přejděte do:</p>
                <p>
                  <strong className="text-foreground">Administrátor</strong> →{" "}
                  <strong className="text-foreground">Přístup a zabezpečení</strong>
                </p>
                <p>
                  V horní části stránky následně přepněte ze záložky{" "}
                  <strong className="text-foreground">Uživatelé</strong> na{" "}
                  <strong className="text-foreground">Správci</strong>.
                </p>
              </Step>

              <Step n={4} title="Potvrďte žádost">
                <p>
                  V záložce <strong className="text-foreground">„Správci“</strong> uvidíte čekající
                  žádost od našeho správcovského účtu:
                </p>
                <HighlightBox label="Čekající žádost od" value="Digitální marketing" />
                <p>
                  Žádost otevřete a klikněte na{" "}
                  <strong className="text-foreground">„Přijmout“ / „Potvrdit“</strong>.
                </p>
                <p>
                  Tím umožníte správu Google Ads účtu prostřednictvím našeho MCC.
                </p>
              </Step>

              <Step n={5} title="Hotovo">
                <p>
                  Po potvrzení získáme přístup ke správě vašeho Google Ads účtu prostřednictvím
                  našeho správcovského účtu.
                </p>
                <p>
                  Vaše přihlašovací údaje zůstávají pouze vám a vlastnictví Google Ads účtu se
                  nemění.
                </p>
              </Step>
            </ol>

            <p className="mt-10 text-muted-foreground leading-relaxed">
              Hotovo. Přístup do Google Ads je tímto nastaven a není potřeba nám posílat žádné
              přihlašovací údaje.
            </p>

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
