import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Shield, Award, Stethoscope, ArrowRight, MapPin } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import TreatmentPaymentInfo from '@/components/TreatmentPaymentInfo';
import DrAhmedQuote from '@/components/DrAhmedQuote';
import MedicalArticleSchema from '@/components/seo/MedicalArticleSchema';

const CANONICAL = 'https://www.cosmedocs.com/treatments/anti-wrinkle-treatment/';

export default function AntiWrinkleTreatment() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is anti-wrinkle treatment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anti-wrinkle treatment is the medical term for the use of regulated botulinum toxin to soften expression lines on the upper face. It is the same molecule sold under the trade name Botox, prescribed and administered by a registered doctor.'
        }
      },
      {
        '@type': 'Question',
        name: 'How is anti-wrinkle treatment different from Botox?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They are the same treatment. Botox is a brand name owned by Allergan; anti-wrinkle treatment is the proper UK medical description that the ASA and GMC require clinics to use in patient-facing advertising.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much do anti-wrinkle injections cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Cosmedocs Harley Street, anti-wrinkle treatment starts from £175 for a single area and £295 for three areas. As an add-on to a filler appointment the price is £50 per additional area.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long do anti-wrinkle injections last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most patients see results last between three and four months. With consistent maintenance the muscle re-trains and intervals can extend to four to six months.'
        }
      }
    ]
  };

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${CANONICAL}#procedure`,
    name: 'Anti-Wrinkle Treatment',
    alternateName: ['Anti-Wrinkle Injections', 'Anti-Ageing Injections', 'Botulinum Toxin Treatment', 'Botox'],
    description: 'Doctor-led anti-wrinkle treatment in London — regulated botulinum toxin for forehead, frown and crow\'s feet lines. From £175 single area at Cosmedocs Harley Street.',
    url: CANONICAL,
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Face',
    howPerformed: 'Micro-doses of regulated botulinum toxin are injected by a GMC-registered doctor into specific facial muscles to soften dynamic expression lines.',
    preparation: 'Avoid blood-thinning supplements for 48 hours. No alcohol on the day of treatment.',
    followup: 'Avoid lying flat or strenuous exercise for four hours. Review at two weeks if requested.',
    author: {
      '@type': 'Physician',
      '@id': 'https://www.cosmedocs.com/team/dr-ahmed-haq/#person',
      name: 'Dr Ahmed Haq',
      medicalSpecialty: 'https://schema.org/CosmeticProcedure',
      url: 'https://www.cosmedocs.com/team/dr-ahmed-haq/'
    },
    reviewedBy: {
      '@type': 'Physician',
      name: 'Dr Hena Haq',
      url: 'https://www.cosmedocs.com/team/dr-hena-haq/'
    },
    performer: {
      '@type': 'MedicalBusiness',
      name: 'Cosmedocs Harley Street',
      url: 'https://www.cosmedocs.com/'
    }
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Anti-Wrinkle Treatment at Cosmedocs Harley Street',
    description: 'Doctor-led anti-wrinkle injections — single area, three areas, or add-on pricing.',
    brand: { '@type': 'Brand', name: 'Cosmedocs' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '847', bestRating: '5' },
    offers: [
      { '@type': 'Offer', name: 'Single area', priceCurrency: 'GBP', price: '175', availability: 'https://schema.org/InStock', url: CANONICAL },
      { '@type': 'Offer', name: 'Three areas', priceCurrency: 'GBP', price: '295', availability: 'https://schema.org/InStock', url: CANONICAL },
      { '@type': 'Offer', name: 'Add-on per area (with filler appointment)', priceCurrency: 'GBP', price: '50', availability: 'https://schema.org/InStock', url: CANONICAL }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How anti-wrinkle treatment is performed at Cosmedocs Harley Street',
    description: 'Doctor-led 5-step protocol for upper-face anti-wrinkle injections.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Doctor consultation', text: 'GMC-registered doctor reviews medical history, assesses dynamic and static lines, and plans dosing across forehead, glabella and crow\'s feet.' },
      { '@type': 'HowToStep', position: 2, name: 'Antisepsis & marking', text: 'Skin is cleansed; injection points are marked for symmetry across the frontalis, corrugator and orbicularis oculi muscles.' },
      { '@type': 'HowToStep', position: 3, name: 'Precision injection', text: 'Micro-doses of regulated botulinum toxin are placed via 32G needle; the appointment takes 10–15 minutes.' },
      { '@type': 'HowToStep', position: 4, name: 'Post-treatment guidance', text: 'Written aftercare issued: no lying flat for 4 hours, no strenuous exercise that day, no facial massage for 24 hours.' },
      { '@type': 'HowToStep', position: 5, name: 'Two-week review', text: 'Optional review at 14 days to top up any asymmetry — included.' }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cosmedocs.com/' },
      { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.cosmedocs.com/treatments/' },
      { '@type': 'ListItem', position: 3, name: 'Anti-Wrinkle Treatment', item: CANONICAL }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Anti-Wrinkle Treatment London | Doctor-Led | Cosmedocs Harley Street</title>
        <meta name="description" content="Anti-wrinkle treatment in London — doctor-led, GMC-registered, on Harley Street since 2007. The proper medical term for Botox. From £175 single area." />
        <meta name="keywords" content="anti wrinkle treatment, anti wrinkle injections, anti ageing injections, anti wrinkle treatment london, botox alternative" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content="Anti-Wrinkle Treatment London | Cosmedocs Harley Street" />
        <meta property="og:description" content="The proper medical term for Botox. Doctor-led anti-wrinkle treatment at Harley Street since 2007." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" data-rh="true" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }]} currentPage="Anti-Wrinkle Treatment" variant="light" />
        </div>

        {/* HERO */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                <MapPin className="h-4 w-4 text-[#C9A050]" />
                8-10 Harley Street, London W1G 9PF
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">Doctor-Led · Since 2007</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.05] tracking-tight">
                Anti-wrinkle
                <span className="block font-semibold text-[#C9A050]">treatment</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6 max-w-2xl">
                The proper medical name for what most people call Botox. At Cosmedocs Harley Street, anti-wrinkle treatment is delivered by GMC-registered doctors with restraint, precision and a single intent: refreshment that nobody can place.
              </p>
              <p className="text-base text-gray-500 font-light italic mb-10">Our aesthetics is invisible art — bold, natural, always your way.</p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B89045] text-white">Book a doctor consultation <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <Link to="/treatments/botox/"><Button variant="outline" className="border-gray-300">See all treatment areas</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY THE TERM */}
        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 leading-tight">Why we say "anti-wrinkle treatment"</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Botox is a registered trade name owned by Allergan. The Advertising Standards Authority (ASA), the General Medical Council (GMC) and the MHRA require UK clinics to refer to the treatment by its proper medical description in patient-facing communication. The correct term is anti-wrinkle treatment, or anti-wrinkle injections.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
              The molecule is the same — a precisely measured, regulated dose of botulinum toxin Type A. What changes is everything around it: the doctor's anatomical training, the dilution, the placement depth, and the restraint to stop short of a frozen result. At Cosmedocs, anti-wrinkle treatment is a doctor-only procedure. No nurse-led clinics. No remote prescribers. The doctor who assesses you is the doctor who treats you.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              We use the term anti-wrinkle treatment throughout the site, in our footer, and in patient correspondence — because that is the language of medicine, and our practice is medicine first.
            </p>
          </div>
        </section>

        {/* AREAS */}
        <section className="py-20 px-4 bg-[#F5F5F3]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">Where anti-wrinkle injections work</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Forehead lines', body: 'Horizontal lines that appear when you raise the brows. Conservative dosing preserves a natural arch.' },
                { title: 'Frown lines (glabella)', body: 'The vertical "elevens" between the brows. The most studied indication for anti-wrinkle treatment.' },
                { title: "Crow's feet", body: 'Fine lines radiating from the outer corners of the eyes when you smile. Soft dosing keeps the smile.' },
                { title: 'Brow lift', body: 'A subtle muscular lift of the lateral brow — opening the eye area without surgery.' },
                { title: 'Bunny lines', body: 'Lines along the bridge of the nose. A small adjunct dose, often combined with frown line treatment.' },
                { title: 'Masseter slimming', body: 'Anti-wrinkle treatment for the jaw muscle — both cosmetic slimming and medical bruxism relief.' }
              ].map((a) => (
                <div key={a.title} className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/treatments/botox/" className="text-sm text-[#C9A050] hover:underline">View the full anti-wrinkle treatment guide →</Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">Anti-wrinkle treatment pricing</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-[#F5F5F3] p-8 rounded-2xl border border-gray-100">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">One area</p>
                <p className="text-4xl font-light text-gray-900 mb-1">£175</p>
                <p className="text-sm text-gray-600 font-light">Doctor-led, single area</p>
              </div>
              <div className="bg-[#F5F5F3] p-8 rounded-2xl border-2 border-[#C9A050]">
                <p className="text-xs uppercase tracking-widest text-[#C9A050] mb-2">Most popular</p>
                <p className="text-4xl font-light text-gray-900 mb-1">£295</p>
                <p className="text-sm text-gray-600 font-light">Three areas — full upper face</p>
              </div>
              <div className="bg-[#F5F5F3] p-8 rounded-2xl border border-gray-100">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Add-on</p>
                <p className="text-4xl font-light text-gray-900 mb-1">£50</p>
                <p className="text-sm text-gray-600 font-light">Per area with filler</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-20 px-4 bg-[#F5F5F3]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Stethoscope className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">GMC-registered doctors</h3>
                <p className="text-sm text-gray-600 font-light">Every assessment and injection is performed by a registered medical doctor.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Shield className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">CQC-aligned setting</h3>
                <p className="text-sm text-gray-600 font-light">We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Award className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">Harley Street since 2007</h3>
                <p className="text-sm text-gray-600 font-light">Over one million procedures performed across the group.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">Anti-wrinkle treatment — questions answered</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-base font-light">What is anti-wrinkle treatment?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  Anti-wrinkle treatment is the medical name for the use of regulated botulinum toxin to soften expression lines on the upper face. It is the same molecule sold under the trade name Botox, prescribed and administered by a registered doctor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-base font-light">How is it different from Botox?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  They are the same treatment. Botox is a brand name; anti-wrinkle treatment is the correct UK medical description that the ASA requires clinics to use in patient-facing advertising.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-base font-light">How much do anti-wrinkle injections cost?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  At Cosmedocs Harley Street, anti-wrinkle treatment starts from £175 for a single area and £295 for three areas. As an add-on to a filler appointment, additional areas are £50 each.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left text-base font-light">How long do anti-wrinkle injections last?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  Most patients see results last three to four months. With consistent maintenance, intervals can extend to four to six months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left text-base font-light">Will it look natural?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  Our doctors are trained to dose conservatively, preserve expression and place product with anatomical precision. The intent is refreshment, not a frozen brow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              <Link to="/treatments/botox/" className="text-sm text-[#C9A050] hover:underline">Full Botox guide →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/harley-street-injectables/" className="text-sm text-[#C9A050] hover:underline">Harley Street injectables →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/medical/" className="text-sm text-[#C9A050] hover:underline">Medical anti-wrinkle indications →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/about/" className="text-sm text-[#C9A050] hover:underline">About our doctors →</Link>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <DrAhmedQuote tone="light" />
        </section>

        <TreatmentPaymentInfo variant="light" />
      </div>
    </>
  );
}
