
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Users, Handshake, MapPin, Clock, Phone, Mail, Star, Shield, Award, CheckCircle2, ExternalLink, Sparkles, Heart, BrainCircuit } from "lucide-react";

export default function HarleyStreetConsultingRooms() {
  const partnershipBenefits = [
    {
      icon: Users,
      title: "Patient Referral Network",
      description: "Access to our established patient base seeking premium aesthetic treatments"
    },
    {
      icon: Award,
      title: "Brand Association",
      description: "Partner with London's most trusted aesthetic medicine practice"
    },
    {
      icon: Shield,
      title: "Clinical Excellence",
      description: "Benefit from our reputation for safety and natural results"
    },
    {
      icon: Handshake,
      title: "Collaborative Care",
      description: "Joint treatment protocols and shared expertise"
    }
  ];

  const hiddenSEOContent = `
    Harley Street consulting rooms have long been the gold standard for medical practice in London. Whether you're searching for Harley Street consulting rooms for rent, private consulting rooms Harley Street, or medical consulting rooms Harley Street, the prestigious address represents excellence in healthcare delivery.

    Many practitioners seek Harley Street rooms to rent for their private practice, understanding that a Harley Street address carries significant prestige. The area has been synonymous with medical excellence for over a century, making Harley Street medical rooms highly sought after by specialists across all medical disciplines.

    Private practice consulting rooms in Harley Street offer the perfect environment for delivering premium healthcare services. From aesthetic medicine to specialist consultations, Harley Street consulting room rental provides practitioners with the infrastructure needed for successful private practice.

    The demand for Harley Street consultation rooms reflects the area's reputation as London's medical quarter. Practitioners looking for consulting rooms Harley Street rental understand that location plays a crucial role in patient perception and practice success.

    Medical professionals seeking Harley Street private consulting rooms benefit from the area's established healthcare ecosystem. The concentration of medical expertise creates a collaborative environment that enhances patient care and professional development.

    Harley Street clinic rooms offer state-of-the-art facilities designed specifically for medical practice. Whether you need consulting rooms in Harley Street for aesthetic procedures or general medical consultations, the area provides unparalleled professional credibility.

    The history of Harley Street as London's premier medical district makes it the natural choice for practitioners seeking to establish or expand their private practice. Harley Street medical consulting rooms combine tradition with modern healthcare delivery standards.
  `;

  return (
    <>
      <Helmet>
        <title>Harley Street Consulting Rooms - Premium Medical Practice Partnerships | CosmeDocs</title>
        <meta name="description" content="Partnership opportunities in prestigious Harley Street. Join London's leading aesthetic medicine practice for collaborative excellence." />
        <meta name="keywords" content="harley street consulting rooms, harley street medical rooms, private consulting rooms harley street, harley street rooms rent, medical consulting rooms london, aesthetic medicine partnerships" />
        <link rel="canonical" href="https://www.cosmedocs.com/harley-street-consulting-rooms" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Harley Street Consulting Rooms - Premium Medical Practice Partnerships" />
        <meta property="og:description" content="Partner with CosmeDocs in prestigious Harley Street. Access premium medical facilities and collaborative care opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cosmedocs.com/harley-street-consulting-rooms" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=630&fit=crop" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harley Street Consulting Rooms - Premium Medical Practice Partnerships" />
        <meta name="twitter:description" content="Partner with CosmeDocs in prestigious Harley Street for collaborative aesthetic medicine excellence." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=630&fit=crop" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "CosmeDocs Harley Street",
            "description": "Premium aesthetic medicine practice offering partnership opportunities in prestigious Harley Street location",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Harley Street",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "telephone": "+447735606447",
            "url": "https://www.cosmedocs.com/harley-street-consulting-rooms",
            "medicalSpecialty": "Aesthetic Medicine",
            "priceRange": "£££"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 text-white border-white/30 bg-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 mr-2" />
            Prestigious Harley Street Location
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Harley Street
            <span className="block text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Consulting Rooms
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Partner with London's most prestigious aesthetic medicine practice. 
            Experience collaborative excellence in the heart of medical London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
              <Handshake className="w-5 h-5 mr-2" />
              Partnership Opportunities
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              onClick={() => window.open('https://tenharleystreet.co.uk', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Room Lettings at Ten Harley Street
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Premium Medical Partnerships
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beyond Traditional Consulting Rooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While many seek Harley Street consulting rooms for rent, we offer something more valuable: 
              collaborative partnerships that elevate your practice and patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Harley Street Legacy</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p>Operating from prestigious Harley Street since 2007</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p>Over 1 million successful aesthetic procedures delivered</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p>London's most trusted aesthetic medicine practice</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p>Pioneering invisible art aesthetic philosophy</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop" 
                alt="Modern Harley Street medical building"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">Harley Street Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Partnership Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Room Rental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional consulting room rental offers space. Our partnerships offer transformation—
              for your practice, your patients, and your professional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CosmeDocs Philosophy */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 text-white border-white/30 bg-white/10">
                <Heart className="w-4 h-4 mr-2" />
                Our Philosophy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our aesthetics is invisible art
              </h2>
              <div className="text-xl leading-relaxed space-y-4 text-gray-300">
                <p className="font-semibold text-white">Bold • Natural • Always Your Way</p>
                <p>Aesthetic medicine by CosmeDocs is minimal.</p>
                <p>Quiet, not loud.</p>
                <p>Invisible, not exaggerated.</p>
                <p>It's transformation that speaks — without saying a word.</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=600&fit=crop" 
                alt="Elegant medical aesthetics"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm p-4 rounded-lg text-white">
                <BrainCircuit className="w-8 h-8 mb-2" />
                <div className="text-sm font-semibold">Invisible Art</div>
                <div className="text-xs text-gray-300">Natural Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Room Lettings */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Looking for Traditional Room Rental?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ten Harley Street - Premium Room Lettings
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              If you're specifically seeking traditional consulting room rental in Harley Street, 
              we recommend Ten Harley Street—London's premier medical letting specialist offering 
              fully equipped consultation rooms with prestigious Harley Street addresses.
            </p>
            
            <Card className="max-w-2xl mx-auto p-8 bg-white shadow-lg">
              <CardContent className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Premium Harley Street Locations</p>
                    <p className="text-gray-600 text-sm">Prestigious addresses with modern facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Flexible Rental Terms</p>
                    <p className="text-gray-600 text-sm">Hourly, daily, or long-term arrangements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Fully Equipped Rooms</p>
                    <p className="text-gray-600 text-sm">Professional medical-grade facilities</p>
                  </div>
                </div>
              </CardContent>
              <div className="mt-8">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://tenharleystreet.co.uk', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Ten Harley Street
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore Partnership?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join London's most prestigious aesthetic medicine practice. 
              Discover how our collaborative approach can transform your practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Partnership Enquiry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Direct Partnership Line</p>
                    <p className="text-gray-600">+44 77 3560 6447</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Partnership Enquiries</p>
                    <p className="text-gray-600">partnerships@cosmedocs.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Harley Street Location</p>
                    <p className="text-gray-600">Central London's Medical Quarter</p>
                  </div>
                </div>
              </CardContent>
              <div className="mt-8">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link to="/contact">
                    <Handshake className="w-5 h-5 mr-2" />
                    Start Partnership Discussion
                  </Link>
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Why Choose CosmeDocs?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mt-1" />
                  <div>
                    <p className="font-semibold">18+ Years Harley Street Excellence</p>
                    <p className="text-gray-600">Established reputation and patient trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">1M+ Successful Procedures</p>
                    <p className="text-gray-600">Proven track record of clinical excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold">Invisible Art Philosophy</p>
                    <p className="text-gray-600">Natural, transformative aesthetic medicine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Collaborative Care Network</p>
                    <p className="text-gray-600">Shared expertise and patient referrals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div 
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden' 
        }}
        aria-hidden="true"
      >
        <div>{hiddenSEOContent}</div>
      </div>
    </>
  );
}
