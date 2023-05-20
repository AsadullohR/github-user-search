import "./App.css";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
// import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Dashboard switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

export default App;
