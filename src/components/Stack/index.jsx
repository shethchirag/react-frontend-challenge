import { useState } from "react";
import "./style.css";

const Stack = () => {
  const [input, setInput] = useState("");
  const [stack, setStack] = useState([]);
  const [message, setMessage] = useState("");

  const addStackHandler = (e) => {
    if (e.target.innerText === "PUSH") {
      if (input && stack.length < 10) {
        setStack((stack) => [...stack, input]);
        setInput("");
        setMessage("you add " + input);
      } else {
        if (stack.length >= 10) {
          setMessage("stack is full");
        } else {
          setMessage("Enter A value");
        }
      }
    } else if (e.target.innerText === "POP") {
      if (stack.length > 0) {
        const removeElement = stack.slice(0, -1);
        setStack(removeElement);
        setMessage(stack.pop() + " is popped from the Stack");
      } else {
        setMessage("Stack is empty");
      }
    } else if (e.target.innerText === "PEEK") {
      if (stack.length > 0) {
        setMessage("Your Last Element is " + stack[stack.length - 1]);
      } else {
        setMessage("Stack is empty");
      }
    } else if (e.target.innerText === "ISEMPTY") {
      if (stack.length > 0) {
        setMessage("Stack is not empty");
      } else {
        setMessage("Stack is empty");
      }
    } else if (e.target.innerText === "ISFULL") {
      if (stack.length >= 10) {
        setMessage("Stack is Full");
      } else {
        setMessage("Stack is not Full");
      }
    }
  };

  return (
    <div className="stack-container">
      <div className="input-btn-part">
        <div className="input-container">
          <input
            className="inp-value"
            type="text"
            placeholder="Enter a value"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button onClick={addStackHandler}>Push</button>
          <button onClick={addStackHandler}>Pop</button>
          <button onClick={addStackHandler}>Peek</button>
          <button onClick={addStackHandler}>IsEmpty</button>
          <button onClick={addStackHandler}>IsFull</button>
        </div>
        <div className="message-container">
          <h3>{message}</h3>
        </div>
      </div>

      {stack.length > 0
        ? stack.map((item, key) => (
            <div key={key} className="stack-add">
              <p>{item}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Stack;
