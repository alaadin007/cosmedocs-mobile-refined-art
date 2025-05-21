
import { useState } from "react";
import { motion } from "framer-motion";
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
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Open a CosmeDoc Clinic in Your City</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">Join the UK's most powerful aesthetics network — only for qualified medical professionals.</p>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why CosmeDoc Exists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                CosmeDoc exists to build a powerful alliance of medical-led aesthetic clinics 
                across the United Kingdom. Our mission is to create a network of clinics that are:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <span>Scalable through systematization and standardization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <span>Sustainable through shared resources and expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <span>Sellable with structure that builds real business value</span>
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
                    <p className="font-medium">National Brand Power</p>
                    <p className="text-gray-400 text-sm">Leverage an established aesthetic brand with over 15 years of history</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">⚙️</span>
                  <div>
                    <p className="font-medium">Operational Support</p>
                    <p className="text-gray-400 text-sm">Systemized operations, marketing, and admin assistance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">💰</span>
                  <div>
                    <p className="font-medium">Sellable Structure</p>
                    <p className="text-gray-400 text-sm">Build a business with real exit potential and valuation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">🎓</span>
                  <div>
                    <p className="font-medium">CPD Training</p>
                    <p className="text-gray-400 text-sm">Regular advanced technique workshops and clinical updates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">🛡️</span>
                  <div>
                    <p className="font-medium">Territory Protection</p>
                    <p className="text-gray-400 text-sm">Geographical exclusivity based on population size</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who Can Join?</h2>
            
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
              We do not accept non-medical practitioners.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Ongoing Advanced Training</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              CosmeDoc partners receive monthly, high-level workshops designed to keep you at the forefront 
              of aesthetic medicine and grow your clinical expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Injectables Masterclass", 
                  icon: "💉", 
                  description: "Advanced techniques for dermal fillers and neurotoxins" 
                },
                { 
                  title: "Thread Lifting", 
                  icon: "🧵", 
                  description: "PDO and PCL thread placement and complication management" 
                },
                { 
                  title: "Ultrasound-Guided Injections", 
                  icon: "🔍", 
                  description: "Precision placement using ultrasound visualization" 
                },
                { 
                  title: "Bio-stimulators", 
                  icon: "✨", 
                  description: "Collagen-inducing treatments and protocols" 
                },
                { 
                  title: "Medical Ethics", 
                  icon: "⚖️", 
                  description: "Ethical frameworks for aesthetic practice" 
                },
                { 
                  title: "Business Growth", 
                  icon: "📈", 
                  description: "Strategic clinic expansion and optimization" 
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
            <h2 className="text-3xl font-bold mb-8 text-center">Territory Integrity Guaranteed</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              We carefully manage territory distribution to ensure sustainable business growth for all partners.
              Our population-based approach ensures market integrity.
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
              All zones are geo-protected and reviewed regularly to prevent market oversaturation.
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
            <h2 className="text-3xl font-bold mb-6 text-center">What's Included from £500–£1,500/month</h2>
          
            <div className="bg-zinc-800 p-8 rounded-lg">
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
            <h2 className="text-3xl font-bold mb-8 text-center">Become a CosmeDoc Partner</h2>

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
                          placeholder="Share any additional information about your experience or interest" 
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
                    Our team will contact you within 5 business days to discuss territory availability.
                  </p>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Apply for Territory Review"}
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
