import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope } from "lucide-react";
import ResearchSurveyPopup from "./ResearchSurveyPopup";

const COLLAPSE_AFTER_MS = 5000;

const ResearchSurveyGate = () => {
  const [mounted, setMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const suppressed = /^\/(admin|auth|dashboard|spin-to-win|popup-offer|thank-you|research)/.test(pathname);

  useEffect(() => {
    if (suppressed) return;
    const t1 = setTimeout(() => setMounted(true), 600);
    const t2 = setTimeout(() => setCollapsed(true), COLLAPSE_AFTER_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [suppressed]);

  if (suppressed) return null;

  const handleClick = () => {
    if (collapsed) {
      // Briefly expand to remind, then open
      setOpen(true);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {mounted && !open && (
          <motion.div
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[60]"
            style={{ filter: "drop-shadow(0 10px 30px rgba(201,160,80,0.35))" }}
          >
            <motion.button
              onClick={handleClick}
              onMouseEnter={() => setCollapsed(false)}
              onMouseLeave={() => setCollapsed(true)}
              aria-label="Contribute to research"
              animate={{ width: collapsed ? 48 : 220 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="relative flex items-center gap-3 bg-black border border-[#C9A050]/50 rounded-l-2xl overflow-hidden h-14 pl-3 pr-2 text-left"
            >
              {/* glowing pulse ring around icon */}
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[#C9A050]/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[#C9A050]"
                  animate={{ boxShadow: [
                    "0 0 0px rgba(201,160,80,0.4)",
                    "0 0 16px rgba(201,160,80,0.9)",
                    "0 0 0px rgba(201,160,80,0.4)",
                  ] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <Microscope className="relative h-4 w-4 text-[#C9A050]" />
              </span>
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col min-w-0"
                  >
                    <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050]">Research</span>
                    <span className="text-white text-sm font-light leading-tight truncate">
                      Please contribute
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <ResearchSurveyPopup open={open} onOpenChange={setOpen} />
    </>
  );
};

export default ResearchSurveyGate;
