import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle, Info, ArrowRight, Shield, XCircle, Scale, TrendingUp } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import CheapBotoxSidebar from "@/components/cheap-botox/CheapBotoxSidebar";
import cheapVsPremiumImg from "@/assets/cheap-vs-premium-botox.jpg";
import premiumQualityImg from "@/assets/botox-premium-quality.jpg";

const CheapBotoxVsExpensive = () => {
  const faqs = [
    { question: "Is cheap Botox safe?", answer: "Cheap Botox isn't inherently unsafe, but lower prices often mean fewer units per area, less experienced practitioners, or non-medical settings. These compromises can lead to uneven results, faster wear-off, and in rare cases, complications like ptosis (drooping). Always verify your practitioner's qualifications." },
    { question: "Why is some Botox so cheap?", answer: "Clinics offering Botox below £150 for three areas typically use fewer units (20–30 vs the recommended 40–64), employ non-doctor injectors, or operate from non-clinical settings. Some also use less-established toxin brands. The product cost alone for proper dosing makes rock-bottom prices unsustainable without cutting corners." },
    { question: "Does expensive Botox last longer?", answer: "Yes, in most cases. Higher-priced treatments from experienced practitioners typically use correct dosing — the single most important factor in longevity. Properly dosed Botox lasts 3–6 months, while under-dosed budget treatments often wear off in 6–8 weeks, requiring more frequent visits." },
    { question: "How can I tell if my Botox was under-dosed?", answer: "Signs of under-dosing include: results wearing off within 6–8 weeks, ability to still make full expressions in treated areas within 2 weeks, uneven results, and needing top-ups before 3 months. If your practitioner used fewer than 40 units for three areas, you were likely under-dosed." },
    { question: "Is it worth paying more for Botox?", answer: "A correctly dosed £350 treatment lasting 4–6 months costs less per month than a £150 treatment lasting 6–8 weeks. Over a year, budget Botox requiring 6+ visits costs £900+, while premium treatments requiring 2–3 visits costs £700–£1,050. Premium is often more economical long-term." },
    { question: "What qualifications should my Botox practitioner have?", answer: "In the UK, Botox should ideally be administered by a doctor, dentist, or prescribing nurse practitioner with specific aesthetic training. Look for practitioners registered with the GMC, GDC, or NMC, with verifiable before-and-after portfolios and transparent pricing including unit counts." },
    { question: "Can cheap Botox damage your face?", answer: "Improperly administered Botox — regardless of price — can cause temporary drooping, asymmetry, or an unnatural frozen appearance. The risk increases with inexperienced injectors who don't assess facial anatomy properly. These effects are typically temporary (2–4 months) but can be distressing." },
    { question: "What's the real cost of Botox per unit in the UK?", answer: "In the UK, Botox costs approximately £8–£15 per unit at reputable clinics. At CosmeDocs, pricing is transparent and based on the total treatment rather than per-unit charges, ensuring patients receive the correct dose without financial pressure to reduce units." },
  ];

  return (
    <>
      <Helmet>
        <title>Cheap Botox vs Expensive: What's the Real Difference? (2026)</title>
        <meta name="description" content="Cheap vs expensive Botox compared: dosing, safety, longevity & real cost per month. Learn why budget Botox often costs more long-term. Expert Harley Street analysis." />
        <link rel="canonical" href="https://www.cosmedocs.com/cheap-botox-vs-expensive/" />
        <meta property="og:title" content="Cheap Botox vs Expensive: What's the Real Difference?" />
        <meta property="og:description" content="Side-by-side comparison of cheap vs premium Botox. Dosing, safety, longevity and real cost analysis from Harley Street doctors." />
        <meta property="og:url" content="https://www.cosmedocs.com/cheap-botox-vs-expensive/" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "url": "https://www.cosmedocs.com",
                "logo": "https://www.cosmedocs.com/logo.png",
                "image": "https://www.cosmedocs.com/og-image.jpg",
                "telephone": "+44 20 3733 3227",
                "priceRange": "££",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3 Harley Street",
                  "addressLocality": "London",
                  "addressRegion": "Greater London",
                  "postalCode": "W1G 9QD",
                  "addressCountry": "GB"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "156", "bestRating": "5" },
                "contactPoint": { "@type": "ContactPoint", "telephone": "+44 20 3733 3227", "contactType": "customer service" }
              },
              {
                "@type": "Article",
                "headline": "Cheap Botox vs Expensive: What's the Real Difference?",
                "author": { "@type": "Person", "name": "Dr Ahmed Haq", "jobTitle": "Medical Director", "url": "https://www.cosmedocs.com/our-team/dr-ahmed-haq/" },
                "publisher": { "@type": "Organization", "name": "CosmeDocs", "url": "https://www.cosmedocs.com" },
                "datePublished": "2026-03-27",
                "dateModified": "2026-03-27",
                "mainEntityOfPage": "https://www.cosmedocs.com/cheap-botox-vs-expensive/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A]">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Botox Cost UK", href: "/botox-cost-uk/" },
          { label: "Cheap vs Expensive Botox" }
        ]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* H1 + Top Answer */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Cheap Botox vs Expensive: What's the <span className="text-[#C9A050]">Real Difference?</span>
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/40 mb-6">
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-[#C9A050]" /> Doctor-Led</span>
                  <span className="text-white/20">·</span>
                  <span>From £275</span>
                  <span className="text-white/20">·</span>
                  <span>Since 2007</span>
                  <span className="text-white/20">·</span>
                  <span>Harley Street</span>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed border-l-2 border-[#C9A050]/40 pl-4">
                  The difference between cheap and expensive Botox isn't just price — it's dosing, practitioner experience, and how long results last. Budget Botox at £99–£150 often uses 20–30 units for three areas, wearing off in 6–8 weeks. Correctly dosed treatments use 40–64 units and last 3–6 months, making premium Botox more economical per month.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <img
                  src={cheapVsPremiumImg}
                  alt="Cheap vs premium Botox comparison showing luxury and budget treatment differences at CosmeDocs Harley Street"
                  width={1024}
                  height={640}
                  className="w-full rounded-2xl border border-white/10"
                />
                <p className="text-xs text-white/30 mt-2 text-center italic">Premium vs budget aesthetic treatment — the differences go far beyond price</p>
              </motion.div>

              {/* Quick Answer Block */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-gradient-to-br from-[#C9A050]/10 to-[#C9A050]/5 border border-[#C9A050]/30 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[#C9A050] mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Quick Answer: Is Cheap Botox Worth It?
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Budget Botox (£99–£150) typically uses <strong className="text-white">20–30 units</strong> for 3 areas — significantly below recommended doses</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Premium Botox (£275–£425) uses <strong className="text-white">40–64 units</strong> with doctor-led injection and bespoke dosing</li>
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Under-dosed Botox wears off in <strong className="text-white">6–8 weeks</strong>, requiring 6+ visits per year</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Correctly dosed Botox lasts <strong className="text-white">3–6 months</strong>, requiring only 2–3 visits per year</li>
                </ul>
              </motion.div>

              {/* Side-by-Side Comparison Table */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-white mb-2">Cheap vs Premium Botox: Side-by-Side</h2>
                <p className="text-white/50 text-sm mb-4">Dr Ahmed Haq explains: "The price tag tells you what the clinic charges — but the unit count tells you what you're actually getting."</p>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 bg-white/5">
                        <TableHead className="text-[#C9A050] font-semibold">Factor</TableHead>
                        <TableHead className="text-red-400 font-semibold">Budget (£99–£150)</TableHead>
                        <TableHead className="text-emerald-400 font-semibold">Premium (£275–£425)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Units (3 areas)", "20–30 units", "40–64 units"],
                        ["Practitioner", "Nurse / beautician", "Doctor / specialist"],
                        ["Duration of results", "6–8 weeks", "3–6 months"],
                        ["Visits per year", "6–8 visits", "2–3 visits"],
                        ["Annual cost", "£600–£1,200", "£550–£1,275"],
                        ["Top-ups included?", "Rarely", "Often included"],
                        ["Facial assessment", "Minimal", "Full anatomical assessment"],
                        ["Product brand", "Variable / unspecified", "Allergan Botox / Bocouture"],
                        ["Setting", "Beauty salon / pop-up", "CQC-registered clinic"],
                        ["Emergency protocol", "Limited", "Full medical oversight"],
                      ].map(([factor, budget, premium], i) => (
                        <TableRow key={i} className="border-white/5 hover:bg-white/[0.03]">
                          <TableCell className="text-white/80 font-medium text-sm">{factor}</TableCell>
                          <TableCell className="text-white/50 text-sm">{budget}</TableCell>
                          <TableCell className="text-white/50 text-sm">{premium}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </motion.div>

              {/* Real Cost Over Time */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
                <h2 className="text-2xl font-bold text-white mb-2">The Real Cost: Price Per Month</h2>
                <h3 className="text-lg text-[#C9A050]/80 mb-4">Why cheaper Botox often costs more</h3>
                <p className="text-white/60 text-sm mb-4">When you calculate the cost per month of smooth, wrinkle-free results, premium Botox is often the better investment. Here's the maths:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                    <p className="text-red-400 font-semibold text-sm mb-2">Budget Route</p>
                    <p className="text-white text-2xl font-bold mb-1">£150 <span className="text-sm text-white/40">per session</span></p>
                    <p className="text-white/50 text-xs mb-3">Lasts ~2 months → 6 visits/year</p>
                    <div className="border-t border-red-500/20 pt-3">
                      <p className="text-white/40 text-xs">Annual total</p>
                      <p className="text-red-400 text-xl font-bold">£900/year</p>
                      <p className="text-white/30 text-xs">= £75/month</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
                    <p className="text-emerald-400 font-semibold text-sm mb-2">Premium Route</p>
                    <p className="text-white text-2xl font-bold mb-1">£395 <span className="text-sm text-white/40">per session</span></p>
                    <p className="text-white/50 text-xs mb-3">Lasts ~5 months → 2–3 visits/year</p>
                    <div className="border-t border-emerald-500/20 pt-3">
                      <p className="text-white/40 text-xs">Annual total</p>
                      <p className="text-emerald-400 text-xl font-bold">£790–£1,185/year</p>
                      <p className="text-white/30 text-xs">= £66–£99/month</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                  <p className="text-white/60 text-sm"><strong className="text-[#C9A050]">Expert insight:</strong> "Most patients who switch to us from budget clinics tell us they were spending more annually on 6+ visits than our patients spend on 2–3. The false economy of cheap Botox is one of the most common regrets I see." — <em className="text-white/40">Dr Ahmed Haq, Medical Director</em></p>
                </div>
              </motion.div>

              {/* Premium Quality Image */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <img
                  src={premiumQualityImg}
                  alt="Premium Botox vial and precision syringe on dark marble — CosmeDocs Harley Street quality assurance"
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/10"
                />
                <p className="text-xs text-white/30 mt-2 text-center italic">Premium-grade toxin and precision dosing — the foundation of lasting results</p>
              </motion.div>

              {/* Red Flags Section */}
              <ExpandableSection preview={<h2 className="text-xl font-bold text-white">Red Flags: How to Spot Under-Dosed Botox</h2>} label="Show warning signs" collapseLabel="Hide warning signs">
                <div className="space-y-4">
                  <p className="text-white/60 text-sm">At our Harley Street clinic, we regularly see patients who've had disappointing results elsewhere. These are the warning signs Dr Haq identifies:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { flag: "Results fade within 6–8 weeks", detail: "Properly dosed Botox should last at minimum 3 months" },
                      { flag: "No unit count disclosed", detail: "Reputable clinics are transparent about dosing" },
                      { flag: "Same price for all patients", detail: "Men, strong muscles & larger areas need more units" },
                      { flag: "Beautician or non-doctor injector", detail: "Botox is a prescription medicine requiring medical oversight" },
                      { flag: "No before photos taken", detail: "Clinical documentation is standard practice" },
                      { flag: "Groupon or daily deal pricing", detail: "Sustainable medical practices don't need loss-leaders" },
                    ].map((item, i) => (
                      <div key={i} className="bg-red-500/5 border border-red-500/10 rounded-lg p-3">
                        <p className="text-red-400 text-sm font-medium flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" /> {item.flag}
                        </p>
                        <p className="text-white/40 text-xs mt-1 ml-5.5">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ExpandableSection>

              {/* What Premium Botox Includes */}
              <ExpandableSection preview={<h2 className="text-xl font-bold text-white">What You Get with Premium, Doctor-Led Botox</h2>} label="Show details" collapseLabel="Hide details">
                <div className="space-y-4">
                  <p className="text-white/60 text-sm">At CosmeDocs on Harley Street, every treatment includes more than just the injection. With 17+ years of experience, Dr Ahmed Haq has refined a comprehensive approach:</p>
                  <div className="space-y-3">
                    {[
                      { title: "Full facial assessment", desc: "Muscle strength mapping, asymmetry analysis, and treatment planning before a single unit is injected" },
                      { title: "Bespoke dosing", desc: "Units tailored to your anatomy — not a one-size-fits-all protocol. Men, first-timers, and returning patients all receive different plans" },
                      { title: "Medical-grade products", desc: "We use Allergan Botox and Bocouture — the two most evidence-based toxins available in the UK" },
                      { title: "Two-week review", desc: "Complimentary follow-up to assess results and perform any necessary adjustments" },
                      { title: "Long-term treatment planning", desc: "Strategic scheduling to build cumulative muscle relaxation, extending intervals over time" },
                      { title: "CQC-registered setting", desc: "Full clinical governance, infection control protocols, and emergency preparedness" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/[0.03] rounded-lg p-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-white/80 text-sm font-medium">{item.title}</p>
                          <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ExpandableSection>

              {/* Safety Comparison */}
              <ExpandableSection preview={<h2 className="text-xl font-bold text-white">Safety: Why Practitioner Experience Matters More Than Price</h2>} label="Read safety analysis" collapseLabel="Hide safety analysis">
                <div className="space-y-4">
                  <p className="text-white/60 text-sm">Botox has an excellent safety profile when administered correctly. The risks increase not from the product itself, but from inexperienced injection technique:</p>
                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 bg-white/5">
                          <TableHead className="text-[#C9A050]">Complication</TableHead>
                          <TableHead className="text-white/60">Cause</TableHead>
                          <TableHead className="text-white/60">Prevention</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          ["Brow ptosis (drooping)", "Injection too close to brow depressors", "Anatomical knowledge + precise placement"],
                          ["Frozen appearance", "Over-dosing or poor placement", "Conservative, layered approach with review"],
                          ["Asymmetry", "Ignoring natural facial asymmetry", "Pre-treatment assessment + bespoke plan"],
                          ["Bruising", "Hitting superficial vessels", "Experienced technique + ice application"],
                          ["Short duration", "Under-dosing", "Correct unit count for muscle strength"],
                        ].map(([comp, cause, prev], i) => (
                          <TableRow key={i} className="border-white/5">
                            <TableCell className="text-white/80 text-sm font-medium">{comp}</TableCell>
                            <TableCell className="text-white/50 text-xs">{cause}</TableCell>
                            <TableCell className="text-white/50 text-xs">{prev}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="bg-[#C9A050]/5 border border-[#C9A050]/20 rounded-lg p-4">
                    <p className="text-white/60 text-sm"><strong className="text-[#C9A050]">Clinical note:</strong> "In 17 years of practice, the most common issue I see from budget providers isn't dangerous — it's disappointing. Patients come to us after experiencing short-lived, uneven results. The solution is almost always correct dosing." — <em className="text-white/40">Dr Ahmed Haq</em></p>
                  </div>
                </div>
              </ExpandableSection>

              {/* Internal Links Cluster */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Continue Reading: Botox Pricing Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Botox Cost UK: Full Pricing Guide", href: "/botox-cost-uk/", desc: "Complete UK pricing breakdown with tables" },
                    { title: "How Many Units Do You Need?", href: "/botox-units-explained/", desc: "Area-by-area unit guide for men & women" },
                    { title: "How Long Does Botox Last?", href: "/how-long-does-botox-last/", desc: "Duration timeline & longevity factors" },
                    { title: "Botox Prices in London", href: "/botox-price-london/", desc: "London-specific pricing & area comparison" },
                  ].map((link) => (
                    <Link key={link.href} to={link.href} className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-xl p-4 transition-all duration-300">
                      <p className="text-white/80 text-sm font-medium group-hover:text-[#C9A050] transition-colors flex items-center gap-2">
                        {link.title} <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                      <p className="text-white/30 text-xs mt-1">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
                <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-white/10 rounded-xl px-4 data-[state=open]:bg-white/[0.03]">
                      <AccordionTrigger className="text-white/80 text-sm font-medium hover:text-[#C9A050] py-4">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-white/50 text-sm pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Ready for Results That Last?</h2>
                <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">Experience the difference correct dosing and doctor-led expertise makes. No shortcuts, no compromises — just natural, lasting results.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact/" className="inline-flex items-center justify-center gap-2 bg-[#C9A050] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#D4AF61] transition-colors text-sm">
                    Book Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/prices/" className="inline-flex items-center justify-center gap-2 border border-[#C9A050]/50 text-[#C9A050] font-medium px-6 py-3 rounded-full hover:bg-[#C9A050]/10 transition-colors text-sm">
                    View Full Pricing
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <CheapBotoxSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheapBotoxVsExpensive;
