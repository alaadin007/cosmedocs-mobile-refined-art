import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Building2,
  Users,
  Sparkles,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Crown,
  Handshake,
  HeartPulse,
  Scissors,
  ShieldCheck,
} from "lucide-react";

/**
 * Harley Street Clinic Partnership — long-form SEO authority article
 * Target intents: "Harley Street clinic partnership", "share clinic premises Harley Street",
 * "plastic surgeon Harley Street opportunity", "aesthetic doctor Harley Street partner",
 * "consulting room collaboration Harley Street".
 * Discretion: avoids "rent / rental / lease" language per brand policy.
 */
const partnershipFaqs = [
  {
    question: "What is a clinic partnership on Harley Street?",
    answer:
      "A clinic partnership on Harley Street is a structured clinical collaboration where established practitioners share premises, patients, and operational support rather than operating in isolation. At Cosmedocs, partnership means you work within a fully staffed clinic at 8–10 Harley Street with reception, nursing cover, marketing, and compliance already in place — so you can focus on medicine while the infrastructure is handled collectively.",
  },
  {
    question: "How does shared premises work at Cosmedocs?",
    answer:
      "Shared premises at Cosmedocs means consulting rooms, treatment spaces, reception, and clinical support are all provided under one roof. You book the rooms you need, arrive to a prepared environment, and leave the patient bookings, aftercare calls, and marketing to the shared team. It is the opposite of carrying your own lease, insurance, and staff — everything is pooled, which makes the economics calmer and the days more sociable.",
  },
  {
    question: "Who can join an aesthetic doctor partnership at Cosmedocs?",
    answer:
      "We invite established Aesthetic Doctors who are doctor-led in their philosophy — comfortable with conservative dosing, regenerative protocols, and patients who value discretion over volume. You should be GMC-registered, already running your own practice, and genuinely interested in contributing to a team rather than simply using a room. The aesthetic doctor partnership is selective and invitation-led.",
  },
  {
    question: "What is included in a Harley Street clinic partnership?",
    answer:
      "The partnership covers premises and consulting rooms at 8–10 Harley Street, reception and nursing support, CQC framework through PrivaDr Ltd where required, marketing and patient acquisition via our ranking website and 124K+ Instagram audience, and — importantly — a team of peers. The financial structure is discussed privately, but partnering with us is meaningfully less expensive than carrying independent Harley Street overheads.",
  },
  {
    question: "How is this different from independent practice?",
    answer:
      "Independent practice on Harley Street means your own premises, separate insurance, separate marketing, separate compliance, and often a quiet diary. A Cosmedocs partnership replaces all of that with a shared platform: patients are already flowing in, the team already knows your preferences, and the administrative burden sits with the clinic, not with you. Most partners describe the same shift — the diary fills, the load lifts, and the work becomes enjoyable again.",
  },
  {
    question: "Can Plastic Surgeons partner at Cosmedocs too?",
    answer:
      "Yes. We actively invite established Plastic Surgeons — GMC specialist register, hospital affiliations, an existing practice — who would benefit from a refined non-surgical and consultation home in central London. For Plastic Surgeons, the partnership is a natural base for pre-operative consultations, post-operative reviews, and non-surgical adjuncts, all within a clinic that patients already trust.",
  },
  {
    question: "What is the Harley Street Institute and how do partners use it?",
    answer:
      "The Harley Street Institute is our training and education arm, historically focused on aesthetic medicine and now broadening into non-aesthetic medical training. Partners can lead courses, sit on faculty, or co-author curricula — making teaching a genuine part of their career rather than an afterthought. It is one of several ways to be involved at Cosmedocs beyond clinical sessions alone.",
  },
  {
    question: "How do I start a conversation about partnership?",
    answer:
      "The first step is a short, private enquiry to pashma@cosmedocs.com — one paragraph about you, and one about what you would like to build. We read every message personally. If the fit feels right, we arrange a confidential conversation with our medical director, followed by a walk-through of the clinic, the patient pathway, and the commercial structure. The decision is mutual and unhurried.",
  },
];

