import { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import { BarLoader } from "react-spinners";
const QuoteGenerator = () => {
  const [quote, setQuote] = useState([]);
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  function fetchData(tagsValue) {
    console.log(tagsValue);
    setLoading(true);
    fetch(`https://api.quotable.io/quotes/random?tags=${tagsValue}`)
      .then((res) => res.json())
      .then(([data]) => {
        setQuote(data);
        console.log(data);
        setLoading(false);
        setTimeout(() => {
          setTags("");
        }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }
  function onClickhandler() {
    fetchData(tags);
  }

  useEffect(() => {
    fetchData(tags);
  }, []);

  return (
    <div className="card-container">
      <div className="loading-style">
        {loading && <BarLoader color="#36d7b7" width={"100%"} />}
      </div>

      <div className="card-quote">
        {quote ? (
          <div className="quote-text">
            <p>{quote?.content}</p>
            <p>- {quote?.authorSlug}</p>
          </div>
        ) : (
          <div className="quote-text">
            <p>Sorry No Quotes Found Related to the given tags</p>
          </div>
        )}

        <div className="tags-container">
          <label htmlFor="tags">Tags:</label>
          <input
            onChange={(e) => setTags(e.target.value)}
            type="text"
            placeholder="eg. inspiratoinal, history, technology"
            value={tags}
          />
        </div>
        <button onClick={onClickhandler} className="generate-btn">
          Generate
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
