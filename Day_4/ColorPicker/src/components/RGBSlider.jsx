import React from "react";

const RGBSlider = ({ color, value, onChange }) => {
  const handleChange = (e) => {
    onChange(color, e.target.value);
  };

  const colorName = color === "r" ? "Red" : color === "g" ? "Green" : "Blue";

  return (
    <div className="slider-container">
      <label>{colorName}: {value}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
        style={{ accentColor: color }}
      />
    </div>
  );
};

export default RGBSlider;