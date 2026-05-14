import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, ArrowRight, BookOpen } from "lucide-react";
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
import heroImg from "@/assets/dosage/underarm-units-hero.jpg";

const FAQ = [
  {
    q: "How many units of Botox for underarms?",
    a: "The licensed dose for axillary hyperhidrosis is 50 units of onabotulinumtoxinA (Botox®) per underarm — 100 units in total. This dose is supported by Naumann & Lowe's landmark 2001 BMJ trial and remains the FDA- and MHRA-approved standard. 25 units per side is sub-therapeutic for most patients; 75–100 units per side is reserved for severe cases or patients seeking longer duration.",
  },
  {
    q: "Is 25 units per underarm enough?",
    a: "For most patients, no. 25 units per axilla (50 total) is below the licensed therapeutic threshold. It can produce a partial reduction in sweating but with a shorter duration — typically 2–3 months instead of the 6–7 months expected at the standard 50-unit dose. We rarely recommend it as a first treatment.",
  },
  {
    q: "What does 50 units per underarm achieve?",
    a: "50 units of onabotulinumtoxinA per axilla (the licensed dose) produces an approximately 80–95% reduction in sweat production within 4–7 days, with peak effect at 2 weeks. Median duration is 6–7 months, with some patients reporting effect for up to 9 months (Naumann et al., BMJ 2001; Lowe et al., JAAD 2007).",
  },
  {
    q: "When is 100 units per underarm appropriate?",
    a: "100 units per axilla (200 total) is an off-label higher dose used for severe primary axillary hyperhidrosis where 50 units has produced incomplete response, or for patients prioritising maximum duration. Studies suggest duration extends to 9–12 months at this dose, but the marginal benefit over 50 units is modest in most patients.",
  },
  {
    q: "How long does Botox for underarms last?",
    a: "Median duration is approximately 6–7 months at the licensed 50-unit dose. The Lowe 2007 52-week trial found 75 units extended duration only modestly. With repeat treatments, some patients achieve longer-lasting cycles as the eccrine sweat glands undergo reduced functional turnover.",
  },
  {
    q: "Does Botox for underarms work — what does the research say?",
    a: "Yes — robustly. Naumann & Lowe's 2001 BMJ randomised placebo-controlled trial showed 94% of patients achieved a ≥50% reduction in sweat production at 4 weeks with 50 units per axilla, compared with 36% on placebo. Long-term safety has been confirmed in studies of repeat dosing over 16 months and beyond.",
  },
  {
    q: "Are there side effects from underarm Botox?",
    a: "Side effects are uncommon and typically mild — small bruises at injection sites, transient compensatory sweating (usually trunk or back, mild and self-limiting in most cases), and very rarely, temporary discomfort. Systemic side effects are extremely rare at axillary doses.",
  },
  {
    q: "Is underarm Botox available on the NHS?",
    a: "In limited circumstances — yes, for severe primary hyperhidrosis where topical antiperspirants and iontophoresis have failed. Most patients pursue private treatment due to NHS waiting times. CosmeDocs offers private axillary Botox at our Harley Street consulting rooms.",
  },
  {
    q: "Can I exercise after underarm Botox?",
    a: "Avoid heavy exercise, hot showers, and sauna for 24 hours after treatment. Light activity is fine. The Botox needs time to bind to nerve terminals — vigorous activity within hours of treatment may theoretically reduce efficacy at the injection sites.",
  },
  {
    q: "How quickly does underarm Botox work?",
    a: "Most patients notice significantly reduced sweating within 4–7 days, with peak effect at approximately 2 weeks. If you have not noticed a clear difference at 2 weeks, contact your clinic for review — under-dosing is the most common reason for partial response.",
  },
];

