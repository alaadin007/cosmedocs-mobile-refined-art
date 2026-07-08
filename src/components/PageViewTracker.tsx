import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

/**
 * Global page-view logger. Fires on every route change.
 * Skips admin/auth paths and repeated logs of the same path.
 */
const SKIP_PREFIXES = ["/admin", "/auth", "/dashboard"];

export default function PageViewTracker() {
  const { pathname } = useLocation();
  const lastLogged = useRef<string>("");

  useEffect(() => {
    const path = (pathname || "/").replace(/\/+$/, "") || "/";
    if (lastLogged.current === path) return;
    if (SKIP_PREFIXES.some((p) => path === p || path.startsWith(p + "/"))) return;
    lastLogged.current = path;

    const referrer = typeof document !== "undefined" ? document.referrer || null : null;
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : null;

    (supabase as any)
      .from("page_views")
      .insert({ path, referrer, user_agent: userAgent })
      .then(() => {}, () => {});
  }, [pathname]);

  return null;
}
