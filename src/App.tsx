
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import TreatmentsSummaryArabic from "./pages/TreatmentsSummaryArabic";
import TreatmentsSummaryChinese from "./pages/TreatmentsSummaryChinese";
import DermalFillerMakeover from "./pages/DermalFillerMakeover";
import MedicalAnalBleaching from "./pages/MedicalAnalBleaching";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="treatments" element={<Layout><Treatments /></Layout>} />
              <Route path="treatments-summary-arabic" element={<Layout><TreatmentsSummaryArabic /></Layout>} />
              <Route path="treatments-summary-chinese" element={<Layout><TreatmentsSummaryChinese /></Layout>} />
              <Route path="dermal-filler-makeover" element={<Layout><DermalFillerMakeover /></Layout>} />
              <Route path="medical-anal-bleaching" element={<Layout><MedicalAnalBleaching /></Layout>} />
              <Route path="about" element={<Layout><About /></Layout>} />
              <Route path="contact" element={<Layout><Contact /></Layout>} />
              <Route path="partners" element={<Layout><Partners /></Layout>} />
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

export const generateSEOMetadata = (title: string, description: string, canonical: string, image?: string) => {
  return {
    title: title,
    description: description,
    canonical: `https://cosmedocs.com${canonical}`,
    image: image || 'https://cosmedocs.com/lovable-uploads/c60a1e1c-0406-4552-9246-e93bdc4d7474.png',
  };
};
