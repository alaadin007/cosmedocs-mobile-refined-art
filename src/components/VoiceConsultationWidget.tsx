import { useState, useCallback, useRef, useEffect } from "react";
import { useConversation } from "@elevenlabs/react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mic, MicOff, Camera, X, Phone, PhoneOff, 
  Sparkles, ChevronRight, Loader2, MessageCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

type ConsultationPhase = 'welcome' | 'skin' | 'wrinkles' | 'volume' | 'summary';

interface PatientInfo {
  name: string;
  images: { phase: ConsultationPhase; dataUrl: string }[];
  analyses: { phase: string; text: string }[];
}

// Voice wave bars component
const VoiceWaves = ({ isActive, level }: { isActive: boolean; level: number }) => {
  const bars = 5;
  return (
    <div className="flex items-center gap-[3px] h-6">
      {Array.from({ length: bars }).map((_, i) => {
        const baseHeight = isActive ? 0.3 + Math.random() * 0.7 : 0.15;
        const height = Math.max(0.15, Math.min(1, baseHeight * (0.5 + level)));
        const delay = i * 0.1;
        return (
          <div
            key={i}
            className={`w-[3px] rounded-full transition-all duration-150 ${
              isActive ? 'bg-[#C9A050]' : 'bg-white/20'
            }`}
            style={{
              height: `${height * 24}px`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

// Animated voice visualiser that polls volume
const LiveVoiceVisualiser = ({ 
  conversation, 
  isSpeaking 
}: { 
  conversation: ReturnType<typeof useConversation>; 
  isSpeaking: boolean;
}) => {
  const [bars, setBars] = useState<number[]>([0.15, 0.15, 0.15, 0.15, 0.15]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const update = () => {
      const vol = isSpeaking 
        ? conversation.getOutputVolume() 
        : conversation.getInputVolume();
      const v = typeof vol === 'number' ? vol : 0;
      
      setBars(prev => prev.map((_, i) => {
        const jitter = (Math.random() - 0.5) * 0.3;
        return Math.max(0.1, Math.min(1, v * 2 + jitter));
      }));
      
      frameRef.current = requestAnimationFrame(update);
    };
    
    frameRef.current = requestAnimationFrame(update);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [conversation, isSpeaking]);

  return (
    <div className="flex items-center justify-center gap-[3px] h-10">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-[4px] rounded-full transition-all duration-100 ${
            isSpeaking ? 'bg-[#C9A050]' : 'bg-green-400'
          }`}
          style={{ height: `${Math.max(4, h * 40)}px` }}
        />
      ))}
    </div>
  );
};

const AGENT_ID = 'agent_01jx39axdsfc0s9y7jcqjj75fd';

const VoiceConsultationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<ConsultationPhase>('welcome');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '', images: [], analyses: []
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // ElevenLabs Conversational AI
  const conversation = useConversation({
    onConnect: () => {
      console.log('Voice consultation connected');
      setTranscript(prev => [...prev, '🎙️ Connected — speak naturally']);
    },
    onDisconnect: () => {
      console.log('Voice consultation disconnected');
      setTranscript(prev => [...prev, '📞 Consultation ended']);
    },
    onMessage: (message: any) => {
      if (message?.type === 'user_transcript') {
        const text = message?.user_transcription_event?.user_transcript;
        if (text) setTranscript(prev => [...prev, `You: ${text}`]);
      } else if (message?.type === 'agent_response') {
        const text = message?.agent_response_event?.agent_response;
        if (text) setTranscript(prev => [...prev, `Dr. AI: ${text}`]);
      }
    },
    onError: (error) => {
      console.error('Conversation error:', error);
      toast({ 
        title: "Connection Error", 
        description: "Voice connection interrupted. Please try again.", 
        variant: "destructive" 
      });
    },
  });

  // Scroll to bottom on new messages
  useEffect(() => {
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [transcript]);

  // Start real-time voice consultation
  const startConsultation = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Get signed token from our edge function
      const { data, error } = await supabase.functions.invoke('elevenlabs-conversation-token', {
        body: { agentId: AGENT_ID }
      });

      if (error || !data?.token) {
        throw new Error(error?.message || 'Failed to get conversation token');
      }

      setCurrentPhase('skin');
      setIsExpanded(true);

      // Start the real-time conversation
      await conversation.startSession({
        conversationToken: data.token,
      } as any);

      // Send patient context
      if (patientInfo.name) {
        conversation.sendContextualUpdate(`The patient's name is ${patientInfo.name}. Greet them by name.`);
      }
    } catch (err: any) {
      console.error('Failed to start consultation:', err);
      toast({ 
        title: "Connection Failed", 
        description: err.message || "Could not start voice consultation.", 
        variant: "destructive" 
      });
    } finally {
      setIsConnecting(false);
    }
  }, [conversation, patientInfo.name]);

  // End consultation
  const endConsultation = useCallback(async () => {
    await conversation.endSession();
    setCurrentPhase('summary');
  }, [conversation]);

  // Image handling
  const handleImageCapture = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "File Too Large", description: "Please use images under 10MB.", variant: "destructive" });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const dataUrl = reader.result as string;
      
      setPatientInfo(prev => ({
        ...prev,
        images: [...prev.images, { phase: currentPhase, dataUrl }]
      }));

      setTranscript(prev => [...prev, `📸 Photo uploaded — analysing...`]);
      setIsAnalysing(true);
      setAnalysisResult(null);
      
      try {
        const base64 = dataUrl.split(',')[1];
        const { data, error } = await supabase.functions.invoke('ai-skin-consultation', {
          body: {
            images: [base64],
            phase: currentPhase === 'welcome' ? 'skin' : currentPhase,
            patientContext: patientInfo.name ? `Patient: ${patientInfo.name}` : undefined,
          }
        });

        if (error) throw error;

        const analysis = data?.analysis || 'Analysis could not be completed.';
        setAnalysisResult(analysis);
        setPatientInfo(prev => ({
          ...prev,
          analyses: [...prev.analyses, { phase: currentPhase, text: analysis }]
        }));
        setTranscript(prev => [...prev, `🔬 Analysis complete`]);

        // Feed the analysis back into the live conversation
        if (conversation.status === 'connected') {
          conversation.sendContextualUpdate(
            `IMAGE ANALYSIS RESULTS for ${currentPhase} phase:\n${analysis}\n\nDiscuss these findings naturally. Reference specific areas and recommend treatments with prices.`
          );
        }
      } catch (err: any) {
        console.error('Analysis error:', err);
        toast({ title: "Analysis Error", description: "Could not analyse the image.", variant: "destructive" });
      } finally {
        setIsAnalysing(false);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, [currentPhase, patientInfo, conversation]);

  // Phase advancement
  const advancePhase = useCallback(async () => {
    const phases: ConsultationPhase[] = ['welcome', 'skin', 'wrinkles', 'volume', 'summary'];
    const idx = phases.indexOf(currentPhase);
    if (idx < phases.length - 1) {
      const next = phases[idx + 1];
      setCurrentPhase(next);
      setAnalysisResult(null);

      if (next === 'summary') {
        await endConsultation();
        return;
      }

      // Tell the agent to transition phases
      if (conversation.status === 'connected') {
        const phaseInstructions: Record<string, string> = {
          wrinkles: "The patient is ready to move to Phase 2: Lines & Wrinkles. Transition naturally - tell them you'll now look at their lines and wrinkles, distinguishing dynamic lines (respond to Botox) from static lines (need fillers). Ask them to upload a new photo.",
          volume: "The patient is ready to move to Phase 3: Volume & Structure. Transition naturally - tell them you'll now assess facial volume including cheeks, jawline, under-eyes and lips. Ask them to upload a photo.",
        };
        conversation.sendContextualUpdate(phaseInstructions[next] || `Moving to ${next} phase.`);
      }
    }
  }, [currentPhase, endConsultation, conversation]);

  const phaseLabels: Record<ConsultationPhase, { title: string; subtitle: string; icon: string }> = {
    welcome: { title: 'Welcome', subtitle: "Let's begin your consultation", icon: '👋' },
    skin: { title: 'Skin Quality', subtitle: 'Tone, texture, pores & clarity', icon: '✨' },
    wrinkles: { title: 'Lines & Wrinkles', subtitle: 'Dynamic and static lines', icon: '📐' },
    volume: { title: 'Volume & Structure', subtitle: 'Facial harmony & balance', icon: '💎' },
    summary: { title: 'Summary', subtitle: 'Your personalised plan', icon: '📋' },
  };

  const isConnected = conversation.status === 'connected';

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-[#C9A050] to-[#B8913F] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Start AI Voice Consultation"
      >
        <Mic className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed z-50 bg-black/95 backdrop-blur-xl border border-[#C9A050]/30 rounded-2xl shadow-2xl transition-all duration-500 flex flex-col ${
      isExpanded 
        ? 'bottom-4 right-4 left-4 top-4 md:left-auto md:w-[480px] md:top-4' 
        : 'bottom-20 right-4 w-[380px] max-h-[600px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#C9A050]/20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A050] to-[#8B7332] flex items-center justify-center text-lg">
            {phaseLabels[currentPhase].icon}
          </div>
          <div>
            <h3 className="text-white font-medium text-sm">{phaseLabels[currentPhase].title}</h3>
            <p className="text-white/50 text-xs">{phaseLabels[currentPhase].subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-white/50 hover:text-white p-1">
            <MessageCircle className="h-4 w-4" />
          </button>
          <button onClick={() => { endConsultation(); setIsOpen(false); }} className="text-white/50 hover:text-white p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Phase Progress */}
      {currentPhase !== 'welcome' && (
        <div className="flex px-4 py-2 gap-1 shrink-0">
          {(['skin', 'wrinkles', 'volume'] as ConsultationPhase[]).map((phase) => (
            <div key={phase} className={`flex-1 h-1 rounded-full transition-colors ${
              currentPhase === phase ? 'bg-[#C9A050]' : 
              ['skin', 'wrinkles', 'volume'].indexOf(phase) < ['skin', 'wrinkles', 'volume'].indexOf(currentPhase as any) ? 'bg-[#C9A050]/50' : 'bg-white/10'
            }`} />
          ))}
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {/* Welcome */}
        {currentPhase === 'welcome' && (
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4 border border-[#C9A050]/20">
              <h4 className="text-[#C9A050] font-medium mb-2">AI Voice Consultation</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Speak naturally with Dr. Haq's AI assistant. It will guide you through 
                <strong className="text-white"> Skin Quality → Lines & Wrinkles → Volume & Structure</strong>.
              </p>
              <p className="text-white/40 text-xs mt-3 italic">
                Real-time conversation • Natural interruptions • Voice by ElevenLabs
              </p>
              <p className="text-white/50 text-xs mt-1 italic">
                Our aesthetics is invisible art — Bold • Natural • Always Your Way
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-white/70 text-xs">Your Name</label>
              <input
                type="text"
                value={patientInfo.name}
                onChange={(e) => setPatientInfo(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#C9A050]/50"
              />
            </div>

            <button
              onClick={startConsultation}
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-[#C9A050] to-[#B8913F] text-black font-medium py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isConnecting ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Connecting...</>
              ) : (
                <><Phone className="h-4 w-4" /> Start Voice Consultation</>
              )}
            </button>
          </div>
        )}

        {/* Active Consultation */}
        {currentPhase !== 'welcome' && currentPhase !== 'summary' && (
          <>
            {/* Live Voice Indicator */}
            {isConnected && (
              <div className="flex flex-col items-center py-4 space-y-3">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  conversation.isSpeaking 
                    ? 'bg-[#C9A050]/20 ring-2 ring-[#C9A050]/40 ring-offset-2 ring-offset-black' 
                    : 'bg-green-500/10 ring-2 ring-green-500/30 ring-offset-2 ring-offset-black'
                }`}>
                  <LiveVoiceVisualiser conversation={conversation} isSpeaking={conversation.isSpeaking} />
                </div>
                <p className={`text-xs font-medium ${
                  conversation.isSpeaking ? 'text-[#C9A050]' : 'text-green-400'
                }`}>
                  {conversation.isSpeaking ? 'Dr. AI is speaking...' : 'Listening to you...'}
                </p>
              </div>
            )}

            {/* Transcript (collapsed, scrollable) */}
            <div className="space-y-2 max-h-[200px] overflow-y-auto">
              {transcript.map((line, i) => (
                <div key={i} className={`text-xs p-2 rounded-lg ${
                  line.startsWith('You:') ? 'bg-[#C9A050]/10 text-[#C9A050] ml-8' :
                  line.startsWith('Dr.') ? 'bg-white/5 text-white/80 mr-8' :
                  'bg-white/5 text-white/50 text-center italic'
                }`}>
                  {line}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Analysis Result */}
            {analysisResult && (
              <div className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/20 rounded-xl p-4">
                <h4 className="text-[#C9A050] font-medium text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Analysis Result
                </h4>
                <p className="text-white/80 text-xs leading-relaxed whitespace-pre-line">
                  {analysisResult}
                </p>
              </div>
            )}

            {/* Uploaded Images */}
            {patientInfo.images.filter(img => img.phase === currentPhase).length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {patientInfo.images.filter(img => img.phase === currentPhase).map((img, i) => (
                  <img key={i} src={img.dataUrl} alt={`${currentPhase} photo ${i+1}`} className="w-16 h-16 rounded-lg object-cover border border-[#C9A050]/20" />
                ))}
              </div>
            )}

            {isAnalysing && (
              <div className="flex items-center gap-2 text-[#C9A050] text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                Analysing your image...
              </div>
            )}
          </>
        )}

        {/* Summary */}
        {currentPhase === 'summary' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#C9A050]/10 to-transparent border border-[#C9A050]/20 rounded-xl p-4">
              <h4 className="text-[#C9A050] font-medium mb-3">Consultation Summary</h4>
              {patientInfo.name && <p className="text-white/70 text-sm mb-2">Patient: {patientInfo.name}</p>}
              {patientInfo.analyses.map((a, i) => (
                <div key={i} className="mb-3">
                  <h5 className="text-white/90 text-sm font-medium capitalize">{a.phase} Assessment</h5>
                  <p className="text-white/60 text-xs leading-relaxed mt-1 whitespace-pre-line">{a.text}</p>
                </div>
              ))}
              {patientInfo.analyses.length === 0 && (
                <p className="text-white/50 text-sm">No analyses were completed during this session.</p>
              )}
            </div>
            <a
              href="tel:03330551503"
              className="block w-full bg-gradient-to-r from-[#C9A050] to-[#B8913F] text-black font-medium py-3 rounded-xl text-center hover:opacity-90 transition-opacity"
            >
              Book Your In-Person Consultation
            </a>
            <a
              href="https://wa.me/447735606447"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white/5 border border-[#C9A050]/30 text-[#C9A050] font-medium py-3 rounded-xl text-center hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      {currentPhase !== 'welcome' && currentPhase !== 'summary' && (
        <div className="p-4 border-t border-[#C9A050]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            {/* Voice Status with waves */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs ${
              conversation.isSpeaking ? 'bg-[#C9A050]/20 text-[#C9A050]' : 
              isConnected ? 'bg-green-500/20 text-green-400' :
              'bg-white/5 text-white/40'
            }`}>
              {isConnected && <VoiceWaves isActive={isConnected} level={conversation.isSpeaking ? 0.8 : 0.5} />}
              {conversation.isSpeaking ? 'Speaking' : isConnected ? 'Live' : 'Disconnected'}
            </div>

            {/* End Call */}
            <button onClick={endConsultation} className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30">
              <PhoneOff className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Camera */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleImageCapture}
              disabled={isAnalysing}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs hover:border-[#C9A050]/50 hover:text-[#C9A050] transition-colors disabled:opacity-50"
            >
              <Camera className="h-3.5 w-3.5" />
              Photo
            </button>

            {/* Next Phase */}
            <button
              onClick={advancePhase}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A050]/10 border border-[#C9A050]/30 rounded-full text-[#C9A050] text-xs hover:bg-[#C9A050]/20 transition-colors"
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceConsultationWidget;
