import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/context";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    // got the correct answer, increase score
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    // Clear the background color of previously selected item
    let option_buttons = document.querySelectorAll(".option_button");
    option_buttons.forEach((element, index) => {
      element.style.backgroundColor = "#fff";
      element.style.color = "#000";
    });
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    // Set the game state to endscreen
    setGameState("endScreen");
  };

  const setSelectedOption = (e) => {
    // A, B, C, D
    let selectedanswer = e.target.getAttribute("selectedanswer");
    let current_element = e.target;
    console.dir(selectedanswer);
    setOptionChosen(selectedanswer);
    // Remove background color from all option_buttons
    let option_buttons = document.querySelectorAll(".option_button");
    option_buttons.forEach((element, index) => {
      element.style.backgroundColor = "#fff";
      element.style.color = "#000";
    });
    // Highlight the selected answer
    current_element.style.backgroundColor = "#ce3838";
    current_element.style.color = "#fff";
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button
          className="option_button"
          onClick={setSelectedOption}
          selectedanswer={"A"}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className="option_button"
          onClick={setSelectedOption}
          selectedanswer={"B"}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className="option_button"
          onClick={setSelectedOption}
          selectedanswer={"C"}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className="option_button"
          onClick={setSelectedOption}
          selectedanswer={"D"}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button className="finish_quiz" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="next_question" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
