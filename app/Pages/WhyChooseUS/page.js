// WhyChooseUS.tsx or similar
import React from "react";

import WTexthead from "@/app/Components/ui/Whychooseus/WTexthead";
import WmenuCard from "@/app/Components/ui/Whychooseus/WmenuCard";

export default function WhyChooseUS() {
  return (
    <section className="w-full max-w-[1440px] px-4 py-10 md:py-12 lg:px-[120px] lg:py-14 xl:py-16 mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <WTexthead />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none">
          <img
            src="/images/Whycar.svg"
            alt="Hero Car"
            className="w-full h-auto"
          />
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-auto">
          <WmenuCard />
        </div>
      </div>
    </section>
  );
}