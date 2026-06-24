import { Helmet } from "react-helmet-async";
import MedicalArticleSchema from '@/components/seo/MedicalArticleSchema';
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
import heroImg from "@/assets/dosage/lip-volume-hero.jpg";

const FAQ = [
  {
    q: "Is 0.5ml of lip filler enough for a first appointment?",
    a: "For most first-time patients, 0.5ml is the right starting point. It restores subtle hydration and definition without changing the proportions of the face. You can always add more at a follow-up — but you cannot easily take it back.",
  },
  {
    q: "What is the difference between 0.5ml and 1ml of lip filler?",
    a: "0.5ml is roughly a tenth of a teaspoon — enough for soft definition, gentle border refinement, or evening out asymmetry. 1ml is double that volume and produces visible plumping and projection. The difference is significant: 1ml on a first-timer often looks overdone.",
  },
  {
    q: "Will 1ml of lip filler look fake?",
    a: "Not necessarily — 1ml can look entirely natural in the right anatomy, particularly on patients with already-full lips or those returning for top-ups. On thin or naturally small lips, 1ml in a single session often crosses the line into 'done'.",
  },
  {
    q: "How long does 0.5ml of lip filler last?",
    a: "Typically 6–9 months. Smaller volumes metabolise slightly faster than larger ones because the surface-area-to-volume ratio is higher.",
  },
  {
    q: "Can I have 0.5ml now and 0.5ml later?",
    a: "Yes — and we often recommend it. Splitting 1ml across two sessions (4–6 weeks apart) lets the tissue settle, gives the doctor a clearer picture of how your lips respond, and produces a more controlled, layered result.",
  },
  {
    q: "Is 0.5ml lip filler good value compared to 1ml?",
    a: "Per millilitre, 1ml is usually cheaper. But 'good value' means the right amount for your face — not the most product per pound. A discreet 0.5ml that suits you is far better value than 1ml that needs dissolving.",
  },
  {
    q: "What if I want bigger lips — should I just start with 1ml?",
    a: "For dramatic enlargement, 1ml is appropriate — but only after a consultation that confirms your lip anatomy can carry it. We often stage 1ml across two sessions rather than placing it all at once.",
  },
];

