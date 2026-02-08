import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import { ArrowRight } from 'lucide-react';

/* ─── treatment category data ─── */
interface TreatmentCategory {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  items: string[];
  accent?: string;
}

const treatmentCategories: TreatmentCategory[] = [
  {
    title: "Botox & Anti-Wrinkle",
    subtitle: "Muscle modulation & prevention",
    description: "Precision anti-wrinkle injections for dynamic lines, facial contouring, and medical conditions. Administered by expert injectors since 2007.",
    link: "/treatments/botox/",
    items: [
      "Forehead, Frown & Crow's Feet",
      "Lip Flip & Gummy Smile",
      "Masseter & Jawline Slimming",
      "Nefertiti Lift",
      "Medical Botox (Migraine, Sweating)",
    ],
  },
  {
    title: "Dermal Fillers",
    subtitle: "Volume, structure & contouring",
    description: "Hyaluronic acid dermal fillers for natural volume restoration, facial contouring, and age-reversal. Bespoke treatment plans for every face.",
    link: "/treatments/dermal-fillers/",
    items: [
      "Lip Fillers (Natural to Bold)",
      "Cheek, Chin & Jawline Filler",
      "Non-Surgical Nose Job",
      "Tear Trough & Under-Eye",
      "HA Makeover (Full Face)",
    ],
  },
  {
    title: "Skin Rejuvenation",
    subtitle: "Renewal, radiance & repair",
    description: "Medical-grade skin treatments to restore hydration, stimulate collagen, and refine texture. From bio-remodelling to collagen induction therapy.",
    link: "/treatments/skin-rejuvenation/",
    items: [
      "Profhilo",
      "Polynucleotides",
      "HydraFacial",
      "Microneedling & PRP",
      "Chemical Peels",
    ],
  },
  {
    title: "Laser Treatments",
    subtitle: "Precision light-based therapy",
    description: "Advanced laser and light-based treatments for resurfacing, pigmentation correction, hair removal, and scar reduction.",
    link: "/treatments/laser/",
    items: [
      "CO₂ Laser Resurfacing",
      "Pico Laser",
      "Laser Hair Removal",
      "Scar Reduction",
    ],
  },
  {
    title: "PDO Threads",
    subtitle: "Non-surgical lifting",
    description: "Absorbable PDO threads for tissue lifting, skin tightening, and collagen stimulation — a non-surgical alternative to traditional facelifts.",
    link: "/treatments/pdo-threads/",
    items: [
      "Thread Face Lift",
      "Non-Surgical Nose Threads",
      "Jawline Definition",
    ],
  },
  {
    title: "Medical Botox",
    subtitle: "Therapeutic applications",
    description: "Evidence-based botulinum toxin treatments for medical conditions including chronic migraines, hyperhidrosis, bruxism, and trigger-point pain.",
    link: "/treatments/botox/medical/",
    items: [
      "Migraine & Headache Relief",
      "Excessive Sweating (Hyperhidrosis)",
      "Bruxism & Teeth Grinding",
      "Trigger Point Therapy",
    ],
  },
  {
    title: "Plastic Surgery",
    subtitle: "Expert surgical procedures",
    description: "Comprehensive cosmetic surgery performed by qualified plastic surgeons. From rhinoplasty to body contouring, with the highest standards of care.",
    link: "/plastic-surgeon/",
    items: [
      "Rhinoplasty",
      "Blepharoplasty (Eyelid Surgery)",
      "Facelift Surgery",
      "Liposuction",
    ],
  },
  {
    title: "Dermatology",
    subtitle: "Medical & aesthetic skin health",
    description: "Consultant dermatologist-led skin health services for medical conditions, screening, and advanced cosmetic dermatology.",
    link: "/dermatology/",
    items: [
      "Acne & Rosacea Treatment",
      "Mole & Skin Tag Removal",
      "Psoriasis & Eczema",
      "Pigmentation Correction",
    ],
  },
];

