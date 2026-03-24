import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Heart, Plane, Home } from "lucide-react";

type GiftItem = {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  value: string;
  pix?: string;
  link?: string;
};

const luaDeMel: GiftItem[] = [
  {
    icon: Plane,
    category: "lua de mel ✈️",
    title: "Noite Romântica em Hotel",
    description: "Uma experiência especial para celebrarmos esse momento único juntos 💛",
    value: "R$ 350,00",
    pix: "054.053.932-58",
  },
  {
    icon: Plane,
    category: "lua de mel ✈️",
    title: "Jantar à Luz de Velas",
    description: "Um jantar romântico e inesquecível durante a nossa lua de mel",
    value: "R$ 250,00",
    pix: "054.053.932-58",
  },
  {
    icon: Plane,
    category: "lua de mel ✈️",
    title: "Tour Romântico",
    description: "Um passeio especial para guardarmos na memória para sempre",
    value: "R$ 420,00",
    pix: "054.053.932-58",
  },
];

const reformaCasa: GiftItem[] = [
  {
    icon: Home,
    category: "reforma da casa 🏡",
    title: "Aparelho de Jantar Completo",
    description: "Para recebermos os amigos com elegância em nosso lar",
    value: "R$ 480,00",
    link: "https://www.amazon.com.br",
  },
  {
    icon: Home,
    category: "reforma da casa 🏡",
    title: "Jogo de Cama Luxo",
    description: "Lençóis de algodão egípcio 400 fios para o quarto do casal",
    value: "R$ 320,00",
    link: "https://www.magazineluiza.com.br",
  },
];

const experiencias: GiftItem[] = [
  {
    icon: Heart,
    category: "experiências novas 💛",
    title: "Contribuição Livre",
    description: "Qualquer valor contribui para a construção do nosso novo lar e a realização dos nossos sonhos",
    value: "À sua escolha",
    pix: "054.053.932-58",
  },
];

const CategorySection = ({
  title,
  gifts,
  onContribute,
}: {
  title: string;
  gifts: GiftItem[];
  onContribute: (gift: GiftItem) => void;
}) => (
  <div className="mb-14">
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="font-script text-2xl text-gold mb-6 capitalize"
    >
      {title}
    </motion.h3>
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
              onClick={() => onContribute(gift)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-card transition-all duration-300"
            >
              {gift.link ? <ExternalLink size={12} /> : <Heart size={12} />}
              {gift.link ? "Ver" : "Presentear com carinho"}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const GiftList = () => {
  const handleContribute = (gift: GiftItem) => {
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
          className="text-center mb-10"
        >
          <p className="font-script text-3xl text-gold mb-3">com carinho</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Lista de Presentes
          </h2>
          <p className="text-gold/80 mt-5 font-light text-sm uppercase tracking-widest">
            Cada gesto será recebido com muito amor.
          </p>
          <p className="text-foreground/60 mt-6 font-light max-w-xl mx-auto leading-relaxed">
            Sua presença já é o nosso maior presente 💛<br />
            Mas, se desejar nos abençoar de outra forma, preparamos algumas sugestões com muito carinho para esse novo capítulo das nossas vidas.
          </p>
        </motion.div>

        {/* PIX info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 p-6 rounded-2xl border border-gold/30 bg-champagne/30 text-center glass-card"
        >
          <p className="text-xs uppercase tracking-widest text-marsala font-medium mb-2">Chave Pix</p>
          <p className="font-display text-xl text-foreground">054.053.932-58</p>
          <p className="text-foreground/60 font-medium text-sm mt-1">Nome: Breno Severo</p>
          <p className="text-foreground/50 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            Você também pode contribuir de forma livre para nos ajudar na construção do nosso novo lar e na realização dos nossos sonhos.
          </p>
        </motion.div>

        <CategorySection title="Lua de mel ✈️" gifts={luaDeMel} onContribute={handleContribute} />
        <CategorySection title="Reforma da Casa 🏡" gifts={reformaCasa} onContribute={handleContribute} />
        <CategorySection title="Experiências novas 💛" gifts={experiencias} onContribute={handleContribute} />
      </div>
    </section>
  );
};
