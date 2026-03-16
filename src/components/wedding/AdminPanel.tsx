import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Check, X, MessageCircle, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { RSVPResponse, GuestMessage } from "@/integrations/supabase/types-ext";

const ADMIN_PASSWORD = "bj2026admin";

export const AdminPanel = () => {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"rsvp" | "messages">("rsvp");
  const [rsvps, setRsvps] = useState<RSVPResponse[]>([]);
  const [messages, setMessages] = useState<GuestMessage[]>([]);

  const login = () => {
    if (pwd === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      setError("Senha incorreta");
    }
  };

  useEffect(() => {
    if (!authed) return;
    const fetchAll = async () => {
      const [rsvpRes, msgRes] = await Promise.all([
        supabase.from("rsvp_responses").select("*").order("created_at", { ascending: false }),
        supabase.from("guest_messages").select("*").order("created_at", { ascending: false }),
      ]);
      if (rsvpRes.data) setRsvps(rsvpRes.data);
      if (msgRes.data) setMessages(msgRes.data);
    };
    fetchAll();
  }, [authed]);

  const confirmados = rsvps.filter((r) => r.attending).length;
  const total = rsvps.reduce((acc, r) => acc + (r.attending ? 1 + (r.guests_count || 0) : 0), 0);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-champagne px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-10 w-full max-w-sm text-center shadow-card"
        >
          <Lock size={32} className="text-gold mx-auto mb-4" />
          <h1 className="font-display text-2xl text-marsala mb-2">Painel Admin</h1>
          <p className="text-foreground/50 text-sm mb-8">Breno & Jaqueline · 22.11.2026</p>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="Senha"
            className="wedding-input w-full text-sm text-center mb-6"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button onClick={login} className="w-full btn-gold-shimmer text-card py-3 rounded-full text-sm uppercase tracking-widest">
            Entrar
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-champagne p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl text-marsala mb-1">Painel Administrativo</h1>
          <p className="font-script text-xl text-gold">Breno & Jaqueline · 22.11.2026</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total RSVPs", value: rsvps.length, icon: Users },
            { label: "Confirmados", value: confirmados, icon: Check },
            { label: "Recusados", value: rsvps.length - confirmados, icon: X },
            { label: "Pessoas totais", value: total, icon: Users },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center shadow-card">
              <p className="font-display text-3xl text-marsala">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-foreground/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["rsvp", "messages"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                tab === t ? "bg-gradient-gold text-card shadow-gold" : "border border-gold/30 text-foreground/60 hover:border-gold"
              }`}
            >
              {t === "rsvp" ? `RSVPs (${rsvps.length})` : `Mensagens (${messages.length})`}
            </button>
          ))}
        </div>

        {/* RSVP Table */}
        {tab === "rsvp" && (
          <div className="glass-card rounded-2xl overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-marsala/10">
                  <tr>
                    {["Nome", "Telefone", "Presença", "Acompanhantes", "Obs.", "Data"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs uppercase tracking-widest text-marsala font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rsvps.map((r) => (
                    <tr key={r.id} className="border-t border-gold/10 hover:bg-champagne/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-marsala">{r.name}</td>
                      <td className="px-4 py-3 text-foreground/60">{r.phone}</td>
                      <td className="px-4 py-3">
                        {r.attending ? (
                          <span className="flex items-center gap-1 text-green-600"><Check size={12} /> Sim</span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-500"><X size={12} /> Não</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-foreground/60">{r.guests_count}</td>
                      <td className="px-4 py-3 text-foreground/50 text-xs max-w-[150px] truncate">{r.observations || "—"}</td>
                      <td className="px-4 py-3 text-foreground/40 text-xs">
                        {r.created_at ? new Date(r.created_at).toLocaleDateString("pt-BR") : "—"}
                      </td>
                    </tr>
                  ))}
                  {rsvps.length === 0 && (
                    <tr><td colSpan={6} className="px-4 py-8 text-center text-foreground/40">Nenhuma confirmação ainda</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages */}
        {tab === "messages" && (
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="glass-card rounded-2xl p-5 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-card text-xs font-bold">
                    {m.name.charAt(0)}
                  </div>
                  <span className="font-medium text-marsala">{m.name}</span>
                  <span className="ml-auto text-xs text-foreground/40">
                    {m.created_at ? new Date(m.created_at).toLocaleDateString("pt-BR") : ""}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${m.approved ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                    {m.approved ? "Aprovada" : "Pendente"}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm italic">"{m.message}"</p>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="text-center py-10 text-foreground/40">Nenhuma mensagem ainda</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
