import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // characters per tick
  intervalMs?: number;
  className?: string;
  enabled?: boolean;
  onDone?: () => void;
}

/**
 * Reveals text gradually like ChatGPT streaming.
 * If `enabled` is false, renders the full text immediately.
 */
export default function TypewriterText({
  text,
  speed = 3,
  intervalMs = 18,
  className,
  enabled = true,
  onDone,
}: TypewriterTextProps) {
  const [count, setCount] = useState(enabled ? 0 : text.length);

  useEffect(() => {
    if (!enabled) {
      setCount(text.length);
      return;
    }
    setCount(0);
    if (!text) return;
    const id = setInterval(() => {
      setCount((c) => {
        const next = Math.min(text.length, c + speed);
        if (next >= text.length) {
          clearInterval(id);
          onDone?.();
        }
        return next;
      });
    }, intervalMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, enabled]);

  const visible = text.slice(0, count);
  const isTyping = enabled && count < text.length;

  // Linkify URLs, wa.me links, phone numbers, emails
  const linkify = (line: string) => {
    const pattern = /(https?:\/\/[^\s]+|wa\.me\/[^\s]+|\+?\d[\d\s().-]{8,}\d|[\w.+-]+@[\w-]+\.[\w.-]+)/g;
    const parts: (string | JSX.Element)[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    let key = 0;
    while ((m = pattern.exec(line)) !== null) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      const match = m[0];
      let href = match;
      const isEmail = /@/.test(match);
      const isUrl = /^https?:\/\//.test(match);
      const isWa = /^wa\.me\//.test(match);
      const isPhone = !isEmail && !isUrl && !isWa;
      if (isEmail) href = `mailto:${match}`;
      else if (isWa) href = `https://${match}`;
      else if (isPhone) {
        const digits = match.replace(/[^\d+]/g, "");
        // UK Cosmedocs WhatsApp number → open WhatsApp
        const waDigits = digits.replace(/^\+/, "");
        href = waDigits.startsWith("44") || waDigits.startsWith("447")
          ? `https://wa.me/${waDigits}`
          : `tel:${digits}`;
      }
      parts.push(
        <a
          key={`lnk-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C9A050] underline underline-offset-2 hover:text-[#e3c074]"
        >
          {match}
        </a>
      );
      last = m.index + match.length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return parts;
  };

  return (
    <span className={className}>
      {visible.split("\n").map((line, j, arr) => (
        <p key={j} className={j > 0 ? "mt-2" : ""}>
          {linkify(line)}
          {isTyping && j === arr.length - 1 && (
            <span className="inline-block w-[2px] h-[1em] align-middle ml-0.5 bg-current animate-pulse" />
          )}
        </p>
      ))}
    </span>
  );
}
