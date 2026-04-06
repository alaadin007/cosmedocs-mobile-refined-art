import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Block */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold tracking-tight">COSMEDOCS</h3>
              <p className="text-sm text-[#C9A050] mt-1">
                Harley Street Doctors
                <span className="inline-block mx-1 opacity-70">│</span>
                Advanced Aesthetic Medicine
              </p>
            </Link>
            
            <div className="flex items-start gap-2 text-sm text-white/50 mb-6">
              <MapPin className="h-4 w-4 mt-0.5 text-[#C9A050]/70 flex-shrink-0" />
              <div>
                <p>8–10 Harley Street</p>
                <p>London W1G 9PF</p>
                <p>United Kingdom</p>
              </div>
            </div>
            
            {/* Trust Line */}
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Doctor-led aesthetic medicine, delivered with restraint, precision, and clinical integrity.
            </p>
            <p className="text-sm text-white/40 mt-2">
              Established on Harley Street in 2007.
            </p>
          </div>

          {/* Treatments Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">
              Treatments
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/treatments/botox/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Anti-Wrinkle Treatment
                </Link>
              </li>
              <li>
                <Link to="/treatments/dermal-fillers/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Dermal Fillers
                </Link>
              </li>
              <li>
                <Link to="/treatments/skin-boosters/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Skin Rejuvenation
                </Link>
              </li>
            </ul>
          </div>

          {/* About Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link to="/our-team/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/safety/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Safety & Standards
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-sm text-white/50 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/before-after/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Before & After
                </Link>
              </li>
              <li>
                <Link to="/concerns/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Skin Concerns
                </Link>
              </li>
              <li>
                <Link to="/medical/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Medical Services
                </Link>
              </li>
            </ul>
            
            {/* Credentials */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">
                Credentials
              </h4>
              <ul className="space-y-2 text-xs text-white/40">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A050]">•</span>
                  GMC-registered medical doctors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A050]">•</span>
                  Regulated UK medical practice
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A050]">•</span>
                  Evidence-based aesthetic medicine
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A050]">•</span>
                  Natural, undetectable results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Legal / Compliance Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/40 text-center md:text-left space-y-1">
              <p>Treatments are provided by GMC-registered medical doctors.</p>
              <p>All procedures are subject to consultation and clinical suitability. Results may vary.</p>
            </div>
            <p className="text-xs text-white/30">
              © {currentYear} CosmeDocs Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
