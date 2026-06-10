import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";

/**
 * Editorial banner highlighting the Smart Aesthetics course
 * (/aesthetic-treatments-made-easy/). Drop into homepage and key landing pages.
 */
export default function SmartAestheticsBanner({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <section className={`relative px-6 py-12 ${isDark ? "bg-gradient-to-b from-black to-[#0a0805]" : "bg-[#F5F5F3]"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <Link
          to="/aesthetic-treatments-made-easy/"
          className={`group block rounded-3xl border overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
            isDark
              ? "border-[#C9A050]/30 bg-gradient-to-br from-[#1a140a] via-black to-[#1a140a] hover:border-[#C9A050]/60"
              : "border-gray-200 bg-white hover:border-[#C9A050]/50 shadow-sm"
          }`}
        >
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-6 p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#C9A050]" />
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050] font-medium">
                  Free patient course · Read before you treat
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                Smart Aesthetics — understand your face <br className="hidden sm:block" />
                <span className="text-[#C9A050]">before you treat it.</span>
              </h2>
              <p className={`mt-3 text-sm sm:text-base font-light leading-relaxed max-w-2xl ${isDark ? "text-white/65" : "text-gray-600"}`}>
                The 10-principle interactive course our doctors teach to every new patient.
                Why most treatments fail, what actually changes in each decade, and how to
                spend nothing on the wrong thing.
              </p>
            </div>
            <div className="flex md:flex-col gap-3 items-start md:items-end">
              <span className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-transform group-hover:scale-105 ${
                isDark ? "bg-[#C9A050] text-black" : "bg-gray-900 text-white"
              }`}>
                <BookOpen className="w-4 h-4" />
                Start the course
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className={`text-[11px] uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-gray-400"}`}>
                10 principles · ~15 min
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
