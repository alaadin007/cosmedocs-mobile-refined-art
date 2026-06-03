import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Clock, ShieldCheck, Syringe, CheckCircle2, ArrowRight, Droplet, Heart, Award, Calendar } from "lucide-react";

const CANONICAL = "https://www.cosmedocs.co.uk/treatments/earlobe-rejuvenation/";
const REEL_URL = "https://www.instagram.com/reel/DBeV9VsNp4e/";

const faqs = [
  {
    q: "What is earlobe rejuvenation with dermal fillers?",
    a: "Earlobe rejuvenation is a doctor-led, non-surgical treatment that uses small volumes of hyaluronic acid (HA) dermal filler to re-hydrate, re-volumise and smooth the earlobes. As we age — or after years of wearing heavy earrings — the earlobe thins, creases, deflates and the piercing hole stretches. HA filler restores the soft, plump cushion of youthful earlobes, supports earrings to sit correctly again, and softens vertical creases without surgery."
  },
  {
    q: "How quickly is the earlobe filler treatment performed?",
    a: "The injection itself takes around 5 to 10 minutes for both ears. Including consent, mapping, numbing and aftercare advice, you are typically in and out of the clinic in 30 minutes. Our doctors use a very fine needle or blunt cannula and the discomfort is minimal — most patients describe it as a brief pinch and a sensation of pressure."
  },
  {
    q: "How long do earlobe filler results last?",
    a: "Results are visible immediately and continue to refine over 1–2 weeks as the hyaluronic acid integrates with the tissue and draws in water. Typical longevity is 9–15 months, depending on the product chosen, your metabolism and how much weight you place on the earlobe with heavy or pulling earrings."
  },
  {
    q: "Can earlobe filler fix a stretched or torn piercing hole?",
    a: "HA filler can significantly reduce the appearance of a stretched (elongated) piercing hole by re-plumping the surrounding tissue and lifting the lobe back to a more youthful, supported shape. It does not surgically close a fully split or torn earlobe — that requires a minor earlobe repair procedure. During consultation our doctors will assess your anatomy and tell you honestly which option is right for you."
  },
  {
    q: "When can I wear earrings again after earlobe filler?",
    a: "We advise leaving earrings out for 24 hours after treatment. After that, lightweight studs are fine. Heavy or pulling earrings — the very thing that often causes the lobe damage in the first place — should be kept to special occasions only."
  },
  {
    q: "Is earlobe rejuvenation safe?",
    a: "When performed by a qualified medical doctor using a CE-marked hyaluronic acid filler, earlobe rejuvenation has an excellent safety profile. The earlobe contains no major blood vessels or motor nerves, which makes it one of the lower-risk areas for filler. At Cosmedocs every treatment is doctor-led, in association with our CQC-registered partner clinic PrivaDr Ltd, 10 Harley Street, London W1G 9PF."
  },
  {
    q: "How much does earlobe filler cost in London?",
    a: "Earlobe rejuvenation at Cosmedocs Harley Street starts from £295 using 0.5 ml of premium HA filler treating both lobes. Most patients require 0.5–1 ml in total. Pricing is confirmed at your face-to-face consultation, which is £50 and redeemable against treatment."
  },
  {
    q: "Can I combine earlobe filler with other treatments?",
    a: "Yes — earlobe rejuvenation pairs beautifully with our full-face HA Makeover, profile balancing, hand rejuvenation or polynucleotide skin-quality treatments. It is a small, elegant detail that completes a refined, naturally-aged appearance — invisible art, exactly the way it should be."
  }
];

