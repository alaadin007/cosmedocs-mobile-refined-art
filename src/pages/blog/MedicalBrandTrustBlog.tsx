import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { generateSEOMetadata } from '@/utils/seo';
import Home2Header from '@/components/home2/Home2Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';

const MedicalBrandTrustBlog = () => {
  const seoData = generateSEOMetadata(
    "Trust in Medical Aesthetics: How Clinics Should Communicate | CosmeDocs",
    "Why medical brands must communicate growth, not mistakes. A guide to building patient trust through philosophy, maturity and restraint — not operational transparency.",
    "/blog/trust-in-medical-aesthetics"
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.cosmedocs.co.uk/blog/trust-in-medical-aesthetics/#article",
        "headline": "Trust in Medical Aesthetics: Why Philosophy Builds Confidence, Not Operational Transparency",
        "description": "Why medical brands must communicate growth, not mistakes. A guide to building patient trust through philosophy, maturity and restraint in aesthetic medicine.",
        "author": {
          "@type": "Person",
          "name": "Dr Ahmed Haq",
          "jobTitle": "Medical Director",
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
          "@id": "https://www.cosmedocs.co.uk/blog/trust-in-medical-aesthetics/"
        },
        "keywords": "medical brand trust, aesthetic clinic communication, patient trust, medical marketing ethics, aesthetic medicine philosophy, clinic credibility, Harley Street, cosmetic clinic reputation",
        "articleSection": "Clinical Philosophy",
        "wordCount": 2800,
        "inLanguage": "en-GB"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How should aesthetic clinics talk about their growth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aesthetic clinics should frame their evolution as maturity and refinement, not as correcting past mistakes. Patients respond to language about raised standards and sharpened philosophy."
            }
          },
          {
            "@type": "Question",
            "name": "Why should medical brands avoid mentioning operational failures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Patients subconsciously transfer operational concerns to safety concerns. Even minor mentions of admin or reception problems can erode trust in clinical competence."
            }
          },
          {
            "@type": "Question",
            "name": "What builds patient trust in aesthetic medicine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Honesty about philosophy, clinical evolution, raised standards, gratitude towards patients, and restraint-focused messaging build the deepest patient trust."
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
        <meta name="keywords" content="medical brand trust, aesthetic clinic communication, patient trust, medical marketing ethics, aesthetic medicine philosophy, clinic credibility, Harley Street, cosmetic clinic reputation, medical aesthetics marketing" />
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
                Clinical Philosophy
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight mt-4 mb-6 leading-[1.15]">
                Trust in Medical Aesthetics:
                <br />
                <span className="text-[#C9A050] font-light">
                  Why Philosophy Builds Confidence,{" "}
                </span>
                <span className="text-white/60">Not Operational Transparency</span>
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-3xl">
                In aesthetic medicine, patients want honesty about your philosophy — not vulnerability about your operations. Here's the rule for medical brands that want to earn trust, not erode it.
              </p>
              <div className="flex items-center gap-6 mt-8 text-white/30 text-sm font-light">
                <span>Dr Ahmed Haq</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>12 min read</span>
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
                Every medical brand reaches a moment of reflection. Perhaps it's a decade in practice, perhaps two. You look back and see how far you've come — the techniques refined, the standards raised, the philosophy sharpened. And you want to share that journey.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                That instinct is good. Authenticity resonates. But in aesthetic medicine, how you tell your story matters as much as the story itself. Get it right, and patients feel reassured by your maturity. Get it wrong, and they begin to question your competence — even when there's nothing to question.
              </p>
            </motion.section>

            {/* The Rule */}
            <motion.section {...fadeIn}>
              <div className="border-l-2 border-[#C9A050]/40 pl-8 py-2">
                <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                  The Rule for Medical Brands
                </h2>
                <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                  In aesthetic medicine, trust works like this:
                </p>
                <blockquote className="text-xl md:text-2xl text-[#C9A050]/80 font-light italic leading-relaxed">
                  "Patients want honesty about philosophy, not vulnerability about operations."
                </blockquote>
              </div>
              <p className="text-white/50 text-base font-light leading-relaxed mt-8">
                This distinction is subtle but critical. A patient reading about your clinic's journey is subconsciously asking one question: <em className="text-white/70">"Can I trust these people with my face?"</em> Everything you write either strengthens or weakens that answer.
              </p>
            </motion.section>

            {/* Why This Matters */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                Why This Matters More in Medicine
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                In retail, hospitality, or technology, brands can be refreshingly candid about their struggles. "We used to be terrible at shipping — now we're brilliant." Customers find that charming. They reward honesty with loyalty.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                Medicine doesn't work that way.
              </p>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                When a medical brand mentions operational difficulties — even minor ones, even historical ones — patients make an unconscious leap. The internal monologue runs something like this:
              </p>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-8 space-y-4">
                <p className="text-white/50 text-sm font-light italic">
                  "If they struggled with admin… what about safety?"
                </p>
                <p className="text-white/50 text-sm font-light italic">
                  "If reception was chaotic… what about sterility?"
                </p>
                <p className="text-white/50 text-sm font-light italic">
                  "If they were running late… what about precision?"
                </p>
              </div>

              <p className="text-white/50 text-base font-light leading-relaxed mt-8">
                These leaps are unfair. They're illogical. A reception issue has no bearing on clinical competence. But patients aren't making rational assessments — they're making emotional ones. And in medicine, emotional trust is the only trust that matters.
              </p>
            </motion.section>

            {/* What IS Safe to Talk About */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-4">
                What <span className="text-[#C9A050]">Is</span> Safe — and Powerful — to Talk About
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed mb-10">
                You can absolutely talk about your journey. In fact, you should. But the framing must always be <em className="text-white/70">maturity, not mistakes</em>. Here are the angles that build credibility without introducing doubt:
              </p>

              {/* Growth Cards */}
              <div className="space-y-6">
                <GrowthAngle
                  number="01"
                  title="Growth & Evolution"
                  quote="Over 17+ years, we've refined not just techniques, but standards."
                  explanation="This signals experience and continuous improvement without suggesting that previous standards were inadequate. It positions you as a clinic that's always moving forward."
                />
                <GrowthAngle
                  number="02"
                  title="Raising the Bar"
                  quote="What was acceptable in 2007 is no longer acceptable today."
                  explanation="This is powerful because it acknowledges industry-wide progress rather than personal failure. The implication is clear: we held ourselves to the highest standard available, and that standard has risen — as has our practice."
                />
                <GrowthAngle
                  number="03"
                  title="Listening to Patients"
                  quote="Patients taught us what truly matters: time, restraint, honesty."
                  explanation="This humanises your brand whilst positioning patients as valued collaborators in your evolution. It signals humility without vulnerability."
                />
                <GrowthAngle
                  number="04"
                  title="Philosophy Sharpening"
                  quote="Experience taught us when not to treat."
                  explanation="Perhaps the most powerful angle of all. The willingness to say no is the ultimate trust signal in aesthetic medicine. It tells patients that your priority is their outcome, not your revenue."
                />
                <GrowthAngle
                  number="05"
                  title="Gratitude"
                  quote="To those who've been with us since the beginning — we owe not just thanks, but standards worthy of your trust."
                  explanation="Thanking patients is excellent. It humanises the brand, acknowledges loyalty, and frames your evolution as something driven by respect for the people you serve."
                />
              </div>
            </motion.section>

            {/* What NOT to Say */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                What <span className="text-red-400/70">Not</span> to Say — Even If It's True
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed mb-8">
                There are certain topics that belong in internal culture, staff meetings, and private reflection — never in public-facing medical copy. Even when they're historically accurate, they introduce doubt where none existed.
              </p>

              <div className="bg-white/[0.02] border border-red-400/10 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Running late or time management struggles",
                    "Reception or front-of-house issues",
                    "Administrative mistakes or system failures",
                    "Operational growing pains",
                    "\"We got it wrong\" wording",
                    "Public apologies for past processes"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <span className="text-red-400/60 text-sm mt-0.5">✕</span>
                      <p className="text-white/50 text-sm font-light">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/30 text-xs font-light mt-6 border-t border-white/[0.06] pt-4">
                  These topics are valid for internal improvement. They are destructive in public-facing clinical communication.
                </p>
              </div>
            </motion.section>

            {/* The Psychology */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                The Psychology of Medical Trust
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                When your messaging is calibrated correctly, patients walk away with a specific set of impressions. Understanding what those impressions are — and aren't — is the key to effective medical brand communication.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/[0.03] border border-[#C9A050]/10 rounded-xl p-6">
                  <p className="text-[#C9A050] text-xs font-medium tracking-wider uppercase mb-4">
                    What Patients Think
                  </p>
                  <div className="space-y-3">
                    {[
                      "They're experienced",
                      "They're reflective",
                      "They've matured",
                      "They care deeply",
                      "They hold themselves to high standards"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[#C9A050]/60 text-sm">✓</span>
                        <p className="text-white/60 text-sm font-light">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-4">
                    What They Do Not Think
                  </p>
                  <div className="space-y-3">
                    {[
                      "What went wrong before?",
                      "Are they disorganised?",
                      "Were past patients treated badly?",
                      "Is this clinic safe?",
                      "Should I be worried?"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-white/20 text-sm">—</span>
                        <p className="text-white/40 text-sm font-light">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/40 text-sm font-light mt-6 text-center italic">
                That's the balance. Growth without doubt. Honesty without exposure.
              </p>
            </motion.section>

            {/* The Example */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                The Right Way to Tell Your Story
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed mb-8">
                Here is an example of how a medical aesthetic brand can communicate its journey with elegance and trust. No mistakes mentioned — but growth is unmistakable.
              </p>

              <div className="border border-[#C9A050]/20 rounded-xl p-8 md:p-12 bg-gradient-to-b from-[#C9A050]/[0.03] to-transparent">
                <p className="text-[#C9A050] text-xs font-medium tracking-wider uppercase mb-6">
                  Example: "Our Journey"
                </p>
                <div className="space-y-6 text-white/65 text-lg font-light leading-relaxed italic">
                  <p>
                    Seventeen years on Harley Street teaches you restraint.
                  </p>
                  <p>
                    When CosmeDocs began in 2007, aesthetic medicine was very different. Techniques were evolving, standards were inconsistent, and the definition of "natural" was still being written.
                  </p>
                  <p>
                    Over time — and through treating hundreds of thousands of patients — we learned what truly matters: not doing more, but doing less — better.
                  </p>
                  <p>
                    Our philosophy today is shaped by experience, reflection, and listening closely to our patients. Many of you have been with us for years. Some since the very beginning.
                  </p>
                  <p>
                    To those patients, we owe not just thanks — but standards worthy of your trust.
                  </p>
                  <p>
                    Every refinement we've made has been in service of one principle: results that look so natural, they go unnoticed.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Advanced Technique */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                The Advanced Technique: Controlled Candour
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                For brands that want to push slightly further, there is one technique that works extraordinarily well. We call it <em className="text-white/80">controlled candour</em> — a single line that acknowledges evolution without exposing specifics.
              </p>

              <div className="border-l-2 border-[#C9A050]/30 pl-8 py-4">
                <blockquote className="text-xl text-white/70 font-light italic leading-relaxed">
                  "Like any clinic that's grown over nearly two decades, we've refined every part of our practice — clinical, ethical, and experiential."
                </blockquote>
              </div>

              <p className="text-white/40 text-sm font-light mt-6">
                That's it. No specifics. No operational detail. The reader fills in the blanks with positive assumptions — and positive assumptions are exactly what you want a prospective patient to carry into their consultation.
              </p>
            </motion.section>

            {/* Where This Content Should Live */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                Where This Content Should Live
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed mb-8">
                Positioning matters as much as wording. Journey-based, trust-building content has specific homes — and specific places it should never appear.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/[0.03] border border-[#C9A050]/10 rounded-xl p-6">
                  <p className="text-[#C9A050] text-xs font-medium tracking-wider uppercase mb-4">
                    Ideal Placements
                  </p>
                  <ul className="space-y-3">
                    {[
                      "About / Our Philosophy page",
                      "About / Our Journey page",
                      "A founder's note or letter",
                      "Annual milestone communications",
                      "Blog articles on clinical philosophy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#C9A050]/60 text-sm mt-0.5">✓</span>
                        <span className="text-white/60 text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-4">
                    Never Place Here
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Treatment pages",
                      "Homepage hero sections",
                      "Before & after galleries",
                      "Pricing or booking pages",
                      "Social media captions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-400/40 text-sm mt-0.5">✕</span>
                        <span className="text-white/40 text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* The Five Principles */}
            <motion.section {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-extralight mb-8">
                Five Principles for Medical Brand Communication
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed mb-10">
                Whether you're a solo practitioner or a multi-site clinic, these principles form the foundation of trust-building communication in aesthetic medicine.
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: "I",
                    title: "Talk about your journey",
                    desc: "Frame it as growth, refinement, and rising standards. Never as correction or recovery from failure."
                  },
                  {
                    num: "II",
                    title: "Thank your patients",
                    desc: "Gratitude is the most humanising signal a medical brand can send. It builds loyalty without sacrificing authority."
                  },
                  {
                    num: "III",
                    title: "Show growth and humility",
                    desc: "Demonstrate that you've evolved — not because you were wrong, but because excellence demands constant refinement."
                  },
                  {
                    num: "IV",
                    title: "Never list operational mistakes",
                    desc: "Admin errors, delays, and logistical struggles belong in internal reviews. Public mention transfers doubt to clinical competence."
                  },
                  {
                    num: "V",
                    title: "Never apologise publicly for logistics",
                    desc: "Apologies for past processes suggest that current processes may also be imperfect. In medicine, that suggestion is corrosive."
                  }
                ].map((principle, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-[#C9A050]/40 text-2xl font-extralight min-w-[40px]">
                      {principle.num}
                    </span>
                    <div>
                      <p className="text-white/80 text-base font-light mb-1">{principle.title}</p>
                      <p className="text-white/40 text-sm font-light leading-relaxed">{principle.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Closing */}
            <motion.section {...fadeIn}>
              <div className="border-t border-white/[0.06] pt-12">
                <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                  At CosmeDocs, we've spent over seventeen years learning this balance. Our philosophy — <em className="text-[#C9A050]/80">our aesthetics is invisible art</em> — applies not only to the treatments we perform, but to the way we communicate.
                </p>
                <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                  Quiet confidence. Measured reflection. Growth that speaks without shouting.
                </p>
                <p className="text-white/50 text-base font-light leading-relaxed">
                  Because in medicine, trust isn't built by telling patients what went wrong. It's built by showing them how far you've come — and how seriously you take what comes next.
                </p>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section {...fadeIn}>
              <div className="text-center py-12 border-t border-white/[0.06]">
                <p className="text-white/80 text-xl font-extralight mb-3">
                  Your consultation begins here
                </p>
                <p className="text-white/40 text-sm font-light mb-8">
                  Considered care from Harley Street doctors
                </p>
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                </a>
              </div>
            </motion.section>

            {/* Related Articles */}
            <motion.section {...fadeIn}>
              <div className="border-t border-white/[0.06] pt-10">
                <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-6">
                  Related Reading
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Inside the Mind of an Aesthetic Doctor", path: "/inside-mind-aesthetic-doctor-blog", category: "Clinical" },
                    { title: "Beauty & Ethnic Neutrality in Aesthetics", path: "/blog/beauty-ethnic-neutrality", category: "Philosophy" },
                    { title: "London Tweakments: The Rise of Natural Aesthetics", path: "/london-tweakments-natural-aesthetics", category: "Trend" },
                  ].map((article, i) => (
                    <Link
                      key={i}
                      to={article.path}
                      className="group block p-4 bg-white/[0.02] border border-white/[0.06] rounded-lg hover:border-[#C9A050]/20 transition-colors"
                    >
                      <span className="text-[#C9A050] text-[10px] font-medium tracking-wider uppercase">
                        {article.category}
                      </span>
                      <p className="text-white/70 text-sm font-light mt-2 leading-snug group-hover:text-[#C9A050]/80 transition-colors">
                        {article.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.section>

          </div>
        </article>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div
          className="sr-only"
          aria-hidden="true"
          role="complementary"
          aria-label="Extended article information for search engines"
        >
          <h2>Trust in Medical Aesthetics: Building Patient Confidence Through Communication</h2>
          <p>
            This article examines how aesthetic medicine clinics and medical brands should communicate their growth,
            evolution, and philosophy to build patient trust. Written by Dr Ahmed Haq of CosmeDocs, Harley Street,
            the article explores the psychology of medical trust and why patients respond differently to medical
            brand narratives compared to other industries. Key topics covered include the distinction between
            philosophy-led communication and operational transparency, the subconscious transfer of administrative
            concerns to safety concerns, safe messaging angles including growth and evolution, raising standards,
            listening to patients, philosophy sharpening, and gratitude. The article provides specific guidance on
            content placement, with journey-based content recommended for About pages, philosophy pages, and founder
            notes, and strictly excluded from treatment pages, homepage heroes, and pricing pages. CosmeDocs has
            practised aesthetic medicine from Harley Street since 2007, performing over one million injections.
            Our aesthetics is invisible art — bold, natural, always your way. The five principles of medical brand
            communication are: talk about your journey, thank your patients, show growth and humility, never list
            operational mistakes, and never apologise publicly for logistics.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

/* ─────────────────────────────────────────────
   GROWTH ANGLE CARD COMPONENT
   ───────────────────────────────────────────── */
const GrowthAngle = ({
  number,
  title,
  quote,
  explanation,
}: {
  number: string;
  title: string;
  quote: string;
  explanation: string;
}) => (
  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 md:p-8">
    <div className="flex items-start gap-5">
      <span className="text-[#C9A050]/30 text-3xl font-extralight min-w-[40px]">
        {number}
      </span>
      <div>
        <p className="text-white/80 text-lg font-light mb-3">{title}</p>
        <blockquote className="text-[#C9A050]/70 text-base font-light italic mb-4 border-l border-[#C9A050]/20 pl-4">
          "{quote}"
        </blockquote>
        <p className="text-white/40 text-sm font-light leading-relaxed">
          {explanation}
        </p>
      </div>
    </div>
  </div>
);

export default MedicalBrandTrustBlog;
