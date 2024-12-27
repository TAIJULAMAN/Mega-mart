"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import SectionHeader from "@/shared/SectionHeader/SectionHeader";
import "../../app/globals.css";

// Import images
import img1 from "@/assets/images/Group50.png";
import img2 from "@/assets/images/Group51.png";
import img3 from "@/assets/images/Group52.png";

export default function ElectronicBrands() {
  const slides = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img1 },
    { id: 5, img: img2 },
    { id: 6, img: img3 },
  ];

  return (
    <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-20 xl:px-28 overflow-x-hidden py-10 rounded-xl">
      <SectionHeader subtitle="Top" title="Electronics Brands" />
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // Enables dynamic bullets for better UX
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-10"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="">
            <Image
              src={slide.img}
              alt={`Electronic Brand ${slide.id}`}
              width={500}
              height={300}
              className="rounded-lg object-contain"
            />
          </SwiperSlide>
        ))}
        {/* Pagination element */}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
}