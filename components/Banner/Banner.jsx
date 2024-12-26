"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "@/assets/images/img.png";
import bg1 from "@/assets/images/ellipse 27.png";
import bg2 from "@/assets/images/ellipse 28.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "SMART WEARABLE",
      description: "Best Deal Online on watches.",
      discount: "Up to 80% OFF",
      img: img,
    },
    {
      id: 2,
      title: "PREMIUM LAPTOPS",
      description: "Grab the best deals on laptops.",
      discount: "Up to 50% OFF",
      img: img,
    },
    {
      id: 3,
      title: "TRENDY PHONES",
      description: "Exclusive offers on smartphones.",
      discount: "Up to 70% OFF",
      img: img,
    },
  ];

  return (
    <div className="max-w-[1700px] mx-auto  px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10  rounded-xl md:h-[400px] h-[300px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative z-20 max-w-[1500px] bg-[#212844] px-5 md:px-32 py-10 rounded-xl"
          >
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-full">
              {/* Text */}
              <div className="text-white w-full md:w-[60%] px-5 text-center md:text-left">
                <p className="text-sm md:text-[30px] font-[400]">
                  {slide.description}
                </p>
                <h2 className="text-xs md:text-4xl font-[700] my-2 md:my-5">
                  {slide.title}
                </h2>
                <p className="text-xs md:text-[30px] font-[400] mb-5 md:mb-0">
                  {slide.discount}
                </p>
              </div>
              {/* Image */}
              <div className="w-full md:w-[40%] flex justify-center items-center">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={270}
                  height={270}
                  className=" rounded-lg object-contain h-[100px] md:h-[270px] w-[150px] md:w-[270px]"
                />
              </div>
            </div>
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev px-8 py-8 absolute left-2 top-1/2 transform -translate-y-1/2 bg-border text-primary rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="#008ECC"
              >
                <path
                  d="M11.25 13.5L6.75 9L11.25 4.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="swiper-button-next px-8 py-8 absolute right-2 top-1/2 transform -translate-y-1/2 bg-border text-primary rounded-full cursor-pointer">
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
            </div>
            {/* watch bg */}
            <Image
              alt="watch bg"
              src={bg1}
              className="hidden md:flex absolute right-0 top-0 -z-10"
            />
            <Image
              alt="watch bg"
              src={bg2}
              className="hidden md:flex absolute right-[300px] bottom-0 -z-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
