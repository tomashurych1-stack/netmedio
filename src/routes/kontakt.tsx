import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 z původní WP stránky /kontakt/ na kontaktní sekci homepage. */
export const Route = createFileRoute("/kontakt")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "kontakt", statusCode: 301 });
  },
});
