import React from "react";

const VTexthead = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-3xl mx-auto">
      {/* Main Heading */}
      <h2 className="font-bold text-3xl md:text-3xl lg:text-5xl leading-tight">
        Cars List
      </h2>

      {/* Subheading Text */}
      <p className="font-medium text-base md:text-lg lg:text-xl max-w-[600px] mx-auto">
        A high-performing web-based car rental system for any rent- a-car
        company and website
      </p>
    </div>
  );
};

export default VTexthead;
