import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Co je PPC reklama?",
    a: "PPC (Pay-Per-Click) je model online reklamy, kde platíte pouze za kliknutí na váš inzerát. Nejrozšířenější platformy jsou Google Ads a Sklik od Seznamu. Díky PPC se můžete okamžitě dostat na přední pozice ve vyhledávání.",
  },
  {
    q: "Jaká je minimální investice do reklamy?",
    a: "Minimální investice závisí na oboru a konkurenci. Pro většinu projektů doporučujeme začít od 10 000 Kč měsíčně na reklamní rozpočet, aby kampaně měly dostatečný objem dat pro optimalizaci.",
  },
  {
    q: "Kolik stojí tvorba webových stránek?",
    a: "Cena se odvíjí od rozsahu a složitosti projektu. Jednoduchý web s moderním designem začíná na 25 000 Kč, e-shop od 50 000 Kč. Vždy vám připravíme individuální nabídku na míru.",
  },
  {
    q: "Jak funguje reklama na Facebooku?",
    a: "Facebook reklama umožňuje přesné cílení na základě demografických údajů, zájmů a chování uživatelů. Vytváříme vizuálně atraktivní reklamy, které osloví vaši cílovou skupinu a přivedou nové zákazníky.",
  },
  {
    q: "Jak dlouho trvá, než uvidím výsledky SEO?",
    a: "SEO je dlouhodobá strategie. První výsledky se obvykle projevují po 3-6 měsících systematické práce. Kombinací on-page a off-page optimalizace postupně budujeme stabilní organickou návštěvnost.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground">
            Nejčastěji kladené otázky
          </h2>
          <p className="text-secondary-foreground/60 mt-3">
            Zajímá vás něco jiného? Napište nám, rádi vám pomůžeme.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-secondary-foreground/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-secondary-foreground hover:bg-secondary-foreground/5 transition-colors"
              >
                <span className="font-semibold text-sm pr-4">{f.q}</span>
                {openIdx === i ? (
                  <Minus className="w-5 h-5 shrink-0 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 shrink-0 text-secondary-foreground/50" />
                )}
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-sm text-secondary-foreground/70 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
