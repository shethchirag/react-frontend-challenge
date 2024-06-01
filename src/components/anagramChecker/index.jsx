import { useRef, useState } from "react";
import "./style.css";
const AnagramChecker = () => {
  const [message, SetMessage] = useState("");
  const FirstRef = useRef(null);
  const secRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFirstValue = FirstRef.current.value;
    const userSecValue = secRef.current.value;
    let firstValue = userFirstValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    let secValue = userSecValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    let firstValueSort = firstValue.split("").sort().join();
    let secValueSort = secValue.split("").sort().join();
    if (firstValueSort === secValueSort) {
      SetMessage("The words/phrases are anagrams!");
    } else {
      SetMessage("The words/phrases are not anagrams.");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="cardAnagram">
        <div className="card-content-anagram">
          <input ref={FirstRef} type="text" required />

          <input ref={secRef} type="text" required />
          <p>{message ? message : ""}</p>
          <button type="submit">Check Anagram</button>
          <button onClick={() => SetMessage("")} type="reset">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default AnagramChecker;
