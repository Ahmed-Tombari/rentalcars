"use client";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import CarCard from "./CarCard";

const VmenuCard = () => {
  const [vdata, setvdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:3000/Api/VcardData")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données");
          }
          return response.json();
        })
        .then((data) => {
          setvdata(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full place-items-center">
      {/* Repeat CarCard as needed or map over data */}
      
      {vdata.map((item) => (
        <CarCard  key={item.id} Vdata={item} />
      ))}
    </div>
  );
};

export default VmenuCard;