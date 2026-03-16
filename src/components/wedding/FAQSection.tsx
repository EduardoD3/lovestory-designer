import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Posso levar acompanhante?",
    a: "Cada convite é pessoal e intransferível. Caso queira trazer acompanhante, por favor entre em contato conosco antecipadamente para verificarmos a disponibilidade.",
  },
  {
    q: "Como chegar ao local?",
    a: "O Espaço Elegance Eventos fica na Av. das Flores, 1500 — Jardim Primavera. Você pode usar Google Maps ou Waze para chegar facilmente. Há estacionamento gratuito no local com serviço de manobrista.",
  },
  {
    q: "Qual traje usar?",
    a: "O dress code é traje a rigor. Homens: terno escuro (preferência preto ou azul marinho). Mulheres: vestido longo ou midi. Por favor, evite roupas na cor branca.",
  },
  {
    q: "Até quando posso confirmar presença?",
    a: "Confirme sua presença até o dia 15 de outubro de 2026. Após essa data, não garantimos lugar para todos.",
  },
  {
    q: "Posso tirar fotos durante a cerimônia?",
    a: "Pedimos gentilmente que durante a cerimônia as fotos sejam feitas pelos fotógrafos contratados. Na festa, sinta-se à vontade para registrar os momentos!",
  },
  {
    q: "Há opções para crianças?",
    a: "Crianças são bem-vindas! O evento contará com um espaço reservado para os pequenos.",
  },
  {
    q: "Tem restrições alimentares?",
    a: "Sim! Informe sua restrição alimentar no formulário de RSVP. Teremos opções para vegetarianos e alérgicos.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      className="border-b border-gold/20"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-display text-base md:text-lg text-marsala group-hover:text-gold transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-card transition-all"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-foreground/65 font-light leading-relaxed text-sm md:text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => (
  <section id="faq" className="py-24" style={{ background: "var(--gradient-champagne)" }}>
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16"
      >
        <p className="font-script text-3xl text-gold mb-3">dúvidas</p>
        <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
          Perguntas Frequentes
        </h2>
      </motion.div>

      <div>
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </div>
  </section>
);
