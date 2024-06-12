import "./style.css";
import { FOODS } from "./data.js";
import { useState } from "react";
console.log(FOODS);
const Pagination = () => {
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const paginationData = FOODS.slice(startIndex, endIndex);

  return (
    <div className="table-container">
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
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>next</button>
    </div>
  );
};

export default Pagination;
