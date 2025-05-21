
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Bookmark, Calendar, Shield } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number required" }),
  profession: z.string({ required_error: "Please select your profession" }),
  regNumber: z.string().min(1, { message: "Registration number required" }),
  location: z.string().min(1, { message: "Location required" }),
  message: z.string().optional(),
});

export default function Partner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      profession: "",
      regNumber: "",
      location: "",
      message: "",
    },
  });
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast.success("Application submitted successfully. We'll be in touch soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Open a CosmeDoc Clinic in Your City</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Join the UK's most powerful aesthetics network — only for qualified medical professionals.</p>
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-black hover:bg-gray-200 rounded-full">
              Apply for a Territory
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why CosmeDoc Exists
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                CosmeDoc exists to build a powerful alliance of medical-led aesthetic clinics that are scalable, sustainable, and sellable. We're creating a network of elite practitioners who deliver exceptional results while building valuable businesses.
              </p>
              <p className="text-gray-300">
                By joining forces, we elevate standards across the aesthetics industry and build individual clinic value through shared resources, expertise and brand recognition.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white bg-gray-800 p-2 rounded-full">✓</span>
                  <span>National brand power and recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white bg-gray-800 p-2 rounded-full">✓</span>
                  <span>Complete operational support system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white bg-gray-800 p-2 rounded-full">✓</span>
                  <span>Sellable business structure with growth path</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white bg-gray-800 p-2 rounded-full">✓</span>
                  <span>Continuous professional development and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white bg-gray-800 p-2 rounded-full">✓</span>
                  <span>Protected territory exclusivity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Eligibility Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Join?</h2>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <ul className="space-y-4 text-lg text-left">
                <li className="flex items-center gap-3">
                  <span className="text-white bg-gray-700 p-1 rounded-full">✓</span>
                  <span>GMC-registered Doctors</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white bg-gray-700 p-1 rounded-full">✓</span>
                  <span>GDC-registered Dentists</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white bg-gray-700 p-1 rounded-full">✓</span>
                  <span>NMC-registered Nurses (with prescribing rights)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white bg-gray-700 p-1 rounded-full">✓</span>
                  <span>Pharmacist Prescribers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white bg-gray-700 p-1 rounded-full">✓</span>
                  <span>Independent Prescribers (qualified and insured for aesthetics)</span>
                </li>
              </ul>
              <p className="mt-8 text-red-300 font-medium">We do not accept non-medical practitioners.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Workshop Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ongoing Advanced Training</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              CosmeDoc partners receive monthly, high-level workshops designed to keep you at the forefront 
              of aesthetic medicine and build exceptional clinical skill.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemAnimation} className="bg-gray-900 rounded-lg p-6">
              <div className="h-14 w-14 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Injectables</h3>
              <p className="text-gray-400">Master the latest injectable techniques through hands-on training with experienced practitioners.</p>
            </motion.div>
            
            <motion.div variants={itemAnimation} className="bg-gray-900 rounded-lg p-6">
              <div className="h-14 w-14 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Thread Techniques</h3>
              <p className="text-gray-400">Learn cutting-edge PDO thread application methods for facial lifting and contouring.</p>
            </motion.div>
            
            <motion.div variants={itemAnimation} className="bg-gray-900 rounded-lg p-6">
              <div className="h-14 w-14 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ultrasound-Guided Injections</h3>
              <p className="text-gray-400">Develop precision with advanced ultrasound-guided injection techniques for optimal safety and results.</p>
            </motion.div>
            
            <motion.div variants={itemAnimation} className="bg-gray-900 rounded-lg p-6">
              <div className="h-14 w-14 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bio-Stimulators</h3>
              <p className="text-gray-400">Explore the science and application of cutting-edge bio-stimulator treatments for skin rejuvenation.</p>
            </motion.div>
            
            <motion.div variants={itemAnimation} className="bg-gray-900 rounded-lg p-6">
              <div className="h-14 w-14 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Ethics</h3>
              <p className="text-gray-400">Stay current with the highest standards of medical ethics in the aesthetics industry.</p>
            </motion.div>
            
            <motion.div variants={itemAnimation} className="bg-gray-900 rounded-lg p-6">
              <div className="h-14 w-14 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
              <p className="text-gray-400">Develop strategies for clinic growth, patient retention, and building a sellable business asset.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Territory Protection Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Territory Integrity Guaranteed</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Your investment is protected through our careful territory management system.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto h-10 w-10 mb-4 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">Population &lt;100K</h3>
                <p className="text-3xl font-bold">1</p>
                <p className="text-sm text-gray-400">clinic maximum</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto h-10 w-10 mb-4 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">100K-300K</h3>
                <p className="text-3xl font-bold">2</p>
                <p className="text-sm text-gray-400">clinics maximum</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto h-10 w-10 mb-4 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">300K-500K</h3>
                <p className="text-3xl font-bold">3-4</p>
                <p className="text-sm text-gray-400">clinics maximum</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto h-10 w-10 mb-4 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">500K-1M</h3>
                <p className="text-3xl font-bold">4-6</p>
                <p className="text-sm text-gray-400">clinics maximum</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto h-10 w-10 mb-4 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">1M+</h3>
                <p className="text-3xl font-bold">Up to 10</p>
                <p className="text-sm text-gray-400">clinics maximum</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">All zones are geo-protected and regularly reviewed to prevent oversaturation.</p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included from £500–£1,500/month</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="bg-gray-900 rounded-lg p-6">
              <Bookmark className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Brand Power</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Use of CosmeDoc brand & national identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Appearance in national campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Professional branding materials</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <Shield className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Digital Presence</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Clinic microsite with built-in booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">WhatsApp and SMS automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Newsletter agent & follow-up system</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <Calendar className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Business Support</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Admin support and clinical dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Access to monthly workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span className="text-gray-300">Listing in national directory</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a CosmeDoc Partner</h2>
            <p className="text-gray-300">
              Complete the form below to begin your application process. Our team will review your credentials and contact you to discuss territory availability.
            </p>
          </motion.div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Jane Smith" {...field} className="bg-gray-700 border-gray-600" />
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
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="doctor@example.com" type="email" {...field} className="bg-gray-700 border-gray-600" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+44 123 456 7890" {...field} className="bg-gray-700 border-gray-600" />
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
                          <FormLabel className="text-white">Profession</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-700 border-gray-600">
                                <SelectValue placeholder="Select profession" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-700">
                              <SelectItem value="doctor">Doctor (GMC)</SelectItem>
                              <SelectItem value="dentist">Dentist (GDC)</SelectItem>
                              <SelectItem value="nurse">Nurse (NMC)</SelectItem>
                              <SelectItem value="pharmacist">Pharmacist</SelectItem>
                              <SelectItem value="prescriber">Independent Prescriber</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="regNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Registration Number</FormLabel>
                          <FormControl>
                            <Input placeholder="GMC/GDC/NMC/GPhC Number" {...field} className="bg-gray-700 border-gray-600" />
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
                          <FormLabel className="text-white">City & Postcode</FormLabel>
                          <FormControl>
                            <Input placeholder="London, W1G 9PF" {...field} className="bg-gray-700 border-gray-600" />
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
                        <FormLabel className="text-white">Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your current practice and interests..." 
                            className="bg-gray-700 border-gray-600 min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-sm text-gray-400 mt-4">
                    <p>Applications are reviewed based on medical registration and experience.</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-black hover:bg-gray-200" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Apply for Territory Review"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
