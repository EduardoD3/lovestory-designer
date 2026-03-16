import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#evento", label: "O Evento" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#presentes", label: "Presentes" },
  { href: "#galeria", label: "Galeria" },
  { href: "#mensagens", label: "Mensagens" },
  { href: "#faq", label: "FAQ" },
];

export const WeddingNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/90 backdrop-blur-xl border-b border-gold/20 shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#home")}
            className="font-script text-2xl text-gold hover:opacity-80 transition-opacity"
          >
            B & J
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-xs uppercase tracking-widest font-body font-medium transition-colors duration-200 hover:text-gold ${
                  scrolled ? "text-foreground" : "text-card"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#rsvp")}
            className="hidden lg:block btn-gold-shimmer text-xs uppercase tracking-widest font-medium px-5 py-2 rounded-full text-card"
          >
            Confirmar Presença
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-card"}`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-marsala flex flex-col items-center justify-center gap-6"
          >
            <div className="font-script text-4xl text-gold mb-4">Breno & Jaqueline</div>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                className="text-champagne text-lg uppercase tracking-widest font-light hover:text-gold transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => scrollTo("#rsvp")}
              className="mt-4 btn-gold-shimmer text-sm uppercase tracking-widest font-medium px-8 py-3 rounded-full text-card"
            >
              Confirmar Presença
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
