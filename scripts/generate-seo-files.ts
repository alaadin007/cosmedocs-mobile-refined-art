#!/usr/bin/env tsx
/**
 * generate-seo-files.ts
 *
 * Build-time SEO maintenance script.
 *
 * For every canonical route defined in src/App.tsx:
 *   1. Ensures a trailing-slash <url> entry exists in the correct
 *      public/sitemap-*.xml sub-sitemap.
 *   2. Ensures a 301 redirect exists in public/_redirects mapping the
 *      non-trailing-slash version to the trailing-slash version
 *      (inserted BEFORE the final SPA catch-all).
 *   3. Bumps <lastmod> in public/sitemap.xml for any sub-sitemap that
 *      was modified.
 *
 * Rules:
 *   - APPEND ONLY. Never removes or reorders existing lines.
 *   - Idempotent. Existing entries are detected and skipped.
 *   - Skips: /admin/*, any *.php path, <Route> elements that render
 *     <Navigate>, and any path already covered by an existing redirect
 *     rule in _redirects (left-hand column match).
 *
 * Usage:
 *   tsx scripts/generate-seo-files.ts           # writes changes
 *   tsx scripts/generate-seo-files.ts --dry-run # prints diff, no writes
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APP_TSX = join(ROOT, 'src/App.tsx');
const PUBLIC = join(ROOT, 'public');
const REDIRECTS = join(PUBLIC, '_redirects');
const SITEMAP_INDEX = join(PUBLIC, 'sitemap.xml');
const KNOWN_ROUTES_OUT = join(ROOT, 'netlify/edge-functions/known-routes.generated.ts');

const DRY_RUN = process.argv.includes('--dry-run');
const TODAY = new Date().toISOString().slice(0, 10);

type Category =
  | 'treatments' | 'blog' | 'before-after' | 'locations' | 'pages'
  | 'ar' | 'de' | 'es' | 'fr' | 'ja' | 'zh';

const SUBSITEMAPS: Record<Category, string> = {
  treatments: 'sitemap-treatments.xml',
  blog: 'sitemap-blog.xml',
  'before-after': 'sitemap-before-after.xml',
  locations: 'sitemap-locations.xml',
  pages: 'sitemap-pages.xml',
  ar: 'sitemap-ar.xml',
  de: 'sitemap-de.xml',
  es: 'sitemap-es.xml',
  fr: 'sitemap-fr.xml',
  ja: 'sitemap-ja.xml',
  zh: 'sitemap-zh.xml',
};

const LANG_PREFIXES = new Set(['ar', 'de', 'es', 'fr', 'ja', 'zh']);
const LOCATIONS = ['birmingham', 'manchester', 'cardiff', 'delhi', 'karachi', 'barbados', 'dublin'];

/**
 * Deny-list: canonical routes excluded from ALL sitemaps.
 * Kept live and still get trailing-slash redirect normalisation,
 * but never advertised to crawlers. Match uses trailing-slash form.
 * Each of these pages ALSO carries <meta robots="noindex,nofollow">
 * on the component itself (sitemap exclusion alone is not enough).
 */
const NOINDEX_PATHS = new Set<string>([
  '/auth/',
  '/dashboard/',
  '/thank-you/',
  '/popup-offer/',
  '/testapp/',
  '/spin-to-win/',
  '/home/',
  '/journal/',
  '/campaign-ads/',
  '/experimental-treatment/',
]);

function categorize(path: string): Category {
  const seg = path.split('/').filter(Boolean)[0] ?? '';
  if (LANG_PREFIXES.has(seg)) return seg as Category;
  if (path.startsWith('/treatments/')) return 'treatments';
  if (path.startsWith('/blog/')) return 'blog';
  if (path.startsWith('/before-after')) return 'before-after';
  if (LOCATIONS.includes(seg)) return 'locations';
  return 'pages';
}

/** Canonical sitemap form: always trailing-slash (except root). */
function canonicalise(path: string): string {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : path + '/';
}

