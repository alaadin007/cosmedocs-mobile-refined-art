import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
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
import DosageSidebar from "@/components/dosage/DosageSidebar";

const FAQ = [
  { q: "How many units of Botox for masseter?", a: "Masseter Botox typically uses 30–60 units total (15–30 per side). Women usually require 30–50 units, men require 40–60. Smaller doses produce only short-lived bruxism relief; doses below 25 per side rarely give visible slimming." },
  { q: "How many units for jaw slimming specifically?", a: "Visible jaw slimming requires at least 25 units per side, more typically 30–40 per side. Below this threshold the muscle atrophies too little for the change to be cosmetically meaningful." },
  { q: "How many units for bruxism / teeth grinding?", a: "Bruxism relief is achievable with lower doses — 20–25 units per side is often enough. Patients with severe nocturnal grinding or significant masseter hypertrophy may need 30+ per side for sustained relief." },
  { q: "How long does masseter Botox last?", a: "First treatment: 3–4 months. With repeat sessions every 4–6 months, the muscle progressively weakens and the slimming effect lasts longer — often 6+ months by the third cycle." },
  { q: "Will masseter Botox change the shape of my smile?", a: "When dosed and placed correctly, no. Risks like an asymmetric smile or 'paradoxical bulging' come from injecting too superficially or outside the safe zone — both are technique problems, not dose problems." },
  { q: "Can I use less than 25 units per side?", a: "Yes, for mild bruxism or if you only want preventative relief. But you should not expect visible slimming. Under-dosing is the most common cause of disappointed patients." },
  { q: "Do men need more masseter Botox than women?", a: "Yes. Male masseters are typically 25–40% larger and stronger. A reasonable starting dose for men is 30 units per side, escalating to 40 if hypertrophy is significant." },
];

