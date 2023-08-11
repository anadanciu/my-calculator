import React, {
  useState,
  useContext,
  createContext,
  MouseEventHandler,
} from "react";

const ColorContext = createContext("");

interface IMyProps {
  chooseAColor: (color: string) => void;
}

const ColorPicker: React.FC<IMyProps> = (props: IMyProps) => {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => props.chooseAColor(color)}
        />
      ))}
    </>
  );
};

const Pixel = () => {
  const selectedColor: string = useContext(ColorContext);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = selectedColor;
  };

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        margin: "1px",
        backgroundColor: "lightgrey",
      }}
      onClick={handleClick}
    />
  );
};

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

const PixelArt = () => {
  const [color, setColor] = useState("lightGrey");
  const chooseAColor = (color: string) => {
    console.log(color);
    setColor(color);
  };

  return (
    <ColorContext.Provider value={color}>
      <h1>Choose a color</h1>
      <ColorPicker chooseAColor={chooseAColor} />
      <Pixels />
    </ColorContext.Provider>
  );
};

export default PixelArt;
