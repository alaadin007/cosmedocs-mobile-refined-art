import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Calendar, Activity, Syringe, Star } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

type Lang = 'ja' | 'de';
type TreatmentKey = 'botox' | 'dermal-fillers' | 'lip-fillers' | 'jawline-filler' | 'chin-filler' | 'tear-trough-filler' | 'skin-rejuvenation';

interface TreatmentContent {
  meta: { title: string; description: string; keywords: string };
  breadcrumbs: { parent: string; parentPath: string; current: string };
  hero: { h1: string; subtitle: string };
  intro: { heading: string; text: string };
  benefits: string[];
  glance: { duration: string; results: string; recovery: string; product: string };
  faq: { q: string; a: string }[];
  extended: string[];
  cta: string;
  bookNow: string;
}

const URLS: Record<Lang, Record<TreatmentKey, string>> = {
  ja: {
    'botox': '/ja/treatments/botox/',
    'dermal-fillers': '/ja/treatments/dermal-fillers/',
    'lip-fillers': '/ja/treatments/lip-fillers/',
    'jawline-filler': '/ja/treatments/jawline-filler/',
    'chin-filler': '/ja/treatments/chin-filler/',
    'tear-trough-filler': '/ja/treatments/tear-trough-filler/',
    'skin-rejuvenation': '/ja/treatments/skin-rejuvenation/',
  },
  de: {
    'botox': '/de/behandlungen/botox/',
    'dermal-fillers': '/de/behandlungen/hyaluronsaeure/',
    'lip-fillers': '/de/behandlungen/lippenunterspritzung/',
    'jawline-filler': '/de/behandlungen/kinnlinie-filler/',
    'chin-filler': '/de/behandlungen/kinn-filler/',
    'tear-trough-filler': '/de/behandlungen/augenringe-filler/',
    'skin-rejuvenation': '/de/behandlungen/hautverjuengung/',
  },
};

const EN_URLS: Record<TreatmentKey, string> = {
  'botox': '/treatments/botox/',
  'dermal-fillers': '/treatments/dermal-fillers/',
  'lip-fillers': '/treatments/lip-fillers/',
  'jawline-filler': '/treatments/jawline-filler/',
  'chin-filler': '/treatments/chin-filler/',
  'tear-trough-filler': '/treatments/tear-trough-filler/',
  'skin-rejuvenation': '/treatments/skin-rejuvenation/',
};

