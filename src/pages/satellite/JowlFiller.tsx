import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Jawline filler", path: "/treatments/jawline-filler/" },
  { label: "Pre-jowl filler", path: "/pre-jowl-filler/" },
  { label: "Jawline filler cost London", path: "/jawline-filler-cost-london/" },
  { label: "Jawline vs chin filler", path: "/jawline-filler-vs-chin-filler/" },
  { label: "Before & after — jawline", path: "/before-after/dermal-fillers/jawline/" },
];

const JowlFiller = () => (
  <SatelliteSEOPage
    slug="/jowl-filler"
    title="Jowl Filler London | Pre-Jowl Sulcus Correction — Cosmedocs"
    metaDescription="Jowl filler in London: doctor-led pre-jowl sulcus correction at Harley Street. Restore a smooth jawline border from £350. GMC-registered physicians since 2007."
    h1="Jowl Filler — Pre-Jowl Sulcus Correction in London"
    intro="A precise, doctor-led approach to softening early jowls and restoring a continuous mandibular border — using structural HA filler in the pre-jowl sulcus, not the jowl itself."
    topAnswer="Jowl filler is a non-surgical treatment that places dense hyaluronic acid filler into the pre-jowl sulcus — the small depression in front of the jowl — to rebuild the jawline border and visually reduce jowl shadowing. It works best for early-to-moderate jowls; deeper, heavier jowls usually need lifting (PDO threads or surgery) rather than filler."
    sections={[
      {
        heading: "What ‘jowl filler’ actually treats",
        body: [
          "Filler is rarely placed into the jowl itself. The clinical target is the pre-jowl sulcus — the small indentation in front of the jowl, just before the chin — and the mandibular border behind it. By rebuilding structural support on either side of the jowl, the shadow of the jowl is reduced and the jaw appears continuous again.",
          "This distinction matters: injecting volume directly into a heavy jowl tends to enlarge it. Skilled lower-face contouring restores the jaw line that frames the jowl, which is what the eye actually reads as ‘tighter’.",
        ],
      },
      {
        heading: "Who is a good candidate",
        body: [
          "Patients in their late 30s to mid-50s with early-to-moderate jowling and good skin quality see the most natural results. Deep bone resorption, heavy soft-tissue descent, or significant skin laxity are usually better addressed with combined treatments — Endolaser, PDO cog threads, or a discussion about surgical options.",
          "At your consultation a GMC-registered doctor will assess bone, soft tissue and skin separately, then recommend filler, a combination, or a non-filler pathway. We don’t up-sell volume.",
        ],
      },
      {
        heading: "How treatment is performed",
        body: "Premium structural HA filler is placed deep onto periosteum at the pre-jowl sulcus and along the mandibular border using a fine cannula or needle, depending on anatomy. Treatment takes 30–45 minutes with topical anaesthetic and lidocaine-containing filler. Most patients return to work the same day.",
      },
      {
        heading: "Results and longevity",
        body: "Results are immediate and continue to settle for 2–3 weeks. A complimentary review at two weeks allows refinement if required. Structural jawline filler typically lasts 15–18 months, longer than mid-face filler because the area moves less.",
      },
    ]}
    pricing={[
      { label: "1ml pre-jowl correction", price: "£350" },
      { label: "2ml jawline & pre-jowl", price: "£650" },
      { label: "HD Jawline Package (3ml)", price: "£950" },
    ]}
    faqs={[
      {
        question: "Is jowl filler the same as a jawline filler?",
        answer:
          "They overlap. Jowl filler focuses on the pre-jowl sulcus and the segment of jaw just in front of the jowl. Jawline filler covers the full mandibular border and gonial angle. Most patients benefit from a combined approach.",
      },
      {
        question: "Will jowl filler lift my jowls?",
        answer:
          "It does not physically lift descended tissue. It restores the jawline border around the jowl so the jowl reads as less prominent. True lifting of heavy jowls requires threads, energy devices, or surgery.",
      },
      {
        question: "How long does jowl filler last?",
        answer:
          "Typically 15–18 months for structural jawline placement. We recommend a maintenance review at 12 months.",
      },
      {
        question: "Is there downtime?",
        answer:
          "Most patients experience mild swelling and occasional bruising for 24–72 hours. There is no formal downtime; we ask you to avoid intense exercise and alcohol for 24 hours.",
      },
    ]}
    canonicalParent={{ label: "Jawline Filler", path: "/treatments/jawline-filler/" }}
    relatedLinks={RELATED}
  />
);

export default JowlFiller;
