import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Check, Shield, Moon, Sun, ArrowRight, ExternalLink, Zap } from "lucide-react";
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[#C9A050] font-medium tracking-[0.2em] uppercase text-xs mb-4">Harley Street Formulations</p>
              <h1 className="text-4xl md:text-5xl font-extralight text-white mb-2">
                Stimulate <span className="font-semibold text-[#C9A050]">RE</span>
              </h1>
              <p className="text-lg text-slate-300 font-light mb-6">Dual Retinol (Vitamin A) Cream</p>

              <p className="text-slate-300 font-light leading-relaxed mb-6">
                A precision-engineered dual retinoid cream combining 0.5% Retinol with Retinyl Palmitate in a hydrating base of Hyaluronic acid and Ceramide-3. Formulated by Harley Street cosmetic doctors for nighttime cellular renewal — targeting fibroblasts, keratinocytes and melanocytes to reverse the visible signs of ageing from the inside out.
              </p>

              {/* Quick Answer Block */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-6">
                <p className="text-white font-light text-sm leading-relaxed">
                  <strong className="text-[#C9A050]">Quick Answer:</strong> Stimulate RE is a dual retinoid cream with 0.5% Retinol and Retinyl Palmitate that stimulates collagen production in fibroblasts, accelerates cell turnover in keratinocytes, and regulates pigmentation in melanocytes — all in a hydrating, non-drying formula at £65 for 30ml.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-white">£65.00</span>
                <span className="text-sm text-slate-400">30ml • Free shipping over £50</span>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                <span className="text-sm text-slate-400 ml-2">5.0 (4 reviews)</span>
              </div>

              <a href="https://www.hsformulations.com/product/retinol-stimulate-re/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B89040] text-slate-900 font-medium px-8 py-3 rounded-lg transition-colors">
                Buy Now <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
              <img src={retinolImage} alt="Stimulate RE Dual Retinol Cream by Harley Street Formulations — 0.5% Retinol and Retinyl Palmitate" className="max-w-xs md:max-w-sm drop-shadow-2xl" width="400" height="500" loading="eager" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Cell Philosophy — Retinol Focus */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3">Cell-Level Rejuvenation</p>
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">How Retinol Activates Your Skin Cells</h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto">
              Retinol (Vitamin A) is the gold standard in anti-ageing dermatology. It works by binding to retinoid receptors on each of the three essential skin cell types, triggering measurable cellular renewal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cell: "Fibroblasts", icon: "⚡", action: "Stimulates collagen & elastin", benefit: "Retinol activates fibroblast proliferation, directly increasing production of collagen type I, elastin fibres and endogenous hyaluronic acid. This restores dermal volume lost through chronological ageing and photoageing.", colour: "text-[#C9A050]" },
              { cell: "Keratinocytes", icon: "🛡️", action: "Accelerates cell turnover", benefit: "Retinoids normalise the desquamation cycle, promoting faster shedding of damaged surface cells and revealing smoother, more refined skin underneath. Combined with Ceramide-3, the barrier remains intact.", colour: "text-emerald-400" },
              { cell: "Melanocytes", icon: "🎨", action: "Regulates pigmentation", benefit: "Retinol inhibits melanosome transfer between melanocytes and keratinocytes, gradually fading age spots, sun damage and post-inflammatory hyperpigmentation for a more even complexion.", colour: "text-purple-400" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className={`text-lg font-medium ${item.colour} mb-1`}>{item.cell}</h3>
                <p className="text-white text-sm font-medium mb-2">{item.action}</p>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Retinoid Science */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extralight text-white mb-10 text-center">Dual Retinoid Formulation</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium text-[#C9A050] mb-4 flex items-center gap-2"><Zap className="w-5 h-5" /> 0.5% Retinol</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">The clinically effective workhorse. Retinol penetrates deeply into the dermis where it converts to retinoic acid — the active form that directly stimulates fibroblasts:</p>
              <ul className="space-y-2">
                {["Stimulates collagen and elastin synthesis", "Accelerates cell turnover for smoother texture", "Reduces fine lines, wrinkles and pore size", "0.5% is the optimal strength for daily use without prescription"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light"><Check className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium text-[#C9A050] mb-4 flex items-center gap-2"><Shield className="w-5 h-5" /> 1.0% Retinyl Palmitate</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">A gentler retinoid ester that works at the skin's surface while retinol works deeper:</p>
              <ul className="space-y-2">
                {["Improves surface texture without deep irritation", "Provides additional antioxidant protection", "Enhances overall retinoid efficacy synergistically", "Better tolerated by sensitive or retinol-naive skin"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light"><Check className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ingredients Table */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-lg font-medium text-white mb-6">Complete Formulation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-[#C9A050] tracking-wider uppercase mb-2">Active Ingredients</p>
                <ul className="space-y-1 text-sm text-slate-300 font-light">
                  <li>0.5% Retinol</li>
                  <li>1.0% Retinyl Palmitate</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-[#C9A050] tracking-wider uppercase mb-2">Supporting Ingredients</p>
                <ul className="space-y-1 text-sm text-slate-300 font-light">
                  <li>Sodium Hyaluronate</li>
                  <li>Ceramide-3</li>
                  <li>Squalane</li>
                  <li>Tocopherol (Vitamin E)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-[#C9A050] tracking-wider uppercase mb-2">Cream Profile</p>
                <ul className="space-y-1 text-sm text-slate-300 font-light">
                  <li>pH: 3.0–3.5</li>
                  <li>Texture: Lightweight cream</li>
                  <li>Fragrance-free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extralight text-white mb-4 text-center">How Stimulate RE Compares</h2>
          <p className="text-slate-400 text-sm font-light text-center mb-10 max-w-2xl mx-auto">
            A dual retinoid formulation with built-in hydration — no need for separate moisturisers or buffer creams.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-normal py-3 px-4">Feature</th>
                  <th className="text-center text-[#C9A050] font-medium py-3 px-4">Stimulate RE</th>
                  <th className="text-center text-slate-400 font-normal py-3 px-4">Medik8 Crystal Retinal</th>
                  <th className="text-center text-slate-400 font-normal py-3 px-4">The Ordinary Retinol 0.5%</th>
                  <th className="text-center text-slate-400 font-normal py-3 px-4">Dermatica Rx</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 font-light">
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
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-slate-400">{row[0]}</td>
                    <td className="py-3 px-4 text-center font-medium text-white">{row[1]}</td>
                    <td className="py-3 px-4 text-center">{row[2]}</td>
                    <td className="py-3 px-4 text-center">{row[3]}</td>
                    <td className="py-3 px-4 text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extralight text-white mb-10 text-center">How to Apply</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-medium text-white">Evening Routine</h3>
              </div>
              <ol className="space-y-3 text-sm text-slate-300 font-light">
                <li className="flex gap-3"><span className="text-[#C9A050] font-medium">1.</span> Cleanse your face thoroughly</li>
                <li className="flex gap-3"><span className="text-[#C9A050] font-medium">2.</span> Apply 1–2 pumps of Stimulate RE</li>
                <li className="flex gap-3"><span className="text-[#C9A050] font-medium">3.</span> Massage a thin layer over face, avoiding the eye area initially</li>
                <li className="flex gap-3"><span className="text-[#C9A050] font-medium">4.</span> Allow to dry — it hydrates as it exfoliates</li>
              </ol>
              <p className="text-xs text-slate-500 mt-4">Start with 1–2 times per week. Gradually increase to nightly use as tolerated. Store in a cool place.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-medium text-white">Morning Partner</h3>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
                In the morning, switch to <Link to="/shop/vitamin-c-serum/" className="text-cyan-400 hover:text-cyan-300 underline">Revitalise C20 Vitamin C Serum</Link> for daytime antioxidant protection. The AM/PM protocol ensures 24-hour cellular support.
              </p>
              <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                <img src={vitaminCImage} alt="Revitalise C20 Vitamin C Serum" className="w-16 h-20 object-contain" loading="lazy" />
                <div>
                  <p className="text-white text-sm font-medium">Revitalise C20</p>
                  <p className="text-slate-400 text-xs">20% Vitamin C Serum • £85</p>
                  <Link to="/shop/vitamin-c-serum/" className="text-cyan-400 text-xs hover:underline">View Details →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extralight text-white mb-6 text-center">The Clinical Evidence for Retinoids</h2>
          <div className="prose prose-invert prose-sm max-w-none font-light">
            <p className="text-slate-300 leading-relaxed">
              Retinoids are the most evidence-based topical anti-ageing ingredients in dermatology. Over 50 years of clinical research demonstrates their ability to reverse both intrinsic and extrinsic ageing at the cellular level. Retinol binds to nuclear retinoic acid receptors (RARs) on fibroblasts, keratinocytes and melanocytes, modulating gene expression to increase collagen synthesis, accelerate cell turnover and regulate pigmentation.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The dual retinoid approach in Stimulate RE combines the deep dermal penetration of retinol with the surface-level benefits of retinyl palmitate. Clinical studies show that 0.5% retinol produces significant improvement in fine lines and photodamage within 12 weeks, with continued improvement over 12 months of use. Retinyl palmitate provides complementary surface renewal with reduced irritation potential.
            </p>
            <h3 className="text-white text-lg font-medium mt-8 mb-3">Why Hydration Matters in Retinoid Formulation</h3>
            <p className="text-slate-300 leading-relaxed">
              The primary reason patients discontinue retinoid use is dryness and irritation. Stimulate RE addresses this with a built-in hydrating complex of Hyaluronic acid (humectant), Ceramide-3 (barrier lipid), Squalane (emollient) and Glycerin. This eliminates the need for a separate buffer cream and ensures the retinoids can work continuously without compromising the skin barrier.
            </p>
            <h3 className="text-white text-lg font-medium mt-8 mb-3">Retinol for Breakouts and Oil Control</h3>
            <p className="text-slate-300 leading-relaxed">
              Beyond anti-ageing, retinoids normalise sebaceous gland activity and prevent comedone formation. By accelerating keratinocyte turnover, retinol prevents the build-up of dead cells that clog pores — making it beneficial for acne-prone skin as well as mature skin. This dual action on both ageing and congestion makes Stimulate RE suitable for a broad range of skin concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Nut-free", "Cruelty-free", "Gluten-free", "Soy-free", "Alcohol-free", "Vegan", "Fragrance-free"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-sm text-slate-400 font-light">
                <Check className="w-4 h-4 text-emerald-400" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extralight text-white mb-10 text-center">Patient Reviews</h2>
          <div className="space-y-6">
            {[
              { name: "Rebecca", date: "September 2022", text: "I use this at night and my skin feels incredibly soft and smooth just after use. It also doesn't seem to dry my skin out. I would happily buy this again." },
              { name: "Valeria B", date: "August 2022", text: "It made my skin so smooth and I can see wrinkles are less and my face is more hydrated." },
            ].map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs text-slate-500 ml-2">{review.date}</span>
                </div>
                <p className="text-white text-sm font-medium mb-2">{review.name}</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extralight text-white mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 group">
                <summary className="text-white text-sm font-medium cursor-pointer list-none flex justify-between items-center">
                  {faq.name}
                  <ArrowRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-300 text-sm font-light leading-relaxed mt-3">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell CTA */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-cyan-400 tracking-[0.2em] uppercase text-xs mb-3">Complete Your Routine</p>
          <h2 className="text-2xl font-extralight text-white mb-6">Pair with Vitamin C for the Ultimate AM/PM Protocol</h2>
          <p className="text-slate-400 text-sm font-light mb-8 max-w-xl mx-auto">
            Retinol repairs by night. Vitamin C protects by day. Together, they address all three skin cell types for visible, lasting transformation.
          </p>
          <Link to="/shop/vitamin-c-serum/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-light px-8 py-3 rounded-lg transition-colors border border-white/10">
            Discover Revitalise C20 (Vitamin C) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-slate-900 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-sm text-slate-500 tracking-wider uppercase mb-4">Related Treatments</h3>
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
              <Link key={link.to} to={link.to} className="text-sm text-slate-400 hover:text-[#C9A050] font-light border border-white/10 px-4 py-2 rounded-full transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RetinolCream;
