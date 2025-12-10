import { useState } from "react";
import { MessageCircle, X, Send, Phone, Mail, MapPin, Calendar, MessageSquare, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface FloatingChatBotProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

const FloatingChatBot = ({ externalOpen, onExternalOpenChange }: FloatingChatBotProps = {}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm CosmeDocs AI Assistant. How can I help you with aesthetic treatments today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Use external control if provided, otherwise use internal state
  const isOpen = externalOpen !== undefined ? externalOpen : internalIsOpen;
  const setIsOpen = (open: boolean) => {
    if (onExternalOpenChange) {
      onExternalOpenChange(open);
    }
    setInternalIsOpen(open);
  };

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello, I'm interested in aesthetic treatments at CosmeDocs.`;

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => {
        window.open(whatsappUrl, "_blank");
        setIsExpanded(false);
      },
      color: "from-green-400 to-green-500"
    },
    {
      icon: Phone,
      label: "Call",
      action: () => {
        window.open("tel:+448008600178", "_blank");
        setIsExpanded(false);
      },
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      action: () => {
        window.open("mailto:info@cosmedocs.com", "_blank");
        setIsExpanded(false);
      },
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Calendar,
      label: "Book",
      action: () => {
        window.open("https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29", "_blank");
        setIsExpanded(false);
      },
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Maps",
      action: () => {
        window.open("https://www.google.com/maps/search/?api=1&query=8-10+Harley+Street+London+W1G+9PF", "_blank");
        setIsExpanded(false);
      },
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: MessageSquare,
      label: "Chat",
      action: () => {
        setIsOpen(true);
        setIsExpanded(false);
      },
      color: "from-purple-400 to-purple-500"
    }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-knowledge-chat', {
        body: {
          question: inputMessage,
          includeWebSearch: true
        }
      });

      if (error) throw error;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer || "I apologise, I couldn't process that request.",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      
      let errorMessage = "Sorry, I'm having trouble connecting. Please try again.";
      
      if (error.message?.includes('429')) {
        errorMessage = "I'm receiving too many requests. Please wait a moment and try again.";
      } else if (error.message?.includes('402')) {
        errorMessage = "The AI service is temporarily unavailable. Please contact us directly.";
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessage,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {/* Expanded Contact Options */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
            >
              {contactOptions.map((option, index) => (
                <motion.button
                  key={option.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={option.action}
                  className={`bg-gradient-to-br ${option.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <option.icon className="h-6 w-6" />
                  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    {option.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Gold Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white p-5 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 relative overflow-hidden group border-2 border-amber-300/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <Plus className="h-7 w-7" />
          </motion.div>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">CosmeDocs AI Assistant</h3>
                <p className="text-sm text-purple-100">Ask me anything about aesthetic treatments</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.isUser
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <span className={`text-xs mt-1 block ${message.isUser ? 'text-purple-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatBot;
