import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient } from 'react-query';

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

function App() {
  return (
    <HelmetProvider>
      <QueryClient>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="treatments" element={<Treatments />} />
                <Route path="treatments-summary-arabic" element={<TreatmentsSummaryArabic />} />
                <Route path="treatments-summary-chinese" element={<TreatmentsSummaryChinese />} />
                <Route path="dermal-filler-makeover" element={<DermalFillerMakeover />} />
                <Route path="medical-anal-bleaching" element={<MedicalAnalBleaching />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="partners" element={<Partners />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClient>
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
