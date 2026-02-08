import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";

interface ArticleLink {
  title: string;
  category: string;
  path: string;
  excerpt?: string;
}

const BlogHome = () => {
  const seoData = generateSEOMetadata(
    "CosmeDocs Blog | Aesthetic Medicine Insights & Skin Science",
    "Expert articles on aesthetic medicine, skin science, treatment guides and patient education from Harley Street doctors. Evidence-based insights since 2007.",
    "/blog"
  );

  const featuredArticle = {
    title: "In Layers, Not Lines. In Planes, Not Pages.",
    subtitle: "The CosmeDocs way of teaching aesthetics.",
    excerpt:
      "At CosmeDocs, we believe aesthetic medicine must be learned not through dissection, but through depth. Our canvas is alive. We sculpt, not cut. We restore, not remove.",
    category: "AESTHETIC PHILOSOPHY",
    path: "/blog/beauty-ethnic-neutrality",
    image: "/lovable-uploads/95a2c194-5d44-4495-8025-de676d437b8d.png",
  };

  const headlineArticles: ArticleLink[] = [
    {
      title: "Vitamin C & Ferulic Acid: The Science Behind Radiant Skin",
      category: "SKIN SCIENCE",
      path: "/cosmetalk/vitamin-c-ferulic-acid-benefits",
    },
    {
      title: "Lazy Skin Syndrome: The Hidden Cost of Moisturiser Dependency",
      category: "COSMETALK",
      path: "/cosmetalk/lazy-skin-syndrome",
    },
    {
      title: "Inside the Mind of an Aesthetic Doctor",
      category: "CLINICAL",
      path: "/inside-mind-aesthetic-doctor-blog",
    },
    {
      title: "Aesthetic Maintenance: Understanding Long-Term Costs",
      category: "PATIENT GUIDE",
      path: "/aesthetic-maintenance-cost-blog",
    },
  ];

  const skinScienceArticles = {
    featured: {
      title: "How to Get Flawless Skin: Clinical Dermatology Tips",
      excerpt:
        "Evidence-based skincare strategies combining professional treatments with daily routines for lasting results.",
      category: "SKIN SCIENCE",
      path: "/cosmetalk/flawless-skin",
    },
    headlines: [
      {
        title: "Smoker's Lines in Women: Prevention & Treatment Options",
        path: "/cosmetalk/smokers-lines-women",
      },
      {
        title: "Vitamin C & Ferulic Acid Benefits for Skin Health",
        path: "/cosmetalk/vitamin-c-ferulic-acid-benefits",
      },
      {
        title: "Lazy Skin Syndrome: Breaking Moisturiser Dependency",
        path: "/cosmetalk/lazy-skin-syndrome",
      },
      {
        title: "How to Get Rid of Bruises Quickly After Treatment",
        path: "/blog/how-to-get-rid-of-bruises-quickly",
      },
    ],
    secondary: {
      title: "Skin Tags: What They Are & How to Remove Them Safely",
      excerpt:
        "Professional guidance on identifying and safely removing skin tags with clinical methods.",
      category: "DERMATOLOGY",
      path: "/blog/skin-tags-and-skin-tag-removal",
    },
  };

  const treatmentArticles = {
    featured: {
      title: "Non-Surgical Nose Job: The Complete Patient Guide",
      excerpt:
        "Everything you need to know about reshaping your nose without surgery — from dermal filler to PCL threads.",
      category: "TREATMENT GUIDE",
      path: "/non-surgical-nose-job-blog",
    },
    headlines: [
      {
        title: "PDO Thread Face Lift: What You Need to Know",
        path: "/pdo-threads-blog",
      },
      {
        title: "Lip Wrinkles: Causes, Myths & Treatment Options",
        path: "/blog/lip-wrinkles-treatments",
      },
      {
        title: "Long-Term Aesthetic Care: Planning Your Journey",
        path: "/long-term-aesthetic-care-blog",
      },
      {
        title: "Forehead Wrinkles: Myths, Tips & What Actually Works",
        path: "/blog/forehead-wrinkles-myths-tips",
      },
    ],
    secondary: {
      title: "The Ultimate Botox Guide: From Science to Results",
      excerpt:
        "A comprehensive, evidence-based guide to botulinum toxin treatments — what it does, how it works, and what to expect.",
      category: "EDUCATION",
      path: "/ultimate-botox-guide",
    },
  };

  const clinicalArticles = {
    featured: {
      title: "Inside the Mind of an Aesthetic Doctor",
      excerpt:
        "What really drives clinical decision-making in aesthetic medicine? A candid look at the art behind the science.",
      category: "CLINICAL INSIGHT",
      path: "/inside-mind-aesthetic-doctor-blog",
    },
    headlines: [
      {
        title: "Orofacial & Neck Pain: Breaking the Tension Cycle",
        path: "/cosmetalk/orofacial-neck-pain-cycle",
      },
      {
        title: "Aesthetic Maintenance Costs: An Honest Breakdown",
        path: "/aesthetic-maintenance-cost-blog",
      },
      {
        title: "Beauty & Ethnic Neutrality in Aesthetic Medicine",
        path: "/blog/beauty-ethnic-neutrality",
      },
      {
        title: "The Eight-Point Facelift Technique Explained",
        path: "/eight-point-facelift",
      },
    ],
    secondary: {
      title: "London Tweakments: The Rise of Natural Aesthetics",
      excerpt:
        "How subtle, considered treatments are redefining beauty standards in the capital.",
      category: "TREND",
      path: "/london-tweakments-natural-aesthetics",
    },
  };

  const sidebarQuickLinks = [
    { label: "Botox Treatments", path: "/treatments/botox/" },
    { label: "Dermal Fillers", path: "/treatments/dermal-fillers/" },
    { label: "Lip Fillers", path: "/treatments/lip-fillers/" },
    { label: "Non-Surgical Nose Job", path: "/treatments/nose-filler/" },
    { label: "Before & After Gallery", path: "/before-after/" },
    { label: "Book Consultation", path: "https://med.as.me/harleystreet" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CosmeDocs Blog — Aesthetic Medicine Insights",
    description:
      "Expert articles on aesthetic medicine, skin science, and patient education from Harley Street doctors.",
    url: "https://cosmedocs.co.uk/blog",
    publisher: {
      "@type": "MedicalBusiness",
      name: "CosmeDocs",
      url: "https://cosmedocs.co.uk/",
    },
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmedocs.co.uk/blog" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content="https://cosmedocs.co.uk/blog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Home2Header />

        {/* Masthead */}
        <section className="border-b border-white/[0.06] pt-28 pb-6 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-2">
                Cosme<span className="text-[#C9A050] font-light">Docs</span>{" "}
                Blog
              </h1>
              <p className="text-white/30 text-sm font-light tracking-wide">
                Skin Science • Treatment Insights • Clinical Research • Patient
                Education
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TOP — Featured + Headlines + Sidebar
        ═══════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-[1fr_300px_240px] gap-8">
            {/* Featured Article */}
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

            {/* Headline Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-0"
            >
              {headlineArticles.map((article, i) => (
                <Link
                  key={i}
                  to={article.path}
                  className="block py-4 border-b border-white/[0.06] last:border-0 group"
                >
                  <span className="text-[#C9A050] text-[10px] font-medium tracking-wider uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-medium text-white/80 mt-1 leading-snug group-hover:text-[#C9A050] transition-colors">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block space-y-6"
            >
              {/* Quick Links */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                <h4 className="text-xs font-medium text-white/60 tracking-wider uppercase mb-4">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {sidebarQuickLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-[#C9A050]/70 hover:text-[#C9A050] transition-colors font-light"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Philosophy Sidebar */}
              <div className="border-t border-white/[0.06] pt-5">
                <span className="text-[#C9A050] text-[10px] tracking-wider uppercase font-medium">
                  Our Philosophy
                </span>
                <p className="text-white/50 text-sm font-light mt-2 leading-relaxed italic">
                  "Our aesthetics is invisible art — bold, natural, always your
                  way."
                </p>
                <p className="text-white/25 text-xs font-light mt-2">
                  CosmeDocs • Since 2007
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CATEGORY SECTION: Skin Science
        ═══════════════════════════════════════════ */}
        <CategorySection
          title="Skin Science"
          data={skinScienceArticles}
          delay={0}
        />

        {/* ═══════════════════════════════════════════
            CATEGORY SECTION: Treatment Insights
        ═══════════════════════════════════════════ */}
        <CategorySection
          title="Treatment Insights"
          data={treatmentArticles}
          delay={0.1}
        />

        {/* ═══════════════════════════════════════════
            CATEGORY SECTION: Clinical & Research
        ═══════════════════════════════════════════ */}
        <CategorySection
          title="Clinical & Research"
          data={clinicalArticles}
          delay={0.2}
        />

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
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

        <Footer />
      </div>
    </>
  );
};

/* ─────────────────────────────────────────────
   CATEGORY SECTION COMPONENT
   Reusable magazine-style category block
   ───────────────────────────────────────────── */
interface CategoryData {
  featured: {
    title: string;
    excerpt: string;
    category: string;
    path: string;
  };
  headlines: { title: string; path: string }[];
  secondary: {
    title: string;
    excerpt: string;
    category: string;
    path: string;
  };
}

const CategorySection = ({
  title,
  data,
  delay = 0,
}: {
  title: string;
  data: CategoryData;
  delay?: number;
}) => (
  <section className="border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="flex items-center gap-3 mb-8"
      >
        <h2 className="text-xl font-light text-white/80">{title}</h2>
        <ArrowRight className="w-4 h-4 text-white/30" />
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_280px_1fr] gap-8">
        {/* Featured (left) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        >
          <Link to={data.featured.path} className="group block">
            <span className="text-[#C9A050] text-[10px] font-medium tracking-wider uppercase">
              {data.featured.category}
            </span>
            <h3 className="text-xl md:text-2xl font-light mt-2 mb-3 group-hover:text-[#C9A050]/80 transition-colors leading-tight">
              {data.featured.title}
            </h3>
            <p className="text-white/35 text-sm font-light leading-relaxed">
              {data.featured.excerpt}
            </p>
          </Link>
        </motion.div>

        {/* Headlines (middle) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
          className="space-y-0"
        >
          {data.headlines.map((article, i) => (
            <Link
              key={i}
              to={article.path}
              className="block py-3 border-b border-white/[0.06] last:border-0 group"
            >
              <h4 className="text-sm font-medium text-white/70 leading-snug group-hover:text-[#C9A050] transition-colors">
                {article.title}
              </h4>
            </Link>
          ))}
        </motion.div>

        {/* Secondary (right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <Link to={data.secondary.path} className="group block">
            <span className="text-[#C9A050] text-[10px] font-medium tracking-wider uppercase">
              {data.secondary.category}
            </span>
            <h3 className="text-xl font-light mt-2 mb-3 group-hover:text-[#C9A050]/80 transition-colors leading-tight">
              {data.secondary.title}
            </h3>
            <p className="text-white/35 text-sm font-light leading-relaxed">
              {data.secondary.excerpt}
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BlogHome;
