"use client"
import React from "react";

export default function Container({ children }) {
  return (
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden">
      {children}
    </div>
  );
}
