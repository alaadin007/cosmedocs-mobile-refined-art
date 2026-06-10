import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Records a single page-view row for the given path on mount.
 * Anonymous + safe — RLS allows insert from anon; read is admin-only.
 */
export function usePageView(path: string) {
  useEffect(() => {
    // Skip in obvious non-production / preview environments? Keep simple: always log.
    const referrer = typeof document !== "undefined" ? document.referrer || null : null;
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : null;

    // Fire and forget
    supabase
      .from("page_views")
      .insert({ path, referrer, user_agent: userAgent })
      .then(() => {}, () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
