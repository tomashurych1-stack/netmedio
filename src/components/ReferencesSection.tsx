import melnik from "@/assets/logo-nemocnice-melnik.png.asset.json";
import mediestetik from "@/assets/logo-mediestetik.png.asset.json";
import centernet from "@/assets/logo-centernet.webp.asset.json";
import parentes from "@/assets/logo-parentes.png.asset.json";
import blomus from "@/assets/logo-blomus.png.asset.json";

const clients = [
  { name: "Nemocnice Mělník", logo: melnik.url },
  { name: "Mediestetik", logo: mediestetik.url },
  { name: "CenterNet", logo: centernet.url },
  { name: "Parentes", logo: parentes.url },
  { name: "Blomus", logo: blomus.url },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-card aspect-[3/2] flex items-center justify-center p-6 group"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={`${c.name} – klient Netmedio`}
                  loading="lazy"
                  className="max-h-12 md:max-h-14 w-auto object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
