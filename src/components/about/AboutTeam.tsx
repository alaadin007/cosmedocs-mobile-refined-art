import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import drAhmedImg from "@/assets/dr-ahmed-haq.png";
import drHenaImg from "@/assets/dr-hena-haq.png";
import drHassanImg from "@/assets/dr-hassan-mirza.png";
import drKarimImg from "@/assets/dr-karim-kassam.jpg";

const bookingUrl = "/contact/";

const doctors = [
  {
    name: "Dr A. Farhan Haq",
    role: "Cosmetic Physician & Medical Director",
    credentials: "Royal College of Surgeons Medical School • BACD Member • GMC Registered",
    image: drAhmedImg,
    profileUrl: "/our-team/dr-ahmed-haq/",
    bio: "An extensively experienced practitioner, Dr Haq is a graduate of The Royal College of Surgeons Medical School and a member of the British Association of Cosmetic Doctors. He specialises in advanced injectable procedures, complex facial contouring, and non-surgical jaw reduction. He leads the in-house team at CosmeDocs and trains cosmetic physicians in advanced techniques at the Harley Street Institute.",
    specialties: ["Anti-Wrinkle Treatments", "Lip Enhancement", "Non-Surgical Nose Job", "Nefertiti Face Lift", "Complex Facial Contouring"],
  },
  {
    name: "Dr Hena Haq",
    role: "Cosmetic Physician & Programme Director, HSI",
    credentials: "Oxford Medical Training • GP Trained (London & Kent) • GMC Registered",
    image: drHenaImg,
    profileUrl: "/our-team/dr-hena-haq/",
    bio: "Dr Hena is an Aesthetic Doctor whose holistic approach to client treatments has made her popular amongst her clients. Her special interest lies in subtle tweakments and using a combination of aesthetic procedures to provide youthful but natural outcomes. Having completed her medical training in Oxford and GP training in London and Kent, Dr Hena always has her clients' best interest at the heart of every consultation. She is also Programme Director of the Harley Street Institute.",
    specialties: ["Subtle Tweakments", "Lip Enhancement", "Tear Trough", "Skin Rejuvenation", "Natural Outcomes"],
  },
  {
    name: "Dr Hassan A. Mirza",
    role: "Consultant Dermatologist",
    credentials: "Royal College of Physicians • British Association of Dermatologists • NHS Consultant",
    image: drHassanImg,
    profileUrl: "/our-team/dr-hassan-mirza/",
    bio: "Dr Hassan A. Mirza is a highly experienced Dermatology Consultant currently working within the NHS. He completed his dermatology training in London hospitals, complemented by internal medicine training in Sheffield. A proud member of the Royal College of Physicians and the British Association of Dermatologists, Dr Mirza has also gained international experience through rotations in Orlando.",
    specialties: ["Acne", "Hair Loss", "Psoriasis", "Eczema", "Mole Removal", "Pigmentation"],
  },
  {
    name: "Mr Karim Kassam",
    role: "Consultant Maxillofacial & Plastic Surgeon",
    credentials: "Medical School • Dental School • Plastic, Maxillofacial & Reconstructive Surgery Training",
    image: drKarimImg,
    profileUrl: "https://www.maxillofacialplasticsurgery.com",
    bio: "Mr Karim Kassam is a distinguished Maxillofacial and Plastic Surgeon who completed both medical school and dental school, followed by extensive years of specialist training in Plastic, Maxillofacial and Reconstructive Surgery. His dual qualification gives him a uniquely comprehensive understanding of facial anatomy — combining the precision of dentistry, the structural insight of maxillofacial surgery and the artistry of plastic reconstruction. At Cosmedocs, his specialities include upper eyelid surgery (blepharoplasty), facelift surgery, treatment of facial scars, and facial reconstruction following trauma or cancer.",
    specialties: ["Upper Eyelid Surgery", "Facelift", "Facial Scar Revision", "Post-Trauma Reconstruction", "Post-Cancer Reconstruction"],
  },
];

const AboutTeam = () => (
  <section className="relative py-20 px-6" id="team">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-[#C9A050] text-sm tracking-[0.3em] uppercase mb-3">
          Cosmetic Doctors & Surgeons
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
          Meet the <span className="text-[#C9A050]">CosmeDocs Team</span>
        </h2>
        <p className="text-white/50 text-center mb-14 max-w-xl mx-auto">
          Dedicated to patient care, research, and education
        </p>

        <div className="space-y-16">
          {doctors.map((doctor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="grid md:grid-cols-[280px_1fr] gap-8 bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#C9A050]/20 transition-colors duration-300"
            >
              {/* Photo */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 mb-4">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.role} at Cosmedocs Harley Street`}
                    className="w-full h-full object-cover object-top"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="flex gap-3 mt-2">
                  <a
                    href={doctor.profileUrl}
                    target={doctor.profileUrl.startsWith("http") ? "_blank" : undefined}
                    rel={doctor.profileUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[#C9A050] text-xs tracking-wider uppercase hover:text-[#B8913F] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Full Profile
                  </a>
                  <a
                    href={bookingUrl}
                    className="inline-flex items-center gap-2 bg-[#C9A050] text-black text-xs tracking-wider uppercase px-4 py-2 rounded-full hover:bg-[#B8913F] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book
                  </a>
                </div>
              </div>

              {/* Details */}
              <div>
                <h3 className="text-2xl font-light text-white mb-1">{doctor.name}</h3>
                <p className="text-[#C9A050] text-sm tracking-wider mb-2">{doctor.role}</p>
                <p className="text-white/40 text-xs tracking-wide mb-5">{doctor.credentials}</p>
                <p className="text-white/65 leading-relaxed text-sm mb-6">{doctor.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((s, j) => (
                    <span
                      key={j}
                      className="bg-white/5 border border-white/10 text-white/50 text-xs px-3 py-1.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutTeam;
