
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AISearchBar = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const partnershipContext = `
  You are an AI assistant helping potential partners understand the CosmeDoc franchise opportunity. Here's the key information about our partnership:

  ABOUT COSMEDOCS:
  - Sister company of the prestigious Harley Street Institute
  - 15+ years of boutique excellence on Harley Street
  - The UK's first boutique Harley Street aesthetic clinic franchise
  - Revolutionary low-overhead, high-impact franchise model
  - Protected territory allocation based on population

  FRANCHISE DETAILS:
  - Complete Harley Street Franchise Package: £25,000
  - Experienced Practitioner Package: Customized based on qualifications
  - Ongoing franchise fees: £500–£1,500/month
  - Includes world-class Harley Street Institute training
  - All business systems, website, marketing support included
  - Protected territory rights with population-based allocation

  ELIGIBILITY:
  - GMC-registered Doctors
  - GDC-registered Dentists  
  - NMC-registered Nurses (with prescribing rights)
  - Pharmacist Prescribers
  - Independent Prescribers (qualified and insured for aesthetics)

  TRAINING & SUPPORT:
  - Advanced Harley Street techniques
  - Boutique service standards
  - Clinical excellence protocols
  - Business development mastery
  - Ongoing mentorship
  - Innovation updates

  TERRITORY PROTECTION:
  - <100K population: 1 clinic
  - 100K–300K: Max 2 clinics
  - 300K–500K: 3–4 clinics
  - 500K–1M: 4–6 clinics
  - 1M+: Up to 10 clinics

  KEY BENEFITS:
  - No premises required initially
  - Harley Street prestige and heritage
  - Comprehensive training from world-renowned institute
  - Low initial investment compared to traditional franchises
  - Flexible operational model
  - Protected territories
  - Ongoing support and mentorship

  INNOVATIVE APPROACH:
  - We use AI and blockchain-based contracts rather than traditional human contracts
  - AI arbitration system for fair, transparent dispute resolution
  - Technology-forward approach aligning with our commitment to innovation

  Please answer questions about this franchise opportunity in a helpful, professional manner. Focus on the benefits, training quality, support provided, and how this partnership can help medical professionals build a successful aesthetic practice.
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
          context: partnershipContext
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

  const handleNewQuestion = () => {
    setQuestion("");
    setResponse("");
  };

  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-amber-500/20">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Ask about our franchise opportunity:
        </label>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., What training do I receive? How much territory protection? What are the costs?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="bg-zinc-700 border-zinc-600"
          />
          <Button 
            onClick={handleSearch}
            disabled={isLoading}
            className="shrink-0"
          >
            {isLoading ? (
              "Searching..."
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Ask AI
              </>
            )}
          </Button>
        </div>
      </div>

      {response && (
        <div className="mt-6">
          <h4 className="font-medium mb-3 text-amber-400">AI Response:</h4>
          <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700">
            <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {response}
            </p>
          </div>
          <Button 
            onClick={handleNewQuestion}
            variant="outline"
            className="mt-4 border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
          >
            Ask Another Question
          </Button>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>💡 Try asking about: training programs, investment costs, territory protection, support provided, or eligibility requirements</p>
      </div>
    </div>
  );
};

export default AISearchBar;
