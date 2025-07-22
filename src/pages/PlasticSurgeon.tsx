import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, Shield, Clock, Mail, Phone } from 'lucide-react';

const PlasticSurgeon = () => {
  const seoData = generateSEOMetadata(
    'Expert Plastic Surgeon London | Local Anaesthetic Procedures | Cosmedocs',
    'Specialist plastic surgeon offering upper eyelid surgery, lumps and bumps removal, and local anaesthetic procedures. CQC registered clinic in London. Contact pashma@medcales.com',
    '/plastic-surgeon'
  );

  const procedures = [
    {
      title: 'Upper Eyelid Surgery (Blepharoplasty)',
      description: 'Rejuvenate your eyes with our expert upper eyelid surgery performed under local anaesthetic.',
      benefits: ['Removes excess skin and fat', 'Improves vision', 'Natural-looking results', 'Minimal downtime']
    },
    {
      title: 'Lumps and Bumps Removal',
      description: 'Safe and effective removal of benign skin lesions, cysts, and lipomas.',
      benefits: ['Same-day procedure', 'Minimal scarring', 'Histological examination', 'Quick recovery']
    },
    {
      title: 'Local Anaesthetic Procedures',
      description: 'Comprehensive range of minor surgical procedures performed with local anaesthetic.',
      benefits: ['No general anaesthetic needed', 'Immediate results', 'Cost-effective', 'Reduced complications']
    },
    {
      title: 'Skin Lesion Excision',
      description: 'Expert removal of moles, skin tags, and other benign skin lesions.',
      benefits: ['Precise technique', 'Minimal scarring', 'Pathological analysis', 'Same-day results']
    }
  ];

  const qualifications = [
    'GMC Registered Plastic Surgeon',
    'Member of British Association of Plastic Surgeons (BAPS)',
    'Specialist in Local Anaesthetic Procedures',
    'CQC Registered Practice',
    'Extensive Experience in Minor Surgery'
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
        <meta property="og:image" content={seoData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Cosmedocs Plastic Surgery",
            "description": "Expert plastic surgeon offering local anaesthetic procedures including upper eyelid surgery and lumps and bumps removal",
            "url": seoData.canonical,
            "telephone": "+44 20 7123 4567",
            "email": "pashma@medcales.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Harley Street",
              "addressLocality": "London",
              "postalCode": "W1G 6AN",
              "addressCountry": "GB"
            },
            "medicalSpecialty": "Plastic Surgery",
            "priceRange": "£££",
            "areaServed": "London, UK"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                <Shield className="w-4 h-4 mr-2" />
                CQC Registered Practice
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Expert Plastic Surgeon
                <span className="block text-primary">Local Anaesthetic Procedures</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Specialist plastic surgeon offering upper eyelid surgery, lumps and bumps removal, 
                and comprehensive local anaesthetic procedures in our CQC registered London clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Procedures Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Specialist Procedures
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our aesthetics is invisible art - Bold, Natural, Always Your Way
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {procedures.map((procedure, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{procedure.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {procedure.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Qualifications & Accreditations
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center justify-center p-4 bg-background rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">{qualification}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Our plastic surgeon brings years of experience in local anaesthetic procedures, 
                ensuring safe, effective treatments with natural-looking results.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Why Choose Our Plastic Surgeon?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">CQC Registered</h3>
                  <p className="text-muted-foreground">
                    Our clinic is fully CQC registered, ensuring the highest standards of safety and care.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Minimal Downtime</h3>
                  <p className="text-muted-foreground">
                    Local anaesthetic procedures offer quicker recovery times and reduced complications.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Expert Care</h3>
                  <p className="text-muted-foreground">
                    Specialist training in plastic surgery with focus on local anaesthetic techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact our specialist plastic surgeon for a consultation about your local anaesthetic procedure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <div className="flex items-center text-lg text-foreground">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a href="mailto:pashma@medcales.com" className="hover:text-primary transition-colors">
                    pashma@medcales.com
                  </a>
                </div>
                <div className="flex items-center text-lg text-foreground">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <a href="tel:+442071234567" className="hover:text-primary transition-colors">
                    +44 20 7123 4567
                  </a>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Plastic Surgeon London Local Anaesthetic Procedures</h3>
          <p>Our expert plastic surgeon specializes in local anaesthetic procedures including upper eyelid surgery, lumps and bumps removal, and comprehensive minor surgical treatments. Located in our CQC registered clinic in London, we offer safe, effective procedures with minimal downtime. Upper eyelid surgery, also known as blepharoplasty, is performed under local anaesthetic to remove excess skin and fat, improving both appearance and vision. Our lumps and bumps removal service includes the safe excision of benign skin lesions, cysts, and lipomas with minimal scarring. All procedures are performed by our qualified plastic surgeon with extensive experience in local anaesthetic techniques. The clinic maintains the highest standards of safety and care, being fully CQC registered and following all medical guidelines. Patients benefit from natural-looking results, reduced recovery time, and cost-effective treatments. Our plastic surgeon is GMC registered and a member of the British Association of Plastic Surgeons (BAPS), ensuring professional expertise and ethical practice. The clinic offers same-day procedures for many treatments, with immediate results and quick recovery times. Local anaesthetic procedures eliminate the need for general anaesthesia, reducing complications and costs while providing excellent outcomes. For consultations and bookings, contact pashma@medcales.com or call our London clinic directly.</p>
        </div>
      </div>
    </>
  );
};

export default PlasticSurgeon;