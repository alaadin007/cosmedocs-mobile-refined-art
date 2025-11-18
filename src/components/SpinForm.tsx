import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";

interface SpinFormProps {
  onSubmit: (details: {
    name: string;
    email: string;
    phone: string;
    postcode: string;
  }) => void;
}

export const SpinForm = ({ onSubmit }: SpinFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValid = formData.name && formData.email && formData.phone && formData.postcode;

  return (
    <Card className="max-w-md mx-auto p-8 bg-card/80 backdrop-blur border-border/50">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Enter to Spin</h2>
        <p className="text-sm text-muted-foreground">
          Complete your details to spin the wheel and win your prize
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Smith"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="07XXX XXXXXX"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="postcode">Postcode *</Label>
          <Input
            id="postcode"
            type="text"
            value={formData.postcode}
            onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
            placeholder="W1G 9PF"
            required
            className="mt-1"
          />
        </div>

        <Button
          type="submit"
          disabled={!isValid}
          className="w-full mt-6"
          size="lg"
        >
          Continue to Spin
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By continuing, you agree to receive marketing communications from Cosmedocs.
          One entry per person.
        </p>
      </form>
    </Card>
  );
};