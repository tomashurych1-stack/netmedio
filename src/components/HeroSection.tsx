import { ArrowUpRight } from "lucide-react";
import SectionLink from "@/components/SectionLink";

const trust = [
  { value: "15+", label: "let zkušeností" },
  { value: "100+", label: "projektů" },
  { value: "Google", label: "Partner" },
  { value: "CZ / EU", label: "klienti" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 px-6 lg:px-8">
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,106,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Digital growth partner — od roku 2010
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.02] tracking-tight max-w-5xl">
          Digitální růst firem
          <br />
          <span className="text-muted-foreground">od roku</span>{" "}
          <span className="text-primary">2010.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Pomáháme firmám získávat více poptávek, zákazníků a obratu pomocí
          výkonnostního marketingu, moderních webů a automatizací.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <SectionLink
            section="kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Nezávazná konzultace
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </SectionLink>
          <SectionLink
            section="case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-card transition-colors"
          >
            Případové studie
          </SectionLink>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {trust.map((t) => (
            <div key={t.label} className="bg-background p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-semibold text-foreground">
                {t.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
