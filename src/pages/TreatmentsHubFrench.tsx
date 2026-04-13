import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateHreflangLinks, getCanonicalUrl } from '@/i18n/config';

const hreflangLinks = generateHreflangLinks('treatments');
const canonical = getCanonicalUrl('fr', 'treatments');

interface TreatmentCategory {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  items: string[];
}

const treatmentCategories: TreatmentCategory[] = [
  {
    title: "Botox & Anti-Rides",
    subtitle: "Modulation musculaire & prévention",
    description: "Injections anti-rides de précision pour les lignes dynamiques, le remodelage facial et les conditions médicales. Réalisées par des médecins experts depuis 2007.",
    link: "/fr/traitements/botox/",
    items: ["Front, rides du lion & pattes d'oie", "Lip flip & sourire gingival", "Masséter & affinement de la mâchoire", "Lifting Néfertiti", "Botox médical (migraine, transpiration)"],
  },
  {
    title: "Acide Hyaluronique",
    subtitle: "Volume, structure & contour",
    description: "Injections d'acide hyaluronique pour une restauration naturelle du volume, le remodelage facial et le rajeunissement. Plans de traitement sur mesure.",
    link: "/fr/traitements/acide-hyaluronique/",
    items: ["Injection lèvres (naturel à audacieux)", "Pommettes, menton & mâchoire", "Rhinoplastie médicale", "Cernes & sous les yeux", "HA Makeover (visage complet)"],
  },
  {
    title: "Rajeunissement Cutané",
    subtitle: "Renouvellement, éclat & réparation",
    description: "Traitements cutanés de qualité médicale pour restaurer l'hydratation, stimuler le collagène et affiner la texture.",
    link: "/fr/traitements/rajeunissement-peau/",
    items: ["Profhilo", "Polynucléotides", "HydraFacial", "Microneedling & PRP", "Peelings chimiques"],
  },
  {
    title: "Traitements Laser",
    subtitle: "Thérapie lumineuse de précision",
    description: "Traitements laser avancés pour le resurfaçage, la correction pigmentaire, l'épilation et la réduction des cicatrices.",
    link: "/treatments/laser/",
    items: ["Laser CO₂ fractionné", "Pico Laser", "Épilation laser", "Réduction des cicatrices"],
  },
  {
    title: "Fils PDO",
    subtitle: "Lifting non chirurgical",
    description: "Fils PDO résorbables pour le lifting tissulaire, le raffermissement cutané et la stimulation du collagène.",
    link: "/treatments/pdo-threads/",
    items: ["Lifting du visage par fils", "Fils nasaux non chirurgicaux", "Définition de la mâchoire"],
  },
  {
    title: "Botox Médical",
    subtitle: "Applications thérapeutiques",
    description: "Traitements à la toxine botulique basés sur des preuves pour les conditions médicales incluant migraines chroniques, hyperhidrose et bruxisme.",
    link: "/medical/",
    items: ["Soulagement des migraines", "Transpiration excessive", "Bruxisme & grincement", "Thérapie des points gâchettes"],
  },
  {
    title: "Chirurgie Plastique",
    subtitle: "Procédures chirurgicales expertes",
    description: "Chirurgie esthétique complète réalisée par des chirurgiens plasticiens qualifiés avec les plus hauts standards de soins.",
    link: "/plastic-surgeon/",
    items: ["Rhinoplastie", "Blépharoplastie", "Lifting du visage", "Liposuccion"],
  },
  {
    title: "Dermatologie",
    subtitle: "Santé cutanée médicale & esthétique",
    description: "Services de santé cutanée dirigés par un dermatologue consultant pour les conditions médicales et la dermatologie esthétique avancée.",
    link: "/dermatology/",
    items: ["Traitement acné & rosacée", "Ablation grains de beauté", "Psoriasis & eczéma", "Correction pigmentaire"],
  },
];

const TreatmentsHubFrench = () => {
  return (
    <>
      <Helmet>
        <title>Traitements Esthétiques Londres | Cosmedocs Harley Street</title>
        <meta name="description" content="Découvrez notre gamme complète de traitements esthétiques. Botox, acide hyaluronique, rajeunissement cutané, laser et chirurgie plastique à Harley Street, Londres." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "@id": "https://www.cosmedocs.com/#organization", name: "Cosmedocs", url: "https://www.cosmedocs.com/fr/traitements/" },
              { "@type": "CollectionPage", "@id": "https://www.cosmedocs.com/fr/traitements/", name: "Traitements Esthétiques", inLanguage: "fr", description: "Gamme complète de traitements esthétiques à Harley Street, Londres.", isPartOf: { "@id": "https://www.cosmedocs.com/#website" } },
              { "@type": "BreadcrumbList", itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.cosmedocs.com/fr/" },
                { "@type": "ListItem", position: 2, name: "Traitements", item: "https://www.cosmedocs.com/fr/traitements/" },
              ]},
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A050]/[0.04] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A050]/[0.03] blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Fil d'Ariane">
              <Link to="/fr/" className="hover:text-[#C9A050] transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white/60">Traitements</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">L'Art Esthétique Invisible</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">Traitements</h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                Des injections de précision à la science cutanée avancée — chaque traitement chez Cosmedocs est conçu pour sublimer, jamais exagérer.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {["Depuis 2007", "Harley Street", "Dirigé par des médecins"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050]" /> {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-10">
                <Link to="/fr/tarifs/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  Guide des tarifs <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/fr/contact/" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C9A050]/50 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  Prendre rendez-vous
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link to={cat.link} className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#C9A050] transition-colors">{cat.title}</h2>
                      <p className="text-xs text-[#C9A050]/70 uppercase tracking-wider mt-1">{cat.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#C9A050] transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-white/50 font-extralight leading-relaxed mb-5">{cat.description}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#C9A050]/50 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xs text-[#C9A050] uppercase tracking-[0.2em] mb-3">Tarifs Transparents</p>
            <p className="text-2xl sm:text-3xl font-extralight text-white mb-4">Guide Complet des Tarifs</p>
            <p className="text-sm text-white/50 font-extralight max-w-xl mx-auto mb-6">Consultez notre liste de prix complète et transparente. Aucun coût caché — une médecine esthétique honnête et experte.</p>
            <Link to="/fr/tarifs/" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8903F] text-black px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
              Voir tous les tarifs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        <div className="sr-only" aria-hidden="true">
          <p>
            Cosmedocs propose une gamme complète de traitements esthétiques dans notre clinique de Harley Street à Londres. Notre portefeuille comprend des injections anti-rides à la toxine botulique, des produits de comblement dermique à l'acide hyaluronique pour les lèvres, les pommettes, la mâchoire, le menton et les cernes. Nos traitements de rajeunissement cutané incluent le Profhilo, les polynucléotides, le HydraFacial, le microneedling avec PRP et les peelings chimiques médicaux.
          </p>
        </div>
      </div>
    </>
  );
};

export default TreatmentsHubFrench;
