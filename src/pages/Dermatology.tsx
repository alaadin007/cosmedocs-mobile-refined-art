import { Helmet } from 'react-helmet-async';
import { generateSEOMetadata } from '@/utils/seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, Shield, Clock, Mail, Phone, Microscope } from 'lucide-react';

const Dermatology = () => {
  const seoData = generateSEOMetadata(
    'Dermatologist Harley Street | Cosmedocs',
    'Leading Harley Street dermatologist. Acne, eczema, psoriasis, skin cancer screening & advanced treatments. CQC registered clinic.',
    '/dermatology'
  );

  const conditions = [
    {
      title: 'Acne & Acne Scarring',
      description: 'Comprehensive acne treatment including medical grade treatments and scar reduction therapy.',
      benefits: ['Hormonal acne treatment', 'Cystic acne management', 'Acne scar reduction', 'Prescription treatments']
    },
    {
      title: 'Eczema & Dermatitis',
      description: 'Expert diagnosis and management of all types of eczema and inflammatory skin conditions.',
      benefits: ['Patch testing available', 'Personalized treatment plans', 'Long-term management', 'Latest therapies']
    },
    {
      title: 'Psoriasis Treatment',
      description: 'Advanced psoriasis management including biologics and cutting-edge treatments.',
      benefits: ['Systemic treatments', 'Topical therapies', 'Lifestyle guidance', 'Regular monitoring']
    },
    {
      title: 'Skin Cancer Screening',
      description: 'Comprehensive mole mapping and early detection of skin cancers including melanoma.',
      benefits: ['Digital dermoscopy', 'Full body examination', 'Annual screening programs', 'Biopsy services']
    },
    {
      title: 'Rosacea Management',
      description: 'Specialized treatment for rosacea including trigger identification and medical therapy.',
      benefits: ['Trigger assessment', 'Medical treatments', 'Laser therapy options', 'Lifestyle modifications']
    },
    {
      title: 'Hair Loss Conditions',
      description: 'Expert diagnosis and treatment of alopecia, androgenetic hair loss, and scalp conditions.',
      benefits: ['Trichoscopy examination', 'Medical treatments', 'PRP therapy', 'Scalp health optimization']
    }
  ];

  const services = [
    {
      title: 'Medical Dermatology',
      description: 'Comprehensive diagnosis and treatment of skin, hair, and nail conditions.',
      features: ['Skin biopsies', 'Cryotherapy', 'Electrosurgery', 'Patch testing']
    },
    {
      title: 'Dermatopathology',
      description: 'Expert interpretation of skin biopsies and histopathological analysis.',
      features: ['Rapid diagnosis', 'Second opinions', 'Research expertise', 'Multidisciplinary approach']
    },
    {
      title: 'Pediatric Dermatology',
      description: 'Specialized care for children with skin conditions and birthmarks.',
      features: ['Birthmark assessment', 'Childhood eczema', 'Genetic skin conditions', 'Family counseling']
    },
    {
      title: 'Cosmetic Dermatology',
      description: 'Advanced aesthetic treatments for skin rejuvenation and anti-aging.',
      features: ['Chemical peels', 'Laser treatments', 'Injectable treatments', 'Skin resurfacing']
    }
  ];

  const qualifications = [
    'GMC Registered Dermatologist',
    'Royal College Certified Specialist',
    'Member of British Association of Dermatologists',
    'CQC Registered Practice',
    'International Dermatology Fellowship'
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
            "@type": "MedicalClinic",
            "name": "Cosmedocs Dermatology Clinic",
            "description": "Expert dermatologist in Harley Street specializing in medical and cosmetic dermatology treatments",
            "url": seoData.canonical,
            "telephone": "+44 20 3733 3227",
            "email": "info@cosmedocs.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Harley Street",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W1G 9PF",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
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
                CQC Registered Harley Street Clinic
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Expert Dermatologist
                <span className="block text-primary">Harley Street London</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Leading dermatology specialist treating acne, eczema, psoriasis, skin cancer screening, 
                and comprehensive dermatological conditions in our prestigious Harley Street clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Dermatology Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  View Treatments
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dermatological Conditions We Treat
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our aesthetics is invisible art - Bold, Natural, Always Your Way
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {conditions.map((condition, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{condition.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {condition.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {condition.benefits.map((benefit, idx) => (
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

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dermatology Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive dermatological care from diagnosis to advanced treatments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Microscope className="w-8 h-8 text-primary mr-3" />
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Expert Dermatology Qualifications
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center justify-center p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">{qualification}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Our dermatologist brings extensive experience in medical and cosmetic dermatology, 
                providing evidence-based treatments with exceptional patient care.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Why Choose Our Dermatology Clinic?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Harley Street Excellence</h3>
                  <p className="text-muted-foreground">
                    Located in prestigious Harley Street with CQC registration ensuring the highest medical standards.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Diagnostics</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art diagnostic equipment including digital dermoscopy and trichoscopy.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Comprehensive Care</h3>
                  <p className="text-muted-foreground">
                    From routine skin checks to complex dermatological conditions with personalized treatment plans.
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
                Book Your Dermatology Consultation
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Expert dermatological care in the heart of Harley Street. Contact us for comprehensive skin health assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <div className="flex items-center text-lg text-foreground">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a href="mailto:info@cosmedocs.com" className="hover:text-primary transition-colors">
                    info@cosmedocs.com
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
                Book Dermatology Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h3>Harley Street Dermatologist London Skin Conditions Treatment</h3>
          <p>Our expert dermatologist in Harley Street London specializes in comprehensive treatment of skin conditions including acne, eczema, psoriasis, rosacea, and skin cancer screening. Located in our CQC registered clinic, we provide advanced dermatological care using state-of-the-art diagnostic equipment and evidence-based treatments. Acne treatment includes medical grade therapies, hormonal acne management, and acne scar reduction techniques. Eczema and dermatitis patients receive personalized treatment plans with patch testing available for contact allergies. Psoriasis management includes the latest systemic treatments and biologics for severe cases. Our skin cancer screening service offers comprehensive mole mapping with digital dermoscopy for early detection of melanoma and other skin cancers. Rosacea patients benefit from trigger identification and specialized medical treatments. Hair loss conditions including androgenetic alopecia and alopecia areata are treated with trichoscopy examination and advanced therapies including PRP treatments. Medical dermatology services include skin biopsies, cryotherapy, and electrosurgery performed by our qualified dermatologist. Pediatric dermatology care is available for children with skin conditions, birthmarks, and genetic skin disorders. Cosmetic dermatology treatments include chemical peels, laser treatments, and advanced skin rejuvenation procedures. Our Harley Street location ensures prestigious medical care with convenient access in central London. The clinic maintains the highest standards with CQC registration and follows all medical guidelines for patient safety and care quality.</p>
        </div>
      </div>
    </>
  );
};

export default Dermatology;