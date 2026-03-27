import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroFloral from "@/assets/hero-floral.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";

const storyItems = [
  {
    title: "O Primeiro Encontro",
    description:
      "Em uma tarde qualquer, nossos caminhos se cruzaram de um jeito que parecia impossível ser por acaso. O sorriso dela iluminou a sala, e soube naquele momento que queria conhecê-la para sempre.",
    image: story1,
    align: "left",
  },
  {
    title: "O Pedido",
    description:
      "Rodeados de flores e com o coração acelerado, ajoelhei diante dela com um anel e a certeza mais absoluta da minha vida. Ela disse sim, e o mundo parou por um instante — perfeito e eterno.",
    image: story2,
    align: "right",
  },
  {
    title: "Para Sempre",
    description:
      "Agora, diante de todos que amamos, prometemos construir juntos uma vida repleta de amor, cumplicidade e aventuras. Este é apenas o começo da nossa história mais bonita.",
    image: null,
    align: "left",
  },
];

const TimelineItem = ({ item, index }: { item: typeof storyItems[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        !isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {item.image ? (
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-2xl gold-border-hover">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marsala/20 to-transparent" />
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-1/2" />
      )}

      <div className={`w-full md:w-1/2 ${isLeft ? "md:text-left" : "md:text-right"} text-center`}>
        <p className="font-script text-3xl text-gold mb-2">{item.year}</p>
        <h3 className="font-display text-2xl md:text-3xl text-marsala mb-4">{item.title}</h3>
        <div className={`h-px w-12 bg-gradient-gold mb-4 ${isLeft ? "md:ml-0 mx-auto" : "md:ml-auto mx-auto"}`} />
        <p className="text-foreground/70 leading-relaxed font-light">{item.description}</p>
      </div>
    </motion.div>
  );
};

export const OurStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="historia"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--gradient-champagne)" }}
    >
      {/* Background floral */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFloral})` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-script text-3xl text-gold mb-3">com amor</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Nossa História
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {storyItems.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
