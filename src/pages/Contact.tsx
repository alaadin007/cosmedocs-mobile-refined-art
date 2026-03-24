
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from 'react-helmet-async';
import { z } from "zod";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Instagram,
  ArrowRight,
  Send,
} from "lucide-react";
import { generateSEOMetadata } from '@/utils/seo';

const InlineAIChat = lazy(() => import("@/components/InlineAIChat"));

// Input validation schema
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[0-9\s\-\+\(\)]*$/, { message: "Please enter a valid phone number" })
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

const whatsappNumber = "+447735606447";
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello, I'm interested in aesthetic treatments at CosmeDocs.`;
const bookingUrl = "https://med.as.me/harleystreet";
const instagramUrl = "https://www.instagram.com/cosmedocs/";

const Contact = () => {
  const navigate = useNavigate();
  const seoData = generateSEOMetadata(
    "Contact Cosmedocs | Harley Street Aesthetic Clinic London",
    "Get in touch with Cosmedocs. Book a consultation, ask a question, or message us on WhatsApp. Harley Street, London since 2007.",
    "/contact"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validationResult = contactFormSchema.safeParse(formData);
      
      if (!validationResult.success) {
        toast({
          title: "Validation Error",
          description: validationResult.error.errors[0].message,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const validData = validationResult.data;
      const { error } = await supabase
        .from('contact_us')
        .insert([
          {
            name: validData.name,
            email: validData.email,
            phone: validData.phone || null,
            message: validData.message,
          }
        ]);

      if (error) {
        toast({
          title: "Error",
          description: "There was an error submitting your message. Please try again.",
          variant: "destructive",
        });
      } else {
        navigate('/thank-you');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://cosmedocs.com/#organization",
                name: "Cosmedocs",
                url: "https://cosmedocs.com/",
                telephone: ["+443330551503", "+448008600178"],
                email: "info@cosmedocs.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "10 Harley Street",
                  addressLocality: "London",
                  postalCode: "W1G 9PF",
                  addressCountry: "GB",
                },
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
                ],
              },
              {
                "@type": "ContactPage",
                "@id": "https://cosmedocs.com/contact/",
                name: "Contact Cosmedocs",
                isPartOf: { "@id": "https://cosmedocs.com/#website" },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cosmedocs.com/" },
                  { "@type": "ListItem", position: 2, name: "Contact", item: "https://cosmedocs.com/contact/" },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.04] blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#C9A050] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Contact</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Get In Touch
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                Whether you'd like to book a consultation, ask a question, or simply learn more about our treatments — 
                we're here to help. Reach us however suits you best.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Quick Action Cards ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Book Direct */}
            <motion.a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="group bg-[#C9A050] hover:bg-[#B8903F] rounded-2xl p-6 transition-all duration-300"
            >
              <Calendar className="w-7 h-7 text-black mb-4" />
              <p className="text-base font-medium text-black mb-1">Book Direct</p>
              <p className="text-sm text-black/60">
                Schedule your consultation online
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-emerald-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <MessageSquare className="w-7 h-7 text-emerald-400 mb-4" />
              <p className="text-base font-medium text-white mb-1">WhatsApp</p>
              <p className="text-sm text-white/50">
                Message us directly on WhatsApp
              </p>
            </motion.a>

            {/* Call Us */}
            <motion.a
              href="tel:+443330551503"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 transition-all duration-300"
            >
              <Phone className="w-7 h-7 text-[#C9A050] mb-4" />
              <p className="text-base font-medium text-white mb-1">Call Us</p>
              <p className="text-sm text-white/50">
                0333 0551 503
              </p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-pink-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <Instagram className="w-7 h-7 text-pink-400 mb-4" />
              <p className="text-base font-medium text-white mb-1">Instagram</p>
              <p className="text-sm text-white/50">
                @cosmedocs
              </p>
            </motion.a>
          </div>
        </section>

        {/* ── Main Content: Form + Info ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            
            {/* ── Ask a Question Form (wider) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-5 h-5 text-[#C9A050]" />
                  <h2 className="text-xl font-medium text-white">Ask a Question</h2>
                </div>
                <p className="text-sm text-white/50 font-extralight mb-8">
                  Send us your question directly and our team will get back to you as soon as possible — 
                  usually within a few hours during clinic hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl h-12"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                      Phone <span className="text-white/30">(optional)</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7XXX XXX XXX"
                      className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                      Your Question
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your enquiry or what treatment you're interested in..."
                      className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#C9A050] hover:bg-[#B8903F] text-black font-medium rounded-full h-12 text-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Your Question"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>

                  <p className="text-xs text-white/30 text-center">
                    Your message goes directly to our clinic team — no AI, no chatbot. A real person will respond.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* ── Right Column: Clinic Info ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Clinic Location */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#C9A050]" />
                  <p className="text-sm font-medium text-white uppercase tracking-wider">Our Clinic</p>
                </div>
                <address className="not-italic text-sm text-white/60 font-extralight space-y-1 mb-4">
                  <p className="text-white/80 font-medium">Cosmedocs</p>
                  <p>10 Harley Street</p>
                  <p>London, W1G 9PF</p>
                  <p>United Kingdom</p>
                </address>
                <div className="bg-white/[0.02] border border-[#C9A050]/20 rounded-xl p-4 mb-4">
                  <p className="text-xs text-[#C9A050] font-medium uppercase tracking-wider mb-1.5">Completely Discreet</p>
                  <p className="text-xs text-white/50 leading-relaxed">
                    No outside signage. No clinic branding on the door. Our Harley Street location is intentionally unmarked — your privacy is absolute. Trusted by public figures, celebrities and high-profile patients who require total confidentiality.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=10+Harley+Street+London+W1G+9PF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C9A050] hover:text-[#D4AF61] transition-colors"
                >
                  View on Google Maps
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Opening Hours */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#C9A050]" />
                  <p className="text-sm font-medium text-white uppercase tracking-wider">Opening Hours</p>
                </div>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex justify-between text-white/60">
                    <span>Monday – Friday</span>
                    <span className="text-white/80">9:00 – 19:00</span>
                  </li>
                  <li className="flex justify-between text-white/60">
                    <span>Saturday</span>
                    <span className="text-white/80">10:00 – 16:00</span>
                  </li>
                  <li className="flex justify-between text-white/60">
                    <span>Sunday</span>
                    <span className="text-white/40">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Contact Details */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-[#C9A050]" />
                  <p className="text-sm font-medium text-white uppercase tracking-wider">Direct Lines</p>
                </div>
                <div className="space-y-3">
                  <a href="tel:+443330551503" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                    <Phone className="w-4 h-4 text-white/30 group-hover:text-[#C9A050] transition-colors" />
                    0333 0551 503
                  </a>
                  <a href="tel:+448008600178" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                    <Phone className="w-4 h-4 text-white/30 group-hover:text-[#C9A050] transition-colors" />
                    0800 860 0178
                  </a>
                  <a href="mailto:info@cosmedocs.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                    <Mail className="w-4 h-4 text-white/30 group-hover:text-[#C9A050] transition-colors" />
                    info@cosmedocs.com
                  </a>
                </div>
              </div>

              {/* Social & Connect */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Instagram className="w-5 h-5 text-[#C9A050]" />
                  <p className="text-sm font-medium text-white uppercase tracking-wider">Connect</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-pink-500/30 rounded-xl px-4 py-2.5 text-sm text-white/60 hover:text-white transition-all"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    @cosmedocs
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-emerald-500/30 rounded-xl px-4 py-2.5 text-sm text-white/60 hover:text-white transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WhatsApp
                  </a>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-xl px-4 py-2.5 text-sm text-white/60 hover:text-white transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#C9A050]" />
                    Book Online
                  </a>
                </div>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                {["Since 2007", "Harley Street", "Doctor-Led"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── AI Aesthetic Intelligence Section ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                Instant Answers
              </p>
              <p className="text-2xl sm:text-3xl font-extralight text-white mb-3">
                Aesthetic Intelligence
              </p>
              <p className="text-sm text-white/50 font-extralight max-w-lg mx-auto">
                Get instant answers about treatments, pricing, and booking. Our AI assistant is trained on 
                our full treatment portfolio and can help you find exactly what you need.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Suspense fallback={
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl h-[520px] flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#C9A050]/30 border-t-[#C9A050] rounded-full animate-spin" />
                </div>
              }>
                <InlineAIChat />
              </Suspense>
            </div>
          </motion.div>
        </section>

        {/* ── Hidden SEO content ── */}
        <div className="sr-only" aria-hidden="true">
          <h2>Expert Aesthetic Consultations at Cosmedocs</h2>
          <p>Cosmedocs is London's premier aesthetic clinic located on prestigious Harley Street. Our expert team of aesthetic practitioners has been providing exceptional cosmetic treatments since 2007, with over 1 million successful procedures performed. We specialise in advanced aesthetic medicine that delivers natural-looking results through minimal intervention techniques.</p>
          
          <h3>Why Choose Cosmedocs for Your Aesthetic Journey</h3>
          <p>Our clinic embodies the philosophy that aesthetic medicine should be invisible art — Bold, Natural, Always Your Way. We believe that transformation should speak without saying a word, creating quiet confidence rather than obvious changes. Our approach to aesthetic medicine is minimal, focusing on enhancement rather than alteration.</p>
          
          <p>When you contact Cosmedocs, you're reaching out to a team that understands the importance of personalised care. Every consultation is tailored to your unique needs, aesthetic goals, and lifestyle. Our practitioners take time to understand your vision and recommend treatments that align with your desired outcomes while maintaining natural-looking results.</p>
          
          <h3>Comprehensive Treatment Consultations</h3>
          <p>Our contact process ensures you receive the most appropriate guidance for your aesthetic journey. Whether you're interested in dermal fillers, Botox treatments, thread lifts, or skin rejuvenation procedures, our team provides detailed consultations that cover all aspects of your treatment plan. We discuss expected outcomes, treatment timelines, aftercare requirements, and answer all your questions thoroughly.</p>
          
          <p>During your initial contact, we gather information about your aesthetic concerns, medical history, and treatment preferences. This allows us to prepare for your consultation and ensure you receive the most relevant information about treatments that could benefit you. Our team is committed to transparent communication about all procedures, including potential risks, benefits, and realistic expectations.</p>
          
          <h3>Advanced Aesthetic Medicine Expertise</h3>
          <p>Cosmedocs practitioners are extensively trained in the latest aesthetic medicine techniques and technologies. Our Harley Street location reflects our commitment to providing premium aesthetic services in one of London's most prestigious medical districts. We maintain the highest standards of clinical excellence while ensuring patient comfort and satisfaction throughout every interaction.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
