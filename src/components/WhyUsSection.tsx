import { Clock, Handshake, MessageSquare, Target, Award, Infinity as InfinityIcon } from "lucide-react";

const points = [
  { icon: Clock, title: "15+ let zkušeností", desc: "Marketingu se věnujeme od roku 2010, ne od včerejška." },
  { icon: Handshake, title: "Osobní přístup", desc: "Jeden konzultant, jeden tým — žádné předávání mezi juniory." },
  { icon: MessageSquare, title: "Transparentní komunikace", desc: "Víte přesně, kam jdou peníze a co která aktivita přinesla." },
  { icon: Target, title: "Zaměření na výsledky", desc: "Měříme dopad na obrat, ne počet zobrazení." },
  { icon: Award, title: "Google Partner", desc: "Certifikace v Google Ads a Analytics 4." },
  { icon: InfinityIcon, title: "Dlouhodobá spolupráce", desc: "Klienti s námi rostou roky — ne kampaň, ale partnerství." },
];

export default function WhyUsSection() {
  return (
    <section id="proc-nas" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Proč Netmedio</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Senior tým. Žádné výmluvy.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {points.map((p) => (
            <div key={p.title} className="bg-background p-8 hover:bg-card transition-colors">
              <p.icon className="w-5 h-5 text-primary mb-5" />
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
