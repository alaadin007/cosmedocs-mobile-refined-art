import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Check, Shield, Droplets, Sun, Moon, ArrowRight, ExternalLink } from "lucide-react";
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-cyan-400 font-medium tracking-[0.2em] uppercase text-xs mb-4">Harley Street Formulations</p>
              <h1 className="text-4xl md:text-5xl font-extralight text-white mb-2">
                Revitalise <span className="font-semibold text-cyan-300">C20</span>
              </h1>
              <p className="text-lg text-slate-300 font-light mb-6">Antioxidant Formula on Steroids</p>
              
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                Power up your skin's radiance with a clinical-strength 20% L-ascorbic acid serum, enhanced with Ferulic acid, Vitamin E and Niacinamide at a stabilised pH of 3.0–3.5. This is not a cosmetic vitamin C — it's a targeted cosmeceutical formulated by Harley Street cosmetic doctors to deliver measurable results across all three essential skin cell types.
              </p>

              {/* Quick Answer Block */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-6">
                <p className="text-white font-light text-sm leading-relaxed">
                  <strong className="text-cyan-300">Quick Answer:</strong> Revitalise C20 is a doctor-formulated 20% L-ascorbic acid serum with Ferulic acid and Vitamin E at pH 3.0–3.5. It targets all three skin cell types — melanocytes for even tone, keratinocytes for barrier strength, and fibroblasts for collagen protection — at £85 for 30ml.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-white">£85.00</span>
                <span className="text-sm text-slate-400">30ml • Free shipping over £50</span>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                <span className="text-sm text-slate-400 ml-2">5.0 (7 reviews)</span>
              </div>

              <a href="https://www.hsformulations.com/product/revitalise-c20-topical-vitamin-c-facial-serum/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-medium px-8 py-3 rounded-lg transition-colors">
                Buy Now <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
              <img src={vitaminCImage} alt="Revitalise C20 Vitamin C Serum by Harley Street Formulations — 20% L-ascorbic acid clinical antioxidant serum" className="max-w-xs md:max-w-sm drop-shadow-2xl" width="400" height="500" loading="eager" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Cell Philosophy */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3">The Science Behind Great Skin</p>
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">The 3-Cell Skin Philosophy</h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto">
              Great skin starts at cell level. Vitamin C is the only antioxidant clinically proven to optimise all three essential skin cell types simultaneously.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cell: "Melanocytes", icon: "🎨", action: "Regulates pigment production", benefit: "Even skin tone, reduced dark spots and hyperpigmentation. L-ascorbic acid inhibits tyrosinase — the enzyme responsible for excess melanin production.", colour: "text-purple-400" },
              { cell: "Keratinocytes", icon: "🛡️", action: "Strengthens the skin barrier", benefit: "Resilient, hydrated skin that resists sensitivity and environmental damage. Niacinamide boosts ceramide synthesis to seal moisture in.", colour: "text-emerald-400" },
              { cell: "Fibroblasts", icon: "⚡", action: "Protects collagen & elastin", benefit: "Firmer, more elastic skin with reduced fine lines. Ferulic acid doubles the photoprotective capacity of L-ascorbic acid, shielding collagen from UV degradation.", colour: "text-cyan-400" },
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

      {/* Key Formulation Benefits */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extralight text-white mb-10 text-center">Formulation Science</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Antioxidant Power */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium text-cyan-300 mb-4 flex items-center gap-2"><Shield className="w-5 h-5" /> Maximum Antioxidant Power</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">The triple-antioxidant combination of L-ascorbic acid, Ferulic acid and Vitamin E (Tocopherol) is based on the landmark Duke University research that demonstrated:</p>
              <ul className="space-y-2">
                {["Enhanced antioxidant protection up to 8× compared to Vitamin C alone", "Increased photostability — serum remains effective even after UV exposure", "Improved penetration and absorption of active ingredients", "Superior brightening and anti-ageing benefits"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light"><Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>

            {/* Oil & Inflammation Control */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium text-cyan-300 mb-4 flex items-center gap-2"><Droplets className="w-5 h-5" /> Oil & Inflammation Control</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">Niacinamide (Vitamin B3) is integrated into the Revitalise C20 formula for multi-targeted benefits beyond antioxidant protection:</p>
              <ul className="space-y-2">
                {["Improves skin barrier function and prevents moisture loss", "Regulates sebum production and minimises pore size", "Reduces and prevents skin inflammation", "Ideal for sensitive, oily or acne-prone skin types"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-light"><Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />{item}</li>
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
                  <li>20% L-ascorbic acid</li>
                  <li>Ferulic acid</li>
                  <li>Vitamin E (Tocopherol)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-[#C9A050] tracking-wider uppercase mb-2">Supporting Ingredients</p>
                <ul className="space-y-1 text-sm text-slate-300 font-light">
                  <li>Niacinamide (Vitamin B3)</li>
                  <li>Hyaluronic acid</li>
                  <li>Panthenol (Vitamin B5)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-[#C9A050] tracking-wider uppercase mb-2">Serum Profile</p>
                <ul className="space-y-1 text-sm text-slate-300 font-light">
                  <li>pH: 3.0–3.5</li>
                  <li>Colour: Clear to slight yellow</li>
                  <li>Scent: Woody (ferulic) — fragrance-free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Vitamin C Compares */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extralight text-white mb-4 text-center">How Revitalise C20 Compares</h2>
          <p className="text-slate-400 text-sm font-light text-center mb-10 max-w-2xl mx-auto">
            We formulated Revitalise C20 to deliver clinical-grade efficacy at a fair price. Here's how it stands against the most popular Vitamin C serums in the UK.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-normal py-3 px-4">Feature</th>
                  <th className="text-center text-cyan-300 font-medium py-3 px-4">Revitalise C20</th>
                  <th className="text-center text-slate-400 font-normal py-3 px-4">SkinCeuticals C E Ferulic</th>
                  <th className="text-center text-slate-400 font-normal py-3 px-4">Medik8 C-Tetra</th>
                  <th className="text-center text-slate-400 font-normal py-3 px-4">The Ordinary 23%</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 font-light">
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
                <Sun className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-medium text-white">Morning Routine</h3>
              </div>
              <ol className="space-y-3 text-sm text-slate-300 font-light">
                <li className="flex gap-3"><span className="text-cyan-400 font-medium">1.</span> Cleanse your face</li>
                <li className="flex gap-3"><span className="text-cyan-400 font-medium">2.</span> Place 4–5 drops of Revitalise C20 into your palm</li>
                <li className="flex gap-3"><span className="text-cyan-400 font-medium">3.</span> Smooth evenly over face and neck</li>
                <li className="flex gap-3"><span className="text-cyan-400 font-medium">4.</span> Allow to penetrate before applying SPF</li>
              </ol>
              <p className="text-xs text-slate-500 mt-4">Pro tip: Reapply in the afternoon to build an antioxidant reservoir for enhanced protection.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-medium text-white">Evening Routine</h3>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
                In the evening, switch to <Link to="/shop/retinol-cream/" className="text-cyan-400 hover:text-cyan-300 underline">Stimulate RE Retinol+</Link> for nighttime cell renewal. The AM/PM protocol ensures your skin receives both antioxidant protection and active repair across all three cell types.
              </p>
              <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                <img src={retinolImage} alt="Stimulate RE Retinol+ Cream" className="w-16 h-20 object-contain" loading="lazy" />
                <div>
                  <p className="text-white text-sm font-medium">Stimulate RE (Retinol+)</p>
                  <p className="text-slate-400 text-xs">Dual Vitamin A Cream • £65</p>
                  <Link to="/shop/retinol-cream/" className="text-cyan-400 text-xs hover:underline">View Details →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="bg-slate-950 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extralight text-white mb-6 text-center">The Clinical Evidence for Vitamin C</h2>
          <div className="prose prose-invert prose-sm max-w-none font-light">
            <p className="text-slate-300 leading-relaxed">
              L-ascorbic acid is the most extensively studied topical antioxidant in dermatological research. The majority of visible facial ageing is attributable to photoageing (cumulative UV damage) and repetitive muscular movements (dynamic expressions). Antioxidants neutralise the free radicals that form due to sunlight, pollution, smoking and normal biological ageing.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The synergistic combination of L-ascorbic acid with Ferulic acid and Vitamin E was first demonstrated by Pinnell et al. (2005), showing that this triple formulation doubled the photoprotective capacity of Vitamin C alone. At pH 3.0–3.5, L-ascorbic acid remains in its protonated form — the only form capable of penetrating the stratum corneum and reaching the viable epidermis where melanocytes, keratinocytes and fibroblasts reside.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              More recent studies have revealed that reapplying vitamin C serum in the afternoon helps build a high concentration of antioxidant in the skin, creating a reservoir for sustained protection against environmental aggressors. This finding is particularly relevant for patients in urban environments who face continuous exposure to pollution and blue light from screens.
            </p>
            <h3 className="text-white text-lg font-medium mt-8 mb-3">Why pH Matters in Vitamin C Serums</h3>
            <p className="text-slate-300 leading-relaxed">
              The efficacy of L-ascorbic acid is entirely dependent on formulation pH. At pH levels above 4.0, L-ascorbic acid becomes ionised and cannot penetrate the skin's acid mantle. Many consumer-grade vitamin C products fail to achieve adequate penetration because they prioritise cosmetic elegance over clinical efficacy. Revitalise C20 is stabilised at pH 3.0–3.5 — the optimal range identified in peer-reviewed dermatological research for maximum bioavailability.
            </p>
            <h3 className="text-white text-lg font-medium mt-8 mb-3">Vitamin C for Sensitised vs Sensitive Skin</h3>
            <p className="text-slate-300 leading-relaxed">
              It's important to distinguish between sensitised skin (an acquired condition caused by a damaged barrier) and genuinely sensitive skin (an inherent tendency to react). Vitamin C with Niacinamide actively repairs a damaged skin barrier by boosting ceramide synthesis in keratinocytes, making it ideal for sensitised skin. A slight tingling sensation on first application is normal and indicates active ingredient penetration — this typically subsides within the first week of use.
            </p>
          </div>
        </div>
      </section>

      {/* Product Certifications */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Silicone-free", "Nut-free", "Cruelty-free", "Gluten-free", "Soy-free", "Alcohol-free", "Oil-free", "Vegan"].map((cert) => (
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
              { name: "Christina", type: "Oily", concern: "Anti-ageing", age: "30–39", date: "April 2023", text: "My new holy grail serum! I have been using this serum for over a month now and I can safely say that it is by far the most effective vitamin C serum out there! Love the fact how lightweight and non-greasy this serum is — it sinks into my skin really quickly. I have also paired it with their retinol cream for my nighttime skincare routine. Obsessed? Yes." },
              { name: "D", type: "Normal", concern: "Uneven tone", age: "40–49", date: "August 2022", text: "Have been using this product for a number of years now — it's very easy to apply and has become a solid part of my morning routine. I think it's great for evening out skin tone and combating the effects of too much sun. I often get compliments on my skin. Planning on making this a permanent part of my skincare set up." },
            ].map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs text-slate-500 ml-2">{review.date}</span>
                </div>
                <p className="text-white text-sm font-medium mb-1">{review.name}</p>
                <p className="text-xs text-slate-500 mb-3">Skin: {review.type} • Concern: {review.concern} • Age: {review.age}</p>
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
          <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3">Complete Your Routine</p>
          <h2 className="text-2xl font-extralight text-white mb-6">Pair with Retinol for the Ultimate AM/PM Protocol</h2>
          <p className="text-slate-400 text-sm font-light mb-8 max-w-xl mx-auto">
            Vitamin C protects by day. Retinol repairs by night. Together, they address all three skin cell types for comprehensive skin transformation.
          </p>
          <Link to="/shop/retinol-cream/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-light px-8 py-3 rounded-lg transition-colors border border-white/10">
            Discover Stimulate RE (Retinol+) <ArrowRight className="w-4 h-4" />
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
              { label: "Retinol Cream", to: "/shop/retinol-cream/" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-slate-400 hover:text-cyan-400 font-light border border-white/10 px-4 py-2 rounded-full transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VitaminCSerum;
