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
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Client Testimonials
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                The greatest compliment you could ever give us is a recommendation
              </p>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                    <div className="flex items-start gap-6">
                      <Quote className="w-12 h-12 text-primary/30 flex-shrink-0 mt-1" />
                      <div className="flex-1 space-y-4">
                        <p className="text-lg leading-relaxed text-foreground/90 italic">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="font-bold text-primary text-lg">
                            {testimonial.initials}
                          </p>
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
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { number: "10,000+", label: "Happy Clients", icon: Star },
                { number: "15+", label: "Years Experience", icon: Award },
                { number: "5-Star", label: "Reviews", icon: Shield }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Instagram className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Follow Us on Instagram</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                See our latest treatments, transformations, and client success stories.
                Join our community @cosmedocs
              </p>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
                asChild
              >
                <a 
                  href="https://www.instagram.com/cosmedocs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  View on Instagram
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience Cosmedocs?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied clients who trust us with their aesthetic treatments.
                Book your consultation today and discover why our clients recommend us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <a href="tel:03330551503">
                    Call 0333 0551 503
                  </a>
                </Button>
              </div>
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
