import { motion } from "framer-motion";

const padrinhos = [
  { name: "Carlos Eduardo", role: "Padrinho do Noivo" },
  { name: "Rodrigo Almeida", role: "Padrinho do Noivo" },
  { name: "Felipe Santos", role: "Padrinho do Noivo" },
  { name: "Lucas Ferreira", role: "Padrinho do Noivo" },
];

const madrinhas = [
  { name: "Ana Paula", role: "Madrinha da Noiva" },
  { name: "Camila Oliveira", role: "Madrinha da Noiva" },
  { name: "Mariana Costa", role: "Madrinha da Noiva" },
  { name: "Beatriz Lima", role: "Madrinha da Noiva" },
];

const PartyCard = ({ person, index }: { person: { name: string; role: string }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.6 }}
    className="text-center gold-border-hover rounded-2xl p-6 bg-champagne/20 hover:bg-champagne/50 transition-all"
  >
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-marsala to-marsala/70 flex items-center justify-center mx-auto mb-4 border-2 border-gold/30">
      <span className="font-display text-2xl text-gold">
        {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </span>
    </div>
    <h4 className="font-display text-base text-marsala mb-1">{person.name}</h4>
    <p className="text-xs uppercase tracking-widest text-gold/80">{person.role}</p>
  </motion.div>
);

export const WeddingParty = () => (
  <section id="padrinhos" className="py-24" style={{ background: "var(--gradient-champagne)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16"
      >
        <p className="font-script text-3xl text-gold mb-3">os escolhidos</p>
        <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
          Padrinhos & Madrinhas
        </h2>
      </motion.div>

      <div className="mb-12">
        <h3 className="font-script text-2xl text-gold text-center mb-8">Padrinhos</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {padrinhos.map((p, i) => <PartyCard key={i} person={p} index={i} />)}
        </div>
      </div>

      <div>
        <h3 className="font-script text-2xl text-gold text-center mb-8">Madrinhas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {madrinhas.map((m, i) => <PartyCard key={i} person={m} index={i} />)}
        </div>
      </div>
    </div>
  </section>
);
