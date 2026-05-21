import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Users,
  Award,
  Stethoscope,
  Target,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Trophy,
  GraduationCap,
  Microscope,
  ExternalLink,
  Star,
  Play,
  Clock,
  PoundSterling,
  Calendar,
  MapPin,
  Shield,
} from "lucide-react";
import AutoLinkedText from "@/components/AutoLinkedText";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

const HSI = "https://www.harleystreetinstitute.com";

/* ─── course data pulled from HSI ─── */
const beginnerCourses = [
  {
    title: "Foundation Botox & Dermal Fillers",
    price: "£1,190 + VAT",
    duration: "1 day",
    detail: "Combined Botox + filler foundation. Max 4 delegates. Hands-on with real patients.",
    href: `${HSI}/foundation-botox-and-dermal-fillers-training-course/`,
    featured: true,
  },
  {
    title: "Foundation Botox Course",
    price: "£650 + VAT",
    duration: "1 day",
    detail: "Upper face: glabella, frontalis, crow's feet. Anatomy, technique, complication prevention.",
    href: `${HSI}/botox-course-for-medical-professionals/`,
  },
  {
    title: "Foundation Dermal Fillers",
    price: "£650 + VAT",
    duration: "1 day",
    detail: "Lips, nasolabial folds, marionettes. Core cannula and needle techniques.",
    href: `${HSI}/filler-course-for-medical-professionals/`,
  },
  {
    title: "Oro-Facial Pain Botox",
    price: "£1,950 + VAT",
    duration: "1 day",
    detail: "Upper-face Botox + migraine + bruxism/TMJ + trapezius/trigger points integrated.",
    href: `${HSI}/oro-facial-pain-botox-course/`,
    featured: true,
  },
  {
    title: "Masseter Botox",
    price: "£650 + VAT",
    duration: "½ day",
    detail: "Jawline slimming and bruxism. Practical training with live models.",
    href: `${HSI}/botox-masseter-practical-course/`,
  },
  {
    title: "Botox for Headaches & Migraines",
    price: "£650 + VAT",
    duration: "½ day",
    detail: "Chronic migraine and tension headache protocols. Pattern mapping and dosing.",
    href: `${HSI}/botox-headaches-migraines-practical-course/`,
  },
  {
    title: "Trapezius & Trigger Points Botox",
    price: "£650 + VAT",
    duration: "½ day",
    detail: "Barbie neck (trapezius slimming) and myofascial trigger point injection.",
    href: `${HSI}/botox-trapezius-trigger-points-practical-course/`,
  },
  {
    title: "Calf Reduction Botox",
    price: "£650 + VAT",
    duration: "½ day",
    detail: "Calf slimming Botox for aesthetic leg contouring. Muscle selection and dosing.",
    href: `${HSI}/botox-calf-reduction-practical-course/`,
  },
];

const skinCourses = [
  {
    title: "PRP & Vampire Facial",
    price: "£575 + VAT",
    duration: "½ day",
    detail: "Blood processing, Vampire Facial technique, and hair restoration protocols.",
    href: `${HSI}/prp-vampire-facial-course/`,
  },
  {
    title: "Skin Peeling Course",
    price: "£575 + VAT",
    duration: "½ day",
    detail: "Chemical peel protocols from superficial to medium-depth treatments.",
    href: `${HSI}/skin-peeling-course/`,
  },
  {
    title: "Microneedling Course",
    price: "£575 + VAT",
    duration: "½ day",
    detail: "Collagen induction therapy with device selection and treatment protocols.",
    href: `${HSI}/microneedling-course/`,
  },
  {
    title: "Polynucleotides Course",
    price: "£575 + VAT",
    duration: "½ day",
    detail: "Bio-revitalisation with polynucleotide injections for skin regeneration.",
    href: `${HSI}/polynucleotides-course/`,
  },
  {
    title: "Profhilo Training",
    price: "£575 + VAT",
    duration: "½ day",
    detail: "Bio-remodelling with Profhilo using the 5-point BAP technique.",
    href: `${HSI}/profhilo-course/`,
  },
  {
    title: "Skin Rejuvenation Certificate",
    price: "£1,190 + VAT",
    duration: "Combine 3 skin modules",
    detail: "Structured certificate combining peels, microneedling and polynucleotides into one credential.",
    href: `${HSI}/skin-certificate-programme/`,
    featured: true,
  },
];

