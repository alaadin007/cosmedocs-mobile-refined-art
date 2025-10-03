import { useEffect, useState } from "react";

const POPUP_SHOWN_KEY = "cosmedocs_raffle_shown";
const POPUP_DELAY = 3000; // 3 seconds delay

export const useFirstVisitPopup = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const hasShownPopup = localStorage.getItem(POPUP_SHOWN_KEY);
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShouldShow(true);
        localStorage.setItem(POPUP_SHOWN_KEY, "true");
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const resetPopup = () => {
    localStorage.removeItem(POPUP_SHOWN_KEY);
  };

  return { shouldShow, resetPopup, setShow: setShouldShow };
};
