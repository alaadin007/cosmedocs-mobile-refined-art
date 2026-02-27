import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, MapPin, Clock, Star, Plane, Euro, Shield, Heart } from "lucide-react";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";

// Import images
import transformationBefore from "@/assets/france/transformation-before.jpg";
import transformationAfterMild from "@/assets/france/transformation-after-mild.jpg";
import transformation1Year from "@/assets/france/transformation-1year.jpg";
import transformationCloseup from "@/assets/france/transformation-closeup.jpg";
import clientsFriends from "@/assets/france/clients-friends.jpg";
import naturalBeautification from "@/assets/france/natural-beautification.jpg";
import complicationsFix from "@/assets/france/complications-fix.jpg";
import noseMasterclass from "@/assets/france/nose-masterclass.jpg";
import cosmelipsFix from "@/assets/france/cosmelips-fix.jpg";

const BotoxParis = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Cosmedocs - Clinique Esthétique Londres",
    "description": "Clinique spécialisée en injections esthétiques à Londres pour les patients français. Botox, fillers, acide hyaluronique par des médecins experts.",
    "url": "https://www.cosmedocs.com/botox-paris",
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
    "availableLanguage": ["English", "French"]
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Botox Paris & Fillers Paris | Injections Esthétiques à Londres | Cosmedocs</title>
        <meta name="description" content="Clinique injectable spécialisée à Londres pour patients français. Botox, fillers, acide hyaluronique à prix compétitifs. Harley Street depuis 2007. Plus d'1 million d'injections." />
        <meta name="keywords" content="botox paris, fillers paris, injections esthétiques paris, acide hyaluronique paris, botox londres, clinique esthétique londres, médecin esthétique londres, botox harley street, fillers londres français, rhinoplastie médicale paris, lèvres paris, menton paris" />
        <link rel="canonical" href="https://www.cosmedocs.com/botox-paris/" />
        <meta property="og:title" content="Botox Paris & Fillers Paris | Clinique Injectable Londres" />
        <meta property="og:description" content="Clinique injectable spécialisée à Londres pour patients français. Prix compétitifs, résultats naturels, expertise depuis 2007." />
        <meta property="og:url" content="https://www.cosmedocs.com/botox-paris/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
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
                🇫🇷 Bienvenue aux Patients Français
              </span>
              <h1 className="text-4xl md:text-6xl font-light mb-6">
                <span className="text-amber-400">Botox Paris</span> & Fillers Paris
                <br />
                <span className="text-2xl md:text-3xl text-gray-300">Votre Clinique Injectable à Londres</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Découvrez pourquoi des milliers de Français choisissent Londres pour leurs traitements esthétiques. 
                Expertise incomparable, prix compétitifs, résultats naturels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                  <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                    Réserver une Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <a href="https://wa.me/447725701796" target="_blank" rel="noopener noreferrer">
                    WhatsApp en Français
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
                Pourquoi les Français Choisissent <span className="text-amber-400">Londres</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                La réglementation française limite considérablement l'accès aux traitements injectables purement esthétiques
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Cliniques Injectables Spécialisées",
                  desc: "En France, les cliniques purement injectables n'existent pratiquement pas en raison des réglementations strictes. À Londres, nous sommes 100% spécialisés."
                },
                {
                  icon: Euro,
                  title: "Prix Plus Compétitifs",
                  desc: "Les tarifs en France sont souvent 40-60% plus élevés qu'à Londres. Économisez tout en bénéficiant d'une expertise supérieure."
                },
                {
                  icon: Plane,
                  title: "2h15 de Paris",
                  desc: "L'Eurostar vous dépose au cœur de Londres. Traitement le matin, retour à Paris le soir même. Simple comme bonjour."
                },
                {
                  icon: Clock,
                  title: "Traitements Express",
                  desc: "Nos experts réalisent des traitements complets en 15-20 minutes. Combinez plusieurs zones en une seule séance efficace."
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
                  <span className="text-amber-400">Cosmedocs</span> : L'Excellence à Harley Street
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Depuis 2007, Cosmedocs s'est imposée comme la référence londonienne en médecine esthétique injectable. 
                  Avec plus d'un million d'injections réalisées, notre équipe de médecins experts maîtrise l'art subtil 
                  de l'embellissement naturel.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Notre philosophie ? <em className="text-amber-400">"Our aesthetics is invisible art"</em> — 
                  Un art invisible. Des résultats visibles. Nous croyons en la beauté discrète, 
                  celle qui sublime sans transformer, qui rajeunit sans caricaturer.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Plus d'1 million d'injections",
                    "Harley Street depuis 2007",
                    "Équipe 100% médicale",
                    "Résultats naturels garantis"
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
                  alt="Nos clients deviennent nos amis - Cosmedocs Londres"
                  className="rounded-2xl w-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-amber-400 font-medium flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Nos clients deviennent nos amis
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
                Le Parcours d'une <span className="text-amber-400">Transformation Naturelle</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Suivez l'évolution d'une patiente sur 12 mois : de la première consultation à la beauté sublimée
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: transformationBefore, title: "Avant", desc: "Consultation initiale - Analyse personnalisée du visage" },
                { img: transformationAfterMild, title: "Après 1ère Séance", desc: "HA Makeover léger - Résultat naturel immédiat" },
                { img: transformation1Year, title: "Après 1 An", desc: "2 séances de HA Makeover + Skin Rejuvenation" },
                { img: transformationCloseup, title: "Gros Plan", desc: "Qualité de peau transformée, traits affinés" }
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
                      <span className="text-amber-400 text-sm font-medium">Étape {index + 1}</span>
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
                  Botox Paris et Fillers Paris : Pourquoi Traverser la Manche ?
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Si vous recherchez des <strong className="text-amber-400">injections de botox à Paris</strong> ou des 
                  <strong className="text-amber-400"> fillers à Paris</strong>, vous avez probablement constaté que les options 
                  sont limitées et coûteuses. La réglementation française impose des contraintes strictes sur la pratique 
                  de la médecine esthétique, rendant les cliniques purement injectables pratiquement inexistantes dans l'Hexagone.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  À Londres, la situation est radicalement différente. Les cliniques spécialisées comme Cosmedocs peuvent 
                  se consacrer exclusivement aux traitements injectables, développant une expertise inégalée. Nos médecins 
                  pratiquent des injections toute la journée, chaque jour — une spécialisation qui se traduit par une 
                  maîtrise technique supérieure et des résultats plus naturels.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  L'Acide Hyaluronique : Notre Spécialité
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  L'<strong className="text-amber-400">acide hyaluronique</strong> (HA) est notre passion. Nos médecins 
                  experts réalisent des "HA Makeovers" — des transformations complètes du visage utilisant exclusivement 
                  des fillers à base d'acide hyaluronique. En 15 à 20 minutes, nous pouvons traiter plusieurs zones : 
                  lèvres, pommettes, menton, mâchoire, pour un résultat harmonieux et naturel.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Contrairement aux approches fragmentées où chaque zone est traitée séparément lors de rendez-vous différents, 
                  notre méthode holistique considère le visage dans sa globalité. Le résultat ? Une harmonie faciale 
                  que les traitements isolés ne peuvent atteindre. Nos patients français sont souvent surpris par 
                  l'efficacité et la rapidité de nos séances.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Le Botox à Londres : Excellence et Précision
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Le <strong className="text-amber-400">botox</strong> (toxine botulique) reste le traitement anti-âge 
                  le plus populaire au monde, et pour cause. Entre des mains expertes, il permet de lisser les rides 
                  du front, les pattes d'oie et les rides du lion tout en préservant l'expressivité naturelle du visage.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Chez Cosmedocs, nous pratiquons également le "Baby Botox" — des microdoses stratégiquement placées 
                  pour un effet rafraîchissant subtil, idéal pour les patients qui découvrent le botox ou qui préfèrent 
                  une approche très naturelle. Cette technique est particulièrement appréciée de notre clientèle française, 
                  connue pour son goût du naturel et de l'élégance discrète.
                </p>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Nos Traitements les Plus Demandés par les Patients Français
                </h3>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  {[
                    "Augmentation des lèvres (Lip Filler)",
                    "Définition de la mâchoire (Jawline)",
                    "Rhinoplastie médicale (Nose Filler)",
                    "Pommettes et joues (Cheek Filler)",
                    "Botox front et rides d'expression",
                    "Cernes et vallée des larmes",
                    "Profil harmonisation complète",
                    "Skin Boosters et mésothérapie"
                  ].map((treatment, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{treatment}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-light text-white mt-12 mb-6">
                  Comparaison des Prix : Paris vs Londres
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Les tarifs des injections esthétiques en France sont parmi les plus élevés d'Europe. Une seringue 
                  de filler à Paris peut coûter entre 400€ et 800€, tandis qu'à Londres, des cliniques de qualité 
                  équivalente proposent des tarifs 30 à 50% inférieurs. Ajoutez le coût d'un billet Eurostar 
                  (souvent moins de 100€ aller-retour en réservant à l'avance), et l'économie devient significative.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Mais au-delà des économies, c'est la qualité de l'expérience qui fait la différence. Nos patients 
                  français apprécient la flexibilité des rendez-vous, l'absence de délais d'attente de plusieurs mois, 
                  et la possibilité de combiner plusieurs traitements en une seule visite.
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
                  alt="Embellissement naturel avant après - Cosmedocs"
                  className="rounded-2xl w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-amber-400 text-sm font-medium">Cas Clinique</span>
                <h2 className="text-3xl font-light text-white mt-2 mb-6">
                  Embellissement Naturel : L'Art de la Subtilité
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Cette patiente souhaitait retrouver du volume et de la définition sans que son entourage ne remarque 
                  qu'elle avait eu des injections. Grâce à notre approche "invisible art", nous avons travaillé sur 
                  l'harmonie globale du visage : pommettes, menton et contour de la mâchoire.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Le résultat ? Un visage plus reposé, des traits plus définis, mais toujours authentiquement elle. 
                  C'est précisément cette subtilité que nos patients français recherchent — et c'est notre spécialité.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Showcase - Complications & Masterclasses */}
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
                Notre <span className="text-amber-400">Expertise Reconnue</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nous formons d'autres médecins et corrigeons les complications — un niveau d'expertise rare
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
                  <img src={complicationsFix} alt="Correction de complications - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Correction de Complications</h3>
                    <p className="text-gray-400 text-sm">
                      Des patients nous consultent de toute l'Europe pour corriger des traitements mal réalisés. 
                      Notre expertise permet de dissoudre, remodeler et restaurer des résultats naturels.
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
                  <img src={noseMasterclass} alt="Masterclass rhinoplastie médicale - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Masterclasses Rhinoplastie</h3>
                    <p className="text-gray-400 text-sm">
                      Nous enseignons et performons des rhinoplasties médicales (nose filler) au plus haut niveau. 
                      Des médecins du monde entier viennent apprendre nos techniques avancées.
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
                  <img src={cosmelipsFix} alt="Cosmelips correction lèvres - Cosmedocs" className="w-full aspect-square object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Cosmelips : L'Art des Lèvres</h3>
                    <p className="text-gray-400 text-sm">
                      Des lèvres surgonflées ? Mal proportionnées ? Nous dissolvons le travail des autres 
                      et recréons des lèvres naturellement belles. C'est notre signature artistique.
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
                  Informations <span className="text-amber-400">Pratiques</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <MapPin className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Notre Adresse</h3>
                    <p className="text-gray-300 mb-2">60 Harley Street</p>
                    <p className="text-gray-300 mb-2">London W1G 7HA</p>
                    <p className="text-gray-400 text-sm">
                      À 5 minutes de la station Oxford Circus — accessible en taxi depuis St Pancras Eurostar
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Horaires</h3>
                    <p className="text-gray-300 mb-2">Lundi - Vendredi : 9h - 18h</p>
                    <p className="text-gray-300 mb-2">Samedi : 10h - 16h</p>
                    <p className="text-gray-400 text-sm">
                      Rendez-vous tôt le matin disponibles pour les patients Eurostar
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
                  Nous parlons français et sommes habitués à accueillir des patients internationaux. 
                  Notre équipe vous assistera pour planifier votre visite de manière optimale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                    <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                      Réserver Maintenant
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
                Prêt(e) à Découvrir <span className="text-amber-400">l'Excellence Londonienne</span> ?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Rejoignez les milliers de patients français qui ont choisi Cosmedocs pour leurs traitements esthétiques. 
                Consultation gratuite, résultats naturels, expertise incomparable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-6 text-lg">
                  <a href="https://cosmedocs.as.me/" target="_blank" rel="noopener noreferrer">
                    Réserver une Consultation Gratuite
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

export default BotoxParis;
