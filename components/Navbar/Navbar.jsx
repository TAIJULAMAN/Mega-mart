"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/shared/Container/Container";

// import icons
import logo from "@/assets/icons/logo.svg";
import search from "@/assets/icons/search.svg";
import list from "@/assets/icons/list.svg";
import user from "@/assets/icons/user.svg";
import cart from "@/assets/icons/cart.svg";

export default function Navbar() {
  return (
    <div className="py-3 text-sm text-text text-nowrap border-b-[1px] border-border overflow-x-hidden">
      <Container>
        <div className="flex items-center justify-between flex-wrap w-full">
          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <div className="bg-bgBlue rounded-md p-1">
              <Image alt="logo" src={logo} width={20} height={20} />
            </div>
            <Link
              href="/"
              className="text-base md:text-xl lg:text-2xl font-bold text-primary"
            >
              MegaMart
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="hidden lg:flex flex-grow">
            <div className="mx-auto relative w-full max-w-2xl">
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
          <div className="flex items-center gap-1 md:gap-3">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
