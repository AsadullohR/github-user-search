import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ switchTheme, theme }) => {
  return (
    <div className="header-container">
      <h1>devfinder</h1>
      <div className="header-theme">
        <p>{theme === "dark" ? "LIGHT" : "DARK"}</p>
        {theme === "dark" ? (
          <FontAwesomeIcon
            className="header-icon"
            icon={faSun}
            onClick={switchTheme}
            size="xl"
          />
        ) : (
          <FontAwesomeIcon
            className="header-icon"
            icon={faMoon}
            onClick={switchTheme}
            size="xl"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
