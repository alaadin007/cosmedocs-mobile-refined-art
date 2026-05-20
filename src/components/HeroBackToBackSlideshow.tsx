import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "@/assets/hero-slideshow/1-harley-street-w1.jpg";
import slide2 from "@/assets/hero-slideshow/2-clinic-interior.jpg";
import slide3 from "@/assets/hero-slideshow/3-training-session.jpg";

const slides = [
  {
    src: slide1,
    eyebrow: "Harley Street · W1",
    caption: "On the address that defines British medicine.",
    alt: "Harley Street W1 sign, City of Westminster — Cosmedocs doctor-led aesthetic clinic London",
  },
  {
    src: slide2,
    eyebrow: "Inside the clinic",
    caption: "Quiet, considered, private — never spa, never clinical-cold.",
    alt: "Cosmedocs Harley Street clinic interior — discreet, warm patient lounge for doctor-led aesthetic consultations",
  },
  {
    src: slide3,
    eyebrow: "Training the profession",
    caption: "Where doctors come to learn — our Harley Street Institute training wing.",
    alt: "Doctors training at Harley Street Institute — Cosmedocs medical education wing led by Dr Ahmed Haq",
  },
];

const HeroBackToBackSlideshow = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-w-[520px] mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-[#C9A050]/20 bg-black shadow-[0_30px_80px_-30px_rgba(201,160,80,0.4)]">
      <AnimatePresence mode="sync">
        <motion.img
          key={slides[i].src}
          src={slides[i].src}
          alt={slides[i].alt}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* gradient overlays */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* caption */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`cap-${i}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6 }}
          className="absolute left-5 right-5 bottom-6 sm:left-7 sm:right-7 sm:bottom-8"
        >
          <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#C9A050] mb-2">
            {slides[i].eyebrow}
          </p>
          <p className="font-serif text-lg sm:text-2xl text-white/95 leading-snug max-w-[90%]">
            {slides[i].caption}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* progress dots */}
      <div className="absolute top-5 right-5 flex gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-7 bg-[#C9A050]" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* corner mark */}
      <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-white/70">
        Cosmedocs · Live
      </div>
    </div>
  );
};

export default HeroBackToBackSlideshow;
