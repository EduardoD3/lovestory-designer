import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroSlideshow = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 6000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.1 }}
          transition={{ opacity: { duration: 2, ease: "easeInOut" }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
};
