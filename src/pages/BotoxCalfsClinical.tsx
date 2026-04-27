import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  Activity,
  Stethoscope,
  Ruler,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import Breadcrumb from "@/components/Breadcrumb";

const faqs = [
  {
    question: "Which muscle is targeted in calf reduction with Botox?",
    answer:
      "The medial and lateral heads of the gastrocnemius. The deeper soleus is intentionally avoided to preserve walking, balance and athletic function. Anatomy is mapped and palpated on tip-toe before any injection.",
  },
  {
    question: "How are units distributed across the calf?",
    answer:
      "Doctor-led dosing typically distributes botulinum toxin across 8–12 points per calf, partial-dose only, biased toward the bulkier head identified on examination. Unit ranges are personalised — we publish ranges, not flat numbers, because anatomy varies.",
  },
  {
    question: "How does the muscle actually slim down?",
    answer:
      "Partial chemodenervation reduces voluntary contraction of the gastrocnemius. Reduced use leads to gradual disuse atrophy of the targeted fibres over 6–12 weeks, visibly refining calf circumference while preserving function.",
  },
  {
    question: "Is calf Botox safe long-term?",
    answer:
      "Repeated, correctly dosed treatments are well tolerated. Over time, many patients require lower doses as the muscle remains in a partially relaxed state. Function returns fully if treatment is stopped.",
  },
  {
    question: "Who should not have calf Botox?",
    answer:
      "Patients whose calf bulk is primarily fat or oedema (rather than muscle), pregnancy, breastfeeding, neuromuscular conditions (e.g. myasthenia gravis), or active lower-limb athletes whose performance depends on maximal gastrocnemius output.",
  },
  {
    question: "How is this page different from the calf slimming page?",
    answer:
      "This page is the clinical reference — anatomy, mechanism, dosing logic and safety. For pricing, before/after results and booking, visit our main Calf Slimming Botox treatment page.",
  },
];

