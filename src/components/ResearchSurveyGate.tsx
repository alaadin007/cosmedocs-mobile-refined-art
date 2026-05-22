import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, X } from "lucide-react";
import ResearchSurveyPopup from "./ResearchSurveyPopup";

const STORAGE_KEY = "cosmedocs_research_survey_v1";
const DISMISS_KEY = "cosmedocs_research_survey_dismissed_v1";
const SURVEY_START = new Date("2026-05-22T00:00:00Z").getTime();
const SURVEY_END = SURVEY_START + 7 * 24 * 60 * 60 * 1000;
const DELAY_MS = 4000;

const ResearchSurveyGate = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (/^\/(admin|auth|dashboard|spin-to-win|popup-offer|thank-you|research)/.test(pathname)) return;
    const now = Date.now();
    if (now < SURVEY_START || now > SURVEY_END) return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  const expand = () => {
    setOpen(true);
  };

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) {
      // If they completed it, popup sets the STORAGE_KEY via submit flow indirectly;
      // mark as engaged so the tab hides for the session either way.
      localStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {visible && !open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "50%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 28, delay: 0.05 }}
            whileHover={{ x: "0%" }}
            className="fixed top-1/2 right-0 -translate-y-1/2 z-[60] hidden sm:flex"
            style={{ filter: "drop-shadow(0 10px 30px rgba(201,160,80,0.25))" }}
          >
            <div className="relative flex items-stretch bg-black border border-[#C9A050]/40 rounded-l-2xl overflow-hidden">
              {/* gold animated edge */}
              <motion.span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A050] to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <button
                onClick={dismiss}
                aria-label="Dismiss research invitation"
                className="px-3 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors border-r border-[#C9A050]/20"
              >
                <X className="h-4 w-4" />
              </button>
              <button
                onClick={expand}
                className="flex items-center gap-3 pl-3 pr-5 py-4 text-left group"
              >
                <span className="h-9 w-9 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/40 flex items-center justify-center shrink-0">
                  <Microscope className="h-4 w-4 text-[#C9A050]" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A050]">Research</span>
                  <span className="text-white text-sm font-light leading-tight">
                    Please contribute
                  </span>
                  <span className="text-white/40 text-[11px] mt-0.5 group-hover:text-[#C9A050] transition-colors">
                    Slide to open →
                  </span>
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile compact pill */}
      <AnimatePresence>
        {visible && !open && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-4 right-3 z-[60] sm:hidden flex items-center bg-black border border-[#C9A050]/40 rounded-full shadow-lg"
          >
            <button onClick={dismiss} aria-label="Dismiss" className="pl-3 pr-2 py-2 text-white/60">
              <X className="h-4 w-4" />
            </button>
            <button onClick={expand} className="flex items-center gap-2 pr-4 py-2 text-white text-sm">
              <Microscope className="h-4 w-4 text-[#C9A050]" />
              <span className="font-light">Research — contribute</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ResearchSurveyPopup open={open} onOpenChange={handleOpenChange} />
    </>
  );
};

export default ResearchSurveyGate;
