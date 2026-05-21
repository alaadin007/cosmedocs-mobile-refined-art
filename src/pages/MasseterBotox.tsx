import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Gauge,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Images,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ExpandableSection from "@/components/ui/expandable-section";
import Breadcrumb from "@/components/Breadcrumb";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import jawIllustration from "@/assets/jaw-profile-illustration.png";
import stageBaseline from "@/assets/before-after/masseter-series/1-before-hsi-xl-right.jpg";
import stageFirstTreatment from "@/assets/before-after/masseter-series/2-after-first-treatment.jpg";
import stageSecondTreatment from "@/assets/before-after/masseter-series/3-after-second-treatment.jpg";
import stageMaintained from "@/assets/before-after/masseter-series/4-final-maintained-result.jpg";

const faqs = [
  {
    question: "How long does masseter Botox last?",
    answer:
      "Masseter Botox usually lasts 4–6 months. In larger or very active masseter muscles, the first year may need closer maintenance because the muscle is strong and used every day for chewing and clenching. Once cumulative atrophy is achieved, many patients move to two sessions a year, then annual review depending on symptoms and muscle return.",
  },
  {
    question: "Is masseter Botox for jaw slimming or teeth grinding?",
    answer:
      "It can be both. Cosmetically, it reduces bulky masseter muscle to soften a square lower face. Medically, it reduces excessive bite force, clenching, jaw tension, TMJ strain and bruxism-related headaches. The same muscle is being treated; the treatment plan is adjusted according to whether your main concern is shape, symptoms, or both.",
  },
  {
    question: "How much does masseter Botox cost at CosmeDocs?",
    answer:
      "Masseter Botox is £350 for female patients and £400 for male patients. Male or very strong masseters often require higher dosing because the muscle is denser and stronger. Your doctor confirms the dose after palpating the muscle at rest and during clenching.",
  },
  {
    question: "Will it affect chewing?",
    answer:
      "The aim is partial relaxation, not paralysis. Some patients notice temporary chewing fatigue with tough foods for a few days, especially after their first treatment, but normal eating, speech and expression are preserved when dosing is placed correctly inside the muscle body.",
  },
  {
    question: "When will I see jaw slimming?",
    answer:
      "Jaw tension may start easing within 7–14 days. Visible slimming is slower because the muscle has to reduce in bulk. Most patients see early contour change by weeks 3–4 and a clearer reduction by weeks 6–12, especially after repeat treatment cycles.",
  },
  {
    question: "What are the side effects?",
    answer:
      "Common effects are mild tenderness, small bruises or temporary chewing fatigue. Uncommon risks include smile asymmetry, under-treatment, over-softening, or paradoxical bulging if the strongest part of the muscle is missed. This is why CosmeDocs uses doctor-led assessment and conservative anatomical dosing.",
  },
];

const caseStages = [
  {
    src: stageBaseline,
    badge: "Stage 1 · Baseline",
    title: "Before treatment — asymmetric masseter hypertrophy",
    note: "HSI Masseter Scale · R: XL · L: L",
    caption:
      "The right masseter is graded XL and the left Large on the HSI Masseter Scale. The lower face is broad, square and heavy, with right-sided dominance from chronic clenching and grinding.",
    alt: "Before masseter Botox showing asymmetric male masseter hypertrophy, right XL and left large, CosmeDocs Harley Street London",
    imageClass: "object-contain p-2",
  },
  {
    src: stageFirstTreatment,
    badge: "Stage 2 · 3 months post 1st session",
    title: "3 months after first treatment",
    caption:
      "The first cycle has started visible atrophy. Bulk is softer on both sides and asymmetry begins to settle, whilst the patient reports less morning jaw tension and less grinding.",
    alt: "Masseter Botox three months after first treatment showing softer jaw muscle bulk and improved symmetry",
    imageClass: "object-cover object-center",
  },
  {
    src: stageSecondTreatment,
    badge: "Stage 3 · 3 months post 2nd session",
    title: "3 months after second treatment",
    caption:
      "Cumulative atrophy is now clearer. The lower face looks leaner, the jaw angle is less dominant and the right-left imbalance has improved without hollowing the face.",
    alt: "Masseter Botox three months after second treatment showing cumulative jaw slimming and improved facial balance",
    imageClass: "object-cover object-center",
  },
  {
    src: stageMaintained,
    badge: "Stage 4 · Final maintained result",
    title: "3 months after third treatment",
    caption:
      "A stable maintained result: refined, natural and still masculine. Maintenance was planned twice yearly initially, then annually once the muscle bulk had been controlled.",
    alt: "Final maintained result after masseter Botox showing refined male jawline at CosmeDocs London",
    imageClass: "object-cover object-center",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Jaw slimming",
    text: "Reduces muscle-driven width at the jaw angle for a softer, more balanced lower face.",
  },
  {
    icon: Stethoscope,
    title: "Bruxism relief",
    text: "Lowers excessive bite force that contributes to grinding, dental wear and morning jaw ache.",
  },
  {
    icon: Gauge,
    title: "TMJ tension support",
    text: "Helps reduce overactivity in the chewing muscle that can overload the jaw joint.",
  },
  {
    icon: ShieldCheck,
    title: "Doctor-led dosing",
    text: "Dose and placement are matched to muscle size, asymmetry and functional strength.",
  },
];

