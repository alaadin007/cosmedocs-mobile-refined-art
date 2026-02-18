import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from '@/utils/seo';
import { Phone, Calendar, Clock, Shield, Star, ArrowRight } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function Rhinoplasty() {
  const seoData = generateSEOMetadata(
    "Rhinoplasty London | Nose Surgery by Expert Plastic Surgeons",
    "Expert rhinoplasty (nose surgery) in London. Reshape and refine your nose with our specialist plastic surgeons. Natural results, exceptional care. Book today.",
    "/rhinoplasty"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Breadcrumb items={[{ label: "Plastic Surgeon", path: "/plastic-surgeon" }]} currentPage="Rhinoplasty" />
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-amber-900/10" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Star className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Plastic Surgery</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Rhinoplasty</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                  Nose Surgery London
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Achieve facial harmony with expert rhinoplasty. Our specialist plastic surgeons 
                deliver natural-looking results tailored to your unique features.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+442037333227">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 020 3733 3227
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Rhinoplasty?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Star, title: "Facial Harmony", description: "Reshape your nose to complement and enhance your natural facial features" },
                  { icon: Clock, title: "Permanent Results", description: "One procedure for lasting improvement to your nose shape and profile" },
                  { icon: Shield, title: "Expert Surgeons", description: "Performed by experienced GMC-registered consultant plastic surgeons" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Non-surgical alternative */}
              <div className="mt-12 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                <h3 className="text-xl font-semibold mb-2">Looking for a Non-Surgical Option?</h3>
                <p className="text-muted-foreground mb-4">
                  Our non-surgical nose job uses dermal fillers to reshape and refine your nose without surgery.
                </p>
                <Button asChild variant="outline" className="border-purple-500/30">
                  <Link to="/treatments/nose-filler/">
                    Learn About Non-Surgical Nose Job
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Profile?
            </h2>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert plastic surgeons to discuss your rhinoplasty options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/plastic-surgeon">
                  View All Procedures
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
