import { motion } from "framer-motion";
import { useFooterContext } from "@/hooks/useFooterContext";
import {
  TreatmentDecisionBlock,
  EducationDecisionBlock,
  ReturningVisitorBlock,
  ProfessionalBlock,
  ClinicalTransparencyBlock,
  TrustSignalsBlock,
  MedicalCredibilityBlock,
  RelatedTopicsBlock,
  TransparencyStrip
} from "./footer/FooterBlocks";

export default function Footer() {
  const { mode, lastViewedPath, lastViewedTitle, relatedTopics } = useFooterContext();

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="page-container py-10"
      >
        {/* MODE A: Treatment Pages */}
        {mode === 'treatment' && (
          <div className="space-y-8">
            <TreatmentDecisionBlock />
            <ClinicalTransparencyBlock />
            <TrustSignalsBlock />
          </div>
        )}

        {/* MODE B: Education / Blog Pages */}
        {mode === 'education' && (
          <div className="space-y-8">
            <EducationDecisionBlock />
            <RelatedTopicsBlock topics={relatedTopics} />
            <MedicalCredibilityBlock />
          </div>
        )}

        {/* MODE C: Returning Visitor (Homepage) */}
        {mode === 'returning' && lastViewedPath && lastViewedTitle && (
          <div className="space-y-8">
            <ReturningVisitorBlock 
              lastViewedPath={lastViewedPath} 
              lastViewedTitle={lastViewedTitle} 
            />
            <TrustSignalsBlock />
          </div>
        )}

        {/* MODE D: Professional / Training Pages */}
        {mode === 'professional' && (
          <div className="space-y-8">
            <ProfessionalBlock />
            <TrustSignalsBlock />
          </div>
        )}

        {/* Default Mode (Homepage, About, Contact, etc.) */}
        {mode === 'default' && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">COSMEDOCS</h3>
            <p className="text-gray-400 text-sm">Cosmetic Doctors • Since 2007</p>
          </div>
        )}
      </motion.div>

      {/* Transparency Strip - Always Visible */}
      <div className="page-container">
        <TransparencyStrip />
      </div>
    </footer>
  );
}
