import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateSEOMetadata } from '@/utils/seo';

const NonSurgicalNoseJobBlog = () => {
  const seoData = generateSEOMetadata(
    "Non-Surgical Nose Job Blog | Cosmedocs",
    "Liquid rhinoplasty explained: benefits, procedure steps & expected results. Non-surgical nose reshaping guide.",
    "/non-surgical-nose-job-blog"
  );

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="page-container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Non-Surgical Nose Job Blog
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Everything you need to know about non-surgical nose jobs (liquid rhinoplasty) at Cosmedocs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">What is a Non-Surgical Nose Job?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A non-surgical nose job, also known as liquid rhinoplasty, is a cosmetic procedure that uses dermal fillers to reshape the nose without surgery.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    It's a popular option for those looking to correct minor imperfections, such as bumps or asymmetry, without undergoing a traditional rhinoplasty.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Benefits of Non-Surgical Nose Job</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground leading-relaxed">
                    <li>Non-invasive procedure</li>
                    <li>Minimal downtime</li>
                    <li>Immediate results</li>
                    <li>Corrects minor imperfections</li>
                    <li>More affordable than traditional rhinoplasty</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">The Procedure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The procedure involves injecting dermal fillers into specific areas of the nose to reshape and contour it.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The process typically takes 15-30 minutes and requires no incisions or general anesthesia.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Results are visible immediately, and any minor swelling or bruising usually subsides within a few days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/10">
          <div className="page-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
              <p className="text-muted-foreground mb-8">
                Contact Cosmedocs today to schedule a consultation and discover if a non-surgical nose job is right for you.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book a Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NonSurgicalNoseJobBlog;
