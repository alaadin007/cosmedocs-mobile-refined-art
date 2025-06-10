
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Award, Trophy, BookOpen, Shield } from 'lucide-react';

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
        <meta name="description" content="Exclusive invitation for CosmeDocs Fellowship graduates to join our partner network. Transform your practice with national support and recognition." />
        <meta name="keywords" content="cosmedocs fellowship, aesthetic medicine partner, harley street training, aesthetic clinic partnership" />
        <link rel="canonical" href={`https://cosmedocs.com/fellowship-invitation-${FELLOW_NAME.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Exclusive Fellowship Graduate Invitation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Welcome {FELLOW_TITLE} —<br />
              <span className="font-medium">Your CosmeDocs Journey Begins Here</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              You've completed the Fellowship. Now take your place on the CosmeDocs network.
            </p>

            <Button 
              size="lg" 
              onClick={handleActivateProfile}
              className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-6 text-xl font-medium"
            >
              Activate My CosmeDocs Profile
            </Button>
          </div>
        </section>

        {/* Why You're Being Invited */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 mb-4">Why You're Being Invited</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 space-y-4">
                <p>
                  As a graduate of the CosmeDocs Fellowship in Aesthetic Medicine, you are now invited to become a <strong>CosmeDoc</strong> — a recognised and trusted partner featured on our national website. This isn't a generic application — it's a personal extension of trust, based on the training and ethics you've already demonstrated.
                </p>
                <p>
                  Until now, CosmeDocs has been a boutique brand based on Harley Street. But no foundation for national growth is stronger than the Fellows we have personally trained. You are part of that story — and now, a leader in what comes next.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What You Receive */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-green-600" />
                  Your CosmeDocs Partner Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Use of the CosmeDocs brand name (while retaining your own clinic identity)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>A dedicated profile and microsite linked from CosmeDocs.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>High-level SEO and promotion from our marketing team</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Access to our licensed before-and-after library (non-attributed)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Technical support, booking tools, and admin help</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Visibility within a nationally trusted aesthetics brand</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Early access to new AI-based systems and software</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-lg border border-green-200">
                  <p className="text-gray-700 font-medium">
                    Your current brand, website, and name remain fully yours — we will link your CosmeDocs profile to your existing site to help it grow faster using the authority of our national platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Educator Rights */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 mb-4 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                  Educate Locally with National Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-6">
                  As a CosmeDoc Partner and Fellow, you're also granted:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span>First right to run CosmeDocs-approved Foundation Day and CAM Certificate training in your region</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Harley Street Institute educational branding and curriculum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Majority share of revenue from courses you deliver</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span>Full academic and logistical support from our team</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                  <p className="text-amber-800 font-medium">
                    This means you can become the leading educator in your area — while earning and building your name.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Costs & Commitment */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-600" />
                  You Start Free. We Build With You.
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 space-y-4">
                <p>
                  There is no cost to activate and no fee for the first 6 months, then after only if we have made you more money. See our{' '}
                  <a 
                    href="https://www.cosmedocs.co.uk/partners" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    partner page
                  </a>{' '}
                  for when you will pay us how much you will pay us at that stage when you are making more because of us.
                </p>
                <p>
                  We'll invest in building your regional microsite, your search presence, and your inclusion in national campaigns.
                </p>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="font-medium text-red-800">
                    Only after you begin earning from CosmeDocs patient referrals will we take a small share from new bookings only.<br />
                    You keep all your existing clients and revenue.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Message */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">You're Not Just Invited. You're Needed.</h2>
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
              className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-6 text-xl font-medium"
            >
              Activate My CosmeDocs Profile
            </Button>
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
