import { useState } from "react";
import "./style.css";
import questions from "./questions";
import AccordionCard from "./Accordion";
const Accordion = () => {
  const [multiple, setMultiple] = useState(true);
  const [openid, setOpenId] = useState(null);
  console.log(openid);
  const setIdOfOpenAccordion = (id = null) => {
    setOpenId(multiple ? null : id);
  };
  console.log(openid);
  const onMultipleChange = () => {
    if (multiple) {
      setOpenId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className="accordion-main-container">
      <h4 style={{ textAlign: "center" }}>
        <label htmlFor="max-open">Is multiple open accordion allowed?</label>
        <input
          type="checkbox"
          id="max-open"
          checked={multiple}
          onChange={onMultipleChange}
        />
      </h4>
      {questions.map((item) => (
        <AccordionCard
          key={item.id}
          title={item.title}
          info={item.info}
          id={item.id}
          openid={openid}
          setIdOfOpenAccordion={setIdOfOpenAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
