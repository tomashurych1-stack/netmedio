import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourid";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Kontakt</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Pojďme probrat
            <br />
            váš projekt.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Nezávazná 30minutová konzultace. Odpovídáme do 24 hodin.
          </p>

          <div className="mt-12 space-y-4">
            <a
              href="mailto:tomas@netmedio.cz"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              tomas@netmedio.cz
            </a>
            <a
              href="tel:+420776691696"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              +420 776 691 696
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              Česká republika
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground/90 font-medium">Jméno</label>
            <input
              required
              name="name"
              placeholder="Vaše jméno"
              className="mt-2 w-full bg-[var(--surface-2)]/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md outline-none px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground/90 font-medium">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="vas@email.cz"
              className="mt-2 w-full bg-[var(--surface-2)]/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md outline-none px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground/90 font-medium">Telefon</label>
            <input
              name="phone"
              placeholder="+420"
              className="mt-2 w-full bg-[var(--surface-2)]/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md outline-none px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground/90 font-medium">Zpráva</label>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Stručně napište, s čím vám můžeme pomoci…"
              className="mt-2 w-full bg-[var(--surface-2)]/60 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md outline-none px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {status === "ok" && (
            <p className="text-sm text-emerald-400">Děkujeme, ozveme se do 24 hodin.</p>
          )}
          {status === "err" && (
            <p className="text-sm text-destructive">
              Něco se pokazilo. Napište nám prosím přímo na tomas@netmedio.cz.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