const MasseterBotoxUnitsDosage = () => {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", headline: "Masseter Botox Dosage: How Many Units Do You Need?", author: { "@type": "Person", name: "Dr Ahmed Haq", jobTitle: "Medical Director", url: "https://www.cosmedocs.com/our-team/dr-ahmed-haq/" }, publisher: { "@type": "MedicalBusiness", name: "CosmeDocs", url: "https://www.cosmedocs.com" }, datePublished: "2026-05-14", dateModified: "2026-05-14", description: "Masseter Botox dosing — units explained for jaw slimming, bruxism relief and tooth grinding." };

  return (
    <>
      <Helmet>
        <title>Masseter Botox Dosage: How Many Units Do You Need? | CosmeDocs</title>
        <meta name="description" content="Masseter Botox units explained — how many for jaw slimming, how many for bruxism, the difference between men and women, and why under-dosing fails." />
        <link rel="canonical" href="https://www.cosmedocs.com/masseter-botox-units-dosage/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0"><div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/5 rounded-full blur-3xl" /></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
                  <Link to="/" className="hover:text-white/60">Home</Link>
                  <span>/</span>
                  <Link to="/treatments/botox/" className="hover:text-white/60">Anti-Wrinkle Treatment</Link>
                  <span>/</span>
                  <span className="text-white/50">Masseter Units</span>
                </nav>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Masseter Botox Dosage: <span className="text-[#C9A050]">How Many Units Do You Actually Need?</span>
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Doctor-Led", "Bruxism + Slimming", "Harley Street", "Evidence-Based"].map((item) => (
                    <div key={item} className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C9A050]" /><span>{item}</span></div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  Masseter Botox typically uses <strong className="text-white/90">30–60 units total</strong> — 15–30 per side. Below 25 units per side you may achieve mild bruxism relief but rarely visible slimming. Men generally need more units than women due to larger, stronger masseter muscles. Under-dosing is the single most common reason masseter Botox "doesn't work".
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0 space-y-14">
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">Quick Answer</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    ["Bruxism relief (mild):", "20–25 units per side"],
                    ["Bruxism relief (severe):", "25–35 units per side"],
                    ["Visible jaw slimming (women):", "25–35 units per side"],
                    ["Visible jaw slimming (men):", "30–40 units per side"],
                    ["First treatment minimum:", "25 units per side — anything less risks no result"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white/90">{k}</strong> {v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Two Goals, Two Doses</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Masseter Botox is requested for two distinct reasons — and the dose depends on which one you want. Bruxism (teeth grinding, clenching, jaw tension, tension headaches) responds to lower doses because partial muscle weakening is enough to break the grinding cycle. Cosmetic jaw slimming requires the muscle to atrophy enough to visibly narrow the lower face — and atrophy is dose-dependent.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  At CosmeDocs, we always confirm your goal before deciding the dose. A patient who wants both — relief and slimming — almost always sits in the 30–35 units-per-side range.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Dosing Table</h2>
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Goal</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Women / side</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Men / side</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Mild bruxism only", "20", "25", "40–50"],
                        ["Severe bruxism", "25–30", "30–35", "55–65"],
                        ["Cosmetic slimming", "25–35", "30–40", "55–75"],
                        ["Slimming + bruxism", "30–35", "35–40", "65–75"],
                      ].map(([a, b, c, d]) => (
                        <TableRow key={a} className="border-b border-white/[0.04]">
                          <TableCell className="text-sm text-white/70">{a}</TableCell>
                          <TableCell className="text-sm text-white/50">{b}</TableCell>
                          <TableCell className="text-sm text-white/50">{c}</TableCell>
                          <TableCell className="text-sm text-white/50">{d}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Why Repeat Treatments Slim More</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Masseter atrophy is cumulative. A first treatment shrinks the muscle by roughly 20–30%. A second treatment four to six months later (before the muscle fully recovers) compounds the effect — by the third or fourth session, many patients reach a stable slimmer jawline that holds for 6–9 months between top-ups. This is why budgeting masseter Botox as a 12–18 month project, not a single session, gives the best long-term result.
                </p>
              </div>

              <div className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.03]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">The "20-unit special" warning</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Some clinics advertise masseter Botox at 20 units total (10 per side) to hit a low headline price. At that dose, the muscle is barely weakened — bruxism returns within weeks and there is no slimming. You then assume Botox does not work for you, when in fact you were under-dosed. Always ask the per-side unit count before booking.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Common Questions</h2>
                <Accordion type="single" collapsible className="border-t border-white/[0.06]">
                  {FAQ.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/[0.06]">
                      <AccordionTrigger className="text-left text-white/80 hover:text-[#C9A050] text-sm font-light">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-sm text-white/50 leading-relaxed">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="border-t border-white/[0.06] pt-8">
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4">Continue reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Bruxism Botox Treatment", path: "/bruxism-botox/" },
                    { label: "Botox Units Explained", path: "/botox-units-explained/" },
                    { label: "Tooth Chipping & Grinding", path: "/blog/tooth-chipping-grinding-masseter/" },
                    { label: "Before & After Masseter Botox", path: "/before-after/botox-masseter/" },
                  ].map((l) => (
                    <Link key={l.path} to={l.path} className="flex items-center justify-between border border-white/[0.06] rounded-xl px-4 py-3 hover:border-[#C9A050]/30 hover:bg-white/[0.02] transition-all group">
                      <span className="text-sm text-white/70 group-hover:text-[#C9A050]">{l.label}</span>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-[#C9A050]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <DosageSidebar
                  title="Masseter Quick Guide"
                  rows={[
                    { area: "Mild bruxism", value: "20–25 / side" },
                    { area: "Severe bruxism", value: "25–35 / side" },
                    { area: "Slimming (women)", value: "25–35 / side" },
                    { area: "Slimming (men)", value: "30–40 / side" },
                    { area: "Total typical", value: "55–75 units" },
                  ]}
                  concepts={[
                    "Bruxism dose vs slimming dose",
                    "Why repeat treatments slim more",
                    "Gender differences in masseter size",
                    "The 20-unit under-dose trap",
                    "When to combine with jaw filler",
                  ]}
                  related={[
                    { label: "Bruxism Botox", path: "/bruxism-botox/" },
                    { label: "Botox Units Explained", path: "/botox-units-explained/" },
                    { label: "Tooth Chipping Blog", path: "/blog/tooth-chipping-grinding-masseter/" },
                    { label: "Before & After Masseter", path: "/before-after/botox-masseter/" },
                    { label: "Botox Cost UK", path: "/botox-cost-uk/" },
                  ]}
                />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default MasseterBotoxUnitsDosage;
