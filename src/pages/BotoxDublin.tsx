import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, MapPin, Clock, Star, Plane, Euro, Shield, Heart } from "lucide-react";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";

// Import images
import transformationBefore from "@/assets/dublin/transformation-before.jpg";
import transformationAfterMild from "@/assets/dublin/transformation-after-mild.jpg";
import transformation1Year from "@/assets/dublin/transformation-1year.jpg";
import transformationCloseup from "@/assets/dublin/transformation-closeup.jpg";
import clientsFriends from "@/assets/dublin/clients-friends.jpg";
import naturalBeautification from "@/assets/dublin/natural-beautification.jpg";
import complicationsFix from "@/assets/dublin/complications-fix.jpg";
import noseMasterclass from "@/assets/dublin/nose-masterclass.jpg";
import cosmelipsFix from "@/assets/dublin/cosmelips-fix.jpg";

const BotoxDublin = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs - Aesthetic Clinic London for Irish Patients",
    "description": "Specialist injectable clinic in London for Irish patients. Botox, dermal fillers, hyaluronic acid treatments by expert doctors.",
    "url": "https://www.cosmedocs.co.uk/botox-dublin",
    "telephone": "+44 207 436 4441",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "60 Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 7HA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5188,
      "longitude": -0.1476
    },
    "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    "priceRange": "££",
    "availableLanguage": ["English"]
  };

  return (
    <>
      <Helmet>
        <html lang="en-IE" />
        <title>Botox Dublin & Fillers Dublin | Aesthetic Injections in London | Cosmedocs</title>
        <meta name="description" content="Specialist injectable clinic in London for Irish patients. Botox, dermal fillers, lip fillers at competitive prices. Harley Street since 2007. Over 1 million injections." />
        <meta name="keywords" content="botox dublin, fillers dublin, aesthetic injections dublin, dermal fillers dublin, botox london, aesthetic clinic london, cosmetic doctor london, botox harley street, fillers london irish, non surgical nose job dublin, lip fillers dublin, chin filler dublin" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/botox-dublin/" />
        <meta property="og:title" content="Botox Dublin & Fillers Dublin | Injectable Clinic London" />
        <meta property="og:description" content="Specialist injectable clinic in London for Irish patients. Competitive prices, natural results, expertise since 2007." />
        <meta property="og:url" content="https://www.cosmedocs.co.uk/botox-dublin/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Home2Header />

      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
                🇮🇪 Welcome Irish Patients
              </span>
              <h1 className="text-4xl md:text-6xl font-light mb-6">
                <span className="text-amber-400">Botox Dublin</span> & Fillers Dublin
                <br />
                <span className="text-2xl md:text-3xl text-gray-300">Your Injectable Clinic in London</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover why thousands of Irish patients choose London for their aesthetic treatments. 
                Unrivalled expertise, competitive prices, natural results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                  <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                    Book Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <a href="https://wa.me/447725701796" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why London Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Why Irish Patients Choose <span className="text-amber-400">London</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Irish regulations and limited specialist options make London an attractive alternative for premium aesthetic care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Specialist Injectable Clinics",
                  desc: "Dublin has few dedicated injectable clinics. In London, we're 100% specialised in aesthetic injections with unmatched expertise."
                },
                {
                  icon: Euro,
                  title: "Better Value",
                  desc: "Prices in Ireland are often 30-50% higher than London. Save money whilst receiving superior expertise and results."
                },
                {
                  icon: Plane,
                  title: "55 Minutes from Dublin",
                  desc: "Quick flight to London City or Heathrow. Treatment in the morning, back in Dublin for dinner. It couldn't be easier."
                },
                {
                  icon: Clock,
                  title: "Express Treatments",
                  desc: "Our experts perform complete treatments in 15-20 minutes. Combine multiple areas in one efficient session."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <item.icon className="w-10 h-10 text-amber-400 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Cosmedocs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  <span className="text-amber-400">Cosmedocs</span>: Excellence on Harley Street
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Since 2007, Cosmedocs has established itself as London's leading reference in injectable aesthetic medicine. 
                  With over one million injections performed, our team of specialist doctors masters the subtle art 
                  of natural enhancement.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our philosophy? <em className="text-amber-400">"Our aesthetics is invisible art"</em> — 
                  Invisible art. Visible results. We believe in discreet beauty, 
                  one that refines without transforming, that rejuvenates without caricaturing.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Over 1 million injections",
                    "Harley Street since 2007",
                    "100% medical team",
                    "Natural results guaranteed"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={clientsFriends}
                  alt="Our clients become our friends - Cosmedocs London"
                  className="rounded-2xl w-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-amber-400 font-medium flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Our clients become our friends
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformation Journey Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                The Journey of a <span className="text-amber-400">Natural Transformation</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Follow a patient's evolution over 12 months: from initial consultation to refined beauty
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: transformationBefore, title: "Before", desc: "Initial consultation - Personalised facial analysis" },
                { img: transformationAfterMild, title: "After 1st Session", desc: "Mild HA Makeover - Immediate natural result" },
                { img: transformation1Year, title: "After 1 Year", desc: "2 HA Makeover sessions + Skin Rejuvenation" },
                { img: transformationCloseup, title: "Close-up", desc: "Transformed skin quality, refined features" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={item.img} alt={item.title} className="w-full aspect-[4/5] object-cover" />
                    <CardContent className="p-4">
                      <span className="text-amber-400 text-sm font-medium">Step {index + 1}</span>
                      <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Content Section - Main SEO Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-amber">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-light text-white mb-8">
                  Botox Dublin and Fillers Dublin: Why Cross the Irish Sea?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  If you're searching for <strong className="text-amber-400">Botox in Dublin</strong> or 
                  <strong className="text-amber-400"> dermal fillers in Dublin</strong>, you've probably noticed 
                  that options can be limited and expensive. The Irish market has fewer dedicated aesthetic clinics, 
                  and waiting times for reputable practitioners can stretch to months.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  In London, the situation is entirely different. Specialist clinics like Cosmedocs focus exclusively 
                  on injectable treatments, developing unmatched expertise. Our doctors perform injections all day, 
                  every day — a specialisation that translates to superior technical mastery and more natural results.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Hyaluronic Acid: Our Speciality
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  <strong className="text-amber-400">Hyaluronic acid</strong> (HA) is our passion. Our specialist 
                  doctors perform "HA Makeovers" — complete facial transformations using exclusively hyaluronic acid 
                  fillers. In 15 to 20 minutes, we can treat multiple areas: lips, cheekbones, chin, jawline, 
                  for a harmonious and natural result.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Unlike fragmented approaches where each area is treated separately at different appointments, 
                  our holistic method considers the face in its entirety. The result? A facial harmony that 
                  isolated treatments cannot achieve. Our Irish patients are often surprised by the efficiency 
                  and speed of our sessions.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Botox in London: Excellence and Precision
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  <strong className="text-amber-400">Botox</strong> (botulinum toxin) remains the world's most 
                  popular anti-ageing treatment, and for good reason. In expert hands, it smooths forehead lines, 
                  crow's feet, and frown lines whilst preserving the face's natural expressiveness.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  At Cosmedocs, we also practise "Baby Botox" — strategically placed microdoses for a subtle 
                  refreshing effect, ideal for patients discovering Botox or those who prefer a very natural 
                  approach. This technique is particularly appreciated by our Irish clientele, known for their 
                  preference for natural, understated elegance.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Our Most Popular Treatments for Irish Patients
                </h3>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  {[
                    "Lip Augmentation (Lip Filler)",
                    "Jawline Definition",
                    "Non-Surgical Nose Job (Nose Filler)",
                    "Cheekbones & Cheeks (Cheek Filler)",
                    "Botox for Forehead & Expression Lines",
                    "Under Eye & Tear Trough",
                    "Complete Profile Harmonisation",
                    "Skin Boosters & Profhilo"
                  ].map((treatment, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{treatment}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Price Comparison: Dublin vs London
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  The cost of aesthetic injections in Ireland is among the highest in Europe. A syringe of 
                  filler in Dublin can cost between €400 and €700, whilst in London, clinics of equivalent 
                  quality offer prices 30 to 50% lower. Add the cost of a flight (often less than €50 return 
                  when booked in advance), and the savings become significant.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  But beyond the savings, it's the quality of the experience that makes the difference. Our Irish 
                  patients appreciate the flexibility of appointments, the absence of months-long waiting times, 
                  and the ability to combine multiple treatments in a single visit.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Natural Beautification Case */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={naturalBeautification}
                  alt="Natural beautification before after - Cosmedocs"
                  className="rounded-2xl w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-medium">Case Study</span>
                <h2 className="text-3xl font-light text-white mt-2 mb-6">
                  Natural Beautification: The Art of Subtlety
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This patient wanted more volume and definition without her friends and family noticing 
                  she'd had injections. Using our "invisible art" approach, we worked on the overall 
                  harmony of the face: cheekbones, chin, and jawline contour.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The result? A more rested-looking face, more defined features, but still authentically her. 
                  It's precisely this subtlety that our Irish patients seek — and it's our speciality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Our <span className="text-amber-400">Recognised Expertise</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We train other doctors and correct complications — a rare level of expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <img src={complicationsFix} alt="Complication correction - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Complication Correction</h3>
                    <p className="text-gray-400 text-sm">
                      Patients consult us from across Europe to correct poorly performed treatments. 
                      Our expertise allows us to dissolve, reshape, and restore natural results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <img src={noseMasterclass} alt="Rhinoplasty masterclass - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Nose Filler Masterclasses</h3>
                    <p className="text-gray-400 text-sm">
                      We teach and perform non-surgical nose jobs at the highest level. 
                      Doctors from around the world come to learn our advanced techniques.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <img src={cosmelipsFix} alt="Cosmelips lip correction - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Cosmelips: The Art of Lips</h3>
                    <p className="text-gray-400 text-sm">
                      Overfilled lips? Poorly proportioned? We dissolve others' work 
                      and recreate naturally beautiful lips. It's our artistic signature.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Practical <span className="text-amber-400">Information</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <MapPin className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Our Address</h3>
                    <p className="text-gray-300 mb-2">60 Harley Street</p>
                    <p className="text-gray-300 mb-2">London W1G 7HA</p>
                    <p className="text-gray-400 text-sm">
                      5 minutes from Oxford Circus station — easily accessible by taxi from any London airport
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Opening Hours</h3>
                    <p className="text-gray-300 mb-2">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-300 mb-2">Saturday: 10am - 4pm</p>
                    <p className="text-gray-400 text-sm">
                      Early morning appointments available for patients flying in
                    </p>
                  </CardContent>
                </Card>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <p className="text-gray-300 mb-6">
                  We're experienced in welcoming international patients and will help you plan your visit seamlessly. 
                  Many of our Irish patients make it a day trip — treatment and back home the same day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                    <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <a href="tel:+442074364441">
                      +44 207 436 4441
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Ready to Discover <span className="text-amber-400">London's Excellence</span>?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join the thousands of Irish patients who have chosen Cosmedocs for their aesthetic treatments. 
                Free consultation, natural results, unrivalled expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg">
                  <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                    Book a Free Consultation
                  </a>
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                Bold • Natural • Always Your Way
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BotoxDublin;
