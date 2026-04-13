import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Calendar, Activity, Syringe, Star, Sparkles } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

// ─── URL Maps ─────────────────────────────────────────────────────────
type Lang = 'ar' | 'fr' | 'es' | 'zh';
type TreatmentKey = 'nose-filler' | 'profhilo';

const URLS: Record<Lang, Record<TreatmentKey, string>> = {
  ar: { 'nose-filler': '/ar/treatments/nose-filler/', 'profhilo': '/ar/treatments/profhilo/' },
  fr: { 'nose-filler': '/fr/traitements/rhinoplastie-medicale/', 'profhilo': '/fr/traitements/profhilo/' },
  es: { 'nose-filler': '/es/tratamientos/relleno-nariz/', 'profhilo': '/es/tratamientos/profhilo/' },
  zh: { 'nose-filler': '/zh/treatments/nose-filler/', 'profhilo': '/zh/treatments/profhilo/' },
};

const EN_URLS: Record<TreatmentKey, string> = {
  'nose-filler': '/treatments/dermal-fillers/nose/',
  'profhilo': '/treatments/profhilo/',
};

function buildHreflangLinks(treatmentKey: TreatmentKey) {
  const base = 'https://www.cosmedocs.com';
  const links = [
    { hreflang: 'en-gb', href: `${base}${EN_URLS[treatmentKey]}` },
    { hreflang: 'x-default', href: `${base}${EN_URLS[treatmentKey]}` },
  ];
  for (const lang of ['ar', 'fr', 'es', 'zh'] as Lang[]) {
    links.push({ hreflang: lang, href: `${base}${URLS[lang][treatmentKey]}` });
  }
  return links;
}

// ─── Translation Data ─────────────────────────────────────────────────
interface TreatmentData {
  meta: { title: string; description: string; keywords: string };
  breadcrumbs: { parent: string; parentPath: string; current: string };
  hero: { h1: string; subtitle: string };
  intro: { heading: string; text: string };
  benefits: string[];
  glance: { duration: string; results: string; recovery: string; product: string };
  faq: { q: string; a: string }[];
  cta: string;
  bookNow: string;
  review: { name: string; initial: string; text: string };
  dir: 'ltr' | 'rtl';
}

