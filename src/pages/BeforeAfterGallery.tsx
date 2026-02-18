import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight, Camera, Play } from "lucide-react";
import { generateSEOMetadata } from "../utils/seo";
import jawlineImage from "@/assets/jawline-filler-2ml-before-after.png";

interface MediaItem {
  id: string;
  type: "image" | "video";
  beforeUrl: string;
  afterUrl?: string;
  videoUrl?: string;
  treatment: string;
  description: string;
  duration?: string;
  patientAge?: string;
  gender?: string;
}

const BeforeAfterGallery = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const seoData = generateSEOMetadata(
    "Before & After Gallery - Real Results | CosmeDocs",
    "Real patient transformations: botox, fillers & lip enhancement. Authentic before & after photos from Harley Street.",
    "/before-after/"
  );

  // Sample data - in real implementation, this would come from a CMS or API
  const mediaItems: MediaItem[] = [
    {
      id: "1",
      type: "image",
      beforeUrl: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
      afterUrl: "/lovable-uploads/729455dc-8926-4c98-9c54-10530134f7f3.png",
      treatment: "Lip Fillers",
      description: "0.5ml natural lip enhancement for subtle volume",
      patientAge: "28",
      gender: "Female"
    },
    {
      id: "2", 
      type: "image",
      beforeUrl: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
      afterUrl: "/lovable-uploads/062e112b-382a-4f69-a659-07824545dd80.png",
      treatment: "Botox",
      description: "Forehead and frown line treatment",
      patientAge: "35",
      gender: "Female"
    },
    {
      id: "3",
      type: "image",
      beforeUrl: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
      afterUrl: "/lovable-uploads/c5117df6-2f03-4565-8ede-2a7fa83bb2fe.png",
      treatment: "Dermal Filler Makeover",
      description: "Complete facial rejuvenation with HAMA technique",
      duration: "3 months",
      patientAge: "42",
      gender: "Female"
    },
    {
      id: "4",
      type: "image",
      beforeUrl: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png",
      afterUrl: "/lovable-uploads/def5f295-bb56-4f08-9271-7e38269dffc8.png",
      treatment: "Non-Surgical Nose Job",
      description: "Profile refinement with hyaluronic acid",
      patientAge: "24",
      gender: "Male"
    },
    {
      id: "5",
      type: "image",
      beforeUrl: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
      afterUrl: "/lovable-uploads/4bb9f7fc-8d28-4ce9-b09e-7ee91adbe38c.png",
      treatment: "Cheek Fillers",
      description: "Volume restoration and contouring",
      patientAge: "38",
      gender: "Female"
    },
    {
      id: "6",
      type: "image",
      beforeUrl: jawlineImage,
      afterUrl: jawlineImage,
      treatment: "Jawline Contouring",
      description: "Masculine jawline enhancement",
      patientAge: "32",
      gender: "Male"
    }
  ];

  const treatments = ["all", "Lip Fillers", "Botox", "Dermal Filler Makeover", "Non-Surgical Nose Job", "Cheek Fillers", "Jawline Contouring"];

  const filteredItems = filter === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.treatment === filter);

  const openModal = (item: MediaItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateMedia = (direction: "prev" | "next") => {
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="before after gallery, aesthetic results, cosmetic surgery results, botox before after, dermal filler results, lip filler before after, real patient results" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                Before & After Gallery
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real results from real patients. Our aesthetics is invisible art - 
                bold, natural, always your way.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-transparent mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8">
          <div className="page-container">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {treatments.map((treatment) => (
                <button
                  key={treatment}
                  onClick={() => setFilter(treatment)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                    filter === treatment
                      ? "bg-amber-500 text-black font-medium"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {treatment === "all" ? "All Treatments" : treatment}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(item, index)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    {/* Media Preview */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {item.type === "image" ? (
                        <div className="relative h-full">
                          <img
                            src={item.beforeUrl}
                            alt={`${item.treatment} before and after`}
                            loading="lazy"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            Before
                          </div>
                          <div className="absolute top-2 right-2 bg-amber-500 text-black px-2 py-1 rounded text-xs font-medium">
                            After
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <img
                            src={item.beforeUrl}
                            alt={`${item.treatment} video preview`}
                            loading="lazy"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
                            <Camera className="w-3 h-3 mr-1" />
                            Video
                          </div>
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.treatment}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{item.gender}, {item.patientAge}</span>
                        {item.duration && <span>{item.duration}</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedItem.treatment}
                    </h3>
                    <p className="text-gray-400">{selectedItem.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="relative">
                  {selectedItem.type === "image" ? (
                    <div className="relative">
                      <img
                        src={selectedItem.beforeUrl}
                        alt={`${selectedItem.treatment} before and after`}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                        Before
                      </div>
                      <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-2 rounded font-medium">
                        After
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-[400px]">
                      <video
                        controls
                        className="w-full h-full object-cover"
                        poster={selectedItem.beforeUrl}
                      >
                        <source src={selectedItem.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateMedia("prev");
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateMedia("next");
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Patient: {selectedItem.gender}, {selectedItem.patientAge}
                      {selectedItem.duration && ` • Duration: ${selectedItem.duration}`}
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentIndex + 1} of {filteredItems.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-500/10 to-transparent">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your consultation with our expert practitioners and discover 
              how we can help you achieve natural, beautiful results.
            </p>
            <button
              onClick={() => window.open('https://www.acuityscheduling.com/schedule.php?owner=11449602', '_blank')}
              className="bg-amber-500 text-black px-8 py-4 rounded-full font-medium hover:bg-amber-400 transition-colors"
            >
              Book Your Consultation
            </button>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Real Patient Results Gallery — Before and After Photos</h2>
          <p>View authentic before and after photos from our Harley Street clinic. Our patients have achieved natural, beautiful results with Botox, dermal fillers, lip enhancement, non-surgical nose jobs, and facial rejuvenation treatments. Each image showcases genuine patient transformations performed by our GMC-registered doctors at Cosmedocs London.</p>
          
          <h3>Treatment Results Showcase</h3>
          <p>Browse through real patient transformations including lip filler before and after photos, Botox treatment results for forehead lines and crow's feet, dermal filler makeovers for cheeks and jawline, chin filler contouring, temple filler restoration, tear trough treatment for under-eye hollows, and non-surgical nose job outcomes using hyaluronic acid fillers.</p>
          
          <h3>Expert Aesthetic Medicine London</h3>
          <p>CosmeDocs has performed over one million injections since 2007. Our before and after gallery demonstrates our commitment to natural-looking results and aesthetic excellence on Harley Street, London. Every treatment is carefully documented to showcase the subtle, refined outcomes that define our invisible art approach to aesthetic medicine.</p>
          
          <h3>Facial Rejuvenation Results</h3>
          <p>Our gallery includes results from Profhilo bio-remodelling, polynucleotide therapy, skin booster treatments, masseter Botox for jaw slimming, Nefertiti lift for jawline definition, and comprehensive facial rejuvenation programmes. Each patient's journey demonstrates how our doctor-led approach achieves harmonious, balanced outcomes that enhance natural beauty without appearing overdone.</p>
          
          <h3>Patient Testimonials Visual Evidence</h3>
          <p>See the transformative power of invisible art aesthetic medicine. Our philosophy of bold, natural, always your way is evident in every before and after comparison. Cosmedocs specialises in subtle enhancements that speak without saying a word — transformation that leaves others wondering what's changed, but unable to pinpoint exactly what. Book your consultation to discuss how we can help you achieve similar natural-looking results.</p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterGallery;