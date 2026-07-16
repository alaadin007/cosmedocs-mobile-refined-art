import EndolaserLandingShared from "./EndolaserLandingShared";

const WA_URL = "https://wa.me/message/244RYZTKFLQMC1";

const Button = ({ full = false }: { full?: boolean }) => (
  <a
    href={WA_URL}
    target="_top"
    className={`tp-cta ${full ? "w-full" : ""}`}
    aria-label="Chat with Cosmedocs on WhatsApp"
  >
    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M27.04 4.94A15.92 15.92 0 0 0 16.01 0C7.18 0 0 7.18 0 16c0 2.82.74 5.58 2.14 8.01L0 32l8.21-2.15a15.97 15.97 0 0 0 7.79 1.99h.01c8.83 0 16-7.18 16-16 0-4.27-1.66-8.29-4.97-10.9zM16.01 29.13h-.01a13.1 13.1 0 0 1-6.68-1.83l-.48-.28-4.87 1.28 1.3-4.75-.31-.49a13.1 13.1 0 0 1-2.01-7.06c0-7.25 5.9-13.14 13.16-13.14 3.51 0 6.81 1.37 9.29 3.85a13.06 13.06 0 0 1 3.85 9.29c0 7.25-5.9 13.13-13.24 13.13z" />
    </svg>
    Chat With Us on WhatsApp
  </a>
);

const EndolaserWhatsApp = () => (
  <EndolaserLandingShared
    canonicalPath="/endolaser-whatsapp"
    primaryCta={<Button />}
    stickyCta={<Button full />}
  />
);

export default EndolaserWhatsApp;
