import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  function valueSetHandler(e) {
    setInputValue(parseInt(e.target.value));
  }
  function AddNumber() {
    setNumber(number + inputValue);
  }
  function minusNumber() {
    setNumber(number - inputValue);
  }
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <p>{number}</p>
      <button
        onClick={AddNumber}
        style={{ marginInlineEnd: "5px" }}
        className="plus-btn"
      >
        +
      </button>
      <button onClick={minusNumber} className="minus-btn">
        -
      </button>
      <div className="input-field">
        <label htmlFor="userNumber">Increment/Decrement by</label>
        <input
          onChange={valueSetHandler}
          type="number"
          name=""
          id="userNumber"
          value={inputValue}
        />
      </div>
      <div
        onClick={() => (setNumber(0), setInputValue(1))}
        className="reset-btn"
      >
        Reset
      </div>
    </div>
  );
};

export default Counter;
