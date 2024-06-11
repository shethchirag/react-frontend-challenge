import QRCode from "react-qr-code";
import "./style.css";
import { useEffect, useState } from "react";
const QrGenerator = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const qrGeneratorHandler = () => {
    if (!input) {
      setError("please enter value for QR");
    } else {
      setValue(input);
    }
  };
  useEffect(() => {
    if (input) {
      setError("");
    }
  }, [input]);
  return (
    <div className="qr-container">
      <input
        className="qr-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Text for Generate QrCode"
        required
      />
      <p className="error-style">{error}</p>
      <button onClick={qrGeneratorHandler} className="generate-qr-btn">
        Generate QrCode
      </button>
      {value && (
        <QRCode
          size={100}
          style={{
            height: "400px",
            maxWidth: "100%",
            width: "100%",
            marginBlock: "20px",
          }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      )}
    </div>
  );
};

export default QrGenerator;
