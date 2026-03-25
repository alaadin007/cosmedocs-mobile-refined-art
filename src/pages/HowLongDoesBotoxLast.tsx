import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle, Info, ArrowRight, Clock, Activity, Zap, Calendar } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxLongevitySidebar from "@/components/botox-longevity/BotoxLongevitySidebar";

const HowLongDoesBotoxLast = () => {
  const faqs = [
    { question: "How long does Botox last the first time?", answer: "First-time patients typically see results lasting 2–3 months. This is shorter than subsequent treatments because the muscles haven't yet begun to weaken from repeated exposure. With consistent treatments, most patients extend to 4–6 months between sessions." },
    { question: "Does Botox last longer the more you have it?", answer: "Yes. With regular treatments over 12–18 months, many patients find their Botox lasts progressively longer. Muscles weaken from disuse, requiring less product and fewer visits. Dr Ahmed Haq notes this is one of the strongest arguments for consistent scheduling." },
    { question: "Why did my Botox only last 6 weeks?", answer: "Short-lived results almost always indicate under-dosing — too few units were used for your muscle strength. Other factors include high metabolism, intense exercise, or strong facial muscles. At CosmeDocs, we dose based on individual assessment, not a one-size-fits-all approach." },
    { question: "Does exercise make Botox wear off faster?", answer: "High-intensity exercise can accelerate Botox metabolism, particularly in the first 24–48 hours after treatment. Long-term, active patients may process Botox slightly faster, but correct dosing compensates for this. You don't need to stop exercising — your doctor should adjust accordingly." },
    { question: "How long does Botox last in the forehead?", answer: "Forehead Botox typically lasts 3–4 months with correct dosing (10–30 units). Because forehead muscles are used frequently in expressions, they may metabolise Botox faster than crow's feet. Under-dosing the forehead is a common reason for short-lived results." },
    { question: "How long does masseter Botox last?", answer: "Masseter Botox for jawline slimming or bruxism typically lasts 4–6 months, often longer than cosmetic upper-face treatments. The masseter is a large, powerful muscle requiring 40–80 units. With repeat treatments, intervals can extend to 6–9 months." },
    { question: "Can you make Botox last longer?", answer: "Yes. Correct initial dosing is the most important factor. Consistent treatment schedules, avoiding intense exercise for 24 hours post-treatment, zinc supplementation (some studies suggest), and choosing an experienced practitioner all contribute to longer-lasting results." },
    { question: "What's the difference between Botox wearing off and needing a top-up?", answer: "Botox doesn't suddenly stop working — it gradually wears off as nerve signals return. A top-up addresses areas where movement returns unevenly. If you consistently need top-ups before 3 months, your initial dose may be insufficient." },
  ];

  return (
    <>
      <Helmet>
        <title>How Long Does Botox Last? Timeline & Duration Guide (2026)</title>
        <meta name="description" content="How long does Botox last? Typical duration is 3–6 months. Learn what affects longevity, area-by-area timelines, and how to make results last longer." />
        <link rel="canonical" href="https://www.cosmedocs.com/how-long-does-botox-last/" />
        <meta property="og:title" content="How Long Does Botox Last? Timeline & Duration Guide (2026)" />
        <meta property="og:description" content="How long does Botox last? Typical duration is 3–6 months. Learn what affects longevity and how to extend results." />
        <meta property="og:url" content="https://www.cosmedocs.com/how-long-does-botox-last/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street, London. Established 2007.",
                "url": "https://www.cosmedocs.com/",
                "telephone": "+44 20 3733 3227",
                "priceRange": "££",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                }
              },
              {
                "@type": "Article",
                "headline": "How Long Does Botox Last? Timeline & Duration Guide",
                "author": { "@type": "Person", "name": "Dr Ahmed Haq", "jobTitle": "Medical Director", "worksFor": { "@type": "Organization", "name": "CosmeDocs" } },
                "publisher": { "@type": "Organization", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/" },
                "datePublished": "2026-03-25",
                "dateModified": "2026-03-25",
                "mainEntityOfPage": "https://www.cosmedocs.com/how-long-does-botox-last/",
                "description": "Comprehensive guide to Botox duration — how long it lasts by area, what affects longevity, and how to maximise results."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "How long does Botox last the first time?", "acceptedAnswer": { "@type": "Answer", "text": "First-time patients typically see results lasting 2–3 months, extending to 4–6 months with consistent treatments." } },
                  { "@type": "Question", "name": "Does Botox last longer the more you have it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. With regular treatments over 12–18 months, muscles weaken and results last progressively longer." } },
                  { "@type": "Question", "name": "Why did my Botox only last 6 weeks?", "acceptedAnswer": { "@type": "Answer", "text": "Short-lived results almost always indicate under-dosing — too few units for your muscle strength." } },
                  { "@type": "Question", "name": "Does exercise make Botox wear off faster?", "acceptedAnswer": { "@type": "Answer", "text": "High-intensity exercise can accelerate metabolism slightly, but correct dosing compensates for this." } },
                  { "@type": "Question", "name": "How long does Botox last in the forehead?", "acceptedAnswer": { "@type": "Answer", "text": "Forehead Botox typically lasts 3–4 months with correct dosing of 10–30 units." } },
                  { "@type": "Question", "name": "How long does masseter Botox last?", "acceptedAnswer": { "@type": "Answer", "text": "Masseter Botox typically lasts 4–6 months, extending to 6–9 months with repeat treatments." } },
                  { "@type": "Question", "name": "Can you make Botox last longer?", "acceptedAnswer": { "@type": "Answer", "text": "Correct dosing, consistent schedules, and choosing an experienced practitioner all extend results." } },
                  { "@type": "Question", "name": "What's the difference between Botox wearing off and needing a top-up?", "acceptedAnswer": { "@type": "Answer", "text": "Botox gradually wears off as nerve signals return. If you consistently need top-ups before 3 months, your initial dose may be insufficient." } }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Botox Cost UK", href: "/botox-cost-uk/" },
          { label: "How Long Does Botox Last?" }
        ]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

            {/* ─── LEFT COLUMN: Main Content ─── */}
            <div className="space-y-16">

              {/* ─── H1 + Top Answer ─── */}
              <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/90 leading-[1.1] mb-6">
                  How Long Does Botox Last?{" "}
                  <span className="text-[#C9A050] font-light">Timeline & What Affects Duration</span>
                </h1>

                {/* Trust row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-white/30 mb-8">
                  {["Doctor-Led", "3–6 Months Typical", "Since 2007", "Harley Street"].map((item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      {i > 0 && <span className="w-1 h-1 rounded-full bg-[#C9A050]/40" />}
                      {item}
                    </span>
                  ))}
                </div>

                {/* Top answer paragraph — 50 words for featured snippets */}
                <div className="border-l-2 border-[#C9A050]/40 pl-5 mb-8">
                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    Botox typically lasts 3–6 months, depending on the area treated, the number of units injected, your metabolism, and muscle strength. First-time patients may see shorter results (2–3 months), while regular patients often extend to 4–6 months as muscles progressively weaken with consistent treatment.
                  </p>
                </div>

                {/* Pillar link */}
                <p className="text-xs text-white/30">
                  Part of our <Link to="/botox-cost-uk/" className="text-[#C9A050]/60 hover:text-[#C9A050] underline">Botox Cost UK</Link> guide
                </p>
              </motion.header>

              {/* ─── SECTION 1: Quick Answer (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                  className="bg-[#C9A050]/[0.06] border border-[#C9A050]/20 rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-[#C9A050]" />
                    <h2 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider">Quick Answer</h2>
                  </div>
                  <ul className="space-y-3 text-white/50 text-sm leading-relaxed font-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/60 mt-1.5 flex-shrink-0" />
                      <span><strong className="text-white/70">Cosmetic Botox</strong> (forehead, frown, crow's feet): 3–4 months typical, up to 6 months with correct dosing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/60 mt-1.5 flex-shrink-0" />
                      <span><strong className="text-white/70">Masseter Botox</strong> (jawline slimming): 4–6 months, extending to 6–9 months with repeat treatments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/60 mt-1.5 flex-shrink-0" />
                      <span><strong className="text-white/70">First-time patients:</strong> 2–3 months — results improve with consistent treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]/60 mt-1.5 flex-shrink-0" />
                      <span><strong className="text-white/70">Under-dosed Botox</strong> may only last 4–8 weeks — correct dosing is the single most important factor</span>
                    </li>
                  </ul>
                </motion.div>
              </section>

              {/* ─── SECTION 2: Duration by Area (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How Long Does Botox Last{" "}
                    <span className="text-[#C9A050] font-light">by Area?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Botox duration varies significantly depending on which muscles are treated. Smaller, frequently-used muscles like the forehead tend to metabolise Botox faster than larger muscles like the masseter. Here's what to expect from each area.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 hover:bg-transparent">
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Area</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Typical Duration</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Units</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { area: "Forehead lines", duration: "3–4 months", units: "10–30", notes: "Most active muscle — may fade first" },
                          { area: "Frown lines (glabella)", duration: "3–5 months", units: "10–25", notes: "Often lasts longer than forehead" },
                          { area: "Crow's feet", duration: "3–4 months", units: "12–24", notes: "Fine muscles respond well" },
                          { area: "Bunny lines", duration: "3–4 months", units: "4–8", notes: "Small area, subtle effect" },
                          { area: "Lip flip", duration: "2–3 months", units: "4–6", notes: "Shortest duration — active muscle" },
                          { area: "Masseter (jawline)", duration: "4–6 months", units: "40–80", notes: "Progressively longer with repeats" },
                          { area: "Nefertiti lift (neck)", duration: "3–4 months", units: "20–40", notes: "Depends on platysma strength" },
                          { area: "Hyperhidrosis (sweating)", duration: "6–12 months", units: "50–100", notes: "Longest-lasting indication" },
                        ].map((row) => (
                          <TableRow key={row.area} className="border-white/5 hover:bg-white/[0.02]">
                            <TableCell className="text-white/60 text-sm font-light">{row.area}</TableCell>
                            <TableCell className="text-[#C9A050] text-sm font-medium">{row.duration}</TableCell>
                            <TableCell className="text-white/50 text-sm font-light">{row.units}</TableCell>
                            <TableCell className="text-white/40 text-xs font-light">{row.notes}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <p className="text-sm text-white/50 mt-4">
                    For a full dosing breakdown, see our <Link to="/botox-units-explained/" className="text-[#C9A050] hover:underline">complete Botox units guide</Link>.
                  </p>
                </motion.div>
              </section>

              {/* ─── SECTION 3: Treatment Journey Timeline (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Your Botox Timeline:{" "}
                    <span className="text-[#C9A050] font-light">What Happens & When</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                  <p className="text-white/45 text-sm leading-relaxed font-light mb-8">
                    Understanding the Botox lifecycle helps you plan treatments and set realistic expectations. Here's what a typical patient experiences from treatment day through to their next appointment.
                  </p>

                  <div className="space-y-0">
                    {[
                      { time: "Day 0", title: "Treatment Day", icon: Zap, desc: "Quick 10–20 minute procedure. Tiny injections with minimal discomfort. You can return to normal activities immediately — no downtime required. Avoid rubbing the treated area and intense exercise for 24 hours." },
                      { time: "Days 3–5", title: "First Signs of Effect", icon: Activity, desc: "You'll notice reduced movement in the treated muscles. Lines begin softening. The full effect hasn't set in yet — patience is key. Some patients see changes as early as day 2." },
                      { time: "Day 14", title: "Full Results Visible", icon: CheckCircle, desc: "Peak effect. Lines are smoothed, the treated area looks refreshed and natural. This is when your doctor assesses whether any top-up is needed. At CosmeDocs, complimentary reviews are offered at the two-week mark." },
                      { time: "Months 1–3", title: "Optimal Results Window", icon: Calendar, desc: "You're in the sweet spot. Muscles remain relaxed, skin appears smooth and rejuvenated. Regular patients report this is when they receive the most compliments — people notice you look well, but can't pinpoint why." },
                      { time: "Months 3–4", title: "Gradual Return of Movement", icon: Activity, desc: "Muscle activity begins returning. You may notice subtle lines reappearing, particularly in the forehead where muscles are most active. This is the natural transition — not a sign of failure." },
                      { time: "Months 4–6", title: "Time to Rebook", icon: Clock, desc: "Most patients schedule their next treatment between months 3 and 6. Consistent scheduling prevents muscles from returning to full strength, meaning each subsequent treatment often lasts longer." },
                    ].map((step, i) => (
                      <div key={step.time} className="flex gap-4 md:gap-6">
                        {/* Timeline line */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[#C9A050]/10 border border-[#C9A050]/30 flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-4 h-4 text-[#C9A050]" />
                          </div>
                          {i < 5 && <div className="w-px h-full bg-[#C9A050]/15 min-h-[40px]" />}
                        </div>

                        <div className="pb-8">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-[#C9A050] text-xs font-medium uppercase tracking-wider">{step.time}</span>
                            <span className="text-white/20">—</span>
                            <h3 className="text-white/70 text-sm font-medium">{step.title}</h3>
                          </div>
                          <p className="text-white/40 text-sm leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* ─── SECTION 4: What Affects How Long Botox Lasts (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    What Affects How Long{" "}
                    <span className="text-[#C9A050] font-light">Botox Lasts?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Duration isn't random — several measurable factors determine how long your results hold. Understanding these helps you work with your doctor to optimise your treatment plan and extend time between sessions.
                      </p>
                    }
                  >
                    <div className="space-y-5 text-white/45 text-sm leading-relaxed font-light">
                      <h3 className="text-lg font-light text-white/70">Does the number of units affect how long Botox lasts?</h3>
                      <p>Yes — <strong className="text-white/60">correct dosing is the single most important factor</strong>. Under-dosed treatments may only last 4–8 weeks because the muscle isn't fully relaxed. At CosmeDocs, Dr Ahmed Haq assesses each patient's muscle dynamics individually: <em className="text-white/60">"We use enough units to achieve a lasting result, not the minimum to see an effect. There's a critical difference."</em></p>

                      <h3 className="text-lg font-light text-white/70">Metabolism and lifestyle</h3>
                      <p>Patients with faster metabolisms process Botox more quickly. High-intensity exercise, particularly within the first 24 hours, can affect initial binding. Long-term, active patients may metabolise Botox slightly faster, but this is easily compensated with appropriate dosing.</p>

                      <h3 className="text-lg font-light text-white/70">Muscle strength and size</h3>
                      <p>Stronger, larger muscles require more units and may process Botox faster. This is why men typically need 20–30% more product than women, and why the <Link to="/treatments/masseter-botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline">masseter muscle</Link> requires 40–80 units compared to 10–25 for the frown.</p>

                      <h3 className="text-lg font-light text-white/70">Treatment consistency</h3>
                      <p>Regular patients consistently report longer-lasting results over time. Muscles that are repeatedly relaxed become progressively weaker, requiring less product and extending intervals between treatments. This is why we encourage consistent scheduling rather than waiting for full movement to return.</p>

                      <h3 className="text-lg font-light text-white/70">Practitioner technique</h3>
                      <p>Injection placement matters. Precise targeting of the motor points within each muscle ensures maximum efficacy from every unit. With 17+ years of experience and over a million injections performed, our team understands the nuances that separate adequate results from exceptional ones.</p>

                      {/* Expert tip callout */}
                      <div className="bg-[#C9A050]/[0.06] border border-[#C9A050]/20 rounded-xl p-4 mt-4">
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[#C9A050]/80 text-xs font-semibold uppercase tracking-wider mb-1">Expert Tip</p>
                            <p className="text-white/50 text-sm font-light">If your Botox consistently wears off within 8 weeks, it's likely a dosing issue — not your metabolism. Switching to a practitioner who doses based on your individual muscle assessment can transform your experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 5: First-Timers vs Regular Patients (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    First-Time Patients vs{" "}
                    <span className="text-[#C9A050] font-light">Regular Patients</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        If this is your first Botox treatment, your experience will differ from someone who's been having injections for years. Understanding these differences helps set realistic expectations and plan your long-term approach.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <div className="overflow-x-auto rounded-xl border border-white/10">
                        <Table>
                          <TableHeader>
                            <TableRow className="border-white/10 hover:bg-transparent">
                              <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Factor</TableHead>
                              <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">First-Time Patient</TableHead>
                              <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Regular Patient (2+ years)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { factor: "Typical duration", first: "2–3 months", regular: "4–6 months" },
                              { factor: "Units needed", first: "Standard dose", regular: "Often fewer units" },
                              { factor: "Onset speed", first: "5–14 days", regular: "3–7 days" },
                              { factor: "Result quality", first: "Good — natural softening", regular: "Excellent — preventive benefit" },
                              { factor: "Cost per year", first: "4–5 treatments", regular: "2–3 treatments" },
                              { factor: "Muscle strength", first: "Full strength", regular: "Progressively weaker" },
                            ].map((row) => (
                              <TableRow key={row.factor} className="border-white/5 hover:bg-white/[0.02]">
                                <TableCell className="text-white/60 text-sm font-light">{row.factor}</TableCell>
                                <TableCell className="text-white/50 text-sm font-light">{row.first}</TableCell>
                                <TableCell className="text-[#C9A050] text-sm font-medium">{row.regular}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      <p>Dr Ahmed Haq advises first-time patients: <em className="text-white/60">"Don't judge Botox by your first treatment alone. The first session is diagnostic — we learn how your muscles respond. By the second or third treatment, both you and your doctor understand your optimal dosing, and results improve significantly."</em></p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 6: How to Make Botox Last Longer (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How to Make Botox{" "}
                    <span className="text-[#C9A050] font-light">Last Longer</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        While individual biology plays a role, there are evidence-based strategies that can extend your Botox results. Some are simple behavioural changes; others involve working with your doctor to refine your treatment plan.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: "Choose correct dosing", desc: "The most impactful factor. Ensure your practitioner doses based on your individual muscle assessment, not a fixed template.", icon: CheckCircle },
                          { title: "Maintain consistency", desc: "Regular treatments (every 3–4 months initially) progressively weaken muscles, extending intervals over time.", icon: Calendar },
                          { title: "Avoid intense exercise for 24h", desc: "Skip high-intensity training on treatment day. Normal activities are fine — this isn't about staying still.", icon: Activity },
                          { title: "Consider zinc supplementation", desc: "Some studies suggest zinc may enhance Botox binding. Discuss with your doctor before starting any supplement.", icon: Info },
                          { title: "Protect your skin", desc: "Daily SPF and a simple skincare routine complement Botox by protecting the quality of skin above relaxed muscles.", icon: CheckCircle },
                          { title: "Don't wait too long to rebook", desc: "Treating before full muscle movement returns maintains the weakening effect, extending each subsequent treatment.", icon: Clock },
                        ].map((tip) => (
                          <div key={tip.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                            <div className="flex items-start gap-2 mb-2">
                              <tip.icon className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                              <h3 className="text-white/60 text-sm font-medium">{tip.title}</h3>
                            </div>
                            <p className="text-white/40 text-xs leading-relaxed">{tip.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Warning callout */}
                      <div className="bg-red-500/[0.06] border border-red-500/20 rounded-xl p-4 mt-4">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-red-400/80 text-xs font-semibold uppercase tracking-wider mb-1">Warning</p>
                            <p className="text-white/50 text-sm font-light">Avoid clinics that offer "top-ups" as a solution to short-lived results. If Botox consistently wears off within 6–8 weeks, the initial dose was insufficient. Paying for top-ups on top of under-dosed treatments costs more than a single correctly dosed session.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 7: The Cost Connection (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How Duration Affects{" "}
                    <span className="text-[#C9A050] font-light">What Botox Really Costs</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    The true cost of Botox isn't what you pay per session — it's your annual spend. A cheaper treatment that lasts 6 weeks costs significantly more per year than a correctly dosed treatment lasting 4–6 months. Here's the real comparison:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 hover:bg-transparent">
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Scenario</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Price/Session</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Lasts</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Sessions/Year</TableHead>
                          <TableHead className="text-[#C9A050]/80 text-xs uppercase tracking-wider">Annual Cost</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-white/5 hover:bg-white/[0.02]">
                          <TableCell className="text-white/50 text-sm font-light">Budget clinic</TableCell>
                          <TableCell className="text-white/50 text-sm">£150</TableCell>
                          <TableCell className="text-white/50 text-sm">6–8 weeks</TableCell>
                          <TableCell className="text-white/50 text-sm">6–8</TableCell>
                          <TableCell className="text-red-400/80 text-sm font-medium">£900–£1,200</TableCell>
                        </TableRow>
                        <TableRow className="border-white/5 hover:bg-white/[0.02]">
                          <TableCell className="text-white/50 text-sm font-light">Correctly dosed</TableCell>
                          <TableCell className="text-white/50 text-sm">£350–£395</TableCell>
                          <TableCell className="text-white/50 text-sm">4–6 months</TableCell>
                          <TableCell className="text-white/50 text-sm">2–3</TableCell>
                          <TableCell className="text-[#C9A050] text-sm font-medium">£700–£1,185</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <p className="text-sm text-white/50">
                    For a full pricing analysis, see our <Link to="/botox-cost-uk/" className="text-[#C9A050] hover:underline">complete Botox cost UK guide</Link>.
                  </p>
                </motion.div>
              </section>

              {/* ─── FAQs ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Frequently Asked{" "}
                    <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="border-white/[0.06] bg-white/[0.02] rounded-xl px-4">
                        <AccordionTrigger className="text-white/70 text-sm font-light hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/45 text-sm leading-relaxed font-light">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

              {/* ─── CTA ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#C9A050]/[0.08] to-transparent border border-[#C9A050]/20 rounded-2xl p-8 md:p-10 text-center"
                >
                  <h2 className="text-2xl md:text-3xl font-extralight text-white/85 mb-3">
                    Ready for Results That{" "}
                    <span className="text-[#C9A050] font-light">Actually Last?</span>
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed font-light max-w-lg mx-auto mb-6">
                    At CosmeDocs, we focus on correct dosing from your first treatment — because Botox that lasts is Botox worth paying for. Book a consultation and experience the difference that 17+ years of expertise makes.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://med.as.me/harleystreet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-6 py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/botox-cost-uk/"
                      className="inline-flex items-center gap-2 border border-[#C9A050]/30 hover:border-[#C9A050]/60 text-[#C9A050] rounded-full px-6 py-3 text-sm transition-all duration-300"
                    >
                      See Full Pricing Guide
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </section>
            </div>

            {/* ─── RIGHT COLUMN: Sidebar ─── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <BotoxLongevitySidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowLongDoesBotoxLast;
