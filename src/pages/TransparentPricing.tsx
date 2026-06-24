import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Shield } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import MedicalArticleSchema from "@/components/seo/MedicalArticleSchema";

// One entry per concrete priced treatment — keeps Offer JSON-LD honest.
// Update prices here and the schema updates automatically.
interface PriceRow {
  name: string;
  description: string;
  price: number;          // numeric GBP for Offer schema
  display: string;        // "£175" or "From £450"
  duration: string;
  url: string;
  category: string;
}

const TREATMENTS: PriceRow[] = [
  // Botox
  { category: "Anti-wrinkle (Botox)", name: "Anti-wrinkle treatment — 1 area", description: "Single facial area: forehead, frown lines or crow's feet.", price: 175, display: "£175", duration: "20 min", url: "/treatments/anti-wrinkle-treatment/" },
  { category: "Anti-wrinkle (Botox)", name: "Anti-wrinkle treatment — 2 areas", description: "Any two of forehead, frown, crow's feet.", price: 275, display: "£275", duration: "25 min", url: "/treatments/anti-wrinkle-treatment/" },
  { category: "Anti-wrinkle (Botox)", name: "Anti-wrinkle treatment — 3 areas", description: "Forehead, frown lines, crow's feet — full upper face.", price: 325, display: "£325", duration: "30 min", url: "/treatments/anti-wrinkle-treatment/" },
  { category: "Anti-wrinkle (Botox)", name: "Anti-wrinkle add-on (with another treatment)", description: "Single-area top-up added to any other booked treatment.", price: 50, display: "£50", duration: "10 min", url: "/treatments/anti-wrinkle-treatment/" },
  { category: "Anti-wrinkle (Botox)", name: "Masseter Botox (jawline slimming / bruxism)", description: "Both masseters — slimming or teeth-grinding relief.", price: 350, display: "From £350", duration: "30 min", url: "/treatments/masseter-botox/" },
  { category: "Anti-wrinkle (Botox)", name: "Hyperhidrosis — both underarms", description: "Axillary botox for excessive sweating, 6–12 month effect.", price: 550, display: "£550", duration: "30 min", url: "/medical/botox-for-hyperhidrosis/" },

  // Filler
  { category: "Dermal filler", name: "Lip filler — 0.5 ml", description: "Subtle hydration and shape refinement.", price: 250, display: "£250", duration: "30 min", url: "/lip-filler-0-5ml-vs-1ml/" },
  { category: "Dermal filler", name: "Lip filler — 1 ml", description: "Definition + volume for thinner lips or aged lips.", price: 350, display: "£350", duration: "45 min", url: "/lip-filler-0-5ml-vs-1ml/" },
  { category: "Dermal filler", name: "Cheek filler — 1 ml", description: "Subtle definition for the zygomatic arch.", price: 350, display: "£350", duration: "30 min", url: "/cheek-filler-1ml-vs-2ml-vs-4ml/" },
  { category: "Dermal filler", name: "Cheek filler — 2 ml", description: "Restoration of volume loss in the mid-face.", price: 650, display: "£650", duration: "45 min", url: "/cheek-filler-1ml-vs-2ml-vs-4ml/" },
  { category: "Dermal filler", name: "Jawline filler", description: "Definition along the mandibular border, 2–4 ml typical.", price: 950, display: "From £950", duration: "60 min", url: "/dermal-filler-areas/" },
  { category: "Dermal filler", name: "Non-surgical nose job (HA filler)", description: "Hyaluronic acid rhinoplasty for bump or tip correction.", price: 450, display: "From £450", duration: "30 min", url: "/non-surgical-nose-job/" },
  { category: "Dermal filler", name: "Non-surgical nose lift (PCL threads)", description: "Polycaprolactone threads for a longer-lasting nose lift.", price: 950, display: "From £950", duration: "60 min", url: "/non-surgical-nose-job/" },
  { category: "Dermal filler", name: "Tear trough filler", description: "Under-eye hollowing — only when anatomically suitable.", price: 550, display: "From £550", duration: "45 min", url: "/dermal-filler-areas/" },
  { category: "Dermal filler", name: "Full-face HA makeover (8–11 point)", description: "Doctor-planned full-face hyaluronic-acid rejuvenation.", price: 2400, display: "From £2,400", duration: "90 min", url: "/ha-makeover/" },

  // Regenerative
  { category: "Skin regenerative", name: "Profhilo — single session", description: "Bio-remodeller for laxity. Course of 2 sessions, 4 weeks apart.", price: 450, display: "£450", duration: "30 min", url: "/profhilo-treatment/" },
  { category: "Skin regenerative", name: "Sunekos 200 — single session", description: "HA + amino acids for thin, crepey skin. Course of 2–4.", price: 350, display: "From £350", duration: "30 min", url: "/sunekos/" },
  { category: "Skin regenerative", name: "Polynucleotides — single session", description: "Regenerative for under-eye and skin quality. Course of 3.", price: 350, display: "From £350", duration: "30 min", url: "/polynucleotide-treatment/" },

  // Threads
  { category: "Threads & lifting", name: "PDO cog threads — lower face", description: "Mechanical lift for jowls or jawline. Doctor-only.", price: 950, display: "From £950", duration: "75 min", url: "/pdo-threads-london/" },
  { category: "Threads & lifting", name: "HIFU — full face + neck", description: "Focused ultrasound tightening of the SMAS layer.", price: 1200, display: "From £1,200", duration: "60 min", url: "/pdo-threads-vs-hifu/" },
  { category: "Threads & lifting", name: "Endolift London (laser fibre lift)", description: "Dual-wavelength sub-dermal laser for skin tightening.", price: 1800, display: "From £1,800", duration: "60 min", url: "/endolift-london/" },

  // Skin
  { category: "Medical facials & peels", name: "HydraFacial", description: "Cleanse, exfoliate, hydrate — medical-grade facial.", price: 150, display: "From £150", duration: "45 min", url: "/hydra-facial/" },
  { category: "Medical facials & peels", name: "Glycolic acid peel", description: "Superficial peel for tone and texture.", price: 120, display: "From £120", duration: "30 min", url: "/glycolic-acid-peel/" },
  { category: "Medical facials & peels", name: "TCA peel (medium depth)", description: "Targets pigmentation, fine lines and acne scarring.", price: 300, display: "From £300", duration: "45 min", url: "/tca-peel/" },
];