/* ─── page component ─── */
const TreatmentsHub = () => {
  const seoData = generateSEOMetadata(
    "Aesthetic Treatments London | Cosmedocs Harley Street",
    "Explore our full range of aesthetic treatments including Botox, dermal fillers, skin rejuvenation, laser, PDO threads, plastic surgery & dermatology. Harley Street, London.",
    "/treatments"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://cosmedocs.com/#organization",
                name: "Cosmedocs",
                url: "https://cosmedocs.com/treatments/",
              },
              {
                "@type": "CollectionPage",
                "@id": "https://cosmedocs.com/treatments/",
                name: "Aesthetic Treatments",
                description: seoData.description,
                isPartOf: { "@id": "https://cosmedocs.com/#website" },
                about: {
                  "@type": "MedicalSpecialty",
                  name: "Aesthetic Medicine",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cosmedocs.com/" },
                  { "@type": "ListItem", position: 2, name: "Treatments", item: "https://cosmedocs.com/treatments/" },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          {/* Background orbs */}
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.04] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A050]/[0.03] blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#C9A050] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Treatments</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Our Aesthetics Is Invisible Art
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">
                Treatments
              </h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                From precision injectables to advanced skin science — every treatment at Cosmedocs is designed to enhance, 
                not exaggerate. Explore our complete range of aesthetic and medical procedures below.
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {["Since 2007", "Harley Street", "Doctor-Led"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" />
                    {item}
                  </span>
                ))}
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-3 mt-10">
                <Link
                  to="/prices/"
                  className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  View Price Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Treatment Categories Grid ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={cat.link}
                  className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#C9A050] transition-colors">
                        {cat.title}
                      </h2>
                      <p className="text-xs text-[#C9A050]/70 uppercase tracking-wider mt-1">
                        {cat.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#C9A050] transition-colors mt-1 flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/50 font-extralight leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Treatment items */}
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Price guide banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center"
          >
            <p className="text-xs text-[#C9A050] uppercase tracking-[0.2em] mb-3">Transparent Pricing</p>
            <p className="text-2xl sm:text-3xl font-extralight text-white mb-4">
              Complete Price Guide
            </p>
            <p className="text-sm text-white/50 font-extralight max-w-xl mx-auto mb-6">
              View our full, transparent price list across all treatment categories. 
              No hidden costs — just honest, expert aesthetic medicine.
            </p>
            <Link
              to="/prices/"
              className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              View All Prices
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Concerns section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center"
          >
            <p className="text-xs text-[#C9A050] uppercase tracking-[0.2em] mb-3">Not Sure Where to Start?</p>
            <p className="text-2xl sm:text-3xl font-extralight text-white mb-4">
              Browse by Concern
            </p>
            <p className="text-sm text-white/50 font-extralight max-w-xl mx-auto mb-6">
              Whether it's lines and wrinkles, volume loss, skin texture, or pigmentation — 
              find the right treatment pathway for your specific concern.
            </p>
            <Link
              to="/concerns/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              Explore Concerns
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* ── Hidden SEO content ── */}
        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs offers a comprehensive range of aesthetic treatments at our Harley Street clinic in London. 
            Our treatment portfolio includes anti-wrinkle injections using botulinum toxin (Botox, Azzalure, Dysport) 
            for dynamic facial lines including forehead lines, frown lines, and crow's feet. We specialise in advanced 
            facial contouring with dermal fillers including lip fillers, cheek fillers, jawline fillers, chin fillers, 
            temple fillers, tear trough fillers, and non-surgical nose jobs using hyaluronic acid. Our skin rejuvenation 
            treatments include Profhilo bio-remodelling, polynucleotide therapy, HydraFacial, microneedling with PRP 
            (platelet-rich plasma), and medical-grade chemical peels. We offer PDO thread lifts for non-surgical facial 
            lifting and CO₂ laser resurfacing for scar reduction and skin renewal. Our medical botox services treat 
            chronic migraines, hyperhidrosis (excessive sweating), bruxism (teeth grinding), and myofascial trigger 
            points. Plastic surgery services include rhinoplasty, blepharoplasty, facelift surgery, and liposuction 
            performed by qualified plastic surgeons. Our consultant dermatologists provide treatment for acne, eczema, 
            psoriasis, rosacea, mole removal, skin tag removal, and hyperpigmentation. All treatments are administered 
            by GMC-registered doctors with over 17 years of experience in aesthetic medicine. Consultations available 
            from £50, redeemable against any treatment. Located at Harley Street, London W1G.
          </p>
        </div>
      </div>
    </>
  );
};

export default TreatmentsHub;
