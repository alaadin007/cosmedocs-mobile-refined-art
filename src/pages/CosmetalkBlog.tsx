import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const CosmetalkBlog = () => {
  const seoData = generateSEOMetadata(
    "Cosmetalk - Expert Insights on Aesthetic Medicine | Cosmedocs",
    "Discover the latest insights, trends, and expert advice on aesthetic medicine, skincare, and non-surgical treatments from the professionals at Cosmedocs.",
    "/cosmetalk"
  );

  const blogPosts = [
    {
      title: "The Power Trio: L-Ascorbic Acid with Ferulic Acid and Vitamin E",
      description: "Discover the remarkable benefits of L-Ascorbic Acid combined with Ferulic Acid and Vitamin E for radiant, protected skin.",
      category: "Skincare",
      readTime: "8 min read",
      date: "January 17, 2025",
      slug: "/blog/vitamin-c-ferulic-acid-benefits",
      featured: true
    },
    {
      title: "Long-Term Aesthetic Care: Building Your Beauty Journey",
      description: "Understanding the importance of consistent, professional aesthetic care for lasting results and healthy skin.",
      category: "Treatment Planning",
      readTime: "6 min read", 
      date: "December 2024",
      slug: "/long-term-aesthetic-care-blog"
    },
    {
      title: "Understanding Aesthetic Maintenance Costs",
      description: "A comprehensive guide to budgeting for your aesthetic treatments and understanding the value of professional care.",
      category: "Investment Guide",
      readTime: "7 min read",
      date: "December 2024", 
      slug: "/aesthetic-maintenance-cost-blog"
    },
    {
      title: "PDO Threads: The Science Behind Non-Surgical Lifting",
      description: "Exploring the innovative PDO thread technology that provides natural-looking lifting without surgery.",
      category: "Non-Surgical",
      readTime: "10 min read",
      date: "November 2024",
      slug: "/pdo-threads-blog"
    },
    {
      title: "Non-Surgical Nose Jobs: Reshaping Without Surgery",
      description: "Understanding the artistry and technique behind non-surgical rhinoplasty using dermal fillers.",
      category: "Non-Surgical", 
      readTime: "9 min read",
      date: "November 2024",
      slug: "/non-surgical-nose-job-blog"
    },
    {
      title: "Clinical Concepts to Flawless Skin",
      description: "Bridging the gap between clinical excellence and beautiful, natural-looking results in aesthetic medicine.",
      category: "Clinical Excellence",
      readTime: "12 min read",
      date: "October 2024",
      slug: "/clinical-concepts-to-flawless-skin"
    },
    {
      title: "Chinese London Aesthetics: Cultural Beauty Perspectives",
      description: "Exploring aesthetic preferences and treatment approaches within London's diverse Chinese community.",
      category: "Cultural Aesthetics",
      readTime: "8 min read", 
      date: "October 2024",
      slug: "/chinese-london-aesthetics-blog"
    }
  ];

  const categories = ["All", "Skincare", "Non-Surgical", "Treatment Planning", "Clinical Excellence"];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Cosmetalk - Cosmedocs Blog",
    "description": "Expert insights on aesthetic medicine, skincare, and non-surgical treatments",
    "url": "https://www.cosmedocs.com/cosmetalk",
    "publisher": {
      "@type": "Organization",
      "name": "Cosmedocs"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://www.cosmedocs.com${post.slug}`,
      "dateModified": post.date,
      "author": {
        "@type": "Organization", 
        "name": "Cosmedocs"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="aesthetic medicine blog, skincare tips, non-surgical treatments, cosmetic procedures, beauty insights, professional skincare, dermal fillers, botox, anti-aging" />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seoData.image} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-accent/5 via-background to-primary/5">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Cosmetalk
                </h1>
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Where aesthetic medicine meets invisible art. Discover expert insights, 
                treatment guides, and the science behind beautiful, natural results.
              </p>
              <div className="mt-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Our aesthetics is invisible art
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <section key={index} className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4">Featured Post</Badge>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/20">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                      <Badge variant="outline">{post.category}</Badge>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-lg">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Button asChild size="lg" className="group">
                      <Link to={post.slug} className="inline-flex items-center gap-2">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        ))}

        {/* All Posts Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription>{post.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          <Button variant="ghost" size="sm" asChild className="group/btn">
                            <Link to={post.slug} className="inline-flex items-center gap-1">
                              Read More
                              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Aesthetic Journey?</h3>
              <p className="text-lg mb-8 text-muted-foreground">
                Transform your understanding of aesthetic medicine with expert guidance from Cosmedocs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Book Your Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/treatments">Explore Treatments</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <p>
            Cosmetalk is the premier destination for aesthetic medicine insights, featuring expert articles on 
            non-surgical treatments, skincare science, dermal fillers, botox procedures, and anti-aging solutions. 
            Our blog covers comprehensive guides on facial aesthetics, cosmetic procedures, treatment planning, 
            and the latest innovations in aesthetic medicine. Whether you're interested in lip fillers, 
            non-surgical facelifts, PDO threads, chemical peels, or advanced skincare treatments, 
            Cosmetalk provides evidence-based information from certified aesthetic practitioners. 
            Explore topics including vitamin C serums, retinoids, hyaluronic acid treatments, 
            polynucleotide therapy, Profhilo treatments, and professional skincare regimens. 
            Our content focuses on natural-looking results, safety protocols, treatment longevity, 
            and the art of subtle enhancement that defines modern aesthetic medicine. 
            Join thousands of readers who trust Cosmetalk for reliable, professional insights 
            into the world of cosmetic enhancement and aesthetic wellness.
          </p>
        </div>
      </div>
    </>
  );
};

export default CosmetalkBlog;