// ─── JAPANESE TRANSLATIONS ───
const JA: Record<TreatmentKey, TreatmentContent> = {
  'botox': {
    meta: { title: 'ボトックス ロンドン | アンチエイジング注射 | Cosmedocs', description: 'ボトックス治療£275から。額のシワ、眉間のシワ、目尻のシワに。ハーレーストリート医師主導。2007年から。', keywords: 'ボトックス, アンチエイジング, シワ治療, ロンドン, ハーレーストリート' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: 'ボトックス' },
    hero: { h1: 'ボトックス — 自然な若返り', subtitle: '表情を保ちながら、シワを目立たなくする医師主導のボトックス治療' },
    intro: { heading: 'ボトックスとは？', text: 'ボトックス（ボツリヌストキシンA型）は、顔の筋肉を一時的にリラックスさせることで、額のシワ、眉間のシワ、目尻のシワを軽減する治療です。15〜20分の施術で、3〜6ヶ月の効果が持続します。' },
    benefits: ['額のシワの軽減', '眉間のシワ改善', '目尻のシワ（カラスの足跡）', '眉リフト効果', '凍った表情にならない', '即日復帰可能'],
    glance: { duration: '15-20分', results: '3-6ヶ月', recovery: 'ダウンタイムなし', product: 'ボツリヌストキシンA型' },
    faq: [
      { q: 'ボトックスは痛いですか？', a: '非常に細い針を使用するため、ほとんどの患者様は軽い不快感のみです。' },
      { q: 'ボトックスの費用は？', a: '£275から。エリア数と必要単位数により異なります。' },
      { q: '結果はいつ現れますか？', a: '3-5日で効果が現れ始め、10-14日で完全な結果が得られます。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'dermal-fillers': {
    meta: { title: 'ダーマルフィラー ロンドン | ヒアルロン酸 | Cosmedocs', description: '医師主導のダーマルフィラー治療。唇、頬、顎ライン、顎、涙袋のフィラー。ハーレーストリート。', keywords: 'ダーマルフィラー, ヒアルロン酸, フィラー, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: 'ダーマルフィラー' },
    hero: { h1: 'ダーマルフィラー', subtitle: 'ヒアルロン酸を使用した自然なボリューム回復と顔の輪郭形成' },
    intro: { heading: 'ダーマルフィラーとは？', text: 'ダーマルフィラーはヒアルロン酸（HA）ベースのジェルで、失われたボリュームを補い、顔の輪郭を整え、加齢によるシワを改善します。唇、頬、顎ライン、顎、涙袋など多くの部位に使用できます。' },
    benefits: ['自然なボリューム回復', '顔の輪郭定義', '唇の自然な増大', '涙袋のリフレッシュ', '即時の結果', '12-18ヶ月持続'],
    glance: { duration: '30-45分', results: '12-18ヶ月', recovery: '最小限のダウンタイム', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: 'フィラーは安全ですか？', a: 'はい、GMC登録医師が施術し、FDAおよびCE認証を受けた製品のみ使用します。' },
      { q: '費用はいくらですか？', a: 'リップフィラー£350から。部位と使用量により異なります。' },
      { q: '溶かすことはできますか？', a: 'はい、ヒアルロン酸フィラーはヒアルロニダーゼで溶解可能です。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'lip-fillers': {
    meta: { title: 'リップフィラー ロンドン | 唇の増大 | Cosmedocs', description: 'リップフィラー£350から。自然な唇の増大。ハーレーストリート医師主導。', keywords: 'リップフィラー, 唇の増大, ロンドン, ハーレーストリート' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: 'リップフィラー' },
    hero: { h1: 'リップフィラー', subtitle: '自然なボリュームと美しい形 — 過度にならない唇の増大' },
    intro: { heading: 'リップフィラーとは？', text: 'リップフィラーはヒアルロン酸を唇に注入し、自然なボリューム、形、対称性を向上させる治療です。バランスの取れた繊細な結果を重視しています。' },
    benefits: ['自然なボリューム増加', '唇の形の改善', '対称性の向上', '即時の結果', '最小限のダウンタイム', '溶解可能'],
    glance: { duration: '20-30分', results: '6-12ヶ月', recovery: '1-2日の軽い腫れ', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: 'リップフィラーは痛いですか？', a: '局所麻酔クリームを使用し、フィラー自体にも麻酔が含まれています。' },
      { q: '自然に見えますか？', a: 'はい、自然な結果を私たちの最優先事項としています。' },
      { q: '費用は？', a: 'リップフィラーは£350からです。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'jawline-filler': {
    meta: { title: '顎ラインフィラー ロンドン | 顎の輪郭形成 | Cosmedocs', description: '顎ラインフィラーで輪郭を定義。ハーレーストリート医師主導。自然な彫刻的結果。', keywords: '顎ラインフィラー, 顎の輪郭, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '顎ラインフィラー' },
    hero: { h1: '顎ラインフィラー', subtitle: 'シャープで定義された顎ラインのための非手術的輪郭形成' },
    intro: { heading: '顎ラインフィラーとは？', text: '顎ラインフィラーはヒアルロン酸を使用して、顎のラインを定義し、シャープにし、二重顎の外見を改善する治療です。' },
    benefits: ['顎ラインの定義', 'シャープな輪郭', '二重顎の改善', '即時の結果', '非手術', '12-18ヶ月持続'],
    glance: { duration: '30-45分', results: '12-18ヶ月', recovery: '最小限のダウンタイム', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: '顎ラインフィラーは男性にも適していますか？', a: 'はい、男女ともに人気の治療です。' },
      { q: '費用は？', a: '£450からです。使用量により異なります。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'chin-filler': {
    meta: { title: '顎フィラー ロンドン | 顎の増大 | Cosmedocs', description: '非手術的な顎の増大と定義。ハーレーストリート医師主導。', keywords: '顎フィラー, 顎の増大, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '顎フィラー' },
    hero: { h1: '顎フィラー', subtitle: 'バランスの取れた横顔のための非手術的な顎の改善' },
    intro: { heading: '顎フィラーとは？', text: '顎フィラーは、横顔のバランスを改善し、後退した顎を前方に投影し、全体的な顔の調和を向上させます。' },
    benefits: ['顎の定義', '横顔のバランス', '後退した顎の改善', '非手術', '即時の結果', '自然な外見'],
    glance: { duration: '20-30分', results: '12-18ヶ月', recovery: '最小限のダウンタイム', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: '顎フィラーは安全ですか？', a: 'はい、経験豊富なGMC登録医師が施術します。' },
      { q: '費用は？', a: '£400からです。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'tear-trough-filler': {
    meta: { title: '涙袋フィラー ロンドン | 目の下の治療 | Cosmedocs', description: '涙袋フィラーで疲れた目元をリフレッシュ。ハーレーストリート医師主導。', keywords: '涙袋フィラー, 目の下, クマ, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '涙袋フィラー' },
    hero: { h1: '涙袋フィラー', subtitle: '目の下のクマと凹みを改善する繊細な治療' },
    intro: { heading: '涙袋フィラーとは？', text: '涙袋フィラーは目の下の凹みを埋め、クマを軽減し、疲れた印象を改善する高度な治療です。非常に繊細な部位のため、経験豊富な医師による施術が不可欠です。' },
    benefits: ['クマの軽減', '目の下の凹み改善', 'リフレッシュした外見', '自然な結果', '最小限のダウンタイム', '即時の効果'],
    glance: { duration: '20-30分', results: '12-18ヶ月', recovery: '1-3日の軽い腫れ', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: '涙袋フィラーはリスクがありますか？', a: '経験豊富な医師による施術であれば安全です。当院では17年以上の実績があります。' },
      { q: '費用は？', a: '£450からです。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'skin-rejuvenation': {
    meta: { title: '肌の若返り ロンドン | Cosmedocs ハーレーストリート', description: 'プロファイロ、ポリヌクレオチド、マイクロニードリング、ケミカルピーリングなど先進の肌若返り治療。', keywords: '肌の若返り, プロファイロ, ポリヌクレオチド, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '肌の若返り' },
    hero: { h1: '肌の若返り', subtitle: 'コラーゲン刺激と肌質改善のための先進医療治療' },
    intro: { heading: '肌の若返りとは？', text: '肌の若返りは、プロファイロ、ポリヌクレオチド、マイクロニードリング、ケミカルピーリングなど、肌の内側からコラーゲンとエラスチンの生成を促進する治療群です。' },
    benefits: ['コラーゲン刺激', '肌のハリ改善', '輝きの回復', '肌質の向上', 'アンチエイジング', '自然な結果'],
    glance: { duration: '20-45分', results: '6-12ヶ月', recovery: '最小限のダウンタイム', product: 'プロファイロ・ポリヌクレオチド' },
    faq: [
      { q: 'どの治療が私に合っていますか？', a: 'カウンセリングで肌の状態を評価し、最適な治療プランをご提案します。' },
      { q: '費用は？', a: 'プロファイロ£350から、その他の治療は£200からです。' },
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
};

// ─── GERMAN TRANSLATIONS ───
const DE: Record<TreatmentKey, TreatmentContent> = {
  'botox': {
    meta: { title: 'Botox London | Anti-Falten-Injektionen | Cosmedocs', description: 'Botox-Behandlung ab £275. Stirnfalten, Zornesfalten, Krähenfüße. Arztgeleitete Behandlung an der Harley Street seit 2007.', keywords: 'Botox, Anti-Falten, London, Harley Street' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Botox' },
    hero: { h1: 'Botox — Natürliche Verjüngung', subtitle: 'Arztgeleitete Botox-Behandlung, die Ihren Ausdruck bewahrt und Falten reduziert' },
    intro: { heading: 'Was ist Botox?', text: 'Botox (Botulinumtoxin Typ A) entspannt gezielt die Gesichtsmuskeln, um dynamische Falten wie Stirnfalten, Zornesfalten und Krähenfüße zu reduzieren. Die Behandlung dauert 15-20 Minuten und hält 3-6 Monate.' },
    benefits: ['Stirnfalten glätten', 'Zornesfalten reduzieren', 'Krähenfüße behandeln', 'Brauenlifting', 'Kein eingefrorenes Aussehen', 'Kein Ausfall'],
    glance: { duration: '15-20 Min.', results: '3-6 Monate', recovery: 'Keine Ausfallzeit', product: 'Botulinumtoxin Typ A' },
    faq: [
      { q: 'Tut Botox weh?', a: 'Die Nadeln sind sehr fein — die meisten Patienten empfinden nur ein leichtes Stechen.' },
      { q: 'Was kostet Botox?', a: 'Ab £275. Der Preis hängt von der Anzahl der Bereiche und Einheiten ab.' },
      { q: 'Wann sehe ich Ergebnisse?', a: 'Nach 3-5 Tagen, volle Wirkung nach 10-14 Tagen.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'dermal-fillers': {
    meta: { title: 'Hyaluronsäure London | Dermal Filler | Cosmedocs', description: 'Arztgeleitete Filler-Behandlungen. Lippen, Wangen, Kinnlinie, Kinn und Augenringe an der Harley Street.', keywords: 'Hyaluronsäure, Dermal Filler, London, Harley Street' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Hyaluronsäure' },
    hero: { h1: 'Dermal Filler', subtitle: 'Hyaluronsäure-Filler für natürliche Volumenwiederherstellung und Gesichtskonturierung' },
    intro: { heading: 'Was sind Dermal Filler?', text: 'Dermal Filler sind Hyaluronsäure-basierte Gele, die verlorenes Volumen ersetzen, Gesichtskonturen definieren und altersbedingte Falten verbessern. Sie können an Lippen, Wangen, Kinnlinie, Kinn und unter den Augen eingesetzt werden.' },
    benefits: ['Natürliche Volumenwiederherstellung', 'Gesichtskonturdefinition', 'Lippenvergrößerung', 'Augenring-Auffrischung', 'Sofortige Ergebnisse', '12-18 Monate Haltbarkeit'],
    glance: { duration: '30-45 Min.', results: '12-18 Monate', recovery: 'Minimale Ausfallzeit', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Sind Filler sicher?', a: 'Ja, alle Behandlungen werden von GMC-registrierten Ärzten mit FDA/CE-zertifizierten Produkten durchgeführt.' },
      { q: 'Was kosten Filler?', a: 'Lippenfiller ab £350. Andere Bereiche variieren.' },
      { q: 'Können Filler aufgelöst werden?', a: 'Ja, Hyaluronsäure-Filler können mit Hyaluronidase aufgelöst werden.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'lip-fillers': {
    meta: { title: 'Lippenunterspritzung London | Cosmedocs Harley Street', description: 'Lippenunterspritzung ab £350. Natürliche Lippenvergrößerung durch Ärzte an der Harley Street.', keywords: 'Lippenunterspritzung, Lippenfiller, London, Harley Street' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Lippenunterspritzung' },
    hero: { h1: 'Lippenunterspritzung', subtitle: 'Natürliches Volumen und schöne Form — niemals übertrieben' },
    intro: { heading: 'Was ist eine Lippenunterspritzung?', text: 'Bei der Lippenunterspritzung wird Hyaluronsäure in die Lippen injiziert, um natürliches Volumen, Form und Symmetrie zu verbessern. Wir legen Wert auf ausgewogene, subtile Ergebnisse.' },
    benefits: ['Natürliches Volumen', 'Formverbesserung', 'Symmetriekorrektur', 'Sofortige Ergebnisse', 'Minimale Ausfallzeit', 'Auflösbar'],
    glance: { duration: '20-30 Min.', results: '6-12 Monate', recovery: '1-2 Tage Schwellung', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Tut es weh?', a: 'Betäubungscreme und lidocainhaltige Filler minimieren das Unbehagen.' },
      { q: 'Sieht es natürlich aus?', a: 'Ja, natürliche Ergebnisse sind unsere oberste Priorität.' },
      { q: 'Was kostet es?', a: 'Ab £350.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'jawline-filler': {
    meta: { title: 'Kinnlinie Filler London | Kieferkonturierung | Cosmedocs', description: 'Definieren Sie Ihre Kinnlinie mit Filler. Arztgeleitete Behandlung an der Harley Street.', keywords: 'Kinnlinie Filler, Kieferkonturierung, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Kinnlinie Filler' },
    hero: { h1: 'Kinnlinie Filler', subtitle: 'Scharfe, definierte Kinnlinie durch nicht-chirurgische Konturierung' },
    intro: { heading: 'Was ist Kinnlinie Filler?', text: 'Kinnlinie Filler verwendet Hyaluronsäure, um die Kieferlinie zu definieren, zu schärfen und das Erscheinungsbild eines Doppelkinns zu verbessern.' },
    benefits: ['Kinnlinie definieren', 'Scharfe Konturen', 'Doppelkinn verbessern', 'Sofortige Ergebnisse', 'Nicht-chirurgisch', '12-18 Monate Haltbarkeit'],
    glance: { duration: '30-45 Min.', results: '12-18 Monate', recovery: 'Minimale Ausfallzeit', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Geeignet für Männer?', a: 'Ja, sehr beliebt bei Männern und Frauen.' },
      { q: 'Was kostet es?', a: 'Ab £450.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'chin-filler': {
    meta: { title: 'Kinn Filler London | Kinnvergrößerung | Cosmedocs', description: 'Nicht-chirurgische Kinnvergrößerung und -definition. Arztgeleitete Behandlung an der Harley Street.', keywords: 'Kinn Filler, Kinnvergrößerung, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Kinn Filler' },
    hero: { h1: 'Kinn Filler', subtitle: 'Ausgeglichenes Profil durch nicht-chirurgische Kinnverbesserung' },
    intro: { heading: 'Was ist Kinn Filler?', text: 'Kinn Filler verbessert das Profilgleichgewicht, projiziert ein fliehenes Kinn und verbessert die gesamte Gesichtsharmonie.' },
    benefits: ['Kinndefinition', 'Profilbalance', 'Fliehenes Kinn korrigieren', 'Nicht-chirurgisch', 'Sofortige Ergebnisse', 'Natürliches Aussehen'],
    glance: { duration: '20-30 Min.', results: '12-18 Monate', recovery: 'Minimale Ausfallzeit', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Ist es sicher?', a: 'Ja, durchgeführt von erfahrenen GMC-registrierten Ärzten.' },
      { q: 'Was kostet es?', a: 'Ab £400.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'tear-trough-filler': {
    meta: { title: 'Augenringe Filler London | Unter-Augen-Behandlung | Cosmedocs', description: 'Auffrischung müder Augen mit Augenring-Filler. Arztgeleitete Behandlung an der Harley Street.', keywords: 'Augenringe Filler, Tränenrinne, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Augenringe Filler' },
    hero: { h1: 'Augenringe Filler', subtitle: 'Dunkle Ringe und Hohlräume unter den Augen sanft behandeln' },
    intro: { heading: 'Was ist Augenringe Filler?', text: 'Augenringe Filler füllt die Hohlräume unter den Augen, reduziert dunkle Ringe und verbessert ein müdes Erscheinungsbild. Diese delikate Behandlung erfordert erfahrene ärztliche Hände.' },
    benefits: ['Dunkle Ringe reduzieren', 'Hohlräume auffüllen', 'Erfrischt aussehen', 'Natürliche Ergebnisse', 'Minimale Ausfallzeit', 'Sofortige Wirkung'],
    glance: { duration: '20-30 Min.', results: '12-18 Monate', recovery: '1-3 Tage Schwellung', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Gibt es Risiken?', a: 'Bei erfahrenen Ärzten sehr sicher. Unsere Praxis hat über 17 Jahre Erfahrung.' },
      { q: 'Was kostet es?', a: 'Ab £450.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'skin-rejuvenation': {
    meta: { title: 'Hautverjüngung London | Cosmedocs Harley Street', description: 'Profhilo, Polynukleotide, Microneedling, chemische Peelings. Fortschrittliche arztgeleitete Hautverjüngung.', keywords: 'Hautverjüngung, Profhilo, Polynukleotide, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Hautverjüngung' },
    hero: { h1: 'Hautverjüngung', subtitle: 'Fortschrittliche Behandlungen für Kollagenstimulation und Hautqualität' },
    intro: { heading: 'Was ist Hautverjüngung?', text: 'Hautverjüngung umfasst Profhilo, Polynukleotide, Microneedling und chemische Peelings — Behandlungen, die von innen Kollagen und Elastin anregen.' },
    benefits: ['Kollagenstimulation', 'Verbesserte Elastizität', 'Natürlicher Glow', 'Hautqualität verbessern', 'Anti-Aging', 'Natürliche Ergebnisse'],
    glance: { duration: '20-45 Min.', results: '6-12 Monate', recovery: 'Minimale Ausfallzeit', product: 'Profhilo/Polynukleotide' },
    faq: [
      { q: 'Welche Behandlung ist richtig für mich?', a: 'In der Beratung bewerten wir Ihren Hautzustand und empfehlen den optimalen Plan.' },
      { q: 'Was kostet es?', a: 'Profhilo ab £350, andere Behandlungen ab £200.' },
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
};

const ALL_DATA: Record<Lang, Record<TreatmentKey, TreatmentContent>> = { ja: JA, de: DE };

interface Props { lang: Lang; treatmentKey: TreatmentKey; }

export default function TranslatedTier1Treatment({ lang, treatmentKey }: Props) {
  const data = ALL_DATA[lang][treatmentKey];
  const canonical = `https://www.cosmedocs.com${URLS[lang][treatmentKey]}`;

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} data-rh="true" />
        <meta name="keywords" content={data.meta.keywords} data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        <link rel="alternate" hrefLang="en-gb" href={`https://www.cosmedocs.com${EN_URLS[treatmentKey]}`} data-rh="true" />
        <link rel="alternate" hrefLang="x-default" href={`https://www.cosmedocs.com${EN_URLS[treatmentKey]}`} data-rh="true" />
        <link rel="alternate" hrefLang="ja" href={`https://www.cosmedocs.com${URLS.ja[treatmentKey]}`} data-rh="true" />
        <link rel="alternate" hrefLang="de" href={`https://www.cosmedocs.com${URLS.de[treatmentKey]}`} data-rh="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "name": "CosmeDocs", "url": "https://www.cosmedocs.com/", "telephone": "+44 20 3733 3227", "address": { "@type": "PostalAddress", "streetAddress": "10 Harley Street", "addressLocality": "London", "postalCode": "W1G 9PF", "addressCountry": "GB" } },
              { "@type": "MedicalProcedure", "name": data.hero.h1, "description": data.intro.text, "url": canonical, "procedureType": "NoninvasiveProcedure" },
              { "@type": "FAQPage", "mainEntity": data.faq.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
        <section className="relative overflow-hidden bg-black pt-0 pb-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: data.breadcrumbs.parent, path: data.breadcrumbs.parentPath }]} currentPage={data.breadcrumbs.current} />
            <div className="max-w-3xl pt-8 md:pt-16">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{data.hero.h1}</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-lg text-white/60 max-w-2xl">{data.hero.subtitle}</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full px-8 py-3 font-medium text-sm transition-all duration-300">
                  {data.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{data.intro.heading}</h2>
                <p className="text-white/60 leading-relaxed">{data.intro.text}</p>
              </section>
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.benefits.map((b, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle className="w-4 h-4 text-[#C9A050] flex-shrink-0" />
                      <span className="text-sm text-white/80">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
              <section>
                <div className="space-y-4">
                  {data.faq.map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h3 className="text-sm font-semibold text-white mb-2">{item.q}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="text-center py-8 border-t border-white/10">
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C9A050] hover:text-[#B8903F] font-semibold transition-colors">
                  {data.bookNow} <ArrowRight className="h-4 w-4" />
                </a>
              </section>
            </div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-[#C9A050] uppercase tracking-wider mb-4">At a Glance</h3>
                <div className="space-y-4">
                  <GlanceStat icon={<Clock className="w-4 h-4" />} label="Duration" value={data.glance.duration} />
                  <GlanceStat icon={<Calendar className="w-4 h-4" />} label="Results last" value={data.glance.results} />
                  <GlanceStat icon={<Activity className="w-4 h-4" />} label="Recovery" value={data.glance.recovery} />
                  <GlanceStat icon={<Syringe className="w-4 h-4" />} label="Product" value={data.glance.product} />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <a href="https://med.as.me/harleystreet" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A050]/20">
                  {data.cta}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="sr-only" aria-hidden="true"><p>{data.meta.description} {data.meta.keywords}</p></div>
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
