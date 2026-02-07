import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, Heart, Syringe, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import NoseFillerSidebar from '@/components/nose-filler/NoseFillerSidebar';

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

            <div className="max-w-3xl pt-12 pb-4">
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
                className="mt-10 flex items-center gap-6 text-xs text-white/25 tracking-wide uppercase"
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
            <div className="space-y-16">
              {/* What Can It Improve */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    What Can a Non-Surgical Nose Job <span className="text-[#C9A050]">Improve?</span>
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-4">
                    Non-surgical rhinoplasty is a refinement procedure. It works by adding small volumes of filler
                    to specific areas of the nose to improve shape, symmetry, and proportion. The goal is always
                    to work with your existing anatomy — enhancing what is already there rather than attempting to
                    fundamentally alter nasal structure.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-8">
                    Facial anatomy varies significantly between individuals, and treatment planning is always
                    personalised rather than formulaic. Our doctors assess each nose in the context of the whole
                    face — considering bridge height, tip projection, skin thickness, and overall facial harmony
                    before recommending an approach.
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
                  <div className="mt-8 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl space-y-3">
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
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    How Nose Filler <span className="text-[#C9A050]">Treatment Works</span>
                  </h2>
                  <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      The treatment uses hyaluronic acid dermal fillers — a biocompatible, naturally occurring substance — to
                      reshape and contour the nose. Our doctors place small, precisely measured volumes of filler at strategic
                      points along the nasal bridge, tip, or sidewalls to achieve the desired correction.
                    </p>
                    <p>
                      Each injection is carefully planned based on your individual anatomy. The filler provides structural
                      support, smoothing irregularities and creating refined contours. Results are visible immediately, though
                      the final outcome settles over the following days as any minor swelling subsides.
                    </p>
                    <p>
                      Our doctors select either needle, cannula, or a combination of both depending on the area being treated
                      and your anatomy. A one-point injection technique may be appropriate for some patients, whilst others
                      require a multi-point approach. The procedure is reversible — hyaluronic acid filler can be dissolved
                      if necessary.
                    </p>
                    <p>
                      Advanced knowledge of facial vascular anatomy is essential for safe nose filler treatment. This is a
                      high-risk area that should only be treated by experienced, medically qualified practitioners.
                    </p>
                    <p>
                      The treatment itself is relatively quick — typically completed within 15 to 30 minutes. Local comfort
                      measures are used to minimise any discomfort, and our doctors assess the result in real time throughout
                      the procedure, making controlled, incremental adjustments rather than committing to a single correction
                      in one step.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* PCL Threads for Nose Reshaping */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    Nose Threads for <span className="text-[#C9A050]">Tip Lifting & Straightening</span>
                  </h2>
                  <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      PCL (polycaprolactone) threads offer an alternative or complementary approach to dermal fillers for
                      non-surgical nose reshaping. Threads are particularly effective for lifting a drooping nasal tip and
                      straightening the nasal bridge — areas where structural support is the primary goal rather than volume
                      addition.
                    </p>
                    <p>
                      The threads are inserted beneath the skin along the nasal bridge or tip, providing a scaffold that
                      lifts and supports the tissue. Over time, the threads stimulate collagen production around the
                      insertion site, contributing to longer-lasting structural improvement. Results from PCL nose threads
                      can last up to 3 years — significantly longer than dermal fillers alone.
                    </p>
                    <p>
                      In many cases, our doctors may recommend a combined approach — using threads for structural lifting
                      and support, with dermal filler for fine contour refinement and smoothing. This dual-modality technique
                      can achieve results that neither method could accomplish alone, offering both immediate contouring and
                      long-term structural improvement.
                    </p>
                    <p>
                      As with all nose reshaping at CosmeDocs, thread treatments are performed exclusively by our
                      GMC-registered doctors using an anatomy-led approach. During your consultation, your doctor will assess
                      whether fillers, threads, or a combination is most appropriate for your anatomy and goals.
                    </p>
                  </div>
                  <div className="mt-6 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                    <p className="text-white/40 text-xs leading-relaxed font-light">
                      <strong className="text-[#C9A050]/80">Threads vs fillers:</strong> Threads excel at tip lifting and
                      bridge straightening with results lasting up to 3 years. Fillers are better suited for smoothing bumps,
                      filling depressions, and fine contour work, typically lasting 12–18 months. Your doctor will recommend
                      the most appropriate modality — or combination — during consultation.
                    </p>
                  </div>
                  <p className="mt-4 text-white/35 text-xs leading-relaxed font-light">
                    Pricing for non-surgical nose reshaping is available on our{' '}
                    <Link to="/pricing/" className="text-[#C9A050]/70 hover:text-[#C9A050] underline underline-offset-2 transition-colors">
                      pricing page
                    </Link>{' '}
                    following consultation.
                  </p>
                </motion.div>
              </section>

              {/* Video Section */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                    Watch: Non-Surgical Nose Job{" "}
                    <span className="text-[#C9A050]">Explained by Our Doctors</span>
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-8">
                    In this short video, our doctors explain how non-surgical nose reshaping works, who
                    it's suitable for, and how we prioritise safety and natural results.
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
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    Safety, Anatomy &{" "}
                    <span className="text-[#C9A050]">Medical Expertise</span>
                  </h2>
                  <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      The nose is a high-risk vascular area. The internal and external nasal arteries supply blood to
                      critical structures, and filler placed incorrectly can cause serious complications including
                      vascular occlusion. This is why non-surgical nose reshaping should only be performed by
                      experienced, medically qualified doctors with advanced anatomical knowledge.
                    </p>
                    <p>
                      CosmeDocs was established on Harley Street in 2007 and has built long-term clinical experience in
                      non-surgical nose reshaping. Dr Ahmed Haq, Founder and Medical Director, has contributed to technique
                      development in aesthetic medicine and is an active educator in the field. Dr Hena, as senior treating
                      doctor, brings the same anatomy-led, conservative approach to every consultation and procedure.
                    </p>
                    <p>
                      At CosmeDocs, nose filler is exclusively performed by our GMC-registered doctors. Their approach is
                      conservative by design: small volumes, precise placement, and an understanding that less is more. They
                      choose between needle and cannula based on what each patient's anatomy requires, not a one-size-fits-all
                      protocol. Real-time assessment during treatment allows for controlled, incremental correction.
                    </p>
                    <p>
                      Our conservative dosing philosophy means we would rather under-treat and review than over-correct.
                      We also say "no" when a non-surgical approach is not appropriate — recommending surgical consultation
                      when the desired outcome exceeds what filler can safely achieve. Safety takes priority over volume,
                      and every treatment decision is guided by anatomy rather than patient demand alone.
                    </p>
                  </div>
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
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    Who Is Suitable{" "}
                    <span className="text-[#C9A050]">(And Who Is Not)</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                        <p className="text-base font-medium text-white">May Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-sm font-light">
                        <li>• Mild to moderate contour irregularities</li>
                        <li>• Patients seeking subtle refinement, not size reduction</li>
                        <li>• Those preferring a non-surgical approach</li>
                        <li>• Dorsal hump or bridge asymmetry</li>
                        <li>• Post-surgical asymmetry correction (selected cases)</li>
                        <li>• Patients wanting to "test" a change before committing to surgery</li>
                      </ul>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-white/40" />
                        <p className="text-base font-medium text-white">May Not Be Suitable</p>
                      </div>
                      <ul className="space-y-2 text-white/45 text-sm font-light">
                        <li>• Significant nasal obstruction or breathing difficulty</li>
                        <li>• Large structural deformities requiring surgical correction</li>
                        <li>• Unrealistic expectations about size reduction</li>
                        <li>• Certain vascular risk profiles</li>
                        <li>• Previous complications from nose filler</li>
                        <li>• Cases where surgical rhinoplasty would be more appropriate</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 text-white/35 text-xs leading-relaxed font-light">
                    Suitability is always determined by your treating doctor during consultation. Our approach is
                    cautious and doctor-led — we would rather recommend an alternative than proceed with a treatment
                    that may not meet your expectations.
                  </p>
                </motion.div>
              </section>

              {/* Before & After Link */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7"
                >
                  <h2 className="text-xl font-light text-white mb-3">
                    Non-Surgical Nose Job{" "}
                    <span className="text-[#C9A050]">Before & After Results</span>
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-4">
                    All images show real patients treated by our doctors at our Harley Street clinic.
                  </p>
                  <Link
                    to="/before-after/dermal-fillers/nose/"
                    className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8924A] text-sm font-medium transition-colors"
                  >
                    View real non-surgical nose job before & after results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    How Long Do <span className="text-[#C9A050]">Results Last?</span>
                  </h2>
                  <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      Longevity depends on the modality used. Dermal filler results typically last 12–18 months, whilst
                      PCL thread results can last up to 3 years. A combined approach — threads for structure, filler for
                      contouring — can offer long-lasting results of 2–3 years overall.
                    </p>
                    <p>
                      The nose is a relatively low-movement area, which means both filler and threads tend to last longer
                      here than in more dynamic facial areas such as the lips. Many patients find that with repeat treatments,
                      results can be maintained with progressively smaller volumes.
                    </p>
                    <p>
                      Our doctors will advise on the most appropriate modality — fillers, threads, or both — and the
                      recommended review schedule during your consultation.
                    </p>
                  </div>
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
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    Aftercare & <span className="text-[#C9A050]">Recovery</span>
                  </h2>
                  <div className="space-y-4 text-white/45 text-sm leading-relaxed font-light">
                    <p>
                      Downtime following a non-surgical nose job is minimal. Most patients return to normal activities
                      immediately. You may experience mild swelling, tenderness, or slight redness at the injection sites,
                      which typically resolves within 24–48 hours.
                    </p>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid touching, pressing, or massaging the nose for 48 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Do not wear glasses or sunglasses resting on the bridge for 2 weeks
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Avoid strenuous exercise for 24–48 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Expect mild swelling to settle within a few days
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-4 h-4 text-[#C9A050]/70 flex-shrink-0 mt-0.5" />
                        Contact our clinic if you experience unusual pain, blanching, or vision changes
                      </li>
                    </ul>
                  </div>
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
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
                    Why Choose CosmeDocs for{" "}
                    <span className="text-[#C9A050]">Nose Fillers?</span>
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Doctor-led clinic — all treatments performed by GMC-registered doctors",
                      "Harley Street, London — established 2007",
                      "Over 1 million treatments performed across all services",
                      "Conservative philosophy — we prioritise safety and subtlety",
                      "Ethical practice — we say \"no\" when appropriate",
                      "Specialists in Asian and ethnic nose reshaping since 2010",
                      "Our aesthetics is invisible art — bold, natural, always your way"
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
