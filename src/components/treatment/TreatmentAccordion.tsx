import { useState, ReactNode } from "react";

export interface AccordionItem {
  q: string;
  a: ReactNode;
}

interface Props {
  items: AccordionItem[];
  /** Allow multiple panels open at once (default: false) */
  multi?: boolean;
  /** Index of the item open on first render */
  defaultOpen?: number;
  className?: string;
}

/**
 * Site-wide accordion for treatment pages. Uses global `.tp-accordion`
 * tokens so spacing, typography, and the gold "+" icon stay consistent
 * across every page. Wrap in a `.treatment-page` container.
 */
export const TreatmentAccordion = ({ items, multi = false, defaultOpen, className = "" }: Props) => {
  const [open, setOpen] = useState<number[]>(defaultOpen != null ? [defaultOpen] : []);

  const toggle = (i: number) => {
    setOpen(prev => {
      const isOpen = prev.includes(i);
      if (multi) return isOpen ? prev.filter(x => x !== i) : [...prev, i];
      return isOpen ? [] : [i];
    });
  };

  return (
    <div className={`tp-accordion ${className}`}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} className="tp-accordion__item" data-open={isOpen}>
            <button
              type="button"
              aria-expanded={isOpen}
              className="tp-accordion__trigger"
              onClick={() => toggle(i)}
            >
              <span>{it.q}</span>
              <span aria-hidden="true" className="tp-accordion__icon">+</span>
            </button>
            <div className="tp-accordion__panel">
              <div className="tp-accordion__content">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TreatmentAccordion;
