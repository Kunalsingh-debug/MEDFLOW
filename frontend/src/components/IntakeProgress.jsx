import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function IntakeProgress({ currentStep, onStepClick }) {
  const { t } = useTranslation();

  const INTAKE_STEPS = [
    { step: 1, key: "intakeFlow.stepLabel1" },
    { step: 2, key: "intakeFlow.stepLabel2" },
    { step: 3, key: "intakeFlow.stepLabel3" },
    { step: 4, key: "intakeFlow.stepLabel4" },
    { step: 5, key: "intakeFlow.stepLabel5" },
    { step: 6, key: "intakeFlow.stepLabel6" },
    { step: 7, key: "intakeFlow.stepLabel7" },
  ];

  return (
    <div className="intake-progress-nav">
      <div className="intake-progress-steps">
        {INTAKE_STEPS.map((item, idx) => {
          const isCompleted = item.step < currentStep;
          const isActive = item.step === currentStep;
          const isAccessible = item.step < currentStep && onStepClick;

          return (
            <React.Fragment key={item.step}>
              <div
                className={`intake-nav-item ${isActive ? "active" : ""} ${
                  isCompleted ? "completed" : ""
                } ${isAccessible ? "clickable" : ""}`}
                onClick={() => {
                  if (isAccessible && currentStep !== 6) {
                    onStepClick(item.step);
                  }
                }}
                role={isAccessible ? "button" : undefined}
                tabIndex={isAccessible ? 0 : undefined}
                aria-label={t(item.key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && isAccessible && currentStep !== 6) {
                    onStepClick(item.step);
                  }
                }}
              >
                <div className="intake-nav-circle">
                  {isCompleted ? <Check size={14} strokeWidth={3} /> : item.step}
                </div>
                <span className="intake-nav-label">{t(item.key)}</span>
              </div>
              {idx < INTAKE_STEPS.length - 1 && (
                <div
                  className={`intake-nav-connector ${
                    item.step < currentStep ? "completed" : ""
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
