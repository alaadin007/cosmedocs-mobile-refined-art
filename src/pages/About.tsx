
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { generateSEOMetadata } from '@/utils/seo';

const About = () => {
  const seoData = generateSEOMetadata(
    "About Cosmedocs | Expert Aesthetic Medicine Since 2007",
    "Learn about Cosmedocs' invisible art philosophy. Over 1 million injections performed by expert practitioners on Harley Street since 2007.",
    "/about"
  );
  
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="keywords" content="about Cosmedocs, aesthetic medicine London, Harley Street clinic, invisible art aesthetics, expert practitioners, since 2007" />
      </Helmet>
      <div className="bg-black text-white py-24">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-center">About Cosmedocs</h1>
            <p className="text-gray-400 text-center mb-16">
              Since 2007 • Over 1 Million Injections
            </p>
          </motion.div>

          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
              <p className="text-gray-300 mb-4">
                Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated.
                It's transformation that speaks — without saying a word.
              </p>
              <p className="text-gray-300 mb-4">
                Our approach centers around the belief that the most powerful aesthetic treatments
                are those that enhance your natural features without announcing themselves. We create
                refined, controlled, and precise results that leave people wondering what's changed—but 
                unable to pinpoint exactly what.
              </p>
              <p className="text-gray-300">
                This is our invisible art: results that look natural because they are natural.
                They're simply the best version of you.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Our Experience</h2>
              <p className="text-gray-300 mb-4">
                With over a million injections performed since 2007, Cosmedocs brings unparalleled
                experience to every treatment. Our practitioners have developed a deep understanding
                of facial anatomy and aesthetics, allowing them to create customized treatment plans
                that address your unique features and concerns.
              </p>
              <p className="text-gray-300">
                Our longevity in the industry speaks to our commitment to patient satisfaction,
                safety, and results that stand the test of time.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Our Practitioners</h2>
              <p className="text-gray-300 mb-4">
                The Cosmedocs team consists of highly qualified medical doctors, dermatologists, and
                aesthetic specialists who share our philosophy of subtle enhancement. Each practitioner
                brings their unique expertise and artistic eye to create results that harmonize with
                your natural features.
              </p>
              <p className="text-gray-300">
                Our practitioners regularly participate in advanced training to stay at the forefront
                of aesthetic medicine, incorporating the latest techniques and technologies into their
                practice when they align with our philosophy of natural-looking results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-300 mb-4">
                At Cosmedocs, we are committed to:
              </p>
              <ul className="list-disc pl-5 text-gray-300 mb-4 space-y-2">
                <li>Patient safety and wellbeing above all else</li>
                <li>Natural-looking, harmonious results</li>
                <li>Personalized treatment plans</li>
                <li>Honest recommendations, even when that means less treatment</li>
                <li>Continued innovation in aesthetic medicine</li>
              </ul>
              <p className="text-gray-300">
                We believe that true beauty comes from enhancing what's already there—not changing it beyond recognition.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="/contact" className="inline-block bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
