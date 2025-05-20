"use client";
import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

const MainMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
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
      <a href="/Pages/Register" className="underline hover:text-lime-300">Registre</a>
      <a href="/Pages/Login" className="bg-[#D7FF24] px-[10px] py-[10px] rounded-md w-[82px] text-center transition-all duration-300 hover:text-white hover:bg-lime-300 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070]">
        Login
      </a>
      <button
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="w-10 h-10 cursor-pointer"
      >
        {isDarkMode ? (
          <img src="/images/sun.svg" alt="Sun Icon" className="w-10 h-10" />
        ) : (
          <img src="/images/moon.svg" alt="Moon Icon" className="w-10 h-10" />
        )}
      </button>
    </div>
  );
};

export default MainMenu;