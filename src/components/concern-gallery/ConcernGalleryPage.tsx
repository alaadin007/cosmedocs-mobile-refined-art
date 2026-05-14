import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

export interface ConcernGalleryImage {
  src: string;
  alt: string;
  caption: string | React.ReactElement;
}

export interface ConcernGalleryConfig {
  slug: string; // e.g. "lip-filler-subtle"
  title: string; // SEO title
  metaDescription: string;
  h1: string;
  intro: string;
  breadcrumbItems?: { label: string; path: string }[];
  breadcrumbCurrent: string;
  galleryName: string; // schema name
  images: ConcernGalleryImage[];
  // Editorial body sections (visible — never sr-only per memory rule)
  whatYouSee: { title: string; body: string };
  doctorNote: { title: string; body: string };
  patientFAQ: { q: string; a: string }[];
  relatedLinks: { label: string; path: string }[];
  treatmentLink: { label: string; path: string };
}

const ConcernGalleryPage: React.FC<{ config: ConcernGalleryConfig }> = ({ config }) => {
  const url = `https://www.cosmedocs.com/before-after/${config.slug}/`;
  const seoData = generateSEOMetadata(config.title, config.metaDescription, `/before-after/${config.slug}/`);

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={url} data-rh="true" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'MedicalBusiness',
                name: 'CosmeDocs',
                description: 'Doctor-led aesthetic medicine clinic on Harley Street',
                url: 'https://www.cosmedocs.com/',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '10 Harley Street',
                  addressLocality: 'London',
                  postalCode: 'W1G 9PF',
                  addressCountry: 'GB',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '1200',
                },
              },
              {
                '@type': 'ImageGallery',
                name: config.galleryName,
                description: config.metaDescription,
                url,
                image: config.images.map((img) => ({
                  '@type': 'ImageObject',
                  contentUrl: `https://www.cosmedocs.com${img.src}`,
                  description: img.alt,
                })),
              },
              {
                '@type': 'FAQPage',
                mainEntity: config.patientFAQ.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero */}
        <section className="relative pt-0 pb-16 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
          <div className="page-container relative z-10">
            <Breadcrumb
              items={config.breadcrumbItems ?? [{ label: 'Before & After', path: '/before-after/' }]}
              currentPage={config.breadcrumbCurrent}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                {config.h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {config.intro}
              </p>
              <p className="text-sm text-[#C9A050]/70 mt-4 italic font-light">
                "Our aesthetics is invisible art — bold, natural, always your way."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-5 border-y border-white/10 bg-black/50">
          <div className="page-container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Unretouched Clinical Photos</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Harley Street, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#C9A050]" />
                <span className="text-sm text-gray-400">Consistent Lighting & Angles</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
              <BeforeAfterGrid images={config.images} initialDisplay={6} loadMoreIncrement={4} />
            </div>
          </div>
        </section>

        {/* What You See */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Sparkles className="w-6 h-6 text-[#C9A050] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-1">{config.whatYouSee.title}</h2>
                    <p className="text-sm text-gray-400">Honest photo interpretation</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{config.whatYouSee.body}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor's Note */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <div className="border-l-2 border-[#C9A050] pl-6 md:pl-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{config.doctorNote.title}</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{config.doctorNote.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient FAQ */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                Patient Photo FAQ
              </h2>
              <div className="space-y-6">
                {config.patientFAQ.map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#C9A050] mb-2">{f.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-white/10">
          <div className="page-container">
            <p className="text-center text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
              Individual results may vary. All images show real patients treated at CosmeDocs or complication
              cases managed by our team. Photos are unretouched and taken under consistent clinical conditions.
              A consultation is required before any treatment.
            </p>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 bg-accent">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-2xl font-bold text-white mb-3">Explore More Results</p>
                <p className="text-gray-400">Other concern-specific galleries from our Harley Street clinic.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {config.relatedLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center justify-between p-4 bg-black/40 border border-white/10 rounded-xl hover:border-[#C9A050]/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-[#C9A050] transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#C9A050] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment CTA */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-400 mb-4">
                Learn more about the treatment behind these results, including what to expect and how we tailor each plan.
              </p>
              <Link to={config.treatmentLink.path}>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full">
                  {config.treatmentLink.label} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConcernGalleryPage;
