import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const SITE = "https://www.netmedio.cz";
const URL = `${SITE}/o-nas/`;
const TITLE = "O nás — Netmedio, marketingové a technologické studio";
const DESC =
  "Netmedio je marketingové a technologické studio zaměřené na růst firem. Výkonnostní reklama, weby, SEO, e-mailing, AI automatizace a analytika. Strategické vedení: Ing. Tomáš Hurych.";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
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
          "@type": "AboutPage",
          name: TITLE,
          description: DESC,
          url: URL,
          mainEntity: {
            "@type": "Organization",
            name: "Netmedio",
            url: SITE,
            founder: { "@type": "Person", name: "Ing. Tomáš Hurych" },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="section-padding pt-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">O nás</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Marketingové a technologické studio zaměřené na růst firem
            </h1>
            <p className="text-lg text-muted-foreground">
              Netmedio pomáhá malým a středním firmám růst od roku 2010. Spojujeme výkonnostní
              reklamu, tvorbu webů, SEO, e-mail marketing, AI automatizaci a poctivou analytiku do
              jednoho celku, který se dá měřit a řídit.
            </p>
          </div>
        </header>

        <AboutSection />
        <CertificationsSection />
        <TestimonialsSection />

        <section className="section-padding">
          <div className="max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pojďme se potkat</h2>
            <p className="text-muted-foreground mb-6">
              30 minut nezávazné konzultace. Projdeme vaši situaci a řekneme, co má smysl řešit
              první.
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
                to="/sluzby"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
              >
                Naše služby
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
