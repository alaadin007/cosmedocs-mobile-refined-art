import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Check, Shield, Moon, Sun, ArrowRight, ExternalLink, Zap } from "lucide-react";
import ExpandableSection from "@/components/ui/expandable-section";
import Breadcrumb from "@/components/Breadcrumb";
import retinolImage from "@/assets/stimulate-re-retinol-cream.png";
import vitaminCImage from "@/assets/revitalise-c20-vitamin-c-serum.png";

const RetinolCream = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Stimulate RE — Dual Retinol (Vitamin A) Cream",
    image: "https://www.cosmedocs.com/assets/stimulate-re-retinol-cream.png",
    description: "Dual retinoid cream with 0.5% Retinol and 1.0% Retinyl Palmitate. Hydrating base with Hyaluronic acid and Ceramide-3 for skin rejuvenation without excessive dryness.",
    brand: { "@type": "Brand", name: "Harley Street Formulations" },
    sku: "HSF-SRE-30",
    offers: {
      "@type": "Offer",
      url: "https://www.cosmedocs.com/shop/retinol-cream/",
      priceCurrency: "GBP",
      price: "65.00",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Cosmedocs" }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "4",
      bestRating: "5"
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rebecca" },
        datePublished: "2022-09-17",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "I use this at night and my skin feels incredibly soft and smooth just after use. It also doesn't seem to dry my skin out."
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Valeria B" },
        datePublished: "2022-08-30",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "It made my skin so smooth and I can see wrinkles are less and my face is more hydrated."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a dual retinoid cream?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stimulate RE combines two forms of Vitamin A: 0.5% Retinol for deep cellular action and 1.0% Retinyl Palmitate for gentle surface improvement. This dual approach provides both immediate texture refinement and long-term anti-ageing benefits."
        }
      },
      {
        "@type": "Question",
        name: "Can I use retinol with Vitamin C?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — use Vitamin C (Revitalise C20) in the morning for antioxidant protection and Retinol (Stimulate RE) at night for cell renewal. This AM/PM protocol is the foundation of the 3-Cell Skin Philosophy."
        }
      },
      {
        "@type": "Question",
        name: "How long before I see results from retinol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most patients notice smoother skin texture within 2–4 weeks. Visible reduction in fine lines and improved skin tone typically appears at 8–12 weeks with consistent nightly use."
        }
      },
      {
        "@type": "Question",
        name: "Will retinol make my skin peel or dry out?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stimulate RE is formulated with Hyaluronic acid, Ceramide-3 and Glycerin to offset retinoid dryness. Start with 1–2 times per week and gradually increase as tolerated. Most users experience no significant peeling."
        }
      },
      {
        "@type": "Question",
        name: "Is retinol safe to use during pregnancy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retinoids are not recommended during pregnancy or breastfeeding. Switch to Revitalise C20 Vitamin C Serum as a safe alternative during this period — it provides antioxidant protection and collagen support without retinoid-related concerns."
        }
      },
      {
        "@type": "Question",
        name: "What strength retinol should a beginner start with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "0.5% Retinol is considered the ideal starting strength for most adults. It's clinically effective without excessive irritation. The addition of Retinyl Palmitate in Stimulate RE provides surface-level benefits while the retinol works deeper — making it suitable for retinol-naive skin."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best Retinol Cream UK | Dual Vitamin A | Cosmedocs</title>
        <meta name="description" content="Doctor-formulated dual retinoid cream with 0.5% Retinol & Retinyl Palmitate. Reduces fine lines, improves texture & stimulates collagen. £65 with free shipping." />
        <link rel="canonical" href="https://www.cosmedocs.com/shop/retinol-cream/" data-rh="true" />
        <meta property="og:title" content="Stimulate RE — Best Retinol Cream UK | Cosmedocs" />
        <meta property="og:description" content="Dual retinoid cream: 0.5% Retinol + Retinyl Palmitate with Ceramide-3. Nighttime cell renewal formulated by Harley Street doctors." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.cosmedocs.com/shop/retinol-cream/" />
        <meta property="product:price:amount" content="65.00" />
        <meta property="product:price:currency" content="GBP" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <Breadcrumb items={[{ label: 'Shop', path: '/shop' }]} currentPage="Retinol Cream" />
        </div>

        {/* ═══════════════════════════════════════════
            HERO — Light, modern split layout
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden pb-16 pt-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 50%, transparent 70%)' }} />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.06) 0%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — Content */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <p className="text-amber-600 font-medium tracking-[0.2em] uppercase text-xs mb-4">Harley Street Formulations</p>
                <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-2 leading-[1.1]">
                  Stimulate <span className="font-semibold text-amber-600">RE</span>
                </h1>
                <p className="text-lg text-gray-500 font-light mb-6">Dual Retinol (Vitamin A) Cream</p>

                <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-xl">
                  A precision-engineered dual retinoid cream combining 0.5% Retinol with Retinyl Palmitate in a hydrating base of Hyaluronic acid and Ceramide-3. Formulated by Harley Street cosmetic doctors for nighttime cellular renewal — targeting fibroblasts, keratinocytes and melanocytes to reverse the visible signs of ageing from the inside out.
                </p>

                {/* Quick answer */}
                <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5 mb-6">
                  <p className="text-gray-700 font-light text-sm leading-relaxed">
                    <strong className="text-amber-700 font-medium">Quick Answer:</strong> Stimulate RE is a dual retinoid cream with 0.5% Retinol and Retinyl Palmitate that stimulates collagen production in fibroblasts, accelerates cell turnover in keratinocytes, and regulates pigmentation in melanocytes — all in a hydrating, non-drying formula at £65 for 30ml.
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-light text-gray-900">£65.00</span>
                  <span className="text-sm text-gray-400">30ml • Free shipping over £50</span>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm text-gray-400 ml-2">5.0 (4 reviews)</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://www.hsformulations.com/product/retinol-stimulate-re/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-gray-900/20">
                    Buy Now <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link to="/shop/vitamin-c-serum/" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3.5 rounded-full transition-all">
                    Pair with Vitamin C <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Trust row */}
                <div className="mt-10 flex flex-wrap gap-6 text-xs text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Doctor Formulated</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Dual Retinoid</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Fragrance Free</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Vegan</span>
                </div>
              </motion.div>

              {/* Right — Product image */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 to-amber-50/30 rounded-3xl -m-8" />
                  <img src={retinolImage} alt="Stimulate RE Dual Retinol Cream by Harley Street Formulations — 0.5% Retinol and Retinyl Palmitate" className="relative max-w-xs md:max-w-sm drop-shadow-xl" width="400" height="500" loading="eager" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            3-CELL PHILOSOPHY — Retinol Focus
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-amber-600 tracking-[0.2em] uppercase text-xs mb-3 font-medium">Cell-Level Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">How Retinol Activates Your Skin Cells</h2>
              <p className="text-gray-500 font-light max-w-2xl mx-auto">
                Retinol (Vitamin A) is the gold standard in anti-ageing dermatology. It works by binding to retinoid receptors on each of the three essential skin cell types, triggering measurable cellular renewal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { cell: "Fibroblasts", icon: "⚡", action: "Stimulates collagen & elastin", benefit: "Retinol activates fibroblast proliferation, directly increasing production of collagen type I, elastin fibres and endogenous hyaluronic acid. This restores dermal volume lost through chronological ageing and photoageing.", colour: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
                { cell: "Keratinocytes", icon: "🛡️", action: "Accelerates cell turnover", benefit: "Retinoids normalise the desquamation cycle, promoting faster shedding of damaged surface cells and revealing smoother, more refined skin underneath. Combined with Ceramide-3, the barrier remains intact.", colour: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
                { cell: "Melanocytes", icon: "🎨", action: "Regulates pigmentation", benefit: "Retinol inhibits melanosome transfer between melanocytes and keratinocytes, gradually fading age spots, sun damage and post-inflammatory hyperpigmentation for a more even complexion.", colour: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
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
            DUAL RETINOID SCIENCE
        ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">Dual Retinoid Formulation</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /> 0.5% Retinol</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">The clinically effective workhorse. Retinol penetrates deeply into the dermis where it converts to retinoic acid — the active form that directly stimulates fibroblasts:</p>
                <ul className="space-y-2">
                  {["Stimulates collagen and elastin synthesis", "Accelerates cell turnover for smoother texture", "Reduces fine lines, wrinkles and pore size", "0.5% is the optimal strength for daily use without prescription"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-light"><Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-indigo-500" /> 1.0% Retinyl Palmitate</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">A gentler retinoid ester that works at the skin's surface while retinol works deeper:</p>
                <ul className="space-y-2">
                  {["Improves surface texture without deep irritation", "Provides additional antioxidant protection", "Enhances overall retinoid efficacy synergistically", "Better tolerated by sensitive or retinol-naive skin"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-light"><Check className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />{item}</li>
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
                        <li>0.5% Retinol</li>
                        <li>1.0% Retinyl Palmitate</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-amber-600 tracking-wider uppercase mb-2 font-medium">Supporting Ingredients</p>
                      <ul className="space-y-1 text-sm text-gray-600 font-light">
                        <li>Sodium Hyaluronate</li>
                        <li>Ceramide-3</li>
                        <li>Squalane</li>
                        <li>Tocopherol (Vitamin E)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-amber-600 tracking-wider uppercase mb-2 font-medium">Cream Profile</p>
                      <ul className="space-y-1 text-sm text-gray-600 font-light">
                        <li>pH: 3.0–3.5</li>
                        <li>Texture: Lightweight cream</li>
                        <li>Fragrance-free</li>
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
                  Aqua, Glycerin, Caprylic/Capric Triglyceride, Squalane, Cetearyl Alcohol, Retinol, Retinyl Palmitate, Sodium Hyaluronate, Ceramide-3, Tocopherol, Glyceryl Stearate, Ceteareth-20, Dimethicone, Phenoxyethanol, Ethylhexylglycerin, Xanthan Gum.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {["Nut-free", "Cruelty-free", "Gluten-free", "Soy-free", "Alcohol-free", "Vegan", "Fragrance-free"].map((cert) => (
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
            <h2 className="text-3xl font-light text-gray-900 mb-4 text-center">How Stimulate RE Compares</h2>
            <p className="text-gray-500 text-sm font-light text-center mb-10 max-w-2xl mx-auto">
              A dual retinoid formulation with built-in hydration — no need for separate moisturisers or buffer creams.
            </p>

            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-gray-400 font-normal py-4 px-5">Feature</th>
                    <th className="text-center text-amber-700 font-semibold py-4 px-5 bg-amber-50/50">Stimulate RE</th>
                    <th className="text-center text-gray-400 font-normal py-4 px-5">Medik8 Crystal Retinal</th>
                    <th className="text-center text-gray-400 font-normal py-4 px-5">The Ordinary Retinol 0.5%</th>
                    <th className="text-center text-gray-400 font-normal py-4 px-5">Dermatica Rx</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 font-light">
                  {[
                    ["Retinoid Type", "Dual (Retinol + Retinyl Palmitate)", "Retinaldehyde", "Retinol only", "Tretinoin (Rx)"],
                    ["Strength", "0.5% + 1.0%", "0.01–0.1%", "0.5%", "0.025–0.1%"],
                    ["Ceramides", "✓ Ceramide-3", "✗", "✗", "✗"],
                    ["Hyaluronic Acid", "✓", "✗", "✓ (squalane)", "✗"],
                    ["Prescription Required", "No", "No", "No", "Yes"],
                    ["Hydrating Base", "✓", "✓", "✗ (oil-based)", "Varies"],
                    ["Price", "£65", "£49–£69", "£8.50", "£24/month"],
                    ["Doctor Formulated", "✓ Harley Street", "✗", "✗", "✓ (remote)"],
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
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-lg font-medium text-gray-900">Evening Routine</h3>
                </div>
                <ol className="space-y-3 text-sm text-gray-600 font-light">
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">1.</span> Cleanse your face thoroughly</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">2.</span> Apply 1–2 pumps of Stimulate RE</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">3.</span> Massage a thin layer over face, avoiding the eye area initially</li>
                  <li className="flex gap-3"><span className="text-amber-600 font-medium">4.</span> Allow to dry — it hydrates as it exfoliates</li>
                </ol>
                <p className="text-xs text-gray-400 mt-4">Start with 1–2 times per week. Gradually increase to nightly use as tolerated. Store in a cool place.</p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <h3 className="text-lg font-medium text-gray-900">Morning Partner</h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  In the morning, switch to <Link to="/shop/vitamin-c-serum/" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">Revitalise C20 Vitamin C Serum</Link> for daytime antioxidant protection. The AM/PM protocol ensures 24-hour cellular support.
                </p>
                <div className="bg-white/70 rounded-xl p-4 flex items-center gap-4 border border-amber-100/60">
                  <img src={vitaminCImage} alt="Revitalise C20 Vitamin C Serum" className="w-16 h-20 object-contain" loading="lazy" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">Revitalise C20</p>
                    <p className="text-gray-400 text-xs">20% Vitamin C Serum • £85</p>
                    <Link to="/shop/vitamin-c-serum/" className="text-amber-700 text-xs hover:underline">View Details →</Link>
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
            <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">The Clinical Evidence for Retinoids</h2>

            <div className="prose prose-gray prose-sm max-w-none font-light">
              <p className="text-gray-600 leading-relaxed">
                Retinoids are the most evidence-based topical anti-ageing ingredients in dermatology. Over 50 years of clinical research demonstrates their ability to reverse both intrinsic and extrinsic ageing at the cellular level. Retinol binds to nuclear retinoic acid receptors (RARs) on fibroblasts, keratinocytes and melanocytes, modulating gene expression to increase collagen synthesis, accelerate cell turnover and regulate pigmentation.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The dual retinoid approach in Stimulate RE combines the deep dermal penetration of retinol with the surface-level benefits of retinyl palmitate. Clinical studies show that 0.5% retinol produces significant improvement in fine lines and photodamage within 12 weeks, with continued improvement over 12 months of use. Retinyl palmitate provides complementary surface renewal with reduced irritation potential.
              </p>
            </div>

            <ExpandableSection
              preview={<></>}
              label="Read more about clinical research"
              collapseLabel="Show less"
            >
              <div className="prose prose-gray prose-sm max-w-none font-light">
                <h3 className="text-gray-900 text-lg font-medium mt-4 mb-3">Why Hydration Matters in Retinoid Formulation</h3>
                <p className="text-gray-600 leading-relaxed">
                  The primary reason patients discontinue retinoid use is dryness and irritation. Stimulate RE addresses this with a built-in hydrating complex of Hyaluronic acid (humectant), Ceramide-3 (barrier lipid), Squalane (emollient) and Glycerin. This eliminates the need for a separate buffer cream and ensures the retinoids can work continuously without compromising the skin barrier.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">Retinol for Breakouts and Oil Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  Beyond anti-ageing, retinoids normalise sebaceous gland activity and prevent comedone formation. By accelerating keratinocyte turnover, retinol prevents the build-up of dead cells that clog pores — making it beneficial for acne-prone skin as well as mature skin. This dual action on both ageing and congestion makes Stimulate RE suitable for a broad range of skin concerns.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">Retinol and Collagen: The Fibroblast Connection</h3>
                <p className="text-gray-600 leading-relaxed">
                  From the age of 25, collagen production decreases by approximately 1% per year. Retinol is one of the few topical ingredients with robust clinical evidence for reversing this decline. It activates specific genes in fibroblasts that encode for procollagen synthesis, while simultaneously inhibiting matrix metalloproteinases (MMPs) — the enzymes that break collagen down. This dual mechanism makes retinol uniquely effective among anti-ageing active ingredients.
                </p>

                <h3 className="text-gray-900 text-lg font-medium mt-8 mb-3">The Role of Ceramide-3 in Retinoid Tolerance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ceramides constitute approximately 50% of the lipids in the stratum corneum — the skin's outermost barrier layer. Retinoids can temporarily deplete ceramide levels, leading to the dryness and irritation commonly associated with retinol use. By incorporating Ceramide-3 directly into the formulation, Stimulate RE replenishes barrier lipids as the retinoids work, maintaining skin comfort and enabling consistent long-term use without the need for separate barrier repair products.
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
                { name: "Rebecca", type: "Normal", concern: "Anti-ageing", age: "30–39", date: "September 2022", text: "I use this at night and my skin feels incredibly soft and smooth just after use. It also doesn't seem to dry my skin out. I would happily buy this again." },
                { name: "Valeria B", type: "Combination", concern: "Fine lines", age: "40–49", date: "August 2022", text: "It made my skin so smooth and I can see wrinkles are less and my face is more hydrated." },
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
            <h2 className="text-2xl font-light text-white mb-6">Pair with Vitamin C for the Ultimate AM/PM Protocol</h2>
            <p className="text-gray-400 text-sm font-light mb-8 max-w-xl mx-auto">
              Retinol repairs by night. Vitamin C protects by day. Together, they address all three skin cell types for visible, lasting transformation.
            </p>
            <Link to="/shop/vitamin-c-serum/" className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-8 py-3.5 rounded-full transition-all hover:bg-gray-100 shadow-lg">
              Discover Revitalise C20 (Vitamin C) <ArrowRight className="w-4 h-4" />
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
                { label: "Vitamin C Serum", to: "/shop/vitamin-c-serum/" },
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

export default RetinolCream;
