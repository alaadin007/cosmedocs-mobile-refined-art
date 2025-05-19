
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
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
    </div>
  );
};

export default Contact;
