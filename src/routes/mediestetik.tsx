import { createFileRoute } from "@tanstack/react-router";
import LegacyCasePage from "@/components/LegacyCasePage";
import { getLegacyCase } from "@/data/legacy-cases";

const SITE = "https://www.netmedio.cz";
const item = getLegacyCase("mediestetik")!;
const URL = `${SITE}/mediestetik/`;

export const Route = createFileRoute("/mediestetik")({
  head: () => ({
    meta: [
      { title: item.metaTitle },
      { name: "description", content: item.metaDescription },
      { property: "og:title", content: item.title },
      { property: "og:description", content: item.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: item.title },
      { name: "twitter:description", content: item.metaDescription },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.metaDescription,
          mainEntityOfPage: URL,
          publisher: { "@type": "Organization", name: "Netmedio", url: SITE },
        }),
      },
    ],
  }),
  component: () => <LegacyCasePage item={item} />,
});
