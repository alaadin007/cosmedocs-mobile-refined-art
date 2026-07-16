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
      /* fail quietly — still show confirmation so user isn't blocked */
    }
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="border border-[#C9A050] rounded-2xl p-6 bg-[#C9A050]/10 text-white">
        <p className="text-[#C9A050] eyebrow mb-2">Thank You</p>
        <p className="text-white/90">
          Our team will be in touch within 24 hours to confirm your Endolaser model treatment slot.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`border border-white/15 rounded-2xl p-5 md:p-6 bg-white/[0.02] space-y-3 ${
        compact ? "" : "max-w-xl"
      }`}
    >
      <p className="eyebrow">Book Your Free Consultation</p>
      <input
        name="name"
        required
        placeholder="Full Name"
        className="w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A050] outline-none"
      />
      <input
        name="phone"
        required
        type="tel"
        placeholder="Phone Number"
        className="w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A050] outline-none"
      />
      <input
        name="email"
        required
        type="email"
        placeholder="Email"
        className="w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A050] outline-none"
      />
      <select
        name="time"
        required
        defaultValue=""
        className="w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-white focus:border-[#C9A050] outline-none"
      >
        <option value="" disabled>
          Preferred Contact Time
        </option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      <textarea
        name="message"
        rows={3}
        placeholder="Message (optional)"
        className="w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A050] outline-none"
      />
      <button type="submit" disabled={loading} className="tp-cta w-full">
        {loading ? "Sending…" : "Book Your Free Consultation"}
      </button>
    </form>
  );
};

const ScrollCta = ({ full = false }: { full?: boolean }) => (
  <a
    href="#book"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className={`tp-cta ${full ? "w-full" : ""}`}
  >
    Book Your Free Consultation
  </a>
);

const EndolaserBooking = () => (
  <>
    <EndolaserLandingShared
      canonicalPath="/endolaser-booking"
      primaryCta={<ScrollCta />}
      stickyCta={<ScrollCta full />}
      aboveFold={
        <div id="book">
          <BookingForm />
        </div>
      }
    />
  </>
);

export default EndolaserBooking;
