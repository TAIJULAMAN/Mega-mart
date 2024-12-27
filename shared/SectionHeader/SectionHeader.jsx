"use client"
import Link from "next/link";
import React from "react";

export default function SectionHeader({ subtitle, title }) {
  return (
    <div className="flex justify-between mt-10 border-b border-border">
      <h1 className="text-text border-b-4 border-primary text-base md:text-[30px] leading-7 pb-2 font-[700]">
        {subtitle} <span className="text-primary">{title}</span>
      </h1>
      <Link
        href="/"
        className="flex justify-center items-center gap-1 font-medium md:text-[16px] leading-4 mb-1 hover:text-primary"
      >
        <span className="text-text">View All</span>
        <svg
          viewBox="0 0 18 18"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10 7L15 12L10 17"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </Link>
    </div>
  );
}
