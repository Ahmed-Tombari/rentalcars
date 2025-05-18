"use client";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Wcard from "./Wcard";

const WmenuCard = () => {
  const [Wdata, setWdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/Api/WcardData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setWdata(data);
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
    <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 max-w-xl mx-auto lg:max-w-none">
      {Wdata.map((item) => (
        <Wcard key={item.id} Wcard={item} />
      ))}
    </div>
  );
};

export default WmenuCard;
