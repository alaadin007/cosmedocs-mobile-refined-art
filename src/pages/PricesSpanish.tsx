import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricesSpanish = () => {
  const canonicalUrl = 'https://www.cosmedocs.com/es/precios/';

  return (
    <>
      <Helmet>
        <title>Lista de Precios | Tratamientos Estéticos Londres | Cosmedocs</title>
        <meta name="description" content="Guía completa de precios para Botox, rellenos dérmicos, boosters cutáneos, dermatología y cirugía estética. Clínica Harley Street, Londres. Precios transparentes desde 2007." />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="Precios | Cosmedocs" />
        <meta property="og:description" content="Guía completa de precios para tratamientos estéticos en Londres" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/prices/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/prices/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/tarifs/" />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />
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
                telephone: "+442037333227",
                priceRange: "££",
                address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" },
                geo: { "@type": "GeoCoordinates", latitude: 51.5074, longitude: -0.1278 },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "156", bestRating: "5" }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.cosmedocs.com/es/" },
                  { "@type": "ListItem", position: 2, name: "Precios", item: canonicalUrl }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white py-24">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/es/" className="hover:text-[#C9A050] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white/60">Precios</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Guía de Precios</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Como inyectores altamente experimentados en Londres desde 2007, nos especializamos en administrar dosis elevadas de Botox de forma segura para una mayor duración. 
              Hemos desarrollado numerosas técnicas nuevas con rellenos dérmicos durante la última década, ahora enseñadas a profesionales internacionalmente.
            </p>
          </div>

          <Tabs defaultValue="botox" className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <TabsList className="bg-accent mb-8 p-1 flex flex-nowrap min-w-max">
                <TabsTrigger value="botox">Botox</TabsTrigger>
                <TabsTrigger value="fillers">Rellenos Dérmicos</TabsTrigger>
                <TabsTrigger value="skinBoosters">Boosters Cutáneos</TabsTrigger>
                <TabsTrigger value="surgery">Cirugía Estética</TabsTrigger>
                <TabsTrigger value="dermatology">Dermatología</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="botox" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">INYECTABLES</h2>
                <p className="text-gray-400 mb-6">Tratamientos inyectables para el rejuvenecimiento facial</p>
                {[
                  { title: "Consulta de Inyectables", price: "£50 (descontado del tratamiento)", desc: "Consulta inicial para discutir sus necesidades" },
                  { title: "Botox Facial", desc: "Frente, Entrecejo, Patas de gallo", prices: [{ n: "1 Zona", p: "£175" }, { n: "2 Zonas", p: "£275" }, { n: "3 Zonas", p: "£350" }] },
                  { title: "Botox Facial Completo Natural", price: "£500", desc: "Todas las zonas anteriores (3 zonas + parte inferior del rostro)" },
                  { title: "Botox para Migrañas", price: "£450-550" },
                  { title: "Botox para Bruxismo", price: "£350" },
                  { title: "Hiperhidrosis (Sudoración excesiva)", price: "£550" },
                  { title: "Afinamiento de Mandíbula (Masetero)", price: "£350" },
                  { title: "Barbie Botox (Reducción de hombros)", price: "£450" },
                  { title: "Reducción de Pantorrillas con Botox", price: "£750" },
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
                <h2 className="text-2xl font-bold mb-2 text-amber-400">RELLENOS DÉRMICOS</h2>
                <p className="text-gray-400 mb-6">Consulta £50 (descontado del tratamiento)</p>
                {[
                  { title: "HA Makeover (Transformación Hialurónica)", price: "Desde £800" },
                  { title: "Lifting sin Cirugía", price: "Desde £800" },
                  { title: "Relleno Surcos Nasogenianos", price: "£325/ml" },
                  { title: "Relleno de Mandíbula", price: "£350/ml", link: "/es/tratamientos/relleno-mandibula/" },
                  { title: "Relleno de Pómulos", price: "£350/ml" },
                  { title: "Relleno de Ojeras", price: "£425", link: "/es/tratamientos/ojeras/" },
                  { title: "Relleno de Mentón", price: "£350/ml", link: "/es/tratamientos/relleno-menton/" },
                  { title: "Relleno de Labios 0.5ml (Natural)", price: "£300" },
                  { title: "Relleno de Labios 1ml", price: "£350" },
                  { title: "Rinoplastia sin Cirugía", price: "£450" },
                  { title: "Relleno de Sienes", price: "£350/ml" },
                ].map((item, i) => (
                  <Card key={i} className="mb-4 bg-accent text-white border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div><h3 className="font-semibold">{item.title}</h3></div>
                        <p className="font-bold">{item.price}</p>
                      </div>
                      {item.link && (
                        <div className="mt-2 text-right">
                          <Link to={item.link}><Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">Saber más →</Button></Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skinBoosters" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-2 text-amber-400">BOOSTERS CUTÁNEOS</h2>
                <p className="text-gray-400 mb-6">Hidratación avanzada y rejuvenecimiento cutáneo</p>
                {[
                  { title: "Profhilo", price: "£350/sesión", desc: "Tratamiento bio-remodelador con ácido hialurónico" },
                  { title: "Polinucleótidos", price: "£300/sesión", desc: "Tratamiento regenerativo basado en ADN" },
                  { title: "Redensity 1", price: "£250/sesión" },
                  { title: "Jalupro", price: "£275/sesión" },
                  { title: "Sunekos", price: "£275/sesión" },
                  { title: "Microneedling", price: "£250/sesión", desc: "Terapia de inducción de colágeno" },
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
                <h2 className="text-2xl font-bold mb-2 text-amber-400">CIRUGÍA ESTÉTICA</h2>
                {[
                  { title: "Consulta Quirúrgica", price: "£150" },
                  { title: "Rinoplastia", price: "Desde £6,000" },
                  { title: "Aumento de Pecho", price: "Desde £5,500" },
                  { title: "Lifting Facial", price: "Desde £8,000" },
                  { title: "Liposucción", price: "Desde £3,500" },
                  { title: "Blefaroplastia", price: "Desde £3,000" },
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
                <h2 className="text-2xl font-bold mb-2 text-amber-400">DERMATOLOGÍA</h2>
                {[
                  { title: "Consulta Dermatológica", price: "£200" },
                  { title: "Detección de Cáncer de Piel", price: "£300" },
                  { title: "Tratamiento del Acné", price: "Desde £250" },
                  { title: "Tratamiento del Eczema", price: "Desde £200" },
                  { title: "Tratamiento de la Psoriasis", price: "Desde £250" },
                  { title: "Eliminación de Lunares", price: "Desde £150" },
                  { title: "Tratamiento Hiperpigmentación", price: "Desde £300" },
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
            <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Arte Invisible</p>
            <p className="text-2xl font-extralight mb-6">Audaz • Natural • Siempre a Tu Manera</p>
            <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C9A050] hover:bg-[#B8903F] text-black rounded-full px-8">Reserve su Consulta</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricesSpanish;
