
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';

// Aggregated images from all treatment pages
const allGalleryImages = [
  // Dermal Filler Makeover images
  {
    src: "/lovable-uploads/4e76f684-cc16-4283-bc39-94de86680278.png",
    alt: "Supermodal natural rejuvenation with dermal fillers",
    caption: "Supermodal's Natural Rejuvenation Journey",
    category: "dermal-fillers"
  },
  {
    src: "/lovable-uploads/01999999-9999-9999-9999-999999999999.png",
    alt: "Dermal filler makeover before and after",
    caption: "Comprehensive facial rejuvenation with dermal fillers",
    category: "dermal-fillers"
  },
  {
    src: "/lovable-uploads/11111111-1111-1111-1111-111111111111.png",
    alt: "Dermal filler makeover results",
    caption: "Natural-looking results achieved with expert technique",
    category: "dermal-fillers"
  },
  {
    src: "/lovable-uploads/22222222-2222-2222-2222-222222222222.png",
    alt: "Dermal filler makeover transformation",
    caption: "Subtle yet significant transformation with dermal fillers",
    category: "dermal-fillers"
  },
  {
    src: "/lovable-uploads/33333333-3333-3333-3333-333333333333.png",
    alt: "Dermal filler makeover side profile",
    caption: "Enhanced facial contours and profile with dermal fillers",
    category: "dermal-fillers"
  },
  {
    src: "/lovable-uploads/44444444-4444-4444-4444-444444444444.png",
    alt: "Dermal filler makeover close up",
    caption: "Close-up view of dermal filler makeover results",
    category: "dermal-fillers"
  },
  // Lip Filler Dissolve images
  {
    src: "/lovable-uploads/6979990b-3579-4571-b139-3501a368919b.png",
    alt: "Lip filler dissolving before and after",
    caption: "Immediate volume reduction after hyaluronidase injection",
    category: "lip-treatments"
  },
  {
    src: "/lovable-uploads/4208979a-6544-4949-898f-4915a9791946.png",
    alt: "Lip filler correction",
    caption: "Correcting migrated filler for a more natural lip shape",
    category: "lip-treatments"
  },
  {
    src: "/lovable-uploads/9992894b-4419-4f19-b98c-ca99a940c00c.png",
    alt: "Lip filler dissolving progression",
    caption: "Progressive dissolving over 24 hours showing gradual volume loss",
    category: "lip-treatments"
  },
  {
    src: "/lovable-uploads/012d959d-8c75-4a11-8259-57e3ac1ca493.png",
    alt: "Lip filler dissolving results",
    caption: "Restoring natural lip shape after dissolving overfilled lips",
    category: "lip-treatments"
  },
  {
    src: "/lovable-uploads/06549691-a99f-4a9f-a59c-590759bb449c.png",
    alt: "Lip filler dissolving asymmetry correction",
    caption: "Correcting asymmetry caused by uneven filler placement",
    category: "lip-treatments"
  },
  {
    src: "/lovable-uploads/04b9419a-7929-4b13-b879-4c94269599a9.png",
    alt: "Lip filler dissolving before new filler",
    caption: "Dissolving old filler before new lip enhancement treatment",
    category: "lip-treatments"
  }
];

const categories = [
  { id: 'all', name: 'All', icon: '✨' },
  { id: 'dermal-fillers', name: 'Dermal Fillers', icon: '💫' },
  { id: 'lip-treatments', name: 'Lip Treatments', icon: '💋' },
  { id: 'nose-jobs', name: 'Nose Jobs', icon: '👃' },
  { id: 'threads', name: 'PDO Threads', icon: '🧵' }
];

const BeforeAfterGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const seoData = generateSEOMetadata(
    "Before & After Gallery | Real Patient Results | Cosmedocs London",
    "View our comprehensive before and after gallery showcasing real patient transformations. Expert aesthetic treatments with natural-looking results at Cosmedocs.",
    "/before-after-gallery"
  );

  const filteredImages = activeCategory === 'all' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === activeCategory);

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
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Instagram-style Header */}
        <section className="py-8 border-b border-border">
          <div className="page-container">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="text-3xl font-bold text-primary">CD</div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">cosmedocs</h1>
              <p className="text-muted-foreground mb-4">
                🏥 Our Aesthetics Is Refined • Controlled • Precise - invisible art, since 2007, Harley St, London
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div><span className="font-semibold">{allGalleryImages.length}</span> transformations</div>
                <div><span className="font-semibold">129K</span> followers</div>
                <div><span className="font-semibold">7</span> following</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Highlights */}
        <section className="py-6 border-b border-border">
          <div className="page-container">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex flex-col items-center min-w-[80px] group"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 scale-110' 
                      : 'bg-accent hover:bg-accent/80'
                  }`}>
                    {category.icon}
                  </div>
                  <span className={`text-xs font-medium transition-colors ${
                    activeCategory === category.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-8">
          <div className="page-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden bg-accent mb-3">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {image.caption}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No images found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
              <p className="text-muted-foreground mb-8">
                Book your consultation today and join our gallery of satisfied patients. 
                Our aesthetics is invisible art • Bold • Natural • Always Your Way
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Book Consultation
                </button>
                <BeforeAfterImageViewer 
                  images={allGalleryImages.map(img => ({
                    src: img.src,
                    alt: img.alt,
                    caption: img.caption
                  }))}
                  triggerLabel="View Full Gallery"
                  title="Complete Before & After Gallery"
                  description="Browse our comprehensive collection of patient transformations"
                  className="border border-border bg-background px-8 py-3 rounded-lg hover:bg-accent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Before After Gallery Cosmedocs London Aesthetic Treatments Real Results Patient Transformations</h2>
          <p>
            Before and after gallery, Cosmedocs London, aesthetic treatments, real patient results, dermal fillers, 
            lip treatments, nose jobs, PDO threads, facial enhancement, natural results, invisible art, bold natural 
            always your way, cosmetic medicine, Harley Street, patient transformations, before after photos, 
            aesthetic clinic London, cosmetic doctors, facial rejuvenation, anti-aging treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterGallery;
