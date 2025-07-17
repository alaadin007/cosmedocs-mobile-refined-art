
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Treatments from "./pages/Treatments";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import LipFillers from "./pages/LipFillers";
import NonSurgicalNoseJob from "./pages/NonSurgicalNoseJob";
import BeforeAfterGallery from "./pages/BeforeAfterGallery";
import Membership from "./pages/Membership";
import DrAhmedHaq from "./pages/DrAhmedHaq";
import DrHenaHaq from "./pages/DrHenaHaq";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import BotoxCalfReduction from "./pages/BotoxCalfReduction";
import LipFillerDissolve from "./pages/LipFillerDissolve";
import NonSurgicalFacelift from "./pages/NonSurgicalFacelift";
import PDOThreads from "./pages/PDOThreads";
import TriggerPointBotox from "./pages/TriggerPointBotox";
import MedicalAnalBleaching from "./pages/MedicalAnalBleaching";
import DermalFillers from "./pages/DermalFillers";
import NefertitiBotoxFacelift from "./pages/NefertitiBotoxFacelift";
import AdvancedUpperFaceBotox from "./pages/AdvancedUpperFaceBotox";
import FaceBotoxAreas from "./pages/FaceBotoxAreas";
import LowerFaceBotox from "./pages/LowerFaceBotox";
import AdvancedConsultation from "./pages/AdvancedConsultation";
import FellowshipInvitation from "./pages/FellowshipInvitation";
import LongTermAestheticCareBlog from "./pages/LongTermAestheticCareBlog";
import AestheticMaintenanceCostBlog from "./pages/AestheticMaintenanceCostBlog";
import PDOThreadsBlog from "./pages/PDOThreadsBlog";
import NonSurgicalNoseJobBlog from "./pages/NonSurgicalNoseJobBlog";
import ClinicalConceptsToFlawlessSkin from "./pages/ClinicalConceptsToFlawlessSkin";
import ChineseLondonAestheticsBlog from "./pages/ChineseLondonAestheticsBlog";
import TreatmentsSummaryChinese from "./pages/TreatmentsSummaryChinese";
import TreatmentsSummaryArabic from "./pages/TreatmentsSummaryArabic";
import TreatmentsSummaryJapanese from "./pages/TreatmentsSummaryJapanese";
import BirminghamHome from "./pages/BirminghamHome";
import ManchesterHome from "./pages/ManchesterHome";
import CardiffHome from "./pages/CardiffHome";
import GummySmileBotox from "./pages/GummySmileBotox";
import MarionnetteLines from "./pages/MarionnetteLines";
import NasolabialFolds from "./pages/NasolabialFolds";
import DelhiLocation from "./pages/DelhiLocation";
import BarbadosHome from "./pages/BarbadosHome";
import PolynucleotideTreatment from "./pages/PolynucleotideTreatment";
import ProfhiloTreatment from "./pages/ProfhiloTreatment";
import ChinBotox from "./pages/ChinBotox";
import HydraFacial from "./pages/HydraFacial";
import PRPTreatment from "./pages/PRPTreatment";
import PeelToReveal from "./pages/PeelToReveal";
import CheekFiller from "./pages/CheekFiller";
import ChinFiller from "./pages/ChinFiller";
import JawlineFiller from "./pages/JawlineFiller";
import ChemicalPeel from "./pages/ChemicalPeel";
import PrescriptionSkinCare from "./pages/PrescriptionSkinCare";
import TearTroughFiller from "./pages/TearTroughFiller";
import VideoUpload from "./pages/VideoUpload";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <GoogleAnalytics />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home2" element={<Home2 />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/lip-fillers" element={<LipFillers />} />
              <Route path="/non-surgical-nose-job" element={<NonSurgicalNoseJob />} />
              <Route path="/before-after-gallery" element={<BeforeAfterGallery />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/team/dr-ahmed-haq" element={<DrAhmedHaq />} />
              <Route path="/team/dr-hena-haq" element={<DrHenaHaq />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/botox-calf-reduction" element={<BotoxCalfReduction />} />
              <Route path="/lip-filler-dissolve" element={<LipFillerDissolve />} />
              <Route path="/non-surgical-facelift" element={<NonSurgicalFacelift />} />
              <Route path="/pdo-threads" element={<PDOThreads />} />
              <Route path="/trigger-point-botox" element={<TriggerPointBotox />} />
              <Route path="/medical-anal-bleaching" element={<MedicalAnalBleaching />} />
              
              {/* Dermal Filler Routes */}
              <Route path="/dermal-fillers" element={<DermalFillers />} />
              <Route path="/dermal-filler-makeover" element={<DermalFillers />} />
              <Route path="/marionette-lines" element={<MarionnetteLines />} />
              <Route path="/nasolabial-folds" element={<NasolabialFolds />} />
              
              <Route path="/nefertiti-botox-facelift" element={<NefertitiBotoxFacelift />} />
              <Route path="/nefertiti-botox-face-jaw-lift" element={<NefertitiBotoxFacelift />} />
              <Route path="/advanced-upper-face-botox" element={<AdvancedUpperFaceBotox />} />
              <Route path="/face-botox-areas" element={<FaceBotoxAreas />} />
              <Route path="/lower-face-botox" element={<LowerFaceBotox />} />
              <Route path="/advanced-consultation" element={<AdvancedConsultation />} />
              <Route path="/fellowship-invitation" element={<FellowshipInvitation />} />
              <Route path="/long-term-aesthetic-care-blog" element={<LongTermAestheticCareBlog />} />
              <Route path="/aesthetic-maintenance-cost-blog" element={<AestheticMaintenanceCostBlog />} />
              <Route path="/pdo-threads-blog" element={<PDOThreadsBlog />} />
              <Route path="/non-surgical-nose-job-blog" element={<NonSurgicalNoseJobBlog />} />
              <Route path="/clinical-concepts-to-flawless-skin" element={<ClinicalConceptsToFlawlessSkin />} />
              <Route path="/chinese-london-aesthetics-blog" element={<ChineseLondonAestheticsBlog />} />
              <Route path="/treatments-summary-chinese" element={<TreatmentsSummaryChinese />} />
              <Route path="/treatments-summary-arabic" element={<TreatmentsSummaryArabic />} />
              <Route path="/treatments-summary-japanese" element={<TreatmentsSummaryJapanese />} />
              <Route path="/birmingham" element={<BirminghamHome />} />
              <Route path="/manchester" element={<ManchesterHome />} />
              <Route path="/cardiff" element={<CardiffHome />} />
              <Route path="/delhi" element={<DelhiLocation />} />
              <Route path="/barbados" element={<BarbadosHome />} />
              <Route path="/gummy-smile-botox" element={<GummySmileBotox />} />
              <Route path="/polynucleotide-treatment" element={<PolynucleotideTreatment />} />
              <Route path="/profhilo-treatment" element={<ProfhiloTreatment />} />
              <Route path="/chin-botox" element={<ChinBotox />} />
              <Route path="/hydrafacial-london" element={<HydraFacial />} />
              <Route path="/prp-treatment" element={<PRPTreatment />} />
              <Route path="/prp-treatment-london" element={<PRPTreatment />} />
              <Route path="/vampire-facial" element={<PRPTreatment />} />
              <Route path="/peel-to-reveal" element={<PeelToReveal />} />
              <Route path="/chemical-peel" element={<ChemicalPeel />} />
              <Route path="/prescription-skin-care" element={<PrescriptionSkinCare />} />
              <Route path="/tear-trough-filler" element={<TearTroughFiller />} />
              <Route path="/cheek-filler" element={<CheekFiller />} />
              <Route path="/chin-filler" element={<ChinFiller />} />
              <Route path="/jawline-filler" element={<JawlineFiller />} />
              <Route path="/admin/video-upload" element={<VideoUpload />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
