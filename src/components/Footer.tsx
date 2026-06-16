import SectionLink from "@/components/SectionLink";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-baseline gap-x-4 gap-y-1">
          <p className="text-base font-semibold leading-none">
            NETMEDIO<span className="text-primary">.</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Digital growth partner od roku 2010 — Tomáš Hurych. © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <SectionLink section="sluzby" className="hover:text-foreground transition-colors">Služby</SectionLink>
          <SectionLink section="case-studies" className="hover:text-foreground transition-colors">Případové studie</SectionLink>
          <SectionLink section="faq" className="hover:text-foreground transition-colors">FAQ</SectionLink>
          <SectionLink section="kontakt" className="hover:text-foreground transition-colors">Kontakt</SectionLink>
        </div>
      </div>
    </footer>
  );
}
