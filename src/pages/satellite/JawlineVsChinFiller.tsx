import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Jawline filler", path: "/treatments/jawline-filler/" },
  { label: "Chin filler", path: "/treatments/chin-filler/" },
  { label: "Jowl filler", path: "/jowl-filler/" },
  { label: "Male jawline filler", path: "/jawline-filler-male/" },
  { label: "Profiloplasty", path: "/treatments/nose-filler/" },
];

const JawlineVsChinFiller = () => (
  <SatelliteSEOPage
    slug="/jawline-filler-vs-chin-filler"
    title="Jawline Filler vs Chin Filler | Which Do You Need? — Cosmedocs London"
    metaDescription="Jawline filler vs chin filler: clear, doctor-led comparison of who needs what, how they combine, and London pricing at Cosmedocs Harley Street."
    h1="Jawline Filler vs Chin Filler — Which Do You Need?"
    intro="They sit millimetres apart on the same bone, but they solve different problems. Here is the honest, doctor-led answer to which one — or which combination — fits your face."
    topAnswer="Chin filler projects the chin forward or downward to balance the profile; jawline filler defines the mandibular border between the chin and the ear. Profiles with a recessed chin start with chin filler; faces with a soft jawline angle start with jawline filler. Most balanced lower-face plans use both — typically 1ml chin + 2ml jawline."
    sections={[
      {
        heading: "What each treatment does",
        body: [
          "Chin filler addresses the central anterior chin: it can extend a recessed chin forward, lengthen a short chin downward, or square off a pointed female chin. It primarily improves the side profile.",
          "Jawline filler addresses the lateral mandible: the gonial angle (the corner near the ear), the mandibular border between the angle and the chin, and the pre-jowl sulcus. It primarily improves the front and three-quarter view.",
        ],
      },
      {
        heading: "Which one do you need?",
        body: [
          "If your side profile feels weak, your lips sit forward of your chin, or your chin appears short on photos — start with chin filler.",
          "If your front-facing photos show a soft, undefined jawline or you’ve noticed early jowling — start with jawline filler.",
          "If both are true (very common in women over 35 and men over 30 with mild retrognathia), a combined plan delivers the most natural-looking result.",
        ],
      },
      {
        heading: "Typical volumes and pricing",
        body: "Chin filler: 1–2ml (£450–£650). Jawline filler: 1–3ml (£350–£950). Combined ‘profile correction’ plans typically use 3–4ml total, often phased across two sessions for a gradual, undetectable progression.",
      },
      {
        heading: "How we plan it",
        body: "Our doctors photograph from front, profile and three-quarter angles, then map projection, width and continuity separately. We rarely recommend chin filler alone in patients with mandibular asymmetry, and we rarely recommend jawline filler alone in patients with a clearly recessed chin — the lower face reads as one structure to the eye.",
      },
    ]}
    pricing={[
      { label: "Chin filler — 1ml", price: "£450" },
      { label: "Jawline filler — 1ml", price: "£350" },
      { label: "Jawline filler — 2ml", price: "£650" },
      { label: "HD Jawline Package (3ml)", price: "£950" },
      { label: "Combined profile plan", price: "From £950" },
    ]}
    faqs={[
      {
        question: "Can I do both in one session?",
        answer:
          "Yes — many patients combine chin and jawline filler in a single appointment when total volume is 3ml or less. Larger plans are usually phased across two visits.",
      },
      {
        question: "Will it make my face look bigger?",
        answer:
          "When planned correctly, no. Structural placement on bone tightens the visible contour rather than adding bulk. Over-volumising is a technique problem, not an inherent risk of the treatment.",
      },
      {
        question: "Which lasts longer?",
        answer:
          "Both typically last 15–18 months. Jawline filler can last slightly longer in less mobile areas like the gonial angle.",
      },
      {
        question: "Do I need to choose, or can I trial one first?",
        answer:
          "Trialling one is sensible. Most patients start with the area that bothers them most, then decide at the two-week review whether to add the second.",
      },
    ]}
    canonicalParent={{ label: "Jawline Filler", path: "/treatments/jawline-filler/" }}
    relatedLinks={RELATED}
  />
);

export default JawlineVsChinFiller;
