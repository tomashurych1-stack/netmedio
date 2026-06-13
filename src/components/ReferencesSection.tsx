import { Award, Quote } from "lucide-react";

export default function ReferencesSection() {
  return (
    <section id="reference" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Reference</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Důvěřují nám firmy napříč obory.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between">
            <div>
              <Award className="w-6 h-6 text-primary mb-4" />
              <p className="text-lg font-semibold">Google Partner</p>
              <p className="text-sm text-muted-foreground mt-2">
                Certifikovaná agentura pro Google Ads a Google Analytics 4.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Status: aktivní
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
              Vybraní klienti
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-card aspect-[3/2] flex items-center justify-center text-muted-foreground/40 text-xs"
                >
                  LOGO
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-dashed border-border bg-card/40 p-10 text-center">
          <Quote className="w-6 h-6 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Připravujeme sekci s referencemi od dlouhodobých klientů — testimonialy budou
            doplněny v nejbližší době.
          </p>
        </div>
      </div>
    </section>
  );
}
