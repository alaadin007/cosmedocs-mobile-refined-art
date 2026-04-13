import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Moon, Shield, Palette, Zap, Beaker, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExpandableSection from "@/components/ui/expandable-section";
import Breadcrumb from "@/components/Breadcrumb";

type BlogArticleKey = 'vitamin-c-vs-retinol' | 'three-cell-philosophy' | 'ph-vitamin-c';
type BlogLang = 'ar' | 'fr' | 'es' | 'zh';

interface BlogTranslation {
  meta: { title: string; description: string };
  breadcrumbs: string[];
  tag: string;
  h1: string;
  subtitle: string;
  author: string;
  readTime: string;
  cta: { primary: string; secondary: string; heading: string; subtext: string };
}

interface VitaminCData extends BlogTranslation {
  shortAnswer: { heading: string; text: string };
  am: { label: string; title: string; points: string[] };
  pm: { label: string; title: string; points: string[] };
  whyNot: { heading: string; p1: string; p2: string };
  cellPerspective: { heading: string; text: string };
  table: { cell: string; vitC: string; retinol: string; rows: [string, string, string][] };
  faq: { q: string; a: string }[];
}

interface ThreeCellData extends BlogTranslation {
  whyMatter: { heading: string; text: string };
  cells: { name: string; subtitle: string; description: string; treatments: string }[];
  clinical: { heading: string; text: string };
  faq: { q: string; a: string }[];
}

interface PHData extends BlogTranslation {
  problem: { heading: string; p1: string; p2: string };
  sweetSpot: { heading: string };
  phScale: { label: string; desc: string }[];
  triangle: { heading: string; p1: string; p2: string };
  faq: { q: string; a: string }[];
}

