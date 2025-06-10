
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface LiquidGlassSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiquidGlassSearch({ isOpen, onClose }: LiquidGlassSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchContext = `
  You are an AI assistant helping users find information about Cosmedocs, a premium aesthetic medicine clinic on Harley Street, London.

  ABOUT COSMEDOCS:
  - Premium aesthetic medicine clinic located on Harley Street, London
  - Established since 2007 with over 1 million injections performed
  - Specializes in Botox, dermal fillers, lip enhancement, non-surgical treatments
  - Philosophy: "Our aesthetics is invisible art • Bold • Natural • Always Your Way"
  - Aesthetic medicine that is minimal, quiet, invisible, not exaggerated
  
  TREATMENTS OFFERED:
  - Botox injections (forehead, crow's feet, frown lines)
  - Dermal fillers (cheeks, lips, nasolabial folds)
  - Lip enhancement and lip fillers
  - Non-surgical nose jobs
  - Facial rejuvenation
  - Skin boosters and hydration treatments
  - Anti-aging treatments
  - Facial contouring
  
  CONTACT INFORMATION:
  - Location: 10 Harley Street, London W1G 9PF
  - Phone: 0333 0551 503
  - Email: info@cosmedocs.com
  - WhatsApp: +447735606447
  
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
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          question: query,
          context: searchContext
        }
      });

      if (error) {
        throw error;
      }

      setResults(data.response);
      
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

              {/* Results */}
              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="font-medium mb-3 text-white/90">AI Response:</h3>
                  <div className="text-white/80 leading-relaxed space-y-2">
                    {results.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <Button 
                    onClick={handleClear}
                    variant="outline"
                    className="mt-4 border-white/20 text-white/70 hover:bg-white/10 rounded-xl"
                    size="sm"
                  >
                    Clear & Search Again
                  </Button>
                </motion.div>
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
