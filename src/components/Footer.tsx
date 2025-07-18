import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Mobile Touch Area */}
      <div className="md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-4 px-6 border-t border-gray-800 flex items-center justify-between text-white hover:bg-gray-900 transition-colors"
        >
          <span className="text-lg font-semibold">Find Us & Connect</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp className="h-5 w-5" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-8 pb-16 px-6">
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">COSMEDOCS</h3>
                    <p className="text-gray-400 text-sm mb-4">Cosmetic Doctors</p>
                    <p className="text-gray-400 text-sm">since 2007, 1M+ Injections</p>
                  </div>
                  
                  <nav aria-label="Footer Navigation">
                    <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                      <li><Link to="/treatments" className="text-gray-400 hover:text-white text-sm">Treatments</Link></li>
                      <li><Link to="/lip-fillers" className="text-gray-400 hover:text-white text-sm">Lip Fillers</Link></li>
                      <li><Link to="/lip-filler-dissolve" className="text-gray-400 hover:text-white text-sm">Lip Filler Dissolve</Link></li>
                      <li><Link to="/trigger-point-botox" className="text-gray-400 hover:text-white text-sm">Trigger Point Botox</Link></li>
                      <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                      <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
                      <li><Link to="/booking" className="text-gray-400 hover:text-white text-sm">Book Appointment</Link></li>
                      <li><Link to="/partners" className="text-gray-400 hover:text-white text-sm">Become a Cosmedocs</Link></li>
                      <li><Link to="/treatments-summary-chinese" className="text-gray-400 hover:text-white text-sm">中文治疗指南</Link></li>
                      <li><Link to="/treatments-summary-arabic" className="text-gray-400 hover:text-white text-sm">دليل العلاجات</Link></li>
                    </ul>
                  </nav>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Contact</h3>
                    <address className="not-italic text-gray-400 text-sm">
                      <p className="mb-2">Cosmedocs Clinic</p>
                      <p className="mb-2">10 Harley Street</p>
                      <p className="mb-2">London, W1G 9PF</p>
                      <p className="mb-2">United Kingdom</p>
                      <div className="pt-2">
                        <a href="mailto:info@cosmedocs.com" className="block mb-2 hover:text-white">
                          info@cosmedocs.com
                        </a>
                        <a href="tel:+03330551503" className="block mb-2 hover:text-white">
                          0333 0551 503
                        </a>
                        <a href="tel:+08008600178" className="block hover:text-white">
                          0800 860 0178
                        </a>
                      </div>
                    </address>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs space-y-2">
                  <p>© {new Date().getFullYear()} Cosmedocs Ltd. All rights reserved.</p>
                  <p className="text-xs">
                    Disclaimer: Individual results may vary. Cosmedocs provides aesthetic treatments for enhancement purposes. 
                    Please consult with our qualified practitioners for professional medical advice. 
                    This website is for informational purposes only and does not constitute medical advice.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Footer (unchanged) */}
      <div className="hidden md:block pt-16 pb-8">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">COSMEDOCS</h3>
              <p className="text-gray-400 text-sm mb-4">Cosmetic Doctors</p>
              <p className="text-gray-400 text-sm">since 2007, 1M+ Injections</p>
            </div>
            
            <nav aria-label="Footer Navigation">
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                <li><Link to="/treatments" className="text-gray-400 hover:text-white text-sm">Treatments</Link></li>
                <li><Link to="/lip-fillers" className="text-gray-400 hover:text-white text-sm">Lip Fillers</Link></li>
                <li><Link to="/lip-filler-dissolve" className="text-gray-400 hover:text-white text-sm">Lip Filler Dissolve</Link></li>
                <li><Link to="/trigger-point-botox" className="text-gray-400 hover:text-white text-sm">Trigger Point Botox</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
                <li><Link to="/booking" className="text-gray-400 hover:text-white text-sm">Book Appointment</Link></li>
                <li><Link to="/partners" className="text-gray-400 hover:text-white text-sm">Become a Cosmedocs</Link></li>
                <li><Link to="/treatments-summary-chinese" className="text-gray-400 hover:text-white text-sm">中文治疗指南</Link></li>
                <li><Link to="/treatments-summary-arabic" className="text-gray-400 hover:text-white text-sm">دليل العلاجات</Link></li>
              </ul>
            </nav>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <address className="not-italic text-gray-400 text-sm">
                <p className="mb-2">Cosmedocs Clinic</p>
                <p className="mb-2">10 Harley Street</p>
                <p className="mb-2">London, W1G 9PF</p>
                <p className="mb-2">United Kingdom</p>
                <div className="pt-2">
                  <a href="mailto:info@cosmedocs.com" className="block mb-2 hover:text-white">
                    info@cosmedocs.com
                  </a>
                  <a href="tel:+03330551503" className="block mb-2 hover:text-white">
                    0333 0551 503
                  </a>
                  <a href="tel:+08008600178" className="block hover:text-white">
                    0800 860 0178
                  </a>
                </div>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-xs space-y-3">
            <p>© {new Date().getFullYear()} Cosmedocs Ltd. All rights reserved.</p>
            <p className="text-xs max-w-4xl mx-auto">
              Disclaimer: Individual results may vary. Cosmedocs provides aesthetic treatments for enhancement purposes. 
              Please consult with our qualified practitioners for professional medical advice. 
              This website is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
