import { useRef, useState } from "react";

export default function DarkMode(): React.JSX.Element {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`page ${darkMode ? "dark-mode" : ""}`} data-testid="page">
      <button
        className="dark-mode-button"
        data-testid="dark"
        onClick={() => setDarkMode(true)}
      >
        Dark Mode
      </button>
      <button
        className="light-mode-button"
        data-testid="light"
        onClick={() => setDarkMode(false)}
      >
        Light Mode
      </button>
    </div>
  );
}