const advancedMasterclasses = [
  { title: "Cheeks Filler Masterclass", detail: "Midface volumisation, structural support, and lifting vectors.", href: `${HSI}/cheeks-filler-masterclass/` },
  { title: "Tear Trough Training", detail: "Periorbital filler placement, patient selection and cannula technique.", href: `${HSI}/tear-trough-filler-training/` },
  { title: "Jawline & Chin Masterclass", detail: "Mandibular contouring, chin projection and masculinisation/feminisation.", href: `${HSI}/jawline-chin-filler-masterclass/` },
  { title: "Lip Filler Masterclass", detail: "Vermillion border, volume, philtral columns and Cupid's bow refinement.", href: `${HSI}/lip-filler-masterclass/` },
  { title: "Non-Surgical Rhinoplasty", detail: "Dorsal hump camouflage, tip rotation and bridge augmentation.", href: `${HSI}/non-surgical-rhinoplasty-course/` },
  { title: "PDO Thread Lifting", detail: "Mono, screw and cog thread techniques for facial lifting.", href: `${HSI}/pdo-thread-lifting-course/` },
  { title: "Advanced Botox Techniques", detail: "Brow lifting, bunny lines, DAO, mentalis, platysma and hyperhidrosis.", href: `${HSI}/advanced-botox-course/` },
  { title: "Complication Management", detail: "Vascular occlusion recognition, hyalase protocols and emergency algorithms.", href: `${HSI}/complication-management-course/` },
];

const structuredProgrammes = [
  {
    title: "Certificate in Aesthetic Medicine (CAM)",
    price: "£3,200 + VAT",
    duration: "3 days",
    detail: "Foundation Botox & Fillers + Advanced techniques + Skin essentials. 48 CPD points. Open to beginners.",
    href: `${HSI}/certificate-aesthetic-medicine/`,
    level: "Step 2",
  },
  {
    title: "Fellowship in Aesthetic Medicine (FAM)",
    price: "£14,400 + VAT",
    duration: "11 clinical days over 3 months",
    detail: "CAM + Face module. 70+ live models. 1:2 mentor ratio. Two certificates awarded. Weekend-friendly cadence.",
    href: `${HSI}/fellowship-aesthetic-medicine/`,
    level: "Step 3",
    featured: true,
  },
  {
    title: "Internship in Aesthetic Medicine",
    price: "Contact HSI",
    duration: "Extended clinical immersion",
    detail: "Everything in Fellowship plus additional weeks of supervised clinic time. Maximum hands-on exposure.",
    href: `${HSI}/internship-aesthetic-medicine/`,
    level: "Highest",
  },
];

const fellowshipModules = [
  "Aesthetic Facial Assessment, Emergency Situations, Complications and Complaints Handling, Aesthetic Medicine Photography",
  "Botulinum Toxin Basic to Expert Level",
  "Understanding the Biophysical Skin Changes With Ageing, Facial Ageing & Aesthetic Treatments",
  "Developing the Aesthetic Eye, Mid Facial Rejuvenation and Contouring",
  "Peri-Oral Restoration and Rejuvenation",
  "Non-Surgical Rhinoplasty",
  "Business Strategy, Social Media Marketing and Content Building, Starting a Clinic",
];

const eligibleProfessions = [
  "Doctors (GMC registered)",
  "Dentists (GDC registered)",
  "Nurses & Midwives (NMC registered)",
  "Pharmacists (GPhC registered)",
  "Dental Therapists",
  "Paramedics",
  "Physiotherapists",
  "Physician Associates",
  "Operating Department Practitioners (ODP)",
  "International healthcare professionals (equivalent registration)",
];

const studentReviews = [
  { name: "Rachael Cotham", text: "I attended the foundation Botox and fillers course with no previous experience in aesthetics. The course was well presented with an online package followed by practical training. Would highly recommend." },
  { name: "Dr Addai", text: "Great experience from start to finish! All staff were so kind and helpful. The trainer, Dr Hena, was very skilled and knowledgeable, she supported the group throughout the day to ensure we all felt confident." },
  { name: "Dr Sarah Khan", text: "Fantastic foundation course. Very hands-on with live models. The ratio of delegates to trainers was excellent. Left feeling confident and ready to start treating patients." },
  { name: "Dr Priya Sharma", text: "Exceptional training quality. The hands-on experience with real patients gave me the confidence I needed. Highly recommend for any healthcare professional looking to enter aesthetics." },
  { name: "James Mitchell", text: "Outstanding course content and delivery. The trainers are experienced professionals who genuinely care about student success." },
  { name: "Dr Fatima Khan", text: "The best investment in my medical career. Comprehensive curriculum, excellent mentorship, and fantastic support throughout." },
];

const trainingFeatures = [
  {
    icon: Users,
    title: "Live Patient Clinics",
    description: "Real patient treatments — not models, not theory. Fellows treat actual patients on Harley Street under expert supervision.",
  },
  {
    icon: Stethoscope,
    title: "Expert Mentorship",
    description: "One-to-one training with Dr Ahmed Haq and the senior Cosmedocs faculty — published, GMC-registered aesthetic physicians.",
  },
  {
    icon: Award,
    title: "Sister Company Pedigree",
    description: "Cosmedocs is the clinical sister of Harley Street Institute — the postgraduate education arm running Foundation through Fellowship pathways since 2014.",
  },
  {
    icon: Target,
    title: "Comprehensive Curriculum",
    description: "From your first toxin to advanced full-face contouring, threads, biostimulators and complication management — all anchored in peer-reviewed protocols.",
  },
];

