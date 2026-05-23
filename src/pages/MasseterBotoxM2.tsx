import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Activity,
  Syringe,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSEOMetadata } from "@/utils/seo";
import masseterAfter2Treatments from "@/assets/before-after/masseter-series/after-2-treatments.jpg";
import masseterOneYearAfter3rd from "@/assets/before-after/masseter-series/one-year-after-3rd.jpg";

const faqs = [
  {
    q: "How long does masseter Botox last?",
    a: "Masseter Botox usually lasts 4–6 months. In larger or very active masseter muscles, the first year may need closer maintenance because the muscle is strong and used every day for chewing and clenching. Once cumulative atrophy is achieved, many patients move to two sessions a year, then annual review depending on symptoms and muscle return.",
  },
  {
    q: "Is masseter Botox for jaw slimming or teeth grinding?",
    a: "It can be both. Cosmetically, it reduces bulky masseter muscle to soften a square lower face. Medically, it reduces excessive bite force, clenching, jaw tension, TMJ strain and bruxism-related headaches. The same muscle is being treated; the treatment plan is adjusted according to whether your main concern is shape, symptoms, or both.",
  },
  {
    q: "How much does masseter Botox cost at CosmeDocs?",
    a: "Masseter Botox is £350 for female patients and £400 for male patients. Male or very strong masseters often require higher dosing because the muscle is denser and stronger. Your doctor confirms the dose after palpating the muscle at rest and during clenching.",
  },
  {
    q: "Will it affect chewing or my smile?",
    a: "The aim is partial relaxation, not paralysis. Some patients notice temporary chewing fatigue with tough foods for a few days, especially after their first treatment, but normal eating, speech and expression are preserved when dosing is placed correctly inside the muscle body.",
  },
  {
    q: "When will I see jaw slimming?",
    a: "Jaw tension may start easing within 7–14 days. Visible slimming is slower because the muscle has to reduce in bulk. Most patients see early contour change by weeks 3–4 and a clearer reduction by weeks 6–12, especially after repeat treatment cycles.",
  },
  {
    q: "What are the side effects?",
    a: "Common effects are mild tenderness, small bruises or temporary chewing fatigue. Uncommon risks include smile asymmetry, under-treatment, over-softening, or paradoxical bulging if the strongest part of the muscle is missed. This is why CosmeDocs uses doctor-led assessment and conservative anatomical dosing.",
  },
];

const benefits = [
  {
    title: "Jaw slimming",
    body: "Softens a square or wide lower face by reducing muscle-driven width at the jaw angle. A more oval, balanced contour — no bone work, no surgery.",
  },
  {
    title: "Bruxism & TMJ relief",
    body: "Lowers excessive bite force that drives night-time clenching, jaw fatigue, tension headaches and TMJ strain. The strongest chewing muscle, quieted.",
  },
  {
    title: "Tooth & enamel protection",
    body: "Reduced bite force protects fillings, veneers and natural enamel from the chip-and-crack cycles caused by chronic grinding.",
  },
  {
    title: "Doctor-led dosing",
    body: "Dose and placement are matched to muscle size, asymmetry and functional strength — not a flat number from a price list.",
  },
];

const processSteps = [
  {
    n: "01",
    t: "Doctor assessment",
    d: "Your doctor palpates the masseter while you clench to map the strongest muscle belly, judge density and check for right-left imbalance.",
  },
  {
    n: "02",
    t: "Dose planning",
    d: "Dose is set by muscle volume, gender, bite force, symptoms and whether the aim is slimming, bruxism relief or both — never a flat unit count.",
  },
  {
    n: "03",
    t: "Precise placement",
    d: "Small, deep injections into the safe lower body of the masseter, avoiding superficial smile muscles and the parotid region. 15–20 minutes.",
  },
  {
    n: "04",
    t: "Settle & review",
    d: "Back to normal life immediately. Tension eases in 1–2 weeks. Slimming appears by weeks 3–12. We review at 4–6 weeks and refine the next session.",
  },
];

