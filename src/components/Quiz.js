import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import "./Quiz.css";

const questions = [
  {
    questionText: "Which team won the NBA Championship in 2024?",
    options: [
      { answerText: "Denver Nuggets", isCorrect: false },
      { answerText: "Miami Heat", isCorrect: false },
      { answerText: "Golden State Warriors", isCorrect: false },
      { answerText: "Boston Celtics", isCorrect: true },
    ],
  },
  {
    questionText: "Which team won the NBA Championship in 2023?",
    options: [
      { answerText: "Denver Nuggets", isCorrect: true },
      { answerText: "Miami Heat", isCorrect: false },
      { answerText: "Golden State Warriors", isCorrect: false },
      { answerText: "Boston Celtics", isCorrect: false },
    ],
  },
  {
    questionText: "Which team claimed the NBA title in 2022?",
    options: [
      { answerText: "Golden State Warriors", isCorrect: true },
      { answerText: "Boston Celtics", isCorrect: false },
      { answerText: "Milwaukee Bucks", isCorrect: false },
      { answerText: "Phoenix Suns", isCorrect: false },
    ],
  },
  {
    questionText: "Which team won the NBA Championship in 2021?",
    options: [
      { answerText: "Milwaukee Bucks", isCorrect: true },
      { answerText: "Phoenix Suns", isCorrect: false },
      { answerText: "Los Angeles Lakers", isCorrect: false },
      { answerText: "Atlanta Hawks", isCorrect: false },
    ],
  },
  {
    questionText: "Which team won the NBA title in 2020?",
    options: [
      { answerText: "Los Angeles Lakers", isCorrect: true },
      { answerText: "Miami Heat", isCorrect: false },
      { answerText: "Toronto Raptors", isCorrect: false },
      { answerText: "Boston Celtics", isCorrect: false },
    ],
  },
  {
    questionText: "Which team was the runner-up in the NBA Finals in 2022?",
    options: [
      { answerText: "Boston Celtics", isCorrect: true },
      { answerText: "Golden State Warriors", isCorrect: false },
      { answerText: "Miami Heat", isCorrect: false },
      { answerText: "Milwaukee Bucks", isCorrect: false },
    ],
  },
];

function Quiz({ setAnsweredCount, isTimeUp, setShowResult }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResultLocal] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const answeredQuestions = answers.filter(
      (answer) => answer !== null
    ).length;
    setAnsweredCount(answeredQuestions);
  }, [answers, setAnsweredCount]);

  const handleAnswerOptionClick = (questionIndex, isCorrect) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = isCorrect;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newScore = answers.filter((answer) => answer === true).length;
    setScore(newScore);
    setShowResult(true);
    setShowResultLocal(true);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <div>
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question}
              questionIndex={index}
              handleAnswerOptionClick={handleAnswerOptionClick}
            />
          ))}
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={isTimeUp || showResult}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
