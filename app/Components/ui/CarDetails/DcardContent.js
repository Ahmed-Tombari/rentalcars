"use client";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Dcard from "./Dcard";
import { useParams } from "next/navigation";

const DcardContent = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const { id } = useParams(); // Get dynamic route ID

  const [Ddata, setDdata] = useState(null); // Single item, not array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/Api/DcardData`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        // If data is an array, find by id
        const car = data.find((item) => item.id.toString() === id.toString());
        if (car) {
          setDdata(car);
        } else {
          setError("Car not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Make sure to include id in dependency array

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

  console.log(" Ddata =======> " + Ddata);
  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 max-w-xl mx-auto lg:max-w-none">
      <Dcard key={Ddata.id} Ddata={Ddata} />
    </div>
  );
};

export default DcardContent;
