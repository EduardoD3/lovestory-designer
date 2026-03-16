import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Heart } from "lucide-react";
import { supabase, type GuestMessage } from "@/integrations/supabase/client";

export const MessagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchMessages = async () => {
    const { data } = await supabase
      .from("guest_messages")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });
    if (data) setMessages(data);
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setLoading(true);

    const { error } = await supabase.from("guest_messages").insert({
      name: form.name.trim(),
      message: form.message.trim(),
      approved: true,
    });

    setLoading(false);
    if (!error) {
      setSubmitted(true);
      fetchMessages();
    }
  };

  return (
    <section id="mensagens" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-gold mb-3">com amor</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Mensagens para os Noivos
          </h2>
          <p className="text-foreground/60 mt-8 font-light">
            Deixe uma mensagem especial para Breno & Jaqueline
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4"
                  >
                    <Heart size={28} className="text-card" fill="currentColor" />
                  </motion.div>
                  <h3 className="font-display text-xl text-marsala mb-2">Mensagem enviada!</h3>
                  <p className="text-foreground/60 text-sm">Breno & Jaqueline vão adorar ler!</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", message: "" }); }}
                    className="mt-4 text-xs text-gold uppercase tracking-widest hover:underline"
                  >
                    Enviar outra
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-2">
                      Seu Nome *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Como você se chama?"
                      className="wedding-input w-full text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-marsala font-medium mb-2">
                      Sua Mensagem *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Escreva uma mensagem com amor..."
                      rows={5}
                      className="wedding-input w-full text-sm resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold-shimmer text-card text-sm uppercase tracking-widest font-medium py-4 rounded-full flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-card/50 border-t-card rounded-full" />
                    ) : (
                      <><Send size={14} /> Enviar Mensagem</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Messages wall */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-4 max-h-[500px] overflow-y-auto pr-2"
          >
            {messages.length === 0 && (
              <p className="text-center text-foreground/40 font-light py-12">
                Seja o primeiro a deixar uma mensagem! 💕
              </p>
            )}
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 rounded-2xl border border-gold/20 bg-champagne/20 hover:bg-champagne/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-card text-xs font-semibold">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <p className="font-medium text-marsala text-sm">{msg.name}</p>
                  <Heart size={12} className="text-gold ml-auto" fill="currentColor" />
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed font-light italic">
                  "{msg.message}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
