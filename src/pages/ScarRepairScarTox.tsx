import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Syringe,
  Sparkles,
  Activity,
  CheckCircle2,
  Clock,
  ArrowRight,
  Baby,
  HeartHandshake,
  Layers,
} from "lucide-react";

/**
 * Scar Repair — ScarTox
 * Multi-modality medical scar softening for tummy tuck, C-section, mommy makeover,
 * breast (mastopexy / augmentation / reduction), keloid & hypertrophic scars.
 *
 * SEO targets (Semrush UK, low-KD/low-comp):
 *  - c section scar treatment (170/mo, KD22)
 *  - c section scar removal (110/mo, KD18)
 *  - scar revision london (260/mo, KD10)
 *  - microneedling for scars (320/mo, KD21)
 *  - scar treatment london (140/mo, KD17)
 *  - c section scar massage (1,300/mo)
 *  - tummy tuck scar treatment / mommy makeover scar / breast scar treatment
 *  - polynucleotides for scars / botox for scars / keloid scar treatment london
 *  - scartox (brandable, zero competition)
 */

const CANONICAL = "https://www.cosmedocs.com/treatments/scar-repair-scartox/";
const CLINIC_ADDRESS = {
  streetAddress: "10 Harley Street",
  addressLocality: "London",
  postalCode: "W1G 9PF",
  addressCountry: "GB",
};

