import { useState } from "react";
import "./style.css";

const TelephoneFormatter = () => {
  const [input, setInput] = useState("");

  function formatPhoneNumber(phoneNumberString) {
    let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    console.log(cleaned);
    if (cleaned.length < 4) {
      return cleaned;
    }
    let match = cleaned.match(/^(\d{3})(\d+)$/);
    console.log(match);
    if (match) {
      return "+(" + match[1] + ") - " + match[2];
    }
    return null;
  }

  const formatHandler = (e) => {
    if (e.target.value.length >= 17) {
      return;
    }
    let number = formatPhoneNumber(e.target.value);
    setInput(number);
  };
  return (
    <div className="input-container">
      <input
        className="telephone"
        value={input}
        type="text"
        onChange={formatHandler}
      />
      <p style={{ fontSize: "25px" }}>+(123) - 4567890</p>
    </div>
  );
};

export default TelephoneFormatter;
