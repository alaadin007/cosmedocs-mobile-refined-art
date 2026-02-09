import InternationalPatientPage from '@/components/InternationalPatientPage';
import { germanData } from '@/data/germanPatientData';
import baFullFace from "@/assets/arabic-ba-full-face.jpg";
import baJawline from "@/assets/arabic-ba-jawline.jpg";
import baCheeks from "@/assets/arabic-ba-cheeks.jpg";
import baNoseProgression from "@/assets/arabic-ba-nose-progression.jpg";
import baBotoxFrown from "@/assets/arabic-ba-botox-frown.jpg";
import baBotoxForehead from "@/assets/arabic-ba-botox-forehead.jpg";

const images = [
  { src: baFullFace, alt: "Gesichtsverjüngung – vorher und nachher – Cosmedocs London" },
  { src: baJawline, alt: "Kieferbehandlung – vorher und nachher – Cosmedocs" },
  { src: baCheeks, alt: "Wangenaufbau – vorher und nachher – Harley Street" },
  { src: baNoseProgression, alt: "Nicht-chirurgische Nasenkorrektur – vorher und nachher" },
  { src: baBotoxFrown, alt: "Botox Zornesfalten – vorher und nachher – Cosmedocs" },
  { src: baBotoxForehead, alt: "Botox Stirnfalten – vorher und nachher – Cosmedocs London" },
];

const GermanPatients = () => <InternationalPatientPage data={germanData} images={images} />;
export default GermanPatients;
