"use client"
import React from "react";
import Container from "@/shared/Container/Container";

const categories = [
  "Groceries",
  "Premium Fruits",
  "Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home",
  "Sports",
];

export default function Categories() {
  return (
    <section className="w-full py-4 border-b border-border">
      <Container>
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <p
                key={index}
                className="flex items-center justify-center gap-2 p-2.5 rounded-full bg-bgBlue cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white"
              >
                {category}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                    className="hover:stroke-current hover:text-white"
                  />
                </svg>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}