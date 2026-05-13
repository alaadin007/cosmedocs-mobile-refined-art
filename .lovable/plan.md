## Goal

Rebuild **/concerns** to look and feel exactly like the Home3 page sections in the screenshot: dark luxury theme, gold accents, one horizontal-scrolling Apple-style card row per concern indication, with deeper SEO content hidden behind expandable sections / visually-suppressed prose blocks.

## What changes

### 1. Extract shared card primitives (refactor)
Currently `Row`, `FlipCard`, `TreatmentCard`, `TileCard`, `CardWatermark`, plus `Category` / `SubCard` types live inside `src/pages/Home3.tsx`. Move them into a new module so `/concerns` (and any future page) can reuse the exact same look:

```
src/components/cards/AppleCardRow.tsx       (Row + types)
src/components/cards/TreatmentCard.tsx      (TreatmentCard + FlipCard + TileCard + watermark)
src/components/cards/types.ts               (Category, SubCard, FlipSpec)
```

Home3.tsx is updated to import from these modules. No visual change to the homepage.

### 2. New /concerns page architecture

`src/pages/ConcernsHub.tsx` is rewritten as a Home3-style page:

```text
[ Hero ]           Black / gold. "Concerns. Read clinically."
[ Row 1 ]          Facial Ageing & Volume Loss   (6–7 cards)
[ Row 2 ]          Lines & Wrinkles              (5–6 cards)
[ Row 3 ]          Skin Texture & Tone           (5–6 cards)
[ Row 4 ]          Pigmentation & Melasma        (5 cards)
[ Row 5 ]          Acne & Congestion             (5 cards)
[ Row 6 ]          Eczema & Sensitive Skin       (4 cards)
[ Row 7 ]          Hair Loss / Thinning          (4 cards)
[ Row 8 ]          Skin Laxity & Sagging         (5 cards)
[ Hidden SEO ]     ~600 words per concern in <ExpandableSection> + visually-condensed prose
[ FAQ JSON-LD ]    expanded MedicalCondition + FAQPage schema
[ Sidebar / CTA ]  consultation block (kept)
```

Each card maps to an existing treatment route already in `concernsData`. Two "feature" cards per row use the `flip` variant (front photo, back clinical copy) — same as Masseter / Calf cards on the homepage.

### 3. SEO depth (visible + supplementary)

For each concern row the hero copy stays short (~40 words, AI-snippet-optimised). Below each row:

- **Visible**: 60-word "what's happening" paragraph (already in `concernsData`)
- **Expandable** (`<ExpandableSection>`): ~500–600 words of clinical depth — pathophysiology, treatment ladder, expected timelines, British-English doctor-led tone. Crawlable, collapsed by default.
- Per-page `MedicalCondition` JSON-LD entries enriched with `signOrSymptom`, `possibleTreatment`, and `expectedPrognosis`.
- Page-level `FAQPage` JSON-LD with 4–6 questions per concern.
- Title / meta description / canonical via Helmet, unchanged URL `/concerns/`.

### 4. Imagery

Reuse existing card imagery from Home3's botox/filler/skin sets where the treatment matches. Where a concern has no existing image (e.g. eczema, hair loss), use a single dark watermark card (`CardWatermark`) — no new image generation in this round to keep cost low. We can add bespoke imagery in a follow-up.

## Out of scope

- Translations (EN only this round).
- Changing the underlying treatment routes or `concernsData` schema beyond adding image references.
- Generating new AI imagery (can follow up).

## Files touched

- **New**: `src/components/cards/AppleCardRow.tsx`, `TreatmentCard.tsx`, `types.ts`
- **Edited**: `src/pages/Home3.tsx` (imports only — zero visual change)
- **Rewritten**: `src/pages/ConcernsHub.tsx`
- **Edited**: `src/data/concernsData.ts` (add `image`, `tagline`, `flip` fields per treatment card)

## Confirm before I build

1. OK to refactor Home3 card components into shared modules (no visual change to homepage)?
2. Reuse existing homepage imagery for now — generate bespoke concern imagery later?
3. Should the page keep the existing right-hand `ConcernsHubSidebar` (treatments index) or drop it for the cleaner Home3-style single-column flow?
