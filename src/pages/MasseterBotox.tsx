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
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ExpandableSection from "@/components/ui/expandable-section";
import Breadcrumb from "@/components/Breadcrumb";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import TreatmentPaymentInfo from '@/components/TreatmentPaymentInfo';
import jawIllustration from "@/assets/jaw-profile-illustration.png";
import masseterAfter2Treatments from "@/assets/before-after/masseter-series/after-2-treatments.jpg";
import masseterOneYearAfter3rd from "@/assets/before-after/masseter-series/one-year-after-3rd.jpg";
import masseterBa1 from "@/assets/before-after/masseter-ba-1.png";
import masseterBa2 from "@/assets/before-after/masseter-ba-2.jpg";
import masseterBa3 from "@/assets/before-after/masseter-ba-3.jpg";
import masseterBa4 from "@/assets/before-after/masseter-ba-4.jpg";
import masseterBa5 from "@/assets/before-after/masseter-ba-5.jpg";
import masseterBa6 from "@/assets/before-after/masseter-ba-6.jpg";

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

const caseStages: Array<{ src: string; badge: string; title: string; note?: string; caption: string; alt: string; imageClass: string }> = [
  {
    src: masseterAfter2Treatments,
    badge: "Before & After · 2 Treatments",
    title: "Two-session progression",
    note: "Real CosmeDocs patient",
    caption: "Top: baseline showing fuller lower face from masseter hypertrophy. Bottom: outcome after two masseter Botox sessions — softer jaw width and a more balanced lower face, with natural expression preserved.",
    alt: "Male patient before and after two sessions of masseter Botox at CosmeDocs Harley Street, showing reduced jaw width and softer lower face contour",
    imageClass: "object-cover object-center",
  },
  {
    src: masseterOneYearAfter3rd,
    badge: "One Year On · After 3rd Session",
    title: "Maintained result",
    note: "Cumulative atrophy",
    caption: "One year on, following a third maintenance session. The masseter has settled into a refined, naturally slimmer jaw line — the cumulative effect of staged, doctor-led dosing rather than a single oversized treatment.",
    alt: "Same male patient one year after third masseter Botox treatment at CosmeDocs, showing maintained slimmer jaw and refined lower face",
    imageClass: "object-cover object-center",
  },
];

