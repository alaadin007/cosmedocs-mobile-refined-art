
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Crown, Gift, TrendingUp, CheckCircle, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { generateSEOMetadata } from "@/utils/seo";

const Membership = () => {
  const seoData = generateSEOMetadata(
    "Cosmedocs Membership | Exclusive Aesthetic Medicine Plans",
    "Join our exclusive membership for 25% off injectables, 50% off skin boosters, and free monthly treatments. Transform with our invisible art aesthetic approach.",
    "/membership"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MembershipOrganization",
            "name": "Cosmedocs Membership",
            "description": "Exclusive aesthetic medicine membership with discounts on injectables and free monthly skin treatments",
            "url": seoData.canonical,
            "offers": {
              "@type": "Offer",
              "name": "Cosmedocs Membership",
              "price": "95",
              "priceCurrency": "GBP",
              "availability": "InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 md:p-6">
          <Link to="/treatments" className="inline-flex items-center text-white/70 hover:text-cyan-400 transition-colors duration-300 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Treatments
          </Link>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Crown className="h-16 w-16 text-cyan-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Cosmedocs Membership
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                A complete injectable + skin membership for long-term aesthetic health
              </p>
              
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-3xl font-bold text-cyan-300 mb-2">£95/month</div>
                <p className="text-gray-300">(Total: £1,140/year)</p>
                <p className="italic text-cyan-300 text-lg mt-4">
                  "Our aesthetics is invisible art — Bold • Natural • Always Your Way"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
                <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500/20">Overview</TabsTrigger>
                <TabsTrigger value="benefits" className="data-[state=active]:bg-cyan-500/20">Benefits</TabsTrigger>
                <TabsTrigger value="value" className="data-[state=active]:bg-cyan-500/20">Value</TabsTrigger>
                <TabsTrigger value="treatments" className="data-[state=active]:bg-cyan-500/20">Treatments</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-cyan-300 flex items-center">
                      <Gift className="h-6 w-6 mr-2" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="injectables">
                        <AccordionTrigger className="text-white hover:text-cyan-300">
                          Injectables & Threads
                        </AccordionTrigger>
                        <AccordionContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-cyan-300">Treatment</TableHead>
                                <TableHead className="text-cyan-300">Discount</TableHead>
                                <TableHead className="text-cyan-300">Includes</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="text-white">All Injectables</TableCell>
                                <TableCell className="text-green-400">25% off</TableCell>
                                <TableCell className="text-gray-300">Botox, fillers, TMJ, migraines, hyperhidrosis</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="text-white">PDO Threads</TableCell>
                                <TableCell className="text-green-400">35% off</TableCell>
                                <TableCell className="text-gray-300">Face lifting threads</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="boosters">
                        <AccordionTrigger className="text-white hover:text-cyan-300">
                          Advanced Skin Boosters
                        </AccordionTrigger>
                        <AccordionContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-cyan-300">Treatment</TableHead>
                                <TableHead className="text-cyan-300">RRP</TableHead>
                                <TableHead className="text-cyan-300">Member Price</TableHead>
                                <TableHead className="text-cyan-300">Saving</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="text-white">Profhilo</TableCell>
                                <TableCell className="text-gray-300">£300</TableCell>
                                <TableCell className="text-green-400">£150</TableCell>
                                <TableCell className="text-green-400">50% off</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="text-white">Polynucleotides</TableCell>
                                <TableCell className="text-gray-300">£350</TableCell>
                                <TableCell className="text-green-400">£175</TableCell>
                                <TableCell className="text-green-400">50% off</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="monthly">
                        <AccordionTrigger className="text-white hover:text-cyan-300">
                          Free Monthly Skin Treatment
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-300 mb-4">One skin treatment of your choice every month — included with your membership:</p>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-cyan-300">Treatment</TableHead>
                                <TableHead className="text-cyan-300">RRP Value</TableHead>
                                <TableHead className="text-cyan-300">Member Price</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="text-white">Chemical Peel</TableCell>
                                <TableCell className="text-gray-300">£250</TableCell>
                                <TableCell className="text-green-400">FREE</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="text-white">Microneedling</TableCell>
                                <TableCell className="text-gray-300">From £120</TableCell>
                                <TableCell className="text-green-400">FREE</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="text-white">Botox Facial</TableCell>
                                <TableCell className="text-gray-300">£200</TableCell>
                                <TableCell className="text-green-400">FREE</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="text-white">Thread Vein Laser</TableCell>
                                <TableCell className="text-gray-300">£180</TableCell>
                                <TableCell className="text-green-400">FREE</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="mt-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-cyan-300 flex items-center">
                      <Sparkles className="h-6 w-6 mr-2" />
                      Additional Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                        <CheckCircle className="h-8 w-8 text-green-400 mb-3" />
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Free Peel with Injectables</h3>
                        <p className="text-gray-300 text-sm">
                          Receive a complimentary chemical peel with every injectable treatment visit.
                        </p>
                      </div>
                      
                      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                        <Star className="h-8 w-8 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Skincare Discounts</h3>
                        <p className="text-gray-300 text-sm">
                          45% off all Cosmedocs skincare products including HSF Retinol, Vitamin C, Peptides, and Hydrators.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="value" className="mt-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-cyan-300 flex items-center">
                      <TrendingUp className="h-6 w-6 mr-2" />
                      Value Breakdown - Real Pricing
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Even clients who visit just 2–3 times a year will save. Frequent users gain massive value.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-cyan-300">Benefit</TableHead>
                          <TableHead className="text-cyan-300">Details</TableHead>
                          <TableHead className="text-cyan-300 text-right">Value per Year</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-white font-medium">12x Free Treatments</TableCell>
                          <TableCell className="text-gray-300">Chemical Peels (£250 each) OR Microneedling</TableCell>
                          <TableCell className="text-right text-green-400">£1,440–£3,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white font-medium">Botox Savings</TableCell>
                          <TableCell className="text-gray-300">3x Botox (£375 each) at 25% off</TableCell>
                          <TableCell className="text-right text-green-400">£281.25 saved</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white font-medium">Filler Savings</TableCell>
                          <TableCell className="text-gray-300">2x Filler (£350 each) at 25% off</TableCell>
                          <TableCell className="text-right text-green-400">£175 saved</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white font-medium">Profhilo Savings</TableCell>
                          <TableCell className="text-gray-300">2x Profhilo (£300 each) at 50% off</TableCell>
                          <TableCell className="text-right text-green-400">£300 saved</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white font-medium">Skincare Savings</TableCell>
                          <TableCell className="text-gray-300">Average spend £200 at 45% off</TableCell>
                          <TableCell className="text-right text-green-400">£90 saved</TableCell>
                        </TableRow>
                        <TableRow className="border-t-2 border-cyan-500/30">
                          <TableCell className="text-cyan-300 font-bold">Total Value</TableCell>
                          <TableCell className="text-cyan-300 font-bold">Combined annual benefits</TableCell>
                          <TableCell className="text-right text-cyan-300 font-bold">£2,300–£3,800</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-red-300 font-bold">You Pay</TableCell>
                          <TableCell className="text-red-300">Membership cost</TableCell>
                          <TableCell className="text-right text-red-300 font-bold">£1,140/year</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="treatments" className="mt-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-cyan-300">Treatment Solutions</CardTitle>
                    <CardDescription className="text-gray-300">
                      We only treat what matters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-cyan-300">Aesthetic Need</TableHead>
                          <TableHead className="text-cyan-300">Treatment Solution</TableHead>
                          <TableHead className="text-cyan-300">Member Benefit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-white">Wrinkles in motion</TableCell>
                          <TableCell className="text-gray-300">Botulinum Toxin</TableCell>
                          <TableCell className="text-green-400">25% off</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white">Volume loss/sagging</TableCell>
                          <TableCell className="text-gray-300">Fillers & Threads</TableCell>
                          <TableCell className="text-green-400">25-35% off</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-white">Photo-ageing & skin texture</TableCell>
                          <TableCell className="text-gray-300">Skin Peels, Microneedling, Skin Boosters</TableCell>
                          <TableCell className="text-green-400">Free monthly + 50% off boosters</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Transform with Invisible Art
              </h2>
              
              <p className="text-gray-300">
                Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated.
                It's transformation that speaks — without saying a word.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
                  Join the Membership – £95/month
                </Button>
                
                <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 rounded-full px-8 py-3">
                  Book Your Skin Consultation
                </Button>
                
                <Button variant="ghost" className="text-white hover:text-cyan-300 rounded-full px-8 py-3">
                  Browse Eligible Skin Treatments
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <p>
            Cosmedocs membership offers exclusive discounts on aesthetic treatments including 25% off all injectables like Botox and dermal fillers, 35% off PDO threads, and 50% off advanced skin boosters like Profhilo and Polynucleotides. Members receive free monthly skin treatments including chemical peels worth £250, microneedling, Botox facials, and thread vein laser treatments. Additional benefits include free peels with injectable visits and 45% off all Cosmedocs skincare products. The membership provides exceptional value with annual benefits worth £2,300-£3,800 for just £1,140 per year. Our aesthetic approach focuses on invisible art - transformation that speaks without saying a word. Book consultation at Harley Street clinic for expert aesthetic medicine with over 1 million injections experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Membership;
