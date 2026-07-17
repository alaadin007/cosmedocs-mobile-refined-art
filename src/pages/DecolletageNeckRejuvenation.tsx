import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TreatmentAccordion from "@/components/treatment/TreatmentAccordion";
import MedicalArticleSchema from "@/components/seo/MedicalArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

const CANONICAL = "/treatments/decolletage-neck-rejuvenation/";

const faqs = [
  {
    question: "What causes the neck and décolletage to age faster than the face?",
    answer:
      "The skin over the neck and chest has a thinner stratum corneum, fewer sebaceous glands and less structural collagen than facial skin. It is repeatedly exposed to UV (especially through car windows and open necklines) and to mechanical creasing from sleep and posture. The result is early crepiness, horizontal 'necklace' lines, sun-induced pigmentation and vertical cleavage wrinkles — often years before comparable changes appear on the face.",
  },
  {
    question: "Which treatment is best for cleavage wrinkles from side-sleeping?",
    answer:
      "Vertical cleavage lines are a mechanical crease problem, not a volume problem. The most predictable results come from a layered protocol: skin boosters or polynucleotides to thicken the dermis, small-volume soft hyaluronic acid filler placed intradermally to smooth the individual creases, and a posture/sleep-position review. A single modality rarely resolves them fully.",
  },
  {
    question: "Can Radiesse be used on the neck and décolletage safely?",
    answer:
      "Yes — hyper-diluted Radiesse (calcium hydroxylapatite) is a well-established biostimulator for the neck and chest. It is diluted with saline and lidocaine and delivered with a cannula to trigger neocollagenesis. It is not used as a volumising filler in this area; it is used as a collagen and elastin stimulator to improve overall skin quality and thickness over 3–6 months.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most patients need 2–3 sessions spaced 4–6 weeks apart, then a maintenance session every 9–12 months. Deeper concerns (heavy sun damage, established crepiness) often need a combination protocol across peels, boosters and biostimulators rather than repeating a single treatment.",
  },
  {
    question: "Is there downtime?",
    answer:
      "Superficial peels and skin boosters typically have 24–48 hours of mild redness. Polynucleotides and hyper-diluted Radiesse can leave small bumps for 6–24 hours. Medium-depth peels and fractional resurfacing involve 5–7 days of visible peeling. We schedule your protocol around your calendar.",
  },
];

