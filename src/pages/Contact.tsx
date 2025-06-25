import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const navigate = useNavigate();
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
      // Insert form data into Supabase - using type assertion for temporary compatibility
      const { error } = await (supabase as any)
        .from('contact_us')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message,
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your message. Please try again.",
          variant: "destructive",
        });
      } else {
        // Redirect to thank you page instead of showing toast
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
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
        <title>Contact Cosmedocs - Get in Touch | Harley Street Aesthetic Clinic</title>
        <meta name="description" content="Contact Cosmedocs aesthetic clinic on Harley Street, London. Book consultations, ask questions about treatments, or get expert advice. Call 0333 0551 503 or 0800 860 0178." />
        <meta name="keywords" content="contact cosmedocs, harley street clinic contact, aesthetic clinic london, book consultation, cosmetic treatment enquiry" />
        <link rel="canonical" href="https://cosmedocs.com/contact" />
        
        <meta property="og:title" content="Contact Cosmedocs - Harley Street Aesthetic Clinic" />
        <meta property="og:description" content="Get in touch with Cosmedocs for expert aesthetic treatments. Professional consultations available. Contact us today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmedocs.com/contact" />
      </Helmet>

      <div className="bg-black text-white py-24">
        <div className="page-container">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Have questions about our treatments? Ready to book a consultation? Get in touch with our team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-accent border-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-accent border-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-accent border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-accent border-accent resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Visit Our Clinic</h2>
                <div className="bg-accent p-6 rounded-lg mb-8">
                  <h3 className="font-medium mb-2">Opening Hours</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 - 19:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Contact Information</h3>
                  <address className="not-italic text-gray-300 space-y-2">
                    <p>Cosmedocs Clinic</p>
                    <p>10 Harley Street</p>
                    <p>London, W1G 9PF</p>
                    <p>United Kingdom</p>
                    <div className="pt-2">
                      <a href="mailto:info@cosmedocs.com" className="block hover:text-white">
                        info@cosmedocs.com
                      </a>
                      <a href="tel:+03330551503" className="block hover:text-white">
                        0333 0551 503
                      </a>
                      <a href="tel:+08008600178" className="block hover:text-white">
                        0800 860 0178
                      </a>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sr-only">
          <h2>Expert Aesthetic Consultations at Cosmedocs</h2>
          <p>Cosmedocs is London's premier aesthetic clinic located on prestigious Harley Street. Our expert team of aesthetic practitioners has been providing exceptional cosmetic treatments since 2007, with over 1 million successful procedures performed. We specialize in advanced aesthetic medicine that delivers natural-looking results through minimal intervention techniques.</p>
          
          <h3>Why Choose Cosmedocs for Your Aesthetic Journey</h3>
          <p>Our clinic embodies the philosophy that aesthetic medicine should be invisible art - Bold, Natural, Always Your Way. We believe that transformation should speak without saying a word, creating quiet confidence rather than obvious changes. Our approach to aesthetic medicine is minimal, focusing on enhancement rather than alteration.</p>
          
          <p>When you contact Cosmedocs, you're reaching out to a team that understands the importance of personalized care. Every consultation is tailored to your unique needs, aesthetic goals, and lifestyle. Our practitioners take time to understand your vision and recommend treatments that align with your desired outcomes while maintaining natural-looking results.</p>
          
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
