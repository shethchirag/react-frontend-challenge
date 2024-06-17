import { useEffect, useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (index) => {
    setRating(index);
    localStorage.setItem("testObject", JSON.stringify(index));
  };

  const handleHover = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };
  useEffect(() => {
    setRating(JSON.parse(localStorage.getItem("testObject")));
  }, []);

  return (
    <div className="star-container">
      {[...Array(6)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span key={index}>
            {hover >= ratingValue ||
            (hover === null && rating >= ratingValue) ? (
              <FaStar
                onMouseEnter={() => handleHover(ratingValue)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleRating(ratingValue)}
                style={{ fontSize: "50px", cursor: "pointer" }}
                aria-label={`Star ${ratingValue}`}
              />
            ) : (
              <CiStar
                onMouseEnter={() => handleHover(ratingValue)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleRating(ratingValue)}
                style={{ fontSize: "50px", cursor: "pointer" }}
                aria-label={`Star ${ratingValue}`}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
