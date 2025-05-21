"use client";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TCard from "./TCard";

export default function TestimonialsCarousel() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost";
  const API_PORT = process.env.NEXT_PUBLIC_API_PORT || "3000";

  const fullUrl = `${API_URL}:${API_PORT}`;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [Tdata, setTdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${fullUrl}/Api/TcardData`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setTdata(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    console.log("console Data =====> " + Tdata);
  }, []);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Spinner size="big" />
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  console.log("console Data =====> " + Tdata);
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: ##00ff27; color:##00ff27; width: 0.75rem; height: 0.75rem; border-radius: 999px;"></span>`;
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="pb-12"
      >
        {Tdata.map((item) => (
          <SwiperSlide key={item.id}>
            <TCard key={item.id} TCard={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination and Navigation below */}
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="custom-pagination flex space-x-2" />
        <div className="flex items-center space-x-2">
          <button
            ref={prevRef}
            className=".swiper-button-prev rounded-full border border-[#000000] p-3 hover:bg-[#c8ff00] group transition-all duration-300 hover:border-[#c8ff00] hover:shadow-[0_0_50px_#c8ff0070] hover:text-white dark:hover:text-white dark:border-white dark:bg-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.06147 18.1227L3.00012 12.0613L9.06147 6"
                stroke="black"
                stroke-width="null"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="my-path"
              ></path>
              <path
                d="M21 12.0615H3"
                stroke="black"
                stroke-width="null"
                stroke-linecap="round"
                class="my-path"
              ></path>
            </svg>
          </button>
          <button
            ref={nextRef}
            className=".swiper-button-next rounded-full border border-[#000000] p-3 hover:bg-[#c8ff00] group transition-all duration-300 hover:border-[#c8ff00] hover:shadow-[0_0_50px_#c8ff0070] hover:text-white dark:hover:text-white dark:border-white dark:bg-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9385 6L20.9999 12.0613L14.9385 18.1227"
                stroke="black"
                stroke-width="null"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="my-path"
              ></path>
              <path
                d="M3 12.061L21 12.061"
                stroke="black"
                stroke-width="null"
                stroke-linecap="round"
                class="my-path"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
