import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogAuthorEEAT from '@/components/blog/BlogAuthorEEAT';

import blogCover from '@/assets/blog-cover-botox-london-placement.jpg';

const BotoxPlacementGuideLondon = () => {
  const seoData = generateSEOMetadata(
    "Botox Placement Guide London | Natural Anti-Wrinkle Results | CosmeDocs",
    "A doctor-led guide to Botox placement in London. How precise injection points create natural results, why anatomy matters more than dose, and what to expect on Harley Street.",
    "/blog/botox-placement-guide-london"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.cosmedocs.com/blog/botox-placement-guide-london/#article",
        "headline": "The Ultimate Guide to Botox Placement: Natural Results in London",
        "description": seoData.description,
        "author": {
          "@type": "Person",
          "name": "Dr Ahmed Haq",
          "jobTitle": "Medical Director",
          "worksFor": { "@type": "MedicalBusiness", "name": "CosmeDocs" }
        },
        "publisher": {
          "@type": "MedicalBusiness",
          "name": "CosmeDocs",
          "url": "https://www.cosmedocs.com/",
          "logo": { "@type": "ImageObject", "url": "https://www.cosmedocs.com/logo.png" },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10 Harley Street",
            "addressLocality": "London",
            "addressRegion": "Greater London",
            "postalCode": "W1G 9PF",
            "addressCountry": "GB"
          }
        },
        "datePublished": "2026-04-19",
        "dateModified": "2026-04-19",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.cosmedocs.com/blog/botox-placement-guide-london/"
        },
        "keywords": "Botox London, anti-wrinkle injections Harley Street, best Botox in London, Botox placement, preventative Botox London, Botox cost UK, natural Botox results",
        "articleSection": "Aesthetic Education",
        "wordCount": 1700,
        "inLanguage": "en-GB"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Botox cost in London?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At reputable doctor-led clinics on Harley Street, anti-wrinkle treatment typically ranges from £175 for a single area to £350 or more for full upper-face treatment. Pricing reflects the practitioner's medical training, product authenticity, and the precision of placement — not the volume of toxin used."
            }
          },
          {
            "@type": "Question",
            "name": "Will Botox make my face look frozen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A frozen appearance is the result of poor placement or excessive dosing — not Botox itself. When anti-wrinkle treatment is delivered by an experienced doctor with anatomical precision, the muscle relaxation is partial and selective. The face still moves. Expression is preserved. Lines simply soften."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Botox actually injected for natural results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The three classic upper-face areas are the glabella (frown lines between the brows), the frontalis (horizontal forehead lines), and the orbicularis oculi (crow's feet). Each requires specific muscle mapping. Treating one without considering the others is the most common cause of unnatural outcomes such as a heavy brow or arched 'Spock' eyebrows."
            }
          },
          {
            "@type": "Question",
            "name": "Should I have preventative Botox in my late twenties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Preventative anti-wrinkle treatment is appropriate when dynamic lines begin etching into the skin at rest — typically late twenties to early thirties. The goal is not to erase movement, but to slow the conversion of dynamic lines into static creases. A consultation will determine whether you genuinely need it or whether skincare and skin boosters are a better starting point."
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
        <meta name="keywords" content="Botox London, anti-wrinkle injections Harley Street, best Botox in London, Botox cost UK, preventative Botox London, Botox placement, natural Botox results" />
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

        {/* Hero */}
        <section className="relative pt-28 pb-16 border-b border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={blogCover}
              alt="Naturally refreshed forehead and brow on an editorial portrait under soft Harley Street consulting-room light"
              className="w-full h-full object-cover opacity-40"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C9A050] text-xs font-medium tracking-wider uppercase">
                Anti-Wrinkle Treatment · London
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mt-4 mb-6 leading-[1.15]">
                Botox Placement,
                <br />
                <span className="text-[#C9A050] font-light">Not Botox Volume</span>
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-3xl">
                A doctor-led guide to natural anti-wrinkle results in London — why precise
                placement matters more than dose, what separates a Harley Street treatment
                from a high-street one, and what to genuinely expect from £175 upward.
              </p>
              <div className="flex items-center gap-6 mt-8 text-white/30 text-sm font-light">
                <span>Dr Ahmed Haq</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>9 min read</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>April 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-[1fr_240px] gap-10">
            <article className="max-w-3xl">
              <div className="space-y-16">

                {/* 1 — The Art of Invisible Beauty */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    The Best Botox Is the Botox Nobody Notices
                  </h2>
                  <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6">
                    For patients seeking the best Botox in London, the goal is never a
                    frozen face. It is a quietly refreshed one. A face that still frowns
                    when you concentrate, still raises an eyebrow when you are surprised,
                    still creases honestly when you laugh — but no longer carries the lines
                    of yesterday into today.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    Anti-wrinkle treatment is not about erasing expression. It is about
                    softening the residual tension that lingers between expressions — the
                    quiet etch on the forehead that stays after the surprise has gone, the
                    permanent crease between the brows that remains long after the
                    concentration has passed. That tension is what makes a face look tired.
                    Removing it is what makes a face look rested.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    The patients who walk out of CosmeDocs and back into Harley Street
                    rarely look like they have had anything done. That is the whole point.
                    Aesthetic medicine, done well, is invisible art.
                  </p>
                </motion.section>

                {/* 2 — Where exactly should Botox be injected */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Where Exactly Should Botox Be Injected?
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    The upper face has three classical treatment zones. Each one requires
                    specific knowledge of the underlying muscle, its depth, its
                    counter-muscles, and how it interacts with the rest of the face.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                      <h3 className="text-base text-[#C9A050] font-light mb-3">Glabella</h3>
                      <p className="text-white/50 font-light text-sm leading-relaxed">
                        The "11s" between the brows. Treats the corrugator and procerus
                        muscles. Misplaced, it can drop the medial brow or do nothing at all.
                      </p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                      <h3 className="text-base text-[#C9A050] font-light mb-3">Frontalis</h3>
                      <p className="text-white/50 font-light text-sm leading-relaxed">
                        Horizontal forehead lines. The most unforgiving area. Treating
                        frontalis without respecting the brow elevators creates a heavy,
                        pulled-down look that takes weeks to wear off.
                      </p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                      <h3 className="text-base text-[#C9A050] font-light mb-3">Crow's Feet</h3>
                      <p className="text-white/50 font-light text-sm leading-relaxed">
                        Lateral orbicularis oculi. Done well, it lifts the lateral brow
                        and softens the eye. Done badly, it creates a "bunny line" on the
                        nose and a strange flatness when you smile.
                      </p>
                    </div>
                  </div>

                  <p className="text-white/60 font-light leading-relaxed">
                    These three zones are anatomically linked. Treating one without
                    assessing the other two is the single most common cause of unnatural
                    results. A doctor who maps the entire upper face before reaching for
                    the syringe will produce a different outcome to one who treats the
                    forehead in isolation because it is what you asked for.
                  </p>
                </motion.section>

                {/* 3 — Why placement beats dose */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Why Placement Beats Dose
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    A frequent question in our London consultations is "how many units
                    will I need?" It is the wrong question. The right one is where those
                    units will go.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    Two patients can receive the same total dose and walk out looking
                    completely different. One because the units were placed at the
                    correct depth, in the correct muscle, in the correct ratio across left
                    and right. The other because they were placed approximately, on muscle
                    that was assumed rather than assessed.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    This is why CosmeDocs prices anti-wrinkle treatment per area, not per
                    unit. The skill is in the assessment and the placement — not in
                    counting drops.
                  </p>
                </motion.section>

                {/* 4 — Why Harley Street */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Why Doctor-Led Treatment on Harley Street Matters
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    When researching anti-wrinkle injections on Harley Street, the
                    decision worth scrutinising is not the price. It is the practitioner.
                    In the UK, the regulatory baseline for who can inject toxin into a
                    face is strikingly low. The medical reality is that Botox is a
                    prescription medicine, that complications happen, and that anatomy
                    varies more than any standardised injection map can capture.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    A doctor-led clinic operates differently. The consultation is a
                    medical assessment, not a sales conversation. The injector understands
                    the muscles they are treating because they trained in the underlying
                    anatomy for years. If a complication arises — ptosis, asymmetry,
                    diffusion into a neighbouring muscle — they recognise it, manage it,
                    and document it.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    All CQC-required treatments at our Harley Street location are
                    performed in partnership with PrivaDr Ltd, 10 Harley Street, London
                    W1G 9PF. This is not a marketing line. It is the regulatory
                    infrastructure that makes everything else possible.
                  </p>
                </motion.section>

                {/* 5 — Cost transparency */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Understanding Botox Cost in the UK
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Pricing for anti-wrinkle treatment in London varies widely. The
                    cheapest end of the market typically reflects untrained injectors,
                    diluted product, or both. The most expensive end reflects branding
                    more than additional clinical value. The middle — and where reputable
                    Harley Street clinics typically sit — is where most patients should
                    look.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                      <p className="text-[#C9A050] text-xs uppercase tracking-wider mb-2">1 Area</p>
                      <p className="text-2xl font-extralight text-white mb-1">From £175</p>
                      <p className="text-white/40 text-xs font-light">Single zone — frown, forehead, or crow's feet</p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                      <p className="text-[#C9A050] text-xs uppercase tracking-wider mb-2">2 Areas</p>
                      <p className="text-2xl font-extralight text-white mb-1">From £250</p>
                      <p className="text-white/40 text-xs font-light">Two upper-face zones in a single session</p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                      <p className="text-[#C9A050] text-xs uppercase tracking-wider mb-2">3 Areas</p>
                      <p className="text-2xl font-extralight text-white mb-1">From £350</p>
                      <p className="text-white/40 text-xs font-light">Full upper-face treatment</p>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    Add-on treatments such as bunny lines, chin dimpling, masseter, or
                    DAO are typically priced from £50 when combined with an upper-face
                    treatment in the same session.
                  </p>
                </motion.section>

                {/* 6 — Further viewing */}
                <motion.section {...fadeIn}>
                  <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                    Further Viewing &amp; Reading
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    For patients who like to see the underlying anatomy explained visually
                    before a consultation, there are a small number of board-certified
                    educators online whose work we respect. Their content is independent
                    of CosmeDocs and is referenced here as further reading only.
                  </p>
                  <ul className="space-y-3 text-white/60 font-light leading-relaxed">
                    <li>
                      <span className="text-[#C9A050]">·</span>{' '}
                      <span className="text-white/80">Dr Sam Ellis</span>, Board-Certified
                      Dermatologist — patient-facing explainer videos on Botox placement
                      and dynamic vs static lines.
                    </li>
                    <li>
                      <span className="text-[#C9A050]">·</span>{' '}
                      <span className="text-white/80">Dr Tim Pearce</span>, UK aesthetic
                      educator — anatomical injection breakdowns aimed primarily at
                      practitioners but useful context for patients.
                    </li>
                  </ul>
                  <p className="text-white/40 text-sm font-light leading-relaxed mt-6">
                    No video is embedded here intentionally. The medical opinions in
                    third-party content are theirs, not ours, and your treatment plan
                    should be informed by an in-person consultation rather than a video.
                  </p>
                </motion.section>

                {/* 7 — CTA */}
                <motion.section {...fadeIn}>
                  <div className="bg-gradient-to-br from-[#C9A050]/10 via-white/[0.02] to-transparent border border-[#C9A050]/20 rounded-2xl p-8 md:p-10">
                    <p className="text-[#C9A050] text-xs uppercase tracking-[0.3em] mb-4">
                      Your consultation begins here
                    </p>
                    <h2 className="text-2xl md:text-3xl font-extralight mb-4 leading-tight">
                      Considered, doctor-led anti-wrinkle treatment in London.
                    </h2>
                    <p className="text-white/60 font-light leading-relaxed mb-8 max-w-2xl">
                      Book a private assessment at our Harley Street clinic. We will map
                      your anatomy, talk through what you actually need, and — often —
                      tell you what you do not.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/treatments/botox/"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-[#C9A050] text-black text-sm tracking-wider hover:bg-[#d4b060] transition"
                      >
                        Explore Anti-Wrinkle Treatment
                      </Link>
                      <Link
                        to="/contact/"
                        className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white/80 text-sm tracking-wider hover:bg-white/5 transition"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </motion.section>

                {/* Author EEAT */}
                <motion.section {...fadeIn}>
                  <BlogAuthorEEAT />
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
      </div>
    </>
  );
};

export default BotoxPlacementGuideLondon;
