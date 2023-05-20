import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <div className="header-container">
      <h1>devfinder</h1>
      <div className="header-theme">
        <p>{dark ? "LIGHT" : "DARK"}</p>
        <FontAwesomeIcon className="header-icon" icon={faMoon} />
      </div>
    </div>
  );
};

export default Header;
