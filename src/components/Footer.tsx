import SectionLink from "@/components/SectionLink";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">
            NETMEDIO<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Digital growth partner od roku 2010. © {new Date().getFullYear()} Netmedio.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Netmedio založil Ing. Tomáš Hurych v roce 2010.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <SectionLink section="sluzby" className="hover:text-foreground transition-colors">Služby</SectionLink>
          <SectionLink section="case-studies" className="hover:text-foreground transition-colors">Případové studie</SectionLink>
          <SectionLink section="faq" className="hover:text-foreground transition-colors">FAQ</SectionLink>
          <SectionLink section="kontakt" className="hover:text-foreground transition-colors">Kontakt</SectionLink>
        </div>
      </div>
    </footer>
  );
}
