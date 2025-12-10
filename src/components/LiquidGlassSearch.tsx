
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import aiAssessmentIcon from "@/assets/icons/ai-assessment-icon.png";
import smartAestheticsIcon from "@/assets/icons/smart-aesthetics-icon.png";
import aiDoctorChatIcon from "@/assets/icons/ai-doctor-chat-icon.png";

interface LiquidGlassSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChatbot?: () => void;
}

export default function LiquidGlassSearch({ isOpen, onClose, onOpenChatbot }: LiquidGlassSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pageIndex = [
    { title: "T‑Zone Oily Skin Botox", path: "/oily-skin-botox", keywords: ["t-zone", "oily skin", "sebum", "botox"] },
    { title: "Fat Dissolve", path: "/fat-dissolve", keywords: ["aqualyx", "fat dissolve", "body", "emsculpt"] },
    { title: "CosmeDerm Medical Dermatology", path: "/cosmederm", keywords: ["cosmederm", "dermatology", "medical dermatology", "skin"] },
  ];

  const matchedPages = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as typeof pageIndex;
    return pageIndex.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);

  const searchContext = `
  You are an AI assistant helping users find information about Cosmedocs, a premium aesthetic medicine clinic on Harley Street, London.

  ABOUT COSMEDOCS:
  - Premium aesthetic medicine clinic located on Harley Street, London
  - Established since 2007 with over 1 million injections performed
  - Specializes in Botox, dermal fillers, lip enhancement, non-surgical treatments
  - Philosophy: "Our aesthetics is invisible art • Bold • Natural • Always Your Way"
  - Aesthetic medicine that is minimal, quiet, invisible, not exaggerated
  
  CONSULTATION:
  - Injectable consultation: £50 (redeemable against any treatment)

  BOTOX TREATMENTS (Female prices - Male supplement +£50 for 1-3 main areas):
  - 1 Area (forehead OR frown OR crow's feet): £175
  - 2 Areas (e.g., forehead + frown): £275  
  - 3 Areas (forehead + frown + crow's feet): £350
  - Chin, Brow Lift, Gummy Smile, Bunny Lines: £50 each (add-on)
  - Lip Flip: £175
  - Nefertiti Face Lift: £300
  - Masseter (Jawline Slimming): £350
  - Full Face Natural Botox: £500
  - Migraines/Headaches: £450-£550
   - Trigger Point Botox: £350-£550
   - T-Zone Oily Skin Botox: £250 (reduces sebum production, controls shine)
   - Sweat-Tox (Underarms Advanced, Palms): £550
  - Sweat-Tox (Scalp): £600

  DERMAL FILLERS:
  - Lip Filler 0.5ml (Natural): £300
  - Lip Filler 1.0ml (Bold & Plump): £350
  - Lip Filler 1.5ml: £400
  - Non Surgical Nose Job: £450
  - Tear Trough: £425
  - Cheek Volume: £350/ml
  - Jawline (High Def): £350/ml
  - Marionette Lines: £325/ml
  - Nasolabial Folds: £325/ml
   - Profhilo: £350
   - HAMA 1 (3 syringes): £1,250
   - HAMA 2 (4 syringes): £1,500
   - Fat Dissolve/Emsculpt: POC (non-invasive body contouring and fat reduction)
   
   MEDICAL DERMATOLOGY (CosmeDerm):
   - Comprehensive skin health assessments
   - Medical-grade dermatological treatments
   - Advanced skin condition management
   - Clinical dermatology consultations
  
  CONTACT INFORMATION:
  - Location: 10 Harley Street, London W1G 9PF
  - Phone: 0333 0551 503
  - Email: info@cosmedocs.com
  - WhatsApp: +447735606447
  - Book online: Book Now at https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29
  
  Please provide helpful, accurate information about our treatments, booking process, and aesthetic medicine expertise.
  `;

  const handleSearch = async () => {
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    setIsLoading(true);
    setResults("");

    try {
      const { data, error } = await supabase.functions.invoke('ai-knowledge-chat', {
        body: {
          question: query,
          includeWebSearch: true
        }
      });

      if (error) {
        throw error;
      }

      setResults(data.answer);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast.error("Unable to get response at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Liquid glass background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20" />
            
            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Search Cosmedocs</h2>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Search Input */}
              <div className="flex gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                  <Input
                    placeholder="Ask about treatments, booking, or anything else..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-2xl backdrop-blur-sm"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="bg-white/20 text-white hover:bg-white/30 rounded-2xl px-6 border border-white/20"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Search"
                  )}
                </Button>
              </div>

              {/* Suggested pages */}
              {!isLoading && !results && matchedPages.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-white/80 text-sm mb-2">Suggested pages</h3>
                  <div className="flex flex-col gap-2">
                    {matchedPages.slice(0, 6).map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        onClick={onClose}
                        className="flex items-center justify-between px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white/90 transition-colors"
                      >
                        <span className="text-sm">{p.title}</span>
                        <span className="text-xs text-white/60">Open</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex flex-col max-h-96"
                >
                  <h3 className="font-medium p-6 pb-3 text-white/90">AI Response:</h3>
                  <div className="flex-1 overflow-y-auto px-6 pb-3">
                    <div className="text-white/80 leading-relaxed space-y-2">
                      {results.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Follow-up Chat */}
                  <div className="p-6 pt-3 border-t border-white/10">
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Ask a follow-up question..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl text-sm"
                      />
                      <Button 
                        onClick={handleSearch}
                        disabled={isLoading}
                        size="sm"
                        className="bg-white/20 text-white hover:bg-white/30 rounded-xl border border-white/20"
                      >
                        Ask
                      </Button>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Button 
                        onClick={() => window.open('https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29', '_blank')}
                        size="sm"
                        className="bg-primary/20 text-white hover:bg-primary/30 rounded-xl border border-primary/20"
                      >
                        Book Now
                      </Button>
                      <Button 
                        onClick={() => window.open('tel:03330551503', '_blank')}
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/70 hover:bg-white/10 rounded-xl"
                      >
                        Call
                      </Button>
                      <Button 
                        onClick={() => window.open('https://wa.me/447735606447', '_blank')}
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/70 hover:bg-white/10 rounded-xl"
                      >
                        WhatsApp
                      </Button>
                      <Button 
                        onClick={() => window.open('https://instagram.com/cosmedocs', '_blank')}
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/70 hover:bg-white/10 rounded-xl"
                      >
                        Instagram
                      </Button>
                    </div>
                    
                    <Button 
                      onClick={handleClear}
                      variant="ghost"
                      className="text-white/50 hover:text-white/70 hover:bg-white/5 rounded-xl text-xs"
                      size="sm"
                    >
                      Clear & Search Again
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* AI Quick Links */}
              {!results && !isLoading && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {/* Free AI Assessment */}
                  <a 
                    href="https://ai.cosmedocs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-xl p-4 transition-all duration-300 text-center"
                  >
                    <img src={aiAssessmentIcon} alt="AI Assessment" className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xs font-medium text-white mb-1">Free <span className="text-primary">AI</span> Assessment</h4>
                    <p className="text-[10px] text-white/50">Face • Hair • Skin</p>
                  </a>
                  
                  {/* Smart Aesthetics */}
                  <Link 
                    to="/aesthetic-treatments-made-easy"
                    onClick={onClose}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-xl p-4 transition-all duration-300 text-center"
                  >
                    <img src={smartAestheticsIcon} alt="Smart Aesthetics" className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xs font-medium text-white mb-1">Smart Aesthetics</h4>
                    <p className="text-[10px] text-white/50">Stop Wasting Money</p>
                  </Link>
                  
                  {/* AI Doctor Chat */}
                  <button 
                    onClick={() => {
                      onClose();
                      onOpenChatbot?.();
                    }}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-xl p-4 transition-all duration-300 text-center"
                  >
                    <img src={aiDoctorChatIcon} alt="AI Doctor Chat" className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xs font-medium text-white mb-1"><span className="text-primary">AI</span>esthetics Doctor</h4>
                    <p className="text-[10px] text-white/50">Ask anything</p>
                  </button>
                </div>
              )}

              {/* Quick suggestions */}
              {!results && !isLoading && (
                <div className="space-y-3">
                  <p className="text-white/70 text-sm">Try asking about:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Botox treatments",
                      "Lip fillers",
                      "Booking process",
                      "Treatment costs",
                      "Non-surgical nose job"
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-xs hover:bg-white/20 transition-colors border border-white/20"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
