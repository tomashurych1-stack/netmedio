import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AuditSection from "@/components/AuditSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Netmedio – Digitální marketing s námi | PPC, SEO, Weby" },
      {
        name: "description",
        content:
          "Specialisté na online marketing od roku 2010. PPC reklamy, SEO, webové stránky, sociální sítě a komplexní marketingová řešení na míru.",
      },
      { property: "og:title", content: "Netmedio – Digitální marketing s námi" },
      {
        property: "og:description",
        content: "PPC, SEO, webové stránky a komplexní online marketing. Zarezervujte si zdarma konzultaci.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AuditSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}
