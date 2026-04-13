import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";
import vitaminCImg from "@/assets/revitalise-c20-vitamin-c-serum.png";
import retinolImg from "@/assets/stimulate-re-retinol-cream.png";

const products = [
  {
    name: "Revitalise C20",
    subtitle: "Antioxidants Formula on Steroids",
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
  },
  {
    name: "Stimulate RE (Retinol+)",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 md:py-32">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-medium tracking-[0.2em] uppercase text-xs mb-6"
          >
            Harley Street Formulations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Targeted Active Ingredients in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Potent Concentrations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10"
          >
            Almost Prescription, Approved by Cosmetic Doctors
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://www.hsformulations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            Explore All Products
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Doctor-Recommended Formulations
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Potent cosmeceuticals recommended by our Harley Street cosmetic doctors.
              Our aesthetics is invisible art.
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
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-cyan-500/30"
              >
                {/* Image */}
                <div className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8 flex items-center justify-center h-80">
                  <img
                    src={product.image}
                    alt={`${product.name} — ${product.subtitle}`}
                    className="max-h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-cyan-500 text-slate-950 text-sm font-bold px-3 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                      {product.skinType}
                    </span>
                  </div>

                  <Link
                    to={product.url}
                    className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-300 group/link"
                  >
                    More Detail
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Cell Skin Philosophy */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3">The Foundation of Great Skin</p>
          <h2 className="text-2xl md:text-3xl font-extralight text-white mb-4">The 3-Cell Skin Philosophy</h2>
          <p className="text-slate-400 font-light max-w-2xl mx-auto mb-10">
            Every skin concern — ageing, uneven tone, texture, oil, sensitivity — traces back to three cell types. Our cosmeceuticals are formulated to target all three simultaneously.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { cell: "Keratinocytes", icon: "🛡️", desc: "Barrier strength & vitality", colour: "text-emerald-400" },
              { cell: "Melanocytes", icon: "🎨", desc: "Tone & pigment regulation", colour: "text-purple-400" },
              { cell: "Fibroblasts", icon: "⚡", desc: "Collagen, elastin & HA", colour: "text-cyan-400" },
            ].map((item) => (
              <div key={item.cell} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className={`text-sm font-medium ${item.colour}`}>{item.cell}</p>
                <p className="text-xs text-slate-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop/vitamin-c-serum/" className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-medium px-6 py-3 rounded-lg transition-colors">
              Vitamin C (AM) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop/retinol-cream/" className="inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B89040] text-slate-900 font-medium px-6 py-3 rounded-lg transition-colors">
              Retinol (PM) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
