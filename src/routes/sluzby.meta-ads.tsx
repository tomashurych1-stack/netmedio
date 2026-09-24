import { createFileRoute } from "@tanstack/react-router";
import PlatformServicePage, { platformHead } from "@/components/PlatformServicePage";
import { metaAds } from "@/data/ppc-platforms";

export const Route = createFileRoute("/sluzby/meta-ads")({
  head: () => platformHead(metaAds),
  component: () => <PlatformServicePage p={metaAds} />,
});
