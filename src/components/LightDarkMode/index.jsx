import { useState } from "react";
import "./style.css";

const LightDarkMode = () => {
  const [mode, setMode] = useState(false);
  return (
    <div className={`main-container ${mode ? "dark" : "light"}`}>
      <h2 className="text-h2">
        Try to toggle the theme and see the change !!!
      </h2>
      <button onClick={() => setMode(!mode)} className="bg-btn">
        Toggle Theme
      </button>
    </div>
  );
};

export default LightDarkMode;
