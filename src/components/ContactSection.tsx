import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kontakt" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Kontakt</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Máte nějaké dotazy?
          </h2>
          <p className="text-muted-foreground mb-8">
            Za otázku přeci nic nedáte. Napište nám a ozveme se vám do 24 hodin.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">E-mail</p>
                <a href="mailto:tomas@netmedio.cz" className="font-semibold text-foreground hover:text-primary transition-colors">
                  tomas@netmedio.cz
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Telefon</p>
                <a href="tel:+420776691696" className="font-semibold text-foreground hover:text-primary transition-colors">
                  +420 776 691 696
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Lokalita</p>
                <p className="font-semibold text-foreground">Praha, Česká republika</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Jméno"
              className="rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="E-mailová adresa"
              className="rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Zpráva"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-10 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}
