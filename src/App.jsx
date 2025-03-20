import { moneyPyramid } from "../src/data";
import { useEffect, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
import End from "./components/End";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [gameLose, setGameLose] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [data, setData] = useState(null);
  const [questionImage, setQuestionImage] = useState("");
  useEffect(() => {
    setQuestionImage("");
    if (data != null && questionNumber < 15) {
      setQuestionImage(data[questionNumber - 1].image);
    }
  }, [questionNumber, data]);

  const restartGame = () => {
    setGameStart(false);
    setQuestionNumber(1);
    setGameLose(false);
    setGameWin(false);
    setData(null);
  };

  return (
    <>
      {(gameLose || gameWin) && (
        <End
          questionNumber={questionNumber}
          gameWin={gameWin}
          gameLose={gameLose}
          restartGame={restartGame}
        />
      )}

      {!gameStart && <Start setGameStart={setGameStart} setData={setData} />}

      <div
        className="app"
        style={gameLose || gameWin ? { display: "none" } : { display: "flex" }}
      >
        {gameStart && (
          <>
            <div className="main">
              <div className="top">
                {questionImage != "" && <img src={questionImage} />}
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setGameLose={setGameLose}
                  setGameWin={setGameWin}
                />
              </div>
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li key={m.id}
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
