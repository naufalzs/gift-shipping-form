"use client";
import StepOne from "components/StepOne";
import StepTwo from "components/StepTwo";
import StepThree from "components/StepThree";
import StepFour from "components/StepFour";
import StepFive from "components/StepFive";
import stepData from "json/step.json";
import { useState } from "react";
import cx from "classnames";
import Image from "next/image";

const Step = ({ isLastOrder, index, currentStep, title }) => (
  <div className="step">
    <div className="step-status">
      <div
        className={cx("step-status__circle", {
          "step-status__circle--active": index === currentStep,
          "step-status__circle--success": index < currentStep,
        })}
      >
        <div
          className={cx("step-status__circle-inner", {
            "step-status__circle-inner--active": index === currentStep,
          })}
        >
          <Image
            src="/images/check.svg"
            className={cx("step-status__check-icon", {
              "step-status__check-icon--active": index < currentStep,
            })}
            width={20}
            height={20}
            alt="success step icon"
          />
        </div>
      </div>
      {!isLastOrder && (
        <div className="step-status__connector">
          <div
            className={cx("step-status__connector-progress", {
              "step-status__connector-progress--active": index === currentStep,
              "step-status__connector-progress--success": index < currentStep,
            })}
          ></div>
        </div>
      )}
    </div>
    <div className="step-info">
      <div className="step-info__order">Step {index + 1}</div>
      <div className="step-info__title">{title}</div>
    </div>
  </div>
);

const CurrentForm = ({ currentStep }) => {
  const MainForm = () => {
    switch (currentStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      case 4:
        return <StepFive />;
      default:
        break;
    }
  };

  return (
    <div className="form">
      <div className="form__title">{stepData.data[currentStep]?.title}</div>
      <div className="form__subtitle">
        {stepData.data[currentStep]?.description}
      </div>
      <MainForm />
    </div>
  );
};

export default function Home() {
  const firstStep = 0;
  const lastStep = 4;
  const [currentStep, setCurrentStep] = useState(firstStep);

  const handleNext = () => {
    if (currentStep >= lastStep) return;
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep <= firstStep) return;
    setCurrentStep(currentStep - 1);
  };

  const stepper = stepData.data.map((step, index) => (
    <Step
      key={step.id}
      isLastOrder={index + 1 === stepData.data.length}
      index={index}
      currentStep={currentStep}
      title={step.title}
    />
  ));

  return (
    <div className="container">
      <main className="card-wrapper">
        <section className="sidebar">
          <div className="sidebar__desktop-wrapper">
            <h1 className="brand-title">Time to Shopping</h1>
            <div className="stepper stepper--desktop">{stepper}</div>
            <img
              src="/images/gift-box.svg"
              className="brand-img"
              alt="brand title"
            />
          </div>
          <div className="stepper stepper--mobile">{stepper}</div>
        </section>
        <section className="form-container">
          <CurrentForm currentStep={currentStep} />
          <div className="btn-container">
            <button
              className={cx("btn btn--back", {
                "btn--hide":
                  currentStep === firstStep || currentStep === lastStep,
              })}
              onClick={handleBack}
            >
              Step Back
            </button>
            <button
              className={cx("btn btn--next", {
                "btn--hide": currentStep === lastStep,
              })}
              form="form-step-1"
              type="submit"
              onClick={handleNext}
            >
              Next Step
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
