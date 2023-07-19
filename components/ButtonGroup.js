import React, { useContext } from "react";
import cx from "classnames";
import { StepContext } from "@/app/page";

export default function ButtonGroup({ submitId }) {
  const { currentStep, firstStep, lastStep, handleBack } =
    useContext(StepContext);

  return (
    <div className="btn-container">
      <button
        className={cx("btn btn--back", {
          "btn--hide": currentStep === firstStep || currentStep === lastStep,
        })}
        onClick={handleBack}
      >
        Step Back
      </button>
      <button
        className={cx("btn btn--next", {
          "btn--hide": currentStep === lastStep,
        })}
        // form="form-step-1"
        form={submitId}
        type="submit"
      >
        Next Step
      </button>
    </div>
  );
}
