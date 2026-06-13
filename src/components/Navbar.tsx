import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@/hooks/use-theme";
import SectionLink from "@/components/SectionLink";

const links = [
  { label: "Služby", section: "sluzby" },
  { label: "Proč Netmedio", section: "proc-nas" },
  { label: "O nás", section: "o-nas" },
  { label: "Případové studie", section: "case-studies" },
  { label: "Blog", section: "blog" },
  { label: "FAQ", section: "faq" },
  { label: "Kontakt", section: "kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

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
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          NETMEDIO<span className="text-primary">.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <SectionLink
              key={l.section}
              section={l.section}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </SectionLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Přepnout téma"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <SectionLink
            section="kontakt"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Konzultace
          </SectionLink>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map((l) => (
            <SectionLink
              key={l.section}
              section={l.section}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </SectionLink>
          ))}
          <SectionLink
            section="kontakt"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Nezávazná konzultace
          </SectionLink>
        </div>
      )}
    </nav>
  );
}
