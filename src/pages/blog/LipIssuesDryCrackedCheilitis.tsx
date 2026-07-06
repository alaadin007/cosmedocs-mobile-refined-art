import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import blogCover from '@/assets/blog-cover-lip-issues-cheilitis.jpg';

const LipIssuesDryCrackedCheilitis = () => {
  const seoData = generateSEOMetadata(
    "Dry, Cracked & Sore Lips: A Doctor's Guide to Cheilitis | Cosmedocs",
    "Why lips dry, crack and inflame — the thin stratum corneum, cheilitis causes, and how to restore a resilient lip barrier. Dr Haq, Harley Street.",
    "/blog/lip-issues-dry-cracked-cheilitis"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalScholarlyArticle",
        "@id": "https://www.cosmedocs.com/blog/lip-issues-dry-cracked-cheilitis/#article",
        "headline": "Dry, Cracked & Sore Lips: A Doctor's Guide to Cheilitis",
        "description": seoData.description,
        "author": {
          "@type": "Person",
          "name": "Dr Ahmed Haq",
          "jobTitle": "Medical Director & Aesthetic Doctor (GMC registered)",
          "url": "https://www.cosmedocs.com/dr-ahmed-haq/"
        },
        "publisher": {
          "@type": "MedicalBusiness",
          "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com/",
          "logo": { "@type": "ImageObject", "url": "https://www.cosmedocs.com/logo.png" }
        },
        "datePublished": "2026-07-06",
        "dateModified": "2026-07-06",
        "image": `https://www.cosmedocs.com${blogCover}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.cosmedocs.com/blog/lip-issues-dry-cracked-cheilitis/"
        },
        "citation": [
          {
            "@type": "CreativeWork",
            "name": "Cheilitis — StatPearls",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK507900/",
            "publisher": { "@type": "Organization", "name": "National Center for Biotechnology Information (NCBI)" }
          }
        ],
        "inLanguage": "en-GB",
        "wordCount": 1600
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.cosmedocs.com/blog/lip-issues-dry-cracked-cheilitis/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do lips dry out faster than the rest of the face?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The vermilion (red) portion of the lip has an unusually thin stratum corneum — the outer waterproof layer of the skin — with far fewer keratinocytes and almost no sebaceous glands or hair follicles. Water evaporates through it quickly and there is no natural oil to slow the loss, so lips dehydrate faster than any other facial site."
            }
          },
          {
            "@type": "Question",
            "name": "What is cheilitis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cheilitis is inflammation of the lips. It presents as dryness, scaling, fissuring, redness, burning or crusting and has multiple subtypes — irritant contact, allergic, actinic (sun-induced), angular (at the corners), exfoliative, glandular and drug-induced. Most cases are irritant or contact in origin and resolve once the trigger is identified and the barrier is restored."
            }
          },
          {
            "@type": "Question",
            "name": "Does lip licking make dry lips worse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Saliva contains digestive enzymes (amylase, lipase) that strip the already-thin lip barrier. As saliva evaporates it also pulls water out of the tissue, leaving the lip drier than before. Repetitive licking is one of the most common causes of irritant contact cheilitis, especially in children."
            }
          },
          {
            "@type": "Question",
            "name": "When should I see a doctor about my lips?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any lip lesion, fissure, white patch, ulcer or scaling that persists beyond three weeks warrants medical review. Persistent lower-lip actinic cheilitis is pre-malignant and can progress to squamous cell carcinoma if left untreated. Recurrent angular cracks may indicate iron, B12 or folate deficiency, or an underlying Candida or Staphylococcus infection."
            }
          }
        ]
      }
    ]
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content="dry lips, cracked lips, cheilitis, angular cheilitis, actinic cheilitis, chapped lips, lip barrier, stratum corneum, lip inflammation, sore lips, lip care doctor" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://www.cosmedocs.com${blogCover}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">

        {/* Hero */}
        <section className="relative pt-28 pb-16 border-b border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={blogCover}
              alt="Close-up macro of healthy hydrated lips against a dark editorial background"
              className="w-full h-full object-cover opacity-40"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#C9A050] text-xs font-medium tracking-wider uppercase">
                Clinical Guide · Lip Health
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mt-4 mb-6 leading-[1.15]">
                Dry, Cracked &amp; Sore Lips:
                <br />
                <span className="text-[#C9A050] font-light">A Doctor's Guide </span>
                <span className="text-white/60">to Cheilitis</span>
              </h1>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-3xl">
                Lips aren't skin, exactly. They're a thin, barrier-poor transition zone
                that evaporates water faster than anywhere else on the face — which is why
                they dry, split and inflame so easily, and why balm alone rarely fixes it.
              </p>
              <div className="flex items-center gap-6 mt-8 text-white/30 text-sm font-light">
                <span>Dr Ahmed Haq</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>7 min read</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>July 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <article className="space-y-16">

            {/* Opening */}
            <motion.section {...fadeIn}>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6">
                Everyone has had dry lips. Very few people understand why. The reflex is to
                blame weather, dehydration, or the wrong balm — and while all three matter,
                they aren't the reason your lips crack when the skin two centimetres away
                doesn't. That reason is anatomical, and once you understand it, most lip
                problems make sense.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                The vermilion — the red part of the lip — is one of the most barrier-poor
                surfaces on the entire body. It sits between the tough keratinised skin
                of the face and the moist mucosa of the mouth, and it inherits the
                weaknesses of both. That's the whole story in one sentence. Everything
                below is the detail.
              </p>
            </motion.section>

            {/* Anatomy */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                Why Lips Are Different: The Very Thin Stratum Corneum
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                The <em>stratum corneum</em> is the outermost layer of the epidermis —
                flattened, dead keratinocytes cemented together by lipids. On the cheek
                it's around 15–20 cell layers thick. On the vermilion of the lip it is
                only 3–5 cell layers thick, and the lipid mortar between those cells is
                sparse. That single anatomical fact drives almost every lip complaint we
                see in clinic.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Add to that: the lip has <strong>no sebaceous glands</strong> on the
                vermilion, <strong>no sweat glands</strong>, no hair follicles, and no
                melanocytes producing meaningful pigment protection. It is a thin, dry,
                unarmoured surface — held together mostly by the underlying orbicularis
                oris muscle and a rich vascular bed that gives it its colour.
              </p>
              <div className="rounded-xl border border-[#C9A050]/25 bg-[#C9A050]/[0.04] p-6 md:p-8">
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mb-3">
                  Clinical Note
                </p>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  Transepidermal water loss (TEWL) on the vermilion is roughly
                  <strong className="text-white"> three to ten times higher</strong> than
                  on adjacent facial skin. That is the mechanical reason a moisturised
                  face can still sit above cracked lips.
                </p>
              </div>
            </motion.section>

            {/* Cheilitis intro */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                Cheilitis: The Medical Term for Angry Lips
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                <em>Cheilitis</em> simply means inflammation of the lips. It's a
                descriptive term, not a diagnosis — the job is always to work out which
                type. The StatPearls chapter on cheilitis (a peer-reviewed reference used
                by clinicians worldwide) categorises it into distinct patterns, each with
                a different cause and a different fix.
              </p>
            </motion.section>

            {/* Types */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                The Main Types — and What Actually Causes Them
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Irritant Contact Cheilitis",
                    body: "The most common presentation. Chronic lip licking, harsh toothpaste (sodium lauryl sulphate, cinnamates), cold dry air, wind, and repeated wiping. Saliva delivers amylase and lipase directly onto the barrier and pulls water out as it evaporates — a self-perpetuating cycle. Children and habitual lip-lickers are the classic patients."
                  },
                  {
                    title: "Allergic Contact Cheilitis",
                    body: "A true delayed-type hypersensitivity reaction. Common culprits: nickel (from instruments or jewellery held to the mouth), fragrances, propolis, lanolin, some lipsticks and — surprisingly often — the flavouring in toothpaste. Presents as itchy, scaly, sometimes vesicular lips that persist despite balm."
                  },
                  {
                    title: "Angular Cheilitis (Perlèche)",
                    body: "Fissuring and inflammation at the corners of the mouth, where saliva pools. Nearly always mixed infection — Candida albicans plus Staphylococcus aureus — often on a background of iron, B12 or folate deficiency, ill-fitting dentures, or over-closure of the bite from tooth loss. Treated with an antifungal-steroid combination and correction of the underlying driver."
                  },
                  {
                    title: "Actinic Cheilitis",
                    body: "Chronic UV damage, almost exclusively on the lower lip. Presents as persistent scaling, blurred vermilion border, and pale atrophic patches. This is pre-malignant. Progression to lip squamous cell carcinoma is well documented and any non-healing lesion should be biopsied. SPF lip protection is not optional for outdoor workers or fair-skinned patients."
                  },
                  {
                    title: "Exfoliative Cheilitis",
                    body: "Continuous cycle of scale and crust on the vermilion, often in young adults with a habit of picking or biting the peeling skin. Frequently associated with anxiety, and the treatment is as behavioural as it is topical."
                  },
                  {
                    title: "Drug-Induced Cheilitis",
                    body: "Oral isotretinoin (Roaccutane) is the textbook cause — dry, cracked lips affect nearly every patient on treatment. Other drugs: retinoids, chemotherapy agents, some antihypertensives. Managed with heavy occlusive balms throughout the course."
                  }
                ].map((t) => (
                  <div key={t.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7">
                    <h3 className="text-white text-lg md:text-xl font-light mb-2">{t.title}</h3>
                    <p className="text-white/60 text-base font-light leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Aggravators */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                Everyday Aggravators Most People Don't Suspect
              </h2>
              <ul className="space-y-4 text-white/60 text-lg font-light leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-[#C9A050]">—</span>
                  <span><strong className="text-white/90">Menthol, camphor and phenol balms.</strong> They feel cooling. They also strip lipids and cause rebound dryness — the reason "medicated" balms are often used compulsively.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C9A050]">—</span>
                  <span><strong className="text-white/90">Toothpaste flavouring.</strong> Cinnamon, mint and SLS foaming agents are frequent contact triggers around the lip line.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C9A050]">—</span>
                  <span><strong className="text-white/90">Mouth breathing.</strong> Overnight airflow across the lips accelerates evaporation. Common in patients with allergic rhinitis or a deviated septum.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C9A050]">—</span>
                  <span><strong className="text-white/90">Hot drinks and citrus.</strong> Repeated thermal and acid insult on an already-thin barrier.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C9A050]">—</span>
                  <span><strong className="text-white/90">Low humidity indoors.</strong> Central heating in winter and air conditioning in summer both push ambient humidity below 30%, which the lip barrier cannot tolerate.</span>
                </li>
              </ul>
            </motion.section>

            {/* Fix */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                How To Restore The Lip Barrier — Properly
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                The principle is simple: stop stripping what's left, then occlude what's
                there so the skin underneath can rebuild. Because the lip has almost no
                natural oil production, occlusion is the single most important step.
              </p>
              <ol className="space-y-5 text-white/60 text-lg font-light leading-relaxed list-none counter-reset:step">
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">01</span>
                  <span><strong className="text-white/90">Remove the trigger first.</strong> Change toothpaste to a fluoride-only, SLS-free, unflavoured formula. Stop lip licking (a physical reminder — a plain balm applied hourly — helps break the habit). Retire menthol and camphor balms.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">02</span>
                  <span><strong className="text-white/90">Occlude with something plain.</strong> Petrolatum (Vaseline), lanolin (if not allergic), or a ceramide-based ointment. Apply thickly, especially overnight. Ingredient list should be short and boring.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">03</span>
                  <span><strong className="text-white/90">Sun protection every morning.</strong> A mineral SPF 30+ lip balm — reapplied like any other sunscreen. This is the only intervention proven to prevent progression of actinic cheilitis.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">04</span>
                  <span><strong className="text-white/90">Treat infection when present.</strong> Angular cheilitis usually needs a topical antifungal (miconazole 2%) with a mild steroid (hydrocortisone 1%) for 7–14 days, plus correction of any deficiency or bite issue.</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-[#C9A050] font-light w-6 shrink-0">05</span>
                  <span><strong className="text-white/90">Investigate what won't settle.</strong> Persistent scale, a fixed white patch, a fissure that keeps returning, or asymmetry of the lower lip should be seen by a doctor — not layered with more balm.</span>
                </li>
              </ol>
            </motion.section>

            {/* When to worry */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                When Dry Lips Aren't Just Dry Lips
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Most lip complaints are barrier problems and resolve within a fortnight
                of doing the boring things above. The ones that don't are worth taking
                seriously. Any lip lesion persisting beyond three weeks — particularly on
                the lower lip in a fair-skinned or sun-exposed patient — needs clinical
                assessment. Recurrent angular cracks warrant blood tests for iron, ferritin,
                B12 and folate. And any bleeding, ulcerated or indurated area should be
                biopsied without delay.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                The lip is a small structure that carries a large amount of information
                about the body. It rewards attention. It doesn't reward stubbornness.
              </p>
            </motion.section>

            {/* Reference */}
            <motion.section {...fadeIn}>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7">
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mb-3">
                  Clinical Reference
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Lugović-Mihić L, Pilipović K, Crnarić I, Šitum M, Duvančić T.{" "}
                  <em>Cheilitis.</em> StatPearls Publishing. Available from the National Center for Biotechnology Information:{" "}
                  <a
                    href="https://www.ncbi.nlm.nih.gov/books/NBK507900/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A050] hover:text-[#C9A050]/80 underline underline-offset-4"
                  >
                    ncbi.nlm.nih.gov/books/NBK507900
                  </a>
                  . Reviewed by Dr Ahmed Haq, GMC-registered aesthetic doctor and Medical Director, Cosmedocs Harley Street.
                </p>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section {...fadeIn}>
              <div className="rounded-2xl border border-[#C9A050]/25 bg-gradient-to-br from-[#C9A050]/[0.08] to-transparent p-8 md:p-10 text-center">
                <p className="text-[#C9A050] text-xs uppercase tracking-wider font-medium mb-4">
                  Your consultation begins here
                </p>
                <h3 className="text-2xl md:text-3xl font-extralight mb-4">
                  Persistent lip issues that balm won't fix?
                </h3>
                <p className="text-white/60 font-light leading-relaxed max-w-xl mx-auto mb-8">
                  Our Harley Street doctors assess and treat cheilitis, chronic dryness,
                  and pre-malignant lip changes — with prescription-grade care where
                  needed. Our aesthetics is invisible art.
                </p>
                <Link
                  to="/contact/"
                  className="inline-block bg-[#C9A050] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-[#C9A050]/90 transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.section>

          </article>
        </div>
      </div>
    </>
  );
};

export default LipIssuesDryCrackedCheilitis;
