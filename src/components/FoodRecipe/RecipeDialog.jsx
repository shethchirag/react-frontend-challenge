import { createPortal } from "react-dom";
import TableRecipe from "./TableRecipe";
import { IoCloseSharp } from "react-icons/io5";

const RecipeDialog = ({ onClose, imageData }) => {
  return createPortal(
    <div onClick={onClose} className="dialog-box-container">
      <div onClick={(e) => e.stopPropagation()} className="dialog">
        <h3>{imageData.strMeal}</h3>
        <span onClick={onClose}>
          <IoCloseSharp />
        </span>
        <div className="image">
          <div className="img-left">
            <img src={imageData.strMealThumb} alt="" />
          </div>
          <div className="img-right">
            <div className="img-text-d">
              <a>{imageData.strArea}</a>
              <a>{imageData.strCategory}</a>
              {imageData.strTags &&
                imageData?.strTags
                  .split(",")
                  .map((item, index) => <a key={index}>{item}</a>)}
            </div>
            <div className="Instruction">
              <h6>Instruction 📜</h6>
              <p>{imageData.strInstructions}</p>
            </div>
          </div>
        </div>
        <div className="table-data">
          <TableRecipe imageData={imageData} />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RecipeDialog;
