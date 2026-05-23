import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Activity,
  Syringe,
  CheckCircle,
  AlertTriangle,
  Ear,
  Brain,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ExpandableSection from "@/components/ui/expandable-section";
import { generateSEOMetadata } from "@/utils/seo";

const faqs = [
  {
    q: "What is TMJ Botox and how is it different from masseter Botox?",
    a: "TMJ Botox is botulinum toxin used specifically to settle temporomandibular joint dysfunction — the clicking, locking, ear pressure, jaw fatigue and one-sided headaches that come from an overloaded jaw joint. Masseter Botox shares the same drug, but its primary purpose is cosmetic jaw slimming. TMJ treatment is symptom-led: the doctor maps which muscles are pulling the joint out of balance (masseter, temporalis, and where appropriate the lateral pterygoid) and treats those specifically. Many TMJ patients also notice mild jaw refinement as a secondary benefit, but that is not the clinical goal.",
  },
  {
    q: "How long does TMJ Botox take to work?",
    a: "Most patients feel the jaw quiet down between days 5 and 14. Morning jaw stiffness, ear pressure and tension headaches usually ease first; clicking and joint noise improve more gradually as the muscles stop overloading the disc. Peak symptom relief is typically reached at 4–6 weeks and lasts on average 4 months. A follow-up review at 4–6 weeks lets your doctor judge whether a small top-up is needed for asymmetry or stubborn trigger points.",
  },
  {
    q: "How much does TMJ Botox cost at CosmeDocs?",
    a: "TMJ Botox at our Harley Street clinic starts at £350 for treatment of both masseters where the jaw joint is being protected from clenching load. Where the temporalis muscles also need treating (typical in chronic tension-type headache and TMJ headache), the combined plan ranges £450–£550 depending on muscle volume and symptom pattern. Pricing is confirmed at a doctor-led consultation and includes a 4–6 week review.",
  },
  {
    q: "Will TMJ Botox stop my jaw clicking?",
    a: "It often reduces clicking, but it is honest to say it does not always silence it completely. Clicking is caused by the disc inside the joint moving slightly out of position when the muscles around the jaw pull unevenly. By calming the overactive muscles, Botox reduces the abnormal pull so the disc tracks more smoothly. In many patients the click softens or disappears; in patients with long-standing structural disc displacement, Botox eases pain and fatigue but the noise may persist and dental or maxillofacial input is appropriate.",
  },
  {
    q: "Is TMJ Botox safe? What are the side effects?",
    a: "When delivered by a doctor with anatomical training, TMJ Botox has a strong safety record. Common, short-lived effects include mild tenderness, small bruises, temporary chewing fatigue with tough foods and, occasionally, a mild headache for 24–48 hours. Less common risks include asymmetry of the smile if injections drift forward into the risorius region, weakness when biting hard foods for a few weeks, or under-treatment if doses are too conservative. CosmeDocs uses doctor-led palpation, conservative dosing and a 4–6 week review specifically to minimise these risks.",
  },
  {
    q: "Can TMJ Botox help with tension headaches and migraines?",
    a: "Yes — many TMJ patients carry their stress through the masseter and temporalis, and tension-type headaches are a direct downstream effect. By reducing muscle overactivity, the trigger that drives jaw-origin headaches is softened. For diagnosed chronic migraine, NICE approves a structured Botox protocol (PREEMPT) involving 31–39 sites across the head and neck — that is a separate medical pathway and we will refer or co-plan with a headache specialist where indicated. TMJ Botox alone is best understood as treatment for jaw-driven headaches and TMJ-related facial pain.",
  },
  {
    q: "Do I still need a mouthguard or dentist input?",
    a: "Often, yes. Botox calms the muscles that load the joint, but it does not repair dental wear, fix bite (occlusion) problems or replace a well-made night splint. We take a co-management view: TMJ Botox for the muscle component, your dentist or orthodontist for occlusion, splint therapy or restorative work, and physiotherapy where the neck and shoulders are also feeding the jaw. The patients who do best treat the whole loop rather than one piece of it.",
  },
  {
    q: "How often will I need TMJ Botox?",
    a: "Most patients return every 3–4 months in the first year, then 4–6 monthly once the masseter and temporalis have de-bulked and the joint has had time to settle. Patients with stress-driven clenching may always need maintenance; others find that with splint therapy, posture work and stress management, treatments can be spaced further apart over time.",
  },
  {
    q: "Can I have TMJ Botox if I'm pregnant or breastfeeding?",
    a: "No. We do not offer Botox during pregnancy or breastfeeding. If your TMJ symptoms are severe, we can discuss splint therapy, posture and stress strategies in the interim and plan treatment for after.",
  },
];