export default function EarlobeRejuvenation() {
  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Earlobe Rejuvenation with Dermal Filler",
    alternateName: ["Earlobe Filler", "Earlobe Plumping", "Non-Surgical Earlobe Rejuvenation", "Ear Lobe Hyaluronic Acid"],
    procedureType: "https://schema.org/PercutaneousProcedure",
    bodyLocation: "Earlobe",
    howPerformed: "0.5–1 ml of hyaluronic acid dermal filler is gently injected into the deflated, creased or thinned earlobe using a fine needle or blunt cannula. The HA hydrates the tissue, restores soft volume and supports the piercing channel.",
    preparation: "Doctor-led face-to-face consultation, medical history review, photographic assessment of both lobes.",
    followup: "Complimentary review at 2 weeks. Avoid heavy earrings for 24 hours.",
    url: CANONICAL
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cosmedocs.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.cosmedocs.co.uk/treatments/" },
      { "@type": "ListItem", position: 3, name: "Dermal Fillers", item: "https://www.cosmedocs.co.uk/treatments/dermal-fillers/" },
      { "@type": "ListItem", position: 4, name: "Earlobe Rejuvenation", item: CANONICAL }
    ]
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Earlobe Rejuvenation with Hyaluronic Acid Filler — Live Demonstration",
    description: "A real, in-clinic demonstration of earlobe rejuvenation using hyaluronic acid dermal filler at Cosmedocs Harley Street. See how quick and discreet the treatment is.",
    thumbnailUrl: ["https://www.cosmedocs.co.uk/og-image.jpg"],
    uploadDate: "2024-10-22",
    contentUrl: REEL_URL,
    embedUrl: REEL_URL,
    publisher: {
      "@type": "Organization",
      name: "Cosmedocs",
      logo: { "@type": "ImageObject", url: "https://www.cosmedocs.co.uk/logo.png" }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white treatment-page">
      <Helmet>
        <title>Earlobe Rejuvenation London | Hyaluronic Acid Earlobe Filler | Cosmedocs Harley Street</title>
        <meta
          name="description"
          content="Doctor-led earlobe rejuvenation with hyaluronic acid filler at Cosmedocs Harley Street. Restore plump, youthful earlobes, soften creases and re-support stretched piercings in 10 minutes. From £295."
        />
        <meta name="keywords" content="earlobe rejuvenation, earlobe filler, earlobe filler London, hyaluronic acid earlobe, stretched earlobe treatment, non-surgical earlobe repair, earlobe plumping, Harley Street earlobe filler" />
        <link rel="canonical" href={CANONICAL} data-rh="true" />
        <meta property="og:title" content="Earlobe Rejuvenation — Hyaluronic Acid Filler at Cosmedocs Harley Street" />
        <meta property="og:description" content="Restore plump, youthful earlobes and soften creases in 10 minutes with doctor-led hyaluronic acid filler. From £295." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(medicalSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A050]/10 via-black to-black" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A050]/40 bg-[#C9A050]/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A050]">Dermal Filler · Earlobe</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            Earlobe Rejuvenation
            <span className="block text-[#C9A050] italic font-serif mt-2">Restored to their former glory</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            A 10-minute, doctor-led treatment that re-hydrates and re-plumps thinned, creased or stretched earlobes using hyaluronic acid. Quiet, natural, and exactly the way an earlobe should look.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
               className="px-7 py-3 rounded-full bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium text-sm transition">
              Book Consultation
            </a>
            <Link to="/treatments/dermal-fillers/" className="px-7 py-3 rounded-full border border-white/20 hover:border-[#C9A050] text-white text-sm transition">
              All Dermal Fillers
            </Link>
          </div>
        </div>
      </section>

      {/* AT A GLANCE STRIP */}
      <section className="border-y border-white/10 bg-white/[0.02] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Clock, label: "Treatment time", value: "5–10 minutes" },
            { icon: Droplet, label: "Product", value: "Hyaluronic acid" },
            { icon: Calendar, label: "Results last", value: "9–15 months" },
            { icon: ShieldCheck, label: "Downtime", value: "Virtually none" }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <s.icon className="w-5 h-5 text-[#C9A050]" />
              <p className="text-xs uppercase tracking-wider text-white/50">{s.label}</p>
              <p className="text-sm font-medium">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN BODY 2-COL */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* INTRO */}
            <article className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-light text-[#C9A050] mb-4">Why earlobes age — and why nobody talks about it</h2>
              <p className="text-white/80 leading-relaxed">
                We obsess over crow's feet, marionette lines and tear troughs — and forget the earlobes entirely. Yet the earlobe is one of the most reliable tells of true biological age. It is made almost entirely of fibrofatty tissue with no underlying bone or cartilage to hold its shape. As collagen and elastin decline, the fat pad inside the lobe atrophies, the skin thins, vertical creases appear, and decades of earrings — particularly heavy hoops, drops and studs worn while sleeping — slowly stretch the piercing channel into a slit.
              </p>
              <p className="text-white/80 leading-relaxed">
                The result: lobes that hang longer than they used to, earrings that pull forward instead of sitting flush, a thin papery look that no amount of foundation can hide, and the unmistakable visual cue of an aged neck — even when the face above it has been beautifully looked after. <strong className="text-[#C9A050]">Earlobe rejuvenation</strong> with hyaluronic acid dermal filler corrects all of this in a single, ten-minute, virtually painless treatment.
              </p>
            </article>

            {/* VIDEO EMBED */}
            <div className="rounded-2xl border border-[#C9A050]/30 bg-white/[0.02] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#C9A050]" />
                <h2 className="text-xl font-light">Watch a real earlobe filler treatment</h2>
              </div>
              <p className="text-sm text-white/60 mb-5">
                A live in-clinic demonstration from our Harley Street rooms — see exactly how quick, discreet and comfortable the treatment is.
              </p>
              <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: "125%" }}>
                <iframe
                  src="https://www.instagram.com/reel/DBeV9VsNp4e/embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  allow="encrypted-media"
                  allowFullScreen
                  title="Earlobe rejuvenation with hyaluronic acid filler — Cosmedocs Harley Street"
                />
              </div>
              <a href={REEL_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1 text-xs text-[#C9A050] mt-4 hover:underline">
                View on Instagram <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* HOW IT WORKS */}
            <article className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-light text-[#C9A050] mb-4">How hyaluronic acid restores the earlobe</h2>
              <p className="text-white/80 leading-relaxed">
                Hyaluronic acid is a sugar molecule that occurs naturally in your skin, where it binds water and gives tissue its bounce, softness and resilience. By the time you reach your late thirties, your skin contains around half the HA it had at twenty. In the earlobe — a structure made almost entirely of soft tissue — that loss is visible faster and more dramatically than almost anywhere else on the face.
              </p>
              <p className="text-white/80 leading-relaxed">
                A precise micro-aliquot of cross-linked HA filler, placed into the fibrofatty pad of the lobe, instantly replaces that lost volume. Over the following 7–14 days the HA continues to draw water into the tissue (a property called hygroscopicity), so the lobe softens, plumps and lifts further. The crease softens or disappears. The piercing channel — provided it has not fully split — is gently supported back towards a youthful round opening, so studs and small hoops sit flush against the lobe again instead of dragging downward.
              </p>
              <p className="text-white/80 leading-relaxed">
                The treatment is delivered through either a very fine 30G needle or, for patients who prefer it, a flexible blunt cannula. Both lobes are typically completed in under ten minutes. There is no general anaesthetic, no scalpel, no stitches and no recovery period. You can walk straight back into your day.
              </p>
            </article>

            {/* WHO ITS FOR */}
            <article className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-light text-[#C9A050] mb-4">Who is earlobe rejuvenation for?</h2>
              <p className="text-white/80 leading-relaxed">
                We treat patients of every age and background, but a few clear groups benefit most from earlobe filler:
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#C9A050] shrink-0 mt-0.5" /><span><strong>Patients in their 40s, 50s and 60s</strong> noticing thinning, creasing or lengthening of the lobe — often the first part of the face to age visibly.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#C9A050] shrink-0 mt-0.5" /><span><strong>Long-term earring wearers</strong> whose piercing holes have stretched, elongated or migrated downwards over the years.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#C9A050] shrink-0 mt-0.5" /><span><strong>Patients who have had a facelift or neck lift</strong> and want the earlobe to match the refreshed lower face, rather than betray the procedure.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#C9A050] shrink-0 mt-0.5" /><span><strong>Brides and grooms</strong> who want their lobes to look as elegant as the rest of them on the day — close-up photography is unforgiving.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#C9A050] shrink-0 mt-0.5" /><span><strong>Anyone whose earrings now sit forward, tilt, or "hang"</strong> rather than rest neatly flush against the lobe.</span></li>
              </ul>
            </article>

            {/* CONSULTATION TO AFTERCARE */}
            <article className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-light text-[#C9A050] mb-4">From consultation to aftercare — exactly what to expect</h2>
              <h3 className="text-xl text-white font-light mt-6">1. The consultation</h3>
              <p className="text-white/80 leading-relaxed">
                Every patient is seen face-to-face by one of our medical doctors. We examine both lobes, photograph them, listen to your concerns, and explain honestly what filler can and cannot do. If your concern is a fully split earlobe, you will be advised on minor surgical repair instead — we never inject filler into tissue that needs stitches.
              </p>
              <h3 className="text-xl text-white font-light mt-6">2. The treatment</h3>
              <p className="text-white/80 leading-relaxed">
                The lobes are cleansed with a medical-grade antiseptic and topical numbing cream is applied for 5–10 minutes. Modern HA fillers are pre-mixed with lidocaine, so any sensation drops away after the first tiny entry point. The doctor places the filler in carefully measured aliquots — typically 0.25–0.5 ml per side — moulding the lobe between the fingers as the product integrates.
              </p>
              <h3 className="text-xl text-white font-light mt-6">3. The aftercare</h3>
              <p className="text-white/80 leading-relaxed">
                You may have very mild redness or pinpoint pressure marks for an hour or two; bruising is rare on the lobe. Leave earrings out for 24 hours, avoid sleeping directly on the side of treatment for two nights, and skip the sauna, hot yoga and vigorous exercise for 48 hours. Beyond that, there are no restrictions and no downtime.
              </p>
              <h3 className="text-xl text-white font-light mt-6">4. The review</h3>
              <p className="text-white/80 leading-relaxed">
                We see every patient at the two-week mark, complimentary, to assess the integrated result. If a tiny additional refinement is needed it is performed there and then.
              </p>
            </article>

            {/* WHY COSMEDOCS */}
            <article className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-light text-[#C9A050] mb-4">Why Cosmedocs Harley Street</h2>
              <p className="text-white/80 leading-relaxed">
                Earlobe rejuvenation is a small treatment, but small treatments still deserve a doctor's hands. At Cosmedocs every injectable is delivered by a qualified medical doctor, not a nurse or a non-medical practitioner. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments. Our doctors train other clinicians through our sister organisation, the Harley Street Institute, and we audit our own outcomes in writing.
              </p>
              <p className="text-white/80 leading-relaxed">
                Our motto is <em>"our aesthetics is invisible art — bold, natural, always your way."</em> Earlobe rejuvenation is the perfect expression of that philosophy: people will notice that you look well-rested, refined and elegant, but they will not be able to tell you why. That is exactly the point.
              </p>
            </article>

            {/* FAQs */}
            <article className="space-y-4">
              <h2 className="text-3xl font-light text-[#C9A050] mb-4">Earlobe filler — your questions answered</h2>
              {faqs.map((f, i) => (
                <details key={i} className="group border border-white/10 rounded-xl p-5 hover:border-[#C9A050]/40 transition">
                  <summary className="cursor-pointer font-medium text-white flex justify-between items-center">
                    {f.q}
                    <ArrowRight className="w-4 h-4 text-[#C9A050] group-open:rotate-90 transition" />
                  </summary>
                  <p className="text-white/70 leading-relaxed mt-4">{f.a}</p>
                </details>
              ))}
            </article>

            {/* INTERNAL LINKS */}
            <article className="border border-[#C9A050]/30 rounded-2xl p-6 bg-[#C9A050]/5">
              <h3 className="text-lg font-light text-[#C9A050] mb-3">You may also be interested in</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                <li><Link to="/treatments/dermal-fillers/" className="text-white/80 hover:text-[#C9A050]">→ Dermal Fillers Overview</Link></li>
                <li><Link to="/treatments/ha-makeover/" className="text-white/80 hover:text-[#C9A050]">→ HA Makeover (Liquid Facelift)</Link></li>
                <li><Link to="/treatments/skin-rejuvenation/" className="text-white/80 hover:text-[#C9A050]">→ Skin Rejuvenation</Link></li>
                <li><Link to="/treatments/polynucleotide-treatment/" className="text-white/80 hover:text-[#C9A050]">→ Polynucleotide Treatment</Link></li>
              </ul>
            </article>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 self-start space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-wider text-[#C9A050] mb-4">At a glance</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span className="text-white/60">From</span><span className="font-medium">£295</span></li>
                <li className="flex justify-between"><span className="text-white/60">Treatment</span><span className="font-medium">5–10 min</span></li>
                <li className="flex justify-between"><span className="text-white/60">Product</span><span className="font-medium">HA filler</span></li>
                <li className="flex justify-between"><span className="text-white/60">Results</span><span className="font-medium">Immediate</span></li>
                <li className="flex justify-between"><span className="text-white/60">Lasts</span><span className="font-medium">9–15 months</span></li>
                <li className="flex justify-between"><span className="text-white/60">Downtime</span><span className="font-medium">None</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#C9A050]/15 to-transparent border border-[#C9A050]/40 rounded-2xl p-6 text-center">
              <Heart className="w-6 h-6 text-[#C9A050] mx-auto mb-3" />
              <p className="text-sm text-white/80 mb-4">Your consultation begins here.</p>
              <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
                 className="block w-full bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 text-sm font-medium transition">
                Book Consultation
              </a>
              <p className="text-xs text-white/50 mt-3">£50 consultation, redeemable against treatment.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <Award className="w-5 h-5 text-[#C9A050] mb-3" />
              <p className="text-xs text-white/70 leading-relaxed">
                Doctor-led at Cosmedocs Harley Street. We work with PrivaDr Ltd, 10 Harley Street, London W1G 9PF for all CQC required treatments.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CLOSING BAND */}
      <section className="border-t border-white/10 py-16 px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Quiet, not loud. Invisible, not exaggerated.</h2>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Earlobe rejuvenation — a small detail that completes a refined, naturally-aged appearance.
        </p>
        <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer"
           className="inline-block px-8 py-3 rounded-full bg-[#C9A050] hover:bg-[#B8924A] text-black font-medium text-sm transition">
          Book Your Earlobe Consultation
        </a>
      </section>

      {/* Hidden semantic SEO content for crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h2>Earlobe rejuvenation London — also known as earlobe filler, ear lobe plumping, non-surgical earlobe repair, hyaluronic acid earlobe treatment and earlobe restoration.</h2>
        <p>
          Cosmedocs Harley Street provides doctor-led earlobe rejuvenation in central London using premium CE-marked hyaluronic acid dermal fillers including Juvederm Volbella, Restylane Kysse, Teosyal Redensity and Belotero Balance. Our patients travel from across London — Mayfair, Marylebone, Knightsbridge, Chelsea, Kensington, Notting Hill, Hampstead, Islington, Shoreditch, Canary Wharf and the City — as well as from Birmingham, Manchester, Leeds, Edinburgh, Glasgow, Cardiff, Bristol, Brighton and internationally for refined, doctor-led aesthetic treatment. Earlobe filler is suitable for treating thin earlobes, crepey earlobes, wrinkled earlobes, stretched ear piercings, elongated earring holes, sagging earlobes and the visible signs of ageing in the lower ear. Our aesthetics is invisible art — bold, natural, always your way.
        </p>
      </div>
    </div>
  );
}
