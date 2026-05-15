# Plan — Homepage carousels, Jawline page, Treatments hub

## 1. Homepage (`src/pages/Home3.tsx`) — card edits

### 1a. Remove "Cosmetic Units of the Face" first card from the anti-ageing fillers row
- Delete the first card object (lines ~270–292) inside the `fillers-anti-ageing` category. The "Anatomy / All volume & filler areas" `OverviewCard` (auto-prepended at line 1465) already covers that intro, so the row will now lead with **Non-Surgical Facelift → HA Makeover → Cheek → Jowl/Jawline …** as requested.

### 1b. "Swiss science. French artistry. American innovation." — convert to a flippable end-of-row slide
- The block currently rendered as a separate banner under the row (lines 1498–1534) will be removed.
- Append a new card object to the **end** of `fillers-anti-ageing.cards` array, sized identically to the other flip cards (it will pick up the same `widthCls`/`heightCls` from line 1477–1479 because it has a `flip` prop).
- Front of card: serif heading "Swiss science. French artistry. American innovation.", small Teoxane award thumbnail, eyebrow "Pedigree · Product Story".
- Back of card (flip): the existing copy ("We use only top-tier hyaluronic acid…"), the 6 brand chips (Teoxane / Restylane / Filorga / Vivacy / Juvéderm / Belotero) and the Q2 2017 Outstanding Clinic Award line.
- Result: it lives in the carousel as the closing slide, flippable like the others.

### 1c. Rename and re-scope the "Facial Contouring" row → "Non-Surgical Facelift & Body Contouring"
- Update the `facial-contouring` category (line 454):
  - `eyebrow`: `"Non-Surgical Facelift & Body Contouring"`
  - `title`: `"Lift. Contour. Redefine."`
  - `copy`: short line about lifting and re-shaping without surgery — facelift options + body sculpting under the Endo family.
  - `cta`: keep "Mini Facelifts hub" → `/treatments/non-surgical-facelift/`.

### 1d. Move Chin / Non-Surgical Nose / Jawline Definition into the anti-ageing fillers row
- Cut the three cards (Chin Filler, Non-Surgical Nose, Jawline Definition — lines 461–502) out of `facial-contouring.cards` and append them to `fillers-anti-ageing.cards` (after Lip Filler, before the new Swiss/French/American flip card from 1b).
- Result: the anti-ageing fillers row now covers both "anti-ageing" and "facial contouring" intent in one carousel.

### 1e. Repopulate the freed Non-Surgical Facelift & Body Contouring row
The new `facial-contouring.cards` becomes a curated lift/contouring set (all flippable, same card pattern):
1. **Nefertiti Lift** → `/treatments/nefertiti-lift/`
2. **PDO Threads** → `/treatments/pdo-threads/`
3. **HA Makeover** → `/treatments/ha-makeover/` (re-used; lifts the lower face from above)
4. **Endolaser Fibre Lift** → `/treatments/endolaser/` (new badge "Now featured")
5. **Endolaser Fat Reduction & Skin Tightening** → `/treatments/endolaser-body/` *(new page — see §4)*
6. **Non-Surgical Facelift overview** (existing `nonSurgicalFaceliftCard`) — keep as anchor.

Each card gets a short flip back written in the same minimal voice as the existing cards.

---

## 2. Jawline Filler page (`src/pages/JawlineFiller.tsx`)

### 2a. Mobile hero image
- The jaw illustration block (lines 209–229) is `hidden lg:block`, so on mobile the hero is text-only and reads flat.
- Restructure the hero `flex` row into a responsive 2-column layout: text on top on mobile, illustration below it, both visible. Use `flex-col lg:flex-row` and remove `hidden lg:block` from the illustration (smaller size on mobile, e.g. `w-[200px] h-[220px] mx-auto lg:w-[280px] lg:h-[320px]`).
- Keep the gold radial glow + float animation; just unhide it on small screens.

