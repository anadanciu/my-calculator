import { useEffect, useRef } from "react";

const FocusInput = () => {
  let inputElement = useRef<HTMLInputElement>(null); // set the "current" property to undefined

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input name="focused-input" ref={inputElement}></input>
    </div>
  );
};

export default FocusInput;
