import InternationalPatientPage from '@/components/InternationalPatientPage';
import { finnishData } from '@/data/finnishPatientData';
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";

const images = [
  { src: baFullFace, alt: "Kasvojen nuorentaminen – ennen ja jälkeen – Cosmedocs London" },
  { src: baJawline, alt: "Leukahoito – ennen ja jälkeen – Cosmedocs" },
  { src: baCheeks, alt: "Poskitäyte – ennen ja jälkeen – Harley Street" },
  { src: baNoseProgression, alt: "Ei-kirurginen nenäkorjaus – ennen ja jälkeen" },
  { src: baBotoxFrown, alt: "Botox ryppyjuonteet – ennen ja jälkeen – Cosmedocs" },
  { src: baBotoxForehead, alt: "Botox otsajuonteet – ennen ja jälkeen – Cosmedocs London" },
];

const FinnishPatients = () => <InternationalPatientPage data={finnishData} images={images} />;
export default FinnishPatients;
