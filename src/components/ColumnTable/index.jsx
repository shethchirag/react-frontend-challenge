import { useEffect, useState } from "react";
import "./style.css";

const ColumnTable = () => {
  const [row, setRow] = useState("1");
  const [colum, setColum] = useState("1");
  const [table, setTable] = useState([]);
  function createMatrix(rows, columns) {
    const matrix = [];
    let value = 1;
    for (let i = 0; i < columns; i++) {
      const row = [];
      for (let j = 0; j < rows; j++) {
        row.push(value++);
      }
      matrix.push(row);
    }
    return matrix;
  }
  useEffect(() => {
    const valueMatrix = createMatrix(Number(row), Number(colum));
    setTable(valueMatrix);
    console.log(valueMatrix);
  }, [row, colum]);

  console.log(row, colum);
  return (
    <div className="table-container">
      <div className="table-input">
        <div className="row-part">
          <label htmlFor="row">Row</label>
          <input
            onChange={(e) => {
              setRow(e.target.value);
            }}
            type="range"
            id="row"
            name="row"
            min="2"
            max="8"
            value={row}
          />
        </div>
        <div className="colum-part">
          <label htmlFor="colum">colum</label>
          <input
            onChange={(e) => setColum(e.target.value)}
            type="range"
            id="colum"
            name="colum"
            min="2"
            max="8"
            value={colum}
          />
        </div>
      </div>
      <div className="table">
        <table>
          <tbody>
            {table.map((item, index) => {
              return (
                <tr key={index}>
                  {item.map((num, index) => (
                    <td key={index}>{num}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColumnTable;
