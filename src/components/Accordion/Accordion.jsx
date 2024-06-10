import { useEffect, useState } from "react";

const AccordionCard = ({ info, title, id, setIdOfOpenAccordion, openid }) => {
  const [open, setOpen] = useState(false);
  const toggleHandler = () => {
    setOpen(!open);
    setIdOfOpenAccordion(id);
  };
  useEffect(() => {
    if (openid) {
      setOpen(openid === id);
    }
  }, [openid, id]);

  return (
    <div key={id} className="accordion-main">
      <div className="accordion-main-text">
        <h3>{title}</h3>
        <button onClick={toggleHandler} className="toggle-btn">
          {open ? "-" : "+"}
        </button>
      </div>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <p className="accordion-hide">{info}</p>
      </div>
    </div>
  );
};

export default AccordionCard;
