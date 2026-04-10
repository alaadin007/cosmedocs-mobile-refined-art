import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, memo } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";
import ErrorBoundary from "./components/ErrorBoundary";

// Eager load critical pages only
import Index from "./pages/Index";

// Lazy load all other pages
const Home = lazy(() => import("./pages/Home"));
const Home2 = lazy(() => import("./pages/Home2"));

const Prices = lazy(() => import("./pages/Prices"));
const TreatmentsHub = lazy(() => import("./pages/TreatmentsHub"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const LipFillers = lazy(() => import("./pages/LipFillers"));
const CupidBowLips = lazy(() => import("./pages/CupidBowLips"));
const ForeheadFillers = lazy(() => import("./pages/ForeheadFillers"));
const NonSurgicalNoseJob = lazy(() => import("./pages/NonSurgicalNoseJob"));
const NoseFillerTreatment = lazy(() => import("./pages/NoseFillerTreatment"));
const BeforeAfterGallery = lazy(() => import("./pages/BeforeAfterGallery"));
const BeforeAfterHub = lazy(() => import("./pages/BeforeAfterHub"));
const BeforeAfterBotox = lazy(() => import("./pages/BeforeAfterBotox"));
const BeforeAfterDermalFillers = lazy(() => import("./pages/BeforeAfterDermalFillers"));
const BeforeAfterLipFiller = lazy(() => import("./pages/BeforeAfterLipFiller"));
const BeforeAfterNoseFiller = lazy(() => import("./pages/BeforeAfterNoseFiller"));
const BeforeAfterSkinRejuvenation = lazy(() => import("./pages/BeforeAfterSkinRejuvenation"));
const BeforeAfterBotoxMasseter = lazy(() => import("./pages/BeforeAfterBotoxMasseter"));
const BeforeAfterCheekFiller = lazy(() => import("./pages/BeforeAfterCheekFiller"));
const BeforeAfterJawlineFiller = lazy(() => import("./pages/BeforeAfterJawlineFiller"));
const BeforeAfterTearTroughFiller = lazy(() => import("./pages/BeforeAfterTearTroughFiller"));
const BeforeAfterChinFiller = lazy(() => import("./pages/BeforeAfterChinFiller"));
const BeforeAfterTempleFiller = lazy(() => import("./pages/BeforeAfterTempleFiller"));
const BeforeAfterFullFaceMakeover = lazy(() => import("./pages/BeforeAfterFullFaceMakeover"));
const BeforeAfterPolynucleotides = lazy(() => import("./pages/BeforeAfterPolynucleotides"));
const BeforeAfterLaserHairRemoval = lazy(() => import("./pages/BeforeAfterLaserHairRemoval"));
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
const MediaNews = lazy(() => import("./pages/MediaNews"));
const Shop = lazy(() => import("./pages/Shop"));
const SkinEducationGuide = lazy(() => import("./pages/SkinEducationGuide"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BotoxCalfReduction = lazy(() => import("./pages/BotoxCalfReduction"));
const MasseterBotox = lazy(() => import("./pages/MasseterBotox"));
const LipFillerDissolve = lazy(() => import("./pages/LipFillerDissolve"));
const PrivateGPDoctor = lazy(() => import("./pages/PrivateGPDoctor"));
const NonSurgicalFacelift = lazy(() => import("./pages/NonSurgicalFacelift"));
const NonSurgicalFaceliftHub = lazy(() => import("./pages/NonSurgicalFaceliftHub"));
const EndolaserLift = lazy(() => import("./pages/EndolaserLift"));
const Sunekos = lazy(() => import("./pages/Sunekos"));
const Jalupro = lazy(() => import("./pages/Jalupro"));
const LumiEyes = lazy(() => import("./pages/LumiEyes"));
const Exosomes = lazy(() => import("./pages/Exosomes"));
const ThreadFaceLift = lazy(() => import("./pages/ThreadFaceLift").then(m => ({ default: m.ThreadFaceLift })));
const TriggerPointBotox = lazy(() => import("./pages/TriggerPointBotox"));
const AcneTreatment = lazy(() => import("./pages/AcneTreatment"));
const MedicalAnalBleaching = lazy(() => import("./pages/MedicalAnalBleaching"));
const DermalFillers = lazy(() => import("./pages/DermalFillers"));
const DermalFillerAreas = lazy(() => import("./pages/DermalFillerAreas"));
const NefertitiBotoxFacelift = lazy(() => import("./pages/NefertitiBotoxFacelift"));
const FaceBotox = lazy(() => import("./pages/FaceBotox"));
const FaceBotoxLight = lazy(() => import("./pages/FaceBotoxLight"));
const AdvancedConsultation = lazy(() => import("./pages/AdvancedConsultation"));
const FellowshipInvitation = lazy(() => import("./pages/FellowshipInvitation"));
const LongTermAestheticCareBlog = lazy(() => import("./pages/LongTermAestheticCareBlog"));
const AestheticMaintenanceCostBlog = lazy(() => import("./pages/AestheticMaintenanceCostBlog"));
const NonSurgicalNoseJobBlog = lazy(() => import("./pages/NonSurgicalNoseJobBlog"));
const Turning30AestheticGuide = lazy(() => import("./pages/Turning30AestheticGuide"));
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
const ChinesePatients = lazy(() => import("./pages/ChinesePatients"));
const ArabicPatients = lazy(() => import("./pages/ArabicPatients"));
const SwedishPatients = lazy(() => import("./pages/SwedishPatients"));
const NorwegianPatients = lazy(() => import("./pages/NorwegianPatients"));
const FinnishPatients = lazy(() => import("./pages/FinnishPatients"));
const GermanPatients = lazy(() => import("./pages/GermanPatients"));
const FrenchPatients = lazy(() => import("./pages/FrenchPatients"));
const JapanesePatients = lazy(() => import("./pages/JapanesePatients"));
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
const CalfSlimmingBotox = lazy(() => import("./pages/CalfSlimmingBotox"));
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
const BotoxCostUK = lazy(() => import("./pages/BotoxCostUK"));
const BotoxUnitsExplained = lazy(() => import("./pages/BotoxUnitsExplained"));
const CheapBotoxVsExpensive = lazy(() => import("./pages/CheapBotoxVsExpensive"));
const BotoxPriceLondon = lazy(() => import("./pages/BotoxPriceLondon"));
const HowLongDoesBotoxLast = lazy(() => import("./pages/HowLongDoesBotoxLast"));
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
const LaserTreatmentsHub = lazy(() => import("./pages/LaserTreatmentsHub"));
const LaserHairRemoval = lazy(() => import("./pages/LaserHairRemoval"));
const PicoLaser = lazy(() => import("./pages/PicoLaser"));
const MedicalStudentWorkExperience = lazy(() => import("./pages/MedicalStudentWorkExperience"));
const SmartAesthetics = lazy(() => import("./pages/SmartAesthetics"));
const UntraceablyYouCampaign = lazy(() => import("./pages/UntraceablyYouCampaign"));
const CampaignAds = lazy(() => import("./pages/CampaignAds"));
const SocialMediaGallery = lazy(() => import("./pages/SocialMediaGallery"));

const SpinToWin = lazy(() => import("./pages/SpinToWin"));
const OrofacialNeckPainBlog = lazy(() => import("./pages/OrofacialNeckPainBlog"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const HowToGetRidOfBruises = lazy(() => import("./pages/HowToGetRidOfBruises"));
const ForeheadWrinklesMythsTips = lazy(() => import("./pages/ForeheadWrinklesMythsTips"));
const LipWrinklesTreatments = lazy(() => import("./pages/LipWrinklesTreatments"));
const SkinTagsRemoval = lazy(() => import("./pages/SkinTagsRemoval"));
const MedicalBrandTrustBlog = lazy(() => import("./pages/blog/MedicalBrandTrustBlog"));
const ClinicNameConfusion = lazy(() => import("./pages/blog/ClinicNameConfusion"));
const TearTroughFillerResultsExplained = lazy(() => import("./pages/blog/TearTroughFillerResultsExplained"));
const JawFillerResultsExplained = lazy(() => import("./pages/blog/JawFillerResultsExplained"));
const ChinFillerResultsExplained = lazy(() => import("./pages/blog/ChinFillerResultsExplained"));
const LipFillerResultsExplained = lazy(() => import("./pages/blog/LipFillerResultsExplained"));
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
const HAMakeover = lazy(() => import("./pages/HAMakeover"));
const BeforeAfterHAMakeover = lazy(() => import("./pages/BeforeAfterHAMakeover"));
const MedicalBotoxHub = lazy(() => import("./pages/MedicalBotoxHub"));
const Safety = lazy(() => import("./pages/Safety"));
const SalicylicAcidPeel = lazy(() => import("./pages/SalicylicAcidPeel"));
const GlycolicAcidPeel = lazy(() => import("./pages/GlycolicAcidPeel"));
const LacticAcidPeel = lazy(() => import("./pages/LacticAcidPeel"));
const TCAPeel = lazy(() => import("./pages/TCAPeel"));

const TranslatedHomepage = lazy(() => import("./pages/TranslatedHomepage"));
const TranslatedTreatmentPage = lazy(() => import("./pages/TranslatedTreatmentPage"));

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
                <LanguageProvider>
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
                  
                  {/* ============================================= */}
                  {/* MULTILINGUAL ROUTES — /ar/, /fr/, /es/         */}
                  {/* ============================================= */}
                  
                  {/* Arabic Routes */}
                  <Route path="/ar/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedHomepage /></Suspense></Layout>} />
                  <Route path="/ar/treatments/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="treatments" /></Suspense></Layout>} />
                  <Route path="/ar/treatments/botox/" element={<Layout><Suspense fallback={<PageLoader />}><FaceBotoxLight /></Suspense></Layout>} />
                  <Route path="/ar/treatments/dermal-fillers/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="dermalFillers" /></Suspense></Layout>} />
                  <Route path="/ar/treatments/lip-fillers/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="lipFillers" /></Suspense></Layout>} />
                  <Route path="/ar/treatments/jawline-filler/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="jawlineFiller" /></Suspense></Layout>} />
                  <Route path="/ar/treatments/chin-filler/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="chinFiller" /></Suspense></Layout>} />
                  <Route path="/ar/treatments/tear-trough-filler/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="tearTroughFiller" /></Suspense></Layout>} />
                  <Route path="/ar/treatments/skin-rejuvenation/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="skinRejuvenation" /></Suspense></Layout>} />
                  <Route path="/ar/prices/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="prices" /></Suspense></Layout>} />
                  <Route path="/ar/contact/" element={<Layout><Suspense fallback={<PageLoader />}><Contact /></Suspense></Layout>} />
                  <Route path="/ar/about-us/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="about" /></Suspense></Layout>} />
                  
                  {/* French Routes — with translated slugs */}
                  <Route path="/fr/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedHomepage /></Suspense></Layout>} />
                  <Route path="/fr/traitements/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="treatments" /></Suspense></Layout>} />
                  <Route path="/fr/traitements/botox/" element={<Layout><Suspense fallback={<PageLoader />}><FaceBotoxLight /></Suspense></Layout>} />
                  <Route path="/fr/traitements/acide-hyaluronique/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="dermalFillers" /></Suspense></Layout>} />
                  <Route path="/fr/traitements/injection-levres/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="lipFillers" /></Suspense></Layout>} />
                  <Route path="/fr/traitements/filler-machoire/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="jawlineFiller" /></Suspense></Layout>} />
                  <Route path="/fr/traitements/filler-menton/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="chinFiller" /></Suspense></Layout>} />
                  <Route path="/fr/traitements/cernes-creuses/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="tearTroughFiller" /></Suspense></Layout>} />
                  <Route path="/fr/traitements/rajeunissement-peau/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="skinRejuvenation" /></Suspense></Layout>} />
                  <Route path="/fr/tarifs/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="prices" /></Suspense></Layout>} />
                  <Route path="/fr/contact/" element={<Layout><Suspense fallback={<PageLoader />}><Contact /></Suspense></Layout>} />
                  <Route path="/fr/a-propos/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="about" /></Suspense></Layout>} />
                  
                  {/* Spanish Routes — with translated slugs */}
                  <Route path="/es/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedHomepage /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="treatments" /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/botox/" element={<Layout><Suspense fallback={<PageLoader />}><FaceBotoxLight /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/acido-hialuronico/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="dermalFillers" /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/relleno-labios/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="lipFillers" /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/relleno-mandibula/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="jawlineFiller" /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/relleno-menton/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="chinFiller" /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/ojeras/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="tearTroughFiller" /></Suspense></Layout>} />
                  <Route path="/es/tratamientos/rejuvenecimiento-piel/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="skinRejuvenation" /></Suspense></Layout>} />
                  <Route path="/es/precios/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="prices" /></Suspense></Layout>} />
                  <Route path="/es/contacto/" element={<Layout><Suspense fallback={<PageLoader />}><Contact /></Suspense></Layout>} />
                  <Route path="/es/sobre-nosotros/" element={<Layout><Suspense fallback={<PageLoader />}><TranslatedTreatmentPage pageKey="about" /></Suspense></Layout>} />

                  {/* Non-trailing-slash versions redirect */}
                  <Route path="/ar" element={<Navigate to="/ar/" replace />} />
                  <Route path="/fr" element={<Navigate to="/fr/" replace />} />
                  <Route path="/es" element={<Navigate to="/es/" replace />} />

                  {/* All other routes use Layout with Home2Header */}
                  <Route path="*" element={
                    <Layout>
                      <Suspense fallback={<PageLoader />}>
                        <Routes>
                          <Route path="/old-index" element={<Index />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/treatments" element={<TreatmentsHub />} />
                          <Route path="/prices" element={<Prices />} />
                          <Route path="/prices/" element={<Prices />} />
                          <Route path="/our-team" element={<Team />} />
                          <Route path="/our-team/" element={<Team />} />
                          <Route path="/about" element={<Navigate to="/about-us/" replace />} />
                          <Route path="/about/" element={<Navigate to="/about-us/" replace />} />
                          <Route path="/about-us" element={<AboutUs />} />
                          <Route path="/about-us/" element={<AboutUs />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/contact/" element={<Contact />} />
                          <Route path="/testimonials" element={<Testimonials />} />
                          <Route path="/testimonials/" element={<Testimonials />} />
                          <Route path="/thank-you" element={<ThankYou />} />
                          <Route path="/before-after-gallery" element={<Navigate to="/before-after/" replace />} />
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
                          <Route path="/media-news" element={<MediaNews />} />
                          <Route path="/media-news/" element={<MediaNews />} />
                          <Route path="/shop" element={<Shop />} />
                          <Route path="/shop/" element={<Shop />} />
                          <Route path="/skin-education-guide" element={<SkinEducationGuide />} />
                          <Route path="/skin-education-guide/" element={<SkinEducationGuide />} />
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
                          <Route path="/concerns/pigmentation-melasma" element={<HyperpigmentationTreatment />} />
                          <Route path="/concerns/pigmentation-melasma/" element={<HyperpigmentationTreatment />} />
                          <Route path="/concerns/hyperpigmentation" element={<Navigate to="/concerns/pigmentation-melasma/" replace />} />
                          <Route path="/concerns/hyperpigmentation/" element={<Navigate to="/concerns/pigmentation-melasma/" replace />} />
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
                          <Route path="/treatments/botox" element={<FaceBotoxLight />} />
                          <Route path="/treatments/botox/" element={<FaceBotoxLight />} />
                          <Route path="/treatments/botox-dark" element={<FaceBotox />} />
                          <Route path="/treatments/botox-dark/" element={<FaceBotox />} />
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
                          <Route path="/treatments/trap-botox" element={<TrapBotox />} />
                          <Route path="/treatments/trap-botox/" element={<TrapBotox />} />
                          <Route path="/treatments/calf-slimming-botox" element={<CalfSlimmingBotox />} />
                          <Route path="/treatments/calf-slimming-botox/" element={<CalfSlimmingBotox />} />
                          <Route path="/treatments/bruxism-botox" element={<BruxismBotox />} />
                          <Route path="/treatments/bruxism-botox/" element={<BruxismBotox />} />
                          <Route path="/treatments/trigger-point-botox" element={<Navigate to="/treatments/botox/" replace />} />
                          <Route path="/treatments/trigger-point-botox/" element={<Navigate to="/treatments/botox/" replace />} />
                          
                          {/* Botox standalone pages (kept active) */}
                          <Route path="/treatments/masseter-botox" element={<MasseterBotox />} />
                          <Route path="/treatments/masseter-botox/" element={<MasseterBotox />} />
                          <Route path="/treatments/lip-flip" element={<LipFlip />} />
                          <Route path="/treatments/lip-flip/" element={<LipFlip />} />
                          <Route path="/treatments/oily-skin-botox" element={<OilySkinBotox />} />
                          <Route path="/treatments/oily-skin-botox/" element={<OilySkinBotox />} />
                          
                          {/* Medical Botox standalone pages - redirect old URLs to new /medical/ children */}
                          <Route path="/treatments/migraine-botox" element={<Navigate to="/medical/botox-for-migraines/" replace />} />
                          <Route path="/treatments/migraine-botox/" element={<Navigate to="/medical/botox-for-migraines/" replace />} />
                          <Route path="/treatments/hyperhidrosis-botox" element={<Navigate to="/medical/botox-for-hyperhidrosis/" replace />} />
                          <Route path="/treatments/hyperhidrosis-botox/" element={<Navigate to="/medical/botox-for-hyperhidrosis/" replace />} />
                          
                          {/* Medical Hub child pages */}
                          <Route path="/medical/botox-for-migraines" element={<MigraineBotox />} />
                          <Route path="/medical/botox-for-migraines/" element={<MigraineBotox />} />
                          <Route path="/medical/botox-for-hyperhidrosis" element={<ExcessiveSweatBotox />} />
                          <Route path="/medical/botox-for-hyperhidrosis/" element={<ExcessiveSweatBotox />} />
                          
                          {/* Medical Botox Sub-hub - redirect to /medical/ */}
                          <Route path="/treatments/botox/medical" element={<Navigate to="/medical/" replace />} />
                          <Route path="/treatments/botox/medical/" element={<Navigate to="/medical/" replace />} />
                          
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
                          
                          {/* Nose Filler Treatment Page */}
                          <Route path="/treatments/dermal-fillers/nose" element={<NoseFillerTreatment />} />
                          <Route path="/treatments/dermal-fillers/nose/" element={<NoseFillerTreatment />} />
                          
                          {/* Filler pages redirected to hub */}
                          <Route path="/treatments/dermal-fillers/areas" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/dermal-fillers/areas/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/cupid-bow-lips" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/cupid-bow-lips/" element={<Navigate to="/treatments/dermal-fillers/" replace />} />
                          <Route path="/treatments/nose-filler" element={<Navigate to="/treatments/dermal-fillers/nose/" replace />} />
                          <Route path="/treatments/nose-filler/" element={<Navigate to="/treatments/dermal-fillers/nose/" replace />} />
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
                          <Route path="/treatments/sunekos" element={<Sunekos />} />
                          <Route path="/treatments/sunekos/" element={<Sunekos />} />
                          <Route path="/treatments/jalupro" element={<Jalupro />} />
                          <Route path="/treatments/jalupro/" element={<Jalupro />} />
                          <Route path="/treatments/lumi-eyes" element={<LumiEyes />} />
                          <Route path="/treatments/lumi-eyes/" element={<LumiEyes />} />
                          <Route path="/treatments/exosomes" element={<Exosomes />} />
                          <Route path="/treatments/exosomes/" element={<Exosomes />} />
                          <Route path="/treatments/prp-vampire-facial" element={<PRPTreatment />} />
                          <Route path="/treatments/prp-vampire-facial/" element={<PRPTreatment />} />
                          <Route path="/treatments/prp" element={<Navigate to="/treatments/prp-vampire-facial/" replace />} />
                          <Route path="/treatments/prp/" element={<Navigate to="/treatments/prp-vampire-facial/" replace />} />
                          <Route path="/treatments/microneedling" element={<Microneedling />} />
                          <Route path="/treatments/microneedling/" element={<Microneedling />} />
                          <Route path="/treatments/chemical-peels" element={<ChemicalPeel />} />
                          <Route path="/treatments/chemical-peels/" element={<ChemicalPeel />} />
                          <Route path="/treatments/chemical-peels/salicylic-acid-peel" element={<SalicylicAcidPeel />} />
                          <Route path="/treatments/chemical-peels/salicylic-acid-peel/" element={<SalicylicAcidPeel />} />
                          <Route path="/treatments/chemical-peels/glycolic-acid-peel" element={<GlycolicAcidPeel />} />
                          <Route path="/treatments/chemical-peels/glycolic-acid-peel/" element={<GlycolicAcidPeel />} />
                          <Route path="/treatments/chemical-peels/lactic-acid-peel" element={<LacticAcidPeel />} />
                          <Route path="/treatments/chemical-peels/lactic-acid-peel/" element={<LacticAcidPeel />} />
                          <Route path="/treatments/chemical-peels/tca-peel" element={<TCAPeel />} />
                          <Route path="/treatments/chemical-peels/tca-peel/" element={<TCAPeel />} />
                          <Route path="/treatments/chemical-peel" element={<Navigate to="/treatments/chemical-peels/" replace />} />
                          <Route path="/treatments/chemical-peel/" element={<Navigate to="/treatments/chemical-peels/" replace />} />
                          <Route path="/treatments/hydrafacial" element={<HydraFacial />} />
                          <Route path="/treatments/hydrafacial/" element={<HydraFacial />} />
                          <Route path="/treatments/pdo-threads" element={<ThreadFaceLift />} />
                          <Route path="/treatments/pdo-threads/" element={<ThreadFaceLift />} />
                          <Route path="/treatments/fat-dissolving" element={<FatDissolve />} />
                          <Route path="/treatments/fat-dissolving/" element={<FatDissolve />} />
                          
                          {/* HA Makeover */}
                          <Route path="/treatments/ha-makeover" element={<HAMakeover />} />
                          <Route path="/treatments/ha-makeover/" element={<HAMakeover />} />
                          
                          {/* 8-Point Facelift → HA Makeover redirect */}
                          <Route path="/treatments/8-point-facelift" element={<Navigate to="/treatments/ha-makeover/" replace />} />
                          <Route path="/treatments/8-point-facelift/" element={<Navigate to="/treatments/ha-makeover/" replace />} />
                          <Route path="/treatments/non-surgical-facelift" element={<NonSurgicalFaceliftHub />} />
                          <Route path="/treatments/non-surgical-facelift/" element={<NonSurgicalFaceliftHub />} />
                          <Route path="/treatments/endolaser" element={<EndolaserLift />} />
                          <Route path="/treatments/endolaser/" element={<EndolaserLift />} />
                          <Route path="/treatments/non-surgical-ponytail" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/non-surgical-ponytail/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/prescription-skincare" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/prescription-skincare/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/peel-to-reveal" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/peel-to-reveal/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          
                          {/* Laser Treatments */}
                          <Route path="/treatments/laser-treatments" element={<LaserTreatmentsHub />} />
                          <Route path="/treatments/laser-treatments/" element={<LaserTreatmentsHub />} />
                          <Route path="/treatments/co2-laser" element={<CO2LaserResurfacing />} />
                          <Route path="/treatments/co2-laser/" element={<CO2LaserResurfacing />} />
                          <Route path="/treatments/laser-hair-removal" element={<LaserHairRemoval />} />
                          <Route path="/treatments/laser-hair-removal/" element={<LaserHairRemoval />} />
                          <Route path="/treatments/pico-laser" element={<PicoLaser />} />
                          <Route path="/treatments/pico-laser/" element={<PicoLaser />} />

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
                          <Route path="/treatments/hyperpigmentation" element={<Navigate to="/concerns/pigmentation-melasma/" replace />} />
                          <Route path="/treatments/hyperpigmentation/" element={<Navigate to="/concerns/pigmentation-melasma/" replace />} />
                          
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
                          <Route path="/migraine-botox" element={<Navigate to="/medical/botox-for-migraines/" replace />} />
                          <Route path="/bruxism-botox" element={<Navigate to="/treatments/bruxism-botox/" replace />} />
                          <Route path="/excessive-sweat-botox" element={<Navigate to="/medical/botox-for-hyperhidrosis/" replace />} />
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
                          <Route path="/non-surgical-nose-job" element={<Navigate to="/treatments/dermal-fillers/nose/" replace />} />
                          <Route path="/nose-filler" element={<Navigate to="/treatments/dermal-fillers/nose/" replace />} />
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
                          <Route path="/8-point-facelift" element={<Navigate to="/treatments/ha-makeover/" replace />} />
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
                          <Route path="/hyperpigmentation-treatment" element={<Navigate to="/concerns/pigmentation-melasma/" replace />} />
                          
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
                          <Route path="/price-list" element={<Navigate to="/prices/" replace />} />
                          <Route path="/skin-boosters" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/skin-boosters" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/treatments/skin-boosters/" element={<Navigate to="/treatments/skin-rejuvenation/" replace />} />
                          <Route path="/botox-price-london" element={<BotoxPriceLondon />} />
                          <Route path="/botox-price-london/" element={<BotoxPriceLondon />} />
                          <Route path="/botox-cost-uk" element={<BotoxCostUK />} />
                          <Route path="/botox-cost-uk/" element={<BotoxCostUK />} />
                          <Route path="/botox-units-explained" element={<BotoxUnitsExplained />} />
                          <Route path="/botox-units-explained/" element={<BotoxUnitsExplained />} />
                          <Route path="/how-long-does-botox-last" element={<HowLongDoesBotoxLast />} />
                          <Route path="/how-long-does-botox-last/" element={<HowLongDoesBotoxLast />} />
                          <Route path="/cheap-botox-vs-expensive" element={<CheapBotoxVsExpensive />} />
                          <Route path="/cheap-botox-vs-expensive/" element={<CheapBotoxVsExpensive />} />
                          
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
                          
                          {/* Dermal Filler Sub-Galleries */}
                          <Route path="/before-after/dermal-fillers/lips" element={<BeforeAfterLipFiller />} />
                          <Route path="/before-after/dermal-fillers/lips/" element={<BeforeAfterLipFiller />} />
                          <Route path="/before-after/dermal-fillers/nose" element={<BeforeAfterNoseFiller />} />
                          <Route path="/before-after/dermal-fillers/nose/" element={<BeforeAfterNoseFiller />} />
                          <Route path="/before-after/dermal-fillers/cheeks" element={<BeforeAfterCheekFiller />} />
                          <Route path="/before-after/dermal-fillers/cheeks/" element={<BeforeAfterCheekFiller />} />
                          <Route path="/before-after/dermal-fillers/jawline" element={<BeforeAfterJawlineFiller />} />
                          <Route path="/before-after/dermal-fillers/jawline/" element={<BeforeAfterJawlineFiller />} />
                          <Route path="/before-after/dermal-fillers/tear-trough" element={<BeforeAfterTearTroughFiller />} />
                          <Route path="/before-after/dermal-fillers/tear-trough/" element={<BeforeAfterTearTroughFiller />} />
                          <Route path="/before-after/dermal-fillers/chin" element={<BeforeAfterChinFiller />} />
                          <Route path="/before-after/dermal-fillers/chin/" element={<BeforeAfterChinFiller />} />
                          
                          <Route path="/before-after/dermal-fillers/temples" element={<BeforeAfterTempleFiller />} />
                          <Route path="/before-after/dermal-fillers/temples/" element={<BeforeAfterTempleFiller />} />
                          <Route path="/before-after/dermal-fillers/full-face-makeover" element={<BeforeAfterFullFaceMakeover />} />
                          <Route path="/before-after/dermal-fillers/full-face-makeover/" element={<BeforeAfterFullFaceMakeover />} />
                          
                          {/* Botox Sub-Galleries */}
                          <Route path="/before-after/botox/masseter" element={<BeforeAfterBotoxMasseter />} />
                          <Route path="/before-after/botox/masseter/" element={<BeforeAfterBotoxMasseter />} />
                          
                          <Route path="/before-after/skin-rejuvenation" element={<BeforeAfterSkinRejuvenation />} />
                          <Route path="/before-after/skin-rejuvenation/" element={<BeforeAfterSkinRejuvenation />} />
                          <Route path="/before-after/skin-rejuvenation/polynucleotides" element={<BeforeAfterPolynucleotides />} />
                          <Route path="/before-after/skin-rejuvenation/polynucleotides/" element={<BeforeAfterPolynucleotides />} />
                          
                          <Route path="/before-after/laser-hair-removal" element={<BeforeAfterLaserHairRemoval />} />
                          <Route path="/before-after/laser-hair-removal/" element={<BeforeAfterLaserHairRemoval />} />
                          
                          {/* Legacy redirect: ha-makeover → dermal-fillers/full-face-makeover */}
                          <Route path="/before-after/ha-makeover" element={<Navigate to="/before-after/dermal-fillers/full-face-makeover/" replace />} />
                          <Route path="/before-after/ha-makeover/" element={<Navigate to="/before-after/dermal-fillers/full-face-makeover/" replace />} />
                          
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
                          
                          {/* ===== ONLY 4 BLOGS PERMITTED ===== */}
                          <Route path="/blog/tear-trough-filler-results-explained" element={<TearTroughFillerResultsExplained />} />
                          <Route path="/blog/tear-trough-filler-results-explained/" element={<TearTroughFillerResultsExplained />} />
                          <Route path="/blog/jaw-filler-results-explained" element={<JawFillerResultsExplained />} />
                          <Route path="/blog/jaw-filler-results-explained/" element={<JawFillerResultsExplained />} />
                          <Route path="/blog/chin-filler-results-explained" element={<ChinFillerResultsExplained />} />
                          <Route path="/blog/chin-filler-results-explained/" element={<ChinFillerResultsExplained />} />
                          <Route path="/blog/lip-filler-results-explained" element={<LipFillerResultsExplained />} />
                          <Route path="/blog/lip-filler-results-explained/" element={<LipFillerResultsExplained />} />

                          {/* Blog hub — lists only the 4 permitted blogs */}
                          <Route path="/journal" element={<BlogHome />} />
                          <Route path="/blog" element={<BlogHome />} />
                          <Route path="/blog/" element={<BlogHome />} />
                          
                          {/* All legacy /blog/* and /cosmetalk/* handled by Netlify _redirects */}
                          
                          {/* Location Routes */}
                          <Route path="/birmingham" element={<BirminghamHome />} />
                          <Route path="/manchester" element={<ManchesterHome />} />
                          <Route path="/cardiff" element={<CardiffHome />} />
                          <Route path="/delhi" element={<DelhiLocation />} />
                          <Route path="/karachi" element={<KarachiLocation />} />
                          <Route path="/barbados" element={<BarbadosHome />} />
                          
                          {/* Language summary pages */}
                          <Route path="/chinese-patients" element={<ChinesePatients />} />
                          <Route path="/treatments-summary-chinese" element={<Navigate to="/chinese-patients/" replace />} />
                          <Route path="/arabic-patients" element={<ArabicPatients />} />
                          <Route path="/treatments-summary-arabic" element={<Navigate to="/arabic-patients/" replace />} />
                          <Route path="/treatments-summary-japanese" element={<Navigate to="/japanese-patients/" replace />} />
                          <Route path="/treatments-summary-japanese/" element={<Navigate to="/japanese-patients/" replace />} />
                          
                          {/* International Patient Hubs */}
                          <Route path="/swedish-patients" element={<SwedishPatients />} />
                          <Route path="/swedish-patients/" element={<SwedishPatients />} />
                          <Route path="/norwegian-patients" element={<NorwegianPatients />} />
                          <Route path="/norwegian-patients/" element={<NorwegianPatients />} />
                          <Route path="/finnish-patients" element={<FinnishPatients />} />
                          <Route path="/finnish-patients/" element={<FinnishPatients />} />
                          <Route path="/german-patients" element={<GermanPatients />} />
                          <Route path="/german-patients/" element={<GermanPatients />} />
                          <Route path="/french-patients" element={<FrenchPatients />} />
                          <Route path="/french-patients/" element={<FrenchPatients />} />
                          <Route path="/japanese-patients" element={<JapanesePatients />} />
                          <Route path="/japanese-patients/" element={<JapanesePatients />} />
                          
                          {/* Other pages */}
                          <Route path="/experimental-treatment" element={<ExperimentalTreatment />} />
                          <Route path="/aesthetics-at-a-glance" element={<AestheticsAtGlance />} />
                          <Route path="/aesthetic-intelligence" element={<AestheticIntelligence />} />
                          <Route path="/product-analysis/:id" element={<ProductAnalysisDetail />} />
                          <Route path="/medical-student-work-experience" element={<MedicalStudentWorkExperience />} />
                          <Route path="/aesthetic-treatments-made-easy" element={<SmartAesthetics />} />
                          <Route path="/untraceably-you" element={<UntraceablyYouCampaign />} />
                          <Route path="/turning-30-aesthetic-guide" element={<Turning30AestheticGuide />} />
                          <Route path="/turning-30-aesthetic-guide/" element={<Turning30AestheticGuide />} />
                          <Route path="/campaign-ads" element={<CampaignAds />} />
                          <Route path="/social-media-gallery" element={<SocialMediaGallery />} />
                          <Route path="/social-media-gallery/" element={<SocialMediaGallery />} />
                          
                          <Route path="/aesthetic-training" element={<AestheticTraining />} />
                          
                          {/* 404 catch-all */}
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </Suspense>
                    </Layout>
                  } />
                </Routes>
                </LanguageProvider>
              </AuthProvider>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
