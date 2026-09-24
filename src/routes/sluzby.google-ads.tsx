import { createFileRoute } from "@tanstack/react-router";
import PlatformServicePage, { platformHead } from "@/components/PlatformServicePage";
import { googleAds } from "@/data/ppc-platforms";

export const Route = createFileRoute("/sluzby/google-ads")({
  head: () => platformHead(googleAds),
  component: () => <PlatformServicePage p={googleAds} />,
});