const aestheticDoctorFaqs = [
  {
    question: "What does an aesthetic doctor partnership at Cosmedocs actually look like day-to-day?",
    answer:
      "You arrive at 8–10 Harley Street to a prepared consulting room, a diary already populated by our patient acquisition team, a nurse on hand for assistance, and reception managing rebookings and aftercare. You consult, treat, and leave — the marketing, compliance, stock, sharps, and follow-up calls are handled by the shared team. Most partner doctors describe the shift as moving from running a small business to simply practising medicine again.",
  },
  {
    question: "Is this an aesthetic doctor partnership or a room rental?",
    answer:
      "It is a partnership, not a rental. We do not let rooms by the hour. Partner aesthetic doctors join the Cosmedocs clinical platform — sharing patients, protocols, reputation and overhead — under a commercial structure that is meaningfully more favourable than carrying a Harley Street lease alone. The arrangement is built around shared growth, not square footage.",
  },
  {
    question: "What experience do you expect from an aesthetic doctor partner?",
    answer:
      "GMC registration, an established independent practice, fluency in injectables and regenerative protocols, and a doctor-led philosophy — conservative dosing, natural results, and patients who value discretion. We are not the right home for high-volume, filter-driven aesthetics. We are the right home for clinicians whose patients return for years.",
  },
  {
    question: "Will I keep my own patients and my own clinical identity?",
    answer:
      "Yes. Your patients remain your patients, your clinical decisions remain yours, and your professional identity stays intact. The partnership adds Cosmedocs patients to your diary and the Cosmedocs team to your day — it does not absorb your practice.",
  },
  {
    question: "How does Cosmedocs generate the patient flow for partner doctors?",
    answer:
      "Through a ranking website, a 124K+ Instagram audience, long-standing media presence, returning patients, and the Harley Street Institute network. Partner aesthetic doctors plug into an already-warm pipeline rather than building one from scratch — which is usually the most expensive and slowest part of independent practice.",
  },
  {
    question: "Can I also teach through the Harley Street Institute as a partner?",
    answer:
      "Yes — and many of our partner doctors do. The Harley Street Institute offers a faculty route into aesthetic and increasingly non-aesthetic medical training. Teaching is treated as a serious part of a clinician's career here, not an afterthought.",
  },
  {
    question: "How quickly can an aesthetic doctor partnership begin?",
    answer:
      "After a private conversation with our medical director and a clinic walk-through, onboarding is typically possible within four to eight weeks — enough time to complete diligence, align diaries, and brief the team on your protocols. We deliberately do not rush this stage.",
  },
];

