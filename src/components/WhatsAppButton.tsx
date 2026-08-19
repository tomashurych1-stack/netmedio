import { MessageCircle } from "lucide-react";

const PHONE = "+420776691696";
const MESSAGE = encodeURIComponent("Dobrý den, mám zájem o nezávaznou konzultaci.");
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Napište nám na WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-card/90 backdrop-blur border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <MessageCircle className="h-5 w-5 fill-current" />
      </span>
      <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:pr-5 group-hover:opacity-100">
        Napište nám
      </span>
    </a>
  );
}
