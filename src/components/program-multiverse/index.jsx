import languagesData from "./languagesData";
import "./style.css";

const ProgrammingMultiverse = () => {
  return (
    <div className="program-list">
      {languagesData.map((program, index) => (
        <div key={index} className="program-card">
          <h2>{program.name}</h2>
          <p>{program.year}</p>
          <p>{program.creator}</p>
          <p>{program.usecase}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingMultiverse;
