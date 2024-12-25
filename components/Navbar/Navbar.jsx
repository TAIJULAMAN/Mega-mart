"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// import icons
import logo from "@/assets/icons/logo.svg";
import search from "@/assets/icons/search.svg";
import list from "@/assets/icons/list.svg";
import user from "@/assets/icons/user.svg";
import cart from "@/assets/icons/cart.svg";
import Container from "@/shared/Container/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="py-3 text-sm text-text text-nowrap border-b-[1px] border-border">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <div className="bg-bgBlue rounded-md p-1">
              <Image alt="logo" src={logo} width={20} height={20} />
            </div>
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-primary"
            >
              MegaMart
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="hidden lg:flex">
            <div className="mx-auto relative w-[507px]">
              <Image
                alt="search"
                src={search}
                width={18}
                height={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                className="bg-bgBlue pl-10 pr-20 py-2 w-full rounded-md text-text placeholder:text-text focus:outline-none"
                placeholder="Search essentials, groceries and more..."
              />
              <Image
                alt="list"
                src={list}
                width={24}
                height={24}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>

          {/* Navbar End */}
          <div className="flex items-center gap-3">
            {/* User Login */}
            <div className="flex items-center gap-2">
              <Image alt="user" src={user} width={18} height={18} />
              <h2 className="hidden sm:block text-sm lg:text-base font-medium">
                Sign Up/Sign In
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-[1px] bg-border"></div>

            {/* Cart */}
            <div className="flex items-center gap-2">
              <Image alt="cart" src={cart} width={18} height={18} />
              <h2 className="hidden sm:block text-sm lg:text-base font-medium">
                Cart
              </h2>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="relative lg:hidden">
              <button className="p-2" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              {menuOpen && (
                <ul className="absolute right-0 bg-white rounded-lg shadow-lg z-10 mt-3 w-52 p-2">
                  <li className="p-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Item 1</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Parent</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded-md">
                    <a href="#">Item 3</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
