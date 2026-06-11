import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Auto-fills Open Graph + Twitter Card tags ONLY when the page hasn't
 * already rendered its own via react-helmet-async.
 *
 * Critical rules to prevent duplicate-meta SEO damage:
 *   1. Wait for Helmet to flush (MutationObserver settles on <head>) before
 *      deciding what to inject.
 *   2. Never inject a tag that already exists on the page from another source
 *      (Helmet tags carry data-rh="true"; other static tags simply exist).
 *   3. On every route change, REMOVE every previously auto-injected tag
 *      (data-social-auto="true") before re-evaluating — otherwise the previous
 *      route's auto tags ship alongside the new route's Helmet tags.
 *   4. Also remove any duplicate <meta name="description"> that the prerender
 *      snapshot may have captured before Helmet ran.
 */
const DEFAULT_IMAGE = "https://www.cosmedocs.com/og/cosmedocs-default.jpg";
const SITE_NAME = "Cosmedocs";
const TWITTER_HANDLE = "@cosmedocs";

type Tag = { kind: "name" | "property"; key: string; value: string };

function removeAllAutoTags() {
  document.head
    .querySelectorAll('[data-social-auto="true"]')
    .forEach((el) => el.parentNode?.removeChild(el));
}

function dedupeByAttribute(kind: "name" | "property", key: string) {
  // Keep the Helmet (data-rh) copy if present, otherwise keep the first.
  const all = Array.from(
    document.head.querySelectorAll<HTMLMetaElement>(`meta[${kind}="${key}"]`),
  );
  if (all.length <= 1) return;
  const helmet = all.find((el) => el.getAttribute("data-rh") === "true");
  const keep = helmet ?? all[0];
  all.forEach((el) => {
    if (el !== keep) el.parentNode?.removeChild(el);
  });
}

function dedupeCanonical() {
  const all = Array.from(
    document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'),
  );
  if (all.length <= 1) return;
  const helmet = all.find((el) => el.getAttribute("data-rh") === "true");
  const keep = helmet ?? all[0];
  all.forEach((el) => {
    if (el !== keep) el.parentNode?.removeChild(el);
  });
}

function pageHasOwn(kind: "name" | "property", key: string) {
  return !!document.head.querySelector(
    `meta[${kind}="${key}"]:not([data-social-auto="true"])`,
  );
}

function createTag({ kind, key, value }: Tag) {
  const el = document.createElement("meta");
  el.setAttribute(kind, key);
  el.setAttribute("data-social-auto", "true");
  el.setAttribute("content", value);
  document.head.appendChild(el);
}

function pickImageFromDOM(): string {
  const explicit = document.head
    .querySelector<HTMLMetaElement>('meta[property="og:image"]:not([data-social-auto="true"])')
    ?.content;
  if (explicit) return explicit;

  const img = document.querySelector<HTMLImageElement>(
    "main img[src]:not([aria-hidden='true'])",
  );
  if (img?.src && /^https?:/.test(img.src)) return img.src;
  return DEFAULT_IMAGE;
}

function syncTags(pathname: string) {
  // 1. Wipe prior auto tags so we start clean for this route.
  removeAllAutoTags();

  // 2. Collapse any duplicate Helmet-vs-prerender meta tags.
  ["description", "twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:site"].forEach((k) =>
    dedupeByAttribute("name", k),
  );
  ["og:title", "og:description", "og:url", "og:type", "og:image", "og:site_name", "og:locale"].forEach((k) =>
    dedupeByAttribute("property", k),
  );
  dedupeCanonical();

  // 3. Read what the page now declares.
  const title = document.title || SITE_NAME;
  const description =
    document.head
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.content ?? "";
  const canonical =
    document.head
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.href ?? `https://www.cosmedocs.com${pathname}`;
  const image = pickImageFromDOM();

  // 4. Only fill gaps. Never duplicate a Helmet-owned tag.
  const tags: Tag[] = [];

  if (!pageHasOwn("property", "og:type")) tags.push({ kind: "property", key: "og:type", value: "website" });
  if (!pageHasOwn("property", "og:site_name")) tags.push({ kind: "property", key: "og:site_name", value: SITE_NAME });
  if (!pageHasOwn("property", "og:locale")) tags.push({ kind: "property", key: "og:locale", value: "en_GB" });
  if (!pageHasOwn("property", "og:title")) tags.push({ kind: "property", key: "og:title", value: title });
  if (!pageHasOwn("property", "og:description") && description)
    tags.push({ kind: "property", key: "og:description", value: description });
  if (!pageHasOwn("property", "og:url")) tags.push({ kind: "property", key: "og:url", value: canonical });
  if (!pageHasOwn("property", "og:image")) {
    tags.push({ kind: "property", key: "og:image", value: image });
    tags.push({ kind: "property", key: "og:image:alt", value: title });
  }

  if (!pageHasOwn("name", "twitter:card"))
    tags.push({ kind: "name", key: "twitter:card", value: "summary_large_image" });
  if (!pageHasOwn("name", "twitter:site"))
    tags.push({ kind: "name", key: "twitter:site", value: TWITTER_HANDLE });
  if (!pageHasOwn("name", "twitter:title")) tags.push({ kind: "name", key: "twitter:title", value: title });
  if (!pageHasOwn("name", "twitter:description") && description)
    tags.push({ kind: "name", key: "twitter:description", value: description });
  if (!pageHasOwn("name", "twitter:image"))
    tags.push({ kind: "name", key: "twitter:image", value: image });

  tags.forEach(createTag);
}

export default function SocialMetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    let settleTimer: number | undefined;
    let ran = false;

    const schedule = () => {
      if (settleTimer) window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        if (ran) return;
        ran = true;
        observer.disconnect();
        syncTags(pathname);
      }, 120);
    };

    // Watch <head> until Helmet stops mutating, then sync once.
    const observer = new MutationObserver(schedule);
    observer.observe(document.head, { childList: true, subtree: true });
    schedule();

    // Safety net — guarantee one final sync after 500ms regardless of mutations.
    const safety = window.setTimeout(() => {
      if (ran) return;
      ran = true;
      observer.disconnect();
      syncTags(pathname);
    }, 500);

    return () => {
      if (settleTimer) window.clearTimeout(settleTimer);
      window.clearTimeout(safety);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
