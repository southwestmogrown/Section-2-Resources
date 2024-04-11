import { useThemeContext } from "../../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import "./Switch.css";

function Switch() {
  const { theme, setTheme } = useThemeContext();
  console.log(`The theme is now -> ${theme}`);
  return (
    <>
      <input
        className="react-switch-checkbox"
        id="theme-switch"
        type="checkbox"
        onChange={() =>
          setTheme((prevState) => (prevState === "dark" ? "light" : "dark"))
        }
      />
      <label className="react-switch-label" htmlFor="theme-switch">
        <span className="react-switch-button">
          {theme === "dark" ? (
            <MdDarkMode style={{ color: "black" }} />
          ) : (
            <MdLightMode />
          )}
        </span>
      </label>
    </>
  );
}

export default Switch;
