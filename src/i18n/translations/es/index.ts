import type { LanguageTranslations } from '../../types';

const es: LanguageTranslations = {
  common: {
    navigation: {
      home: 'Inicio',
      treatments: 'Tratamientos',
      prices: 'Precios',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      blog: 'Blog',
      beforeAfter: 'Antes y Después',
      bookAppointment: 'Reservar cita',
      askAnything: 'Pregunta lo que quieras',
      search: 'Buscar',
      menu: 'Menú',
    },
    footer: {
      followUs: 'Síguenos',
      quickLinks: 'Enlaces rápidos',
      treatments: 'Tratamientos',
      company: 'Empresa',
      copyright: '© 2007–2026 CosmeDocs. Todos los derechos reservados.',
    },
    cta: {
      bookNow: 'Reservar',
      learnMore: 'Más información',
      viewGallery: 'Ver galería',
      contactUs: 'Contáctanos',
      callUs: 'Llámanos',
      whatsapp: 'WhatsApp',
      email: 'Correo electrónico',
    },
    breadcrumb: { home: 'Inicio' },
  },
  pages: {
    homepage: {
      slug: '',
      meta: {
        title: 'CosmeDocs | Clínica Estética Harley Street Londres | Desde 2007',
        description: 'Medicina estética dirigida por médicos en Harley Street desde 2007. Bótox, ácido hialurónico, rejuvenecimiento cutáneo. Resultados naturales.',
        keywords: 'botox londres, ácido hialurónico londres, clínica estética harley street',
      },
      content: {
        heroTitle: 'Clínica estética en Londres para pacientes hispanohablantes',
        heroSubtitle: 'Medicina estética dirigida por médicos – resultados naturales desde 2007',
        heroTagline: 'Su destino para tratamientos estéticos seguros y naturales en Londres',
        welcomeTitle: 'Bienvenido a CosmeDocs',
        welcomeText: 'CosmeDocs está ubicado en la famosa Harley Street de Londres y desde 2007 recibe pacientes hispanohablantes de España, Latinoamérica y todo el mundo. Somos reconocidos por nuestra precisión médica, resultados naturales y el respeto total a la privacidad del paciente.',
        welcomeMotto: 'La verdadera belleza es realzar tus rasgos, no cambiarlos.',
        whyChooseTitle: '¿Por qué los pacientes hispanohablantes eligen CosmeDocs?',
        whyChooseReasons: [
          'Todos los tratamientos realizados por médicos',
          'En Harley Street desde 2007',
          'Más de 1 millón de inyecciones',
          'Especializados en resultados naturales',
          'A menudo más económico que en España',
          'Estricta protección de la privacidad',
        ],
      },
    },
    treatments: {
      slug: 'tratamientos',
      meta: {
        title: 'Tratamientos Estéticos | CosmeDocs Harley Street Londres',
        description: 'Descubra nuestra gama completa de tratamientos estéticos dirigidos por médicos en Harley Street Londres.',
      },
      content: {
        title: 'Tratamientos Estéticos',
        subtitle: 'Descubra nuestra gama completa de tratamientos dirigidos por médicos',
      },
    },
    botox: {
      slug: 'tratamientos/botox',
      meta: {
        title: 'Bótox Londres | Harley Street | CosmeDocs',
        description: 'Tratamientos de Bótox especializados en Harley Street. Administrados por médicos, resultados naturales. Bótox estético y médico. Desde 2007.',
        keywords: 'botox londres, botox harley street, tratamiento arrugas londres',
      },
      content: {
        title: 'Tratamiento de Bótox en Londres',
        subtitle: 'Resultados naturales por médicos especializados en Harley Street',
        whatIs: '¿Qué es el Bótox?',
        whatIsText: 'El Bótox es un tratamiento médico aprobado utilizado para reducir las arrugas dinámicas relajando los músculos responsables de la formación de líneas. En CosmeDocs, utilizamos técnicas precisas para obtener resultados naturales que preservan sus expresiones faciales.',
        areas: ['Líneas de la frente', 'Entrecejo', 'Patas de gallo', 'Masetero', 'Lip flip'],
        benefits: ['Resultados naturales', 'Sin tiempo de inactividad', 'Tratamiento rápido', 'Por un médico especialista'],
      },
    },
    dermalFillers: {
      slug: 'tratamientos/acido-hialuronico',
      meta: {
        title: 'Ácido Hialurónico Londres | Harley Street | CosmeDocs',
        description: 'Inyecciones de ácido hialurónico en Harley Street. Labios, pómulos, mandíbula, mentón. Resultados naturales y equilibrados.',
      },
      content: {
        title: 'Inyecciones de Ácido Hialurónico',
        subtitle: 'Restaurar el volumen y la armonía de forma natural',
      },
    },
    lipFillers: {
      slug: 'tratamientos/relleno-labios',
      meta: {
        title: 'Relleno de Labios Londres | Resultados Naturales | CosmeDocs',
        description: 'Relleno de labios natural en Harley Street. Aumento sutil y equilibrado. Por médicos desde 2007.',
      },
      content: {
        title: 'Relleno de Labios',
        subtitle: 'Mejora natural y armoniosa de sus labios',
      },
    },
    jawlineFiller: {
      slug: 'tratamientos/relleno-mandibula',
      meta: {
        title: 'Relleno Mandíbula Londres | Harley Street | CosmeDocs',
        description: 'Tratamiento de relleno de mandíbula para un tercio inferior del rostro definido y equilibrado. Por médicos en Harley Street desde 2007.',
      },
      content: {
        title: 'Relleno de Mandíbula',
        subtitle: 'Definición y equilibrio del tercio inferior del rostro',
      },
    },
    chinFiller: {
      slug: 'tratamientos/relleno-menton',
      meta: {
        title: 'Relleno Mentón Londres | Harley Street | CosmeDocs',
        description: 'Tratamiento de relleno de mentón para el equilibrio facial y refinamiento del perfil. Por médicos en Harley Street desde 2007.',
      },
      content: {
        title: 'Relleno de Mentón',
        subtitle: 'Equilibrio facial y refinamiento del perfil',
      },
    },
    tearTroughFiller: {
      slug: 'tratamientos/ojeras',
      meta: {
        title: 'Ojeras Londres | Tratamiento Bajo los Ojos | CosmeDocs',
        description: 'Tratamiento de ojeras para reducir las ojeras y los huecos bajo los ojos. Por médicos en Harley Street desde 2007.',
      },
      content: {
        title: 'Tratamiento de Ojeras',
        subtitle: 'Reducción de ojeras y huecos bajo los ojos',
      },
    },
    skinRejuvenation: {
      slug: 'tratamientos/rejuvenecimiento-piel',
      meta: {
        title: 'Rejuvenecimiento Cutáneo Londres | Harley Street | CosmeDocs',
        description: 'Tratamientos avanzados de rejuvenecimiento cutáneo en Harley Street. Profhilo, polinucleótidos, microneedling.',
      },
      content: {
        title: 'Rejuvenecimiento Cutáneo',
        subtitle: 'Tratamientos avanzados para un brillo natural y duradero',
      },
    },
    prices: {
      slug: 'precios',
      meta: {
        title: 'Precios | CosmeDocs Harley Street Londres',
        description: 'Precios transparentes para todos los tratamientos estéticos en CosmeDocs Harley Street. Bótox, rellenos, tratamientos de piel.',
      },
      content: {
        title: 'Precios',
        subtitle: 'Precios transparentes para todos nuestros tratamientos',
      },
    },
    contact: {
      slug: 'contacto',
      meta: {
        title: 'Contacto | CosmeDocs Harley Street Londres',
        description: 'Contacte con CosmeDocs en 8-10 Harley Street, Londres. Reserve una consulta, llame, WhatsApp o escríbanos.',
      },
      content: {
        title: 'Contáctenos',
        subtitle: 'Estamos aquí para ayudarle',
        address: '8-10 Harley Street, Londres W1G 9PF',
      },
    },
    about: {
      slug: 'sobre-nosotros',
      meta: {
        title: 'Sobre Nosotros | CosmeDocs Harley Street Desde 2007',
        description: 'Conozca CosmeDocs, clínica estética Harley Street desde 2007. Dirigida por médicos, ética médica, resultados naturales.',
      },
      content: {
        title: 'Sobre CosmeDocs',
        subtitle: 'Clínica estética dirigida por médicos en Harley Street desde 2007',
        heritage: 'Más de 17 años de experiencia en medicina estética',
      },
    },
  },
};

export default es;
