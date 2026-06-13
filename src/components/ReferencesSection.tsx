import melnik from "@/assets/logo-nemocnice-melnik.png.asset.json";
import mediestetik from "@/assets/logo-mediestetik.png.asset.json";
import centernet from "@/assets/logo-centernet-new.png.asset.json";
import parentes from "@/assets/logo-parentes.png.asset.json";
import blomusDark from "@/assets/logo-blomus-dark.png.asset.json";
import blomusLight from "@/assets/logo-blomus-light.png.asset.json";
import dekorstudio from "@/assets/logo-dekorstudio.png.asset.json";

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
  { name: "Nemocnice Mělník", logo: melnik.url, scale: "max-h-9 md:max-h-10" },
  { name: "Mediestetik", logo: mediestetik.url, scale: "max-h-10 md:max-h-11" },
  { name: "CenterNet", logo: centernet.url, scale: "max-h-9 md:max-h-10" },
  { name: "Dekorstudio", logo: dekorstudio.url, scale: "max-h-9 md:max-h-10" },
  { name: "Parentes", logo: parentes.url, scale: "max-h-8 md:max-h-9" },
  { name: "Blomus", logo: blomusDark.url, logoDark: blomusLight.url, scale: "max-h-7 md:max-h-8" },
];

export default function ReferencesSection() {
  return (
    <section id="reference" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Reference</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Vybraní klienti
          </h2>
          <p className="text-muted-foreground text-lg">
            Firmy, kterým dlouhodobě pomáháme s marketingem, weby, analytikou a automatizací.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-card aspect-[3/2] flex items-center justify-center p-6 group"
                title={c.name}
              >
                {c.logoDark ? (
                  <>
                    {/* Light theme: dark logo */}
                    <img
                      src={c.logo}
                      alt={`${c.name} – klient Netmedio`}
                      loading="lazy"
                      className={`hidden ${c.scale ?? "max-h-10"} w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 [.light_&]:block`}
                    />
                    {/* Dark theme: light logo */}
                    <img
                      src={c.logoDark}
                      alt={`${c.name} – klient Netmedio`}
                      loading="lazy"
                      className={`block ${c.scale ?? "max-h-10"} w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300 [.light_&]:hidden`}
                    />
                  </>
                ) : (
                  <img
                    src={c.logo}
                    alt={`${c.name} – klient Netmedio`}
                    loading="lazy"
                    className={`${c.scale ?? "max-h-10"} w-auto object-contain opacity-75 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
