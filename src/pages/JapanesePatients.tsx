import InternationalPatientPage from '@/components/InternationalPatientPage';
import { japaneseData } from '@/data/japanesePatientData';
import baFullFace from "@/assets/chinese-ba-full-face.jpg";
import baMasseter from "@/assets/chinese-ba-masseter.jpg";
import baCheekChin from "@/assets/chinese-ba-cheek-chin.jpg";
import baNose from "@/assets/chinese-ba-nose.jpg";
import baFacialBalance from "@/assets/chinese-ba-facial-balance.png";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";

const images = [
  { src: baFullFace, alt: "フェイスリフト – 施術前後 – Cosmedocs ロンドン" },
  { src: baMasseter, alt: "咬筋ボトックス – 施術前後 – Cosmedocs" },
  { src: baCheekChin, alt: "頬と顎の充填 – 施術前後 – ハーレーストリート" },
  { src: baFacialBalance, alt: "顔のバランス改善 – 施術前後 – Cosmedocs" },
  { src: baNose, alt: "非外科的鼻整形 – 施術前後 – Cosmedocs ロンドン" },
  { src: baBotoxFrown, alt: "ボトックス – 施術前後 – Cosmedocs" },
];

const JapanesePatients = () => <InternationalPatientPage data={japaneseData} images={images} />;
export default JapanesePatients;
