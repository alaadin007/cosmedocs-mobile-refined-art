
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Thank You - Message Received | Cosmedocs</title>
        <meta name="description" content="Thank you for contacting Cosmedocs. We have received your message and will get back to you soon." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.cosmedocs.co.uk/thank-you" />
      </Helmet>

      <div className="bg-black text-white py-24">
        <div className="page-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-gray-300 mb-6">
                We've received your message and will get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-accent p-8 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
              <div className="space-y-3 text-gray-300">
                <p>• Our team will review your enquiry within 24 hours</p>
                <p>• We'll contact you via your preferred method to discuss your needs</p>
                <p>• If requested, we'll schedule your consultation at our Harley Street clinic</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400">
                For urgent enquiries, please call us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+03330551503" 
                  className="text-white hover:text-gray-300 font-medium"
                >
                  0333 0551 503
                </a>
                <a 
                  href="tel:+08008600178" 
                  className="text-white hover:text-gray-300 font-medium"
                >
                  0800 860 0178
                </a>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                onClick={() => navigate('/')}
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Your Aesthetic Journey Begins Here</h2>
          <p>Thank you for choosing Cosmedocs for your aesthetic medicine needs. Our expert team at our prestigious Harley Street location is committed to providing you with exceptional care and natural-looking results that embody our philosophy of invisible art.</p>
          
          <p>At Cosmedocs, we believe that aesthetic medicine should be Bold, Natural, Always Your Way. Your inquiry represents the first step in a personalized journey toward enhanced confidence and natural beauty. Our practitioners will work closely with you to understand your aesthetic goals and recommend treatments that align with your vision.</p>
          
          <p>Our Harley Street clinic has been delivering outstanding aesthetic results since 2007, with over 1 million successful procedures. We specialize in minimal intervention techniques that create transformation without obvious changes - quiet confidence that speaks without saying a word.</p>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