const symptomCards = [
  {
    icon: <Ear className="w-5 h-5" />,
    t: "Ear pressure & fullness",
    d: "The temporomandibular joint sits directly in front of the ear canal. Joint inflammation and lateral pterygoid spasm refer pain into the ear, mimicking ear infection when the ears themselves are clear.",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    t: "Temple & one-sided headache",
    d: "Overactive temporalis muscle is a leading driver of tension-type headache. Patients describe a tight band around the head or a dull ache above the ear that worsens through the working day.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    t: "Clicking, popping, locking",
    d: "An uneven pull on the joint disc causes opening or closing clicks. In flare-ups the jaw may catch, deviate to one side, or briefly lock open or closed.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    t: "Morning jaw stiffness",
    d: "Night-time clenching loads the joint for hours. Patients wake with a tight, fatigued jaw, sore teeth and a sense that the bite has shifted overnight.",
  },
];

const muscleTargets = [
  {
    t: "Masseter",
    d: "The strongest closing muscle. Treated bilaterally to reduce daytime clenching and night-time bite force — the single biggest mechanical load on the joint.",
  },
  {
    t: "Temporalis",
    d: "Fans out across the side of the head. Targeted in patients with temple ache, tight band headache or pain triggered by chewing tough foods. Often the missing piece when masseter-only treatment under-delivers.",
  },
  {
    t: "Lateral pterygoid",
    d: "Sits deep behind the cheekbone and is the key disc-positioning muscle. Selected, carefully, in patients with persistent clicking, deviation on opening or lateral joint pain — by clinicians with the relevant anatomical training.",
  },
];

const processSteps = [
  {
    n: "01",
    t: "Symptom mapping",
    d: "Your doctor takes a structured TMJ history — clicking, locking, ear pain, headaches, neck involvement, dental wear, stress and sleep — then palpates the joint and surrounding muscles whilst you open, close and clench.",
  },
  {
    n: "02",
    t: "Muscle-led plan",
    d: "We agree exactly which muscles to treat: masseter only, masseter plus temporalis, or — in selected cases — the lateral pterygoid as well. Dose is matched to your symptom pattern, not a flat unit number.",
  },
  {
    n: "03",
    t: "Precise placement",
    d: "Anatomical landmarks, palpation and clenching response guide each injection. The treatment itself takes 15–25 minutes. No sedation, no recovery time, straight back to work.",
  },
  {
    n: "04",
    t: "Review & refine",
    d: "We review at 4–6 weeks. Stubborn trigger points are addressed with a small targeted top-up; the long-term plan is then spaced to your symptom return and lifestyle, not to a fixed calendar.",
  },
];

const comparisonRows = [
  ["Primary goal", "Settle jaw joint pain, clicking and headaches", "Slim a wide or square lower face"],
  ["Patient profile", "TMJ dysfunction, bruxism, jaw-origin headache", "Cosmetic masculine or square lower-face contour"],
  ["Muscles treated", "Masseter ± temporalis ± lateral pterygoid", "Masseter only"],
  ["What success looks like", "Less pain, fewer headaches, easier opening", "Softer, narrower jawline over weeks"],
  ["Typical cost", "From £350 (combined plans £450–£550)", "£350 female / £400 male"],
];

