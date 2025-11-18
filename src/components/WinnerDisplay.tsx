import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Camera, MapPin, Phone, Calendar, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface WinnerDisplayProps {
  prize: string;
  prizeCode: string;
  prizeType: 'standard' | 'mega';
  alreadyPlayed?: boolean;
}

export const WinnerDisplay = ({ prize, prizeCode, prizeType, alreadyPlayed }: WinnerDisplayProps) => {
  const isMegaPrize = prizeType === 'mega';
  const isLaserPrize = prize.includes('Laser Hair Removal (1 Area)');
  
  const laserAreas = [
    'Upper Lip',
    'Chin',
    'Underarms',
    'Half Arms',
    'Half Legs'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Confetti effect */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-block"
        >
          {isMegaPrize ? (
            <Award className="w-20 h-20 text-primary mx-auto" />
          ) : (
            <Sparkles className="w-20 h-20 text-primary mx-auto" />
          )}
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold">
          {alreadyPlayed ? "Welcome Back!" : "Congratulations!"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {alreadyPlayed 
            ? "Here's your prize again – make sure you've screenshotted it!" 
            : "You've Won a Cosmedocs Glow Prize"}
        </p>
      </div>

      {/* Prize Card */}
      <Card className={`p-8 ${isMegaPrize ? 'bg-gradient-to-br from-primary/10 via-card to-primary/5 border-primary' : 'bg-card/80 backdrop-blur'}`}>
        {isMegaPrize && (
          <div className="mb-6 p-4 bg-primary/20 border-2 border-primary rounded-lg text-center">
            <p className="text-lg font-bold text-primary flex items-center justify-center gap-2">
              <Award className="w-6 h-6" />
              MEGA PRIZE WINNER – Limited to Only {prize.includes('Platinum') ? '2' : '1'} {prize.includes('Platinum') ? 'People' : 'Person'}!
            </p>
          </div>
        )}

        <div className="text-center space-y-4 mb-6">
          <h2 className="text-3xl font-bold">{prize}</h2>
          <div className="inline-block px-6 py-3 bg-background/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-1">Your Unique Prize Code</p>
            <p className="text-2xl font-mono font-bold tracking-wider">{prizeCode}</p>
          </div>
        </div>

        {isLaserPrize && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg">
            <p className="font-semibold mb-2">Choose Your Laser Area In-Clinic:</p>
            <div className="grid grid-cols-2 gap-2">
              {laserAreas.map(area => (
                <div key={area} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshot Warning */}
        <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Camera className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-destructive mb-1">⚠️ IMPORTANT: Screenshot This Page Now!</p>
              <p className="text-sm text-muted-foreground">
                You must show this screenshot in-clinic to claim your prize. 
                Your entry is also verified in our database using your email/phone.
              </p>
            </div>
          </div>
        </div>

        {/* Redemption Info */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            How to Claim Your Prize
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Visit Cosmedocs</p>
                <p className="text-sm text-muted-foreground">60 Harley Street, London W1G 7HA</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Call to Book</p>
                <p className="text-sm text-muted-foreground">0800 8600 178</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Valid Until</p>
                <p className="text-sm text-muted-foreground">31st December 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          Return to Home
        </Button>
        <Button
          onClick={() => window.print()}
          size="lg"
          className="flex-1"
        >
          Print This Page
        </Button>
      </div>

      {/* Additional Info */}
      <Card className="p-6 bg-muted/30">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Note:</strong> All treatments are subject to medical suitability. 
          One prize per person. Valid for new customers only.
        </p>
      </Card>
    </motion.div>
  );
};