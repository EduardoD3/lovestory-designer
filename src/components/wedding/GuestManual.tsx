import { motion } from "framer-motion";
import { Clock, Volume2, Flower, Camera, Heart, Star } from "lucide-react";

const tips = [
  {
    icon: Clock,
    title: "Seja Pontual",
    description: "A cerimônia começa às 18h. Chegue pelo menos 20 minutos antes para se acomodar.",
  },
  {
    icon: Volume2,
    title: "Celular no Silencioso",
    description: "Por favor, mantenha o celular no silencioso durante a cerimônia para não interromper o momento.",
  },
  {
    icon: Camera,
    title: "Respeite os Fotógrafos",
    description: "Permita que os fotógrafos façam seu trabalho. Evite se colocar na frente deles durante momentos especiais.",
  },
  {
    icon: Flower,
    title: "Não Retire Decorações",
    description: "As flores e decorações são parte do nosso sonho. Por favor, não as retire do local.",
  },
  {
    icon: Heart,
    title: "Aproveite o Momento",
    description: "Esta noite é única! Curta cada instante, dance muito e crie memórias inesquecíveis.",
  },
  {
    icon: Star,
    title: "Mesa de Doces",
    description: "Aguarde a liberação da mesa de doces. Será anunciado pelos noivos no momento certo!",
  },
];

export const GuestManual = () => (
  <section id="manual" className="py-24 bg-card">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16"
      >
        <p className="font-script text-3xl text-gold mb-3">para você</p>
        <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
          Manual dos Convidados
        </h2>
        <p className="text-foreground/60 mt-8 font-light max-w-lg mx-auto">
          Pequenas dicas para que todos possam aproveitar cada momento desta noite especial.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative p-6 rounded-2xl border border-gold/20 bg-champagne/10 hover:bg-champagne/30 transition-all gold-border-hover"
          >
            <div className="absolute top-5 right-5 text-gold/10 font-display text-5xl font-bold leading-none select-none">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-5">
              <tip.icon size={20} className="text-card" />
            </div>
            <h3 className="font-display text-lg text-marsala mb-3">{tip.title}</h3>
            <p className="text-foreground/65 text-sm leading-relaxed">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
