import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Botox for Hyperhidrosis (canonical)", path: "/medical/botox-for-hyperhidrosis/" },
  { label: "Underarm sweating treatment", path: "/underarm-sweating-treatment/" },
  { label: "Sweaty palms treatment", path: "/sweaty-palms-treatment/" },
  { label: "Medical Botox hub", path: "/medical/" },
];

const HyperhidrosisTreatmentLondon = () => (
  <SatelliteSEOPage
    slug="/hyperhidrosis-treatment-london"
    title="Hyperhidrosis Treatment London | Doctor-Led Botox — Cosmedocs"
    metaDescription="Hyperhidrosis treatment in London: GMC-registered doctors at Harley Street use FDA-approved botulinum toxin to stop excessive sweating for 6–12 months. From £350."
    h1="Hyperhidrosis Treatment in London — Stop Excessive Sweating"
    intro="A discreet, doctor-led pathway for primary hyperhidrosis at our Harley Street clinic — FDA-approved botulinum toxin precisely placed to switch off overactive sweat glands."
    topAnswer="Hyperhidrosis treatment in London uses small intradermal injections of botulinum toxin to block the nerve signal that triggers sweat glands. Performed by GMC-registered doctors, the procedure takes 20–30 minutes, results begin within 1–2 weeks, and dryness lasts 6–12 months in the underarms and 4–6 months in the hands and feet."
    sections={[
      {
        heading: "Why a doctor-led approach matters",
        body: [
          "Hyperhidrosis is a recognised medical condition affecting roughly 1–3% of the population. Treating it well requires accurate diagnosis (primary vs secondary), correct dosing per anatomical area, and an injector who understands the underlying neurophysiology — not a beauty-room protocol.",
          "Every patient at Cosmedocs is assessed by a GMC-registered doctor. We confirm primary hyperhidrosis, rule out medical causes, and plan dosing per area using validated protocols.",
        ],
      },
      {
        heading: "Areas we treat in London",
        body: "Underarms (axillary), palms (palmar), soles (plantar), forehead and scalp, and compensatory sweating after surgery. Each area has its own dosing range and technique — palms and soles, for example, require a finer needle, more injection points, and lidocaine nerve block for comfort.",
      },
      {
        heading: "What to expect on the day",
        body: "Consultation and Minor's iodine-starch test (where indicated), topical anaesthetic, then 15–50 micro-injections depending on area. You can return to work the same day. Avoid intense exercise and hot showers for 24 hours.",
      },
      {
        heading: "Longevity and review",
        body: "Underarms: 6–12 months. Hands and feet: 4–6 months. Forehead: 4–6 months. A two-week complimentary review confirms results and addresses any missed patches at no extra cost.",
      },
    ]}
    pricing={[
      { label: "Forehead", price: "£350" },
      { label: "Underarms (axillary)", price: "£550" },
      { label: "Palms (hands)", price: "£550" },
      { label: "Soles (feet)", price: "£650" },
    ]}
    faqs={[
      {
        question: "Is hyperhidrosis treatment available on the NHS?",
        answer:
          "NHS hyperhidrosis treatment exists but waiting lists are long and access criteria strict. Most patients self-refer privately for faster, doctor-led care.",
      },
      {
        question: "How long until I notice the effect?",
        answer:
          "Sweat reduction begins within 2–4 days and reaches maximum effect at 10–14 days. Full duration is then 6–12 months for underarms.",
      },
      {
        question: "Are there side effects?",
        answer:
          "Mild tenderness and pinpoint bruising for 24–48 hours. With correct dosing in the hands, brief and minor grip weakness can occur in <5% of cases and fully resolves.",
      },
      {
        question: "Can I claim on private medical insurance?",
        answer:
          "Many insurers cover hyperhidrosis as a medical (not cosmetic) condition. We provide an itemised invoice and clinical letter to support your claim.",
      },
    ]}
    canonicalParent={{ label: "Botox for Hyperhidrosis", path: "/medical/botox-for-hyperhidrosis/" }}
    relatedLinks={RELATED}
  />
);

export default HyperhidrosisTreatmentLondon;
