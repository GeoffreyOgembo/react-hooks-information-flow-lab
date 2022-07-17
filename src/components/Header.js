import React from "react";

function Header({isDarkMode, onDarkModeClick}){
  // const [darkMode, onDarkMode] = useState(false);
  return (
  <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
      {isDarkMode ? "Dark" : "Light"} Mode
    </button>
  </header>
 );
}

export default Header;