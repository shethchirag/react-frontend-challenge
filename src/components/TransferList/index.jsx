import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./style.css";
import { useState } from "react";

const BoxData = [
  { id: "1", checked: false, checkName: " Usa" },
  { id: "2", checked: false, checkName: " UAE" },
  { id: "3", checked: false, checkName: " Australia" },
  { id: "4", checked: false, checkName: " Canada" },
  { id: "5", checked: false, checkName: " India" },
];
const BoxDataSecond = [];

const TransferList = () => {
  const [checkBoxData, setCheckBoxData] = useState(BoxData);
  const [boxSecondData, setBoxSecondData] = useState(BoxDataSecond);

  const handleCheck = (id, box) => {
    if (box === "firstBox") {
      const sampleData = checkBoxData.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      setCheckBoxData([...sampleData]);
    } else if (box === "secondBox") {
      const sampleData = boxSecondData.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      setBoxSecondData([...sampleData]);
    }
  };

  const actionHandler = (direction) => {
    if (direction === "DoubleArrowRight") {
      setBoxSecondData((prev) => [...prev, ...checkBoxData]);
      setCheckBoxData([]);
    } else if (direction === "DoubleArrowLeft") {
      setCheckBoxData((prev) => [...prev, ...boxSecondData]);
      setBoxSecondData([]);
    } else if (direction === "ArrowLeft") {
      let selectedData = boxSecondData.filter((item) => item.checked);
      let remainData = boxSecondData.filter((item) => !item.checked);

      setBoxSecondData(remainData);
      setCheckBoxData((prev) => [
        ...prev,
        ...selectedData.map((item) => {
          return { ...item, checked: false };
        }),
      ]);
    } else if (direction === "ArrowRight") {
      let selectedData = checkBoxData.filter((item) => item.checked);
      let remainData = checkBoxData.filter((item) => !item.checked);
      setCheckBoxData(remainData);
      setBoxSecondData((prev) => [
        ...prev,
        ...selectedData.map((item) => {
          return { ...item, checked: false };
        }),
      ]);
    }
  };

  return (
    <div className="transferList-container">
      <div className="transferContainer">
        <div className="transferPart-left">
          {checkBoxData.map((item) => (
            <div key={item.id} className="item">
              <input
                type="checkbox"
                name={item.checkName}
                id={item.checkName}
                checked={item.checked}
                onChange={() => handleCheck(item.id, "firstBox")}
              />
              <label htmlFor={item.checkName}>{item.checkName}</label>
            </div>
          ))}
        </div>
        <div className="control-btn">
          <button
            onClick={() => actionHandler("DoubleArrowRight")}
            className="dblArrow"
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
          <button
            onClick={() => actionHandler("ArrowLeft")}
            className="arrowLeft"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={() => actionHandler("ArrowRight")}
            className="arrowRight"
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            onClick={() => actionHandler("DoubleArrowLeft")}
            className="arrowLeft "
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
        </div>
        <div className="transferPart-right">
          {boxSecondData.map((item) => (
            <div key={item.id} className="item">
              <input
                type="checkbox"
                name={item.checkName}
                id={item.checkName}
                checked={item.checked}
                onChange={() => handleCheck(item.id, "secondBox")}
              />
              <label htmlFor={item.checkName}>{item.checkName}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