const translations: Record<BlogLang, Record<BlogArticleKey, VitaminCData | ThreeCellData | PHData>> = {
  ar: {
    'vitamin-c-vs-retinol': {
      meta: { title: 'فيتامين سي مقابل الريتينول: متى تستخدم كل منهما | Cosmedocs', description: 'هل يجب استخدام فيتامين سي أم الريتينول؟ دليل خبير حول متى تستخدم كل منهما، وكيفية الجمع بينهما بأمان في روتين صباحي/مسائي.' },
      breadcrumbs: ['الرئيسية', 'المدونة', 'فيتامين سي مقابل الريتينول'],
      tag: 'كوزميتالك • علم العناية بالبشرة',
      h1: 'فيتامين سي مقابل الريتينول: متى تستخدم كل منهما',
      subtitle: 'اثنان من أكثر المكونات النشطة المدعومة بالأدلة في طب الأمراض الجلدية — ولكن أيهما يجب أن تستخدم، ومتى؟',
      author: 'د. أحمد حق',
      readTime: '8 دقائق قراءة',
      shortAnswer: { heading: 'الإجابة المختصرة', text: 'استخدم كليهما — ولكن في أوقات مختلفة من اليوم. فيتامين سي ينتمي إلى روتينك الصباحي كدرع مضاد للأكسدة. الريتينول ينتمي إلى المساء عندما تدخل بشرتك وضع الإصلاح.' },
      am: { label: 'صباحاً', title: 'فيتامين سي', points: ['يحيد الجذور الحرة من الأشعة فوق البنفسجية والتلوث', 'يثبط التيروزيناز ← يقلل التصبغ', 'يعزز الحماية من الشمس إلى جانب واقي الشمس', 'يثبت روابط الكولاجين المتقاطعة'] },
      pm: { label: 'مساءً', title: 'الريتينول', points: ['ينشط مستقبلات الريتينويد على الخلايا الليفية', 'يسرع تجدد الخلايا الكيراتينية', 'ينظم توزيع صبغة الخلايا الصباغية', 'يحفز تخليق الكولاجين'] },
      whyNot: { heading: 'لماذا ليس في نفس الوقت؟', p1: 'فيتامين سي يعمل بشكل أفضل عند درجة حموضة منخفضة (2.5-3.5). الريتينول يتحول بكفاءة أكبر عند درجة حموضة أعلى قليلاً (5.5-6.0). تطبيق كليهما في وقت واحد يخلق تعارضاً في درجة الحموضة.', p2: 'تقسيم صباحي/مسائي ليس مجرد راحة — إنه الأمثل كيميائياً حيوياً.' },
      cellPerspective: { heading: 'منظور الخلايا الثلاث', text: 'في Cosmedocs، نصنع منتجاتنا حول ثلاثة أنواع أساسية من خلايا البشرة.' },
      table: { cell: 'نوع الخلية', vitC: 'تأثير فيتامين سي', retinol: 'تأثير الريتينول', rows: [['الخلايا الكيراتينية', 'يقوي الحاجز عبر دعم السيراميد', 'يسرع التجدد، يزيل الاحتقان'], ['الخلايا الصباغية', 'يثبط التيروزيناز ← يقلل البقع الداكنة', 'يوزع تجمعات الميلانين بالتساوي'], ['الخلايا الليفية', 'عامل مساعد أساسي لتخليق الكولاجين', 'ينشط مستقبلات الريتينويد ← كولاجين جديد']] },
      faq: [
        { q: 'هل يمكنني استخدام فيتامين سي والريتينول معاً؟', a: 'نعم — استخدم فيتامين سي في الصباح والريتينول في المساء. هذا التقسيم يزيد الفعالية دون تهيج.' },
        { q: 'أيهما أفضل لمكافحة الشيخوخة؟', a: 'كلاهما ضروري. الريتينول يحفز إنتاج الكولاجين بينما فيتامين سي يحيد الجذور الحرة.' },
        { q: 'متى سأرى النتائج؟', a: 'تفتيح فيتامين سي يظهر خلال 2-4 أسابيع. فوائد الريتينول تظهر بعد 8-12 أسبوعاً.' },
      ],
      cta: { primary: 'تسوق فيتامين سي', secondary: 'تسوق ريتينول+', heading: 'هل أنت مستعد لبدء روتينك؟', subtext: 'مستحضراتنا التجميلية الطبية مصممة للعمل معاً — تستهدف جميع أنواع خلايا البشرة الثلاثة.' },
    } as VitaminCData,
    'three-cell-philosophy': {
      meta: { title: 'فلسفة الخلايا الثلاث للبشرة | Cosmedocs', description: 'كل مشكلة جلدية تعود إلى ثلاثة أنواع من الخلايا: الكيراتينية والصباغية والليفية. تعلم كيف يخلق استهداف الثلاثة تحولاً دائماً.' },
      breadcrumbs: ['الرئيسية', 'المدونة', 'فلسفة الخلايا الثلاث'],
      tag: 'كوزميتالك • علم البشرة',
      h1: 'فلسفة الخلايا الثلاث للبشرة',
      subtitle: 'كل مشكلة جلدية — الشيخوخة، عدم التوحد، الاحتقان — تعود إلى ثلاثة أنواع من الخلايا.',
      author: 'د. أحمد حق',
      readTime: '10 دقائق قراءة',
      whyMatter: { heading: 'لماذا الخلايا الثلاث مهمة', text: 'بشرتك تحتوي على أكثر من 30 نوعاً من الخلايا، لكن ثلاثة منها مسؤولة عن الغالبية العظمى من صحة البشرة المرئية.' },
      cells: [
        { name: 'الخلايا الكيراتينية', subtitle: 'بناة الحاجز • ~90% من البشرة', description: 'تشكل الحاجز المادي الذي يحافظ على الرطوبة ويمنع المهيجات. تنتج السيراميدات والأحماض الدهنية.', treatments: 'التقشير الكيميائي، هيدرافيشل، ريتينول+' },
        { name: 'الخلايا الصباغية', subtitle: 'منظمات الصبغة • ~5-10% من الطبقة القاعدية', description: 'تنتج الميلانين الذي يعطي البشرة لونها ويوفر حماية من الأشعة فوق البنفسجية.', treatments: 'سيروم فيتامين سي، ليزر بيكو، التقشير الكيميائي' },
        { name: 'الخلايا الليفية', subtitle: 'صناع البنية • النسيج الضام للأدمة', description: 'تنتج الكولاجين والإيلاستين وحمض الهيالورونيك. بعد سن 25، ينخفض نشاطها ~1% سنوياً.', treatments: 'ريتينول+، PRP، ميكرونيدلنج' },
      ],
      clinical: { heading: 'كيف نطبق هذا سريرياً', text: 'عندما تزور Cosmedocs للاستشارة، يتم رسم خطة علاجك مقابل جميع أنواع الخلايا الثلاث.' },
      faq: [
        { q: 'ما هي أنواع الخلايا الثلاث في البشرة؟', a: 'الكيراتينية (الحاجز)، الصباغية (الصبغة) والليفية (الكولاجين والإيلاستين وحمض الهيالورونيك).' },
        { q: 'لماذا يجب أن تستهدف العناية بالبشرة الثلاثة؟', a: 'معظم مشاكل البشرة تشمل خلل في نوعين على الأقل. استهداف واحد فقط يخلق نتائج غير مكتملة.' },
      ],
      cta: { primary: 'تسوق المستحضرات', secondary: 'احجز استشارة', heading: 'جرب نهج الخلايا الثلاث', subtext: 'ابدأ بمستحضرات تجميلية طبية تستهدف جميع أنواع خلايا البشرة الثلاثة.' },
    } as ThreeCellData,
    'ph-vitamin-c': {
      meta: { title: 'لماذا درجة الحموضة مهمة في سيروم فيتامين سي | Cosmedocs', description: 'درجة الحموضة تحدد ما إذا كان سيروم فيتامين سي يعمل فعلاً. تعلم لماذا pH 3.0-3.5 هو النقطة المثلى سريرياً.' },
      breadcrumbs: ['الرئيسية', 'المدونة', 'لماذا درجة الحموضة مهمة'],
      tag: 'كوزميتالك • علم التركيبات',
      h1: 'لماذا درجة الحموضة مهمة في سيروم فيتامين سي',
      subtitle: 'قد يكون سيروم فيتامين سي الخاص بك عديم الفائدة. درجة الحموضة هي العامل الأهم.',
      author: 'د. أحمد حق',
      readTime: '7 دقائق قراءة',
      problem: { heading: 'مشكلة الحموضة', p1: 'حمض الأسكوربيك — الشكل الوحيد من فيتامين سي المثبت لاختراق البشرة — هو جزيء مشحون عند pH محايد.', p2: 'عند pH 3.5 وأقل، يصبح غير مشحون مما يسمح له بالمرور عبر الحاجز.' },
      sweetSpot: { heading: 'النقطة المثلى لدرجة الحموضة' },
      phScale: [
        { label: 'pH < 2.5', desc: 'حمضي جداً — تهيج وحروق كيميائية' },
        { label: 'pH 3.0–3.5', desc: '✓ الأمثل — أقصى اختراق، أقل تهيج' },
        { label: 'pH 4.0–5.0', desc: 'امتصاص منخفض — الجزيء المشحون محجوب' },
        { label: 'pH > 5.0', desc: 'امتصاص ضئيل — غير فعال عملياً' },
      ],
      triangle: { heading: 'مثلث الاستقرار: فيتامين سي + E + حمض الفيروليك', p1: 'أثبتت دراسة جامعة ديوك عام 2005 أن إضافة فيتامين E وحمض الفيروليك ضاعفت القدرة على الحماية من الضوء.', p2: 'سيروم Revitalise C20 الخاص بنا يستخدم هذا المزيج المثبت علمياً.' },
      faq: [
        { q: 'ما درجة الحموضة المطلوبة لسيروم فيتامين سي؟', a: 'pH 3.0-3.5 هو الأمثل. أقل من 2.5 يسبب تهيجاً؛ أعلى من 3.5 يقلل الامتصاص بشكل كبير.' },
        { q: 'لماذا يتحول سيروم فيتامين سي إلى اللون البني؟', a: 'الأكسدة. حمض الفيروليك وفيتامين E يثبتان التركيبة.' },
      ],
      cta: { primary: 'تسوق Revitalise C20 — £85', secondary: '', heading: 'جرب فيتامين سي مصاغاً بشكل صحيح', subtext: '20% حمض الأسكوربيك، حمض الفيروليك، فيتامين E — عند pH 3.0-3.5.' },
    } as PHData,
  },
  fr: {
    'vitamin-c-vs-retinol': {
      meta: { title: 'Vitamine C vs Rétinol : Quand Utiliser Chacun | Cosmedocs', description: 'Faut-il utiliser la Vitamine C ou le Rétinol ? Guide expert sur quand utiliser chacun et comment les combiner en routine matin/soir.' },
      breadcrumbs: ['Accueil', 'Blog', 'Vitamine C vs Rétinol'],
      tag: 'CosmeTalk • Science de la Peau',
      h1: 'Vitamine C vs Rétinol : Quand Utiliser Chacun',
      subtitle: 'Deux des actifs les plus soutenus par la science en dermatologie — mais lequel devez-vous utiliser, et quand ?',
      author: 'Dr Ahmed Haq',
      readTime: '8 min de lecture',
      shortAnswer: { heading: 'La Réponse Courte', text: 'Utilisez les deux — mais à différents moments de la journée. La Vitamine C appartient à votre routine matinale comme bouclier antioxydant. Le Rétinol appartient au soir quand votre peau entre en mode réparation.' },
      am: { label: 'Matin', title: 'Vitamine C', points: ['Neutralise les radicaux libres des UV et de la pollution', 'Inhibe la tyrosinase → réduit la pigmentation', 'Renforce la photoprotection avec le SPF', 'Stabilise les liaisons croisées du collagène'] },
      pm: { label: 'Soir', title: 'Rétinol', points: ['Active les récepteurs rétinoïdes sur les fibroblastes', 'Accélère le renouvellement des kératinocytes', 'Normalise la distribution du pigment des mélanocytes', 'Stimule la synthèse du collagène I & III'] },
      whyNot: { heading: 'Pourquoi Pas en Même Temps ?', p1: 'La Vitamine C fonctionne mieux à un pH bas (2,5-3,5). Le Rétinol se convertit plus efficacement à un pH légèrement plus élevé (5,5-6,0). Les appliquer simultanément crée un conflit de pH.', p2: 'La séparation matin/soir n\'est pas qu\'une commodité — c\'est biochimiquement optimal.' },
      cellPerspective: { heading: 'La Perspective des 3 Cellules', text: 'Chez Cosmedocs, nous formulons autour de trois types essentiels de cellules cutanées.' },
      table: { cell: 'Type de Cellule', vitC: 'Effet Vitamine C', retinol: 'Effet Rétinol', rows: [['Kératinocytes', 'Renforce la barrière via le soutien des céramides', 'Accélère le renouvellement, désengorge'], ['Mélanocytes', 'Inhibe la tyrosinase → réduit les taches', 'Disperse les amas de mélanine uniformément'], ['Fibroblastes', 'Cofacteur essentiel pour la synthèse du collagène', 'Active les récepteurs rétinoïdes → nouveau collagène']] },
      faq: [
        { q: 'Puis-je utiliser Vitamine C et Rétinol ensemble ?', a: 'Oui — Vitamine C le matin et Rétinol le soir. Cette séparation maximise l\'efficacité sans irritation.' },
        { q: 'Lequel est meilleur pour l\'anti-âge ?', a: 'Les deux sont essentiels. Le Rétinol stimule la production de collagène tandis que la Vitamine C neutralise les radicaux libres.' },
        { q: 'Quand verrai-je des résultats ?', a: 'L\'éclat de la Vitamine C est visible en 2-4 semaines. Les bienfaits du Rétinol apparaissent après 8-12 semaines.' },
      ],
      cta: { primary: 'Acheter Vitamine C', secondary: 'Acheter Rétinol+', heading: 'Prêt à Démarrer Votre Routine ?', subtext: 'Nos cosméceutiques sont conçus pour fonctionner ensemble — ciblant les trois types essentiels de cellules cutanées.' },
    } as VitaminCData,
    'three-cell-philosophy': {
      meta: { title: 'La Philosophie des 3 Cellules de la Peau | Cosmedocs', description: 'Chaque problème de peau remonte à trois types de cellules : Kératinocytes, Mélanocytes et Fibroblastes. Découvrez comment cibler les trois crée une transformation durable.' },
      breadcrumbs: ['Accueil', 'Blog', 'Philosophie des 3 Cellules'],
      tag: 'CosmeTalk • Science de la Peau',
      h1: 'La Philosophie des 3 Cellules de la Peau',
      subtitle: 'Chaque problème de peau — vieillissement, teint inégal, congestion — remonte à trois types de cellules.',
      author: 'Dr Ahmed Haq',
      readTime: '10 min de lecture',
      whyMatter: { heading: 'Pourquoi les 3 Cellules Comptent', text: 'Votre peau contient plus de 30 types de cellules, mais trois sont responsables de la grande majorité de la santé cutanée visible.' },
      cells: [
        { name: 'Kératinocytes', subtitle: 'Les Bâtisseurs de Barrière • ~90% de l\'épiderme', description: 'Forment la barrière physique qui retient l\'hydratation et repousse les irritants. Produisent les céramides et les acides gras.', treatments: 'Peeling chimique, HydraFacial, Rétinol+' },
        { name: 'Mélanocytes', subtitle: 'Les Régulateurs de Pigment • ~5-10% de la couche basale', description: 'Produisent la mélanine qui donne sa couleur à la peau et offre une protection UV.', treatments: 'Sérum Vitamine C, Laser Pico, Peeling chimique' },
        { name: 'Fibroblastes', subtitle: 'Les Créateurs de Structure • Tissu conjonctif du derme', description: 'Produisent le collagène, l\'élastine et l\'acide hyaluronique. Après 25 ans, leur activité décline de ~1% par an.', treatments: 'Rétinol+, PRP, Microneedling' },
      ],
      clinical: { heading: 'Comment Nous Appliquons Cela en Clinique', text: 'Lors de votre consultation chez Cosmedocs, votre plan de traitement est cartographié par rapport aux trois types de cellules.' },
      faq: [
        { q: 'Quels sont les 3 types de cellules de la peau ?', a: 'Kératinocytes (barrière), Mélanocytes (pigment) et Fibroblastes (collagène, élastine, acide hyaluronique).' },
        { q: 'Pourquoi cibler les trois ?', a: 'La plupart des problèmes de peau impliquent un dysfonctionnement d\'au moins deux types. Cibler un seul donne des résultats incomplets.' },
      ],
      cta: { primary: 'Acheter les Cosméceutiques', secondary: 'Réserver une Consultation', heading: 'Découvrez l\'Approche 3 Cellules', subtext: 'Commencez avec des cosméceutiques formulés par des médecins ciblant les trois types essentiels de cellules cutanées.' },
    } as ThreeCellData,
    'ph-vitamin-c': {
      meta: { title: 'Pourquoi le pH Compte dans les Sérums Vitamine C | Cosmedocs', description: 'Le pH détermine si votre sérum Vitamine C fonctionne réellement. Découvrez pourquoi pH 3,0-3,5 est le point optimal clinique.' },
      breadcrumbs: ['Accueil', 'Blog', 'Pourquoi le pH Compte'],
      tag: 'CosmeTalk • Science de la Formulation',
      h1: 'Pourquoi le pH Compte dans les Sérums Vitamine C',
      subtitle: 'Votre sérum Vitamine C est peut-être inutile. Le pH est le facteur le plus important.',
      author: 'Dr Ahmed Haq',
      readTime: '7 min de lecture',
      problem: { heading: 'Le Problème du pH', p1: 'L\'acide L-ascorbique — la seule forme de Vitamine C prouvée pour pénétrer la peau — est une molécule chargée à pH neutre.', p2: 'En dessous de pH 3,5, elle devient protonée (non chargée), permettant le passage à travers la barrière.' },
      sweetSpot: { heading: 'Le Point Optimal du pH' },
      phScale: [
        { label: 'pH < 2,5', desc: 'Trop acide — irritation et brûlures chimiques' },
        { label: 'pH 3,0–3,5', desc: '✓ Optimal — pénétration maximale, irritation minimale' },
        { label: 'pH 4,0–5,0', desc: 'Absorption réduite — molécule chargée bloquée' },
        { label: 'pH > 5,0', desc: 'Absorption minimale — pratiquement inactif' },
      ],
      triangle: { heading: 'Le Triangle de Stabilité : Vitamine C + E + Acide Férulique', p1: 'L\'étude de l\'Université Duke de 2005 a démontré que l\'ajout de Vitamine E et d\'acide férulique a doublé la capacité de photoprotection.', p2: 'Notre sérum Revitalise C20 utilise cette combinaison scientifiquement validée.' },
      faq: [
        { q: 'Quel pH doit avoir un sérum Vitamine C ?', a: 'pH 3,0-3,5 est optimal. En dessous de 2,5 cause l\'irritation ; au-dessus de 3,5 réduit l\'absorption significativement.' },
        { q: 'Pourquoi mon sérum Vitamine C devient-il brun ?', a: 'Oxydation. L\'acide férulique et la Vitamine E stabilisent la formule.' },
      ],
      cta: { primary: 'Acheter Revitalise C20 — £85', secondary: '', heading: 'Essayez une Vitamine C Correctement Formulée', subtext: '20% acide L-ascorbique, acide férulique, Vitamine E — à pH 3,0-3,5.' },
    } as PHData,
  },
  es: {
    'vitamin-c-vs-retinol': {
      meta: { title: 'Vitamina C vs Retinol: Cuándo Usar Cada Uno | Cosmedocs', description: '¿Debes usar Vitamina C o Retinol? Guía experta sobre cuándo usar cada uno y cómo combinarlos en una rutina AM/PM.' },
      breadcrumbs: ['Inicio', 'Blog', 'Vitamina C vs Retinol'],
      tag: 'CosmeTalk • Ciencia del Cuidado de la Piel',
      h1: 'Vitamina C vs Retinol: Cuándo Usar Cada Uno',
      subtitle: 'Dos de los activos con más respaldo científico en dermatología — pero ¿cuál debes usar y cuándo?',
      author: 'Dr. Ahmed Haq',
      readTime: '8 min de lectura',
      shortAnswer: { heading: 'La Respuesta Corta', text: 'Usa ambos — pero en diferentes momentos del día. La Vitamina C pertenece a tu rutina matutina como escudo antioxidante. El Retinol pertenece a la noche cuando tu piel entra en modo reparación.' },
      am: { label: 'Mañana', title: 'Vitamina C', points: ['Neutraliza radicales libres de UV y contaminación', 'Inhibe la tirosinasa → reduce pigmentación', 'Potencia la fotoprotección junto al SPF', 'Estabiliza los enlaces cruzados del colágeno'] },
      pm: { label: 'Noche', title: 'Retinol', points: ['Activa receptores retinoides en fibroblastos', 'Acelera la renovación de queratinocitos', 'Normaliza distribución de pigmento de melanocitos', 'Estimula síntesis de colágeno I y III'] },
      whyNot: { heading: '¿Por Qué No al Mismo Tiempo?', p1: 'La Vitamina C funciona mejor a pH bajo (2,5-3,5). El Retinol se convierte más eficientemente a pH ligeramente más alto (5,5-6,0). Aplicar ambos simultáneamente crea un conflicto de pH.', p2: 'La separación AM/PM no es solo comodidad — es bioquímicamente óptima.' },
      cellPerspective: { heading: 'La Perspectiva de las 3 Células', text: 'En Cosmedocs, formulamos alrededor de tres tipos esenciales de células cutáneas.' },
      table: { cell: 'Tipo de Célula', vitC: 'Efecto Vitamina C', retinol: 'Efecto Retinol', rows: [['Queratinocitos', 'Fortalece barrera con soporte de ceramidas', 'Acelera renovación, descongestion'], ['Melanocitos', 'Inhibe tirosinasa → reduce manchas', 'Dispersa acumulaciones de melanina'], ['Fibroblastos', 'Cofactor esencial para síntesis de colágeno', 'Activa receptores retinoides → nuevo colágeno']] },
      faq: [
        { q: '¿Puedo usar Vitamina C y Retinol juntos?', a: 'Sí — Vitamina C por la mañana y Retinol por la noche. Esta separación maximiza eficacia sin irritación.' },
        { q: '¿Cuál es mejor para anti-envejecimiento?', a: 'Ambos son esenciales. El Retinol estimula producción de colágeno mientras la Vitamina C neutraliza radicales libres.' },
        { q: '¿Cuándo veré resultados?', a: 'La luminosidad de Vitamina C es visible en 2-4 semanas. Los beneficios del Retinol aparecen tras 8-12 semanas.' },
      ],
      cta: { primary: 'Comprar Vitamina C', secondary: 'Comprar Retinol+', heading: '¿Listo Para Tu Rutina AM/PM?', subtext: 'Nuestros cosmecéuticos están diseñados para trabajar juntos — apuntando a los tres tipos esenciales de células cutáneas.' },
    } as VitaminCData,
    'three-cell-philosophy': {
      meta: { title: 'La Filosofía de las 3 Células de la Piel | Cosmedocs', description: 'Cada problema de piel se remonta a tres tipos de células: Queratinocitos, Melanocitos y Fibroblastos. Descubre cómo apuntar a los tres crea una transformación duradera.' },
      breadcrumbs: ['Inicio', 'Blog', 'Filosofía de 3 Células'],
      tag: 'CosmeTalk • Ciencia de la Piel',
      h1: 'La Filosofía de las 3 Células de la Piel',
      subtitle: 'Cada problema — envejecimiento, tono desigual, congestión — se remonta a tres tipos de células.',
      author: 'Dr. Ahmed Haq',
      readTime: '10 min de lectura',
      whyMatter: { heading: 'Por Qué Importan las 3 Células', text: 'Tu piel contiene más de 30 tipos de células, pero tres son responsables de la gran mayoría de la salud cutánea visible.' },
      cells: [
        { name: 'Queratinocitos', subtitle: 'Los Constructores de Barrera • ~90% de la epidermis', description: 'Forman la barrera física que retiene hidratación y repele irritantes. Producen ceramidas y ácidos grasos.', treatments: 'Peeling químico, HydraFacial, Retinol+' },
        { name: 'Melanocitos', subtitle: 'Los Reguladores de Pigmento • ~5-10% de la capa basal', description: 'Producen melanina que da color a la piel y protección UV.', treatments: 'Sérum Vitamina C, Láser Pico, Peeling químico' },
        { name: 'Fibroblastos', subtitle: 'Los Creadores de Estructura • Tejido conectivo dérmico', description: 'Producen colágeno, elastina y ácido hialurónico. Después de los 25, su actividad disminuye ~1% anual.', treatments: 'Retinol+, PRP, Microneedling' },
      ],
      clinical: { heading: 'Cómo Aplicamos Esto Clínicamente', text: 'En tu consulta en Cosmedocs, tu plan de tratamiento se mapea contra los tres tipos de células.' },
      faq: [
        { q: '¿Cuáles son los 3 tipos de células de la piel?', a: 'Queratinocitos (barrera), Melanocitos (pigmento) y Fibroblastos (colágeno, elastina, ácido hialurónico).' },
        { q: '¿Por qué apuntar a los tres?', a: 'La mayoría de problemas de piel implican disfunción en al menos dos tipos. Apuntar a uno solo da resultados incompletos.' },
      ],
      cta: { primary: 'Comprar Cosmecéuticos', secondary: 'Reservar Consulta', heading: 'Experimenta el Enfoque de 3 Células', subtext: 'Empieza con cosmecéuticos formulados por médicos que apuntan a los tres tipos esenciales de células cutáneas.' },
    } as ThreeCellData,
    'ph-vitamin-c': {
      meta: { title: 'Por Qué el pH Importa en los Sérums de Vitamina C | Cosmedocs', description: 'El pH determina si tu sérum de Vitamina C realmente funciona. Descubre por qué pH 3,0-3,5 es el punto óptimo clínico.' },
      breadcrumbs: ['Inicio', 'Blog', 'Por Qué el pH Importa'],
      tag: 'CosmeTalk • Ciencia de Formulación',
      h1: 'Por Qué el pH Importa en los Sérums de Vitamina C',
      subtitle: 'Tu sérum de Vitamina C podría ser inútil. El pH es el factor más importante.',
      author: 'Dr. Ahmed Haq',
      readTime: '7 min de lectura',
      problem: { heading: 'El Problema del pH', p1: 'El ácido L-ascórbico — la única forma de Vitamina C probada para penetrar la piel — es una molécula cargada a pH neutro.', p2: 'Por debajo de pH 3,5, se protona (descargada), permitiendo el paso a través de la barrera.' },
      sweetSpot: { heading: 'El Punto Óptimo del pH' },
      phScale: [
        { label: 'pH < 2,5', desc: 'Demasiado ácido — irritación y quemaduras químicas' },
        { label: 'pH 3,0–3,5', desc: '✓ Óptimo — máxima penetración, mínima irritación' },
        { label: 'pH 4,0–5,0', desc: 'Absorción reducida — molécula cargada bloqueada' },
        { label: 'pH > 5,0', desc: 'Absorción mínima — prácticamente inactivo' },
      ],
      triangle: { heading: 'El Triángulo de Estabilidad: Vitamina C + E + Ácido Ferúlico', p1: 'El estudio de la Universidad Duke de 2005 demostró que añadir Vitamina E y ácido ferúlico duplicó la capacidad fotoprotectora.', p2: 'Nuestro sérum Revitalise C20 usa esta combinación validada científicamente.' },
      faq: [
        { q: '¿Qué pH debe tener un sérum de Vitamina C?', a: 'pH 3,0-3,5 es óptimo. Por debajo de 2,5 causa irritación; por encima de 3,5 reduce significativamente la absorción.' },
        { q: '¿Por qué mi sérum de Vitamina C se vuelve marrón?', a: 'Oxidación. El ácido ferúlico y la Vitamina E estabilizan la fórmula.' },
      ],
      cta: { primary: 'Comprar Revitalise C20 — £85', secondary: '', heading: 'Prueba una Vitamina C Correctamente Formulada', subtext: '20% ácido L-ascórbico, ácido ferúlico, Vitamina E — a pH 3,0-3,5.' },
    } as PHData,
  },
  zh: {
    'vitamin-c-vs-retinol': {
      meta: { title: '维生素C与视黄醇：何时使用哪种 | Cosmedocs', description: '应该使用维生素C还是视黄醇？专家指南解析何时使用、如何在早晚护肤中安全组合。' },
      breadcrumbs: ['首页', '博客', '维生素C vs 视黄醇'],
      tag: 'CosmeTalk • 护肤科学',
      h1: '维生素C与视黄醇：何时使用哪种',
      subtitle: '皮肤科学中两种最有循证支持的活性成分——但您应该使用哪种，何时使用？',
      author: 'Ahmed Haq 医生',
      readTime: '8分钟阅读',
      shortAnswer: { heading: '简短回答', text: '两种都用——但在一天中的不同时间。维生素C属于早间护肤程序，作为抗氧化保护。视黄醇属于晚间，此时皮肤进入修复模式。' },
      am: { label: '早间', title: '维生素C', points: ['中和紫外线和污染产生的自由基', '抑制酪氨酸酶 → 减少色素沉着', '配合防晒增强光保护', '稳定胶原蛋白交联'] },
      pm: { label: '晚间', title: '视黄醇', points: ['激活成纤维细胞上的视黄醇受体', '加速角质细胞更新', '调节黑色素细胞色素分布', '刺激胶原蛋白I和III合成'] },
      whyNot: { heading: '为什么不同时使用？', p1: '维生素C在低pH值（2.5-3.5）下效果最佳。视黄醇在稍高pH值（5.5-6.0）下转化更有效。同时使用会产生pH冲突。', p2: '早晚分开不仅仅是方便——这在生物化学上是最优的。' },
      cellPerspective: { heading: '三细胞视角', text: '在Cosmedocs，我们围绕三种基本皮肤细胞类型来配方。' },
      table: { cell: '细胞类型', vitC: '维生素C效果', retinol: '视黄醇效果', rows: [['角质形成细胞', '通过神经酰胺支持增强屏障', '加速更新，清除堵塞'], ['黑色素细胞', '抑制酪氨酸酶 → 减少暗斑', '均匀分散黑色素簇'], ['成纤维细胞', '胶原蛋白合成的必要辅因子', '激活视黄醇受体 → 新胶原蛋白']] },
      faq: [
        { q: '维生素C和视黄醇可以一起使用吗？', a: '可以——早上使用维生素C，晚上使用视黄醇。这种分离最大化效果而不引起刺激。' },
        { q: '哪个更适合抗衰老？', a: '两者都必不可少。视黄醇刺激胶原蛋白生产，维生素C中和破坏胶原蛋白的自由基。' },
        { q: '何时能看到效果？', a: '维生素C的提亮效果在2-4周内可见。视黄醇的胶原蛋白和质地改善通常在8-12周后出现。' },
      ],
      cta: { primary: '购买维生素C', secondary: '购买视黄醇+', heading: '准备开始您的早晚护肤了吗？', subtext: '我们的医学美容产品设计为协同使用——针对所有三种基本皮肤细胞类型。' },
    } as VitaminCData,
    'three-cell-philosophy': {
      meta: { title: '三细胞皮肤哲学详解 | Cosmedocs', description: '每个皮肤问题都可追溯到三种细胞类型：角质形成细胞、黑色素细胞和成纤维细胞。了解如何同时针对三者创造持久转变。' },
      breadcrumbs: ['首页', '博客', '三细胞皮肤哲学'],
      tag: 'CosmeTalk • 皮肤科学',
      h1: '三细胞皮肤哲学详解',
      subtitle: '每个皮肤问题——衰老、肤色不均、堵塞——都可追溯到三种细胞类型。',
      author: 'Ahmed Haq 医生',
      readTime: '10分钟阅读',
      whyMatter: { heading: '为什么三种细胞很重要', text: '您的皮肤包含30多种细胞类型，但三种负责绝大多数可见皮肤健康。' },
      cells: [
        { name: '角质形成细胞', subtitle: '屏障建设者 • 约占表皮90%', description: '形成保持水分、阻挡刺激物的物理屏障。产生神经酰胺和脂肪酸。', treatments: '化学换肤、HydraFacial、视黄醇+' },
        { name: '黑色素细胞', subtitle: '色素调节者 • 约占基底层5-10%', description: '产生黑色素，赋予皮肤颜色并提供紫外线保护。', treatments: '维生素C精华、皮秒激光、化学换肤' },
        { name: '成纤维细胞', subtitle: '结构创造者 • 真皮结缔组织', description: '产生胶原蛋白、弹性蛋白和透明质酸。25岁后活性每年下降约1%。', treatments: '视黄醇+、PRP、微针' },
      ],
      clinical: { heading: '我们如何在临床中应用', text: '在Cosmedocs咨询时，您的治疗方案会针对所有三种细胞类型进行规划。' },
      faq: [
        { q: '皮肤中的三种细胞类型是什么？', a: '角质形成细胞（屏障）、黑色素细胞（色素）和成纤维细胞（胶原蛋白、弹性蛋白、透明质酸）。' },
        { q: '为什么护肤应该针对这三种？', a: '大多数皮肤问题涉及至少两种细胞类型的功能障碍。只针对一种会产生不完整的结果。' },
      ],
      cta: { primary: '购买美容产品', secondary: '预约咨询', heading: '体验三细胞方法', subtext: '从医生配方的美容产品开始，针对所有三种基本皮肤细胞类型。' },
    } as ThreeCellData,
    'ph-vitamin-c': {
      meta: { title: '为什么pH值在维生素C精华中很重要 | Cosmedocs', description: 'pH值决定您的维生素C精华是否真正有效。了解为什么pH 3.0-3.5是临床最佳点。' },
      breadcrumbs: ['首页', '博客', '为什么pH值很重要'],
      tag: 'CosmeTalk • 配方科学',
      h1: '为什么pH值在维生素C精华中很重要',
      subtitle: '您的维生素C精华可能毫无用处。pH值是决定L-抗坏血酸能否渗透皮肤的最重要因素。',
      author: 'Ahmed Haq 医生',
      readTime: '7分钟阅读',
      problem: { heading: 'pH问题', p1: 'L-抗坏血酸——唯一被证实能渗透皮肤的维生素C形式——在中性pH下是带电分子。', p2: '在pH 3.5及以下，它变为质子化（不带电），允许通过屏障。' },
      sweetSpot: { heading: 'pH最佳点' },
      phScale: [
        { label: 'pH < 2.5', desc: '酸度过高——刺激和化学灼伤' },
        { label: 'pH 3.0–3.5', desc: '✓ 最佳——最大渗透，最小刺激' },
        { label: 'pH 4.0–5.0', desc: '吸收降低——带电分子被阻挡' },
        { label: 'pH > 5.0', desc: '吸收极少——实际上无效' },
      ],
      triangle: { heading: '稳定三角：维生素C + E + 阿魏酸', p1: '2005年杜克大学研究证明，添加维生素E和阿魏酸使光保护能力翻倍。', p2: '我们的Revitalise C20精华使用这一科学验证的组合。' },
      faq: [
        { q: '维生素C精华应该是什么pH值？', a: 'pH 3.0-3.5是最佳。低于2.5会引起刺激；高于3.5会显著降低吸收。' },
        { q: '为什么我的维生素C精华变棕色了？', a: '氧化。阿魏酸和维生素E可以稳定配方。' },
      ],
      cta: { primary: '购买 Revitalise C20 — £85', secondary: '', heading: '试试正确配方的维生素C', subtext: '20% L-抗坏血酸、阿魏酸、维生素E——pH 3.0-3.5。' },
    } as PHData,
  },
};

