import { createFileRoute } from "@tanstack/react-router";
import PlatformServicePage, { platformHead } from "@/components/PlatformServicePage";
import { srovnavace } from "@/data/ppc-platforms";

export const Route = createFileRoute("/sluzby/produktove-srovnavace")({
  head: () => platformHead(srovnavace),
  component: () => <PlatformServicePage p={srovnavace} />,
});
