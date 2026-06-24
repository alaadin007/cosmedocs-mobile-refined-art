import ComparisonPage from "@/components/seo/ComparisonPage";

const BotoxVsDysport = () => (
  <ComparisonPage
    path="/botox-vs-dysport/"
    optionA="Botox"
    optionB="Dysport"
    metaTitle="Botox vs Dysport: Doctor's Comparison (2026) | Cosmedocs Harley Street"
    metaDescription="Botox vs Dysport compared by a GMC-registered doctor — onset, spread, units, longevity, cost. Honest clinical guidance from Harley Street."
    h1="Botox vs Dysport — a doctor's honest comparison"
    intro="Both are FDA-approved botulinum toxin type A. Both soften expression lines and treat medical conditions from migraine to hyperhidrosis. They differ in molecule size, diffusion, onset, dosing units and — to a careful eye — how the result feels."
    topAnswer="Botox (onabotulinumtoxinA) and Dysport (abobotulinumtoxinA) are clinically equivalent for most patients. Dysport tends to start working 1–2 days sooner and diffuses slightly wider, which suits broad areas like the forehead. Botox is more precise for small muscles such as the lip flip or brow lift. Dosing units are not interchangeable — roughly 1 unit of Botox ≈ 2.5–3 units of Dysport."
    rows={[
      { attribute: "Molecule (active ingredient)", optionA: "OnabotulinumtoxinA, 900 kDa complex", optionB: "AbobotulinumtoxinA, ~500 kDa complex" },
      { attribute: "Onset of effect", optionA: "3–5 days, full effect at 14 days", optionB: "2–4 days, full effect at 10–14 days" },
      { attribute: "Diffusion (spread from injection point)", optionA: "Tighter, more precise", optionB: "Wider — useful for forehead, less so for lip flip" },
      { attribute: "Typical duration", optionA: "3–4 months", optionB: "3–4 months (some studies suggest marginally longer at first dose)" },
      { attribute: "Dosing ratio", optionA: "1 unit (reference)", optionB: "~2.5–3 units = 1 Botox unit" },
      { attribute: "Single-area price at Cosmedocs", optionA: "From £175", optionB: "From £175 (we charge by area, not unit)" },
      { attribute: "Best for", optionA: "Crow's feet, lip flip, masseter, fine dosing", optionB: "Broad forehead lines, hyperhidrosis, large areas" },
      { attribute: "Antibody / resistance risk", optionA: "Very low with current formulations", optionB: "Very low; some literature suggests marginally lower antigenicity" },
      { attribute: "Reversibility", optionA: "Wears off naturally — no antidote", optionB: "Wears off naturally — no antidote" },
    ]}
    whenA="Small, precise muscles where over-diffusion would weaken a neighbour: the lip flip, brow lift, fine crow's feet, gummy smile, masseter detail-work, or any retreatment where a previous Dysport result spread further than intended."
    whenB="Broad, even muscle sheets such as the forehead or both axillae for hyperhidrosis — patients who want faster onset before an event and don't mind the wider spread. Often preferred in larger-volume medical use."
    bottomLine="At Cosmedocs we keep both in clinic. The choice is rarely about brand preference — it's about matching the molecule's diffusion profile to your anatomy and the goal of the treatment. A doctor who only offers one is choosing for their stock cupboard, not your face. Either way, the result should be invisible: nobody asks what brand you used, only why you look well-rested."
    faqs={[
      { question: "Is Dysport stronger than Botox?", answer: "No. They are equipotent when dosed correctly. The difference is in dosing units (Dysport uses more units to deliver the same effect) and in spread. Calling one 'stronger' is a marketing shortcut, not a clinical reality." },
      { question: "Can I switch from Botox to Dysport (or vice versa)?", answer: "Yes. There is no need to wash out. Most patients switch without issue. We may slightly adjust placement to account for Dysport's wider spread." },
      { question: "Which lasts longer, Botox or Dysport?", answer: "Both last around 3–4 months on average. A small number of patients report Dysport lasting marginally longer on the first treatment cycle; the difference usually evens out by the second cycle." },
      { question: "Which is cheaper?", answer: "Per-area pricing is the same at Cosmedocs (from £175 single area). Per-unit pricing favours Botox by default because Dysport uses more units — but unit-for-unit comparisons are misleading." },
      { question: "Are there other brands I should know about?", answer: "Xeomin (incobotulinumtoxinA) and Bocouture are 'naked' toxins with no complexing proteins, theoretically lowering antibody risk. Nuceiva and Letybo are newer options. All are FDA/MHRA approved; differences are subtle." },
    ]}
    relatedLinks={[
      { label: "Anti-Wrinkle Treatment — full guide", path: "/treatments/anti-wrinkle-treatment/" },
      { label: "Botox prices in London", path: "/botox-price-london/" },
      { label: "How long does Botox last?", path: "/how-long-does-botox-last/" },
      { label: "Masseter Botox dosage", path: "/masseter-botox-units-dosage/" },
    ]}
  />
);

export default BotoxVsDysport;
