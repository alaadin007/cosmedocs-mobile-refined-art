import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Jawline filler", path: "/treatments/jawline-filler/" },
  { label: "Jowl filler", path: "/jowl-filler/" },
  { label: "Pre-jowl filler", path: "/pre-jowl-filler/" },
  { label: "Male jawline filler", path: "/jawline-filler-male/" },
  { label: "Jawline vs chin filler", path: "/jawline-filler-vs-chin-filler/" },
];

const JawlineFillerCostLondon = () => (
  <SatelliteSEOPage
    slug="/jawline-filler-cost-london"
    title="Jawline Filler Cost London 2026 | Price Guide — Cosmedocs Harley St"
    metaDescription="Jawline filler cost in London: 1ml £350, 2ml £650, HD Package £950. Doctor-led at 10 Harley Street. Transparent pricing, no add-on fees."
    h1="Jawline Filler Cost in London"
    intro="A transparent breakdown of what jawline filler costs in London in 2026, what changes the price, and what is included at Cosmedocs Harley Street."
    topAnswer="In London, jawline filler typically costs £350–£950 depending on volume. At Cosmedocs Harley Street, 1ml is £350, 2ml is £650, and the HD Jawline Package (3ml across jaw, gonial angle and pre-jowl) is £950 — all performed by GMC-registered doctors with a complimentary two-week review included."
    sections={[
      {
        heading: "London price ranges (2026)",
        body: [
          "London jawline filler prices vary widely. Reputable doctor-led Harley Street clinics typically charge £350–£500 per ml, with a 2ml structural treatment landing around £650–£900. Non-doctor injector clinics can advertise lower headline prices, but often quote per syringe, exclude consultation, and lack the medical fallback if a complication occurs.",
          "Our pricing is fixed and transparent: no per-area surcharges, no separate consultation invoice on the day of treatment, and no ‘membership unlock’ pricing.",
        ],
      },
      {
        heading: "What you pay at Cosmedocs",
        body: "1ml — £350. 2ml — £650. HD Jawline Package (3ml) — £950. A £50 consultation fee is taken at booking and is fully redeemed against your treatment on the day. Aftercare and a two-week refinement review are included.",
      },
      {
        heading: "What changes the price",
        body: [
          "Volume needed: most patients with mild loss start at 1–2ml; significant lower-face restructuring requires 3ml or more.",
          "Product choice: dense, structural-grade HA fillers (the ones used for jawlines) cost more than soft fillers used in lips — but they last longer.",
          "Doctor experience: GMC-registered doctors with peer-reviewed publications and Harley Street tenure command higher fees than non-medical injectors.",
        ],
      },
      {
        heading: "Hidden costs to watch for",
        body: "Some clinics charge for the consultation in addition to treatment, add a fee for a follow-up review, or quote a low headline price for a half-syringe (0.5ml). Always ask whether the price includes consultation, the full syringe, and a review appointment.",
      },
    ]}
    pricing={[
      { label: "Consultation (redeemed against treatment)", price: "£50" },
      { label: "1ml jawline filler", price: "£350" },
      { label: "2ml jawline filler", price: "£650" },
      { label: "HD Jawline Package (3ml)", price: "£950" },
      { label: "Two-week review", price: "Included" },
    ]}
    faqs={[
      {
        question: "Why is jawline filler more expensive than lip filler?",
        answer:
          "Jawline filler uses denser, structural-grade HA products that cost more and last longer. The treatment also takes more time and requires precise anatomical placement on bone.",
      },
      {
        question: "Are cheaper jawline fillers safe?",
        answer:
          "Price alone isn’t the safety marker — practitioner qualification is. A GMC-registered doctor can manage a vascular complication; a non-medical injector cannot. We strongly recommend doctor-led treatment for any structural facial filler.",
      },
      {
        question: "Do you offer finance?",
        answer:
          "Yes — interest-free options are available on packages over £500. Ask at consultation.",
      },
      {
        question: "Is the consultation free?",
        answer:
          "We charge £50 to secure a doctor-led consultation slot, fully redeemed against treatment on the day. This ensures the time is reserved with a senior physician, not a salesperson.",
      },
    ]}
    canonicalParent={{ label: "Jawline Filler", path: "/treatments/jawline-filler/" }}
    relatedLinks={RELATED}
  />
);

export default JawlineFillerCostLondon;
