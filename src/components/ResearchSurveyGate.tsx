import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResearchSurveyPopup from "./ResearchSurveyPopup";

const STORAGE_KEY = "cosmedocs_research_survey_v1";
// Run for one day from this start time (set when first deployed)
const SURVEY_START = new Date("2026-05-22T00:00:00Z").getTime();
const SURVEY_END = SURVEY_START + 24 * 60 * 60 * 1000;
const DELAY_MS = 9000; // gentle 9s delay

const ResearchSurveyGate = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip on admin/auth/utility pages
    if (/^\/(admin|auth|dashboard|spin-to-win|popup-offer|thank-you)/.test(pathname)) return;

    const now = Date.now();
    if (now < SURVEY_START || now > SURVEY_END) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const t = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  return <ResearchSurveyPopup open={open} onOpenChange={setOpen} />;
};

export default ResearchSurveyGate;
