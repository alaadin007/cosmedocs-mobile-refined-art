import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Moon, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExpandableSection from "@/components/ui/expandable-section";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import Breadcrumb from "@/components/Breadcrumb";

const VitaminCvsRetinol = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Vitamin C vs Retinol" },
  ];

  return (
    <>
      <Helmet>
        <title>Vitamin C vs Retinol: When to Use Each | Cosmedocs</title>
        <meta name="description" content="Should you use Vitamin C or Retinol? Expert guide on when to use each, how to combine them safely in an AM/PM routine, and which skin concerns they target." />
        <link rel="canonical" href="https://www.cosmedocs.com/blog/vitamin-c-vs-retinol/" data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vitamin C vs Retinol: When to Use Each",
            description: "Expert guide on combining Vitamin C and Retinol in your skincare routine.",
            author: { "@type": "Person", name: "Dr. Ahmed Haq" },
            publisher: { "@type": "Organization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
            datePublished: "2026-04-13",
            url: "https://www.cosmedocs.com/blog/vitamin-c-vs-retinol/",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I use Vitamin C and Retinol together?",
                acceptedAnswer: { "@type": "Answer", text: "Yes — use Vitamin C in the morning for antioxidant protection and Retinol in the evening for cellular renewal. This AM/PM split maximises efficacy without irritation." }
              },
              {
                "@type": "Question",
                name: "Which is better for anti-ageing: Vitamin C or Retinol?",
                acceptedAnswer: { "@type": "Answer", text: "Both are essential. Retinol stimulates fibroblast collagen production while Vitamin C neutralises free radicals that degrade existing collagen. Together they address ageing from both sides." }
              },
              {
                "@type": "Question",
                name: "Should I use Vitamin C or Retinol first?",
                acceptedAnswer: { "@type": "Answer", text: "Use Vitamin C first — in the morning. Apply Retinol at night. This avoids pH conflicts and leverages each ingredient's optimal activation window." }
              },
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F3]">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#F5F5F3]">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} variant="light" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
              <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3 font-medium">CosmeTalk • Skincare Science</p>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Vitamin C vs Retinol: When to Use Each
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Two of the most evidence-backed actives in dermatology — but which one should you use, and when? Here's the clinical breakdown.
              </p>
              <p className="text-sm text-slate-400 mt-4">By Dr. Ahmed Haq • 13 April 2026 • 8 min read</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Short Answer</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Use <strong>both</strong> — but at different times of day. Vitamin C belongs in your morning routine (AM) as an antioxidant shield against UV-generated free radicals. Retinol belongs at night (PM) when your skin enters repair mode and cell turnover accelerates.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10 not-prose">
                <Card className="border-amber-200 bg-amber-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sun className="w-5 h-5 text-amber-500" />
                      <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Morning (AM)</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Vitamin C</h3>
                    <ul className="text-sm text-slate-600 space-y-1.5">
                      <li>• Neutralises free radicals from UV & pollution</li>
                      <li>• Inhibits tyrosinase → reduces pigmentation</li>
                      <li>• Boosts photoprotection alongside SPF</li>
                      <li>• Stabilises collagen cross-links</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-indigo-200 bg-indigo-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Moon className="w-5 h-5 text-indigo-500" />
                      <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">Evening (PM)</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Retinol</h3>
                    <ul className="text-sm text-slate-600 space-y-1.5">
                      <li>• Activates retinoid receptors on fibroblasts</li>
                      <li>• Accelerates keratinocyte turnover</li>
                      <li>• Normalises melanocyte pigment distribution</li>
                      <li>• Stimulates collagen I & III synthesis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Not at the Same Time?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Vitamin C (L-ascorbic acid) works best at a low pH (2.5–3.5). Retinol converts to retinoic acid most efficiently at a slightly higher pH (5.5–6.0). Applying both simultaneously creates a pH conflict that can reduce the efficacy of both actives and increase the risk of irritation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                The AM/PM split isn't just convenient — it's biochemically optimal. Morning Vitamin C acts as a photo-protectant; evening Retinol leverages your skin's natural circadian repair cycle when cell division peaks.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">The 3-Cell Perspective</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                At Cosmedocs, we formulate around three essential skin cell types. Here's how each active targets them:
              </p>

              <div className="overflow-x-auto mb-8 not-prose">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-slate-700">Cell Type</th>
                      <th className="text-left p-3 font-semibold text-slate-700">Vitamin C Effect</th>
                      <th className="text-left p-3 font-semibold text-slate-700">Retinol Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200">
                      <td className="p-3 font-medium text-emerald-700">Keratinocytes</td>
                      <td className="p-3 text-slate-600">Strengthens barrier via ceramide support</td>
                      <td className="p-3 text-slate-600">Accelerates turnover, clears congestion</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-medium text-purple-700">Melanocytes</td>
                      <td className="p-3 text-slate-600">Inhibits tyrosinase → reduces dark spots</td>
                      <td className="p-3 text-slate-600">Disperses melanin clusters evenly</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="p-3 font-medium text-cyan-700">Fibroblasts</td>
                      <td className="p-3 text-slate-600">Essential cofactor for collagen synthesis</td>
                      <td className="p-3 text-slate-600">Activates retinoid receptors → new collagen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">Who Should Prioritise Vitamin C?</h3>}>
                <p className="text-slate-700 leading-relaxed mb-3">
                  If you can only choose one active (though we recommend both), Vitamin C is ideal if your primary concerns are:
                </p>
                <ul className="text-slate-700 space-y-2 mb-3">
                  <li><strong>Sun damage & hyperpigmentation</strong> — L-ascorbic acid directly inhibits the enzyme that produces excess melanin.</li>
                  <li><strong>Dull, tired-looking skin</strong> — antioxidant protection restores radiance within weeks.</li>
                  <li><strong>Post-treatment maintenance</strong> — after procedures like <Link to="/treatments/chemical-peels/" className="text-[#C9A050] hover:underline">chemical peels</Link> or <Link to="/treatments/hydrafacial/" className="text-[#C9A050] hover:underline">HydraFacial</Link>, Vitamin C accelerates recovery.</li>
                  <li><strong>Sensitive skin</strong> — well-formulated Vitamin C is generally better tolerated than retinoids.</li>
                </ul>
              </ExpandableSection>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">Who Should Prioritise Retinol?</h3>}>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Retinol is the gold standard if your primary concerns are:
                </p>
                <ul className="text-slate-700 space-y-2 mb-3">
                  <li><strong>Fine lines & wrinkles</strong> — retinoids are the most evidence-backed anti-ageing topical, stimulating <Link to="/treatments/profhilo/" className="text-[#C9A050] hover:underline">fibroblast collagen production</Link>.</li>
                  <li><strong>Acne & congestion</strong> — retinol normalises keratinocyte shedding, preventing blocked pores.</li>
                  <li><strong>Textural irregularities</strong> — accelerated turnover smooths rough, uneven skin.</li>
                  <li><strong>Post-procedure collagen support</strong> — pairs well with <Link to="/treatments/microneedling/" className="text-[#C9A050] hover:underline">microneedling</Link> or <Link to="/treatments/polynucleotides/" className="text-[#C9A050] hover:underline">polynucleotide therapy</Link>.</li>
                </ul>
              </ExpandableSection>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">Common Mistakes When Combining Both</h3>}>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Layering both at night</p>
                      <p className="text-slate-600 text-sm">The pH conflict reduces absorption. Keep Vitamin C for morning.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Starting both simultaneously</p>
                      <p className="text-slate-600 text-sm">Introduce one at a time. Start with Vitamin C for 2 weeks, then add Retinol on alternate evenings.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Skipping SPF in the morning</p>
                      <p className="text-slate-600 text-sm">Retinol increases photosensitivity. Vitamin C boosts sun protection but does not replace SPF.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">The ideal order</p>
                      <p className="text-slate-600 text-sm">AM: Cleanse → Vitamin C → Moisturiser → SPF. PM: Cleanse → Retinol → Moisturiser.</p>
                    </div>
                  </div>
                </div>
              </ExpandableSection>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">FAQs: Vitamin C vs Retinol</h3>}>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Can I use Vitamin C and Retinol together?</h4>
                    <p className="text-slate-600 text-sm">Yes — use Vitamin C in the morning for antioxidant protection and Retinol in the evening for cellular renewal. This AM/PM split maximises efficacy without irritation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Which is better for anti-ageing?</h4>
                    <p className="text-slate-600 text-sm">Both are essential. Retinol stimulates fibroblast collagen production while Vitamin C neutralises free radicals that degrade existing collagen. Together they address ageing from both sides.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">How long before I see results?</h4>
                    <p className="text-slate-600 text-sm">Vitamin C brightening is visible in 2–4 weeks. Retinol's collagen and texture benefits typically emerge after 8–12 weeks of consistent use.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">What concentration should I use?</h4>
                    <p className="text-slate-600 text-sm">For Vitamin C, 15–20% L-ascorbic acid delivers clinical results. For Retinol, 0.3–0.5% is effective without excessive irritation for most skin types.</p>
                  </div>
                </div>
              </ExpandableSection>
            </article>

            {/* Cross-sell */}
            <SkinFoundationCTA variant="general" />

            {/* CTA */}
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Start Your AM/PM Routine?</h2>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                Our doctor-formulated cosmeceuticals are designed to work together — targeting all three essential skin cell types.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/shop/vitamin-c-serum/">
                  <Button className="bg-[#C9A050] hover:bg-[#B89040] text-white px-6">
                    <Sun className="w-4 h-4 mr-2" /> Shop Vitamin C (AM) <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/shop/retinol-cream/">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6">
                    <Moon className="w-4 h-4 mr-2" /> Shop Retinol+ (PM) <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VitaminCvsRetinol;
