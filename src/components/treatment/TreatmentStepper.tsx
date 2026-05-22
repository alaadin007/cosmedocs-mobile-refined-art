import { useState, ReactNode } from "react";

export interface StepperStep {
  title: string;
  body: ReactNode;
}

interface Props {
  steps: StepperStep[];
  /** Index of the step active on first render (default: 0) */
  defaultActive?: number;
  className?: string;
}

/**
 * Site-wide treatment process stepper. Visual rhythm and typography
 * come from global `.tp-stepper` tokens — tap a step to expand its
 * detail. Use inside a `.treatment-page` container for full theming.
 */
export const TreatmentStepper = ({ steps, defaultActive = 0, className = "" }: Props) => {
  const [active, setActive] = useState(defaultActive);

  return (
    <ol className={`tp-stepper ${className}`}>
      {steps.map((s, i) => {
        const isActive = active === i;
        return (
          <li
            key={i}
            className="tp-stepper__item"
            data-active={isActive}
            onClick={() => setActive(isActive ? -1 : i)}
          >
            <span className="tp-stepper__dot" aria-hidden="true">{i + 1}</span>
            <div className="tp-stepper__title" role="button" aria-expanded={isActive}>
              {s.title}
            </div>
            <div className="tp-stepper__body">{s.body}</div>
          </li>
        );
      })}
    </ol>
  );
};

export default TreatmentStepper;
