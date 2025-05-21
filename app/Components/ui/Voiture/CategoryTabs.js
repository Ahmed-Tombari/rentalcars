// components/CategoryTabs.tsx
"use client";
import React, { useState } from "react";
import TabItem from "./TabItem";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  const tabs = ["Popular", "Large Car", "Small Car", "Exclusive Car"];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full">
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          title={tab}
          isActive={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        />
      ))}
    </div>
  );
};

export default CategoryTabs;