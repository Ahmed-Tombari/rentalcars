"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  // Helper to check if the current route matches the link
  const isActive = (href) => {
    return router.pathname === href;
  };

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
    <div className="md:hidden">
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className="w-10 h-10 cursor-pointer"
        >
          {isDarkMode ? (
            <img src="/images/sun.svg" alt="Sun Icon" className="w-10 h-10" />
          ) : (
            <img src="/images/moon.svg" alt="Moon Icon" className="w-10 h-10" />
          )}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none dark:text-white"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-5 space-y-4 z-50 grid grid-rows-1 gap-3 dark:text-black">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="ml-auto block text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="grid grid-rows-1 gap-3 sm:gap-6 text-center">
            <Link
              href="/"
              className={`hover:bg-lime-300 ${
                isActive("/") ? "bg-lime-300" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/Pages/Vehicles"
              className={`hover:bg-lime-300 ${
                isActive("/vehicles") ? "bg-lime-300" : ""
              }`}
            >
              Vehicles
            </Link>
            <Link
              href="/Pages/WhyChooseUS"
              className={`hover:bg-lime-300 ${
                isActive("/Pages/WhyChooseUS") ? "bg-lime-300" : ""
              }`}
            >
              Why Choose Us
            </Link>
            <Link
              href="/Pages/Testimonial"
              className={`hover:bg-lime-300 ${
                isActive("/Pages/Testimonial") ? "bg-lime-300" : ""
              }`}
            >
              Testimonial
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col space-y-2 gap-3">
            <Link
              href="/Pages/Register"
              className="underline text-xs text-center"
            >
              Register
            </Link>
            <Link
              href="/Pages/Login"
              className="bg-[#D7FF24] px-2 py-1 rounded-md text-xs text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
