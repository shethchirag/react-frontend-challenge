import { useRef } from "react";
import "./style.css";
import { useEffect } from "react";
import { useState } from "react";
const TableColorizer = () => {
  const [input, setInput] = useState("");
  const [colorBox, setColorBox] = useState({});
  const [error, setError] = useState("");
  const boxRef = useRef([]);
  const boxColorHandler = () => {
    Array.from(boxRef.current.children).forEach((box) => {
      if (input === box.innerText) {
        setColorBox(box);
      }
    });
  };

  const colorHandler = () => {
    if (input) {
      colorBox.style.backgroundColor = "red";
    } else {
      setError("Enter 1 to 9 number for set color");
    }
  };

  useEffect(() => {
    boxColorHandler();
    setError("");
  }, [input]);

  const clearHandler = () => {
    setInput("");
    Array.from(boxRef.current.children).forEach((box) => {
      box.style.backgroundColor = ""; // Reset the background color for all boxes
    });
    setError("");
  };

  console.log(input);
  return (
    <div className="table-main-container">
      <div className="input-container">
        <input
          className="table-input"
          type="text"
          placeholder="Enter table number"
          maxLength={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="errorMessage">{error}</p>
      </div>

      <div className="table-input-btn">
        <button onClick={colorHandler} className="color-me">
          Color Me
        </button>
        <button onClick={clearHandler} className="clear-me">
          Clear Me
        </button>
      </div>
      <div ref={boxRef} className="table-box">
        <div className="box box1">1</div>
        <div className="box box2">2</div>
        <div className="box box3">3</div>
        <div className="box box4">4</div>
        <div className="box box5">5</div>
        <div className="box box6">6</div>
        <div className="box box7">7</div>
        <div className="box box8">8</div>
        <div className="box box9">9</div>
      </div>
    </div>
  );
};

export default TableColorizer;
