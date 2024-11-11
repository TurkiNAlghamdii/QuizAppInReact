import React, { useState } from "react";
import Quiz from "./components/Quiz";
import ProgressBar from "./components/ProgressBar";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const totalQuestions = 6;
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTimeUp = () => {
    setIsTimeUp(true);
    alert("Time's up! Quiz submission is disabled.");
  };

  return (
    <div className="App">
      <ProgressBar
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />

      <Timer onTimeUp={handleTimeUp} showResult={showResult} />

      <Quiz
        setAnsweredCount={setAnsweredCount}
        isTimeUp={isTimeUp}
        setShowResult={setShowResult}
      />
    </div>
  );
}

export default App;
