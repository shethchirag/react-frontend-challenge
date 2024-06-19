import { useState } from "react";
import "./style.css";

const stepperArray = [
  { id: 0, message: "Contact Details" },
  { id: 1, message: "Shipping Address" },
  { id: 2, message: "Payment" },
  { id: 3, message: "Delivered" },
];
const orderMessage = [
  "Add contact details for further communications.",
  "Add shipping address for successfull delivery.",
  "Complete Payment to complete the order.",
  "Ready to get delivered!",
  "Order Delivered successfully!🎉",
];

const Stepper = () => {
  const [step, setStep] = useState(0);

  const steps = stepperArray.length; // Total number of steps

  const stepperHandler = () => {
    if (step < steps) {
      setStep(step + 1);
    }
  };

  const getProgressWidth = () => {
    return ((step < steps - 1 ? step : steps - 1) / (steps - 1)) * 100;
  };
  console.log(step, steps);
  return (
    <div className="stepper-container">
      <h2>Stepper Component</h2>
      <div className="stepper-part">
        {stepperArray.map((item, index) => (
          <div
            key={index}
            className={`stepper-1 ${
              step > index ? "completed" : step === index ? "active" : ""
            }`}
          >
            <div
              className={`stepper-span  ${step === index ? "activeSpan" : ""}`}
            >
              <span>{step > index ? "✔" : index + 1}</span>
            </div>
            <div className="stepper-text">{item.message}</div>
          </div>
        ))}

        <div className="stepper-bar">
          <div
            className="progress-bar"
            style={{
              width: `${getProgressWidth()}%`,
              transform: "scale(0.950)",
            }}
          ></div>
        </div>
      </div>

      <div className="stepper-end">
        <h3> {orderMessage[step]}</h3>
      </div>

      {step < steps && (
        <div onClick={stepperHandler} className="stepper-btn">
          {step === steps - 1 ? "Finish" : "Next"}
        </div>
      )}
      {step === steps && (
        <div onClick={() => setStep(0)} className="order-again">
          Order Again
        </div>
      )}
    </div>
  );
};

export default Stepper;
