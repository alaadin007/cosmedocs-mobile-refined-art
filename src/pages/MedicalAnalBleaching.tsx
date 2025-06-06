import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';

const MedicalAnalBleaching = () => {
  const seoData = generateSEOMetadata(
    "Medical Anal Bleaching London | Expert Hyperpigmentation Treatment",
    "Safe and effective medical anal bleaching in London. Expert treatment for hyperpigmentation with guaranteed results. Book your consultation at our discreet Harley Street clinic.",
    "/medical-anal-bleaching"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
      </Helmet>

      <div>
        <h1>Medical Anal Bleaching</h1>
        <p>Safe and effective treatment for hyperpigmentation.</p>
      </div>
    </>
  );
};

export default MedicalAnalBleaching;
