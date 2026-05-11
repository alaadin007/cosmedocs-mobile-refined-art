import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Disable browser's automatic scroll restoration so it doesn't fight us
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // If a hash anchor is present, let the browser handle it after paint
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
      return;
    }

    // Force-scroll on next frame so it runs *after* the new route paints
    // (covers lazy-loaded Suspense routes that mount taller than viewport)
    const scroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scroll();
    requestAnimationFrame(scroll);
    // Final safety pass once Suspense content has likely settled
    const t = setTimeout(scroll, 80);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
