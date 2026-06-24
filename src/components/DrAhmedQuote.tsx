interface DrAhmedQuoteProps {
  className?: string;
  align?: "left" | "center";
}

/**
 * Signature reflection from Dr Ahmed Haq — rendered intentionally small,
 * an unobtrusive editorial whisper aligned with the Cosmedocs ethos:
 * invisible art, never loud.
 */
const DrAhmedQuote = ({ className = "", align = "center" }: DrAhmedQuoteProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <figure className={`max-w-xl ${alignment} ${className}`}>
      <blockquote className="text-[11px] md:text-xs font-light italic leading-relaxed text-white/55">
        “The most successful cosmetic treatment isn’t the one that changes a face the most.
        It’s the one that helps a person feel more aligned with the image they already had of themselves.”
      </blockquote>
      <figcaption className="mt-2 text-[10px] tracking-[0.18em] uppercase text-[#C9A050]/70">
        — Dr Ahmed Haq, Medical Director
      </figcaption>
    </figure>
  );
};

export default DrAhmedQuote;
