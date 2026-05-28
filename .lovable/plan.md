## 1. Fix the unreadable black gallery box (Masseter page)

In `src/pages/MasseterBotox.tsx` (line 602–604) the "View female and male cases in the complete gallery" copy sits on a `bg-[#0a0a0a]` tile with `text-white/70` at only 13px — on a light surrounding card it visually disappears.

Fix:
- Bump text to `text-white` (full opacity), size to `text-[14px]` / `font-medium`, add a small gold `Sparkles` or `Images` icon above.
- Make the tile a **link** to `/before-after/botox/masseter/` so it is tappable (currently it's a dead div), with subtle gold border `border border-[#C9A050]/40` and hover lift.

No other content changes on the desktop/main page.

## 2. New `/m2` — iOS-app-style Masseter mobile page

A brand-new route, **mobile only**, that re-presents *every* section of `MasseterBotox.tsx` as a single-screen "app shell" with deep-link sections. Nothing from the source page is dropped — only re-organised.

### Route & file
- Route: `/m2` (staging) added in `src/App.tsx`.
- File: `src/pages/MasseterM2.tsx`.
- Desktop visitors see a polite "Open on your phone" notice + QR/link — page is designed exclusively for ≤768px.
- Hides global Header/Footer for a true app feel (wrapper class `app-shell` + conditional in `App.tsx` based on route, same pattern already used for other minimal pages).

### Visual concept — "Face Compass"
A single hero canvas with a **centred portrait of a sculpted lower face** (AI-generated, dark luxury, gold rim-light, on `#0a0a0a`). Around it, **8 circular gold-rimmed icon nodes** orbit the face like an iOS home screen / Apple Watch app launcher. Each node = a section of the original page. Tapping a node slides up a full-screen sheet (iOS modal style) containing that section's content; a chevron-down or swipe dismisses back to the compass.

```text
        ┌───────────────────────────┐
        │   COSMEDOCS · Masseter    │  ← slim status bar (gold dot, time)
        │                           │
        │   ◐  ◐         ◐  ◐       │  ← orbiting nodes
        │      ╲   ╱               │
        │       FACE               │  ← centred portrait, gold ring
        │      ╱   ╲               │
        │   ◐  ◐         ◐  ◐       │
        │                           │
        │  ●●●●●● segmented dots   │  ← progress / "currently viewing"
        │  [ Book consultation ]    │  ← sticky gold CTA pill
        └───────────────────────────┘
```

### Nodes (sections mapped from MasseterBotox.tsx)
1. **Overview** — hero intro + "At a glance" stats (duration, lasts, recovery).
2. **Why** — cosmetic + medical dual-intent explainer.
3. **Bruxism** — clinical/medical framing (square-jaw, grinding, headaches).
4. **Procedure** — `TreatmentStepper` steps, condensed.
5. **Results** — timeline accordion (week 1 / 2 / 4–6 months).
6. **Before & After** — swipeable gallery of real patient photos (links into `/before-after/botox/masseter/`).
7. **Pricing** — £350 + complex cases card, "includes consultation".
8. **Reviews** — Amara T + carousel of testimonials.
9. **FAQ** — accordion.
10. **Book** — sticky always-visible gold CTA opening Acuity link.

(10 nodes — render as 4 around top of face, 4 around bottom, plus Overview pinned top-centre and Book as sticky bar.)

### Interaction & motion (Framer Motion)
- Nodes fade + scale in on mount with a 60ms stagger, gentle float loop.
- Tap → node morphs into the sheet's header dot (`layoutId`), sheet slides up from bottom with spring (damping 28, stiffness 320), background portrait blurs + dims.
- Swipe down or tap chevron → reverse animation back to compass.
- Light haptic-style scale press (`whileTap: 0.94`).
- Section progress dots highlight which sheet was last viewed.

### Style tokens (locked to brand)
- Background `#0a0a0a` with subtle radial gold glow behind portrait.
- Gold `#C9A050`, rings `border-[#C9A050]/60`, sheet surface `bg-[#111]/95 backdrop-blur-xl`.
- Typography: existing site stack; section titles in serif display, body in sans.
- System-font feel: rounded-3xl tiles, generous safe-area padding (`env(safe-area-inset-*)`).

### Components (new, all in `src/pages/m2/`)
- `MasseterM2.tsx` — page shell + state for active sheet.
- `FaceCompass.tsx` — portrait + orbiting nodes (uses CSS transforms for radial placement).
- `AppSheet.tsx` — reusable bottom-sheet with drag-to-dismiss.
- `sections/` — one file per section pulling copy/data from the same constants currently inline in `MasseterBotox.tsx` (extract to `src/data/masseterContent.ts` so both pages share one source of truth; no copy loss).

### Assets
- One new AI-generated portrait `src/assets/m2-masseter-portrait.jpg` (1024×1280, dark luxury, no text).
- Reuses existing before/after images already imported in MasseterBotox.

### SEO / safety
- `<meta name="robots" content="noindex">` on `/m2` while staging.
- Canonical points to `/treatments/botox/masseter/` so it doesn't compete.
- No sitemap entry.

### Out of scope
- No changes to the main masseter page beyond the black-box readability fix.
- No backend, no new data tables, no language variants.

## Files touched
- `src/pages/MasseterBotox.tsx` — readability fix only (lines 602–604).
- `src/App.tsx` — register `/m2` route, suppress global chrome for it.
- `src/data/masseterContent.ts` — new, shared content constants.
- `src/pages/MasseterM2.tsx` + `src/pages/m2/FaceCompass.tsx`, `AppSheet.tsx`, `sections/*.tsx` — new.
- `src/assets/m2-masseter-portrait.jpg` — new generated asset.
