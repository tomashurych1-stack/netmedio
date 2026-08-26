import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Kolik stojí správa PPC kampaní?",
    a: "Správa jednoho reklamního systému začíná od 5 000 Kč měsíčně. Při kombinaci více systémů (např. Google Ads + Sklik + Meta Ads) od 8 000 Kč. Cena vždy vychází z rozsahu kampaní a obratu, který přes ně teče.",
  },
  {
    q: "Děláte také tvorbu webových stránek?",
    a: "Ano. Tvoříme moderní firemní weby, landing pages a e-commerce řešení. Postavíme je na WordPressu, nebo jako rychlé weby na React/Cloud. Využíváme AI při návrhu a vývoji, díky čemuž dokážeme dodat kvalitnější řešení rychleji. Ceny webů začínají na 20 000 Kč a 30 000 Kč dle rozsahu.",
  },
  {
    q: "Nabízíte SEO a obsahový marketing?",
    a: "Ano. Řešíme on-page SEO, technické SEO, strukturovaná data a obsahovou strategii. SEO pro nás dává smysl jen v kombinaci s měřením a obchodními cíli.",
  },
  {
    q: "Je možná jednorázová i dlouhodobá spolupráce?",
    a: "Obojí. Většina klientů s námi spolupracuje dlouhodobě, ale rádi uděláme i jednorázové projekty — audit účtu, nový web nebo nasazení měření.",
  },
  {
    q: "Jak probíhá začátek spolupráce?",
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
