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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Card className="relative overflow-hidden h-full bg-gradient-to-br from-background via-background to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <p className="text-base leading-relaxed text-foreground/90 mb-6 flex-1">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="space-y-3 pt-4 border-t border-border/50">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.05 + i * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <Star className="w-4 h-4 fill-primary text-primary" />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                              <span className="font-bold text-primary text-sm">
                                {testimonial.initials.charAt(0)}
                              </span>
                            </div>
                            <p className="font-bold text-primary">
                              {testimonial.initials}
                            </p>
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

        {/* Google Reviews Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-10 md:p-12 bg-gradient-to-br from-background to-primary/5 border-primary/30 shadow-xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Google Reviews</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    See what our clients are saying on Google
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-6xl font-bold text-primary">4.9</span>
                    <div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-8 h-8 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">Based on 500+ reviews</p>
                    </div>
                  </div>

                  <div className="w-full max-w-md space-y-2">
                    {[
                      { stars: 5, percentage: 92 },
                      { stars: 4, percentage: 6 },
                      { stars: 3, percentage: 1 },
                      { stars: 2, percentage: 0.5 },
                      { stars: 1, percentage: 0.5 }
                    ].map((rating) => (
                      <div key={rating.stars} className="flex items-center gap-3">
                        <span className="text-sm font-medium w-6">{rating.stars}</span>
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-1000"
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12 text-right">{rating.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg bg-white text-foreground border-2 border-primary/20 hover:bg-primary/5 hover:border-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a 
                      href="https://www.google.com/search?q=cosmedocs+harley+street" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Star className="w-5 h-5" />
                      View Google Reviews
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary/10 hover:border-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a 
                      href="https://www.google.com/search?q=cosmedocs+harley+street#lrd=0x0:0x0,1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Write a Review
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
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
            Read authentic client testimonials and reviews from Cosmedocs patients who have experienced our aesthetic treatments in London. Our clients share their experiences with Botox treatments, dermal fillers, facial rejuvenation, and various cosmetic procedures performed by Dr Ahmed Haq and the Cosmedocs team at our Harley Street clinic. These genuine reviews highlight our commitment to professional service, natural-looking results, competitive pricing, and exceptional patient care.
          </p>
          <p>
            Our testimonials demonstrate consistent satisfaction with treatment outcomes, staff professionalism, clinic accessibility, and the expertise of our medical practitioners. Clients appreciate our honest approach, detailed consultations, comprehensive aftercare, and our philosophy of never encouraging unnecessary treatments. Whether seeking anti-wrinkle injections, dermal filler treatments, or specialised procedures like hyperhidrosis treatment, our reviews reflect the trust and confidence patients place in Cosmedocs.
          </p>
          <h3>Why Patients Choose Cosmedocs Harley Street</h3>
          <p>
            With over one million injections performed since 2007, Cosmedocs has earned the trust of thousands of patients seeking natural-looking aesthetic enhancements. Our 4.9-star rating reflects our unwavering commitment to excellence, safety, and patient satisfaction. Every treatment is delivered by GMC-registered doctors who prioritise your wellbeing and aesthetic goals. Our invisible art philosophy ensures results that are subtle, refined, and authentically you — bold, natural, always your way.
          </p>
          <h3>Verified Patient Experiences</h3>
          <p>
            Our client reviews span a wide range of treatments including Botox for forehead lines, crow's feet, and frown lines, dermal fillers for lips, cheeks, jawline, and chin, non-surgical rhinoplasty, skin rejuvenation with Profhilo and polynucleotides, HydraFacial treatments, and medical dermatology consultations. Patients consistently praise the natural-looking results, comfortable treatment experience, and comprehensive aftercare provided by the Cosmedocs team at our Harley Street clinic in London.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
