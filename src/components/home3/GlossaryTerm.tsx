import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const GLOSSARY: Record<string, string> = {
  "volume loss":
    "Loss of underlying fat and bone density that causes the face to hollow, flatten and sink over time.",
  "tone shifts":
    "Changes in skin colour uniformity — dullness, patchiness or pigmentation — caused by slower cell turnover and sun damage with age.",
  "tone unevenness":
    "Changes in skin colour uniformity — dullness, patchiness or pigmentation — caused by slower cell turnover and sun damage with age.",
  "cosmetic units":
    "The natural anatomical zones of the face — forehead, temple, cheek, mid-face, jaw, lip, chin — that blend seamlessly in youth and become visible as separate fragments with age.",
  "aesthetic units":
    "The natural anatomical zones of the face — forehead, temple, cheek, mid-face, jaw, lip, chin — that blend seamlessly in youth and become visible as separate fragments with age.",
  continuity:
    "The seamless visual flow between facial zones that creates the impression of a unified, youthful surface.",
  bulk:
    "Excessive filler volume that visibly distorts natural proportions rather than restoring them. Never our approach.",
  periosteum:
    "The thin membrane covering bone. Deep filler placement on the periosteum provides structural support without superficial bulk.",
  jowl:
    "The soft tissue that descends below the jawline with age, blurring the clean border between cheek and neck.",
  "tear trough":
    "The hollow or shadowed groove beneath the eye that deepens with volume loss in the under-eye unit.",
  "tear-trough":
    "The hollow or shadowed groove beneath the eye that deepens with volume loss in the under-eye unit.",
  "cupids bow":
    "The double-curved outline of the upper lip centre. Its definition is a hallmark of a well-shaped mouth.",
  "cupid's bow":
    "The double-curved outline of the upper lip centre. Its definition is a hallmark of a well-shaped mouth.",
  vermilion:
    "The pink-red portion of the lip surface. Its fullness and border sharpness are key to youthful lip appearance.",
  "gonial angle":
    "The angle where the jawline turns up toward the ear. A sharp gonial angle defines a youthful lower face contour.",
  "mandibular border":
    "The lower jawline edge that defines the chin-to-ear contour. With age it softens and loses its crisp definition.",
  "mid-face":
    "The central facial zone from the lower eyelid to the mouth. It is the keystone unit; when it collapses, the whole face ages.",
  "upper-third":
    "The top zone of the face — forehead and temples. Its fullness frames the brow and supports the rest of the facial architecture.",
  "lower face":
    "The jaw, chin and mouth zone. Its definition and contour create the final impression of facial shape and youth.",
};

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const GlossaryTooltip = React.memo(function GlossaryTooltip({
  term,
  definition,
  children,
}: {
  term: string;
  definition: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
        <TooltipPrimitive.Trigger
          asChild
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <span
            className="cursor-help border-b border-dashed border-[#C9A050]/70 text-[#F0D78C] hover:text-[#C9A050] transition-colors inline"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen((v) => !v);
              }
            }}
          >
            {children}
          </span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side="top"
          sideOffset={6}
          align="center"
          className={cn(
            "z-50 max-w-[260px] rounded-xl border border-[#C9A050]/40 bg-[#111] px-4 py-3 text-sm text-white/90 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)]",
            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          )}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A050] mb-1.5 font-semibold">
            {term}
          </p>
          <p className="text-[13px] leading-snug text-white/80">{definition}</p>
          <TooltipPrimitive.Arrow className="fill-[#111] stroke-[#C9A050]/40 stroke-1" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
});

export function renderGlossaryText(text: string): React.ReactNode {
  const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${terms.map(escapeRegExp).join("|")})`,
    "gi"
  );

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const matches: { index: number; length: number; term: string }[] = [];
  let m: RegExpExecArray | null;
  // Reset regexp
  pattern.lastIndex = 0;
  while ((m = pattern.exec(text)) !== null) {
    // avoid overlapping
    if (m.index >= lastIndex) {
      matches.push({ index: m.index, length: m[0].length, term: m[0] });
      lastIndex = m.index + m[0].length;
    }
  }

  lastIndex = 0;
  for (const match of matches) {
    if (match.index > lastIndex) {
      parts.push(<React.Fragment key={key++}>{text.slice(lastIndex, match.index)}</React.Fragment>);
    }
    const def = GLOSSARY[match.term.toLowerCase()];
    parts.push(
      <GlossaryTooltip
        key={key++}
        term={match.term}
        definition={def}
      >
        {match.term}
      </GlossaryTooltip>
    );
    lastIndex = match.index + match.length;
  }
  if (lastIndex < text.length) {
    parts.push(<React.Fragment key={key++}>{text.slice(lastIndex)}</React.Fragment>);
  }

  return parts.length === 0 ? text : parts;
}
