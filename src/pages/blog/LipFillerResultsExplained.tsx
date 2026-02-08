import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import Home2Header from '@/components/home2/Home2Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';

import lipFillerBaSubtle from '@/assets/blog-lip-filler-ba-subtle.png';
import lipFillerShapeComparison from '@/assets/blog-lip-filler-shape-comparison.png';
import lipFillerBaNatural from '@/assets/blog-lip-filler-ba-natural.png';

const LipFillerResultsExplained = () => {
  const seoData = generateSEOMetadata(
    "Lip Filler Results Explained | Natural Shape, Not Overfilled Lips",
    "A clinical guide to lip filler results explaining shape vs size, proportion vs volume, and how natural outcomes avoid the overfilled 'duck lip' look.",
    "/blog/lip-filler-results-explained"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.cosmedocs.co.uk/blog/lip-filler-results-explained/#article",
        "headline": "Lip Filler Results Explained: Shape, Proportion & Natural Outcomes",
        "description": seoData.description,
        "author": {
          "@type": "Person",
          "name": "Dr Hena Haq",
          "jobTitle": "Aesthetic Practitioner & Training Fellow",
          "worksFor": {
            "@type": "MedicalBusiness",
            "name": "CosmeDocs"
          }
        },
        "publisher": {
          "@type": "MedicalBusiness",
          "name": "CosmeDocs",
          "url": "https://www.cosmedocs.co.uk/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.cosmedocs.co.uk/logo.png"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "addressRegion": "Greater London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB"
          }
        },
        "datePublished": "2026-02-08",
        "dateModified": "2026-02-08",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.cosmedocs.co.uk/blog/lip-filler-results-explained/"
        },
        "keywords": "lip filler results explained, natural lip filler, shape vs size, lip proportion, duck lips, overfilled lips, lip filler suitability, lip augmentation outcomes",
        "articleSection": "Aesthetic Education",
        "wordCount": 1500,
        "inLanguage": "en-GB"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.cosmedocs.co.uk/blog/lip-filler-results-explained/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do some lip fillers look unnatural?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unnatural lip filler results are typically caused by overfilling, ignoring the natural lip anatomy, or prioritising volume over shape. When filler is placed without respecting the vermilion border, cupid's bow, and upper-to-lower lip ratio, the result looks artificial regardless of how little product is used."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between lip shape and lip size?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shape refers to the contour, definition, and proportional relationship of the lip structures — the cupid's bow, vermilion border, and upper-to-lower balance. Size is simply volume. Good lip filler results improve shape; poor results only increase size."
            }
          },
          {
            "@type": "Question",
            "name": "How long does lip filler last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lip filler generally lasts between 6 and 12 months, though this varies depending on the product, individual metabolism, and how mobile the lips are. The lips are one of the most dynamic areas of the face, so filler breaks down faster here than in more static regions like the chin or cheeks."
            }
          },
          {
            "@type": "Question",
            "name": "Can lip filler look natural?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, when placed with restraint and anatomical awareness. Natural lip filler enhances what already exists — improving hydration, defining borders, and correcting minor asymmetry — rather than creating an entirely new lip shape. The best results are the ones nobody notices."
            }
          }
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.cosmedocs.co.uk/#organization",
        "name": "CosmeDocs",
        "url": "https://www.cosmedocs.co.uk/",
        "telephone": "+442074594188",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10 Harley Street",
          "addressLocality": "London",
          "addressRegion": "Greater London",
          "postalCode": "W1G 9PF",
          "addressCountry": "GB"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5800",
          "bestRating": "5",
          "worstRating": "1"
        }
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
        <meta name="keywords" content="lip filler results explained, natural lip filler, shape vs size, lip proportion, duck lips, overfilled lips, lip filler suitability, lip augmentation, Harley Street" />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Home2Header />

        {/* Hero */}
        <section className="pt-28 pb-16 px-4 border-b border-white/[0.06]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C9A050] text-xs font-medium tracking-wider uppercase">
                Aesthetic Education
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mt-4 mb-6 leading-[1.15]">
                Lip Filler Results Explained:
                <br />
                <span className="text-[#C9A050] font-light">
                  Shape, Proportion{" "}
                </span>
                <span className="text-white/60">&amp; Natural Outcomes</span>
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-3xl">
                Why good lip filler is about contour, not volume. What "natural" actually 
                means when a needle is involved. And why the lips you were born with 
                should still look like yours after treatment — just slightly better.
              </p>
              <div className="flex items-center gap-6 mt-8 text-white/30 text-sm font-light">
                <span>Dr Hena Haq</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>9 min read</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>February 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-[1fr_240px] gap-10">
            <article className="max-w-3xl">
              <div className="space-y-16">

                {/* Opening */}
                <motion.section {...fadeIn}>
                  <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
                    Lip filler has a reputation problem. Not because the treatment doesn't work — 
                    it does, remarkably well — but because the most visible results are usually 
                    the worst ones. Nobody photographs a subtle enhancement. Nobody posts 
                    "I got 0.5ml and you can barely tell." The feed favours volume, and volume 
                    favours regret.
                  </p>
                  <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                    The truth is, well-placed lip filler is one of the most effective soft-tissue 
                    treatments in aesthetic medicine. It can restore hydration, improve border 
                    definition, correct asymmetry, and give tired-looking lips a quiet vitality — 
                    all without changing who you look like. But that requires understanding the 
                    difference between shape and size, between proportion and volume. Most 
                    overfilled lips happen when that distinction is ignored.
                  </p>
                </motion.section>

                {/* 1 — Why Lips Are Easy to Overfill */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Why Lips Are Easy to Overfill
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Unlike the chin or jawline — where filler sits against bone — lip filler goes 
                    into soft tissue. There's no rigid scaffold. The lip is essentially a muscular 
                    curtain covered in mucosa, and it responds to filler the way a cushion responds 
                    to stuffing: it expands in every direction, not just the one you intended.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Then there's swelling. Lips swell disproportionately to the amount injected. 
                    A patient who receives 0.5ml may look like they've had twice that for the first 
                    48 hours. This is normal, temporary, and entirely misleading — which is why 
                    judging lip filler before day 14 is like reviewing a soufflé before it's set.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    The practical consequence: subtlety matters more here than almost anywhere else 
                    on the face. A millilitre too much in the chin is forgiven by bone structure. A 
                    millilitre too much in the lip is visible from across the room. The margin for 
                    error isn't small — it's microscopic.
                  </p>
                </motion.section>

                {/* 2 — Shape vs Size */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Shape vs Size: The Distinction That Changes Everything
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    This is the core misunderstanding behind most unsatisfying lip filler results. 
                    Patients ask for "bigger lips." What they usually mean — and what they'd actually 
                    be happier with — is <em>better-shaped lips</em>. The difference is structural.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Shape is about definition. The cupid's bow — that double curve on the upper lip — 
                    is the visual signature of the mouth. The vermilion border, the thin line where 
                    lip meets skin, provides framing. The philtral columns, the two ridges running 
                    from nose to lip, create the vertical architecture. Good lip filler enhances 
                    all of these without inflating anything.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Size is just volume. Add enough product and any lip gets bigger. But bigger 
                    without definition is shapeless. The vermilion border disappears. The cupid's 
                    bow flattens. The lip starts to project forward — not outward — creating that 
                    shelf-like appearance that immediately reads as "filler."
                  </p>

                  {/* Shape comparison image */}
                  <figure className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-6">
                    <img
                      src={lipFillerShapeComparison}
                      alt="Three stages of lip filler showing natural lip, subtly enhanced lip with border definition, and full enhancement preserving natural shape"
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                    <figcaption className="px-5 py-3 border-t border-white/[0.06] text-white/40 text-xs leading-relaxed font-light">
                      Progression of lip enhancement demonstrating shape over size. Left: natural lip 
                      before treatment. Centre: subtle border definition and hydration restored. 
                      Right: full enhancement with cupid's bow and vermilion border preserved. 
                      No forward projection, no loss of natural contour. Unedited clinical photographs.
                    </figcaption>
                  </figure>

                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    The goal of good lip filler is to make the lip look like a better version of 
                    itself — not a different lip entirely. If the cupid's bow is still visible, 
                    the border is still defined, and the lip moves naturally when speaking, the 
                    treatment has succeeded. If any of those have been lost, too much was placed 
                    or it was placed in the wrong plane.
                  </p>
                </motion.section>

                {/* 3 — Proportion vs Volume */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Proportion vs Volume: Why Copying Other Lips Fails
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Lip proportion isn't just about the lips. It's about how the lips relate 
                    to the nose, the chin, the width of the face, and the dental show. A lip 
                    that looks perfectly proportioned on one face will look entirely wrong on 
                    another — not because the lip is different, but because the face around 
                    it is.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    The widely referenced upper-to-lower lip ratio — approximately 1:1.6, 
                    with the lower lip slightly fuller — is a useful guide, not a universal 
                    rule. Some faces suit equal proportions. Others look best with a fuller 
                    upper lip. The ratio that works depends on the individual's bone structure, 
                    skin quality, and the natural starting point.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    This is why reference images from social media are problematic. That lip 
                    exists in the context of a specific face, with a specific nose–chin–jaw 
                    relationship. Transplanting it onto a different facial architecture doesn't 
                    replicate the result — it creates a mismatch. Good lip filler works 
                    <em> with</em> the face, not against it.
                  </p>
                </motion.section>

                {/* 4 — What Natural Lip Filler Results Look Like */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Interpreting Lip Filler Results: What Natural Improvement Looks Like
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                    Natural lip filler results share a few consistent characteristics: the lips 
                    look hydrated, the borders are defined, the movement is preserved, and 
                    nobody comments on your lips specifically — they just think you look well. 
                    That's the invisible art.
                  </p>

                  {/* Clinical Image 1 */}
                  <figure className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-8">
                    <img
                      src={lipFillerBaSubtle}
                      alt="Before and after lip filler showing subtle enhancement with natural lip movement preserved during smiling"
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                    <figcaption className="px-5 py-3 border-t border-white/[0.06] text-white/40 text-xs leading-relaxed font-light">
                      Before and after lip enhancement. Natural lip movement fully preserved during 
                      smiling. Border definition improved without forward projection. Lip shape 
                      enhanced, not replaced. Approximately 0.5ml hyaluronic acid filler. 
                      Unedited clinical photograph.
                    </figcaption>
                  </figure>

                  <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                    Notice what defines a good result: the lip moves naturally. There's no 
                    stiffness, no shelf, no "frozen" quality. The enhancement is visible in 
                    photographs when you compare before and after, but invisible in daily life. 
                    That's the standard to aim for — not maximum volume, but optimal integration.
                  </p>

                  {/* Clinical Image 2 */}
                  <figure className="rounded-xl overflow-hidden border border-white/[0.06] bg-neutral-900 mb-6">
                    <img
                      src={lipFillerBaNatural}
                      alt="Before and after natural lip filler showing improved hydration and border definition with lip proportion maintained"
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                    <figcaption className="px-5 py-3 border-t border-white/[0.06] text-white/40 text-xs leading-relaxed font-light">
                      Subtle lip rejuvenation maintaining natural proportion. Vermilion border 
                      restored, cupid's bow preserved, hydration visibly improved. The lip 
                      looks healthier, not larger. Unedited clinical photograph.
                    </figcaption>
                  </figure>

                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    When reviewing results — your own or anyone else's — ask three questions: 
                    Can you still see the cupid's bow? Does the lip move when the patient speaks 
                    or smiles? Does the face look balanced? If the answer to all three is yes, 
                    the treatment worked. If the lip is the first thing you notice, restraint 
                    was lost somewhere.
                  </p>
                </motion.section>

                {/* 5 — Why "Duck Lips" Happen */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Why "Duck Lips" Happen — And It's Rarely the Patient's Fault
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    The term is reductive and unkind, but the phenomenon is real. Overfilled lips 
                    — lips that project forward, lose definition, and appear stiff — happen for 
                    predictable, preventable reasons:
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <span className="text-[#C9A050] text-sm mt-1">—</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/70">Overfilling in a single session.</strong>{" "}
                        The lip can absorb a finite amount of product before it starts to distort. 
                        Placing 2ml in one visit because the patient wants "instant drama" ignores 
                        tissue limits. The lip doesn't expand symmetrically — it bulges.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#C9A050] text-sm mt-1">—</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/70">Ignoring anatomy.</strong>{" "}
                        Every lip has a natural architecture — dry vs wet vermilion, the 
                        white roll, the oblique band. Injecting without respecting these 
                        structures creates volume in the wrong compartments, and the lip 
                        loses its natural landmarks.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#C9A050] text-sm mt-1">—</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/70">Trend-driven requests.</strong>{" "}
                        "I want lips like [person on Instagram]" is the sentence that precedes 
                        most unsatisfying results. The request is impossible — those lips belong 
                        to a different face — and attempting it leads to volume chasing a shape 
                        that doesn't exist in the patient's anatomy.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#C9A050] text-sm mt-1">—</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/70">Short-term thinking.</strong>{" "}
                        Repeat treatments without reassessing residual filler. Hyaluronic acid 
                        doesn't disappear entirely between sessions. Topping up without accounting 
                        for what remains is how subtle enhancement becomes gradual overcorrection — 
                        often without the patient or the injector noticing until it's too late.
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    The common thread: in every case, volume was prioritised over anatomy. The 
                    solution isn't to avoid lip filler — it's to choose an injector who understands 
                    that "less" is not a compromise. It's the goal.
                  </p>
                </motion.section>

                {/* 6 — Who Lip Filler Is NOT For */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Who Lip Filler Is Not Suitable For
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Lip filler is remarkably versatile, but it is not universally appropriate. 
                    Knowing when it's not the right treatment is as important as knowing when 
                    it is — and more important than most clinics let on.
                  </p>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400/70 text-sm mt-0.5">✕</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/60">Desire for dramatic volume</strong> — 
                        if the goal is a significantly larger lip, filler can only do so much 
                        within safe anatomical limits. Beyond that, the lip distorts rather 
                        than enhances. Surgical lip augmentation may be more appropriate for 
                        patients wanting permanent, substantial change.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-400/70 text-sm mt-0.5">✕</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/60">Poor tissue quality</strong> — 
                        very thin lip tissue, significant perioral lines, or smoker's lines 
                        around the mouth may mean filler alone won't achieve the desired result. 
                        Skin quality treatments may need to come first.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-400/70 text-sm mt-0.5">✕</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/60">Expectation mismatch</strong> — 
                        patients who bring reference images of lips that don't correspond 
                        to their facial structure, skin type, or natural lip anatomy. Filler 
                        enhances what exists — it doesn't build from scratch.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-400/70 text-sm mt-0.5">✕</span>
                      <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/60">Active cold sores or infections</strong> — 
                        treatment should be postponed until the area has fully healed. Injecting 
                        into compromised tissue increases complication risk.
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60 text-lg font-light leading-relaxed mt-6">
                    A consultation exists to work through all of this. If you leave without a 
                    treatment plan, that isn't a failure — it's the system working as it should. 
                    The right patient, the right treatment, at the right time.
                  </p>
                </motion.section>

                {/* 7 — Longevity, Swelling & Maintenance */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Longevity, Swelling &amp; Maintenance: What to Realistically Expect
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Lip filler generally lasts between 6 and 12 months. The lips are one of 
                    the most dynamic areas of the face — speaking, eating, expressing — so 
                    filler breaks down faster here than in more static regions like the chin 
                    or cheeks. That's normal, not a failure.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Swelling deserves its own paragraph because it causes more unnecessary panic 
                    than any other aspect of the treatment. Day 1–3: expect the lips to look 
                    fuller than intended. This is oedema, not your final result. Day 5–7: 
                    swelling resolves significantly. Day 14: what you see is what you got. 
                    Judging lip filler before two weeks is premature and often leads to 
                    unnecessary correction or top-up requests that create the very overfilling 
                    the patient was trying to avoid.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    Maintenance should be approached as reassessment, not automatic replenishment. 
                    Each visit should start with an evaluation of what remains, what has changed, 
                    and whether more product is actually needed — or whether the lips have settled 
                    into a shape the patient is happy with. Sometimes the best maintenance 
                    appointment is the one where nothing is injected.
                  </p>
                </motion.section>

                {/* Related Reading - Chin */}
                <motion.section {...fadeIn}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Related Reading</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Lip projection is influenced by the structures around it. For an explanation of{" "}
                      <Link
                        to="/blog/chin-filler-results-explained/"
                        className="text-[#C9A050] hover:underline"
                      >
                        how chin balance affects lip projection
                      </Link>, including profile harmony and why lower face treatments interact.
                    </p>
                  </div>
                </motion.section>

                {/* B&A Hub Link */}
                <motion.section {...fadeIn}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 mb-8">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Visual Evidence</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      For a comprehensive collection of clinical photographs, visit our{" "}
                      <Link
                        to="/before-after/dermal-fillers/"
                        className="text-[#C9A050] hover:underline"
                      >
                        lip filler before and after results
                      </Link>.
                    </p>
                  </div>
                </motion.section>

                {/* 8 — Link to Treatment Page */}
                <motion.section {...fadeIn}>
                  <div className="border-t border-white/[0.06] pt-10">
                    <p className="text-white/50 font-light leading-relaxed">
                      For patients who want to explore lip filler as a treatment option, 
                      you can find further details on our{" "}
                      <Link 
                        to="/treatments/lip-fillers/"
                        className="text-[#C9A050] hover:underline"
                      >
                        lip filler treatment page
                      </Link>.
                    </p>
                  </div>
                </motion.section>

                {/* FAQs */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-white/[0.06] pb-6">
                      <p className="text-white/80 font-medium text-sm mb-2">
                        Why do some lip fillers look unnatural?
                      </p>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        Unnatural results are typically caused by overfilling, ignoring natural lip 
                        anatomy, or prioritising volume over shape. When filler is placed without 
                        respecting the vermilion border, cupid's bow, and upper-to-lower lip ratio, 
                        the result looks artificial regardless of how little product is used.
                      </p>
                    </div>
                    <div className="border-b border-white/[0.06] pb-6">
                      <p className="text-white/80 font-medium text-sm mb-2">
                        What is the difference between lip shape and lip size?
                      </p>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        Shape refers to contour, definition, and proportional relationship — the 
                        cupid's bow, vermilion border, and upper-to-lower balance. Size is simply 
                        volume. Good lip filler improves shape; poor results only increase size.
                      </p>
                    </div>
                    <div className="border-b border-white/[0.06] pb-6">
                      <p className="text-white/80 font-medium text-sm mb-2">
                        How long does lip filler last?
                      </p>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        Generally 6 to 12 months, depending on the product, individual metabolism, 
                        and how dynamic the lips are. The lips break down filler faster than more 
                        static areas like the chin or cheeks.
                      </p>
                    </div>
                    <div className="border-b border-white/[0.06] pb-6">
                      <p className="text-white/80 font-medium text-sm mb-2">
                        Can lip filler look natural?
                      </p>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        Yes, when placed with restraint and anatomical awareness. Natural lip filler 
                        enhances what already exists — improving hydration, defining borders, and 
                        correcting minor asymmetry — rather than creating an entirely new shape. 
                        The best results are the ones nobody notices.
                      </p>
                    </div>
                    <div className="pb-6">
                      <p className="text-white/80 font-medium text-sm mb-2">
                        How much lip filler do I need?
                      </p>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        Most patients achieve a natural result with 0.5–1ml. The amount depends on 
                        the starting lip volume, tissue quality, and desired outcome. A consultation 
                        determines the appropriate volume — more is not always better, and in the 
                        lips, it's often worse.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Hidden SEO content */}
                <div aria-hidden="true" role="complementary" aria-label="Additional context for search engines" className="sr-only">
                  <p>
                    Lip filler results explained by CosmeDocs Harley Street. This educational 
                    article explores why lip filler outcomes vary, the difference between shape 
                    and size in lip augmentation, and why overfilled "duck lips" happen. It covers 
                    the anatomy of the lip including the cupid's bow, vermilion border, philtral 
                    columns, and the upper-to-lower lip ratio. Common causes of unsatisfying 
                    results include overfilling, ignoring anatomy, trend-driven requests, and 
                    layering without reassessing residual product. The article is authored by 
                    Dr Hena Haq, Aesthetic Practitioner and Training Fellow at CosmeDocs. All 
                    treatments are performed by GMC-registered doctors at 10 Harley Street, 
                    London W1G 9PF. CosmeDocs has performed over one million aesthetic procedures 
                    since 2007, specialising in natural-looking, restraint-focused lip augmentation 
                    using premium hyaluronic acid dermal fillers including Teoxane RHA Kiss.
                  </p>
                </div>

                {/* Author Attribution */}
                <motion.section {...fadeIn}>
                  <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-[#C9A050]/20 flex items-center justify-center text-[#C9A050] font-medium">
                      HH
                    </div>
                    <div>
                      <p className="text-white/80 font-medium text-sm">Dr Hena Haq</p>
                      <p className="text-white/40 text-xs font-light">
                        Aesthetic Practitioner & Training Fellow — CosmeDocs, 10 Harley Street, London
                      </p>
                      <p className="text-white/30 text-xs font-light mt-1">
                        Specialising in natural lip augmentation and facial harmonisation. 
                        Extensive GP background with a holistic approach to aesthetic medicine.
                      </p>
                    </div>
                  </div>
                </motion.section>

              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LipFillerResultsExplained;
