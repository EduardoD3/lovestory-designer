import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { weddingPhotos } from "@/assets/casamento";

const images = weddingPhotos.map((src, i) => ({
  src,
  alt: `Ensaio de Breno e Jaqueline — foto ${i + 1}`,
}));


export const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setLightbox((i) => (i! < images.length - 1 ? i! + 1 : 0));

  return (
    <section id="galeria" className="py-24" style={{ background: "var(--gradient-champagne)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-gold mb-3">memórias</p>
          <h2 className="font-display text-4xl md:text-5xl text-marsala elegant-underline">
            Galeria
          </h2>
          <p className="text-foreground/60 mt-8 font-light">Clique para ampliar</p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 auto-rows-[240px] md:auto-rows-[260px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`${i === 1 ? "row-span-2" : ""} overflow-hidden rounded-2xl cursor-pointer group relative`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-marsala/0 group-hover:bg-marsala/20 transition-all duration-300 flex items-center justify-center">
                <p className="text-card text-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  ampliar
                </p>
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/20 backdrop-blur flex items-center justify-center text-card hover:bg-card/40 transition-colors"
              >
                <X size={18} />
              </button>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/20 backdrop-blur flex items-center justify-center text-card hover:bg-card/40 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/20 backdrop-blur flex items-center justify-center text-card hover:bg-card/40 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
              <p className="text-center text-card/60 text-sm mt-4">
                {lightbox + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
