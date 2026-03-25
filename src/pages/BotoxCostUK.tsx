import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle, Info, ArrowRight, Users, RefreshCw, Calculator, Shield } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxCostSidebar from "@/components/botox-cost/BotoxCostSidebar";

const BotoxCostUK = () => {
  const faqs = [
    { question: "How much is Botox in the UK?", answer: "Botox in the UK typically costs between £200 and £400 for three areas. At CosmeDocs on Harley Street, prices start from £275 for one area and £395 for three areas (women). Pricing varies depending on the number of units, practitioner experience, and clinic location." },
    { question: "How many units of Botox do I need?", answer: "Most patients need 40–60 units for three areas. The forehead typically requires 10–30 units, frown lines 10–25 units, and crow's feet 12–24 units per side. Your doctor assesses your muscle strength and facial anatomy to determine the precise dose." },
    { question: "Why is Botox cheaper in some clinics?", answer: "Lower prices often mean fewer units per area, less experienced practitioners, or diluted product. Clinics offering Botox below £150 for three areas may be cutting corners on dosing. Under-dosed Botox wears off faster, meaning more frequent treatments and higher long-term costs." },
    { question: "How long does Botox last?", answer: "Botox typically lasts 3–6 months depending on the area treated, your metabolism, dose administered, and muscle activity. Correctly dosed treatments by experienced practitioners tend to last longer than budget alternatives." },
    { question: "Is Botox safe?", answer: "Botox has been used medically for over 30 years and is one of the most extensively studied cosmetic treatments. When administered by qualified medical professionals using correct dosing, it has an excellent safety profile. At CosmeDocs, all treatments are doctor-led." },
    { question: "Can men get Botox?", answer: "Absolutely. Male Botox is one of our fastest-growing treatments. Men typically require higher doses (up to 30% more units) due to stronger facial muscles, which is reflected in our pricing — £425 for three areas compared to £395 for women." },
    { question: "What's the difference between 1 area and 3 areas?", answer: "One area treats a single zone (e.g. frown lines only). Three areas typically includes forehead lines, frown lines, and crow's feet — addressing the full upper face for balanced, natural results. Treating areas in combination produces more harmonious outcomes." },
    { question: "Does cheap Botox work?", answer: "Cheap Botox may produce results, but they often wear off within 6–8 weeks rather than 3–6 months. This is usually because fewer units are used per area. Over time, frequent low-dose treatments can cost more than investing in correctly dosed treatments from the start." },
    { question: "How often do I need Botox?", answer: "Most patients return every 3–6 months. With consistent treatments over time, many patients find they can extend intervals as muscles weaken. At CosmeDocs, we focus on long-term facial health rather than frequent repeat visits." },
    { question: "What affects Botox longevity?", answer: "Key factors include the number of units injected, your metabolic rate, muscle strength, exercise intensity, and whether you've been under-dosed in previous treatments. Correct initial dosing is the single most important factor for lasting results." },
  ];

  return (
    <>
      <Helmet>
        <title>Botox Cost UK (2026): Prices, Units & What Affects Cost</title>
        <meta name="description" content="Clear explanation of Botox pricing in the UK, how many units you need, and why costs vary. Learn what you're really paying for from Harley Street doctors." />
        <link rel="canonical" href="https://www.cosmedocs.com/botox-cost-uk/" />
        <meta property="og:title" content="Botox Cost UK (2026): Prices, Units & What Affects Cost" />
        <meta property="og:description" content="Clear explanation of Botox pricing in the UK, how many units you need, and why costs vary." />
        <meta property="og:url" content="https://www.cosmedocs.com/botox-cost-uk/" />
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
                "image": "https://www.cosmedocs.com/og-image.jpg",
                "logo": "https://www.cosmedocs.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "addressRegion": "Greater London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 51.5074, "longitude": -0.1278 },
                "contactPoint": { "@type": "ContactPoint", "telephone": "+44 20 3733 3227", "contactType": "customer service" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "243" },
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00" }
                ]
              },
              {
                "@type": "Article",
                "headline": "Botox Cost UK: Pricing, Units & What You're Really Paying For",
                "author": { "@type": "Person", "name": "Dr Ahmed Haq", "url": "https://www.cosmedocs.com/our-team/dr-ahmed-haq/" },
                "datePublished": "2026-03-25",
                "dateModified": "2026-03-25",
                "publisher": { "@type": "Organization", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/" },
                "mainEntityOfPage": "https://www.cosmedocs.com/botox-cost-uk/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
              },
              {
                "@type": "Offer",
                "name": "Botox Treatment",
                "priceCurrency": "GBP",
                "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "GBP", "minPrice": "275", "maxPrice": "425" },
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "MedicalBusiness", "name": "CosmeDocs" }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Botox', path: '/treatments/botox/' }
              ]}
              currentPage="Botox Cost UK"
            />

            <div className="max-w-3xl pt-12 pb-4">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white/90 leading-[1.1] tracking-tight mb-6">
                  Botox Cost UK:{" "}
                  <span className="text-[#C9A050] font-light">Pricing, Units & What You're Really Paying For</span>
                </h1>

                {/* Top Answer Paragraph — featured snippet target */}
                <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl">
                  Botox in the UK typically costs £200–£400 for three areas. Prices vary depending on the number of units used, practitioner experience, and clinic location. While cheaper treatments may use lower doses, experienced providers focus on long-term results and facial balance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
              >
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />From £275</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Harley Street</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </section>

        {/* ═══ TWO-COLUMN LAYOUT ═══ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="space-y-14">

              {/* ─── SECTION 1: Quick Answer Block (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="border border-[#C9A050]/30 rounded-xl p-6 bg-[#C9A050]/[0.03]">
                    <h2 className="text-lg font-medium text-[#C9A050] mb-4">Quick Answer: How Much Does Botox Cost?</h2>
                    <ul className="space-y-3 text-sm text-white/60 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/70">Average UK price:</strong> £200–£400 for three areas (forehead, frown, crow's feet)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/70">Why prices vary:</strong> Number of units, practitioner expertise, clinic location, and product brand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/70">Long-term value:</strong> Correctly dosed treatments last longer and reduce total yearly spend</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/60 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white/70">CosmeDocs pricing:</strong> From £275 (1 area) to £425 (3 areas, men) — doctor-led on Harley Street</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </section>

              {/* ─── SECTION 2: Pricing Breakdown (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How Much Does Botox <span className="text-[#C9A050] font-light">Cost in the UK?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                  <div className="space-y-6 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      Botox pricing across the UK varies significantly — from as little as £99 at discount chains to over £500 at premium Harley Street clinics. The average cost for three areas sits between £200 and £400, but that figure alone doesn't tell you what you're actually getting.
                    </p>
                    <p>
                      At CosmeDocs, our pricing reflects correct dosing by experienced doctors. Dr Ahmed Haq explains: <em className="text-white/60">"The cost of Botox should reflect the number of units used, not just the number of areas treated. Under-dosing to reduce price is the most common reason patients see poor or short-lived results."</em>
                    </p>

                    {/* CosmeDocs Pricing Table */}
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-white/10">
                            <TableHead className="text-[#C9A050]/70 text-xs">Treatment</TableHead>
                            <TableHead className="text-[#C9A050]/70 text-xs">Women</TableHead>
                            <TableHead className="text-[#C9A050]/70 text-xs">Men</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { area: "1 Area", women: "£275", men: "£295" },
                            { area: "2 Areas", women: "£350", men: "£380" },
                            { area: "3 Areas", women: "£395", men: "£425" },
                            { area: "Consultation", women: "£50", men: "£50" },
                          ].map((row) => (
                            <TableRow key={row.area} className="border-white/5">
                              <TableCell className="text-white/60 text-sm">{row.area}</TableCell>
                              <TableCell className="text-white/70 text-sm font-medium">{row.women}</TableCell>
                              <TableCell className="text-white/70 text-sm font-medium">{row.men}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <p className="text-xs text-white/25">Consultation fee deducted from treatment cost. <Link to="/prices/" className="text-[#C9A050]/60 hover:text-[#C9A050] underline">View full price list</Link></p>

                    <h3 className="text-xl font-light text-white/70 mt-8 mb-3">Why is Botox more expensive in London?</h3>
                    <p>
                      London clinics — particularly those on Harley Street — operate with higher overheads including property costs, insurance, and regulatory compliance. However, the primary cost difference is expertise. London attracts the most experienced practitioners in the UK, many of whom have performed tens of thousands of treatments. At CosmeDocs, our team has administered over one million injections since 2007.
                    </p>

                    {/* Cheap vs Experienced Table */}
                    <h3 className="text-xl font-light text-white/70 mt-8 mb-3">Cheap Botox vs Experienced Provider</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-white/10">
                            <TableHead className="text-[#C9A050]/70 text-xs">Factor</TableHead>
                            <TableHead className="text-[#C9A050]/70 text-xs">Budget Clinic</TableHead>
                            <TableHead className="text-[#C9A050]/70 text-xs">Experienced Provider</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { factor: "Typical price (3 areas)", budget: "£99–£199", experienced: "£300–£450" },
                            { factor: "Units per area", budget: "Lower dose", experienced: "Correct dose" },
                            { factor: "Results duration", budget: "6–8 weeks", experienced: "3–6 months" },
                            { factor: "Practitioner", budget: "Nurse / non-doctor", experienced: "Doctor-led" },
                            { factor: "Repeat visits per year", budget: "5–6 times", experienced: "2–3 times" },
                            { factor: "Annual spend", budget: "£500–£1,200", experienced: "£600–£900" },
                          ].map((row) => (
                            <TableRow key={row.factor} className="border-white/5">
                              <TableCell className="text-white/60 text-sm">{row.factor}</TableCell>
                              <TableCell className="text-white/50 text-sm">{row.budget}</TableCell>
                              <TableCell className="text-white/70 text-sm">{row.experienced}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* WARNING callout */}
                    <div className="border border-amber-500/20 rounded-xl p-4 bg-amber-500/[0.03] mt-4">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400/70 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-amber-300/80 font-medium uppercase tracking-wider mb-1">Warning</p>
                          <p className="text-sm text-white/50">Some clinics advertise lower Botox prices by reducing the dose or treating fewer muscle groups. This can result in uneven results, faster wear-off, and ultimately higher costs over time.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* ─── SECTION 3: Units Guide (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    How Many Units of <span className="text-[#C9A050] font-light">Botox Do You Need?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />

                  <div className="space-y-6 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      Understanding Botox units is key to understanding pricing. Each area of the face requires a specific number of units for effective results. Under-dosing — using fewer units to reduce cost — is the single most common cause of short-lived Botox results.
                    </p>

                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-white/10">
                            <TableHead className="text-[#C9A050]/70 text-xs">Area</TableHead>
                            <TableHead className="text-[#C9A050]/70 text-xs">Women</TableHead>
                            <TableHead className="text-[#C9A050]/70 text-xs">Men</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { area: "Forehead lines", women: "10–30 units", men: "15–35 units" },
                            { area: "Frown lines (glabella)", women: "10–25 units", men: "15–30 units" },
                            { area: "Crow's feet (per side)", women: "6–12 units", men: "8–15 units" },
                            { area: "Masseter (jawline slimming)", women: "40–60 units", men: "50–80 units" },
                            { area: "Bunny lines", women: "4–8 units", men: "6–10 units" },
                          ].map((row) => (
                            <TableRow key={row.area} className="border-white/5">
                              <TableCell className="text-white/60 text-sm">{row.area}</TableCell>
                              <TableCell className="text-white/70 text-sm">{row.women}</TableCell>
                              <TableCell className="text-white/70 text-sm">{row.men}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <h3 className="text-xl font-light text-white/70 mt-6 mb-3">Does more units mean better results?</h3>
                    <p>
                      Not necessarily. The goal is correct dosing, not maximum dosing. Dr Ahmed Haq explains: <em className="text-white/60">"Every patient's facial anatomy is different. We assess muscle strength, skin thickness, and movement patterns to determine the exact number of units needed. Over-treating creates a frozen, unnatural appearance — under-treating creates disappointment."</em>
                    </p>
                    <p>
                      Men typically require 20–30% more units than women due to greater muscle mass. This is why our male <Link to="/treatments/botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline">Botox treatments</Link> are priced slightly higher — to ensure equivalent results without compromising on dose.
                    </p>

                    {/* EXPERT TIP callout */}
                    <div className="border border-[#C9A050]/20 rounded-xl p-4 bg-[#C9A050]/[0.03]">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-[#C9A050]/70 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-[#C9A050]/80 font-medium uppercase tracking-wider mb-1">Expert Tip</p>
                          <p className="text-sm text-white/50">Ask your practitioner how many units they plan to use — not just how many "areas" they'll treat. A clinic offering "3 areas for £99" is almost certainly under-dosing, which means you'll be back sooner and spend more overall.</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-white/50 mt-4">For a full area-by-area breakdown, see our <Link to="/botox-units-explained/" className="text-[#C9A050] hover:underline">complete Botox units guide</Link>.</p>
                  </div>
                </motion.div>
              </section>

              {/* ─── SECTION 4: Why Prices Vary (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Why Botox Prices <span className="text-[#C9A050] font-light">Vary So Much</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The UK Botox market ranges from £99 deals on discount platforms to £500+ at premium clinics. Understanding why helps you make an informed decision about your investment — because Botox pricing isn't just about the product, it's about what the price includes.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p><strong className="text-white/60">1. Number of units:</strong> This is the biggest variable. A clinic using 20 units across three areas charges less because they're using less product — but results will be weaker and shorter-lived. Correct dosing for three areas typically requires 40–60 units.</p>
                      <p><strong className="text-white/60">2. Practitioner experience:</strong> A doctor with 17+ years of injectable experience, like our team at CosmeDocs, understands facial anatomy at a depth that prevents complications and delivers consistently natural results.</p>
                      <p><strong className="text-white/60">3. Product brand:</strong> Premium brands (Allergan Botox, Azzalure, Bocouture) cost more than unbranded alternatives. At CosmeDocs, we use only FDA-approved, CE-marked products from established manufacturers.</p>
                      <p><strong className="text-white/60">4. Clinic location and overheads:</strong> Harley Street clinics operate to higher regulatory standards with greater insurance, compliance, and facility costs. These overheads ensure patient safety and clinical governance.</p>
                      <p><strong className="text-white/60">5. Consultation quality:</strong> Budget clinics often skip thorough facial assessment. Our consultations include detailed muscle mapping, medical history review, and personalised treatment planning.</p>

                      <h3 className="text-xl font-light text-white/70 mt-6 mb-3">Is Botox worth the cost?</h3>
                      <p>
                        When performed correctly, Botox is one of the most cost-effective aesthetic treatments available. A single session prevents dynamic wrinkles from becoming static lines — which are far more expensive to treat. At our Harley Street clinic, patients who invest in correctly dosed Botox from the start consistently report better satisfaction, longer-lasting results, and lower total annual spend compared to those who started with budget alternatives.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 5: Why Botox Wears Off Faster (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Why Botox Wears Off <span className="text-[#C9A050] font-light">Faster in Some Patients</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        One of the most common questions we receive is "Why doesn't my Botox last?" The answer usually comes down to four factors: metabolism, muscle strength, dosing, and lifestyle. Understanding these helps you maximise the value of each treatment.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p><strong className="text-white/60">Metabolism:</strong> Patients with higher metabolic rates process Botox faster. If you exercise intensely (particularly high-intensity interval training or endurance sports), your body may metabolise the toxin more quickly. This doesn't mean you should avoid exercise — it means your dosing strategy may need adjustment.</p>
                      <p><strong className="text-white/60">Muscle strength:</strong> Stronger facial muscles require more units to achieve the same effect. This is why men typically need higher doses and why the <Link to="/treatments/masseter-botox/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline">masseter muscle</Link> requires 40–80 units compared to 10–25 for the frown.</p>
                      <p><strong className="text-white/60">Under-dosing:</strong> This is the most common — and most preventable — cause of short-lived results. Clinics offering very low prices often achieve this by using fewer units. The result looks good for 4–6 weeks, then fades rapidly. Dr Ahmed Haq notes: <em className="text-white/60">"Correct dosing isn't about using more — it's about using enough. We tailor every treatment to the individual patient's muscle dynamics."</em></p>
                      <p><strong className="text-white/60">Treatment frequency:</strong> Patients who maintain consistent Botox schedules often find their results last progressively longer over time, as muscles weaken with repeated treatment. This is one reason why long-term Botox actually becomes more cost-effective.</p>
                      <p className="text-white/50 mt-2">For a detailed timeline of what to expect, read our <Link to="/how-long-does-botox-last/" className="text-[#C9A050] hover:underline">guide to how long Botox lasts</Link>.</p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 6: Cost vs Value Over 5 Years (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Botox Cost vs Value <span className="text-[#C9A050] font-light">Over 5 Years</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The true cost of Botox isn't the price per session — it's the total investment over time. When you compare budget Botox that wears off every 6 weeks against correctly dosed treatments lasting 4–6 months, the mathematics are revealing.
                      </p>
                    }
                  >
                    <div className="space-y-6 text-white/45 text-sm leading-relaxed font-light">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="border-white/10">
                              <TableHead className="text-[#C9A050]/70 text-xs">Scenario</TableHead>
                              <TableHead className="text-[#C9A050]/70 text-xs">Budget Botox</TableHead>
                              <TableHead className="text-[#C9A050]/70 text-xs">CosmeDocs</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { metric: "Price per session", budget: "£150", cosmedocs: "£395" },
                              { metric: "Results last", budget: "6–8 weeks", cosmedocs: "4–6 months" },
                              { metric: "Sessions per year", budget: "5–6", cosmedocs: "2–3" },
                              { metric: "Annual cost", budget: "£750–£900", cosmedocs: "£790–£1,185" },
                              { metric: "5-year total", budget: "£3,750–£4,500", cosmedocs: "£3,950–£5,925" },
                              { metric: "Total sessions (5 yrs)", budget: "25–30", cosmedocs: "10–15" },
                            ].map((row) => (
                              <TableRow key={row.metric} className="border-white/5">
                                <TableCell className="text-white/60 text-sm">{row.metric}</TableCell>
                                <TableCell className="text-white/50 text-sm">{row.budget}</TableCell>
                                <TableCell className="text-white/70 text-sm">{row.cosmedocs}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <p>
                        While the annual spend may appear similar, the correctly dosed approach requires half the clinic visits, half the injection sessions, and delivers consistently better results. Over five years, you'll spend roughly the same — but with significantly less time in clinic, less bruising risk, and better long-term muscle training.
                      </p>
                      <p>
                        Many patients who come to us from budget clinics report that switching to correctly dosed treatments was the single most impactful change in their aesthetic journey. With 17+ years of experience at our Harley Street clinic, we've seen this pattern repeatedly.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 7: UK vs US Pricing (ExpandableSection) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    UK vs US <span className="text-[#C9A050] font-light">Botox Pricing</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Botox pricing in the United States typically ranges from $300–$600 (£240–£480) for three areas, with major cities like New York and Los Angeles commanding premium prices. UK pricing is broadly comparable, though the regulatory environment differs significantly.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        In the US, Botox is priced per unit (typically $10–$20 per unit), making cost comparisons more transparent. The UK market more commonly prices per area or per treatment, which can obscure the number of units being used. At CosmeDocs, we're transparent about our dosing approach and happy to discuss unit counts during consultation.
                      </p>
                      <p>
                        The UK benefits from stricter regulation around who can administer Botox. While not all clinics are doctor-led, the trend towards medical practitioner oversight is stronger in the UK than in many US states where aestheticians can perform injections with minimal supervision.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* ─── SECTION 8: Who Is This For? (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Who Is This <span className="text-[#C9A050] font-light">Guide For?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-4">
                    {[
                      { icon: <Users className="w-5 h-5" />, title: "First-time Botox patients", desc: "Understand exactly what you're paying for before your first treatment. Know the right questions to ask during consultation." },
                      { icon: <RefreshCw className="w-5 h-5" />, title: "Patients switching clinics", desc: "If your current Botox isn't lasting or looks unnatural, this guide explains why — and what to look for in your next provider." },
                      { icon: <Shield className="w-5 h-5" />, title: "Patients with poor previous results", desc: "Under-dosing, incorrect placement, or inappropriate products are the most common causes. We see these patients regularly and can help correct course." },
                      { icon: <Calculator className="w-5 h-5" />, title: "Cost-conscious patients", desc: "If you're comparing prices, this guide gives you the framework to evaluate not just cost, but value. The cheapest treatment isn't always the most affordable." },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="text-[#C9A050]/60 mt-0.5">{item.icon}</div>
                        <div>
                          <p className="text-sm font-medium text-white/70 mb-1">{item.title}</p>
                          <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* ─── SECTION 9: Treatment Journey (fully visible) ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Your First Botox: <span className="text-[#C9A050] font-light">What to Expect</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="space-y-0">
                    {[
                      { time: "Day 0", title: "Treatment Day", desc: "Consultation, facial assessment, and precise injections. Takes 10–20 minutes. You can return to normal activities immediately." },
                      { time: "Day 3–5", title: "Onset Begins", desc: "Botox starts taking effect. You'll notice reduced muscle movement in treated areas. Some patients experience mild bruising." },
                      { time: "Day 14", title: "Full Results", desc: "Optimal results are visible. This is when we assess whether any touch-up is needed. Lines at rest are softened, expression is preserved." },
                      { time: "Month 3–6", title: "Maintenance", desc: "Results gradually wear off as muscle activity returns. Most patients rebook at this stage. With consistent treatment, intervals often extend over time." },
                    ].map((step, index) => (
                      <div key={step.time} className="flex gap-4 pb-6">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/[0.05] flex items-center justify-center text-xs text-[#C9A050] font-medium flex-shrink-0">
                            {index + 1}
                          </div>
                          {index < 3 && <div className="w-px flex-1 bg-[#C9A050]/10 mt-2" />}
                        </div>
                        <div className="pt-1.5">
                          <p className="text-xs text-[#C9A050]/60 uppercase tracking-wider mb-1">{step.time}</p>
                          <p className="text-sm font-medium text-white/70 mb-1">{step.title}</p>
                          <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* ─── CTA Section ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <div className="border border-[#C9A050]/20 rounded-2xl p-8 bg-[#C9A050]/[0.02] text-center">
                    <h2 className="text-2xl font-extralight text-white/80 mb-3">Ready to understand your Botox options?</h2>
                    <p className="text-sm text-white/40 mb-6 max-w-lg mx-auto">Book a consultation with our Harley Street doctors to discuss your goals, get a personalised dosing plan, and understand exactly what your investment includes.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href="https://med.as.me/harleystreet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-3 font-medium text-sm transition-all duration-300"
                      >
                        Book Consultation
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <Link
                        to="/contact/"
                        className="inline-flex items-center gap-2 border border-white/10 hover:border-[#C9A050]/30 text-white/60 hover:text-white/80 rounded-full px-8 py-3 text-sm transition-all duration-300"
                      >
                        Get Personalised Plan
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* ─── FAQs ─── */}
              <section>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Frequently Asked <span className="text-[#C9A050] font-light">Questions</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border border-white/[0.06] rounded-xl px-5 bg-white/[0.01] data-[state=open]:bg-white/[0.02]"
                      >
                        <AccordionTrigger className="text-sm text-white/60 hover:text-white/80 font-medium hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-white/40 leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </section>

            </div>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <BotoxCostSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* Mobile sidebar */}
        <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <BotoxCostSidebar />
        </div>
      </div>
    </>
  );
};

export default BotoxCostUK;
