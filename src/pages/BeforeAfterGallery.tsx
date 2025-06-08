
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSEOMetadata } from '@/utils/seo';
import BeforeAfterImageViewer from '@/components/BeforeAfterImageViewer';

// Mixed and matched images from all treatment pages
const allGalleryImages = [
  // Featured new lip treatment before and after
  {
    src: "/lovable-uploads/00df0c0c-e651-402b-bdb2-4cc80a39f284.png",
    alt: "Lip enhancement before treatment natural lips",
    caption: "Before: Natural lip shape and volume",
    category: "lip-treatments"
  },
  {
    src: "/lovable-uploads/4870b5ac-6167-4baa-8561-0f5617cd4814.png",
    alt: "Lip enhancement after treatment enhanced volume and definition",
    caption: "After: Enhanced lip volume and definition with natural-looking results",
    category: "lip-treatments"
  },
  // New lip filler image
  {
    src: "/lovable-uploads/bb065723-5cc4-4e75-b47e-10fc0f741157.png",
    alt: "Bold lip filler enhancement results",
    caption: "Sometimes we go bold but it requires something unique",
    category: "lip-treatments"
  },
  // Latest lip treatment image
  {
    src: "/lovable-uploads/f12fe2de-6ab2-4a17-8dde-f7d429cfb948.png",
    alt: "Lip edge enhancement before and after",
    caption: "Sometimes just enhancing the edges of the lip/corners accentuates the lip beautifully",
    category: "lip-treatments"
  },
  // Nose job images mixed in
  {
    src: "/lovable-uploads/7b2a209c-3203-44b6-8cff-83e3a40896b9.png",
    alt: "Non-surgical nose job before and after profile view London Harley Street",
    caption: "Profile transformation showing refined nasal bridge and enhanced projection",
    category: "nose-jobs"
  },
  {
    src: "/lovable-uploads/62475a93-6144-4596-bca9-7e70d52cb7c1.png",
    alt: "Non-surgical nose job bottom view before after London Cosmedocs",
    caption: "Underneath view showing improved nasal tip projection and symmetry",
    category: "nose-jobs"
  },
  {
    src: "/lovable-uploads/cc387da3-1543-4b06-8b11-a48d29f03456.png",
    alt: "Non-surgical nose job side profile before after London Harley Street",
    caption: "Side profile enhancement demonstrating subtle yet significant improvement",
    category: "nose-jobs"
  },
  {
    src: "/lovable-uploads/1cceb92b-eacb-48b4-9c9f-04c4cb2b025e.png",
    alt: "Non-surgical nose job profile transformation London Cosmedocs",
    caption: "Natural-looking profile enhancement with advanced #cosmenose technique",
    category: "nose-jobs"
  },
  {
    src: "/lovable-uploads/bf8a69d8-6776-4187-857d-a009e9fd6147.png",
    alt: "Non-surgical nose job Cosmedocs London Harley Street before after results",
    caption: "Remarkable transformation achieving perfect nasal proportions and harmony",
    category: "nose-jobs"
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
