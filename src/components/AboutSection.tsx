import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="o-nas" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">O nás</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Netmedio od roku 2010.
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Netmedio vzniklo v roce 2010 s cílem pomáhat firmám růst online.
            </p>
            <p>
              Nevěříme na marketingové fráze ani prezentace plné grafů bez výsledků.
              Zajímá nás jediné: <span className="text-foreground">jaký dopad má marketing na váš byznys.</span>
            </p>
            <p>
              Dnes propojujeme výkonnostní marketing, webové technologie a automatizaci
              do jednoho funkčního systému.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="aspect-square rounded-xl bg-[var(--surface-2)] border border-border flex items-center justify-center mb-6 overflow-hidden">
              <User className="w-16 h-16 text-muted-foreground/40" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Ing. Tomáš Hurych</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Founder & Digital Marketing Consultant
                </p>
              </div>
              <div className="text-xs text-primary border border-primary/30 rounded-full px-3 py-1">
                Netmedio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
