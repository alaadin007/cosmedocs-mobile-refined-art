
# Competitive Response Plan — Dr Hass Clinic

Goal: close a 3× UK organic traffic gap (987 → 3,000+/mo) in 3–6 months by attacking three content gaps. We do not touch backlinks (our 1,624 clean referring domains stay our moat).

## Phase 1 — Dosage & Volume Cluster (Weeks 1–4)

Patient-question long-form articles, doctor-led, luxury dark theme (matches `BotoxUnitsExplained.tsx` pattern). Each ~1,800–2,200 words, FAQSchema, MedicalWebPage JSON-LD, sidebar with quick-reference dosing tables.

| New page | Target query | Steals from |
|---|---|---|
| `/lip-filler-0-5ml-vs-1ml/` | "0.5ml vs 1ml lip filler" | 30.33% of his traffic |
| `/cheek-filler-1ml-vs-2ml-vs-4ml/` | "how much cheek filler do I need" | 1.93% |
| `/masseter-botox-units-dosage/` | "masseter botox how many units" | 0.67% |
| `/russian-lips-vs-classic-lip-filler/` | "russian lip vs classic" | 0.58% |
| `/tear-trough-filler-1ml-explained/` | "how much tear trough filler" | adjacent |
| `/jaw-filler-how-much-ml/` | "jaw filler ml" | adjacent |

Editorial angle: doctor-led, "what we actually recommend at consultation", honest under-/over-treatment warnings, 3D anatomy callouts, before/after gallery cross-links, pricing pillar links. Differentiates from his thin blog by pairing dose with anatomy + outcome.

Internal linking: each new article links bidirectionally to `/treatments/botox/`, `/treatments/dermal-fillers/`, the relevant before/after gallery, and the relevant concern page in `/concerns/`.

## Phase 2 — Endolift Authority Page (Weeks 3–5)

One conversion-grade page targeting the entire "endolift" category he currently owns (#1–#6, AS 15).

- Route: `/treatments/endolift-london/`
- Spec: follows Laser Fibre Lift memory (dual-wavelength "Endolaser" terminology) and partner-logic CQC strings
- Layout: authority-page-layout-standard (2-column, sticky gold sidebar)
- Modules: What it is · Wavelengths explained · Candidacy · Procedure walk-through · Recovery · Comparison vs PDO Threads / Mini-Facelift · Pricing · FAQ (10 Qs incl. "is endolift safe", "endolift vs hifu", "how long does endolift last") · Doctor bio · Real cases
- Supporting blog (week 5): `/blog/endolift/is-endolift-safe/` — direct head-to-head with his #2.

## Phase 3 — Aftercare & Timeline Pages (Weeks 4–8)

Per-treatment recovery pages — cheap to write, high intent, strong dwell. Template-driven.

- `/aftercare/lip-filler-swelling-timeline/`
- `/aftercare/tear-trough-filler-swelling-timeline/`
- `/aftercare/cheek-filler-recovery/`
- `/aftercare/jaw-filler-recovery/`
- `/aftercare/botox-aftercare-24-hours/`
- `/aftercare/masseter-botox-recovery/`
- `/aftercare/profhilo-aftercare/`
- `/aftercare/polynucleotides-aftercare/`

Each: day-by-day timeline graphic, do/don't checklist, "when to call us", FAQSchema, link back to treatment + before/after.

## Technical Foundation (Week 1, parallel)

1. New `DosageArticleLayout.tsx` component — reuses `BotoxUnitsSidebar` pattern with per-treatment quick-reference table.
2. New `AftercareLayout.tsx` component — timeline + checklist primitives.
3. Add all 18+ routes to `App.tsx` and `public/sitemap-blog.xml` / `sitemap-treatments.xml`.
4. Add `_redirects` 301s if any older thin pages exist on these slugs.
5. Update `mem://content/editorial-article-catalog` and create `mem://content/dosage-volume-cluster-strategy` memory leaf.

## Sequencing

```text
Week 1: Tech foundation + lip 0.5ml vs 1ml (highest-value first)
Week 2: Cheek 1/2/4ml + Masseter units
Week 3: Russian vs Classic + Endolift London page
Week 4: Tear trough ml + Jaw ml + Endolift safety blog
Weeks 5–8: 8 aftercare pages, 2 per week
```

## Success Metrics

- Rank top-5 on at least 4 of 6 dosage queries within 90 days
- Endolift London page top-10 within 60 days
- UK organic traffic 987 → 2,000+/mo within 90 days, 3,000+ within 180 days

## What we explicitly do NOT do

- No Korean-style backlink farming.
- No "injector"-style copy — all doctor-led, GMC-compliant, CQC strings on Harley Street pages.
- No `sr-only` keyword stuffing — visible content only.
- No new hubs — slot under existing `/treatments/botox/` and `/treatments/dermal-fillers/` clusters per service-consolidation memory.

Start with Phase 1, page 1 (lip 0.5ml vs 1ml) on approval.