function priority(path: string): string {
  if (path === '/') return '1.0';
  if (path.startsWith('/treatments/')) return '0.8';
  if (path.startsWith('/blog/')) return '0.7';
  if (path.startsWith('/before-after')) return '0.7';
  return '0.6';
}

// ---------- 1. Parse routes from App.tsx ------------------------------------

function parseRoutes(): string[] {
  const src = readFileSync(APP_TSX, 'utf8');
  // Match <Route path="..." element={...}>
  // Skip when element is <Navigate ... /> (those are redirects, not pages)
  const routes = new Set<string>();
  const re = /<Route\s+path="([^"]+)"\s+element=\{([\s\S]*?)\}\s*\/?>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    const [, path, element] = m;
    if (/<Navigate\b/.test(element)) continue;
    if (path.includes(':')) continue;      // dynamic segments — skip
    if (path.includes('*')) continue;      // catch-alls
    if (!path.startsWith('/')) continue;
    if (path.startsWith('/admin')) continue;
    if (path.endsWith('.php')) continue;
    routes.add(path);
  }
  return [...routes].sort();
}

// ---------- 2. _redirects handling -----------------------------------------


/**
 * Build a list of existing redirect rules. Splat / dynamic rules are
 * excluded because we only reason about literal trailing-slash normalisation.
 * Status is captured so validation can distinguish 3xx redirects (which
 * chain) from 2xx rewrites (which do not — the client sees one hop).
 */
function loadRedirectRules(): Array<{ from: string; to: string; status: number; raw: string }> {
  const text = readFileSync(REDIRECTS, 'utf8');
  const rules: Array<{ from: string; to: string; status: number; raw: string }> = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    if (parts.length < 2) continue;
    const [from, to, statusTok] = parts;
    if (from.includes('*') || from.includes(':')) continue;
    const status = parseInt((statusTok ?? '301').replace('!', ''), 10) || 301;
    rules.push({ from, to, status, raw: line });
  }
  return rules;
}


/**
 * Trailing-slash normalisation. STRICT rules to avoid the 2026-07-15
 * production loop incident:
 *   - Only literal per-route entries. Never a splat.
 *   - Only emit `/foo -> /foo/ 301` where `/foo/` is the canonical route.
 *   - Skip if `/foo` is already the source of ANY existing rule.
 *   - Skip if `/foo/` is itself the source of another rule (would chain).
 *   - Skip if BOTH `/foo` and `/foo/` are defined as routes in App.tsx.
 *   - Skip file-extension paths and the root.
 */
function planRedirectAdditions(
  routes: string[],
  existingRules: Array<{ from: string; to: string }>,
): string[] {
  const leftSides = new Set(existingRules.map(r => r.from));
  const routeSet = new Set(routes);
  const additions: string[] = [];
  const seen = new Set<string>();

  for (const path of routes) {
    if (path === '/') continue;
    const canonical = path.endsWith('/') ? path : path + '/';
    const nonSlash = canonical.slice(0, -1);
    if (!nonSlash) continue;
    const lastSeg = nonSlash.split('/').pop() ?? '';
    if (lastSeg.includes('.')) continue;
    if (seen.has(nonSlash)) continue;
    seen.add(nonSlash);
    if (routeSet.has(nonSlash) && routeSet.has(canonical)) continue;
    if (leftSides.has(nonSlash)) continue;
    if (leftSides.has(canonical)) continue;
    if (nonSlash === canonical) continue;
    additions.push(`${nonSlash.padEnd(80)} ${canonical.padEnd(80)} 301`);
  }
  return additions;
}

function applyRedirectAdditions(text: string, additions: string[]): string {
  if (additions.length === 0) return text;
  const marker = '/*    /index.html   200';
  const idx = text.indexOf(marker);
  const block =
    `\n# =====================================================\n` +
    `# Auto-generated trailing-slash normalisation (${TODAY})\n` +
    `# Explicit per-route 301s only — NEVER a splat.\n` +
    `# Regenerated by scripts/generate-seo-files.ts\n` +
    `# =====================================================\n` +
    additions.join('\n') + '\n\n';
  if (idx === -1) return text.replace(/\n?$/, block);
  return text.slice(0, idx) + block + text.slice(idx);
}

