import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExpandableSection from "@/components/ui/expandable-section";
import SkinFoundationCTA from "@/components/SkinFoundationCTA";
import Breadcrumb from "@/components/Breadcrumb";

const ThreeCellPhilosophy = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "The 3-Cell Skin Philosophy" },
  ];

  return (
    <>
      <Helmet>
        <title>The 3-Cell Skin Philosophy Explained | Cosmedocs</title>
        <meta name="description" content="Every skin concern traces back to three cell types: Keratinocytes, Melanocytes and Fibroblasts. Learn how targeting all three creates lasting skin transformation." />
        <link rel="canonical" href="https://www.cosmedocs.com/blog/three-cell-skin-philosophy/" data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The 3-Cell Skin Philosophy Explained",
            description: "Every skin concern traces back to three cell types. Learn how targeting all three creates lasting skin transformation.",
            author: { "@type": "Person", name: "Dr. Ahmed Haq" },
            publisher: { "@type": "Organization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
            datePublished: "2026-04-13",
            url: "https://www.cosmedocs.com/blog/three-cell-skin-philosophy/",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the 3 cell types in skin?",
                acceptedAnswer: { "@type": "Answer", text: "The three essential skin cell types are Keratinocytes (90% of the epidermis, forming the protective barrier), Melanocytes (pigment-producing cells controlling skin tone), and Fibroblasts (dermal cells producing collagen, elastin and hyaluronic acid)." }
              },
              {
                "@type": "Question",
                name: "Why should skincare target all three cell types?",
                acceptedAnswer: { "@type": "Answer", text: "Most skin concerns — ageing, dullness, pigmentation, acne — involve dysfunction in at least two of these cell types. Targeting only one creates incomplete results. A comprehensive approach addresses barrier, tone, and structure simultaneously." }
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
              <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3 font-medium">CosmeTalk • Skin Science</p>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                The 3-Cell Skin Philosophy Explained
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Every skin concern — ageing, uneven tone, congestion, sensitivity — traces back to three cell types. Understanding them changes how you approach skincare forever.
              </p>
              <p className="text-sm text-slate-400 mt-4">By Dr. Ahmed Haq • 13 April 2026 • 10 min read</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Three Cells Matter</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Your skin contains over 30 cell types, but three are responsible for the vast majority of visible skin health. At Cosmedocs, we formulate our cosmeceuticals and design our clinical treatments around these three cellular pillars. Every product, every protocol, every recommendation maps back to this framework.
              </p>

              {/* Cell Cards */}
              <div className="grid gap-6 mb-10 not-prose">
                <Card className="border-emerald-200 bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Keratinocytes</h3>
                        <p className="text-sm text-emerald-600 font-medium">The Barrier Builders • ~90% of the epidermis</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Keratinocytes form the physical barrier that keeps moisture in and irritants out. They produce ceramides, fatty acids, and natural moisturising factors (NMFs). When keratinocyte function is compromised, you see dehydration, sensitivity, oiliness, and congestion.
                    </p>
                    <p className="text-slate-600 text-sm">
                      <strong>Treatments that target keratinocytes:</strong>{" "}
                      <Link to="/treatments/chemical-peels/" className="text-[#C9A050] hover:underline">Chemical peels</Link>,{" "}
                      <Link to="/treatments/hydrafacial/" className="text-[#C9A050] hover:underline">HydraFacial</Link>,{" "}
                      <Link to="/shop/retinol-cream/" className="text-[#C9A050] hover:underline">Retinol+</Link>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Palette className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Melanocytes</h3>
                        <p className="text-sm text-purple-600 font-medium">The Pigment Regulators • ~5–10% of the basal layer</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Melanocytes produce melanin, the pigment that gives skin its colour and provides UV protection. Dysfunction leads to hyperpigmentation, melasma, post-inflammatory marks, and uneven skin tone. Melanocyte regulation is dose-sensitive — aggressive treatments can trigger rebound pigmentation.
                    </p>
                    <p className="text-slate-600 text-sm">
                      <strong>Treatments that target melanocytes:</strong>{" "}
                      <Link to="/shop/vitamin-c-serum/" className="text-[#C9A050] hover:underline">Vitamin C Serum</Link>,{" "}
                      <Link to="/treatments/pico-laser/" className="text-[#C9A050] hover:underline">Pico Laser</Link>,{" "}
                      <Link to="/treatments/chemical-peels/" className="text-[#C9A050] hover:underline">Chemical Peels</Link>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cyan-200 bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Fibroblasts</h3>
                        <p className="text-sm text-cyan-600 font-medium">The Structure Makers • Dermis connective tissue</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Fibroblasts produce collagen (structure), elastin (bounce), and hyaluronic acid (hydration). After age 25, fibroblast activity declines ~1% per year. This is why injectable treatments like <Link to="/treatments/profhilo/" className="text-[#C9A050] hover:underline">Profhilo</Link> and <Link to="/treatments/polynucleotides/" className="text-[#C9A050] hover:underline">polynucleotides</Link> work — they directly stimulate dormant fibroblasts.
                    </p>
                    <p className="text-slate-600 text-sm">
                      <strong>Treatments that target fibroblasts:</strong>{" "}
                      <Link to="/shop/retinol-cream/" className="text-[#C9A050] hover:underline">Retinol+</Link>,{" "}
                      <Link to="/treatments/prp-vampire-facial/" className="text-[#C9A050] hover:underline">PRP</Link>,{" "}
                      <Link to="/treatments/microneedling/" className="text-[#C9A050] hover:underline">Microneedling</Link>
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Apply This Clinically</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                When you visit Cosmedocs for a consultation, your treatment plan is mapped against all three cell types. A patient presenting with fine lines (fibroblasts) might also have sun spots (melanocytes) and dehydration (keratinocytes). Treating only the wrinkles misses two-thirds of the picture.
              </p>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">The AM/PM Home Protocol</h3>}>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Our two core cosmeceuticals are designed as a complete daily protocol targeting all three cell types:
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Morning — <Link to="/shop/vitamin-c-serum/" className="text-[#C9A050] hover:underline">Revitalise C20</Link>:</strong> 20% L-ascorbic acid protects keratinocyte barriers from oxidative damage, inhibits melanocyte tyrosinase, and provides the cofactor fibroblasts need for collagen synthesis.</li>
                  <li><strong>Evening — <Link to="/shop/retinol-cream/" className="text-[#C9A050] hover:underline">Stimulate RE (Retinol+)</Link>:</strong> Dual retinoids accelerate keratinocyte turnover, normalise melanocyte pigment distribution, and activate fibroblast retinoid receptors for new collagen production.</li>
                </ul>
              </ExpandableSection>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">Mapping Concerns to Cell Types</h3>}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Concern</th>
                        <th className="text-center p-3 font-semibold text-emerald-700">K</th>
                        <th className="text-center p-3 font-semibold text-purple-700">M</th>
                        <th className="text-center p-3 font-semibold text-cyan-700">F</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-t"><td className="p-3">Fine lines & wrinkles</td><td className="p-3 text-center">—</td><td className="p-3 text-center">—</td><td className="p-3 text-center">✓✓</td></tr>
                      <tr className="border-t bg-slate-50/50"><td className="p-3">Hyperpigmentation</td><td className="p-3 text-center">✓</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td></tr>
                      <tr className="border-t"><td className="p-3">Acne & congestion</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td><td className="p-3 text-center">—</td></tr>
                      <tr className="border-t bg-slate-50/50"><td className="p-3">Dehydration</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td><td className="p-3 text-center">✓</td></tr>
                      <tr className="border-t"><td className="p-3">Sagging & laxity</td><td className="p-3 text-center">—</td><td className="p-3 text-center">—</td><td className="p-3 text-center">✓✓</td></tr>
                      <tr className="border-t bg-slate-50/50"><td className="p-3">Post-inflammatory marks</td><td className="p-3 text-center">✓</td><td className="p-3 text-center">✓✓</td><td className="p-3 text-center">—</td></tr>
                    </tbody>
                  </table>
                </div>
              </ExpandableSection>

              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">FAQs</h3>}>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">What are the 3 cell types in skin?</h4>
                    <p className="text-slate-600 text-sm">Keratinocytes (barrier), Melanocytes (pigment) and Fibroblasts (collagen, elastin, hyaluronic acid). Together they control 90%+ of visible skin health.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Why should skincare target all three?</h4>
                    <p className="text-slate-600 text-sm">Most skin concerns involve dysfunction in at least two cell types. Targeting only one creates incomplete results — the 3-cell approach ensures comprehensive, lasting improvement.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Can clinical treatments and cosmeceuticals work together?</h4>
                    <p className="text-slate-600 text-sm">Absolutely. Clinical treatments (Profhilo, PRP, peels) provide intensive cellular stimulation, while daily cosmeceuticals maintain and protect those results between appointments.</p>
                  </div>
                </div>
              </ExpandableSection>
            </article>

            <SkinFoundationCTA variant="general" />

            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Experience the 3-Cell Approach</h2>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                Start with doctor-formulated cosmeceuticals that target all three essential skin cell types — the foundation that makes professional treatments last.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/shop/">
                  <Button className="bg-[#C9A050] hover:bg-[#B89040] text-white px-6">
                    Shop Cosmeceuticals <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact/">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6">
                    Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
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

export default ThreeCellPhilosophy;
