import "./style.css";
import { FOODS } from "./data.js";
import { useState } from "react";
console.log(FOODS);
const Pagination = () => {
  const [itemPerPage, setItemPerPage] = useState(10);
  const [itemInput, setItemInput] = useState(itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const paginationData = FOODS.slice(startIndex, endIndex);
  const totalPage = FOODS.length / itemPerPage;
  const itemPageHandler = () => {
    if (itemInput >= 1) {
      setItemPerPage(itemInput);
    }
  };

  return (
    <div className="table-container">
      <div className="table-part">
        <table>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>#</th>
              <th>FOOD</th>
              <th>PRICE</th>
            </tr>
          </thead>
          {paginationData.map((table) => (
            <tbody key={table.id}>
              <tr>
                <td>{table.id}</td>
                <td>{table.name}</td>
                <td>{table.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="table-btn">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          prev
        </button>
        <p>
          Page {currentPage} of {Math.ceil(totalPage)}
        </p>
        <button
          disabled={currentPage === Math.ceil(totalPage)}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          next
        </button>
        <input
          className="item-parPage"
          type="number"
          value={itemInput}
          placeholder="item per page"
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={itemPageHandler}>set</button>
      </div>
    </div>
  );
};

export default Pagination;