/**
 * Sanity check: no self-redirects, no 2-hop chains among literal rules.
 * Throws on any violation so a precommit / CI run fails loudly.
 */
function validateRedirects(
  rules: Array<{ from: string; to: string; status: number; raw: string }>,
): void {
  const errors: string[] = [];
  // Only 3xx rules can chain — 2xx rewrites are terminal from the client's POV.
  const redirectRules = rules.filter(r => r.status >= 300 && r.status < 400);
  const redirectBySource = new Map(redirectRules.map(r => [r.from, r]));
  for (const r of redirectRules) {
    if (r.from === r.to) errors.push(`self-redirect: ${r.raw}`);
    if (r.to.startsWith('/') && redirectBySource.has(r.to)) {
      const next = redirectBySource.get(r.to)!;
      errors.push(`chain: "${r.from} -> ${r.to}" then "${next.from} -> ${next.to}"`);
    }
  }
  if (errors.length) {
    console.error('\n[generate-seo-files] REDIRECT VALIDATION FAILED:');
    for (const e of errors) console.error('  ' + e);
    throw new Error(`${errors.length} redirect rule violation(s)`);
  }
}

// ---------- 3. Sitemap handling --------------------------------------------

function loadSitemap(cat: Category): { path: string; text: string; urls: Set<string> } {
  const path = join(PUBLIC, SUBSITEMAPS[cat]);
  const text = existsSync(path) ? readFileSync(path, 'utf8') : baseSitemap();
  const urls = new Set<string>();
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) urls.add(m[1].trim());
  return { path, text, urls };
}

function baseSitemap(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>\n`;
}

function urlBlock(path: string): string {
  const loc = `https://www.cosmedocs.com${path}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority(path)}</priority>\n  </url>\n`;
}

function appendUrls(text: string, blocks: string[]): string {
  return text.replace(/<\/urlset>\s*$/, blocks.join('') + '</urlset>\n');
}

// ---------- 4. Main ---------------------------------------------------------

