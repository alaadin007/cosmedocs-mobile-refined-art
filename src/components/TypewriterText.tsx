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

  return (
    <span className={className}>
      {visible.split("\n").map((line, j) => (
        <p key={j} className={j > 0 ? "mt-2" : ""}>
          {line}
          {isTyping && j === visible.split("\n").length - 1 && (
            <span className="inline-block w-[2px] h-[1em] align-middle ml-0.5 bg-current animate-pulse" />
          )}
        </p>
      ))}
    </span>
  );
}
