"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Simple Spinner Component
function Spinner() {
  return (
    <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
  );
}

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // simulate loading delay
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-80 backdrop-blur-sm">
          <div className="flex flex-row items-center gap-4">
            <Spinner />
            <p className="text-lg font-medium text-gray-700">Loading...</p>
          </div>
        </div>
      )}

      <div
        className={
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-300"
        }
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
