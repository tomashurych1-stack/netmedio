import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { cases } from "@/data/cases";
import { legacyPosts } from "@/data/legacy-posts";
import { legacyCases } from "@/data/legacy-cases";

const BASE_URL = "https://www.netmedio.cz";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/o-nas", changefreq: "monthly", priority: "0.8" },
          { path: "/sluzby", changefreq: "monthly", priority: "0.9" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          ...services.map((s) => ({
            path: `/sluzby/${s.slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })),
          ...cases.map((c) => ({
            path: `/case-studies/${c.slug}`,
            changefreq: "monthly",
            priority: "0.8",
            lastmod: c.date,
          })),
          ...legacyCases.map((c) => ({
            path: c.path,
            changefreq: "yearly",
            priority: "0.7",
          })),
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: p.date,
          })),
          ...legacyPosts.map((p) => ({
            path: `${p.path}/`,
            changefreq: "yearly",
            priority: "0.6",
            lastmod: p.dateUpdated ?? p.date,
          })),

          {
            path: "/navody-zadani-platebni-metody-google-ads-a-overeni-inzerenta",
            changefreq: "yearly",
            priority: "0.6",
          },
        ];

        const urls = entries
          .map((e) => {
            const lines = [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].filter(Boolean);
            return lines.join("\n");
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
