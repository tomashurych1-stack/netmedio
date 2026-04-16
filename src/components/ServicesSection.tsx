import { Target, ThumbsUp, Globe, Search, Mail, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "PPC reklamy",
    desc: "Získejte snadno a rychle bezkonkurenční pozice ve vyhledávání Google nebo Seznam.",
  },
  {
    icon: ThumbsUp,
    title: "Facebook / Instagram",
    desc: "Kvalitní cílení kampaní na sociálních sítích spolehlivě zvýší konverzní poměr a vaše zisky.",
  },
  {
    icon: Globe,
    title: "Webová prezentace",
    desc: "Připravíme webové stránky optimalizované k okamžitému zvyšování prodeje a konverzí.",
  },
  {
    icon: Search,
    title: "SEO & PR kampaně",
    desc: "Optimalizujeme vaše pozice ve výsledcích vyhledávání a podporujeme značku přes PR články.",
  },
  {
    icon: Mail,
    title: "Přímý marketing",
    desc: "E-mailové kampaně, SMS kampaně a distribuce reklamních materiálů pro přímý kontakt se zákazníky.",
  },
  {
    icon: BarChart3,
    title: "Analytika & reporting",
    desc: "Sledujeme výkon kampaní v reálném čase a poskytujeme přehledné reporty s konkrétními doporučeními.",
  },
];

export default function ServicesSection() {
  return (
    <section id="sluzby" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Naše služby</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Nejlépe fungují vždy společně
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Marketingový mix založený na datech. Kombinací kanálů dosahujeme maximálního efektu pro váš byznys.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
