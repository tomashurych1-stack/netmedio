import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 z původní WP stránky /reference/ na případové studie. */
export const Route = createFileRoute("/reference")({
  beforeLoad: () => {
    throw redirect({ to: "/case-studies", statusCode: 301 });
  },
});
