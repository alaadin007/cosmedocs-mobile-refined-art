import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Beaker, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExpandableSection } from "@/components/ui/expandable-section";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import Breadcrumb from "@/components/Breadcrumb";

const WhyPHMattersVitaminC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Why pH Matters in Vitamin C Serums" },
  ];

  return (
    <>
      <Helmet>
        <title>Why pH Matters in Vitamin C Serums | Cosmedocs</title>
        <meta name="description" content="pH determines whether your Vitamin C serum actually works. Learn why pH 3.0–3.5 is the clinical sweet spot, and how to check if your serum is properly formulated." />
        <link rel="canonical" href="https://www.cosmedocs.com/blog/why-ph-matters-vitamin-c/" data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Why pH Matters in Vitamin C Serums",
            description: "pH determines whether your Vitamin C serum works. Learn the science behind pH 3.0–3.5 formulation.",
            author: { "@type": "Person", name: "Dr. Ahmed Haq" },
            publisher: { "@type": "Organization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
            datePublished: "2026-04-13",
            url: "https://www.cosmedocs.com/blog/why-ph-matters-vitamin-c/",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What pH should a Vitamin C serum be?",
                acceptedAnswer: { "@type": "Answer", text: "The optimal pH for L-ascorbic acid serums is 3.0–3.5. Below 2.5 causes irritation; above 3.5 reduces absorption significantly as the molecule loses its charge advantage for penetrating the stratum corneum." }
              },
              {
                "@type": "Question",
                name: "Why does my Vitamin C serum turn brown?",
                acceptedAnswer: { "@type": "Answer", text: "Oxidation. L-ascorbic acid is inherently unstable. Brown discolouration means the active has degraded into dehydroascorbic acid and is no longer effective. Ferulic acid and Vitamin E stabilise the formula — look for all three together." }
              },
              {
                "@type": "Question",
                name: "Does Vitamin C serum need to be kept in the fridge?",
                acceptedAnswer: { "@type": "Answer", text: "Well-formulated serums with stabilisers (ferulic acid, Vitamin E) and proper pH don't require refrigeration but should be stored away from direct sunlight and heat. If your serum lacks stabilisers, refrigeration can extend shelf life." }
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
              <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3 font-medium">CosmeTalk • Formulation Science</p>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Why pH Matters in Vitamin C Serums
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Your Vitamin C serum might be useless. pH is the single most important factor determining whether L-ascorbic acid penetrates your skin — or oxidises on the surface.
              </p>
              <p className="text-sm text-slate-400 mt-4">By Dr. Ahmed Haq • 13 April 2026 • 7 min read</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The pH Problem</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                L-ascorbic acid — the only form of Vitamin C proven to penetrate skin — is a charged molecule at neutral pH. Your skin's stratum corneum (the outermost barrier) repels charged molecules. The solution? Lower the pH.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                At pH 3.5 and below, L-ascorbic acid becomes protonated (uncharged), allowing it to pass through the lipid-rich barrier and reach the viable epidermis where it can actually work. Above pH 3.5, absorption drops dramatically — studies show a 50% reduction in penetration for every 0.5 pH unit increase above the optimal range.
              </p>

              {/* pH Scale Visual */}
              <div className="not-prose mb-10">
                <Card className="bg-white border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-[#C9A050]" /> The pH Sweet Spot
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="w-20 text-right text-sm font-mono text-red-600">pH &lt; 2.5</span>
                        <div className="flex-1 h-6 bg-red-100 rounded-full flex items-center px-3">
                          <span className="text-xs text-red-700">Too acidic — irritation & chemical burns</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-20 text-right text-sm font-mono text-emerald-600 font-bold">pH 3.0–3.5</span>
                        <div className="flex-1 h-8 bg-emerald-100 border-2 border-emerald-400 rounded-full flex items-center px-3">
                          <span className="text-xs text-emerald-800 font-semibold">✓ Optimal — maximum penetration, minimal irritation</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-20 text-right text-sm font-mono text-amber-600">pH 4.0–5.0</span>
                        <div className="flex-1 h-6 bg-amber-100 rounded-full flex items-center px-3">
                          <span className="text-xs text-amber-700">Reduced absorption — charged molecule blocked</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-20 text-right text-sm font-mono text-slate-500">pH &gt; 5.0</span>
                        <div className="flex-1 h-6 bg-slate-100 rounded-full flex items-center px-3">
                          <span className="text-xs text-slate-600">Minimal absorption — effectively inactive on skin</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Stability Triangle: Vitamin C + E + Ferulic Acid</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The landmark 2005 Duke University study by Pinnell et al. demonstrated that adding Vitamin E (tocopherol) and ferulic acid to an L-ascorbic acid formulation doubled its photoprotective capacity and dramatically improved stability. This "Duke Antioxidant Patent" combination remains the gold standard nearly 20 years later.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Our <Link to="/shop/vitamin-c-serum/" className="text-[#C9A050] hover:underline font-medium">Revitalise C20</Link> uses this exact evidence-based combination: 20% L-ascorbic acid, Vitamin E, and ferulic acid at pH 3.0–3.5 — the scientifically validated formulation for maximum efficacy.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Competitor Comparison: pH Reality</h2>
              <div className="overflow-x-auto mb-8 not-prose">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-slate-700">Product</th>
                      <th className="text-left p-3 font-semibold text-slate-700">Concentration</th>
                      <th className="text-left p-3 font-semibold text-slate-700">pH</th>
                      <th className="text-left p-3 font-semibold text-slate-700">Stabilisers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t bg-emerald-50/50">
                      <td className="p-3 font-medium text-slate-900">Revitalise C20 (Cosmedocs)</td>
                      <td className="p-3 text-slate-600">20%</td>
                      <td className="p-3 text-emerald-700 font-semibold">3.0–3.5</td>
                      <td className="p-3 text-slate-600">Ferulic + Vit E ✓</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium text-slate-900">SkinCeuticals CE Ferulic</td>
                      <td className="p-3 text-slate-600">15%</td>
                      <td className="p-3 text-slate-600">2.5–3.0</td>
                      <td className="p-3 text-slate-600">Ferulic + Vit E ✓</td>
                    </tr>
                    <tr className="border-t bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">The Ordinary Vitamin C 23%</td>
                      <td className="p-3 text-slate-600">23%</td>
                      <td className="p-3 text-amber-600">~2.0–2.5</td>
                      <td className="p-3 text-slate-600">None — high irritation risk</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium text-slate-900">Drunk Elephant C-Firma</td>
                      <td className="p-3 text-slate-600">15%</td>
                      <td className="p-3 text-slate-600">3.3</td>
                      <td className="p-3 text-slate-600">Ferulic + Vit E ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ExpandableSection title="The Yellow Colour Question">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Patients often ask why our Vitamin C serum has a golden-yellow hue. This is completely normal and expected — it's the natural colour of ferulic acid, not oxidation. Oxidised Vitamin C turns dark brown/orange and smells metallic. A fresh, properly formulated serum should have a light golden tint and a faint acidic scent.
                </p>
                <div className="flex gap-3 mt-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Light golden/yellow</strong> = ferulic acid, perfectly normal</p>
                </div>
                <div className="flex gap-3 mt-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Dark brown/orange</strong> = oxidised, discard and replace</p>
                </div>
              </ExpandableSection>

              <ExpandableSection title="The Afternoon Reapplication Strategy">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Research shows that applying Vitamin C twice daily — morning and early afternoon (around 2–3 PM) — builds a deeper antioxidant reservoir in the skin. This is particularly beneficial for those with high UV exposure or who work near windows. The afternoon application doesn't replace SPF but significantly boosts your skin's oxidative defence.
                </p>
                <p className="text-slate-600 text-sm">
                  This protocol is especially effective when combined with our <Link to="/shop/retinol-cream/" className="text-[#C9A050] hover:underline">evening Retinol+</Link> routine, creating a full 24-hour cellular support system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="How to Test Your Serum's pH at Home">
                <ol className="text-slate-700 space-y-2 list-decimal list-inside">
                  <li>Purchase pH test strips (available from pharmacies or online, ~£3)</li>
                  <li>Apply a drop of serum directly to the strip</li>
                  <li>Compare the colour change against the chart within 30 seconds</li>
                  <li>If pH is above 4.0, your serum is unlikely to deliver clinical results</li>
                </ol>
              </ExpandableSection>

              <ExpandableSection title="FAQs">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">What pH should a Vitamin C serum be?</h4>
                    <p className="text-slate-600 text-sm">pH 3.0–3.5 is optimal. Below 2.5 causes irritation; above 3.5 reduces absorption significantly.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Why does my Vitamin C serum turn brown?</h4>
                    <p className="text-slate-600 text-sm">Oxidation. L-ascorbic acid degrades into dehydroascorbic acid. Ferulic acid and Vitamin E stabilise the formula — look for all three together.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Can I use Vitamin C after a chemical peel?</h4>
                    <p className="text-slate-600 text-sm">Wait 48–72 hours post-peel before reintroducing Vitamin C to avoid irritation on freshly exfoliated skin. Then resume daily use to support healing and protect new cells.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Does Vitamin C serum need to be kept in the fridge?</h4>
                    <p className="text-slate-600 text-sm">Well-formulated serums with stabilisers don't require refrigeration but store away from direct sunlight and heat.</p>
                  </div>
                </div>
              </ExpandableSection>
            </article>

            <SkinFoundationCTA variant="uneven-tone" />

            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Try a Properly Formulated Vitamin C</h2>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                20% L-ascorbic acid, ferulic acid, Vitamin E — at pH 3.0–3.5. Doctor-formulated on Harley Street.
              </p>
              <Link to="/shop/vitamin-c-serum/">
                <Button className="bg-[#C9A050] hover:bg-[#B89040] text-white px-8">
                  Shop Revitalise C20 — £85 <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyPHMattersVitaminC;
