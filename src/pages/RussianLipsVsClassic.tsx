import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
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
  { q: "What is the Russian lip technique?", a: "Russian lips is a vertical injection technique that uses multiple small deposits placed perpendicular to the lip border, working outward from the centre. It produces a 'heart-shaped' lift, more height than projection, and a defined cupid's bow." },
  { q: "What is the difference between Russian lips and classic lip filler?", a: "Classic technique uses linear threads along the lip body for projection and plumping. Russian technique uses vertical micro-deposits for height and central definition. Classic projects the lip outward; Russian lifts and shapes it upward." },
  { q: "Which technique uses more product?", a: "Both typically use 0.5–1ml. Russian lips often need 1ml for a complete result because the multiple micro-deposits use slightly more product per unit of visible change." },
  { q: "Does Russian lips look more natural?", a: "Not inherently. Russian lips look natural when the patient already has lip body that suits height-led shaping. On thin or short lips, classic technique often produces a more natural result." },
  { q: "Can you combine Russian and classic technique?", a: "Yes — and we frequently do. A blended approach (vertical for cupid's bow definition, linear for body) gives the most refined result for many patients. The technique is decided in consultation, not in advance." },
  { q: "Does Russian lips last longer?", a: "Slightly — vertical micro-deposits sit in firmer tissue and metabolise marginally slower. Expect 8–12 months for Russian, 6–9 months for classic." },
  { q: "Does Russian lips hurt more?", a: "Russian technique uses more injection points (typically 12–20 vs 4–8 for classic). With dental block anaesthesia and topical numbing, both are tolerable. Bruising can be slightly more visible after Russian technique." },
];

