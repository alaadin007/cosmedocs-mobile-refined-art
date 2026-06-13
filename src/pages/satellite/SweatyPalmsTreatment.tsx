import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Botox for Hyperhidrosis (canonical)", path: "/medical/botox-for-hyperhidrosis/" },
  { label: "Hyperhidrosis treatment London", path: "/hyperhidrosis-treatment-london/" },
  { label: "Underarm sweating treatment", path: "/underarm-sweating-treatment/" },
];

const SweatyPalmsTreatment = () => (
  <SatelliteSEOPage
    slug="/sweaty-palms-treatment"
    title="Sweaty Palms Treatment London | Palmar Hyperhidrosis Botox — Cosmedocs"
    metaDescription="Sweaty palms treatment in London — doctor-led palmar botox at Harley Street stops hand sweating for 4–6 months. FDA-approved, lidocaine block for comfort. £550."
    h1="Sweaty Palms Treatment — Palmar Hyperhidrosis Botox"
    intro="Dry handshakes, paper that doesn't curl, devices that work first time. A precise, comfort-first protocol for palmar hyperhidrosis by GMC-registered doctors."
    topAnswer="Sweaty palms treatment uses 50–100 units of botulinum toxin per hand, injected as a fine intradermal grid across the palm. Discomfort is managed with topical anaesthetic and, where needed, a median and ulnar nerve block. Results begin within a week and last 4–6 months."
    sections={[
      {
        heading: "Why palmar hyperhidrosis is different",
        body: "The palm has more eccrine sweat glands per cm² than almost any other body site, and the skin is thicker. This requires a denser injection grid, more units, and superior comfort management — usually a regional nerve block performed by a doctor experienced in upper-limb anaesthesia.",
      },
      {
        heading: "Our comfort protocol",
        body: "Topical anaesthetic + ice or cold air for mild cases. For most patients we offer a median and ulnar nerve block at the wrist, which numbs the palm completely for 60–90 minutes — long enough to deliver 30–40 micro-injections per hand painlessly.",
      },
      {
        heading: "What to expect afterwards",
        body: "Brief, minor grip weakness can occur in under 5% of patients (e.g. opening a tight jar) and resolves fully within 2–3 weeks. Fine pinch grip used for writing and devices is preserved.",
      },
      {
        heading: "Results",
        body: "Sweat reduction begins at 4–7 days, peaks at two weeks, lasts 4–6 months. Patients describe being able to shake hands, hold paper, use touchscreens and play instruments confidently for the first time in years.",
      },
    ]}
    pricing={[
      { label: "Both palms (with topical anaesthetic)", price: "£550" },
      { label: "Both palms with nerve block", price: "£650" },
    ]}
    faqs={[
      {
        question: "Is the nerve block painful?",
        answer:
          "Two small injections at the wrist. Mildly uncomfortable for seconds, then your palm goes completely numb so the treatment itself is painless.",
      },
      {
        question: "Will I lose grip strength?",
        answer:
          "Coarse grip strength can briefly reduce in fewer than 5% of cases and recovers fully. Fine pinch grip and dexterity are unaffected.",
      },
      {
        question: "How often is the treatment repeated?",
        answer:
          "Most patients return every 5–6 months. Some space treatments to once a year by combining with a topical maintenance regime.",
      },
    ]}
    canonicalParent={{ label: "Botox for Hyperhidrosis", path: "/medical/botox-for-hyperhidrosis/" }}
    relatedLinks={RELATED}
  />
);

export default SweatyPalmsTreatment;
