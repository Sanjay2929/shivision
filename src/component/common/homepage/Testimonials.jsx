"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsList } from "../Helper";
import { Pagination,Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="xl:max-w-[1140px] mx-auto testimonials">
      <Swiper
        modules={[Pagination,Autoplay]}
        loop={true}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1.2}
        spaceBetween={15}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1400: {
            spaceBetween: 24,
            slidesPerView: 2.2,
          },
          1600: {
            slidesPerView: 3.2,
            spaceBetween: 32,
          },
        }}
        className="gap-4 flex min-h-full"
      >
        {testimonialsList.map((obj, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide my-4 min-h-full">
              <div className="bg-white border border-darkGray rounded-2xl p-6 min-h-[370px] lg:min-h-[346px] xl:min-h-[300px] 2xl:min-h-[325px] sm:hover:shadow-testimonialsRightImageShadow hover:shadow-testimonialsSmRightImageShadow duration-200">
                <span>{obj.stars}</span>
                <p className="text-dark text-opacity-70 my-3 font-normal !leading-6 text-sm sm:text-base">
                  {obj.description}
                </p>
                <h3 className="text-black font-bold text-base sm:text-lg">
                  {obj.userName}
                </h3>
                <p className="text-black text-opacity-70 !leading-6 text-sm sm:text-base">
                  {obj.subName}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
