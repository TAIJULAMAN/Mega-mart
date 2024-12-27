"use client";
import React from "react";
import Image from "next/image";

const DealCard = ({ deal }) => {
  const discountPercentage = deal.discount || 0;
  const originalPrice = deal.originalPrice || 0;
  const discountedPrice = Math.round(
    originalPrice - (originalPrice * discountPercentage) / 100
  );
  const savedPrice = originalPrice - discountedPrice;

  return (
    <div className="relative bg-white rounded-md shadow-lg border border-border hover:border-primary transition-all duration-200 w-[500px] h-[500px]">
      {/* Discount Label */}
      {discountPercentage > 0 && (
        <div className="absolute top-0 right-0 bg-primary rounded-md text-white text-sm px-4 py-4">
          {discountPercentage}% OFF
        </div>
      )}
      {/* Product Image */}
      <div className="flex items-center justify-center bg-bg  px-20 py-5">
        <Image
          height={200}
          width={200}
          src={deal.img}
          alt={deal.title}
          className="object-cover"
        />
      </div>
      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-base">{deal.title}</h3>
        <div className="mt-2 space-y-2">
          <div className="flex gap-3 items-center">
            <p className="text-xs text-text font-semibold">
              ₹{discountedPrice.toFixed(2)}
            </p>
            <p className="text-xs line-through">₹{originalPrice.toFixed(2)}</p>
          </div>
          <div className="border-t border-border my-1.5"></div>
          <p className="text-xs text-green">Save - ₹{savedPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