// URL mapping
const BLOG_URLS: Record<BlogLang, Record<BlogArticleKey, string>> = {
  ar: { 'vitamin-c-vs-retinol': '/ar/blog/vitamin-c-vs-retinol/', 'three-cell-philosophy': '/ar/blog/three-cell-skin-philosophy/', 'ph-vitamin-c': '/ar/blog/why-ph-matters-vitamin-c/' },
  fr: { 'vitamin-c-vs-retinol': '/fr/blog/vitamine-c-vs-retinol/', 'three-cell-philosophy': '/fr/blog/philosophie-3-cellules-peau/', 'ph-vitamin-c': '/fr/blog/pourquoi-ph-important-vitamine-c/' },
  es: { 'vitamin-c-vs-retinol': '/es/blog/vitamina-c-vs-retinol/', 'three-cell-philosophy': '/es/blog/filosofia-3-celulas-piel/', 'ph-vitamin-c': '/es/blog/por-que-ph-importa-vitamina-c/' },
  zh: { 'vitamin-c-vs-retinol': '/zh/blog/vitamin-c-vs-retinol/', 'three-cell-philosophy': '/zh/blog/three-cell-skin-philosophy/', 'ph-vitamin-c': '/zh/blog/why-ph-matters-vitamin-c/' },
};