const TREATMENTS: Record<Lang, Record<TreatmentKey, TreatmentData>> = {
  // ═══════════════════════════════════════════
  // ARABIC
  // ═══════════════════════════════════════════
  ar: {
    'nose-filler': {
      meta: {
        title: 'تجميل الأنف بدون جراحة لندن | فيلر الأنف | كوزمي دوكس',
        description: 'تجميل الأنف بدون جراحة باستخدام الفيلر. تصحيح حدبة الأنف وتنحيف الجسر ورفع طرف الأنف. هارلي ستريت منذ 2007.',
        keywords: 'فيلر الأنف, تجميل الأنف بدون جراحة, رينوبلاستي, لندن, هارلي ستريت',
      },
      breadcrumbs: { parent: 'العلاجات', parentPath: '/ar/treatments/', current: 'فيلر الأنف' },
      hero: { h1: 'تجميل الأنف بدون جراحة', subtitle: 'تحسين المظهر الجانبي بدقة طبية — بدون جراحة، بدون توقف عن العمل' },
      intro: {
        heading: 'ما هو فيلر الأنف؟',
        text: 'فيلر الأنف هو إجراء تجميلي غير جراحي يستخدم حمض الهيالورونيك أو خيوط PCL لتحسين شكل الأنف. يمكنه تنعيم الحدبات وتحسين التناسق ورفع طرف الأنف — كل ذلك في جلسة واحدة مدتها 15-30 دقيقة. النتائج تدوم حتى 2-3 سنوات.',
      },
      benefits: [
        'إخفاء حدبة الأنف',
        'تحسين جسر الأنف',
        'رفع طرف الأنف',
        'تصحيح عدم التناسق',
        'بدون فترة نقاهة',
        'نتائج فورية',
      ],
      glance: { duration: '15-30 دقيقة', results: 'حتى 2-3 سنوات', recovery: 'فترة نقاهة قصيرة', product: 'فيلر HA وخيوط PCL' },
      faq: [
        { q: 'هل فيلر الأنف آمن؟', a: 'نعم، عندما يُجرى بواسطة أطباء متخصصين. فريقنا يضم أطباء مسجلين في GMC مع خبرة تزيد عن 17 عاماً.' },
        { q: 'كم تستغرق الجلسة؟', a: 'عادة 15-30 دقيقة مع تطبيق مخدر موضعي.' },
        { q: 'ما هي تكلفة فيلر الأنف؟', a: 'يبدأ فيلر الأنف من £450 للفيلر الجلدي و£950 لخيوط PCL.' },
      ],
      cta: 'احجز استشارة',
      bookNow: 'احجز الآن',
      review: { name: 'سارة م.', initial: 'س', text: 'كان لدي نتوء على أنفي يزعجني دائماً. الدكتور حق أصلحه في دقائق — النتيجة طبيعية جداً.' },
      dir: 'rtl',
    },
    'profhilo': {
      meta: {
        title: 'بروفايلو لندن | تجديد البشرة الحيوي | كوزمي دوكس',
        description: 'علاج بروفايلو لتجديد البشرة من £350. تحفيز الكولاجين والإيلاستين. هارلي ستريت منذ 2007.',
        keywords: 'بروفايلو, تجديد البشرة, حمض الهيالورونيك, كولاجين, لندن',
      },
      breadcrumbs: { parent: 'العلاجات', parentPath: '/ar/treatments/', current: 'بروفايلو' },
      hero: { h1: 'بروفايلو — تجديد البشرة الحيوي', subtitle: 'حمض الهيالورونيك عالي التركيز لتحفيز الكولاجين والإيلاستين الطبيعي' },
      intro: {
        heading: 'ما هو بروفايلو؟',
        text: 'بروفايلو هو علاج متقدم لإعادة تشكيل البشرة يستخدم 64 ملغ من حمض الهيالورونيك لتجديد البشرة من الداخل. يحفز إنتاج الكولاجين والإيلاستين، مما يحسن لون البشرة ومرونتها وجودتها بشكل ملحوظ.',
      },
      benefits: [
        'تحسين مرونة البشرة',
        'ترطيب عميق',
        'تحفيز الكولاجين',
        'مناسب للوجه والرقبة واليدين',
        'فترة نقاهة قصيرة',
        'نتائج طبيعية',
      ],
      glance: { duration: '20-30 دقيقة', results: '6-12 شهراً', recovery: 'فترة نقاهة قصيرة', product: 'حمض الهيالورونيك (64 ملغ)' },
      faq: [
        { q: 'كم جلسة أحتاج؟', a: 'عادة جلستان بفارق 4-6 أسابيع للحصول على أفضل النتائج.' },
        { q: 'ما الفرق بين بروفايلو والفيلر؟', a: 'بروفايلو يعيد تشكيل البشرة ويرطبها، بينما الفيلر يضيف حجماً لمناطق معينة.' },
        { q: 'ما تكلفة بروفايلو؟', a: 'الجلسة الأولى من £350، والجلسات التالية من £300.' },
      ],
      cta: 'احجز استشارة',
      bookNow: 'احجز الآن',
      review: { name: 'سارة م.', initial: 'س', text: 'بشرتي تتوهج الآن. جلستان من بروفايلو والجميع يسأل ماذا فعلت. النتيجة خفية لكن الفرق مذهل.' },
      dir: 'rtl',
    },
  },
  // ═══════════════════════════════════════════
  // FRENCH
  // ═══════════════════════════════════════════
  fr: {
    'nose-filler': {
      meta: {
        title: 'Rhinoplastie Médicale Londres | Filler Nez | Cosmedocs',
        description: 'Rhinoplastie sans chirurgie par acide hyaluronique. Correction de bosse, affinement et projection de la pointe. Harley Street depuis 2007.',
        keywords: 'rhinoplastie médicale, filler nez, rhinoplastie sans chirurgie, Londres, Harley Street',
      },
      breadcrumbs: { parent: 'Traitements', parentPath: '/fr/traitements/', current: 'Rhinoplastie Médicale' },
      hero: { h1: 'Rhinoplastie Médicale', subtitle: 'Remodelage du nez sans chirurgie — résultats subtils, aucune convalescence' },
      intro: {
        heading: 'Qu\'est-ce que le filler nasal ?',
        text: 'Le filler nasal est une procédure non chirurgicale utilisant de l\'acide hyaluronique ou des fils PCL pour remodeler le nez. Il permet de lisser les bosses, affiner l\'arête et relever la pointe — le tout en une séance de 15 à 30 minutes. Les résultats durent jusqu\'à 2-3 ans.',
      },
      benefits: [
        'Camouflage de bosse dorsale',
        'Affinement de l\'arête',
        'Relèvement de la pointe',
        'Correction d\'asymétrie',
        'Aucune convalescence',
        'Résultats immédiats',
      ],
      glance: { duration: '15-30 minutes', results: 'Jusqu\'à 2-3 ans', recovery: 'Convalescence minimale', product: 'Acide hyaluronique & fils PCL' },
      faq: [
        { q: 'Le filler nasal est-il sûr ?', a: 'Oui, réalisé par des médecins GMC avec plus de 17 ans d\'expérience. La sécurité est notre priorité absolue.' },
        { q: 'Combien de temps dure la séance ?', a: 'Généralement 15-30 minutes avec application d\'anesthésique topique.' },
        { q: 'Quel est le prix du filler nasal ?', a: 'Le filler nasal commence à £450 pour l\'acide hyaluronique et £950 pour les fils PCL.' },
      ],
      cta: 'Prendre Rendez-vous',
      bookNow: 'Réserver',
      review: { name: 'Sarah M.', initial: 'S', text: 'J\'avais une bosse sur le nez qui me gênait. Le Dr Haq l\'a lissée en quelques minutes — le résultat est si naturel.' },
      dir: 'ltr',
    },
    'profhilo': {
      meta: {
        title: 'Profhilo Londres | Bio-Remodelage Cutané | Cosmedocs',
        description: 'Traitement Profhilo bio-remodelage dès £350. Stimule le collagène et l\'élastine pour un rajeunissement naturel. Harley Street depuis 2007.',
        keywords: 'Profhilo, bio-remodelage, acide hyaluronique, collagène, Londres, Harley Street',
      },
      breadcrumbs: { parent: 'Traitements', parentPath: '/fr/traitements/', current: 'Profhilo' },
      hero: { h1: 'Profhilo — Bio-Remodelage Cutané', subtitle: 'Acide hyaluronique haute concentration pour stimuler naturellement collagène et élastine' },
      intro: {
        heading: 'Qu\'est-ce que le Profhilo ?',
        text: 'Le Profhilo est un traitement avancé de bio-remodelage cutané utilisant 64 mg d\'acide hyaluronique pour régénérer la peau de l\'intérieur. Il stimule la production de collagène et d\'élastine, améliorant significativement le teint, l\'élasticité et la qualité de la peau.',
      },
      benefits: [
        'Amélioration de l\'élasticité',
        'Hydratation profonde',
        'Stimulation du collagène',
        'Convient au visage, cou et mains',
        'Convalescence minimale',
        'Résultats naturels',
      ],
      glance: { duration: '20-30 minutes', results: '6-12 mois', recovery: 'Convalescence minimale', product: 'Acide hyaluronique (64 mg)' },
      faq: [
        { q: 'Combien de séances faut-il ?', a: 'Généralement deux séances espacées de 4 à 6 semaines pour des résultats optimaux.' },
        { q: 'Quelle différence avec les fillers ?', a: 'Le Profhilo bio-remodèle et hydrate la peau, tandis que les fillers ajoutent du volume à des zones spécifiques.' },
        { q: 'Quel est le prix du Profhilo ?', a: 'Première séance à partir de £350, séances suivantes à partir de £300.' },
      ],
      cta: 'Prendre Rendez-vous',
      bookNow: 'Réserver',
      review: { name: 'Sarah M.', initial: 'S', text: 'Ma peau rayonne. Deux séances de Profhilo et tout le monde me demande ce que j\'ai fait. C\'est subtil mais la différence est incroyable.' },
      dir: 'ltr',
    },
  },
  // ═══════════════════════════════════════════
  // SPANISH
  // ═══════════════════════════════════════════
  es: {
    'nose-filler': {
      meta: {
        title: 'Rinomodelación Londres | Relleno Nariz | Cosmedocs',
        description: 'Rinomodelación sin cirugía con ácido hialurónico. Corrección de giba, afinamiento y elevación de punta. Harley Street desde 2007.',
        keywords: 'rinomodelación, relleno nariz, rinoplastia sin cirugía, Londres, Harley Street',
      },
      breadcrumbs: { parent: 'Tratamientos', parentPath: '/es/tratamientos/', current: 'Relleno Nariz' },
      hero: { h1: 'Rinomodelación Sin Cirugía', subtitle: 'Remodelación nasal precisa sin quirófano — resultados sutiles, sin tiempo de inactividad' },
      intro: {
        heading: '¿Qué es el relleno nasal?',
        text: 'El relleno nasal es un procedimiento no quirúrgico que utiliza ácido hialurónico o hilos de PCL para remodelar la nariz. Permite suavizar gibas, afinar el puente y elevar la punta — todo en una sesión de 15-30 minutos. Los resultados duran hasta 2-3 años.',
      },
      benefits: [
        'Camuflaje de giba dorsal',
        'Afinamiento del puente',
        'Elevación de la punta',
        'Corrección de asimetría',
        'Sin tiempo de inactividad',
        'Resultados inmediatos',
      ],
      glance: { duration: '15-30 minutos', results: 'Hasta 2-3 años', recovery: 'Recuperación mínima', product: 'Ácido hialurónico y hilos PCL' },
      faq: [
        { q: '¿Es seguro el relleno nasal?', a: 'Sí, realizado por médicos GMC con más de 17 años de experiencia. La seguridad es nuestra máxima prioridad.' },
        { q: '¿Cuánto dura la sesión?', a: 'Generalmente 15-30 minutos con aplicación de anestésico tópico.' },
        { q: '¿Cuál es el precio del relleno nasal?', a: 'El relleno nasal comienza desde £450 para ácido hialurónico y £950 para hilos PCL.' },
      ],
      cta: 'Reservar Consulta',
      bookNow: 'Reservar',
      review: { name: 'Sarah M.', initial: 'S', text: 'Tenía un bulto en la nariz que siempre me molestaba. El Dr Haq lo suavizó en minutos — el resultado es tan natural.' },
      dir: 'ltr',
    },
    'profhilo': {
      meta: {
        title: 'Profhilo Londres | Bio-Remodelación Cutánea | Cosmedocs',
        description: 'Tratamiento Profhilo bio-remodelación desde £350. Estimula colágeno y elastina para rejuvenecimiento natural. Harley Street desde 2007.',
        keywords: 'Profhilo, bio-remodelación, ácido hialurónico, colágeno, Londres, Harley Street',
      },
      breadcrumbs: { parent: 'Tratamientos', parentPath: '/es/tratamientos/', current: 'Profhilo' },
      hero: { h1: 'Profhilo — Bio-Remodelación Cutánea', subtitle: 'Ácido hialurónico de alta concentración para estimular naturalmente colágeno y elastina' },
      intro: {
        heading: '¿Qué es el Profhilo?',
        text: 'Profhilo es un tratamiento avanzado de bio-remodelación cutánea que utiliza 64 mg de ácido hialurónico para regenerar la piel desde el interior. Estimula la producción de colágeno y elastina, mejorando significativamente el tono, la elasticidad y la calidad de la piel.',
      },
      benefits: [
        'Mejora de la elasticidad',
        'Hidratación profunda',
        'Estimulación del colágeno',
        'Apto para rostro, cuello y manos',
        'Recuperación mínima',
        'Resultados naturales',
      ],
      glance: { duration: '20-30 minutos', results: '6-12 meses', recovery: 'Recuperación mínima', product: 'Ácido hialurónico (64 mg)' },
      faq: [
        { q: '¿Cuántas sesiones necesito?', a: 'Generalmente dos sesiones con 4-6 semanas de diferencia para resultados óptimos.' },
        { q: '¿Qué diferencia hay con los rellenos?', a: 'Profhilo bio-remodela e hidrata la piel, mientras que los rellenos añaden volumen a zonas específicas.' },
        { q: '¿Cuál es el precio del Profhilo?', a: 'Primera sesión desde £350, sesiones posteriores desde £300.' },
      ],
      cta: 'Reservar Consulta',
      bookNow: 'Reservar',
      review: { name: 'Sarah M.', initial: 'S', text: 'Mi piel literalmente brilla ahora. Dos sesiones de Profhilo y todos preguntan qué me hice. Es tan sutil pero la diferencia es increíble.' },
      dir: 'ltr',
    },
  },
  // ═══════════════════════════════════════════
  // CHINESE
  // ═══════════════════════════════════════════
  zh: {
    'nose-filler': {
      meta: {
        title: '伦敦鼻部填充 | 非手术鼻整形 | Cosmedocs 哈利街',
        description: '非手术鼻部塑形，使用玻尿酸填充剂。驼峰矫正、鼻梁细化和鼻尖提升。哈利街专业医生操作，始于2007年。',
        keywords: '鼻部填充, 非手术鼻整形, 液态隆鼻, 伦敦, 哈利街',
      },
      breadcrumbs: { parent: '治疗项目', parentPath: '/zh/treatments/', current: '鼻部填充' },
      hero: { h1: '非手术鼻部塑形', subtitle: '精准医学美容提升面部轮廓 — 无需手术，无需恢复期' },
      intro: {
        heading: '什么是鼻部填充？',
        text: '鼻部填充是一种非手术美容项目，使用透明质酸或PCL线来改善鼻部形态。可以平滑驼峰、改善鼻梁对称性和提升鼻尖 — 整个过程仅需15-30分钟。效果可持续2-3年。',
      },
      benefits: [
        '驼峰遮盖',
        '鼻梁细化',
        '鼻尖提升',
        '不对称矫正',
        '无恢复期',
        '即时效果',
      ],
      glance: { duration: '15-30分钟', results: '可持续2-3年', recovery: '恢复期极短', product: 'HA填充剂和PCL线' },
      faq: [
        { q: '鼻部填充安全吗？', a: '是的，由GMC注册医生操作，拥有超过17年的经验。安全是我们的首要考虑。' },
        { q: '治疗需要多长时间？', a: '通常15-30分钟，包括局部麻醉。' },
        { q: '鼻部填充费用是多少？', a: '玻尿酸填充从£450起，PCL线从£950起。' },
      ],
      cta: '预约咨询',
      bookNow: '立即预约',
      review: { name: 'Sarah M.', initial: 'S', text: '我的鼻子上有一个一直困扰我的凸起。Haq医生几分钟就把它处理好了——效果非常自然，没人能看出来。' },
      dir: 'ltr',
    },
    'profhilo': {
      meta: {
        title: '伦敦Profhilo治疗 | 生物重塑焕肤 | Cosmedocs 哈利街',
        description: 'Profhilo生物重塑治疗从£350起。刺激胶原蛋白和弹性蛋白，实现自然皮肤焕活。哈利街始于2007年。',
        keywords: 'Profhilo, 生物重塑, 透明质酸, 胶原蛋白, 伦敦, 哈利街',
      },
      breadcrumbs: { parent: '治疗项目', parentPath: '/zh/treatments/', current: 'Profhilo' },
      hero: { h1: 'Profhilo — 生物重塑焕肤', subtitle: '高浓度透明质酸，自然刺激胶原蛋白和弹性蛋白生成' },
      intro: {
        heading: '什么是Profhilo？',
        text: 'Profhilo是一种先进的皮肤生物重塑治疗，使用64毫克透明质酸从内部再生皮肤。它刺激胶原蛋白和弹性蛋白的产生，显著改善肤色、弹性和肤质。',
      },
      benefits: [
        '改善皮肤弹性',
        '深层保湿',
        '刺激胶原蛋白',
        '适用于面部、颈部和手部',
        '恢复期极短',
        '自然效果',
      ],
      glance: { duration: '20-30分钟', results: '6-12个月', recovery: '恢复期极短', product: '透明质酸 (64毫克)' },
      faq: [
        { q: '我需要几次治疗？', a: '通常需要两次治疗，间隔4-6周，以获得最佳效果。' },
        { q: 'Profhilo和填充剂有什么区别？', a: 'Profhilo进行生物重塑和保湿，而填充剂则为特定区域增加体积。' },
        { q: 'Profhilo费用是多少？', a: '首次治疗从£350起，后续治疗从£300起。' },
      ],
      cta: '预约咨询',
      bookNow: '立即预约',
      review: { name: 'Sarah M.', initial: 'S', text: '我的皮肤真的在发光。两次Profhilo治疗后，所有人都问我做了什么。效果很微妙，但区别令人难以置信。' },
      dir: 'ltr',
    },
  },
};

