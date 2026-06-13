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

        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-10">
          <div className="shrink-0 flex items-center justify-center">
            <img
              src={badge.url}
              alt="Google Partner – certifikovaný partner Google"
              width={128}
              height={128}
              loading="lazy"
              className="w-24 h-24 md:w-28 md:h-28 object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Google Partner</p>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Certifikovaný partner Google
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Certifikovaný partner Google pro správu reklamních kampaní, analytiku a měření výkonu.
              Pravidelné certifikace Google Ads a Google Analytics, doporučené struktury kampaní
              a server-side měření konverzí.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground self-center md:self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Status partnerství: aktivní
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
