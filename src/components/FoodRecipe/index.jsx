import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import RecipeDialog from "./RecipeDialog";

const FoodRecipe = () => {
  const [imgData, setImageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const fetchApi = async () => {
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = await response.data;
      setImageData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="food-container">
      <div className="food-main">
        <div className="food-title">
          <h1>
            Are you hungry <span>😋</span>
          </h1>
          <div className="another-food-btn">
            <button onClick={() => fetchApi()} className="another-food">
              Another food 🍛
            </button>
          </div>
        </div>
        <div className="image-container">
          {loading ? (
            <div className="loading-style">
              <ClipLoader color="#08010a" size={100} />
            </div>
          ) : (
            <>
              <div className="img-title">
                <h2>{imgData?.meals[0]?.strMeal}</h2>
              </div>
              <div className="img-image">
                <img src={imgData?.meals[0]?.strMealThumb} alt="" />
              </div>
              <div className="img-text">
                <a>{imgData?.meals[0]?.strArea}</a>
                <a>{imgData?.meals[0]?.strCategory}</a>
                {imgData?.meals[0]?.strTags &&
                  imgData?.meals[0]?.strTags
                    .split(",")
                    .map((item, index) => <a key={index}>{item}</a>)}
              </div>
              <div className="img-btn">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span onClick={onOpen} className="button-text">
                    Recipe Detail
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {open && <RecipeDialog onClose={onClose} imageData={imgData?.meals[0]} />}
    </div>
  );
};

export default FoodRecipe;
