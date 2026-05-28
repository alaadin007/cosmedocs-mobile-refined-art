## What's wrong now

Looking at your screenshot, two alignment issues on `/m2`:

1. **Portrait sits off-centre** — it's pushed down-right and overlaps the Procedure / Stethoscope nodes, while Reviews/FAQ float in empty space on the left.
2. **Right-side nodes get clipped** — "Procedure" and the stethoscope icon are cut by the screen edge because the orbit radius (`r = 46%`) is too large for a 92vw container on a 402px viewport.

Root cause: the compass container is `min(92vw, 420px)` but nodes are absolutely positioned at 46% from centre with a 48px icon + label, so the icon's right edge lands beyond the container on narrow phones. The portrait is fine geometrically — it just *looks* off because the clipped right nodes break visual symmetry.

## Fix 1 — Alignment

- Shrink container to `min(86vw, 380px)` and **reduce orbit radius** from `46%` → `41%` so all 9 nodes sit fully inside the visible canvas with breathing room.
- Slightly enlarge portrait from `52%` → `56%` so it reads as the clear centre of gravity.
- Add `overflow-visible` safety + ensure labels use `whitespace-nowrap` with `text-align:center` and a fixed `min-width` so "BEFORE/AFTER" and "PROCEDURE" don't wrap or shove.
- Pull the whole compass up slightly (`mt-2` → `mt-1`) and tighten title spacing so nothing collides with the sticky Book CTA at the bottom on 716px-tall viewports.

## Fix 2 — Glide through sections (Next / Previous)

Add a **persistent navigation bar inside every sheet** so once a user opens any section they can swipe through all 9 without returning to the compass.

Inside `Sheet.tsx`, above the Book CTA footer, add a thin row:

```
[ ‹ Previous · Why ]              [ Procedure · Next › ]
```

- Both buttons are gold-outlined pills, full-width split 50/50.
- Tapping advances `active` to the next/prev `SectionId` in the `NODES` array (wrap-around: FAQ → Overview, Overview → FAQ).
- The sheet content **cross-fades + slides horizontally** (40px) using framer-motion `AnimatePresence mode="wait"` keyed on `id`, so it feels like swiping through app cards rather than closing/reopening.
- Also enable **horizontal drag-to-next** on the sheet body: `drag="x"`, threshold 80px → triggers same next/prev handler. Vertical drag-to-close stays as-is.
- Keep the existing top-right `X` so users can still return to the compass at any time.
- A tiny **progress dots row** (9 dots, current in gold) sits just under the sheet header so users know where they are in the journey.

### State change

Lift the next/prev handlers into `MasseterM2` (parent owns `active`), pass `onNext` / `onPrev` / `index` / `total` into `Sheet`. No new files.

## Files touched

- `src/pages/MasseterM2.tsx` — only file. Container sizing, radius, portrait size, label styling, plus the Sheet nav bar, progress dots, horizontal swipe, and AnimatePresence wrapper around `SheetBody`.

No content changes, no SEO impact, still `/m2` mobile-only.