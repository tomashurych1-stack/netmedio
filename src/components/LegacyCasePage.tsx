import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegacyBlocks from "@/components/LegacyBlocks";
import type { LegacyCase } from "@/data/legacy-cases";
import { getServiceBySlug } from "@/data/services";

export default function LegacyCasePage({ item }: { item: LegacyCase }) {
  const services = item.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s));

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
                    <Link to="/case-studies" className="hover:text-foreground">
                      Případové studie
                    </Link>
                  </li>
                  <li aria-hidden>›</li>
                  <li className="text-foreground">{item.client}</li>
                </ol>
              </nav>
            </div>
          </div>

          <header className="section-padding pt-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{item.industry}</p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                {item.title}
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                {item.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </header>

          <section className="section-padding pt-10">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
              {item.results.map((r) => (
                <div key={r.metric} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {r.metric}
                  </p>
                  <p className="text-lg font-semibold">{r.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-padding pt-12">
            <div className="max-w-3xl mx-auto space-y-12">
              {item.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {s.heading}
                  </h2>
                  <LegacyBlocks blocks={s.blocks} />
                </section>
              ))}

              {services.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    Použité služby
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

              <div className="rounded-2xl border border-primary/30 bg-card p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  Chcete podobné výsledky?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Ozvěte se nám na nezávaznou konzultaci. Projdeme vaši situaci a navrhneme postup.
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
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:border-primary/40"
                  >
                    Další případové studie
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
