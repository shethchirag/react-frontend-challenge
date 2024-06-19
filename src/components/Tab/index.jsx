import { useState } from "react";
import "./style.css";

const tabData = [
  {
    tabSelect: "Tab1",
    tabContent: {
      tabHeader: "Content of Tab 1:",
      tabText:
        "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more.",
    },
  },
  {
    tabSelect: "Tab2",
    tabContent: {
      tabHeader: "Content of Tab 2:",
      tabText:
        "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
    },
  },
  {
    tabSelect: "Tab3",
    tabContent: {
      tabHeader: "Content of Tab 3:",
      tabText:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
    },
  },
];
const Tab = () => {
  const [tabSelect, setTabSelect] = useState("tab1");

  const handleTab = (tab) => {
    setTabSelect(tab);
  };
  return (
    <div className="tab-container">
      <div className="tab-part">
        {tabData.map((tab, index) => (
          <span
            className={` ${
              tabSelect.toLowerCase() === tab.tabSelect.toLowerCase()
                ? "active"
                : ""
            }`}
            onClick={() => handleTab(tab.tabSelect)}
            key={index}
          >
            {tab.tabSelect}
          </span>
        ))}
        {tabData.map((tab, index) =>
          tabSelect.toLowerCase() === tab.tabSelect.toLowerCase() ? (
            <div key={index} className={`tab-content `}>
              <h3>{tab.tabContent.tabHeader}</h3>
              <p>{tab.tabContent.tabText}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Tab;
