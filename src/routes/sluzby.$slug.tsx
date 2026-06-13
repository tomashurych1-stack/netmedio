import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { getServiceBySlug, services, pricingNote, type Service } from "@/data/services";
import { cases } from "@/data/cases";
import { posts } from "@/data/posts";

const SITE = "https://netmedio.lovable.app";

export const Route = createFileRoute("/sluzby/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4">Služba nenalezena</h1>
        <Link to="/sluzby" className="text-primary">Zpět na služby</Link>
      </div>
    </div>
  ),
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { service } = loaderData;
    const url = `${SITE}/sluzby/${params.slug}`;
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
        { "@type": "ListItem", position: 2, name: "Služby", item: `${SITE}/sluzby` },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: url },
      ],
    };
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.shortTitle,
      description: service.metaDescription,
      provider: {
        "@type": "Organization",
        name: "Netmedio",
        url: SITE,
      },
      areaServed: "CZ",
      serviceType: service.category,
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [breadcrumbLd, serviceLd, faqLd].map((ld) => ({
        type: "application/ld+json",
        children: JSON.stringify(ld),
      })),
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));
  const relatedCases = cases.filter((c) => service.relatedCases.includes(c.slug));
  const relatedPosts = posts.filter((p) => service.relatedPosts.includes(p.slug));

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="section-padding pt-8 pb-0">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Domů</Link></li>
              <li aria-hidden>›</li>
              <li><Link to="/sluzby" className="hover:text-foreground">Služby</Link></li>
              <li aria-hidden>›</li>
              <li className="text-foreground">{service.shortTitle}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="section-padding pt-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{service.category}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {service.heroIntro}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hlavní přínos</p>
              <p className="text-foreground">{service.benefit}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pro koho</p>
              <p className="text-foreground">{service.audience}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              hash="kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Nezávazná konzultace <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#cenik"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
            >
              Ceník služby
            </a>
          </div>
        </div>
      </header>

      {/* Problems */}
      <section id="problemy" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">S čím klienti přicházejí</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Typické problémy a jejich obchodní dopad
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.problems.map((p) => (
              <div key={p.symptom} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Symptom</p>
                <h3 className="text-lg font-semibold mb-3">{p.symptom}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Dopad</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="postup" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Jak to děláme</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Postup spolupráce
          </h2>
          <ol className="space-y-3">
            {service.approach.map((step) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Includes + Tools */}
      <section id="obsah" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Co je v ceně</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Konkrétní výstupy služby
            </h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Nástroje</p>
            <h2 className="text-xl font-semibold mb-4">Pracujeme s</h2>
            <ul className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <li key={t} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Outcomes */}
      <section id="vysledky" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Očekávané výsledky</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Realistické KPI a obchodní dopad
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {service.outcomes.map((o) => (
              <div key={o.kpi} className="bg-card p-6">
                <div className="text-xl md:text-2xl font-semibold text-primary mb-2">{o.value}</div>
                <div className="text-sm text-muted-foreground">{o.kpi}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Rozsahy odpovídají typickým výsledkům našich klientů. Konkrétní KPI vždy potvrdíme po auditu.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="cenik" className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Ceník</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Transparentní ceny
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {service.pricing.map((p) => (
              <div key={p.tier} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{p.tier}</p>
                <p className="text-2xl font-semibold text-primary mb-3">{p.range}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-2xl">{pricingNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding pt-0">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Často kladené otázky
          </h2>
          <div className="space-y-3">
            {service.faq.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-foreground font-medium">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Související služby</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Často kombinujeme s
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
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Související případové studie</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Jak to dopadlo v praxi
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
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

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Z blogu</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Pokračujte ve čtení
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</span>
                  <h3 className="text-base font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/30 bg-card p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Pojďme se k tomu pobavit
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            30 minut nezávazné konzultace. Projdeme vaši situaci a navrhneme další krok — bez závazku.
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
              Všechny služby
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
            >
              Případové studie
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