const LipFiller05vs1ml = () => {
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
    headline: "0.5ml vs 1ml Lip Filler: What a Doctor Actually Recommends",
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
    datePublished: "2026-05-14",
    dateModified: "2026-05-14",
    description:
      "0.5ml vs 1ml lip filler — when each volume is right, what it actually looks like, and what we recommend at consultation.",
  };

  return (
    <>
      <Helmet>
        <title>0.5ml vs 1ml Lip Filler: What a Doctor Recommends | CosmeDocs</title>
        <meta
          name="description"
          content="0.5ml or 1ml lip filler? An honest, doctor-led guide to which volume is right — including what each looks like, who suits each, and why most first-timers should start with 0.5ml."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/lip-filler-0-5ml-vs-1ml/" data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
                  <Link to="/" className="hover:text-white/60">Home</Link>
                  <span>/</span>
                  <Link to="/treatments/dermal-fillers/" className="hover:text-white/60">Dermal Fillers</Link>
                  <span>/</span>
                  <span className="text-white/50">0.5ml vs 1ml Lip Filler</span>
                </nav>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  0.5ml vs 1ml Lip Filler:{" "}
                  <span className="text-[#C9A050]">What a Doctor Actually Recommends</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Doctor-Led", "Harley Street", "Since 2007", "Honest Volumes"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#C9A050]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  For most first-time patients, <strong className="text-white/90">0.5ml is the right starting volume</strong>. It restores subtle definition and hydration without changing the proportions of your face. 1ml is appropriate for return patients, naturally fuller lips, or staged builds — but on first-timers it often crosses the line into "done". Our motto is simple: <em>invisible art, never exaggerated</em>.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Editorial hero image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <img
              src={heroImg}
              alt="A single droplet of hyaluronic acid filler on polished black marble — CosmeDocs Harley Street lip filler precision dosing"
              width={1536}
              height={896}
              className="w-full max-w-3xl rounded-2xl border border-white/10"
            />
            <p className="text-xs text-white/20 mt-2 italic">A single drop — the discipline of stopping at the right volume</p>
          </motion.div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0 space-y-14">
              {/* Quick Answer */}
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">Quick Answer</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    ["First-time patients:", "Start with 0.5ml — almost always."],
                    ["Returning patients:", "0.5–1ml depending on what is already in the lip."],
                    ["Naturally full lips:", "0.5ml maintenance every 9–12 months."],
                    ["Wanting visible enlargement:", "1ml — but only after consultation confirms your anatomy can carry it."],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white/90">{k}</strong> {v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What 0.5ml looks like */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">What 0.5ml of Lip Filler Actually Looks Like</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Half a millilitre is the volume of about ten grains of rice — distributed across the upper and lower lip, that produces a result most people around you will not consciously notice. It restores hydration to the vermilion border, softens fine lip lines, and gives a gentle "fresh" appearance. Symmetry corrections, cupid's bow definition, and subtle border refinement all sit comfortably within 0.5ml.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  The look is <em>untraceable</em>. Friends will tell you that you look well-rested. They will not say "have you had your lips done?" — and that is the entire point of the volume.
                </p>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mt-4">
                  <p className="text-xs text-[#C9A050]/80 uppercase tracking-wider mb-2 font-medium">Doctor's note</p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    "I have never had a patient regret starting with 0.5ml. I have had many regret starting with 1ml." — Dr Ahmed Haq, Medical Director.
                  </p>
                </div>
              </div>

              {/* What 1ml looks like */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">What 1ml of Lip Filler Actually Looks Like</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  1ml is double the volume — and the visible difference is more than double. It produces obvious plumping, forward projection, and a fuller silhouette in profile. On patients with naturally fuller lips or genuine volume loss, 1ml can look beautifully balanced. On thin lips with a tight skin envelope, the same 1ml stretches the tissue and reads as overfilled.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  This is why volume is never the right question by itself. The right question is: <em>what does my anatomy do with this much product?</em> That is what a doctor-led consultation answers — before any needle is drawn.
                </p>
              </div>

              {/* Comparison table */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">0.5ml vs 1ml — Side by Side</h2>
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Aspect</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">0.5ml</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">1ml</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Visible change", "Subtle — most people will not notice", "Obvious — friends will notice"],
                        ["Best for", "First-timers, maintenance, refinement", "Return patients, fuller lips, staged builds"],
                        ["Lasts", "6–9 months", "8–12 months"],
                        ["Price (CosmeDocs)", "From £290", "From £390"],
                        ["Risk of 'overdone' look", "Very low", "Moderate — anatomy-dependent"],
                        ["Recommended for thin lips", "Yes", "Only across two sessions"],
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

              {/* Why under-volume warning */}
              <div className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.03]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">Why "more for your money" is the wrong frame</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Clinics that bundle 1ml as the default for first-timers are optimising their margin, not your face. The skill is in choosing the right volume — and stopping there. CosmeDocs has dissolved more 1ml first-time results than we care to count. Most could have been avoided with 0.5ml.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aftercare */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">What Happens in the First 14 Days</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Lip filler swelling follows a predictable pattern that is largely independent of volume. Both 0.5ml and 1ml inflate visibly in the first 24–72 hours; the difference is degree. Half a millilitre often looks "like 1ml" for the first 48 hours; 1ml can briefly look closer to "1.5ml" before settling. This is why we ask patients to wait a full two weeks before judging the final result.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Day 1–3: visible swelling, possible small bruises. Day 3–7: swelling resolves, lips feel slightly firm. Day 7–14: tissue softens and the final shape becomes apparent. Patients who panic at day three and book additional product almost always regret it at week three.
                </p>
              </div>

              {/* Pricing */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Lip Filler Pricing at CosmeDocs (UK)</h2>
                <ul className="space-y-2 text-sm text-white/60 leading-relaxed list-disc list-inside mb-4">
                  <li>0.5ml lip filler — from £290</li>
                  <li>1ml lip filler — from £390</li>
                  <li>Lip dissolving (Hyalase) — from £180</li>
                </ul>
                <p className="text-sm text-white/60 leading-relaxed">
                  All treatments use branded HA fillers from Allergan, Galderma or Teoxane and are doctor-led. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
                </p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Common Questions</h2>
                <Accordion type="single" collapsible className="border-t border-white/[0.06]">
                  {FAQ.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/[0.06]">
                      <AccordionTrigger className="text-left text-white/80 hover:text-[#C9A050] text-sm font-light">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-white/50 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Internal cluster links */}
              <div className="border-t border-white/[0.06] pt-8">
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4">Continue reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Lip Filler Treatment", path: "/treatments/dermal-fillers/lip-fillers/" },
                    { label: "Lip Flip (Botox)", path: "/treatments/lip-flip/" },
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

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <DosageSidebar
                  title="Lip Filler Quick Guide"
                  rows={[
                    { area: "First time", value: "0.5ml" },
                    { area: "Definition only", value: "0.5ml" },
                    { area: "Subtle plump", value: "0.5–1ml" },
                    { area: "Visible enlargement", value: "1ml" },
                    { area: "Maintenance", value: "0.5ml / 9 mo" },
                  ]}
                  concepts={[
                    "Why volume is anatomy-dependent",
                    "Staged builds vs single sessions",
                    "How surface area affects longevity",
                    "When to dissolve and start again",
                    "How to spot an over-filled lip",
                  ]}
                  related={[
                    { label: "Lip Filler Treatment", path: "/treatments/dermal-fillers/lip-fillers/" },
                    { label: "Lip Flip (Botox)", path: "/treatments/lip-flip/" },
                    { label: "Before & After Lip Filler", path: "/before-after/lip-filler/" },
                    { label: "Lip Filler Results Explained", path: "/blog/lip-filler-results-explained/" },
                    { label: "Cheek Filler 1ml vs 2ml vs 4ml", path: "/cheek-filler-1ml-vs-2ml-vs-4ml/" },
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

export default LipFiller05vs1ml;
