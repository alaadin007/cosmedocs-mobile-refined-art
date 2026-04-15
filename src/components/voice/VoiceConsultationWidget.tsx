import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import VoiceConversation from './VoiceConversation';

const VoiceConsultationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#C9A050] hover:bg-[#B8913F] text-black flex items-center justify-center shadow-lg transition-all hover:scale-105"
          aria-label="Start voice consultation"
        >
          <Phone className="w-6 h-6" />
        </button>
      )}

      {/* Voice consultation panel */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] animate-in slide-in-from-bottom-4 duration-300">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-b from-black/90 to-black/95 backdrop-blur-xl p-1">
                <div className="text-center pt-4 pb-2 px-4">
                  <p className="text-[#C9A050] text-xs uppercase tracking-[0.2em] font-medium">Cosmedocs</p>
                  <p className="text-white/50 text-[10px] mt-0.5">AI Voice Consultation</p>
                </div>
                <VoiceConversation />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceConsultationWidget;
