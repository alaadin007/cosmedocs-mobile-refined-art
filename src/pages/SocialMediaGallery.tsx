import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, Instagram, ExternalLink } from "lucide-react";
import { generateSEOMetadata } from "../utils/seo";
import profiloplastyThumb from "@/assets/social/profiloplasty-reel-thumbnail.jpg";

interface SocialMediaAsset {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  platform: "instagram" | "tiktok" | "facebook";
  type: "reel" | "post" | "story" | "carousel";
  treatment: string;
  tags: string[];
}

const assets: SocialMediaAsset[] = [
  {
    id: "profiloplasty-reel-1",
    title: "Profiloplasty — Nose & Chin Harmony",
    description: "Non-surgical profile refinement using nose filler and chin filler in a single session. Invisible art at its finest.",
    imageSrc: profiloplastyThumb,
    platform: "instagram",
    type: "reel",
    treatment: "Profiloplasty",
    tags: ["#profiloplasty", "#nosefiller", "#chinfiller", "#cosmedocs", "#invisibleart", "#harleystreet"],
  },
];

const platformColours: Record<string, string> = {
  instagram: "from-pink-500 to-amber-500",
  tiktok: "from-cyan-400 to-pink-500",
  facebook: "from-blue-600 to-blue-400",
};

const SocialMediaGallery = () => {
  const seoData = generateSEOMetadata(
    "Social Media Gallery — CosmeDocs Content Hub",
    "Browse CosmeDocs social media assets, reel thumbnails, and campaign visuals. Invisible art — bold, natural, always your way.",
    "/social-media-gallery/"
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
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero */}
        <section className="relative py-20">
          <div className="page-container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-white/60 font-light tracking-wide">Content Hub</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                Social Media Gallery
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                Reel thumbnails, campaign visuals &amp; content assets — curated for the CosmeDocs brand.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* Asset Grid */}
        <section className="pb-24">
          <div className="page-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {assets.map((asset, idx) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
                    {/* Image */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src={asset.imageSrc}
                        alt={asset.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Platform badge */}
                      <div className={`absolute top-3 left-3 bg-gradient-to-r ${platformColours[asset.platform]} text-white text-xs font-medium px-3 py-1 rounded-full capitalize`}>
                        {asset.platform} {asset.type}
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <a
                          href={asset.imageSrc}
                          download
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-2 rounded-full transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-semibold text-white">{asset.title}</h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed">{asset.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {asset.tags.map(tag => (
                          <span key={tag} className="text-[11px] text-amber-400/70 bg-amber-400/5 border border-amber-400/10 rounded-full px-2.5 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {assets.length <= 1 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-500 mt-16 text-sm font-light"
              >
                More content coming soon — invisible art, one reel at a time.
              </motion.p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMediaGallery;
