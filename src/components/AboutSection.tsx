import tomasPhoto from "@/assets/tomas-hurych.jpg.asset.json";

export default function AboutSection() {
  return (
    <section id="o-nas" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
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
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-sm" />
              <img
                src={tomasPhoto.url}
                alt="Ing. Tomáš Hurych – Founder Netmedio"
                className="relative w-44 h-44 rounded-full object-cover border-2 border-primary/40 shadow-xl"
                loading="lazy"
              />
            </div>
            <p className="text-lg font-semibold">Ing. Tomáš Hurych</p>
            <p className="text-sm text-muted-foreground mt-1">
              Founder & Digital Marketing Consultant
            </p>
            <div className="mt-4 text-xs text-primary border border-primary/30 rounded-full px-3 py-1">
              Netmedio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
