import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CosmeDocsAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const priceContext = `
  You are CosmeDocs AI, an expert assistant for CosmeDocs aesthetic clinic on Harley Street, London. You have comprehensive knowledge of all treatments and pricing. Here's the complete price information:

  CONSULTATION:
  - Injectable consultation: £50 (redeemable against any treatment)

  BOTOX TREATMENTS (Female prices - Male supplement +£50 for 1-3 main areas):
  - 1 Area (forehead OR frown OR crow's feet): £175
  - 2 Areas (e.g., forehead + frown): £275  
  - 3 Areas (forehead + frown + crow's feet): £350
  - Chin Botox: £50 (add-on)
  - Brow Lift: £50 (add-on)
  - Gummy Smile: £50 (add-on)
  - Bunny Lines: £50 (add-on)
  - Lip Flip: £175
  - Nefertiti Face Lift (neck bands/platysma): £300
  - Jelly Roll Botox: £175
  - Full Face Natural Botox (3 areas + lower face): £500
  - Dermal Filler for Deep Lines (with Botox): £200
  - Masseter (Jawline Slimming / Bruxism): £350
  - Migraines / Headaches: £450-£550
  - Trigger Point Botox: £350-£550
  - Full Barbie Botox (Shoulder Reduction): £450
  - Rosacea & Blushing: £350-£450

  SWEAT-TOX (HYPERHIDROSIS):
  - Underarms Advanced: £550
  - Palms: £550
  - Forehead: £350
  - Scalp: £600
  - Nose: £200
  - Cheeks: £200

  DERMAL FILLERS - ANTI-AGEING:
  - Marionette Lines: £325/ml
  - Nasolabial Folds: £325/ml
  - Jawline (High Def/Jowls): £350/ml
  - Cheek Volume: £350/ml
  - Tear Trough / Under Eye Circles: £425
  - Profhilo: £350
  - Neck Lines Hydromax: £350
  - Polynucleotide: POC

  FACIAL CONTOURING / OTHER FILLERS:
  - Lip Filler 0.5ml (Natural): £300
  - Lip Filler 1.0ml (Bold & Plump): £350
  - Lip Filler 1.5ml: £400
  - Non Surgical Nose Job (Dermal Filler): £450 (results last 12–18 months)
  - Non Surgical Nose Job (PCL Threads): £950 (results can last up to 3 years — ideal for tip lifting & bridge straightening)
  - Non Surgical Nose Job (Combined Filler + Threads): Results can last 2–3 years depending on modality
  - Nose Filler Maintenance: £400
  - Forehead Filler (Bumps & Dips): £400
  - Temples Hollowing: £350/ml
  - Redensity 1: £250/ml
  - Aqualyx Fat Dissolving: POC
  - PDO Threads: Visit page for pricing

  HYALURONIC MAKEOVER:
  - HAMA 1 (3 syringes): £1,250 (Guide: 32-45, slim face)
  - HAMA 2 (4 syringes): £1,500 (Guide: 45-65, slim face)

  CLINIC INFORMATION:
  - Location: 10 Harley Street, London W1G 9PF
  - Phone: 0333 0551 503
  - Email: info@cosmedocs.com
  - WhatsApp: +447735606447
  - Established: 2007
  - Over 1 million injections performed
  - Philosophy: "Our aesthetics is invisible art" - Bold • Natural • Always Your Way

  CONSULTATION POLICY:
  - Injectable consultation: £50 off any treatment
  - All treatments include aftercare and follow-up
  - Book online: Book Now

  PAYMENT OPTIONS:
  - Cash/Card payment
  - 0% finance available
  - Package deals for multiple treatments

  Please provide helpful, accurate information about treatments and pricing. Always mention that final prices may vary based on individual assessment and that a consultation is recommended for personalised treatment plans.
  `;

  const handleSearch = async () => {
    if (!question.trim()) {
      toast.error("Please enter a question");
      return;
    }

    setIsLoading(true);
    setResponse("");

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          question: question,
          context: priceContext
        }
      });

      if (error) {
        throw error;
      }

      setResponse(data.response);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast.error("Unable to get response at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (text: string) => {
    const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const paragraphs = formattedText.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split('\n');
      
      return (
        <div key={index} className="mb-4 last:mb-0">
          {lines.map((line, lineIndex) => (
            <div 
              key={lineIndex} 
              className={`${lineIndex > 0 ? 'mt-2' : ''}`}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      );
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-500/30 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Search className="w-4 h-4" />
        <span>Ask me anything</span>
      </motion.button>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-zinc-900 to-black border-l border-blue-500/20 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">CosmeDocs AI</h3>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Search Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Ask about treatments, prices, or anything else:
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="e.g., How much does Botox cost? What's included in dermal filler makeover?"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      className="bg-zinc-800 border-zinc-600 text-white placeholder-gray-400"
                    />
                    <Button 
                      onClick={handleSearch}
                      disabled={isLoading}
                      className="shrink-0 bg-blue-600 hover:bg-blue-700"
                    >
                      {isLoading ? "..." : <Search className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {/* Response */}
                {response && (
                  <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                    <div className="text-gray-300 leading-relaxed space-y-2">
                      {formatResponse(response)}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                <div className="mt-6 text-xs text-gray-500">
                  <p className="mb-2">💡 Try asking about:</p>
                  <ul className="space-y-1">
                    <li>• Botox prices for different areas</li>
                    <li>• Lip filler costs and options</li>
                    <li>• Package deals and consultations</li>
                    <li>• Treatment duration and aftercare</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CosmeDocsAI;