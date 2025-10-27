import React from "react";

const CelsiusInput = ({ value, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <div className="input-group">
      <label>Celsius:</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="Enter °C"
      />
    </div>
  );
};

export default CelsiusInput;