import React, { useState, useEffect } from "react";

const Trivia = (props) => {
  const [question, setQuestion] = useState(null);
  const { data, questionNumber, setQuestionNumber, setGameLose, setGameWin } =
    props;

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (e, a) => {
    var answers = document.querySelectorAll(".answer");
    answers.forEach((el) => {
      el.style.pointerEvents = "none";
    });
    if (a.correct === true) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
    }
    setTimeout(() => {
      if (a.correct === true) {
        setQuestionNumber(questionNumber + 1);
        e.target.classList.remove("correct");
        if (questionNumber >= 15) {
          setGameWin(true);
        }
      }
      if (a.correct === false) {
        setGameLose(true);
      }
      answers.forEach((el) => {
        el.style.pointerEvents = "all";
      });
    }, 3000);
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={"answer"}
            onClick={(e) => {
              handleClick(e, a);
            }}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
