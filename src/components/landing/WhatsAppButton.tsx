import { MessageCircle } from "lucide-react";

// TODO: trocar pelo número real do WhatsApp (formato internacional, só dígitos: ex. 5532999999999)
const WHATSAPP_NUMBER = "5500000000000";
const MESSAGE = "Olá! Tenho uma dúvida sobre o curso de Noções Básicas de Medicina Legal.";

export const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tire suas dúvidas pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-white shadow-elegant transition-all hover:scale-105 hover:bg-[#1ebe57] md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-5 w-5 fill-white" strokeWidth={0} />
      <span className="text-sm font-semibold">Tire suas dúvidas</span>
    </a>
  );
};
