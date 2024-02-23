import { FaMoon, FaSun } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <IconContext.Provider
      value={{ color: isDarkMode ? "white" : "black", size: "2em" }}
    >
      <div>
        {isDarkMode ? (
          <FaSun onClick={toggleDarkMode} />
        ) : (
          <FaMoon onClick={toggleDarkMode} />
        )}
      </div>
    </IconContext.Provider>
  );
}
