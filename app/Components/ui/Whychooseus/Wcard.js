"use client";
import React from "react";

const Wcard = ({ Wcard }) => {
  return (
    <div className="flex flex-col p-4 border border-transparent rounded-lg transition-all duration-300 hover:border-[#c8ff00] hover:shadow-[0_0_20px_#c8ff0070]">
      <div className="flex items-start gap-5">
        {/* Icon */}
        <button
          dangerouslySetInnerHTML={{ __html: Wcard.icon }}
          className="bg-[#c8ff00] rounded-lg p-4 flex items-center justify-center relative overflow-hidden border-[#c8ff00] group transition-all duration-300 hover:border-[#c8ff00] hover:shadow-[0_0_50px_#c8ff0070] hover:text-white dark:hover:text-black"
        >
        </button>
        {/* Text */}
        <div>
          <h3 className="font-bold text-xl md:text-2xl">{Wcard.name}</h3>
          <p className="mt-2 text-sm md:text-base">{Wcard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Wcard;
