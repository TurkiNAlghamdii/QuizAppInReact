// ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ answeredCount, totalQuestions }) => {
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <p className="progress-text">
        Questions Answered: {answeredCount} / {totalQuestions}
      </p>
      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
