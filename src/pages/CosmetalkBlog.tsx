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
    "Latest aesthetic medicine insights, skincare trends & expert treatment advice. Professional guidance from Cosmedocs.",
    "/cosmetalk"
  );

  const blogPosts = [
    {
      title: "Aesthetic Treatments Made Easy",
      description: "Don't believe advice, trust education. A comprehensive guide to understanding aesthetic treatments, helping you make informed decisions about your aesthetic journey.",
      category: "Educational Guide",
      readTime: "15 min read",
      date: "January 2025",
      slug: "/aesthetic-treatments-made-easy",
      featured: true,
      image: "/images/blog/aesthetic-treatments-made-easy-hero.jpg",
      author: "By Dr. Ahmed Haq & AI Team"
    },
    {
      title: "Breaking the Cycle: Understanding Orofacial & Neck Pain",
      description: "The chicken-and-egg dilemma of jaw clenching, TMJ disorder, headaches, neck pain & shoulder knots. Discover treatment options including Botox, physio & trigger point therapy.",
      category: "Medical Insight",
      readTime: "8 min read",
      date: "January 26, 2025",
      slug: "/cosmetalk/orofacial-neck-pain-cycle",
      featured: false,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      author: "By Cosmedocs Medical Team"
    },
    {
      title: "Untraceably You: Look 5-10 Years Younger Naturally",
      description: "Turn back time so subtly, not even your closest will notice. Exclusive Cosmedocs campaign with guaranteed natural results. Limited launch offer available.",
      category: "Special Campaign",
      readTime: "10 min read",
      date: "January 2025",
      slug: "/untraceably-you",
      featured: true,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      author: "By Cosmedocs"
    },
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
      "name": "Cosmedocs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Harley Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://www.cosmedocs.com${post.slug}`,
      "dateModified": post.date,
      "author": {
        "@type": "Organization", 
        "name": "Cosmedocs",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10 Harley Street",
          "addressLocality": "London",
          "addressRegion": "Greater London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB"
        }
      }
    }))
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const featuredArticle = blogPosts[0]; // First article links to /aesthetic-treatments-made-easy
  const mustReadStories = blogPosts.slice(1, 5);
  const researchArticles = blogPosts.slice(5, 8);
  const latestNews = blogPosts.slice(8);

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

      <div className="min-h-screen bg-white">
        {/* Hero Section with Featured Article */}
        <section className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Featured Article */}
              <div className="lg:col-span-2">
                <Link to={featuredArticle.slug} className="block group">
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <Badge className="mb-3 bg-orange-100 text-orange-800 hover:bg-orange-200 uppercase text-xs">
                    {featuredArticle.category}
                  </Badge>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    {featuredArticle.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 font-medium group-hover:gap-3 transition-all">
                    Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Link>
              </div>

              {/* Must Read Stories Sidebar */}
              <div className="lg:col-span-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-500" />
                    MUST READ STORIES
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
                
                <div className="space-y-4">
                  {mustReadStories.map((story, idx) => (
                    <Link key={idx} to={story.slug} className="flex gap-3 group">
                      <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-1 bg-orange-100 text-orange-700 text-xs uppercase">
                          {story.category}
                        </Badge>
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {story.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{story.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aesthetic Research & Publications */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-gray-900">AESTHETIC RESEARCH & PUBLICATIONS</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {researchArticles.map((article, idx) => (
                <Link key={idx} to={article.slug} className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow bg-white text-gray-900">
                    <CardHeader className="p-6">
                      <Badge className="mb-3 w-fit bg-blue-100 text-blue-700 uppercase text-xs">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="text-xs text-gray-500">{article.date}</div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-orange-500"></div>
              <h2 className="text-2xl font-bold text-gray-900">LATEST NEWS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {latestNews.slice(0, 4).map((news, idx) => (
                <Link key={idx} to={news.slug} className="flex gap-4 group">
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-orange-100 text-orange-700 uppercase text-xs">
                      {news.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {news.description}
                    </p>
                    <p className="text-xs text-gray-500">{news.date}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quote of the Day */}
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-orange-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wide">Quote of the Day</h3>
              </div>
              <blockquote className="text-2xl md:text-3xl font-serif italic mb-4">
                "Our aesthetics is invisible art — transformation that speaks without saying a word."
              </blockquote>
              <p className="text-gray-400">— CosmeDocs Philosophy</p>
            </Card>
          </div>
        </section>

        {/* Spotlight - Expert Treatment Showcase */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-12 bg-orange-500"></div>
              <h2 className="text-2xl font-bold text-gray-900">Spotlight - Expert Aesthetic Treatments</h2>
            </div>
            <p className="text-gray-600 mb-8">Discover our comprehensive range of aesthetic treatments for all skill levels</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/botox-london" className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80" 
                      alt="Botox Treatment"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">ADVANCED TREATMENT</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">Master Botox Techniques</h3>
                    <p className="text-gray-600 mb-4">Advanced wrinkle reduction with precision techniques</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">From £150</span>
                      <ArrowRight className="h-5 w-5 text-orange-500" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dermal-fillers" className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80" 
                      alt="Dermal Fillers"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-500 text-white">EXPERT TRAINING</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">Dermal Filler Mastery</h3>
                    <p className="text-gray-600 mb-4">Expert-led training with HD live injection videos</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">From £200</span>
                      <ArrowRight className="h-5 w-5 text-orange-500" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Client Tools Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-orange-500"></div>
              <h2 className="text-2xl font-bold text-gray-900">CLIENT TOOLS</h2>
            </div>
            <p className="text-gray-600 mb-8">Professional resources to complement your aesthetic treatments and help you achieve your beauty goals</p>

            <div className="space-y-4 max-w-4xl">
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="p-6 hover:shadow-lg transition-all border-2 border-orange-100 hover:border-orange-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Free Consultation Booking</h3>
                      <p className="text-gray-600">Book your personalised aesthetic consultation with our expert team</p>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </a>

              <Card className="p-6 border-2 border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment Cost Calculator</h3>
                    <p className="text-gray-600">Get personalised pricing recommendations tailored to your aesthetic goals</p>
                  </div>
                  <Button variant="outline" className="border-gray-300 hover:border-orange-500 hover:text-orange-600">
                    Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-2 border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Virtual Aesthetic Consultation</h3>
                    <p className="text-gray-600">Expert guidance and treatment planning from the comfort of your home</p>
                  </div>
                  <Button variant="outline" className="border-gray-300 hover:border-orange-500 hover:text-orange-600">
                    Access Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
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