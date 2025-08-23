
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LiquidGlassFacialAssessmentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiquidGlassFacialAssessment({ isOpen, onClose }: LiquidGlassFacialAssessmentProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Facial Assessment Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Liquid glass background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/20" />
            
            <div className="relative p-6 overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">CosmeDocs Facial Assessment</h2>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Assessment Overview */}
              <div className="mb-8">
                <p className="text-lg text-gray-300 mb-6">
                  Every transformation begins with understanding. Our systematic approach evaluates four key aging factors to create your personalized treatment plan.
                </p>
                
                {/* Before and After Image */}
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/8675e9bd-ccdf-44e5-80b3-c916c48f40e5.png" 
                    alt="Before and after facial assessment results" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              {/* Assessment Table */}
              <div className="bg-black/40 rounded-2xl p-6 mb-8 overflow-x-auto">
                <Table className="w-full text-left">
                  <TableHeader>
                    <TableRow className="bg-black/50">
                      <TableHead className="w-1/3 font-semibold text-white">Before (Client has had previous upper face Botox)</TableHead>
                      <TableHead className="w-1/6 text-center font-semibold text-white">Score</TableHead>
                      <TableHead className="w-1/3 font-semibold text-white">After</TableHead>
                      <TableHead className="w-1/6 text-center font-semibold text-white">Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Skin Appearance Section */}
                    <TableRow className="bg-gray-900/50">
                      <TableCell colSpan={2} className="font-bold text-lg text-white">Skin Appearance (0,1,2,3)</TableCell>
                      <TableCell colSpan={2} className="font-bold text-lg text-white">Skin (0,1,2,3)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-gray-300">Pores Size & Congestion</TableCell>
                      <TableCell className="text-center text-white">2</TableCell>
                      <TableCell className="text-gray-300">Pores Size & Congestion</TableCell>
                      <TableCell className="text-center text-white">1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-gray-300">Clarity / Changes</TableCell>
                      <TableCell className="text-center text-white">2</TableCell>
                      <TableCell className="text-gray-300">Clarity / Changes</TableCell>
                      <TableCell className="text-center text-white">0</TableCell>
                    </TableRow>
                    
                    {/* Static Lines Section */}
                    <TableRow className="bg-gray-900/50">
                      <TableCell colSpan={2} className="font-bold text-lg text-white">Static Lines (0,1,2,3,4)</TableCell>
                      <TableCell colSpan={2} className="font-bold text-lg text-white">Static Lines (0,1,2,3,4)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-gray-300">Nasolabial Crease</TableCell>
                      <TableCell className="text-center text-white">2</TableCell>
                      <TableCell className="text-gray-300">Nasolabial Crease</TableCell>
                      <TableCell className="text-center text-white">0</TableCell>
                    </TableRow>
                    
                    {/* Total Section */}
                    <TableRow className="bg-gray-900/50">
                      <TableCell className="font-bold text-white">Total</TableCell>
                      <TableCell className="text-center font-bold text-white">24</TableCell>
                      <TableCell className="font-bold text-white">Total</TableCell>
                      <TableCell className="text-center font-bold text-white">5</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              {/* Assessment Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Eye,
                    title: "Skin Quality Analysis",
                    description: "Evaluating tone, texture, pores, and hydration to establish the foundation for your treatment."
                  },
                  {
                    icon: CheckCircle,
                    title: "Dynamic Expression Mapping",
                    description: "Assessing movement patterns and expression lines to preserve natural facial dynamics."
                  },
                  {
                    icon: Star,
                    title: "Structural Assessment",
                    description: "Measuring volume distribution and skin support to restore youthful facial architecture."
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <feature.icon className="h-8 w-8 text-white mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Ready for Your Assessment?</h3>
                <p className="text-gray-300 mb-6">
                  Our aesthetics is invisible art • Bold • Natural • Always Your Way
                </p>
                <Button 
                  onClick={() => window.open("https://med.as.me/harleystreet", "_blank")}
                  className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  Book Assessment
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
