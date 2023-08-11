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

export default function ColorRenderer() {
  return (
    <h2 className="c01-color-container">
      {colors.map((color, key) => (
        <Color key={key} hex={color.hex} name={color.name}></Color>
      ))}
    </h2>
  );
}
