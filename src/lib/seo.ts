import tomasPhoto from "@/assets/tomas-hurych.jpg.asset.json";
import defaultArticleImage from "@/assets/blog-google-ads.jpg";

export const SITE = "https://www.netmedio.cz";

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE}${path.startsWith("/") ? path : `/${path}`}`;

/** Sdílecí obrázek pro homepage a obecné stránky. */
export const OG_IMAGE = absoluteUrl(tomasPhoto.url);

/** Sdílecí obrázek pro články bez vlastního obrázku. */
export const OG_IMAGE_ARTICLE = absoluteUrl(defaultArticleImage);

export const imageMeta = (url: string) => [
  { property: "og:image", content: url },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:image", content: url },
];
