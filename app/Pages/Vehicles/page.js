// Vehicles.tsx or similar
import React from "react";

import VTexthead from "@/app/Components/ui/Voiture/VTexthead";
import VmenuCard from "@/app/Components/ui/Voiture/VmenuCard";
import CategoryTabs from "@/app/Components/ui/Voiture/CategoryTabs";

export default function Vehicles() {
  return (
    <section className="w-full max-w-[1440px] px-4 py-10 md:py-12 lg:px-[120px] lg:py-14 xl:py-16 mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <VTexthead />
      </div>
      <div className="w-full lg:w-auto mb-16">
        <CategoryTabs />
      </div>
      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Cards Section */}
        <div className="w-full lg:w-auto">
          <VmenuCard />
        </div>
      </div>
    </section>
  );
}
