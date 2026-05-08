import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Loader2 } from "lucide-react";

export default function TrainingEnquiryForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    profession: "",
    registration_pin: "",
    course_interest: "Fellowship in Aesthetic Medicine",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email) {
      toast({ title: "Please add your name and email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await (supabase as any).from("training_enquiries").insert([
      { ...form, source: "training-page" },
    ]);
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not submit — please try again", description: error.message, variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Enquiry received", description: "Our training team will be in touch within 1 working day." });
  };

  if (submitted) {
    return (
      <Card className="bg-zinc-900 border-amber-500/30">
        <CardContent className="p-8 text-center">
          <GraduationCap className="h-12 w-12 text-amber-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">Thank you</h3>
          <p className="text-gray-300">Your training enquiry has been received. Our faculty office will respond within one working day.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-zinc-900 border-amber-500/20">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-7 w-7 text-amber-400" />
          <h3 className="text-2xl font-semibold text-white">Training Enquiry</h3>
        </div>
        <p className="text-gray-400 text-sm mb-6">
          For GMC, GDC, NMC and GPhC registered professionals. Cosmedocs Faculty operates in partnership with Harley Street Institute.
        </p>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-300">Full name *</Label>
            <Input required value={form.full_name} onChange={(e) => update("full_name", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div>
            <Label className="text-gray-300">Email *</Label>
            <Input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div>
            <Label className="text-gray-300">Phone (WhatsApp preferred)</Label>
            <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div>
            <Label className="text-gray-300">Profession</Label>
            <select
              value={form.profession}
              onChange={(e) => update("profession", e.target.value)}
              className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white"
            >
              <option value="">Select…</option>
              <option>Doctor (GMC)</option>
              <option>Dentist (GDC)</option>
              <option>Nurse / NMP (NMC)</option>
              <option>Pharmacist (GPhC)</option>
              <option>Other healthcare professional</option>
            </select>
          </div>
          <div>
            <Label className="text-gray-300">Registration PIN</Label>
            <Input value={form.registration_pin} onChange={(e) => update("registration_pin", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div>
            <Label className="text-gray-300">Course interest</Label>
            <select
              value={form.course_interest}
              onChange={(e) => update("course_interest", e.target.value)}
              className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white"
            >
              <option>Fellowship in Aesthetic Medicine</option>
              <option>Foundation Botox & Filler</option>
              <option>Advanced Filler Masterclass</option>
              <option>PDO Threads Training</option>
              <option>Observership Day</option>
              <option>Bespoke 1:1 Mentorship</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <Label className="text-gray-300">Message</Label>
            <Textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" disabled={submitting} className="bg-amber-500 hover:bg-amber-600 text-black w-full md:w-auto px-8">
              {submitting ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting…</> : "Submit Enquiry"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
