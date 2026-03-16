import { motion } from "framer-motion";
import { ExternalLink, Heart, Gift, Plane } from "lucide-react";

const gifts = [
  {
    icon: Plane,
    category: "lua de mel",
    title: "Noite Romântica em Hotel",
    description: "Uma noite especial num hotel boutique para celebrar nosso amor",
    value: "R$ 350,00",
    pix: "breno.jaqueline@email.com",
  },
  {
    icon: Plane,
    category: "lua de mel",
    title: "Jantar à Luz de Velas",
    description: "Jantar romântico num restaurante especial durante a lua de mel",
    value: "R$ 250,00",
    pix: "breno.jaqueline@email.com",
  },
  {
    icon: Gift,
    category: "presentes",
    title: "Aparelho de Jantar Completo",
    description: "Para recebermos os amigos com elegância em nosso lar",
    value: "R$ 480,00",
    link: "https://www.amazon.com.br",
  },
  {
    icon: Gift,
    category: "presentes",
    title: "Jogo de Cama Luxo",
    description: "Lençóis de algodão egípcio 400 fios para o quarto do casal",
    value: "R$ 320,00",
    link: "https://www.magazineluiza.com.br",
  },
  {
    icon: Heart,
    category: "presente especial",
    title: "Contribuição Livre",
    description: "Qualquer valor contribui para nossa felicidade",
    value: "À sua escolha",
    pix: "breno.jaqueline@email.com",
  },
  {
    icon: Plane,
    category: "lua de mel",
    title: "Tour Romântico",
    description: "Um passeio inesquecível durante nossa lua de mel",
    value: "R$ 420,00",
    pix: "breno.jaqueline@email.com",
  },
];

export const GiftList = () => {
  const handleContribute = (gift: typeof gifts[0]) => {
    if (gift.pix) {
      navigator.clipboard.writeText(gift.pix).then(() => {
        alert(`Chave Pix copiada: ${gift.pix}\n\nObrigado pelo presente! 💕`);
      });
    } else if (gift.link) {
      window.open(gift.link, "_blank");
    }
  };

  return (
    <section id="presentes" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-gold mb-3">com carinho</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Lista de Presentes
          </h2>
          <p className="text-foreground/60 mt-8 font-light max-w-xl mx-auto">
            Sua presença já é o maior presente. Mas se quiser nos surpreender com algo,
            estas são nossas sugestões com muito amor.
          </p>
        </motion.div>

        {/* PIX info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 p-6 rounded-2xl border border-gold/30 bg-champagne/30 text-center glass-card"
        >
          <p className="text-xs uppercase tracking-widest text-marsala font-medium mb-2">Chave Pix</p>
          <p className="font-display text-xl text-foreground">breno.jaqueline@email.com</p>
          <p className="text-foreground/50 text-sm mt-1">Transferência bancária também disponível</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gifts.map((gift, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative rounded-2xl border border-gold/20 bg-champagne/10 p-6 hover:bg-champagne/40 transition-all duration-300 gold-border-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <gift.icon size={20} className="text-card" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold font-medium bg-gold/10 px-3 py-1 rounded-full">
                  {gift.category}
                </span>
              </div>

              <h3 className="font-display text-lg text-marsala mb-2">{gift.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">{gift.description}</p>

              <div className="flex items-center justify-between mt-auto">
                <p className="font-semibold text-marsala text-sm">{gift.value}</p>
                <button
                  onClick={() => handleContribute(gift)}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-card transition-all duration-300"
                >
                  {gift.link ? <ExternalLink size={12} /> : <Heart size={12} />}
                  {gift.link ? "Ver" : "Presentear"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
