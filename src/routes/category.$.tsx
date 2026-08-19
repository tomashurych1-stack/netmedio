import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 z původních WP rubrik /category/... na blog. */
export const Route = createFileRoute("/category/$")({
  beforeLoad: () => {
    throw redirect({ to: "/blog", statusCode: 301 });
  },
});
