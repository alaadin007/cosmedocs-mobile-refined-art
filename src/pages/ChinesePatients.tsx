import InternationalPatientPage from '@/components/InternationalPatientPage';
import { chineseData } from '@/data/chinesePatientData';
import baFullFace from "@/assets/chinese-ba-full-face.jpg";
import baMasseter from "@/assets/chinese-ba-masseter.jpg";
import baCheekChin from "@/assets/chinese-ba-cheek-chin.jpg";
import baFacialBalance from "@/assets/chinese-ba-facial-balance.png";
import baNose from "@/assets/chinese-ba-nose.jpg";
import baTreatment from "@/assets/chinese-ba-treatment.jpg";

const images = [
  { src: baFullFace, alt: "面部综合年轻化 – 前后对比 – Cosmedocs 伦敦" },
  { src: baMasseter, alt: "咬肌瘦脸 Botox – 前后对比 – Cosmedocs" },
  { src: baCheekChin, alt: "面颊与下巴填充 – 前后对比 – 哈雷街" },
  { src: baFacialBalance, alt: "面部平衡改善 – 前后对比 – Cosmedocs 伦敦" },
  { src: baNose, alt: "非手术鼻整形 – 前后对比 – Cosmedocs" },
  { src: baTreatment, alt: "Cosmedocs 治疗过程 – 哈雷街诊所" },
];

const ChinesePatients = () => <InternationalPatientPage data={chineseData} images={images} />;
export default ChinesePatients;
