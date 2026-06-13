import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Služby", href: "#sluzby" },
  { label: "Proč Netmedio", href: "#proc-nas" },
  { label: "O nás", href: "#o-nas" },
  { label: "Případové studie", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          NETMEDIO<span className="text-primary">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Konzultace
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Nezávazná konzultace
          </a>
        </div>
      )}
    </nav>
  );
}
