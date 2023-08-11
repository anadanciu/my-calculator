import { useState } from "react";
import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <div className="page" style={{ backgroundColor }}>
      {colors.map((color, key) => (
        <Color
          key={key}
          hex={color.hex}
          name={color.name}
          act={() => setBackgroundColor(color.hex)}
        />
      ))}
    </div>
  );
}
