
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  useQuery,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "@/components/ui/toaster";

import Index from "./pages/Index";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import LipFillers from "./pages/LipFillers";
import LipFillerDissolve from "./pages/LipFillerDissolve";
import NonSurgicalNoseJob from "./pages/NonSurgicalNoseJob";
import NonSurgicalFacelift from "./pages/NonSurgicalFacelift";
import DermalFillerMakeover from "./pages/DermalFillerMakeover";
import TriggerPointBotox from "./pages/TriggerPointBotox";
import MedicalAnalBleaching from "./pages/MedicalAnalBleaching";
import TreatmentsSummaryArabic from "./pages/TreatmentsSummaryArabic";
import TreatmentsSummaryChinese from "./pages/TreatmentsSummaryChinese";
import BirminghamHome from "./pages/BirminghamHome";
import ManchesterHome from "./pages/ManchesterHome";
import CardiffHome from "./pages/CardiffHome";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ClinicalConceptsToFlawlessSkin from "./pages/ClinicalConceptsToFlawlessSkin";
import AdvancedConsultation from "./pages/AdvancedConsultation";
import AdvancedUpperFaceBotox from "./pages/AdvancedUpperFaceBotox";
import NefertitiBotoxFacelift from "./pages/NefertitiBotoxFacelift";

const queryClient = new QueryClient()

export const generateSEOMetadata = (title: string, description: string, canonical: string, image?: string) => {
  return {
    title: title,
    description: description,
    canonical: `https://www.cosmedocs.com${canonical}`,
    image: image || "https://www.cosmedocs.com/default-og-image.jpg" // Provide a default image URL
  };
};

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/treatments" element={<Layout><Treatments /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/partners" element={<Layout><Partners /></Layout>} />
            <Route path="/lip-fillers" element={<Layout><LipFillers /></Layout>} />
            <Route path="/lip-filler-dissolve" element={<Layout><LipFillerDissolve /></Layout>} />
            <Route path="/non-surgical-nose-job" element={<Layout><NonSurgicalNoseJob /></Layout>} />
            <Route path="/non-surgical-facelift" element={<Layout><NonSurgicalFacelift /></Layout>} />
            <Route path="/dermal-filler-makeover" element={<Layout><DermalFillerMakeover /></Layout>} />
            <Route path="/clinical-concepts-to-flawless-skin" element={<Layout><ClinicalConceptsToFlawlessSkin /></Layout>} />
            <Route path="/advanced-consultation" element={<Layout><AdvancedConsultation /></Layout>} />
            <Route path="/advanced-upper-face-botox" element={<Layout><AdvancedUpperFaceBotox /></Layout>} />
            <Route path="/nefertiti-botox-facelift" element={<Layout><NefertitiBotoxFacelift /></Layout>} />
            <Route path="/trigger-point-botox" element={<Layout><TriggerPointBotox /></Layout>} />
            <Route path="/medical-anal-bleaching" element={<Layout><MedicalAnalBleaching /></Layout>} />
            <Route path="/treatments-summary-arabic" element={<Layout><TreatmentsSummaryArabic /></Layout>} />
            <Route path="/treatments-summary-chinese" element={<Layout><TreatmentsSummaryChinese /></Layout>} />
            <Route path="/birmingham" element={<Layout><BirminghamHome /></Layout>} />
            <Route path="/manchester" element={<Layout><ManchesterHome /></Layout>} />
            <Route path="/cardiff" element={<Layout><CardiffHome /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
