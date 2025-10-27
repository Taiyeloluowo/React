import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

const TemperatureApp = () => {
  const [temperature, setTemperature] = useState({ value: "", scale: "C" });

  const handleCelsiusChange = (value) => {
    setTemperature({ value, scale: "C" });
  };

  const handleFahrenheitChange = (value) => {
    setTemperature({ value, scale: "F" });
  };

  // Convert input value to number safely
  const tempValue = parseFloat(temperature.value);

  const celsius =
    temperature.scale === "F"
      ? tempValue
        ? (((tempValue - 32) * 5) / 9).toFixed(2)
        : ""
      : tempValue || "";

  const fahrenheit =
    temperature.scale === "C"
      ? tempValue
        ? (tempValue * (9 / 5) + 32).toFixed(2)
        : ""
      : tempValue || "";

  return (
    <div className="temp-container">
      <h2>Temperature Converter</h2>
      <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput
        value={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureApp;