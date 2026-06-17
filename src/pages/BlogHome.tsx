import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import { ArrowRight, Syringe, Sparkles, Eye, Brain } from "lucide-react";
import BlogHeroSlider from "@/components/blog/BlogHeroSlider";
import BlogSidebar from "@/components/blog/BlogSidebar";

import smartAestheticsHero from "@/assets/smart-aesthetics-hero.jpg";
import botoxGuideHero from "@/assets/botox-guide-hero.jpg";
import edBotoxGuide from "@/assets/blog/ed-botox-guide.jpg";
import edTurning30 from "@/assets/blog/ed-turning-30.jpg";
import edUntraceably from "@/assets/blog/ed-untraceably.jpg";
import edDoctorMind from "@/assets/blog/ed-doctor-mind.jpg";
import edThreads from "@/assets/blog/ed-threads.jpg";
import edSmokersLines from "@/assets/blog/ed-smokers-lines.jpg";
import edContinuity from "@/assets/blog/ed-continuity.jpg";
import edMaintenance from "@/assets/blog/ed-maintenance.jpg";

const BlogHome = () => {
  const seoData = generateSEOMetadata(
    "CosmeTalk by Cosmedocs | The Truth-First Aesthetic Medicine Edit",
    "CosmeTalk is the Cosmedocs editorial — doctor-written, evidence-based essays on aesthetic medicine. No hype, no sales pitch. The version we'd give a patient in the consulting room.",
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
      title: "The Ultimate Botox Guide: From Science to Results",
      subtitle: "The definitive, evidence-based guide to botulinum toxin — what it does, how it works, and how to choose the right practitioner.",
      category: "EDUCATION",
      path: "/ultimate-botox-guide/",
      icon: "syringe",
      image: edBotoxGuide,
    },
    {
      title: "Turning 30 in 2026: The Smart Woman's Guide to Preventative Aesthetics",
      subtitle: "Baby Botox, collagen banking & the death of the duck lip — an honest guide to what you actually need at 30.",
      category: "PREJUVENATION",
      path: "/turning-30-aesthetic-guide",
      icon: "sparkles",
      image: edTurning30,
    },
    {
      title: "Untraceably You: Look 5–10 Years Younger Naturally",
      subtitle: "Why invisible results require more skill than dramatic ones — the philosophy behind undetectable rejuvenation.",
      category: "PHILOSOPHY",
      path: "/untraceably-you",
      icon: "sparkles",
      image: edUntraceably,
    },
    {
      title: "Inside the Mind of an Aesthetic Doctor",
      subtitle: "What a Harley Street doctor actually thinks during a consultation — the unseen decisions behind every result.",
      category: "BEHIND THE SCENES",
      path: "/inside-mind-aesthetic-doctor-blog",
      icon: "eye",
      image: edDoctorMind,
    },
    {
      title: "Why Threads Are Changing the Conversation About Ageing",
      subtitle: "The science of mechanical lifting — and why it appeals to patients who want structure, not volume.",
      category: "INSIGHT",
      path: "/pdo-threads-blog",
      icon: "syringe",
      image: edThreads,
    },
    {
      title: "Why Women Get Smoker's Lines — Even Without Smoking",
      subtitle: "The biomechanics of the orbicularis oris, why it's almost exclusively a female concern, and what can be done.",
      category: "CLINICAL INSIGHT",
      path: "/blog/smokers-lines-women",
      icon: "sparkles",
      image: edSmokersLines,
    },
    {
      title: "The Long-Term Benefits of Aesthetic Continuity",
      subtitle: "Why returning to the same doctor matters — and what you gain over five years.",
      category: "EDITORIAL",
      path: "/long-term-aesthetic-care-blog",
      icon: "arrow",
      image: edContinuity,
    },
    {
      title: "Aesthetic Treatment Maintenance Costs: What to Really Expect",
      subtitle: "How to budget wisely for long-term aesthetic care — and why continuity saves you money.",
      category: "EDITORIAL",
      path: "/aesthetic-maintenance-cost-blog",
      icon: "arrow",
      image: edMaintenance,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CosmeTalk by Cosmedocs",
    alternateName: "CosmeTalk",
    description:
      "The truth-first edit from Cosmedocs. Doctor-written essays on aesthetic medicine — what works, what doesn't, and what every clinic should have told you before you booked.",
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

        {/* CosmeTalk — masthead / manifesto strip (the blog IS CosmeTalk) */}
        <section className="relative border-y border-[#C9A050]/20 bg-gradient-to-r from-[#C9A050]/[0.08] via-transparent to-[#C9A050]/[0.08]">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050] font-medium">
              Cosme<span className="text-white">Talk</span> · An editorial by Cosmedocs
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extralight leading-tight text-white">
              The truth-first edit. <span className="text-white/50">Aesthetic medicine, decoded.</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm md:text-base text-white/70 font-light leading-relaxed">
              Doctor-written essays on what works, what doesn't, and what every clinic should have told you before you booked. No hype. No sales pitch — just the version we'd give a patient in the consulting room. Our aesthetics is invisible art: bold, natural, always your way.
            </p>
          </div>
        </section>


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
                    className="group block rounded-xl border border-white/[0.06] hover:border-[#C9A050]/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] overflow-hidden"
                  >
                    {article.image && (
                      <div className="overflow-hidden aspect-[16/10] bg-black">
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          width={1024}
                          height={640}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="p-5">
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
                    </div>
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
          aria-label="Extended editorial information for search engines"
        >
          <h2>CosmeTalk by Cosmedocs: The Truth-First Aesthetic Edit</h2>
          <p>
            CosmeTalk is the editorial voice of Cosmedocs — doctor-written,
            evidence-based articles on aesthetic medicine from a Harley Street
            practice. Topics span anti-wrinkle treatment, dermal fillers, lip
            filler, tear-trough filler, jawline contouring, non-surgical
            rhinoplasty, PDO threads, RF microneedling, Endolift, Profhilo,
            polynucleotides, chemical peels, prescription skincare and
            long-term aesthetic continuity. Every article is written to
            inform, not to sell: where a device has a ceiling, we name it;
            where a before-and-after is doing more work than the treatment,
            we say so; where the right answer is "don't do this", that's the
            answer we publish. Our aesthetics is invisible art — bold,
            natural, always your way.
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
    case "brain": return <Brain className={className} />;
    default: return <ArrowRight className={className} />;
  }
};

export default BlogHome;
