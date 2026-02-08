import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MapPin, Award, Star, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Breadcrumb from '@/components/Breadcrumb';

// Featured transformations with captions
const featuredTransformations = [
  {
    src: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
    alt: "Lip enhancement before and after showing natural volume restoration",
    treatment: "Lip Enhancement",
    caption: "Subtle volume restoration — enhancing natural lip shape without overcorrection."
  },
  {
    src: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png",
    alt: "Non-surgical rhinoplasty before and after showing dorsal hump correction",
    treatment: "Nose Reshaping",
    caption: "Dorsal hump camouflage and bridge refinement using hyaluronic acid filler."
  },
  {
    src: "/lovable-uploads/cbb65a65-f2dc-4d3b-a5ae-7f2596f129f4.png",
    alt: "Facial contouring before and after showing jawline definition",
    treatment: "Facial Contouring",
    caption: "Sculpted definition along the jawline — balanced, natural, never overdone."
  },
  {
    src: "/lovable-uploads/04ac4a20-e938-4966-8d5b-cdba7b58908f.png",
    alt: "Skin rejuvenation before and after showing improved texture and radiance",
    treatment: "Skin Rejuvenation",
    caption: "Visible improvement in skin quality, texture, and natural radiance."
  }
];

// Gallery categories
const galleryCategories = [
  {
    id: "botox",
    title: "Botox Results",
    description: "Real outcomes from targeted Botox treatments — softening tension lines whilst preserving natural expression and movement.",
    link: "/before-after/botox/",
    image: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
    treatments: ["Forehead Lines", "Frown Lines", "Crow's Feet", "Bunny Lines", "Gummy Smile", "Masseter"]
  },
  {
    id: "dermal-fillers",
    title: "Dermal Filler Results",
    description: "Natural transformations with hyaluronic acid fillers — from lip enhancement and cheek restoration to non-surgical rhinoplasty.",
    link: "/before-after/dermal-fillers/",
    image: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
    treatments: ["Lip Filler", "Cheek Filler", "Jawline", "Tear Trough", "Non-Surgical Rhinoplasty"]
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation Results",
    description: "The transformative power of Profhilo, Polynucleotides, and advanced skin treatments — restoring quality from within.",
    link: "/before-after/skin-rejuvenation/",
    image: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
    treatments: ["Profhilo", "Polynucleotides", "Microneedling", "Chemical Peels", "PRP"]
  }
];

