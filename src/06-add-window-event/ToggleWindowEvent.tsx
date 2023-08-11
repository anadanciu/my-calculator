import { useState, useEffect } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  useEffect(() => {
    function handlerEvent() {
      alert("You double clicked!");
    }
    if (windowEvent) {
      window.addEventListener("dblclick", handlerEvent);
      return () => {
        window.removeEventListener("dblclick", handlerEvent);
      };
    }
  }, [windowEvent]);
  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      <p>{windowEvent}</p>
      {windowEvent && <WindowEvent />}
    </div>
  );
}
