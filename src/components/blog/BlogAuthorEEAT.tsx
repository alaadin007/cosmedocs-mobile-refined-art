import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, GraduationCap, Stethoscope } from "lucide-react";

export type DoctorProfile = "ahmed" | "hena" | "hassan";

interface BlogAuthorEEATProps {
  doctor: DoctorProfile;
  /** Optional contextual line about the doctor's relevance to this specific article */
  articleContext?: string;
}

const DOCTOR_DATA: Record<DoctorProfile, {
  name: string;
  initials: string;
  title: string;
  role: string;
  gmcStatus: string;
  memberships: string[];
  experience: string;
  specialities: string[];
  bio: string;
  profilePath: string;
}> = {
  ahmed: {
    name: "Dr Ahmed Haq",
    initials: "AH",
    title: "Medical Director",
    role: "Medical Director & Lead Practitioner",
    gmcStatus: "GMC Registered — Full Licence to Practise",
    memberships: [
      "Royal College of Physicians (RCP)",
      "British Association of Cosmetic Doctors (BACD)",
      "Harley Street Institute — Faculty Trainer"
    ],
    experience: "17+ years in aesthetic medicine · 1M+ procedures since 2007",
    specialities: [
      "Complex facial contouring",
      "Non-surgical jaw reduction",
      "Profile harmonisation",
      "Advanced injectable procedures"
    ],
    bio: "Dr Ahmed Haq is the Medical Director of CosmeDocs, practising from 10 Harley Street since 2007. He specialises in structural facial contouring, non-surgical rhinoplasty, and training physicians at the Harley Street Institute. His approach prioritises anatomical assessment over aesthetic trends — treating what the face needs, not what social media suggests.",
    profilePath: "/about-us/"
  },
  hena: {
    name: "Dr Hena Haq",
    initials: "HH",
    title: "Programme Director",
    role: "Aesthetic Practitioner & Programme Director",
    gmcStatus: "GMC Registered — Full Licence to Practise",
    memberships: [
      "Royal College of General Practitioners (RCGP)",
      "Harley Street Institute — Fellowship Graduate",
      "British Association of Cosmetic Doctors (BACD)"
    ],
    experience: "Extensive GP background · Holistic aesthetic practice",
    specialities: [
      "Natural lip augmentation",
      "Subtle facial tweakments",
      "Holistic patient assessment",
      "Medical professional training"
    ],
    bio: "Dr Hena Haq is an Aesthetic Practitioner and Programme Director at CosmeDocs. With an extensive GP background, she brings a holistic, patient-first approach to aesthetic medicine. She leads training programmes for medical professionals and believes that the best results are the ones nobody can identify — quiet improvements that let the patient look like themselves, only better.",
    profilePath: "/about-us/"
  },
  hassan: {
    name: "Dr Hassan Mirza",
    initials: "HM",
    title: "Consultant Dermatologist",
    role: "Consultant Dermatologist",
    gmcStatus: "GMC Registered — Specialist Register",
    memberships: [
      "Royal College of Physicians (RCP)",
      "British Association of Dermatologists (BAD)",
      "British Association of Cosmetic Doctors (BACD)"
    ],
    experience: "NHS Consultant · Specialist dermatology practice",
    specialities: [
      "Medical dermatology (acne, psoriasis, eczema)",
      "Mole assessment & removal",
      "Hair loss treatment",
      "Skin cancer screening"
    ],
    bio: "Dr Hassan Mirza is a Consultant Dermatologist at CosmeDocs with extensive NHS experience. His clinical expertise spans medical dermatology — including acne, psoriasis, eczema, and mole removal — alongside specialist hair loss treatment. He brings diagnostic rigour and a clinical-first mindset to every consultation.",
    profilePath: "/about-us/"
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const BlogAuthorEEAT = ({ doctor, articleContext }: BlogAuthorEEATProps) => {
  const data = DOCTOR_DATA[doctor];

  return (
    <motion.section {...fadeIn} className="mt-16">
      <div className="border-t border-white/[0.06] pt-10">
        {/* Section Label */}
        <p className="text-[#C9A050] text-xs font-medium tracking-wider uppercase mb-6">
          About the Author
        </p>

        {/* Author Card */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8">
          {/* Top Row: Avatar + Name + Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/30 flex items-center justify-center text-[#C9A050] text-lg font-medium shrink-0">
              {data.initials}
            </div>
            <div>
              <Link to={data.profilePath} className="hover:underline">
                <h3 className="text-white text-lg font-medium">{data.name}</h3>
              </Link>
              <p className="text-[#C9A050]/80 text-sm font-light">{data.role}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500/70" />
                <p className="text-green-500/70 text-xs font-light">{data.gmcStatus}</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-white/55 text-sm font-light leading-relaxed mb-6">
            {data.bio}
          </p>

          {/* Article Context (optional) */}
          {articleContext && (
            <p className="text-white/40 text-xs font-light leading-relaxed italic mb-6 pl-4 border-l-2 border-[#C9A050]/30">
              {articleContext}
            </p>
          )}

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Experience */}
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#C9A050]/60" />
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Experience</p>
              </div>
              <p className="text-white/45 text-sm font-light">{data.experience}</p>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-[#C9A050]/60" />
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Memberships</p>
              </div>
              <ul className="space-y-1">
                {data.memberships.map((m, i) => (
                  <li key={i} className="text-white/40 text-xs font-light flex items-start gap-1.5">
                    <span className="text-[#C9A050]/40 mt-0.5">·</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialities */}
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Stethoscope className="w-4 h-4 text-[#C9A050]/60" />
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Clinical Specialities</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.specialities.map((s, i) => (
                  <span 
                    key={i} 
                    className="text-white/40 text-xs font-light bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Footer */}
          <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-white/25 text-xs font-light">10 Harley Street, London W1G 9PF</span>
            <span className="text-white/25 text-xs font-light">Since 2007</span>
            <span className="text-white/25 text-xs font-light">Doctor-Led, Regulated Care</span>
            <Link 
              to={data.profilePath} 
              className="text-[#C9A050]/60 hover:text-[#C9A050] text-xs font-light transition-colors ml-auto"
            >
              View full profile →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogAuthorEEAT;
