import { useState, useCallback, useRef } from "react";
import { useConversation } from "@elevenlabs/react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mic, MicOff, Camera, X, Phone, PhoneOff, 
  Volume2, VolumeX, Upload, ChevronRight, 
  Sparkles, User, MessageCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

type ConsultationPhase = 'welcome' | 'skin' | 'wrinkles' | 'volume' | 'summary';

interface PatientInfo {
  name: string;
  concerns: string[];
  images: { phase: ConsultationPhase; dataUrl: string }[];
  analyses: { phase: string; text: string }[];
}

const AGENT_ID_KEY = 'cosmedocs_elevenlabs_agent_id';

const VoiceConsultationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<ConsultationPhase>('welcome');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '', concerns: [], images: [], analyses: []
  });
  const [agentId, setAgentId] = useState(() => localStorage.getItem(AGENT_ID_KEY) || '');
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const conversation = useConversation({
    onConnect: () => {
      setTranscript(prev => [...prev, "🎙️ Connected — I'm ready for your consultation."]);
    },
    onDisconnect: () => {
      setTranscript(prev => [...prev, "📞 Consultation paused."]);
    },
    onMessage: (message: any) => {
      if (message.type === 'user_transcript') {
        setTranscript(prev => [...prev, `You: ${message.user_transcription_event?.user_transcript || ''}`]);
      } else if (message.type === 'agent_response') {
        setTranscript(prev => [...prev, `Dr. AI: ${message.agent_response_event?.agent_response || ''}`]);
      }
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    },
    onError: (error: any) => {
      console.error('Voice error:', error);
      toast({ title: "Connection Error", description: "Voice connection issue. Please try again.", variant: "destructive" });
    },
  });

  const startConversation = useCallback(async () => {
    if (!agentId.trim()) {
      toast({ title: "Agent ID Required", description: "Please enter your ElevenLabs Agent ID first.", variant: "destructive" });
      return;
    }
    localStorage.setItem(AGENT_ID_KEY, agentId);
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const { data, error } = await supabase.functions.invoke('elevenlabs-conversation-token', {
        body: { agentId: agentId.trim() }
      });

      if (error || !data?.token) {
        throw new Error(error?.message || 'No token received');
      }

      await conversation.startSession({
        conversationToken: data.token,
        connectionType: 'webrtc',
      });

      setCurrentPhase('skin');
      setIsExpanded(true);
    } catch (err: any) {
      console.error('Failed to start:', err);
      toast({ title: "Connection Failed", description: err.message || "Could not start voice consultation.", variant: "destructive" });
    } finally {
      setIsConnecting(false);
    }
  }, [conversation, agentId]);

  const endConversation = useCallback(async () => {
    await conversation.endSession();
    setCurrentPhase('summary');
  }, [conversation]);

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

      setTranscript(prev => [...prev, `📸 Image uploaded for ${currentPhase} analysis...`]);

      // Send to AI for analysis
      setIsAnalysing(true);
      setAnalysisResult(null);
      
      try {
        const base64 = dataUrl.split(',')[1];
        const { data, error } = await supabase.functions.invoke('ai-skin-consultation', {
          body: {
            images: [base64],
            phase: currentPhase === 'welcome' ? 'skin' : currentPhase,
            patientContext: patientInfo.name ? `Patient name: ${patientInfo.name}. Previous concerns: ${patientInfo.concerns.join(', ')}` : undefined,
          }
        });

        if (error) throw error;

        const analysis = data?.analysis || 'Analysis could not be completed.';
        setAnalysisResult(analysis);
        setPatientInfo(prev => ({
          ...prev,
          analyses: [...prev.analyses, { phase: currentPhase, text: analysis }]
        }));
        setTranscript(prev => [...prev, `🔬 Analysis: ${analysis.substring(0, 200)}...`]);

        // Send analysis context to voice agent
        if (conversation.status === 'connected') {
          conversation.sendContextualUpdate(`Image analysis result for ${currentPhase}: ${analysis}`);
        }
      } catch (err: any) {
        console.error('Analysis error:', err);
        toast({ title: "Analysis Error", description: "Could not analyse the image. Please try again.", variant: "destructive" });
      } finally {
        setIsAnalysing(false);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, [currentPhase, patientInfo, conversation]);

  const advancePhase = useCallback(() => {
    const phases: ConsultationPhase[] = ['welcome', 'skin', 'wrinkles', 'volume', 'summary'];
    const idx = phases.indexOf(currentPhase);
    if (idx < phases.length - 1) {
      const next = phases[idx + 1];
      setCurrentPhase(next);
      setAnalysisResult(null);
      if (conversation.status === 'connected') {
        conversation.sendContextualUpdate(`Moving to phase: ${next}. Please guide the patient through ${next} assessment.`);
      }
      setTranscript(prev => [...prev, `➡️ Moving to ${next} assessment...`]);
    }
  }, [currentPhase, conversation]);

  const phaseLabels: Record<ConsultationPhase, { title: string; subtitle: string; icon: string }> = {
    welcome: { title: 'Welcome', subtitle: 'Let\'s begin your consultation', icon: '👋' },
    skin: { title: 'Skin Quality', subtitle: 'Tone, texture, pores & clarity', icon: '✨' },
    wrinkles: { title: 'Lines & Wrinkles', subtitle: 'Dynamic and static lines', icon: '📐' },
    volume: { title: 'Volume & Structure', subtitle: 'Facial harmony & balance', icon: '💎' },
    summary: { title: 'Summary', subtitle: 'Your personalised plan', icon: '📋' },
  };

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
    <div className={`fixed z-50 bg-black/95 backdrop-blur-xl border border-[#C9A050]/30 rounded-2xl shadow-2xl transition-all duration-500 ${
      isExpanded 
        ? 'bottom-4 right-4 left-4 top-4 md:left-auto md:w-[480px] md:top-4' 
        : 'bottom-20 right-4 w-[380px] max-h-[600px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#C9A050]/20">
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
          <button onClick={() => { endConversation(); setIsOpen(false); }} className="text-white/50 hover:text-white p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Phase Progress */}
      <div className="flex px-4 py-2 gap-1">
        {(['skin', 'wrinkles', 'volume'] as ConsultationPhase[]).map((phase) => (
          <div key={phase} className={`flex-1 h-1 rounded-full transition-colors ${
            currentPhase === phase ? 'bg-[#C9A050]' : 
            ['skin', 'wrinkles', 'volume'].indexOf(phase) < ['skin', 'wrinkles', 'volume'].indexOf(currentPhase as any) ? 'bg-[#C9A050]/50' : 'bg-white/10'
          }`} />
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: isExpanded ? 'calc(100vh - 280px)' : '320px' }}>
        {/* Welcome / Agent ID */}
        {currentPhase === 'welcome' && (
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4 border border-[#C9A050]/20">
              <h4 className="text-[#C9A050] font-medium mb-2">AI Voice Consultation</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Welcome to your Cosmedocs AI consultation. Our voice-guided system will walk you through 
                a comprehensive facial assessment: <strong>Skin Quality → Lines & Wrinkles → Volume & Structure</strong>.
              </p>
              <p className="text-white/50 text-xs mt-2 italic">
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

            <div className="space-y-2">
              <label className="text-white/70 text-xs">ElevenLabs Agent ID</label>
              <input
                type="text"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                placeholder="Enter your Agent ID..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#C9A050]/50"
              />
              <p className="text-white/30 text-xs">Find this in your ElevenLabs Conversational AI dashboard</p>
            </div>

            <button
              onClick={startConversation}
              disabled={isConnecting || !agentId.trim()}
              className="w-full bg-gradient-to-r from-[#C9A050] to-[#B8913F] text-black font-medium py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isConnecting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Phone className="h-4 w-4" />
                  Start Voice Consultation
                </>
              )}
            </button>
          </div>
        )}

        {/* Active Consultation */}
        {currentPhase !== 'welcome' && currentPhase !== 'summary' && (
          <>
            {/* Transcript */}
            <div className="space-y-2">
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
                <div className="w-4 h-4 border-2 border-[#C9A050]/30 border-t-[#C9A050] rounded-full animate-spin" />
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
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      {currentPhase !== 'welcome' && currentPhase !== 'summary' && (
        <div className="p-4 border-t border-[#C9A050]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Voice Status */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${
              conversation.status === 'connected' 
                ? conversation.isSpeaking ? 'bg-[#C9A050]/20 text-[#C9A050]' : 'bg-green-500/20 text-green-400'
                : 'bg-white/5 text-white/40'
            }`}>
              {conversation.status === 'connected' ? (
                conversation.isSpeaking ? (
                  <><Volume2 className="h-3 w-3 animate-pulse" /> Speaking</>
                ) : (
                  <><Mic className="h-3 w-3" /> Listening</>
                )
              ) : (
                <><MicOff className="h-3 w-3" /> Disconnected</>
              )}
            </div>

            {/* End Call */}
            {conversation.status === 'connected' && (
              <button onClick={endConversation} className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30">
                <PhoneOff className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Camera / Upload */}
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
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A050]/20 border border-[#C9A050]/30 rounded-full text-[#C9A050] text-xs hover:bg-[#C9A050]/30 transition-colors"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceConsultationWidget;
