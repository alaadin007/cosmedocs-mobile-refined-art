import { useState, useCallback, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mic, MicOff, Camera, X, Phone, PhoneOff, 
  Volume2, Sparkles, Upload, ChevronRight,
  Loader2, MessageCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

type ConsultationPhase = 'welcome' | 'skin' | 'wrinkles' | 'volume' | 'summary';
type Message = { role: 'user' | 'assistant'; content: string };

interface PatientInfo {
  name: string;
  images: { phase: ConsultationPhase; dataUrl: string }[];
  analyses: { phase: string; text: string }[];
}

const VoiceConsultationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<ConsultationPhase>('welcome');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '', images: [], analyses: []
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [isSessionActive, setIsSessionActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [transcript]);

  // Initialize Web Speech API
  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast({ title: "Not Supported", description: "Speech recognition is not supported in this browser. Please use Chrome.", variant: "destructive" });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-GB';

    recognition.onresult = (event: any) => {
      const last = event.results[event.results.length - 1];
      if (last.isFinal) {
        const text = last[0].transcript.trim();
        if (text) {
          handleUserMessage(text);
        }
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        toast({ title: "Microphone Error", description: `Speech error: ${event.error}`, variant: "destructive" });
      }
    };

    recognition.onend = () => {
      // Restart if session is still active
      if (isSessionActive) {
        try { recognition.start(); } catch {}
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isSessionActive]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  // Send text to our AI and get spoken response
  const handleUserMessage = useCallback(async (text: string) => {
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setTranscript(prev => [...prev, `You: ${text}`]);
    setIsThinking(true);

    try {
      // Get the latest analysis context
      const latestAnalysis = patientInfo.analyses.length > 0 
        ? patientInfo.analyses.map(a => `${a.phase}: ${a.text}`).join('\n\n')
        : undefined;

      const { data, error } = await supabase.functions.invoke('ai-voice-consultation', {
        body: {
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          imageAnalysis: latestAnalysis,
        }
      });

      if (error) throw error;

      const reply = data?.reply || "I apologise, could you repeat that?";
      const assistantMsg: Message = { role: 'assistant', content: reply };
      setMessages(prev => [...prev, assistantMsg]);
      setTranscript(prev => [...prev, `Dr. AI: ${reply}`]);

      // Speak the response via ElevenLabs TTS
      await speakText(reply);
    } catch (err: any) {
      console.error('AI consultation error:', err);
      const errorMsg = err.message || 'Could not process your message.';
      setTranscript(prev => [...prev, `⚠️ ${errorMsg}`]);
      toast({ title: "Error", description: errorMsg, variant: "destructive" });
    } finally {
      setIsThinking(false);
    }
  }, [messages, patientInfo.analyses]);

  // ElevenLabs TTS
  const speakText = useCallback(async (text: string) => {
    setIsSpeaking(true);
    try {
      const { data, error } = await supabase.functions.invoke('elevenlabs-tts', {
        body: { text }
      });

      if (error) throw error;

      if (data?.audio) {
        const audioBlob = Uint8Array.from(atob(data.audio), c => c.charCodeAt(0));
        const blob = new Blob([audioBlob], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        
        if (audioRef.current) {
          audioRef.current.pause();
        }
        
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.onended = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(url);
        };
        audio.onerror = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(url);
        };
        await audio.play();
      } else {
        setIsSpeaking(false);
      }
    } catch (err) {
      console.error('TTS error:', err);
      setIsSpeaking(false);
      // Fallback to browser TTS
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-GB';
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  }, []);

  // Start consultation
  const startConsultation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      toast({ title: "Microphone Required", description: "Please allow microphone access to use voice consultation.", variant: "destructive" });
      return;
    }

    setIsSessionActive(true);
    setCurrentPhase('skin');
    setIsExpanded(true);

    const greeting = patientInfo.name 
      ? `Welcome ${patientInfo.name}. I'm Dr. Haq's AI consultation assistant at Cosmedocs Harley Street. Let's begin with your skin quality assessment. Could you upload a clear photo of your face, and I'll compare your skin's condition? I'll look at tone, texture, pores, and how your skin has been affected by environmental factors.`
      : "Welcome to your Cosmedocs consultation. I'm Dr. Haq's AI assistant. Let's start by assessing your skin quality. Please upload a clear photo of your face, and tell me — what are your main skin concerns?";
    
    const assistantMsg: Message = { role: 'assistant', content: greeting };
    setMessages([assistantMsg]);
    setTranscript([`Dr. AI: ${greeting}`]);
    
    await speakText(greeting);
    startListening();
  }, [patientInfo.name, speakText, startListening]);

  // End consultation
  const endConsultation = useCallback(() => {
    setIsSessionActive(false);
    stopListening();
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsSpeaking(false);
    setCurrentPhase('summary');
  }, [stopListening]);

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

      setTranscript(prev => [...prev, `📸 Image uploaded for ${currentPhase} analysis...`]);
      setIsAnalysing(true);
      setAnalysisResult(null);
      
      try {
        const base64 = dataUrl.split(',')[1];
        const { data, error } = await supabase.functions.invoke('ai-skin-consultation', {
          body: {
            images: [base64],
            phase: currentPhase === 'welcome' ? 'skin' : currentPhase,
            patientContext: patientInfo.name ? `Patient name: ${patientInfo.name}. Previous analyses: ${patientInfo.analyses.map(a => a.text.substring(0, 100)).join('; ')}` : undefined,
          }
        });

        if (error) throw error;

        const analysis = data?.analysis || 'Analysis could not be completed.';
        setAnalysisResult(analysis);
        setPatientInfo(prev => ({
          ...prev,
          analyses: [...prev.analyses, { phase: currentPhase, text: analysis }]
        }));
        setTranscript(prev => [...prev, `🔬 Analysis complete.`]);

        // Now send the analysis to our AI to discuss conversationally
        const discussionMsg: Message = { role: 'user', content: `[Image analysis completed for ${currentPhase}. Please discuss these findings with me.]` };
        setMessages(prev => [...prev, discussionMsg]);
        
        setIsThinking(true);
        const { data: aiData, error: aiError } = await supabase.functions.invoke('ai-voice-consultation', {
          body: {
            messages: [...messages, discussionMsg].map(m => ({ role: m.role, content: m.content })),
            imageAnalysis: analysis,
          }
        });

        if (aiError) throw aiError;

        const reply = aiData?.reply || "I can see the results. Let me discuss what I've found.";
        const assistantMsg: Message = { role: 'assistant', content: reply };
        setMessages(prev => [...prev, assistantMsg]);
        setTranscript(prev => [...prev, `Dr. AI: ${reply}`]);
        setIsThinking(false);

        await speakText(reply);
      } catch (err: any) {
        console.error('Analysis error:', err);
        toast({ title: "Analysis Error", description: "Could not analyse the image. Please try again.", variant: "destructive" });
        setIsThinking(false);
      } finally {
        setIsAnalysing(false);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, [currentPhase, patientInfo, messages, speakText]);

  // Phase advancement
  const advancePhase = useCallback(async () => {
    const phases: ConsultationPhase[] = ['welcome', 'skin', 'wrinkles', 'volume', 'summary'];
    const idx = phases.indexOf(currentPhase);
    if (idx < phases.length - 1) {
      const next = phases[idx + 1];
      setCurrentPhase(next);
      setAnalysisResult(null);

      if (next === 'summary') {
        endConsultation();
        return;
      }

      const phaseIntros: Record<string, string> = {
        wrinkles: "Excellent. Let's move on to assess your lines and wrinkles. Upload a photo and I'll distinguish between dynamic lines that respond to Botox and static lines that benefit from fillers.",
        volume: "Now let's look at facial volume and structure. Upload a photo and I'll assess areas like your cheeks, jawline, under-eyes, and lips for volume balance and harmony.",
      };

      const intro = phaseIntros[next] || `Moving to ${next} assessment.`;
      const msg: Message = { role: 'assistant', content: intro };
      setMessages(prev => [...prev, msg]);
      setTranscript(prev => [...prev, `➡️ Moving to ${next}...`, `Dr. AI: ${intro}`]);
      await speakText(intro);
    }
  }, [currentPhase, endConsultation, speakText]);

  const phaseLabels: Record<ConsultationPhase, { title: string; subtitle: string; icon: string }> = {
    welcome: { title: 'Welcome', subtitle: "Let's begin your consultation", icon: '👋' },
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
                Welcome to your Cosmedocs AI consultation. Our voice-guided system will assess 
                <strong className="text-white"> Skin Quality → Lines & Wrinkles → Volume & Structure</strong>.
              </p>
              <p className="text-white/40 text-xs mt-3 italic">
                Powered by Cosmedocs AI • Voice by ElevenLabs
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
              className="w-full bg-gradient-to-r from-[#C9A050] to-[#B8913F] text-black font-medium py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Start Voice Consultation
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
              {isThinking && (
                <div className="bg-white/5 text-white/50 text-xs p-2 rounded-lg mr-8 flex items-center gap-2">
                  <Loader2 className="h-3 w-3 animate-spin" /> Thinking...
                </div>
              )}
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
            {/* Voice Status */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${
              isSpeaking ? 'bg-[#C9A050]/20 text-[#C9A050]' : 
              isListening ? 'bg-green-500/20 text-green-400' :
              'bg-white/5 text-white/40'
            }`}>
              {isSpeaking ? (
                <><Volume2 className="h-3 w-3 animate-pulse" /> Speaking</>
              ) : isListening ? (
                <><Mic className="h-3 w-3" /> Listening</>
              ) : (
                <><MicOff className="h-3 w-3" /> Paused</>
              )}
            </div>

            {/* Toggle Mic */}
            <button 
              onClick={() => isListening ? stopListening() : startListening()} 
              className={`p-2 rounded-full ${isListening ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'}`}
            >
              {isListening ? <MicOff className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
            </button>

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
