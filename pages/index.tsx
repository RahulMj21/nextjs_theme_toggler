import type { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";

const Home: NextPage = () => {
  const [activeTheme, setActiveTheme] = useState("");

  const toggleTheme = () => {
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";
    setActiveTheme(inactiveTheme);
    localStorage.setItem("theme", inactiveTheme);
    document.body.dataset.theme = inactiveTheme;
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  return (
    <div className="home">
      <button className="theme-toggler" onClick={toggleTheme}>
        toggle theme
      </button>
    </div>
  );
};

export default Home;
