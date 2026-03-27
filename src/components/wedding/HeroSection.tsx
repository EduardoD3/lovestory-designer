import { motion } from "framer-motion";
import coupleHero from "@/assets/couple-hero.jpg";
import floralCorner from "@/assets/floral-corner.png";
import { CountdownTimer } from "./CountdownTimer";

export const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coupleHero})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floral corners */}
      <img
        src={floralCorner}
        alt=""
        aria-hidden
        className="absolute top-0 left-0 w-48 md:w-72 opacity-80 pointer-events-none"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
      />
      <img
        src={floralCorner}
        alt=""
        aria-hidden
        className="absolute bottom-0 right-0 w-48 md:w-72 opacity-80 pointer-events-none"
        style={{
          transform: "rotate(180deg)",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-2xl md:text-3xl text-gold mb-4"
        >
          Com alegria, convidamos você para celebrar o nosso casamento
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-card tracking-wide mb-2"
        >
          Breno
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-script text-4xl md:text-5xl text-gold my-1"
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-card tracking-wide mb-4"
        >
          Jaqueline
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-script text-xl md:text-2xl text-gold/80 mb-6"
        >
          Um novo capítulo da nossa história começa aqui
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <div className="h-px w-16 bg-gold/60" />
          <p className="text-gold/80 uppercase tracking-[0.3em] text-xs font-light">
            22 de novembro de 2026
          </p>
          <div className="h-px w-16 bg-gold/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="text-card/70 text-sm tracking-widest uppercase mb-2"
        >
          Porto Velho — RO · 18h00
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-gold/60 text-xs tracking-wider italic mb-8"
        >
          Local e horário exatos serão confirmados em breve
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-12"
        >
          <p className="font-script text-lg text-gold/80 mb-4">
            Faltam poucos dias para o nosso grande dia
          </p>
          <CountdownTimer targetDate="2026-11-22T18:00:00" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#rsvp")}
            className="btn-gold-shimmer text-sm uppercase tracking-widest font-medium px-8 py-4 rounded-full text-card"
          >
            Confirmar presença 💍
          </button>
          <button
            onClick={() => scrollTo("#presentes")}
            className="border border-card/40 text-card text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
          >
            Ver lista de presentes
          </button>
          <button
            onClick={() => scrollTo("#evento")}
            className="border border-card/40 text-card text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
          >
            Mais informações
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-card/50 text-xs uppercase tracking-widest">scroll</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