function main() {
  const routes = parseRoutes();
  const existingRules = loadRedirectRules();
  const redirectsText = readFileSync(REDIRECTS, 'utf8');

  // Group routes by category — always sitemap the trailing-slash canonical form.
  const byCat: Record<Category, Set<string>> = {
    treatments: new Set(), blog: new Set(), 'before-after': new Set(),
    locations: new Set(), pages: new Set(),
    ar: new Set(), de: new Set(), es: new Set(), fr: new Set(), ja: new Set(), zh: new Set(),
  };
  const noindexSkipped: string[] = [];
  for (const p of routes) {
    const canonical = canonicalise(p);
    if (NOINDEX_PATHS.has(canonical)) {
      noindexSkipped.push(canonical);
      continue;
    }
    byCat[categorize(canonical)].add(canonical);
  }

  const sitemapAdds: Record<Category, string[]> = {
    treatments: [], blog: [], 'before-after': [], locations: [], pages: [],
    ar: [], de: [], es: [], fr: [], ja: [], zh: [],
  };
  const changedSitemaps: Category[] = [];

  for (const cat of Object.keys(byCat) as Category[]) {
    const sm = loadSitemap(cat);
    const toAdd: string[] = [];
    for (const p of [...byCat[cat]].sort()) {
      const loc = `https://www.cosmedocs.com${p}`;
      if (sm.urls.has(loc)) continue;
      toAdd.push(urlBlock(p));
      sitemapAdds[cat].push(p);
    }
    if (toAdd.length === 0) continue;
    changedSitemaps.push(cat);
    if (!DRY_RUN) {
      writeFileSync(sm.path, appendUrls(sm.text, toAdd));
    }
  }

  const redirectAdds = planRedirectAdditions(routes, existingRules);
  if (redirectAdds.length && !DRY_RUN) {
    writeFileSync(REDIRECTS, applyRedirectAdditions(redirectsText, redirectAdds));
  }

  // Emit KNOWN_ROUTES set (trailing-slash canonical form) for the
  // inject-meta edge function to use for 301 normalisation. Only routes
  // literally defined in App.tsx qualify — undefined paths (e.g. /wishlist)
  // must fall through untouched to preserve the Prerender.io behaviour.
  const knownRoutes = [...new Set(routes.map(canonicalise))].sort();
  const knownRoutesFile =
    `// AUTO-GENERATED by scripts/generate-seo-files.ts — do not edit.\n` +
    `// Trailing-slash canonical routes parsed from src/App.tsx.\n` +
    `export const KNOWN_ROUTES: Set<string> = new Set([\n` +
    knownRoutes.map(r => `  ${JSON.stringify(r)},`).join('\n') +
    `\n]);\n`;
  if (!DRY_RUN) writeFileSync(KNOWN_ROUTES_OUT, knownRoutesFile);

  // Validate the (post-write) redirects file — no self-redirects, no chains.
  const finalRules = loadRedirectRules();
  validateRedirects(finalRules);

  // Bump lastmod in sitemap.xml for changed sub-sitemaps,
  // or insert a new <sitemap> block if the sub-sitemap isn't registered yet.
  const indexInserted: string[] = [];
  if (changedSitemaps.length) {
    let indexText = readFileSync(SITEMAP_INDEX, 'utf8');
    for (const cat of changedSitemaps) {
      const fname = SUBSITEMAPS[cat];
      const bumpRe = new RegExp(`(<loc>[^<]*${fname}</loc>\\s*<lastmod>)[^<]+(</lastmod>)`);
      if (bumpRe.test(indexText)) {
        indexText = indexText.replace(bumpRe, `$1${TODAY}$2`);
      } else {
        // Not registered yet — append a new <sitemap> block before </sitemapindex>.
        const block =
          `  <sitemap>\n` +
          `    <loc>https://www.cosmedocs.com/${fname}</loc>\n` +
          `    <lastmod>${TODAY}</lastmod>\n` +
          `  </sitemap>\n`;
        indexText = indexText.replace(/<\/sitemapindex>\s*$/, block + '</sitemapindex>\n');
        indexInserted.push(fname);
      }
    }
    if (!DRY_RUN) writeFileSync(SITEMAP_INDEX, indexText);
  }


  // ---------- Summary ------------------------------------------------------
  const totalSitemap = Object.values(sitemapAdds).reduce((n, a) => n + a.length, 0);
  console.log(`\n[generate-seo-files] ${DRY_RUN ? 'DRY RUN — no files written' : 'wrote changes'}`);
  console.log(`  Routes parsed from App.tsx: ${routes.length}`);
  console.log(`  Noindex routes skipped from sitemaps: ${noindexSkipped.length}`);
  for (const p of noindexSkipped) console.log(`    - ${p}`);
  console.log(`  Sitemap entries added:      ${totalSitemap}`);
  for (const cat of Object.keys(sitemapAdds) as Category[]) {
    if (sitemapAdds[cat].length === 0) continue;
    console.log(`    ${SUBSITEMAPS[cat]} (+${sitemapAdds[cat].length}):`);
    for (const p of sitemapAdds[cat]) console.log(`      + ${p}`);
  }
  console.log(`  Index sub-sitemap blocks inserted: ${indexInserted.length}`);
  for (const f of indexInserted) console.log(`    + ${f}`);
  console.log(`  _redirects rules added:     ${redirectAdds.length}`);

  for (const r of redirectAdds) console.log(`    + ${r.replace(/\s+/g, ' ')}`);
  if (totalSitemap === 0 && redirectAdds.length === 0) {
    console.log('  Nothing to do — sitemaps and redirects are up to date.\n');
  } else {
    console.log('');
  }
}

main();