### 2b. Endolaser cross-link block
- Add an `<EndolaserSpotlight variant="inline" />` (component already exists at `src/components/EndolaserSpotlight.tsx`) inside the main column, positioned just after the "How Long Do Results Last?" or "Suitable Candidates" section.
- Wrap it with one short paragraph framing the intent: *"If your concern is laxity rather than missing definition, lifting may serve you better than filler — see the Laser Fibre Lift."* This guides patients who don't actually need volume.

---

## 3. `/treatments` hub (`src/pages/TreatmentsHub.tsx`)

### 3a. Refresh the right-side accordions
- Audit the `categories` data (line 20) so every current treatment route is represented in the correct accordion (Botox Aesthetic, Botox Medical, Dermal Fillers, Skin Rejuvenation, Lasers, Surgical, etc.) — add any missing routes (Endolaser, Endolift, Anti-Wrinkle Treatment, Anti-Wrinkle Injections, Anti-Ageing Injections, Harley Street Injectables, HA Makeover, Polynucleotides, Profhilo, Exosomes, PDO Threads, Nefertiti, Bruxism, etc.).

### 3b. Endolaser highlight
- Add a small "Now featured" gold ring + Sparkles icon next to the **Endolaser** entry inside the Lasers accordion (and at the top of the Dermal Fillers / Mini Facelifts accordion as a cross-promo row).

### 3c. Polynucleotides "Signature Course" callout (not a discount badge)
- Inside the Skin Rejuvenation accordion, add a refined gold-bordered card under the Polynucleotides entry:
  - Heading: **"Polynucleotides — Signature Course"**
  - Body: "A considered three-session protocol for face & eyes — DNA-level repair across the periorbital and full-face zones. Investment £950."
  - Tone is editorial / luxury, never "deal" or "offer". CTA → `/treatments/polynucleotides/`.

---

## 4. New page: Endolaser Body (Fat Reduction & Skin Tightening)

- Create `src/pages/EndolaserBody.tsx` styled like the existing Endolaser dark-luxury template (gold #C9A050 on black).
- Helmet: title, description, canonical `/treatments/endolaser-body/`, MedicalProcedure JSON-LD, BreadcrumbList, FAQPage.
- Content sections: how the 1470 nm fibre tightens skin and emulsifies adipose tissue, suitable areas (jowls, sub-mental, flanks, inner thigh, knees, bra-line), candidacy, downtime, lead-trainer doctor-led positioning, CQC partner disclaimer, pricing tier, FAQs.
- Wire route in `src/App.tsx` (lazy import + route entry) and add URL to `public/sitemap-treatments.xml`.

---

## 5. SEO / data integrity

- Update `<Helmet>` titles/descriptions on Home3, JawlineFiller and TreatmentsHub if changed copy materially affects the H1/intro.
- Re-check the `Mini Facelifts` link strategy in memory (`mem://content/mini-facelifts-strategy-hub`) — the new "Non-Surgical Facelift & Body Contouring" row should funnel into `/treatments/non-surgical-facelift/`.
- Keep all copy in British English; preserve the Cosmedocs voice ("invisible art", "bold, natural, always your way").
- No keyword stuffing. No hidden `sr-only` blocks (per visible-content SEO policy).

---

## Files touched
- **Edited**: `src/pages/Home3.tsx`, `src/pages/JawlineFiller.tsx`, `src/pages/TreatmentsHub.tsx`, `src/App.tsx`, `public/sitemap-treatments.xml`
- **Created**: `src/pages/EndolaserBody.tsx`

## Open questions (low-impact, can default if unanswered)
1. **Endolaser Body URL** — confirm `/treatments/endolaser-body/` is fine (alternatives: `/treatments/endolaser-fat-tightening/`).
2. **Polynucleotides £950 course** — should the price show on the `/treatments/polynucleotides/` page itself too, or only on the hub? Default: add a discreet "Signature Course · £950" line on the Polynucleotides page.
3. **Nefertiti Lift card** — `/treatments/nefertiti-lift/` route doesn't yet exist; should I create it as a new page or temporarily link it to the existing Trap Botox page? Default: create a small dedicated page in the same dark-luxury style.
