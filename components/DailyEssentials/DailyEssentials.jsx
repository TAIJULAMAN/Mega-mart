"use client"
import React from "react";
import Image from "next/image";
import dailyImg from "@/assets/images/img.png";
import SectionHeader from "@/shared/SectionHeader/SectionHeader";

const dailyEssentials = [
  { id: 1, name: "Daily Essentials", discount: "Up to 50% OFF", img: dailyImg },
  { id: 2, name: "Grocery", discount: "Up to 50% OFF", img: dailyImg },
  { id: 3, name: "Beauty", discount: "Up to 50% OFF", img: dailyImg },
  { id: 4, name: "Fashion", discount: "Up to 50% OFF", img: dailyImg },
  { id: 5, name: "Home", discount: "Up to 50% OFF", img: dailyImg },
  { id: 6, name: "Appliances", discount: "Up to 50% OFF", img: dailyImg },
];

export default function DailyEssentials() {
  return (
    <section className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden pb-20">
      <SectionHeader subtitle="Daily" title="Essentials" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-10">
        {dailyEssentials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-5 cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center justify-center p-5 border border-bg  rounded-md bg-bg hover:border-primary hover:shadow-lg transition-all duration-200">
              <Image
                src={item.img}
                alt={item.name}
                className="w-28 h-28 object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-text text-base mb-2 leading-5">{item.name}</p>
              <h3 className="text-text text-xl font-bold leading-5">
                {item.discount}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
