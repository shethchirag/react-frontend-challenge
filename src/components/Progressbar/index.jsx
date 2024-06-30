import { useRef, useState } from "react";
import "./style.css";
import { useEffect } from "react";

const ProgressBar = () => {
  const [range, setRange] = useState(1);
  const [width, setWidth] = useState(0);
  const [progress, setProgress] = useState(true);
  const intervalRef = useRef(null);
  useEffect(() => {
    const increaseWidthHandler = () => {
      if (width <= 100 && progress) {
        const widthCalc = () => {
          setWidth((prev) => prev + 0.5);
        };
        intervalRef.current = setInterval(widthCalc, 50 / Number(range));
      } else {
        clearInterval(intervalRef.current);
      }
    };
    increaseWidthHandler();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [width, progress, range]);

  const startHandler = () => {
    setProgress(true);
    setWidth(0);
  };

  return (
    <div className="progress-container">
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${width}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
      <div className="progress-control-btn">
        <button onClick={startHandler}>Start</button>
        <button onClick={() => setProgress(!progress)}>
          {progress ? "Pause" : "Resume"}
        </button>
        <button
          onClick={() => {
            setWidth(0);
            setProgress(false);
          }}
        >
          Reset
        </button>
      </div>
      <div className="progress-speed">
        <input
          type="range"
          name="progress"
          id="progress"
          onChange={(e) => setRange(e.target.value)}
          value={range}
          min={1}
          max={10}
        />
        <label htmlFor="progress">Speed:{range}</label>
      </div>
    </div>
  );
};

export default ProgressBar;
