import melnik from "@/assets/logo-nemocnice-melnik.png";
import mediestetik from "@/assets/logo-mediestetik.png";
import centernet from "@/assets/logo-centernet-new.png";
import parentes from "@/assets/logo-parentes.png";
import blomusDark from "@/assets/logo-blomus-dark.png";
import blomusLight from "@/assets/logo-blomus-light.png";
import dekorstudio from "@/assets/logo-dekorstudio.png";
import { Quote } from "lucide-react";
import { testimonials } from "@/components/TestimonialsSection";

type Client = {
  name: string;
  /** Default logo (used in light theme). */
  logo: string;
  /** Optional override used in dark theme. */
  logoDark?: string;
  /** Per-logo max height tweak to balance optical weight. */
  scale?: string;
};

const clients: Client[] = [
  { name: "Nemocnice Mělník", logo: melnik, scale: "max-h-11 md:max-h-14" },
  { name: "Mediestetik", logo: mediestetik, scale: "max-h-11 md:max-h-14" },
  { name: "CenterNet", logo: centernet, scale: "max-h-11 md:max-h-14" },
  { name: "Dekorstudio", logo: dekorstudio, scale: "max-h-11 md:max-h-14" },
  { name: "Parentes", logo: parentes, scale: "max-h-10 md:max-h-12" },
  { name: "Blomus", logo: blomusDark, logoDark: blomusLight, scale: "max-h-9 md:max-h-11" },
];

export default function ReferencesSection() {
  return (
    <section id="reference" className="section-padding bg-[var(--surface)]/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Reference</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Klienti a jejich zkušenosti.
          </h2>
          <p className="text-muted-foreground text-lg">
            Firmy, kterým dlouhodobě pomáháme s marketingem, weby, analytikou a automatizací.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {clients.map((c) => (
            <div
              key={c.name}
              className="aspect-[4/3] rounded-xl border border-border bg-card flex items-center justify-center px-4 py-3 group"
              title={c.name}
            >
              {c.logoDark ? (
                <>
                  {/* Light theme: dark logo */}
                  <img
                    src={c.logo}
                    alt={`${c.name} – klient Netmedio`}
                    loading="lazy"
                    className={`hidden ${c.scale ?? "max-h-12"} w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 [.light_&]:block`}
                  />
                  {/* Dark theme: light logo */}
                  <img
                    src={c.logoDark}
                    alt={`${c.name} – klient Netmedio`}
                    loading="lazy"
                    className={`block ${c.scale ?? "max-h-12"} w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300 [.light_&]:hidden`}
                  />
                </>
              ) : (
                <img
                  src={c.logo}
                  alt={`${c.name} – klient Netmedio`}
                  loading="lazy"
                  className={`${c.scale ?? "max-h-12"} w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-6 md:p-7 flex flex-col"
              >
                <Quote className="w-5 h-5 text-primary mb-4" />
                <blockquote className="text-sm leading-relaxed text-foreground/90 flex-1">
                  „{testimonial.quote}“
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{testimonial.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
