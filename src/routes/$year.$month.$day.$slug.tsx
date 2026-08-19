import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegacyBlocks from "@/components/LegacyBlocks";
import { getLegacyPost, legacyPosts, type LegacyPost } from "@/data/legacy-posts";
import { author } from "@/data/posts";
import { getServiceBySlug } from "@/data/services";
import { OG_IMAGE_ARTICLE, imageMeta } from "@/lib/seo";

const SITE = "https://www.netmedio.cz";

export const Route = createFileRoute("/$year/$month/$day/$slug")({
  loader: ({ params }) => {
    const post = getLegacyPost(params.year, params.month, params.day, params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Článek nenalezen | Netmedio" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const url = `${SITE}${post.path}/`;
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.dateUpdated ?? post.date,
      inLanguage: "cs-CZ",
      author: { "@type": "Person", name: author.name, jobTitle: "Digital Marketing Consultant" },
      publisher: { "@type": "Organization", name: "Netmedio", url: SITE },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    };
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { name: "robots", content: "index, follow" },
        { name: "author", content: author.name },
        { property: "article:published_time", content: post.date },
        ...(post.dateUpdated
          ? [{ property: "article:modified_time", content: post.dateUpdated }]
          : []),
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "cs_CZ" },
        { property: "og:site_name", content: "Netmedio" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.metaDescription },
        ...imageMeta(OG_IMAGE_ARTICLE),
      ],
      links: [{ rel: "canonical", href: url }],

      scripts: [articleLd, breadcrumbLd].map((ld) => ({
        type: "application/ld+json",
        children: JSON.stringify(ld),
      })),
    };
  },
  notFoundComponent: LegacyNotFound,
  component: LegacyArticlePage,
});

function LegacyNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-4">Článek nenalezen</h1>
          <p className="text-muted-foreground mb-6">
            Tento článek už na webu Netmedio není. Podívejte se na aktuální blog.
          </p>
          <Link to="/blog" className="text-primary">
            Přejít na blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function LegacyArticlePage() {
  const { post } = Route.useLoaderData() as { post: LegacyPost };
  const services = post.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s));
  const related = post.relatedPosts
    .map((p) => legacyPosts.find((lp) => lp.path === p))
    .filter((p): p is LegacyPost => Boolean(p));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <article>
          <div className="section-padding pt-8 pb-0">
            <div className="max-w-4xl mx-auto">
              <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-foreground">
                      Domů
                    </Link>
                  </li>
                  <li aria-hidden>›</li>
                  <li>
                    <Link to="/blog" className="hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden>›</li>
                  <li className="text-foreground">{post.category}</li>
                </ol>
              </nav>
            </div>
          </div>

          <header className="section-padding pt-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{post.category}</p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">{post.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{post.readingTime} min čtení</span>
                </div>
                <time dateTime={post.date}>{post.dateLabel}</time>
                {post.dateUpdated && (
                  <span>
                    Aktualizováno{" "}
                    <time dateTime={post.dateUpdated}>{post.dateUpdatedLabel}</time>
                  </span>
                )}

              </div>
            </div>
          </header>

          <section className="section-padding pt-10">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {post.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-12 space-y-12">
                {post.sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                      {s.heading}
                    </h2>
                    <LegacyBlocks blocks={s.blocks} />
                  </section>
                ))}
              </div>

              {services.length > 0 && (
                <div className="mt-16 rounded-2xl border border-border bg-card p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    Související služby
                  </p>
                  <ul className="space-y-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/sluzby/$slug"
                          params={{ slug: s.slug }}
                          className="text-foreground hover:text-primary inline-flex items-center gap-1.5"
                        >
                          {s.title} <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {related.length > 0 && (
                <div className="mt-8 rounded-2xl border border-border bg-card p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    Pokračujte ve čtení
                  </p>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.path}>
                        <Link
                          to="/$year/$month/$day/$slug"
                          params={{ year: r.year, month: r.month, day: r.day, slug: r.slug }}
                          className="text-foreground hover:text-primary inline-flex items-center gap-1.5"
                        >
                          {r.title} <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-16 rounded-2xl border border-primary/30 bg-card p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  Potřebujete pomoct s tématem článku?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  30 minut nezávazné konzultace. Projdeme vaši situaci a navrhneme další kroky.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/"
                    hash="kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    Nezávazná konzultace <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/sluzby"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
                  >
                    Naše služby
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
