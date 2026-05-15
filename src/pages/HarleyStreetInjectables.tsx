import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Award, Shield, Stethoscope, ArrowRight, MapPin, Syringe, Sparkles } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const CANONICAL = 'https://www.cosmedocs.com/harley-street-injectables/';

export default function HarleyStreetInjectables() {
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Cosmedocs Harley Street',
    url: CANONICAL,
    telephone: '+44 20 3733 3227',
    image: 'https://www.cosmedocs.com/og-image.jpg',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10 Harley Street',
      addressLocality: 'London',
      postalCode: 'W1G 9PF',
      addressCountry: 'GB'
    },
    areaServed: [
      { '@type': 'City', name: 'London' },
      { '@type': 'AdministrativeArea', name: 'Greater London' }
    ],
    medicalSpecialty: 'CosmeticDermatology',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1200' }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cosmedocs.com/' },
      { '@type': 'ListItem', position: 2, name: 'Harley Street Injectables', item: CANONICAL }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What injectables are available on Harley Street?',
        acceptedAnswer: { '@type': 'Answer', text: 'The most established Harley Street injectables are anti-wrinkle treatment (Botox), hyaluronic acid dermal fillers, polynucleotides, Profhilo, and fat-dissolving injections — all delivered by GMC-registered doctors at Cosmedocs.' }
      },
      {
        '@type': 'Question',
        name: 'Why choose a Harley Street clinic for injectables?',
        acceptedAnswer: { '@type': 'Answer', text: 'Harley Street has been the UK\'s established medical address since the 19th century. Choosing a Harley Street injectables clinic typically means doctor-led care, CQC-aligned standards, and a long clinical track record — Cosmedocs has practised here since 2007.' }
      },
      {
        '@type': 'Question',
        name: 'Are Harley Street injectables safe?',
        acceptedAnswer: { '@type': 'Answer', text: 'Safety depends on the doctor, not the postcode. At Cosmedocs every injectable is administered by a GMC-registered doctor, and we work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.' }
      },
      {
        '@type': 'Question',
        name: 'How much do Harley Street injectables cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'At Cosmedocs, anti-wrinkle treatment starts from £175 (single area), dermal fillers from £295, polynucleotides from £350. All consultations with a doctor are complimentary.' }
      }
    ]
  };

  const pillars = [
    { title: 'Anti-Wrinkle Treatment', desc: 'The medical name for Botox. Doctor-led, conservatively dosed, designed to refresh — never freeze.', price: 'From £175', href: '/treatments/botox/' },
    { title: 'Dermal Fillers', desc: 'HA-based volume restoration for cheeks, lips, jawline and tear troughs. The CosmeDocs 8-point and 11-point lifts.', price: 'From £295', href: '/treatments/dermal-fillers/' },
    { title: 'Polynucleotides', desc: 'Regenerative DNA-based injections for skin quality, fine lines and the periorbital area.', price: 'From £350', href: '/treatments/polynucleotides/' },
    { title: 'Profhilo & Skin Boosters', desc: 'Bio-remodelling injections that hydrate and tighten without volumising.', price: 'From £350', href: '/treatments/skin-rejuvenation/' },
    { title: 'Fat-Dissolving Injections', desc: 'Targeted reduction for the chin, jowls and small pockets that resist diet.', price: 'From £295', href: '/treatments/fat-dissolve/' },
    { title: 'Lip Fillers', desc: 'Predictable, restrained lip enhancement using 0.5ml or 1ml protocols. The CosmeDocs Secret Filler Cocktail.', price: 'From £295', href: '/treatments/lip-fillers/' }
  ];

  return (
    <>
      <Helmet>
        <title>Harley Street Injectables | Doctor-Led Since 2007 | Cosmedocs</title>
        <meta name="description" content="Harley Street injectables at Cosmedocs — anti-wrinkle treatment, dermal fillers, polynucleotides and Profhilo. Doctor-led, GMC-registered, CQC-aligned. London W1G 9PF." />
        <meta name="keywords" content="harley street injectables, harley street botox, harley street fillers, dermal fillers london, injectables london, doctor-led injectables" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content="Harley Street Injectables | Cosmedocs" />
        <meta property="og:description" content="Doctor-led injectables on Harley Street since 2007 — Botox, fillers, polynucleotides, Profhilo." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" data-rh="true" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* DARK LUXURY THEME */}
      <div className="bg-black text-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <Breadcrumb items={[]} currentPage="Harley Street Injectables" variant="dark" />
        </div>

        {/* HERO */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.15) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,160,80,0.08) 0%, transparent 70%)' }} />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/70 mb-6 border border-white/10">
                <MapPin className="h-4 w-4 text-[#C9A050]" />
                10 Harley Street, London W1G 9PF
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">Doctor-Led · Since 2007</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.05] tracking-tight">
                Harley Street
                <span className="block font-semibold text-[#C9A050]">injectables</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6 max-w-2xl">
                Anti-wrinkle treatment, dermal fillers, polynucleotides and Profhilo — delivered by GMC-registered doctors at the UK's most established medical address. Over one million procedures across the group. Restraint as a discipline.
              </p>
              <p className="text-base text-white/50 font-light italic mb-10">Our aesthetics is invisible art — bold, natural, always your way.</p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B89045] text-black font-medium">Book a doctor consultation <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <Link to="/about/"><Button variant="outline" className="border-white/20 text-white hover:bg-white/5">Meet our doctors</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY HARLEY STREET */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">Why Harley Street still matters</h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
              Harley Street has been the UK's defining medical address since the 1840s. It is not a postcode trend; it is a 180-year clinical track record. For injectables — where the difference between a refreshed result and an obvious one comes down to the doctor's training and judgement — that lineage matters.
            </p>
            <p className="text-base text-white/60 font-light leading-relaxed mb-6">
              Cosmedocs has practised injectables on Harley Street since 2007. Every patient is seen by a GMC-registered medical doctor. Every product is prescribed in person — never remotely. Every treatment plan is conservative by default; we would rather under-dose and review than chase a single visit.
            </p>
            <p className="text-base text-white/60 font-light leading-relaxed">
              We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments — keeping medical-grade governance behind every aesthetic decision.
            </p>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight mb-3 leading-tight">The injectables we offer</h2>
            <p className="text-base text-white/50 font-light mb-12">Doctor-led, conservatively dosed, designed to last.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <Link key={p.title} to={p.href} className="group bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-[#C9A050]/40 rounded-2xl p-6 transition-all">
                  <Syringe className="h-5 w-5 text-[#C9A050] mb-4" />
                  <h3 className="text-xl font-light mb-2 group-hover:text-[#C9A050] transition-colors">{p.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-4">{p.desc}</p>
                  <p className="text-xs uppercase tracking-widest text-[#C9A050]">{p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <Stethoscope className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium mb-2">GMC-registered doctors</h3>
                <p className="text-sm text-white/60 font-light">Every assessment and injection by a registered medical doctor — never a non-medical practitioner.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <Shield className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium mb-2">CQC-aligned setting</h3>
                <p className="text-sm text-white/60 font-light">Working with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <Award className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium mb-2">Award-winning</h3>
                <p className="text-sm text-white/60 font-light">Teosyal Outstanding Clinic Award. Over one million procedures performed across the group.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AUTHORS */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">Doctors with published authority</h2>
            <p className="text-base text-white/70 font-light leading-relaxed mb-6">
              Our medical leadership has published peer-reviewed work on aesthetic injectables, including papers in Aesthetic Surgery Journal (2022) and the Journal of the American Academy of Dermatology (2022). Where most clinics quote brand training, we cite the literature — and contribute to it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about/dr-ahmed-haq" className="text-sm text-[#C9A050] hover:underline">Dr Ahmed Haq →</Link>
              <span className="text-white/30">·</span>
              <Link to="/about/dr-hena-haq" className="text-sm text-[#C9A050] hover:underline">Dr Hena Haq →</Link>
              <span className="text-white/30">·</span>
              <Link to="/about/" className="text-sm text-[#C9A050] hover:underline">The full team →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight mb-10 leading-tight">Harley Street injectables — questions answered</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-white/10">
                <AccordionTrigger className="text-left text-base font-light text-white hover:text-[#C9A050]">What injectables are available on Harley Street?</AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed">
                  The most established Harley Street injectables are anti-wrinkle treatment (Botox), hyaluronic acid dermal fillers, polynucleotides, Profhilo, and fat-dissolving injections — all delivered at Cosmedocs by GMC-registered doctors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-white/10">
                <AccordionTrigger className="text-left text-base font-light text-white hover:text-[#C9A050]">Why choose a Harley Street clinic?</AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed">
                  Harley Street is the UK's established medical address. Choosing a Harley Street injectables clinic typically means doctor-led care, CQC-aligned standards, and a long clinical track record. Cosmedocs has practised here since 2007.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border-white/10">
                <AccordionTrigger className="text-left text-base font-light text-white hover:text-[#C9A050]">Are Harley Street injectables safe?</AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed">
                  Safety depends on the doctor, not the postcode. At Cosmedocs every injectable is administered by a GMC-registered doctor, and we work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border-white/10">
                <AccordionTrigger className="text-left text-base font-light text-white hover:text-[#C9A050]">How much do Harley Street injectables cost?</AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed">
                  Anti-wrinkle treatment from £175 (single area), dermal fillers from £295, polynucleotides from £350. Doctor consultations are complimentary.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5" className="border-white/10">
                <AccordionTrigger className="text-left text-base font-light text-white hover:text-[#C9A050]">Will the result look natural?</AccordionTrigger>
                <AccordionContent className="text-white/70 font-light leading-relaxed">
                  Restraint is the discipline. Our doctors are trained to dose conservatively, place product with anatomical precision and preserve expression — the opposite of an injector-led, volume-first approach.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#C9A050]/5">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-8 w-8 text-[#C9A050] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">Your consultation begins here</h2>
            <p className="text-base text-white/70 font-light leading-relaxed mb-8">Speak with a GMC-registered doctor in our Harley Street clinic. No upsell, no pressure — a clinical opinion on whether injectables are right for you.</p>
            <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B89045] text-black font-medium">Book a doctor consultation <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  );
}
