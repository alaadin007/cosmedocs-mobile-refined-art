import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Check, Shield, Droplets, Sun, Moon, ArrowRight, ExternalLink, Beaker, Sparkles, FlaskConical } from "lucide-react";
import ExpandableSection from "@/components/ui/expandable-section";
import Breadcrumb from "@/components/Breadcrumb";
import vitaminCImage from "@/assets/revitalise-c20-vitamin-c-serum.png";
import retinolImage from "@/assets/stimulate-re-retinol-cream.png";

const VitaminCSerum = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Revitalise C20 — Vitamin C Serum",
    image: "https://www.cosmedocs.com/assets/revitalise-c20-vitamin-c-serum.png",
    description: "Clinical-strength 20% L-ascorbic acid serum with Ferulic acid, Vitamin E and Niacinamide. pH 3.0–3.5 for guaranteed penetration and antioxidant efficacy.",
    brand: { "@type": "Brand", name: "Harley Street Formulations" },
    sku: "HSF-RC20-30",
    offers: {
      "@type": "Offer",
      url: "https://www.cosmedocs.com/shop/vitamin-c-serum/",
      priceCurrency: "GBP",
      price: "85.00",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Cosmedocs" }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "7",
      bestRating: "5"
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Christina" },
        datePublished: "2023-04-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "My new holy grail serum! I have been using this serum for over a month now and I can safely say that it is by far the most effective vitamin C serum out there."
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "D" },
        datePublished: "2022-08-28",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Have been using this product for a number of years now – it's very easy to apply and has become a solid part of my morning routine."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes Revitalise C20 different from SkinCeuticals C E Ferulic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both contain L-ascorbic acid, Ferulic acid and Vitamin E at low pH. Revitalise C20 adds Niacinamide for oil control and barrier repair, plus costs £85 vs SkinCeuticals' £165+ — formulated by Harley Street cosmetic doctors."
        }
      },
      {
        "@type": "Question",
        name: "How does Vitamin C help the three skin cell types?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vitamin C supports all three essential skin cells: Melanocytes (regulates pigment for even tone), Keratinocytes (strengthens the skin barrier), and Fibroblasts (protects collagen and elastin from free radical damage)."
        }
      },
      {
        "@type": "Question",
        name: "Can I use Vitamin C serum with retinol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — use Vitamin C in the morning for antioxidant protection and retinol at night for cell renewal. This AM/PM approach maximises benefits to all three cell types without irritation."
        }
      },
      {
        "@type": "Question",
        name: "Why is pH important in a Vitamin C serum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L-ascorbic acid requires a pH below 3.5 to penetrate the skin effectively. Revitalise C20 is stabilised at pH 3.0–3.5, ensuring maximum absorption and antioxidant efficacy."
        }
      },
      {
        "@type": "Question",
        name: "Is Vitamin C suitable for sensitive skin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It's important to distinguish between sensitised skin (damaged barrier) and genuinely sensitive skin. Vitamin C with Niacinamide actively repairs a damaged barrier by boosting ceramide synthesis. A slight tingling on first use is normal and subsides within a week."
        }
      },
      {
        "@type": "Question",
        name: "How should I store Vitamin C serum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Store in a cool, dark place away from direct sunlight. The serum may turn slightly yellow due to Ferulic acid — this is normal and does not affect efficacy. Significant darkening or browning indicates oxidation and the serum should be replaced."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best Vitamin C Serum UK | 20% L-Ascorbic Acid | Cosmedocs</title>
        <meta name="description" content="Clinical-strength 20% Vitamin C serum with Ferulic acid & Vitamin E at pH 3.0. Doctor-formulated for skin brightening, anti-ageing & barrier repair. £85 with free shipping." />
        <link rel="canonical" href="https://www.cosmedocs.com/shop/vitamin-c-serum/" data-rh="true" />
        <meta property="og:title" content="Revitalise C20 — Best Vitamin C Serum UK | Cosmedocs" />
        <meta property="og:description" content="20% L-ascorbic acid, Ferulic acid & Vitamin E. Clinical antioxidant formula at pH 3.0–3.5. Formulated by Harley Street cosmetic doctors." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.cosmedocs.com/shop/vitamin-c-serum/" />
        <meta property="product:price:amount" content="85.00" />
        <meta property="product:price:currency" content="GBP" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <Breadcrumb items={[{ label: 'Shop', path: '/shop' }]} currentPage="Vitamin C Serum" />
        </div>

        {/* ═══════════════════════════════════════════
            HERO — Light, modern split layout
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden pb-16 pt-8">
          {/* Subtle gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 50%, transparent 70%)' }} />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Content */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <p className="text-amber-600 font-medium tracking-[0.2em] uppercase text-xs mb-4">Harley Street Formulations</p>
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-2 leading-[1.1]">
                  Revitalise <span className="font-semibold text-amber-600">C20</span>
                </h1>
                <p className="text-lg text-gray-500 font-light mb-6">Antioxidant Formula on Steroids</p>

                <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-xl">
                  Power up your skin's radiance with a clinical-strength 20% L-ascorbic acid serum, enhanced with Ferulic acid, Vitamin E and Niacinamide at a stabilised pH of 3.0–3.5. This is not a cosmetic vitamin C — it's a targeted cosmeceutical formulated by Harley Street cosmetic doctors to deliver measurable results across all three essential skin cell types.
                </p>

                {/* Quick answer */}
                <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5 mb-6">
                  <p className="text-gray-700 font-light text-sm leading-relaxed">
                    <strong className="text-amber-700 font-medium">Quick Answer:</strong> Revitalise C20 is a doctor-formulated 20% L-ascorbic acid serum with Ferulic acid and Vitamin E at pH 3.0–3.5. It targets all three skin cell types — melanocytes for even tone, keratinocytes for barrier strength, and fibroblasts for collagen protection — at £85 for 30ml.
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-light text-gray-900">£85.00</span>
                  <span className="text-sm text-gray-400">30ml • Free shipping over £50</span>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm text-gray-400 ml-2">5.0 (7 reviews)</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://www.hsformulations.com/product/revitalise-c20-topical-vitamin-c-facial-serum/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-gray-900/20">
                    Buy Now <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link to="/shop/retinol-cream/" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3.5 rounded-full transition-all">
                    Pair with Retinol <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Trust row */}
                <div className="mt-10 flex flex-wrap gap-6 text-xs text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Doctor Formulated</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> pH 3.0–3.5</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Fragrance Free</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Vegan</span>
                </div>
              </motion.div>

              {/* Right — Product image */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-sky-50/40 rounded-3xl -m-8" />
                  <img src={vitaminCImage} alt="Revitalise C20 Vitamin C Serum by Harley Street Formulations — 20% L-ascorbic acid clinical antioxidant serum" className="relative max-w-xs md:max-w-sm drop-shadow-xl" width="400" height="500" loading="eager" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            3-CELL PHILOSOPHY
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-amber-600 tracking-[0.2em] uppercase text-xs mb-3 font-medium">The Science Behind Great Skin</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">The 3-Cell Skin Philosophy</h2>
              <p className="text-gray-500 font-light max-w-2xl mx-auto">
                Great skin starts at cell level. Vitamin C is the only antioxidant clinically proven to optimise all three essential skin cell types simultaneously.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { cell: "Melanocytes", icon: "🎨", action: "Regulates pigment production", benefit: "Even skin tone, reduced dark spots and hyperpigmentation. L-ascorbic acid inhibits tyrosinase — the enzyme responsible for excess melanin production.", colour: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
                { cell: "Keratinocytes", icon: "🛡️", action: "Strengthens the skin barrier", benefit: "Resilient, hydrated skin that resists sensitivity and environmental damage. Niacinamide boosts ceramide synthesis to seal moisture in.", colour: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
                { cell: "Fibroblasts", icon: "⚡", action: "Protects collagen & elastin", benefit: "Firmer, more elastic skin with reduced fine lines. Ferulic acid doubles the photoprotective capacity of L-ascorbic acid, shielding collagen from UV degradation.", colour: "text-sky-600", bg: "bg-sky-50 border-sky-100" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${item.bg} border rounded-2xl p-6`}>
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className={`text-lg font-medium ${item.colour} mb-1`}>{item.cell}</h3>
                  <p className="text-gray-800 text-sm font-medium mb-2">{item.action}</p>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{item.benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FORMULATION SCIENCE
        ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">Formulation Science</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Antioxidant Power */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-amber-500" /> Maximum Antioxidant Power</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">The triple-antioxidant combination of L-ascorbic acid, Ferulic acid and Vitamin E (Tocopherol) is based on landmark Duke University research:</p>
                <ul className="space-y-2">
                  {["Enhanced antioxidant protection up to 8× compared to Vitamin C alone", "Increased photostability — serum remains effective even after UV exposure", "Improved penetration and absorption of active ingredients", "Superior brightening and anti-ageing benefits"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-light"><Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>

              {/* Oil & Inflammation */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2"><Droplets className="w-5 h-5 text-sky-500" /> Oil & Inflammation Control</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">Niacinamide (Vitamin B3) is integrated for multi-targeted benefits beyond antioxidant protection:</p>
                <ul className="space-y-2">
                  {["Improves skin barrier function and prevents moisture loss", "Regulates sebum production and minimises pore size", "Reduces and prevents skin inflammation", "Ideal for sensitive, oily or acne-prone skin types"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-light"><Check className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expandable: Complete Formulation */}
            <ExpandableSection
              preview={
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Complete Formulation</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs text-amber-600 tracking-wider uppercase mb-2 font-medium">Active Ingredients</p>
                      <ul className="space-y-1 text-sm text-gray-600 font-light">
                        <li>20% L-ascorbic acid</li>
                        <li>Ferulic acid</li>
                        <li>Vitamin E (Tocopherol)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-amber-600 tracking-wider uppercase mb-2 font-medium">Supporting Ingredients</p>
                      <ul className="space-y-1 text-sm text-gray-600 font-light">
                        <li>Niacinamide (Vitamin B3)</li>
                        <li>Hyaluronic acid</li>
                        <li>Panthenol (Vitamin B5)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-amber-600 tracking-wider uppercase mb-2 font-medium">Serum Profile</p>
                      <ul className="space-y-1 text-sm text-gray-600 font-light">
                        <li>pH: 3.0–3.5</li>
                        <li>Colour: Clear to slight yellow</li>
                        <li>Scent: Woody (ferulic) — fragrance-free</li>
                      </ul>
                    </div>
                  </div>
                </div>
              }
              label="View full INCI list"
              collapseLabel="Hide INCI list"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Glycerin, Purified Water (Aqua), Ethoxydiglycol, L-Ascorbic Acid, Butylene Glycol, Laureth-23, Tocopherol, Ferulic Acid, Panthenol, TEA, Hyaluronic Acid, Sodium PCA, Niacinamide, Phenoxyethanol.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {["Silicone-free", "Nut-free", "Cruelty-free", "Gluten-free", "Soy-free", "Alcohol-free", "Oil-free", "Vegan"].map((cert) => (
                    <span key={cert} className="flex items-center gap-1.5 text-xs text-gray-500 font-light"><Check className="w-3 h-3 text-emerald-500" />{cert}</span>
                  ))}
                </div>
              </div>
            </ExpandableSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COMPETITOR COMPARISON
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-4 text-center">How Revitalise C20 Compares</h2>
            <p className="text-gray-500 text-sm font-light text-center mb-10 max-w-2xl mx-auto">
              We formulated Revitalise C20 to deliver clinical-grade efficacy at a fair price. Here's how it stands against the most popular Vitamin C serums in the UK.
            </p>

            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-gray-400 font-normal py-4 px-5">Feature</th>
                    <th className="text-center text-amber-700 font-semibold py-4 px-5 bg-amber-50/50">Revitalise C20</th>
                    <th className="text-center text-gray-400 font-normal py-4 px-5">SkinCeuticals C E Ferulic</th>
                    <th className="text-center text-gray-400 font-normal py-4 px-5">Medik8 C-Tetra</th>
                    <th className="text-center text-gray-400 font-normal py-4 px-5">The Ordinary 23%</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 font-light">
                  {[
                    ["Vitamin C Form", "L-ascorbic acid", "L-ascorbic acid", "Tetrahexyldecyl ascorbate", "L-ascorbic acid"],
                    ["Concentration", "20%", "15%", "7%", "23%"],
                    ["Ferulic Acid", "✓", "✓", "✗", "✗"],
                    ["Vitamin E", "✓", "✓", "✓", "✗"],
                    ["Niacinamide", "✓", "✗", "✗", "✗"],
                    ["pH", "3.0–3.5", "2.0–3.5", "N/A (oil)", "~2.3 (grainy)"],
                    ["Texture", "Lightweight serum", "Lightweight serum", "Oil-based", "Suspension (gritty)"],
                    ["Price (30ml)", "£85", "£165+", "£59", "£6.50"],
                    ["Doctor Formulated", "✓ Harley Street", "✓ Dermatologist", "✗", "✗"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 px-5 text-gray-500">{row[0]}</td>
                      <td className="py-3 px-5 text-center font-medium text-gray-900 bg-amber-50/30">{row[1]}</td>
                      <td className="py-3 px-5 text-center">{row[2]}</td>
                      <td className="py-3 px-5 text-center">{row[3]}</td>
                      <td className="py-3 px-5 text-center">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW TO APPLY — AM/PM
        ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">How to Apply</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <h3 className="text-lg font-medium text-gray-900">Morning Routine</h3>
                </div>
                <ol className="space-y-3 text-sm text-gray-600 font-light">
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">1.</span> Cleanse your face</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">2.</span> Place 4–5 drops of Revitalise C20 into your palm</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">3.</span> Smooth evenly over face and neck</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">4.</span> Allow to penetrate before applying SPF</li>
                </ol>
                <p className="text-xs text-gray-400 mt-4">Pro tip: Reapply in the afternoon to build an antioxidant reservoir for enhanced protection.</p>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-lg font-medium text-gray-900">Evening Routine</h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  In the evening, switch to <Link to="/shop/retinol-cream/" className="text-indigo-600 hover:text-indigo-500 underline underline-offset-2">Stimulate RE Retinol+</Link> for nighttime cell renewal. The AM/PM protocol ensures your skin receives both antioxidant protection and active repair across all three cell types.
                </p>
                <div className="bg-white/70 rounded-xl p-4 flex items-center gap-4 border border-indigo-100/60">
                  <img src={retinolImage} alt="Stimulate RE Retinol+ Cream" className="w-16 h-20 object-contain" loading="lazy" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">Stimulate RE (Retinol+)</p>
                    <p className="text-gray-400 text-xs">Dual Vitamin A Cream • £65</p>
                    <Link to="/shop/retinol-cream/" className="text-indigo-600 text-xs hover:underline">View Details →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLINICAL EVIDENCE — Expandable
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">The Clinical Evidence for Vitamin C</h2>

            {/* Visible first section */}
            <div className="prose prose-gray prose-sm max-w-none font-light">
              <p className="text-gray-600 leading-relaxed">
                L-ascorbic acid is the most extensively studied topical antioxidant in dermatological research. The majority of visible facial ageing is attributable to photoageing (cumulative UV damage) and repetitive muscular movements (dynamic expressions). Antioxidants neutralise the free radicals that form due to sunlight, pollution, smoking and normal biological ageing.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The synergistic combination of L-ascorbic acid with Ferulic acid and Vitamin E was first demonstrated by Pinnell et al. (2005), showing that this triple formulation doubled the photoprotective capacity of Vitamin C alone. At pH 3.0–3.5, L-ascorbic acid remains in its protonated form — the only form capable of penetrating the stratum corneum and reaching the viable epidermis where melanocytes, keratinocytes and fibroblasts reside.
              </p>
            </div>

            {/* Expandable deeper content */}
            <ExpandableSection
              preview={<></>}
              label="Read more about clinical research"
              collapseLabel="Show less"
            >
              <div className="prose prose-gray prose-sm max-w-none font-light">
                <p className="text-gray-600 leading-relaxed">
                  More recent studies have revealed that reapplying vitamin C serum in the afternoon helps build a high concentration of antioxidant in the skin, creating a reservoir for sustained protection against environmental aggressors. This finding is particularly relevant for patients in urban environments who face continuous exposure to pollution and blue light from screens.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">Why pH Matters in Vitamin C Serums</h3>
                <p className="text-gray-600 leading-relaxed">
                  The efficacy of L-ascorbic acid is entirely dependent on formulation pH. At pH levels above 4.0, L-ascorbic acid becomes ionised and cannot penetrate the skin's acid mantle. Many consumer-grade vitamin C products fail to achieve adequate penetration because they prioritise cosmetic elegance over clinical efficacy. Revitalise C20 is stabilised at pH 3.0–3.5 — the optimal range identified in peer-reviewed dermatological research for maximum bioavailability.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">Vitamin C for Sensitised vs Sensitive Skin</h3>
                <p className="text-gray-600 leading-relaxed">
                  It's important to distinguish between sensitised skin (an acquired condition caused by a damaged barrier) and genuinely sensitive skin (an inherent tendency to react). Vitamin C with Niacinamide actively repairs a damaged skin barrier by boosting ceramide synthesis in keratinocytes, making it ideal for sensitised skin. A slight tingling sensation on first application is normal and indicates active ingredient penetration — this typically subsides within the first week of use.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">The Role of Ferulic Acid in Vitamin C Stability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ferulic acid is a plant-based antioxidant that provides dual function in Vitamin C formulations. First, it acts as a stabiliser — extending the shelf life and potency of L-ascorbic acid by preventing oxidation. Second, it enhances the photoprotective capacity of the Vitamin C and E combination by an additional 25%, as demonstrated in clinical trials. The higher concentration of ferulic acid in Revitalise C20 compared to other formulations explains the serum's naturally slight yellow colour — this is completely normal and a sign of active ingredient concentration.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">Vitamin C and Skin Ageing: Addressing Free Radical Damage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free radicals are unstable molecules generated by UV radiation, pollution, smoking and normal metabolic processes. They damage cellular DNA, proteins and lipids — accelerating the visible signs of ageing including fine lines, loss of firmness and uneven pigmentation. Topical L-ascorbic acid donates electrons to neutralise free radicals before they can damage collagen, elastin and hyaluronic acid within the dermal matrix. This protective mechanism is why dermatologists consistently rank Vitamin C as the most essential active ingredient for anti-ageing skincare regimens.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">Niacinamide: The Multi-Benefit Supporting Ingredient</h3>
                <p className="text-gray-600 leading-relaxed">
                  The addition of Niacinamide (Vitamin B3) to Revitalise C20 addresses the common limitation of traditional Vitamin C serums — the lack of oil control and barrier support. Niacinamide has been shown in clinical studies to reduce sebum production by up to 23% over 4 weeks, making it invaluable for oily and combination skin types. It also stimulates the production of ceramides — the lipid molecules that form the skin's protective barrier — which is particularly beneficial for those with compromised or sensitised skin. Unlike some formulations that separate Vitamin C and Niacinamide, Revitalise C20's stabilised pH allows both ingredients to coexist and perform optimally.
                </p>
              </div>
            </ExpandableSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            REVIEWS
        ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">Patient Reviews</h2>
            <div className="space-y-6">
              {[
                { name: "Christina", type: "Oily", concern: "Anti-ageing", age: "30–39", date: "April 2023", text: "My new holy grail serum! I have been using this serum for over a month now and I can safely say that it is by far the most effective vitamin C serum out there! Love the fact how lightweight and non-greasy this serum is — it sinks into my skin really quickly. I have also paired it with their retinol cream for my nighttime skincare routine. Obsessed? Yes." },
                { name: "D", type: "Normal", concern: "Uneven tone", age: "40–49", date: "August 2022", text: "Have been using this product for a number of years now — it's very easy to apply and has become a solid part of my morning routine. I think it's great for evening out skin tone and combating the effects of too much sun. I often get compliments on my skin. Planning on making this a permanent part of my skincare set up." },
              ].map((review, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    <span className="text-xs text-gray-400 ml-2">{review.date}</span>
                  </div>
                  <p className="text-gray-900 text-sm font-medium mb-1">{review.name}</p>
                  <p className="text-xs text-gray-400 mb-3">Skin: {review.type} • Concern: {review.concern} • Age: {review.age}</p>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQS — Expandable
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
            <ExpandableSection
              preview={
                <div className="space-y-3">
                  {faqSchema.mainEntity.slice(0, 3).map((faq, i) => (
                    <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group shadow-sm">
                      <summary className="text-gray-900 text-sm font-medium cursor-pointer list-none flex justify-between items-center">
                        {faq.name}
                        <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <p className="text-gray-600 text-sm font-light leading-relaxed mt-3">{faq.acceptedAnswer.text}</p>
                    </details>
                  ))}
                </div>
              }
              label="View all FAQs"
              collapseLabel="Show fewer FAQs"
            >
              <div className="space-y-3">
                {faqSchema.mainEntity.slice(3).map((faq, i) => (
                  <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group shadow-sm">
                    <summary className="text-gray-900 text-sm font-medium cursor-pointer list-none flex justify-between items-center">
                      {faq.name}
                      <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <p className="text-gray-600 text-sm font-light leading-relaxed mt-3">{faq.acceptedAnswer.text}</p>
                  </details>
                ))}
              </div>
            </ExpandableSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CROSS-SELL CTA
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-amber-400 tracking-[0.2em] uppercase text-xs mb-3 font-medium">Complete Your Routine</p>
            <h2 className="text-2xl font-light text-white mb-6">Pair with Retinol for the Ultimate AM/PM Protocol</h2>
            <p className="text-gray-400 text-sm font-light mb-8 max-w-xl mx-auto">
              Vitamin C protects by day. Retinol repairs by night. Together, they address all three skin cell types for comprehensive skin transformation.
            </p>
            <Link to="/shop/retinol-cream/" className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-8 py-3.5 rounded-full transition-all hover:bg-gray-100 shadow-lg">
              Discover Stimulate RE (Retinol+) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            RELATED LINKS
        ═══════════════════════════════════════════ */}
        <section className="py-12 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h3 className="text-xs text-gray-400 tracking-wider uppercase mb-4 font-medium">Related Treatments</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Skin Rejuvenation", to: "/treatments/skin-rejuvenation/" },
                { label: "Chemical Peels", to: "/treatments/chemical-peel/" },
                { label: "Profhilo", to: "/treatments/profhilo/" },
                { label: "Polynucleotides", to: "/treatments/polynucleotide-treatment/" },
                { label: "Microneedling", to: "/treatments/microneedling/" },
                { label: "Shop All Products", to: "/shop/" },
                { label: "Retinol Cream", to: "/shop/retinol-cream/" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-gray-500 hover:text-amber-600 font-light border border-gray-200 px-4 py-2 rounded-full transition-colors hover:border-amber-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VitaminCSerum;
