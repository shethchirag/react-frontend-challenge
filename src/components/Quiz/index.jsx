import "./style.css";
import reactQuiz from "./react-quiz.json";
import { useState } from "react";

const ReactQuiz = () => {
  const [quiz, setQuiz] = useState([reactQuiz]);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [answer, setAnswer] = useState("");
  const [correctAns, setCorrectAns] = useState(0);
  const [falseAns, setFalseAns] = useState(0);
  const [activeAns, setActiveAns] = useState(false);
  const [mark, setMark] = useState("");
  const [result, setResult] = useState({});
  const totalPages = Math.ceil(quiz[0].quiz.questions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextHandler = () => {
    let newCorrectAns = correctAns;
    let newFalseAns = falseAns;

    if (answer === quiz[0].quiz.questions[currentPage - 1].correctAnswer) {
      newCorrectAns += 1;
    } else {
      newFalseAns += 1;
    }

    setActiveAns(false);

    if (currentPage < totalPages) {
      setCorrectAns(newCorrectAns);
      setFalseAns(newFalseAns);
      setCurrentPage(currentPage + 1);
    } else {
      const finalMark = (newCorrectAns * 50) / totalPages;
      setMark(finalMark);
      setResult({
        totalQue: totalPages,
        totalMark: finalMark,
        correct: newCorrectAns,
        falseAns: newFalseAns,
      });
    }
  };

  const resetHandler = () => {
    setCurrentPage(1);
    setResult({});
    setActiveAns(false);
    setCorrectAns(0);
    setFalseAns(0);
  };
  return (
    <div className="quiz-container">
      {!Object.keys(result).length ? (
        <>
          {quiz.map((question, index) => {
            const { topic, questions } = question.quiz;
            const questionsPerPage = questions.slice(startIndex, endIndex);
            return (
              <div key={index} className="question-container">
                <div className="quiz-title">
                  <h2>Topic: {topic}</h2>
                  <p>
                    {currentPage}/{totalPages}
                  </p>
                </div>
                {questionsPerPage.map((que, index) => (
                  <div key={`${que.question}-${index}`}>
                    <div className="question-display">
                      <h1>{que.question}</h1>
                    </div>
                    <div className="question-option">
                      <ul>
                        {que.choices.map((item, idx) => (
                          <li
                            className={`${
                              answer === item && activeAns ? "liActive" : ""
                            }`}
                            onClick={() => {
                              setAnswer(item);
                              setActiveAns(true);
                            }}
                            key={`${item}-${idx}`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="q-btn">
                  <button disabled={!activeAns} onClick={nextHandler}>
                    {currentPage === totalPages ? "final" : "Next"}
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="quiz_result">
          <div className="table">
            <h3>Result</h3>
            <table>
              <tbody>
                <tr>
                  <td>Total Questions</td>
                  <td>{result.totalQue}</td>
                </tr>
                <tr>
                  <td>Total Score</td>
                  <td>{result.totalMark}</td>
                </tr>
                <tr>
                  <td>Correct Answers</td>
                  <td>{result.correct}</td>
                </tr>
                <tr>
                  <td>Wrong Answers</td>
                  <td>{result.falseAns}</td>
                </tr>
              </tbody>
            </table>
            <div className="q-btn-retest">
              <button onClick={resetHandler}>Retest</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactQuiz;
