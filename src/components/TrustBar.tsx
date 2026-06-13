import { Calendar, Briefcase, Award, Globe, Sparkles } from "lucide-react";

const items = [
  { icon: Calendar, label: "15+ let zkušeností" },
  { icon: Briefcase, label: "100+ projektů" },
  { icon: Award, label: "Google Partner" },
  { icon: Globe, label: "Klienti v ČR i zahraničí" },
  { icon: Sparkles, label: "Od roku 2010" },
];

export default function TrustBar() {
  return (
    <section aria-label="Důvěra a zkušenosti" className="border-y border-border bg-[var(--surface)]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
          {items.map((i) => (
            <li key={i.label} className="inline-flex items-center gap-2">
              <i.icon className="w-4 h-4 text-primary" />
              <span className="text-foreground/90">{i.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