const DecolletageNeckRejuvenation = () => {
  return (
    <>
      <Helmet>
        <title>Décolletage & Neck Rejuvenation London | Cosmedocs</title>
        <meta
          name="description"
          content="Doctor-led décolletage and neck rejuvenation in London. Peels, skin boosters, polynucleotides, Radiesse and dermal fillers for crepiness, cleavage wrinkles and necklace lines."
          data-rh="true"
        />
        <link rel="canonical" href={`https://www.cosmedocs.com${CANONICAL}`} data-rh="true" />
        <meta property="og:title" content="Décolletage & Neck Rejuvenation — Cosmedocs" data-rh="true" />
        <meta
          property="og:description"
          content="A layered protocol from peels to biostimulators for the neck, chest and cleavage — invisible, natural, doctor-led."
          data-rh="true"
        />
        <meta property="og:type" content="article" data-rh="true" />
        <meta property="og:url" content={`https://www.cosmedocs.com${CANONICAL}`} data-rh="true" />
      </Helmet>

      <MedicalArticleSchema
        path={CANONICAL}
        headline="Décolletage & Neck Rejuvenation"
        description="Doctor-led protocol for neck and chest rejuvenation using peels, skin boosters, polynucleotides, biostimulating fillers and dermal fillers."
        datePublished="2026-07-17"
        speakableSelectors={[".speakable"]}
      />
      <FAQSchema faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <div className="treatment-page is-dark">
        {/* Hero */}
        <section>
          <div className="tp-container">
            <p className="eyebrow">Neck · Chest · Cleavage</p>
            <h1>Décolletage &amp; Neck Rejuvenation</h1>
            <p className="tp-prose speakable">
              The neck and chest age faster than the face. Skin here is thinner, has fewer oil glands and takes
              years of UV through open necklines and car windows. Our layered protocol treats the whole area —
              from a superficial refresh to deep biostimulation — with quiet, natural results.
            </p>
            <a className="tp-cta" href="/contact/">Book a décolletage consultation</a>
          </div>
        </section>

        {/* Why this area is different */}
        <section>
          <div className="tp-container tp-prose">
            <h2>Why the neck and décolletage age differently</h2>
            <p>
              Facial skin is supported by dense collagen, muscular attachments and a relatively thick epidermis.
              The skin over the neck and upper chest is not. Its stratum corneum — the outermost barrier — is
              measurably thinner, and the underlying dermis contains fewer fibroblasts producing new collagen.
              Add cumulative sun exposure (the décolletage receives more incidental UV than almost any other body
              site), repeated mechanical folding from side-sleeping, and the downward pull of gravity on
              relatively unsupported tissue, and the result is a predictable pattern of ageing:
            </p>
            <ul>
              <li><strong>Crepey, tissue-paper texture</strong> from dermal thinning and dehydration.</li>
              <li><strong>Horizontal 'necklace' lines</strong> — habitual creases that become permanent.</li>
              <li><strong>Vertical cleavage wrinkles</strong> from side-sleeping and reduced elasticity.</li>
              <li><strong>Sun-induced pigmentation</strong>: freckling, mottling, poikiloderma of Civatte.</li>
              <li><strong>Loss of firmness</strong> along the jawline-to-neck junction.</li>
            </ul>
            <p>
              Because several causes coexist, one modality is rarely enough. We categorise treatments by
              <em> depth of action</em> — from superficial to deep — and build a protocol that addresses each
              layer in turn.
            </p>
          </div>
        </section>

        {/* Layer 1 — Superficial */}
        <section>
          <div className="tp-container tp-prose">
            <p className="eyebrow">Layer 1 · Superficial</p>
            <h2>Chemical peels for pigmentation, texture and tone</h2>
            <p>
              Peels work on the epidermis and upper dermis. On the neck and chest they are used to lift sun
              damage, brighten mottled pigmentation and encourage a smoother surface — the essential first step
              before any biostimulator, because a healthier epidermis reflects light more evenly and lets deeper
              treatments show their true result.
            </p>
            <ul>
              <li>
                <strong>Glycolic acid peels (20–40%)</strong> — light, well tolerated, ideal as a course of 4–6
                sessions for early sun damage and dullness. See{" "}
                <Link to="/treatments/glycolic-acid-peel/">glycolic peel</Link>.
              </li>
              <li>
                <strong>Lactic acid peels</strong> — the gentlest option, safe on very thin décolletage skin and
                on darker Fitzpatrick types.{" "}
                <Link to="/treatments/lactic-acid-peel/">Lactic acid peel</Link>.
              </li>
              <li>
                <strong>Salicylic acid peels</strong> — best where the chest is prone to blocked follicles or
                congestion alongside sun damage. <Link to="/treatments/salicylic-acid-peel/">Salicylic peel</Link>.
              </li>
              <li>
                <strong>TCA peels (medium depth)</strong> — used cautiously on the neck at lower concentrations
                for entrenched pigmentation and fine crepiness. <Link to="/treatments/tca-peel/">TCA peel</Link>.
              </li>
            </ul>
            <p>
              Peels are the least expensive step and set the stage. They will not restore lost dermal thickness
              or lift crepey skin on their own — for that, we move deeper.
            </p>
          </div>
        </section>

        {/* Layer 2 — Skin boosters */}
        <section>
          <div className="tp-container tp-prose">
            <p className="eyebrow">Layer 2 · Intradermal</p>
            <h2>Skin boosters for hydration and quality</h2>
            <p>
              Skin boosters are micro-injections of soft, non-crosslinked hyaluronic acid (often combined with
              amino acids or vitamins) placed just under the surface. They do not add volume in the way a
              dermal filler does — they rehydrate the dermis, improve elasticity and restore a healthy 'glow'
              to the neck and cleavage.
            </p>
            <ul>
              <li>
                <strong><Link to="/treatments/profhilo/">Profhilo</Link></strong> — the most studied HA
                bio-remodeller. Ultra-pure hyaluronic acid that spreads through the tissue and stimulates all
                four types of collagen and elastin. Delivered as 5 BAP points either side of the neck, two
                sessions one month apart. Ideal first-line for early crepiness.
              </li>
              <li>
                <strong><Link to="/treatments/sunekos/">Sunekos</Link></strong> — HA plus a patented amino-acid
                blend that rebuilds the extracellular matrix. Particularly useful on thin décolletage skin.
              </li>
              <li>
                <strong><Link to="/treatments/jalupro/">Jalupro</Link></strong> — amino-acid rich booster that
                supports fibroblast activity; a good option for lifestyle-related dullness.
              </li>
            </ul>
            <p>
              Skin boosters are the pivot point of any décolletage protocol: they treat the cause of thinning
              rather than masking its symptoms.
            </p>
          </div>
        </section>

        {/* Layer 3 — Polynucleotides */}
        <section>
          <div className="tp-container tp-prose">
            <p className="eyebrow">Layer 3 · Regenerative</p>
            <h2>Polynucleotides for wrinkles and dermal thickness</h2>
            <p>
              Polynucleotides are highly purified DNA fragments (typically from salmon or trout milt) that act
              directly on fibroblasts. Rather than filling a line, they instruct the skin to rebuild its own
              scaffold — collagen, elastin and extracellular matrix. On the neck and cleavage this produces a
              genuine increase in dermal thickness, visibly softer horizontal necklace lines and reduced
              crepiness over a course of 3 sessions spaced 2–3 weeks apart.
            </p>
            <p>
              We consider polynucleotides the definitive answer for patients whose main concern is
              <em> quality</em> rather than <em>volume</em>: thin, tissue-paper skin that looks fragile even
              when hydrated. See <Link to="/treatments/polynucleotides/">polynucleotide treatment</Link> for
              the full clinical protocol.
            </p>
          </div>
        </section>

        {/* Layer 4 — Biostimulators */}
        <section>
          <div className="tp-container tp-prose">
            <p className="eyebrow">Layer 4 · Deep biostimulation</p>
            <h2>Radiesse and calcium hydroxylapatite biostimulators</h2>
            <p>
              For patients with established laxity, loss of firmness and a papery, sagging quality across the
              whole décolletage, hyper-diluted <strong>Radiesse (calcium hydroxylapatite)</strong> is the most
              effective option we offer short of surgery. The microspheres are diluted with saline and
              lidocaine and delivered through a blunt cannula in a fanning pattern across the chest and lower
              neck.
            </p>
            <p>
              The calcium hydroxylapatite microspheres act as a scaffold for the patient's own fibroblasts to
              lay down new type I and type III collagen and elastin. Results build gradually over 3–6 months
              and last 12–18 months. Because it is diluted, Radiesse used here is a
              <em> collagen stimulator</em>, not a volumiser — the result is thicker, firmer, more resilient
              skin, not a filled-out appearance.
            </p>
            <p>
              Radiesse is particularly well suited to the chest because the area tolerates biostimulation
              beautifully and shows visible textural improvement that no HA product can match at the same depth.
            </p>
          </div>
        </section>

        {/* Layer 5 — Dermal fillers */}
        <section>
          <div className="tp-container tp-prose">
            <p className="eyebrow">Layer 5 · Targeted correction</p>
            <h2>Dermal fillers for cleavage wrinkles and necklace lines</h2>
            <p>
              Where individual lines remain after the layers above — vertical cleavage creases from
              side-sleeping, or a single deep necklace band — soft, low-G′ hyaluronic acid fillers are placed
              intradermally with a fine needle or micro-cannula. The goal is to smooth the line without
              creating a visible ridge; this is technically demanding and belongs in doctor-led hands.
            </p>
            <p>
              Related pillar pages: <Link to="/treatments/dermal-fillers/">dermal fillers</Link>,{" "}
              <Link to="/treatments/lip-fillers/">lip fillers</Link>,{" "}
              <Link to="/treatments/jawline-filler/">jawline filler</Link>.
            </p>
          </div>
        </section>

        {/* Combination protocols */}
        <section>
          <div className="tp-container tp-prose">
            <h2>How we combine the layers</h2>
            <p>
              A typical décolletage rejuvenation programme runs over 8–12 weeks and combines two or three of
              the layers above. Examples of protocols we frequently prescribe:
            </p>
            <ul>
              <li>
                <strong>Early sun damage, tone concerns:</strong> course of 4 glycolic peels + prescription
                antioxidant homecare.
              </li>
              <li>
                <strong>Crepey texture, no lines yet:</strong> 2 sessions Profhilo, spaced 4 weeks, followed by
                one polynucleotide session at week 12.
              </li>
              <li>
                <strong>Thin skin plus visible cleavage wrinkles:</strong> 3 polynucleotide sessions, then soft
                HA filler placed intradermally in the residual lines.
              </li>
              <li>
                <strong>Established laxity across the whole chest:</strong> hyper-diluted Radiesse, one to two
                sessions, layered over an initial peel to optimise skin surface.
              </li>
            </ul>
          </div>
        </section>

        {/* What to avoid */}
        <section>
          <div className="tp-container tp-prose">
            <h2>What we do not recommend</h2>
            <p>
              We do not use thick, highly cross-linked structural fillers on the neck or chest — the risks of
              visible lumps and vascular events outweigh any benefit. We also avoid aggressive ablative
              resurfacing on very thin décolletage skin. If crepiness has progressed to true surgical laxity,
              we will say so and discuss appropriate onward referral rather than over-treating.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="tp-container tp-prose">
            <h2>Common questions</h2>
            <TreatmentAccordion items={faqs.map(f => ({ q: f.question, a: f.answer }))} />
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="tp-container tp-prose" style={{ textAlign: "center" }}>
            <h2>Book a doctor-led consultation</h2>
            <p>
              Every neck and chest ages differently. Your consultation begins with a full skin analysis and an
              honest, layered plan — no upselling, no hidden depth.
            </p>
            <a className="tp-cta" href="/contact/">Book your consultation</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default DecolletageNeckRejuvenation;
