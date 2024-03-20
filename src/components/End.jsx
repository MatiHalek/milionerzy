import { moneyPyramid } from "../data";

const End = (props) => {
  const { questionNumber, gameWin, gameLose, restartGame } = props;
  return (
    <div className="game--end--box">
      <h1 className="game--end--header">
        game {gameWin && `win`} {gameLose && `losed`} you earned
        {questionNumber == 1
          ? ` ${0}$`
          : ` ${
              moneyPyramid[moneyPyramid.length - questionNumber + 1].amount
            }$`}
      </h1>
      <button className="game--end--button" onClick={restartGame}>
        Zagraj ponownie
      </button>
    </div>
  );
};

export default End;
