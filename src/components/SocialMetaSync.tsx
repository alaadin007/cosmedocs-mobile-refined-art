import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Auto-injects Open Graph + Twitter Card tags into <head> on every route change.
 *
 * Reads the page's existing <title> and <meta name="description"> (set by each
 * page via react-helmet-async) and mirrors them into og:* / twitter:* tags so
 * every treatment card target gets a rich social preview without per-page work.
 *
 * Pages can override any field by rendering their own og:/twitter: meta tags
 * with data-rh="true" inside Helmet — those win because they're added after
 * we run on render, and we only touch tags marked data-social-auto="true".
 */
const DEFAULT_IMAGE = "https://www.cosmedocs.com/og/cosmedocs-default.jpg";
const SITE_NAME = "Cosmedocs";
const TWITTER_HANDLE = "@cosmedocs";

type Tag = { kind: "name" | "property"; key: string; value: string };

function setOrCreate({ kind, key, value }: Tag) {
  const selector = `meta[${kind}="${key}"][data-social-auto="true"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(kind, key);
    el.setAttribute("data-social-auto", "true");
    document.head.appendChild(el);
  }
  if (el.getAttribute("content") !== value) el.setAttribute("content", value);
}

function pageHasOwn(kind: "name" | "property", key: string) {
  // Detect a page-managed override (added by Helmet, not by us)
  return !!document.head.querySelector(
    `meta[${kind}="${key}"]:not([data-social-auto="true"])`
  );
}

function pickImageFromDOM(): string {
  // Prefer an explicit hero/og image rendered by the page
  const explicit =
    document.head
      .querySelector<HTMLMetaElement>('meta[property="og:image"]:not([data-social-auto="true"])')
      ?.content;
  if (explicit) return explicit;

  // Fall back to the first content image on the page (above-the-fold-ish)
  const img = document.querySelector<HTMLImageElement>(
    "main img[src]:not([aria-hidden='true'])"
  );
  if (img?.src && /^https?:/.test(img.src)) return img.src;

  return DEFAULT_IMAGE;
}

export default function SocialMetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait one tick so Helmet has flushed the page's own <title> / description
    const id = window.setTimeout(() => {
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

      tags.forEach(setOrCreate);
    }, 50);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
