import { useEffect, useState, useCallback, useRef } from "react";
import "./style.css";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const InfiniteScrolling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();
  console.log(observer);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      setData((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="scrolling-container">
      {data.map((card, index) => (
        <div
          key={index}
          className="card-container"
          ref={index === data.length - 1 ? lastElementRef : null}
        >
          <h3>{card.title}</h3>
        </div>
      ))}
      {loading && (
        <div className="center-loader">
          <ClipLoader color="#08010a" size={100} />
        </div>
      )}
    </div>
  );
};

export default InfiniteScrolling;