const comparisonRows = [
  ["Best for", "Muscular square jaw, clenching, grinding", "Weak chin, soft jaw border, structural contour"],
  ["Mechanism", "Relaxes and shrinks overactive muscle", "Adds definition and projection with dermal filler"],
  ["Timeline", "Tension improves first; slimming over 4–12 weeks", "Shape is visible immediately"],
  ["Often combined?", "Yes — when both muscle bulk and bone support matter", "Yes — especially chin and jawline balancing"],
];

const planningCards = [
  {
    t: "Strength",
    d: "Large, dense masseters need a different plan from slim patients with mild clenching. Dose is judged by palpable contraction, visible bulge and functional symptoms.",
  },
  {
    t: "Asymmetry",
    d: "One side often works harder. Matching both sides with identical units can preserve imbalance, so the stronger side may need a tailored dose.",
  },
  {
    t: "Face shape",
    d: "The aim is not to erase the jaw. It is to reduce excess muscle bulk whilst preserving natural structure, expression and a healthy chewing function.",
  },
];

const MasseterBotoxM2 = () => {
  const seo = generateSEOMetadata(
    "Masseter Botox London | Jaw Slimming & Bruxism | Harley Street",
    "Doctor-led masseter Botox in London for jaw slimming, teeth grinding and TMJ tension. £350 female / £400 male. Harley Street clinic, since 2007.",
    "/m2/"
  );

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} data-rh="true" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                name: "CosmeDocs",
                url: "https://www.cosmedocs.com/",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "10 Harley Street",
                  addressLocality: "London",
                  postalCode: "W1G 9PF",
                  addressCountry: "GB",
                },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "243" },
              },
              {
                "@type": "MedicalProcedure",
                name: "Masseter Botox",
                alternateName: ["Jaw Slimming Botox", "Masseter Reduction"],
                description:
                  "Doctor-led masseter Botox for jaw slimming, bruxism, teeth grinding and TMJ tension at CosmeDocs Harley Street.",
                url: "https://www.cosmedocs.com/m2/",
                procedureType: "NoninvasiveProcedure",
                bodyLocation: "Masseter muscle, lower face",
                howPerformed:
                  "A doctor assesses masseter size and bite strength, then places precise botulinum toxin doses into the safe muscle body on each side of the jaw.",
                followup: "Review at 4–6 weeks; maintenance every 4–6 months.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "Offer",
                name: "Masseter Botox",
                priceCurrency: "GBP",
                price: "350",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "GBP",
                  minPrice: "350",
                  maxPrice: "400",
                },
                availability: "https://schema.org/InStock",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="treatment-page ios-mobile bg-[#F5F5F3] text-[#0a0a0a] min-h-screen">
        {/* ───── Hero ───── */}
        <header className="bg-[#F5F5F3]">
          <div className="tp-container pt-6 pb-2">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Botox", path: "/treatments/botox/" },
              ]}
              currentPage="Masseter Botox"
            />
          </div>
          <section className="!pt-4">
            <div className="tp-container">
              <p className="eyebrow">Doctor-led · Harley Street · Since 2007</p>
              <h1 className="font-light">
                Masseter Botox <span className="text-[#C9A050]">London</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[#2a2a2a]">
                A quieter jawline. Less clenching. The same face — refined. Doctor-led masseter Botox for jaw slimming, bruxism and TMJ tension.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] italic text-[#C9A050]/90">
                Our aesthetics is invisible art — bold, natural, always your way.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="tp-cta">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/before-after/botox/masseter/"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.95rem] border border-[#0a0a0a]/15 text-[#0a0a0a] text-[15px] font-medium hover:bg-[#0a0a0a]/[0.03] transition"
                >
                  See all before & after
                </Link>
              </div>

              {/* Quick facts */}
              <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "15–20 min" },
                  { icon: <Activity className="w-4 h-4" />, label: "No downtime" },
                  { icon: <Syringe className="w-4 h-4" />, label: "From £350" },
                  { icon: <ShieldCheck className="w-4 h-4" />, label: "Doctor-led" },
                ].map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-2 rounded-2xl bg-white border border-black/[0.06] px-4 py-3 text-[15px]"
                  >
                    <span className="text-[#C9A050]">{f.icon}</span>
                    <span className="text-[#2a2a2a]">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </header>

        {/* ───── His Journey (only male before/after) ───── */}
        <section aria-labelledby="journey-heading">
          <div className="tp-container">
            <p className="eyebrow">Real patient · Real timeline</p>
            <h2 id="journey-heading">
              His <span className="text-[#C9A050]">journey</span> — staged, not stripped
            </h2>
            <p className="mt-3 max-w-2xl text-[#2a2a2a]">
              One male patient. Two stages. The same restraint we apply to every face — small, accurate doses that let the masseter soften over time rather than collapse in one go.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <figure className="rounded-2xl overflow-hidden bg-white border border-black/[0.06]">
                <img
                  src={masseterAfter2Treatments}
                  alt="Male patient before and after two sessions of masseter Botox at CosmeDocs Harley Street — visibly reduced jaw width and softer lower-face contour"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">After 2 treatments</p>
                  <h3 className="!mb-1">Two-session progression</h3>
                  <p className="text-[15px] text-[#2a2a2a]">
                    Baseline to the first visible reduction in lower-face width. Expression and natural smile preserved.
                  </p>
                </figcaption>
              </figure>

              <figure className="rounded-2xl overflow-hidden bg-white border border-black/[0.06]">
                <img
                  src={masseterOneYearAfter3rd}
                  alt="Same male patient one year after a third masseter Botox treatment at CosmeDocs — maintained slimmer jaw and refined lower face"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">1 year · after 3rd session</p>
                  <h3 className="!mb-1">Cumulative atrophy</h3>
                  <p className="text-[15px] text-[#2a2a2a]">
                    A refined, settled jawline — the result of staged maintenance, not a single oversized treatment.
                  </p>
                </figcaption>
              </figure>
            </div>

            <p className="mt-5 text-[13px] text-[#555]">
              Real CosmeDocs patient. Shared with written consent. Individual results vary. For the full set of female and male masseter cases, view our{" "}
              <Link to="/before-after/botox/masseter/" className="text-[#C9A050] underline underline-offset-4">
                masseter gallery
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ───── Clinical anatomy ───── */}
        <section aria-labelledby="anatomy-heading">
          <div className="tp-container">
            <p className="eyebrow">Clinical anatomy</p>
            <h2 id="anatomy-heading">
              What masseter Botox <span className="text-[#C9A050]">actually changes</span>
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#2a2a2a]">
              <p>
                Masseter Botox, also called jaw Botox or jawline slimming Botox, uses botulinum toxin to reduce excessive contraction in the masseter muscle. This is not a filler treatment and it does not carve the jaw bone. It works by calming a powerful chewing muscle so that over time the muscle becomes less bulky.
              </p>
              <p>
                The treatment is useful when lower-face width is muscular rather than skeletal. Patients often describe a square jaw, heavy jaw angle, morning jaw ache, tooth chipping, tension headaches, clenching, grinding or a feeling that the jaw is always switched on. In these cases, the medical and cosmetic aims are linked: reduce the muscle's force and the face can look softer whilst symptoms settle.
              </p>
              <p>
                At CosmeDocs, assessment is doctor-led. We ask you to clench, palpate the strongest part of the muscle, compare both sides and judge whether the target is slimming, bruxism control, TMJ tension support, or a combination.
              </p>
            </div>
          </div>
        </section>

        {/* ───── Benefits ───── */}
        <section aria-labelledby="benefits-heading">
          <div className="tp-container">
            <p className="eyebrow">Dual intent</p>
            <h2 id="benefits-heading">
              What masseter Botox <span className="text-[#C9A050]">treats</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl bg-white border border-black/[0.06] p-5">
                  <h3 className="!mb-1">{b.title}</h3>
                  <p className="text-[15px] text-[#2a2a2a]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Process (4-step) ───── */}
        <section aria-labelledby="how-heading">
          <div className="tp-container">
            <p className="eyebrow">How it works</p>
            <h2 id="how-heading">
              Four steps. <span className="text-[#C9A050]">No drama.</span>
            </h2>
            <ol className="mt-6 space-y-3">
              {processSteps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl bg-white border border-black/[0.06] p-5 flex gap-4"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-[#C9A050] text-black grid place-items-center text-[14px] font-semibold">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="!mb-1">{s.t}</h3>
                    <p className="text-[15px] text-[#2a2a2a]">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───── Dose, strength & symmetry ───── */}
        <section aria-labelledby="planning-heading">
          <div className="tp-container">
            <p className="eyebrow">Clinical planning</p>
            <h2 id="planning-heading">
              How dose, strength and symmetry <span className="text-[#C9A050]">shape the result</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[#2a2a2a]">
              Good masseter treatment starts with diagnosis: is the jaw wide because of muscle, bone, clenching habit, chin position, or a mixture of all four? The answer decides whether Botox alone is right or whether a wider lower-face plan is safer.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {planningCards.map((c) => (
                <div key={c.t} className="rounded-2xl bg-white border border-black/[0.06] p-5">
                  <h3 className="!mb-1">{c.t}</h3>
                  <p className="text-[15px] text-[#2a2a2a]">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.08] p-5">
              <p className="text-[15px] leading-7 text-[#2a2a2a]">
                In research and clinical practice, botulinum toxin can reduce bite force and masseter muscle thickness over time. That does not mean every square jaw should be treated. Some patients have strong bone structure, a short chin, dental bite issues or facial volume loss that would make over-relaxation unflattering. A doctor-led consultation separates these causes before treatment.
              </p>
            </div>
          </div>
        </section>

        {/* ───── Masseter Botox vs Jawline filler ───── */}
        <section aria-labelledby="vs-heading">
          <div className="tp-container">
            <p className="eyebrow">Decision clarity</p>
            <h2 id="vs-heading">
              Masseter Botox vs <span className="text-[#C9A050]">jawline filler</span>
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
              <div className="hidden md:grid grid-cols-3 bg-[#0a0a0a] text-white text-[12px] uppercase tracking-[0.16em]">
                <div className="p-4">Question</div>
                <div className="p-4 border-l border-white/10">Masseter Botox</div>
                <div className="p-4 border-l border-white/10">Jawline filler</div>
              </div>
              {comparisonRows.map(([label, botox, filler]) => (
                <div key={label} className="grid grid-cols-1 md:grid-cols-3 border-t border-black/[0.06] text-[15px]">
                  <div className="p-4 font-medium text-[#0a0a0a] bg-[#fafafa] md:bg-white">{label}</div>
                  <div className="p-4 md:border-l border-black/[0.06] text-[#2a2a2a]">
                    <span className="md:hidden text-[11px] uppercase tracking-[0.16em] text-[#C9A050] block mb-1">Masseter Botox</span>
                    {botox}
                  </div>
                  <div className="p-4 md:border-l border-black/[0.06] text-[#2a2a2a]">
                    <span className="md:hidden text-[11px] uppercase tracking-[0.16em] text-[#C9A050] block mb-1">Jawline filler</span>
                    {filler}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Suitability ───── */}
        <section aria-labelledby="suit-heading">
          <div className="tp-container">
            <p className="eyebrow">Suitability</p>
            <h2 id="suit-heading">
              Who masseter Botox <span className="text-[#C9A050]">suits</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                <h3 className="mt-4 !mb-3">May be suitable</h3>
                <ul className="space-y-2 text-[15px] text-[#2a2a2a] list-disc pl-5">
                  <li>Wide or square jaw caused by muscle bulk</li>
                  <li>Teeth grinding, clenching or jaw ache</li>
                  <li>TMJ tension with masseter overactivity</li>
                  <li>Asymmetry where one masseter is stronger</li>
                  <li>Patients wanting subtle facial narrowing, not a hollow look</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <AlertTriangle className="w-5 h-5 text-[#0a0a0a]/60" />
                <h3 className="mt-4 !mb-3">May not be suitable</h3>
                <ul className="space-y-2 text-[15px] text-[#2a2a2a] list-disc pl-5">
                  <li>Jaw width is mostly bone, not muscle</li>
                  <li>Pregnancy or breastfeeding</li>
                  <li>Active infection at the treatment site</li>
                  <li>Relevant neuromuscular conditions</li>
                  <li>Expecting instant slimming rather than gradual muscle reduction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Evidence & expectations ───── */}
        <section aria-labelledby="evidence-heading">
          <div className="tp-container">
            <p className="eyebrow">Evidence and expectations</p>
            <h2 id="evidence-heading">
              What good treatment <span className="text-[#C9A050]">should feel like</span>
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#2a2a2a]">
              <p>
                Good masseter Botox is not judged only by a slimmer photograph. Patients often report fewer headaches, reduced morning jaw fatigue, less tooth pressure and a calmer bite. Cosmetically, the change should be progressive enough that people notice you look fresher or less heavy in the lower face, not that a treatment has been done.
              </p>
              <p>
                Research on botulinum toxin for bruxism shows reduced bite force and symptom relief in selected patients. For hypertrophy, repeated cycles can reduce the cross-sectional size of the muscle. The clinical skill is knowing when to treat, how much to treat, and when not to over-treat, because a natural jaw still needs function and structure.
              </p>
              <p>
                CosmeDocs links masseter assessment with facial balance. Some patients need Botox only. Others need a combination with{" "}
                <Link to="/treatments/dermal-fillers/chin/" className="text-[#C9A050] underline underline-offset-4">chin filler</Link>,{" "}
                <Link to="/treatments/dermal-fillers/jawline/" className="text-[#C9A050] underline underline-offset-4">jawline filler</Link>, or a wider{" "}
                <Link to="/treatments/non-surgical-facelift/" className="text-[#C9A050] underline underline-offset-4">lower-face balancing plan</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ───── Aftercare ───── */}
        <section aria-labelledby="aftercare-heading">
          <div className="tp-container">
            <p className="eyebrow">Aftercare & recovery</p>
            <h2 id="aftercare-heading">
              Back to normal life — <span className="text-[#C9A050]">immediately</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-5">
                <h3 className="!mb-2">First 24–48 hours</h3>
                <p className="text-[15px] text-[#2a2a2a]">
                  Avoid strenuous exercise, rubbing the jaw, lying flat straight after treatment, saunas and heavy alcohol. Avoid gum or excessive chewing for 48 hours. Small bruises are uncommon and short-lived.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-5">
                <h3 className="!mb-2">First year</h3>
                <p className="text-[15px] text-[#2a2a2a]">
                  Symptom relief begins before visible slimming — clenching usually eases first, then bulk reduces over weeks. Large masseters often need staged treatments in year one. Once settled, maintenance is spaced to your muscle return and aesthetic endpoint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Pricing ───── */}
        <section aria-labelledby="pricing-heading">
          <div className="tp-container">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-heading">
              Clear pricing. <span className="text-[#C9A050]">No add-ons.</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Female</p>
                <p className="text-4xl font-light">£350</p>
                <p className="mt-2 text-[15px] text-[#2a2a2a]">Standard masseter dose. Includes consultation and review.</p>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Male</p>
                <p className="text-4xl font-light">£400</p>
                <p className="mt-2 text-[15px] text-[#2a2a2a]">Higher unit dose for denser masseter muscle. Includes consultation and review.</p>
              </div>
            </div>
            <p className="mt-4 text-[13px] text-[#555]">
              We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
            </p>
          </div>
        </section>

        {/* ───── FAQs ───── */}
        <section aria-labelledby="faq-heading">
          <div className="tp-container">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-heading">
              Honest <span className="text-[#C9A050]">answers</span>
            </h2>
            <div className="mt-6 rounded-2xl bg-white border border-black/[0.06] overflow-hidden divide-y divide-black/[0.06]">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5 open:bg-black/[0.02]">
                  <summary className="flex justify-between items-center gap-4 cursor-pointer list-none">
                    <h3 className="!mb-0 text-[17px] font-medium">{f.q}</h3>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-black/15 grid place-items-center text-[15px] text-[#C9A050] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-[#2a2a2a]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="!pt-6 !pb-16">
          <div className="tp-container">
            <div className="rounded-3xl bg-[#0a0a0a] text-white p-8 md:p-12 text-center">
              <Sparkles className="w-6 h-6 text-[#C9A050] mx-auto mb-4" />
              <h2 className="!mb-3 text-white">
                Your consultation <span className="text-[#C9A050]">begins here</span>
              </h2>
              <p className="text-white/70 max-w-xl mx-auto text-[15px]">
                A calmer jaw. A softer lower face. Still completely you. Book a doctor-led assessment for masseter size, bite force, bruxism symptoms and facial balance.
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="tp-cta mt-6 inline-flex"
              >
                Book at Harley Street <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MasseterBotoxM2;
