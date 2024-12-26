import React from "react";
import Container from "@/shared/Container/Container";

const categories = [
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
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
          <div className="grid grid-cols-2 gap-2 md:grid-cols-8">
            {categories.map((category, index) => (
              <p
                key={index}
                className="flex items-center justify-center text-xs gap-1 px-1 py-2 rounded-full bg-bgBlue cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white"
              >
                {category}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary hover:text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
