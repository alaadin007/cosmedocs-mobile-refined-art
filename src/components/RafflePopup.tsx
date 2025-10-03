import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Gift, Sparkles } from "lucide-react";

interface RafflePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const concernOptions = [
  { id: 'lines', label: 'Fine Lines & Wrinkles' },
  { id: 'crowsFeet', label: 'Crow\'s Feet' },
  { id: 'foreheadLines', label: 'Forehead Lines' },
  { id: 'skinDullness', label: 'Skin Dullness' },
  { id: 'acne', label: 'Acne & Breakouts' },
  { id: 'volumeLoss', label: 'Volume Loss' },
  { id: 'nose', label: 'Nose Reshaping' },
  { id: 'sagging', label: 'Sagging Skin' },
  { id: 'pigmentation', label: 'Pigmentation' },
  { id: 'pores', label: 'Large Pores' },
];

export const RafflePopup = ({ open, onOpenChange }: RafflePopupProps) => {
  const [step, setStep] = useState<'concerns' | 'details' | 'offer'>(open ? 'concerns' : 'concerns');
  const [concerns, setConcerns] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [offer, setOffer] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      setStep('concerns');
    }
  }, [open]);

  const handleConcernToggle = (concernId: string) => {
    setConcerns(prev =>
      prev.includes(concernId)
        ? prev.filter(c => c !== concernId)
        : [...prev, concernId]
    );
  };

  const handleSubmit = async () => {
    if (!name || !email || !location || concerns.length === 0) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, location, and at least one concern are required.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('raffle-offer', {
        body: {
          name,
          email,
          age: age ? parseInt(age) : null,
          sex,
          location,
          concerns,
        },
      });

      if (error) throw error;

      if (data?.success) {
        setOffer(data.offer);
        setStep('offer');
        toast({
          title: "Congratulations! 🎉",
          description: "Your exclusive offer has been generated!",
        });
      }
    } catch (error) {
      console.error('Error generating offer:', error);
      toast({
        title: "Error",
        description: "Failed to generate your offer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation completes
    setTimeout(() => {
      setStep('concerns');
      setConcerns([]);
      setName('');
      setEmail('');
      setAge('');
      setSex('');
      setLocation('');
      setOffer(null);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-accent/10 border-primary/20">
        {step === 'concerns' && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 justify-center mb-2">
                <Gift className="h-6 w-6 text-primary" />
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>
              <DialogTitle className="text-2xl text-center">
                Exclusive Welcome Gift 🎁
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                Tell us about your aesthetic concerns and receive a personalised offer just for you
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <Label className="text-base font-semibold">What are your main concerns? (Select all that apply)</Label>
              <div className="grid grid-cols-2 gap-3">
                {concernOptions.map((concern) => (
                  <div key={concern.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={concern.id}
                      checked={concerns.includes(concern.id)}
                      onCheckedChange={() => handleConcernToggle(concern.id)}
                      className="border-primary/50"
                    />
                    <label
                      htmlFor={concern.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {concern.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setStep('details')}
                disabled={concerns.length === 0}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue →
              </Button>
            </div>
          </>
        )}

        {step === 'details' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">Your Details</DialogTitle>
              <DialogDescription className="text-center">
                Just a few more details to personalise your offer
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="border-primary/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="border-primary/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age (optional)</Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="25"
                    className="border-primary/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sex">Sex (optional)</Label>
                  <select
                    id="sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-primary/30 bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (City/Country) *</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="London, UK"
                  className="border-primary/30"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep('concerns')}>
                ← Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading || !name || !email || !location}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Get My Offer 🎁'
                )}
              </Button>
            </div>
          </>
        )}

        {step === 'offer' && offer && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 justify-center mb-2">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle className="text-2xl text-center text-primary">
                Your Exclusive Offer!
              </DialogTitle>
              <DialogDescription className="text-center">
                Congratulations, {name}! Here's your personalised gift
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">{offer.title}</h3>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                
                {offer.personalizedMessage && (
                  <p className="text-sm italic mb-4 text-primary/80">{offer.personalizedMessage}</p>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                  <span className="text-sm font-medium">Value:</span>
                  <span className="text-2xl font-bold text-primary">{offer.value}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Offer valid for 30 days</p>
                <p>✓ Check your email for details</p>
                {offer.requiresVisit && (
                  <p>✓ Book your appointment: <a href="tel:08008600178" className="text-primary hover:underline">0800 8600 178</a></p>
                )}
                <p>✓ Location: {offer.location}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleClose}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Claim My Offer 🎉
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