const HarleyStreetClinicPartnership = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Harley Street Clinic Partnership — Share Our Premises, Share Our Patients",
    description:
      "Cosmedocs is inviting established Plastic Surgeons and Aesthetic Doctors to partner with our Harley Street clinic. A collaborative model that covers your overheads, supplies patients, and lets you focus on medicine.",
    author: { "@type": "Organization", name: "Cosmedocs" },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Cosmedocs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8–10 Harley Street",
        addressLocality: "London",
        postalCode: "W1G 9PF",
        addressCountry: "GB",
      },
    },
    mainEntityOfPage:
      "https://www.cosmedocs.com/harley-street-clinic-partnership",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e1]">
      <Helmet>
        <title>
          Harley Street Clinic Partnership | Share Our Premises | Cosmedocs
        </title>
        <meta
          name="description"
          content="Partner with Cosmedocs at 8–10 Harley Street. Established Plastic Surgeons and Aesthetic Doctors share our premises, patients and team — no overheads, no isolation. Apply privately."
        />
        <link
          rel="canonical"
          href="https://www.cosmedocs.com/harley-street-clinic-partnership"
          data-rh="true"
        />
        <meta
          property="og:title"
          content="Partner with Cosmedocs at 8–10 Harley Street"
        />
        <meta
          property="og:description"
          content="A collaborative Harley Street partnership for established Plastic Surgeons and Aesthetic Doctors — overheads covered, patients supplied, team built in."
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#C9A050]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,160,80,0.15),_transparent_60%)]" />
        <div className="container max-w-5xl mx-auto px-6 py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge
              variant="outline"
              className="border-[#C9A050]/50 text-[#C9A050] mb-6 tracking-widest text-xs uppercase"
            >
              Practitioner Partnerships · By Invitation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Partner with Cosmedocs at{" "}
              <span className="text-[#C9A050]">8–10 Harley Street</span>
            </h1>
            <p className="text-lg md:text-xl text-[#f5f0e1]/70 max-w-3xl leading-relaxed">
              We are inviting a small number of established Plastic Surgeons and
              Aesthetic Doctors to share our premises, our patients and our
              team — in the quieter, more refined lower end of Harley Street.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#C9A050] text-[#0a0a0a] hover:bg-[#d9b060]"
              >
                <a href="mailto:pashma@cosmedocs.com?subject=Harley%20Street%20Partnership%20Enquiry">
                  Enquire Privately <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#C9A050]/40 text-[#f5f0e1] hover:bg-[#C9A050]/10"
              >
                <Link to="/partnerships">View Investment Model</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="container max-w-3xl mx-auto px-6 py-20 prose prose-invert prose-headings:font-serif prose-headings:text-[#f5f0e1] prose-p:text-[#f5f0e1]/80 prose-strong:text-[#C9A050] prose-a:text-[#C9A050] prose-a:no-underline hover:prose-a:underline">
        <p className="lead text-xl">
          Cosmedocs is built on a quiet conviction: the best aesthetic medicine
          is invisible art — bold, natural, always the patient's way. After more
          than a decade on Harley Street, we have learned that the same
          principle applies to how a clinic itself is run. The most rewarding
          practices are not built by clinicians working in isolation behind
          identical doors. They are built by small, deliberate teams who share a
          standard, a patient pathway and a physical home. That is the
          partnership we are now opening to a handful of established
          practitioners.
        </p>

        <h2>Why we are opening a partnership — and why now</h2>
        <p>
          Independent Harley Street practice has become harder, not easier. The
          economics of a single consulting room, fragmented marketing, separate
          insurance, separate nursing cover and separate compliance are
          punishing — and frankly, lonely. Many excellent surgeons and doctors
          we speak to describe the same pattern: a beautiful CV, a quiet diary,
          and a growing administrative burden that pulls them away from
          medicine.
        </p>
        <p>
          We have spent ten years building the opposite of that. A custom
          renovated clinic at <strong>8–10 Harley Street</strong> — the quieter,
          more discreet lower end of the street, where the older architecture
          and refined patient demographic still hold — fully staffed, fully
          marketed, with a patient database that grows every week. Rather than
          continue to expand only with our own clinicians, we are inviting a
          small number of senior partners to share that platform with us.
        </p>

        <h2>What partnership means at Cosmedocs</h2>
        <p>
          This is not a desk-share. It is not a sessional booking. It is a
          structured clinical partnership for practitioners who want a Harley
          Street home without the overheads, the isolation, or the silent
          months of building a brand from scratch. Partnering with us covers
          every line item that would otherwise sit on your own balance sheet:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Premises and consulting rooms</strong> at 8–10 Harley
            Street — bookable, branded, and ready for clinical use.
          </li>
          <li>
            <strong>Reception, nursing and clinical support</strong> already in
            post and trained to our standard.
          </li>
          <li>
            <strong>CQC framework</strong> through our partner PrivaDr Ltd at
            10 Harley Street, London W1G 9PF for treatments that require it.
          </li>
          <li>
            <strong>Marketing, SEO and patient acquisition</strong> — a website
            that ranks, a 124K+ Instagram audience, and an editorial pipeline
            that already speaks to your future patients.
          </li>
          <li>
            <strong>A team to belong to</strong> — peer review, shared cases,
            shared coffee, shared difficult days. The bit that makes the rest
            of it bearable.
          </li>
        </ul>
        <p>
          The financial mechanics are deliberately not published. They are
          discussed privately, in person, with the small number of clinicians
          we invite to the next stage. What we will say openly: partnering with
          us is meaningfully less expensive than carrying your own Harley
          Street overheads, and considerably less exposed.
        </p>

        <h2>Who we are looking for</h2>
        <p>
          We are not trying to grow quickly. We are trying to grow{" "}
          <em>well</em>. The clinicians we are speaking with tend to share a
          profile:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Established Plastic Surgeons</strong> — GMC specialist
            register, hospital affiliations, an existing practice that would
            benefit from a refined non-surgical and consultation home in
            central London.
          </li>
          <li>
            <strong>Established Aesthetic Doctors</strong> — doctor-led, not
            injector-led; comfortable with conservative dosing, regenerative
            protocols, and patients who value discretion over volume.
          </li>
          <li>
            <strong>Clinicians who want to belong to a team</strong>, contribute
            to clinical governance, and grow the clinic rather than simply
            occupy a room inside it.
          </li>
        </ul>
        <p>
          If your instinct is to build alongside other senior clinicians rather
          than compete with them across the corridor, you are the person this
          page was written for.
        </p>

        <h2>The premises — 8–10 Harley Street</h2>
        <p>
          Harley Street is not one street; it is two halves. The upper end,
          closer to Marylebone Road, has expanded into larger, higher-volume
          buildings. The lower end — where we sit — has retained the older
          Georgian architecture, the quieter patient flow and the addresses
          that international patients still recognise. Our clinic has been
          custom renovated to the standard of a private members' club rather
          than a medical facility: warm lighting, soft acoustics, a controlled
          reception experience, and treatment rooms designed for both injectable
          work and energy-based devices.
        </p>
        <p>
          For patients, that environment quietly does half the consultation for
          us. For partners, it removes the single largest objection most
          private clinicians face when patients first walk in.
        </p>

        <h2>Beyond the clinic — the wider Cosmedocs ecosystem</h2>
        <p>
          A partnership at Cosmedocs is rarely just clinical sessions. Most of
          our partners end up active across two or three of the businesses we
          run from the same Harley Street base. There are multiple ways to be
          involved, and you are welcome to choose the combination that suits
          your career:
        </p>

        <h3>
          <GraduationCap className="inline w-5 h-5 mr-2 text-[#C9A050]" />
          Harley Street Institute — training and education
        </h3>
        <p>
          Our training arm, the Harley Street Institute, has historically focused
          on aesthetic medicine: foundation and advanced courses for doctors,
          dentists and nurses across injectables, threads, regenerative
          protocols and energy-based devices. We are now actively broadening the
          curriculum into <strong>non-aesthetic medical training</strong> —
          minor surgery, dermatology, women's health, GP upskilling and
          procedural medicine — and we are looking for senior clinicians to
          lead, faculty, or co-author those courses. If teaching is part of
          your identity, this is an immediate route in.
        </p>

        <h3>
          <Stethoscope className="inline w-5 h-5 mr-2 text-[#C9A050]" />
          PrivaDr — concierge medicine
        </h3>
        <p>
          <strong>PrivaDr</strong> is our concierge medicine company, based at
          the same Harley Street address. It looks after private GP services,
          longitudinal health management, executive screening and the medical
          oversight that high-net-worth patients quietly expect. Partners with
          a GP, internal medicine or longevity interest can plug directly into
          PrivaDr as a clinical lead or sessional consultant — with the same
          shared overheads, the same shared reception, the same shared patient
          flow.
        </p>

        <h3>
          <Scissors className="inline w-5 h-5 mr-2 text-[#C9A050]" />
          Cosmedocs Clinical
        </h3>
        <p>
          The core aesthetic and minor surgical practice — injectables,
          regenerative skin, thread lifts, energy-based devices, hair restoration
          and the consultative pathways that surround them. For Plastic
          Surgeons, this is also where your non-surgical and pre/post-operative
          consultation work naturally lives.
        </p>

        <h2>What partnership genuinely changes for you</h2>
        <p>
          Most clinicians who join us describe the same three changes inside
          the first six months. The diary fills, because patients are already
          arriving and now have a reason to see you specifically. The
          administrative load disappears, because reception, bookings,
          aftercare and marketing sit with the team rather than with you. And —
          quietly, the one that matters most — the work becomes enjoyable
          again, because there are colleagues in the corridor who understand
          exactly what your day has looked like.
        </p>
        <p>
          That is the part the spreadsheets do not capture, and the part we
          will not pretend is optional. Cosmedocs is, deliberately, a clinic
          that is good to work in. Partners join because of the patients and
          the premises. They stay because of the team.
        </p>

        <h2>How the conversation works</h2>
        <p>
          Partnership at Cosmedocs is invitation-led and intentionally private.
          The process is short:
        </p>
        <ol className="space-y-2">
          <li>
            A short written enquiry to{" "}
            <a href="mailto:pashma@cosmedocs.com">pashma@cosmedocs.com</a> —
            one paragraph on you, one on what you would like to build.
          </li>
          <li>
            A confidential first conversation, in person at 8–10 Harley Street
            or via video, with our medical director.
          </li>
          <li>
            A walk-through of the clinic, the patient pathway, the team and the
            commercial structure — which we share openly at this stage, not
            before.
          </li>
          <li>
            A small mutual decision, made calmly, on whether to proceed.
          </li>
        </ol>
        <p>
          We are deliberately slow at this part. The clinicians who have joined
          us over the past decade have all gone through some version of this
          quiet conversation, and we have never regretted taking the time.
        </p>

        <h2>An invitation, not an advertisement</h2>
        <p>
          If you are an established Plastic Surgeon or Aesthetic Doctor who has
          quietly outgrown working alone — and the idea of a Harley Street
          home with the overheads, the marketing, the team and the patients
          already in place sounds less like a compromise and more like a
          relief — we would like to hear from you.
        </p>
        <p>
          Cosmedocs is small, deliberate and selective. We do not need many
          partners. We need the right ones. If that might be you, the email
          below is read personally.
        </p>
      </article>

      {/* FAQ SECTION */}
      <section className="border-t border-[#C9A050]/20 bg-[#0d0d0d]">
        <div className="container max-w-3xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="border-[#C9A050]/50 text-[#C9A050] mb-6 tracking-widest text-xs uppercase"
            >
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif mb-10">
              Questions about{" "}
              <span className="text-[#C9A050]">clinic partnership</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {partnershipFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-[#C9A050]/20 rounded-xl px-6 bg-[#0a0a0a] data-[state=open]:border-[#C9A050]/50"
                >
                  <AccordionTrigger className="text-left text-[#f5f0e1] hover:text-[#C9A050] py-5 text-base md:text-lg font-medium no-underline hover:no-underline [&>svg]:text-[#C9A050]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#f5f0e1]/70 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <FAQSchema faqs={partnershipFaqs} />

      {/* ROUTES IN */}
      <section className="border-t border-[#C9A050]/20 bg-[#0d0d0d]">
        <div className="container max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Three ways to <span className="text-[#C9A050]">partner with us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: HeartPulse,
                title: "Cosmedocs Clinical",
                copy: "Aesthetic and minor surgical practice from a fully staffed Harley Street home.",
              },
              {
                icon: GraduationCap,
                title: "Harley Street Institute",
                copy: "Lead or faculty aesthetic and non-aesthetic medical training courses.",
              },
              {
                icon: Stethoscope,
                title: "PrivaDr Concierge",
                copy: "Private GP and longitudinal health management for discerning patients.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border border-[#C9A050]/20 rounded-2xl p-8 bg-[#0a0a0a] hover:border-[#C9A050]/50 transition-colors"
              >
                <c.icon className="w-8 h-8 text-[#C9A050] mb-4" />
                <h3 className="text-xl font-serif mb-3">{c.title}</h3>
                <p className="text-[#f5f0e1]/70 text-sm leading-relaxed">
                  {c.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#C9A050]/20">
        <div className="container max-w-3xl mx-auto px-6 py-24 text-center">
          <Crown className="w-10 h-10 text-[#C9A050] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Your conversation begins here
          </h2>
          <p className="text-[#f5f0e1]/70 mb-10 max-w-xl mx-auto">
            Cosmedocs partnerships are by private enquiry. Write one paragraph
            about yourself and one about what you would like to build. We
            answer every message personally.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#C9A050] text-[#0a0a0a] hover:bg-[#d9b060]"
          >
            <a href="mailto:pashma@cosmedocs.com?subject=Harley%20Street%20Partnership%20Enquiry">
              pashma@cosmedocs.com
            </a>
          </Button>
          <p className="text-xs text-[#f5f0e1]/40 mt-8">
            CQC-regulated treatments are delivered in partnership with PrivaDr
            Ltd, 10 Harley Street, London W1G 9PF.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HarleyStreetClinicPartnership;
