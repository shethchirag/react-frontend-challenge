import { useEffect, useRef, useState } from "react";
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
  const [margin, setMargin] = useState(0);
  // Here, we are storing any one of the step (all are of same width i.e. flex:1) so that we can persist it throughout the renders
  const stepRef = useRef(null);

  const steps = stepperArray.length; // Total number of steps

  const stepperHandler = () => {
    if (step < steps) {
      setStep(step + 1);
    }
  };

  const getProgressWidth = () => {
    return ((step < steps - 1 ? step : steps - 1) / (steps - 1)) * 100;
  };
  // Setting an event handler for window resizing for the responsiveness of out app
  useEffect(() => {
    setMargin(stepRef.current.offsetWidth / 2);
    console.log(stepRef.current.offsetWidth);
    window.addEventListener("resize", () => {
      setMargin(stepRef.current.offsetWidth / 1.5);
    });

    return window.removeEventListener("resize", () => {
      setMargin(stepRef.current.offsetWidth / 2);
    });
  }, []);
  console.log(step, steps);
  return (
    <div className="stepper-container">
      <h2>Stepper Component</h2>
      <div className="stepper-part">
        {stepperArray.map((item, index) => (
          <div
            ref={stepRef}
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

        <div
          className="stepper-bar"
          style={{
            width: `calc(100% - ${margin * 2}px)`,
            marginLeft: margin,
          }}
        >
          <div
            className="progress-bar"
            style={{
              width: `${getProgressWidth()}%`,
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
