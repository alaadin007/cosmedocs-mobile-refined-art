import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/blog-hero-doctor.jpeg",
    headline: "The Art of Restraint",
    subtitle: "Why the best results are the ones nobody notices.",
  },
  {
    image: "/images/blog-hero-syringe.jpeg",
    headline: "Precision Over Volume",
    subtitle: "1M+ injections since 2007 — each one intentional.",
  },
];

const INTERVAL = 5500;

export default function BlogHeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full h-[70vh] min-h-[420px] max-h-[640px] overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-14 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto left-0 right-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-[#C9A050] text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-3">
              CosmeDocs Journal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] mb-3 max-w-2xl">
              {slides[current].headline}
            </h1>
            <p className="text-white/50 text-sm md:text-base font-light max-w-lg">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === current ? 48 : 20 }}
            >
              <span className="absolute inset-0 bg-white/20 rounded-full" />
              {i === current && (
                <motion.span
                  className="absolute inset-0 bg-[#C9A050] rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