const resultCards: Array<{ src: string; badge: string; title: string; caption: string; alt: string }> = [
  {
    src: masseterAfter2Treatments,
    badge: "2 treatments",
    title: "Two-session progression",
    caption: "Baseline to staged masseter reduction with natural lower-face balance preserved.",
    alt: "Before and after two sessions of masseter Botox showing reduced jaw width",
  },
  {
    src: masseterOneYearAfter3rd,
    badge: "One year on",
    title: "Maintained result",
    caption: "Cumulative muscle softening after maintenance treatment, without changing expression.",
    alt: "One year after third masseter Botox treatment showing maintained slimmer jaw",
  },
  {
    src: masseterBa1,
    badge: "Real result",
    title: "Lower-face contour",
    caption: "A softer jaw angle where masseter bulk was contributing to lower-face width.",
    alt: "Masseter Botox before and after showing reduced jaw muscle bulk from angled view",
  },
  {
    src: masseterBa2,
    badge: "Jaw slimming",
    title: "Profile refinement",
    caption: "Gradual facial slimming with proportions kept quiet, natural and patient-specific.",
    alt: "Masseter Botox before and after comparison from side and front profile",
  },
  {
    src: masseterBa3,
    badge: "Split view",
    title: "Tapered balance",
    caption: "A wider lower face transitions towards a more balanced, tapered contour.",
    alt: "Before and after split view showing jawline slimming with masseter Botox",
  },
  {
    src: masseterBa4,
    badge: "Progression",
    title: "Subtle narrowing",
    caption: "Visible muscle refinement over time, avoiding an over-treated hollow look.",
    alt: "Masseter Botox progressive results showing facial slimming over time",
  },
  {
    src: masseterBa5,
    badge: "Long term",
    title: "Natural contour",
    caption: "Longer-term masseter reduction with the patient’s own facial structure maintained.",
    alt: "Long-term masseter Botox results with facial contouring improvement",
  },
  {
    src: masseterBa6,
    badge: "Face shape",
    title: "Square to softer",
    caption: "A square lower-face profile softens into a quieter, more oval contour.",
    alt: "Before and after masseter Botox showing face shape transition from square to oval",
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
  { title: "Doctor assessment", body: "Your doctor palpates the masseter while you clench to map the strongest muscle belly and any right-left imbalance." },
  { title: "Dose planning", body: "Dose is planned according to size, gender, bite force, symptoms and whether the aim is slimming, bruxism relief or both." },
  { title: "Precise injection", body: "Tiny injections are placed into the safe body of the muscle, avoiding superficial smile muscles and the parotid region." },
  { title: "Return to life", body: "You return to normal life immediately, with simple aftercare: no rubbing, heavy exercise or excessive chewing for 24–48 hours." },
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

const ProcessStepper = ({ steps }: { steps: { title: string; body: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <ol className="space-y-3">
      {steps.map((step, index) => {
        const isOpen = openIndex === index;
        return (
          <li
            key={step.title}
            className={`rounded-2xl border bg-card transition-colors ${isOpen ? "border-luxury-gold/60 border-l-4 border-l-luxury-gold" : "border-border"}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center gap-4 p-4 text-left min-h-[52px]"
              aria-expanded={isOpen}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm transition-colors ${isOpen ? "bg-luxury-gold text-background" : "bg-secondary text-luxury-gold"}`}>
                {index + 1}
              </span>
              <span className={`flex-1 text-sm font-medium ${isOpen ? "text-luxury-gold" : "text-card-foreground"}`}>
                {step.title}
              </span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 pl-[4.5rem] text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
};

const MasseterBotox = () => {
  const pageTitle = "Masseter Botox London | Jaw Slimming & Bruxism";
  const pageDescription =
    "Doctor-led masseter Botox in London for jaw slimming, bruxism, teeth grinding and TMJ tension. Harley Street treatment from £350 female / £400 male.";
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const activeResult = resultCards[activeResultIndex];
  const showPreviousResult = () => setActiveResultIndex((index) => (index === 0 ? resultCards.length - 1 : index - 1));
  const showNextResult = () => setActiveResultIndex((index) => (index + 1) % resultCards.length);

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

      <main className="treatment-page ios-mobile min-h-screen overflow-x-hidden bg-background text-foreground pb-24 lg:pb-0">
        <section className="relative overflow-hidden border-b border-border bg-background px-4 pb-8 pt-4 sm:px-6 sm:pb-14 lg:pb-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_10%,hsl(var(--luxury-gold)/0.14),transparent_34%),linear-gradient(180deg,hsl(var(--secondary))_0%,hsl(var(--background))_54%)]" />
          <div className="relative mx-auto max-w-7xl">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Botox Treatments", path: "/treatments/botox/" },
              ]}
              currentPage="Masseter Botox"
            />

            <div className="grid gap-6 pt-4 sm:gap-10 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:pt-16">
              <motion.div {...sectionReveal} className="max-w-3xl">
                <Link
                  to="/treatments/botox/"
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-luxury-gold/25 bg-luxury-gold/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-luxury-gold transition-colors hover:text-luxury-gold-bright sm:mb-5 sm:px-4 sm:py-2 sm:text-[11px]"
                >
                  <ArrowRight className="h-3 w-3 rotate-180" /> Botox treatment hub
                </Link>
                <h1 className="text-3xl font-light leading-tight tracking-normal text-foreground sm:text-5xl lg:text-7xl">
                  Masseter Botox for jaw slimming and bruxism
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                  Doctor-led treatment for patients whose lower-face width, jaw tension or teeth grinding is driven by an overactive masseter muscle.
                </p>
                <p className="mt-5 hidden max-w-xl text-sm italic leading-7 text-luxury-gold/85 sm:block">
                  Our aesthetics is invisible art — bold, natural, always your way.
                </p>

                <div className="mt-5 hidden grid-cols-2 gap-3 sm:mt-8 sm:grid sm:grid-cols-4">
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

                <div className="mt-5 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-7 sm:py-6 sm:text-base">
                      Book consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/before-after/botox/masseter/" className="inline-block">
                    <Button variant="outline" className="w-full rounded-full border-luxury-gold/35 bg-transparent px-6 py-3 text-sm text-foreground hover:bg-luxury-gold/10 sm:w-auto sm:px-7 sm:py-6 sm:text-base">
                      View masseter results
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.figure {...sectionReveal} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="relative mx-auto hidden w-full max-w-sm sm:block lg:max-w-md">
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


        <section className="px-4 py-6 sm:px-6 sm:py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="min-w-0 space-y-6 sm:space-y-16">
              <motion.section {...sectionReveal}>
                <div className="grid grid-cols-2 gap-2 sm:gap-5 lg:grid-cols-4">
                  {benefits.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-xl border border-border bg-card p-2.5 shadow-[0_24px_70px_-52px_hsl(var(--luxury-gold)/0.8)] sm:rounded-[1.5rem] sm:p-6">
                      <Icon className="h-4 w-4 text-luxury-gold sm:h-5 sm:w-5" />
                      <h2 className="mt-1.5 text-[12px] font-medium leading-tight text-card-foreground sm:mt-5 sm:text-lg">{title}</h2>
                      <p className="mt-2 hidden text-sm leading-7 text-muted-foreground sm:mt-3 sm:block">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:hidden">
                  <ExpandableSection label="See full benefit details" collapseLabel="Hide benefit details" preview={null}>
                    <div className="space-y-3 rounded-2xl border border-border bg-card p-4">
                      {benefits.map(({ icon: Icon, title, text }) => (
                        <div key={title} className="flex gap-3">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-luxury-gold" />
                          <div>
                            <p className="text-sm font-medium text-card-foreground">{title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </div>
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

              {resultCards.length > 0 && (
              <motion.section {...sectionReveal} className="min-w-0 overflow-hidden rounded-[1.5rem] border border-border bg-secondary/40 py-7 sm:rounded-[2rem] sm:py-10">

                <div className="mb-5 flex flex-col gap-4 px-4 sm:mb-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-luxury-gold">Real patient progression</p>
                    <h2 className="mt-2 max-w-full text-2xl font-light leading-tight text-foreground sm:mt-3 sm:text-4xl">
                      Masseter Botox before & after results
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:leading-7">
                      Swipe or use the arrows to view real CosmeDocs patient results. Each card opens the dedicated masseter gallery for the full before-and-after set.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link to="/before-after/botox/masseter/" className="inline-flex items-center justify-center gap-2 rounded-full border border-luxury-gold/30 px-4 py-2 text-sm text-luxury-gold hover:bg-luxury-gold/10">
                      Masseter gallery <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/before-after/" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                      All before & afters <Images className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="mb-3 flex items-center justify-between px-4 sm:hidden">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
                    Swipe <ArrowRight className="h-3 w-3 animate-pulse" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {resultCards.length} cases
                  </span>
                </div>

                <div className="px-4 sm:px-6">
                  <div
                    className="relative mx-auto max-w-md sm:max-w-2xl lg:max-w-3xl"
                    onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
                    onTouchEnd={(event) => {
                      if (touchStartX === null) return;
                      const delta = touchStartX - (event.changedTouches[0]?.clientX ?? touchStartX);
                      if (Math.abs(delta) > 44) delta > 0 ? showNextResult() : showPreviousResult();
                      setTouchStartX(null);
                    }}
                  >
                    <Link to="/before-after/botox/masseter/" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/70 rounded-[1.5rem]">
                      <figure className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[0_35px_90px_-55px_hsl(var(--luxury-gold)/0.65)] sm:grid sm:grid-cols-[0.95fr_1fr] sm:rounded-[2rem]">
                        <div className="relative aspect-square overflow-hidden bg-background">
                          <img
                            src={activeResult.src}
                            alt={activeResult.alt}
                            loading="eager"
                            draggable={false}
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                          />
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/85 via-background/25 to-transparent" />
                          <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-luxury-gold px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-background shadow-lg sm:left-4 sm:top-4">
                            {activeResult.badge}
                          </span>
                        </div>
                        <figcaption className="flex flex-col justify-center p-4 sm:p-6">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-luxury-gold sm:text-sm">{activeResult.title}</p>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:leading-7">{activeResult.caption}</p>
                          <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-luxury-gold">
                            View full gallery <ChevronRight className="h-3.5 w-3.5" />
                          </span>
                        </figcaption>
                      </figure>
                    </Link>
                    <button type="button" onClick={showPreviousResult} aria-label="Previous masseter result" className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-luxury-gold/35 bg-background/90 text-luxury-gold shadow-lg">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={showNextResult} aria-label="Next masseter result" className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-luxury-gold/35 bg-background/90 text-luxury-gold shadow-lg">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {resultCards.map((stage, index) => (
                      <button key={stage.title} type="button" onClick={() => setActiveResultIndex(index)} aria-label={`Show result ${index + 1}`} className={`h-2 rounded-full transition-all ${index === activeResultIndex ? "w-6 bg-luxury-gold" : "w-2 bg-muted-foreground/35"}`} />
                    ))}
                  </div>
                </div>

                <p className="px-4 pt-2 text-xs leading-6 text-muted-foreground sm:px-6">
                  Published with written informed consent. Real CosmeDocs patient imagery only — never stock, never AI, never exaggerated. Individual treatment plans and results vary.
                </p>
              </motion.section>
              )}

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
                <ProcessStepper steps={processSteps} />

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

        <section className="border-y border-border bg-secondary px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
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
        {/* Sticky mobile booking bar */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-luxury-gold/30 bg-background/95 px-4 py-3 backdrop-blur-md shadow-[0_-10px_30px_-15px_hsl(var(--luxury-gold)/0.6)] lg:hidden">
          <div className="mx-auto flex max-w-md items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold">Masseter Botox</p>
              <p className="truncate text-sm font-medium text-foreground">From £350 · 15 min</p>
            </div>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary/90">
                Book consultation
              </Button>
            </a>
          </div>
        </div>

        <TreatmentPaymentInfo variant="dark" />
      </main>
    </>
  );
};

export default MasseterBotox;
