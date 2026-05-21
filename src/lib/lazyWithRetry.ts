import { lazy, ComponentType } from "react";

/**
 * Wrap React.lazy with automatic recovery from stale chunk errors after a
 * redeploy. When the dynamic import fails (most commonly "Failed to fetch
 * dynamically imported module" because the hashed chunk no longer exists
 * on the server), we force a one-time hard reload so the browser picks up
 * the new index.html and the new chunk filenames.
 *
 * A sessionStorage flag prevents infinite reload loops if the failure is
 * caused by something other than a stale deploy.
 */
const RELOAD_KEY = "cosmedocs:chunk-reload-attempted";

export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      // Successful load — clear the reload flag for future failures.
      try { window.sessionStorage.removeItem(RELOAD_KEY); } catch {}
      return mod;
    } catch (err: any) {
      const message = String(err?.message || err || "");
      const isChunkError =
        /Loading chunk|Loading CSS chunk|dynamically imported module|Importing a module script failed|ChunkLoadError/i.test(
          message
        );

      if (isChunkError && typeof window !== "undefined") {
        let alreadyTried = false;
        try {
          alreadyTried = window.sessionStorage.getItem(RELOAD_KEY) === "1";
        } catch {}

        if (!alreadyTried) {
          try { window.sessionStorage.setItem(RELOAD_KEY, "1"); } catch {}
          // Hard reload — picks up the latest index.html and new chunk hashes.
          window.location.reload();
          // Return a never-resolving promise so React keeps the Suspense
          // fallback visible until the reload completes.
          return new Promise(() => {}) as Promise<{ default: T }>;
        }
      }

      throw err;
    }
  });
}
