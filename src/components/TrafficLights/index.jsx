import { useEffect, useState } from "react";
import "./style.css";

const TrafficLights = () => {
  const [active, setActive] = useState(1);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (active === 4) {
      setActive(1);
    }
    let duration;
    if (active === 1) {
      duration = 5;
    } else if (active === 2) {
      duration = 2;
    } else if (active === 3) {
      duration = 3;
    }
    setCounter(duration);

    const counterTime = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(counterTime);
          setActive((prev) => prev + 1);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(counterTime);
  }, [active]);

  return (
    <div className="traffic-light-container">
      <div className="traffic-Light">
        <div className={`light ${active === 1 ? "active-red" : ""}`}></div>
        <div className={`light ${active === 2 ? "active-yellow" : ""}`}></div>
        <div className={`light ${active === 3 ? "active-green" : ""}`}></div>
      </div>
      <p className="timer">{counter} Seconds</p>
    </div>
  );
};

export default TrafficLights;
