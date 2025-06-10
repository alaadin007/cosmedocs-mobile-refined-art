
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Index from './pages/Index';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LipFillers from './pages/LipFillers';
import NonSurgicalNoseJob from './pages/NonSurgicalNoseJob';
import NonSurgicalFacelift from './pages/NonSurgicalFacelift';
import PDOThreads from './pages/PDOThreads';
import LowerFaceBotox from './pages/LowerFaceBotox';
import AdvancedUpperFaceBotox from './pages/AdvancedUpperFaceBotox';
import NefertitiBotoxFacelift from './pages/NefertitiBotoxFacelift';
import TriggerPointBotox from './pages/TriggerPointBotox';
import MedicalAnalBleaching from './pages/MedicalAnalBleaching';
import AdvancedConsultation from './pages/AdvancedConsultation';
import Partners from './pages/Partners';
import BirminghamHome from './pages/BirminghamHome';
import ManchesterHome from './pages/ManchesterHome';
import CardiffHome from './pages/CardiffHome';
import TreatmentsSummaryArabic from './pages/TreatmentsSummaryArabic';
import TreatmentsSummaryChinese from './pages/TreatmentsSummaryChinese';
import ChineseLondonAestheticsBlog from './pages/ChineseLondonAestheticsBlog';
import NonSurgicalNoseJobBlog from './pages/NonSurgicalNoseJobBlog';
import PDOThreadsBlog from './pages/PDOThreadsBlog';
import AestheticMaintenanceCostBlog from './pages/AestheticMaintenanceCostBlog';
import ClinicalConceptsToFlawlessSkin from './pages/ClinicalConceptsToFlawlessSkin';
import DermalFillerMakeover from './pages/DermalFillerMakeover';
import LipFillerDissolve from './pages/LipFillerDissolve';
import BeforeAfterGallery from './pages/BeforeAfterGallery';
import BotoxCalfReduction from './pages/BotoxCalfReduction';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/treatments" element={<Layout><Treatments /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/lip-fillers" element={<Layout><LipFillers /></Layout>} />
            <Route path="/non-surgical-nose-job" element={<Layout><NonSurgicalNoseJob /></Layout>} />
            <Route path="/non-surgical-facelift" element={<Layout><NonSurgicalFacelift /></Layout>} />
            <Route path="/pdo-threads" element={<Layout><PDOThreads /></Layout>} />
            <Route path="/lower-face-botox" element={<Layout><LowerFaceBotox /></Layout>} />
            <Route path="/advanced-upper-face-botox" element={<Layout><AdvancedUpperFaceBotox /></Layout>} />
            <Route path="/nefertiti-botox-facelift" element={<Layout><NefertitiBotoxFacelift /></Layout>} />
            <Route path="/trigger-point-botox" element={<Layout><TriggerPointBotox /></Layout>} />
            <Route path="/medical-anal-bleaching" element={<Layout><MedicalAnalBleaching /></Layout>} />
            <Route path="/advanced-consultation" element={<Layout><AdvancedConsultation /></Layout>} />
            <Route path="/partners" element={<Layout><Partners /></Layout>} />
            <Route path="/birmingham" element={<Layout><BirminghamHome /></Layout>} />
            <Route path="/manchester" element={<Layout><ManchesterHome /></Layout>} />
            <Route path="/cardiff" element={<Layout><CardiffHome /></Layout>} />
            <Route path="/treatments-summary-arabic" element={<Layout><TreatmentsSummaryArabic /></Layout>} />
            <Route path="/treatments-summary-chinese" element={<Layout><TreatmentsSummaryChinese /></Layout>} />
            <Route path="/chinese-london-aesthetics-blog" element={<Layout><ChineseLondonAestheticsBlog /></Layout>} />
            <Route path="/non-surgical-nose-job-blog" element={<Layout><NonSurgicalNoseJobBlog /></Layout>} />
            <Route path="/pdo-threads-blog" element={<Layout><PDOThreadsBlog /></Layout>} />
            <Route path="/aesthetic-maintenance-cost-blog" element={<Layout><AestheticMaintenanceCostBlog /></Layout>} />
            <Route path="/clinical-concepts-to-flawless-skin" element={<Layout><ClinicalConceptsToFlawlessSkin /></Layout>} />
            <Route path="/dermal-filler-makeover" element={<Layout><DermalFillerMakeover /></Layout>} />
            <Route path="/lip-filler-dissolve" element={<Layout><LipFillerDissolve /></Layout>} />
            <Route path="/before-after-gallery" element={<Layout><BeforeAfterGallery /></Layout>} />
            <Route path="/botox-calf-reduction" element={<Layout><BotoxCalfReduction /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
