import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Skvělá spolupráce. Vážím si hlavně flexibility, dobrých rad a komplexního přemýšlení nad projekty. Finance jsou rozděleny smysluplně a efektivně.",
    name: "Inna S.",
    company: "FWG Investments",
  },
  {
    text: "Jsme velmi vděční a velmi děkujeme netmedio za velmi kvalitní spolupráci, která má výsledky! Vždy rychlé reakce, velká ochota, příjemná komunikace s lidským přístupem.",
    name: "Veronika M.",
    company: "Dekorstudio",
  },
  {
    text: "Skvělá spolupráce i komunikace. Tomáš je člověk na správném místě, který marketingu opravdu rozumí. Určitě chci dlouhodobou spolupráci, protože najít dobrého marketéra je dnes obtížné.",
    name: "Marie M.",
    company: "KMGHair",
  },
];

const clients = ["Mediestetik", "Nemocnice VAMED Mělník", "TESLA", "blomus"];

export default function TestimonialsSection() {
  return (
    <section id="reference" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Reference</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Učte se od nejlepších
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl border border-border p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-card-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-50">
          {clients.map((c) => (
            <span key={c} className="text-xl font-bold tracking-wide text-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
