export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-2xl font-bold tracking-tight">
            net<span className="text-primary">medio</span>
          </a>
          <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-foreground/60">
            <a href="#sluzby" className="hover:text-primary transition-colors">Služby</a>
            <a href="#o-nas" className="hover:text-primary transition-colors">O nás</a>
            <a href="#reference" className="hover:text-primary transition-colors">Reference</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} Netmedio Praha. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
