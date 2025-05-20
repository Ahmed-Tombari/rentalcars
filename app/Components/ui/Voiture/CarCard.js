// components/CarCard.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const CarCard = ({ Vdata }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col w-full max-w-xs bg-white rounded-lg shadow-[0px_4px_64px_rgba(0,0,0,0.25)] p-5 gap-7">
      {/* Price Section */}
      <div className="flex justify-between items-center">
        <b className="text-xl font-bold text-gray-900">
          <span>${Vdata.price}/</span>
          <span className="text-sm font-normal">{Vdata.time}</span>
        </b>
        <div
          className="relative w-6 h-6 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#c8ff00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.15135 4.1185C5.56782 1.73784 9.38479 1.57302 11.9952 3.62405C14.6065 1.57302 18.4304 1.73784 20.8469 4.1185L20.8478 4.11942C23.4493 6.69074 23.4493 10.852 20.8563 13.4234L20.8534 13.4263L12.5555 21.5711C12.244 21.8769 11.745 21.8765 11.4339 21.5703L3.15135 13.4179C0.548507 10.8536 0.548507 6.68278 3.15135 4.1185Z"
                fill="#c8ff00"
                class="my-path"
              ></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.12695 13.218L12.026 21L20.2707 12.8774"
                stroke="#231F20"
                stroke-width="null"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="my-path"
              ></path>
              <path
                d="M12.0039 4.68819C14.2887 2.43727 18.0014 2.43727 20.2862 4.68819C22.571 6.94652 22.571 10.5969 20.2937 12.8552"
                stroke="#231F20"
                stroke-width="null"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="my-path"
              ></path>
              <path
                d="M11.9959 4.68819C9.71112 2.43727 5.99836 2.43727 3.71358 4.68819C1.42881 6.93912 1.42881 10.5969 3.71358 12.8478M3.71358 12.8478L3.73297 12.8668M3.71358 12.8478L4.11943 13.2106"
                stroke="#231F20"
                stroke-width="null"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="my-path"
              ></path>
            </svg>
          )}
        </div>
      </div>

      {/* Car Image */}
      <div className="relative w-full h-48">
        <Image
          src={Vdata.image}
          alt="Mazda Super Fast Car"
          fill
          className="rounded object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold leading-relaxed tracking-tight text-gray-900">
        {Vdata.name}
      </h3>

      {/* Buttons */}
      <div className="flex justify-center gap-2 pt-2">
        <Link
          href={`/Pages/Vehicles/${Vdata.id}`}
          className="w-[116px] px-4 py-2 bg-lime-300 border border-white rounded text-base font-semibold text-center cursor-pointer transition-all duration-300 hover:text-white hover:bg-lime-500 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070]"
        >
          Details
        </Link>
        <Link href="/Pages/RentForm" className="w-[116px] px-4 py-2 bg-lime-300 border border-white rounded text-base font-semibold text-center cursor-pointer transition-all duration-300 hover:text-white hover:bg-lime-500 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070]">
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
