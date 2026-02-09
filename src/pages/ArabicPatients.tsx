import InternationalPatientPage from '@/components/InternationalPatientPage';
import { arabicData } from '@/data/arabicPatientData';
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";

const images = [
  { src: baFullFace, alt: "نتائج تجديد الوجه الكامل – قبل وبعد – Cosmedocs لندن" },
  { src: baJawline, alt: "نحت خط الفك – قبل وبعد – Cosmedocs لندن" },
  { src: baCheeks, alt: "فيلر الخدود الطبيعي – قبل وبعد – هارلي ستريت" },
  { src: baNoseProgression, alt: "تجميل الأنف بدون جراحة – مراحل العلاج – Cosmedocs" },
  { src: baBotoxFrown, alt: "بوتوكس خطوط العبوس – قبل وبعد – Cosmedocs لندن" },
  { src: baBotoxForehead, alt: "بوتوكس خطوط الجبهة – قبل وبعد – Cosmedocs" },
];

const ArabicPatients = () => <InternationalPatientPage data={arabicData} images={images} />;
export default ArabicPatients;
