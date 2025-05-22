
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Form validation schema
const partnerFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  profession: z.string().min(1, "Please select your profession"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  location: z.string().min(1, "City and postcode are required"),
  message: z.string().optional(),
});

type PartnerFormValues = z.infer<typeof partnerFormSchema>;

const Partners = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      profession: "",
      registrationNumber: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = async (data: PartnerFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast.success("Application submitted successfully. Our team will review your details.");
    
    console.log("Form data:", data);
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Healthcare Partnership Opportunity | CosmeDoc Aesthetic Clinics</title>
        <meta name="description" content="Join CosmeDoc's exclusive healthcare partnership network for medical professionals. Build a profitable aesthetic clinic with our proven systems, training, and support. Not a franchise—a better opportunity." />
        <meta name="keywords" content="aesthetic clinic partnership, healthcare franchise alternative, medical aesthetic business, cosmetic clinic opportunity, doctor business partnership, aesthetic medicine training, medical practitioner business, CosmeDoc partnership" />
        <link rel="canonical" href="https://cosmedocs.com/partners" />
        {/* Schema markup for local business franchise opportunity */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "CosmeDoc Aesthetic Clinic Partnership",
            "description": "Premium healthcare partnership opportunity for medical professionals to open their own CosmeDoc aesthetic clinic.",
            "provider": {
              "@type": "Organization",
              "name": "CosmeDoc",
              "url": "https://cosmedocs.com"
            },
            "areaServed": "United Kingdom",
            "serviceType": "Medical Aesthetic Practice Development"
          }
        `}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Open a CosmeDoc Aesthetic Clinic in Your Territory</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">Join the UK's premier aesthetic medicine network — a healthcare partnership opportunity exclusively for qualified medical professionals.</p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply for a Territory
          </Button>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-zinc-900 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The CosmeDoc Healthcare Partnership Model</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                CosmeDoc has created a powerful alliance of medical-led aesthetic clinics 
                across the United Kingdom. Unlike a traditional healthcare franchise, our partnership model offers:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <span>Greater clinical autonomy while maintaining brand excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <span>Systematized operations with lower entry costs than franchising</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <span>A structure that builds real equity and sellable business value</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-xl mr-3">🏆</span>
                  <div>
                    <p className="font-medium">National Brand Authority</p>
                    <p className="text-gray-400 text-sm">Leverage an established aesthetic medicine brand with over 15 years of clinical excellence</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">⚙️</span>
                  <div>
                    <p className="font-medium">Turnkey Business Systems</p>
                    <p className="text-gray-400 text-sm">Complete operations, marketing, and administrative infrastructure without franchise fees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">💰</span>
                  <div>
                    <p className="font-medium">Equity-Building Structure</p>
                    <p className="text-gray-400 text-sm">Create a healthcare business asset with real exit potential and valuation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">🎓</span>
                  <div>
                    <p className="font-medium">Advanced Clinical Training</p>
                    <p className="text-gray-400 text-sm">Regular aesthetic medicine workshops and cutting-edge technique updates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">🛡️</span>
                  <div>
                    <p className="font-medium">Geographic Protection</p>
                    <p className="text-gray-400 text-sm">Exclusive territory rights based on population metrics</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-zinc-800 p-8 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Healthcare Professionals Eligible for Partnership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>GMC-registered Doctors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>GDC-registered Dentists</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>NMC-registered Nurses (with prescribing rights)</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Pharmacist Prescribers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Independent Prescribers (qualified and insured for aesthetics)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="mt-6 text-center text-amber-300 font-medium">
              Our healthcare partnership model is exclusively for medical professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 bg-zinc-900 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Continuous Professional Development</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              CosmeDoc partners receive exclusive, high-level aesthetic medicine workshops designed to keep you at the forefront 
              of clinical practice and grow your expertise in the field.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Advanced Injectables", 
                  icon: "💉", 
                  description: "Master techniques for premium dermal fillers and next-generation neurotoxins" 
                },
                { 
                  title: "Thread Lifting Mastery", 
                  icon: "🧵", 
                  description: "Advanced PDO and PCL thread placement with complication management protocols" 
                },
                { 
                  title: "Ultrasound-Guided Procedures", 
                  icon: "🔍", 
                  description: "Precision placement using cutting-edge ultrasound visualization technology" 
                },
                { 
                  title: "Bio-stimulator Therapies", 
                  icon: "✨", 
                  description: "Latest collagen-inducing treatments and combination protocols" 
                },
                { 
                  title: "Medical Ethics & Governance", 
                  icon: "⚖️", 
                  description: "Best practice frameworks for aesthetic medicine practice" 
                },
                { 
                  title: "Healthcare Business Growth", 
                  icon: "📈", 
                  description: "Strategic clinic expansion and healthcare practice optimization" 
                }
              ].map((workshop, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-colors">
                  <div className="text-3xl mb-4">{workshop.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{workshop.title}</h3>
                  <p className="text-gray-400 text-sm">{workshop.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Territory Protection Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Protected Territory Allocation</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Unlike traditional healthcare franchises, our partnership model carefully manages territory distribution to ensure sustainable growth. 
              Our population-based approach guarantees market integrity for all partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { population: "<100K", clinics: "1 clinic" },
                { population: "100K–300K", clinics: "Max 2 clinics" },
                { population: "300K–500K", clinics: "3–4 clinics" },
                { population: "500K–1M", clinics: "4–6 clinics" },
                { population: "1M+", clinics: "Up to 10 clinics" }
              ].map((territory, index) => (
                <div key={index} className="bg-zinc-800 p-5 rounded-lg text-center">
                  <p className="font-medium mb-2">{territory.population}</p>
                  <p className="text-gray-300 text-sm">{territory.clinics}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm">
              All territories are geo-protected and reviewed regularly to prevent market oversaturation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Inclusions */}
      <section className="py-16 bg-zinc-900 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Partnership Benefits: £500–£1,500/month</h2>
          
            <div className="bg-zinc-800 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Use of CosmeDoc brand & national identity</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Clinic microsite with built-in booking</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>WhatsApp and SMS automation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Newsletter agent & follow-up system</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Admin support and clinical dashboard</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Access to monthly workshops</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Appearance in national directory and campaigns</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Ongoing business development support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-8 rounded-lg border border-amber-500/20">
              <h3 className="text-xl font-semibold mb-6 text-center">Healthcare Partnership Investment</h3>
              
              <div className="space-y-6">
                <div className="bg-zinc-800/50 p-5 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Complete Healthcare Partnership Package</h4>
                  <p className="text-amber-300 text-xl font-semibold mb-2">£20,000</p>
                  <p className="text-gray-300">Our comprehensive program for medical practitioners new to aesthetic medicine includes extensive clinical training, business mentorship, and all systems required to launch a successful healthcare practice. Flexible monthly payment options available to suit your financial planning.</p>
                </div>
                
                <div className="bg-zinc-800/50 p-5 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Experienced Medical Practitioners</h4>
                  <p className="text-gray-300">Already practicing in aesthetic medicine? We value your expertise. Your partnership investment will be customized based on your existing qualifications and clinical experience, ensuring you only invest in the additional training and systems needed to meet CosmeDoc's exceptional standards.</p>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-4">All partnership packages include flexible monthly payment structures</p>
                  <Button 
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8"
                  >
                    Discuss Partnership Options
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions About Our Healthcare Partnership</h2>
            
            <Accordion type="single" collapsible className="bg-zinc-800 rounded-lg p-4">
              <AccordionItem value="item-1" className="border-b border-zinc-700">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="text-left font-medium">I work in a clinic—can I still join this partnership?</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-300">
                  Absolutely! We enthusiastically welcome practitioners from all work environments. Our partnership is with you as a qualified medical professional, not necessarily with your premises. Your current employment situation has no impact on your eligibility to become a successful CosmeDoc partner and develop your own healthcare business.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-zinc-700">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="text-left font-medium">I don't have my own premises. Is that a problem?</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-300">
                  Not at all! In fact, our partnership model is specifically designed to minimize overhead costs. Through years of experience, we've discovered that starting without dedicated space is often the optimal approach for new healthcare businesses. You'll have tremendous flexibility to partner with local clinics, medical centers, rent treatment rooms, or utilize office spaces as needed. You can even offer premium house calls to clients – giving you multiple pathways to build your medical aesthetic practice with minimal initial investment.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-zinc-700">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="text-left font-medium">Who is this healthcare partnership best suited for?</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-300">
                  This partnership offers an exceptional opportunity for healthcare practitioners who have completed basic aesthetic training and are looking for an accelerated path to business success. If you're a doctor, dentist, nurse prescriber or pharmacist wanting to build an aesthetic medicine practice without the restrictive structure of a traditional healthcare franchise, this is perfect for you. Even if you're new to aesthetics, we enthusiastically welcome your application! We'll customize the training program to match your experience level, ensuring you receive comprehensive support to thrive in the aesthetic medicine field while building a valuable business asset.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-zinc-700">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="text-left font-medium">How does this differ from a typical healthcare franchise?</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-300">
                  Our partnership model offers the best elements of a healthcare franchise system without the restrictive overhead and high ongoing fees. As a CosmeDoc partner, you'll benefit from our established brand, proven systems, and extensive training while maintaining greater clinical and business autonomy. You'll build equity in your own healthcare business rather than simply operating under a franchise agreement. Additionally, our investment structure is designed to be more accessible than traditional healthcare franchises, with lower entry costs and more flexible operational requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="text-left font-medium">What ongoing support will I receive as a partner?</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-300">
                  CosmeDoc partners receive comprehensive, ongoing support that exceeds typical healthcare franchise arrangements. This includes regular clinical training workshops, marketing assistance, administrative systems, patient acquisition strategies, and business development guidance. Our partnership model focuses on building your capabilities as both a clinician and business owner, ensuring you have every tool needed to develop a thriving aesthetic medicine practice with real equity value. Partners also benefit from our professional community, creating opportunities for collaboration and knowledge sharing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Apply for a CosmeDoc Healthcare Partnership</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Dr. Jane Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="07123456789" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="profession"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profession</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your profession" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="doctor">Doctor</SelectItem>
                            <SelectItem value="dentist">Dentist</SelectItem>
                            <SelectItem value="nurse">Nurse</SelectItem>
                            <SelectItem value="pharmacist">Pharmacist</SelectItem>
                            <SelectItem value="prescriber">Independent Prescriber</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="registrationNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GMC/GDC/NMC/GPhC Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Registration number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City & Postcode</FormLabel>
                        <FormControl>
                          <Input placeholder="London, W1G 9PF" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share any additional information about your experience or interest in our healthcare partnership" 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <p className="text-gray-400 text-sm mb-4">
                    Applications are reviewed based on medical registration and experience.
                    Our partnership team will contact you within 5 business days to discuss territory availability.
                  </p>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Apply for Partnership Consideration"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
