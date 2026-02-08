import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import NoseFillerSidebar from '@/components/nose-filler/NoseFillerSidebar';
import ExpandableSection from '@/components/ui/expandable-section';
import noseIllustration from '@/assets/nose-profile-illustration.png';

const NoseFillerTreatment = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Nose Job (Liquid Rhinoplasty) | Harley Street Doctors",
    "Doctor-led non-surgical nose reshaping using dermal fillers. Subtle, safe liquid rhinoplasty at our Harley Street clinic.",
    "/treatments/dermal-fillers/nose/"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/treatments/dermal-fillers/nose/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/treatments/dermal-fillers/nose/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "description": "Doctor-led aesthetic medicine clinic on Harley Street",
                "url": "https://cosmedocs.co.uk/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 Harley Street",
                  "addressLocality": "London",
                  "postalCode": "W1G 9PF",
                  "addressCountry": "GB"
                },
                "medicalSpecialty": "Aesthetic Medicine"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Non-Surgical Nose Job (Liquid Rhinoplasty)",
                "description": "Non-surgical nose reshaping using dermal fillers and/or PCL threads for profile refinement, tip lifting, dorsal hump camouflage, and contour correction.",
                "url": "https://cosmedocs.co.uk/treatments/dermal-fillers/nose/",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Nose",
                "followup": "Results can last 2–3 years depending on modality. Dermal fillers: 12–18 months. PCL threads: up to 3 years.",
                "howPerformed": "Strategic placement of hyaluronic acid filler and/or PCL threads using needle, cannula, or both for precise contouring and structural support."
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* ═══════════════════════════════════════════
            HERO — Minimal, text-light
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          {/* Subtle gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          
          {/* Flowing background orb — restrained */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb
              items={[
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Dermal Fillers', path: '/treatments/dermal-fillers/' }
              ]}
              currentPage="Non-Surgical Nose Job"
            />

            <div className="flex items-center justify-between pt-12 pb-4">
              {/* Left: Text */}
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-[3.5rem] font-extralight text-white leading-[1.1] tracking-tight mb-6">
                    Non-Surgical{" "}
                    <span className="text-[#C9A050] font-light">Nose Job</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/35 leading-relaxed font-extralight max-w-xl">
                    Dermal fillers and PCL threads to reshape, refine, and lift — without surgery. Results lasting 2–3 years.
                  </p>
                </motion.div>

                {/* Minimal trust row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Doctor-Led
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    15–30 Min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Since 2007
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A050]/50" />
                    Harley Street
                  </span>
                </motion.div>
              </div>

              {/* Right: Nose illustration with animation */}
              <motion.div
                className="hidden lg:block flex-shrink-0 w-[280px] h-[320px] relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                {/* Glow behind the illustration */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 45%, rgba(201, 160, 80, 0.1) 0%, transparent 60%)',
                  }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                  src={noseIllustration}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(201,160,80,0.15)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom fade line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            TWO-COLUMN LAYOUT — Content + Sidebar
        ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* LEFT — Main Content */}
            <div className="space-y-14">
              {/* What Can It Improve */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    What Can It <span className="text-[#C9A050] font-light">Improve?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Non-surgical rhinoplasty refines shape, symmetry, and proportion by adding small volumes of filler
                        to specific areas. The goal is to enhance your existing anatomy — not fundamentally alter it.
                      </p>
                    }
                  >
                    <div className="space-y-4">
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Facial anatomy varies significantly between individuals, and treatment planning is always
                        personalised rather than formulaic. Our doctors assess each nose in the context of the whole
                        face — considering bridge height, tip projection, skin thickness, and overall facial harmony.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Camouflaging small humps or bumps along the nasal bridge",
                          "Smoothing nasal irregularities and contour asymmetries",
                          "Refining nasal tip support and definition",
                          "Improving bridge smoothness and straightness",
                          "Enhancing overall nasal definition and profile balance",
                          "Improving side-profile symmetry and facial harmony",
                          "Correcting minor post-surgical asymmetry in selected cases",
                          "Addressing sidewall depressions and minor contour irregularities"
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light">
                            <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl space-y-3">
                        <p className="text-white/40 text-xs leading-relaxed font-light">
                          <strong className="text-[#C9A050]/80">Important:</strong> A non-surgical nose job does not make the
                          nose physically smaller — it improves shape, balance, and proportions. It does not replace surgical
                          rhinoplasty and works best for refinement rather than major structural change.
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed font-light">
                          During your consultation, our doctors will explain what is realistically achievable, set clear
                          expectations, and advise honestly if a surgical approach would be more appropriate for your goals.
                        </p>
                      </div>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* How It Works — Dermal Fillers */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Nose Filler <span className="text-[#C9A050] font-light">Works</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Hyaluronic acid filler is placed at strategic points along the bridge, tip, or sidewalls.
                        Results are visible immediately. The procedure takes 15–30 minutes and is reversible.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Each injection is carefully planned based on your individual anatomy. The filler provides structural
                        support, smoothing irregularities and creating refined contours. The final outcome settles over the
                        following days as any minor swelling subsides.
                      </p>
                      <p>
                        Our doctors select either needle, cannula, or a combination of both depending on the area being treated
                        and your anatomy. A one-point injection technique may be appropriate for some patients, whilst others
                        require a multi-point approach.
                      </p>
                      <p>
                        Advanced knowledge of facial vascular anatomy is essential for safe nose filler treatment. This is a
                        high-risk area that should only be treated by experienced, medically qualified practitioners.
                      </p>
                      <p>
                        Our doctors assess the result in real time throughout the procedure, making controlled, incremental
                        adjustments rather than committing to a single correction in one step.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* PCL Threads */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Nose Threads for <span className="text-[#C9A050] font-light">Tip Lifting</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        PCL threads lift a drooping nasal tip and straighten the bridge with structural support
                        lasting up to 3 years — significantly longer than filler alone.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        The threads are inserted beneath the skin, providing a scaffold that lifts and supports tissue.
                        Over time, they stimulate collagen production for longer-lasting structural improvement.
                      </p>
                      <p>
                        Our doctors may recommend a combined approach — threads for structural lifting with dermal filler
                        for fine contour refinement. This dual-modality technique can achieve results that neither method
                        could accomplish alone.
                      </p>
                      <p>
                        During your consultation, your doctor will assess whether fillers, threads, or a combination is
                        most appropriate for your anatomy and goals.
                      </p>
                    </div>
                    <div className="mt-4 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                      <p className="text-white/40 text-xs leading-relaxed font-light">
                        <strong className="text-[#C9A050]/80">Threads vs fillers:</strong> Threads excel at tip lifting and
                        bridge straightening (up to 3 years). Fillers suit smoothing bumps and fine contour work (12–18 months).
                      </p>
                    </div>
                  </ExpandableSection>
                  <p className="mt-4 text-white/35 text-xs leading-relaxed font-light">
                    Pricing available on our{' '}
                    <Link to="/pricing/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">
                      pricing page
                    </Link>.
                  </p>
                </motion.div>
              </section>

              {/* Video */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Watch: <span className="text-[#C9A050] font-light">Explained</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Our doctors explain how non-surgical nose reshaping works, who it's suitable for, and how we prioritise safety.
                  </p>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/_yO12RM4-34?si=XwoIhfA0QWPhzI2h"
                      title="Non-Surgical Nose Job Explained by CosmeDocs Doctors"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </section>

              {/* Safety & Expertise */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Safety & <span className="text-[#C9A050] font-light">Expertise</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        The nose is a high-risk vascular area. At CosmeDocs, nose reshaping is exclusively performed by
                        GMC-registered doctors with advanced anatomical knowledge — established on Harley Street since 2007.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        Dr Ahmed Haq, Founder and Medical Director, has contributed to technique development in aesthetic
                        medicine and is an active educator in the field. Dr Hena brings the same anatomy-led, conservative
                        approach to every consultation and procedure.
                      </p>
                      <p>
                        Their approach is conservative by design: small volumes, precise placement, and an understanding
                        that less is more. They choose between needle and cannula based on what each patient's anatomy
                        requires, not a one-size-fits-all protocol.
                      </p>
                      <p>
                        We would rather under-treat and review than over-correct. We also say "no" when a non-surgical
                        approach is not appropriate — recommending surgical consultation when the desired outcome exceeds
                        what filler can safely achieve.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Who Is Suitable */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Am I <span className="text-[#C9A050] font-light">Suitable?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-sm font-medium text-white">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Mild to moderate contour irregularities</li>
                        <li>• Subtle refinement, not size reduction</li>
                        <li>• Dorsal hump or bridge asymmetry</li>
                        <li>• Post-surgical correction (selected cases)</li>
                        <li>• "Testing" a change before surgery</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-sm font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-xs font-light">
                        <li>• Nasal obstruction or breathing difficulty</li>
                        <li>• Large structural deformities</li>
                        <li>• Unrealistic size-reduction expectations</li>
                        <li>• Certain vascular risk profiles</li>
                        <li>• Previous nose filler complications</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Real Results: Single B&A Preview */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white/85 mb-2 leading-tight">
                    Real Results: <span className="text-[#C9A050] font-light">Nose Filler Before & After</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-6">
                    Below is an example of non-surgical nose reshaping performed by our doctors at our Harley Street clinic. 
                    Results vary depending on nasal anatomy, skin thickness, and desired refinement — with a focus on 
                    natural contour and facial harmony.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-3">
                    <img
                      src="/images/before-after/dermal-fillers/nose-filler-before-after.jpg"
                      alt="Before and after non-surgical nose job showing bridge refinement and profile improvement"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                  <p className="text-white/30 text-xs font-light italic mb-6">
                    All images show real patients treated by our doctors at our Harley Street clinic. Individual results vary depending on nasal anatomy and treatment plan.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/nose/"
                    className="inline-flex items-center gap-2 text-[#C9A050] text-sm font-medium hover:underline"
                  >
                    View real nose filler before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-white/30 text-xs font-light mt-2">
                    Includes dorsal hump camouflage, tip lifting, bridge refinement, and ethnic nose reshaping cases.
                  </p>
                </motion.div>
              </section>

              {/* How Long Results Last */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    How Long Do <span className="text-[#C9A050] font-light">Results Last?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Dermal fillers last 12–18 months. PCL threads last up to 3 years. A combined approach can offer
                        2–3 years of improvement overall.
                      </p>
                    }
                  >
                    <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                      <p>
                        The nose is a relatively low-movement area, so both filler and threads tend to last longer
                        here than in more dynamic areas such as the lips. Many patients find results can be maintained
                        with progressively smaller volumes over time.
                      </p>
                      <p>
                        Our doctors will advise on the most appropriate modality — fillers, threads, or both — and the
                        recommended review schedule during your consultation.
                      </p>
                    </div>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Aftercare */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Aftercare & <span className="text-[#C9A050] font-light">Recovery</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ExpandableSection
                    preview={
                      <p className="text-white/45 text-sm leading-relaxed font-light">
                        Minimal downtime. Most patients return to normal activities immediately. Mild swelling typically
                        resolves within 24–48 hours.
                      </p>
                    }
                  >
                    <ul className="space-y-3 text-white/45 text-sm font-light">
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid touching, pressing, or massaging the nose for 48 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        No glasses resting on the bridge for 2 weeks
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid strenuous exercise for 24–48 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Mild swelling settles within a few days
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Contact us if you experience unusual pain, blanching, or vision changes
                      </li>
                    </ul>
                  </ExpandableSection>
                </motion.div>
              </section>

              {/* Why CosmeDocs */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
                    Why <span className="text-[#C9A050] font-light">CosmeDocs?</span>
                  </h2>
                  <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
                  <ul className="space-y-3">
                    {[
                      "Doctor-led — all treatments by GMC-registered doctors",
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed",
                      "Conservative philosophy — safety and subtlety first",
                      "Specialists in Asian and ethnic nose reshaping since 2010",
                      "Our aesthetics is invisible art"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50 font-light">
                        <CheckCircle className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>
            </div>

            {/* RIGHT — Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <NoseFillerSidebar />
              </div>
            </aside>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            FULL-WIDTH CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-light mb-4 text-white">
                Considering a Non-Surgical <span className="text-[#C9A050]">Nose Job?</span>
              </h2>
              <p className="text-white/60 mb-8 font-light">
                A consultation with our doctors will help you understand what improvements are achievable
                and whether this treatment is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="group bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium px-8 py-5 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A050]/20 w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost" className="border border-white/20 text-white/70 hover:text-white hover:bg-white/10 px-8 py-5 rounded-full text-base w-full sm:w-auto">
                    Speak to a Doctor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sidebar (shown below content on small screens) */}
        <section className="lg:hidden py-12 px-4 bg-black">
          <NoseFillerSidebar />
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Non-Surgical Nose Job London — Liquid Rhinoplasty at Harley Street</h2>
          <p>
            CosmeDocs offers doctor-led non-surgical nose reshaping using dermal fillers and/or PCL threads at
            our Harley Street clinic in London. Also known as liquid rhinoplasty, this treatment can camouflage
            dorsal humps, smooth nasal irregularities, lift a drooping tip, straighten the nasal bridge, and
            improve profile symmetry without surgery. Our GMC-registered doctors — Dr Ahmed Haq and Dr Hena —
            have been performing non-surgical nose jobs since 2007, with specialist expertise in Asian and ethnic
            nose reshaping since 2010.
          </p>
          <h3>Nose Filler and Thread Treatment at CosmeDocs Harley Street</h3>
          <p>
            Our doctors use needle, cannula, or a combination of both techniques for optimal nose filler results.
            PCL threads offer an alternative or complementary approach for nose tip lifting and bridge straightening,
            providing structural support that can last up to 3 years. The one-point nose job technique may be
            appropriate for selected patients. We take a conservative approach to nose reshaping — using small volumes
            of filler and precisely placed threads for structural support and controlled contouring. Dermal filler
            results typically last 12 to 18 months, whilst thread results can last up to 3 years. A combined approach
            can offer results lasting 2–3 years. Our aesthetics is invisible art — bold, natural, always your way.
          </p>
          <h3>Non-Surgical Rhinoplasty Safety and Expertise</h3>
          <p>
            The nose is a high-risk vascular area requiring advanced anatomical knowledge. At CosmeDocs, nose filler
            and thread treatments are exclusively performed by experienced, GMC-registered doctors. We prioritise
            safety with conservative dosing and say no when a non-surgical approach is not appropriate. We have
            performed over 1 million treatments across all services since our establishment on Harley Street.
          </p>
        </div>
      </div>
    </>
  );
};

export default NoseFillerTreatment;
