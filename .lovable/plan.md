

## Botox Cost UK — SEO Pillar Page (Updated with Expert Fixes)

### Summary

Build a ~3,000-word pillar page at `/botox-cost-uk/` using the LipFillers.tsx two-column pattern. Incorporates all expert SEO feedback: visible-first content, no sr-only SEO block, top-answer paragraph, E-E-A-T signals, and People Also Ask integration.

### Expert Fixes Applied

1. **ExpandableSection usage** — First 3 sections (Quick Answer, Pricing Breakdown, Units Guide) render fully visible. Only deeper sections (Longevity, Cost Over Time, Cheap vs Premium, UK vs US) use ExpandableSection.
2. **No sr-only SEO block** — All keyword content integrated naturally into visible sections and FAQs.
3. **Top Answer Paragraph** — 50-word direct answer paragraph immediately under H1, optimised for featured snippets and AI answers.
4. **E-E-A-T signals throughout** — "Dr Ahmed Haq explains...", "At our Harley Street clinic...", "With 17+ years experience..." woven into section content, not just sidebar.
5. **People Also Ask H3s** — Embedded inside content sections (e.g., "Is Botox worth the cost?", "Does more units mean better results?").
6. **"Who Is This For?" section** — First-timers, clinic-switchers, patients with poor previous results.
7. **Treatment Journey timeline** — Day 0 → Day 14 → Month 3 → Month 6 visual timeline section.
8. **Subtle competitor comparison** — Authority-signalling language without naming clinics.

### Files

| File | Change |
|------|--------|
| `src/pages/BotoxCostUK.tsx` | **NEW** ~850 lines. Full pillar page |
| `src/components/botox-cost/BotoxCostSidebar.tsx` | **NEW** Sidebar with At a Glance, price cards (£275–£425), Key Concepts list, review card, related links, Book CTA |
| `src/App.tsx` | Add lazy import + route `/botox-cost-uk/`. Update `/botox-price-london` redirect target to `/botox-cost-uk/` |
| `netlify/edge-functions/inject-meta.ts` | Add meta for `/botox-cost-uk/`: title "Botox Cost UK (2026): Prices, Units & What Affects Cost" |

### Page Structure (Left Column)

**1. H1 + Top Answer Paragraph** (fully visible)
- H1: "Botox Cost UK: Pricing, Units & What You're Really Paying For"
- Trust row: Doctor-Led · From £275 · Since 2007 · Harley Street
- Direct answer paragraph (50 words): "Botox in the UK typically costs £200–£400 for 3 areas. Prices vary depending on units used, practitioner experience, and clinic location. While cheaper treatments may use lower doses, experienced providers focus on long-term results and facial balance."

**2. Quick Answer Block** (fully visible, gold-bordered callout)
- 4 bullet direct answers targeting featured snippets
- No ExpandableSection

**3. How Much Does Botox Cost?** (fully visible — NO expand)
- CosmeDocs pricing table (1/2/3 areas, men vs women)
- Cheap vs Experienced comparison table
- Embedded H3: "Why is Botox more expensive in London?"

**4. How Many Units Do You Need?** (fully visible — NO expand)
- Forehead 10–30, Frown 10–25, Crow's feet 12–24, Masseter 40–60
- Embedded H3: "Does more units mean better results?"
- Dr Ahmed Haq quote on dosing philosophy

**5. Why Botox Prices Vary** (ExpandableSection)
- Dose, expertise, technique, location, brand
- EXPERT TIP and WARNING callout boxes
- Embedded H3: "Is Botox worth the cost?"

**6. Why Botox Wears Off Faster** (ExpandableSection)
- Metabolism, muscle strength, under-dosing, exercise
- Dr Haq clinical insight

**7. Botox Cost vs Value Over 5 Years** (ExpandableSection)
- Real maths comparison table
- £250/3mo vs £350/6mo

**8. Cheap Botox vs Premium** (ExpandableSection)
- Side-by-side table (dose, duration, visits, safety)
- WARNING callout — subtle competitor comparison language

**9. Who Is This Page For?** (fully visible)
- First-time patients, clinic-switchers, patients with poor results
- Conversion-focused bullets

**10. Your First Botox: What to Expect** (fully visible)
- Timeline: Day 0 → Day 14 → Month 3 → Month 6
- Increases time on page and trust

**11. FAQs** (Accordion, 10 questions)
- Naturally absorbs keyword variations from the removed sr-only block

### Sidebar (Right Column)

- At a Glance (Duration: 10–20 min, Results: 3–6 months, Recovery: None)
- Quick Price Card (£275–£425)
- Key Concepts Covered (AI search optimised list)
- Review card (matching BotoxSidebar pattern)
- Related Treatment Links: /treatments/botox/, /treatments/lip-flip/, /treatments/masseter-botox/, /prices/, /before-after/botox/
- DiscretionBadge (inline variant)
- Book CTA

### CTA Section (bottom)
- "Ready to understand your Botox options?"
- Two buttons: Book Consultation + Get Personalised Plan

### Internal Linking (bidirectional)
- **From this page**: /treatments/botox/, /treatments/lip-flip/, /treatments/masseter-botox/, /prices/, /before-after/botox/, /treatments/nefertiti-lift/
- **Back-links needed** (separate task): Update /treatments/botox/ hub and /prices/ to link to `/botox-cost-uk/`

### JSON-LD Schema
- `Article` (headline, author: Dr Ahmed Haq, datePublished: 2026-03-25)
- `FAQPage` (10 questions)
- `MedicalBusiness` (standard CosmeDocs block per validation standard)
- `Offer` (priceCurrency: GBP, lowPrice: 275, highPrice: 425)

### SEO Keyword Hierarchy
- **Primary**: botox cost uk
- **Secondary**: botox price uk, how much is botox 3 areas
- **Supporting**: botox units, cheap vs expensive botox, why does botox not last

### What This Does NOT Build
- The 4 supporting cluster articles (/botox-units-explained/, /cheap-botox-vs-expensive/, /how-long-does-botox-last/, /botox-price-london/) — these come after the pillar is live
- No cannibalisation with /treatments/botox/ (that page = treatment info, this page = pricing education)

