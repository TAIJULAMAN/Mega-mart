"use client"
import React from "react";
import Image from "next/image";
import Container from "@/shared/Container/Container";
import Link from "next/link";

// import icons
import footerbg from "@/assets/icons/footerbg.svg";
import whatsapp from "@/assets/icons/ab.svg";
import call from "@/assets/icons/Call.svg";

// import photos
import google from "@/assets/images/googlePlay.png";
import app from "@/assets/images/appStore.png";

// import footer data
import { mostPopularCategories, customerServices } from "@/data/FooterItem.js";

export default function Footer() {
  return (
    <div className="relative bg-primary text-white text-nowrap capitalize pt-20 z-50 overflow-hidden">
      {/* footer bg */}
      <Image
        alt="footer bg"
        src={footerbg}
        className="absolute right-0 top-0 -z-10"
      />

      <Container>
        <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {/* main footer section */}
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-bold">MegaMart</h1>

            <div className="space-y-5">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div>
                <div className="flex items-start gap-3">
                  <Image
                    alt="whatsapp logo"
                    src={whatsapp}
                    width={24}
                    height={24}
                  />
                  <div>
                    <h4 className="font-medium">Whats App</h4>
                    <Link href="" className="font-semibold">
                      +1 202-918-2132
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <Image alt="call logo" src={call} width={24} height={24} />

                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <Link href="" className="font-semibold">
                      +1 202-918-2132
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold">Download App</h3>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <Link href="">
                  <Image alt="app logo" src={app} />
                </Link>
                <Link href="">
                  <Image alt="google logo" src={google} />
                </Link>
              </div>
            </div>
          </div>

          {/* Most Popular Categories */}
          <div>
            <h3 className="text-xl font-semibold border-b-[3px] inline-block pb-2">
              Most Popular Categories
            </h3>

            <ul className="list-inside list-disc font-medium mt-5 space-y-2">
              {mostPopularCategories?.map((link, idx) => (
                <li key={idx}>
                  <Link href="">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Customer Services part */}
          <div>
            <h3 className="text-xl font-semibold border-b-[3px] inline-block pb-2">
              Customer Services
            </h3>

            <ul className="list-inside list-disc font-medium mt-5 space-y-2">
              {customerServices?.map((link, idx) => (
                <li key={idx}>
                  <Link href="">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* copy wright part */}
        <p className="text-start md:text-center text-[10px] md:text-[20px] mt-10 py-5 border-t border-[#05ABF3]">
          © 2024 All rights reserved. Reliance Retail Ltd.
        </p>
      </Container>
    </div>
  );
}
