import React, { useContext } from "react";
import { QuizContext } from "../helpers/context";
import { Questions } from "../helpers/QuestionBank";

const EndScreen = () => {
  const { score, setGameState, setScore } = useContext(QuizContext);

  const restartQuiz = () => {
    setGameState("menu");
    setScore(0);
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button className="restart_quiz" onClick={restartQuiz}>
        RESTART QUIZ
      </button>
    </div>
  );
};

export default EndScreen;
