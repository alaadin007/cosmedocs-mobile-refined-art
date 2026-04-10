

# Multilingual Architecture: SEO-First i18n for CosmeDocs

## Overview

Build a proper multilingual routing system with real, indexable translated pages for Arabic, French, and Spanish (with English as master). Start with Tier 1 priority pages (~10-15 per language), implement hreflang, language selector, and a data-driven translation system that auto-inherits structural changes from English master pages.

## Architecture

```text
URL Structure (subfolder model):
/                          → English homepage (default, no prefix)
/ar/                       → Arabic homepage
/fr/                       → French homepage  
/es/                       → Spanish homepage

/treatments/botox/         → English Botox
/ar/treatments/botox/      → Arabic Botox
/fr/traitements/botox/     → French Botox
/es/tratamientos/botox/    → Spanish Botox
```

## Tier 1 Pages (Phase 1 — launch these first)

Per language: ~12 pages
1. Homepage
2. /treatments/ (hub)
3. /treatments/botox/
4. /treatments/dermal-fillers/
5. /treatments/lip-fillers/
6. /treatments/jawline-filler/
7. /treatments/chin-filler/
8. /treatments/tear-trough-filler/
9. /treatments/skin-rejuvenation/
10. /prices/
11. /contact/
12. /about/

## Technical Plan

### 1. Translation data system (`src/i18n/`)

Create a structured translation layer:

- **`src/i18n/types.ts`** — TypeScript interface for page translations (title, meta, sections, headings, body blocks, FAQ items)
- **`src/i18n/config.ts`** — Language config: supported locales, slug mappings per language (e.g. `treatments` → `traitements` in French), RTL flags
- **`src/i18n/translations/ar/`** — Arabic translation files per page
- **`src/i18n/translations/fr/`** — French translation files per page
- **`src/i18n/translations/es/`** — Spanish translation files per page

Each translation file exports structured content that mirrors the English page's sections. When English adds a new section, the translation file can fall back to English until translated.

### 2. Language context provider (`src/i18n/LanguageContext.tsx`)

- React context providing current language, available languages, and switch function
- Persists choice in localStorage
- Does NOT auto-redirect based on browser language (per Google guidance)
- Provides `useLanguage()` hook and `useTranslation(pageKey)` hook

### 3. Translated page wrapper component

- **`src/components/TranslatedPage.tsx`** — wraps English page components, injecting translated content via context
- Handles: translated Helmet metadata, hreflang tags, self-canonical, lang attribute on `<html>`, RTL support for Arabic

### 4. Routing changes (`src/App.tsx`)

Add language-prefixed route groups:

```text
/:lang/                    → Translated homepage
/:lang/treatments/botox/   → Translated Botox (slug mapped per language)
/:lang/traitements/botox/  → French alternate slug
etc.
```

A `LanguageRouter` wrapper component will:
- Parse the `/:lang` param
- Set the language context
- Map translated slugs back to the correct English page component
- Render the page with translated content overlay

### 5. Hreflang implementation

Every translated page gets reciprocal hreflang tags in `<head>`:

```html
<link rel="alternate" hreflang="en-gb" href="https://www.cosmedocs.com/treatments/botox/" />
<link rel="alternate" hreflang="ar" href="https://www.cosmedocs.com/ar/treatments/botox/" />
<link rel="alternate" hreflang="fr" href="https://www.cosmedocs.com/fr/traitements/botox/" />
<link rel="alternate" hreflang="es" href="https://www.cosmedocs.com/es/tratamientos/botox/" />
<link rel="alternate" hreflang="x-default" href="https://www.cosmedocs.com/treatments/botox/" />
```

English pages also get these hreflang tags added via a shared utility.

### 6. Language selector component

- Visible in header and footer
- Shows language names in their native script: English, العربية, Français, Español
- Links to the equivalent page in the selected language
- Stores preference in localStorage but never force-redirects
- Optional "View this page in Arabic?" suggestion bar (non-blocking)

### 7. Navigation & breadcrumbs translation

- Header navigation items translated per language
- Breadcrumb labels translated
- Footer links translated
- Internal links within translated pages point to same-language equivalents

### 8. Sitemap updates

- Add `sitemap-ar.xml`, `sitemap-fr.xml`, `sitemap-es.xml`
- Each contains only published translated URLs
- Add to sitemap index
- Include `xhtml:link` hreflang annotations in all sitemaps

### 9. Auto-sync mechanism

When English master pages change (e.g. new treatment added to hub):
- Translation files use a `lastSyncedVersion` field
- A dev-time script flags stale translations
- Untranslated sections fall back to English content with a `[needs translation]` marker in dev mode
- Structural elements (treatment lists, pricing items) can be shared from English data and only labels/descriptions need translation

### 10. Migrate existing international pages

The current `/arabic-patients`, `/french-patients` etc. become 301 redirects to the new `/ar/`, `/fr/` homepages. Their existing translated data files feed into the new system.

## Files to create/modify

| File | Action |
|---|---|
| `src/i18n/config.ts` | Create — language config, slug maps |
| `src/i18n/types.ts` | Create — translation interfaces |
| `src/i18n/LanguageContext.tsx` | Create — context + hooks |
| `src/i18n/translations/ar/*.ts` | Create — Arabic Tier 1 pages |
| `src/i18n/translations/fr/*.ts` | Create — French Tier 1 pages |
| `src/i18n/translations/es/*.ts` | Create — Spanish Tier 1 pages |
| `src/components/TranslatedPage.tsx` | Create — wrapper with hreflang + meta |
| `src/components/LanguageSelector.tsx` | Create — header/footer selector |
| `src/components/Header.tsx` | Modify — add language selector |
| `src/components/Footer.tsx` | Modify — add language selector |
| `src/components/Layout.tsx` | Modify — language context provider |
| `src/App.tsx` | Modify — add `/:lang/*` route group |
| `src/utils/seo.ts` | Modify — hreflang generation utility |
| `public/sitemap.xml` | Modify — add language sitemaps |
| `public/_redirects` | Modify — redirect old international pages |

## What this does NOT do (by design)

- Does not translate the entire site — only Tier 1 pages
- Does not auto-redirect based on browser language
- Does not use a JS translation widget as the SEO layer
- Does not create thin/duplicate content — each page has unique translated copy
- Does not translate slugs that would break if CMS can't handle them cleanly (keeps English slugs as fallback where needed)

## Rollout order

1. Build i18n infrastructure (config, context, types)
2. Create Arabic translations for Tier 1 (leveraging existing `arabicPatientData.ts`)
3. Create French translations for Tier 1 (leveraging existing `frenchPatientData.ts`)
4. Create Spanish translations for Tier 1 (new)
5. Add routing + hreflang + language selector
6. Migrate old `/arabic-patients` etc. to redirects
7. Update sitemaps
8. Test and verify

