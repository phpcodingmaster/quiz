import React, { useContext } from "react";
import { QuizContext } from "../helpers/context";

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <button className="start_quiz" onClick={() => setGameState("quiz")}>
        START QUIZ
      </button>
    </div>
  );
};

export default MainMenu;
