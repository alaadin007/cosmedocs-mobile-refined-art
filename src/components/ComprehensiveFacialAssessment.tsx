
import { motion } from "framer-motion";
import { Eye, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ComprehensiveFacialAssessmentProps {
  accentColor?: string;
  className?: string;
}

const ComprehensiveFacialAssessment = ({ 
  accentColor = "purple", 
  className = "" 
}: ComprehensiveFacialAssessmentProps) => {
  const bookingUrl = "https://med.as.me/schedule/0cc7d92b/?categories[]=CosmeDocs%20%288-10%20Harley%20Street%2C%20London%20W1G9PF%29";

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        accent: "text-purple-400",
        border: "border-purple-500/20",
        bg: "bg-purple-600 hover:bg-purple-700",
        gradient: "from-purple-900/30 to-purple-600/30"
      },
      blue: {
        accent: "text-blue-400",
        border: "border-blue-500/20",
        bg: "bg-blue-600 hover:bg-blue-700",
        gradient: "from-blue-900/30 to-blue-600/30"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const colors = getColorClasses(accentColor);

  const assessmentFeatures = [
    {
      icon: Eye,
      title: "Detailed Facial Analysis",
      description: "Comprehensive evaluation of facial structure, proportions, and aging patterns"
    },
    {
      icon: CheckCircle,
      title: "Personalized Treatment Plan",
      description: "Customized approach based on your unique facial anatomy and aesthetic goals"
    },
    {
      icon: Star,
      title: "Expert Consultation",
      description: "In-depth discussion with our experienced aesthetic practitioners"
    }
  ];

  return (
    <section className={`py-20 bg-[#0A0A0A] ${className}`} aria-labelledby="assessment-heading">
      <div className="page-container">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="assessment-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Facial Assessment
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Understanding your unique beauty is the foundation of exceptional results
            </p>
            <p className="text-lg text-gray-400 italic">
              Our aesthetics is invisible art • Bold • Natural • Always Your Way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Your Journey to Natural Enhancement</h3>
              <p className="text-lg text-gray-300 mb-8">
                At Cosmedocs, every treatment begins with a thorough understanding of your facial anatomy, 
                skin condition, and personal aesthetic goals. Our comprehensive assessment ensures that 
                every enhancement appears naturally yours.
              </p>
              
              <div className="space-y-6">
                {assessmentFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <feature.icon className={`h-6 w-6 ${colors.accent} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-[#111] ${colors.border} p-8`}>
                <CardContent className="p-0">
                  <h4 className="text-2xl font-bold mb-6">What to Expect</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="text-gray-300">Medical history and skin assessment</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="text-gray-300">Facial structure and proportion analysis</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="text-gray-300">Discussion of aesthetic goals and expectations</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="text-gray-300">Personalized treatment recommendations</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 ${colors.accent.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="text-gray-300">Detailed aftercare and timeline discussion</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r ${colors.gradient} rounded-lg border ${colors.border}">
                    <p className="text-sm text-gray-300 mb-4">
                      <strong>Consultation Investment:</strong> £50 (fully redeemable against treatment)
                    </p>
                    <a 
                      href={bookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${colors.bg} text-white rounded-full px-6 py-3 inline-flex items-center justify-center text-sm font-medium transition-colors w-full`}
                    >
                      Book Your Assessment
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center bg-[#111] rounded-2xl p-8 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4">Why Choose Our Assessment Process?</h4>
            <p className="text-lg text-gray-300 mb-6">
              With over 1 million successful injections performed, our practitioners understand that 
              exceptional results begin with exceptional assessment. We don't just treat - we enhance 
              your inherent beauty with precision and artistry.
            </p>
            <p className="text-gray-400 italic">
              "Transformation that speaks — without saying a word"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveFacialAssessment;
