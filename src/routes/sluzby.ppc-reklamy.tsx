import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 z původní WP stránky /sluzby/ppc-reklamy/ na Výkonnostní reklamu. */
export const Route = createFileRoute("/sluzby/ppc-reklamy")({
  beforeLoad: () => {
    throw redirect({
      to: "/sluzby/$slug",
      params: { slug: "vykonnostni-reklama" },
      statusCode: 301,
    });
  },
});
