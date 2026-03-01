import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Sun, Shield, Sparkles, Layers, Heart, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    icon: Layers,
    title: "Understanding Your Skin's Architecture",
    description: "Your skin is composed of three distinct layers — the epidermis (protective barrier), dermis (structural support with collagen and elastin), and hypodermis (deep fat and insulation). Each layer ages differently and responds to different treatments. Understanding this architecture is the foundation of effective skincare.",
    links: [
      { label: "Profhilo – Deep Hydration", path: "/treatments/profhilo/" },
      { label: "Polynucleotides – Cellular Repair", path: "/treatments/polynucleotide/" },
      { label: "Microneedling – Collagen Stimulation", path: "/treatments/microneedling/" },
    ],
  },
  {
    icon: Sparkles,
    title: "Visible Signs of Skin Ageing",
    description: "Ageing manifests through volume loss, collagen degradation, fat pad descent, and skeletal remodelling. Fine lines become static wrinkles, skin loses elasticity, and pigmentation becomes uneven. These biophysical changes occur at every skin layer and accelerate with UV exposure, lifestyle factors, and genetics.",
    links: [
      { label: "Anti-Wrinkle Injections (Botox)", path: "/treatments/botox/" },
      { label: "Dermal Fillers", path: "/treatments/dermal-fillers/" },
      { label: "Non-Surgical Facelift", path: "/concerns/non-surgical-facelift/" },
      { label: "PDO Threads", path: "/treatments/pdo-threads/" },
    ],
  },
  {
    icon: Sun,
    title: "Sun Protection & Photoageing",
    description: "UV radiation is the single greatest contributor to premature ageing. Understanding SPF ratings, broad-spectrum protection, UVA vs UVB, and the difference between chemical and physical sunscreens is essential. Correct application — quantity, frequency, and reapplication — is as important as the product itself. Photoageing can be slowed and partially reversed with the right clinical approach.",
    links: [
      { label: "Chemical Peels – Resurface Damage", path: "/treatments/chemical-peel/" },
      { label: "HydraFacial – Restore Radiance", path: "/treatments/hydrafacial/" },
      { label: "PRP Treatment – Regenerative Repair", path: "/treatments/prp/" },
      { label: "Shop Skincare Products", path: "/shop/" },
    ],
  },
  {
    icon: BookOpen,
    title: "The CRES Principles: A Clinical Skincare Framework",
    description: "CRES stands for Cleanse, Revitalise, Exfoliate, and Stimulate — a structured approach to daily skincare developed by cosmetic doctors. Each step targets a specific skin need: removing impurities, replenishing antioxidants (particularly Vitamin C), accelerating cell turnover, and activating collagen production through retinoids and peptides.",
    links: [
      { label: "Prescription Skincare", path: "/treatments/prescription-skincare/" },
      { label: "Shop HS Formulations", path: "/shop/" },
    ],
  },
  {
    icon: Heart,
    title: "Sensitive Skin: Types, Triggers & Care",
    description: "Sensitive skin is not a single condition but a spectrum — from reactive and allergic to rosacea-prone and environmentally triggered. Identifying your sensitivity type is critical before introducing active ingredients. Barrier repair, gentle formulations, and patch-testing protocols form the basis of safe, effective management.",
    links: [
      { label: "Advanced Consultation", path: "/treatments/advanced-consultation/" },
      { label: "Concerns Hub", path: "/concerns/" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Allergic Reactions & Skin Safety",
    description: "Understanding the difference between irritation and true allergic reaction helps you make safer product choices. Contact dermatitis, sensitisation, and ingredient intolerance each require different management strategies. When in doubt, a clinical assessment ensures your skincare routine supports — rather than compromises — your skin health.",
    links: [
      { label: "Eczema & Dermatitis", path: "/concerns/eczema/" },
      { label: "Pigmentation & Melasma", path: "/concerns/pigmentation-melasma/" },
      { label: "Acne Treatment", path: "/concerns/acne/" },
    ],
  },
];

const SkinEducationGuide = () => {
  return (
    <>
      <Helmet>
        <title>Skin Education Guide | Cosmedocs – Harley Street</title>
        <meta name="description" content="Your comprehensive guide to skin science, ageing, sun protection, the CRES skincare principles, and sensitive skin care — curated by Cosmedocs cosmetic doctors." />
        <link rel="canonical" href="https://www.cosmedocs.com/skin-education-guide/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Skin Education Guide",
            "description": "Comprehensive skin science resource covering ageing, sun protection, CRES principles, and sensitive skin management.",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "Cosmedocs",
              "url": "https://www.cosmedocs.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(220,25%,12%)] text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] mb-4 opacity-70">Cosmedocs · Skin Science</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Skin Education Guide
          </h1>
          <p className="text-lg md:text-xl opacity-85 max-w-2xl mx-auto leading-relaxed">
            Understanding your skin is the first step to transforming it. From the science of ageing to the art of protection — knowledge is the most powerful active ingredient.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 md:gap-10">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <Card key={i} className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-5">{section.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {section.links.map((link, j) => (
                        <Link
                          key={j}
                          to={link.path}
                          className="inline-flex items-center text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Take the Next Step?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our aesthetics is invisible art. Book a consultation to discuss a personalised skin strategy with our Harley Street doctors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/treatments/advanced-consultation/"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Book a Consultation
              </Link>
              <Link
                to="/treatments/"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Browse All Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <p>This skin education guide consolidates Cosmedocs' clinical knowledge on skin anatomy, the epidermis, dermis, and hypodermis layers, visible signs of ageing including volume loss and collagen degradation, and comprehensive sun protection advice including SPF ratings, sunscreen types, application techniques, and photoageing reversal strategies. The CRES principles — Cleanse, Revitalise, Exfoliate, Stimulate — form the foundation of our prescription skincare approach, incorporating Vitamin C serums, retinoids, chemical exfoliants, and multi-peptide formulations. Sensitive skin types, allergic reactions, and barrier care are addressed with clinical precision. Cosmedocs Harley Street doctors recommend evidence-based treatments including Profhilo, polynucleotides, microneedling, chemical peels, HydraFacial, PRP therapy, dermal fillers, Botox, and PDO threads as part of a comprehensive anti-ageing strategy. Our aesthetics is invisible art — bold, natural, always your way.</p>
      </div>
    </>
  );
};

export default SkinEducationGuide;
