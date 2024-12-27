"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "@/shared/SectionHeader/SectionHeader";
import DealCard from "@/shared/DealCard/DealCard";

export default function BestDeals() {
  const [bestDeals, setBestDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestDeals = async () => {
      try {
        const response = await fetch("http://localhost:5000/bestDeals");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBestDeals(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBestDeals();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <section className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10">
      <SectionHeader subtitle="Grab the best deal on" title="Smartphones" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5 my-10 mx-auto">
        {bestDeals.map((deal) => (
          <DealCard key={deal._id} deal={deal} />
        ))}
      </div>
    </section>
  );
}