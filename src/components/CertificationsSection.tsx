import badge from "@/assets/google-partner-badge.png.asset.json";

export default function CertificationsSection() {
  return (
    <section id="certifikace" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Certifikace & partnerství</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Ověřená odbornost.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-10 flex items-center justify-center">
            <img
              src={badge.url}
              alt="Google Partner – certifikovaný partner Google"
              width={320}
              height={320}
              loading="lazy"
              className="w-56 h-56 object-contain"
            />
          </div>
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-10 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Google Partner</p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Certifikovaný partner Google
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Certifikovaný partner Google pro správu reklamních kampaní, analytiku a měření výkonu.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pravidelné certifikace Google Ads a Google Analytics. Pracujeme s nejnovějšími
              nástroji, doporučenými strukturami kampaní a měřením konverzí na úrovni serveru.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Status partnerství: aktivní
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
