import { ArrowUpRight } from "lucide-react";
import SectionLink from "@/components/SectionLink";

export default function ProjectCta() {
  return (
    <section className="px-6 py-12 md:px-12 md:py-16 lg:px-20">
      <div className="max-w-7xl mx-auto rounded-2xl border border-primary/25 bg-[var(--gold-soft)] px-6 py-8 md:px-10 md:py-9 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Řešíte podobný projekt?</h2>
          <p className="mt-2 text-muted-foreground">
            Pojďme se podívat, co by dávalo smysl právě pro vás.
          </p>
        </div>
        <SectionLink
          section="kontakt"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Nezávazně probrat projekt
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </SectionLink>
      </div>
    </section>
  );
}