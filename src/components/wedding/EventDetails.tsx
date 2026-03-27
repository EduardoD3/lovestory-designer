import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Car, Shirt, Music, Heart, Star } from "lucide-react";
import venueImg from "@/assets/venue.jpg";

const agenda = [
  { time: "17h30", label: "Abertura dos Portões", icon: Heart, description: "Recepção dos convidados" },
  { time: "18h00", label: "Cerimônia", icon: Star, description: "Troca de alianças e votos" },
  { time: "19h00", label: "Coquetel", icon: Music, description: "Aperitivos e recepção especial" },
  { time: "20h00", label: "Jantar & Festa", icon: Music, description: "Celebração ao lado de quem amamos" },
];

export const EventDetails = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="evento" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-script text-3xl text-gold mb-3">detalhes do</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            O Evento
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Venue image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img src={venueImg} alt="Local do evento em Porto Velho" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-marsala/40 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-card">
                <p className="font-script text-2xl text-gold">Porto Velho — RO</p>
                <p className="text-sm opacity-80">22 de novembro de 2026</p>
                <p className="text-xs opacity-60 italic mt-1">Local exato será confirmado em breve</p>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center gap-6"
          >
            {[
              {
                icon: Clock,
                title: "Data & Hora",
                content: "22 de novembro de 2026\nàs 18h00\n(horário sujeito a confirmação)",
              },
              {
                icon: MapPin,
                title: "Local",
                content: "Porto Velho — RO\nLocal exato será confirmado em breve",
              },
              {
                icon: Car,
                title: "Estacionamento",
                content: "Informações serão atualizadas junto com o local",
              },
              {
                icon: Shirt,
                title: "Dress Code",
                content: "Traje a rigor\nHomens: terno escuro · Mulheres: longo ou midi",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-gold/20 bg-champagne/30 hover:border-gold/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-card" />
                </div>
                <div>
                  <p className="font-medium text-marsala text-sm uppercase tracking-wider mb-1">{item.title}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 rounded-2xl overflow-hidden border border-gold/20 shadow-card"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1699900000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do evento"
          />
        </motion.div>

        {/* Agenda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="font-display text-3xl text-marsala text-center mb-4">
            <span className="font-script text-gold text-2xl block mb-2">programação</span>
            Agenda do Dia
          </h3>
          <p className="text-foreground/60 text-center text-sm mb-4 font-light">
            Preparamos cada momento com muito carinho para celebrar esse dia especial com você.
          </p>
          <p className="text-gold/70 text-center text-xs uppercase tracking-widest mb-10">
            Horários sujeitos a pequenos ajustes
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agenda.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center p-6 rounded-2xl border border-gold/20 bg-champagne/20 hover:bg-champagne/50 transition-all gold-border-hover"
              >
                <p className="font-display text-2xl text-gold font-semibold mb-2">{item.time}</p>
                <div className="h-px w-8 bg-gradient-gold mx-auto mb-3" />
                <p className="font-display text-base text-marsala mb-1">{item.label}</p>
                <p className="text-foreground/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
