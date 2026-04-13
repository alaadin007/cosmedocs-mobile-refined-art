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
    image:
      "https://www.hsformulations.com/wp-content/uploads/2023/03/product.png",
    price: "£85.00",
    rating: 5,
    reviews: 7,
    url: "https://www.hsformulations.com/product/revitalise-c20-topical-vitamin-c-facial-serum/",
    skinType: "Normal, Oily Skin",
    concerns: "Skin ageing, uneven tone, skin spots",
  },
  {
    name: "Stimulate RE (Retinol+)",
    subtitle: "Dual Retinol (Vitamin A) Cream",
    description:
      "Our retinoid cream contains 0.5% retinol and retinyl palmitate, working together to rejuvenate the skin and provide a glowing complexion with essential hydration and nourishment.",
    image:
      "https://www.hsformulations.com/wp-content/uploads/2020/09/stimulate-retinol.png",
    price: "£65.00",
    rating: 5,
    reviews: 4,
    url: "https://www.hsformulations.com/product/retinol-stimulate-re/",
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

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-300 group/link"
                  >
                    More Detail
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Cosmedocs partners with Harley Street Formulations to bring you potent, targeted cosmeceuticals
          formulated with active ingredients at clinical concentrations. Our cosmetic doctors recommend
          these almost-prescription-grade skincare products for optimal results. From Vitamin C serums
          with 20% L-ascorbic acid to dual retinol creams, each formulation is designed for maximum
          efficacy. Bold, natural, always your way — our aesthetics is invisible art. Available for
          patients at our Harley Street clinic in London. Free shipping on orders over £50.
        </p>
      </div>
    </>
  );
};

export default Shop;
