import React from 'react';
import { Helmet } from 'react-helmet-async';
import MedicalArticleSchema from '@/components/seo/MedicalArticleSchema';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Syringe, Clock, Stethoscope, ArrowRight, MapPin } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const CANONICAL = 'https://www.cosmedocs.com/treatments/anti-wrinkle-injections/';

export default function AntiWrinkleInjections() {
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Anti-Wrinkle Injections',
    procedureType: 'Therapeutic',
    bodyLocation: 'Face',
    howPerformed: 'Fine 32-gauge needles deliver micro-doses of regulated botulinum toxin into precisely mapped facial muscles. The appointment lasts 15–20 minutes; results settle over 10–14 days.',
    preparation: 'No make-up on the treated area. Avoid alcohol and blood-thinning supplements for 48 hours.',
    followup: 'Stay upright for four hours. No exercise, sauna or facials for 24 hours.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do anti-wrinkle injections hurt?', acceptedAnswer: { '@type': 'Answer', text: 'The needle used is finer than the one used for blood tests. Most patients describe a brief pinch. Topical anaesthetic is offered if requested.' } },
      { '@type': 'Question', name: 'How long does the appointment take?', acceptedAnswer: { '@type': 'Answer', text: 'A standard upper-face appointment at Cosmedocs takes 15 to 20 minutes, including the doctor consultation and consent.' } },
      { '@type': 'Question', name: 'When will I see results from the injections?', acceptedAnswer: { '@type': 'Answer', text: 'First softening appears at day three to five. The full result settles by day fourteen, when a complimentary review is offered.' } }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cosmedocs.com/' },
      { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.cosmedocs.com/treatments/' },
      { '@type': 'ListItem', position: 3, name: 'Anti-Wrinkle Injections', item: CANONICAL }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Anti-Wrinkle Injections London | Doctor-Led | Cosmedocs Harley Street</title>
        <meta name="description" content="Anti-wrinkle injections in London by GMC-registered doctors. Fine-needle technique, 15-minute appointments, two-week review. Harley Street since 2007." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content="Anti-Wrinkle Injections London | Cosmedocs" />
        <meta property="og:description" content="Fine-needle, doctor-led anti-wrinkle injections at Harley Street." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <link rel="canonical" data-rh="true" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }]} currentPage="Anti-Wrinkle Injections" variant="light" />
        </div>

        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                <MapPin className="h-4 w-4 text-[#C9A050]" />
                8-10 Harley Street, London W1G 9PF
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">The Appointment, Not Just The Treatment</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.05] tracking-tight">
                Anti-wrinkle
                <span className="block font-semibold text-[#C9A050]">injections</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6 max-w-2xl">
                What actually happens when you sit down for the appointment — the needle, the technique, the fifteen minutes, the two-week review. Doctor-led from the first question to the final follow-up.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact"><Button className="bg-[#C9A050] hover:bg-[#B89045] text-white">Book a doctor consultation <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <Link to="/treatments/anti-wrinkle-treatment/"><Button variant="outline" className="border-gray-300">Treatment overview</Button></Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 leading-tight">Inside the fifteen minutes</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              An anti-wrinkle appointment at Cosmedocs is shorter than most people expect, and quieter. Your doctor watches you speak, frown and smile before anything is drawn up — the muscles map themselves once you stop posing for the mirror. The injection itself is the smallest part. A 32-gauge needle, finer than the one used to take blood, places micro-doses at points the doctor has already chosen from your animation pattern.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
              You leave looking exactly as you came in. Softening begins at day three. By day ten the result has settled, and at day fourteen we offer a complimentary review — not to upsell, but to verify symmetry and adjust by a unit or two if needed. That review is part of the original fee.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed italic">
              Our aesthetics is invisible art — the goal is that nobody can place what changed.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-[#F5F5F3]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">What the appointment looks like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Stethoscope className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">Doctor consultation</h3>
                <p className="text-sm text-gray-600 font-light">Five minutes mapping your animation, discussing dose, taking medical history and consenting.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Syringe className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">The injections</h3>
                <p className="text-sm text-gray-600 font-light">Six to twelve fine-needle entry points across the upper face. The mechanical part takes under two minutes.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Clock className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">Two-week review</h3>
                <p className="text-sm text-gray-600 font-light">Complimentary check at day fourteen. Symmetry verified, fine-tuning offered if the result asks for it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">Honest answers</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-base font-light">Do anti-wrinkle injections hurt?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  The needle is finer than the one used to take blood. Most patients describe a brief pinch and nothing more. Topical anaesthetic is available if you'd prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-base font-light">How long is the appointment?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  Fifteen to twenty minutes including the doctor consultation. The injecting itself is under two minutes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-base font-light">When will I see the result?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  Softening begins at day three to five. The full result settles by day fourteen, which is when we book your complimentary review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left text-base font-light">Can I go back to work afterwards?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  Yes. Most patients return to meetings the same hour. Avoid lying flat, exercising or facials for the rest of the day.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              <Link to="/treatments/anti-wrinkle-treatment/" className="text-sm text-[#C9A050] hover:underline">Treatment overview →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/treatments/anti-ageing-injections/" className="text-sm text-[#C9A050] hover:underline">Anti-ageing perspective →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/treatments/botox/" className="text-sm text-[#C9A050] hover:underline">Full Botox guide →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/about/" className="text-sm text-[#C9A050] hover:underline">About our doctors →</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
