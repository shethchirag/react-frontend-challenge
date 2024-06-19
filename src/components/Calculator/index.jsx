import { useState } from "react";
import "./style.css";

const calculatorBtn = [
  "clear",
  "Del",
  "+-",
  "%",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "-",
  0,
  ".",
  "=",
  "+",
];
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState([]);
  const [valueShow, setValueShow] = useState("");

  const handleClick = (btn) => {
    if (btn === "clear") {
      setDisplayValue("");
      setValueShow("");
    } else if (btn === "Del") {
      setDisplayValue(displayValue.slice(0, -1));
    } else if (btn === "=") {
      try {
        const outPut = eval(displayValue).toString();
        setValueShow(outPut);
        setDisplayValue(outPut);
      } catch {
        setDisplayValue("Error");
      }
    } else if (displayValue.length < 15) {
      setDisplayValue(displayValue + btn);
    }
  };
  console.log(displayValue);

  return (
    <div className="cal-container">
      <div className="calculator-screen">
        <div className="cal-input">{displayValue}</div>
        <div className="cal-output">{valueShow}</div>
      </div>
      <div className="cal-btn">
        <div className="btn-cal">
          {calculatorBtn.map((btn, index) => {
            return (
              <button
                onClick={() => handleClick(btn)}
                className={typeof btn === "number" ? "number-style" : ""}
                key={index}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
