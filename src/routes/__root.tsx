import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import HashScrollHandler from "@/components/HashScrollHandler";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Stránka nenalezena</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Zpět na úvod
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0F1115" },
      { title: "Netmedio – Digitální agentura | Performance, Weby, Automatizace" },
      {
        name: "description",
        content:
          "Netmedio je digitální growth partner od roku 2010. Výkonnostní marketing, tvorba webů, automatizace a analytika.",
      },
      { name: "author", content: "Ing. Tomáš Hurych" },
      { property: "og:site_name", content: "Netmedio" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <HashScrollHandler />
      <Outlet />
    </>
  );
}
