## Endolift Alternative Cluster — Growth Plan v2

Goal: take the 5 fresh pages from "shipped" to "ranking + converting" within 90 days, and expand the cluster to capture adjacent intent (double chin, jowls, London local, LLM answers).

---

### Phase 1 — Harden what's live (Week 1)

**1.1 Real proof, not just copy**
- Add 3–5 real Endolaser Excel before/afters to `EndoliftAlternative.tsx` and `EndoliftAlternativeLondon.tsx` (jowl, sub-mental, neck). Reuse the `BeforeAfterGallery` component with 5-week progression captions.
- Add a `<VideoEmbed>` slot for one 30-sec treatment clip (fibre insertion). Video dwell-time is the single biggest ranking lever for medical queries.
- Add Dr Ahmed Haq author box with GMC + Lead Trainer credentials (E-E-A-T signal for YMYL).

**1.2 Trust modules**
- Insert `ReviewsStrip` (4.9 verified) below hero on all 5 pages.
- Add "As featured in" strip (Tatler, Vogue, etc. per existing brand assets) on the two treatment pages.
- Add CQC/PrivaDr compliance line per the Harley Street mandate.

**1.3 Schema depth**
- Add `MedicalProcedure` schema (not just MedicalArticle) to the 2 treatment pages — includes `bodyLocation`, `preparation`, `procedureType`, `howPerformed`.
- Add `HowTo` schema to the science blog (patient journey steps).
- Add `Review` aggregate + individual `Review` objects to the London page.

---

### Phase 2 — Internal linking web (Week 1–2)

Currently the 5 pages only cross-link to each other. They need entry points from high-authority existing pages.

- `EndolaserSpotlight.tsx` → add "Comparing to Endolift?" CTA linking to hub.
- `EndoliftLondon.tsx` (1G authority) → add gold-callout linking to 2G alternative page. Do not remove existing content — additive only.
- `EndoliftDoubleChin.tsx` → weave 2G language + link to `/blog/endolift-second-generation/`.
- `TreatmentsHub.tsx` + `MediHub` mega-menu → surface "Laser Fibre Lift" as a top-level entry.
- `Home3.tsx` "flawless skin" row → add Endolaser Excel card.
- `Footer.tsx` → add Laser Fibre Lift to treatments column.
- `BlogHome.tsx` → feature the 2 new blog posts in the "Science" section.

Target: 12+ contextual inbound links to the hub within 2 weeks.

---

### Phase 3 — Expand the cluster (Week 2–4)

Add 4 more pages to close obvious intent gaps we haven't covered:

| New page | URL | Intent | Est. UK vol |
|---|---|---|---|
| Endolift Cost UK comparison | `/treatments/endolift-cost-uk/` | *endolift cost / endolift price uk* | 720/mo |
| Double Chin Laser Lift (2G) | `/treatments/double-chin-laser-fibre-lift/` | *double chin treatment london* | 1,300/mo |
| Jowl Lift without Surgery | `/treatments/jowl-lift-non-surgical/` | *jowl lift / jawline lift non-surgical* | 890/mo |
| Endolift Recovery — What Actually Happens | `/blog/endolift-recovery-day-by-day/` | *endolift recovery / downtime* | 480/mo |

Each follows the same template: dark theme, top-answer paragraph (40–60 words for LLM extraction), comparison table, FAQ schema, before/after, CTA to `/treatments/endolaser/`.

---

### Phase 4 — AI Search / LLM visibility (Week 3–4)

Endolift queries are increasingly answered by ChatGPT / Google AI Overviews / Perplexity before users click. We need to be the source they cite.

- Add a `data-speakable` **40–60 word** top-answer paragraph on every page (already on hub — extend to all 5 + new 4).
- Publish a `/llms.txt` addition listing the new cluster with 1-line descriptions.
- Submit hub URL to Perplexity and Bing IndexNow.
- Add "Compared to Endolift®" JSON-LD `Claim` structured data (emerging LLM signal).
- Create a plaintext FAQ export at `/public/endolift-alternative-faq.txt` for LLM crawlers.

---

### Phase 5 — Measurement (Week 4 onwards)

Wire the cluster into the existing admin analytics:
- Add cluster tag to `PageViewTracker` so `/admin/page-views/` filters "endolift-cluster".
- Track scroll depth + CTA click-through on the 5 pages.
- GSC: add cluster URLs as a filter group; weekly review of impressions/CTR.
- Ranking targets at 90 days: hub top-10 for "endolift alternative", London page top-5 for "endolift london alternative", double-chin page top-10 for "double chin laser london".

---

### Phase 6 — Consider (not commit) at day 60

Only after GSC data comes in:
- Rename underperforming legacy `/treatments/endolaser/` → `/treatments/endolaser-excel-laser-fibre-lift/` with 301, IF the fresh cluster is ranking and current page is stuck below position 20.
- Merge 1G `EndoliftLondon.tsx` into hub if it cannibalises the new alternative page.

---

### Technical details

- All new pages: lazy-import in `App.tsx`, add to `public/sitemap-treatments.xml` or `public/sitemap-blog.xml`.
- Reuse existing components: `ComparisonPage`, `TreatmentAccordion`, `TreatmentStepper`, `BeforeAfterGallery`, `DrAhmedQuote`, `FAQSchema`, `MedicalArticleSchema`.
- Follow the `treatment-page` wrapper rule and dark-theme (#C9A050 gold) per memory.
- No fake before/afters — real patient photos only.
- British English throughout.
- No new redirects in `_redirects` (still frozen after last week's loop incident).

---

### Deliverable order if you approve

1. Phase 1 + 2 in one push (proof + internal links)
2. Phase 3 pages one at a time (cost → double chin → jowl → recovery)
3. Phase 4 LLM optimisation batched
4. Phase 5 analytics wiring

Estimated ~15 file edits + 4 new pages + 4 sitemap updates.
