import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = (url) => {
      setLoading(true);
      axios
        .get(url, (req, res) => {
          res.json();
        })
        .then(({ data }) => {
          setEmojiData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };
    fetchData(url);
  }, [url]);
  return [emojiData, loading, error];
};

export default useFetchData;