const BotoxCalfsClinical: React.FC = () => {
  const seo = generateSEOMetadata(
    "Botox for Calfs | Clinical Guide to Gastrocnemius Reduction",
    "Doctor-led clinical guide to calf Botox at Harley Street: gastrocnemius anatomy, mechanism of action, dosing logic and safety. Educational reference page.",
    "/treatments/botox/calfs/"
  );

  const canonical = "https://www.cosmedocs.com/treatments/botox/calfs/";

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Botox for Calfs — Clinical Guide",
            url: canonical,
            about: {
              "@type": "MedicalProcedure",
              name: "Calf Reduction with Botulinum Toxin",
              bodyLocation: "Gastrocnemius (medial and lateral heads)",
              procedureType: "Non-surgical, intramuscular injection",
            },
            isPartOf: {
              "@type": "WebPage",
              url: "https://www.cosmedocs.com/treatments/botox/",
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          })}
        </script>
      </Helmet>

      <main className="bg-background text-foreground">
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white">
          <div className="container mx-auto px-4 pt-10 pb-16">
            <Breadcrumb
              items={[
                { label: "Treatments", href: "/treatments" },
                { label: "Botox", href: "/treatments/botox/" },
                { label: "Calfs" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-8"
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#C9A050] mb-4">
                Clinical Reference · Botox Cluster
              </span>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Botox for Calfs:{" "}
                <span className="text-[#C9A050]">a clinical guide to gastrocnemius reduction</span>
              </h1>
              <p className="text-lg text-zinc-300 max-w-2xl">
                The anatomy, mechanism and dosing logic behind non-surgical calf slimming —
                written by our doctors. Quiet, considered, invisible art.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  asChild
                  className="bg-[#C9A050] hover:bg-[#b08c3f] text-black"
                >
                  <Link to="/treatments/calf-slimming-botox/">
                    See pricing & results <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/contact/">Book a consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CLINICAL PILLARS */}
        <section className="py-16 bg-[#F5F5F3]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-12">
              The four pillars of safe calf reduction
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Stethoscope className="w-6 h-6 text-[#C9A050]" />,
                  title: "Anatomy mapping",
                  desc: "Tip-toe assessment isolates gastrocnemius bulk from soleus and fat. We treat what we can see and palpate — nothing else.",
                },
                {
                  icon: <Ruler className="w-6 h-6 text-[#C9A050]" />,
                  title: "Partial-dose strategy",
                  desc: "Botulinum toxin is distributed across 8–12 points per calf, biased to the dominant head. We weaken — never paralyse — the muscle.",
                },
                {
                  icon: <Activity className="w-6 h-6 text-[#C9A050]" />,
                  title: "Function preservation",
                  desc: "The deeper soleus is left untouched, protecting walking, stairs, balance and posture. Athletes are screened individually.",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#C9A050]" />,
                  title: "Doctor-led safety",
                  desc: "Performed exclusively by doctors at Harley Street. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-white p-6 rounded-lg border border-black/5"
                >
                  <div className="mb-4">{p.icon}</div>
                  <h3 className="font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MECHANISM (SEO BODY) */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl prose prose-neutral">
            <h2 className="text-3xl font-light mb-6">
              How calf Botox works — at a tissue level
            </h2>
            <p>
              Calf bulk in most patients is driven by hypertrophy of the
              gastrocnemius — the superficial, two-headed muscle visible at the
              back of the lower leg. When botulinum toxin type A is delivered
              into specific motor points of the medial and lateral heads, it
              blocks acetylcholine release at the neuromuscular junction. The
              muscle does not paralyse; it simply contracts less forcefully and
              less often.
            </p>
            <p>
              Reduced contraction means reduced workload. Over six to twelve
              weeks, the targeted fibres undergo gradual disuse atrophy. The
              calf circumference visibly refines, while the deeper soleus —
              responsible for endurance and standing posture — continues to
              work normally. This is why correctly dosed calf Botox does not
              affect daily walking, stairs or balance.
            </p>
            <p>
              At Cosmedocs, dosing is anatomy-led, not menu-led. We publish
              ranges rather than flat numbers because two patients with
              identical "calf size" can have very different muscle distribution.
              The same total dose may be split 60/40 between heads in one
              patient and 50/50 in another. This is the difference between
              following a protocol and practising medicine.
            </p>
            <h3 className="text-2xl font-light mt-10 mb-4">
              What this page is — and is not
            </h3>
            <p>
              This is a <strong>clinical reference page</strong>. It exists to
              answer the medical questions our patients (and other clinicians)
              ask about calf reduction with botulinum toxin. For{" "}
              <Link
                to="/treatments/calf-slimming-botox/"
                className="text-[#C9A050] underline"
              >
                pricing, before-and-after photographs, the treatment journey
                and booking
              </Link>
              , please visit our main Calf Slimming Botox page.
            </p>
          </div>
        </section>

        {/* BEFORE / AFTER PLACEHOLDERS */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#C9A050] mb-3">
                Visual proof
              </span>
              <h2 className="text-3xl font-light mb-3">Before & after — calf reduction</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Truth-first results, published progressively at 6, 10 and 14 weeks. Full
                gallery on the canonical treatment page.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/5] rounded-lg border border-[#C9A050]/30 bg-zinc-900 flex flex-col items-center justify-center text-zinc-500"
                >
                  <ImageIcon className="w-10 h-10 mb-3 opacity-60" />
                  <span className="text-xs tracking-widest uppercase">
                    Case {n} · coming soon
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button
                asChild
                className="bg-[#C9A050] hover:bg-[#b08c3f] text-black"
              >
                <Link to="/treatments/calf-slimming-botox/">
                  View full calf gallery <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-light text-center mb-10">
              Clinical questions, answered
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CONVERSION */}
        <section className="py-20 bg-[#F5F5F3]">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-light mb-4">
              Your consultation begins here
            </h2>
            <p className="text-muted-foreground mb-8">
              Considered, doctor-led aesthetic medicine — quiet, not loud.
              Invisible, not exaggerated.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="bg-[#C9A050] hover:bg-[#b08c3f] text-black">
                <Link to="/contact/">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/treatments/calf-slimming-botox/">
                  See pricing & results
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BotoxCalfsClinical;
