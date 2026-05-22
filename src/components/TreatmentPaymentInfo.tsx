import React from "react";
import { CreditCard } from "lucide-react";

interface TreatmentPaymentInfoProps {
  variant?: "light" | "dark";
}

const KlarnaLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Klarna"
  >
    <path
      d="M115.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm-12.5 0h-6v20h6V0zm-16.5 0h-6l-7.5 12V0h-6v20h6l7.5-12v12h6V0zM62 0h-6v20h6V0zm-10 10c0-5.5-4.5-10-10-10h-9v20h6v-6h3l4 6h7l-5-7c2.5-2 4-5 4-8zm-10 0c0 1.7-1.3 3-3 3h-3V7h3c1.7 0 3 1.3 3 3zM18 0H6l-6 20h6.5l1-3.5h8l1 3.5h6.5L18 0zm-7.5 12L12 4.5 13.5 12h-3zM0 20h6V0H0v20z"
      fill="currentColor"
    />
  </svg>
);

const StripeLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 60 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Stripe"
  >
    <path
      d="M59.64 14.28h-8.06c.34 1.63 1.8 2.28 3.46 2.28 1.64 0 2.96-.62 4.12-1.72l2.24 2.2c-1.56 1.56-3.66 2.4-6.36 2.4-5.2 0-8.28-2.88-8.28-7.56 0-4.32 3.12-7.56 7.64-7.56 4.64 0 7.52 3.08 7.52 7.52 0 .48-.04 1.44-.28 2.44zm-5.68-5.56c-1.56 0-2.88.92-3.32 2.56h6.56c-.32-1.56-1.56-2.56-3.24-2.56zM38.56 5.08h4.64v14.84h-4.68v-1.32c-1.08 1.04-2.52 1.68-4.24 1.68-4.12 0-7.44-3.28-7.44-7.72 0-4.44 3.32-7.72 7.44-7.72 1.72 0 3.16.64 4.24 1.68l.04-1.44zm-3.8 11.32c1.76 0 3.16-1.36 3.16-3.32 0-1.96-1.4-3.32-3.16-3.32-1.76 0-3.2 1.36-3.2 3.32 0 1.96 1.44 3.32 3.2 3.32zM23.8 5.08v1.4c-1.08-1-2.52-1.64-4.24-1.64-4.12 0-7.44 3.28-7.44 7.72 0 4.44 3.32 7.72 7.44 7.72 1.72 0 3.16-.64 4.24-1.68v1.32h4.68V5.08H23.8zm-.84 11.32c-1.76 0-3.2-1.36-3.2-3.32 0-1.96 1.44-3.32 3.2-3.32 1.76 0 3.16 1.36 3.16 3.32 0 1.96-1.4 3.32-3.16 3.32zM5.52 5.84C2.44 5.84 0 8.16 0 11.28v8.64h4.68v-8.4c0-1.48.92-2.52 2.32-2.52.68 0 1.28.24 1.76.68l2.44-3.6c-.96-.84-2.28-1.24-3.68-1.24z"
      fill="currentColor"
    />
  </svg>
);

export const TreatmentPaymentInfo: React.FC<TreatmentPaymentInfoProps> = ({
  variant = "light",
}) => {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-6 px-4 border-t ${
        isDark
          ? "border-[#C9A050]/20 bg-white/[0.02]"
          : "border-gray-200 bg-gray-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left — message */}
        <div className="flex items-center gap-3">
          <CreditCard
            className={`w-4 h-4 flex-shrink-0 ${
              isDark ? "text-[#C9A050]/70" : "text-[#C9A050]"
            }`}
          />
          <p
            className={`text-sm font-light ${
              isDark ? "text-white/50" : "text-gray-500"
            }`}
          >
            Flexible payment options available
          </p>
        </div>

        {/* Right — logos */}
        <div className="flex items-center gap-6">
          <div
            className={`flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
            title="Pay with Klarna"
          >
            <KlarnaLogo className="h-4 w-auto" />
          </div>
          <div
            className={`flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
            title="Pay with Stripe"
          >
            <StripeLogo className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentPaymentInfo;
