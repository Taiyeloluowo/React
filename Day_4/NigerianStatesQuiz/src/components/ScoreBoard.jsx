import React from "react";

const ScoreBoard = ({ score, total }) => {
  return (
    <div className="score-board">
      <h3>Score: {score} / {total}</h3>
    </div>
  );
};

export default ScoreBoard;