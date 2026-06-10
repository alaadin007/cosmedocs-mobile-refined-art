import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Award, GraduationCap, ShieldCheck, Clock, Quote } from "lucide-react";

import heroAsset from "@/assets/cosmedocs-harley-street-sign.jpg.asset.json";
import buildingAsset from "@/assets/cosmedocs-harley-street-building.jpg.asset.json";
import receptionAsset from "@/assets/cosmedocs-reception-early.jpg.asset.json";
import roomAsset from "@/assets/cosmedocs-treatment-room-early.jpg.asset.json";
import awardAsset from "@/assets/cosmedocs-teoxane-award.jpg.asset.json";
import teachingAsset from "@/assets/cosmedocs-teaching-training.png.asset.json";
import logo2006Asset from "@/assets/cosmedocs-original-logo-2006.jpg.asset.json";

const canonical = "https://www.cosmedocs.com/blog/harley-street-since-2007/";

const HarleyStreetSince2007 = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Harley Street Since 2007 — How Cosmedocs Survived Two Decades, Recessions and Trend Cycles",
    description:
      "A boutique aesthetic clinic that opened on Harley Street in 2007 and is still standing — through the 2008 crash, Brexit, a pandemic and every device fad in between. This is how, and why.",
    image: [heroAsset.url, buildingAsset.url, awardAsset.url],
    author: { "@type": "Organization", name: "Cosmedocs" },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Cosmedocs",
      address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF" },
    },
    datePublished: "2026-06-10",
    mainEntityOfPage: canonical,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Harley Street Since 2007 — Cosmedocs Heritage Story | Cosmedocs</title>
        <meta
          name="description"
          content="Opening a clinic on Harley Street is easy. Surviving two decades, recessions, a pandemic and a hundred device fads is not. Inside the Cosmedocs story — 2007 to today."
        />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta property="og:title" content="Harley Street Since 2007 — The Cosmedocs Story" />
        <meta property="og:description" content="Two decades on Harley Street. Same doctors, same address, same standards. How Cosmedocs outlasted the trends." />
        <meta property="og:image" content={heroAsset.url} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Cosmedocs clinician beside the Harley Street W1 City of Westminster street sign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-5"
          >
            Heritage · Established 2007
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] mb-6"
          >
            Harley Street Since 2007.<br />
            <span className="text-[#C9A050] italic font-light">Still here. Same address. Same standards.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
          >
            Opening on Harley Street is the easy part. Surviving two decades, a global financial crash,
            Brexit, a pandemic and a hundred device fads — that is the story worth telling.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/80 text-xl leading-relaxed font-light mb-6">
            Walk down Harley Street on any weekday morning and you will pass clinics that opened last
            year, clinics that closed last year, and a few brass plaques that have been polished by the
            same hands for decades. Ours is one of those plaques. <strong className="text-[#C9A050] font-medium">Cosmedocs has been
            on Harley Street since 2007</strong> — under the same medical leadership, in the same conservation-area
            building, with the same uncompromising approach to materials and technique.
          </p>
          <p className="text-white/65 text-lg leading-relaxed font-light mb-6">
            That is not a marketing line. It is an industry anomaly. The aesthetic medicine business has a
            brutal half-life: clinics open, ride one trend, and quietly disappear when the next device cycle
            begins. We have watched it happen — from the early laser hair-removal gold rush, through the
            "thread lift" boom of the 2010s, into today's stem-cell, exosome and AI-skin-analysis era.
          </p>
          <p className="text-white/65 text-lg leading-relaxed font-light">
            This is the story of how a boutique, doctor-led practice opened its doors on a Georgian terrace
            in Marylebone — and why, almost twenty years and several once-in-a-generation crises later, the
            lights are still on and the same physicians are still in the room.
          </p>
        </div>
      </section>

      {/* 2007 - THE BEGINNING */}
      <section className="px-6 py-16 bg-gradient-to-b from-black to-[#0a0805]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4">Chapter One · 2007</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              A small clinic, a single chair,<br /><span className="text-[#C9A050]">and a long-term decision.</span>
            </h2>
            <p className="text-white/65 leading-relaxed mb-4 font-light">
              Cosmedocs opened in 2007 — the year before the global financial crisis. The original brand mark
              still survives in our archive: two hand-drawn figures linking through the central "M",
              signed off as <em>Cosmetic Doctors</em>. It was a deliberately quiet identity for a deliberately
              quiet kind of medicine.
            </p>
            <p className="text-white/65 leading-relaxed mb-4 font-light">
              The first treatment room had one chair, one magnifying lamp and a wall-mounted screen. No
              chandeliers, no marble, no champagne — just a clean, well-lit medical space designed around
              the patient on the chair. That photograph still hangs in our office today, partly as nostalgia
              and partly as a discipline: <em>start with the medicine, decorate afterwards.</em>
            </p>
            <p className="text-white/65 leading-relaxed font-light">
              From day one we made one decision that has shaped every year since: we would never use cheap
              material, never recommend a treatment we would not have ourselves, and never pad an invoice
              with a "device of the month" simply because the rep had left brochures on the desk.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4">
            <figure className="rounded-2xl overflow-hidden border border-[#C9A050]/20">
              <img src={receptionAsset.url} alt="Cosmedocs original reception desk on Harley Street in the early years, with the founding 'CosMedocs Cosmetic Doctors' logo on the wall" className="w-full h-auto" />
              <figcaption className="text-xs text-white/45 italic px-4 py-3 bg-white/[0.02]">
                The original Cosmedocs reception — Harley Street, early years.
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-[#C9A050]/20">
              <img src={roomAsset.url} alt="Cosmedocs original treatment room with a single medical chair, magnifying lamp and wall-mounted brand screen" className="w-full h-auto" />
              <figcaption className="text-xs text-white/45 italic px-4 py-3 bg-white/[0.02]">
                One chair, one lamp, one screen — the first treatment room.
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-[#C9A050]/20 bg-white p-6 flex items-center justify-center">
              <img src={logo2006Asset.url} alt="Original Cosmedocs Cosmetic Doctors logo from 2006-2007 — two stylised figures linking through the letter M" className="max-h-32 w-auto object-contain" />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* WHY HARLEY STREET */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <figure className="rounded-2xl overflow-hidden border border-white/10">
            <img src={buildingAsset.url} alt="Georgian terrace building on Harley Street, Marylebone, London — the location of Cosmedocs" className="w-full h-auto" />
            <figcaption className="text-xs text-white/45 italic px-4 py-3 bg-white/[0.02]">
              A Georgian terrace on Harley Street, Marylebone — the address has not changed.
            </figcaption>
          </figure>
          <div>
            <p className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Why this street, why this postcode
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Opening on Harley Street is easy.<br />
              <span className="text-[#C9A050]">Staying on Harley Street is not.</span>
            </h2>
            <p className="text-white/65 leading-relaxed mb-4 font-light">
              Harley Street, W1, has been a medical district since the 1840s. The street's reputation was
              built by surgeons, physicians and specialists who took long leases, trained the next generation,
              and were judged by patients who came back ten, twenty, thirty years later. That is the standard
              the postcode quietly imposes on every plaque on every door.
            </p>
            <p className="text-white/65 leading-relaxed mb-4 font-light">
              Property turnover on the street is high in our industry. New aesthetic clinics open every
              quarter — many on flexible licences in shared suites — and many quietly hand the keys back
              within a year or two. <strong className="text-white">Surviving a single decade on Harley Street as an aesthetic
              clinic is rare. Surviving almost two, under the same medical management, is rarer still.</strong>
            </p>
            <p className="text-white/65 leading-relaxed font-light">
              Cosmedocs took a long view from the outset: a permanent address, a CQC-compatible clinical
              partnership for medical work, and a refusal to scale by franchising the brand to non-medical
              operators. The address on the brass plaque is the address on every invoice we have ever issued.
            </p>
          </div>
        </div>
      </section>

      {/* THE TIMELINE - SURVIVED */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#0a0805] to-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Two decades. Three recessions. One pandemic.
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-center mb-14 leading-tight max-w-3xl mx-auto">
            What we walked through — and what we refused to chase.
          </h2>

          <div className="space-y-4">
            {[
              { year: "2007", title: "Clinic opens on Harley Street", body: "Cosmedocs is founded as a doctor-led aesthetic practice. Original logo: 'Cosmetic Doctors'." },
              { year: "2008–2009", title: "Global financial crisis", body: "Many discretionary-spend clinics close. We hold prices, hold standards, keep our staff, and survive by repeat patients — the same families who still come today." },
              { year: "2010–2014", title: "The 'thread lift' boom", body: "Marketing-led clinics across London push barbed PDO thread lifts as a 'non-surgical facelift'. We decline to over-promise and keep threads in their honest clinical role." },
              { year: "2015–2016", title: "Brexit referendum and currency shock", body: "Supplier costs jump overnight. We absorb rather than substitute — no switching to cheaper, unbranded toxin or filler to protect margin." },
              { year: "2017", title: "Teoxane Outstanding Clinic Award", body: "International recognition for safety, results and ongoing training — the first formal validation that the quiet approach was working." },
              { year: "2018–2019", title: "The 'Instagram face' era", body: "Pillow lips, chipmunk cheeks, overfilled jawlines. We publicly take the opposite position — invisible aesthetics, less is more — and lose some short-term traffic for it." },
              { year: "2020–2021", title: "COVID-19 pandemic", body: "Clinic doors close under lockdown. We do not pivot to selling unproven 'immunity' IV drips. We reopen with the same staff, same address, same prices." },
              { year: "2022–2023", title: "The exosome / stem-cell hype wave", body: "We adopt evidence-backed regenerative tools (polynucleotides, Profhilo) and politely refuse to market unlicensed compounds, however fashionable." },
              { year: "2024–2026", title: "AI, EBD lasers and the device arms race", body: "We integrate technologies that pass clinical and safety scrutiny (Endolaser, advanced diode platforms), and decline the rest. Same doctors. Same room. Same chair philosophy." },
            ].map((row) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-[90px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#C9A050]/30 transition-colors"
              >
                <div className="text-[#C9A050] font-light text-lg md:text-xl tracking-wide">{row.year}</div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">{row.title}</h3>
                  <p className="text-white/55 font-light leading-relaxed text-sm">{row.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARD */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <figure className="rounded-2xl overflow-hidden border border-[#C9A050]/30">
            <img src={awardAsset.url} alt="Teoxane Laboratories Outstanding Clinical Award trophy presented to Cosmedocs in 2017, in front of the CosmeDocs Cosmetic Doctors logo" className="w-full h-auto" />
            <figcaption className="text-xs text-white/45 italic px-4 py-3 bg-white/[0.02]">
              Teoxane Laboratories Outstanding Clinical Award — Winner Q2 2017.
            </figcaption>
          </figure>
          <div>
            <p className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Recognised by the industry we refused to chase
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Outstanding Clinical Award — <span className="text-[#C9A050]">Teoxane Laboratories.</span>
            </h2>
            <p className="text-white/65 leading-relaxed mb-4 font-light">
              The Teoxane award is not a popularity contest. It is a peer-reviewed recognition from one of
              the most respected hyaluronic-acid manufacturers in the world, given to clinics judged on
              <em> patient safety, treatment outcomes, dedication to ongoing training, and product knowledge</em>.
            </p>
            <p className="text-white/65 leading-relaxed font-light">
              It mattered to us because it was awarded on the exact axes we built the clinic around — not on
              followers, not on revenue, not on marketing spend. It is one of several markers that confirmed
              the quiet approach was the right one.
            </p>
          </div>
        </div>
      </section>

      {/* TEACHING IS IN OUR DNA */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-black via-[#0a0805] to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" /> Teaching is in our DNA
              </p>
              <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                We don't just practise it.<br />
                <span className="text-[#C9A050]">We train the doctors who do.</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-4 font-light text-lg">
                A clinic that does not teach is a clinic that has stopped learning. From the earliest years,
                our medical directors have been involved in postgraduate training — and in 2014 that
                commitment became formal with the launch of the <strong className="text-white">Harley Street Institute</strong>.
              </p>
              <p className="text-white/60 leading-relaxed mb-4 font-light">
                The Harley Street Institute hosts the first dedicated <strong className="text-[#C9A050]">Aesthetic Medicine
                Fellowship</strong> in the United Kingdom — a structured, multi-module training programme for
                qualified doctors, dentists and surgeons who want to practise aesthetic medicine to a clinical,
                rather than commercial, standard.
              </p>
              <p className="text-white/60 leading-relaxed mb-6 font-light">
                The same physicians who treat patients on our chairs lecture, examine and supervise on the
                programme. Every cohort sharpens our own technique. Every fellow we train carries our
                discipline — invisible aesthetics, evidence over fashion — into their own practice.
              </p>
              <a
                href="https://www.harleystreetinstitute.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A050] text-black rounded-full font-medium text-sm hover:bg-[#B8913F] transition-colors"
              >
                Visit Harley Street Institute <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <figure className="rounded-2xl overflow-hidden border border-[#C9A050]/20">
              <img src={teachingAsset.url} alt="Cosmedocs doctors teaching aesthetic medicine fellows — live patient case study, Harley Street Institute" className="w-full h-auto" />
              <figcaption className="text-xs text-white/45 italic px-4 py-3 bg-white/[0.02]">
                A live fellowship case study — Harley Street Institute. Teaching is in our DNA.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHY - WHY WE'RE STILL HERE */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Why we are still here
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-10 leading-tight">
            The beauty industry and the medicine industry overlap.<br />
            <span className="text-[#C9A050] italic">We chose the medicine.</span>
          </h2>

          <p className="text-white/75 text-lg leading-relaxed font-light mb-5">
            What we have learned over two decades is uncomfortable for the wider sector to say out loud:
            most of what gets sold as "aesthetic medicine" is actually beauty-industry marketing wrapped
            in a clinical aesthetic. Devices come and go. Protocols are renamed every eighteen months.
            "Game-changers" arrive each spring and disappear by autumn.
          </p>
          <p className="text-white/65 leading-relaxed font-light mb-5">
            Rather than chase the next fad, we have built the clinic on something deliberately old-fashioned:
            <strong className="text-white"> meticulously executed, age-old, timeless techniques</strong>, delivered with the best available
            materials, by the same physicians, in the same room. That is the entire moat. There is nothing
            clever about it. It is simply harder than it looks.
          </p>
          <p className="text-white/65 leading-relaxed font-light mb-10">
            We have never cut a corner on toxin, never substituted an unbranded filler, never sold a course
            of treatments a patient did not need, and never recommended a device, product or protocol that
            we believed to be fluff. That discipline has cost us short-term revenue many times. It is also
            the reason the same management team is still standing here, almost twenty years later, writing
            this piece.
          </p>

          <div className="border-l-2 border-[#C9A050] pl-6 py-2 mb-10">
            <Quote className="w-6 h-6 text-[#C9A050]/60 mb-3" />
            <p className="text-xl md:text-2xl font-light italic text-white/85 leading-relaxed mb-4">
              "Our aesthetics is invisible art. Bold. Natural. Always your way.
              Quiet, not loud. Transformation that speaks — without saying a word."
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A050]">— Cosmedocs ethos, unchanged since 2007</p>
          </div>

          <h3 className="text-2xl font-light mb-5 text-white">The four rules we have never broken</h3>
          <ul className="space-y-4 text-white/70 font-light leading-relaxed mb-12">
            <li className="flex gap-4"><span className="text-[#C9A050] font-medium shrink-0">01.</span> <span><strong className="text-white">Branded, traceable materials only.</strong> Every toxin and filler we use is a named, regulated product with a batch number on your record card. No grey-market, no "equivalent" substitutions.</span></li>
            <li className="flex gap-4"><span className="text-[#C9A050] font-medium shrink-0">02.</span> <span><strong className="text-white">No device unless it changes outcomes.</strong> We have declined dozens of "must-have" machines that looked good on a marketing deck and did nothing measurable on a patient.</span></li>
            <li className="flex gap-4"><span className="text-[#C9A050] font-medium shrink-0">03.</span> <span><strong className="text-white">Honest under-treatment over flattering over-treatment.</strong> If the right answer is "less" or "wait" or "nothing today", that is what the consultation will recommend.</span></li>
            <li className="flex gap-4"><span className="text-[#C9A050] font-medium shrink-0">04.</span> <span><strong className="text-white">The doctor who consults is the doctor who treats.</strong> No hand-off to a junior, no upsell from a sales coordinator.</span></li>
          </ul>

          <h3 className="text-2xl font-light mb-5 text-white">What two decades teach you</h3>
          <p className="text-white/65 leading-relaxed font-light mb-5">
            Patients come back. Not because of a loyalty programme, but because invisible aesthetics ages
            gracefully and over-treated faces do not. We see the difference now in real time — the patients
            who started with us in their early thirties are now in their fifties, still looking like
            themselves, just well-rested. Many have introduced their daughters, partners, mothers.
          </p>
          <p className="text-white/65 leading-relaxed font-light mb-5">
            The other thing two decades teach you is humility. We have made the calls we are proud of, and a
            handful we would make differently. We have watched extraordinary practitioners join the
            profession and a few embarrassing ones leave it. The standards on Harley Street are upheld not
            by the street itself but by the clinics that take the long view, and we are proud to still be
            one of them.
          </p>
          <p className="text-white/65 leading-relaxed font-light">
            We are not the loudest clinic in Marylebone. We are simply still here — same doctors, same
            address, same chair philosophy. If that is the kind of aesthetic medicine you are looking for,
            the door is open.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#0a0805] to-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A050] uppercase tracking-[0.3em] text-xs mb-4">Your consultation begins here</p>
          <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Twenty years of restraint.<br /><span className="text-[#C9A050]">One conversation, in person.</span>
          </h2>
          <p className="text-white/65 mb-10 font-light leading-relaxed max-w-xl mx-auto">
            Meet the same physicians who have looked after Harley Street patients since 2007.
            Honest assessment. No pressure. No fads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact/" className="px-8 py-4 bg-[#C9A050] text-black rounded-full font-medium hover:bg-[#B8913F] transition-colors inline-flex items-center justify-center gap-2">
              Book a consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about-us/" className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
              Meet the team
            </Link>
          </div>
          <p className="text-xs text-white/40 mt-8 italic">
            Cosmedocs · Harley Street, London W1 · Doctor-led since 2007.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HarleyStreetSince2007;
