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
import heroImg from "@/assets/dosage/cheek-volume-hero.jpg";

const FAQ = [
  {
    q: "How much cheek filler do I actually need?",
    a: "Most patients need between 1ml and 2ml across both cheeks for a natural lift. 4ml is reserved for significant volume loss, structural rebuilds, or full-face makeovers — not for first-time aesthetic refinement.",
  },
  {
    q: "Is 1ml of cheek filler enough?",
    a: "1ml split across both cheeks (0.5ml per side) gives a subtle lift and light definition. It is enough for early signs of midface volume loss, but rarely enough to noticeably restore high cheek projection.",
  },
  {
    q: "What does 2ml of cheek filler look like?",
    a: "2ml (1ml per side) produces a visible lift along the zygomatic arch — softer nasolabial folds, a subtle tear-trough improvement, and a more rested midface. This is the most common cheek filler dose in our clinic.",
  },
  {
    q: "When is 4ml of cheek filler appropriate?",
    a: "4ml is appropriate when there is genuine bony resorption (typically 45+), as part of a full HA Makeover, or when treating a face that has lost considerable midface support. It is not a starting dose.",
  },
  {
    q: "Will 4ml of cheek filler look 'pillow face'?",
    a: "Only if it is placed superficially or in the wrong vector. 4ml placed deep on bone, in the correct anatomical zones, restores structure rather than adding bulk. Pillow face is a placement problem, not a volume problem.",
  },
  {
    q: "Can I split cheek filler across multiple sessions?",
    a: "Yes — and for larger volumes we strongly prefer it. 2ml + 2ml split across two sessions four to six weeks apart gives the tissue time to integrate and lets us refine the result before adding more.",
  },
  {
    q: "How long does cheek filler last?",
    a: "Cheek filler typically lasts 12–18 months. Larger volumes placed on bone last longer than smaller volumes placed in soft tissue, because of slower metabolism in the deep plane.",
  },
];

