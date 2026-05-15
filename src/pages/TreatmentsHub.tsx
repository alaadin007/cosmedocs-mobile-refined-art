import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import { ArrowRight } from 'lucide-react';
import calfSlimmingLuxury from '@/assets/calf-slimming-luxury.jpg';
import calfLuxJpg480 from '@/assets/calf-slimming-luxury-480.jpg';
import calfLuxJpg768 from '@/assets/calf-slimming-luxury-768.jpg';
import calfLuxJpg1200 from '@/assets/calf-slimming-luxury-1200.jpg';
import calfLuxWebp480 from '@/assets/calf-slimming-luxury-480.webp';
import calfLuxWebp768 from '@/assets/calf-slimming-luxury-768.webp';
import calfLuxWebp1200 from '@/assets/calf-slimming-luxury-1200.webp';

const calfImageSet = {
  webpSrcSet: `${calfLuxWebp480} 480w, ${calfLuxWebp768} 768w, ${calfLuxWebp1200} 1200w`,
  jpgSrcSet: `${calfLuxJpg480} 480w, ${calfLuxJpg768} 768w, ${calfLuxJpg1200} 1200w`,
  fallback: calfLuxJpg480,
};

/* ─── treatment category data ─── */
interface TreatmentCategory {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  items: string[];
  accent?: string;
  image?: string;
  imageAlt?: string;
}