const EN_URLS: Record<BlogArticleKey, string> = {
  'vitamin-c-vs-retinol': '/blog/vitamin-c-vs-retinol/',
  'three-cell-philosophy': '/blog/three-cell-skin-philosophy/',
  'ph-vitamin-c': '/blog/why-ph-matters-vitamin-c/',
};

function isVitaminC(data: BlogTranslation): data is VitaminCData { return 'shortAnswer' in data; }
function isThreeCell(data: BlogTranslation): data is ThreeCellData { return 'cells' in data; }
function isPH(data: BlogTranslation): data is PHData { return 'phScale' in data; }

interface Props { lang: BlogLang; articleKey: BlogArticleKey; }

export default function TranslatedSkincareBlog({ lang, articleKey }: Props) {
  const data = translations[lang][articleKey];
  const isRTL = lang === 'ar';
  const canonicalUrl = `https://www.cosmedocs.com${BLOG_URLS[lang][articleKey]}`;

  // Build hreflang links
  const hreflangLinks = [
    { hreflang: 'en-gb', href: `https://www.cosmedocs.com${EN_URLS[articleKey]}` },
    { hreflang: 'ar', href: `https://www.cosmedocs.com${BLOG_URLS.ar[articleKey]}` },
    { hreflang: 'fr', href: `https://www.cosmedocs.com${BLOG_URLS.fr[articleKey]}` },
    { hreflang: 'es', href: `https://www.cosmedocs.com${BLOG_URLS.es[articleKey]}` },
    { hreflang: 'zh', href: `https://www.cosmedocs.com${BLOG_URLS.zh[articleKey]}` },
    { hreflang: 'x-default', href: `https://www.cosmedocs.com${EN_URLS[articleKey]}` },
  ];

  const breadcrumbItems = data.breadcrumbs.map((label, i) => {
    if (i === 0) return { label, href: `/${lang}/` };
    if (i === data.breadcrumbs.length - 1) return { label };
    return { label };
  });

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} data-rh="true" />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} data-rh="true" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.h1,
            description: data.meta.description,
            author: { "@type": "Person", name: data.author },
            publisher: { "@type": "Organization", name: "Cosmedocs", url: "https://www.cosmedocs.com" },
            datePublished: "2026-04-13",
            url: canonicalUrl,
            inLanguage: lang === 'zh' ? 'zh-Hans' : lang,
          })}
        </script>
      </Helmet>

      <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-[#F5F5F3]">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#F5F5F3]">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} variant="light" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
              <p className="text-[#C9A050] tracking-[0.2em] uppercase text-xs mb-3 font-medium">{data.tag}</p>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">{data.h1}</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{data.subtitle}</p>
              <p className="text-sm text-slate-400 mt-4">{data.author} • 13 April 2026 • {data.readTime}</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-slate prose-lg max-w-none">
              {isVitaminC(data) && <VitaminCContent data={data} />}
              {isThreeCell(data) && <ThreeCellContent data={data} />}
              {isPH(data) && <PHContent data={data} />}

              {/* FAQ */}
              <ExpandableSection preview={<h3 className="text-lg font-semibold text-slate-800 cursor-pointer">FAQs</h3>}>
                <div className="space-y-5">
                  {data.faq.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.q}</h4>
                      <p className="text-slate-600 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </ExpandableSection>
            </article>

            {/* CTA */}
            <div className="text-center py-12 border-t border-slate-200 mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{data.cta.heading}</h2>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">{data.cta.subtext}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/shop/">
                  <Button className="bg-[#C9A050] hover:bg-[#B89040] text-white px-6">
                    {data.cta.primary} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                {data.cta.secondary && (
                  <Link to="/contact/">
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6">
                      {data.cta.secondary} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function VitaminCContent({ data }: { data: VitaminCData }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.shortAnswer.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-6">{data.shortAnswer.text}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-10 not-prose">
        <Card className="border-amber-200 bg-amber-50/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">{data.am.label}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{data.am.title}</h3>
            <ul className="text-sm text-slate-600 space-y-1.5">
              {data.am.points.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-indigo-200 bg-indigo-50/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Moon className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">{data.pm.label}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{data.pm.title}</h3>
            <ul className="text-sm text-slate-600 space-y-1.5">
              {data.pm.points.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.whyNot.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-4">{data.whyNot.p1}</p>
      <p className="text-slate-700 leading-relaxed mb-8">{data.whyNot.p2}</p>

      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.cellPerspective.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-4">{data.cellPerspective.text}</p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-700">{data.table.cell}</th>
              <th className="text-left p-3 font-semibold text-slate-700">{data.table.vitC}</th>
              <th className="text-left p-3 font-semibold text-slate-700">{data.table.retinol}</th>
            </tr>
          </thead>
          <tbody>
            {data.table.rows.map(([cell, vc, ret], i) => (
              <tr key={i} className={`border-t ${i % 2 ? 'bg-slate-50/50' : ''}`}>
                <td className="p-3 font-medium text-slate-800">{cell}</td>
                <td className="p-3 text-slate-600">{vc}</td>
                <td className="p-3 text-slate-600">{ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ThreeCellContent({ data }: { data: ThreeCellData }) {
  const icons = [
    <Shield className="w-5 h-5 text-emerald-600" />,
    <Palette className="w-5 h-5 text-purple-600" />,
    <Zap className="w-5 h-5 text-cyan-600" />,
  ];
  const colours = ['emerald', 'purple', 'cyan'];

  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.whyMatter.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-6">{data.whyMatter.text}</p>

      <div className="grid gap-6 mb-10 not-prose">
        {data.cells.map((cell, i) => (
          <Card key={i} className={`border-${colours[i]}-200 bg-white`}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full bg-${colours[i]}-100 flex items-center justify-center`}>
                  {icons[i]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cell.name}</h3>
                  <p className={`text-sm text-${colours[i]}-600 font-medium`}>{cell.subtitle}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">{cell.description}</p>
              <p className="text-slate-600 text-sm"><strong>{cell.treatments}</strong></p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.clinical.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-6">{data.clinical.text}</p>
    </>
  );
}

function PHContent({ data }: { data: PHData }) {
  const phColours = ['bg-red-100 text-red-700', 'bg-emerald-100 text-emerald-800 border-2 border-emerald-400', 'bg-amber-100 text-amber-700', 'bg-slate-100 text-slate-600'];

  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.problem.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-4">{data.problem.p1}</p>
      <p className="text-slate-700 leading-relaxed mb-6">{data.problem.p2}</p>

      <div className="not-prose mb-10">
        <Card className="bg-white border-slate-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-[#C9A050]" /> {data.sweetSpot.heading}
            </h3>
            <div className="space-y-3">
              {data.phScale.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-24 text-right text-sm font-mono flex-shrink-0">{item.label}</span>
                  <div className={`flex-1 ${i === 1 ? 'h-8' : 'h-6'} ${phColours[i]} rounded-full flex items-center px-3`}>
                    <span className="text-xs font-medium">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.triangle.heading}</h2>
      <p className="text-slate-700 leading-relaxed mb-4">{data.triangle.p1}</p>
      <p className="text-slate-700 leading-relaxed mb-8">{data.triangle.p2}</p>
    </>
  );
}