import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useAutoSitemap } from "@/hooks/useAutoSitemap";
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
import ForeheadFillers from "./pages/ForeheadFillers";
import NonSurgicalNoseJob from "./pages/NonSurgicalNoseJob";
import BeforeAfterGallery from "./pages/BeforeAfterGallery";
import Membership from "./pages/Membership";
import DrAhmedHaq from "./pages/DrAhmedHaq";
import DrHenaHaq from "./pages/DrHenaHaq";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import BotoxCalfReduction from "./pages/BotoxCalfReduction";
import MasseterBotox from "./pages/MasseterBotox";
import LipFillerDissolve from "./pages/LipFillerDissolve";
import PrivateGPDoctor from "./pages/PrivateGPDoctor";
import NonSurgicalFacelift from "./pages/NonSurgicalFacelift";
import PDOThreads from "./pages/PDOThreads";
import { ThreadFaceLift } from "./pages/ThreadFaceLift";
import TriggerPointBotox from "./pages/TriggerPointBotox";
import AcneTreatment from "./pages/AcneTreatment";
import MedicalAnalBleaching from "./pages/MedicalAnalBleaching";
import DermalFillers from "./pages/DermalFillers";
import NefertitiBotoxFacelift from "./pages/NefertitiBotoxFacelift";
import FaceBotox from "./pages/FaceBotox";
import AdvancedConsultation from "./pages/AdvancedConsultation";
import FellowshipInvitation from "./pages/FellowshipInvitation";
import LongTermAestheticCareBlog from "./pages/LongTermAestheticCareBlog";
import AestheticMaintenanceCostBlog from "./pages/AestheticMaintenanceCostBlog";
import PDOThreadsBlog from "./pages/PDOThreadsBlog";
import NonSurgicalNoseJobBlog from "./pages/NonSurgicalNoseJobBlog";
import ClinicalConceptsToFlawlessSkin from "./pages/ClinicalConceptsToFlawlessSkin";
import ChineseLondonAestheticsBlog from "./pages/ChineseLondonAestheticsBlog";
import VitaminCSerumBenefitsBlog from "./pages/VitaminCSerumBenefitsBlog";
import CosmetalkBlog from "./pages/CosmetalkBlog";
import InsideMindAestheticDoctorBlog from "./pages/InsideMindAestheticDoctorBlog";
import SmokersLinesWomen from "./pages/SmokersLinesWomen";
import FlawlessSkin from "./pages/FlawlessSkin";
import LazySkinSyndrome from "./pages/LazySkinSyndrome";
import BeautyEthnicNeutrality from "./pages/blog/BeautyEthnicNeutrality";
import EightPointFacelift from "./pages/EightPointFacelift";
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
import KarachiLocation from "./pages/KarachiLocation";
import BarbadosHome from "./pages/BarbadosHome";
import PolynucleotideTreatment from "./pages/PolynucleotideTreatment";
import ProfhiloTreatment from "./pages/ProfhiloTreatment";
import ChinBotox from "./pages/ChinBotox";
import HydraFacial from "./pages/HydraFacial";
import PRPTreatment from "./pages/PRPTreatment";
import PeelToReveal from "./pages/PeelToReveal";
import CheekFiller from "./pages/CheekFiller";
import ChinFiller from "./pages/ChinFiller";
// Import ear lobe rejuvenation component
import EarLobeRejuvenation from "./pages/EarLobeRejuvenation";
import JawlineFiller from "./pages/JawlineFiller";
import ChemicalPeel from "./pages/ChemicalPeel";
import PrescriptionSkincare from "./pages/PrescriptionSkincare";
import Microneedling from "./pages/Microneedling";
import TearTroughFiller from "./pages/TearTroughFiller";
import TrapBotox from "./pages/TrapBotox";
import VideoUpload from "./pages/VideoUpload";
import ExperimentalTreatment from "./pages/ExperimentalTreatment";
import TempleFiller from "./pages/TempleFiller";
import NeckFillers from "./pages/NeckFillers";
import HarleyStreetConsultingRooms from "./pages/HarleyStreetConsultingRooms";
import PlasticSurgeon from "./pages/PlasticSurgeon";
import Dermatology from "./pages/Dermatology";
import AestheticTraining from "./pages/AestheticTraining";
import HairTransplantSurgeon from "./pages/HairTransplantSurgeon";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import ScrollToTop from "./components/ScrollToTop";
import MoleSkinTagRemoval from "./pages/MoleSkinTagRemoval";
import EczemaTreatment from "./pages/EczemaTreatment";
import PsoriasisTreatment from "./pages/PsoriasisTreatment";
import HyperpigmentationTreatment from "./pages/HyperpigmentationTreatment";
import FatDissolve from "./pages/FatDissolve";
import OilySkinBotox from "./pages/OilySkinBotox";
import CosmeDerm from "./pages/CosmeDerm";
import BotoxPriceLondon from "./pages/BotoxPriceLondon";
import AestheticsAtGlance from "./pages/AestheticsAtGlance";
import FrownLineBotox from "./pages/FrownLineBotox";
import CrowsFeetBotox from "./pages/CrowsFeetBotox";
import ForeheadLinesBotox from "./pages/ForeheadLinesBotox";
import BunnyLinesBotox from "./pages/BunnyLinesBotox";
import NasalFlaringBotox from "./pages/NasalFlaringBotox";
import LipFlip from "./pages/LipFlip";
import MigraineBotox from "./pages/MigraineBotox";
import BruxismBotox from "./pages/BruxismBotox";
import ExcessiveSweatBotox from "./pages/ExcessiveSweatBotox";
import AestheticIntelligence from "./pages/AestheticIntelligence";
import ProductAnalysisDetail from "./pages/ProductAnalysisDetail";

