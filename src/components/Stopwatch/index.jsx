import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const Stopwatch = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "00",
  });
  const [timer, setTimer] = useState(false);
  const intervalRef = useRef(null);

  const updateTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);

    setTime({
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      milliseconds: ms.toString().padStart(2, "0"),
    });
  };

  useEffect(() => {
    if (timer) {
      const startTime =
        Date.now() -
        (parseInt(time.hours) * 3600000 +
          parseInt(time.minutes) * 60000 +
          parseInt(time.seconds) * 1000 +
          parseInt(time.milliseconds) * 10);
      console.log(startTime, Date.now());
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        updateTime(elapsedTime);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  const resetHandler = () => {
    setTimer(false);
    setTime({
      hours: "00",
      minutes: "00",
      seconds: "00",
      milliseconds: "00",
    });
  };

  return (
    <div className="stop-watch-container">
      <div className="stop-watch-main">
        <div className="watch-display">
          <h2>Stopwatch</h2>
          <p>{`${time.hours}:${time.minutes}:${time.seconds}:${time.milliseconds}`}</p>
        </div>
        <div className="watch-button">
          <button
            onClick={() => setTimer(true)}
            className="button-33"
            role="button"
          >
            Start
          </button>
          <button onClick={() => setTimer(false)} className="button-33">
            Stop
          </button>
          <button onClick={resetHandler} className="button-33">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
