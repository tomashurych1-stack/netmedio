import { Link, useRouterState, type LinkProps } from "@tanstack/react-router";
import { forwardRef, type ComponentPropsWithoutRef, type MouseEvent } from "react";

type Props = {
  section: string; // e.g. "kontakt"
  className?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick" | "ref">;

/**
 * Links to a section on the homepage. Works from any route:
 * - On "/", smooth-scrolls to the section.
 * - On other routes, navigates to "/" then scrolls (via root hash effect).
 */
const SectionLink = forwardRef<HTMLAnchorElement, Props>(function SectionLink(
  { section, className, children, onClick, ...rest },
  ref,
) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (onHome) {
      e.preventDefault();
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${section}`);
      }
    }
  };

  const linkProps = {
    to: "/",
    hash: section,
    className,
    onClick: handleClick,
    ...rest,
  } as unknown as LinkProps & ComponentPropsWithoutRef<"a">;

  return (
    <Link ref={ref} {...linkProps}>
      {children}
    </Link>
  );
});

export default SectionLink;
