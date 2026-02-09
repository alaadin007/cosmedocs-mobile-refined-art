import InternationalPatientPage from '@/components/InternationalPatientPage';
import { swedishData } from '@/data/swedishPatientData';
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";

const images = [
  { src: baFullFace, alt: "Ansiktsföryngring – före och efter – Cosmedocs London" },
  { src: baJawline, alt: "Käklinjebehandling – före och efter – Cosmedocs" },
  { src: baCheeks, alt: "Kindförstärkning – före och efter – Harley Street" },
  { src: baNoseProgression, alt: "Icke-kirurgisk näskorrigering – före och efter" },
  { src: baBotoxFrown, alt: "Botox rynkor – före och efter – Cosmedocs" },
  { src: baBotoxForehead, alt: "Botox panna – före och efter – Cosmedocs London" },
];

const SwedishPatients = () => <InternationalPatientPage data={swedishData} images={images} />;
export default SwedishPatients;
