import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sparkles, Leaf, Clock, ArrowRight, MapPin } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const CANONICAL = 'https://www.cosmedocs.com/treatments/anti-ageing-injections/';

export default function AntiAgeingInjections() {
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Anti-Ageing Injections',
    procedureType: 'Preventive',
    bodyLocation: 'Face',
    howPerformed: 'Conservative micro-dosing of regulated botulinum toxin used preventively to slow the formation of static expression lines before they set into the skin.',
    preparation: 'A doctor consultation determines whether prevention or correction is the right intent for your face today.',
    followup: 'Maintenance every four to six months once the muscle re-trains.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'When should I start anti-ageing injections?', acceptedAnswer: { '@type': 'Answer', text: 'There is no universal age. The honest answer is: when dynamic expression lines are still soft and have not yet etched into static lines at rest. For most patients this is between 28 and 35.' } },
      { '@type': 'Question', name: 'Do anti-ageing injections actually slow ageing?', acceptedAnswer: { '@type': 'Answer', text: 'They slow the formation of expression-line wrinkles by softening the repeated muscle contraction that creates them. They do not change skin quality, sun damage or volume loss — those are addressed separately.' } },
      { '@type': 'Question', name: 'How often will I need treatment?', acceptedAnswer: { '@type': 'Answer', text: 'Initially every three to four months. With consistent maintenance the muscle weakens and re-trains, allowing intervals to extend to four to six months.' } }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cosmedocs.com/' },
      { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.cosmedocs.com/treatments/' },
      { '@type': 'ListItem', position: 3, name: 'Anti-Ageing Injections', item: CANONICAL }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Anti-Ageing Injections London | Prevention-Led | Cosmedocs Harley Street</title>
        <meta name="description" content="Anti-ageing injections in London — conservative, prevention-led dosing by GMC-registered doctors. Slow expression lines before they set. Harley Street since 2007." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content="Anti-Ageing Injections London | Cosmedocs" />
        <meta property="og:description" content="Prevention-led anti-ageing injections by GMC-registered doctors at Harley Street." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <link rel="canonical" data-rh="true" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-[#F5F5F3] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Treatments', path: '/treatments' }]} currentPage="Anti-Ageing Injections" variant="light" />
        </div>

        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-gray-600 mb-6 border border-gray-200">
                <MapPin className="h-4 w-4 text-[#C9A050]" />
                8-10 Harley Street, London W1G 9PF
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">Prevention, Not Correction</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.05] tracking-tight">
                Anti-ageing
                <span className="block font-semibold text-[#C9A050]">injections</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6 max-w-2xl">
                A different intent: softening the muscle movement that turns expression lines into permanent ones — before they ever set. Conservative dosing, long intervals, the same doctor each visit.
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
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 leading-tight">The prevention principle</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              An expression line is dynamic before it is static. A frown crease appears when you frown; for years it disappears when you stop. Then one day it doesn't. The fold has been repeated so many thousand times that the dermis has remembered the shape. That is the moment correction becomes the only option.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
              Anti-ageing injections work earlier in that timeline. By softening — not freezing — the muscle's repeated contraction, the dermis is given time to recover between expressions. The line never gets the chance to etch. This is what the literature calls prejuvenation, and it is the most evidence-based use of botulinum toxin in younger patients.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed italic">
              We are not in a hurry to start anyone. The first appointment is a conversation about whether your face is ready, not a sale.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-[#F5F5F3]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">How prevention differs from correction</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Sparkles className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">Lower doses</h3>
                <p className="text-sm text-gray-600 font-light">Half to two-thirds of a corrective dose. Movement is preserved; the muscle is asked to relax, not switch off.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Leaf className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">Fewer points</h3>
                <p className="text-sm text-gray-600 font-light">Only the muscles whose patterns are setting earliest — usually the glabella and lateral frontalis. Nothing prophylactic that doesn't earn its place.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Clock className="h-6 w-6 text-[#C9A050] mb-3" />
                <h3 className="text-base font-medium text-gray-900 mb-2">Longer intervals</h3>
                <p className="text-sm text-gray-600 font-light">Once the muscle re-trains, four to six months between visits is normal. Maintenance, not dependency.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-10 leading-tight">Honest answers</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-base font-light">When should I start?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  When your dynamic lines are still soft and have not etched at rest. For most patients this is between 28 and 35, but the marker is your face, not your birthday.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-base font-light">Do anti-ageing injections actually slow ageing?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  They slow expression-line wrinkles by softening the repeated muscle contraction that creates them. Skin quality, sun damage and volume loss are separate problems and need their own answers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-base font-light">Will I become dependent on them?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  No. If you stop, the muscle gradually returns to its previous strength. You are not worse off than baseline — you are simply back to it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left text-base font-light">Will my face look different?</AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed">
                  It should look like yours, in better rest. Doses are kept conservative precisely so movement and expression are preserved.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              <Link to="/treatments/anti-wrinkle-treatment/" className="text-sm text-[#C9A050] hover:underline">Treatment overview →</Link>
              <span className="text-gray-300">·</span>
              <Link to="/treatments/anti-wrinkle-injections/" className="text-sm text-[#C9A050] hover:underline">The appointment in detail →</Link>
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
