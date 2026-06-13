import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import {
  Stethoscope,
  ShieldCheck,
  FileText,
  UserCheck,
  ArrowRight,
  Droplets,
  Activity,
  Brain,
  HeartPulse,
  Building2,
} from 'lucide-react';
import PricingWidget from '@/components/PricingWidget';
import Breadcrumb from '@/components/Breadcrumb';

const MedicalHub = () => {
  const seoData = generateSEOMetadata(
    "Medical Botox & Clinical Treatments | Harley Street | Cosmedocs",
    "GMC-registered doctors on Harley Street treating hyperhidrosis, bruxism & TMJ, chronic migraine and providing private GP care. Transparent UK pricing.",
    "/medical/"
  );

  const medicalServices = [
    {
      icon: Droplets,
      title: "Hyperhidrosis Treatment",
      subtitle: "Excessive Sweating",
      price: "From £550",
      duration: "30 mins · lasts 4–6 months",
      description:
        "Botulinum toxin blocks the nerve signals that activate sweat glands in the underarms, palms, soles or scalp. A clinically proven option for primary focal hyperhidrosis when antiperspirants and prescription topicals have failed.",
      bullets: [
        "Underarms, palms, soles, scalp, forehead",
        "Iodine-starch mapping where clinically indicated",
        "Patch test and medical review prior to first session",
      ],
      path: "/medical/botox-for-hyperhidrosis/",
    },
    {
      icon: Activity,
      title: "Bruxism & TMJ Management",
      subtitle: "Jaw Clenching, Grinding & Facial Tension",
      price: "£350 women · £400 men",
      duration: "15–20 mins · lasts 4–6 months",
      description:
        "Targeted relaxation of the masseter muscle reduces the force of clenching and grinding, easing jaw pain, morning headaches and dental wear. Often used alongside a dental occlusal splint for chronic cases.",
      bullets: [
        "Dose tailored to muscle bulk (women vs men differ)",
        "Pairs with night splint when prescribed by your dentist",
        "Cosmetic jaw slimming is a secondary benefit",
      ],
      path: "/treatments/masseter-botox/",
    },
    {
      icon: Brain,
      title: "Chronic Migraine",
      subtitle: "Preventive Botulinum Toxin Protocol",
      price: "£450–£550",
      duration: "30 mins · repeat every 12 weeks",
      description:
        "For adults experiencing 15 or more headache days per month (at least 8 with migraine features), botulinum toxin is a NICE-recognised preventive option. Injections follow the PREEMPT protocol across the head, neck and shoulders.",
      bullets: [
        "Headache diary review at consultation",
        "Specialist referral if features suggest secondary headache",
        "Effect typically assessed at 2 cycles (24 weeks)",
      ],
      path: "/medical/botox-for-migraines/",
    },
    {
      icon: HeartPulse,
      title: "Private GP Services",
      subtitle: "General Medical Care · Harley Street",
      price: "Consultation from £150",
      duration: "20–45 mins · same-week availability",
      description:
        "Experienced private GPs for general health concerns, screenings, blood tests, prescriptions and onward specialist referrals — delivered with the privacy and continuity our long-standing patients expect.",
      bullets: [
        "Same-week appointments where available",
        "Onward referrals to consultant specialists",
        "Confidential records held under UK GMC standards",
      ],
      path: "/treatments/private-gp/",
    },
  ];

  const clinicalStandards = [
    {
      icon: Stethoscope,
      title: "GMC-Registered Doctors",
      description: "Every procedure performed by a fully registered medical practitioner.",
    },
    {
      icon: ShieldCheck,
      title: "CQC-Compliant Setting",
      description: "Regulated through PrivaDr Ltd at 10 Harley Street, London W1G 9PF.",
    },
    {
      icon: FileText,
      title: "Documented Records",
      description: "Full clinical notes, consent and referral pathways maintained.",
    },
    {
      icon: UserCheck,
      title: "Pre-Treatment Assessment",
      description: "Medical history, medications and contraindications reviewed first.",
    },
  ];

  const faqs = [
    {
      q: "Are these medical treatments different to cosmetic botox?",
      a: "Yes. Medical botox is prescribed to treat a diagnosed condition — hyperhidrosis, bruxism, TMJ dysfunction or chronic migraine — not to soften wrinkles. Dosing, injection sites and follow-up are guided by clinical evidence rather than aesthetic preference.",
    },
    {
      q: "Do I need a GP referral?",
      a: "Not always. Our doctors will take a full medical history at consultation and may request referral notes for conditions such as chronic migraine, where prior treatment history is helpful. We will refer onward if your symptoms suggest a different underlying cause.",
    },
    {
      q: "Can I claim on private medical insurance?",
      a: "Some insurers cover medical botulinum toxin for conditions like chronic migraine or severe hyperhidrosis when criteria are met. We provide itemised invoices with diagnostic codes; please confirm coverage with your insurer in advance.",
    },
    {
      q: "How quickly will I feel a difference?",
      a: "Most patients notice early effect within 5–7 days, with full benefit by week 2. Duration is typically 4–6 months for sweating and bruxism, and 12 weeks per cycle for the migraine protocol.",
    },
    {
      q: "What if treatment is not clinically appropriate for me?",
      a: "We will tell you honestly and, where useful, refer you to your NHS GP or a relevant specialist. Cosmedocs operates a truth-first medical model — we decline treatment when it isn't the right option.",
    },
  ];

  const siblingHubs = [
    { label: "All Treatments", path: "/treatments/" },
    { label: "Cosmetic Botox", path: "/treatments/botox/" },
    { label: "Masseter Botox", path: "/treatments/masseter-botox/" },
    { label: "Private GP", path: "/treatments/private-gp/" },
    { label: "Full Price List", path: "/prices/" },
  ];

  // JSON-LD: MedicalClinic + Services + FAQPage
  const medicalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://www.cosmedocs.com/medical/#clinic",
        name: "Cosmedocs Medical — Harley Street",
        url: "https://www.cosmedocs.com/medical/",
        medicalSpecialty: ["Dermatology", "Neurology", "GeneralPractice"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Harley Street",
          addressLocality: "London",
          postalCode: "W1G 9PF",
          addressCountry: "GB",
        },
        availableService: medicalServices.map((s) => ({
          "@type": "MedicalProcedure",
          name: s.title,
          procedureType: "TherapeuticProcedure",
          description: s.description,
          url: `https://www.cosmedocs.com${s.path}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="medical botox London, hyperhidrosis treatment Harley Street, bruxism botox, TMJ botox, chronic migraine treatment, private GP Harley Street, Cosmedocs medical"
        />
        <script type="application/ld+json">{JSON.stringify(medicalSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, #C9A050 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Breadcrumb */}
        <div className="relative max-w-5xl mx-auto px-6 pt-28">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Treatments", path: "/treatments/" },
            ]}
            currentPage="Medical"
            variant="dark"
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-6 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A050] text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
                Harley Street · Doctor-Led Clinical Care
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Medical <span className="text-[#C9A050]">Treatments</span>
              </h1>
              {/* AI-search top answer (40–60 words) */}
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Cosmedocs Medical is a doctor-led clinic on Harley Street treating
                excessive sweating (hyperhidrosis), jaw clenching and TMJ (bruxism),
                chronic migraine, and offering private GP appointments. All medical
                botulinum toxin and clinical care is delivered by GMC-registered UK
                doctors with transparent fees and itemised invoices.
              </p>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Book Medical Consultation
                </a>
                <Link
                  to="/prices/"
                  className="inline-block border border-white/20 hover:border-[#C9A050] text-white/80 hover:text-[#C9A050] px-8 py-3.5 rounded-full font-medium transition-all duration-300"
                >
                  View Full Price List
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clinical Standards */}
        <section className="relative py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clinicalStandards.map((standard, i) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
                >
                  <standard.icon className="w-8 h-8 text-[#C9A050] mx-auto mb-3" />
                  <p className="text-white/90 text-sm font-medium mb-1">
                    {standard.title}
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-white/40 text-xs text-center mt-5 max-w-2xl mx-auto leading-relaxed">
              We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all
              CQC required treatments.
            </p>
          </div>
        </section>

        {/* Medical Services */}
        <section className="relative py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-light">
                Clinical <span className="text-[#C9A050]">Services</span>
              </h2>
              <p className="text-white/50 text-sm mt-3 max-w-2xl mx-auto">
                Quiet, not loud. Invisible, not exaggerated. Every protocol below is
                tailored at consultation to your medical history.
              </p>
            </motion.div>

            <div className="space-y-6">
              {medicalServices.map((service, i) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#C9A050]/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-12 md:h-12 w-10 h-10 rounded-xl bg-[#C9A050]/10 border border-[#C9A050]/20 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-[#C9A050]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[#C9A050] text-[11px] uppercase tracking-wider bg-[#C9A050]/10 px-2.5 py-1 rounded-full">
                          Medical
                        </span>
                        <span className="text-[#C9A050] text-sm font-medium">
                          {service.price}
                        </span>
                        <span className="text-white/35 text-xs">· {service.duration}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/45 text-sm mb-4">{service.subtitle}</p>
                      <p className="text-white/65 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 mb-5">
                        {service.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-sm text-white/55 flex items-start gap-2"
                          >
                            <span className="text-[#C9A050] mt-1.5 w-1 h-1 rounded-full bg-[#C9A050] shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          to={service.path}
                          className="inline-flex items-center gap-1.5 bg-[#C9A050] hover:bg-[#B8913F] text-black px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                        >
                          Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href="https://med.as.me/harleystreet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 border border-white/15 hover:border-[#C9A050]/60 text-white/70 hover:text-[#C9A050] px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                        >
                          Book consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="relative py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-3">
              Medical Treatment <span className="text-[#C9A050]">Pricing</span>
            </h2>
            <p className="text-white/50 text-sm mb-6">
              All medical treatments include a clinical consultation. Final fees
              confirmed after assessment.
            </p>
            <PricingWidget
              categories={["botox-sweattox"]}
              title="Medical Pricing"
              variant="dark"
            />
          </div>
        </section>

        {/* Important Information */}
        <section className="relative py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-lg font-medium text-white mb-4">
                Important Information
              </h3>
              <div className="space-y-3 text-white/60 text-sm leading-relaxed">
                <p>
                  Medical treatments at Cosmedocs are provided following a thorough
                  clinical assessment. We may decline treatment if it is not
                  clinically appropriate for your condition.
                </p>
                <p>
                  For certain conditions, we may recommend referral to specialist
                  services or your NHS GP for further investigation before
                  proceeding with treatment.
                </p>
                <p>
                  All medical treatments are subject to a consultation fee. Please
                  bring any relevant medical records, medication lists or referral
                  letters to your appointment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8 text-center">
              Common <span className="text-[#C9A050]">Questions</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white/5 border border-white/10 rounded-xl px-5 py-4 open:border-[#C9A050]/30 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                    <span className="text-white/90 text-sm md:text-base font-medium">
                      {f.q}
                    </span>
                    <span className="text-[#C9A050] text-xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-white/60 text-sm leading-relaxed mt-3">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sibling hubs */}
        <section className="relative py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/40 text-xs uppercase tracking-[0.25em] mb-4">
              Continue exploring
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {siblingHubs.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="text-sm text-white/70 hover:text-[#C9A050] border border-white/10 hover:border-[#C9A050]/40 px-4 py-2 rounded-full transition-all"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-8 h-8 text-[#C9A050] mx-auto mb-4 opacity-70" />
              <h2 className="text-3xl font-light mb-6">
                Book a Medical <span className="text-[#C9A050]">Consultation</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Speak with one of our GMC-registered doctors at 10 Harley Street to
                discuss your medical concerns and explore appropriate treatment
                options.
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicalHub;
