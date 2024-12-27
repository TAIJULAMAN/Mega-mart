"use client"
import React from "react";
import Image from "next/image";
import smartfon from "@/assets/images/img.png";
import SectionHeader from "@/shared/SectionHeader/SectionHeader";

const categories = [
  { id: 1, name: "Mobile", img: smartfon },
  { id: 2, name: "Electronics", img: smartfon },
  { id: 3, name: "Fashion", img: smartfon },
  { id: 4, name: "Home", img: smartfon },
  { id: 5, name: "Appliances", img: smartfon },
  { id: 6, name: "Grocery", img: smartfon },
  { id: 7, name: "Beauty", img: smartfon },
];

export default function TopCategories() {
  return (
    <section className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10">
      <SectionHeader subtitle="Shop From" title="Top Categories" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 mt-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-5 cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center justify-center p-5 border border-bg  rounded-full bg-bg hover:border-primary hover:shadow-lg transition-all duration-200">
              <Image
                src={category.img}
                alt={category.name}
                className="w-20 h-20 object-cover"
              />
            </div>
            <p className="text-text text-center text-lg font-medium leading-5">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
