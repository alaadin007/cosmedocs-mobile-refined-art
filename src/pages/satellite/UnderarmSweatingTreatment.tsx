import SatelliteSEOPage from "@/components/seo/SatelliteSEOPage";

const RELATED = [
  { label: "Botox for Hyperhidrosis (canonical)", path: "/medical/botox-for-hyperhidrosis/" },
  { label: "Hyperhidrosis treatment London", path: "/hyperhidrosis-treatment-london/" },
  { label: "Sweaty palms treatment", path: "/sweaty-palms-treatment/" },
];

const UnderarmSweatingTreatment = () => (
  <SatelliteSEOPage
    slug="/underarm-sweating-treatment"
    title="Underarm Sweating Treatment London | Axillary Botox — Cosmedocs"
    metaDescription="Stop underarm sweating for up to 12 months. Doctor-led axillary botox at Harley Street, London — FDA-approved, 30-minute appointment, from £550. GMC-registered."
    h1="Underarm Sweating Treatment — Axillary Botox in London"
    intro="The most established hyperhidrosis treatment, performed by GMC-registered doctors. Quietly stops underarm sweat at the source for 6–12 months."
    topAnswer="Underarm sweating treatment uses 50–100 units of botulinum toxin split between both axillae, injected intradermally in a 1–2cm grid. The toxin blocks acetylcholine release at the eccrine sweat glands, producing near-complete dryness within 14 days that lasts 6–12 months."
    sections={[
      {
        heading: "Who benefits most",
        body: "Patients who sweat through shirts regardless of temperature, avoid pale or fitted clothing, or find prescription antiperspirants (e.g. aluminium chloride 20%) ineffective or irritating. Axillary botox typically transforms quality of life within a fortnight.",
      },
      {
        heading: "How it's performed",
        body: "After topical anaesthetic and (where indicated) a Minor's iodine-starch test to map the active zone, we deliver 15–25 micro-injections per side using an ultra-fine needle. The appointment takes about 25 minutes, with no downtime.",
      },
      {
        heading: "Results, duration and maintenance",
        body: "Patients report a 75–95% reduction in sweat volume. Effect begins 2–4 days post-treatment, peaks at two weeks, and lasts 6–12 months. Most patients repeat annually; many find the second cycle lasts longer.",
      },
      {
        heading: "Insurance and discretion",
        body: "Axillary hyperhidrosis is a recognised medical condition. We provide ICD-coded invoices for insurers and treat in private consulting rooms at 10 Harley Street with full patient discretion.",
      },
    ]}
    pricing={[
      { label: "Both underarms — single session", price: "£550" },
      { label: "Annual maintenance plan (review included)", price: "£550" },
    ]}
    faqs={[
      {
        question: "Will it stop sweating completely?",
        answer:
          "Most patients experience 80–95% reduction. A small baseline of normal thermoregulatory sweat may remain, which is desirable.",
      },
      {
        question: "Will I sweat more elsewhere?",
        answer:
          "True compensatory hyperhidrosis is rare with botulinum toxin (unlike with surgical sympathectomy). If it occurs, additional areas can be treated.",
      },
      {
        question: "How often will I need it?",
        answer:
          "Most patients book once every 9–12 months. Some find effect extends to 14 months by the third cycle.",
      },
    ]}
    canonicalParent={{ label: "Botox for Hyperhidrosis", path: "/medical/botox-for-hyperhidrosis/" }}
    relatedLinks={RELATED}
  />
);

export default UnderarmSweatingTreatment;
