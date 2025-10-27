import React, { useState } from "react";
import RGBSlider from "./components/RGBSlider";
import ColorDisplay from "./components/ColorDisplay";
import "../App.css";

const ColorPicker = () => {
    const [rgb, setRgb] = useState({ r: 255, g: 100, b: 50 });

    const handleChange = (color, value) => {
        setRgb({ ...rgb, [color]: parseInt(value) });
    };

    const toHex = (r, g, b) => {
        return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
    };

    const copyHex = () => {
        const hex = toHex(rgb.r, rgb.g, rgb.b);
        navigator.clipboard.writeText(hex);
        alert(`Copied ${hex} to clipboard!`);
    };

    return (
        <div className="color-picker">
            <h2>Color Picker</h2>
            <RGBSlider color="r" value={rgb.r} onChange={handleChange} />
            <RGBSlider color="g" value={rgb.g} onChange={handleChange} />
            <RGBSlider color="b" value={rgb.b} onChange={handleChange} />

            <ColorDisplay rgb={rgb} hex={toHex(rgb.r, rgb.g, rgb.b)} />

            <button className="copy-btn" onClick={copyHex}>Copy Hex</button>
        </div>
    );
};

export default ColorPicker;