import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle, Info, ArrowRight, MapPin, Building2, Shield, Landmark } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import BotoxPriceLondonSidebar from "@/components/botox-price-london/BotoxPriceLondonSidebar";
import londonImg from "@/assets/botox-london-harley-street.jpg";
import premiumImg from "@/assets/botox-premium-quality.jpg";

const BotoxPriceLondon = () => {
  const faqs = [
    { question: "How much does Botox cost in London?", answer: "Botox in London ranges from £150 to £600+ depending on the clinic, practitioner, and number of areas. At CosmeDocs on Harley Street, prices start from £275 for one area (women) and £395 for three areas. Premium Harley Street clinics typically charge £300–£500 for three areas." },
    { question: "Is Botox more expensive in London than the rest of the UK?", answer: "Yes, London Botox prices are typically 20–40% higher than regional clinics due to higher operating costs, rent, and the concentration of specialist practitioners. However, Harley Street clinics often provide superior expertise and longer-lasting results, offering better value per month." },
    { question: "Why is Harley Street Botox more expensive?", answer: "Harley Street's premium reflects CQC-registered premises, doctor-led treatments, specialist expertise, and proper dosing protocols. The medical district's reputation means practitioners invest heavily in training, equipment, and governance — costs that are reflected in pricing but also in outcomes." },
    { question: "Where is the cheapest Botox in London?", answer: "The cheapest Botox in London can be found at beauty salons and pop-up clinics for £99–£150, but these often use fewer units (20–30 vs 40–64 recommended), employ non-doctor injectors, and produce results lasting only 6–8 weeks. The cheapest option is rarely the most economical long-term." },
    { question: "Is London the best place to get Botox in the UK?", answer: "London — specifically Harley Street — has the highest concentration of specialist aesthetic practitioners in the UK. While excellent clinics exist throughout the country, London offers the widest choice of doctor-led, CQC-registered practices with extensive before-and-after portfolios." },
    { question: "How much is Botox for the forehead in London?", answer: "Forehead Botox in London typically costs £150–£300 for a single area. At CosmeDocs, forehead treatment starts from £275. Most practitioners recommend combining the forehead with frown lines for balanced results, which may cost £300–£400." },
    { question: "Do London clinics charge per unit or per area?", answer: "Most London clinics charge per area or per treatment session rather than per unit. Per-unit pricing (£8–£15/unit) is less common but more transparent. At CosmeDocs, we price per treatment area to keep costs predictable while ensuring correct dosing." },
    { question: "Can I get Botox on the NHS in London?", answer: "Botox is available on the NHS for medical conditions including chronic migraines, hyperhidrosis (excessive sweating), and certain neurological conditions. Cosmetic Botox is not NHS-funded. Referral is through your GP for qualifying medical indications." },
  ];

  return (
    <>
      <Helmet>
        <title>Botox Prices London: What Does It Cost in 2026?</title>
        <meta name="description" content="London Botox prices from £275. Compare Harley Street, Central London & outer borough pricing. Area-by-area cost breakdown from experienced Harley Street doctors." />
        <link rel="canonical" href="https://www.cosmedocs.com/botox-price-london/" />
        <meta property="og:title" content="Botox Prices London: What Does It Cost in 2026?" />
        <meta property="og:description" content="Compare Botox prices across London. Harley Street, Central London & outer borough pricing with area-by-area breakdowns." />
        <meta property="og:url" content="https://www.cosmedocs.com/botox-price-london/" />
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
                "headline": "Botox Prices London: What Does It Cost in 2026?",
                "author": { "@type": "Person", "name": "Dr Ahmed Haq", "jobTitle": "Medical Director", "url": "https://www.cosmedocs.com/our-team/dr-ahmed-haq/" },
                "publisher": { "@type": "Organization", "name": "CosmeDocs", "url": "https://www.cosmedocs.com" },
                "datePublished": "2026-03-27",
                "dateModified": "2026-03-27",
                "mainEntityOfPage": "https://www.cosmedocs.com/botox-price-london/"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
              },
              {
                "@type": "Offer",
                "priceCurrency": "GBP",
                "lowPrice": "275",
                "highPrice": "425",
                "description": "Botox treatment at CosmeDocs Harley Street London",
                "seller": { "@type": "Organization", "name": "CosmeDocs" }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A]">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Botox Cost UK", href: "/botox-cost-uk/" },
          { label: "Botox Prices London" }
        ]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* H1 + Top Answer */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Botox Prices London: What Does It <span className="text-[#C9A050]">Really Cost?</span>
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/40 mb-6">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C9A050]" /> Harley Street</span>
                  <span className="text-white/20">·</span>
                  <span>From £275</span>
                  <span className="text-white/20">·</span>
                  <span>Doctor-Led Since 2007</span>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed border-l-2 border-[#C9A050]/40 pl-4">
                  Botox in London costs £150–£600+ for three areas, depending on clinic location, practitioner experience, and dosing. Harley Street medical clinics typically charge £300–£500, while budget salons offer £99–£150 with significantly fewer units. At CosmeDocs, three-area treatments start from £395 (women) with full doctor-led assessment and correct dosing.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <img
                  src={londonImg}
                  alt="London Harley Street medical district at golden hour — home of CosmeDocs aesthetic clinic since 2007"
                  width={1024}
                  height={640}
                  className="w-full rounded-2xl border border-white/10"
                />
                <p className="text-xs text-white/30 mt-2 text-center italic">Harley Street, London — the heart of British aesthetic medicine</p>
              </motion.div>

              {/* London Price Comparison Table */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <h2 className="text-2xl font-bold text-white mb-2">London Botox Prices by Area</h2>
                <h3 className="text-lg text-[#C9A050]/80 mb-4">How much does Botox cost across London?</h3>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 bg-white/5">
                        <TableHead className="text-[#C9A050] font-semibold">London Area</TableHead>
                        <TableHead className="text-white/60">1 Area</TableHead>
                        <TableHead className="text-white/60">3 Areas</TableHead>
                        <TableHead className="text-white/60">Typical Setting</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Harley Street / Marylebone", "£250–£350", "£350–£500", "CQC-registered medical clinic"],
                        ["Central London (Mayfair, Chelsea)", "£300–£450", "£400–£600+", "Private aesthetic clinic"],
                        ["City of London / Canary Wharf", "£200–£350", "£300–£500", "Medical / dental practice"],
                        ["North London (Hampstead, Highgate)", "£200–£300", "£300–£450", "Medical clinic / GP practice"],
                        ["South London (Clapham, Dulwich)", "£180–£280", "£250–£400", "Mixed clinic / beauty salon"],
                        ["East London (Shoreditch, Hackney)", "£150–£250", "£250–£380", "Beauty salon / pop-up"],
                        ["Outer boroughs (Croydon, Bromley)", "£120–£220", "£200–£350", "Beauty salon / mobile"],
                        ["CosmeDocs Harley Street", "£275", "£395 (W) / £425 (M)", "Doctor-led CQC medical clinic"],
                      ].map(([area, one, three, setting], i) => (
                        <TableRow key={i} className={`border-white/5 ${i === 7 ? "bg-[#C9A050]/5 border-[#C9A050]/20" : "hover:bg-white/[0.03]"}`}>
                          <TableCell className={`text-sm font-medium ${i === 7 ? "text-[#C9A050]" : "text-white/80"}`}>{area}</TableCell>
                          <TableCell className="text-white/50 text-sm">{one}</TableCell>
                          <TableCell className="text-white/50 text-sm">{three}</TableCell>
                          <TableCell className="text-white/40 text-xs">{setting}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-white/30 text-xs mt-2 italic">Prices based on 2026 market research. Individual clinic prices vary.</p>
              </motion.div>

              {/* Why London Costs More */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-white mb-2">Why Is Botox More Expensive in London?</h2>
                <p className="text-white/60 text-sm mb-4">London Botox prices are 20–40% higher than the national average. Here's what drives the premium:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Building2, title: "Clinic overheads", desc: "Harley Street rents are among the highest in the UK — £150–£300 per sq ft annually" },
                    { icon: Shield, title: "CQC registration", desc: "London's concentration of regulated clinics means higher governance and compliance costs" },
                    { icon: Landmark, title: "Specialist practitioners", desc: "London attracts the UK's most experienced aesthetic doctors, commanding higher fees" },
                    { icon: MapPin, title: "Patient expectations", desc: "London patients typically expect comprehensive assessments and bespoke treatment plans" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <item.icon className="w-5 h-5 text-[#C9A050]/60 mb-2" />
                      <p className="text-white/80 text-sm font-medium">{item.title}</p>
                      <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CosmeDocs Pricing */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                className="bg-gradient-to-br from-[#C9A050]/10 to-[#C9A050]/5 border border-[#C9A050]/30 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[#C9A050] mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" /> CosmeDocs Harley Street Pricing
                </h2>
                <div className="overflow-x-auto rounded-xl border border-[#C9A050]/20">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-[#C9A050]/10 bg-[#C9A050]/5">
                        <TableHead className="text-[#C9A050] font-semibold">Treatment</TableHead>
                        <TableHead className="text-[#C9A050] font-semibold">Women</TableHead>
                        <TableHead className="text-[#C9A050] font-semibold">Men</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["1 Area", "£275", "£295"],
                        ["2 Areas", "£325", "£375"],
                        ["3 Areas", "£395", "£425"],
                        ["Masseter (jawline)", "From £350", "From £350"],
                        ["Hyperhidrosis", "From £450", "From £450"],
                      ].map(([treatment, women, men], i) => (
                        <TableRow key={i} className="border-[#C9A050]/5">
                          <TableCell className="text-white/80 text-sm font-medium">{treatment}</TableCell>
                          <TableCell className="text-white/60 text-sm">{women}</TableCell>
                          <TableCell className="text-white/60 text-sm">{men}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-white/40 text-xs mt-3">All prices include full facial assessment, treatment, and two-week review appointment.</p>
              </motion.div>

              {/* Premium Image */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <img
                  src={premiumImg}
                  alt="Premium Botox treatment preparation at CosmeDocs Harley Street London clinic"
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/10"
                />
              </motion.div>

              {/* London vs Rest of UK */}
              <ExpandableSection preview={<h2 className="text-xl font-bold text-white">London vs Rest of UK: Price Comparison</h2>} label="Compare prices" collapseLabel="Hide comparison">
                <div className="space-y-4">
                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10 bg-white/5">
                          <TableHead className="text-[#C9A050]">Region</TableHead>
                          <TableHead className="text-white/60">3 Areas (Avg)</TableHead>
                          <TableHead className="text-white/60">vs London</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          ["London (Harley Street)", "£350–£500", "—"],
                          ["South East", "£250–£400", "15–25% less"],
                          ["South West", "£220–£350", "20–30% less"],
                          ["Midlands", "£200–£350", "25–35% less"],
                          ["North West", "£180–£320", "30–40% less"],
                          ["North East", "£150–£280", "35–45% less"],
                          ["Scotland", "£180–£300", "30–40% less"],
                          ["Wales", "£150–£280", "35–45% less"],
                        ].map(([region, price, diff], i) => (
                          <TableRow key={i} className={`border-white/5 ${i === 0 ? "bg-[#C9A050]/5" : "hover:bg-white/[0.03]"}`}>
                            <TableCell className={`text-sm font-medium ${i === 0 ? "text-[#C9A050]" : "text-white/80"}`}>{region}</TableCell>
                            <TableCell className="text-white/50 text-sm">{price}</TableCell>
                            <TableCell className="text-white/40 text-sm">{diff}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                    <p className="text-white/60 text-sm"><strong className="text-[#C9A050]">Worth noting:</strong> "Patients travel to Harley Street from across the UK because the expertise concentration justifies the premium. Many find that correctly dosed London treatments actually cost less annually than cheaper regional alternatives that wear off quickly." — <em className="text-white/40">Dr Ahmed Haq</em></p>
                  </div>
                </div>
              </ExpandableSection>

              {/* What to Look For */}
              <ExpandableSection preview={<h2 className="text-xl font-bold text-white">Choosing a London Botox Clinic: What to Check</h2>} label="View checklist" collapseLabel="Hide checklist">
                <div className="space-y-3">
                  {[
                    { check: "CQC registration", detail: "The clinic should be registered with the Care Quality Commission for cosmetic treatments" },
                    { check: "Doctor-led practice", detail: "Botox is a prescription medicine — ensure a doctor prescribes and ideally administers" },
                    { check: "Transparent pricing", detail: "Clear pricing including what's included — beware hidden charges for reviews or top-ups" },
                    { check: "Before & after portfolio", detail: "Verified results from the specific practitioner, not stock images" },
                    { check: "Unit transparency", detail: "Ask how many units they use per area — reputable clinics are happy to share" },
                    { check: "Two-week review policy", detail: "Complimentary follow-up should be standard, not an optional extra" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/[0.03] rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white/80 text-sm font-medium">{item.check}</p>
                        <p className="text-white/40 text-xs mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ExpandableSection>

              {/* Cluster Links */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Continue Reading: Botox Pricing Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Botox Cost UK: Full Pricing Guide", href: "/botox-cost-uk/", desc: "Complete UK pricing breakdown" },
                    { title: "How Many Units Do You Need?", href: "/botox-units-explained/", desc: "Area-by-area unit guide" },
                    { title: "How Long Does Botox Last?", href: "/how-long-does-botox-last/", desc: "Duration & longevity factors" },
                    { title: "Cheap vs Expensive Botox", href: "/cheap-botox-vs-expensive/", desc: "Side-by-side quality comparison" },
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
                <h2 className="text-2xl font-bold text-white mb-2">Visit Us on Harley Street</h2>
                <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">Experience doctor-led Botox at London's most established aesthetic clinic. Transparent pricing, correct dosing, and results that last.</p>
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
                <BotoxPriceLondonSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotoxPriceLondon;
