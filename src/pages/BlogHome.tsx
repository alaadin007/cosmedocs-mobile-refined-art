import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import { ArrowRight, Syringe, Sparkles, Eye, Brain } from "lucide-react";
import BlogHeroSlider from "@/components/blog/BlogHeroSlider";
import BlogSidebar from "@/components/blog/BlogSidebar";

import smartAestheticsHero from "@/assets/smart-aesthetics-hero.jpg";
import botoxGuideHero from "@/assets/botox-guide-hero.jpg";

const BlogHome = () => {
  const seoData = generateSEOMetadata(
    "CosmeDocs Blog | Aesthetic Medicine Insights & Skin Science",
    "Expert articles on aesthetic medicine, skin science, treatment guides and patient education from Harley Street doctors. Evidence-based insights since 2007.",
    "/blog"
  );

  const featuredArticle = {
    title: "Smart Aesthetics: Understand Your Face Before You Treat It",
    subtitle: "The interactive course that teaches you how aesthetic treatments actually work — from the inside out.",
    excerpt:
      "Why do some treatments fail? What causes sagging first — skin, fat, or bone? Learn the 9 clinical principles Harley Street doctors use to plan every procedure. Free, visual, and built for patients who want to understand before they commit.",
    category: "SMART AESTHETICS",
    path: "/aesthetic-treatments-made-easy/",
    image: smartAestheticsHero,
  };

  const resultsExplainedArticles = [
    {
      title: "Lip Filler Results Explained: Shape, Proportion & Natural Outcomes",
      category: "RESULTS EXPLAINED",
      path: "/blog/lip-filler-results-explained/",
      icon: "sparkles",
    },
    {
      title: "Tear Trough Filler Results Explained: What Improvement Really Looks Like",
      category: "RESULTS EXPLAINED",
      path: "/blog/tear-trough-filler-results-explained/",
      icon: "eye",
    },
    {
      title: "Jaw Filler Results Explained: Structure, Contour & Natural Outcomes",
      category: "RESULTS EXPLAINED",
      path: "/blog/jaw-filler-results-explained/",
      icon: "syringe",
    },
    {
      title: "Chin Filler Results Explained: Balance, Projection & Natural Profiles",
      category: "RESULTS EXPLAINED",
      path: "/blog/chin-filler-results-explained/",
      icon: "syringe",
    },
  ];

  const editorialArticles = [
    {
      title: "Turning 30 in 2026: The Smart Woman's Guide to Preventative Aesthetics",
      subtitle: "Baby Botox, collagen banking & the death of the duck lip — an honest guide to what you actually need at 30.",
      category: "PREJUVENATION",
      path: "/turning-30-aesthetic-guide",
      icon: "sparkles",
    },
    {
      title: "Untraceably You: Look 5–10 Years Younger Naturally",
      subtitle: "Why invisible results require more skill than dramatic ones — the philosophy behind undetectable rejuvenation.",
      category: "PHILOSOPHY",
      path: "/untraceably-you",
      icon: "sparkles",
    },
    {
      title: "Inside the Mind of an Aesthetic Doctor",
      subtitle: "What a Harley Street doctor actually thinks during a consultation — the unseen decisions behind every result.",
      category: "BEHIND THE SCENES",
      path: "/inside-mind-aesthetic-doctor-blog",
      icon: "eye",
    },
    {
      title: "Why Threads Are Changing the Conversation About Ageing",
      subtitle: "The science of mechanical lifting — and why it appeals to patients who want structure, not volume.",
      category: "INSIGHT",
      path: "/pdo-threads-blog",
      icon: "syringe",
    },
    {
      title: "Why Women Get Smoker's Lines — Even Without Smoking",
      subtitle: "The biomechanics of the orbicularis oris, why it's almost exclusively a female concern, and what can be done.",
      category: "CLINICAL INSIGHT",
      path: "/blog/smokers-lines-women",
      icon: "sparkles",
    },
    {
      title: "The Long-Term Benefits of Aesthetic Continuity",
      subtitle: "Why returning to the same doctor matters — and what you gain over five years.",
      category: "EDITORIAL",
      path: "/long-term-aesthetic-care-blog",
      icon: "arrow",
    },
    {
      title: "Aesthetic Treatment Maintenance Costs: What to Really Expect",
      subtitle: "How to budget wisely for long-term aesthetic care — and why continuity saves you money.",
      category: "EDITORIAL",
      path: "/aesthetic-maintenance-cost-blog",
      icon: "arrow",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CosmeDocs Blog — Aesthetic Medicine Insights",
    description:
      "Expert articles on aesthetic medicine, skin science, and patient education from Harley Street doctors.",
    url: "https://www.cosmedocs.com/blog/",
    publisher: {
      "@type": "MedicalBusiness",
      name: "CosmeDocs",
      url: "https://www.cosmedocs.com/",
    },
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/blog/" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/blog/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Slider */}
        <BlogHeroSlider />

        {/* Featured + Results Explained + Sidebar */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-[1fr_300px_240px] gap-8">
            {/* Featured Article — Ultimate Botox Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to={featuredArticle.path} className="group block">
                <div className="rounded-xl overflow-hidden border border-white/[0.08] mb-4">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <span className="text-[#C9A050] text-xs font-medium tracking-wider uppercase">
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-light mt-2 mb-2 group-hover:text-[#C9A050]/80 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/40 text-sm font-light italic mb-2">
                  {featuredArticle.subtitle}
                </p>
                <p className="text-white/35 text-sm font-light leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </Link>
            </motion.div>

            {/* 4 Results Explained Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-0"
            >
              {resultsExplainedArticles.map((article, i) => (
                <Link
                  key={i}
                  to={article.path}
                  className="flex items-start gap-3 py-4 border-b border-white/[0.06] last:border-0 group"
                >
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A050]/10 flex items-center justify-center">
                    <ArticleIcon name={article.icon} className="w-3 h-3 text-[#C9A050]/60" />
                  </span>
                  <div>
                    <span className="text-[#C9A050] text-[10px] font-medium tracking-wider uppercase">
                      {article.category}
                    </span>
                    <h3 className="text-sm font-medium text-white/80 mt-1 leading-snug group-hover:text-[#C9A050] transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </motion.div>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </section>

        {/* Editorial Section */}
        {editorialArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 pb-10">
            <div className="border-t border-white/[0.06] pt-8">
              <h3 className="text-xs font-medium text-white/40 tracking-wider uppercase mb-6">
                Editorial
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {editorialArticles.map((article, i) => (
                  <Link
                    key={i}
                    to={article.path}
                    className="group block p-5 rounded-xl border border-white/[0.06] hover:border-[#C9A050]/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
                  >
                    <span className="text-[#C9A050] text-[10px] font-medium tracking-wider uppercase">
                      {article.category}
                    </span>
                    <h4 className="text-lg font-light text-white/80 mt-2 mb-2 group-hover:text-[#C9A050] transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-white/30 text-sm font-light leading-relaxed">
                      {article.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#C9A050]/60 text-xs mt-3 group-hover:text-[#C9A050] transition-colors">
                      Read article <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* CTA */}
        <section className="py-16 px-4 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-extralight mb-4">
                Have a Question About a{" "}
                <span className="text-[#C9A050] font-light">Treatment?</span>
              </h2>
              <p className="text-white/40 text-sm font-light mb-8">
                Our Harley Street doctors are happy to discuss your concerns
                during a consultation.
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div
          className="sr-only"
          aria-hidden="true"
          role="complementary"
          aria-label="Extended blog information for search engines"
        >
          <h2>CosmeDocs Blog: Expert Aesthetic Medicine Articles</h2>
          <p>
            The CosmeDocs Blog features expert articles on aesthetic medicine,
            skin science, and patient education from Harley Street
            doctors. Topics include botox treatment guides, dermal filler
            insights, skincare science, non-surgical procedures, clinical
            research and evidence-based aesthetic practice. Our doctors share
            their clinical expertise covering anti-wrinkle treatments, lip
            fillers, non-surgical rhinoplasty, thread lifts, skin boosters and
            facial rejuvenation. Patient education articles explain treatment
            processes, expected outcomes, recovery timelines and aftercare
            guidance. Our aesthetics is invisible art — bold, natural, always
            your way.
          </p>
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────────
   ICON HELPER
   ───────────────────────────────────────────── */
const ArticleIcon = ({ name, className }: { name?: string; className?: string }) => {
  switch (name) {
    case "syringe": return <Syringe className={className} />;
    case "sparkles": return <Sparkles className={className} />;
    case "eye": return <Eye className={className} />;
    default: return <ArrowRight className={className} />;
  }
};

export default BlogHome;