const ScarRepairScarTox = () => {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.cosmedocs.com/#clinic",
        name: "Cosmedocs",
        url: "https://www.cosmedocs.com/",
        telephone: "+442071231123",
        address: { "@type": "PostalAddress", ...CLINIC_ADDRESS },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2387",
          bestRating: "5",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL}#procedure`,
        name: "ScarTox — Multi-Modality Scar Repair",
        alternateName: [
          "ScarTox",
          "Tummy Tuck Scar Treatment",
          "C-Section Scar Treatment",
          "Mommy Makeover Scar Repair",
          "Breast Scar Treatment",
          "Scar Revision London",
        ],
        procedureType: "Non-surgical medical aesthetic protocol",
        bodyLocation: [
          "Abdomen",
          "Suprapubic (C-section)",
          "Peri-areolar (Breast)",
          "Inframammary fold",
          "Vertical breast (Wise pattern)",
          "Umbilicus",
          "Hip / body contouring scars",
        ],
        howPerformed:
          "Combined protocol of intralesional botulinum toxin (ScarTox) to relax dermal tension, RF or mechanical microneedling to remodel collagen, and polynucleotide (PDRN) injections to regenerate the dermis. Additional modalities include LED, silicone therapy and 5-FU/steroid for hypertrophic or keloid disease.",
        followup:
          "Two-week review, monthly photography, personalised 3–6 session plan depending on scar age, colour, height and body site.",
        preparation:
          "Ideally started once wound closure is complete (typically 6–12 weeks post-op). Earlier ScarTox around week 2–3 when surgeon-approved to reduce dermal tension during peak remodelling.",
        provider: { "@id": "https://www.cosmedocs.com/#clinic" },
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#page`,
        url: CANONICAL,
        name: "Scar Repair London — ScarTox for Tummy Tuck, C-Section, Mommy Makeover & Breast Scars",
        description:
          "Doctor-led scar repair at 10 Harley Street. ScarTox (botulinum), microneedling and polynucleotides for tummy tuck, C-section, mommy makeover and breast scars. From £250.",
        inLanguage: "en-GB",
        isPartOf: { "@id": "https://www.cosmedocs.com/#website" },
        about: { "@id": `${CANONICAL}#procedure` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#top-answer", "h1"],
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.com/" },
            { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.com/treatments/" },
            { "@type": "ListItem", position: 3, name: "Scar Repair — ScarTox", item: CANONICAL },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Scar Repair London — ScarTox for Tummy Tuck, C-Section & Breast Scars | Cosmedocs</title>
        <meta
          name="description"
          content="ScarTox scar repair at 10 Harley Street. Botulinum, microneedling & polynucleotides for tummy tuck, C-section, mommy makeover, breast & keloid scars. From £250."
        />
        <link rel="canonical" href={CANONICAL} data-rh="true" />
        <meta property="og:title" content="Scar Repair London — ScarTox | Cosmedocs" />
        <meta
          property="og:description"
          content="Doctor-led multi-modality scar softening for tummy tuck, C-section, mommy makeover and breast scars."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <div className="treatment-page min-h-screen bg-neutral-950 text-white">
        {/* HERO */}
        <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(201,160,80,0.35) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A050] text-[11px] uppercase tracking-[0.28em] font-medium mb-5">
                Doctor-led · Harley Street since 2007
              </p>
              <h1 className="text-3xl md:text-5xl font-light leading-[1.15] mb-6">
                Scar Repair London — <span className="text-[#C9A050]">ScarTox</span>
                <span className="block text-white/70 text-2xl md:text-3xl mt-3 font-light">
                  For tummy tuck, C-section, mommy makeover &amp; breast scars
                </span>
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                A quiet, medical protocol that softens the scar you already have — using
                botulinum toxin, microneedling and polynucleotides in the right order, at the
                right time. Bold. Natural. Always your way. Our aesthetics is invisible art.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TOP ANSWER — for AI/voice snippets */}
        <section className="pb-14">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <motion.div
              id="top-answer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-[#C9A050] pl-5 py-2"
            >
              <p className="text-white/85 text-[17px] md:text-lg leading-relaxed font-light">
                ScarTox is a doctor-led scar repair protocol that combines micro-doses of
                botulinum toxin (to release dermal tension), microneedling (to remodel
                collagen) and polynucleotides (to regenerate the dermis). It softens, flattens
                and de-pigments tummy tuck, C-section, mommy makeover and breast scars over
                three to six sessions — no surgery, no downtime, from £250.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AT-A-GLANCE */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Glance icon={<Clock className="w-4 h-4" />} label="Per session" value="45–60 min" />
            <Glance icon={<Activity className="w-4 h-4" />} label="Downtime" value="24–48 hours" />
            <Glance icon={<Layers className="w-4 h-4" />} label="Sessions" value="3–6 typically" />
            <Glance icon={<Sparkles className="w-4 h-4" />} label="From" value="£250" />
          </div>
        </section>

        {/* WHY SCARS BEHAVE BADLY */}
        <Section
          heading="Why some scars stay red, raised or wide"
          subheading="A brief, honest explanation before we describe what we do about it."
        >
          <p>
            A scar is the body's fastest possible repair — dense, disorganised type-III
            collagen laid down under tension while the wound is still moving. Three things
            decide how it matures over the next 12–18 months: the amount of{" "}
            <em>mechanical tension</em> pulling on the closure, the amount of{" "}
            <em>inflammation</em> during healing, and the patient's individual fibroblast
            behaviour (some people scar generously, some don't).
          </p>
          <p>
            A tummy tuck (abdominoplasty), C-section and mastopexy all share the same problem:
            the incision sits on skin that <strong>moves every time you breathe, cough, feed
            a baby or stand up</strong>. That constant micro-tension is what turns a fine line
            into a raised, red, itchy ridge — a hypertrophic scar — or, in genetically prone
            skin, a keloid that grows beyond the original wound.
          </p>
          <p>
            ScarTox targets all three variables at once. Botulinum relaxes the tiny muscle
            fibres pulling on the closure. Microneedling breaks and re-lays the disorganised
            collagen. Polynucleotides feed the fibroblasts a regenerative signal so the new
            tissue behaves more like healthy dermis than scar tissue. Used together, and
            started at the right time, they change the trajectory of the scar rather than just
            cosmetically covering it.
          </p>
        </Section>

        {/* THE FOUR MODALITIES */}
        <Section heading="The four modalities we combine">
          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Modality
              icon={<Syringe className="w-4 h-4" />}
              name="ScarTox (Botulinum Toxin)"
              blurb="Micro-doses of botulinum injected along the scar line release the small dermal muscle fibres that pull the wound apart. Reduced tension = thinner, flatter, paler scar. Best started 2–4 weeks post-op when your surgeon has cleared the incision."
            />
            <Modality
              icon={<Activity className="w-4 h-4" />}
              name="RF & Mechanical Microneedling"
              blurb="Controlled micro-injury with radiofrequency (Morpheus8-class) or medical dermaroller triggers a full collagen remodelling cascade. It breaks the tethered, disorganised scar collagen and lays down healthier, oriented fibres. Also lifts pigment out of red or brown scars."
            />
            <Modality
              icon={<Sparkles className="w-4 h-4" />}
              name="Polynucleotides (PDRN)"
              blurb="Regenerative injectable derived from purified salmon DNA fragments. Feeds fibroblasts, calms inflammation and improves dermal thickness under the scar. Particularly useful for atrophic (depressed), stretched or thin, shiny scars — including C-section 'shelves'."
            />
            <Modality
              icon={<ShieldCheck className="w-4 h-4" />}
              name="Medical adjuncts"
              blurb="For hypertrophic and keloid disease we add intralesional steroid (triamcinolone) and, where indicated, 5-fluorouracil. Silicone sheeting, LED and prescription topicals (tretinoin, azelaic acid) support the plan between visits."
            />
          </div>
        </Section>

        {/* WHO IT'S FOR — with body sites */}
        <Section
          heading="Who ScarTox is for"
          subheading="Anyone with a scar that's redder, thicker, wider or shinier than they'd like — and who wants to soften it without further surgery."
        >
          <div className="grid md:grid-cols-2 gap-3 not-prose">
            <UseCase
              icon={<Baby className="w-4 h-4" />}
              title="C-section scar treatment"
              body="The low horizontal Pfannenstiel scar can sit on a fold that catches, itches or forms a small overhanging 'shelf'. ScarTox flattens the shelf, polynucleotides restore dermal thickness, and microneedling addresses the discolouration. C-section scar massage is taught as part of your aftercare."
            />
            <UseCase
              icon={<HeartHandshake className="w-4 h-4" />}
              title="Tummy tuck scar treatment"
              body="Full abdominoplasty scars can stretch under gravity for up to a year. Early ScarTox (with surgical clearance) is the single most useful intervention for keeping them fine and flat. We work alongside your surgeon's follow-up plan."
            />
            <UseCase
              icon={<Sparkles className="w-4 h-4" />}
              title="Mommy makeover scar repair"
              body="Combined tummy tuck + breast lift/augmentation leaves scars in three high-tension areas at once. We coordinate one protocol across abdomen, peri-areolar, vertical and inframammary scars to avoid over-treating any single site."
            />
            <UseCase
              icon={<Layers className="w-4 h-4" />}
              title="Breast scar treatment"
              body="Lollipop (Wise pattern), inframammary and peri-areolar scars from augmentation, mastopexy or reduction. Polynucleotides are particularly effective at settling the vertical portion, which is the most tension-loaded and the most likely to hypertrophy."
            />
            <UseCase
              icon={<ShieldCheck className="w-4 h-4" />}
              title="Keloid & hypertrophic scars"
              body="Raised, red, itchy scars that go beyond the original wound. Treated with intralesional steroid ± 5-FU, ScarTox to stop them re-tensioning, and long-term silicone. A calm, medical plan — not a promise of erasure."
            />
            <UseCase
              icon={<Activity className="w-4 h-4" />}
              title="Older scars, acne scars, self-harm scars"
              body="Mature scars still respond, though the timeline is longer (6+ sessions). Microneedling and polynucleotides lead the plan here; ScarTox is reserved for scars that clearly re-tension with movement or expression."
            />
          </div>
        </Section>

        {/* PROTOCOL TIMELINE */}
        <Section heading="Your ScarTox protocol, week by week">
          <ol className="not-prose space-y-3">
            <TimelineStep
              n={0}
              title="Consultation & scar mapping"
              body="Full history, photography, palpation for tension direction. Written plan with number of sessions, cost and expected outcome — plus what ScarTox can't do."
            />
            <TimelineStep
              n={1}
              title="Weeks 2–4 post-op (with surgical clearance)"
              body="First ScarTox session along the closure line to reduce tension during the peak remodelling window. Silicone sheeting and topical regime started."
            />
            <TimelineStep
              n={2}
              title="Week 6–8"
              body="First polynucleotide session under the scar. LED for redness. Scar massage technique reviewed and refined."
            />
            <TimelineStep
              n={3}
              title="Month 3"
              body="First microneedling session (RF or mechanical depending on scar depth and pigment). Repeat ScarTox if the scar is still visibly tensioning with movement."
            />
            <TimelineStep
              n={4}
              title="Months 4–9"
              body="Alternating microneedling and polynucleotide sessions every 4–6 weeks. Photographic review at each visit."
            />
            <TimelineStep
              n={5}
              title="Month 12"
              body="Final review. Most scars are now soft, flat and one to two shades from surrounding skin. Any residual pigment addressed with targeted laser or peel."
            />
          </ol>
        </Section>

        {/* MODALITY COMPARISON */}
        <Section heading="Which modality does what">
          <div className="overflow-hidden rounded-2xl border border-white/10 not-prose">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.04] text-white/60">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Modality</th>
                  <th className="text-left px-4 py-3 font-medium">Best for</th>
                  <th className="text-left px-4 py-3 font-medium">Starts working</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                <Row m="ScarTox" b="Fresh, tensioned scars; hypertrophic tendency" t="2–4 weeks" />
                <Row m="Microneedling (mechanical)" b="Discolouration, mild texture" t="4–6 weeks" />
                <Row m="RF Microneedling (Morpheus8)" b="Thick, tethered, raised scars" t="6–12 weeks" />
                <Row m="Polynucleotides" b="Atrophic, thin, shiny, stretched scars" t="4–8 weeks" />
                <Row m="Intralesional steroid ± 5-FU" b="Keloid, dense hypertrophic" t="4–6 weeks per cycle" />
                <Row m="Silicone / LED / topicals" b="All scars — daily home support" t="Ongoing" />
              </tbody>
            </table>
          </div>
        </Section>

        {/* PRICING */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-[#C9A050]" />
                <h2 className="text-lg font-light">Transparent pricing</h2>
              </div>
              <div className="divide-y divide-white/[0.06]">
                <PriceRow label="ScarTox — single scar (e.g. C-section, breast)" price="from £250" />
                <PriceRow label="ScarTox — full tummy tuck scar" price="from £395" />
                <PriceRow label="Polynucleotide session (per scar area)" price="from £350" />
                <PriceRow label="RF Microneedling (per scar area)" price="from £450" />
                <PriceRow label="Keloid injection cycle (steroid ± 5-FU)" price="from £200" />
                <PriceRow label="Mommy Makeover scar package (3 sessions, all sites)" price="from £1,850" />
              </div>
              <p className="text-xs text-white/40 mt-5">
                Includes consultation, treatment and complimentary two-week review. A £50
                consultation fee applies and is fully redeemed against treatment on the day.
              </p>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <Section heading="What we do — and what we won't promise">
          <p>
            Our position is medical, not marketing. ScarTox and the modalities around it can{" "}
            <strong>reliably soften, flatten and de-pigment</strong> most surgical and
            obstetric scars — the improvement is usually significant enough that friends and
            partners stop noticing the scar even if you still can. What we will not tell you
            is that any non-surgical protocol <strong>erases</strong> a scar. Skin that has
            been cut always keeps a memory of the cut. Anyone who tells you otherwise is
            selling you a photograph.
          </p>
          <p>
            All treatments are performed by GMC-registered doctors at 10 Harley Street. We
            work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required
            treatments. If your scar sits on active infection, is under two weeks old without
            surgical clearance, or shows signs of dehiscence, we will pause and coordinate
            with your surgeon before starting.
          </p>
        </Section>

        {/* FAQ */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <h2 className="text-xl md:text-2xl font-light mb-6">Frequently asked</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <div
                  key={f.q}
                  className="border border-white/[0.07] rounded-xl p-5 bg-white/[0.02]"
                >
                  <h3 className="text-[15px] font-medium text-white mb-2 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A050] mt-1 shrink-0" />
                    {f.q}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed pl-6">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/20 rounded-2xl p-8 text-center">
              <p className="text-[#C9A050] text-[11px] uppercase tracking-[0.28em] mb-3">
                Your consultation begins here
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Soften the scar. Keep the story.
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-6 text-sm md:text-base">
                A private, doctor-led assessment at 10 Harley Street. We'll photograph, map
                and cost your plan on the day — no pressure, no upsell.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-7 py-3 text-sm font-medium transition-all"
                >
                  Book a scar consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white/80 rounded-full px-7 py-3 text-sm transition-all"
                >
                  Ask a question first
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
              Related reading
            </p>
            <div className="flex flex-wrap gap-2.5">
              {RELATED.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-white/55 hover:text-[#C9A050] text-sm border border-white/[0.08] hover:border-[#C9A050]/30 rounded-full px-4 py-1.5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/* ------------ small presentational helpers (kept in-file to stay focused) ------------ */

function Glance({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
      <div className="text-[#C9A050]/80 mb-2">{icon}</div>
      <p className="text-xs text-white/40">{label}</p>
      <p className="text-sm text-white/90 mt-0.5">{value}</p>
    </div>
  );
}

function Section({
  heading,
  subheading,
  children,
}: {
  heading: string;
  subheading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pb-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-light text-white mb-3">{heading}</h2>
          {subheading && (
            <p className="text-white/50 text-sm md:text-base mb-6">{subheading}</p>
          )}
          <div className="text-white/70 leading-relaxed text-[15px] md:text-base space-y-4">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Modality({
  icon,
  name,
  blurb,
}: {
  icon: React.ReactNode;
  name: string;
  blurb: string;
}) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
      <div className="flex items-center gap-2 mb-2 text-[#C9A050]">
        {icon}
        <h3 className="text-white text-[15px] font-medium">{name}</h3>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{blurb}</p>
    </div>
  );
}

function UseCase({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
      <div className="flex items-center gap-2 mb-2 text-[#C9A050]">
        {icon}
        <h3 className="text-white text-[15px] font-medium">{title}</h3>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function TimelineStep({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
      <div className="shrink-0 w-8 h-8 rounded-full border border-[#C9A050]/40 text-[#C9A050] flex items-center justify-center text-xs">
        {n}
      </div>
      <div>
        <h4 className="text-white text-[15px] font-medium mb-1">{title}</h4>
        <p className="text-white/55 text-sm leading-relaxed">{body}</p>
      </div>
    </li>
  );
}

function Row({ m, b, t }: { m: string; b: string; t: string }) {
  return (
    <tr>
      <td className="px-4 py-3 text-white/85">{m}</td>
      <td className="px-4 py-3 text-white/55">{b}</td>
      <td className="px-4 py-3 text-[#C9A050]/90">{t}</td>
    </tr>
  );
}

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-center justify-between py-3 text-sm">
      <span className="text-white/70">{label}</span>
      <span className="text-[#C9A050] font-medium">{price}</span>
    </div>
  );
}

/* ---------- data ---------- */

const FAQS = [
  {
    q: "How soon after a tummy tuck or C-section can I start ScarTox?",
    a: "With your surgeon's written clearance, we can start ScarTox as early as 2–4 weeks post-op. Starting inside the first three months — the peak remodelling window — is the single biggest predictor of a fine, flat mature scar.",
  },
  {
    q: "Is ScarTox the same as normal Botox?",
    a: "The molecule is the same (botulinum toxin type A). The dose, dilution, depth and technique are completely different. ScarTox is placed intradermally along the scar in micro-droplets to release dermal tension, not to relax expression muscles.",
  },
  {
    q: "Does microneedling make scars worse?",
    a: "Not when performed by a doctor at the correct depth and interval. Under-treated microneedling won't help; over-aggressive microneedling on a pigment-prone patient can trigger post-inflammatory pigmentation. We photograph and dose to your skin type at every visit.",
  },
  {
    q: "How many sessions will I need for a C-section scar?",
    a: "Most C-section scars respond well in 3–4 sessions spaced 4–6 weeks apart. Older scars (over 12 months) or hypertrophic scars often need 6 sessions plus ongoing silicone and home care.",
  },
  {
    q: "What about keloid scars — can you treat those?",
    a: "Yes. Keloids need a slower, more medical protocol: intralesional triamcinolone (steroid), sometimes combined with 5-fluorouracil, plus ScarTox to prevent re-tensioning and long-term silicone. We are honest that keloids can recur; the aim is durable control, not one-off cure.",
  },
  {
    q: "Is there any downtime?",
    a: "24–48 hours of mild redness and pinpoint swelling. Microneedling adds a further day of pinkness. You can return to office work the next day and to the gym at 72 hours.",
  },
  {
    q: "Will it work on breast lift or augmentation scars?",
    a: "Yes. Peri-areolar, vertical and inframammary scars all respond. The vertical portion of a Wise pattern lift is the most tension-loaded and benefits most from early ScarTox plus polynucleotides.",
  },
  {
    q: "Can you treat scars that are years old?",
    a: "Yes, though the timeline is longer. Mature scars soften with a microneedling + polynucleotide-led plan across 6+ sessions. ScarTox is reserved for scars that still visibly tension with movement.",
  },
];

const RELATED = [
  { label: "Polynucleotides", path: "/treatments/polynucleotides/" },
  { label: "RF Microneedling (Morpheus8-class)", path: "/treatments/skin-rejuvenation/" },
  { label: "Anti-Wrinkle Treatment", path: "/treatments/anti-wrinkle-treatment/" },
  { label: "Chemical Peels", path: "/treatments/glycolic-acid-peel/" },
  { label: "Prescription Skincare", path: "/treatments/prescription-skincare/" },
  { label: "Dr Ahmed Haq", path: "/dr-ahmed-haq/" },
];

export default ScarRepairScarTox;
