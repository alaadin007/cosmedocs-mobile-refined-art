import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Syringe, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BotoxUnitsSidebar from "@/components/botox-units/BotoxUnitsSidebar";
import ExpandableSection from "@/components/ui/expandable-section";
import unitsImg from "@/assets/botox-units-precision.jpg";

const BotoxUnitsExplained = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many units of Botox do I need for my forehead?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Forehead lines typically require 10–30 units of Botox, depending on muscle strength and forehead size. Women usually need 10–20 units, while men often require 20–30 units due to stronger frontalis muscles.",
        },
      },
      {
        "@type": "Question",
        name: "How many units of Botox for 3 areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three areas (forehead, frown lines, and crow's feet) typically require 40–64 units total. The exact amount depends on muscle strength, gender, and whether you've had Botox before.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if you don't use enough Botox units?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under-dosing Botox leads to incomplete muscle relaxation, shorter results (6–8 weeks instead of 3–6 months), and an uneven or 'patchy' appearance. It's one of the most common reasons patients feel Botox 'didn't work'.",
        },
      },
      {
        "@type": "Question",
        name: "Do men need more Botox units than women?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Men typically require 20–50% more units than women due to larger, stronger facial muscles. For example, male frown lines may need 25–30 units compared to 10–20 for women.",
        },
      },
      {
        "@type": "Question",
        name: "Is 20 units of Botox enough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "20 units may be sufficient for a single area like crow's feet or frown lines in someone with lighter muscle activity. However, it's rarely enough for multiple areas or patients with strong muscle movement.",
        },
      },
      {
        "@type": "Question",
        name: "How many units of Botox for crow's feet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Crow's feet typically need 12–24 units total (6–12 per side). Patients with deep, dynamic lines around the eyes may need the higher end of this range for a smooth, natural result.",
        },
      },
      {
        "@type": "Question",
        name: "Can you have too many units of Botox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Excessive Botox can cause a 'frozen' appearance, drooping brows, or an unnatural look. Experienced practitioners use precise dosing based on muscle anatomy to avoid over-treatment while ensuring effective results.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my Botox wear off so quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fast metabolism, strong muscles, under-dosing, and frequent intense exercise can all cause Botox to wear off sooner. Adequate initial dosing and consistent treatment schedules help extend longevity.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Botox Units Explained: How Many Units Do You Need?",
    author: {
      "@type": "Person",
      name: "Dr Ahmed Haq",
      jobTitle: "Medical Director",
      url: "https://www.cosmedocs.com/our-team/dr-ahmed-haq/",
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: "CosmeDocs",
      url: "https://www.cosmedocs.com",
    },
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
    description:
      "Complete guide to Botox units — how many you need per area, what affects dosing, and why units matter more than price.",
  };

  return (
    <>
      <Helmet>
        <title>Botox Units Explained: How Many Do You Need? | CosmeDocs</title>
        <meta
          name="description"
          content="How many units of Botox do you need? Area-by-area breakdown for forehead, frown lines, crow's feet & more. Expert dosing guide from Harley Street doctors."
        />
        <link
          rel="canonical"
          href="https://www.cosmedocs.com/botox-units-explained/"
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C9A050]/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
                  <Link to="/" className="hover:text-white/60 transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link
                    to="/botox-cost-uk/"
                    className="hover:text-white/60 transition-colors"
                  >
                    Botox Cost UK
                  </Link>
                  <span>/</span>
                  <span className="text-white/50">Units Explained</span>
                </nav>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Botox Units Explained:{" "}
                  <span className="text-[#C9A050]">
                    How Many Do You Really Need?
                  </span>
                </h1>

                {/* Trust row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Doctor-Led", "Harley Street", "Since 2007", "17+ Years"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#C9A050]" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>

                {/* Top Answer Paragraph — snippet target */}
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  Botox dosing is measured in units. Most patients need 40–64
                  units for three areas (forehead, frown lines, and crow's feet).
                  The exact number depends on muscle strength, gender, treatment
                  history, and your practitioner's technique. Under-dosing is the
                  most common cause of poor results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <img src={unitsImg} alt="Precision Botox syringes with measured unit markings — CosmeDocs Harley Street dosing expertise" width={1024} height={640} loading="lazy" className="w-full max-w-3xl rounded-2xl border border-white/10" />
            <p className="text-xs text-white/20 mt-2 italic">Precision dosing — every unit measured for natural, lasting results</p>
          </motion.div>
        </div>

        {/* Two-column layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left column — main content */}
            <div className="flex-1 min-w-0 space-y-14">
              {/* Quick Answer Block */}
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">
                  Quick Answer
                </h2>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white/90">Forehead lines:</strong>{" "}
                      10–30 units
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white/90">Frown lines (glabella):</strong>{" "}
                      10–25 units
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white/90">Crow's feet:</strong>{" "}
                      12–24 units (both sides)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white/90">3 areas total:</strong>{" "}
                      40–64 units on average
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 1: What Is a Botox Unit? — FULLY VISIBLE */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">
                  What Is a Botox Unit?
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  A Botox "unit" is a standardised measurement of botulinum toxin
                  type A. It refers to the biological activity of the product —
                  not volume. One unit of Botox (onabotulinumtoxinA) is not the
                  same as one unit of Dysport or Bocouture, which is why brand
                  matters when comparing doses.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  At CosmeDocs, Dr Ahmed Haq uses precise unit-based dosing
                  tailored to each patient's anatomy. "The number of units is far
                  more important than the number of areas," he explains. "A
                  forehead treated with 6 units will look very different from one
                  treated with 20."
                </p>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mt-4">
                  <p className="text-xs text-[#C9A050]/80 uppercase tracking-wider mb-2 font-medium">
                    Why this matters
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Clinics that advertise "Botox per area" without specifying
                    units may use fewer units to keep costs down — leading to
                    weaker, shorter-lasting results. Always ask how many units
                    you're receiving.
                  </p>
                </div>
              </div>

              {/* Section 2: Units by Area — FULLY VISIBLE with table */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">
                  How Many Units of Botox Per Area
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  The table below shows typical unit ranges used at CosmeDocs.
                  These are clinical guidelines — your practitioner will adjust
                  based on muscle strength, skin thickness, and your aesthetic
                  goals.
                </p>

                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">
                          Area
                        </TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">
                          Women
                        </TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">
                          Men
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { area: "Forehead lines", women: "10–20", men: "20–30" },
                        { area: "Frown lines (glabella)", women: "10–20", men: "20–25" },
                        { area: "Crow's feet (both sides)", women: "12–20", men: "16–24" },
                        { area: "Bunny lines", women: "4–8", men: "6–10" },
                        { area: "Lip flip", women: "4–6", men: "4–8" },
                        { area: "Gummy smile", women: "2–4", men: "2–4" },
                        { area: "Masseter (jawline)", women: "30–50", men: "40–60" },
                        { area: "Neck bands (platysma)", women: "20–40", men: "30–50" },
                        { area: "Underarm sweating", women: "50 per side", men: "50 per side" },
                      ].map((row) => (
                        <TableRow
                          key={row.area}
                          className="border-b border-white/[0.04]"
                        >
                          <TableCell className="text-sm text-white/70">
                            {row.area}
                          </TableCell>
                          <TableCell className="text-sm text-white/50">
                            {row.women}
                          </TableCell>
                          <TableCell className="text-sm text-white/50">
                            {row.men}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* People Also Ask H3 */}
                <h3 className="text-lg font-light text-white mt-8 mb-3">
                  How many units of Botox for 3 areas?
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  The classic "3 areas" — forehead, frown, and crow's feet —
                  typically require 40–64 units for women and 56–79 units for
                  men. At CosmeDocs, we dose based on anatomy rather than a
                  fixed formula. Some patients need fewer units for beautiful
                  results; others need more. The key is adequate dosing for
                  your specific muscle strength.
                </p>
              </div>

              {/* Section 3: Why Units Matter More Than Price — FULLY VISIBLE */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">
                  Why Units Matter More Than Price
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Many patients focus on the cost per area rather than the
                  number of units included. This is the single biggest mistake
                  when comparing Botox prices. A "cheap" treatment using 30
                  units across 3 areas will produce dramatically weaker results
                  than a properly dosed treatment using 50+ units.
                </p>

                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">
                          Factor
                        </TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">
                          Low-Dose Clinic
                        </TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">
                          Expert Clinic
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { factor: "Units for 3 areas", low: "25–35", expert: "45–65" },
                        { factor: "Duration of results", low: "6–8 weeks", expert: "3–6 months" },
                        { factor: "Natural movement", low: "Uneven", expert: "Balanced" },
                        { factor: "Top-up needed", low: "Often", expert: "Rarely" },
                        { factor: "Annual cost", low: "Higher (more visits)", expert: "Lower (fewer visits)" },
                      ].map((row) => (
                        <TableRow
                          key={row.factor}
                          className="border-b border-white/[0.04]"
                        >
                          <TableCell className="text-sm text-white/70">
                            {row.factor}
                          </TableCell>
                          <TableCell className="text-sm text-white/40">
                            {row.low}
                          </TableCell>
                          <TableCell className="text-sm text-white/50">
                            {row.expert}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <p className="text-sm text-white/60 leading-relaxed mt-4">
                  For a detailed breakdown of Botox pricing and what drives
                  cost differences, see our{" "}
                  <Link
                    to="/botox-cost-uk/"
                    className="text-[#C9A050] hover:underline"
                  >
                    complete Botox cost guide
                  </Link>
                  .
                </p>
              </div>

              {/* Section 4: What Affects Your Dose — ExpandableSection */}
              <ExpandableSection
                preview={
                  <div>
                    <h2 className="text-2xl font-extralight text-white mb-4">
                      What Affects How Many Units You Need
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Your ideal Botox dose depends on several factors beyond
                      just the treatment area. Understanding these helps you
                      set realistic expectations and avoid under-treatment.
                    </p>
                  </div>
                }
                label="Read full dosing factors"
                collapseLabel="Show less"
              >
                <div className="space-y-6">
                  {[
                    {
                      title: "Muscle Strength",
                      text: "Patients with strong, hyperactive muscles — particularly men or those who are very expressive — require more units to achieve full relaxation. Dr Haq routinely assesses muscle recruitment during consultation to determine the optimal dose.",
                    },
                    {
                      title: "Gender",
                      text: "Men typically need 20–50% more Botox than women. Male facial muscles, particularly the frontalis and corrugator, are denser and more powerful. This is why separate male pricing exists at many clinics.",
                    },
                    {
                      title: "Treatment History",
                      text: "First-time patients may start with a conservative dose, with the option to add units at a 2-week review. Regular patients who've had consistent treatments may find they need fewer units over time as muscles gradually weaken.",
                    },
                    {
                      title: "Desired Outcome",
                      text: "Some patients want complete freeze (fewer lines, less movement), while others prefer a softer, 'baby Botox' approach with visible movement retained. The dose is adjusted accordingly.",
                    },
                    {
                      title: "Metabolism & Lifestyle",
                      text: "High metabolisers, frequent exercisers, and patients under significant stress may metabolise Botox faster, requiring slightly higher doses or shorter intervals between treatments.",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 className="text-base font-medium text-white/80 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}

                  {/* Expert tip */}
                  <div className="bg-[#C9A050]/[0.06] border border-[#C9A050]/20 rounded-xl p-4">
                    <p className="text-xs text-[#C9A050] uppercase tracking-wider mb-2 font-medium">
                      Expert Tip — Dr Ahmed Haq
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                      "I'd rather use the right number of units and have a
                      patient return in 4–5 months than under-dose and see them
                      back in 6 weeks disappointed. Adequate dosing is the
                      foundation of good Botox."
                    </p>
                  </div>
                </div>
              </ExpandableSection>

              {/* Section 5: Common Dosing Mistakes — ExpandableSection */}
              <ExpandableSection
                preview={
                  <div>
                    <h2 className="text-2xl font-extralight text-white mb-4">
                      Common Botox Dosing Mistakes
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Under-dosing and uneven distribution are the most frequent
                      causes of unsatisfactory Botox results. Here's what to
                      watch for.
                    </p>
                  </div>
                }
                label="Read about dosing mistakes"
                collapseLabel="Show less"
              >
                <div className="space-y-5">
                  {[
                    {
                      mistake: "Too few units spread across too many areas",
                      explanation:
                        "Some providers stretch a small total dose (e.g. 20 units) across 3 areas to keep costs low. The result is partial, short-lived relaxation that patients describe as 'Botox not working'.",
                    },
                    {
                      mistake: "Ignoring asymmetry",
                      explanation:
                        "Most faces are asymmetric. One eyebrow may sit higher, or one side may have stronger muscle pull. Experienced injectors adjust units per side to create balanced results.",
                    },
                    {
                      mistake: "Not accounting for gender differences",
                      explanation:
                        "Using the same dose for men and women is a common mistake in less experienced clinics. Male patients consistently require higher doses for comparable outcomes.",
                    },
                    {
                      mistake: "Treating forehead without the frown",
                      explanation:
                        "Injecting the forehead (frontalis) without addressing frown lines (corrugator) can cause brow heaviness. These areas must be treated as a functional unit for safe, natural results.",
                    },
                  ].map((item) => (
                    <div
                      key={item.mistake}
                      className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-amber-400/70 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white/80 mb-1">
                            {item.mistake}
                          </p>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {item.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ExpandableSection>

              {/* Section 6: First-Time Dosing Guide — FULLY VISIBLE */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">
                  First-Time Botox: What Dose to Expect
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  If this is your first Botox treatment, your doctor may take a
                  conservative approach — starting with a moderate dose and
                  offering a complimentary top-up at 2 weeks if needed. This
                  isn't under-dosing; it's a cautious strategy to understand
                  your muscle response before committing to a full dose.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  At CosmeDocs, first-time patients receive a thorough facial
                  assessment before any injection. Dr Haq evaluates your muscle
                  activity at rest and in animation to determine the ideal
                  starting dose for natural results.
                </p>

                <h3 className="text-lg font-light text-white mt-6 mb-3">
                  Is 20 units of Botox enough?
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Twenty units can be adequate for a single area in patients
                  with moderate muscle activity — for example, frown lines in a
                  younger patient. However, 20 units is rarely sufficient for
                  multiple areas. If a clinic offers "full face Botox" with
                  only 20 units, the dose is likely too low for meaningful,
                  lasting results.
                </p>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      q: "How many units of Botox do I need for my forehead?",
                      a: "Forehead lines typically require 10–30 units, depending on muscle strength and forehead size. Women usually need 10–20 units, while men often require 20–30 units due to stronger frontalis muscles.",
                    },
                    {
                      q: "How many units of Botox for 3 areas?",
                      a: "Three areas (forehead, frown lines, and crow's feet) typically require 40–64 units total. The exact amount depends on muscle strength, gender, and whether you've had Botox before.",
                    },
                    {
                      q: "What happens if you don't use enough Botox units?",
                      a: "Under-dosing leads to incomplete muscle relaxation, shorter results (6–8 weeks instead of 3–6 months), and an uneven or 'patchy' appearance. It's one of the most common reasons patients feel Botox 'didn't work'.",
                    },
                    {
                      q: "Do men need more Botox units than women?",
                      a: "Yes. Men typically require 20–50% more units than women due to larger, stronger facial muscles. For example, male frown lines may need 25–30 units compared to 10–20 for women.",
                    },
                    {
                      q: "Is 20 units of Botox enough?",
                      a: "20 units may be sufficient for a single area like crow's feet or frown lines in someone with lighter muscle activity. However, it's rarely enough for multiple areas or patients with strong muscle movement.",
                    },
                    {
                      q: "How many units of Botox for crow's feet?",
                      a: "Crow's feet typically need 12–24 units total (6–12 per side). Patients with deep, dynamic lines around the eyes may need the higher end of this range.",
                    },
                    {
                      q: "Can you have too many units of Botox?",
                      a: "Excessive Botox can cause a 'frozen' appearance, drooping brows, or an unnatural look. Experienced practitioners use precise dosing based on muscle anatomy to avoid over-treatment.",
                    },
                    {
                      q: "Why does my Botox wear off so quickly?",
                      a: "Fast metabolism, strong muscles, under-dosing, and frequent intense exercise can all cause Botox to wear off sooner. Adequate initial dosing and consistent treatment schedules help extend longevity.",
                    },
                  ].map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`faq-${idx}`}
                      className="border border-white/[0.06] rounded-xl px-4 bg-white/[0.02]"
                    >
                      <AccordionTrigger className="text-sm text-white/80 hover:text-white text-left py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-white/50 leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Internal links block */}
              <div className="border-t border-white/[0.06] pt-10">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-4">
                  Related Reading
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Botox Cost UK — Full Pricing Guide", path: "/botox-cost-uk/" },
                    { label: "How Long Does Botox Last?", path: "/how-long-does-botox-last/" },
                    { label: "Cheap vs Expensive Botox", path: "/cheap-botox-vs-expensive/" },
                    { label: "Botox Prices London", path: "/botox-price-london/" },
                    { label: "Before & After Botox", path: "/before-after/botox/" },
                    { label: "Botox FAQs", path: "/botox-faqs/" },
                  ].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C9A050] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 text-center">
                <h2 className="text-xl font-extralight text-white mb-3">
                  Not Sure How Many Units You Need?
                </h2>
                <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">
                  Book a consultation and Dr Haq will assess your facial
                  anatomy to recommend the exact dose for natural, lasting
                  results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://med.as.me/harleystreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-6 py-3 font-medium text-sm transition-all duration-300"
                  >
                    <Syringe className="w-4 h-4" />
                    Book Consultation
                  </a>
                  <Link
                    to="/botox-cost-uk/"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white/70 hover:text-white rounded-full px-6 py-3 text-sm transition-all duration-300"
                  >
                    View Pricing Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column — sidebar */}
            <div className="lg:w-80 xl:w-96 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <BotoxUnitsSidebar />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BotoxUnitsExplained;
