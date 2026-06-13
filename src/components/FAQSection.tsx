import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Kolik stojí správa Google Ads?",
    a: "Cena vychází z rozsahu kampaní a obratu, který přes ně teče. Měsíční fee začíná typicky od 12 000 Kč a vždy ji nastavujeme tak, aby se klientovi vrátila násobně.",
  },
  {
    q: "Jak rychle uvidím první výsledky z PPC?",
    a: "První signály jsou většinou do 2–4 týdnů. Stabilní výkon a optimalizovaný ROAS typicky budujeme 2–3 měsíce.",
  },
  {
    q: "Děláte i tvorbu webů, nebo jen marketing?",
    a: "Tvoříme firemní weby, landing pages a e-commerce řešení na WordPressu, Loveable i custom stacku s Cloudflare. Web i kampaně tak řeší jeden tým.",
  },
  {
    q: "Co je marketingová automatizace a komu se vyplatí?",
    a: "Automatizace nahrazuje opakovanou manuální práci — od reportingu po lead nurturing. Vyplatí se vždy, když tým tráví hodiny činnostmi, které lze popsat procesem.",
  },
  {
    q: "Pracujete se SEO?",
    a: "Ano. Řešíme on-page SEO, technické SEO, strukturovaná data a obsahovou strategii. SEO pro nás dává smysl jen v kombinaci s měřením a obchodními cíli.",
  },
  {
    q: "Jak vypadá měření a reporting?",
    a: "Standardem je GA4, Google Tag Manager a Looker Studio. U pokročilejších klientů nasazujeme server-side tracking pro přesná data nezávislá na cookies.",
  },
  {
    q: "Spolupracujete dlouhodobě, nebo na jednotlivé projekty?",
    a: "Obojí. Většina klientů s námi spolupracuje roky, ale dělají i jednorázové projekty — audit účtu, nový web nebo nasazení měření.",
  },
  {
    q: "Pracujete pouze s českými firmami?",
    a: "Ne. Část klientů cílí z ČR na zahraniční trhy nebo působí přímo v EU. Vedeme projekty v češtině i v angličtině.",
  },
  {
    q: "Jste Google Partner?",
    a: "Ano, Netmedio je certifikovaný Google Partner — máme aktivní certifikace v Google Ads a Google Analytics 4.",
  },
  {
    q: "Jak začíná spolupráce?",
    a: "Krátkou nezávaznou konzultací (30 minut). Probereme cíle a stávající stav. Pokud dává smysl jít dál, navrhneme rozsah, harmonogram a cenu.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Časté otázky.
          </h2>
        </div>

        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left py-6 text-base md:text-lg font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