const evidencePoints = [
  {
    t: "Clenching is a load problem",
    d: "Imaging and EMG studies show that night-time bruxism generates bite forces several times higher than normal chewing. Reducing that load is the single most reliable way to give an inflamed joint time to settle.",
  },
  {
    t: "Botulinum toxin in TMD",
    d: "Multiple peer-reviewed reviews of botulinum toxin for temporomandibular disorders report reduction in pain scores, lower bite force and improved function in selected myogenic patients. Results vary in patients whose pain is structural (disc displacement, arthritic change) rather than muscular.",
  },
  {
    t: "Doctor-led selection matters",
    d: "Not all TMJ pain is muscular. The decision of when not to inject — referring instead to maxillofacial review, splint therapy or imaging — is part of the clinical pathway and is why we keep TMJ Botox doctor-led.",
  },
];

const TMJBotox = () => {
  const seo = generateSEOMetadata(
    "TMJ Botox London | Jaw Joint, Clicking & Tension Headache | Harley Street",
    "Doctor-led TMJ Botox in London for jaw clicking, locking, ear pressure, tension headaches and bruxism. From £350 at our Harley Street clinic, since 2007.",
    "/treatments/tmj-botox/"
  );

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/tmj-botox/" data-rh="true" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/tmj-botox/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                name: "CosmeDocs",
                url: "https://www.cosmedocs.com/",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "10 Harley Street",
                  addressLocality: "London",
                  postalCode: "W1G 9PF",
                  addressCountry: "GB",
                },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "243" },
              },
              {
                "@type": "MedicalProcedure",
                name: "TMJ Botox",
                alternateName: [
                  "TMJ Botulinum Toxin",
                  "Jaw Joint Botox",
                  "Botox for TMJ Dysfunction",
                  "Botox for Bruxism and TMJ",
                ],
                description:
                  "Doctor-led TMJ Botox at CosmeDocs Harley Street for jaw clicking, locking, ear pressure, jaw-origin tension headaches and bruxism. Treatment targets masseter, temporalis and — where indicated — lateral pterygoid muscles.",
                url: "https://www.cosmedocs.com/treatments/tmj-botox/",
                procedureType: "NoninvasiveProcedure",
                bodyLocation: "Temporomandibular joint, masseter, temporalis, lateral pterygoid",
                howPerformed:
                  "A doctor performs a structured TMJ history and palpation, maps the overactive muscle groups loading the jaw joint, then places precise botulinum toxin doses bilaterally to reduce mechanical overload and symptom-driving muscle activity.",
                followup: "Review at 4–6 weeks; maintenance every 3–4 months in year one, then 4–6 monthly.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "Offer",
                name: "TMJ Botox",
                priceCurrency: "GBP",
                price: "350",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "GBP",
                  minPrice: 350,
                  maxPrice: 550,
                },
                availability: "https://schema.org/InStock",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="treatment-page ios-mobile bg-[#F5F5F3] text-[#0a0a0a] min-h-screen">
        {/* ───── Hero ───── */}
        <header className="bg-[#F5F5F3]">
          <div className="tp-container pt-6 pb-2">
            <Breadcrumb
              items={[
                { label: "Treatments", path: "/treatments/" },
                { label: "Botox", path: "/treatments/botox/" },
              ]}
              currentPage="TMJ Botox"
            />
          </div>
          <section className="!pt-4">
            <div className="tp-container">
              <p className="eyebrow">Doctor-led · Harley Street · Since 2007</p>
              <h1 className="font-light">
                TMJ Botox <span className="text-[#C9A050]">London</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[#2a2a2a]">
                A quieter jaw joint. Fewer headaches. Easier mornings. Doctor-led TMJ Botox for clicking, locking, ear pressure, tension headaches and bruxism — at our Harley Street clinic.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] italic text-[#C9A050]/90">
                Our aesthetics is invisible art — bold, natural, always your way.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="tp-cta">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/treatments/masseter-botox/"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.95rem] border border-[#0a0a0a]/15 text-[#0a0a0a] text-[15px] font-medium hover:bg-[#0a0a0a]/[0.03] transition"
                >
                  Compare with masseter Botox
                </Link>
              </div>

              {/* Quick facts */}
              <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "15–25 min" },
                  { icon: <Activity className="w-4 h-4" />, label: "No downtime" },
                  { icon: <Syringe className="w-4 h-4" />, label: "From £350" },
                  { icon: <ShieldCheck className="w-4 h-4" />, label: "Doctor-led" },
                ].map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-2 rounded-2xl bg-white border border-black/[0.06] px-4 py-3 text-[15px]"
                  >
                    <span className="text-[#C9A050]">{f.icon}</span>
                    <span className="text-[#2a2a2a]">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </header>

        {/* ───── What is TMJ dysfunction ───── */}
        <section aria-labelledby="what-heading">
          <div className="tp-container">
            <p className="eyebrow">Clinical context</p>
            <h2 id="what-heading">
              What TMJ dysfunction <span className="text-[#C9A050]">actually is</span>
            </h2>
            <div className="mt-6 text-[16px] leading-8 text-[#2a2a2a]">
              <ExpandableSection
                label="Read more"
                collapseLabel="Show less"
                preview={
                  <p>
                    The temporomandibular joint, or TMJ, is the small hinge that connects your lower jaw to your skull, just in front of the ear. It is one of the most-used joints in the body — every word, every meal, every yawn passes through it — and it carries a small cartilage disc that should glide smoothly as the jaw opens and closes. TMJ dysfunction, sometimes called temporomandibular disorder (TMD), is what happens when the muscles, joint and disc fall out of balance.
                  </p>
                }
              >
                <div className="space-y-5">
                  <p>
                    The result is rarely one symptom. Patients describe clicking when they open wide, ear fullness or pressure that an ENT review cannot explain, dull headaches across the temple, tooth pain without a dental cause, a tight band around the head, neck stiffness, and a jaw that feels exhausted by the end of the working day. In flare-ups the joint may catch, deviate to one side on opening, or briefly lock.
                  </p>
                  <p>
                    The mechanical engine behind most of this is muscle overactivity — chronic clenching, night-time grinding (bruxism), stress, posture, and habitual jaw guarding. The masseter and temporalis carry the load and squeeze the joint disc unevenly between bony surfaces it was never designed to absorb. Over time the joint becomes irritated, the disc tracks abnormally, and pain becomes self-reinforcing.
                  </p>
                  <p>
                    TMJ Botox sits in this picture as a muscle-quietening intervention. It does not anaesthetise the joint, it does not regrow disc tissue, and it is not a substitute for a dental opinion when the bite or restorative work is part of the cause. What it does well is reduce the abnormal mechanical load — and, in selected patients, that is enough to let the joint and the surrounding tissues settle.
                  </p>
                </div>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* ───── Symptoms ───── */}
        <section aria-labelledby="symptoms-heading">
          <div className="tp-container">
            <p className="eyebrow">Symptom pattern</p>
            <h2 id="symptoms-heading">
              What TMJ patients <span className="text-[#C9A050]">actually feel</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[#2a2a2a]">
              TMJ disorder rarely arrives as a single complaint. Most patients tick three or four of the following — and have often seen a dentist, ENT or GP before they reach a jaw-focused consultation.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {symptomCards.map((s) => (
                <div key={s.t} className="rounded-2xl bg-white border border-black/[0.06] p-5">
                  <span className="inline-flex w-9 h-9 rounded-full bg-[#C9A050]/10 text-[#C9A050] items-center justify-center mb-3">
                    {s.icon}
                  </span>
                  <h3 className="!mb-1">{s.t}</h3>
                  <p className="text-[15px] text-[#2a2a2a]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── How Botox helps ───── */}
        <section aria-labelledby="mechanism-heading">
          <div className="tp-container">
            <p className="eyebrow">Mechanism</p>
            <h2 id="mechanism-heading">
              How TMJ Botox <span className="text-[#C9A050]">quiets the joint</span>
            </h2>
            <div className="mt-6 text-[16px] leading-8 text-[#2a2a2a]">
              <ExpandableSection
                label="Read more"
                collapseLabel="Show less"
                preview={
                  <p>
                    Botulinum toxin blocks the chemical signal between nerve and muscle. Used precisely, it does not paralyse the jaw — it reduces excessive contraction. In TMJ treatment, that translates into less bite force at night, less day-time clenching, and less mechanical squeezing of the joint disc. Symptoms ease because the joint is finally allowed to rest.
                  </p>
                }
              >
                <div className="space-y-5">
                  <p>
                    The treatment is targeted, not blanket. Your doctor decides which combination of muscles to treat. The masseter is almost always part of the plan because it is the strongest closing muscle and the main bite-force generator. The temporalis is added when temple ache, tight-band headache or pain with chewing is prominent. The lateral pterygoid is considered, by clinicians with the relevant anatomical training, in patients with persistent clicking, deviation on opening or specific lateral joint pain.
                  </p>
                  <p>
                    Because Botox takes effect over the muscle's daily cycle, the symptomatic shift is gradual. Most patients report that morning jaw stiffness eases first, often within the first week. Tension headaches and ear pressure follow over two to three weeks. Clicking and joint noise change more slowly and not always completely — the joint disc still needs time to settle into a smoother track once the muscle pull is corrected.
                  </p>
                </div>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* ───── Muscle targets ───── */}
        <section aria-labelledby="muscles-heading">
          <div className="tp-container">
            <p className="eyebrow">Anatomical targets</p>
            <h2 id="muscles-heading">
              The three muscles that <span className="text-[#C9A050]">drive TMJ pain</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {muscleTargets.map((m) => (
                <div key={m.t} className="rounded-2xl bg-white border border-black/[0.06] p-5">
                  <h3 className="!mb-1">{m.t}</h3>
                  <p className="text-[15px] text-[#2a2a2a]">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.08] p-5">
              <p className="text-[15px] leading-7 text-[#2a2a2a]">
                Treating only the masseter when the temporalis is the loudest muscle is a common reason patients say "Botox didn't work for my TMJ". The fix is rarely more units in the same place — it is treating the muscle that is actually generating the pain.
              </p>
            </div>
          </div>
        </section>

        {/* ───── Process ───── */}
        <section aria-labelledby="how-heading">
          <div className="tp-container">
            <p className="eyebrow">How it works</p>
            <h2 id="how-heading">
              Four steps. <span className="text-[#C9A050]">No drama.</span>
            </h2>
            <ol className="mt-6 space-y-3">
              {processSteps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl bg-white border border-black/[0.06] p-5 flex gap-4"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-[#C9A050] text-black grid place-items-center text-[14px] font-semibold">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="!mb-1">{s.t}</h3>
                    <p className="text-[15px] text-[#2a2a2a]">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───── TMJ Botox vs Masseter Botox ───── */}
        <section aria-labelledby="vs-heading">
          <div className="tp-container">
            <p className="eyebrow">Decision clarity</p>
            <h2 id="vs-heading">
              TMJ Botox vs <span className="text-[#C9A050]">masseter Botox</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[#2a2a2a]">
              They share a drug. They share a muscle. They are not the same treatment. The honest difference is intent and the muscles included in the plan.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
              <div className="hidden md:grid grid-cols-3 bg-[#0a0a0a] text-white text-[12px] uppercase tracking-[0.16em]">
                <div className="p-4">Question</div>
                <div className="p-4 border-l border-white/10">TMJ Botox</div>
                <div className="p-4 border-l border-white/10">Masseter Botox</div>
              </div>
              {comparisonRows.map(([label, tmj, mass]) => (
                <div key={label} className="grid grid-cols-1 md:grid-cols-3 border-t border-black/[0.06] text-[15px]">
                  <div className="p-4 font-medium text-[#0a0a0a] bg-[#fafafa] md:bg-white">{label}</div>
                  <div className="p-4 md:border-l border-black/[0.06] text-[#2a2a2a]">
                    <span className="md:hidden text-[11px] uppercase tracking-[0.16em] text-[#C9A050] block mb-1">TMJ Botox</span>
                    {tmj}
                  </div>
                  <div className="p-4 md:border-l border-black/[0.06] text-[#2a2a2a]">
                    <span className="md:hidden text-[11px] uppercase tracking-[0.16em] text-[#C9A050] block mb-1">Masseter Botox</span>
                    {mass}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-[#555]">
              For pure cosmetic jaw slimming, see our <Link to="/treatments/masseter-botox/" className="text-[#C9A050] underline underline-offset-4">masseter Botox page</Link>. For night-time grinding without TMJ pain, see <Link to="/treatments/bruxism-botox/" className="text-[#C9A050] underline underline-offset-4">bruxism Botox</Link>.
            </p>
          </div>
        </section>

        {/* ───── Suitability ───── */}
        <section aria-labelledby="suit-heading">
          <div className="tp-container">
            <p className="eyebrow">Suitability</p>
            <h2 id="suit-heading">
              Who TMJ Botox <span className="text-[#C9A050]">suits</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <CheckCircle className="w-5 h-5 text-[#C9A050]" />
                <h3 className="mt-4 !mb-3">May be suitable</h3>
                <ul className="space-y-2 text-[15px] text-[#2a2a2a] list-disc pl-5">
                  <li>TMJ clicking, popping or occasional locking driven by muscle overload</li>
                  <li>Morning jaw stiffness with night-time clenching or grinding</li>
                  <li>Ear pressure or fullness with a normal ENT examination</li>
                  <li>Temple or one-sided tension headaches linked to jaw use</li>
                  <li>Dental wear or chipped restorations from chronic bruxism</li>
                  <li>Patients already using a night splint who still have pain</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <AlertTriangle className="w-5 h-5 text-[#0a0a0a]/60" />
                <h3 className="mt-4 !mb-3">May not be suitable</h3>
                <ul className="space-y-2 text-[15px] text-[#2a2a2a] list-disc pl-5">
                  <li>Pregnancy or breastfeeding</li>
                  <li>Predominantly structural joint disease (advanced arthritic change, fixed disc displacement)</li>
                  <li>Active infection at the treatment site</li>
                  <li>Relevant neuromuscular conditions</li>
                  <li>Untreated dental cause for the pain (review with your dentist first)</li>
                  <li>Expectation of an instant cure rather than a managed pathway</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Evidence ───── */}
        <section aria-labelledby="evidence-heading">
          <div className="tp-container">
            <p className="eyebrow">Evidence-led practice</p>
            <h2 id="evidence-heading">
              What the literature <span className="text-[#C9A050]">actually supports</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {evidencePoints.map((e) => (
                <div key={e.t} className="rounded-2xl bg-white border border-black/[0.06] p-5">
                  <h3 className="!mb-1">{e.t}</h3>
                  <p className="text-[15px] text-[#2a2a2a]">{e.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#C9A050]/30 bg-[#C9A050]/[0.08] p-5">
              <p className="text-[15px] leading-7 text-[#2a2a2a]">
                Our position is straightforward: TMJ Botox works best for myogenic, muscle-driven temporomandibular disorder. It is one tool inside a wider plan that may also include a custom dental splint, physiotherapy for the neck and shoulders, posture work, sleep hygiene and stress management. Patients who treat the whole loop, not one piece of it, do better.
              </p>
            </div>
          </div>
        </section>

        {/* ───── Aftercare ───── */}
        <section aria-labelledby="aftercare-heading">
          <div className="tp-container">
            <p className="eyebrow">Aftercare & recovery</p>
            <h2 id="aftercare-heading">
              Back to normal life — <span className="text-[#C9A050]">immediately</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-5">
                <h3 className="!mb-2">First 24–48 hours</h3>
                <p className="text-[15px] text-[#2a2a2a]">
                  Avoid strenuous exercise, saunas, heavy alcohol and lying flat immediately after treatment. Do not massage the jaw. Skip chewing gum and very chewy foods for 48 hours. Small bruises and mild tenderness at injection points are uncommon and short-lived.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-5">
                <h3 className="!mb-2">First six weeks</h3>
                <p className="text-[15px] text-[#2a2a2a]">
                  Symptom relief is gradual. Most patients feel a quieter jaw within 5–14 days, with peak benefit at 4–6 weeks. Keep wearing your night splint if your dentist has prescribed one. Note any persistent trigger points to discuss at your review appointment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Pricing ───── */}
        <section aria-labelledby="pricing-heading">
          <div className="tp-container">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-heading">
              Clear pricing. <span className="text-[#C9A050]">No add-ons.</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Masseter-focused</p>
                <p className="text-4xl font-light">£350</p>
                <p className="mt-2 text-[15px] text-[#2a2a2a]">Bilateral masseter Botox for jaw clenching and TMJ load. Includes consultation and 4–6 week review.</p>
              </div>
              <div className="rounded-2xl bg-white border border-black/[0.06] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A050] mb-2">Combined TMJ plan</p>
                <p className="text-4xl font-light">£450–£550</p>
                <p className="mt-2 text-[15px] text-[#2a2a2a]">Masseter plus temporalis for jaw-origin tension headaches and broader TMJ pain. Lateral pterygoid considered case by case.</p>
              </div>
            </div>
            <p className="mt-4 text-[13px] text-[#555]">
              We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
            </p>
          </div>
        </section>

        {/* ───── FAQs ───── */}
        <section aria-labelledby="faq-heading">
          <div className="tp-container">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-heading">
              Honest <span className="text-[#C9A050]">answers</span>
            </h2>
            <div className="mt-6 rounded-2xl bg-white border border-black/[0.06] overflow-hidden divide-y divide-black/[0.06]">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5 open:bg-black/[0.02]">
                  <summary className="flex justify-between items-center gap-4 cursor-pointer list-none">
                    <h3 className="!mb-0 text-[17px] font-medium">{f.q}</h3>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-black/15 grid place-items-center text-[15px] text-[#C9A050] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-[#2a2a2a]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Related ───── */}
        <section aria-labelledby="related-heading">
          <div className="tp-container">
            <p className="eyebrow">Related care</p>
            <h2 id="related-heading">
              Where TMJ Botox <span className="text-[#C9A050]">fits in</span>
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <Link to="/treatments/masseter-botox/" className="rounded-2xl bg-white border border-black/[0.06] p-5 hover:border-[#C9A050]/40 transition">
                <h3 className="!mb-1">Masseter Botox</h3>
                <p className="text-[15px] text-[#2a2a2a]">Cosmetic jaw slimming with the same drug — different intent, different plan.</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#C9A050] text-[14px]">Learn more <ArrowRight className="w-4 h-4" /></span>
              </Link>
              <Link to="/treatments/bruxism-botox/" className="rounded-2xl bg-white border border-black/[0.06] p-5 hover:border-[#C9A050]/40 transition">
                <h3 className="!mb-1">Bruxism Botox</h3>
                <p className="text-[15px] text-[#2a2a2a]">For night-time grinding without significant joint pain or clicking.</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#C9A050] text-[14px]">Learn more <ArrowRight className="w-4 h-4" /></span>
              </Link>
              <Link to="/medical/" className="rounded-2xl bg-white border border-black/[0.06] p-5 hover:border-[#C9A050]/40 transition">
                <h3 className="!mb-1">Medical Botox</h3>
                <p className="text-[15px] text-[#2a2a2a]">The wider doctor-led medical Botox programme at CosmeDocs Harley Street.</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#C9A050] text-[14px]">Learn more <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="!pt-6 !pb-16">
          <div className="tp-container">
            <div className="rounded-3xl bg-[#0a0a0a] text-white p-8 md:p-12 text-center">
              <Sparkles className="w-6 h-6 text-[#C9A050] mx-auto mb-4" />
              <h2 className="!mb-3 text-white">
                Your consultation <span className="text-[#C9A050]">begins here</span>
              </h2>
              <p className="text-white/70 max-w-xl mx-auto text-[15px]">
                A quieter joint. Fewer headaches. Calmer mornings. Book a doctor-led TMJ assessment for symptom mapping, muscle planning and a treatment that respects the way your face works.
              </p>
              <a
                href="https://med.as.me/harleystreet"
                target="_blank"
                rel="noopener noreferrer"
                className="tp-cta mt-6 inline-flex"
              >
                Book at Harley Street <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TMJBotox;
