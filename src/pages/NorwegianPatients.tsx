import InternationalPatientPage from '@/components/InternationalPatientPage';
import { norwegianData } from '@/data/norwegianPatientData';
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";

const images = [
  { src: baFullFace, alt: "Ansiktsforyngelse – før og etter – Cosmedocs London" },
  { src: baJawline, alt: "Kjevebehandling – før og etter – Cosmedocs" },
  { src: baCheeks, alt: "Kinnforsterkning – før og etter – Harley Street" },
  { src: baNoseProgression, alt: "Ikke-kirurgisk nesekorrigering – før og etter" },
  { src: baBotoxFrown, alt: "Botox rynker – før og etter – Cosmedocs" },
  { src: baBotoxForehead, alt: "Botox panne – før og etter – Cosmedocs London" },
];

const NorwegianPatients = () => <InternationalPatientPage data={norwegianData} images={images} />;
export default NorwegianPatients;
