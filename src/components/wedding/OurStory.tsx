import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroFloral from "@/assets/hero-floral.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const paragraphs = [
  "Não houve trilha sonora, nem uma data marcada no calendário. Houve apenas um dia comum que, sem pedir licença, decidiu mudar tudo. Um olhar que demorou um segundo a mais, uma conversa que não queria acabar, e a sensação estranha e bonita de já conhecer alguém que acabávamos de encontrar.",
  "O tempo passou do jeito que o tempo passa quando se está bem acompanhado: depressa. Aprendemos um com o outro nas coisas pequenas — no café da manhã dividido, nas viagens improvisadas, nos silêncios confortáveis, nas discussões que terminavam em risada. Descobrimos que amor não é só o encanto do começo, é a escolha repetida todos os dias.",
  "E então, entre tantas histórias vividas, chegou o momento de escrever o capítulo mais importante das nossas vidas. Não porque tudo antes tenha sido menor, mas porque agora queremos escrever juntos, na mesma página, diante de quem sempre esteve por perto.",
  "É por isso que este convite existe: para que você caminhe conosco no dia em que o nosso “para sempre” deixa de ser promessa e vira compromisso.",
];

const photos = [story1, gallery2, story2];

export const OurStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="historia"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--gradient-champagne)" }}
    >
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFloral})` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-gold mb-3">com amor</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Nossa História
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {paragraphs.map((text, i) => (
            <div key={i}>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`text-foreground/75 font-light leading-loose text-lg md:text-xl text-center md:text-left ${
                  i === 0 ? "first-letter:font-display first-letter:text-5xl first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""
                }`}
              >
                {text}
              </motion.p>

              {photos[i] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="mt-12 overflow-hidden rounded-2xl"
                >
                  <img
                    src={photos[i]}
                    alt="Ensaio de Breno e Jaqueline"
                    loading="lazy"
                    className="w-full h-72 md:h-[26rem] object-cover hover:scale-[1.03] transition-transform duration-[1200ms]"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-script text-3xl md:text-4xl text-gold text-center mt-16"
        >
          Breno &amp; Jaqueline
        </motion.p>
      </div>
    </section>
  );
};
