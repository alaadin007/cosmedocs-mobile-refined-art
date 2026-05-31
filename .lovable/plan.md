# Digital Face Profile™ — Filtered Face Project

## Goal
Boost completion + sharing by giving every participant a personalized, anonymous, AI-generated Digital Face Profile immediately after submitting the survey. Strictly non-clinical, research/self-reflection framing.

---

## 1. Pre-Survey Screen (Intro slide)
Inserted into `IntroSlide` in `src/pages/ResearchStudy.tsx` for the `filtered-face-project` study only.

- New section above "Begin Survey":
  - Title: **Discover Your Digital Face Profile™**
  - Gold checklist of what they'll receive (5 scores + archetype + comparison + insights)
  - Compliance notice card ("research & educational purposes only, not medical/psychological")
  - Example profile card: *The Reflective Observer · Digital Confidence Index 74/100 · less filter-dependent than 83% of respondents*
- CTA stays **Begin Survey**

Slug-gated so other studies are unaffected.

---

## 2. Post-Submit Loading Screen
After the existing `submit()` succeeds, instead of jumping straight to `ThankYouSlide`:

- Show **Generating Your Digital Face Profile™** with subtitle + animated gold progress ring
- In parallel, call new edge function `generate-digital-face-profile` with the survey response id
- On result → render the Profile screen
- On error → graceful fallback that still thanks them + shows aggregate score only

---

## 3. Profile Output (5 components)

Computed deterministically in the edge function from the participant's answers (so scores are stable & reproducible), then the AI writes only the prose insight.

### Scoring engine (server-side, in edge function)
Maps each answer option to a 0–100 contribution, then averages weighted:

- **Digital Confidence Index** = 100 − weighted(self-comparison + filter dependence + camera concerns + delete-photo behaviour + video-call influence)
- **Social Comparison Score** = derived from "beauty standards", "perceive your own face", motivations
- **Filter Awareness Score** = filter usage + photos-before-posting
- **Camera Sensitivity Score** = video-call awareness + camera view question + delete-photo
- **Digital Influence Score** = social-media time + beauty standards + AI app trust

### Archetype assignment
Rules-based from the 4 scores → one of: Reflective Observer, Confidence Explorer, Social Mirror, Camera Critic, Filter Optimiser, Naturalist, Digital Perfectionist.

### Population comparison
Edge function runs aggregate queries against `research_responses` for the same study and computes percentiles for: filter usage, camera awareness, confidence index, photos before posting.

### Personalized AI insight (150–250 words)
Lovable AI Gateway, model `google/gemini-3-flash-preview`. System prompt enforces:
- Supportive · educational · non-judgmental
- No diagnosis, no mental-health labels, no medical advice
- Frame as "Your responses suggest…" / "Compared with other participants…"

---

## 4. Profile UI
New component `DigitalFaceProfileSlide.tsx` (dark luxury theme, gold #C9A050, iOS typography per memory):

- Archetype hero (large serif title + one-line description)
- Circular gauge for Digital Confidence Index
- 4 horizontal score bars
- Population comparison list (4 dynamic lines)
- AI insight body (prose)
- Compliance footnote always visible
- Share row: native Web Share API + WhatsApp / Instagram (download image) / Copy Link
- Optional email capture card (stored in a separate table, not joined to response)

---

## 5. Final Thank-You
Update existing `ThankYouSlide` (or new section under profile) with:
- "Thank you for contributing to The Filtered Face Project™"
- Mention Aesthetic Intelligence Journal · Harley Street Institute · CosmeDocs Harley Street
- Share buttons + email capture

---

## Technical Details

### Database (migration)
1. Add column `research_responses.profile jsonb` to cache the generated profile (so refresh shows same result, and we can aggregate later).
2. New table `research_email_subscribers` (id, study_id, email, created_at) — separate from `research_responses`, RLS: public insert, admin select.

### Edge function: `generate-digital-face-profile`
Input: `{ response_id }`
Steps:
1. Fetch response answers from `research_responses`
2. Map answer text → numeric scores (lookup table inside function based on the known question set for this study)
3. Compute 4 scores + archetype
4. Run 4 aggregate `count(*)` queries vs other responses for percentiles
5. Call Lovable AI Gateway for the prose insight
6. Persist `profile` JSON back to the row
7. Return profile JSON
CORS enabled; uses service role; no auth required (responses are anonymous).

### Frontend changes
- `src/pages/ResearchStudy.tsx`
  - Extend intro slide (slug-gated)
  - Add `generating` + `profile` states; after submit, set `generating=true`, invoke edge function, then `profile=data`
  - Replace `ThankYouSlide` with `DigitalFaceProfileSlide` for this study
- New files:
  - `src/components/research/DigitalFaceProfileSlide.tsx`
  - `src/components/research/ProfileGauge.tsx` (circular svg)
  - `src/components/research/ScoreBar.tsx`
  - `src/components/research/ShareProfileCard.tsx`
- Reuse existing `IOS_FONT`, gold tokens, motion patterns.

### Compliance guardrails (enforced in code + prompt)
- Banned word list filter on AI output (BDD, anxiety, depression, disorder, diagnose, illness) → if matched, regenerate once, otherwise fall back to a safe templated paragraph.
- Static disclaimer rendered above and below the profile.

---

## Out of scope (this iteration)
- Storing generated PNG share cards in storage (we'll generate client-side via canvas)
- A/B testing of archetypes
- Admin dashboard for profile analytics (current admin views already show responses)

---

## Build order
1. DB migration (profile column + email subscribers table)
2. Edge function with scoring + AI insight
3. Profile UI components
4. Wire ResearchStudy flow (intro additions + post-submit profile)
5. QA full flow end-to-end on `/research/filtered-face-project`