const CheekFiller1vs2vs4ml = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: "Cheek Filler 1ml vs 2ml vs 4ml: How Much Do You Actually Need?",
    author: { "@type": "Person", name: "Dr Ahmed Haq", jobTitle: "Medical Director", url: "https://www.cosmedocs.com/our-team/dr-ahmed-haq/" },
    publisher: { "@type": "MedicalBusiness", name: "CosmeDocs", url: "https://www.cosmedocs.com" },
    datePublished: "2026-05-14",
    dateModified: "2026-05-14",
    description: "Cheek filler volumes explained — when 1ml, 2ml or 4ml is right, and why placement matters more than millilitres.",
  };

  return (
    <>
      <Helmet>
        <title>Cheek Filler 1ml vs 2ml vs 4ml: How Much Do You Need? | CosmeDocs</title>
        <meta name="description" content="How much cheek filler do you need? A doctor-led guide to 1ml, 2ml and 4ml — what each looks like, when each is appropriate, and how to avoid pillow face." />
        <link rel="canonical" href="https://www.cosmedocs.com/cheek-filler-1ml-vs-2ml-vs-4ml/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A050]/5 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
                  <Link to="/" className="hover:text-white/60">Home</Link>
                  <span>/</span>
                  <Link to="/treatments/dermal-fillers/" className="hover:text-white/60">Dermal Fillers</Link>
                  <span>/</span>
                  <span className="text-white/50">Cheek Filler 1ml vs 2ml vs 4ml</span>
                </nav>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Cheek Filler 1ml vs 2ml vs 4ml: <span className="text-[#C9A050]">How Much Is Too Much?</span>
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Doctor-Led", "Anatomy-First", "Harley Street", "Truth-First"].map((item) => (
                    <div key={item} className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#C9A050]" /><span>{item}</span></div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  Most patients need <strong className="text-white/90">1–2ml of cheek filler</strong> across both sides for a natural lift. 4ml is appropriate only for genuine volume loss, structural rebuilds, or as part of a full-face makeover. Volume alone never decides the outcome — placement, vector, and product choice do.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0 space-y-14">
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">Quick Answer — by goal</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    ["Subtle lift, early 30s:", "1ml total (0.5ml per side)"],
                    ["Visible lift, softens nasolabial folds:", "2ml total (1ml per side)"],
                    ["Volume restoration, 45+:", "3–4ml across one or two sessions"],
                    ["Full HA Makeover candidate:", "4ml+ as part of a multi-area plan"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white/90">{k}</strong> {v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">1ml — Refinement</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  1ml of cheek filler split across both sides is a refinement dose. It is appropriate for patients in their late 20s to mid-30s who want a touch more projection, slightly higher cheekbone definition, or to compensate for early flattening. The change is subtle — friends notice you look "well", not "different".
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">2ml — The Most Common Dose</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  2ml is by far the most common cheek filler dose at CosmeDocs. Placed deep on the zygomatic bone, it produces a visible lift along the cheek arch, softens the nasolabial fold by reducing midface descent, and lightly improves the tear trough by elevating the soft tissue beneath the eye. Most patients in their mid-30s to mid-40s sit comfortably here.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">4ml — Restoration, Not Decoration</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  4ml is a restoration dose — used when bony resorption, soft-tissue descent, and fat-pad atrophy have collectively flattened the midface. It is rarely a single-session decision. We almost always split 4ml across two sessions, four to six weeks apart, to refine the result.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Used in the right anatomy by the right hands, 4ml can rejuvenate a face by 5–10 years untraceably. Used badly, it produces the "pillow face" everyone fears. The difference is technique, not volume.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Side-by-side Comparison</h2>
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Volume</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Best For</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Lasts</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">From</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["1ml", "Late 20s–mid 30s, subtle definition", "12–15 months", "£390"],
                        ["2ml", "Mid 30s–mid 40s, visible lift", "12–18 months", "£700"],
                        ["3ml", "Mid 40s, structural support", "15–18 months", "£990"],
                        ["4ml", "45+, full restoration / HA Makeover", "18+ months", "£1,250"],
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

              <div className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.03]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">"Pillow face" is a placement problem</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      4ml placed deep on bone in the correct vector restores structure invisibly. The same 4ml placed superficially in the soft tissue of the cheek apple produces puffiness. Always ask your doctor where the product is going — not just how much.
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
                    { label: "HA Makeover (8 / 11 Point Lift)", path: "/ha-makeover/" },
                    { label: "Cheek Filler Treatment", path: "/cheek-filler/" },
                    { label: "Before & After Cheek Filler", path: "/before-after/cheek-filler/" },
                    { label: "0.5ml vs 1ml Lip Filler", path: "/lip-filler-0-5ml-vs-1ml/" },
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
                  title="Cheek Filler Quick Guide"
                  rows={[
                    { area: "Refinement (late 20s)", value: "1ml" },
                    { area: "Lift (mid 30s)", value: "2ml" },
                    { area: "Structural support (40s)", value: "3ml" },
                    { area: "Restoration (45+)", value: "4ml" },
                    { area: "Full HA Makeover", value: "4ml+" },
                  ]}
                  concepts={[
                    "Why placement beats volume",
                    "Bony resorption vs fat-pad atrophy",
                    "Splitting volume across sessions",
                    "What 'pillow face' really is",
                    "When to combine cheek + tear-trough",
                  ]}
                  related={[
                    { label: "HA Makeover (8/11-Point)", path: "/ha-makeover/" },
                    { label: "Cheek Filler Treatment", path: "/cheek-filler/" },
                    { label: "Before & After Cheek Filler", path: "/before-after/cheek-filler/" },
                    { label: "0.5ml vs 1ml Lip Filler", path: "/lip-filler-0-5ml-vs-1ml/" },
                    { label: "Tear Trough Filler", path: "/tear-trough-filler/" },
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

export default CheekFiller1vs2vs4ml;
