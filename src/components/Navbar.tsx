import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Služby", href: "#sluzby" },
    { label: "Audit zdarma", href: "#audit" },
    { label: "O nás", href: "#o-nas" },
    { label: "Reference", href: "#reference" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="text-2xl font-bold tracking-tight text-secondary">
          net<span className="text-primary">medio</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
          <a href="mailto:tomas@netmedio.cz" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> tomas@netmedio.cz
          </a>
          <a href="tel:+420776691696" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +420 776 691 696
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border space-y-2 text-sm text-muted-foreground">
            <a href="mailto:tomas@netmedio.cz" className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> tomas@netmedio.cz
            </a>
            <a href="tel:+420776691696" className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> +420 776 691 696
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
