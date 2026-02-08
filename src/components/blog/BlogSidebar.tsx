import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Botox Treatments", path: "/treatments/botox/" },
  { label: "Dermal Fillers", path: "/treatments/dermal-fillers/" },
  { label: "Lip Fillers", path: "/treatments/lip-fillers/" },
  { label: "Non-Surgical Nose Job", path: "/treatments/nose-filler/" },
  { label: "Before & After Gallery", path: "/before-after/" },
  { label: "Book Consultation", path: "https://med.as.me/harleystreet" },
];

const BlogSidebar = ({ delay = 0.3 }: { delay?: number }) => (
  <motion.aside
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="hidden lg:block space-y-6"
  >
    {/* Quick Links */}
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
      <h4 className="text-xs font-medium text-white/60 tracking-wider uppercase mb-4">
        Quick Links
      </h4>
      <div className="space-y-3">
        {quickLinks.map((link, i) =>
          link.path.startsWith("http") ? (
            <a
              key={i}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#C9A050]/70 hover:text-[#C9A050] transition-colors font-light"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          ) : (
            <Link
              key={i}
              to={link.path}
              className="flex items-center gap-2 text-sm text-[#C9A050]/70 hover:text-[#C9A050] transition-colors font-light"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )
        )}
      </div>
    </div>

    {/* Philosophy */}
    <div className="border-t border-white/[0.06] pt-5">
      <span className="text-[#C9A050] text-[10px] tracking-wider uppercase font-medium">
        Our Philosophy
      </span>
      <p className="text-white/50 text-sm font-light mt-2 leading-relaxed italic">
        "Our aesthetics is invisible art — bold, natural, always your way."
      </p>
      <p className="text-white/25 text-xs font-light mt-2">
        CosmeDocs • Since 2007
      </p>
    </div>
  </motion.aside>
);

export default BlogSidebar;
