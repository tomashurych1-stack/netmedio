import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Skvělá spolupráce. Vážím si hlavně flexibility, dobrých rad a komplexního přemýšlení nad projekty. Finance jsou rozděleny smysluplně a efektivně.",
    name: "Inna S.",
    company: "FWG Investments",
  },
  {
    quote:
      "Jsme velmi vděční a děkujeme Tomášovi za kvalitní spolupráci, která má výsledky. Vždy rychlé reakce, velká ochota a příjemná komunikace s lidským přístupem.",
    name: "Veronika M.",
    company: "Dekorstudio",
  },
  {
    quote:
      "Tomáš je člověk na správném místě, který marketingu opravdu rozumí. Určitě chci dlouhodobou spolupráci — dobrého marketéra je dnes těžké najít.",
    name: "Marie M.",
    company: "KMGHair",
  },
  {
    quote:
      "Doporučuji všem, kdo chtějí marketingového partnera, ne jen dodavatele. S Tomášem se opravdu táhne za jeden provaz.",
    name: "Lucie P.",
    company: "Brand manager, Verde",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reference-klientu" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Co říkají klienti</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Reference z dlouhodobých spoluprací.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col"
            >
              <Quote className="w-6 h-6 text-primary mb-5" />
              <blockquote className="text-lg leading-relaxed text-foreground/90 flex-1">
                „{t.quote}“
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export { testimonials };
