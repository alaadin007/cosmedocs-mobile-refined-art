
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, Sparkles, Gift, TrendingUp } from 'lucide-react';

const Membership = () => {
  return (
    <>
      <Helmet>
        <title>Cosmedocs Membership - Premium Aesthetic Medicine | £95/month</title>
        <meta name="description" content="Cosmedocs membership £95/month. 25% off injectables, 50% off skin boosters, free monthly treatments. Aesthetic medicine as invisible art." />
        <meta name="keywords" content="cosmedocs membership, aesthetic medicine subscription, botox discount, filler membership, london aesthetic clinic" />
        <link rel="canonical" href="https://cosmedocs.com/membership" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Exclusive Membership
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Cosmedocs <span className="font-medium">Membership</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Our aesthetics is invisible art • Bold • Natural • Always Your Way
            </p>
            
            <p className="text-lg text-gray-500 mb-8">
              Aesthetic medicine by Cosmedocs is minimal. Quiet, not loud. Invisible, not exaggerated.<br />
              It's transformation that speaks — without saying a word.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                Join the Membership – £95/month
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Book Your Skin Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Pricing Overview */}
            <Card className="mb-12 border-2 border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl text-gray-900 mb-2">£95/month</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Total: £1,140/year • A complete injectable + skin membership for long-term aesthetic health
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tabs for Main Content */}
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="benefits">What's Included</TabsTrigger>
                <TabsTrigger value="pricing">Value Breakdown</TabsTrigger>
                <TabsTrigger value="treatments">Treatment Guide</TabsTrigger>
                <TabsTrigger value="savings">Your Savings</TabsTrigger>
              </TabsList>

              {/* Benefits Tab */}
              <TabsContent value="benefits" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Injectables & Threads */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="w-5 h-5 text-rose-600" />
                        Injectables & Threads
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>25% off all injectables (Botox, fillers, TMJ, migraines, hyperhidrosis)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>35% off PDO Threads</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Advanced Skin Boosters */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-rose-600" />
                        Advanced Skin Boosters
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>50% off Profhilo (£300 → £150)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>50% off Polynucleotides (£350 → £175)</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Free Monthly Treatment */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="w-5 h-5 text-rose-600" />
                        Free Skin Treatment Monthly
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-gray-600 mb-3">One skin treatment of your choice every month:</p>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Chemical Peel (RRP £250)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Microneedling (from £120)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Botox Facial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Thread Vein Laser</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>New treatments coming soon</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* More Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-rose-600" />
                        More Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Free peel with every injectable visit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>45% off all Cosmedocs skincare products</span>
                      </div>
                      <p className="text-sm text-gray-500 ml-6">HSF Retinol, Vitamin C, Peptides, Hydrators</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Value Breakdown Tab */}
              <TabsContent value="pricing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Value Breakdown – Real Pricing Used</CardTitle>
                    <CardDescription>See exactly how much you save with membership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Benefit</TableHead>
                          <TableHead className="text-right">Value per Year</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>12x Free Peels (RRP £250 each) OR microneedling</TableCell>
                          <TableCell className="text-right font-medium">£1,440–£3,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3x Botox (£375 each) at 25% off</TableCell>
                          <TableCell className="text-right font-medium">£281.25 saved</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2x Filler (£350 each) at 25% off</TableCell>
                          <TableCell className="text-right font-medium">£175 saved</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2x Profhilo (£300 each) at 50% off</TableCell>
                          <TableCell className="text-right font-medium">£300 saved</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Skincare Discounts (Avg spend £200) at 45% off</TableCell>
                          <TableCell className="text-right font-medium">£90 saved</TableCell>
                        </TableRow>
                        <TableRow className="border-t-2 border-rose-200">
                          <TableCell className="font-semibold">Total Value</TableCell>
                          <TableCell className="text-right font-bold text-green-600">£2,300–£3,800</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold text-rose-600">You Pay:</TableCell>
                          <TableCell className="text-right font-bold text-rose-600">£1,140/year</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-green-800 font-medium text-center">
                        Even clients who visit just 2–3 times a year will save.<br />
                        Frequent users gain massive value while improving skin consistently.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Treatment Guide Tab */}
              <TabsContent value="treatments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Why It Matters</CardTitle>
                    <CardDescription>We only treat what matters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Aesthetic Need</TableHead>
                          <TableHead>Treatment Solution</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Wrinkles in motion</TableCell>
                          <TableCell>Botulinum Toxin</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Volume loss/sagging</TableCell>
                          <TableCell>Fillers & Threads</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Photo-ageing & skin texture</TableCell>
                          <TableCell>Skin Peels, Microneedling, Skin Boosters</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Savings Tab */}
              <TabsContent value="savings" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-2xl text-rose-600">£1,656</CardTitle>
                      <CardDescription>Minimum Annual Savings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Based on just 6 treatments per year</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-2xl text-green-600">£3,800</CardTitle>
                      <CardDescription>Maximum Annual Value</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">For regular treatment users</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600">233%</CardTitle>
                      <CardDescription>Return on Investment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Minimum value vs membership cost</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="frequent-users">
                    <AccordionTrigger>For Frequent Treatment Users</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">If you typically get:</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Monthly Botox touch-ups (£375 → £281.25)</li>
                        <li>• Quarterly filler sessions (£350 → £262.50)</li>
                        <li>• Bi-annual Profhilo treatments (£300 → £150)</li>
                        <li>• Plus your free monthly peels worth £250 each</li>
                      </ul>
                      <p className="mt-4 font-medium text-green-600">Your total savings exceed £2,800 annually</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="occasional-users">
                    <AccordionTrigger>For Occasional Users</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">Even with minimal usage:</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 2-3 Botox sessions per year</li>
                        <li>• 1 filler treatment annually</li>
                        <li>• Take advantage of 6 free monthly peels</li>
                      </ul>
                      <p className="mt-4 font-medium text-green-600">You still save over £1,200 compared to regular pricing</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>

            {/* Call to Action */}
            <Card className="mt-12 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-light mb-4">Ready to Transform Your Aesthetic Journey?</h3>
                <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of clients who trust Cosmedocs for refined, natural results. 
                  Start your membership today and experience the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                    Join the Membership – £95/month
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Browse Eligible Skin Treatments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>Cosmedocs membership offers exclusive access to premium aesthetic treatments in London's prestigious Harley Street clinic. Our comprehensive membership program provides significant savings on botulinum toxin injections, dermal fillers, advanced skin boosters including Profhilo and Polynucleotides, and professional skin treatments. Members enjoy monthly complimentary chemical peels worth £250, substantial discounts on PDO thread lifts, and exclusive access to our curated skincare collection. The membership represents exceptional value for clients seeking consistent, high-quality aesthetic maintenance with our experienced medical practitioners. Our invisible art philosophy ensures natural, refined results that enhance rather than alter your appearance. Located at 10 Harley Street, our clinic combines cutting-edge technology with personalized treatment plans, making aesthetic medicine accessible through our structured membership model. Whether you're interested in preventative treatments, skin rejuvenation, or advanced injectable procedures, our membership program offers the most cost-effective way to maintain your aesthetic goals. Book your consultation today to discover how our membership can transform your skincare routine and provide long-term value for your aesthetic investment. Cosmedocs membership - where bold meets natural, and transformation speaks without saying a word.</p>
        </div>
      </div>
    </>
  );
};

export default Membership;
