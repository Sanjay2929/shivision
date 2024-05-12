/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Navbar from "./homepage/Navbar";
import Image from "next/image";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { heroCards } from "./Helper";
import "swiper/css/effect-fade";

const Header = () => {
  return (
    <div className="xl:max-w-[1440px] xl:px-10 px-4 sm:pt-10  pt-6 mx-auto hero relative z-50">
      <Navbar />
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {heroCards.map((value, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className={`swiper-slide-content sm:h-[calc(100vh-181px)] bg-cover sm:max-h-[600px] h-[600px] sm:mt-10 mt-6 bg-[80%] lg:rounded-[40px] rounded-2xl sm:pt-[135px] pt-0 pb-0 overflow-hidden flex items-center relative  ${value.bgImage}`}
              >
                <div className="xl:max-w-[1140px] container mx-auto xl:px-0 px-4 relative z-10">
                  <h1 className="font-black md:text-5xl text-[32px] text-black max-w-[560px] leading-[120%] md:text-start text-center md:ms-0 mx-auto">
                    {value.heading}
                  </h1>
                  <p className="max-w-[560px] text-black md:opacity-80 opacity-100 md:text-start text-center font-normal text-sm sm:text-base pt-2.5 md:ms-0 mx-auto">
                    {value.description}
                  </p>
                  <div className="flex gap-4 pt-7 md:justify-start justify-center">
                    <button className="py-3 sm:py-4 px-5 sm:px-6 rounded-lg bg-orange font-black text-sm sm:text-base text-white duration-500 border border-orange hover:text-orange hover:shadow-[0px_150px_0px_-67px_rgba(255,255,255,1)_inset]">
                      Explore More
                    </button>
                    <button className="py-3 sm:py-4 px-5 sm:px-6 rounded-lg text-opacity-80 bg-white font-black text-sm sm:text-base text-orange duration-500 border border-orange hover:text-white hover:shadow-[0px_150px_0px_-67px_rgba(245,130,32,1)_inset]">
                      Learn More
                    </button>
                  </div>
                </div>
                <Image
                  width={1380}
                  height={600}
                  className="absolute top-1/2 object-left opacity-45 md:opacity-100 -translate-y-1/2 left-0 z-0 h-full object-cover"
                  src="/assets/images/hero/white_layer.webp"
                  alt="layer"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Header;
