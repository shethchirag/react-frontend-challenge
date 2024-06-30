import DropdownItem from "./DropdownItem";

const Dropdown = ({ subItems, dropDown }) => {
  console.log(dropDown);
  return (
    <ul className={`${dropDown ? "showDrop" : "hideDrop"}`}>
      {subItems.map((subItem, index) => (
        <DropdownItem items={subItem} key={index} />
      ))}
    </ul>
  );
};

export default Dropdown;
