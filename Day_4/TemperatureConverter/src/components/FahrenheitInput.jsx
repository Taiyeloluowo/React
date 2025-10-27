import React from "react";

const FahrenheitInput = ({ value, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <div className="input-group">
      <label>Fahrenheit:</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="Enter °F"
      />
    </div>
  );
};

export default FahrenheitInput;