import { useState } from "react";
import { MessageCircle, X, Send, Phone, Mail, MapPin, Calendar } from "lucide-react";
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

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const whatsappNumber = "+447735606447";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=Hello, I'm interested in aesthetic treatments at CosmeDocs.`;

  const contactIcons = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => window.open(whatsappUrl, "_blank"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.open("tel:+448008600178", "_blank"),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:info@cosmedocs.com", "_blank"),
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: Calendar,
      label: "Book",
      action: () => window.open("https://med.as.me/schedule.php?appointmentType=16864702", "_blank"),
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: MapPin,
      label: "Location",
      action: () => window.open("https://maps.google.com/?q=8-10+Harley+Street+London+W1G+9PF", "_blank"),
      color: "bg-orange-500 hover:bg-orange-600"
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
        text: data.answer || "I apologize, I couldn't process that request.",
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
      {/* Contact Icons - Always visible at bottom right */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
        {contactIcons.map((contact, index) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              onClick={contact.action}
              className={`${contact.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full p-0`}
              title={contact.label}
            >
              <contact.icon className="w-5 h-5" />
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-24 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 w-16 h-16 rounded-full p-0"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-6 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
              <h3 className="font-bold text-lg">CosmeDocs AI Assistant</h3>
              <p className="text-sm text-purple-100">Ask me anything about aesthetic treatments</p>
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
                  placeholder="Type your question..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Send className="w-4 h-4" />
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
