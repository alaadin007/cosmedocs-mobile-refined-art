import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote, Star, Instagram, Award, Shield } from "lucide-react";
import { generateSEOMetadata } from "@/utils/seo";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const seoData = generateSEOMetadata(
    "Client Testimonials | Cosmedocs Reviews | Harley Street",
    "Read genuine client testimonials and reviews for Cosmedocs aesthetic treatments. See what our clients say about their Botox, dermal filler, and skincare experiences.",
    "/testimonials"
  );

  const testimonials = [
    {
      text: "I've had three facial areas treated with Anti-Wrinkle Injection at Cosmedocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!",
      initials: "NC"
    },
    {
      text: "I have been having Botox facial treatment for 11 years and I am 51. Previously I had tried various Doctors until I found Dr Haq and his team 7 years ago. Since then I have never looked back, he is excellent. Now, I actually live in Cuba and return every 6 months to London to see Dr Haq for treatment. He pays great attention to the smallest detail and listens to what you want as well as giving his expert opinion, he and his team never encourage me to do things that are not needed. I feel completely confident with them and they do a great job. Well done Cosmedocs and team.",
      initials: "DL"
    },
    {
      text: "The pre-treatment consultation, with the extremely clear advice, and the post-treatment instructions for aftercare is what I truly loved about Cosmedocs. I have gone to them twice now for Botox treatments, and everything from the service, the procedure itself, and the results was extremely satisfactory.",
      initials: "JR"
    },
    {
      text: "Very happy to recommend! Cosmedocs has the whole 'package' – great staff, great service, great prices and great results. The team made me really comfortable, gave honest advice, didn't encourage 'overdoing it', and also offered free follow up advice and support. And I love the look! It doesn't get much better than this and I would very happily recommend them.",
      initials: "KP"
    },
    {
      text: "I was surprised at how easy and painless the Botox treatment was and I was thrilled to see the lines around my eyes and the even deeper line between my eyes to be instantly erased. I will definitely be going back to Cosmedocs because the treatment worked and the service was excellent.",
      initials: "JS"
    },
    {
      text: "Have been having Botox treatment for the past 12 years. In all that time I have never been 100% happy with the treatment I have received at various different places. This is the best place I have found for Botox. The doctor who does the injections is very friendly and really knows what he is doing. Also, the price is well worth the money. I would fully recommend anyone wanting Botox to go here.",
      initials: "JM"
    },
    {
      text: "Staffs are very professional and friendly they performed a quick and efficient procedure and they really do try and cater to the needs of the individual. Excellent service would recommend to everyone!",
      initials: "Miss Khan"
    },
    {
      text: "I had a facial aesthetic treatment with Cosmedocs. I found the price very reasonable. Even better the results were excellent. I will definitely use this service again.",
      initials: "BH"
    },
    {
      text: "I have had Botox injections for wrinkles around my eyes twice at Cosmedocs - and I'm due to book for my third. The staff is always friendly and helpful, both when you make your booking and during your treatment. The location is very easy to get to, they are open on the weekend, the prices are the best I've found, and – most importantly of course - the results are fab!",
      initials: "MB"
    },
    {
      text: "Fantastic first time experience, helpful friendly staff, treatment working well, I would recommend to anyone.",
      initials: "MB"
    },
    {
      text: "I used Cosmedocs to get Botox for excessive sweating of my hands. Cosmedocs has very reasonable prices, and were very accommodating, allowing me (with my restricted income) to receive treatment in just one hand, thus halving the price. The doctor and his assistant really made me feel at ease. Plus the results were great, and I was offered a free top up! If you're considering Botox for hyperhidrosis, I would definitely recommend Dr Haq and his team.",
      initials: "CH"
    }
  ];

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
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm font-medium text-primary">5-Star Rated Clinic</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                Our Client Testimonials
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                The greatest compliment you could ever give us is a recommendation
              </p>
              
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-10 h-10 fill-primary text-primary drop-shadow-lg" />
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-muted-foreground text-lg"
              >
                Read what our clients say about their transformative experiences
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Quote Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Quote className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-6">
                          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-border/50">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ delay: index * 0.05 + i * 0.05 }}
                                  viewport={{ once: true }}
                                >
                                  <Star className="w-5 h-5 fill-primary text-primary" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                                <span className="font-bold text-primary">
                                  {testimonial.initials.charAt(0)}
                                </span>
                              </div>
                              <p className="font-bold text-primary text-lg">
                                {testimonial.initials}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-muted-foreground text-lg">
                Numbers that speak for themselves
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { number: "10,000+", label: "Happy Clients", icon: Star, color: "from-yellow-500 to-orange-500" },
                { number: "15+", label: "Years Experience", icon: Award, color: "from-purple-500 to-pink-500" },
                { number: "5-Star", label: "Reviews", icon: Shield, color: "from-blue-500 to-cyan-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="relative overflow-hidden p-10 text-center bg-gradient-to-br from-background to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary mb-3">
                        {stat.number}
                      </h3>
                      <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-primary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Follow Us on Instagram</h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                See our latest treatments, transformations, and client success stories.
                Join our community <span className="text-primary font-semibold">@cosmedocs</span>
              </p>
              <Button
                size="lg"
                className="rounded-full px-10 py-7 text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a 
                  href="https://www.instagram.com/cosmedocs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Instagram className="w-6 h-6" />
                  View on Instagram
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <Card className="p-12 md:p-16 bg-gradient-to-br from-background/95 to-primary/5 backdrop-blur-sm border-primary/30 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                  Ready to Experience Cosmedocs?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Join thousands of satisfied clients who trust us with their aesthetic treatments.
                  Book your consultation today and discover why our clients recommend us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="rounded-full px-10 py-7 text-lg bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                      Book Free Consultation
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="rounded-full px-10 py-7 text-lg border-2 hover:bg-primary/10 hover:border-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:03330551503">
                      Call 0333 0551 503
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Cosmedocs Client Testimonials and Reviews</h2>
          <p>
            Read authentic client testimonials and reviews from Cosmedocs patients who have experienced our aesthetic treatments in London. Our clients share their experiences with Botox treatments, dermal fillers, facial rejuvenation, and various cosmetic procedures performed by Dr Ahmed Haq and the Cosmedocs team at our Harley Street clinic. These genuine reviews highlight our commitment to professional service, natural-looking results, competitive pricing, and exceptional patient care. Our testimonials demonstrate consistent satisfaction with treatment outcomes, staff professionalism, clinic accessibility, and the expertise of our medical practitioners. Clients appreciate our honest approach, detailed consultations, comprehensive aftercare, and our philosophy of never encouraging unnecessary treatments. Whether seeking anti-wrinkle injections, dermal filler treatments, or specialized procedures like hyperhidrosis treatment, our reviews reflect the trust and confidence patients place in Cosmedocs for their aesthetic medicine needs. Book your consultation today and join our community of satisfied clients who recommend Cosmedocs for safe, effective, and affordable aesthetic treatments in London.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
