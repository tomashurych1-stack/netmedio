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
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#sluzby" className="hover:text-foreground transition-colors">Služby</a>
          <a href="#case-studies" className="hover:text-foreground transition-colors">Případové studie</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
