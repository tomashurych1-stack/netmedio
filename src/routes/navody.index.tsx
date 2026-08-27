import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OG_IMAGE, imageMeta } from "@/lib/seo";

const SITE = "https://www.netmedio.cz";
const URL = `${SITE}/navody`;
const TITLE = "Návody pro klienty | Netmedio";
const DESC =
  "Jednoduché postupy pro nastavení přístupů do Google Ads a Google Analytics 4. Bez sdílení hesel, krok za krokem.";

export const guideCategories = [
  {
    name: "Google Ads",
    guides: [
      {
        title: "Jak zadat platební metodu v Google Ads a dokončit ověření inzerenta",
        description:
          "Přidání platební metody, nastavení primární platby a dobrovolné ověření inzerenta.",
        to: "/navody-zadani-platebni-metody-google-ads-a-overeni-inzerenta",
      },
      {
        title: "Jak nasdílet přístup do Google Ads",
        description:
          "Pošlete nám ID svého Google Ads účtu a následně potvrďte žádost o propojení s naším správcovským účtem.",
        to: "/navody/jak-nasdilet-pristup-google-ads",
      },
    ],
  },
  {
    name: "Google Analytics",
    guides: [
      {
        title: "Jak přidat přístup do Google Analytics 4",
        description:
          "Udělení přístupu ke službě GA4 na úrovni property, doporučená role Editor.",
        to: "/navody/jak-pridat-pristup-google-analytics-4",
      },
    ],
  },
] as const;

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Netmedio", item: SITE },
    { "@type": "ListItem", position: 2, name: "Návody", item: URL },
  ],
};

export const Route = createFileRoute("/navody/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: "Návody pro klienty" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      ...imageMeta(OG_IMAGE),
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbLd) }],
  }),
  component: NavodyIndex,
});

function NavodyIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="section-padding pt-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Znalostní báze</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Návody pro klienty
            </h1>
            <p className="text-lg text-muted-foreground">
              Jednoduché postupy pro nastavení přístupů, reklamních účtů a analytických nástrojů.
              Bez sdílení hesel.
            </p>
          </div>
        </header>

        <section className="section-padding pt-12">
          <div className="max-w-3xl mx-auto space-y-14">
            {guideCategories.map((cat) => (
              <div key={cat.name}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  {cat.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.guides.map((g) => (
                    <Link
                      key={g.to}
                      to={g.to}
                      className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
                    >
                      <h3 className="text-lg font-semibold leading-snug mb-2 flex items-start gap-2">
                        <span>{g.title}</span>
                        <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{g.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
