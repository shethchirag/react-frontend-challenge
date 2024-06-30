import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const DropDownItem = ({ items }) => {
  const [dropDown, setdropDown] = useState(false);

  const dropDownhandler = (e) => {
    e.stopPropagation();
    console.log("object");
    setdropDown((prev) => !prev);
  };
  return (
    <li>
      {items.subItems ? (
        <>
          <a className="btn-drop" onClick={dropDownhandler}>
            {items.title}
            <span className={`arrow-style ${dropDown ? "open" : ""}`}>
              {/* {dropDown ? <IoIosArrowDown /> : } */}
              <IoIosArrowForward />
            </span>
          </a>
          <Dropdown subItems={items.subItems} dropDown={dropDown} />
        </>
      ) : (
        <a>{items.title}</a>
      )}
    </li>
  );
};

export default DropDownItem;
