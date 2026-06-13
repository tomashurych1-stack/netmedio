import melnik from "@/assets/logo-nemocnice-melnik.png.asset.json";
import mediestetik from "@/assets/logo-mediestetik.png.asset.json";
import centernet from "@/assets/logo-centernet-new.png.asset.json";
import parentes from "@/assets/logo-parentes.png.asset.json";
import blomus from "@/assets/logo-blomus-new.jpg.asset.json";
import dekorstudio from "@/assets/logo-dekorstudio.png.asset.json";

type Client = {
  name: string;
  logo: string;
  /** Logo already has a dark background — wrap in light container so it stays readable in both themes */
  darkBg?: boolean;
};

const clients: Client[] = [
  { name: "Nemocnice Mělník", logo: melnik.url },
  { name: "Mediestetik", logo: mediestetik.url },
  { name: "CenterNet", logo: centernet.url },
  { name: "Dekorstudio", logo: dekorstudio.url },
  { name: "Parentes", logo: parentes.url },
  { name: "Blomus", logo: blomus.url, darkBg: true },
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
                className="bg-card aspect-[3/2] flex items-center justify-center p-5 group"
                title={c.name}
              >
                {c.darkBg ? (
                  <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center w-full h-full max-h-[68px]">
                    <img
                      src={c.logo}
                      alt={`${c.name} – klient Netmedio`}
                      loading="lazy"
                      className="max-h-10 md:max-h-12 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={c.logo}
                    alt={`${c.name} – klient Netmedio`}
                    loading="lazy"
                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
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
