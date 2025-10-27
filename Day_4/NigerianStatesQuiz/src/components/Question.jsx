import React, { useState } from "react";

const Question = ({ data, number, total, onAnswer }) => {
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    if (selected) {
      onAnswer(selected);
      setSelected("");
    }
  };

  return (
    <div className="question-box">
      <h3>
        Question {number} of {total}:
      </h3>
      <p>{data.question}</p>

      {data.options.map((opt, i) => (
        <label key={i} className="option">
          <input
            type="radio"
            name="option"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          {opt}
        </label>
      ))}

      <button className="submit-btn" onClick={handleSubmit} disabled={!selected}>
        Submit Answer
      </button>
    </div>
  );
};

export default Question;