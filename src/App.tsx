import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from "react";
import { useAutoSitemap } from "@/hooks/useAutoSitemap";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Eager load critical pages only
import Index from "./pages/Index";

// Lazy load all other pages
const Home = lazy(() => import("./pages/Home"));
const Home2 = lazy(() => import("./pages/Home2"));
const Treatments = lazy(() => import("./pages/Treatments"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const LipFillers = lazy(() => import("./pages/LipFillers"));
const CupidBowLips = lazy(() => import("./pages/CupidBowLips"));
const ForeheadFillers = lazy(() => import("./pages/ForeheadFillers"));
const NonSurgicalNoseJob = lazy(() => import("./pages/NonSurgicalNoseJob"));
const BeforeAfterGallery = lazy(() => import("./pages/BeforeAfterGallery"));
const Membership = lazy(() => import("./pages/Membership"));
const DrAhmedHaq = lazy(() => import("./pages/DrAhmedHaq"));
const DrHenaHaq = lazy(() => import("./pages/DrHenaHaq"));
const Partners = lazy(() => import("./pages/Partners"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BotoxCalfReduction = lazy(() => import("./pages/BotoxCalfReduction"));
const MasseterBotox = lazy(() => import("./pages/MasseterBotox"));
const LipFillerDissolve = lazy(() => import("./pages/LipFillerDissolve"));
const PrivateGPDoctor = lazy(() => import("./pages/PrivateGPDoctor"));
const NonSurgicalFacelift = lazy(() => import("./pages/NonSurgicalFacelift"));
const ThreadFaceLift = lazy(() => import("./pages/ThreadFaceLift").then(m => ({ default: m.ThreadFaceLift })));
const TriggerPointBotox = lazy(() => import("./pages/TriggerPointBotox"));
const AcneTreatment = lazy(() => import("./pages/AcneTreatment"));
const MedicalAnalBleaching = lazy(() => import("./pages/MedicalAnalBleaching"));
const DermalFillers = lazy(() => import("./pages/DermalFillers"));
const NefertitiBotoxFacelift = lazy(() => import("./pages/NefertitiBotoxFacelift"));
const FaceBotox = lazy(() => import("./pages/FaceBotox"));
const AdvancedConsultation = lazy(() => import("./pages/AdvancedConsultation"));
const FellowshipInvitation = lazy(() => import("./pages/FellowshipInvitation"));
const LongTermAestheticCareBlog = lazy(() => import("./pages/LongTermAestheticCareBlog"));
const AestheticMaintenanceCostBlog = lazy(() => import("./pages/AestheticMaintenanceCostBlog"));
const NonSurgicalNoseJobBlog = lazy(() => import("./pages/NonSurgicalNoseJobBlog"));
const ClinicalConceptsToFlawlessSkin = lazy(() => import("./pages/ClinicalConceptsToFlawlessSkin"));
const ChineseLondonAestheticsBlog = lazy(() => import("./pages/ChineseLondonAestheticsBlog"));
const VitaminCSerumBenefitsBlog = lazy(() => import("./pages/VitaminCSerumBenefitsBlog"));
const CosmetalkBlog = lazy(() => import("./pages/CosmetalkBlog"));
const InsideMindAestheticDoctorBlog = lazy(() => import("./pages/InsideMindAestheticDoctorBlog"));
const SmokersLinesWomen = lazy(() => import("./pages/SmokersLinesWomen"));
const FlawlessSkin = lazy(() => import("./pages/FlawlessSkin"));
const LazySkinSyndrome = lazy(() => import("./pages/LazySkinSyndrome"));
const BeautyEthnicNeutrality = lazy(() => import("./pages/blog/BeautyEthnicNeutrality"));
const EightPointFacelift = lazy(() => import("./pages/EightPointFacelift"));
const TreatmentsSummaryChinese = lazy(() => import("./pages/TreatmentsSummaryChinese"));
const TreatmentsSummaryArabic = lazy(() => import("./pages/TreatmentsSummaryArabic"));
const TreatmentsSummaryJapanese = lazy(() => import("./pages/TreatmentsSummaryJapanese"));
const BirminghamHome = lazy(() => import("./pages/BirminghamHome"));
const ManchesterHome = lazy(() => import("./pages/ManchesterHome"));
const CardiffHome = lazy(() => import("./pages/CardiffHome"));
const GummySmileBotox = lazy(() => import("./pages/GummySmileBotox"));
const MarionnetteLines = lazy(() => import("./pages/MarionnetteLines"));
const NasolabialFolds = lazy(() => import("./pages/NasolabialFolds"));
const DelhiLocation = lazy(() => import("./pages/DelhiLocation"));
const KarachiLocation = lazy(() => import("./pages/KarachiLocation"));
const BarbadosHome = lazy(() => import("./pages/BarbadosHome"));
const PolynucleotideTreatment = lazy(() => import("./pages/PolynucleotideTreatment"));
const ProfhiloTreatment = lazy(() => import("./pages/ProfhiloTreatment"));
const ChinBotox = lazy(() => import("./pages/ChinBotox"));
const HydraFacial = lazy(() => import("./pages/HydraFacial"));
const PRPTreatment = lazy(() => import("./pages/PRPTreatment"));
const PeelToReveal = lazy(() => import("./pages/PeelToReveal"));
const CheekFiller = lazy(() => import("./pages/CheekFiller"));
const ChinFiller = lazy(() => import("./pages/ChinFiller"));
const EarLobeRejuvenation = lazy(() => import("./pages/EarLobeRejuvenation"));
const JawlineFiller = lazy(() => import("./pages/JawlineFiller"));
const ChemicalPeel = lazy(() => import("./pages/ChemicalPeel"));
const PrescriptionSkincare = lazy(() => import("./pages/PrescriptionSkincare"));
const Microneedling = lazy(() => import("./pages/Microneedling"));
const TearTroughFiller = lazy(() => import("./pages/TearTroughFiller"));
const TrapBotox = lazy(() => import("./pages/TrapBotox"));
const VideoUpload = lazy(() => import("./pages/VideoUpload"));
const ExperimentalTreatment = lazy(() => import("./pages/ExperimentalTreatment"));
const TempleFiller = lazy(() => import("./pages/TempleFiller"));
const NeckFillers = lazy(() => import("./pages/NeckFillers"));
const HarleyStreetConsultingRooms = lazy(() => import("./pages/HarleyStreetConsultingRooms"));
const PlasticSurgeon = lazy(() => import("./pages/PlasticSurgeon"));
const Dermatology = lazy(() => import("./pages/Dermatology"));
const AestheticTraining = lazy(() => import("./pages/AestheticTraining"));
const HairTransplantSurgeon = lazy(() => import("./pages/HairTransplantSurgeon"));
const GoogleAnalytics = lazy(() => import("./components/GoogleAnalytics").then(m => ({ default: m.GoogleAnalytics })));
const MoleSkinTagRemoval = lazy(() => import("./pages/MoleSkinTagRemoval"));
const EczemaTreatment = lazy(() => import("./pages/EczemaTreatment"));
const PsoriasisTreatment = lazy(() => import("./pages/PsoriasisTreatment"));
const HyperpigmentationTreatment = lazy(() => import("./pages/HyperpigmentationTreatment"));
const FatDissolve = lazy(() => import("./pages/FatDissolve"));
const OilySkinBotox = lazy(() => import("./pages/OilySkinBotox"));
const CosmeDerm = lazy(() => import("./pages/CosmeDerm"));
const BotoxPriceLondon = lazy(() => import("./pages/BotoxPriceLondon"));
const AestheticsAtGlance = lazy(() => import("./pages/AestheticsAtGlance"));
const FrownLineBotox = lazy(() => import("./pages/FrownLineBotox"));
const CrowsFeetBotox = lazy(() => import("./pages/CrowsFeetBotox"));
const ForeheadLinesBotox = lazy(() => import("./pages/ForeheadLinesBotox"));
const BunnyLinesBotox = lazy(() => import("./pages/BunnyLinesBotox"));
const NasalFlaringBotox = lazy(() => import("./pages/NasalFlaringBotox"));
const LipFlip = lazy(() => import("./pages/LipFlip"));
const MigraineBotox = lazy(() => import("./pages/MigraineBotox"));
const BruxismBotox = lazy(() => import("./pages/BruxismBotox"));
const ExcessiveSweatBotox = lazy(() => import("./pages/ExcessiveSweatBotox"));
const AestheticIntelligence = lazy(() => import("./pages/AestheticIntelligence"));
const ProductAnalysisDetail = lazy(() => import("./pages/ProductAnalysisDetail"));
const PopupOffer = lazy(() => import("./pages/PopupOffer"));
const NonSurgicalPonytail = lazy(() => import("./pages/NonSurgicalPonytail"));
const MedicalStudentWorkExperience = lazy(() => import("./pages/MedicalStudentWorkExperience"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

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
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <Layout>
            <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home2" element={<Home2 />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/lip-fillers" element={<LipFillers />} />
              <Route path="/cupid-bow-lips" element={<CupidBowLips />} />
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
              <Route path="/non-surgical-face-lift" element={<NonSurgicalFacelift />} />
              <Route path="/pdo-threads" element={<ThreadFaceLift />} />
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
              
              {/* Botox URL redirects */}
              <Route path="/anti-wrinkle" element={<Navigate to="/botox-london" replace />} />
              <Route path="/anti-wrinkle-injections" element={<Navigate to="/botox-london" replace />} />
              <Route path="/botox" element={<Navigate to="/botox-london" replace />} />
              <Route path="/brow-lift-botox" element={<Navigate to="/botox-london" replace />} />
              <Route path="/forehead-botox" element={<Navigate to="/forehead-lines-botox" replace />} />
              <Route path="/frown-lines-botox" element={<Navigate to="/frown-line-botox" replace />} />
              <Route path="/chin-dimpling-botox" element={<Navigate to="/chin-botox" replace />} />
              <Route path="/nefertiti-botox-facelift" element={<Navigate to="/nefertiti-botox-face-jaw-lift" replace />} />
              <Route path="/nefertiti-lift" element={<Navigate to="/nefertiti-botox-face-jaw-lift" replace />} />
              
              {/* Filler URL redirects */}
              <Route path="/cheek-fillers" element={<Navigate to="/cheek-filler" replace />} />
              <Route path="/jawline-fillers" element={<Navigate to="/jawline-filler" replace />} />
              <Route path="/lip-filler" element={<Navigate to="/lip-fillers" replace />} />
              <Route path="/marionette-lines-filler" element={<Navigate to="/marionette-lines" replace />} />
              <Route path="/nose-filler" element={<Navigate to="/non-surgical-nose-job" replace />} />
              <Route path="/tear-trough-fillers" element={<Navigate to="/tear-trough-filler" replace />} />
              <Route path="/temple-fillers" element={<Navigate to="/temple-filler-london" replace />} />
              
              {/* Treatment URL redirects */}
              <Route path="/fat-dissolving-injections" element={<Navigate to="/fat-dissolve" replace />} />
              <Route path="/profhilo" element={<Navigate to="/profhilo-treatment" replace />} />
              <Route path="/thread-lift" element={<Navigate to="/thread-face-lift" replace />} />
              <Route path="/aesthetics-at-glance" element={<Navigate to="/aesthetics-at-a-glance" replace />} />
              <Route path="/booking" element={<Navigate to="/contact" replace />} />
              <Route path="/price-list" element={<Navigate to="/treatments" replace />} />
              <Route path="/skin-boosters" element={<Navigate to="/treatments" replace />} />
              
              <Route path="/advanced-upper-face-botox" element={<Navigate to="/botox-london" replace />} />
              <Route path="/face-botox-areas" element={<Navigate to="/botox-london" replace />} />
              <Route path="/face-botox" element={<Navigate to="/botox-london" replace />} />
              <Route path="/botox-london" element={<FaceBotox />} />
              <Route path="/lower-face-botox" element={<Navigate to="/botox-london" replace />} />
              <Route path="/advanced-consultation" element={<AdvancedConsultation />} />
              <Route path="/fellowship-invitation" element={<FellowshipInvitation />} />
              <Route path="/long-term-aesthetic-care-blog" element={<LongTermAestheticCareBlog />} />
              <Route path="/aesthetic-maintenance-cost-blog" element={<AestheticMaintenanceCostBlog />} />
              <Route path="/pdo-threads-blog" element={<ThreadFaceLift />} />
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
                <Route path="/non-surgical-ponytail" element={<NonSurgicalPonytail />} />
               <Route path="/hydrafacial-london" element={<HydraFacial />} />
              <Route path="/prp-treatment" element={<PRPTreatment />} />
              
              
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
                <Route path="/popupoffer" element={<PopupOffer />} />
                <Route path="/medical-student-work-experience" element={<MedicalStudentWorkExperience />} />
                
                {/* Blog redirects */}
              <Route path="/blog" element={<Navigate to="/cosmetalk" replace />} />
              <Route path="/blog/vitamin-c-ferulic-acid-benefits" element={<Navigate to="/cosmetalk/vitamin-c-ferulic-acid-benefits" replace />} />
              
              <Route path="/experimental-treatment" element={<ExperimentalTreatment />} />
              <Route path="/admin/video-upload" element={<VideoUpload />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
