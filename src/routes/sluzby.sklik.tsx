import { createFileRoute } from "@tanstack/react-router";
import PlatformServicePage, { platformHead } from "@/components/PlatformServicePage";
import { sklik } from "@/data/ppc-platforms";

export const Route = createFileRoute("/sluzby/sklik")({
  head: () => platformHead(sklik),
  component: () => <PlatformServicePage p={sklik} />,
});
