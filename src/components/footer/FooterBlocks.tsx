import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Eye, BookOpen, GraduationCap, FileText, ArrowRight, Clock, Sparkles, Shield } from "lucide-react";

// BLOCK 1A: Treatment Decision Block
export function TreatmentDecisionBlock() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        Considering this treatment?
      </h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          variant="outline"
          className="border-gray-700 text-white hover:bg-gray-800 hover:text-white"
        >
          <Link to="/advanced-consultation">
            <MessageCircle className="w-4 h-4 mr-2" />
            Is this right for me?
          </Link>
        </Button>
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200"
        >
          <Link to="/booking">
            <Calendar className="w-4 h-4 mr-2" />
            Book consultation
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Link to="/before-after-gallery">
            <Eye className="w-4 h-4 mr-2" />
            See patient outcomes
          </Link>
        </Button>
      </div>
    </div>
  );
}

// BLOCK 1B: Education Decision Block
export function EducationDecisionBlock() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        What would you like to do next?
      </h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          variant="outline"
          className="border-gray-700 text-white hover:bg-gray-800 hover:text-white"
        >
          <Link to="/aesthetic-treatments-made-easy">
            <BookOpen className="w-4 h-4 mr-2" />
            Test your understanding
          </Link>
        </Button>
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200"
        >
          <Link to="/contact">
            <MessageCircle className="w-4 h-4 mr-2" />
            Speak to a clinician
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Link to="/treatments">
            <ArrowRight className="w-4 h-4 mr-2" />
            Explore treatments
          </Link>
        </Button>
      </div>
    </div>
  );
}

// BLOCK 1C: Returning Visitor Block
interface ReturningVisitorBlockProps {
  lastViewedPath: string;
  lastViewedTitle: string;
}

export function ReturningVisitorBlock({ lastViewedPath, lastViewedTitle }: ReturningVisitorBlockProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        Welcome back
      </h3>
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <p className="text-gray-300 text-sm">
          Continue where you left off:
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-gray-700 text-white hover:bg-gray-800 hover:text-white"
        >
          <Link to={lastViewedPath}>
            <ArrowRight className="w-4 h-4 mr-2" />
            {lastViewedTitle}
          </Link>
        </Button>
        <span className="text-gray-600 hidden sm:inline">or</span>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Link to="/contact">
            Still deciding? Speak to a clinician
          </Link>
        </Button>
      </div>
    </div>
  );
}

// BLOCK 1D: Professional Block
export function ProfessionalBlock() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        For Medical Professionals
      </h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          variant="outline"
          className="border-gray-700 text-white hover:bg-gray-800 hover:text-white"
        >
          <Link to="/aesthetic-training">
            <GraduationCap className="w-4 h-4 mr-2" />
            View training courses
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Link to="/aesthetic-treatments-made-easy">
            <FileText className="w-4 h-4 mr-2" />
            Clinical evidence
          </Link>
        </Button>
      </div>
    </div>
  );
}

// BLOCK 2: Clinical Transparency Block
interface ClinicalTransparencyBlockProps {
  downtime?: string;
  longevity?: string;
}

export function ClinicalTransparencyBlock({ 
  downtime = "Minimal", 
  longevity = "6-12 months" 
}: ClinicalTransparencyBlockProps) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-800">
      <div className="text-center">
        <Clock className="w-5 h-5 mx-auto mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 uppercase tracking-wider">Typical downtime</p>
        <p className="text-sm text-gray-300 mt-1">{downtime}</p>
      </div>
      <div className="text-center">
        <Sparkles className="w-5 h-5 mx-auto mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 uppercase tracking-wider">Expected longevity</p>
        <p className="text-sm text-gray-300 mt-1">{longevity}</p>
      </div>
      <div className="text-center">
        <Shield className="w-5 h-5 mx-auto mb-2 text-gray-500" />
        <p className="text-xs text-gray-500 uppercase tracking-wider">Treatment type</p>
        <p className="text-sm text-gray-300 mt-1">Medical-led</p>
      </div>
    </div>
  );
}

// BLOCK 3: Trust Signals Block
export function TrustSignalsBlock() {
  return (
    <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500">
      <span className="flex items-center gap-1">
        <Shield className="w-3 h-3" />
        GMC-registered doctors
      </span>
      <span className="flex items-center gap-1">
        <Sparkles className="w-3 h-3" />
        Medically-led clinic
      </span>
      <span className="flex items-center gap-1">
        <FileText className="w-3 h-3" />
        Evidence-based protocols
      </span>
    </div>
  );
}

// BLOCK 4: Medical Credibility Block (for education pages)
export function MedicalCredibilityBlock() {
  return (
    <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500 py-3 border-t border-gray-800">
      <span className="flex items-center gap-1">
        <Shield className="w-3 h-3" />
        Written by GMC-registered doctors
      </span>
      <span className="flex items-center gap-1">
        <FileText className="w-3 h-3" />
        Evidence-led content
      </span>
    </div>
  );
}

// BLOCK 5: Related Topics Block
interface RelatedTopicsBlockProps {
  topics: Array<{ title: string; path: string }>;
}

export function RelatedTopicsBlock({ topics }: RelatedTopicsBlockProps) {
  if (!topics.length) return null;
  
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
        Related Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.slice(0, 3).map((topic) => (
          <Link
            key={topic.path}
            to={topic.path}
            className="px-3 py-1.5 text-sm bg-gray-900 text-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            {topic.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

// TRANSPARENCY STRIP (Always visible at bottom)
export function TransparencyStrip() {
  return (
    <div className="border-t border-gray-800 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
        <span>Treatments performed by GMC-registered doctors</span>
        <span className="hidden sm:inline">•</span>
        <span>Medically-led clinic</span>
        <span className="hidden sm:inline">•</span>
        <span>Evidence-based protocols</span>
      </div>
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Cosmedocs Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}
