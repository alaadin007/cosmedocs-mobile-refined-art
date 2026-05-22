# Treatment Page Design System

A single source of truth for spacing, typography, accordion and stepper
patterns used on every Cosmedocs treatment page. **No CMS required** —
just opt in with the `treatment-page` wrapper class and the shared
components.

## How to use on a new (or existing) treatment page

```tsx
import { TreatmentAccordion } from "@/components/treatment/TreatmentAccordion";
import { TreatmentStepper } from "@/components/treatment/TreatmentStepper";

const MyTreatment = () => (
  <div className="treatment-page">              {/* light theme */}
    {/* or: <div className="treatment-page is-dark"> for luxury black */}
    <section>
      <div className="tp-container">
        <p className="eyebrow">Harley Street, London</p>
        <h1>Treatment headline</h1>
        <p className="tp-prose">Short intro copy.</p>
        <a className="tp-cta" href="tel:03330551503">Book consultation</a>
      </div>
    </section>

    <section>
      <div className="tp-container tp-prose">
        <h2>How it works</h2>
        <TreatmentStepper steps={[
          { title: "Consultation", body: "What to expect…" },
          { title: "Treatment",    body: "What happens on the day…" },
          { title: "Aftercare",    body: "Recovery and review…" },
        ]} />
      </div>
    </section>

    <section>
      <div className="tp-container tp-prose">
        <h2>Common questions</h2>
        <TreatmentAccordion items={[
          { q: "Is it safe?", a: "Yes — doctor-led, since 2007…" },
          { q: "How long does it last?", a: "Typically 6–9 months…" },
        ]} />
      </div>
    </section>

    {/* Optional mobile-only sticky CTA */}
    <div className="tp-sticky-cta">
      <span>From £175</span>
      <a className="tp-cta" href="tel:03330551503">Book</a>
    </div>
  </div>
);
```

## What you get automatically

| Concern | Token / Class |
|---|---|
| Section vertical rhythm | `section` inside `.treatment-page` (clamp 2.25–4.5rem, auto gold divider) |
| H1/H2/H3 fluid sizing | inherited from `.treatment-page` |
| Body 16–17px / 1.65 leading | inherited |
| Page eyebrow label | `.eyebrow` |
| Content container | `.tp-container` (max 72rem) |
| Reading-width prose | `.tp-prose` (max 38rem) |
| Square full-width image (mobile) → 4:5 (desktop) | `<img class="tp-media">` |
| Primary gold pill CTA, full-width on mobile, ≥48px tap target | `.tp-cta` |
| Sticky bottom booking bar (mobile only) | `.tp-sticky-cta` |
| Accordion (FAQ etc.) | `<TreatmentAccordion items={…} />` |
| Process stepper | `<TreatmentStepper steps={…} />` |
| Dark luxury theme variant | add `.is-dark` to wrapper |

## Why not a real CMS?

The site is a React/Vite app — content is co-located with code for SEO
and performance reasons (per project SEO governance). This design system
gives the **same benefit** as a CMS style guide: change a value here and
every opted-in page updates everywhere, automatically.
