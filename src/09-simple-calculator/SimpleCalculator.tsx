import calcReducer from "./calcReducer";
import { MouseEventHandler, useReducer } from "react";

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

const SimpleCalculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let [results, dispatch] = useReducer(calcReducer, initialState);

  function handleAdd() {
    dispatch({
      type: "added",
    });
  }
  function handleSubstract() {
    dispatch({
      type: "subtract",
    });
  }

  function handleReset() {
    document
      .querySelectorAll(".elem-border")
      .forEach((el) => el.classList.remove("elem-border"));
    dispatch({
      type: "reset",
    });
  }

  const handleNumber1: MouseEventHandler<HTMLButtonElement> = (event) => {
    let target = event.target as HTMLButtonElement;
    document
      .querySelector(".number1.elem-border")
      ?.classList.remove("elem-border");
    target.classList.add("elem-border");

    dispatch({
      type: "selectedNumber1",
      text: Number(target.value),
    });
  };

  const handleNumber2: MouseEventHandler<HTMLButtonElement> = (event) => {
    let target = event.target as HTMLButtonElement;
    document
      .querySelector(".number2.elem-border")
      ?.classList.remove("elem-border");
    target.classList.add("elem-border");
    dispatch({
      type: "selectedNumber2",
      text: Number(target.value),
    });
  };

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number1) => (
          <button
            key={number1}
            value={number1}
            className="number1"
            onClick={handleNumber1}
          >
            {number1}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number2) => (
          <button
            key={number2}
            value={number2}
            className="number2"
            onClick={handleNumber2}
          >
            {number2}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubstract}>-</button>
        <button onClick={handleReset}>c</button>
      </div>
      <div>
        <h2>Result: {results.result}</h2>
      </div>
    </div>
  );
};

export default SimpleCalculator;
