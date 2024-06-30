import "./style.css";
import { dropdownData } from "./data";
import DropdownItem from "./DropdownItem";

const NestedDropdown = () => {
  return (
    <div className="nested-container">
      <div className="nested-ul">
        <ul>
          {dropdownData.map((menu, index) => (
            <DropdownItem key={index} items={menu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NestedDropdown;
