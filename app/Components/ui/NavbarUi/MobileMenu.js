"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Helper to check if the current route matches the link
  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div className="md:hidden">
      <div className="flex items-center space-x-3">
        <Link href="#" className="w-10 h-10">
          <img src="/images/moon.svg" alt="Login Icon" className="w-10 h-10" />
        </Link>
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
              className={`hover:bg-[#E8FF91] ${
                isActive("/") ? "bg-[#E8FF91]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/Pages/Vehicles"
              className={`hover:bg-[#E8FF91] ${
                isActive("/vehicles") ? "bg-[#E8FF91]" : ""
              }`}
            >
              Vehicles
            </Link>
            <Link
              href="/Pages/WhyChooseUS"
              className={`hover:bg-[#E8FF91] ${
                isActive("/Pages/WhyChooseUS") ? "bg-[#E8FF91]" : ""
              }`}
            >
              Why Choose Us
            </Link>
            <Link
              href="/Pages/testimonial"
              className={`hover:bg-[#E8FF91] ${
                isActive("/Pages/Testimonial") ? "bg-[#E8FF91]" : ""
              }`}
            >
              Testimonial
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col space-y-2 gap-3">
            <Link href="/Pages/Register" className="underline text-xs text-center">
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