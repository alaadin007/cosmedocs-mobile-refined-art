import type { LanguageTranslations } from '../../types';

const ar: LanguageTranslations = {
  common: {
    navigation: {
      home: 'الرئيسية',
      treatments: 'العلاجات',
      prices: 'الأسعار',
      about: 'من نحن',
      contact: 'اتصل بنا',
      blog: 'المدونة',
      beforeAfter: 'قبل وبعد',
      bookAppointment: 'حجز موعد',
      askAnything: 'اسأل أي شيء',
      search: 'بحث',
      menu: 'القائمة',
    },
    footer: {
      followUs: 'تابعونا',
      quickLinks: 'روابط سريعة',
      treatments: 'العلاجات',
      company: 'الشركة',
      copyright: '© 2007–2026 CosmeDocs. جميع الحقوق محفوظة.',
    },
    cta: {
      bookNow: 'احجز الآن',
      learnMore: 'اعرف المزيد',
      viewGallery: 'عرض المعرض',
      contactUs: 'اتصل بنا',
      callUs: 'اتصل بنا',
      whatsapp: 'واتساب',
      email: 'البريد الإلكتروني',
    },
    breadcrumb: { home: 'الرئيسية' },
  },
  pages: {
    homepage: {
      slug: '',
      meta: {
        title: 'CosmeDocs | عيادة تجميل هارلي ستريت لندن | منذ 2007',
        description: 'طب تجميلي بإشراف أطباء في هارلي ستريت منذ 2007. بوتوكس، فيلر، تجديد البشرة. نتائج طبيعية، دائماً على طريقتك.',
        keywords: 'بوتوكس لندن, فيلر لندن, عيادة تجميل هارلي ستريت, تجميل عربي لندن',
      },
      content: {
        heroTitle: 'عيادة تجميل للناطقين بالعربية في لندن',
        heroSubtitle: 'علاجات تجميلية طبيعية بإشراف أطباء في Cosmedocs – هارلي ستريت',
        heroTagline: 'وجهتكم الطبية للتجميل الطبيعي والآمن في لندن',
        welcomeTitle: 'أهلاً وسهلاً بكم في Cosmedocs',
        welcomeText: 'في Cosmedocs، نرحب بالمرضى الناطقين باللغة العربية من لندن ومن مختلف دول الخليج والشرق الأوسط. تقع عيادتنا في هارلي ستريت، ونُعرف بأسلوبنا الطبي الدقيق، ونتائجنا الطبيعية، واحترامنا الكامل لخصوصية المريض وثقافته.',
        welcomeMotto: 'نؤمن أن الجمال الحقيقي هو تعزيز ملامحك، لا تغييرها.',
        whyChooseTitle: 'لماذا يختار المرضى العرب Cosmedocs؟',
        whyChooseReasons: [
          'جميع العلاجات بإشراف أطباء متخصصين',
          'لا نُبالغ في الفيلر',
          'لا نغيّر ملامحك',
          'نركز على النتيجة الطبيعية المتوازنة',
          'فهم عميق لبنية الوجه العربي',
          'خصوصية تامة واحترام ثقافي',
        ],
      },
    },
    treatments: {
      slug: 'treatments',
      meta: {
        title: 'العلاجات التجميلية | CosmeDocs هارلي ستريت لندن',
        description: 'اكتشف مجموعتنا الكاملة من العلاجات التجميلية بإشراف أطباء متخصصين في هارلي ستريت لندن.',
      },
      content: {
        title: 'العلاجات التجميلية',
        subtitle: 'استكشف مجموعتنا الكاملة من العلاجات بإشراف أطباء في هارلي ستريت',
      },
    },
    botox: {
      slug: 'treatments/botox',
      meta: {
        title: 'بوتوكس لندن | هارلي ستريت | CosmeDocs',
        description: 'علاجات البوتوكس المتخصصة في هارلي ستريت. بإشراف أطباء، نتائج طبيعية. بوتوكس تجميلي وطبي. منذ 2007.',
        keywords: 'بوتوكس لندن, بوتوكس هارلي ستريت, علاج التجاعيد لندن',
      },
      content: {
        title: 'علاج البوتوكس في لندن',
        subtitle: 'نتائج طبيعية بإشراف أطباء متخصصين في هارلي ستريت',
        whatIs: 'ما هو البوتوكس؟',
        whatIsText: 'البوتوكس هو علاج طبي معتمد يُستخدم لتقليل التجاعيد الديناميكية عن طريق إرخاء العضلات المسؤولة عن تكوّن الخطوط. في Cosmedocs، نستخدم تقنيات دقيقة للحصول على نتائج طبيعية تحافظ على تعبيرات وجهك.',
        areas: ['خطوط الجبهة', 'خطوط العبوس', 'أقدام الغراب', 'الماسيتر', 'رفع الشفاه'],
        benefits: ['نتائج طبيعية', 'بدون توقف عن العمل', 'علاج سريع', 'بإشراف طبيب متخصص'],
      },
    },
    dermalFillers: {
      slug: 'treatments/dermal-fillers',
      meta: {
        title: 'فيلر الوجه لندن | هارلي ستريت | CosmeDocs',
        description: 'علاجات الفيلر المتميزة في هارلي ستريت. فيلر الشفاه، الخدود، خط الفك، الذقن. نتائج طبيعية ومتوازنة.',
      },
      content: {
        title: 'حقن الفيلر (حمض الهيالورونيك)',
        subtitle: 'استعادة الحجم والتناسق بطريقة طبيعية',
      },
    },
    lipFillers: {
      slug: 'treatments/lip-fillers',
      meta: {
        title: 'فيلر الشفاه لندن | نتائج طبيعية | CosmeDocs',
        description: 'علاجات فيلر الشفاه الطبيعية في هارلي ستريت. تحسين دقيق ومتوازن. بإشراف أطباء منذ 2007.',
      },
      content: {
        title: 'فيلر الشفاه',
        subtitle: 'تعزيز طبيعي ومتناسق لشفاهك',
      },
    },
    jawlineFiller: {
      slug: 'treatments/jawline-filler',
      meta: {
        title: 'فيلر خط الفك لندن | هارلي ستريت | CosmeDocs',
        description: 'علاج فيلر خط الفك لوجه أكثر تحديداً وتوازناً. بإشراف أطباء في هارلي ستريت منذ 2007.',
      },
      content: {
        title: 'فيلر خط الفك',
        subtitle: 'تحديد وتوازن الجزء السفلي من الوجه',
      },
    },
    chinFiller: {
      slug: 'treatments/chin-filler',
      meta: {
        title: 'فيلر الذقن لندن | هارلي ستريت | CosmeDocs',
        description: 'علاج فيلر الذقن لتوازن الوجه وتحسين البروفايل. بإشراف أطباء في هارلي ستريت منذ 2007.',
      },
      content: {
        title: 'فيلر الذقن',
        subtitle: 'تحسين توازن الوجه والبروفايل الجانبي',
      },
    },
    tearTroughFiller: {
      slug: 'treatments/tear-trough-filler',
      meta: {
        title: 'فيلر تحت العين لندن | علاج الهالات السوداء | CosmeDocs',
        description: 'فيلر تحت العين لتقليل الهالات السوداء والتجاويف. بإشراف أطباء في هارلي ستريت منذ 2007.',
      },
      content: {
        title: 'فيلر تحت العين',
        subtitle: 'علاج الهالات السوداء والتجاويف تحت العين',
      },
    },
    skinRejuvenation: {
      slug: 'treatments/skin-rejuvenation',
      meta: {
        title: 'تجديد البشرة لندن | هارلي ستريت | CosmeDocs',
        description: 'علاجات تجديد البشرة المتقدمة في هارلي ستريت. بروفايلو، بولينوكليوتيدات، ميكرونيدلينج.',
      },
      content: {
        title: 'تجديد البشرة',
        subtitle: 'علاجات متقدمة لإشراقة طبيعية ونضارة دائمة',
      },
    },
    prices: {
      slug: 'prices',
      meta: {
        title: 'الأسعار | CosmeDocs هارلي ستريت لندن',
        description: 'أسعار شفافة لجميع العلاجات التجميلية في CosmeDocs هارلي ستريت. بوتوكس، فيلر، علاجات البشرة.',
      },
      content: {
        title: 'الأسعار',
        subtitle: 'أسعار شفافة لجميع علاجاتنا',
      },
    },
    contact: {
      slug: 'contact',
      meta: {
        title: 'اتصل بنا | CosmeDocs هارلي ستريت لندن',
        description: 'تواصل مع CosmeDocs في 10 هارلي ستريت لندن. احجز استشارة، اتصل، واتساب أو راسلنا.',
      },
      content: {
        breadcrumbContact: 'اتصل بنا',
        heroTagline: 'تواصل معنا',
        heroTitle: 'اتصل بنا',
        heroSubtitle: 'سواء كنت ترغب في حجز استشارة، أو طرح سؤال، أو معرفة المزيد عن علاجاتنا — نحن هنا لمساعدتك. تواصل معنا بالطريقة التي تناسبك.',
        bookDirect: 'احجز مباشرة',
        bookDirectDesc: 'حدد موعد استشارتك عبر الإنترنت',
        whatsappLabel: 'واتساب',
        whatsappDesc: 'راسلنا مباشرة على واتساب',
        callUs: 'اتصل بنا',
        instagram: 'انستغرام',
        askQuestion: 'اطرح سؤالاً',
        askQuestionDesc: 'أرسل سؤالك مباشرة وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن — عادة خلال ساعات قليلة أثناء ساعات العمل.',
        formName: 'الاسم',
        formNamePlaceholder: 'اسمك',
        formEmail: 'البريد الإلكتروني',
        formEmailPlaceholder: 'your@email.com',
        formPhone: 'الهاتف',
        formPhoneOptional: '(اختياري)',
        formPhonePlaceholder: '+44 7XXX XXX XXX',
        formQuestion: 'سؤالك',
        formQuestionPlaceholder: 'أخبرنا عن استفسارك أو العلاج الذي تهتم به...',
        formSubmit: 'أرسل سؤالك',
        formSubmitting: 'جارٍ الإرسال...',
        formDisclaimer: 'رسالتك تصل مباشرة إلى فريق العيادة — بدون ذكاء اصطناعي، بدون روبوت محادثة. شخص حقيقي سيرد عليك.',
        ourClinic: 'عيادتنا',
        clinicName: 'Cosmedocs',
        clinicAddress1: '10 هارلي ستريت',
        clinicAddress2: 'لندن، W1G 9PF',
        clinicCountry: 'المملكة المتحدة',
        discreteTitle: 'خصوصية تامة',
        discreteText: 'لا لافتات خارجية. لا شعار للعيادة على الباب. موقعنا في هارلي ستريت غير مُعلّم عمداً — خصوصيتك مطلقة. موثوق من قبل الشخصيات العامة والمشاهير والمرضى البارزين الذين يحتاجون إلى سرية تامة.',
        viewOnMaps: 'عرض على خرائط جوجل',
        openingHours: 'ساعات العمل',
        monFri: 'الاثنين – الجمعة',
        monFriHours: '9:00 – 19:00',
        saturday: 'السبت',
        saturdayHours: '10:00 – 16:00',
        sunday: 'الأحد',
        sundayClosed: 'مغلق',
        directLines: 'خطوط مباشرة',
        connect: 'تواصل',
        bookOnline: 'احجز عبر الإنترنت',
        trustSince2007: 'منذ 2007',
        trustHarleyStreet: 'هارلي ستريت',
        trustDoctorLed: 'بإشراف أطباء',
        instantAnswers: 'إجابات فورية',
        aestheticIntelligence: 'الذكاء التجميلي',
        aiDescription: 'احصل على إجابات فورية حول العلاجات والأسعار والحجز. مساعدنا الذكي مدرب على مجموعتنا الكاملة من العلاجات ويمكنه مساعدتك في العثور على ما تحتاجه بالضبط.',
      },
    },
    about: {
      slug: 'about-us',
      meta: {
        title: 'من نحن | CosmeDocs هارلي ستريت منذ 2007',
        description: 'تعرف على CosmeDocs، عيادة تجميل هارلي ستريت منذ 2007. بإشراف أطباء، أخلاقيات طبية، نتائج طبيعية.',
      },
      content: {
        title: 'من نحن',
        subtitle: 'عيادة تجميل بإشراف أطباء في هارلي ستريت منذ 2007',
        heritage: 'أكثر من 17 عاماً من الخبرة في الطب التجميلي',
      },
    },
  },
};

export default ar;