const BeforeAfterHub = () => {
  const seoData = generateSEOMetadata(
    "Before & After Gallery | Real Patient Results | CosmeDocs Harley Street",
    "View real, unedited before and after results from our Harley Street clinic. Authentic patient transformations with Botox, dermal fillers, and skin rejuvenation — doctor-led since 2007.",
    "/before-after/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/before-after/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/before-after/" />
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
                "@id": "https://www.cosmedocs.co.uk/#clinic",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street, London — since 2007",
                "url": "https://www.cosmedocs.co.uk/",
                "telephone": "+442071231123",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "2387",
                  "bestRating": "5"
                }
              },
              {
                "@type": "ImageGallery",
                "@id": "https://www.cosmedocs.co.uk/before-after/#gallery",
                "name": "Before & After Results Gallery",
                "description": "Real patient before and after transformations from CosmeDocs Harley Street — Botox, dermal fillers, and skin rejuvenation results.",
                "url": "https://www.cosmedocs.co.uk/before-after/"
              },
              {
                "@type": "WebPage",
                "@id": "https://www.cosmedocs.co.uk/before-after/#page",
                "name": seoData.title,
                "description": seoData.description,
                "url": "https://www.cosmedocs.co.uk/before-after/",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cosmedocs.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "Before & After", "item": "https://www.cosmedocs.co.uk/before-after/" }
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.04) 0%, transparent 60%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[]}
              currentPage="Before & After"
            />
            <div className="pt-12 pb-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[#C9A050] text-xs uppercase tracking-widest mb-4 font-medium">Visual Proof</p>
                <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                  Before & After{" "}
                  <span className="text-[#C9A050] font-light">Gallery</span>
                </h1>
                <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                  Real, unedited patient transformations from our Harley Street clinic. Our aesthetics is invisible art — bold, natural, always your way.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
              >
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Real Unedited Photos</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Doctor-Led</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />Since 2007</span>
                <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />1M+ Treatments</span>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* Our Philosophy */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                Our Philosophy on <span className="text-[#C9A050] font-light">Natural Results</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-8" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    At CosmeDocs, we believe the best aesthetic work is the work no one notices. Every treatment in this gallery was performed by our Harley Street doctors with one guiding principle: <em className="text-white/60">enhancement should be invisible.</em>
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    These images are unedited and unfiltered — real patients, real outcomes. We share them not to promise identical results, but to demonstrate the quiet, considered approach that defines our practice.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    We say no more often than we say yes. If a treatment isn't right for you, we'll tell you. If less is more, we'll do less. This philosophy — refined over 17 years and more than a million treatments — is what makes our results look the way they do.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    Transformation that speaks — without saying a word.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Transformations */}
        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                Featured <span className="text-[#C9A050] font-light">Transformations</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <p className="text-white/40 text-sm font-light max-w-2xl leading-relaxed">
                A glimpse into the refined, natural results our patients achieve. Each transformation reflects our commitment to subtlety — invisible art, always your way.
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {featuredTransformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid"
                >
                  <div className="group rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.08]">
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="px-5 py-4 border-t border-white/[0.06]">
                      <p className="text-[#C9A050] text-xs font-medium uppercase tracking-wider mb-1">{item.treatment}</p>
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Treatment */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                Browse by <span className="text-[#C9A050] font-light">Treatment</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
              <p className="text-white/40 text-sm font-light max-w-2xl leading-relaxed">
                Explore our galleries organised by treatment type to find results relevant to your concerns. Each gallery contains real, unedited patient photographs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {galleryCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={category.link}
                    className="group block bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#C9A050]/30 transition-all duration-300 h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#C9A050] transition-colors flex items-center gap-2">
                        <Camera className="w-4 h-4 text-[#C9A050]/70" />
                        {category.title}
                      </h3>
                      <p className="text-white/40 text-xs mb-4 leading-relaxed font-light">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.treatments.slice(0, 3).map((treatment) => (
                          <span
                            key={treatment}
                            className="text-xs px-2 py-1 bg-white/[0.04] text-white/40 rounded-full border border-white/[0.06]"
                          >
                            {treatment}
                          </span>
                        ))}
                        {category.treatments.length > 3 && (
                          <span className="text-xs px-2 py-1 text-white/25">
                            +{category.treatments.length - 3} more
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[#C9A050] text-xs font-medium group-hover:gap-2 transition-all">
                        View Gallery <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Our Results Different */}
        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2">
                What Makes Our Results <span className="text-[#C9A050] font-light">Different</span>
              </h2>
              <div className="w-10 h-px bg-[#C9A050]/40 mb-8" />
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    title: "Doctor-Led, Always",
                    desc: "Every treatment is assessed, planned, and performed by GMC-registered doctors. No nurses, no shortcuts — just considered, expert care."
                  },
                  {
                    title: "The Art of Saying No",
                    desc: "We decline treatments that aren't in a patient's best interest. If less is more, we do less. If it's not right, we say so — honestly and without compromise."
                  },
                  {
                    title: "Invisible by Design",
                    desc: "Our results are designed to be undetectable. Friends notice you look well. They don't notice what you've had done. That's the standard we hold."
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <p className="text-sm font-medium text-[#C9A050] mb-3">{item.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer + Trust */}
        <section className="py-8 border-y border-white/[0.06] bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#C9A050]/60" />
                <span className="text-xs text-white/30">Real Unedited Photos</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C9A050]/60" />
                <span className="text-xs text-white/30">10 Harley Street, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#C9A050]/60" />
                <span className="text-xs text-white/30">1M+ Treatments Since 2007</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-[#C9A050]/60" />
                <span className="text-xs text-white/30">Doctor-Led Clinic</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-4 text-white">
                Your Consultation <span className="text-[#C9A050]">Begins Here</span>
              </h2>
              <p className="text-white/50 mb-8 font-light text-sm leading-relaxed max-w-xl mx-auto">
                Every transformation starts with a conversation. Book a consultation with our doctors to discuss your goals and discover what's possible — considered care from Harley Street doctors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Book Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/treatments">
                  <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    View All Treatments
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Outcome Disclaimer */}
        <section className="py-6 bg-black">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-center text-white/20 text-xs leading-relaxed">
              All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary depending on anatomy, skin type, and treatment plan. These photographs are provided for informational purposes and do not constitute a guarantee of specific outcomes.
            </p>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Before & After Results Gallery — CosmeDocs Harley Street</h2>
          <p>View authentic, unedited before and after photographs from CosmeDocs, London's leading doctor-led aesthetic medicine clinic on Harley Street. Our gallery showcases real patient transformations achieved through Botox, dermal fillers, lip enhancement, non-surgical rhinoplasty, cheek augmentation, jawline contouring, tear trough correction, Profhilo bio-remodelling, polynucleotide therapy, PRP vampire facial, microneedling, chemical peels, and HydraFacial treatments.</p>
          
          <h3>Our Philosophy on Natural Results</h3>
          <p>At CosmeDocs, our aesthetics is invisible art. We believe the best aesthetic work is the work no one notices. Every treatment is performed by GMC-registered doctors who prioritise subtle, natural-looking enhancement over dramatic change. We say no more often than we say yes — if a treatment isn't right, we'll tell you. This consultation-led philosophy, refined over 17 years and more than one million treatments, ensures every patient receives honest, considered care.</p>
          
          <h3>Botox Before & After Results</h3>
          <p>Browse our Botox gallery showcasing natural wrinkle reduction including forehead line treatment, crow's feet reduction, frown line softening, bunny lines correction, gummy smile treatment, and masseter Botox for jawline slimming. All results demonstrate our commitment to preserving natural facial expression.</p>
          
          <h3>Dermal Filler Before & After Results</h3>
          <p>Explore natural lip filler transformations, cheek enhancement, jawline contouring, tear trough correction, and non-surgical rhinoplasty results. Our doctors specialise in precise filler placement for harmonious, balanced outcomes that complement each patient's unique facial anatomy.</p>
          
          <h3>Skin Rejuvenation Before & After</h3>
          <p>See the transformative power of Profhilo bio-remodelling, polynucleotide DNA repair therapy, PRP vampire facial, microneedling, chemical peels, and HydraFacial treatments. Real improvements in skin texture, hydration, firmness, and overall radiance achieved through doctor-led skin quality treatments.</p>
          
          <h3>CosmeDocs Harley Street — Established 2007</h3>
          <p>With over one million treatments performed since 2007, CosmeDocs has established itself as one of the most experienced aesthetic medicine practices in the United Kingdom. Located at 10 Harley Street, London W1G 9PF, our CQC-registered clinic is led by Dr Ahmed Haq and Dr Hena, both GMC-registered practitioners with nearly two decades of experience in aesthetic and medical dermatology. Bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterHub;
