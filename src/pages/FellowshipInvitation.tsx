
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Award, Trophy, BookOpen, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Template variables that can be customized for each fellow
const FELLOW_NAME = "[Fellow Full Name]";
const FELLOW_TITLE = "Dr. [Full Name]";

const FellowshipInvitation = () => {
  const handleActivateProfile = async () => {
    try {
      const response = await fetch('/api/activate-cosmedoc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fellowName: FELLOW_NAME,
          pageUrl: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert('Thank you! Your CosmeDocs profile activation request has been submitted. Our team will be in touch shortly.');
      } else {
        alert('There was an issue submitting your request. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error activating profile:', error);
      alert('There was an issue submitting your request. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Welcome {FELLOW_TITLE} - Your CosmeDocs Partner Invitation</title>
        <meta name="description" content="Fellowship graduates: join our partner network. Transform your aesthetic practice with national support & mentorship." />
        <meta name="keywords" content="cosmedocs fellowship, aesthetic medicine partner, harley street training, aesthetic clinic partnership" />
        <link rel="canonical" href={`https://www.cosmedocs.co.uk/fellowship-invitation-${FELLOW_NAME.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Exclusive Fellowship Graduate Invitation
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  Welcome {FELLOW_TITLE}
                  <span className="block text-xl md:text-2xl text-gray-300 font-light mt-4">
                    Your CosmeDocs Journey Begins Here
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  You've completed the Fellowship. Now take your place on the CosmeDocs network.
                  <span className="block mt-4 text-gray-400 italic">*Our aesthetics is invisible art</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleActivateProfile}
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    Activate My CosmeDocs Profile
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why You're Being Invited */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">Why You're Being Invited</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    As a graduate of the CosmeDocs Fellowship in Aesthetic Medicine, you are now invited to become a <strong className="text-white">CosmeDoc</strong> — a recognised and trusted partner featured on our national website. This isn't a generic application — it's a personal extension of trust, based on the training and ethics you've already demonstrated.
                  </p>
                  <p className="text-lg">
                    Until now, CosmeDocs has been a boutique brand based on Harley Street. But no foundation for national growth is stronger than the Fellows we have personally trained. You are part of that story — and now, a leader in what comes next.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6 flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-white" />
                  Your CosmeDocs Partner Benefits
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    "Use of the CosmeDocs brand name (while retaining your own clinic identity)",
                    "A dedicated profile and microsite linked from CosmeDocs.com",
                    "High-level SEO and promotion from our marketing team",
                    "Access to our licensed before-and-after library (non-attributed)"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[
                    "Technical support, booking tools, and admin help",
                    "Visibility within a nationally trusted aesthetics brand",
                    "Early access to new AI-based systems and software"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-gray-900/50 rounded-2xl border border-gray-800"
              >
                <p className="text-gray-300 font-medium text-center">
                  Your current brand, website, and name remain fully yours — we will link your CosmeDocs profile to your existing site to help it grow faster using the authority of our national platform.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Educator Rights */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6 flex items-center justify-center gap-3">
                  <BookOpen className="w-8 h-8 text-white" />
                  Educate Locally with National Support
                </h2>
                <p className="text-xl text-gray-300">
                  As a CosmeDoc Partner and Fellow, you're also granted:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "First right to run CosmeDocs-approved Foundation Day and CAM Certificate training in your region",
                  "Harley Street Institute educational branding and curriculum",
                  "Majority share of revenue from courses you deliver",
                  "Full academic and logistical support from our team"
                ].map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{right}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-yellow-600/10 rounded-2xl border border-yellow-600/20"
              >
                <p className="text-yellow-300 font-medium text-center">
                  This means you can become the leading educator in your area — while earning and building your name.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Costs & Commitment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6 flex items-center justify-center gap-3">
                  <Shield className="w-8 h-8 text-white" />
                  You Start Free. We Build With You.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    There is no cost to activate and no fee for the first 6 months, then after only if we have made you more money. See our{' '}
                    <a 
                      href="https://www.cosmedocs.co.uk/partners" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 underline"
                    >
                      partner page
                    </a>{' '}
                    for when you will pay us how much you will pay us at that stage when you are making more because of us.
                  </p>
                  <p className="text-lg">
                    We'll invest in building your regional microsite, your search presence, and your inclusion in national campaigns.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-red-600/10 rounded-2xl border border-red-600/20">
                  <p className="font-medium text-red-300 text-center">
                    Only after you begin earning from CosmeDocs patient referrals will we take a small share from new bookings only.<br />
                    You keep all your existing clients and revenue.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">You're Not Just Invited. You're Needed.</h2>
                <p className="text-xl text-gray-300 mb-4">
                  {FELLOW_TITLE}, your growth is our priority.<br />
                  You represent what CosmeDocs stands for — and we want the world to see it.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  This page is your launchpad.<br />
                  Press activate, and we'll handle the rest.
                </p>
                
                <Button 
                  size="lg" 
                  onClick={handleActivateProfile}
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Activate My CosmeDocs Profile
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>CosmeDocs Fellowship invitation for aesthetic medicine graduates provides exclusive partnership opportunities with the prestigious Harley Street clinic. Our fellowship graduates receive comprehensive support including brand usage rights, dedicated microsite development, SEO promotion, technical support, and access to educational opportunities. The partnership program offers no upfront costs with revenue sharing only after successful patient referrals. Fellows gain educator rights for regional training programs, access to before-and-after libraries, and early access to AI-based systems. This exclusive invitation represents the next phase of professional development for qualified aesthetic medicine practitioners who have completed the rigorous CosmeDocs Fellowship training program. Join the national network of trusted aesthetic professionals and expand your practice with the support of London's leading Harley Street aesthetic clinic. Our aesthetics is invisible art - bold, natural, always your way.</p>
        </div>
      </div>
    </>
  );
};

export default FellowshipInvitation;