const RussianLipsVsClassic = () => {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", headline: "Russian Lip Technique vs Classic Lip Filler: When Each Is Appropriate", author: { "@type": "Person", name: "Dr Ahmed Haq", jobTitle: "Medical Director", url: "https://www.cosmedocs.com/our-team/dr-ahmed-haq/" }, publisher: { "@type": "MedicalBusiness", name: "CosmeDocs", url: "https://www.cosmedocs.com" }, datePublished: "2026-05-14", dateModified: "2026-05-14", description: "Russian lips vs classic lip filler — what each technique looks like, who suits which, and when to combine them." };

  return (
    <>
      <Helmet>
        <title>Russian Lips vs Classic Lip Filler: Which Is Right? | CosmeDocs</title>
        <meta name="description" content="Russian lip technique vs classic lip filler — a doctor-led comparison of both techniques, what each looks like, and which is right for your lip anatomy." />
        <link rel="canonical" href="https://www.cosmedocs.com/russian-lips-vs-classic-lip-filler/" data-rh="true" />
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
                  <Link to="/treatments/dermal-fillers/" className="hover:text-white/60">Dermal Fillers</Link>
                  <span>/</span>
                  <span className="text-white/50">Russian vs Classic</span>
                </nav>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Russian Lips vs Classic Lip Filler: <span className="text-[#C9A050]">Which Suits Your Anatomy?</span>
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Doctor-Led", "Technique-First", "Harley Street", "Anatomy-Matched"].map((item) => (
                    <div key={item} className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C9A050]" /><span>{item}</span></div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  <strong className="text-white/90">Russian lips</strong> uses vertical micro-deposits for <em>height and central definition</em>. <strong className="text-white/90">Classic technique</strong> uses linear threads for <em>projection and body</em>. Neither is universally better — the right one depends on your lip anatomy and what you actually want the lip to do.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0 space-y-14">
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">Choose Russian if you want…</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    "More height in the upper lip (visible from the front)",
                    "A defined, lifted cupid's bow",
                    "A 'heart-shaped' centre with subtle outward taper",
                    "Already have decent lip body — you want shaping, not bulk",
                  ].map((k) => (
                    <li key={k} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" /><span>{k}</span></li>
                  ))}
                </ul>
                <h2 className="text-lg font-medium text-[#C9A050] mt-6 mb-4">Choose Classic if you want…</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    "More forward projection (visible from the side)",
                    "Plumping along the entire lip body",
                    "A softer, fuller, more 'pillowy' look",
                    "Naturally thin or short lips needing volume first",
                  ].map((k) => (
                    <li key={k} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" /><span>{k}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">The Russian Technique Explained</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Developed in Eastern European clinics and popularised globally over the last decade, Russian lips uses 12–20 small vertical injection points, perpendicular to the lip border. Each deposit lifts a tiny vertical column of tissue. Strung together, they create height and central definition without pushing the lip forward.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  In profile, the lip looks similar to its untreated state. From the front, it appears taller, more defined, and lifted. The cupid's bow becomes the visual focal point.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">The Classic Technique Explained</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Classic lip filler uses linear threads — the needle is advanced along the body of the lip and product deposited as it withdraws. This places filler along the horizontal axis and produces forward projection visible in profile. It is the default technique in most UK clinics and produces the look most patients picture when they think of "lip filler".
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Side-by-side</h2>
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Aspect</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Russian</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Classic</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Direction of change", "Vertical (height)", "Horizontal (projection)"],
                        ["Visible from front", "Most visible", "Visible"],
                        ["Visible from side", "Subtle", "Most visible"],
                        ["Number of injection points", "12–20", "4–8"],
                        ["Volume typically used", "1ml", "0.5–1ml"],
                        ["Lasts", "8–12 months", "6–9 months"],
                        ["Best for", "Decent body, want shape", "Thin lips, want body"],
                      ].map(([a, b, c]) => (
                        <TableRow key={a} className="border-b border-white/[0.04]">
                          <TableCell className="text-sm text-white/70">{a}</TableCell>
                          <TableCell className="text-sm text-white/50">{b}</TableCell>
                          <TableCell className="text-sm text-white/50">{c}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Why We Often Combine Both</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  At CosmeDocs, the most common approach for new patients with reasonable starting anatomy is a blended technique — vertical micro-deposits for cupid's bow definition, with linear support along the body for soft projection. The result is shape <em>and</em> body, neither overwhelming the other. This is the philosophy behind our <Link to="/treatments/dermal-fillers/lip-fillers/" className="text-[#C9A050] hover:underline">Secret Lip Cocktail</Link>.
                </p>
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
                    { label: "0.5ml vs 1ml Lip Filler", path: "/lip-filler-0-5ml-vs-1ml/" },
                    { label: "Lip Filler Treatment", path: "/treatments/dermal-fillers/lip-fillers/" },
                    { label: "Before & After Lip Filler", path: "/before-after/lip-filler/" },
                    { label: "Lip Filler Results Explained", path: "/blog/lip-filler-results-explained/" },
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
                  title="Russian vs Classic"
                  rows={[
                    { area: "Russian", value: "Height" },
                    { area: "Classic", value: "Projection" },
                    { area: "Russian volume", value: "1ml" },
                    { area: "Classic volume", value: "0.5–1ml" },
                    { area: "Combined", value: "1ml" },
                  ]}
                  concepts={[
                    "Vertical vs linear placement",
                    "Cupid's bow definition",
                    "Profile vs frontal symmetry",
                    "Why technique beats volume",
                    "When to combine both methods",
                  ]}
                  related={[
                    { label: "0.5ml vs 1ml Lip Filler", path: "/lip-filler-0-5ml-vs-1ml/" },
                    { label: "Lip Filler Treatment", path: "/treatments/dermal-fillers/lip-fillers/" },
                    { label: "Before & After Lip Filler", path: "/before-after/lip-filler/" },
                    { label: "Lip Filler Results Explained", path: "/blog/lip-filler-results-explained/" },
                    { label: "Cheek Filler Volumes", path: "/cheek-filler-1ml-vs-2ml-vs-4ml/" },
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

export default RussianLipsVsClassic;
