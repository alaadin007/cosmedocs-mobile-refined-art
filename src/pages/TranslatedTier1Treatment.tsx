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
    intro: { heading: 'ボトックスとは？', text: 'ボトックス（ボツリヌストキシンA型）は、顔の筋肉を一時的にリラックスさせることで、額のシワ、眉間のシワ、目尻のシワを軽減する治療です。15〜20分の施術で、3〜6ヶ月の効果が持続します。Cosmedocsでは2007年からボトックス注射を提供しており、100万回以上の注入実績を持つ専門クリニックです。' },
    benefits: ['額のシワの軽減', '眉間のシワ改善', '目尻のシワ（カラスの足跡）', '眉リフト効果', '凍った表情にならない', '即日復帰可能'],
    glance: { duration: '15-20分', results: '3-6ヶ月', recovery: 'ダウンタイムなし', product: 'ボツリヌストキシンA型' },
    faq: [
      { q: 'ボトックスは痛いですか？', a: '非常に細い針を使用するため、ほとんどの患者様は軽い不快感のみです。局所麻酔クリームの使用も可能です。' },
      { q: 'ボトックスの費用は？', a: '£275から。エリア数と必要単位数により異なります。カウンセリングで最適な治療プランと正確な費用をご案内いたします。' },
      { q: '結果はいつ現れますか？', a: '3-5日で効果が現れ始め、10-14日で完全な結果が得られます。効果は通常3-6ヶ月持続します。' },
      { q: '初めてでも安全ですか？', a: 'はい、ボトックスは世界で最も広く研究された美容治療の一つです。GMC登録医師が安全に施術を行います。' },
    ],
    extended: [
      'ボトックスは単なるシワ治療ではありません。予防的アンチエイジング（プリジュベネーション）としても注目されており、20代後半から30代の方にも人気があります。筋肉の過度な動きを穏やかに抑えることで、将来的な深いシワの形成を防ぐ効果があります。',
      'Cosmedocsでは、「自然な表情を保つ」ことを最も重要な原則としています。凍ったような表情や不自然な結果は、私たちの目指すものではありません。Dr. Ahmed Haqは、一人ひとりの筋肉の動きを細かく分析し、最適な注入量と位置を決定します。',
      '咬筋ボトックスは、日本人患者様に特に人気の治療です。エラの張りを自然に軽減し、輪郭をシャープにする効果があります。また、歯ぎしりや顎関節症の症状緩和にも効果を発揮します。医療目的のボトックスとして、偏頭痛治療や多汗症治療も提供しています。',
      '私たちの美学は見えない芸術。ボトックスは、言葉を使わずに語る変化の第一歩です。大胆、自然、常にあなたらしく — Cosmedocsのボトックス治療は、あなたの自然な美しさを引き出すためのものです。',
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'dermal-fillers': {
    meta: { title: 'ダーマルフィラー ロンドン | ヒアルロン酸 | Cosmedocs', description: '医師主導のダーマルフィラー治療。唇、頬、顎ライン、顎、涙袋のフィラー。ハーレーストリート。', keywords: 'ダーマルフィラー, ヒアルロン酸, フィラー, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: 'ダーマルフィラー' },
    hero: { h1: 'ダーマルフィラー', subtitle: 'ヒアルロン酸を使用した自然なボリューム回復と顔の輪郭形成' },
    intro: { heading: 'ダーマルフィラーとは？', text: 'ダーマルフィラーはヒアルロン酸（HA）ベースのジェルで、失われたボリュームを補い、顔の輪郭を整え、加齢によるシワを改善します。唇、頬、顎ライン、顎、涙袋など多くの部位に使用でき、即時に自然な結果が得られます。' },
    benefits: ['自然なボリューム回復', '顔の輪郭定義', '唇の自然な増大', '涙袋のリフレッシュ', '即時の結果', '12-18ヶ月持続'],
    glance: { duration: '30-45分', results: '12-18ヶ月', recovery: '最小限のダウンタイム', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: 'フィラーは安全ですか？', a: 'はい、GMC登録医師が施術し、FDAおよびCE認証を受けた製品のみ使用します。ヒアルロン酸は体内に自然に存在する成分です。' },
      { q: '費用はいくらですか？', a: 'リップフィラー£350から。部位と使用量により異なります。HA Makeoverは£1,200からです。' },
      { q: '溶かすことはできますか？', a: 'はい、ヒアルロン酸フィラーはヒアルロニダーゼで安全に溶解可能です。これはHA系フィラーの大きな利点です。' },
      { q: '結果に不満がある場合は？', a: '施術後2週間のフォローアップで結果を評価し、必要に応じて微調整を行います。' },
    ],
    extended: [
      'ヒアルロン酸フィラーは、加齢とともに失われるボリュームを自然に補う最も効果的な方法の一つです。30代以降、骨密度の低下と脂肪パッドの萎縮により、顔のボリュームが徐々に減少します。フィラーはこのプロセスを繊細に補正し、若々しい輪郭を取り戻します。',
      'Cosmedocsでは、顔全体のバランスと調和を重視した治療を行っています。単一の部位だけを治療するのではなく、顔全体のプロポーションを考慮した総合的なアプローチを採用しています。HA Makeoverは、この哲学に基づく包括的な若返りプログラムです。',
      '使用する製品は、JuvedermやRestylaneなど世界的に信頼された医療用ヒアルロン酸フィラーです。各製品は異なる粘度と弾力を持ち、治療する部位に最適な製品を選択します。唇にはソフトな製品、顎ラインには構造的な硬さを持つ製品を使用するなど、精密なカスタマイズを行います。',
      '私たちの美学は見えない芸術。フィラー治療は、あなたの自然な美しさを引き出し、静かに、しかし確実に変化を実現します。過度な注入や不自然な結果は、Cosmedocsのフィロソフィーに反するものです。',
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'lip-fillers': {
    meta: { title: 'リップフィラー ロンドン | 唇の増大 | Cosmedocs', description: 'リップフィラー£350から。自然な唇の増大。ハーレーストリート医師主導。', keywords: 'リップフィラー, 唇の増大, ロンドン, ハーレーストリート' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: 'リップフィラー' },
    hero: { h1: 'リップフィラー', subtitle: '自然なボリュームと美しい形 — 過度にならない唇の増大' },
    intro: { heading: 'リップフィラーとは？', text: 'リップフィラーはヒアルロン酸を唇に注入し、自然なボリューム、形、対称性を向上させる治療です。Cosmedocsでは、バランスの取れた繊細な結果を最優先にしています。' },
    benefits: ['自然なボリューム増加', '唇の形の改善', '対称性の向上', '即時の結果', '最小限のダウンタイム', '溶解可能'],
    glance: { duration: '20-30分', results: '6-12ヶ月', recovery: '1-2日の軽い腫れ', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: 'リップフィラーは痛いですか？', a: '局所麻酔クリームを使用し、フィラー自体にもリドカインが含まれています。不快感は最小限です。' },
      { q: '自然に見えますか？', a: 'はい、自然な結果を私たちの最優先事項としています。「やりすぎ」にならないよう、段階的なアプローチを推奨しています。' },
      { q: '費用は？', a: 'リップフィラーは1ml £350からです。多くの方は0.5-1mlで十分な変化を感じます。' },
    ],
    extended: [
      'リップフィラーは、Cosmedocsで最も人気のある治療の一つです。唇は顔の印象を大きく左右する部位であり、繊細な技術が要求されます。Dr. Ahmed Haqは、唇の解剖学を深く理解し、一人ひとりの顔のバランスに合わせた自然な唇のデザインを実現します。',
      '初めてリップフィラーを受ける方には、0.5mlからの段階的なアプローチを推奨しています。少量から始めて結果を確認し、必要に応じて追加することで、自然な仕上がりが保証されます。結果に満足した後は、6-12ヶ月ごとのメンテナンスで美しい唇を維持できます。',
      '施術後1-2日は軽い腫れが生じることがありますが、これは正常な反応です。多くの患者様は翌日から通常の活動に復帰されています。内出血が生じた場合も、通常1週間以内に自然に解消します。',
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'jawline-filler': {
    meta: { title: '顎ラインフィラー ロンドン | 顎の輪郭形成 | Cosmedocs', description: '顎ラインフィラーで輪郭を定義。ハーレーストリート医師主導。自然な彫刻的結果。', keywords: '顎ラインフィラー, 顎の輪郭, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '顎ラインフィラー' },
    hero: { h1: '顎ラインフィラー', subtitle: 'シャープで定義された顎ラインのための非手術的輪郭形成' },
    intro: { heading: '顎ラインフィラーとは？', text: '顎ラインフィラーはヒアルロン酸を使用して、顎のラインを定義し、シャープにし、二重顎の外見を改善する治療です。男女ともに人気があり、顔の下3分の1を引き締める効果があります。' },
    benefits: ['顎ラインの定義', 'シャープな輪郭', '二重顎の改善', '即時の結果', '非手術', '12-18ヶ月持続'],
    glance: { duration: '30-45分', results: '12-18ヶ月', recovery: '最小限のダウンタイム', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: '顎ラインフィラーは男性にも適していますか？', a: 'はい、男女ともに非常に人気の治療です。男性はよりシャープで角張った輪郭を、女性はより滑らかで定義された輪郭を求める傾向があります。' },
      { q: '費用は？', a: '£450からです。使用量により異なります。カウンセリングで正確な見積もりをお出しします。' },
      { q: '顎フィラーと組み合わせられますか？', a: 'はい、顎フィラーとの併用で横顔全体のバランスを改善できます。' },
    ],
    extended: [
      '顎ラインフィラーは、非手術的に顔の下半分を劇的に改善できる治療です。加齢により皮膚のたるみや脂肪の下垂が進むと、顎ラインが不明瞭になります。フィラーで顎ラインを再定義することで、引き締まった若々しい印象を取り戻すことができます。',
      '治療では、硬度の高い構造的フィラーを使用し、骨格に沿って正確に注入します。これにより、自然な骨格構造を模倣した持続性の高い結果が得られます。施術は安全なカニューラ（鈍い先端の針）を使用して行うことが多く、内出血のリスクを最小限に抑えます。',
      'Cosmedocsでは、顎ラインフィラーを単独で行うことも、HA Makeoverの一部として他の部位と組み合わせることも可能です。顎、頬、こめかみと併用することで、顔全体のリフトアップ効果を実現します。',
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'chin-filler': {
    meta: { title: '顎フィラー ロンドン | 顎の増大 | Cosmedocs', description: '非手術的な顎の増大と定義。ハーレーストリート医師主導。', keywords: '顎フィラー, 顎の増大, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '顎フィラー' },
    hero: { h1: '顎フィラー', subtitle: 'バランスの取れた横顔のための非手術的な顎の改善' },
    intro: { heading: '顎フィラーとは？', text: '顎フィラーは、横顔のバランスを改善し、後退した顎を前方に投影し、全体的な顔の調和を向上させます。メスを使わない安全なアプローチで、即時に結果が得られます。' },
    benefits: ['顎の定義', '横顔のバランス', '後退した顎の改善', '非手術', '即時の結果', '自然な外見'],
    glance: { duration: '20-30分', results: '12-18ヶ月', recovery: '最小限のダウンタイム', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: '顎フィラーは安全ですか？', a: 'はい、経験豊富なGMC登録医師が施術します。使用する製品はすべてFDA/CE認証済みです。' },
      { q: '費用は？', a: '£400からです。多くの場合1-2mlで十分な結果が得られます。' },
      { q: '顎ラインフィラーとの違いは？', a: '顎フィラーは顎の先端の投影と定義に焦点を当て、顎ラインフィラーは顎の側面のラインを定義します。' },
    ],
    extended: [
      '横顔のバランスは顔の美しさにおいて非常に重要な要素ですが、日本人を含むアジア人の骨格では顎の後退が比較的一般的です。顎フィラーは、この骨格的な特徴を非手術的に改善し、横顔の調和を実現する治療です。',
      '治療は通常20-30分で完了し、即時に結果が確認できます。Dr. Ahmed Haqは、患者様の正面と横顔の両方を分析し、最適な投影量を決定します。過度な投影は不自然な印象を与えるため、控えめで洗練された結果を目指します。',
      '顎フィラーは、顎ラインフィラーや頬フィラーと組み合わせることで、より包括的な顔のリフレッシュが可能です。すべてのフィラー治療と同様、結果が気に入らない場合はヒアルロニダーゼで溶解できる安全性の高い治療です。',
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'tear-trough-filler': {
    meta: { title: '涙袋フィラー ロンドン | 目の下の治療 | Cosmedocs', description: '涙袋フィラーで疲れた目元をリフレッシュ。ハーレーストリート医師主導。', keywords: '涙袋フィラー, 目の下, クマ, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '涙袋フィラー' },
    hero: { h1: '涙袋フィラー', subtitle: '目の下のクマと凹みを改善する繊細な治療' },
    intro: { heading: '涙袋フィラーとは？', text: '涙袋フィラーは目の下の凹みを埋め、クマを軽減し、疲れた印象を改善する高度な治療です。非常に繊細な部位のため、経験豊富な医師による施術が不可欠です。Cosmedocsでは17年以上のフィラー注入実績があります。' },
    benefits: ['クマの軽減', '目の下の凹み改善', 'リフレッシュした外見', '自然な結果', '最小限のダウンタイム', '即時の効果'],
    glance: { duration: '20-30分', results: '12-18ヶ月', recovery: '1-3日の軽い腫れ', product: 'ヒアルロン酸フィラー' },
    faq: [
      { q: '涙袋フィラーはリスクがありますか？', a: '目の下は繊細な部位ですが、経験豊富な医師による施術であれば非常に安全です。当院では適切な製品選択と注入技術により、チンダル現象などの合併症を最小限に抑えています。' },
      { q: '費用は？', a: '£450からです。使用量は通常0.5-1mlです。' },
      { q: '他の治療との組み合わせは？', a: '頬フィラーと併用すると、目元から頬にかけてのスムーズな移行が実現します。' },
    ],
    extended: [
      '目の下のクマや凹みは、睡眠不足だけでなく、加齢による脂肪パッドの萎縮や骨密度の低下が原因であることが多いです。涙袋フィラーは、この構造的な変化を補正し、疲れた印象を改善します。',
      'この治療は高度な技術を必要とするため、経験豊富な医師のみが行うべきです。Cosmedocsでは、目の下の皮膚の薄さと血管の密度を考慮し、最も適した製品と注入法を選択します。カニューラ技法を使用することで、内出血のリスクを大幅に軽減しています。',
      '涙袋フィラーの結果は通常12-18ヶ月持続し、定期的なメンテナンスで長期的な改善を維持できます。結果が気に入らない場合やご不安がある場合は、ヒアルロニダーゼで安全に溶解することが可能です。私たちの美学は見えない芸術 — 自然な若々しさを取り戻す、それが私たちの目指す結果です。',
    ],
    cta: 'カウンセリングを予約', bookNow: '予約する',
  },
  'skin-rejuvenation': {
    meta: { title: '肌の若返り ロンドン | Cosmedocs ハーレーストリート', description: 'プロファイロ、ポリヌクレオチド、マイクロニードリング、ケミカルピーリングなど先進の肌若返り治療。', keywords: '肌の若返り, プロファイロ, ポリヌクレオチド, ロンドン' },
    breadcrumbs: { parent: '治療メニュー', parentPath: '/ja/treatments/', current: '肌の若返り' },
    hero: { h1: '肌の若返り', subtitle: 'コラーゲン刺激と肌質改善のための先進医療治療' },
    intro: { heading: '肌の若返りとは？', text: '肌の若返りは、プロファイロ、ポリヌクレオチド、マイクロニードリング、ケミカルピーリングなど、肌の内側からコラーゲンとエラスチンの生成を促進する治療群です。肌の質感、ハリ、輝きを内側から改善します。' },
    benefits: ['コラーゲン刺激', '肌のハリ改善', '輝きの回復', '肌質の向上', 'アンチエイジング', '自然な結果'],
    glance: { duration: '20-45分', results: '6-12ヶ月', recovery: '最小限のダウンタイム', product: 'プロファイロ・ポリヌクレオチド' },
    faq: [
      { q: 'どの治療が私に合っていますか？', a: 'カウンセリングで肌の状態を評価し、最適な治療プランをご提案します。肌質、年齢、目標に基づいて個別化されたプランを作成します。' },
      { q: '費用は？', a: 'プロファイロ£350から、ケミカルピーリング£200から、マイクロニードリング£250からです。' },
      { q: '何回の施術が必要ですか？', a: '治療により異なりますが、通常2-3回のセッションで最適な結果が得られます。' },
    ],
    extended: [
      'プロファイロは、イタリア発の革新的なヒアルロン酸製剤で、肌のハリとハイドレーションを劇的に改善します。従来のフィラーとは異なり、プロファイロはボリュームを追加するのではなく、コラーゲンとエラスチンの産生を刺激することで肌質を根本的に改善します。',
      'ポリヌクレオチド（PN）は、サーモンDNAから精製された成分で、細胞レベルで肌の再生を促進します。特に肌のテクスチャー改善、くすみの解消、細かいシワの軽減に優れた効果を発揮します。目の周りの繊細な部位にも使用でき、涙袋フィラーの代替としても人気があります。',
      'マイクロニードリングとPRP（多血小板血漿）は、体自身の治癒力を活用した治療です。微細な針で肌に制御された損傷を与え、コラーゲンリモデリングを促進します。ニキビ跡、色素沈着、毛穴の開きに特に効果的です。ケミカルピーリングは、古い角質を除去し、新しい健康な肌の成長を促進します。',
      '私たちの美学は見えない芸術。肌の若返り治療は、内側から輝く健康的な肌を実現する — 最も自然で、最も持続的な美容医療のアプローチです。',
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
    intro: { heading: 'Was ist Botox?', text: 'Botox (Botulinumtoxin Typ A) entspannt gezielt die Gesichtsmuskeln, um dynamische Falten wie Stirnfalten, Zornesfalten und Krähenfüße zu reduzieren. Die Behandlung dauert 15-20 Minuten und hält 3-6 Monate. Cosmedocs bietet seit 2007 arztgeleitete Botox-Behandlungen an der Harley Street an.' },
    benefits: ['Stirnfalten glätten', 'Zornesfalten reduzieren', 'Krähenfüße behandeln', 'Brauenlifting', 'Kein eingefrorenes Aussehen', 'Kein Ausfall'],
    glance: { duration: '15-20 Min.', results: '3-6 Monate', recovery: 'Keine Ausfallzeit', product: 'Botulinumtoxin Typ A' },
    faq: [
      { q: 'Tut Botox weh?', a: 'Die Nadeln sind sehr fein — die meisten Patienten empfinden nur ein leichtes Stechen. Betäubungscreme ist auf Wunsch verfügbar.' },
      { q: 'Was kostet Botox?', a: 'Ab £275 (ca. €320). Der Preis hängt von der Anzahl der Bereiche und Einheiten ab.' },
      { q: 'Wann sehe ich Ergebnisse?', a: 'Nach 3-5 Tagen, volle Wirkung nach 10-14 Tagen.' },
      { q: 'Ist es sicher für Erstbehandlungen?', a: 'Ja, Botox ist eine der am besten erforschten ästhetischen Behandlungen weltweit. Alle Eingriffe werden von GMC-registrierten Ärzten durchgeführt.' },
    ],
    extended: [
      'Botox ist nicht nur eine Faltenbehandlung — es wird zunehmend als präventive Anti-Aging-Maßnahme (Prejuvenation) eingesetzt. Patienten ab Ende 20 nutzen Botox, um die Bildung tiefer Falten von vornherein zu verhindern. Die sanfte Muskelentspannung bewahrt die natürliche Mimik, während zukünftige Linienbildung reduziert wird.',
      'Bei Cosmedocs steht die Bewahrung Ihres natürlichen Ausdrucks an erster Stelle. Dr. Ahmed Haq analysiert die individuelle Muskelaktivität jedes Patienten und bestimmt die optimale Dosierung und Injektionspunkte. Das Ergebnis: Sie sehen erfrischt und ausgeruht aus — nicht behandelt.',
      'Masseter Botox zur Kieferverschlankung ist besonders bei unseren internationalen Patienten beliebt. Es reduziert den Massetermuskel, verschlankt die Kieferlinie und kann gleichzeitig Bruxismus-Symptome lindern. Medizinisches Botox wird auch bei chronischer Migräne und Hyperhidrose (übermäßiges Schwitzen) erfolgreich eingesetzt.',
      'Unsere Ästhetik ist unsichtbare Kunst. Mutig, natürlich, immer Ihr Weg. Botox bei Cosmedocs ist der erste Schritt zu einer Veränderung, die spricht — ohne ein Wort zu sagen.',
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
      { q: 'Was kosten Filler?', a: 'Lippenfiller ab £350, andere Bereiche variieren. HA Makeover ab £1.200.' },
      { q: 'Können Filler aufgelöst werden?', a: 'Ja, Hyaluronsäure-Filler können jederzeit mit Hyaluronidase sicher aufgelöst werden.' },
    ],
    extended: [
      'Ab dem 30. Lebensjahr verliert das Gesicht durch Knochenabbau und Fettgewebsschwund zunehmend an Volumen. Hyaluronsäure-Filler ersetzen dieses verlorene Volumen gezielt und stellen jugendliche Konturen wieder her — ohne chirurgischen Eingriff.',
      'Cosmedocs verfolgt einen ganzheitlichen Ansatz: Statt einzelne Bereiche isoliert zu behandeln, analysieren wir das gesamte Gesicht und erstellen einen harmonischen Behandlungsplan. Das HA Makeover kombiniert mehrere Filler-Behandlungen in einer Sitzung für ein natürlich verjüngtes Gesamtergebnis.',
      'Wir verwenden ausschließlich Premium-Produkte wie Juvederm und Restylane, die sich in ihrer Viskosität und Elastizität unterscheiden. Für jeden Behandlungsbereich wählen wir das optimale Produkt: weiche Filler für die Lippen, strukturelle Filler für die Kinnlinie.',
      'Unsere Ästhetik ist unsichtbare Kunst. Filler bei Cosmedocs verfeinern Ihre natürliche Schönheit subtil und elegant — niemals übertrieben.',
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'lip-fillers': {
    meta: { title: 'Lippenunterspritzung London | Cosmedocs Harley Street', description: 'Lippenunterspritzung ab £350. Natürliche Lippenvergrößerung durch Ärzte an der Harley Street.', keywords: 'Lippenunterspritzung, Lippenfiller, London, Harley Street' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Lippenunterspritzung' },
    hero: { h1: 'Lippenunterspritzung', subtitle: 'Natürliches Volumen und schöne Form — niemals übertrieben' },
    intro: { heading: 'Was ist eine Lippenunterspritzung?', text: 'Bei der Lippenunterspritzung wird Hyaluronsäure in die Lippen injiziert, um natürliches Volumen, Form und Symmetrie zu verbessern. Wir legen Wert auf ausgewogene, subtile Ergebnisse, die Ihre natürliche Lippenform respektieren.' },
    benefits: ['Natürliches Volumen', 'Formverbesserung', 'Symmetriekorrektur', 'Sofortige Ergebnisse', 'Minimale Ausfallzeit', 'Auflösbar'],
    glance: { duration: '20-30 Min.', results: '6-12 Monate', recovery: '1-2 Tage Schwellung', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Tut es weh?', a: 'Betäubungscreme und lidocainhaltige Filler minimieren das Unbehagen erheblich.' },
      { q: 'Sieht es natürlich aus?', a: 'Ja, natürliche Ergebnisse sind unsere oberste Priorität. Wir empfehlen einen schrittweisen Ansatz.' },
      { q: 'Was kostet es?', a: 'Ab £350 für 1ml. Viele Patienten erzielen mit 0,5-1ml hervorragende Ergebnisse.' },
    ],
    extended: [
      'Die Lippenunterspritzung ist eine der beliebtesten Behandlungen bei Cosmedocs. Die Lippen prägen den Gesichtsausdruck maßgeblich, weshalb höchste Präzision erforderlich ist. Dr. Ahmed Haq analysiert Ihre individuelle Lippenform und entwirft ein natürliches Design, das zu Ihrem Gesicht passt.',
      'Für Erstbehandlungen empfehlen wir einen schrittweisen Ansatz: Mit 0,5ml beginnen, das Ergebnis bewerten und bei Bedarf ergänzen. So wird sichergestellt, dass das Ergebnis immer natürlich und ausgewogen bleibt. Regelmäßige Auffrischungen alle 6-12 Monate erhalten das Ergebnis langfristig.',
      'Nach der Behandlung kann eine leichte Schwellung für 1-2 Tage auftreten — dies ist völlig normal. Die meisten Patienten kehren am nächsten Tag zu ihren normalen Aktivitäten zurück. Eventuelle Hämatome klingen in der Regel innerhalb einer Woche ab.',
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'jawline-filler': {
    meta: { title: 'Kinnlinie Filler London | Kieferkonturierung | Cosmedocs', description: 'Definieren Sie Ihre Kinnlinie mit Filler. Arztgeleitete Behandlung an der Harley Street.', keywords: 'Kinnlinie Filler, Kieferkonturierung, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Kinnlinie Filler' },
    hero: { h1: 'Kinnlinie Filler', subtitle: 'Scharfe, definierte Kinnlinie durch nicht-chirurgische Konturierung' },
    intro: { heading: 'Was ist Kinnlinie Filler?', text: 'Kinnlinie Filler verwendet Hyaluronsäure, um die Kieferlinie zu definieren, zu schärfen und das Erscheinungsbild eines Doppelkinns zu verbessern. Eine der beliebtesten Konturierungsbehandlungen bei Männern und Frauen.' },
    benefits: ['Kinnlinie definieren', 'Scharfe Konturen', 'Doppelkinn verbessern', 'Sofortige Ergebnisse', 'Nicht-chirurgisch', '12-18 Monate Haltbarkeit'],
    glance: { duration: '30-45 Min.', results: '12-18 Monate', recovery: 'Minimale Ausfallzeit', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Geeignet für Männer?', a: 'Ja, sehr beliebt bei Männern (schärfere Konturen) und Frauen (definierte, elegante Linie).' },
      { q: 'Was kostet es?', a: 'Ab £450. Der genaue Preis wird in der Beratung festgelegt.' },
      { q: 'Kombinierbar mit Kinn Filler?', a: 'Ja, die Kombination verbessert das gesamte Profil harmonisch.' },
    ],
    extended: [
      'Die Kinnlinie ist einer der wichtigsten Indikatoren für ein jugendliches Gesicht. Mit zunehmendem Alter verliert die Kieferlinie an Definition durch Hautelastizitätsverlust und Fetteinlagerungen. Kinnlinie Filler stellt diese Definition nicht-chirurgisch wieder her und erzeugt eine straffe, jugendliche Kieferlinie.',
      'Für die Behandlung verwenden wir strukturelle Filler mit hoher Viskosität, die entlang des Kieferknochens präzise platziert werden. Häufig setzen wir Kanülen ein, um Hämatome zu minimieren. Die Ergebnisse sind sofort sichtbar und halten 12-18 Monate.',
      'Bei Cosmedocs kann Kinnlinie Filler als Einzelbehandlung oder als Teil des HA Makeover durchgeführt werden. In Kombination mit Kinn- und Wangenfiller entsteht ein ganzheitlicher Lifting-Effekt, der das gesamte Gesicht harmonisch verjüngt.',
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'chin-filler': {
    meta: { title: 'Kinn Filler London | Kinnvergrößerung | Cosmedocs', description: 'Nicht-chirurgische Kinnvergrößerung und -definition. Arztgeleitete Behandlung an der Harley Street.', keywords: 'Kinn Filler, Kinnvergrößerung, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Kinn Filler' },
    hero: { h1: 'Kinn Filler', subtitle: 'Ausgeglichenes Profil durch nicht-chirurgische Kinnverbesserung' },
    intro: { heading: 'Was ist Kinn Filler?', text: 'Kinn Filler verbessert das Profilgleichgewicht, projiziert ein fliehenes Kinn und verbessert die gesamte Gesichtsharmonie. Eine schnelle, sichere Behandlung mit sofortigen Ergebnissen.' },
    benefits: ['Kinndefinition', 'Profilbalance', 'Fliehenes Kinn korrigieren', 'Nicht-chirurgisch', 'Sofortige Ergebnisse', 'Natürliches Aussehen'],
    glance: { duration: '20-30 Min.', results: '12-18 Monate', recovery: 'Minimale Ausfallzeit', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Ist es sicher?', a: 'Ja, durchgeführt von erfahrenen GMC-registrierten Ärzten mit zertifizierten Produkten.' },
      { q: 'Was kostet es?', a: 'Ab £400. Meist werden 1-2ml benötigt.' },
      { q: 'Unterschied zum Kinnlinie Filler?', a: 'Kinn Filler fokussiert auf die Kinnspitze und Projektion, Kinnlinie Filler definiert die seitliche Kieferlinie.' },
    ],
    extended: [
      'Ein ausgeglichenes Profil ist ein wesentliches Element der Gesichtsharmonie. Ein fliehenes oder unterentwickeltes Kinn kann das gesamte Gesichtsprofil beeinträchtigen. Kinn Filler bietet eine nicht-chirurgische Alternative zur Kinnvergrößerung mit sofortigen, natürlichen Ergebnissen.',
      'Dr. Ahmed Haq analysiert sowohl die Frontal- als auch die Profilansicht, um die optimale Kinnprojektion zu bestimmen. Eine dezente, raffinierte Verbesserung steht im Vordergrund — übertriebene Ergebnisse widersprechen unserer Philosophie.',
      'Kinn Filler lässt sich hervorragend mit Kinnlinie Filler und Wangenfiller kombinieren, um eine umfassende Gesichtsverjüngung zu erzielen. Wie alle HA-Filler ist auch Kinn Filler bei Unzufriedenheit vollständig auflösbar.',
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'tear-trough-filler': {
    meta: { title: 'Augenringe Filler London | Unter-Augen-Behandlung | Cosmedocs', description: 'Auffrischung müder Augen mit Augenring-Filler. Arztgeleitete Behandlung an der Harley Street.', keywords: 'Augenringe Filler, Tränenrinne, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Augenringe Filler' },
    hero: { h1: 'Augenringe Filler', subtitle: 'Dunkle Ringe und Hohlräume unter den Augen sanft behandeln' },
    intro: { heading: 'Was ist Augenringe Filler?', text: 'Augenringe Filler füllt die Hohlräume unter den Augen, reduziert dunkle Ringe und verbessert ein müdes Erscheinungsbild. Diese delikate Behandlung erfordert erfahrene ärztliche Hände und höchste Präzision.' },
    benefits: ['Dunkle Ringe reduzieren', 'Hohlräume auffüllen', 'Erfrischt aussehen', 'Natürliche Ergebnisse', 'Minimale Ausfallzeit', 'Sofortige Wirkung'],
    glance: { duration: '20-30 Min.', results: '12-18 Monate', recovery: '1-3 Tage Schwellung', product: 'Hyaluronsäure-Filler' },
    faq: [
      { q: 'Gibt es Risiken?', a: 'Bei erfahrenen Ärzten sehr sicher. Unsere Praxis hat über 17 Jahre Erfahrung mit dieser anspruchsvollen Behandlung.' },
      { q: 'Was kostet es?', a: 'Ab £450. Üblicherweise werden 0,5-1ml benötigt.' },
      { q: 'Kann man es mit anderen Behandlungen kombinieren?', a: 'Ja, Wangenfiller kann den Übergang von Auge zu Wange zusätzlich glätten.' },
    ],
    extended: [
      'Dunkle Augenringe und Hohlräume unter den Augen sind häufig nicht nur auf Schlafmangel zurückzuführen, sondern auf altersbedingten Fettgewebsschwund und Knochenabbau in der Orbitalregion. Augenringe Filler korrigiert diese strukturellen Veränderungen und lässt Sie erfrischt und ausgeruht erscheinen.',
      'Die Augenpartie gehört zu den anspruchsvollsten Behandlungsbereichen. Bei Cosmedocs verwenden wir spezielle, dünnflüssige Filler und die Kanülen-Technik, um Hämatome und den Tyndall-Effekt (bläuliche Verfärbung) zu minimieren. Über 17 Jahre Erfahrung gewährleisten höchste Sicherheit.',
      'Die Ergebnisse halten typischerweise 12-18 Monate. Regelmäßige Auffrischungen erhalten den jugendlichen, erfrischten Blick langfristig. Unsere Ästhetik ist unsichtbare Kunst — natürliche Frische, die spricht, ohne ein Wort zu sagen.',
    ],
    cta: 'Beratung buchen', bookNow: 'Jetzt buchen',
  },
  'skin-rejuvenation': {
    meta: { title: 'Hautverjüngung London | Cosmedocs Harley Street', description: 'Profhilo, Polynukleotide, Microneedling, chemische Peelings. Fortschrittliche arztgeleitete Hautverjüngung.', keywords: 'Hautverjüngung, Profhilo, Polynukleotide, London' },
    breadcrumbs: { parent: 'Behandlungen', parentPath: '/de/behandlungen/', current: 'Hautverjüngung' },
    hero: { h1: 'Hautverjüngung', subtitle: 'Fortschrittliche Behandlungen für Kollagenstimulation und Hautqualität' },
    intro: { heading: 'Was ist Hautverjüngung?', text: 'Hautverjüngung umfasst Profhilo, Polynukleotide, Microneedling und chemische Peelings — fortschrittliche Behandlungen, die von innen Kollagen und Elastin anregen und die Hautqualität grundlegend verbessern.' },
    benefits: ['Kollagenstimulation', 'Verbesserte Elastizität', 'Natürlicher Glow', 'Hautqualität verbessern', 'Anti-Aging', 'Natürliche Ergebnisse'],
    glance: { duration: '20-45 Min.', results: '6-12 Monate', recovery: 'Minimale Ausfallzeit', product: 'Profhilo/Polynukleotide' },
    faq: [
      { q: 'Welche Behandlung ist richtig für mich?', a: 'In der Beratung bewerten wir Ihren Hautzustand und empfehlen den optimalen Plan basierend auf Hauttyp, Alter und Zielen.' },
      { q: 'Was kostet es?', a: 'Profhilo ab £350, chemisches Peeling ab £200, Microneedling ab £250.' },
      { q: 'Wie viele Sitzungen sind nötig?', a: 'Typischerweise 2-3 Sitzungen für optimale Ergebnisse, dann Erhaltungsbehandlungen.' },
    ],
    extended: [
      'Profhilo ist ein innovatives italienisches Hyaluronsäure-Präparat, das die Hautstraffheit und Hydration dramatisch verbessert. Anders als klassische Filler fügt Profhilo kein Volumen hinzu, sondern stimuliert die körpereigene Kollagen- und Elastinproduktion — für eine fundamentale Verbesserung der Hautqualität.',
      'Polynukleotide (PN) werden aus Lachs-DNA gewonnen und fördern die Hauterneuerung auf zellulärer Ebene. Sie sind besonders wirksam bei Texturverbesserung, Aufhellung von Pigmentierung und Glättung feiner Linien. Auch für die empfindliche Augenpartie geeignet.',
      'Microneedling mit PRP (plättchenreiches Plasma) nutzt die körpereigene Heilungskraft. Kontrollierte Mikroverletzungen stimulieren den Kollagenumbau und sind besonders effektiv bei Aknenarben und Pigmentflecken. Chemische Peelings entfernen abgestorbene Hautzellen und fördern die Bildung neuer, gesunder Haut.',
      'Unsere Ästhetik ist unsichtbare Kunst. Hautverjüngung ist der natürlichste und nachhaltigste Ansatz der ästhetischen Medizin — strahlende Haut von innen heraus.',
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