const faqData = [
  {
    question: "How is Cosmedocs related to Harley Street Institute?",
    answer:
      "Cosmedocs is the clinical sister company of Harley Street Institute. The Institute is the postgraduate education arm — it designs and accredits the curricula (Foundation, CAM, Fellowship, Skin Certificate). Cosmedocs provides the live Harley Street clinic where students treat real patients under our faculty. The two organisations share founders, premises and clinical standards.",
  },
  {
    question: "How does this training differ from other aesthetic courses?",
    answer:
      "Most courses rely on theory and models. Our students treat real patients in live clinical settings under expert supervision. Ask other providers how many actual patients their students treat — the difference is remarkable. Combined with the academic rigour of Harley Street Institute (literature reviews, evidence-based protocols, peer-reviewed journal), this is postgraduate training, not a weekend workshop.",
  },
  {
    question: "Which course should I start with?",
    answer:
      "Most beginners start with the one-day Foundation course, then progress to the CAM Certificate or add the Skin Rejuvenation Certificate alongside. Doctors and dentists targeting mastery enrol directly into the Fellowship (FAM). The Institute publishes the full pathway and entry requirements.",
  },
  {
    question: "Who can apply?",
    answer:
      "Doctors (GMC), dentists (GDC), nurses (NMC) and pharmacists (GPhC), plus equivalent international healthcare professionals. Dental therapists, paramedics, physiotherapists, physician associates and ODPs are also eligible. Foundation and CAM accept complete beginners. The Fellowship is best suited to practitioners committed to aesthetic medicine as a long-term career.",
  },
  {
    question: "Are the courses CPD accredited?",
    answer:
      "Yes. All Harley Street Institute pathways are CPD-accredited. AiCE points maintain a 1:1 ratio with CPD/CME hours. The Foundation and Advanced courses award 7 AiCE points, Masterclasses award 4–7 points, and the Fellowship awards 100+ AiCE points.",
  },
  {
    question: "Will I get insurance after training?",
    answer:
      "All training certificates are endorsed by Hamilton Fraser Cosmetic Insurance. Foundation graduates are typically insurance-ready for basic Botox and dermal filler treatments. We advise confirming directly with your preferred insurer.",
  },
  {
    question: "Is the Fellowship better than a university MSc?",
    answer:
      "The Fellowship in Aesthetic Medicine is designed to be more practical than many university Master's programmes, which often lack hands-on experience in actual aesthetic clinics. Our fellowship provides direct, mentorship-style training in live patient settings — essential for developing genuine aesthetic medicine proficiency.",
  },
  {
    question: "Is there career support after the Fellowship?",
    answer:
      "Yes. Fellows receive ongoing mentorship, access to the Harley Street Institute Aesthetic Intelligence library, business and pricing tools, and an invitation to become a recognised CosmeDocs Partner — a national network of trusted graduates with brand, marketing and educator rights in their region.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. A 25% deposit secures your place. The remainder is due at least 1 month before your Fellowship commences. For other courses, contact Harley Street Institute directly to discuss payment options.",
  },
  {
    question: "How do I enquire or apply?",
    answer:
      "All course enrolment, scheduling, brochures and dates are handled directly by Harley Street Institute. Visit harleystreetinstitute.com to browse the full course catalogue, request brochures and apply.",
  },
];

