export default function AuditSection() {
  return (
    <section id="audit" className="relative overflow-hidden">
      <div className="bg-secondary section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            Zdarma
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-4">
            Audit současných kampaní
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-10">
            Máte už nastavené reklamní kampaně, ale nedokážete vyhodnotit reálné výsledky nebo posoudit kvalitu současného nastavení? Pomůžeme vám zdarma.
          </p>

          <form className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Číslo reklamního účtu Google Ads"
              className="rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="E-mailová adresa"
              className="rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="rounded-full bg-primary px-10 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Spustit audit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