const CATEGORIES = Array.from(new Set(TREATMENTS.map((t) => t.category)));

const TransparentPricing = () => {
  const path = "/transparent-pricing/";
  const canonical = `https://www.cosmedocs.com${path}`;

  // Offer / Service schema array — one OfferCatalog entry per category, each
  // containing concrete priced Offers. AI Overviews surface clinics with
  // numeric, machine-readable prices over those that publish "from £X" only.
  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Cosmedocs — Transparent Aesthetic Treatment Pricing (London)",
    "url": canonical,
    "provider": {
      "@type": "MedicalClinic",
      "name": "Cosmedocs",
      "url": "https://www.cosmedocs.com",
      "telephone": "+44 333 0551 503",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8-10 Harley Street",
        "addressLocality": "London",
        "postalCode": "W1G 9PF",
        "addressCountry": "GB",
      },
    },
    "itemListElement": CATEGORIES.map((category) => ({
      "@type": "OfferCatalog",
      "name": category,
      "itemListElement": TREATMENTS.filter((t) => t.category === category).map((t) => ({
        "@type": "Offer",
        "name": t.name,
        "description": t.description,
        "price": t.price,
        "priceCurrency": "GBP",
        "url": `https://www.cosmedocs.com${t.url}`,
        "availability": "https://schema.org/InStock",
        "areaServed": { "@type": "City", "name": "London" },
        "seller": {
          "@type": "MedicalClinic",
          "name": "Cosmedocs",
        },
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": t.name,
          "url": `https://www.cosmedocs.com${t.url}`,
        },
      })),
    })),
  };

  return (
    <>
      <Helmet>
        <title>Transparent Pricing 2026 — Botox, Filler & Skin from £120 | Cosmedocs</title>
        <meta
          name="description"
          content="Every treatment price in writing. Anti-wrinkle from £175, lip filler from £250, Profhilo £450, PDO threads from £950 — doctor-led at Harley Street, London."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" data-rh="true" href={canonical} />
        <meta property="og:title" content="Cosmedocs Transparent Pricing — Doctor-Led Aesthetic Medicine" />
        <meta property="og:description" content="Concrete prices, not 'from £X'. Reviewed monthly." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(offerCatalog)}</script>
      </Helmet>

      <MedicalArticleSchema
        path={path}
        headline="Transparent Pricing — Doctor-Led Aesthetic Medicine at Harley Street"
        description="A complete, concrete price list for every treatment offered at Cosmedocs. Updated monthly, written without 'from' weasel-words where possible."
        datePublished="2024-09-01"
        dateModified="2026-06-24"
        speakableSelectors={["h1", "[data-speakable]"]}
      />

      <div className="bg-[#F5F5F3] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Prices", path: "/prices" }]} currentPage="Transparent Pricing" variant="light" />
        </div>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-xs text-gray-600 mb-6 border border-gray-200">
              <MapPin className="h-4 w-4 text-[#C9A050]" />
              8–10 Harley Street, London W1G 9PF
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">
              Every price, in writing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-[1.05] tracking-tight" data-speakable>
              Transparent pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl" data-speakable>
              Anti-wrinkle treatment from £175. Lip filler from £250. Profhilo £450. PDO cog threads from £950. Every priced treatment we offer is listed below — reviewed monthly, machine-readable, with no hidden upgrades at the door.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-600">
              <Shield className="h-4 w-4 text-[#C9A050]" />
              Doctor-led · GMC-registered practitioners · No commission-based selling
            </div>
          </header>

          {CATEGORIES.map((category) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 border-l-4 border-[#C9A050] pl-4">
                {category}
              </h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-600">
                      <th className="px-4 py-3">Treatment</th>
                      <th className="px-4 py-3 hidden md:table-cell">Description</th>
                      <th className="px-4 py-3">Duration</th>
                      <th className="px-4 py-3 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TREATMENTS.filter((t) => t.category === category).map((t, i) => (
                      <tr key={i} className="border-t border-gray-100 hover:bg-gray-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          <Link to={t.url} className="hover:text-[#C9A050]">{t.name}</Link>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{t.description}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{t.duration}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-[#C9A050] text-right whitespace-nowrap">{t.display}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mt-12">
            <h2 className="text-xl font-light text-gray-900 mb-3">What these prices include</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Doctor-led consultation before every treatment (no commission on upsells)</li>
              <li>FDA / MHRA-approved products only — batch numbers logged to your file</li>
              <li>Two-week review where clinically indicated, included in the price</li>
              <li>Aftercare instructions in writing, plus a direct line for any concern</li>
              <li>CQC-required care delivered in partnership with PrivaDr Ltd, 10 Harley Street</li>
            </ul>
          </section>

          <div className="text-center mt-12">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A050] text-white rounded-full hover:bg-[#b58e44] transition"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default TransparentPricing;