// ─── Component ────────────────────────────────────────────────────────
interface Props {
  lang: Lang;
  treatmentKey: TreatmentKey;
}

export default function TranslatedTier2Treatment({ lang, treatmentKey }: Props) {
  const data = TREATMENTS[lang][treatmentKey];
  const hreflangLinks = buildHreflangLinks(treatmentKey);
  const canonical = `https://www.cosmedocs.com${URLS[lang][treatmentKey]}`;

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} data-rh="true" />
        <meta name="keywords" content={data.meta.keywords} data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:description" content={data.meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalBusiness",
                "name": "CosmeDocs",
                "url": "https://www.cosmedocs.com/",
                "telephone": "+44 20 3733 3227",
                "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" },
              },
              {
                "@type": "MedicalProcedure",
                "name": data.hero.h1,
                "description": data.intro.text,
                "url": canonical,
                "procedureType": "NoninvasiveProcedure",
              },
              {
                "@type": "FAQPage",
                "mainEntity": data.faq.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
              },
            ],
          })}
        </script>
      </Helmet>

      <div dir={data.dir} className="min-h-screen bg-neutral-900 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201, 160, 80, 0.06) 0%, transparent 60%)' }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: data.breadcrumbs.parent, path: data.breadcrumbs.parentPath }]} currentPage={data.breadcrumbs.current} />
            <div className="max-w-3xl pt-8 md:pt-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                {data.hero.h1}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg text-white/60 max-w-2xl"
              >
                {data.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8"
              >
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-3 font-medium text-sm transition-all duration-300"
                >
                  {data.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Intro */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{data.intro.heading}</h2>
                <p className="text-white/60 leading-relaxed">{data.intro.text}</p>
              </section>

              {/* Benefits */}
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C9A050] flex-shrink-0" />
                      <span className="text-sm text-white/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <div className="space-y-4">
                  {data.faq.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-xl p-5"
                    >
                      <h3 className="text-sm font-semibold text-white mb-2">{item.q}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="text-center py-8 border-t border-white/10">
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8903F] font-semibold transition-colors"
                >
                  {data.bookNow} <ArrowRight className="h-4 w-4" />
                </a>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6" dir="ltr">
              {/* At a Glance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
              >
                <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
                <div className="space-y-4">
                  <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value={data.glance.duration} />
                  <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value={data.glance.results} />
                  <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value={data.glance.recovery} />
                  <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Product" value={data.glance.product} />
                </div>
              </motion.div>

              {/* Review */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A050] flex items-center justify-center text-black text-xs font-bold">
                    {data.review.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{data.review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#C9A050] fill-[#C9A050]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed italic">"{data.review.text}"</p>
              </motion.div>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="https://med.as.me/harleystreet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20"
                >
                  {data.cta}
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Invisible SEO text */}
        <div className="sr-only" aria-hidden="true">
          <p>{data.meta.description} {data.meta.keywords}</p>
          <p>CosmeDocs — Our aesthetics is invisible art. Bold. Natural. Always Your Way.</p>
        </div>
      </div>
    </>
  );
}

function GlanceStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#C9A050]/70">{icon}</div>
      <div>
        <p className="text-xs text-white/40">{label}</p>
        <p className="text-sm text-white/80">{value}</p>
      </div>
    </div>
  );
}
