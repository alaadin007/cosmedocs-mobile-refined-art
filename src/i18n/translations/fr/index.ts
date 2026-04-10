import type { LanguageTranslations } from '../../types';

const fr: LanguageTranslations = {
  common: {
    navigation: {
      home: 'Accueil',
      treatments: 'Traitements',
      prices: 'Tarifs',
      about: 'À propos',
      contact: 'Contact',
      blog: 'Blog',
      beforeAfter: 'Avant & Après',
      bookAppointment: 'Prendre rendez-vous',
      askAnything: 'Posez votre question',
      search: 'Rechercher',
      menu: 'Menu',
    },
    footer: {
      followUs: 'Suivez-nous',
      quickLinks: 'Liens rapides',
      treatments: 'Traitements',
      company: 'Entreprise',
      copyright: '© 2007–2026 CosmeDocs. Tous droits réservés.',
    },
    cta: {
      bookNow: 'Réserver',
      learnMore: 'En savoir plus',
      viewGallery: 'Voir la galerie',
      contactUs: 'Nous contacter',
      callUs: 'Appelez-nous',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
    },
    breadcrumb: { home: 'Accueil' },
  },
  pages: {
    homepage: {
      slug: '',
      meta: {
        title: 'CosmeDocs | Clinique Esthétique Harley Street Londres | Depuis 2007',
        description: 'Médecine esthétique dirigée par des médecins à Harley Street depuis 2007. Botox, acide hyaluronique, rajeunissement cutané. Résultats naturels.',
        keywords: 'botox londres, acide hyaluronique londres, clinique esthétique harley street',
      },
      content: {
        heroTitle: 'Clinique esthétique à Londres pour patients francophones',
        heroSubtitle: 'Médecine esthétique dirigée par des médecins – résultats naturels depuis 2007',
        heroTagline: 'Votre destination pour des soins esthétiques sûrs et naturels à Londres',
        welcomeTitle: 'Bienvenue chez CosmeDocs',
        welcomeText: 'CosmeDocs est situé sur la célèbre Harley Street à Londres et accueille depuis 2007 des patients francophones de France, Belgique, Suisse et du monde entier. Nous sommes reconnus pour notre précision médicale, nos résultats naturels et le respect total de la vie privée de nos patients.',
        welcomeMotto: 'La vraie beauté, c\'est sublimer vos traits, pas les changer.',
        whyChooseTitle: 'Pourquoi les patients francophones choisissent CosmeDocs ?',
        whyChooseReasons: [
          'Médecins effectuent tous les traitements',
          'Depuis 2007 à Harley Street',
          'Plus d\'1 million d\'injections',
          'Spécialisés en résultats naturels',
          'Souvent moins cher qu\'en France',
          'Protection stricte de la vie privée',
        ],
      },
    },
    treatments: {
      slug: 'traitements',
      meta: {
        title: 'Traitements Esthétiques | CosmeDocs Harley Street Londres',
        description: 'Découvrez notre gamme complète de traitements esthétiques dirigés par des médecins à Harley Street Londres.',
      },
      content: {
        title: 'Traitements Esthétiques',
        subtitle: 'Découvrez notre gamme complète de soins dirigés par des médecins',
      },
    },
    botox: {
      slug: 'traitements/botox',
      meta: {
        title: 'Botox Londres | Harley Street | CosmeDocs',
        description: 'Traitements Botox spécialisés à Harley Street. Administrés par des médecins, résultats naturels. Botox esthétique et médical. Depuis 2007.',
        keywords: 'botox londres, botox harley street, traitement rides londres',
      },
      content: {
        title: 'Traitement Botox à Londres',
        subtitle: 'Résultats naturels par des médecins spécialisés à Harley Street',
        whatIs: 'Qu\'est-ce que le Botox ?',
        whatIsText: 'Le Botox est un traitement médical approuvé utilisé pour réduire les rides dynamiques en relaxant les muscles responsables de la formation des lignes. Chez CosmeDocs, nous utilisons des techniques précises pour obtenir des résultats naturels qui préservent vos expressions faciales.',
        areas: ['Rides du front', 'Rides du lion', 'Pattes d\'oie', 'Masséter', 'Lip flip'],
        benefits: ['Résultats naturels', 'Aucune éviction sociale', 'Traitement rapide', 'Par un médecin spécialiste'],
      },
    },
    dermalFillers: {
      slug: 'traitements/acide-hyaluronique',
      meta: {
        title: 'Acide Hyaluronique Londres | Harley Street | CosmeDocs',
        description: 'Injections d\'acide hyaluronique à Harley Street. Lèvres, pommettes, mâchoire, menton. Résultats naturels et équilibrés.',
      },
      content: {
        title: 'Injections d\'Acide Hyaluronique',
        subtitle: 'Restaurer le volume et l\'harmonie de manière naturelle',
      },
    },
    lipFillers: {
      slug: 'traitements/injection-levres',
      meta: {
        title: 'Injection Lèvres Londres | Résultats Naturels | CosmeDocs',
        description: 'Injections de lèvres naturelles à Harley Street. Augmentation subtile et équilibrée. Par des médecins depuis 2007.',
      },
      content: {
        title: 'Injection des Lèvres',
        subtitle: 'Sublimation naturelle et harmonieuse de vos lèvres',
      },
    },
    jawlineFiller: {
      slug: 'traitements/filler-machoire',
      meta: {
        title: 'Filler Mâchoire Londres | Harley Street | CosmeDocs',
        description: 'Traitement filler mâchoire pour un bas du visage défini et équilibré. Par des médecins à Harley Street depuis 2007.',
      },
      content: {
        title: 'Filler Mâchoire',
        subtitle: 'Définition et équilibre du bas du visage',
      },
    },
    chinFiller: {
      slug: 'traitements/filler-menton',
      meta: {
        title: 'Filler Menton Londres | Harley Street | CosmeDocs',
        description: 'Traitement filler menton pour l\'équilibre facial et le raffinement du profil. Par des médecins à Harley Street depuis 2007.',
      },
      content: {
        title: 'Filler Menton',
        subtitle: 'Équilibre facial et raffinement du profil',
      },
    },
    tearTroughFiller: {
      slug: 'traitements/cernes-creuses',
      meta: {
        title: 'Cernes Creuses Londres | Traitement Sous les Yeux | CosmeDocs',
        description: 'Traitement des cernes creuses pour réduire les cernes et les creux sous les yeux. Par des médecins à Harley Street depuis 2007.',
      },
      content: {
        title: 'Traitement des Cernes Creuses',
        subtitle: 'Réduction des cernes et des creux sous les yeux',
      },
    },
    skinRejuvenation: {
      slug: 'traitements/rajeunissement-peau',
      meta: {
        title: 'Rajeunissement Cutané Londres | Harley Street | CosmeDocs',
        description: 'Traitements avancés de rajeunissement cutané à Harley Street. Profhilo, polynucléotides, microneedling.',
      },
      content: {
        title: 'Rajeunissement Cutané',
        subtitle: 'Traitements avancés pour un éclat naturel et durable',
      },
    },
    prices: {
      slug: 'tarifs',
      meta: {
        title: 'Tarifs | CosmeDocs Harley Street Londres',
        description: 'Tarifs transparents pour tous les traitements esthétiques chez CosmeDocs Harley Street. Botox, fillers, soins de la peau.',
      },
      content: {
        title: 'Tarifs',
        subtitle: 'Tarifs transparents pour tous nos soins',
      },
    },
    contact: {
      slug: 'contact',
      meta: {
        title: 'Contact | CosmeDocs Harley Street Londres',
        description: 'Contactez CosmeDocs au 8-10 Harley Street, Londres. Réservez une consultation, appelez, WhatsApp ou écrivez-nous.',
      },
      content: {
        title: 'Contactez-nous',
        subtitle: 'Nous sommes là pour vous aider',
        address: '8-10 Harley Street, Londres W1G 9PF',
      },
    },
    about: {
      slug: 'a-propos',
      meta: {
        title: 'À Propos | CosmeDocs Harley Street Depuis 2007',
        description: 'Découvrez CosmeDocs, clinique esthétique Harley Street depuis 2007. Dirigée par des médecins, éthique médicale, résultats naturels.',
      },
      content: {
        title: 'À Propos de CosmeDocs',
        subtitle: 'Clinique esthétique dirigée par des médecins à Harley Street depuis 2007',
        heritage: 'Plus de 17 ans d\'expertise en médecine esthétique',
      },
    },
  },
};

export default fr;
