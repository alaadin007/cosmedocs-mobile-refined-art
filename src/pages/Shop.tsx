import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star, Shield, Droplets, Sun, Moon, Beaker, Sparkles, FlaskConical, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ExpandableSection from "@/components/ui/expandable-section";
import Breadcrumb from "@/components/Breadcrumb";
import vitaminCImg from "@/assets/revitalise-c20-vitamin-c-serum.png";
import retinolImg from "@/assets/stimulate-re-retinol-cream.png";

const products = [
  {
    name: "Revitalise C20",
    subtitle: "Antioxidant Formula on Steroids",
    description:
      "Power up your skin's radiance with 20% L-ascorbic acid, Ferulic acid, and Vitamin E at a low pH. This clinical formula guarantees serum penetration, antioxidant efficacy and stability.",
    image: vitaminCImg,
    price: "£85.00",
    rating: 5,
    reviews: 7,
    url: "/shop/vitamin-c-serum/",
    external: "https://www.hsformulations.com/product/revitalise-c20-topical-vitamin-c-facial-serum/",
    skinType: "Normal, Oily Skin",
    concerns: "Skin ageing, uneven tone, skin spots",
    routine: "AM",
    accent: "amber",
    highlights: ["20% L-Ascorbic Acid", "Ferulic Acid + Vit E", "pH 3.0–3.5", "Niacinamide"],
  },
  {
    name: "Stimulate RE",
    nameAccent: "Retinol+",
    subtitle: "Dual Retinol (Vitamin A) Cream",
    description:
      "Our retinoid cream contains 0.5% retinol and retinyl palmitate, working together to rejuvenate the skin and provide a glowing complexion with essential hydration and nourishment.",
    image: retinolImg,
    price: "£65.00",
    rating: 5,
    reviews: 4,
    url: "/shop/retinol-cream/",
    external: "https://www.hsformulations.com/product/retinol-stimulate-re/",
    skinType: "Dry, Normal, Oily Skin",
    concerns: "Skin ageing, age spots, sun damage, fine lines & wrinkles",
    routine: "PM",
    accent: "violet",
    highlights: ["0.5% Retinol", "Retinyl Palmitate", "Hyaluronic Acid", "Niacinamide"],
  },
];

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop Cosmeceuticals | Potent Targeted Skincare | Cosmedocs</title>
        <meta
          name="description"
          content="Targeted active ingredients in potent concentrations. Almost prescription skincare approved by cosmetic doctors. Shop Vitamin C serums, retinol creams and more."
        />
        <link rel="canonical" href="https://www.cosmedocs.com/shop/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Cosmedocs Shop — Potent Cosmeceuticals",
            description:
              "Targeted active ingredients in potent concentrations, approved by cosmetic doctors.",
            url: "https://www.cosmedocs.com/shop/",
            publisher: {
              "@type": "Organization",
              name: "Cosmedocs",
              url: "https://www.cosmedocs.com",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <Breadcrumb items={[]} currentPage="Shop" />
        </div>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden pb-16 pt-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-amber-600 font-medium tracking-[0.2em] uppercase text-xs mb-4">
              Harley Street Formulations
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-[1.1]">
              Targeted Actives in{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-violet-600">
                Potent Concentrations
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500 font-light max-w-2xl mx-auto mb-6">
              Almost prescription. Doctor-formulated. Cosmeceuticals built on the 3-Cell Skin Philosophy — targeting the three cell types that control everything your skin does.
            </motion.p>

            {/* Trust row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 uppercase tracking-wider mb-10">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Doctor Formulated</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Harley Street</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Vegan & Fragrance Free</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> 1M+ Treatments</span>
            </motion.div>

            <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              href="https://www.hsformulations.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-gray-900/20">
              Explore All Products <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PRODUCTS
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-amber-600 tracking-[0.2em] uppercase text-xs mb-2">Our Cosmeceuticals</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
                The AM/PM Protocol
              </h2>
              <p className="text-gray-500 font-light max-w-xl mx-auto">
                Two products. Two routines. Total skin cell coverage. Vitamin C protects by day; Retinol rebuilds by night.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-amber-300/50"
                >
                  {/* Image */}
                  <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 p-8 flex items-center justify-center h-80">
                    <img
                      src={product.image}
                      alt={`${product.name} — ${product.subtitle}`}
                      className="max-h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      {product.routine === "AM" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-violet-400" />}
                      {product.routine} Routine
                    </span>
                    <span className="absolute top-4 right-4 bg-white text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                      {product.price}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <h3 className="text-xl font-light text-gray-900 mb-0.5">
                      {product.name} {product.nameAccent && <span className="font-semibold text-violet-600">{product.nameAccent}</span>}
                    </h3>
                    <p className="text-sm text-amber-600 font-medium mb-3">{product.subtitle}</p>
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-5">{product.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.highlights.map((h) => (
                        <span key={h} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <Link to={product.url}
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a href={product.external} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
                        Buy <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            3-CELL SKIN PHILOSOPHY — Full Education
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-amber-600 tracking-[0.2em] uppercase text-xs mb-2">The Science Behind Our Formulations</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                The 3-Cell Skin Philosophy
              </h2>
              <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                Every skin concern you experience — ageing, dullness, uneven tone, oiliness, sensitivity — traces back to just three cell types living in your skin. Understanding these cells is the first step to transforming your skin intelligently, not blindly.
              </p>
            </div>

            {/* Cell Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Keratinocytes */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-emerald-50/60 border border-emerald-200/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Keratinocytes</h3>
                <p className="text-emerald-600 text-xs font-medium uppercase tracking-wider mb-3">The Barrier Builders</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Making up 90% of your epidermis, these cells form the physical barrier between your body and the environment. They produce keratin, regulate moisture loss, and determine how resilient your skin feels day to day.
                </p>
              </motion.div>

              {/* Melanocytes */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-violet-50/60 border border-violet-200/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Melanocytes</h3>
                <p className="text-violet-600 text-xs font-medium uppercase tracking-wider mb-3">The Tone Regulators</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Nestled in the basal layer, melanocytes produce melanin — the pigment responsible for skin tone, dark spots, and sun protection. When over-stimulated, they cause hyperpigmentation; when regulated, they deliver a luminous, even complexion.
                </p>
              </motion.div>

              {/* Fibroblasts */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-amber-50/60 border border-amber-200/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Fibroblasts</h3>
                <p className="text-amber-600 text-xs font-medium uppercase tracking-wider mb-3">The Youth Engineers</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Deep in the dermis, fibroblasts manufacture collagen, elastin, and hyaluronic acid — the structural scaffolding that keeps skin firm, bouncy, and youthful. Their decline is the primary reason skin ages.
                </p>
              </motion.div>
            </div>

            {/* Why It Matters */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Does This Matter for Your Skincare?</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Most skincare products target surface symptoms — a brightening serum here, a moisturiser there. But symptoms are just signals from cells under stress. If your skin is dull, it's not because you need a "glow product" — it's because your melanocytes are overproducing pigment or your keratinocytes aren't turning over efficiently.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The 3-Cell Philosophy flips conventional skincare on its head: instead of chasing trends, you treat the cellular root cause. Our two cosmeceuticals — Revitalise C20 (AM) and Retinol+ (PM) — are specifically formulated to address all three cell types in a single, clinically coherent routine.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium text-sm mb-1">Morning — Vitamin C</p>
                    <p className="text-gray-500 text-xs font-light">Antioxidant shield. Melanocyte regulation. Collagen preservation via free-radical neutralisation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Moon className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium text-sm mb-1">Evening — Retinol</p>
                    <p className="text-gray-500 text-xs font-light">Accelerated cell turnover. Fibroblast stimulation. Keratinocyte renewal and barrier strengthening.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep-Dive Expandable Sections */}
            <div className="space-y-4">
              <ExpandableSection
                preview={<h3 className="text-lg font-semibold text-gray-900">Keratinocytes: Your Skin's First Line of Defence</h3>}
                label="Read more about keratinocytes"
                collapseLabel="Collapse"
              >
                <div className="space-y-4 text-gray-600 font-light leading-relaxed text-sm">
                  <p>
                    Keratinocytes are the workhorses of the epidermis. Born in the basal layer, they migrate upward over roughly 28 days, gradually flattening and filling with keratin — a tough, fibrous protein that creates the waterproof shield we call the stratum corneum. This migration is called <strong className="text-gray-900 font-medium">epidermal turnover</strong>, and it slows significantly after age 30, leading to dullness, roughness, and increased sensitivity.
                  </p>
                  <p>
                    When keratinocyte turnover stalls, dead cells accumulate on the surface, trapping oil and bacteria (leading to breakouts) while creating a rough, uneven texture. Products that accelerate turnover — like retinoids — essentially tell keratinocytes to move faster, shedding dead cells more efficiently and revealing fresher skin beneath.
                  </p>
                  <p>
                    Vitamin C supports keratinocytes differently: it strengthens their antioxidant defences and promotes ceramide synthesis (the lipid mortar between cells), which is why Revitalise C20 improves barrier function even though it's primarily known as a "brightening" ingredient.
                  </p>
                  <h4 className="text-gray-900 font-medium text-base mt-4">How Our Products Support Keratinocytes</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Retinol+:</strong> Directly accelerates keratinocyte turnover, promoting faster cell migration and smoother texture</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Vitamin C:</strong> Boosts ceramide production for a stronger, more resilient moisture barrier</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Niacinamide (in both):</strong> Regulates sebum production and reduces transepidermal water loss</li>
                  </ul>
                </div>
              </ExpandableSection>

              <ExpandableSection
                preview={<h3 className="text-lg font-semibold text-gray-900">Melanocytes: The Key to Even, Luminous Skin Tone</h3>}
                label="Read more about melanocytes"
                collapseLabel="Collapse"
              >
                <div className="space-y-4 text-gray-600 font-light leading-relaxed text-sm">
                  <p>
                    Melanocytes sit in the basal layer of the epidermis and produce melanin via an enzyme called <strong className="text-gray-900 font-medium">tyrosinase</strong>. Everyone has roughly the same number of melanocytes — what differs between skin tones is how much melanin each cell produces and how it's distributed to surrounding keratinocytes.
                  </p>
                  <p>
                    Hyperpigmentation — including sun spots, melasma, and post-inflammatory marks — occurs when melanocytes overproduce melanin in localised clusters. UV radiation, hormonal changes, and inflammation all trigger excess tyrosinase activity. The result: uneven tone, dark patches, and what many patients describe as a "tired" or "aged" appearance, even without wrinkles.
                  </p>
                  <p>
                    Vitamin C is one of the most effective and evidence-based <strong className="text-gray-900 font-medium">tyrosinase inhibitors</strong> available without prescription. At 20% concentration (as in Revitalise C20), it interrupts melanin synthesis at the enzymatic level — not just masking dark spots but preventing their formation. Combined with Ferulic acid, which stabilises Vitamin C and doubles its photoprotective capacity, the effect is cumulative and progressive.
                  </p>
                  <h4 className="text-gray-900 font-medium text-base mt-4">How Our Products Support Melanocytes</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Vitamin C:</strong> Inhibits tyrosinase, reducing excess melanin production for brighter, even tone</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Retinol+:</strong> Disperses existing melanin clusters and accelerates turnover of pigmented cells</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Ferulic Acid:</strong> Doubles UV defence, reducing the trigger that causes melanocyte overactivity</li>
                  </ul>
                </div>
              </ExpandableSection>

              <ExpandableSection
                preview={<h3 className="text-lg font-semibold text-gray-900">Fibroblasts: The Architects of Youthful, Firm Skin</h3>}
                label="Read more about fibroblasts"
                collapseLabel="Collapse"
              >
                <div className="space-y-4 text-gray-600 font-light leading-relaxed text-sm">
                  <p>
                    Fibroblasts reside in the dermis — the structural layer beneath the epidermis — and are responsible for producing <strong className="text-gray-900 font-medium">collagen</strong> (firmness), <strong className="text-gray-900 font-medium">elastin</strong> (bounce), and <strong className="text-gray-900 font-medium">hyaluronic acid</strong> (hydration). Together, these three molecules form the extracellular matrix — the scaffolding that gives skin its youthful volume and resilience.
                  </p>
                  <p>
                    After age 25, fibroblast activity declines by approximately 1% per year. By 50, your skin is producing roughly 25% less collagen than it did at 25. UV exposure, smoking, and poor nutrition accelerate this decline through a process called <strong className="text-gray-900 font-medium">matrix metalloproteinase (MMP) activation</strong> — enzymes that actively break down existing collagen.
                  </p>
                  <p>
                    This is where the AM/PM protocol becomes critical. Vitamin C in the morning neutralises the free radicals that trigger MMP activity, <em>protecting</em> existing collagen. Retinol at night directly stimulates fibroblasts to produce new collagen, <em>rebuilding</em> what's been lost. Neither product alone addresses the full cycle — together, they create a closed loop of protection and renewal.
                  </p>
                  <h4 className="text-gray-900 font-medium text-base mt-4">How Our Products Support Fibroblasts</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Retinol+:</strong> Directly stimulates fibroblast collagen and elastin production via retinoic acid receptor activation</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Vitamin C:</strong> Essential cofactor for collagen synthesis; neutralises MMP-activating free radicals</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> <strong className="text-gray-700">Vitamin E:</strong> Synergises with Vitamin C for enhanced antioxidant defence in the dermal layer</li>
                  </ul>
                </div>
              </ExpandableSection>

              <ExpandableSection
                preview={<h3 className="text-lg font-semibold text-gray-900">The AM/PM Protocol: Why Both Products Together</h3>}
                label="Read more about the AM/PM routine"
                collapseLabel="Collapse"
              >
                <div className="space-y-4 text-gray-600 font-light leading-relaxed text-sm">
                  <p>
                    Using only Vitamin C or only Retinol is like breathing in but never breathing out. Each addresses half the equation:
                  </p>
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                    <p className="text-gray-700 font-medium text-sm mb-2">☀️ Morning — Revitalise C20 (Vitamin C)</p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Antioxidant shield against UV-generated free radicals</li>
                      <li>• Inhibits tyrosinase to prevent new pigmentation</li>
                      <li>• Preserves existing collagen by blocking MMPs</li>
                      <li>• Strengthens keratinocyte barrier via ceramide synthesis</li>
                    </ul>
                  </div>
                  <div className="bg-violet-50 rounded-xl p-5 border border-violet-200/50">
                    <p className="text-gray-700 font-medium text-sm mb-2">🌙 Evening — Retinol+ (Vitamin A)</p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Stimulates fibroblasts to produce new collagen and elastin</li>
                      <li>• Accelerates keratinocyte turnover for smoother texture</li>
                      <li>• Disperses melanin clusters for fade of existing dark spots</li>
                      <li>• Regulates sebum and pore appearance</li>
                    </ul>
                  </div>
                  <p>
                    The result is a <strong className="text-gray-900 font-medium">closed loop</strong>: protection during the day, reconstruction at night. Every 24-hour cycle, all three cell types receive targeted support. This isn't a marketing concept — it's how dermatological science recommends approaching skin health at the cellular level.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Link to="/blog/vitamin-c-vs-retinol/" className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors">
                      Read: Vitamin C vs Retinol Deep Dive <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link to="/blog/three-cell-philosophy/" className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm hover:text-violet-700 transition-colors">
                      Read: The 3-Cell Philosophy Explained <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CELL × PRODUCT MATRIX
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-light text-gray-900 mb-3">How Each Product Targets Each Cell</h2>
              <p className="text-gray-500 font-light text-sm">A quick reference for why both products work better together.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left p-4 font-medium text-gray-900">Cell Type</th>
                    <th className="text-left p-4 font-medium text-amber-600">
                      <span className="flex items-center gap-1.5"><Sun className="w-4 h-4" /> Vitamin C (AM)</span>
                    </th>
                    <th className="text-left p-4 font-medium text-violet-600">
                      <span className="flex items-center gap-1.5"><Moon className="w-4 h-4" /> Retinol+ (PM)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 font-light">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">
                      <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-500" /> Keratinocytes</span>
                    </td>
                    <td className="p-4">Ceramide synthesis, barrier reinforcement</td>
                    <td className="p-4">Accelerated turnover, fresh cell exposure</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">
                      <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-violet-500" /> Melanocytes</span>
                    </td>
                    <td className="p-4">Tyrosinase inhibition, prevents new spots</td>
                    <td className="p-4">Melanin dispersal, fades existing marks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-900">
                      <span className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-amber-500" /> Fibroblasts</span>
                    </td>
                    <td className="p-4">MMP neutralisation, collagen preservation</td>
                    <td className="p-4">Direct collagen + elastin stimulation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mb-3">Our Aesthetics Is Invisible Art</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Start With the Foundation
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Great skin isn't built on one product or one treatment. It's built on understanding what your cells need — and giving it to them consistently, morning and night. Bold. Natural. Always your way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/shop/vitamin-c-serum/"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-gray-900/20">
                <Sun className="w-4 h-4 text-amber-400" /> Vitamin C Serum
              </Link>
              <Link to="/shop/retinol-cream/"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all">
                <Moon className="w-4 h-4" /> Retinol+ Cream
              </Link>
            </div>
            <div className="mt-8">
              <Link to="/blog/why-ph-matters-vitamin-c/" className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors inline-flex items-center gap-1.5">
                Read: Why pH Matters in Vitamin C Serums <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;