const AestheticTraining = () => {
  const seoData = generateSEOMetadata(
    "Aesthetic Medicine Training London | Cosmedocs × Harley Street Institute",
    "Sister company of Harley Street Institute. Foundation, Certificate (CAM), Fellowship (FAM), Skin Rejuvenation, Masterclasses and specialist Botox training — doctor-led, Harley Street, live patient clinics since 2014.",
    "/training/"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "Cosmedocs Faculty",
        "url": "https://www.cosmedocs.com/training/",
        "description": "Clinical training arm of Cosmedocs, sister company of Harley Street Institute, delivering postgraduate aesthetic medicine training from Harley Street since 2014.",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Harley Street Institute",
          "url": HSI,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB",
          },
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10 Harley Street",
          "addressLocality": "London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB",
        },
      },
      {
        "@type": "Course",
        "name": "Foundation in Botox & Dermal Fillers",
        "description": "One-day intensive entry-level training for healthcare professionals new to aesthetic medicine. Core injection techniques, facial anatomy, consultation. Real patients.",
        "provider": { "@type": "Organization", "name": "Harley Street Institute", "url": HSI },
        "url": `${HSI}/foundation-botox-and-dermal-fillers-training-course/`,
      },
      {
        "@type": "Course",
        "name": "Certificate in Aesthetic Medicine (CAM)",
        "description": "Three-day comprehensive certification combining foundation, advanced and skin training. 48 CPD points. Open to complete beginners.",
        "provider": { "@type": "Organization", "name": "Harley Street Institute", "url": HSI },
        "url": `${HSI}/certificate-aesthetic-medicine/`,
      },
      {
        "@type": "Course",
        "name": "Fellowship in Aesthetic Medicine (FAM)",
        "description": "The highest-level pathway. 11 clinical days, CAM + Face, 70+ live models, 1:2 mentor ratio. Two certificates awarded.",
        "provider": { "@type": "Organization", "name": "Harley Street Institute", "url": HSI },
        "url": `${HSI}/fellowship-aesthetic-medicine/`,
      },
      {
        "@type": "Course",
        "name": "Skin Rejuvenation Certificate",
        "description": "Skin-focused certificate covering peels, polynucleotides, biostimulators, microneedling and protocols.",
        "provider": { "@type": "Organization", "name": "Harley Street Institute", "url": HSI },
        "url": `${HSI}/skin-certificate-programme/`,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="aesthetic medicine training London, Harley Street Institute, Cosmedocs faculty, fellowship aesthetic medicine, CAM certificate, foundation botox course, dermal filler training, skin certificate, advanced masterclasses, oro-facial pain botox, masseter botox, PRP training, polynucleotides course" />
        <link rel="canonical" href={seoData.canonical} data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cosmedocs" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* ════════ HERO ════════ */}
        <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/a9a6ab97-73ca-4f52-8fdd-ae4676546fd5.png"
              alt="Fellowship in Aesthetic Medicine Certificate from Harley Street Institute showing professional qualification in cosmetic medicine training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          </div>
          <div className="page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 bg-[#C9A050]/15 border border-[#C9A050]/40 text-[#C9A050] px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
                  <Award className="w-3.5 h-3.5" />
                  Sister Company of Harley Street Institute
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight text-white">
                  Aesthetic Medicine
                  <span className="block text-[#C9A050]">Training</span>
                </h1>
                <p className="text-xl text-gray-200 mb-4 max-w-xl font-light">
                  Postgraduate education delivered with Harley Street Institute — Foundation, Certificate (CAM), Fellowship (FAM), Skin Rejuvenation and Advanced Masterclasses, taught in our live Harley Street clinic since 2014.
                </p>
                <p className="text-base text-[#C9A050]/90 mb-8 italic font-light">
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`${HSI}/aesthetic-courses/`} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#C9A050] text-black hover:bg-[#B8924A] rounded-full px-8 py-6 text-base font-semibold shadow-2xl w-full sm:w-auto">
                      Browse All Courses
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href={`${HSI}/fellowship-aesthetic-medicine/`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-base font-light backdrop-blur-sm w-full sm:w-auto">
                      Explore the Fellowship
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* ════════ SISTER COMPANY EXPLAINER ════════ */}
        <section className="py-20 bg-gradient-to-b from-neutral-900 to-black">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-4">Our academic arm</p>
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                    Cosmedocs <span className="text-[#C9A050]">×</span> Harley Street Institute
                  </h2>
                  <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                    <p>
                      Cosmedocs is the clinical sister company of <a href={HSI} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline font-medium">Harley Street Institute</a> — a postgraduate medical education institution based in Harley Street, London. The Institute designs and accredits the curricula; Cosmedocs supplies the live Harley Street clinic where students treat real patients.
                    </p>
                    <p>
                      Together, we have trained over 500 doctors, dentists, nurses and pharmacists across more than ten years. The same faculty that publishes the Institute's peer-reviewed reviews and clinical protocols teaches in our consulting rooms — there is no gap between research and chair.
                    </p>
                  </div>
                  <a href={HSI} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-[#C9A050] hover:text-white transition-colors font-medium">
                    Visit harleystreetinstitute.com
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-light text-[#C9A050] mb-2">10+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Years</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-light text-[#C9A050] mb-2">500+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Trained</p>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-light text-[#C9A050] mb-2">84+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Clinical hrs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ BIG HSI CTA BANNER ════════ */}
        <section className="py-10 bg-[#C9A050]/10 border-y border-[#C9A050]/20">
          <div className="page-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-1">All course details, dates & enrolment</p>
                <h3 className="text-2xl font-light">Everything you need is on harleystreetinstitute.com</h3>
              </div>
              <a
                href={HSI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-4 font-semibold transition-all shadow-lg whitespace-nowrap"
              >
                Go to Harley Street Institute
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ════════ STRUCTURED PROGRAMMES ════════ */}
        <section className="py-20 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Certification pathways</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4">Structured Training Programmes</h2>
              <p className="text-lg text-muted-foreground font-light">
                The flagship certification pathways that transform beginners into confident, advanced aesthetic practitioners.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {structuredProgrammes.map((c, i) => (
                <motion.a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-white border rounded-2xl p-7 hover:border-[#C9A050]/60 hover:shadow-xl transition-all ${c.featured ? "border-[#C9A050]/40 ring-1 ring-[#C9A050]/20" : "border-border"}`}
                >
                  {c.featured && (
                    <div className="absolute -top-3 left-6 bg-[#C9A050] text-black text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <p className="text-xs uppercase tracking-[0.15em] text-[#C9A050] mb-3">{c.level}</p>
                  <h3 className="text-xl font-medium leading-snug mb-3">{c.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-[#C9A050]" /> {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <PoundSterling className="h-3.5 w-3.5 text-[#C9A050]" /> {c.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-5">{c.detail}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#C9A050] font-medium group-hover:gap-2.5 transition-all">
                    View on Harley Street Institute
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ BEGINNER COURSES ════════ */}
        <section className="py-20 bg-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Beginner & injectable</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4">Botox & Dermal Filler Courses</h2>
              <p className="text-lg text-muted-foreground font-light">
                Entry-level and specialist injectable training for healthcare professionals new to aesthetics or targeting specific indications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {beginnerCourses.map((c, i) => (
                <motion.a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className={`group bg-white border rounded-xl p-5 hover:border-[#C9A050]/60 hover:shadow-lg transition-all ${c.featured ? "border-[#C9A050]/40" : "border-border"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A050] font-medium">{c.duration}</span>
                    {c.featured && <Star className="h-3.5 w-3.5 text-[#C9A050]" />}
                  </div>
                  <h3 className="text-base font-medium leading-snug mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{c.detail}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{c.price}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#C9A050] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SKIN COURSES ════════ */}
        <section className="py-20 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Skin & regeneration</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4">Skin Rejuvenation Training</h2>
              <p className="text-lg text-muted-foreground font-light">
                Low-risk, high-satisfaction skin treatments — an affordable entry point with excellent returns for your practice.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {skinCourses.map((c, i) => (
                <motion.a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`group bg-white border rounded-xl p-5 hover:border-[#C9A050]/60 hover:shadow-lg transition-all ${c.featured ? "border-[#C9A050]/40" : "border-border"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A050] font-medium">{c.duration}</span>
                    {c.featured && <Star className="h-3.5 w-3.5 text-[#C9A050]" />}
                  </div>
                  <h3 className="text-base font-medium leading-snug mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{c.detail}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{c.price}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#C9A050] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ADVANCED MASTERCLASSES ════════ */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-amber-50/40">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Advanced & specialist</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4">Advanced Masterclasses</h2>
              <p className="text-lg text-muted-foreground font-light">
                Half-day to full-day specialist training for experienced practitioners targeting specific facial regions and techniques.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {advancedMasterclasses.map((c, i) => (
                <motion.a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-border rounded-xl p-5 hover:border-[#C9A050]/60 hover:shadow-lg transition-all"
                >
                  <h3 className="text-base font-medium leading-snug mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{c.detail}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#C9A050] font-medium group-hover:gap-2 transition-all">
                    View Course <ExternalLink className="h-3 w-3" />
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={`${HSI}/aesthetic-courses/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A050] hover:text-black transition-colors font-medium"
              >
                View complete course catalogue on harleystreetinstitute.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ════════ PATHWAY COMPARISON TABLE ════════ */}
        <section className="py-20 bg-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Compare pathways</p>
                <h2 className="text-3xl md:text-4xl font-light mb-4">Foundation · Advanced · Masterclass · CAM · Fellowship</h2>
                <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto">
                  Every Harley Street Institute pathway at a glance — duration, audience, AiCE points, accreditation and outcome.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-4 pr-6 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Pathway</th>
                      <th className="py-4 pr-6 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Best For</th>
                      <th className="py-4 pr-6 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Duration</th>
                      <th className="py-4 pr-6 text-xs uppercase tracking-wider text-[#C9A050] font-medium">AiCE / CPD</th>
                      <th className="py-4 pr-6 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Outcome</th>
                      <th className="py-4 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light">
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 font-medium">Foundation</td>
                      <td className="py-4 pr-6 text-gray-300">Doctors, dentists, nurses new to aesthetics</td>
                      <td className="py-4 pr-6 text-gray-300">1 day</td>
                      <td className="py-4 pr-6 text-gray-300">7 AiCE pts</td>
                      <td className="py-4 pr-6 text-gray-300">Insurance-ready Botox + filler</td>
                      <td className="py-4"><a href={`${HSI}/foundation-botox-and-dermal-fillers-training-course/`} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Course →</a></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 font-medium">Advanced</td>
                      <td className="py-4 pr-6 text-gray-300">Practitioners with foundation experience</td>
                      <td className="py-4 pr-6 text-gray-300">1 day</td>
                      <td className="py-4 pr-6 text-gray-300">7 AiCE pts</td>
                      <td className="py-4 pr-6 text-gray-300">Cannula + advanced regions</td>
                      <td className="py-4"><a href={`${HSI}/advanced-botox-fillers/`} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Course →</a></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 font-medium">Masterclass</td>
                      <td className="py-4 pr-6 text-gray-300">HCPs targeting one indication</td>
                      <td className="py-4 pr-6 text-gray-300">½–1 day</td>
                      <td className="py-4 pr-6 text-gray-300">4–7 AiCE pts</td>
                      <td className="py-4 pr-6 text-gray-300">Single-indication mastery</td>
                      <td className="py-4"><a href={`${HSI}/aesthetic-masterclasses/`} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">View →</a></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 font-medium">CAM Certificate</td>
                      <td className="py-4 pr-6 text-gray-300">HCPs building a structured skillset</td>
                      <td className="py-4 pr-6 text-gray-300">3 days</td>
                      <td className="py-4 pr-6 text-gray-300">35+ AiCE pts</td>
                      <td className="py-4 pr-6 text-gray-300">Certificate in Aesthetic Medicine</td>
                      <td className="py-4"><a href={`${HSI}/certificate-aesthetic-medicine/`} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">CAM →</a></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-[#C9A050]">Fellowship (FAM)</td>
                      <td className="py-4 pr-6 text-gray-300">Doctors / dentists pursuing the highest credential</td>
                      <td className="py-4 pr-6 text-gray-300">11 days / 3 months</td>
                      <td className="py-4 pr-6 text-gray-300">100+ AiCE pts</td>
                      <td className="py-4 pr-6 text-gray-300">Fellowship in Aesthetic Medicine</td>
                      <td className="py-4"><a href={`${HSI}/fellowship-aesthetic-medicine/`} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] hover:underline">Apply →</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">All pathways are CPD-accredited. AiCE points maintain a 1:1 ratio with CPD/CME hours.</p>
            </motion.div>
          </div>
        </section>

        {/* ════════ FELLOWSHIP DEEP-DIVE ════════ */}
        <section className="py-20 bg-gradient-to-b from-background to-accent">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">The highest credential</p>
                <h2 className="text-3xl md:text-4xl font-light mb-4">Fellowship in Aesthetic Medicine</h2>
                <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
                  Established in 2014, the world's first and only live clinical fellowship designed to transform beginners and intermediate injectors into confident, advanced practitioners.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                    <iframe
                      src="https://www.youtube.com/embed/xg0g-GOZMjc"
                      title="Inside the World's First Fellowship in Aesthetic Medicine - Harley Street Institute"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/lovable-uploads/76a0e857-ddad-41fd-965b-459a41edaed7.png"
                      alt="Fellowship graduates receiving aesthetic medicine certification from Harley Street Institute"
                      className="rounded-lg shadow-md w-full h-40 object-cover"
                    />
                    <img
                      src="/lovable-uploads/ea1c7290-2824-4fe9-9b4b-f7b4a8dca917.png"
                      alt="Aesthetic medicine fellowship certificate presentation ceremony with medical professionals"
                      className="rounded-lg shadow-md w-full h-40 object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-[#C9A050]">11</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Clinical days</p>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-[#C9A050]">70+</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Live models</p>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-[#C9A050]">1:2</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Mentor ratio</p>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-[#C9A050]">2</div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Certificates</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4">How the 11 Days Are Structured</h3>
                    <div className="space-y-4 text-sm text-muted-foreground font-light">
                      <div className="flex gap-4">
                        <div className="w-16 shrink-0 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Month 1</div>
                        <div>
                          <p className="font-medium text-foreground">CAM — Certificate in Aesthetic Medicine</p>
                          <p>3 consecutive days covering Foundation Botox & Fillers, Advanced techniques, and Skin essentials.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-16 shrink-0 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Months 2–3</div>
                        <div>
                          <p className="font-medium text-foreground">Face Module — 8 days over 4 weekends</p>
                          <p>Saturdays: full hands-on model days. Sundays: clinic shadowing followed by post-clinic model sessions.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-16 shrink-0 text-xs uppercase tracking-wider text-[#C9A050] font-medium">Throughout</div>
                        <div>
                          <p className="font-medium text-foreground">Optional weekday clinic shadowing</p>
                          <p>Fellows are welcome to drop in for clinic observation on any weekday they are free. A minimum of two sessions is recommended.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4">7-Module Curriculum</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground font-light">
                      {fellowshipModules.map((m, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#C9A050]/10 text-[#C9A050] text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-xl p-5">
                    <p className="text-sm text-foreground font-light italic">
                      "Many new practitioners begin taking 20–30 minutes for a single lip filler treatment. By the end of the Fellowship, our fellows perform the same treatment in under 5 minutes, with fewer than 8–12 total injections across both lips — with accuracy, symmetry, and confidence."
                    </p>
                  </div>

                  <a
                    href={`${HSI}/fellowship-aesthetic-medicine/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-6 py-3 font-semibold transition-all"
                  >
                    Apply for Fellowship
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ WHO WE TRAIN ════════ */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Admissions</p>
                <h2 className="text-3xl md:text-4xl font-light mb-4">Who We Train</h2>
                <p className="text-lg text-muted-foreground font-light">
                  Our courses are open to registered healthcare professionals from a range of clinical backgrounds.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {eligibleProfessions.map((prof) => (
                  <div
                    key={prof}
                    className="flex items-center gap-2 bg-white border border-border rounded-lg px-4 py-3 text-sm font-light"
                  >
                    <Shield className="h-4 w-4 text-[#C9A050] shrink-0" />
                    <span>{prof}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-accent rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground font-light">
                  International healthcare professionals with equivalent registration in their home country are also eligible. Please contact Harley Street Institute to verify your qualifications.
                </p>
                <a
                  href={`${HSI}/contact-us/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[#C9A050] hover:text-foreground font-medium text-sm transition-colors"
                >
                  Contact HSI Admissions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ STUDENT REVIEWS ════════ */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 via-white to-amber-50/40">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">Testimonials</p>
              <h2 className="text-3xl font-light mb-4">What Our Students Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                Verified reviews from healthcare professionals who have trained with Harley Street Institute at Cosmedocs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {studentReviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-[#C9A050] text-[#C9A050]" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">"{review.text}"</p>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Verified HSI Student</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground font-light">
                Excellent — Based on <span className="font-medium">103 reviews</span> on Google
              </p>
            </div>
          </div>
        </section>

        {/* ════════ FELLOWSHIP SUCCESS STORIES ════════ */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-light mb-4">Fellowship Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                Graduates receiving their Fellowship certificates — and a Fellow describing the experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/lovable-uploads/76a0e857-ddad-41fd-965b-459a41edaed7.png"
                    alt="Fellowship graduates receiving aesthetic medicine certification from Harley Street Institute"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/lovable-uploads/ea1c7290-2824-4fe9-9b4b-f7b4a8dca917.png"
                    alt="Aesthetic medicine fellowship certificate presentation ceremony with medical professionals"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/lovable-uploads/d06667aa-67ce-46e1-b21c-7ec4fe5e59e2.png"
                    alt="Group of fellowship graduates with aesthetic medicine certificates from Harley Street training"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/lovable-uploads/a60367ae-0374-4f0a-95c7-83b324231aef.png"
                    alt="Medical professionals celebrating completion of aesthetic medicine fellowship training programme"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light">Fellow Interview</h3>
                <p className="text-muted-foreground font-light">
                  An exclusive interview with one of our Fellows discussing the experience inside our aesthetic medicine training programme, run with Harley Street Institute since 2014.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/xg0g-GOZMjc?start=82"
                    title="Aesthetic Medicine Fellowship Student Interview - Cosmedocs Training Since 2014"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ STUDENT RESULTS ════════ */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 via-white to-amber-50/40">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-light mb-4">Student Results & Clinical Skills</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
                Real results achieved by Fellows during their live patient training — the precision and restraint developed through our comprehensive programme.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light">Excellence in Practice</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our Fellows work directly with real patients under expert supervision, developing skills and clinical judgement that only come from authentic practice. These before-and-after results demonstrate the calibre of work our students achieve during training.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-2xl font-light text-[#C9A050] mb-1">84+</div>
                    <div className="text-sm text-muted-foreground">Clinical Hours</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-2xl font-light text-[#C9A050] mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Real Patients</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Our aesthetics is invisible art • Bold • Natural • Always Your Way"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <BeforeAfterImageViewer
                  images={[
                    {
                      src: "/lovable-uploads/25d47872-3be5-4faa-9b90-1f3f4cb4ac51.png",
                      alt: "Fellowship student performing precise injectable treatment with expert supervision",
                      caption: "Fellow demonstrating advanced injection technique during live patient training",
                    },
                    {
                      src: "/lovable-uploads/0468aaae-f777-4be0-a0b9-a51f44a46d2e.png",
                      alt: "Comprehensive before and after results showing natural enhancement achieved by fellowship student",
                      caption: "Multi-angle assessment showing natural, balanced results achieved during training",
                    },
                    {
                      src: "/lovable-uploads/9eb0c6e7-ea1b-4de2-b5c2-9181159319da.png",
                      alt: "Before and after facial enhancement showing subtle natural improvement by fellowship trainee",
                      caption: "Subtle facial enhancement demonstrating invisible art philosophy",
                    },
                    {
                      src: "/lovable-uploads/e91e0eaa-62bb-43d4-b259-6bc94d965711.png",
                      alt: "Side profile before and after showing skilled non-surgical enhancement by student",
                      caption: "Profile enhancement showcasing precision developed through mentorship",
                    },
                    {
                      src: "/lovable-uploads/580a1722-2a3f-4cc7-b193-dada72f9a582.png",
                      alt: "Before and after nasal enhancement showing expert technique learned during fellowship",
                      caption: "Non-surgical nose refinement demonstrating advanced technique mastery",
                    },
                    {
                      src: "/lovable-uploads/eaa3e1b9-b337-4518-a4ce-58818e62334f.png",
                      alt: "Dorsal correction before and after showing fellowship student's developing expertise",
                      caption: "Dorsal correction — precision technique learned through hands-on training",
                    },
                  ]}
                  triggerLabel="View Student Results Gallery"
                  title="Fellowship Student Clinical Results"
                  description="Real results achieved by students during their live patient training"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ WHAT SETS US APART ════════ */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-light mb-6">The Cosmedocs Faculty Experience</h2>
              <p className="text-lg text-muted-foreground font-light">
                <AutoLinkedText>
                  Ask any other training provider how many real patients their students actually treat. The difference is remarkable. Our training is built on authentic clinical practice — anchored in the peer-reviewed protocols published by Harley Street Institute.
                </AutoLinkedText>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {trainingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-border hover:border-[#C9A050]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C9A050]/15 rounded-lg p-3 flex-shrink-0">
                          <feature.icon className="h-6 w-6 text-[#C9A050]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground font-light">
                            <AutoLinkedText>{feature.description}</AutoLinkedText>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CURRICULUM OVERVIEW ════════ */}
        <section className="py-16 bg-gradient-to-br from-black via-neutral-900 to-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-light text-center mb-12">Comprehensive Training Curriculum</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-[#C9A050]">Foundation Modules</h3>
                  <ul className="space-y-3 text-gray-300 font-light">
                    {[
                      "Facial Anatomy & Assessment",
                      "Injectable Techniques & Safety",
                      "Patient Consultation Skills",
                      "Complication Management",
                    ].map((m) => (
                      <li key={m} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#C9A050] flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 text-[#C9A050]">Advanced Procedures</h3>
                  <ul className="space-y-3 text-gray-300 font-light">
                    {[
                      "Complex Facial Contouring",
                      "PDO Thread Lifting",
                      "Advanced Botox Techniques",
                      "Business & Practice Setup",
                    ].map((m) => (
                      <li key={m} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#C9A050] flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════ POST-FELLOWSHIP: COSMEDOCS PARTNER NETWORK ════════ */}
        <section className="py-20 bg-black text-white">
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A050] mb-3">After the Fellowship</p>
                <h2 className="text-3xl md:text-4xl font-light mb-4">Become a CosmeDocs Partner</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
                  Fellowship graduates are invited to join our national partner network — a trusted circle of practitioners we have personally trained.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-7"
                >
                  <h3 className="text-xl font-medium mb-5 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#C9A050]" /> Partner Benefits
                  </h3>
                  <ul className="space-y-3 text-gray-300 font-light text-sm">
                    {[
                      "Use of the CosmeDocs brand alongside your own clinic identity",
                      "Dedicated profile and microsite linked from CosmeDocs.com",
                      "SEO and promotion from our in-house marketing team",
                      "Access to our licensed before-and-after library (non-attributed)",
                      "Technical support, booking tools and admin help",
                      "Visibility within a nationally trusted aesthetics brand",
                      "Early access to new AI-based clinical systems",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-7"
                >
                  <h3 className="text-xl font-medium mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#C9A050]" /> Educator Rights
                  </h3>
                  <p className="text-gray-400 text-sm font-light mb-4">As a Fellow and Partner, you are also granted:</p>
                  <ul className="space-y-3 text-gray-300 font-light text-sm">
                    {[
                      "First right to run Cosmedocs-approved Foundation Day and CAM Certificate training in your region",
                      "Harley Street Institute educational branding and curriculum",
                      "Majority share of revenue from courses you deliver",
                      "Full academic and logistical support from our team",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Trophy className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <p className="text-[#C9A050] text-sm italic font-light">
                      Become the leading educator in your area — while earning and building your name.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-2xl p-7 text-center"
              >
                <h3 className="text-xl font-medium mb-3">You Start Free. We Build With You.</h3>
                <p className="text-gray-300 font-light text-sm max-w-3xl mx-auto leading-relaxed">
                  No cost to activate and no fee for the first six months — and after that, only if we have helped you earn more. We invest in building your regional microsite, your search presence and your inclusion in national campaigns. You keep all your existing clients and revenue.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="py-16 bg-background">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-light text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                      <AutoLinkedText>{faq.answer}</AutoLinkedText>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ════════ FINAL CTA — BIG HSI LINK ════════ */}
        <section className="py-24 bg-gradient-to-br from-black via-neutral-900 to-black text-white">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A050] mb-4">Apply • Enrol • Brochures</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                All course enquiries are handled by<br />
                <span className="text-[#C9A050]">Harley Street Institute</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                Browse the full course catalogue, view upcoming dates, download brochures and apply directly with our academic sister company.
              </p>
              <a
                href={HSI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-10 py-5 text-lg font-semibold transition-all shadow-2xl shadow-[#C9A050]/20"
              >
                Visit harleystreetinstitute.com
                <ExternalLink className="h-5 w-5" />
              </a>
              <p className="text-xs text-gray-500 mt-6 italic">
                Cosmedocs Faculty operates in academic partnership with Harley Street Institute — 10 Harley Street, London W1G 9PF.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AestheticTraining;
