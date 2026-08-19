import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "service"; slug: string; text: string; label: string };

export default function LegacyBlocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "h3")
          return (
            <h3 key={i} className="text-xl font-semibold text-foreground pt-2">
              {b.text}
            </h3>
          );
        if (b.type === "service")
          return (
            <p key={i} className="text-sm">
              {b.text}{" "}
              <Link
                to="/sluzby/$slug"
                params={{ slug: b.slug }}
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                {b.label} <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="space-y-2 list-disc pl-5 marker:text-primary">
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        return (
          <ol key={i} className="space-y-2 list-decimal pl-5 marker:text-primary">
            {b.items.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}
