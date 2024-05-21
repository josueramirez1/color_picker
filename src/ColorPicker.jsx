import React, { useState } from "react";

const ColorPicker = (props) => {
  const hex = document.querySelector(".hexName");

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>

      <div className="color-picker" style={{ backgroundColor: color }}>
        <p>
          Selected Color: <span className="hexName">{color}</span>
        </p>
      </div>
      <label htmlFor="favcolor">Select your color</label>
      <input
        onChange={handleColorChange}
        type="color"
        id="favcolor"
        value={color}
      />
    </div>
  );
};

export default ColorPicker;
