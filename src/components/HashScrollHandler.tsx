import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Scrolls to element matching location.hash whenever the URL hash changes
 * (including after cross-route navigation like /blog/... -> /#kontakt).
 */
export default function HashScrollHandler() {
  const { hash, pathname } = useRouterState({
    select: (s) => ({ hash: s.location.hash, pathname: s.location.pathname }),
  });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    if (!id) return;

    let cancelled = false;
    const tryScroll = (attempt = 0) => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 20) {
        // Element may not be mounted yet after route change
        setTimeout(() => tryScroll(attempt + 1), 50);
      }
    };
    // Defer one tick so the new route can mount
    const t = setTimeout(() => tryScroll(0), 0);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [hash, pathname]);

  return null;
}
