import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock, User } from "lucide-react";
import { getPostBySlug, posts, author, type Post } from "@/data/posts";

const SITE = "https://netmedio.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  notFoundComponent: () => (
    <div className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4">Článek nenalezen</h1>
        <Link to="/blog" className="text-primary">Zpět na blog</Link>
      </div>
    </div>
  ),
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `${SITE}/blog/${post.slug}`;
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: author.name,
        jobTitle: "Digital Marketing Consultant",
      },
      publisher: {
        "@type": "Organization",
        name: "Netmedio",
        logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
      },
      mainEntityOfPage: url,
      image: `${SITE}${post.image}`,
    };
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { name: "author", content: author.name },
        { property: "article:author", content: author.name },
        { property: "article:published_time", content: post.date },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE}${post.image}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.metaDescription },
        { name: "twitter:image", content: `${SITE}${post.image}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [articleLd, breadcrumbLd, faqLd].map((ld) => ({
        type: "application/ld+json",
        children: JSON.stringify(ld),
      })),
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = posts.filter((p) => post.related.includes(p.slug));

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="section-padding pt-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-foreground">Domů</Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link to="/blog" className="hover:text-foreground">Blog</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-foreground">{post.category}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header */}
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
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <img
              src={post.image}
              alt={post.title}
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body + TOC */}
      <section className="section-padding pt-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_240px] gap-12">
          <div className="max-w-3xl">
            {/* TOC mobile */}
            <aside className="lg:hidden rounded-2xl border border-border bg-card p-6 mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Obsah článku</p>
              <ol className="space-y-2 text-sm">
                {post.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="space-y-12">
              {post.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {s.heading}
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Autor</p>
              <h3 className="text-xl font-semibold mb-1">{author.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{author.role}</p>
              <p className="text-sm text-muted-foreground">
                Zakladatel Netmedia. 15+ let v digitálním marketingu, Google Partner, specialista
                na výkonnostní kampaně, weby a marketingovou automatizaci.{" "}
                <Link to="/" hash="o-nas" className="text-primary hover:underline">
                  Více o Tomášovi
                </Link>
                .
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                Často kladené otázky
              </h2>
              <div className="space-y-3">
                {post.faq.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-border bg-card p-6"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-foreground font-medium">
                      {f.q}
                      <span className="text-primary group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-primary/30 bg-card p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Potřebujete pomoct s tématem článku?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                30 minut nezávazné konzultace s Tomášem. Projdeme vaši situaci a navrhneme další
                kroky.
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
                  to="/"
                  hash="sluzby"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
                >
                  Naše služby
                </Link>
                <Link
                  to="/"
                  hash="case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
                >
                  Případové studie
                </Link>
              </div>
            </div>
          </div>

          {/* TOC desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Obsah článku</p>
              <ol className="space-y-2 text-sm">
                {post.sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-muted-foreground hover:text-foreground block"
                    >
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Související</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Pokračujte ve čtení
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-border">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {p.category}
                    </span>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-auto inline-flex items-center gap-1.5 text-sm text-primary">
                      Číst <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
