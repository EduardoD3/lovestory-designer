import { motion } from "framer-motion";
import { MessageCircle, MapPin, Heart } from "lucide-react";
import floralCorner from "@/assets/floral-corner.png";

export const ContactSection = () => (
  <section id="contato" className="relative py-24 bg-marsala overflow-hidden">
    {/* Floral decorations */}
    <img
      src={floralCorner}
      alt=""
      aria-hidden
      className="absolute top-0 left-0 w-40 md:w-60 opacity-20 pointer-events-none"
    />
    <img
      src={floralCorner}
      alt=""
      aria-hidden
      className="absolute bottom-0 right-0 w-40 md:w-60 opacity-20 pointer-events-none"
      style={{ transform: "rotate(180deg)" }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-16"
      >
        <p className="font-script text-3xl text-gold mb-3">fale conosco</p>
        <h2 className="font-display text-4xl md:text-5xl text-champagne elegant-underline">
          Contato
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: MessageCircle,
            title: "WhatsApp dos Noivos",
            content: "(00) 99999-9999",
            action: () => window.open("https://wa.me/5500999999999?text=Olá! Vi o convite do casamento de Breno e Jaqueline.", "_blank"),
            btn: "Enviar mensagem",
          },
          {
            icon: MapPin,
            title: "Local do Evento",
            content: "Porto Velho — RO\nLocal exato em breve",
            action: null,
            btn: null,
          },
          {
            icon: Heart,
            title: "Data",
            content: "22 de novembro de 2026\nàs 18h00",
            action: null,
            btn: null,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="p-8 rounded-2xl border border-gold/20 bg-card/5 backdrop-blur text-center hover:bg-card/10 transition-all gold-border-hover"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-5">
              <item.icon size={22} className="text-card" />
            </div>
            <p className="text-xs uppercase tracking-widest text-gold mb-3">{item.title}</p>
            <p className="text-champagne/90 text-sm leading-relaxed whitespace-pre-line mb-5">{item.content}</p>
            {item.btn && item.action && (
              <button
                onClick={item.action}
                className="text-xs uppercase tracking-widest border border-gold/40 text-gold hover:bg-gold hover:text-card transition-all duration-300 px-5 py-2 rounded-full"
              >
                {item.btn}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Closing message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="border-t border-gold/20 pt-12"
      >
        <p className="font-script text-4xl md:text-5xl text-gold mb-4">
          Com amor,
        </p>
        <p className="font-display text-3xl md:text-4xl text-champagne mb-6">
          Breno & Jaqueline
        </p>
        <p className="text-champagne/60 font-light text-sm">
          22 · 11 · 2026 · Porto Velho — RO
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-16 bg-gold/30" />
          <Heart size={14} className="text-gold" fill="currentColor" />
          <div className="h-px w-16 bg-gold/30" />
        </div>
      </motion.div>
    </div>
  </section>
);
