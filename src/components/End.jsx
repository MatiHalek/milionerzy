import { moneyPyramid } from "../data";

const End = (props) => {
  const { questionNumber, gameWin, gameLose, restartGame } = props;
  return (
    <div className="game--end--box">
       <img
          src="src\assets\Who-Wants-To-Be-A-Millionaire-Game-2020-Logo.png" alt="App logo"
          className="app--logo"
        />
      <h1 className="game--end--header">
        {gameWin && `YOU ARE A MILLIONAIRE!`} {gameLose && `Game over!`} <br/><small>You won<span className="highlighted-text">
        {questionNumber == 1
          ? ` $${0}`
          : ` ${
              moneyPyramid[moneyPyramid.length - questionNumber + 1].amount
            }`}</span></small>
      </h1>
      <button className="game--end--button" onClick={restartGame}>
        Play again!
      </button>
    </div>
  );
};

export default End;
