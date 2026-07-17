import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import teosyalAward from "@/assets/awards/teosyal-outstanding-clinic-award.png";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
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
            <p className="text-xs text-[#C9A050]/70 italic mt-4 leading-relaxed max-w-xs tracking-wide font-light">
              The art of invisible beauty — restored, refined, never revealed.
            </p>

            {/* Teosyal Outstanding Clinic Award */}
            <Link
              to="/about"
              aria-label="Teosyal Outstanding Clinic Award winner — view recognition"
              className="group mt-6 inline-flex items-center gap-3 pl-1 pr-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C9A050]/30 hover:border-[#C9A050]/60 hover:bg-white/[0.07] transition-all duration-300"
            >
              <span className="relative inline-flex items-center justify-center rounded-full bg-white/95 ring-1 ring-[#C9A050]/50 p-0.5">
                <img
                  src={teosyalAward}
                  alt="Teosyal Outstanding Clinic Award"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-11 w-11 object-contain rounded-full"
                />
              </span>
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A050]">Award Winning</span>
                <span className="text-[11px] font-light text-white/85">Teosyal Outstanding Clinic</span>
              </span>
            </Link>
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
              <li>
                <Link to="/treatments/endolaser/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Laser Fibre Lift
                </Link>
              </li>
              <li>
                <Link to="/treatments/endolift-alternative/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Endolift® Alternative
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
              <li>
                <Link to="/aesthetic-clinic-london/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Aesthetic Clinic London
                </Link>
              </li>
              <li>
                <Link to="/skin-education-guide/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Skin Education Guide
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

          {/* International Patients */}
          <div>
            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">
              International Patients
            </h4>
            <ul className="space-y-3">
              <li><Link to="/arabic-patients/" className="text-sm text-white/50 hover:text-white transition-colors">Arabic Patients</Link></li>
              <li><Link to="/chinese-patients/" className="text-sm text-white/50 hover:text-white transition-colors">Chinese Patients</Link></li>
              <li><Link to="/french-patients/" className="text-sm text-white/50 hover:text-white transition-colors">French Patients</Link></li>
              <li><Link to="/german-patients/" className="text-sm text-white/50 hover:text-white transition-colors">German Patients</Link></li>
              <li><Link to="/japanese-patients/" className="text-sm text-white/50 hover:text-white transition-colors">Japanese Patients</Link></li>
              <li><Link to="/norwegian-patients/" className="text-sm text-white/50 hover:text-white transition-colors">Norwegian Patients</Link></li>
              <li><Link to="/swedish-patients/" className="text-sm text-white/50 hover:text-white transition-colors">Swedish Patients</Link></li>
              <li><Link to="/finnish-patients/" className="text-sm text-white/50 hover:text-white transition-colors">Finnish Patients</Link></li>
            </ul>

            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mt-8 mb-3">
              Site in your language
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ar/about-us/" className="text-white/50 hover:text-white transition-colors">العربية · من نحن</Link></li>
              <li><Link to="/de/" className="text-white/50 hover:text-white transition-colors">Deutsch · Startseite</Link></li>
              <li><Link to="/de/ueber-uns/" className="text-white/50 hover:text-white transition-colors">Deutsch · Über uns</Link></li>
              <li><Link to="/es/sobre-nosotros/" className="text-white/50 hover:text-white transition-colors">Español · Sobre nosotros</Link></li>
              <li><Link to="/fr/a-propos/" className="text-white/50 hover:text-white transition-colors">Français · À propos</Link></li>
              <li><Link to="/ja/" className="text-white/50 hover:text-white transition-colors">日本語 · ホーム</Link></li>
              <li><Link to="/ja/about-us/" className="text-white/50 hover:text-white transition-colors">日本語 · About</Link></li>
              <li><Link to="/zh/about-us/" className="text-white/50 hover:text-white transition-colors">中文 · 关于我们</Link></li>
            </ul>

            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider mt-8 mb-3">
              Localised editorial
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ar/london-summer-aesthetics/" className="text-white/50 hover:text-white transition-colors">صيف لندن · جماليات</Link></li>
              <li><Link to="/de/blog/drei-zellen-haut-philosophie/" className="text-white/50 hover:text-white transition-colors">Drei-Zellen-Haut-Philosophie</Link></li>
              <li><Link to="/de/blog/warum-ph-wichtig-vitamin-c/" className="text-white/50 hover:text-white transition-colors">Warum pH wichtig ist · Vitamin C</Link></li>
              <li><Link to="/botox-paris/" className="text-white/50 hover:text-white transition-colors">Botox pour patients parisiens</Link></li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Language Selector Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <LanguageSelector variant="footer" />
        </div>
      </div>

      {/* Legal / Compliance Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/40 text-center md:text-left space-y-1">
              <p>Treatments are provided by GMC-registered medical doctors.</p>
              <p>All procedures are subject to consultation and clinical suitability. Results may vary.</p>
              <p className="pt-1">
                <Link to="/privacy-policy/" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
                <span className="mx-2 text-white/20">·</span>
                <Link to="/cookie-policy/" className="text-white/60 hover:text-white transition-colors">Cookie Policy</Link>
              </p>
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