const UnderarmBotoxUnits = () => {
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
    "@type": "MedicalScholarlyArticle",
    headline:
      "Botox Units for Underarms: 25 vs 50 vs 100 — A PubMed-Backed Dosage Guide",
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
      "How many units of Botox for underarms? A doctor-led, PubMed-cited comparison of 25 / 50 / 100 unit per axilla dosing for primary axillary hyperhidrosis.",
    citation: [
      {
        "@type": "ScholarlyArticle",
        name: "Botulinum toxin type A in treatment of bilateral primary axillary hyperhidrosis: randomised, parallel group, double blind, placebo controlled trial",
        author: "Naumann M, Lowe NJ",
        datePublished: "2001",
        publisher: "BMJ",
      },
      {
        "@type": "ScholarlyArticle",
        name: "Botulinum toxin type A in the treatment of primary axillary hyperhidrosis: a 52-week multicenter double-blind, randomized, placebo-controlled study",
        author: "Lowe NJ et al.",
        datePublished: "2007",
        publisher: "Journal of the American Academy of Dermatology",
      },
      {
        "@type": "ScholarlyArticle",
        name: "Botulinum toxin A for axillary hyperhidrosis (excessive sweating)",
        author: "Heckmann M, Ceballos-Baumann AO, Plewig G",
        datePublished: "2001",
        publisher: "New England Journal of Medicine",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Botox Units for Underarms: 25 vs 50 vs 100 | CosmeDocs</title>
        <meta
          name="description"
          content="How many units of Botox for underarms? A PubMed-backed doctor-led guide to 25, 50 and 100 units per axilla — what each dose actually does, citing Naumann (BMJ 2001), Lowe (JAAD 2007) and Heckmann (NEJM 2001)."
        />
        <link
          rel="canonical"
          href="https://www.cosmedocs.com/botox-units-underarms-25-50-100/"
          data-rh="true"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative pt-28 pb-10 overflow-hidden">
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
                <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
                  <Link to="/" className="hover:text-white/60">Home</Link>
                  <span>/</span>
                  <Link to="/treatments/botox/" className="hover:text-white/60">
                    Anti-Wrinkle Treatment
                  </Link>
                  <span>/</span>
                  <span className="text-white/50">Underarm Units</span>
                </nav>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A050]/30 bg-[#C9A050]/5 text-[#C9A050] text-xs uppercase tracking-wider mb-6">
                  <BookOpen className="w-3 h-3" /> PubMed-Cited • Doctor-Led
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-6">
                  Botox Units for Underarms:{" "}
                  <span className="text-[#C9A050]">25 vs 50 vs 100 — What the Studies Show</span>
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 uppercase tracking-wider mb-6">
                  {["Hyperhidrosis", "PubMed Evidence", "Harley Street", "Doctor-Led"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#C9A050]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  The licensed Botox® dose for primary axillary hyperhidrosis is{" "}
                  <strong className="text-white/90">50 units per underarm — 100 units total</strong>. This figure comes from Naumann &amp; Lowe's 2001 BMJ randomised trial and remains the MHRA- and FDA-approved standard. 25 units per side under-treats most patients; 100 units per side is reserved for severe cases. This guide walks through what each dose actually achieves — citing the studies that established the evidence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <img
              src={heroImg}
              alt="Three glass medical vials representing 25, 50 and 100 unit Botox dosing for axillary hyperhidrosis — CosmeDocs Harley Street"
              width={1536}
              height={896}
              className="w-full max-w-3xl rounded-2xl border border-white/10"
            />
            <p className="text-xs text-white/20 mt-2 italic">
              Three doses, three durations — but only one is the licensed standard
            </p>
          </motion.div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 min-w-0 space-y-14">
              {/* Quick Answer */}
              <div className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/[0.04]">
                <h2 className="text-lg font-medium text-[#C9A050] mb-4">Quick Answer (PubMed-grounded)</h2>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    ["25 units / axilla:", "Sub-therapeutic. ~50% sweat reduction, lasts 2–3 months. Rarely recommended."],
                    ["50 units / axilla:", "Licensed standard (Naumann BMJ 2001). 80–95% reduction, lasts 6–7 months."],
                    ["75 units / axilla:", "Modest extension of duration over 50U (Lowe JAAD 2007). Marginal benefit."],
                    ["100 units / axilla:", "Off-label, severe cases. Lasts up to 9–12 months. Higher cost, similar peak effect."],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span>
                        <strong className="text-white/90">{k}</strong> {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What the studies actually say */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">What the Studies Actually Say</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Botox for axillary hyperhidrosis is one of the most rigorously studied applications of botulinum toxin type A in dermatology. The dose was not chosen by clinicians on a hunch — it emerged from a sequence of randomised placebo-controlled trials in the late 1990s and early 2000s that have since been replicated repeatedly.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  The pivotal trial is <strong className="text-white/80">Naumann &amp; Lowe (BMJ 2001)</strong>: 320 patients with primary axillary hyperhidrosis randomised to 50 units of onabotulinumtoxinA per axilla or placebo. At week 4, 94% of treated patients achieved a ≥50% reduction in spontaneous axillary sweat production, compared with 36% on placebo. Median duration of response was approximately 7 months. This study established the licensed dose still used today.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  <strong className="text-white/80">Lowe et al. (JAAD 2007)</strong> followed with a 52-week multicentre double-blind RCT comparing 50 vs 75 units per axilla against placebo. Both active doses were significantly more effective than placebo. The 75-unit arm extended median duration only modestly — confirming that 50 units sits at the rational ceiling of the dose-response curve for most patients.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  <strong className="text-white/80">Heckmann et al. (NEJM 2001)</strong> studied abobotulinumtoxinA (Dysport) using 200 units per axilla — biologically equivalent to roughly 50–67 units of Botox® depending on the conversion ratio applied. Effect was robust and sustained. This trial confirmed the class effect across botulinum toxin formulations.
                </p>
              </div>

              {/* Dose-by-dose breakdown */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">25 Units Per Underarm — The Under-Dose Trap</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Some clinics advertise underarm Botox at 50 units total — 25 per side — to hit a low headline price. This is half the licensed dose and sits below the clinically validated therapeutic threshold. Patients typically experience a partial response: sweating is reduced but not abolished, and the effect wears off within 8–12 weeks rather than the 24–28 weeks reported in peer-reviewed trials at the standard dose.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  The economics are deceiving. Under-dosed treatment costs less per session but needs to be repeated three to four times a year instead of once or twice — costing more annually for a less complete result. We do not recommend 25 units per side as a first-line treatment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">50 Units Per Underarm — The Evidence-Based Standard</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  This is the dose your dermatologist or aesthetic doctor should be quoting. 50 units of onabotulinumtoxinA is the dose used in Naumann's pivotal trial, the dose approved by the MHRA and FDA, and the dose at which the published efficacy figures (94% response rate, 6–7 month median duration) apply. The product is delivered as 10–15 small intradermal injections per axilla, mapped using a starch-iodine test or simply by the borders of hair-bearing skin.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  At CosmeDocs, axillary hyperhidrosis treatment defaults to 50 units per side unless there is a specific clinical reason to escalate. The treatment takes around 20 minutes, requires only topical anaesthesia or ice, and patients typically return to normal activity the same day.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">100 Units Per Underarm — When More Is Justified</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  100 units per axilla — 200 units total — is an off-label higher dose used in three specific situations: patients with severe hyperhidrosis (Hyperhidrosis Disease Severity Scale grade 4) who have had incomplete response to the standard dose, patients prioritising maximum duration over cost, and a small subset where the sweat-producing area extends beyond the typical hair-bearing axilla.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  The trade-off is honest: roughly double the cost for a marginal extension of duration (typically 9–12 months instead of 6–7) and no meaningful improvement in peak efficacy. For most patients with moderate hyperhidrosis, this is not the right starting dose.
                </p>
              </div>

              {/* Comparison table */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Dose Comparison — At a Glance</h2>
                <div className="border border-white/[0.08] rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-white/[0.08]">
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Dose / axilla</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Sweat reduction</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Duration</TableHead>
                        <TableHead className="text-[#C9A050] text-xs uppercase tracking-wider">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["25 units", "~50%, partial", "2–3 months", "Sub-therapeutic"],
                        ["50 units", "80–95%", "6–7 months", "Licensed standard"],
                        ["75 units", "85–95%", "7–8 months", "Mild extension (Lowe 2007)"],
                        ["100 units", "85–95%", "9–12 months", "Off-label, severe cases"],
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

              {/* Why dose alone is not the whole story */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">Why Dose Is Only Half the Story</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Two patients receiving 50 units per axilla can have meaningfully different outcomes — because dose is only one of three variables that determine result. The second is <em>distribution</em>: 50 units delivered as 10 evenly spaced intradermal injections covers more sweat-gland territory than the same 50 units delivered as 5 deeper injections. The third is <em>mapping</em>: the sweating area in some patients extends beyond the visible hair-bearing axilla, and a starch-iodine test (Minor's test) reveals this before injection.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  At CosmeDocs we map the active sweating zone before treatment, then distribute the dose uniformly across it. This is why two clinics quoting "50 units per side" can produce different durations and patient satisfaction — technique compounds dose.
                </p>
              </div>

              {/* Warning */}
              <div className="border border-amber-500/20 rounded-2xl p-6 bg-amber-500/[0.03]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-2">The "£199 underarm Botox" warning</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Treatment priced significantly below the cost of 100 units of branded Botox® plus medical time is, mathematically, either using less product than advertised or using an unbranded toxin without the trial evidence above. Always ask: what brand, what dose per side, and how is the area mapped? Reputable clinics answer all three without hesitation.
                    </p>
                  </div>
                </div>
              </div>

              {/* References */}
              <div>
                <h2 className="text-2xl font-extralight text-white mb-4">References (PubMed)</h2>
                <ol className="space-y-3 text-xs text-white/50 leading-relaxed list-decimal list-inside">
                  <li>
                    Naumann M, Lowe NJ. Botulinum toxin type A in treatment of bilateral primary axillary hyperhidrosis: randomised, parallel group, double blind, placebo controlled trial. <em>BMJ</em> 2001;323(7313):596–599. PMID: 11557704.
                  </li>
                  <li>
                    Lowe NJ, Glaser DA, Eadie N, Daggett S, Kowalski JW, Lai PY; North American Botox in Primary Axillary Hyperhidrosis Clinical Study Group. Botulinum toxin type A in the treatment of primary axillary hyperhidrosis: a 52-week multicenter double-blind, randomized, placebo-controlled study of efficacy and safety. <em>J Am Acad Dermatol</em> 2007;56(4):604–611. PMID: 17207833.
                  </li>
                  <li>
                    Heckmann M, Ceballos-Baumann AO, Plewig G; Hyperhidrosis Study Group. Botulinum toxin A for axillary hyperhidrosis (excessive sweating). <em>N Engl J Med</em> 2001;344(7):488–493. PMID: 11172190.
                  </li>
                  <li>
                    Naumann M, Lowe NJ, Kumar CR, Hamm H. Botulinum toxin type A is a safe and effective treatment for axillary hyperhidrosis over 16 months. <em>Arch Dermatol</em> 2003;139(6):731–736. PMID: 12810504.
                  </li>
                  <li>
                    Doft MA, Kasten JL, Ascherman JA. Treatment of axillary hyperhidrosis with botulinum toxin: a single surgeon's experience with 53 consecutive patients. <em>Aesthetic Plast Surg</em> 2011;35(6):1079–1086. PMID: 21626294.
                  </li>
                </ol>
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

              {/* Continue reading */}
              <div className="border-t border-white/[0.06] pt-8">
                <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4">Continue reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Excessive Sweat Botox Treatment", path: "/excessive-sweat-botox/" },
                    { label: "Botox Units Explained", path: "/botox-units-explained/" },
                    { label: "Masseter Botox Units Dosage", path: "/masseter-botox-units-dosage/" },
                    { label: "Botox Cost UK", path: "/botox-cost-uk/" },
                  ].map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      className="flex items-center justify-between border border-white/[0.06] rounded-xl px-4 py-3 hover:border-[#C9A050]/30 hover:bg-white/[0.02] transition-all group"
                    >
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
                  title="Underarm Quick Guide"
                  rows={[
                    { area: "Licensed dose", value: "50 / side" },
                    { area: "Total typical", value: "100 units" },
                    { area: "25U / side", value: "Sub-therapeutic" },
                    { area: "75U / side", value: "Modest extension" },
                    { area: "100U / side", value: "Severe cases" },
                    { area: "Median duration", value: "6–7 months" },
                  ]}
                  concepts={[
                    "Naumann & Lowe BMJ 2001 — pivotal trial",
                    "Lowe JAAD 2007 — 52-week dose-response",
                    "Heckmann NEJM 2001 — abobotulinumtoxinA",
                    "Why distribution beats raw dose",
                    "Minor's starch-iodine mapping",
                  ]}
                  related={[
                    { label: "Excessive Sweat Botox", path: "/excessive-sweat-botox/" },
                    { label: "Botox Units Explained", path: "/botox-units-explained/" },
                    { label: "Masseter Botox Units", path: "/masseter-botox-units-dosage/" },
                    { label: "Botox Cost UK", path: "/botox-cost-uk/" },
                    { label: "Bruxism Botox", path: "/bruxism-botox/" },
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

export default UnderarmBotoxUnits;
