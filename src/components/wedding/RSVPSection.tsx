import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Check, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import heroFloral from "@/assets/hero-floral.jpg";


export const RSVPSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    attending: "sim",
    guests_count: "0",
    observations: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Por favor, preencha seu nome e telefone.");
      return;
    }
    setLoading(true);
    setError("");

    const { error: supabaseError } = await supabase.from("rsvp_responses").insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      attending: form.attending === "sim",
      guests_count: parseInt(form.guests_count) || 0,
      observations: form.observations.trim() || null,
    });

    setLoading(false);
    if (supabaseError) {
      setError("Ocorreu um erro. Tente novamente.");
    } else {
      setSuccess(true);
    }
  };

  return (
    <section id="rsvp" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroFloral})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-champagne/90 to-champagne/70" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <p className="font-script text-3xl text-gold mb-3">sua presença</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Confirme sua Presença
          </h2>
          <p className="text-foreground/60 mt-8 font-light">
            Confirme até <strong>15 de outubro de 2026</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 shadow-card"
        >
          {success ? (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6"
              >
                <Check size={36} className="text-card" />
              </motion.div>
              <h3 className="font-display text-2xl text-marsala mb-3">
                {form.attending === "sim" ? "Até lá! 🎉" : "Obrigado pela resposta"}
              </h3>
              <p className="text-foreground/70 font-light">
                {form.attending === "sim"
                  ? "Que alegria! Estamos ansiosos para celebrar com você."
                  : "Sentiremos sua falta. Obrigado por nos avisar."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="wedding-input w-full text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-2">
                  WhatsApp / Telefone *
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="wedding-input w-full text-sm"
                  required
                />
              </div>

              {/* Attending */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-4">
                  Você vai comparecer? *
                </label>
                <div className="flex gap-4">
                  {["sim", "nao"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, attending: opt }))}
                      className={`flex-1 py-3 rounded-full border text-sm uppercase tracking-widest transition-all duration-300 ${
                        form.attending === opt
                          ? "bg-gradient-gold border-gold text-card shadow-gold"
                          : "border-gold/30 text-foreground/60 hover:border-gold/60"
                      }`}
                    >
                      {opt === "sim" ? "✓ Sim, estarei lá!" : "✗ Não poderei ir"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests count */}
              {form.attending === "sim" && (
                <div>
                  <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-2">
                    Acompanhantes (além de você)
                  </label>
                  <select
                    name="guests_count"
                    value={form.guests_count}
                    onChange={handleChange}
                    className="wedding-input w-full text-sm bg-transparent"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n === 0 ? "Irei sozinho(a)" : `${n} acompanhante${n > 1 ? "s" : ""}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Observations */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-2">
                  Observações (opcional)
                </label>
                <textarea
                  name="observations"
                  value={form.observations}
                  onChange={handleChange}
                  placeholder="Restrição alimentar, necessidade especial..."
                  rows={3}
                  className="wedding-input w-full text-sm resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold-shimmer text-card text-sm uppercase tracking-widest font-medium py-4 rounded-full flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-card/50 border-t-card rounded-full" />
                ) : (
                  <>
                    <Send size={16} />
                    Confirmar Presença
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