const processSteps = [
  "Your doctor palpates the masseter while you clench to map the strongest muscle belly and any right-left imbalance.",
  "Dose is planned according to size, gender, bite force, symptoms and whether the aim is slimming, bruxism relief or both.",
  "Tiny injections are placed into the safe body of the muscle, avoiding superficial smile muscles and the parotid region.",
  "You return to normal life immediately, with simple aftercare: no rubbing, heavy exercise or excessive chewing for 24–48 hours.",
];

const comparisonRows = [
  ["Best for", "Muscular square jaw, clenching, grinding", "Weak chin, soft jaw border, structural contour"],
  ["Mechanism", "Relaxes and shrinks overactive muscle", "Adds definition and projection with dermal filler"],
  ["Timeline", "Tension improves first; slimming over 4–12 weeks", "Shape is visible immediately"],
  ["Often combined?", "Yes — when both muscle bulk and bone support matter", "Yes — especially chin and jawline balancing"],
];

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const MasseterBotox = () => {
  const pageTitle = "Masseter Botox London | Jaw Slimming & Bruxism";
  const pageDescription =
    "Doctor-led masseter Botox in London for jaw slimming, bruxism, teeth grinding and TMJ tension. Harley Street treatment from £350 female / £400 male.";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "CosmeDocs",
        url: "https://www.cosmedocs.com/",
        description: "Doctor-led aesthetic medicine clinic on Harley Street, London.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Harley Street",
          addressLocality: "London",
          postalCode: "W1G 9PF",
          addressCountry: "GB",
        },
        medicalSpecialty: "Aesthetic Medicine",
        priceRange: "££",
      },
      {
        "@type": "MedicalProcedure",
        name: "Masseter Botox",
        url: "https://www.cosmedocs.com/treatments/masseter-botox/",
        procedureType: "NoninvasiveProcedure",
        bodyLocation: "Masseter muscle",
        description:
          "Botulinum toxin treatment into the masseter muscles for jaw slimming, bruxism relief, jaw clenching and TMJ-related muscle tension.",
        howPerformed:
          "A doctor assesses masseter size and bite strength, then places precise botulinum toxin doses into the safe muscle body on each side of the jaw.",
        followup: "Results are reviewed according to symptom relief and visible muscle reduction over 4–12 weeks.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ImageGallery",
        name: "Masseter Botox progression case series",
        description:
          "Four-stage clinical progression of a real CosmeDocs patient showing cumulative masseter reduction after doctor-led treatment.",
        image: caseStages.map((stage, index) => ({
          "@type": "ImageObject",
          name: `Masseter Botox Stage ${index + 1}: ${stage.title}`,
          description: stage.caption,
          creator: { "@type": "Organization", name: "CosmeDocs" },
          creditText: "CosmeDocs Harley Street",
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/masseter-botox/" data-rh="true" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/masseter-botox/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
      </Helmet>

      <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-border bg-background px-4 pb-14 pt-4 sm:px-6 lg:pb-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_10%,hsl(var(--luxury-gold)/0.14),transparent_34%),linear-gradient(180deg,hsl(var(--secondary))_0%,hsl(var(--background))_54%)]" />
          <div className="relative mx-auto max-w-7xl">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Botox Treatments", path: "/treatments/botox/" },
              ]}
              currentPage="Masseter Botox"
            />

            <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:pt-16">
              <motion.div {...sectionReveal} className="max-w-3xl">
                <Link
                  to="/treatments/botox/"
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-luxury-gold/25 bg-luxury-gold/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-luxury-gold transition-colors hover:text-luxury-gold-bright"
                >
                  <ArrowRight className="h-3 w-3 rotate-180" /> Botox treatment hub
                </Link>
                <h1 className="text-4xl font-light leading-tight tracking-normal text-foreground sm:text-5xl lg:text-7xl">
                  Masseter Botox for jaw slimming and bruxism
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Doctor-led treatment for patients whose lower-face width, jaw tension or teeth grinding is driven by an overactive masseter muscle. The aim is controlled reduction: quieter function, softer bulk and a result that still looks like you.
                </p>
                <p className="mt-5 max-w-xl text-sm italic leading-7 text-luxury-gold/85">
                  Our aesthetics is invisible art — bold, natural, always your way.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["From", "£350 / £400"],
                    ["Time", "15–20 min"],
                    ["Effect", "1–2 weeks"],
                    ["Slimming", "4–12 weeks"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-border bg-card/80 p-4 shadow-[0_18px_50px_-28px_hsl(var(--luxury-gold)/0.45)] backdrop-blur">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold">{label}</p>
                      <p className="mt-2 text-sm font-medium text-card-foreground">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-full bg-primary px-7 py-6 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto">
                      Book consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/before-after/botox/masseter/">
                    <Button variant="outline" className="w-full rounded-full border-luxury-gold/35 bg-transparent px-7 py-6 text-base text-foreground hover:bg-luxury-gold/10 sm:w-auto">
                      View masseter results
                    </Button>
                  </Link>
                  <Link to="/before-after/" className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-3 text-sm text-luxury-gold transition-colors hover:text-luxury-gold-bright sm:px-4">
                    All before & afters <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.figure {...sectionReveal} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <div className="absolute inset-8 rounded-full bg-luxury-gold/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-luxury-gold/20 bg-card/85 p-6 shadow-[0_35px_90px_-45px_hsl(var(--luxury-gold)/0.7)] backdrop-blur">
                  <img
                    src={jawIllustration}
                    alt="Clinical jaw profile illustration showing the masseter area treated for jaw slimming and bruxism"
                    className="mx-auto aspect-square w-full object-contain"
                  />
                  <figcaption className="border-t border-border pt-5 text-sm leading-7 text-muted-foreground">
                    The masseter is a chewing muscle. If it becomes bulky through clenching or grinding, it can widen the lower face and overload the jaw joint.
                  </figcaption>
                </div>
              </motion.figure>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="space-y-16">
              <motion.section {...sectionReveal} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_24px_70px_-52px_hsl(var(--luxury-gold)/0.8)]">
                    <Icon className="h-5 w-5 text-luxury-gold" />
                    <h2 className="mt-5 text-lg font-medium text-card-foreground">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </motion.section>

              <motion.section {...sectionReveal} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Clinical anatomy</p>
                  <h2 className="mt-3 text-3xl font-light leading-tight text-foreground sm:text-4xl">
                    What masseter Botox actually changes
                  </h2>
                </div>
                <div className="space-y-5 text-sm leading-8 text-muted-foreground sm:text-base">
                  <p>
                    Masseter Botox, also called jaw Botox or jawline slimming Botox, uses botulinum toxin to reduce excessive contraction in the masseter muscle. This is not a filler treatment and it does not carve the jaw bone. It works by calming a powerful chewing muscle so that over time the muscle becomes less bulky.
                  </p>
                  <p>
                    The treatment is useful when lower-face width is muscular rather than skeletal. Patients often describe a square jaw, heavy jaw angle, morning jaw ache, tooth chipping, tension headaches, clenching, grinding or a feeling that the jaw is always switched on. In these cases, the medical and cosmetic aims are linked: reduce the muscle’s force and the face can look softer whilst symptoms settle.
                  </p>
                  <p>
                    At CosmeDocs, assessment is doctor-led. We ask you to clench, palpate the strongest part of the muscle, compare both sides and judge whether the target is slimming, bruxism control, TMJ tension support, or a combination. Our aesthetics is invisible art — bold, natural, always your way.
                  </p>
                </div>
              </motion.section>

              <motion.section {...sectionReveal} className="overflow-hidden rounded-[2rem] border border-border bg-secondary/40 py-10">
                <div className="mb-8 flex flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Real patient progression</p>
                    <h2 className="mt-3 text-3xl font-light leading-tight text-foreground sm:text-4xl">
                      The full masseter Botox before-and-after journey
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                      Swipe through the series. The first image is shown with a looser crop so the original jaw width and asymmetry can be seen clearly.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/before-after/botox/masseter/" className="inline-flex items-center gap-2 rounded-full border border-luxury-gold/30 px-4 py-2 text-sm text-luxury-gold hover:bg-luxury-gold/10">
                      Masseter gallery <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/before-after/" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                      All before & afters <Images className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div
                  className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 pl-4 pr-4 sm:gap-5 sm:pl-6 sm:pr-6 lg:gap-6"
                  style={{ touchAction: "pan-x", overscrollBehaviorX: "contain", WebkitOverflowScrolling: "touch" }}
                >
                  {caseStages.map((stage, index) => (
                    <figure key={stage.title} className="group flex-shrink-0 w-[78vw] max-w-[440px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_35px_90px_-55px_hsl(var(--luxury-gold)/0.65)] sm:w-[380px] md:w-[420px]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-background">
                        <img
                          src={stage.src}
                          alt={stage.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          draggable={false}
                          className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.025] ${stage.imageClass}`}
                        />
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/80 via-background/20 to-transparent pointer-events-none" />
                        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-luxury-gold px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-background shadow-lg">
                          {stage.badge}
                        </span>
                        {stage.note && (
                          <span className="absolute bottom-4 left-4 right-4 rounded-2xl border border-luxury-gold/35 bg-background/80 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-luxury-gold backdrop-blur">
                            {stage.note}
                          </span>
                        )}
                      </div>
                      <figcaption className="p-5 sm:p-6">
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-luxury-gold">{stage.title}</p>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">{stage.caption}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <p className="px-4 pt-2 text-xs leading-6 text-muted-foreground sm:px-6">
                  Published with written informed consent. Real CosmeDocs patient imagery only — never stock, never AI, never exaggerated. Individual treatment plans and results vary.
                </p>
              </motion.section>

              <motion.section {...sectionReveal}>
                <ExpandableSection
                  label="Read the full clinical planning guide"
                  collapseLabel="Show less clinical detail"
                  preview={
                    <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
                      <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Read more</p>
                      <h2 className="mt-3 text-3xl font-light leading-tight text-card-foreground sm:text-4xl">
                        How dose, strength and symmetry shape the result
                      </h2>
                      <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
                        Good masseter treatment starts with diagnosis: is the jaw wide because of muscle, bone, clenching habit, chin position, or a mixture of all four? The answer decides whether Botox alone is right or whether a wider lower-face plan is safer.
                      </p>
                    </div>
                  }
                >
                  <div className="grid gap-5 rounded-[2rem] border border-border bg-secondary/40 p-6 sm:grid-cols-3 sm:p-8">
                    {[
                      {
                        title: "Strength",
                        text: "Large, dense masseters need a different plan from slim patients with mild clenching. Dose is judged by palpable contraction, visible bulge and functional symptoms.",
                      },
                      {
                        title: "Asymmetry",
                        text: "One side often works harder. Matching both sides with identical units can preserve imbalance, so the stronger side may need a tailored dose.",
                      },
                      {
                        title: "Face shape",
                        text: "The aim is not to erase the jaw. It is to reduce excess muscle bulk whilst preserving natural structure, expression and a healthy chewing function.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-3xl border border-border bg-background/70 p-5">
                        <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                    <div className="sm:col-span-3 rounded-3xl border border-luxury-gold/25 bg-luxury-gold/10 p-5">
                      <p className="text-sm leading-8 text-muted-foreground">
                        In research and clinical practice, botulinum toxin can reduce bite force and masseter muscle thickness over time. That does not mean every square jaw should be treated. Some patients have strong bone structure, a short chin, dental bite issues or facial volume loss that would make over-relaxation unflattering. A doctor-led consultation separates these causes before treatment.
                      </p>
                    </div>
                  </div>
                </ExpandableSection>
              </motion.section>

              <motion.section {...sectionReveal} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Treatment process</p>
                  <h2 className="mt-3 text-3xl font-light leading-tight text-foreground sm:text-4xl">
                    How the procedure works
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-muted-foreground">
                    A careful appointment is brief, but the planning matters. The safest results come from understanding the muscle’s size, depth and direction before deciding dose.
                  </p>
                </div>
                <ol className="space-y-4">
                  {processSteps.map((step, index) => (
                    <li key={step} className="grid grid-cols-[44px_1fr] gap-4 rounded-3xl border border-border bg-card p-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm text-luxury-gold">{index + 1}</span>
                      <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                    </li>
                  ))}
                </ol>
              </motion.section>

              <motion.section {...sectionReveal} className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Decision clarity</p>
                  <h2 className="mt-3 text-3xl font-light leading-tight text-foreground sm:text-4xl">
                    Masseter Botox vs jawline filler
                  </h2>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-border">
                  <div className="hidden grid-cols-3 bg-secondary text-xs uppercase tracking-[0.16em] text-muted-foreground sm:grid">
                    <div className="p-4">Question</div>
                    <div className="border-l border-border p-4">Masseter Botox</div>
                    <div className="border-l border-border p-4">Jawline filler</div>
                  </div>
                  {comparisonRows.map(([label, botox, filler]) => (
                    <div key={label} className="grid grid-cols-1 border-t border-border text-sm leading-7 text-muted-foreground sm:grid-cols-3">
                      <div className="bg-card p-4 font-medium text-foreground">{label}</div>
                      <div className="border-t border-border p-4 sm:border-l sm:border-t-0"><span className="sm:hidden text-luxury-gold">Masseter Botox: </span>{botox}</div>
                      <div className="border-t border-border p-4 sm:border-l sm:border-t-0"><span className="sm:hidden text-luxury-gold">Jawline filler: </span>{filler}</div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section {...sectionReveal} className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
                  <CheckCircle className="h-5 w-5 text-luxury-gold" />
                  <h2 className="mt-5 text-2xl font-light text-card-foreground">May be suitable</h2>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    <li>Wide or square jaw caused by muscle bulk</li>
                    <li>Teeth grinding, clenching or jaw ache</li>
                    <li>TMJ tension with masseter overactivity</li>
                    <li>Asymmetry where one masseter is stronger</li>
                    <li>Patients wanting subtle facial narrowing, not a hollow look</li>
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
                  <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                  <h2 className="mt-5 text-2xl font-light text-card-foreground">May not be suitable</h2>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    <li>Jaw width is mostly bone, not muscle</li>
                    <li>Pregnancy or breastfeeding</li>
                    <li>Active infection at the treatment site</li>
                    <li>Relevant neuromuscular conditions</li>
                    <li>Expecting instant slimming rather than gradual muscle reduction</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section {...sectionReveal} className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Evidence and expectations</p>
                  <h2 className="mt-3 text-3xl font-light leading-tight text-foreground sm:text-4xl">
                    What good treatment should feel like
                  </h2>
                </div>
                <div className="space-y-5 text-sm leading-8 text-muted-foreground sm:text-base">
                  <p>
                    Good masseter Botox is not judged only by a slimmer photograph. Patients often report fewer headaches, reduced morning jaw fatigue, less tooth pressure and a calmer bite. Cosmetically, the change should be progressive enough that people notice you look fresher or less heavy in the lower face, not that a treatment has been done.
                  </p>
                  <p>
                    Research on botulinum toxin for bruxism shows reduced bite force and symptom relief in selected patients. For hypertrophy, repeated cycles can reduce the cross-sectional size of the muscle. The clinical skill is knowing when to treat, how much to treat, and when not to over-treat, because a natural jaw still needs function and structure.
                  </p>
                  <p>
                    CosmeDocs links masseter assessment with facial balance. Some patients need Botox only. Others need a combination with <Link to="/treatments/dermal-fillers/chin/" className="text-luxury-gold underline underline-offset-4">chin filler</Link>, <Link to="/treatments/dermal-fillers/jawline/" className="text-luxury-gold underline underline-offset-4"> jawline filler</Link> or a wider <Link to="/treatments/non-surgical-facelift/" className="text-luxury-gold underline underline-offset-4"> lower-face balancing plan</Link>. The consultation separates muscle problems from structure problems.
                  </p>
                </div>
              </motion.section>

              <motion.section {...sectionReveal}>
                <ExpandableSection
                  label="Read aftercare and maintenance detail"
                  collapseLabel="Show less aftercare detail"
                  preview={
                    <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <Clock className="mt-1 h-5 w-5 shrink-0 text-luxury-gold" />
                        <div>
                          <h2 className="text-2xl font-light text-card-foreground">Aftercare and recovery</h2>
                          <p className="mt-4 text-sm leading-8 text-muted-foreground">
                            You can return to normal activity immediately. For the first 24 hours, avoid strenuous exercise, rubbing the jaw, lying flat straight after treatment, saunas and heavy alcohol. Avoid gum or excessive chewing for 48 hours. If bruising occurs, it is usually small and short-lived.
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="rounded-[2rem] border border-border bg-secondary/40 p-6 sm:p-8">
                    <p className="text-sm leading-8 text-muted-foreground">
                      Symptom relief may begin before visible slimming. Patients with bruxism often notice less jaw pressure first, then muscle bulk gradually reduces over the following weeks. For large masseters, the first year may involve staged treatments because one session is rarely enough to reverse years of clenching. Once the muscle has softened and the face is balanced, maintenance is spaced according to muscle return, symptoms and the patient’s preferred aesthetic endpoint.
                    </p>
                  </div>
                </ExpandableSection>
              </motion.section>

              <motion.section {...sectionReveal}>
                <h2 className="text-3xl font-light leading-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
                <Accordion type="single" collapsible className="mt-6 space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`} className="rounded-3xl border border-border bg-card px-5">
                      <AccordionTrigger className="text-left text-sm font-medium text-card-foreground hover:text-luxury-gold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>
            </article>

            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-[2rem] border border-luxury-gold/20 bg-card p-6 shadow-[0_35px_90px_-55px_hsl(var(--luxury-gold)/0.7)]">
                <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">At a glance</p>
                <h2 className="mt-3 text-2xl font-light text-card-foreground">Masseter Botox</h2>
                <dl className="mt-6 space-y-4 text-sm">
                  {[
                    ["Price", "£350 female / £400 male"],
                    ["Best for", "Jaw slimming, bruxism, clenching"],
                    ["Downtime", "None"],
                    ["Maintenance", "Usually 2–3 times yearly at first"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-t border-border pt-4">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="mt-1 text-card-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="mt-7 block">
                  <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Book consultation</Button>
                </a>
                <div className="mt-4 grid gap-2">
                  <Link to="/before-after/botox/masseter/" className="rounded-full border border-border px-4 py-2 text-center text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    Masseter before & afters
                  </Link>
                  <Link to="/before-after/" className="rounded-full border border-border px-4 py-2 text-center text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    All treatment galleries
                  </Link>
                </div>
                <p className="mt-5 text-xs leading-6 text-muted-foreground">
                  We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-border bg-secondary px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Your consultation begins here</p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-foreground sm:text-4xl">
              A calmer jaw. A softer lower face. Still completely you.
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
              Book a doctor-led assessment for masseter size, bite force, bruxism symptoms and facial balance.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full bg-primary px-7 py-6 text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  Book consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/contact/">
                <Button variant="outline" className="w-full rounded-full border-border bg-transparent px-7 py-6 text-foreground hover:bg-accent sm:w-auto">
                  Ask a question
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <SkinFoundationCTA variant="general" />
          </div>
        </section>
      </main>
    </>
  );
};

export default MasseterBotox;
