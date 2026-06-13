import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Jawline filler", path: "/treatments/jawline-filler/" },
  { label: "Jowl filler", path: "/jowl-filler/" },
  { label: "Male jawline filler", path: "/jawline-filler-male/" },
  { label: "Jawline filler cost London", path: "/jawline-filler-cost-london/" },
  { label: "Before & after — jawline", path: "/before-after/dermal-fillers/jawline/" },
];

const PreJowlFiller = () => (
  <SatelliteSEOPage
    slug="/pre-jowl-filler"
    title="Pre-Jowl Filler London | Pre-Jowl Sulcus Treatment — Cosmedocs"
    metaDescription="Pre-jowl filler at Cosmedocs Harley Street: rebuild the small depression in front of the jowl to restore a smooth, continuous jaw line. From £350, doctor-led."
    h1="Pre-Jowl Filler — Restoring the Jaw Line in Front of the Jowl"
    intro="The pre-jowl sulcus is the small depression that forms in front of the jowl as the mandible loses volume. Rebuilding it is one of the most natural-looking refinements in lower-face contouring."
    topAnswer="Pre-jowl filler places a small amount (usually 0.5–1ml per side) of dense hyaluronic acid into the pre-jowl sulcus — the indentation in front of the jowl. This rebuilds the jaw line border, reducing the visual prominence of the jowl without injecting the jowl itself. Results last 15–18 months."
    sections={[
      {
        heading: "What the pre-jowl sulcus is",
        body: [
          "Run a finger along your jaw bone from the chin towards the ear. In some people, just before the jowl, the bone dips slightly inward — that is the pre-jowl sulcus. It develops because of bony resorption of the mandible and loss of supportive fat pads with age.",
          "Filling it restores the structural ledge that the jaw line ‘sits’ on. The eye reads this as a tighter, more continuous lower face, even though the jowl itself has not been touched.",
        ],
      },
      {
        heading: "Why it works better than ‘injecting the jowl’",
        body: "Adding volume directly into the jowl tends to enlarge it. Adding volume around the jowl rebuilds the frame and reduces the contrast shadow that makes a jowl visible. This is one of the most important lower-face principles in our practice.",
      },
      {
        heading: "Typical treatment",
        body: "Most pre-jowl corrections use 0.5–1ml per side of a structural-grade HA filler, placed deep on periosteum. We use a fine cannula in most cases to minimise bruising. Treatment takes 20–30 minutes and most patients return to work the same day.",
      },
      {
        heading: "Combining with the full jawline",
        body: "Pre-jowl filler is most commonly part of a full jawline treatment that also addresses the gonial angle and mandibular border. The HD Jawline Package combines all three zones for a balanced, masculine or feminine outcome.",
      },
    ]}
    pricing={[
      { label: "1ml pre-jowl correction (one side)", price: "£350" },
      { label: "2ml — pre-jowl + jawline border", price: "£650" },
      { label: "HD Jawline Package (3ml, all zones)", price: "£950" },
    ]}
    faqs={[
      {
        question: "How much filler does a pre-jowl correction need?",
        answer:
          "Typically 0.5–1ml per side. Asymmetry is common, so volumes are not always equal left to right — your doctor will plan in real time.",
      },
      {
        question: "Will it stop the jowl getting worse?",
        answer:
          "It does not prevent ageing, but rebuilding the structural ledge slows the visual progression of jowling. Maintenance at 12–18 months keeps the result stable.",
      },
      {
        question: "Is it suitable on its own?",
        answer:
          "Yes — pre-jowl filler can be performed in isolation. Many patients then add full jawline filler at a later session once they’ve seen the partial result.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Discomfort is minimal. Topical anaesthetic plus lidocaine-containing filler keeps the experience tolerable for almost all patients.",
      },
    ]}
    canonicalParent={{ label: "Jawline Filler", path: "/treatments/jawline-filler/" }}
    relatedLinks={RELATED}
  />
);

export default PreJowlFiller;
