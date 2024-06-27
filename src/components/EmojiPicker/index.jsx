import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import useFetchData from "./useFetchdata";
import Index from "./../BackgroundChanger/index";
import toast, { Toaster } from "react-hot-toast";

const EmojiPicker = () => {
  const [categories, setCategories] = useState("all");
  const [emojiData, loading, error] = useFetchData(
    `https://emoji-api.com/${
      categories === "all" ? "emojis" : `categories/${categories}`
    }?access_key=eb3aa13df1b14cc7bc614fc2d7f894f41b09d68a`
  );
  // https://emoji-api.com/emojis?search=computer&
  const [category] = useFetchData(
    `https://emoji-api.com/categories?access_key=eb3aa13df1b14cc7bc614fc2d7f894f41b09d68a`
  );
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefaults();
  };

  const categoriesHandler = (e) => {
    setCategories(e.target.value);
  };
  const filteredEmojis = emojiData.filter((emoji) => {
    if (searchTerm) {
      return emoji.unicodeName.toLowerCase().includes(searchTerm.toLowerCase());
    } else return emoji;
  });

  return (
    <div className="emoji-container">
      <div className="input-container">
        <form onSubmit={submitHandler}>
          <div className="select-input">
            <select onChange={categoriesHandler} name="emoji" id="emoji">
              <option selected value="all">
                All
              </option>
              {category.map((item, Index) => (
                <option key={Index} value={item.slug}>
                  {item.slug}
                </option>
              ))}
            </select>
          </div>
          <div className="search-input">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Emoji"
            />
          </div>
        </form>
        <p>Click on an Emoji to Copy</p>
      </div>
      <div className="emoji-display-container">
        {loading ? (
          <div className="loading-style">
            <ClipLoader color="#08010a" size={100} />
          </div>
        ) : (
          filteredEmojis.map((emoji) => (
            <span
              onClick={() => {
                navigator.clipboard.writeText(emoji.character);
                toast.success(`Copy to clipboard  `);
              }}
              key={emoji.slug}
              title={emoji.slug}
            >
              {emoji.character}
            </span>
          ))
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default EmojiPicker;
