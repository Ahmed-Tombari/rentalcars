"use client"
import React, { useState } from "react";
import MenuItems from "./MenuItems";


const MainMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Charger le thème au montage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Changer le thème
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };
  
  return (
    <div className="flex items-center lg:gap-9 h-[40px] sm:gap-3 md-gap-4">
      <MenuItems />
      <p>|</p>
      <a href="/Pages/Register" className="underline hover:text-[#D7FF24]">Registre</a>
      <a href="/Pages/Login" className="bg-[#D7FF24] px-[10px] py-[10px] rounded-md w-[82px] text-center">
        
        Login
      </a>
      <a className="w-10 h-10 cursor-pointer" onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
           {isDarkMode ? (
          <img src="/images/sun.svg" alt="Login Icon" className="w-10 h-10" />
        ) : (
        <img src="/images/moon.svg" alt="Login Icon" className="w-10 h-10" />
        )}
      </a>
    </div>
  );
};

export default MainMenu;
