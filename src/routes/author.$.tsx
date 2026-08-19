import { createFileRoute, redirect } from "@tanstack/react-router";

/** 301 z původních WP autorských archivů /author/... na blog. */
export const Route = createFileRoute("/author/$")({
  beforeLoad: () => {
    throw redirect({ to: "/blog", statusCode: 301 });
  },
});
