"use client";

import React from "react";
import SectionHeader from "@/shared/SectionHeader/SectionHeader";
import telcard1 from "@/assets/images/img.png";
import DealCard from "@/shared/DealCard/DealCard";
// import DealCard from "./DealCard";

// Best deals data
const bestDeals = [
  {
    id: 1,
    title: "Galaxy S22 Ultra",
    price: 32999,
    originalPrice: 74999,
    discount: 15,
    img: telcard1,
  },
  {
    id: 2,
    title: "iPhone 13 Pro",
    price: 99999,
    originalPrice: 119999,
    discount: 10,
    img: telcard1,
  },
  {
    id: 3,
    title: "OnePlus 9",
    price: 49999,
    originalPrice: 64999,
    discount: 5,
    img: telcard1,
  },
  {
    id: 4,
    title: "Galaxy S22 Ultra",
    price: 32999,
    originalPrice: 74999,
    discount: 20,
    img: telcard1,
  },
  {
    id: 5,
    title: "iPhone 13 Pro",
    price: 99999,
    originalPrice: 119999,
    discount: 15,
    img: telcard1,
  },
];

export default function BestDeals() {
  return (
    <section className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10">
      <SectionHeader subtitle="Grab the best deal on" title="Smartphones" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 py-10">
        {bestDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
