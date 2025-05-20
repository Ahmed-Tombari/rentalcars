"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Dcard = ({ Ddata }) => {
  const [selectedDays, setSelectedDays] = useState(1);
  const [finalPrice, setFinalPrice] = useState(Ddata.price);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Update price based on selected days
  useEffect(() => {
    let calculatedPrice = Ddata.price * selectedDays;

    if (selectedDays > 7) calculatedPrice *= 0.9; // 10% off
    if (selectedDays > 30) calculatedPrice *= 0.8; // 20% off

    setFinalPrice(calculatedPrice.toFixed(2));
  }, [selectedDays, Ddata.price]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="self-stretch px-28 bg-white inline-flex justify-center items-center gap-12 flex-wrap content-center">
      {/* Image Placeholder */}
      <div
        data-active="yes"
        className="w-96 h-96 relative bg-black/10 rounded-[10px]"
      >
        <Image
          src={Ddata.image}
          alt="Mazda Super Fast Car"
          fill
          className="rounded object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-96 inline-flex flex-col justify-start items-center gap-7">
        {/* Title */}
        <div className="self-stretch text-black text-4xl font-bold font-roboto leading-10">
          {Ddata.description}
        </div>

        {/* Days Selector */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-black text-3xl font-bold font-roboto leading-9">
            Days
          </div>
          <div
            ref={dropdownRef}
            className="relative w-52 px-5 py-2.5 bg-transparent rounded-[10px] outline outline-1 outline-offset-[-0.5px] outline-black flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="text-black text-xl font-normal font-roboto leading-normal">
              {selectedDays} Day{selectedDays > 1 ? "s" : ""}
            </span>

            {/* Arrow Icon */}
            <div className="relative w-4 h-4">
              <div
                className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent ${
                  isOpen
                    ? "border-b-[10px] border-b-black"
                    : "border-t-[10px] border-t-black"
                } transition-all duration-300`}
              ></div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white z-50 rounded-md shadow-lg border outline outline-1 outline-black">
                {[1, 3, 7, 14, 30].map((day) => (
                  <div
                    key={day}
                    className="px-4 py-2 text-black hover:bg-gray-100 text-xl font-normal font-roboto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDays(day);
                      setIsOpen(false);
                    }}
                  >
                    {day} Day{day > 1 ? "s" : ""}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Price Info */}
        <div className="self-stretch inline-flex justify-start items-center gap-12">
          <div className="text-black text-5xl font-bold font-roboto leading-[56.26px]">
            Price
          </div>
          <div className="flex-1 text-center justify-start">
            <span className="text-red-600 text-4xl font-bold font-roboto leading-10">
              -{selectedDays > 30 ? "20%" : selectedDays > 7 ? "10%" : "0%"}
            </span>
            <span className="text-black text-4xl font-bold font-roboto leading-10">
              &nbsp;${finalPrice}
            </span>
          </div>
        </div>

        {/* Rent Now Button */}
        <div 
          data-property-1="Default"
          className="w-36 p-2.5 bg-lime-300 rounded inline-flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300 hover:text-white hover:bg-lime-500 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070]"
        >
          <Link href="/Pages/RentForm" className="text-center text-gray-900 text-base font-semibold font-roboto leading-normal">
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dcard;