const treatmentCategories: TreatmentCategory[] = [
  {
    title: "Botox & Anti-Wrinkle",
    subtitle: "Muscle modulation & prevention",
    description: "Precision anti-wrinkle treatment for dynamic lines, facial contouring and prevention. Doctor-led since 2007.",
    link: "/treatments/botox/",
    image: calfSlimmingLuxury,
    imageAlt: "Sculpted calf — calf slimming Botox at Cosmedocs Harley Street",
    items: [
      "1, 2 or 3 Areas (Forehead · Frown · Crow's Feet)",
      "Anti-Wrinkle Treatment",
      "Anti-Wrinkle Injections",
      "Anti-Ageing Injections",
      "Lip Flip & Gummy Smile",
      "Bunny Lines · Mentalis · Marionette",
      "Brow Lift & Nasal Flaring",
      "Nefertiti Neck-Jaw Lift",
      "Masseter Botox (Slimming)",
      "Trapezius & Calf Slimming",
    ],
  },
  {
    title: "Dermal Fillers",
    subtitle: "Volume, structure & contouring",
    description: "Hyaluronic acid from regulated Swiss, French and US laboratories — for natural volume restoration, facial contouring and re-balancing.",
    link: "/treatments/dermal-fillers/",
    items: [
      "Lip Fillers (0.5ml · 1ml · Russian)",
      "Cheek Filler (1ml · 2ml · 4ml)",
      "Jawline & Jowl Filler",
      "Chin Filler · Profile Balance",
      "Non-Surgical Nose Job",
      "Tear Trough & Under-Eye",
      "Temple Filler",
      "Liquid Facelift (Full Face)",
      "Harley Street Injectables Hub",
    ],
  },
  {
    title: "Non-Surgical Facelift & Body Contouring",
    subtitle: "Lift · contour · redefine",
    description: "Lift the face from within and refine the body — the Endo family, Nefertiti, PDO threads and Liquid Facelift, sequenced doctor-led.",
    link: "/treatments/non-surgical-facelift/",
    items: [
      "Endolaser Fibre Lift ✦ Now featured",
      "Endolaser Body — Fat & Tightening",
      "Endolaser Brow Lift",
      "PDO Thread Face Lift",
      "Nefertiti Neck-Jaw Lift",
      "Liquid Facelift (Lift from above)",
      "Endolift London",
    ],
  },
  {
    title: "Skin Rejuvenation",
    subtitle: "Renewal, radiance & repair",
    description: "Medical-grade skin treatments to restore hydration, stimulate collagen and refine texture — from bio-remodelling to regenerative therapy.",
    link: "/treatments/skin-rejuvenation/",
    items: [
      "Polynucleotides — Signature Course (Face & Eyes)",
      "Profhilo Bio-Remodelling",
      "Sunekos · Jalupro · Lumi Eyes",
      "Exosomes",
      "PRP & Microneedling",
      "Chemical Peels (Glycolic · TCA · Salicylic)",
      "HydraFacial",
    ],
  },
  {
    title: "Laser Treatments",
    subtitle: "Precision light-based therapy",
    description: "Advanced laser and light-based treatments for resurfacing, pigmentation, hair removal and scar reduction.",
    link: "/treatments/laser/",
    items: [
      "Endolaser Fibre Lift ✦ New",
      "Pico Laser (Pigmentation · Tattoo)",
      "Laser Hair Removal — Glow & Go",
      "CO₂ Laser Resurfacing",
      "Scar Reduction",
    ],
  },
  {
    title: "Medical Botox",
    subtitle: "Therapeutic applications",
    description: "Evidence-based botulinum toxin for medical conditions — chronic migraine, hyperhidrosis, bruxism and trigger-point pain.",
    link: "/medical/",
    items: [
      "Migraine & Headache Relief",
      "Hyperhidrosis (Excessive Sweating)",
      "Bruxism & Teeth Grinding",
      "Trigger Point Therapy",
    ],
  },
  {
    title: "Plastic Surgery",
    subtitle: "Expert surgical procedures",
    description: "Cosmetic surgery performed by qualified plastic surgeons — rhinoplasty, eyelid surgery, facelift and body contouring.",
    link: "/plastic-surgeon/",
    items: [
      "Rhinoplasty",
      "Blepharoplasty (Eyelid Surgery)",
      "Facelift Surgery",
      "Liposuction",
      "Hair Transplant",
    ],
  },
  {
    title: "Dermatology",
    subtitle: "Medical & aesthetic skin health",
    description: "Consultant dermatologist-led skin health for medical conditions, screening and advanced cosmetic dermatology.",
    link: "/dermatology/",
    items: [
      "Acne & Rosacea",
      "Mole & Skin Tag Removal",
      "Psoriasis & Eczema",
      "Pigmentation & Melasma",
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

        {/* ── Featured / Signature callouts ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Endolaser — Now featured */}
            <Link
              to="/treatments/endolaser/"
              className="group relative overflow-hidden rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-black via-[#1a140a] to-black p-6 sm:p-7 hover:border-[#C9A050]/70 transition-all"
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#C9A050]/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C9A050] text-black text-[10px] font-bold uppercase tracking-[0.2em]">
                  ✦ Now Featured
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-light text-white">
                  Endolaser <span className="text-[#C9A050]">(Laser Fibre Lift)</span>
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  The only UKCA & CE-marked dual-wavelength Endolaser at Harley Street. Lifts, tightens and refines from inside the tissue — performed by the device's Lead Trainer at the Harley Street Institute.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#C9A050]">
                  Discover Endolaser <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Polynucleotides Signature Course */}
            <Link
              to="/treatments/polynucleotides/"
              className="group relative overflow-hidden rounded-2xl border border-[#C9A050]/40 bg-gradient-to-br from-[#0e0e0e] via-[#15110a] to-[#0a0a0a] p-6 sm:p-7 hover:border-[#C9A050]/70 transition-all"
            >
              <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#C9A050]/10 blur-3xl pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#C9A050]/60 text-[#C9A050] text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Signature Course
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-light text-white">
                  Polynucleotides <span className="text-[#C9A050]">— Face & Eyes</span>
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  A considered three-session protocol of DNA-level repair across the periorbital and full-face zones. Investment <span className="text-[#F0D78C] font-medium">£950</span> — doctor-led, reserved for our signature patients.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#C9A050]">
                  Discover the protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
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

                  {/* Optional gold-edge feature image — responsive picture, lazy + async-decoded */}
                  {cat.image && (
                    <div className="flex justify-center mb-5">
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-1 ring-[#C9A050]/30 shadow-[0_0_60px_-15px_rgba(201,160,80,0.45)]">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={calfImageSet.webpSrcSet}
                            sizes="(max-width: 640px) 112px, 128px"
                          />
                          <source
                            type="image/jpeg"
                            srcSet={calfImageSet.jpgSrcSet}
                            sizes="(max-width: 640px) 112px, 128px"
                          />
                          <img
                            src={calfImageSet.fallback}
                            alt={cat.imageAlt || cat.title}
                            loading="lazy"
                            decoding="async"
                            // @ts-expect-error fetchpriority is valid HTML
                            fetchpriority="low"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                          />
                        </picture>
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#C9A050]/20 pointer-events-none" />
                      </div>
                    </div>
                  )}

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

        {/* sr-only stuffing removed per visible-content SEO policy */}
      </div>
    </>
  );
};

export default TreatmentsHub;
