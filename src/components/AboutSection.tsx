import { Award, Users, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "let zkušeností" },
  { icon: Users, value: "500+", label: "projektů" },
  { icon: TrendingUp, value: "95%", label: "spokojených klientů" },
  { icon: Award, value: "Google", label: "Partner" },
];

export default function AboutSection() {
  return (
    <section id="o-nas" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">O nás</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Specialisté na online marketing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nejsme reklamní agentura, jsme <strong className="text-foreground">specialisté na online marketing a rozvoj podnikání</strong>. Žijeme marketingem už od roku 2010 a za tu dobu nám pod klávesnicí prošly stovky projektů.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Naším cílem je optimalizace vašeho marketingového mixu, aby vám dokázal generovat co nejvyšší zisky. Pracujeme datově, transparentně a s důrazem na výsledky.
          </p>
          <a
            href="#konzultace"
            className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary-foreground hover:opacity-90 transition-opacity"
          >
            Pokračujte zde
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
