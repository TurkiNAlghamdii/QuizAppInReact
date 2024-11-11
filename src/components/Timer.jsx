import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ onTimeUp, showResult }) => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (showResult) return;

    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp, showResult]);

  return (
    <p className="timer-text">
      Time Remaining: {Math.floor(timeLeft / 60)}:
      {("0" + (timeLeft % 60)).slice(-2)}
    </p>
  );
};

export default Timer;
