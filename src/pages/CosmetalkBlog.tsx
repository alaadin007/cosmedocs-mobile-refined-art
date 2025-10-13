import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, User, TrendingUp, BookOpen, Sparkles, Heart, Star } from "lucide-react";

const CosmetalkBlog = () => {
  const seoData = generateSEOMetadata(
    "Cosmetalk | Aesthetic Medicine Insights | Cosmedocs",
    "Discover the latest insights, trends, and expert advice on aesthetic medicine, skincare, and non-surgical treatments from the professionals at Cosmedocs.",
    "/cosmetalk"
  );

  const blogPosts = [
    {
      title: "Botox Price London: Complete Guide to Costs & Expert Treatment",
      description: "Discover comprehensive Botox prices in London. Learn why master injectors offer better value despite higher costs, with expert insights on safety and results.",
      category: "Price Guide",
      readTime: "12 min read",
      date: "January 18, 2025",
      slug: "/botox-price-london",
      featured: true,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      author: "By Dr. Ahmed Haq"
    },
    {
      title: "Inside the Mind of an Aesthetic Doctor: The Art of Cheeks, Lips and Chin Fillers",
      description: "Discover the artistic approach to facial aesthetics through the expert perspective of Dr Ahmed Haq. Learn about the nuanced techniques behind cheeks, lips and chin fillers.",
      category: "Expert Insight",
      readTime: "8 min read",
      date: "January 16, 2025",
      slug: "/inside-mind-aesthetic-doctor-blog",
      featured: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      author: "By Dr. Ahmed Haq"
    },
    {
      title: "Beauty as Ethnic Neutrality: Aesthetic Harmony Beyond Race",
      description: "Exploring how universal beauty standards transcend ethnicity through facial harmony, balance, and symmetry across all cultures.",
      category: "Beauty Science",
      readTime: "12 min read",
      date: "January 15, 2024",
      slug: "/blog/beauty-ethnic-neutrality",
      featured: false,
      image: "/lovable-uploads/95a2c194-5d44-4495-8025-de676d437b8d.png",
      author: "By CosmeDocs"
    },
    {
      title: "Lazy Skin Syndrome: The Hidden Cost of Moisturiser Dependency",
      description: "Discover what Lazy Skin Syndrome is, how moisturisers create long-term skin fatigue, and the expert-approved treatments that restore hydration from within.",
      category: "Skincare Science",
      readTime: "9 min read",
      date: "January 20, 2024",
      slug: "/cosmetalk/lazy-skin-syndrome",
      featured: false,
      image: "/src/assets/dehydrated-fingers.jpg",
      author: "Edited by Dr. Ahmed Haq, Dr. Hena Haq"
    },
    {
      title: "How to Achieve Flawless Skin: 9-Step Dermatologist Guide",
      description: "Discover the 9-step dermatologist-approved plan to transform your skin naturally. From understanding ageing causes to professional treatments that deliver real results.",
      category: "Skincare Science", 
      readTime: "12 min read",
      date: "January 18, 2024",
      slug: "/cosmetalk/flawless-skin",
      featured: false,
      image: "/lovable-uploads/5dced835-f996-4de3-9630-369db5c43e9b.png",
      author: "Edited by Dr. Ahmed Haq, Dr. Hena Haq"
    },
    {
      title: "Why Women Get Smokers Lines (Even Without Smoking)",
      description: "Discover why 99% of smokers lines patients are women, even non-smokers. Learn about lip anatomy, speech patterns, and lifestyle factors that create perioral lines.",
      category: "Facial Aging",
      readTime: "7 min read", 
      date: "January 15, 2024",
      slug: "/cosmetalk/smokers-lines-women",
      featured: false,
      image: "/lovable-uploads/b71c8892-0875-4d89-ba82-33c9ac45e35f.png",
      author: "Edited by Dr. Ahmed Haq, Dr. Hena Haq"
    },
    {
      title: "The Power Trio: L-Ascorbic Acid with Ferulic Acid and Vitamin E",
      description: "Discover the remarkable benefits of L-Ascorbic Acid combined with Ferulic Acid and Vitamin E for radiant, protected skin.",
      category: "Skincare Science",
      readTime: "8 min read",
      date: "January 17, 2025",
      slug: "/cosmetalk/vitamin-c-ferulic-acid-benefits",
      featured: false,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=400&fit=crop",
      author: "Edited by Dr. Ahmed Haq, Dr. Hena Haq"
    },
    {
      title: "Long-Term Aesthetic Care: Building Your Beauty Journey",
      description: "Understanding the importance of consistent, professional aesthetic care for lasting results and healthy skin.",
      category: "Treatment Planning",
      readTime: "6 min read", 
      date: "December 2024",
      slug: "/long-term-aesthetic-care-blog",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
      author: "Dr. Michael Torres"
    },
    {
      title: "Understanding Aesthetic Maintenance Costs",
      description: "A comprehensive guide to budgeting for your aesthetic treatments and understanding the value of professional care.",
      category: "Investment Guide",
      readTime: "7 min read",
      date: "December 2024", 
      slug: "/aesthetic-maintenance-cost-blog",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop",
      author: "Emma Richardson"
    },
    {
      title: "PDO Threads: The Science Behind Non-Surgical Lifting",
      description: "Exploring the innovative PDO thread technology that provides natural-looking lifting without surgery.",
      category: "Non-Surgical",
      readTime: "10 min read",
      date: "November 2024",
      slug: "/pdo-threads-blog",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=300&fit=crop",
      author: "Dr. James Park"
    },
    {
      title: "Non-Surgical Nose Jobs: Reshaping Without Surgery",
      description: "Understanding the artistry and technique behind non-surgical rhinoplasty using dermal fillers.",
      category: "Non-Surgical", 
      readTime: "9 min read",
      date: "November 2024",
      slug: "/non-surgical-nose-job-blog",
      image: "https://images.unsplash.com/photo-1594824706977-5bb00e53137a?w=600&h=300&fit=crop",
      author: "Dr. Lisa Martinez"
    },
    {
      title: "Clinical Concepts to Flawless Skin",
      description: "Bridging the gap between clinical excellence and beautiful, natural-looking results in aesthetic medicine.",
      category: "Clinical Excellence",
      readTime: "12 min read",
      date: "October 2024",
      slug: "/clinical-concepts-to-flawless-skin",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=300&fit=crop",
      author: "Dr. Rachel Kim"
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, icon: BookOpen },
    { name: "Beauty Science", count: 1, icon: Star },
    { name: "Skincare Science", count: 1, icon: Star },
    { name: "Non-Surgical", count: 2, icon: Heart },
    { name: "Treatment Planning", count: 1, icon: TrendingUp },
    { name: "Clinical Excellence", count: 1, icon: Sparkles }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Beauty Science": "bg-gradient-to-r from-pink-500 to-rose-600 text-white",
      "Skincare Science": "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
      "Non-Surgical": "bg-gradient-to-r from-blue-500 to-cyan-600 text-white", 
      "Treatment Planning": "bg-gradient-to-r from-purple-500 to-violet-600 text-white",
      "Clinical Excellence": "bg-gradient-to-r from-orange-500 to-red-600 text-white",
      "Investment Guide": "bg-gradient-to-r from-yellow-500 to-amber-600 text-white",
      "Cultural Aesthetics": "bg-gradient-to-r from-pink-500 to-rose-600 text-white"
    };
    return colors[category] || "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
  };

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

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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

      <div className="min-h-screen bg-black text-white">
        {/* Minimal Header */}
        <section className="bg-black border-b border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Cosme<span className="text-red-400">Talk</span>
            </h1>
            <p className="text-gray-300 text-sm">
              Our aesthetics is invisible art • Bold • Natural • Always Your Way
            </p>
          </div>
        </section>

        <div className="container mx-auto px-2 py-4">
          {/* Featured Article */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2"
            >
              <Card className="overflow-hidden bg-gray-800 border border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-48 md:h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardHeader className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="text-xs bg-red-500 text-white">
                        FEATURED
                      </Badge>
                      <Badge className="text-xs bg-gray-600 text-gray-200">
                        {featuredPost.category}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        {featuredPost.date} • {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <CardTitle className="text-lg mb-2 leading-tight text-white">
                      {featuredPost.title}
                    </CardTitle>
                    
                    <p className="text-gray-300 text-sm mb-3 leading-tight">
                      {featuredPost.description}
                    </p>
                    
                    <Button asChild className="bg-gray-700 hover:bg-gray-600 text-white text-xs h-8">
                      <Link to={featuredPost.slug} className="inline-flex items-center gap-1">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardHeader>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Latest Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-2"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full overflow-hidden bg-gray-800 border border-gray-700">
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 text-xs bg-gray-600 text-gray-200">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="p-3">
                      <div className="flex items-center gap-2 mb-1 text-xs text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <CardTitle className="text-sm mb-2 text-white leading-tight">
                        {post.title}
                      </CardTitle>
                      
                      <p className="text-gray-300 text-xs mb-2 leading-tight line-clamp-2">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{post.author}</span>
                        <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-gray-300 hover:text-white text-xs">
                          <Link to={post.slug} className="flex items-center gap-1">
                            Read
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-2"
          >
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader className="p-3 text-center">
                <h3 className="text-sm font-bold mb-2 text-white">Stay Updated</h3>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="flex-1 px-2 py-1 text-xs rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  />
                  <Button className="bg-gray-600 hover:bg-gray-500 text-white text-xs px-3 py-1 h-auto">
                    Subscribe
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

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