import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Jawline filler", path: "/treatments/jawline-filler/" },
  { label: "Jowl filler", path: "/jowl-filler/" },
  { label: "Pre-jowl filler", path: "/pre-jowl-filler/" },
  { label: "Jawline vs chin filler", path: "/jawline-filler-vs-chin-filler/" },
  { label: "Male before & after", path: "/before-after/jawline-filler-male/" },
];

const JawlineFillerMaleSatellite = () => (
  <SatelliteSEOPage
    slug="/jawline-filler-male"
    title="Jawline Filler for Men London | Male Jaw Contouring — Cosmedocs"
    metaDescription="Male jawline filler in London: sharper, more defined masculine jawline by GMC-registered doctors at Harley Street. From £350. Subtle, never overdone."
    h1="Jawline Filler for Men — Defined, Never Overdone"
    intro="Masculine lower-face contouring built around male anatomy: a wider gonial angle, a straighter mandibular border, and a stronger chin transition — without the ‘done’ look."
    topAnswer="Male jawline filler uses dense structural hyaluronic acid to sharpen the gonial angle, straighten the mandibular border and extend the chin–jaw transition, producing a more defined masculine profile. At Cosmedocs, male treatments typically use 2–4ml across the full lower face and last 15–18 months."
    sections={[
      {
        heading: "Why male jawlines are treated differently",
        body: [
          "Male facial aesthetics rely on angular contrast: a wider gonial angle (around 120°), a straight mandibular border and a square chin. Female jawline treatments favour a softer, more curved line. Using a feminine technique on a male face removes the very angularity men want to enhance.",
          "Our male protocol prioritises bone-deep, structural placement at the gonial angle and posterior mandible — building width and definition before adding volume at the front.",
        ],
      },
      {
        heading: "Typical male treatment plan",
        body: [
          "Most men benefit from 2–4ml across the lower face. A common starter is 2ml split across the gonial angle and mandibular border. Patients seeking a more transformative result are often suited to the HD Jawline Package, which combines jaw, chin and pre-jowl placement.",
          "Discreet treatment is standard — we book longer consultation slots, keep records confidential, and most patients return to work the same day.",
        ],
      },
      {
        heading: "What it can — and can’t — do",
        body: "Filler can sharpen, widen and straighten. It cannot meaningfully reduce a heavy double chin (that is Endolaser or Aqualyx) and cannot tighten loose skin (that is Endolaser or PDO threads). A doctor-led consultation will map your starting anatomy and tell you exactly which combination delivers the result you want.",
      },
      {
        heading: "Downtime and recovery",
        body: "Most men return to work the same day. Mild swelling for 24–72 hours is common; bruising is uncommon but possible. Avoid the gym, alcohol and saunas for 24 hours. A complimentary review at two weeks confirms symmetry and projection.",
      },
    ]}
    pricing={[
      { label: "1ml male jawline", price: "£350" },
      { label: "2ml male jawline", price: "£650" },
      { label: "HD Male Jawline Package (3–4ml)", price: "£950" },
    ]}
    faqs={[
      {
        question: "How much filler does a man usually need?",
        answer:
          "2ml is a strong starting point. Patients with significant volume loss, a recessed chin or a wider face frame often suit 3–4ml across the full lower face.",
      },
      {
        question: "Will it look obvious?",
        answer:
          "Not when planned correctly. Our motto is invisible art — bold definition without the tell-tale ‘pillow’ effect. We deliberately under-correct on the first visit and refine at the two-week review.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Topical anaesthetic plus lidocaine in the filler keep discomfort minimal. Most men describe the sensation as pressure rather than pain.",
      },
      {
        question: "How long do results last for men?",
        answer:
          "15–18 months on average. Men with a stronger jaw musculature can metabolise filler slightly faster, so we plan maintenance at 12 months.",
      },
    ]}
    canonicalParent={{ label: "Jawline Filler", path: "/treatments/jawline-filler/" }}
    relatedLinks={RELATED}
  />
);

export default JawlineFillerMaleSatellite;