const queryClient = new QueryClient();

const App = () => {
  // Auto-update sitemap when routes change
  useAutoSitemap();
  
  return (
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
              <Route path="/skin-boosters" element={<Treatments />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/lip-fillers" element={<LipFillers />} />
              <Route path="/forehead-fillers" element={<ForeheadFillers />} />
              <Route path="/non-surgical-nose-job" element={<NonSurgicalNoseJob />} />
              <Route path="/before-after-gallery" element={<BeforeAfterGallery />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/team/dr-ahmed-haq" element={<DrAhmedHaq />} />
              <Route path="/team/dr-hena-haq" element={<DrHenaHaq />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/botox-calf-reduction" element={<BotoxCalfReduction />} />
              <Route path="/lip-filler-dissolve" element={<LipFillerDissolve />} />
              <Route path="/private-gp-doctor" element={<PrivateGPDoctor />} />
              <Route path="/non-surgical-facelift" element={<NonSurgicalFacelift />} />
              <Route path="/pdo-threads" element={<PDOThreads />} />
              <Route path="/thread-face-lift" element={<ThreadFaceLift />} />
              <Route path="/masseter-botox" element={<MasseterBotox />} />
              <Route path="/trigger-point-botox" element={<TriggerPointBotox />} />
              <Route path="/medical-anal-bleaching" element={<MedicalAnalBleaching />} />
              
              {/* Dermal Filler Routes */}
              <Route path="/dermal-fillers" element={<DermalFillers />} />
              <Route path="/dermal-filler-makeover" element={<DermalFillers />} />
              <Route path="/marionette-lines" element={<MarionnetteLines />} />
              <Route path="/nasolabial-folds" element={<NasolabialFolds />} />
              
              <Route path="/nefertiti-botox-face-jaw-lift" element={<NefertitiBotoxFacelift />} />
              <Route path="/advanced-upper-face-botox" element={<Navigate to="/face-botox" replace />} />
              <Route path="/face-botox-areas" element={<Navigate to="/face-botox" replace />} />
              <Route path="/face-botox" element={<FaceBotox />} />
              <Route path="/lower-face-botox" element={<Navigate to="/face-botox" replace />} />
              <Route path="/advanced-consultation" element={<AdvancedConsultation />} />
              <Route path="/fellowship-invitation" element={<FellowshipInvitation />} />
              <Route path="/long-term-aesthetic-care-blog" element={<LongTermAestheticCareBlog />} />
              <Route path="/aesthetic-maintenance-cost-blog" element={<AestheticMaintenanceCostBlog />} />
              <Route path="/pdo-threads-blog" element={<PDOThreadsBlog />} />
              <Route path="/non-surgical-nose-job-blog" element={<NonSurgicalNoseJobBlog />} />
              <Route path="/clinical-concepts-to-flawless-skin" element={<ClinicalConceptsToFlawlessSkin />} />
              <Route path="/chinese-london-aesthetics-blog" element={<ChineseLondonAestheticsBlog />} />
              <Route path="/inside-mind-aesthetic-doctor-blog" element={<InsideMindAestheticDoctorBlog />} />
              <Route path="/cosmetalk/vitamin-c-ferulic-acid-benefits" element={<VitaminCSerumBenefitsBlog />} />
              <Route path="/cosmetalk/smokers-lines-women" element={<SmokersLinesWomen />} />
              <Route path="/cosmetalk/flawless-skin" element={<FlawlessSkin />} />
               <Route path="/cosmetalk/lazy-skin-syndrome" element={<LazySkinSyndrome />} />
               <Route path="/blog/beauty-ethnic-neutrality" element={<BeautyEthnicNeutrality />} />
               <Route path="/8-point-facelift" element={<EightPointFacelift />} />
               <Route path="/cosmetalk" element={<CosmetalkBlog />} />
              <Route path="/treatments-summary-chinese" element={<TreatmentsSummaryChinese />} />
              <Route path="/treatments-summary-arabic" element={<TreatmentsSummaryArabic />} />
              <Route path="/treatments-summary-japanese" element={<TreatmentsSummaryJapanese />} />
              <Route path="/birmingham" element={<BirminghamHome />} />
              <Route path="/manchester" element={<ManchesterHome />} />
              <Route path="/cardiff" element={<CardiffHome />} />
               <Route path="/delhi" element={<DelhiLocation />} />
               <Route path="/karachi" element={<KarachiLocation />} />
               <Route path="/barbados" element={<BarbadosHome />} />
              <Route path="/gummy-smile-botox" element={<GummySmileBotox />} />
              <Route path="/polynucleotide-treatment" element={<PolynucleotideTreatment />} />
              <Route path="/profhilo-treatment" element={<ProfhiloTreatment />} />
              <Route path="/chin-botox" element={<ChinBotox />} />
              <Route path="/frown-line-botox" element={<FrownLineBotox />} />
              <Route path="/crows-feet-botox" element={<CrowsFeetBotox />} />
              <Route path="/forehead-lines-botox" element={<ForeheadLinesBotox />} />
              <Route path="/bunny-lines-botox" element={<BunnyLinesBotox />} />
              <Route path="/nasal-flaring-botox" element={<NasalFlaringBotox />} />
              <Route path="/oily-skin-botox" element={<OilySkinBotox />} />
              <Route path="/lip-flip" element={<LipFlip />} />
              <Route path="/migraine-botox" element={<MigraineBotox />} />
              <Route path="/bruxism-botox" element={<BruxismBotox />} />
              <Route path="/excessive-sweat-botox" element={<ExcessiveSweatBotox />} />
                <Route path="/aesthetic-intelligence" element={<AestheticIntelligence />} />
                <Route path="/product-analysis/:id" element={<ProductAnalysisDetail />} />
                <Route path="/trap-botox" element={<TrapBotox />} />
               <Route path="/hydrafacial-london" element={<HydraFacial />} />
              <Route path="/prp-treatment" element={<PRPTreatment />} />
              <Route path="/prp-treatment-london" element={<PRPTreatment />} />
              
              <Route path="/peel-to-reveal" element={<PeelToReveal />} />
              <Route path="/chemical-peel" element={<ChemicalPeel />} />
              <Route path="/prescription-skincare" element={<PrescriptionSkincare />} />
              <Route path="/fat-dissolve" element={<FatDissolve />} />
              <Route path="/cosmederm" element={<CosmeDerm />} />
              <Route path="/tear-trough-filler" element={<TearTroughFiller />} />
              <Route path="/cheek-filler" element={<CheekFiller />} />
            <Route path="/chin-filler" element={<ChinFiller />} />
            <Route path="/ear-lobe-rejuvenation" element={<EarLobeRejuvenation />} />
               <Route path="/jawline-filler" element={<JawlineFiller />} />
                <Route path="/microneedling" element={<Microneedling />} />
                <Route path="/temple-filler-london" element={<TempleFiller />} />
                <Route path="/neck-fillers" element={<NeckFillers />} />
                <Route path="/neck" element={<NeckFillers />} />
                <Route path="/harley-street-consulting-rooms" element={<HarleyStreetConsultingRooms />} />
                 <Route path="/plastic-surgeon" element={<PlasticSurgeon />} />
                 <Route path="/dermatology" element={<Dermatology />} />
              <Route path="/acne-treatment" element={<AcneTreatment />} />
              <Route path="/mole-skin-tag-removal" element={<MoleSkinTagRemoval />} />
               <Route path="/eczema-treatment" element={<EczemaTreatment />} />
                <Route path="/psoriasis-treatment" element={<PsoriasisTreatment />} />
                <Route path="/hyperpigmentation-treatment" element={<HyperpigmentationTreatment />} />
                  <Route path="/aesthetic-training" element={<AestheticTraining />} />
                   <Route path="/hair-transplant-surgeon" element={<HairTransplantSurgeon />} />
                   <Route path="/botox-price-london" element={<BotoxPriceLondon />} />
                   <Route path="/aesthetics-at-a-glance" element={<AestheticsAtGlance />} />
               
               {/* Blog redirects */}
              <Route path="/blog" element={<Navigate to="/cosmetalk" replace />} />
              <Route path="/blog/vitamin-c-ferulic-acid-benefits" element={<Navigate to="/cosmetalk/vitamin-c-ferulic-acid-benefits" replace />} />
              
              <Route path="/experimental-treatment" element={<ExperimentalTreatment />} />
              <Route path="/admin/video-upload" element={<VideoUpload />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
