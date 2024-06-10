import { useEffect } from "react";
import "./style.css";

const Index = () => {
  const getRandomColor = (color) => {
    if (!color) {
      const letter = "0123456789ABCDEF";
      color = "#";
      for (let index = 0; index < 6; index++) {
        color += letter[Math.floor(Math.random() * 16)];
      }
    }
    return color;
  };
  const backgroundColorChange = (color) => {
    document.body.style.backgroundColor = color;
  };
  useEffect(() => {
    () => {
      backgroundColorChange("unset");
    };
  }, []);
  return (
    <div className="main-container-bg">
      <button
        className="bg-btn"
        onClick={() => backgroundColorChange(getRandomColor())}
      >
        Change Color!! 😎
      </button>
    </div>
  );
};

export default Index;
