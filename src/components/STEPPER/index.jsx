import { useState } from "react";
import "./style.css";

const Stepper = () => {
  const [step, setStep] = useState(0);

  const steps = 4; // Total number of steps

  const stepperHandler = () => {
    if (step < steps) {
      setStep(step + 1);
    }
  };

  const getProgressWidth = () => {
    return ((step < steps - 1 ? step : steps - 1) / (steps - 1)) * 100;
  };

  return (
    <div className="stepper-container">
      <h2>Stepper Component</h2>
      <div className="stepper-part">
        {[...Array(steps)].map((_, index) => (
          <div
            key={index}
            className={`stepper-1 ${
              step > index ? "completed" : step === index ? "active" : ""
            }`}
          >
            <div className="stepper-span">
              <span>{step > index ? "✔" : index + 1}</span>
            </div>
            <div className="stepper-text">
              <p>Step {index + 1}</p>
            </div>
          </div>
        ))}

        <div className="stepper-bar">
          <div
            className="progress-bar"
            style={{
              width: `${getProgressWidth()}%`,
              transform: "scale(0.95)",
            }}
          ></div>
        </div>
      </div>
      {step === steps && (
        <div className="stepper-end">
          <h3>Order Delivered successfully!🎉</h3>
        </div>
      )}
      {step < steps && (
        <div onClick={stepperHandler} className="stepper-btn">
          {step === steps - 1 ? "Finish" : "Next"}
        </div>
      )}
    </div>
  );
};

export default Stepper;
