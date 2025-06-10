
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, BookOpen, TrendingUp, Globe, Star } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface PartnerInvitationProps {
  fellowName?: string;
  fellowId?: string;
}

const PartnerInvitation = ({ 
  fellowName = "Dr. [Full Name]", 
  fellowId = "fellow-001" 
}: PartnerInvitationProps) => {
  const [isActivating, setIsActivating] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const handleActivation = async () => {
    setIsActivating(true);
    
    try {
      // Send activation email
      const { error } = await supabase.functions.invoke('send-partner-activation', {
        body: {
          fellowName,
          fellowId,
          pageUrl: window.location.href,
          timestamp: new Date().toISOString()
        }
      });

      if (error) {
        throw error;
      }

      setIsActivated(true);
      toast.success("Profile activation successful! Our team has been notified and will be in touch soon.");
      
    } catch (error) {
      console.error('Activation error:', error);
      toast.error("There was an issue with activation. Please try again or contact us directly.");
    } finally {
      setIsActivating(false);
    }
  };

  const benefits = [
    "Use of the CosmeDocs brand name (while retaining your own clinic identity)",
    "A dedicated profile and microsite linked from CosmeDocs.com",
    "High-level SEO and promotion from our marketing team",
    "Access to our licensed before-and-after library (non-attributed)",
    "Technical support, booking tools, and admin help",
    "Visibility within a nationally trusted aesthetics brand",
    "Early access to new AI-based systems and software"
  ];

  const educatorRights = [
    "First right to run CosmeDocs-approved Foundation Day and CAM Certificate training in your region",
    "Harley Street Institute educational branding and curriculum",
    "Majority share of revenue from courses you deliver",
    "Full academic and logistical support from our team"
  ];

  return (
    <>
      <Helmet>
        <title>Welcome {fellowName} - Your CosmeDocs Partner Invitation</title>
        <meta name="description" content={`Personal invitation for ${fellowName} to join the CosmeDocs partner network as a Fellowship graduate.`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10" />
          <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Award className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Welcome {fellowName}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                Your CosmeDocs Journey Begins Here
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                You've completed the Fellowship. Now take your place on the CosmeDocs network.
              </p>
              
              {!isActivated ? (
                <Button
                  onClick={handleActivation}
                  disabled={isActivating}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {isActivating ? "Activating..." : "Activate My CosmeDocs Profile"}
                </Button>
              ) : (
                <div className="flex items-center justify-center space-x-3 text-green-400">
                  <CheckCircle className="h-8 w-8" />
                  <span className="text-xl font-semibold">Profile Activated!</span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Why You're Being Invited */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Why You're Being Invited</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                  <p>
                    As a graduate of the CosmeDocs Fellowship in Aesthetic Medicine, you are now invited to become a <strong>CosmeDoc</strong> — a recognised and trusted partner featured on our national website. This isn't a generic application — it's a personal extension of trust, based on the training and ethics you've already demonstrated.
                  </p>
                  
                  <p>
                    Until now, CosmeDocs has been a boutique brand based on Harley Street. But no foundation for national growth is stronger than the Fellows we have personally trained. You are part of that story — and now, a leader in what comes next.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Partner Benefits */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6 bg-gradient-to-r from-slate-50 to-cyan-50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Star className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Your CosmeDocs Partner Benefits</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Your current brand, website, and name remain fully yours — we will link your CosmeDocs profile to your existing site to help it grow faster using the authority of our national platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-6 bg-white rounded-xl shadow-lg"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Educator Rights */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-cyan-50">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Educate Locally with National Support</h2>
                  <p className="text-slate-600">As a CosmeDoc Partner and Fellow, you're also granted:</p>
                </div>
                
                <div className="space-y-4">
                  {educatorRights.map((right, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-white/70 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{right}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white/90 rounded-xl">
                  <p className="text-slate-700 font-medium">
                    This means you can become the leading educator in your area — while earning and building your name.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Costs & Commitment */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6 bg-gradient-to-r from-green-50 to-emerald-50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 mb-8">You Start Free. We Build With You.</h2>
            
            <Card className="border-0 shadow-xl bg-white/90">
              <CardContent className="p-10">
                <div className="space-y-6 text-slate-700">
                  <p className="text-lg">
                    There is no cost to activate and no fee for the first 6 months, then after only if we have made you more money.
                  </p>
                  
                  <p>
                    See our <a href="https://www.cosmedocs.co.uk/partners" className="text-cyan-600 hover:text-cyan-700 underline font-medium" target="_blank" rel="noopener noreferrer">partner page</a> for when you will pay us how much you will pay us at that stage when you are making more because of us.
                  </p>
                  
                  <p>
                    We'll invest in building your regional microsite, your search presence, and your inclusion in national campaigns.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <p className="font-semibold text-green-800">
                      Only after you begin earning from CosmeDocs patient referrals will we take a small share from new bookings only.<br />
                      You keep all your existing clients and revenue.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Final Message & CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 text-cyan-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">You're Not Just Invited. You're Needed.</h2>
            
            <div className="mb-12 space-y-4 text-lg text-gray-300">
              <p>{fellowName}, your growth is our priority.</p>
              <p>You represent what CosmeDocs stands for — and we want the world to see it.</p>
              <p className="text-xl font-semibold text-white">
                This page is your launchpad.<br />
                Press activate, and we'll handle the rest.
              </p>
            </div>
            
            {!isActivated ? (
              <Button
                onClick={handleActivation}
                disabled={isActivating}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-16 py-6 text-xl font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                {isActivating ? "Activating Profile..." : "Activate My CosmeDocs Profile"}
              </Button>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3 text-green-400 text-xl">
                  <CheckCircle className="h-10 w-10" />
                  <span className="font-bold">Profile Successfully Activated!</span>
                </div>
                <p className="text-gray-300">Our team has been notified and will be in touch with you soon.</p>
              </div>
            )}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default PartnerInvitation;
