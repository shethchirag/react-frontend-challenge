import { useState } from "react";
import "./style.css";

const ColorMixer = () => {
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  return (
    <div className="color-mixer-container">
      <div
        className="display-color-mix"
        style={{
          backgroundColor: `color-mix(in srgb, ${color1}, ${color2}) `,
          transition: "transform 0.3s, background-color 0.6s",
        }}
      >
        Mixed Color
      </div>
      <div className="color-picker">
        <div className="color-1">
          <label htmlFor="firstColor">Color 1</label>
          <input
            onChange={(e) => setColor1(e.target.value)}
            type="color"
            value={color1}
            name="firstColor"
            id=""
          />
        </div>
        <div className="color-1">
          <label htmlFor="secondColor">Color 2</label>
          <input
            onChange={(e) => setColor2(e.target.value)}
            type="color"
            value={color2}
            name="secondColor"
            id=""
          />
        </div>
      </div>
      <div className="reset-btn-color">
        <button
          onClick={() => {
            setColor1("#000000");
            setColor2("#000000");
          }}
          className="button-85"
          role="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorMixer;
