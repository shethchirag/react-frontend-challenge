import { useState } from "react";
import "./style.css";
import { MdOutlineDragIndicator } from "react-icons/md";
import Index from "./../BackgroundChanger/index";

const initialData = [
  { no: 1, name: "Ervin Howell", site: "anastasia.net" },
  { no: 2, name: "Leanne Graham", site: "hildegard.org" },
  { no: 3, name: "Chelsey Dietrich", site: "demarco.info" },
  { no: 4, name: "Clementine Bauch", site: "ramiro.info" },
  { no: 5, name: "Patricia Lebsack", site: "kale.biz" },
];

const DragDrop = () => {
  const [dragData, setDragData] = useState(initialData);
  const [draggedItem, setDraggedItem] = useState(null);

  const drop = (e, item) => {
    e.preventDefault();
  };
  const allowDrop = (e, item) => {
    const dragItem = dragData[item];
    if (draggedItem === dragItem) {
      return;
    }

    let items = dragData.filter((item) => item !== draggedItem);
    items.splice(item, 0, draggedItem);
    setDragData(items);
  };
  const drag = (ev, Index) => {
    setDraggedItem(dragData[Index]);
    ev.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="drag-container">
      <div className="drag-box">
        <ul>
          {dragData.map((item, index) => {
            return (
              <li
                onDrop={(e) => drop(e, item)}
                key={index}
                onDragOver={(e) => {
                  allowDrop(e, index);
                }}
              >
                <div
                  draggable="true"
                  className="item-drag"
                  onDragStart={(e) => drag(e, index)}
                  onDragEnd={() => setDraggedItem(null)}
                >
                  <span>{item.no}</span>
                  <span> {item.name}</span>
                  <span> {item.site}</span>
                  <MdOutlineDragIndicator />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DragDrop;
