// app/Components/ui/TCardUi/TCard.jsx
"use client";
import React from "react";

export default function TCard({ TCard }) {

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 shadow-sm min-h-[200px]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-3">
          <img
            src={TCard.image}
            alt="Jane avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold">{TCard.name}</div>
            <div className="text-xs text-gray-500 mb-2">
              {TCard.location}
            </div>
          </div>
        </div>
        <div className="text-sm font-medium">{TCard.rating}</div>
      </div>
      <div className="flex items-center mb-6 mt-6 gap-2 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            viewBox="0 0 18 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
          </svg>
        ))}
      </div>

      <div className="text-sm text-gray-700">{TCard.text}</div>
    </div>
  );
}
