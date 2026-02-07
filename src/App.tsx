import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, memo } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";
import ErrorBoundary from "./components/ErrorBoundary";

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
const BeforeAfterHub = lazy(() => import("./pages/BeforeAfterHub"));
const BeforeAfterBotox = lazy(() => import("./pages/BeforeAfterBotox"));
const BeforeAfterDermalFillers = lazy(() => import("./pages/BeforeAfterDermalFillers"));
const BeforeAfterSkinRejuvenation = lazy(() => import("./pages/BeforeAfterSkinRejuvenation"));
const Membership = lazy(() => import("./pages/Membership"));
const DrAhmedHaq = lazy(() => import("./pages/DrAhmedHaq"));
const DrHenaHaq = lazy(() => import("./pages/DrHenaHaq"));
const LaertaBuzo = lazy(() => import("./pages/LaertaBuzo"));
const DrHassanMirza = lazy(() => import("./pages/DrHassanMirza"));
const DrNoorHotaki = lazy(() => import("./pages/DrNoorHotaki"));
const BotoxParis = lazy(() => import("./pages/BotoxParis"));
const BotoxBerlin = lazy(() => import("./pages/BotoxBerlin"));
const BotoxDublin = lazy(() => import("./pages/BotoxDublin"));
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
const DermalFillerAreas = lazy(() => import("./pages/DermalFillerAreas"));
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
const BlogHome = lazy(() => import("./pages/BlogHome"));
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
// GoogleAnalytics now loaded via index.html for better performance
const MoleSkinTagRemoval = lazy(() => import("./pages/MoleSkinTagRemoval"));
const EczemaTreatment = lazy(() => import("./pages/EczemaTreatment"));
const PsoriasisTreatment = lazy(() => import("./pages/PsoriasisTreatment"));
const HyperpigmentationTreatment = lazy(() => import("./pages/HyperpigmentationTreatment"));
const FatDissolve = lazy(() => import("./pages/FatDissolve"));
const OilySkinBotox = lazy(() => import("./pages/OilySkinBotox"));
const CosmeDerm = lazy(() => import("./pages/CosmeDerm"));
const BotoxCostLondon = lazy(() => import("./pages/BotoxCostLondon"));
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
const SkinRejuvenationHub = lazy(() => import("./pages/SkinRejuvenationHub"));
const MedicalStudentWorkExperience = lazy(() => import("./pages/MedicalStudentWorkExperience"));
const SmartAesthetics = lazy(() => import("./pages/SmartAesthetics"));
const UntraceablyYouCampaign = lazy(() => import("./pages/UntraceablyYouCampaign"));
const CampaignAds = lazy(() => import("./pages/CampaignAds"));
const LondonTweakmentsNaturalAesthetics = lazy(() => import("./pages/LondonTweakmentsNaturalAesthetics"));
const SpinToWin = lazy(() => import("./pages/SpinToWin"));
const OrofacialNeckPainBlog = lazy(() => import("./pages/OrofacialNeckPainBlog"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const HowToGetRidOfBruises = lazy(() => import("./pages/HowToGetRidOfBruises"));
const ForeheadWrinklesMythsTips = lazy(() => import("./pages/ForeheadWrinklesMythsTips"));
const LipWrinklesTreatments = lazy(() => import("./pages/LipWrinklesTreatments"));
const SkinTagsRemoval = lazy(() => import("./pages/SkinTagsRemoval"));
const BotoxFAQs = lazy(() => import("./pages/BotoxFAQs"));
const UltimateBotoxGuide = lazy(() => import("./pages/UltimateBotoxGuide"));
const Blepharoplasty = lazy(() => import("./pages/Blepharoplasty"));
const Rhinoplasty = lazy(() => import("./pages/Rhinoplasty"));
const FaceliftSurgery = lazy(() => import("./pages/FaceliftSurgery"));
const Liposuction = lazy(() => import("./pages/Liposuction"));
const CO2LaserResurfacing = lazy(() => import("./pages/CO2LaserResurfacing"));
const ScarReduction = lazy(() => import("./pages/ScarReduction"));
const ConcernsHub = lazy(() => import("./pages/ConcernsHub"));
const MedicalHub = lazy(() => import("./pages/MedicalHub"));
const MedicalBotoxHub = lazy(() => import("./pages/MedicalBotoxHub"));
const Safety = lazy(() => import("./pages/Safety"));

// Optimized loading component
const PageLoader = memo(() => (
  <div className="flex items-center justify-center min-h-[50vh]" aria-busy="true">
    <div className="w-8 h-8 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
  </div>
));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AuthProvider>
                <ScrollToTop />
                <TrailingSlashRedirect />
                <Routes>
                  {/* Home2 is now the root - bypasses Layout for custom header/footer */}
                  <Route path="/" element={
                    <Suspense fallback={<PageLoader />}>
                      <Home2 />
                    </Suspense>
                  } />
                  <Route path="/home2" element={<Navigate to="/" replace />} />
                  <Route path="/botox2" element={<Navigate to="/treatments/botox/" replace />} />
                  <Route path="/botox-paris" element={
                    <Suspense fallback={<PageLoader />}>
                      <BotoxParis />
                    </Suspense>
                  } />
                  
                  {/* All other routes use Layout with Home2Header */}
                  <Route path="*" element={
                    <Layout>
                      <Suspense fallback={<PageLoader />}>
                        <Routes>
                          <Route path="/old-index" element={<Index />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/treatments" element={<Treatments />} />
                          <Route path="/our-team" element={<Team />} />
                          <Route path="/our-team/" element={<Team />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/about/" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/contact/" element={<Contact />} />
                          <Route path="/testimonials" element={<Testimonials />} />
                          <Route path="/testimonials/" element={<Testimonials />} />
                          <Route path="/thank-you" element={<ThankYou />} />
                          <Route path="/before-after-gallery" element={<BeforeAfterGallery />} />
                          <Route path="/membership" element={<Membership />} />
                          <Route path="/our-team/dr-ahmed-haq" element={<DrAhmedHaq />} />
                          <Route path="/our-team/dr-ahmed-haq/" element={<DrAhmedHaq />} />
                          <Route path="/our-team/dr-hena-haq" element={<DrHenaHaq />} />
                          <Route path="/our-team/dr-hena-haq/" element={<DrHenaHaq />} />
                          <Route path="/our-team/laerta-aesthetician" element={<LaertaBuzo />} />
                          <Route path="/our-team/laerta-aesthetician/" element={<LaertaBuzo />} />
                          <Route path="/our-team/dr-hassan-mirza" element={<DrHassanMirza />} />
                          <Route path="/our-team/dr-hassan-mirza/" element={<DrHassanMirza />} />
                          <Route path="/our-team/dr-noor-hotaki" element={<DrNoorHotaki />} />
                          <Route path="/our-team/dr-noor-hotaki/" element={<DrNoorHotaki />} />
                          <Route path="/partners" element={<Partners />} />
                          <Route path="/private-gp-doctor" element={<PrivateGPDoctor />} />
                          <Route path="/harley-street-consulting-rooms" element={<HarleyStreetConsultingRooms />} />
                          <Route path="/partnerships" element={<Partnerships />} />
                          <Route path="/auth" element={<Auth />} />
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/admin/video-upload" element={<VideoUpload />} />
                          <Route path="/popup-offer" element={<PopupOffer />} />
                          <Route path="/spin-to-win" element={<SpinToWin />} />
                          
                          {/* Phase 4: Core Hub Pages - Concerns as Dermatology Hub */}
                          <Route path="/concerns" element={<ConcernsHub />} />
                          <Route path="/concerns/" element={<ConcernsHub />} />
                          <Route path="/concerns/acne" element={<AcneTreatment />} />
                          <Route path="/concerns/acne/" element={<AcneTreatment />} />
                          <Route path="/concerns/eczema" element={<EczemaTreatment />} />
                          <Route path="/concerns/eczema/" element={<EczemaTreatment />} />
                          <Route path="/concerns/hyperpigmentation" element={<HyperpigmentationTreatment />} />
                          <Route path="/concerns/hyperpigmentation/" element={<HyperpigmentationTreatment />} />
                          <Route path="/concerns/anti-ageing" element={<NonSurgicalFacelift />} />
                          <Route path="/concerns/anti-ageing/" element={<NonSurgicalFacelift />} />
                          <Route path="/concerns/non-surgical-facelift" element={<NonSurgicalFacelift />} />
                          <Route path="/concerns/non-surgical-facelift/" element={<NonSurgicalFacelift />} />
                          <Route path="/medical" element={<MedicalHub />} />
                          <Route path="/medical/" element={<MedicalHub />} />
                          <Route path="/safety" element={<Safety />} />
                          <Route path="/safety/" element={<Safety />} />
                          
                          {/* ============================================= */}
                          {/* TREATMENTS - New nested /treatments/ routes   */}
                          {/* ============================================= */}
                          
                          {/* Botox Hub & Sub-treatments */}
                          <Route path="/treatments/botox" element={<FaceBotox />} />
                          <Route path="/treatments/botox/" element={<FaceBotox />} />
                          {/* Botox pages redirected to hub */}
                          <Route path="/treatments/botox-cost" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/botox-cost/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/gummy-smile-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/gummy-smile-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/chin-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/chin-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/frown-line-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/frown-line-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/crows-feet-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/crows-feet-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/forehead-lines-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/forehead-lines-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/bunny-lines-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/bunny-lines-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/nasal-flaring-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/nasal-flaring-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/nefertiti-lift" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/nefertiti-lift/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/trap-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/trap-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/calf-slimming-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/calf-slimming-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/bruxism-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/bruxism-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/trigger-point-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/trigger-point-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          
                          {/* Botox standalone pages (kept active) */}
                          <Route path="/treatments/masseter-botox" element={<MasseterBotox />} />
                          <Route path="/treatments/masseter-botox/" element={<MasseterBotox />} />
                          <Route path="/treatments/lip-flip" element={<LipFlip />} />
                          <Route path="/treatments/lip-flip/" element={<LipFlip />} />
                          <Route path="/treatments/oily-skin-botox" element={<OilySkinBotox />} />
                          <Route path="/treatments/oily-skin-botox/" element={<OilySkinBotox />} />
                          
                          {/* Medical Botox standalone pages (kept active) */}
                          <Route path="/treatments/migraine-botox" element={<MigraineBotox />} />
                          <Route path="/treatments/migraine-botox/" element={<MigraineBotox />} />
                          <Route path="/treatments/hyperhidrosis-botox" element={<ExcessiveSweatBotox />} />
                          <Route path="/treatments/hyperhidrosis-botox/" element={<ExcessiveSweatBotox />} />
                          
                          {/* Medical Botox Sub-hub */}
                          <Route path="/treatments/botox/medical" element={<MedicalBotoxHub />} />
                          <Route path="/treatments/botox/medical/" element={<MedicalBotoxHub />} />
                          
                          {/* Dermal Fillers Hub & Sub-treatments */}
                          <Route path="/treatments/dermal-fillers" element={<DermalFillers />} />
                          <Route path="/treatments/dermal-fillers/" element={<DermalFillers />} />
                          
                          {/* Standalone Filler Pages */}
                          <Route path="/treatments/lip-fillers" element={<LipFillers />} />
                          <Route path="/treatments/lip-fillers/" element={<LipFillers />} />
                          <Route path="/treatments/jawline-filler" element={<JawlineFiller />} />
                          <Route path="/treatments/jawline-filler/" element={<JawlineFiller />} />
                          <Route path="/treatments/cheek-filler" element={<CheekFiller />} />
                          <Route path="/treatments/cheek-filler/" element={<CheekFiller />} />
                          <Route path="/treatments/chin-filler" element={<ChinFiller />} />
                          <Route path="/treatments/chin-filler/" element={<ChinFiller />} />
                          <Route path="/treatments/tear-trough-filler" element={<TearTroughFiller />} />
                          <Route path="/treatments/tear-trough-filler/" element={<TearTroughFiller />} />
                          <Route path="/treatments/temple-filler" element={<TempleFiller />} />
                          <Route path="/treatments/temple-filler/" element={<TempleFiller />} />
                          
                          {/* Filler pages redirected to hub */}
                          <Route path="/treatments/dermal-fillers/areas" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/dermal-fillers/areas/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/cupid-bow-lips" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/cupid-bow-lips/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/nose-filler" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/nose-filler/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/forehead-filler" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/forehead-filler/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/neck-filler" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/neck-filler/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/marionette-lines" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/marionette-lines/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/nasolabial-folds" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/nasolabial-folds/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/filler-dissolving" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/filler-dissolving/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/ear-lobe-rejuvenation" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/ear-lobe-rejuvenation/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          
                          {/* Skin Rejuvenation Hub */}
                          <Route path="/treatments/skin-rejuvenation" element={<SkinRejuvenationHub />} />
                          <Route path="/treatments/skin-rejuvenation/" element={<SkinRejuvenationHub />} />
                          
                          {/* Skin Rejuvenation Standalone Pages */}
                          <Route path="/treatments/profhilo" element={<ProfhiloTreatment />} />
                          <Route path="/treatments/profhilo/" element={<ProfhiloTreatment />} />
                          <Route path="/treatments/polynucleotides" element={<PolynucleotideTreatment />} />
                          <Route path="/treatments/polynucleotides/" element={<PolynucleotideTreatment />} />
                          <Route path="/treatments/prp-vampire-facial" element={<PRPTreatment />} />
                          <Route path="/treatments/prp-vampire-facial/" element={<PRPTreatment />} />
                          <Route path="/treatments/prp" element={<Navigate to="/treatments/prp-vampire-facial/" replace />} />
                          <Route path="/treatments/prp/" element={<Navigate to="/treatments/prp-vampire-facial/" replace />} />
                          <Route path="/treatments/microneedling" element={<Microneedling />} />
                          <Route path="/treatments/microneedling/" element={<Microneedling />} />
                          <Route path="/treatments/chemical-peels" element={<ChemicalPeel />} />
                          <Route path="/treatments/chemical-peels/" element={<ChemicalPeel />} />
                          <Route path="/treatments/chemical-peel" element={<Navigate to="/treatments/chemical-peels/" replace />} />
                          <Route path="/treatments/chemical-peel/" element={<Navigate to="/treatments/chemical-peels/" replace />} />
                          <Route path="/treatments/hydrafacial" element={<HydraFacial />} />
                          <Route path="/treatments/hydrafacial/" element={<HydraFacial />} />
                          <Route path="/treatments/pdo-threads" element={<ThreadFaceLift />} />
                          <Route path="/treatments/pdo-threads/" element={<ThreadFaceLift />} />
                          <Route path="/treatments/fat-dissolving" element={<FatDissolve />} />
                          <Route path="/treatments/fat-dissolving/" element={<FatDissolve />} />
                          
                          {/* Skin Rejuvenation - Redirects to hub */}
                          <Route path="/treatments/8-point-facelift" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/8-point-facelift/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/non-surgical-facelift" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/non-surgical-facelift/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/non-surgical-ponytail" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/non-surgical-ponytail/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/prescription-skincare" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/prescription-skincare/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/peel-to-reveal" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/peel-to-reveal/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          
                          {/* Plastic Surgery */}
                          <Route path="/treatments/plastic-surgery" element={<PlasticSurgeon />} />
                          <Route path="/treatments/plastic-surgery/" element={<PlasticSurgeon />} />
                          <Route path="/treatments/blepharoplasty" element={<Blepharoplasty />} />
                          <Route path="/treatments/blepharoplasty/" element={<Blepharoplasty />} />
                          <Route path="/treatments/rhinoplasty" element={<Rhinoplasty />} />
                          <Route path="/treatments/rhinoplasty/" element={<Rhinoplasty />} />
                          <Route path="/treatments/facelift-surgery" element={<FaceliftSurgery />} />
                          <Route path="/treatments/facelift-surgery/" element={<FaceliftSurgery />} />
                          <Route path="/treatments/liposuction" element={<Liposuction />} />
                          <Route path="/treatments/liposuction/" element={<Liposuction />} />
                          <Route path="/treatments/co2-laser" element={<CO2LaserResurfacing />} />
                          <Route path="/treatments/co2-laser/" element={<CO2LaserResurfacing />} />
                          <Route path="/treatments/scar-reduction" element={<ScarReduction />} />
                          <Route path="/treatments/scar-reduction/" element={<ScarReduction />} />
                          <Route path="/treatments/hair-transplant" element={<HairTransplantSurgeon />} />
                          <Route path="/treatments/hair-transplant/" element={<HairTransplantSurgeon />} />
                          
                          {/* Medical Dermatology - Redirects to /concerns/ */}
                          <Route path="/treatments/dermatology" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/treatments/dermatology/" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/treatments/acne" element={<Navigate to="/concerns/acne/" replace />} />
                          <Route path="/treatments/acne/" element={<Navigate to="/concerns/acne/" replace />} />
                          <Route path="/treatments/mole-removal" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/treatments/mole-removal/" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/treatments/eczema" element={<Navigate to="/concerns/eczema/" replace />} />
                          <Route path="/treatments/eczema/" element={<Navigate to="/concerns/eczema/" replace />} />
                          <Route path="/treatments/psoriasis" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/treatments/psoriasis/" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/treatments/hyperpigmentation" element={<Navigate to="/concerns/hyperpigmentation/" replace />} />
                          <Route path="/treatments/hyperpigmentation/" element={<Navigate to="/concerns/hyperpigmentation/" replace />} />
                          
                          {/* Specialised Treatments */}
                          <Route path="/treatments/intimate-bleaching" element={<MedicalAnalBleaching />} />
                          <Route path="/treatments/intimate-bleaching/" element={<MedicalAnalBleaching />} />
                          <Route path="/treatments/advanced-consultation" element={<AdvancedConsultation />} />
                          <Route path="/treatments/advanced-consultation/" element={<AdvancedConsultation />} />
                          <Route path="/treatments/clinical-concepts" element={<ClinicalConceptsToFlawlessSkin />} />
                          <Route path="/treatments/clinical-concepts/" element={<ClinicalConceptsToFlawlessSkin />} />
                          
                          {/* ============================================= */}
                          {/* LEGACY FLAT URL REDIRECTS TO NEW /treatments/ */}
                          {/* ============================================= */}
                          
                          {/* Botox legacy redirects */}
                          <Route path="/botox-london" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/botox-cost-london" element={<Navigate to="/treatments/botox-cost/" replace />} />
                          <Route path="/masseter-botox" element={<Navigate to="/treatments/masseter-botox/" replace />} />
                          <Route path="/lip-flip" element={<Navigate to="/treatments/lip-flip/" replace />} />
                          <Route path="/gummy-smile-botox" element={<Navigate to="/treatments/gummy-smile-botox/" replace />} />
                          <Route path="/chin-botox" element={<Navigate to="/treatments/chin-botox/" replace />} />
                          <Route path="/frown-line-botox" element={<Navigate to="/treatments/frown-line-botox/" replace />} />
                          <Route path="/crows-feet-botox" element={<Navigate to="/treatments/crows-feet-botox/" replace />} />
                          <Route path="/forehead-lines-botox" element={<Navigate to="/treatments/forehead-lines-botox/" replace />} />
                          <Route path="/bunny-lines-botox" element={<Navigate to="/treatments/bunny-lines-botox/" replace />} />
                          <Route path="/nasal-flaring-botox" element={<Navigate to="/treatments/nasal-flaring-botox/" replace />} />
                          <Route path="/nefertiti-botox-face-jaw-lift" element={<Navigate to="/treatments/nefertiti-lift/" replace />} />
                          <Route path="/nefertiti-botox-facelift" element={<Navigate to="/treatments/nefertiti-lift/" replace />} />
                          <Route path="/nefertiti-lift" element={<Navigate to="/treatments/nefertiti-lift/" replace />} />
                          <Route path="/trap-botox" element={<Navigate to="/treatments/trap-botox/" replace />} />
                          <Route path="/botox-calf-reduction" element={<Navigate to="/treatments/calf-slimming-botox/" replace />} />
                          <Route path="/migraine-botox" element={<Navigate to="/treatments/migraine-botox/" replace />} />
                          <Route path="/bruxism-botox" element={<Navigate to="/treatments/bruxism-botox/" replace />} />
                          <Route path="/excessive-sweat-botox" element={<Navigate to="/treatments/hyperhidrosis-botox/" replace />} />
                          <Route path="/oily-skin-botox" element={<Navigate to="/treatments/oily-skin-botox/" replace />} />
                          <Route path="/trigger-point-botox" element={<Navigate to="/treatments/trigger-point-botox/" replace />} />
                          <Route path="/forehead-botox" element={<Navigate to="/treatments/forehead-lines-botox/" replace />} />
                          <Route path="/frown-lines-botox" element={<Navigate to="/treatments/frown-line-botox/" replace />} />
                          <Route path="/chin-dimpling-botox" element={<Navigate to="/treatments/chin-botox/" replace />} />
                          <Route path="/advanced-upper-face-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          
                          {/* Filler legacy redirects */}
                          <Route path="/dermal-fillers" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/lip-fillers" element={<Navigate to="/treatments/lip-fillers/" replace />} />
                          <Route path="/lip-filler" element={<Navigate to="/treatments/lip-fillers/" replace />} />
                          <Route path="/cupid-bow-lips" element={<Navigate to="/treatments/cupid-bow-lips/" replace />} />
                          <Route path="/cheek-filler" element={<Navigate to="/treatments/cheek-filler/" replace />} />
                          <Route path="/cheek-fillers" element={<Navigate to="/treatments/cheek-filler/" replace />} />
                          <Route path="/chin-filler" element={<Navigate to="/treatments/chin-filler/" replace />} />
                          <Route path="/jawline-filler" element={<Navigate to="/treatments/jawline-filler/" replace />} />
                          <Route path="/jawline-fillers" element={<Navigate to="/treatments/jawline-filler/" replace />} />
                          <Route path="/non-surgical-nose-job" element={<Navigate to="/treatments/nose-filler/" replace />} />
                          <Route path="/nose-filler" element={<Navigate to="/treatments/nose-filler/" replace />} />
                          <Route path="/tear-trough-filler" element={<Navigate to="/treatments/tear-trough-filler/" replace />} />
                          <Route path="/tear-trough-fillers" element={<Navigate to="/treatments/tear-trough-filler/" replace />} />
                          <Route path="/temple-filler-london" element={<Navigate to="/treatments/temple-filler/" replace />} />
                          <Route path="/temple-fillers" element={<Navigate to="/treatments/temple-filler/" replace />} />
                          <Route path="/forehead-fillers" element={<Navigate to="/treatments/forehead-filler/" replace />} />
                          <Route path="/neck-fillers" element={<Navigate to="/treatments/neck-filler/" replace />} />
                          <Route path="/neck" element={<Navigate to="/treatments/neck-filler/" replace />} />
                          <Route path="/marionette-lines" element={<Navigate to="/treatments/marionette-lines/" replace />} />
                          <Route path="/marionette-lines-filler" element={<Navigate to="/treatments/marionette-lines/" replace />} />
                          <Route path="/nasolabial-folds" element={<Navigate to="/treatments/nasolabial-folds/" replace />} />
                          <Route path="/lip-filler-dissolve" element={<Navigate to="/treatments/filler-dissolving/" replace />} />
                          <Route path="/ear-lobe-rejuvenation" element={<Navigate to="/treatments/ear-lobe-rejuvenation/" replace />} />
                          
                          {/* Skin & Advanced treatment legacy redirects */}
                          <Route path="/profhilo" element={<Navigate to="/treatments/profhilo/" replace />} />
                          <Route path="/polynucleotide-treatment" element={<Navigate to="/treatments/polynucleotides/" replace />} />
                          <Route path="/prp-treatment" element={<Navigate to="/treatments/prp-vampire-facial/" replace />} />
                          <Route path="/hydrafacial" element={<Navigate to="/treatments/hydrafacial/" replace />} />
                          <Route path="/hydrafacial-london" element={<Navigate to="/treatments/hydrafacial/" replace />} />
                          <Route path="/chemical-peel" element={<Navigate to="/treatments/chemical-peels/" replace />} />
                          <Route path="/microneedling" element={<Navigate to="/treatments/microneedling/" replace />} />
                          <Route path="/pdo-threads" element={<Navigate to="/treatments/pdo-threads/" replace />} />
                          <Route path="/thread-face-lift" element={<Navigate to="/treatments/pdo-threads/" replace />} />
                          <Route path="/thread-lift" element={<Navigate to="/treatments/pdo-threads/" replace />} />
                          <Route path="/8-point-facelift" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/non-surgical-facelift" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/non-surgical-ponytail" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/fat-dissolve" element={<Navigate to="/treatments/fat-dissolving/" replace />} />
                          <Route path="/fat-dissolving-injections" element={<Navigate to="/treatments/fat-dissolving/" replace />} />
                          <Route path="/prescription-skin-care" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/peel-to-reveal" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          
                          {/* Plastic surgery legacy redirects */}
                          <Route path="/plastic-surgeon" element={<Navigate to="/treatments/plastic-surgery/" replace />} />
                          <Route path="/blepharoplasty" element={<Navigate to="/treatments/blepharoplasty/" replace />} />
                          <Route path="/rhinoplasty" element={<Navigate to="/treatments/rhinoplasty/" replace />} />
                          <Route path="/facelift-surgery" element={<Navigate to="/treatments/facelift-surgery/" replace />} />
                          <Route path="/liposuction" element={<Navigate to="/treatments/liposuction/" replace />} />
                          <Route path="/co2-laser-resurfacing" element={<Navigate to="/treatments/co2-laser/" replace />} />
                          <Route path="/scar-reduction" element={<Navigate to="/treatments/scar-reduction/" replace />} />
                          <Route path="/hair-transplant-surgeon" element={<Navigate to="/treatments/hair-transplant/" replace />} />
                          
                          {/* Medical dermatology legacy redirects - Now to /concerns/ */}
                          <Route path="/dermatology" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/acne-treatment" element={<Navigate to="/concerns/acne/" replace />} />
                          <Route path="/mole-removal" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/skin-tag-removal" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/eczema-treatment" element={<Navigate to="/concerns/eczema/" replace />} />
                          <Route path="/psoriasis-treatment" element={<Navigate to="/concerns/" replace />} />
                          <Route path="/hyperpigmentation-treatment" element={<Navigate to="/concerns/hyperpigmentation/" replace />} />
                          
                          {/* Specialised treatment legacy redirects */}
                          <Route path="/medical-anal-bleaching" element={<Navigate to="/treatments/intimate-bleaching/" replace />} />
                          <Route path="/advanced-consultation" element={<Navigate to="/treatments/advanced-consultation/" replace />} />
                          <Route path="/clinical-concepts-to-flawless-skin" element={<Navigate to="/treatments/clinical-concepts/" replace />} />
                          
                          {/* Core pages legacy redirects */}
                          <Route path="/team" element={<Navigate to="/our-team/" replace />} />
                          <Route path="/team/" element={<Navigate to="/our-team/" replace />} />
                          <Route path="/team/dr-ahmed-haq" element={<Navigate to="/our-team/dr-ahmed-haq/" replace />} />
                          <Route path="/team/dr-hena-haq" element={<Navigate to="/our-team/dr-hena-haq/" replace />} />
                          <Route path="/team/laerta-buzo" element={<Navigate to="/our-team/laerta-aesthetician/" replace />} />
                          <Route path="/our-team/laerta-buzo" element={<Navigate to="/our-team/laerta-aesthetician/" replace />} />
                          <Route path="/our-team/laerta-buzo/" element={<Navigate to="/our-team/laerta-aesthetician/" replace />} />
                          <Route path="/team/dr-hassan-mirza" element={<Navigate to="/our-team/dr-hassan-mirza/" replace />} />
                          <Route path="/team/dr-noor-hotaki" element={<Navigate to="/our-team/dr-noor-hotaki/" replace />} />
                          
{/* ============================================= */}
                          <Route path="/price-list" element={<Navigate to="/treatments" replace />} />
                          <Route path="/skin-boosters" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/skin-boosters" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/skin-boosters/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/botox-price-london" element={<Navigate to="/treatments/botox-cost/" replace />} />
                          
{/* ============================================= */}
                          {/* BEFORE & AFTER GALLERIES - New nested routes */}
                          {/* ============================================= */}
                          
                          {/* Before & After Hub */}
                          <Route path="/before-after" element={<BeforeAfterHub />} />
                          <Route path="/before-after/" element={<BeforeAfterHub />} />
                          
                          {/* Category Galleries */}
                          <Route path="/before-after/botox" element={<BeforeAfterBotox />} />
                          <Route path="/before-after/botox/" element={<BeforeAfterBotox />} />
                          <Route path="/before-after/dermal-fillers" element={<BeforeAfterDermalFillers />} />
                          <Route path="/before-after/dermal-fillers/" element={<BeforeAfterDermalFillers />} />
                          <Route path="/before-after/skin-rejuvenation" element={<BeforeAfterSkinRejuvenation />} />
                          <Route path="/before-after/skin-rejuvenation/" element={<BeforeAfterSkinRejuvenation />} />
                          
                          {/* Legacy gallery URL redirect */}
                          <Route path="/before-after-gallery" element={<Navigate to="/before-after/" replace />} />
                          
                          {/* Blog & Content Routes */}
                          <Route path="/botox-faqs" element={<BotoxFAQs />} />
                          <Route path="/ultimate-botox-guide" element={<UltimateBotoxGuide />} />
                          <Route path="/fellowship-invitation" element={<FellowshipInvitation />} />
                          <Route path="/long-term-aesthetic-care-blog" element={<LongTermAestheticCareBlog />} />
                          <Route path="/aesthetic-maintenance-cost-blog" element={<AestheticMaintenanceCostBlog />} />
                          <Route path="/pdo-threads-blog" element={<ThreadFaceLift />} />
                          <Route path="/non-surgical-nose-job-blog" element={<NonSurgicalNoseJobBlog />} />
                          <Route path="/chinese-london-aesthetics-blog" element={<ChineseLondonAestheticsBlog />} />
                          <Route path="/inside-mind-aesthetic-doctor-blog" element={<InsideMindAestheticDoctorBlog />} />
                          <Route path="/cosmetalk/vitamin-c-ferulic-acid-benefits" element={<VitaminCSerumBenefitsBlog />} />
                          <Route path="/cosmetalk/smokers-lines-women" element={<SmokersLinesWomen />} />
                          <Route path="/cosmetalk/flawless-skin" element={<FlawlessSkin />} />
                          <Route path="/cosmetalk/lazy-skin-syndrome" element={<LazySkinSyndrome />} />
                          <Route path="/cosmetalk/orofacial-neck-pain-cycle" element={<OrofacialNeckPainBlog />} />
                          <Route path="/blog/how-to-get-rid-of-bruises-quickly" element={<HowToGetRidOfBruises />} />
                          <Route path="/blog/forehead-wrinkles-myths-tips" element={<ForeheadWrinklesMythsTips />} />
                          <Route path="/blog/lip-wrinkles-treatments" element={<LipWrinklesTreatments />} />
                          <Route path="/blog/skin-tags-and-skin-tag-removal" element={<SkinTagsRemoval />} />
                          <Route path="/blog/beauty-ethnic-neutrality" element={<BeautyEthnicNeutrality />} />
                          <Route path="/journal" element={<BlogHome />} />
                          <Route path="/cosmetalk" element={<CosmetalkBlog />} />
                          
                          {/* Location Routes */}
                          <Route path="/birmingham" element={<BirminghamHome />} />
                          <Route path="/manchester" element={<ManchesterHome />} />
                          <Route path="/cardiff" element={<CardiffHome />} />
                          <Route path="/delhi" element={<DelhiLocation />} />
                          <Route path="/karachi" element={<KarachiLocation />} />
                          <Route path="/barbados" element={<BarbadosHome />} />
                          
                          {/* Language summary pages */}
                          <Route path="/treatments-summary-chinese" element={<TreatmentsSummaryChinese />} />
                          <Route path="/treatments-summary-arabic" element={<TreatmentsSummaryArabic />} />
                          <Route path="/treatments-summary-japanese" element={<TreatmentsSummaryJapanese />} />
                          
                          {/* Other pages */}
                          <Route path="/experimental-treatment" element={<ExperimentalTreatment />} />
                          <Route path="/aesthetics-at-a-glance" element={<AestheticsAtGlance />} />
                          <Route path="/aesthetic-intelligence" element={<AestheticIntelligence />} />
                          <Route path="/product-analysis/:id" element={<ProductAnalysisDetail />} />
                          <Route path="/medical-student-work-experience" element={<MedicalStudentWorkExperience />} />
                          <Route path="/aesthetic-treatments-made-easy" element={<SmartAesthetics />} />
                          <Route path="/untraceably-you" element={<UntraceablyYouCampaign />} />
                          <Route path="/campaign-ads" element={<CampaignAds />} />
                          <Route path="/london-tweakments-natural-aesthetics" element={<LondonTweakmentsNaturalAesthetics />} />
                          <Route path="/aesthetic-training" element={<AestheticTraining />} />
                          
                          {/* 404 catch-all */}
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </Suspense>
                    </Layout>
                  } />
                </Routes>
              </AuthProvider>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
