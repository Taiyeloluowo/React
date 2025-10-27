import React from "react";

const ColorDisplay = ({ rgb, hex }) => {
  const { r, g, b } = rgb;
  return (
    <div className="color-display">
      <div
        className="color-box"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      ></div>
      <p>RGB: ({r}, {g}, {b})</p>
      <p>HEX: {hex}</p>
    </div>
  );
};

export default ColorDisplay;