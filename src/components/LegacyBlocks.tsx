type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export default function LegacyBlocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
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
