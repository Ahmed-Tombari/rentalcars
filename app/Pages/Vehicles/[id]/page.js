"use client"
import React from "react";
import { useParams } from "next/navigation";
import DcardContent from "@/app/Components/ui/CarDetails/DcardContent";

export default function VehicleDetails() {
  return (
    <section className="w-full max-w-auto px-4 py-10 md:py-12 lg:px-[120px] lg:py-14 xl:py-16 mx-auto">
    <DcardContent />
    </section>
  );
}
