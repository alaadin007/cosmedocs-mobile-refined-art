import { useState, FormEvent } from "react";
import EndolaserLandingShared from "./EndolaserLandingShared";
import { supabase } from "@/integrations/supabase/client";

const BookingForm = ({ compact = false }: { compact?: boolean }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: `[Endolaser Booking Landing] Preferred contact: ${fd.get("time")}. ${fd.get("message") || ""}`,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };
    try {
      await supabase.from("contact_us").insert(payload as never);
    } catch {
      /* fail quietly */
    }
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl p-6 border border-[#D4A24E] bg-[#D4A24E]/10 text-white">
        <p className="text-[#D4A24E] tracking-[0.28em] text-xs mb-2">THANK YOU</p>
        <p className="text-white/90 leading-relaxed">
          Our team will be in touch within 24 hours to confirm your Endolaser model treatment slot.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#D4A24E] outline-none transition-colors";

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl p-5 md:p-6 border border-[#D4A24E]/40 bg-gradient-to-br from-[#D4A24E]/[0.08] to-black/40 space-y-3 backdrop-blur ${
        compact ? "" : "max-w-xl"
      }`}
    >
      <p className="text-[#D4A24E] tracking-[0.28em] text-xs">BOOK YOUR FREE CONSULTATION</p>
      <input name="name" required placeholder="Full Name" className={inputCls} />
      <input name="phone" required type="tel" placeholder="Phone Number" className={inputCls} />
      <input name="email" required type="email" placeholder="Email" className={inputCls} />
      <select name="time" required defaultValue="" className={inputCls}>
        <option value="" disabled>Preferred Contact Time</option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      <textarea name="message" rows={3} placeholder="Message (optional)" className={inputCls} />
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center rounded-full bg-[#D4A24E] hover:bg-[#e0b366] text-black font-medium tracking-wide px-6 py-3.5 shadow-[0_10px_40px_-10px_rgba(212,162,78,0.6)] transition-all disabled:opacity-60"
      >
        {loading ? "Sending…" : "Book Your Free Consultation"}
      </button>
    </form>
  );
};

const ScrollCta = ({ full = false, small = false }: { full?: boolean; small?: boolean }) => (
  <a
    href="#book"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className={`inline-flex items-center justify-center rounded-full bg-[#D4A24E] hover:bg-[#e0b366] text-black font-medium tracking-wide transition-all shadow-[0_10px_40px_-10px_rgba(212,162,78,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(212,162,78,0.8)] ${
      small ? "px-5 py-2.5 text-sm w-full" : "px-7 py-4 text-base"
    } ${full && !small ? "w-full" : ""}`}
  >
    Book Your Free Consultation
  </a>
);

const EndolaserBooking = () => (
  <EndolaserLandingShared
    canonicalPath="/endolaser-booking"
    primaryCta={<ScrollCta />}
    stickyCta={<ScrollCta full />}
    bubbleCta={<ScrollCta small />}
    bubbleText="One-session lift, no scars — want the details?"
    aboveFold={
      <div id="book">
        <BookingForm />
      </div>
    }
  />
);

export default EndolaserBooking;
