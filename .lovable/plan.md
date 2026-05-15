# Capture 3 Botox SEO opportunities

Semrush surfaced three winnable UK keywords. Audit shows:
- `/treatments/botox/` already exists (canonical target for "botox London" — already redirected in)
- `/anti-wrinkle-treatment/` does **not** exist as a dedicated page
- `/harley-street-injectables/` does **not** exist (zero competition for our exact location)

Plan respects two project rules: **one-intent = one-page** (no cannibalising `/treatments/botox/`) and **Service Consolidation** (new pages must funnel into existing canonical hubs).

---

## Step 1 — Retarget `/treatments/botox/` for "Botox London" (3,600/mo, KD 28)

The page exists and already pulls in `/botox-london` via 301. We just need to make the on-page SEO explicitly target the geo-modified phrase.

- Helmet `<title>`: `Botox London | Doctor-Led Anti-Wrinkle Treatment | CosmeDocs Harley Street`
- Helmet `<meta description>`: lead with "Botox in London…" and "Harley Street since 2007"
- Add an H2 "Botox in London — Harley Street since 2007" near the top of the body
- Add a dedicated FAQ block answering: *How much is Botox in London?*, *Where to get Botox in London?*, *Best Botox London?* — these are the exact question variants Semrush returned (volumes 10–20/mo each but they aggregate)
- Add `MedicalBusiness` schema with `areaServed: "London"` if not already present

## Step 2 — Build `/anti-wrinkle-treatment/` (1,300/mo, KD 0)

This is the easiest win on the entire list. Footer already says "Anti-Wrinkle Treatment" (per memory rule) — we just need a destination behind the link.

- New page: `src/pages/AntiWrinkleTreatment.tsx`
- Route added in `App.tsx`
- Sitemap entry added
- **Position it as the doctor-led terminology page** — explains why we say "anti-wrinkle treatment" (medical) instead of "Botox" (trade name), then funnels users into `/treatments/botox/` for the booking decision
- Target related cluster: "anti wrinkle injections" (2,900/mo), "anti ageing injections" (2,400/mo) — covered by H2s and FAQ
- Page word count: ~1,200 (per Page Type Content System memory for treatment pages)
- Light luxury theme (per Lip Filler Authority precedent for non-medical-coded pages)
- Internal links: → `/treatments/botox/`, → `/medical/`, → `/about/`

## Step 3 — Build `/harley-street-injectables/` (2,400/mo, KD low)

Pure-play geo + service authority page. CosmeDocs literally is on Harley Street since 2007 — strongest possible E-E-A-T signal for this exact term.

- New page: `src/pages/HarleyStreetInjectables.tsx`
- Route added in `App.tsx`
- Sitemap entry added
- CQC disclaimer block (per memory rule for Harley Street pages): *"We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments."*
- Hub-style layout linking to all three injectable pillars: Botox, Dermal Fillers, Polynucleotides
- `MedicalBusiness` JSON-LD with full Harley Street address + `areaServed: London`
- Target cluster: "harley street injectables" (2,400/mo), "harley street dermal" (1,000/mo), "dermal fillers london" (1,600/mo)
- Awards block (Teosyal Outstanding Clinic Award, per memory)
- Doctor credentials block (Dr Haq PubMed publications, per memory)

---

## Technical implementation notes

- **No new redirects needed** for Step 1 — the existing `/botox-london → /treatments/botox/` 301 stays.
- **Two new entries** in `public/sitemap-pages.xml` for Steps 2 & 3.
- **Two new routes** in `src/App.tsx`.
- All three pages get React Helmet `<link rel="canonical" data-rh="true">` (per Canonical Tag Management memory).
- All three get `BreadcrumbList` + `MedicalWebPage` + `MedicalProcedure` JSON-LD (per Medical Business Schema standard).
- British English throughout.

## Why this order

| Step | Effort | Time-to-rank | Expected monthly visits |
|------|--------|--------------|--------------------------|
| 1 (retarget Botox page) | Low (1 file) | 2–4 weeks | +200–400 |
| 2 (anti-wrinkle page) | Medium (new page) | 4–8 weeks | +100–200 |
| 3 (Harley St injectables) | Medium (new page) | 6–12 weeks | +150–300 |

Step 1 ships fastest, Steps 2 & 3 in parallel afterwards.

---

**Approve this plan and I'll start with Step 1 (retargeting `/treatments/botox/`), then build out Steps 2 and 3.**