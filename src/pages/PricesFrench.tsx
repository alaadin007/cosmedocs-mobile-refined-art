import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricesFrench = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/fr/tarifs/';

  return (
    <>
      <Helmet>
        <title>Tarifs | Traitements Esthétiques Londres | Cosmedocs</title>
        <meta name="description" content="Guide complet des tarifs Botox, acide hyaluronique, boosters cutanés, dermatologie et chirurgie esthétique. Clinique Harley Street, Londres. Tarification transparente depuis 2007." />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="Tarifs | Cosmedocs" />
        <meta property="og:description" content="Guide complet des tarifs pour les traitements esthétiques à Londres" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/prices/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/prices/" />
        <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href="https://www.cosmedocs.com/es/precios/" />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/prices/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/prices/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "@id": "https://www.cosmedocs.com/#organization",
                name: "Cosmedocs",
                url: "https://www.cosmedocs.com/",
                telephone: "+442037333227",
                priceRange: "££",
                address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
                geo: { "@type": "GeoCoordinates", latitude: 51.5074, longitude: -0.1278 },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "156", bestRating: "5" }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.cosmedocs.com/fr/" },
                  { "@type": "ListItem", position: 2, name: "Tarifs", item: canonicalUrl }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white py-24">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/fr/" className="hover:text-[#C9A050] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white/60">Tarifs</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Guide des Tarifs</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              En tant qu'injecteurs hautement expérimentés à Londres depuis 2007, nous sommes spécialisés dans l'administration sécurisée de doses élevées de Botox pour une longévité maximale. 
              Nous avons développé de nombreuses nouvelles techniques avec les fillers au cours de la dernière décennie, désormais enseignées à des professionnels du monde entier.
            </p>
          </div>

          <Tabs defaultValue="botox" className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <TabsList className="bg-accent mb-8 p-1 flex flex-nowrap min-w-max">
                <TabsTrigger value="botox">Botox</TabsTrigger>
                <TabsTrigger value="fillers">Acide Hyaluronique</TabsTrigger>
                <TabsTrigger value="skinBoosters">Boosters Cutanés</TabsTrigger>
                <TabsTrigger value="surgery">Chirurgie Esthétique</TabsTrigger>
                <TabsTrigger value="dermatology">Dermatologie</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="botox" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">INJECTABLES</h2>
                <p className="text-gray-400 mb-6">Traitements injectables pour le rajeunissement facial</p>
                {[
                  { title: "Consultation Injectable", price: "£50 (déduit du traitement)", desc: "Consultation initiale pour discuter de vos besoins" },
                  { title: "Botox Visage", desc: "Front, Glabelle, Pattes d'oie", prices: [{ n: "1 Zone", p: "£175" }, { n: "2 Zones", p: "£275" }, { n: "3 Zones", p: "£350" }] },
                  { title: "Botox Visage Complet Naturel", price: "£500", desc: "Toutes les zones ci-dessus (3 zones + bas du visage)" },
                  { title: "Botox Migraine", price: "£450-550" },
                  { title: "Botox Bruxisme (Grincement des dents)", price: "£350" },
                  { title: "Hyperhidrose (Transpiration excessive)", price: "£550" },
                  { title: "Affinement de la Mâchoire (Masséter)", price: "£350" },
                  { title: "Barbie Botox (Réduction des épaules)", price: "£450" },
                  { title: "Réduction des Mollets par Botox", price: "£750" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.desc && <p className="text-sm text-gray-400">{item.desc}</p>}
                        </div>
                        <div className="text-right">
                          {item.price && <p className="font-bold">{item.price}</p>}
                          {item.prices && item.prices.map((p, j) => (
                            <div key={j} className="flex justify-between gap-4 text-sm">
                              <span>{p.n}</span>
                              <span className="font-bold">{p.p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="fillers" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">ACIDE HYALURONIQUE</h2>
                <p className="text-gray-400 mb-6">Consultation £50 (déduit du traitement)</p>
                {[
                  { title: "HA Makeover (Relooking Hyaluronique)", price: "À partir de £800" },
                  { title: "Lifting sans Chirurgie", price: "À partir de £800" },
                  { title: "Filler Sillons Nasogéniens", price: "£325/ml" },
                  { title: "Filler Ligne de Mâchoire", price: "£350/ml", link: "/fr/traitements/filler-machoire/" },
                  { title: "Filler Pommettes", price: "£350/ml" },
                  { title: "Filler Cernes Creuses", price: "£425", link: "/fr/traitements/cernes-creuses/" },
                  { title: "Filler Menton", price: "£350/ml", link: "/fr/traitements/filler-menton/" },
                  { title: "Injection Lèvres 0.5ml (Naturel)", price: "£300" },
                  { title: "Injection Lèvres 1ml", price: "£350" },
                  { title: "Rhinoplastie Médicale", price: "£450" },
                  { title: "Filler Tempes", price: "£350/ml" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div><h3 className="font-semibold">{item.title}</h3></div>
                        <p className="font-bold">{item.price}</p>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          <Link to={item.link}><Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">En savoir plus →</Button></Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skinBoosters" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">BOOSTERS CUTANÉS</h2>
                <p className="text-gray-400 mb-6">Hydratation avancée et rajeunissement cutané</p>
                {[
                  { title: "Profhilo", price: "£350/séance", desc: "Traitement bio-remodelant à l'acide hyaluronique" },
                  { title: "Polynucléotides", price: "£300/séance", desc: "Traitement régénératif à base d'ADN" },
                  { title: "Redensity 1", price: "£250/séance" },
                  { title: "Jalupro", price: "£275/séance" },
                  { title: "Sunekos", price: "£275/séance" },
                  { title: "Microneedling", price: "£250/séance", desc: "Thérapie d'induction du collagène" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.desc && <p className="text-sm text-gray-400">{item.desc}</p>}
                        </div>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="surgery" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">CHIRURGIE ESTHÉTIQUE</h2>
                {[
                  { title: "Consultation Chirurgicale", price: "£150" },
                  { title: "Rhinoplastie", price: "À partir de £6,000" },
                  { title: "Augmentation Mammaire", price: "À partir de £5,500" },
                  { title: "Lifting du Visage", price: "À partir de £8,000" },
                  { title: "Liposuccion", price: "À partir de £3,500" },
                  { title: "Blépharoplastie", price: "À partir de £3,000" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="dermatology" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">DERMATOLOGIE</h2>
                {[
                  { title: "Consultation Dermatologique", price: "£200" },
                  { title: "Dépistage Cancer de la Peau", price: "£300" },
                  { title: "Traitement de l'Acné", price: "À partir de £250" },
                  { title: "Traitement de l'Eczéma", price: "À partir de £200" },
                  { title: "Traitement du Psoriasis", price: "À partir de £250" },
                  { title: "Ablation Grains de Beauté", price: "À partir de £150" },
                  { title: "Traitement Hyperpigmentation", price: "À partir de £300" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="font-bold">{item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">L'art Invisible</p>
            <p className="text-2xl font-extralight mb-6">Audacieux • Naturel • Toujours à Votre Image</p>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C9A050] hover:bg-[#B8903F] text-black rounded-full px-8">Réservez votre Consultation</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricesFrench;
