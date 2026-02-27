import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, MapPin, Clock, Star, Plane, Euro, Shield, Heart } from "lucide-react";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";

// Import images
import transformationBefore from "@/assets/germany/transformation-before.jpg";
import transformationAfterMild from "@/assets/germany/transformation-after-mild.jpg";
import transformation1Year from "@/assets/germany/transformation-1year.jpg";
import transformationCloseup from "@/assets/germany/transformation-closeup.jpg";
import clientsFriends from "@/assets/germany/clients-friends.jpg";
import naturalBeautification from "@/assets/germany/natural-beautification.jpg";
import complicationsFix from "@/assets/germany/complications-fix.jpg";
import noseMasterclass from "@/assets/germany/nose-masterclass.jpg";
import cosmelipsFix from "@/assets/germany/cosmelips-fix.jpg";

const BotoxBerlin = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs - Ästhetische Klinik London",
    "description": "Spezialisierte Klinik für ästhetische Injektionen in London für deutsche Patienten. Botox, Filler, Hyaluronsäure von erfahrenen Ärzten.",
    "url": "https://www.cosmedocs.com/botox-berlin",
    "telephone": "+44 207 436 4441",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "60 Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 7HA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5188,
      "longitude": -0.1476
    },
    "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    "priceRange": "££",
    "availableLanguage": ["English", "German"]
  };

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Botox Berlin & Filler Berlin | Ästhetische Injektionen in London | Cosmedocs</title>
        <meta name="description" content="Spezialisierte Injektionsklinik in London für deutsche Patienten. Botox, Filler, Hyaluronsäure zu wettbewerbsfähigen Preisen. Harley Street seit 2007. Über 1 Million Injektionen." />
        <meta name="keywords" content="botox berlin, filler berlin, ästhetische injektionen berlin, hyaluronsäure berlin, botox london, ästhetische klinik london, schönheitsarzt london, botox harley street, filler london deutsch, nasenkorrektur ohne op berlin, lippen berlin, kinn berlin" />
        <link rel="canonical" href="https://www.cosmedocs.com/botox-berlin/" />
        <meta property="og:title" content="Botox Berlin & Filler Berlin | Injektionsklinik London" />
        <meta property="og:description" content="Spezialisierte Injektionsklinik in London für deutsche Patienten. Wettbewerbsfähige Preise, natürliche Ergebnisse, Expertise seit 2007." />
        <meta property="og:url" content="https://www.cosmedocs.com/botox-berlin/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Home2Header />

      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
                🇩🇪 Willkommen, deutsche Patienten
              </span>
              <h1 className="text-4xl md:text-6xl font-light mb-6">
                <span className="text-amber-400">Botox Berlin</span> & Filler Berlin
                <br />
                <span className="text-2xl md:text-3xl text-gray-300">Ihre Injektionsklinik in London</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Entdecken Sie, warum Tausende Deutsche London für ihre ästhetischen Behandlungen wählen. 
                Unvergleichliche Expertise, wettbewerbsfähige Preise, natürliche Ergebnisse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                  <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                    Beratung Buchen
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <a href="https://wa.me/447725701796" target="_blank" rel="noopener noreferrer">
                    WhatsApp auf Deutsch
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why London Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Warum Deutsche <span className="text-amber-400">London</span> wählen
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Die deutsche Regulierung macht ästhetische Behandlungen komplizierter und teurer als nötig
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Spezialisierte Injektionskliniken",
                  desc: "In Deutschland sind reine Injektionskliniken selten. In London sind wir 100% auf ästhetische Injektionen spezialisiert."
                },
                {
                  icon: Euro,
                  title: "Wettbewerbsfähige Preise",
                  desc: "Die Preise in Deutschland sind oft 30-50% höher als in London. Sparen Sie und profitieren Sie von überlegener Expertise."
                },
                {
                  icon: Plane,
                  title: "1,5 Stunden von Berlin",
                  desc: "Direktflug nach London. Behandlung am Morgen, am selben Abend wieder zu Hause. Einfacher geht es nicht."
                },
                {
                  icon: Clock,
                  title: "Express-Behandlungen",
                  desc: "Unsere Experten führen vollständige Behandlungen in 15-20 Minuten durch. Kombinieren Sie mehrere Zonen in einer effizienten Sitzung."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <item.icon className="w-10 h-10 text-amber-400 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Cosmedocs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  <span className="text-amber-400">Cosmedocs</span>: Exzellenz in der Harley Street
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Seit 2007 hat sich Cosmedocs als Londons führende Referenz für ästhetische Injektionsmedizin etabliert. 
                  Mit über einer Million durchgeführten Injektionen beherrscht unser Team von Fachärzten die subtile Kunst 
                  der natürlichen Verschönerung.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Unsere Philosophie? <em className="text-amber-400">"Our aesthetics is invisible art"</em> — 
                  Unsichtbare Kunst. Sichtbare Ergebnisse. Wir glauben an diskrete Schönheit, 
                  die verfeinert ohne zu verändern, die verjüngt ohne zu karikieren.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Über 1 Million Injektionen",
                    "Harley Street seit 2007",
                    "100% medizinisches Team",
                    "Garantiert natürliche Ergebnisse"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={clientsFriends}
                  alt="Unsere Kunden werden zu Freunden - Cosmedocs London"
                  className="rounded-2xl w-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-amber-400 font-medium flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Unsere Kunden werden zu Freunden
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformation Journey Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Der Weg einer <span className="text-amber-400">natürlichen Transformation</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Verfolgen Sie die Entwicklung einer Patientin über 12 Monate: von der ersten Beratung bis zur verfeinerten Schönheit
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: transformationBefore, title: "Vorher", desc: "Erstberatung - Personalisierte Gesichtsanalyse" },
                { img: transformationAfterMild, title: "Nach 1. Sitzung", desc: "Leichtes HA Makeover - Sofort natürliches Ergebnis" },
                { img: transformation1Year, title: "Nach 1 Jahr", desc: "2 HA Makeover Sitzungen + Hautverjüngung" },
                { img: transformationCloseup, title: "Nahaufnahme", desc: "Verwandelte Hautqualität, verfeinerte Züge" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors">
                    <img src={item.img} alt={item.title} className="w-full aspect-[4/5] object-cover" />
                    <CardContent className="p-4">
                      <span className="text-amber-400 text-sm font-medium">Schritt {index + 1}</span>
                      <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Content Section - Main SEO Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-amber">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-light text-white mb-8">
                  Botox Berlin und Filler Berlin: Warum nach London reisen?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Wenn Sie nach <strong className="text-amber-400">Botox in Berlin</strong> oder 
                  <strong className="text-amber-400"> Fillern in Berlin</strong> suchen, haben Sie wahrscheinlich festgestellt, 
                  dass die Optionen begrenzt und teuer sind. Die deutschen Vorschriften machen ästhetische Behandlungen 
                  komplizierter, und reine Injektionskliniken sind in Deutschland selten zu finden.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  In London ist die Situation völlig anders. Spezialisierte Kliniken wie Cosmedocs können sich 
                  ausschließlich auf Injektionsbehandlungen konzentrieren und entwickeln eine unübertroffene Expertise. 
                  Unsere Ärzte führen den ganzen Tag, jeden Tag Injektionen durch — eine Spezialisierung, die sich in 
                  überlegener technischer Beherrschung und natürlicheren Ergebnissen niederschlägt.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Hyaluronsäure: Unsere Spezialität
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  <strong className="text-amber-400">Hyaluronsäure</strong> (HA) ist unsere Leidenschaft. Unsere 
                  Fachärzte führen "HA Makeovers" durch — komplette Gesichtstransformationen ausschließlich mit 
                  Hyaluronsäure-Fillern. In 15 bis 20 Minuten können wir mehrere Bereiche behandeln: 
                  Lippen, Wangenknochen, Kinn, Kieferlinie, für ein harmonisches und natürliches Ergebnis.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Im Gegensatz zu fragmentierten Ansätzen, bei denen jeder Bereich separat bei verschiedenen Terminen 
                  behandelt wird, betrachtet unsere ganzheitliche Methode das Gesicht in seiner Gesamtheit. 
                  Das Ergebnis? Eine Gesichtsharmonie, die isolierte Behandlungen nicht erreichen können. 
                  Unsere deutschen Patienten sind oft überrascht von der Effizienz und Schnelligkeit unserer Sitzungen.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Botox in London: Exzellenz und Präzision
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  <strong className="text-amber-400">Botox</strong> (Botulinumtoxin) bleibt die weltweit beliebteste 
                  Anti-Aging-Behandlung, und das aus gutem Grund. In erfahrenen Händen ermöglicht es, Stirnfalten, 
                  Krähenfüße und Zornesfalten zu glätten, während die natürliche Ausdrucksfähigkeit des Gesichts erhalten bleibt.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Bei Cosmedocs praktizieren wir auch "Baby Botox" — strategisch platzierte Mikrodosen für einen 
                  subtilen erfrischenden Effekt, ideal für Patienten, die Botox entdecken oder einen sehr natürlichen 
                  Ansatz bevorzugen. Diese Technik wird besonders von unserer deutschen Klientel geschätzt, 
                  die für ihren Sinn für Natürlichkeit und diskrete Eleganz bekannt ist.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Unsere beliebtesten Behandlungen bei deutschen Patienten
                </h3>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  {[
                    "Lippenaufspritzung (Lip Filler)",
                    "Kieferliniendefinition (Jawline)",
                    "Nasenkorrektur ohne OP (Nose Filler)",
                    "Wangenknochen & Wangen (Cheek Filler)",
                    "Botox Stirn und Mimikfalten",
                    "Augenringe und Tränensäcke",
                    "Komplette Profilharmonisierung",
                    "Skin Booster und Mesotherapie"
                  ].map((treatment, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{treatment}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Preisvergleich: Berlin vs London
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Die Preise für ästhetische Injektionen in Deutschland gehören zu den höchsten in Europa. Eine Spritze 
                  Filler in Berlin kann zwischen 400€ und 700€ kosten, während in London Kliniken vergleichbarer Qualität 
                  30 bis 50% niedrigere Preise anbieten. Addieren Sie die Kosten für einen Flug 
                  (oft weniger als 80€ Hin- und Rückflug bei früher Buchung), und die Ersparnis wird erheblich.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Aber über die Ersparnisse hinaus macht die Qualität der Erfahrung den Unterschied. Unsere deutschen 
                  Patienten schätzen die Flexibilität der Termine, das Fehlen monatelanger Wartezeiten und die 
                  Möglichkeit, mehrere Behandlungen in einem einzigen Besuch zu kombinieren.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Natural Beautification Case */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={naturalBeautification}
                  alt="Natürliche Verschönerung vorher nachher - Cosmedocs"
                  className="rounded-2xl w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-medium">Fallstudie</span>
                <h2 className="text-3xl font-light text-white mt-2 mb-6">
                  Natürliche Verschönerung: Die Kunst der Subtilität
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Diese Patientin wünschte sich mehr Volumen und Definition, ohne dass ihr Umfeld bemerkt, 
                  dass sie Injektionen hatte. Dank unseres "invisible art" Ansatzes arbeiteten wir an der 
                  Gesamtharmonie des Gesichts: Wangenknochen, Kinn und Kieferlinie.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Das Ergebnis? Ein erholter wirkendes Gesicht, definiertere Züge, aber immer noch authentisch sie selbst. 
                  Genau diese Subtilität suchen unsere deutschen Patienten — und das ist unsere Spezialität.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Unsere <span className="text-amber-400">anerkannte Expertise</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Wir bilden andere Ärzte aus und korrigieren Komplikationen — ein seltenes Niveau an Expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <img src={complicationsFix} alt="Komplikationskorrektur - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Komplikationskorrektur</h3>
                    <p className="text-gray-400 text-sm">
                      Patienten konsultieren uns aus ganz Europa, um schlecht durchgeführte Behandlungen zu korrigieren. 
                      Unsere Expertise ermöglicht es, aufzulösen, umzuformen und natürliche Ergebnisse wiederherzustellen.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <img src={noseMasterclass} alt="Masterclass Nasenkorrektur - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Masterclasses Nasenkorrektur</h3>
                    <p className="text-gray-400 text-sm">
                      Wir lehren und führen medizinische Nasenkorrekturen (Nose Filler) auf höchstem Niveau durch. 
                      Ärzte aus aller Welt kommen, um unsere fortgeschrittenen Techniken zu erlernen.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full">
                  <img src={cosmelipsFix} alt="Cosmelips Lippenkorrektur - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Cosmelips: Die Kunst der Lippen</h3>
                    <p className="text-gray-400 text-sm">
                      Überfüllte Lippen? Falsch proportioniert? Wir lösen die Arbeit anderer auf 
                      und erschaffen natürlich schöne Lippen neu. Das ist unsere künstlerische Signatur.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Praktische <span className="text-amber-400">Informationen</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <MapPin className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Unsere Adresse</h3>
                    <p className="text-gray-300 mb-2">60 Harley Street</p>
                    <p className="text-gray-300 mb-2">London W1G 7HA</p>
                    <p className="text-gray-400 text-sm">
                      5 Minuten von der Station Oxford Circus — mit dem Taxi vom Flughafen erreichbar
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Öffnungszeiten</h3>
                    <p className="text-gray-300 mb-2">Montag - Freitag: 9:00 - 18:00</p>
                    <p className="text-gray-300 mb-2">Samstag: 10:00 - 16:00</p>
                    <p className="text-gray-400 text-sm">
                      Frühe Morgentermine für Flugpatienten verfügbar
                    </p>
                  </CardContent>
                </Card>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <p className="text-gray-300 mb-6">
                  Wir sind es gewohnt, internationale Patienten zu empfangen. 
                  Unser Team hilft Ihnen, Ihren Besuch optimal zu planen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                    <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                      Jetzt Buchen
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <a href="tel:+442074364441">
                      +44 207 436 4441
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Bereit, <span className="text-amber-400">Londons Exzellenz</span> zu entdecken?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Schließen Sie sich den Tausenden deutschen Patienten an, die Cosmedocs für ihre ästhetischen Behandlungen gewählt haben. 
                Kostenlose Beratung, natürliche Ergebnisse, unvergleichliche Expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg">
                  <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                    Kostenlose Beratung Buchen
                  </a>
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                Bold • Natural • Always Your Way
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BotoxBerlin;
