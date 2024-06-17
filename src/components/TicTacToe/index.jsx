import { useEffect, useState } from "react";
import "./style.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xWin, setXwin] = useState(0);
  const [oWin, setOwin] = useState(0);
  const [draw, setdraw] = useState(0);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

  const randomText = () => {
    const text = ["X", "O"];
    return text[Math.floor(Math.random() * 2)];
  };
  const randomHandler = (e, index) => {
    if (board[index] === null && winner === null) {
      const newBoard = [...board];
      newBoard[index] = randomText();
      setBoard(newBoard);
      const winnerget = calculateWinner(newBoard);
      setWinner(winnerget);
    }
  };
  useEffect(() => {
    if (winner === "X") {
      setXwin((prev) => prev + 1);
    } else if (winner === "O") {
      setOwin((prev) => prev + 1);
    } else if (winner === null && board.every((value) => value !== null)) {
      setdraw((prev) => prev + 1);
    }
  }, [winner, board]);

  const resetHandler = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <div className="tic-container">
      <div className="status">
        <p>Status: {winner ? `Winner is ${winner}` : "Playing"}</p>
        <div className="result">
          <p>
            X <span>{xWin} Wins</span>
          </p>
          <p>
            O <span>{oWin} Wins</span>
          </p>
          <p>
            = <span>{draw} Draws</span>
          </p>
        </div>
      </div>
      <div className="tic-tac-box">
        {board.map((value, index) => (
          <div
            onClick={(e) => randomHandler(e, index)}
            key={index}
            className="tic-tac-main"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="rematch">
        <button onClick={resetHandler} className="rematch-btn">
          Rematch
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
