import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResearchSurveyPopup from "./ResearchSurveyPopup";

/**
 * The visible right-edge "Research" tab has been merged into the unified
 * right-side rail rendered by FloatingChatBot. This component now only
 * mounts the popup and listens for a global `open-research-survey` event.
 */
const ResearchSurveyGate = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const suppressed = /^\/(admin|auth|dashboard|spin-to-win|popup-offer|thank-you|research)/.test(pathname);

  useEffect(() => {
    if (suppressed) return;
    const handler = () => setOpen(true);
    window.addEventListener("open-research-survey", handler);
    return () => window.removeEventListener("open-research-survey", handler);
  }, [suppressed]);

  if (suppressed) return null;

  return <ResearchSurveyPopup open={open} onOpenChange={setOpen} />;
};

export default ResearchSurveyGate;

