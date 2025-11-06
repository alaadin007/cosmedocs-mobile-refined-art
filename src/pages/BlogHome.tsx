import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, TrendingUp, BookOpen, Microscope, Award, GraduationCap, Image as ImageIcon, BarChart3, ChevronDown, Syringe, Sparkles, BeakerIcon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BlogHome = () => {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);
  
  const seoData = generateSEOMetadata(
    "CosmeDocs Journal | Aesthetic Medicine Education & Research",
    "Explore cutting-edge aesthetic medicine research, clinical education, treatment guides, and before & after transformations. Professional insights from UK's leading aesthetic practitioners.",
    "/journal"
  );

  const featuredArticle = {
    title: "In layers, not lines. In planes, not pages.",
    subtitle: "The CosmeDocs way of teaching aesthetics.",
    description: "At CosmeDocs, we believe aesthetic medicine must be learned not through dissection, but through depth. For too long, anatomy has been taught as if every injector were a surgeon — memorising vessels, nerves, and muscles they will never see. But aesthetic practitioners work differently. Our canvas is alive. We sculpt, not cut. We restore, not remove.",
    category: "AESTHETIC PHILOSOPHY",
    readTime: "3 min read",
    date: "6 November 2025",
    slug: "/blog/beauty-ethnic-neutrality",
    image: "/lovable-uploads/95a2c194-5d44-4495-8025-de676d437b8d.png"
  };

  const researchPublications = [
    {
      title: "Underarms: A Comprehensive Review for Aesthetic Practitioners",
      category: "RESEARCH",
      time: "3 hours ago",
      color: "bg-blue-500"
    },
    {
      title: "Frown Area Botox Dosing: Evidence-Based Protocols and Best Practices",
      category: "RESEARCH",
      time: "5 hours ago",
      color: "bg-blue-500"
    },
    {
      title: "Aesthetics is Easy: Breaking Down the Myths and Reality",
      category: "INSIGHT",
      time: "6 hours ago",
      color: "bg-purple-500"
    }
  ];

  const latestNews = [
    {
      title: "Profhilo and Polynucleotides: How to Elevate Your Practice with Skin Boosters",
      description: "Discover how advanced skin boosters like Profhilo and Polynucleotides transform skin rejuvenation protocols.",
      category: "CLINICAL",
      date: "22 October, 2025",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
      slug: "/cosmetalk/flawless-skin"
    },
    {
      title: "Botulinum Toxin for Calf Compartment Syndrome: A Novel Approach",
      description: "Exploring the innovative use of botulinum toxin in treating calf compartment syndrome beyond aesthetic applications.",
      category: "RESEARCH",
      date: "21 October, 2025",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      slug: "/botox-calf-reduction"
    },
    {
      title: "Manual Dexterity Does Not Predict Early Practice Outcomes in Aesthetic Medicine",
      description: "Retrospective study reveals surprising findings about the role of manual skills in early aesthetic practice success.",
      category: "JOURNAL",
      date: "21 October, 2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      slug: "/inside-mind-aesthetic-doctor-blog"
    },
    {
      title: "Fellowship vs Masters in Aesthetic Medicine: The Complete Guide",
      description: "Comprehensive comparison of training pathways to help you make an informed decision about your aesthetic medicine career.",
      category: "EDUCATION",
      date: "20 October, 2025",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      slug: "/cosmetalk"
    }
  ];

  const treatmentCategories = [
    {
      name: "Foundation Treatments",
      icon: Sparkles,
      treatments: [
        { name: "Botox", slug: "/botox-london" },
        { name: "Dermal Fillers", slug: "/dermal-fillers" },
        { name: "Lip Fillers", slug: "/lip-fillers" },
        { name: "Skin Boosters", slug: "/treatments" }
      ]
    },
    {
      name: "Advanced Procedures",
      icon: BeakerIcon,
      treatments: [
        { name: "PDO Thread Lift", slug: "/thread-face-lift" },
        { name: "Non-Surgical Nose Job", slug: "/non-surgical-nose-job" },
        { name: "Jawline Contouring", slug: "/jawline-filler" },
        { name: "Fat Dissolving", slug: "/fat-dissolve" }
      ]
    },
    {
      name: "Specialist Treatments",
      icon: Award,
      treatments: [
        { name: "Masseter Botox", slug: "/masseter-botox" },
        { name: "Nefertiti Lift", slug: "/nefertiti-botox-face-jaw-lift" },
        { name: "Tear Trough Filler", slug: "/tear-trough-filler" },
        { name: "Temple Fillers", slug: "/temple-filler-london" }
      ]
    }
  ];

  const polls = [
    {
      id: "treatment-interest",
      question: "Which treatment are you most interested in learning about?",
      options: [
        { label: "Botox Techniques", votes: 45 },
        { label: "Dermal Filler Artistry", votes: 38 },
        { label: "Thread Lifts", votes: 25 },
        { label: "Skin Boosters", votes: 32 }
      ]
    },
    {
      id: "content-preference",
      question: "What content would you like to see more of?",
      options: [
        { label: "Clinical Research", votes: 52 },
        { label: "Before & After Cases", votes: 61 },
        { label: "Treatment Guides", votes: 43 },
        { label: "Patient Education", votes: 29 }
      ]
    }
  ];

  const beforeAfterGalleries = [
    {
      title: "Botox Transformations",
      description: "Natural, subtle results across forehead, frown lines, and crow's feet",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      slug: "/botox-cost-london",
      count: "50+ cases"
    },
    {
      title: "Lip Filler Gallery",
      description: "From subtle enhancement to full, natural-looking lips",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
      slug: "/lip-fillers",
      count: "100+ cases"
    },
    {
      title: "Non-Surgical Rhinoplasty",
      description: "Reshaping and refining without surgery",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop",
      slug: "/non-surgical-nose-job",
      count: "30+ cases"
    },
    {
      title: "Complete Face Gallery",
      description: "Full facial rejuvenation and harmonisation results",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
      slug: "/before-after-gallery",
      count: "200+ cases"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CosmeDocs Journal - Aesthetic Medicine Education",
    "description": "Cutting-edge aesthetic medicine research, clinical education, and treatment insights",
    "url": "https://www.cosmedocs.co.uk/journal"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="aesthetic medicine research, cosmetic treatment education, clinical aesthetics, before after gallery, aesthetic training, botox research, filler techniques, non-surgical procedures" />
        <link rel="canonical" href={seoData.canonical} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-black to-secondary border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl font-bold text-foreground mb-3">
                CosmeDocs <span className="text-purple-400">Journal</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Aesthetic Medicine Education • Clinical Research • Treatment Innovation
              </p>
              <div className="flex justify-center gap-3 mt-6">
                <Button asChild variant="default" size="lg">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/before-after-gallery">View Gallery</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Article */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to={featuredArticle.slug}>
                  <Card className="overflow-hidden hover:border-primary transition-colors cursor-pointer">
                    <div className="relative h-80">
                      <img 
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Badge className="mb-3 bg-purple-500/90 text-white border-0">
                          {featuredArticle.category}
                        </Badge>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {featuredArticle.title}
                        </h2>
                        <p className="text-gray-200 text-sm italic mb-3">
                          {featuredArticle.subtitle}
                        </p>
                        <div className="flex items-center gap-3 text-gray-300 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredArticle.date}
                          </span>
                          <span>•</span>
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>

              {/* Research & Publications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-primary" />
                  <h2 className="text-2xl font-bold text-foreground">AESTHETIC RESEARCH & PUBLICATIONS</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {researchPublications.map((pub, index) => (
                    <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                      <CardHeader className="pb-3">
                        <Badge className={`${pub.color} text-white border-0 w-fit mb-2 text-xs`}>
                          {pub.category}
                        </Badge>
                        <CardTitle className="text-base leading-tight">
                          {pub.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mt-2">{pub.time}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
                <Link to="/cosmetalk" className="inline-flex items-center text-primary hover:underline mt-4 text-sm font-medium">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>

              {/* Latest News */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-primary" />
                  <h2 className="text-2xl font-bold text-foreground">LATEST NEWS</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {latestNews.map((news, index) => (
                    <Link key={index} to={news.slug}>
                      <Card className="overflow-hidden hover:border-primary transition-colors cursor-pointer h-full">
                        <div className="relative h-48">
                          <img 
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-3 left-3 text-xs bg-purple-500/90 text-white border-0">
                            {news.category}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg leading-tight mb-2">
                            {news.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {news.description}
                          </p>
                          <p className="text-xs text-muted-foreground">{news.date}</p>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Before & After Galleries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary" />
                    <h2 className="text-2xl font-bold text-foreground">BEFORE & AFTER GALLERIES</h2>
                  </div>
                  <Link to="/before-after-gallery">
                    <Button variant="outline" size="sm">
                      View All <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {beforeAfterGalleries.map((gallery, index) => (
                    <Link key={index} to={gallery.slug}>
                      <Card className="overflow-hidden hover:border-primary transition-colors cursor-pointer">
                        <div className="relative h-48">
                          <img 
                            src={gallery.image}
                            alt={gallery.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <ImageIcon className="w-12 h-12 text-white" />
                          </div>
                          <Badge className="absolute bottom-3 right-3 bg-black/70 text-white border-0">
                            {gallery.count}
                          </Badge>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">{gallery.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{gallery.description}</p>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Treatment Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-black border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                      <Syringe className="w-5 h-5" />
                      QUICK TREATMENT LINKS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {treatmentCategories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <Accordion key={index} type="single" collapsible>
                          <AccordionItem value={category.name} className="border-border">
                            <AccordionTrigger className="text-sm font-semibold text-white hover:text-primary">
                              <span className="flex items-center gap-2">
                                <Icon className="w-4 h-4" />
                                {category.name}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pl-6">
                                {category.treatments.map((treatment, idx) => (
                                  <Link 
                                    key={idx}
                                    to={treatment.slug}
                                    className="block text-sm text-gray-300 hover:text-primary transition-colors"
                                  >
                                    {treatment.name}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    })}
                    <Button asChild className="w-full" size="sm">
                      <Link to="/treatments">View All Treatments</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Polls & Surveys */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      COMMUNITY POLLS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {polls.map((poll) => {
                      const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
                      return (
                        <div key={poll.id} className="space-y-3">
                          <p className="text-sm font-medium text-white">{poll.question}</p>
                          <div className="space-y-2">
                            {poll.options.map((option, idx) => {
                              const percentage = Math.round((option.votes / totalVotes) * 100);
                              return (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedPoll(poll.id)}
                                  className="w-full text-left"
                                >
                                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                                    <span>{option.label}</span>
                                    <span>{percentage}%</span>
                                  </div>
                                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                                      style={{ width: `${percentage}%` }}
                                    />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          <p className="text-xs text-gray-400">{totalVotes} votes</p>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-black to-secondary border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Stay Updated</CardTitle>
                    <p className="text-sm text-gray-300">
                      Get the latest research, treatment guides, and aesthetic insights delivered to your inbox.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2 text-sm rounded-md bg-background border border-border text-foreground placeholder-muted-foreground"
                      />
                      <Button className="w-full">
                        Subscribe
                      </Button>
                      <p className="text-xs text-gray-400 text-center">
                        Join 5,000+ aesthetic professionals
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Resources */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="/cosmetalk" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <BookOpen className="w-4 h-4" />
                    All Articles
                  </Link>
                  <Link to="/treatments" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <GraduationCap className="w-4 h-4" />
                    Treatment Guides
                  </Link>
                  <Link to="/before-after-gallery" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ImageIcon className="w-4 h-4" />
                    Photo Gallery
                  </Link>
                  <Link to="/about" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Award className="w-4 h-4" />
                    Our Team
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Comprehensive Aesthetic Medicine Education</h2>
          <p>
            CosmeDocs Journal serves as the premier educational resource for aesthetic medicine practitioners, 
            students, and patients seeking evidence-based information on cosmetic treatments. Our platform features 
            peer-reviewed research publications covering advanced injection techniques, facial anatomy for injectors, 
            patient safety protocols, and innovative treatment methodologies. Explore detailed before and after 
            galleries showcasing real patient transformations across botulinum toxin treatments, dermal filler 
            applications, thread lifting procedures, and comprehensive facial rejuvenation protocols. Our research 
            section includes clinical studies on optimal dosing strategies for botox in various facial zones, 
            filler placement techniques for natural-looking results, complication management, and long-term 
            treatment outcomes. Educational content covers foundation treatments including anti-wrinkle injections 
            for forehead lines, frown lines, crow's feet, and bunny lines, plus advanced procedures like 
            non-surgical rhinoplasty, jawline contouring, chin augmentation, tear trough correction, and temple 
            volumisation. Learn about cutting-edge skin booster technologies including Profhilo, polynucleotides, 
            and hyaluronic acid-based treatments that stimulate natural collagen production. Our clinical insights 
            section provides practical guidance on patient consultation techniques, treatment planning strategies, 
            managing patient expectations, and building successful aesthetic practices. Browse comprehensive 
            treatment galleries organised by procedure type, showing subtle enhancement to dramatic transformation 
            results, all achieved through expert injection techniques and artistic precision. Stay informed about 
            latest industry developments, regulatory updates, product innovations, and emerging treatment trends 
            shaping the future of aesthetic medicine. Access detailed anatomical guides specifically designed for 
            aesthetic injectors, covering facial danger zones, vascular mapping, nerve pathways, and optimal 
            injection depths for safe and effective treatments. Discover evidence-based protocols for combination 
            treatments that address multiple signs of ageing simultaneously, including the strategic use of 
            neurotoxins, dermal fillers, and biostimulatory products. Learn from experienced practitioners about 
            managing complications, recognising adverse events early, and implementing appropriate intervention 
            strategies. Our content emphasises natural-looking results that enhance rather than change facial 
            features, maintaining individual character while addressing aesthetic concerns. Explore patient education 
            resources explaining treatment processes, expected outcomes, recovery timelines, and maintenance 
            requirements for optimal long-term results. Join our community of aesthetic professionals dedicated to 
            advancing clinical excellence, patient safety, and ethical practice standards in cosmetic medicine.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
