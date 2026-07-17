/**
 * Netlify Image CDN helpers.
 * Wraps any same-origin image URL through /.netlify/images so we can
 * serve resized WebP variants and cut mobile payload dramatically.
 *
 * In local dev (no Netlify proxy) we fall back to the original src.
 */

const isProd = typeof window !== "undefined" && window.location.hostname.endsWith("cosmedocs.com");

export function cdnSrc(src: string, width: number, quality = 70): string {
  if (!src) return src;
  // Data URIs / external URLs — pass through
  if (src.startsWith("data:") || /^https?:\/\//i.test(src)) return src;
  if (!isProd) return src;
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    fm: "webp",
    q: String(quality),
    fit: "cover",
  });
  return `/.netlify/images?${params.toString()}`;
}

/** Returns a responsive srcset string for the given widths. */
export function cdnSrcSet(src: string, widths: number[] = [480, 768, 1200, 1600], quality = 70): string {
  if (!src || !isProd) return "";
  if (src.startsWith("data:") || /^https?:\/\//i.test(src)) return "";
  return widths
    .map((w) => `${cdnSrc(src, w, quality)} ${w}w`)
    .join(", ");
}
