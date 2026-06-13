import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ReferencesSection from "@/components/ReferencesSection";
import BlogSection from "@/components/BlogSection";
import FAQSection, { faqs } from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SITE = "https://netmedio.lovable.app";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Netmedio",
  url: SITE,
  logo: `${SITE}/favicon.ico`,
  description:
    "Netmedio je digitální agentura zaměřená na výkonnostní marketing, tvorbu webů, marketingovou automatizaci a analytiku. Působíme od roku 2010.",
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "Ing. Tomáš Hurych",
    jobTitle: "Founder & Digital Marketing Consultant",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "tomas@netmedio.cz",
    telephone: "+420776691696",
    areaServed: ["CZ", "EU"],
    availableLanguage: ["cs", "en"],
  },
  sameAs: [],
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Netmedio",
  url: SITE,
  email: "tomas@netmedio.cz",
  telephone: "+420776691696",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CZ",
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ing. Tomáš Hurych",
  jobTitle: "Digital Marketing Consultant, Google Ads specialist",
  worksFor: { "@type": "Organization", name: "Netmedio" },
  url: SITE,
};

const services = [
  "Výkonnostní marketing (Google Ads, Sklik, Meta Ads)",
  "Tvorba webů (WordPress, Loveable, Cloudflare)",
  "Marketingová automatizace a AI workflow",
  "Analytika a měření (GA4, GTM, server-side tracking)",
];

const serviceLd = services.map((name) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  provider: { "@type": "Organization", name: "Netmedio" },
  areaServed: ["CZ", "EU"],
}));

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
  ],
};

const allLd = [organizationLd, localBusinessLd, personLd, ...serviceLd, faqLd, breadcrumbLd];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Netmedio – Digitální agentura | PPC, Weby, Automatizace od 2010" },
      {
        name: "description",
        content:
          "Netmedio je digitální growth partner od roku 2010. Výkonnostní marketing, tvorba webů, marketingová automatizace a analytika. Vede Ing. Tomáš Hurych.",
      },
      { property: "og:title", content: "Netmedio – Digitální agentura od roku 2010" },
      {
        property: "og:description",
        content:
          "Výkonnostní marketing, weby, automatizace a měření v jednom systému. Google Partner. 15+ let zkušeností.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { property: "og:site_name", content: "Netmedio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Netmedio – Digitální agentura od roku 2010" },
      {
        name: "twitter:description",
        content:
          "Výkonnostní marketing, weby, automatizace a měření. Google Partner. Vede Ing. Tomáš Hurych.",
      },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: allLd.map((ld) => ({
      type: "application/ld+json",
      children: JSON.stringify(ld),
    })),
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <AboutSection />
        <CaseStudiesSection />
        <ReferencesSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
