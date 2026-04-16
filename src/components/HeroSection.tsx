import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            Otevíráme vám dveře do online světa
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary-foreground leading-[1.05] mb-6">
            Digitální marketing{" "}
            <span className="text-primary">s námi</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-md mb-8">
            Specialisté na PPC, SEO, webové stránky a komplexní online marketing. Od roku 2010 pomáháme firmám růst.
          </p>
          <a
            href="#konzultace"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Začněte už dnes
          </a>
        </div>

        {/* Right — consultation form */}
        <div id="konzultace" className="bg-primary rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-primary-foreground mb-2">
            Zarezervujte si zdarma konzultaci
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-6">
            Vyplňte formulář a my vám připravíme individuální řešení na míru.
          </p>
          <form className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Jméno"
              className="rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <input
              type="email"
              placeholder="E-mailová adresa"
              className="rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <input
              type="tel"
              placeholder="Telefonní číslo"
              className="rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <input
              type="url"
              placeholder="Váš web"
              className="rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="rounded-lg border-2 border-primary-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Získat návrh
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
