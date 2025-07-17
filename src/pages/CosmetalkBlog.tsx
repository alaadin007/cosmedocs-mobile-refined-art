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
    "Cosmetalk - Expert Insights on Aesthetic Medicine | Cosmedocs",
    "Discover the latest insights, trends, and expert advice on aesthetic medicine, skincare, and non-surgical treatments from the professionals at Cosmedocs.",
    "/cosmetalk"
  );

  const blogPosts = [
    {
      title: "The Power Trio: L-Ascorbic Acid with Ferulic Acid and Vitamin E",
      description: "Discover the remarkable benefits of L-Ascorbic Acid combined with Ferulic Acid and Vitamin E for radiant, protected skin.",
      category: "Skincare Science",
      readTime: "8 min read",
      date: "January 17, 2025",
      slug: "/cosmetalk/vitamin-c-ferulic-acid-benefits",
      featured: true,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=400&fit=crop",
      author: "Dr. Sarah Chen"
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
    { name: "Skincare Science", count: 1, icon: Star },
    { name: "Non-Surgical", count: 2, icon: Heart },
    { name: "Treatment Planning", count: 1, icon: TrendingUp },
    { name: "Clinical Excellence", count: 1, icon: Sparkles }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          
          <div className="relative container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
                    Cosme
                  </span>
                  <span className="text-red-400">Talk</span>
                </h1>
                <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Where aesthetic medicine meets invisible art. Expert insights for the modern beauty enthusiast.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="px-4 py-2 text-sm bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                  Our aesthetics is invisible art
                </Badge>
                <Badge className="px-4 py-2 text-sm bg-purple-500/20 text-purple-200 border border-purple-400/30 backdrop-blur-sm">
                  Bold • Natural • Always Your Way
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-10 relative z-10">
          {/* Featured Article */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                ✨ Featured Article
              </Badge>
              
              <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={`text-xs ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-gray-600 text-sm gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight text-gray-900">
                      {featuredPost.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.description}
                    </p>
                    
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group">
                      <Link to={featuredPost.slug} className="inline-flex items-center gap-2">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardHeader>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Explore by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                    >
                      <IconComponent className="w-4 h-4" />
                      {category.name}
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Latest Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Insights</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group-hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <Badge className={`absolute top-3 left-3 text-xs ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg mb-3 group-hover:text-purple-600 transition-colors duration-200 leading-tight">
                        {post.title}
                      </CardTitle>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild className="group/btn p-0 h-auto text-purple-600 hover:text-purple-700">
                          <Link to={post.slug} className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
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
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <CardHeader className="relative text-center p-12">
                <h3 className="text-2xl font-bold mb-4">Stay Updated with Cosmetalk</h3>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on aesthetic medicine, skincare tips, and treatment innovations delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border-0"
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6">
                    Subscribe
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center py-16"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Begin Your Aesthetic Journey?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your understanding of aesthetic medicine with expert guidance from Cosmedocs. 
              Book a consultation today and discover your invisible art.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                <Link to="/contact">Book Your Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/treatments">Explore Treatments</Link>
              </Button>
            </div>
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