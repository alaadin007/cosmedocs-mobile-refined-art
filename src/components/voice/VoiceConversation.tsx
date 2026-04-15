import { useState, useRef, useCallback, useEffect } from 'react';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import VoiceWaveform from './VoiceWaveform';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const VoiceConversation = () => {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentResponse, setCurrentResponse] = useState('');
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopListening();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition) {
      toast({
        title: 'Not Supported',
        description: 'Speech recognition is not supported in this browser. Please use Chrome.',
        variant: 'destructive',
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-GB';

    recognition.onresult = (event: any) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += t;
        } else {
          interim += t;
        }
      }
      setTranscript(interim || final);

      if (final) {
        handleUserSpeech(final);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error !== 'no-speech') {
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      // Auto-restart if still active
      if (isActive && !isProcessing && !isSpeaking) {
        try {
          recognition.start();
        } catch (e) {
          // Already started
        }
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isActive, isProcessing, isSpeaking]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const handleUserSpeech = async (userText: string) => {
    setIsProcessing(true);
    stopListening();
    setTranscript('');

    const userMessage: Message = { role: 'user', content: userText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      // Get AI response via the voice consultation edge function
      const { data, error } = await supabase.functions.invoke('ai-voice-consultation', {
        body: {
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        },
      });

      if (error) throw error;

      const aiText = data?.choices?.[0]?.message?.content || 'I apologise, I didn\'t catch that. Could you please repeat?';
      const assistantMessage: Message = { role: 'assistant', content: aiText };
      setMessages(prev => [...prev, assistantMessage]);
      setCurrentResponse(aiText);

      // Convert to speech
      await speakResponse(aiText);
    } catch (err) {
      console.error('Error getting AI response:', err);
      toast({
        title: 'Connection Issue',
        description: 'Unable to process your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
      // Resume listening after speaking
      if (isActive) {
        startListening();
      }
    }
  };

  const speakResponse = async (text: string) => {
    try {
      setIsSpeaking(true);

      const { data, error } = await supabase.functions.invoke('elevenlabs-tts', {
        body: { text },
      });

      if (error) throw error;

      if (data?.audio) {
        const audioUrl = `data:audio/mpeg;base64,${data.audio}`;
        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        audio.onended = () => {
          setIsSpeaking(false);
          audioRef.current = null;
          // Resume listening
          if (isActive) {
            startListening();
          }
        };

        audio.onerror = () => {
          setIsSpeaking(false);
          audioRef.current = null;
        };

        await audio.play();
      } else {
        setIsSpeaking(false);
      }
    } catch (err) {
      console.error('TTS error:', err);
      setIsSpeaking(false);
    }
  };

  const handleInterrupt = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsSpeaking(false);
    }
  }, []);

  const startConversation = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsActive(true);
      setMessages([]);
      setCurrentResponse('');

      // Send initial greeting
      const greeting = 'Hello! Welcome to Cosmedocs. I\'m here to guide you through a personalised aesthetic consultation. Could you start by telling me a little about what brings you in today?';
      setCurrentResponse(greeting);
      setMessages([{ role: 'assistant', content: greeting }]);
      await speakResponse(greeting);
    } catch (err) {
      toast({
        title: 'Microphone Required',
        description: 'Please allow microphone access to start the voice consultation.',
        variant: 'destructive',
      });
    }
  };

  const endConversation = () => {
    setIsActive(false);
    stopListening();
    handleInterrupt();
    setTranscript('');
    setCurrentResponse('');
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-[#C9A050]/20">
      {/* Waveform */}
      <VoiceWaveform isActive={isListening || isSpeaking} isSpeaking={isSpeaking} />

      {/* Status */}
      <div className="text-center">
        <p className="text-sm text-white/60 uppercase tracking-widest mb-1">
          {!isActive && 'Ready to consult'}
          {isActive && isListening && 'Listening...'}
          {isActive && isSpeaking && 'Speaking...'}
          {isActive && isProcessing && !isSpeaking && 'Thinking...'}
        </p>
        {transcript && (
          <p className="text-white/80 text-sm italic mt-2">"{transcript}"</p>
        )}
        {currentResponse && !transcript && (
          <p className="text-white/70 text-sm mt-2 max-w-md line-clamp-3">{currentResponse}</p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {!isActive ? (
          <Button
            onClick={startConversation}
            className="rounded-full w-16 h-16 bg-[#C9A050] hover:bg-[#B8913F] text-black"
          >
            <Phone className="w-6 h-6" />
          </Button>
        ) : (
          <>
            {isSpeaking && (
              <Button
                onClick={handleInterrupt}
                variant="outline"
                className="rounded-full w-12 h-12 border-white/20 text-white hover:bg-white/10"
              >
                <Mic className="w-5 h-5" />
              </Button>
            )}
            <Button
              onClick={endConversation}
              className="rounded-full w-16 h-16 bg-red-600 hover:bg-red-700 text-white"
            >
              <PhoneOff className="w-6 h-6" />
            </Button>
          </>
        )}
      </div>

      {/* Conversation history */}
      {messages.length > 0 && (
        <div className="w-full max-w-md max-h-48 overflow-y-auto space-y-2 mt-4 scrollbar-thin">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-xs p-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-white/10 text-white/80 ml-8'
                  : 'bg-[#C9A050]/10 text-[#C9A050]/80 mr-8'
              }`}
            >
              <span className="font-medium">{msg.role === 'user' ? 'You' : 'Dr. Haq\'s AI'}:</span>{' '}
              {msg.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VoiceConversation;
