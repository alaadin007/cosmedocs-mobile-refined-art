import InternationalPatientPage from '@/components/InternationalPatientPage';
import { frenchData } from '@/data/frenchPatientData';
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";

const images = [
  { src: baFullFace, alt: "Rajeunissement facial – avant et après – Cosmedocs Londres" },
  { src: baJawline, alt: "Traitement mâchoire – avant et après – Cosmedocs" },
  { src: baCheeks, alt: "Renforcement des joues – avant et après – Harley Street" },
  { src: baNoseProgression, alt: "Rhinoplastie sans chirurgie – avant et après" },
  { src: baBotoxFrown, alt: "Botox rides du lion – avant et après – Cosmedocs" },
  { src: baBotoxForehead, alt: "Botox front – avant et après – Cosmedocs Londres" },
];

const FrenchPatients = () => <InternationalPatientPage data={frenchData} images={images} />;
export default FrenchPatients;
