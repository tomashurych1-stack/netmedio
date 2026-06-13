import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { getCaseBySlug, cases, type CaseStudy } from "@/data/cases";
import { services } from "@/data/services";

const SITE = "https://netmedio.lovable.app";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseBySlug(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  notFoundComponent: () => (
    <div className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4">Případová studie nenalezena</h1>
        <Link to="/case-studies" className="text-primary">Zpět na přehled</Link>
      </div>
    </div>
  ),
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { study } = loaderData;
    const url = `${SITE}/case-studies/${params.slug}`;
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Případové studie", item: `${SITE}/case-studies` },
        { "@type": "ListItem", position: 3, name: study.shortTitle, item: url },
      ],
    };
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.title,
      description: study.metaDescription,
      datePublished: study.date,
      author: { "@type": "Organization", name: "Netmedio" },
      publisher: {
        "@type": "Organization",
        name: "Netmedio",
        logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
      },
      mainEntityOfPage: url,
    };
    return {
      meta: [
        { title: study.metaTitle },
        { name: "description", content: study.metaDescription },
        { property: "og:title", content: study.title },
        { property: "og:description", content: study.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [breadcrumbLd, articleLd].map((ld) => ({
        type: "application/ld+json",
        children: JSON.stringify(ld),
      })),
    };
  },
  component: CaseDetail,
});

function CaseDetail() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const relatedServices = services.filter((s) => study.relatedServices.includes(s.slug));
  const relatedCases = cases.filter((c) => study.relatedCases.includes(c.slug));

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="section-padding pt-8 pb-0">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Domů</Link></li>
              <li aria-hidden>›</li>
              <li><Link to="/case-studies" className="hover:text-foreground">Případové studie</Link></li>
              <li aria-hidden>›</li>
              <li className="text-foreground">{study.shortTitle}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{study.industry}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {study.summary}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Typ klienta</p>
              <p className="text-sm text-foreground">{study.clientType}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Délka projektu</p>
              <p className="text-sm text-foreground">{study.duration}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hlavní výsledek</p>
              <p className="text-sm font-semibold text-primary">{study.headlineResult}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Challenge */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Výchozí situace</p>
            <h2 className="text-2xl font-semibold mb-4">Kde klient stál</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {study.initialSituation.map((s, i) => (
                <li key={i} className="flex gap-2"><span className="text-primary">·</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Challenge</p>
            <h2 className="text-2xl font-semibold mb-4">Hlavní výzvy</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {study.challenges.map((c, i) => (
                <li key={i} className="flex gap-2"><span className="text-primary">·</span>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Analýza</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            {study.analysis.heading}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {study.analysis.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Solution</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Implementované řešení
          </h2>
          <div className="space-y-10">
            {study.solution.map((s) => (
              <div key={s.heading}>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{s.heading}</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Nástroje</p>
          <h2 className="text-xl font-semibold mb-4">Použité technologie a platformy</h2>
          <ul className="flex flex-wrap gap-2">
            {study.tools.map((t) => (
              <li key={t} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Result</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Výsledky v číslech
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {study.results.map((r) => (
              <div key={r.metric} className="bg-card p-6">
                <div className="text-xl md:text-2xl font-semibold text-primary mb-2">{r.value}</div>
                <div className="text-sm text-foreground mb-1">{r.metric}</div>
                {r.note && <div className="text-xs text-muted-foreground">{r.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Ponaučení</p>
          <h2 className="text-2xl font-semibold mb-6">Co jsme si odnesli</h2>
          <ul className="space-y-3">
            {study.lessons.map((l, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90 leading-relaxed">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Použité služby</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Co stojí za výsledkem
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to="/sluzby/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {s.shortTitle}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.benefit}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                    Detail služby <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Další studie</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Podívejte se i na
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-primary/40 transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {c.industry}
                  </span>
                  <h3 className="text-base font-semibold mb-3 group-hover:text-primary transition-colors">
                    {c.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{c.summary}</p>
                  <p className="text-base font-semibold text-primary">{c.headlineResult}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Chcete podobný výsledek?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Začneme nezávaznou konzultací nad vaší situací — 30 minut online, bez závazku.
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
      </section>
    </article>
  );
}
