"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsList } from "../Helper";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={3}
        className="gap-4 flex min-h-full"
      >
        {testimonialsList.map((obj, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide mx-3 my-4 min-h-full">
              <div className="bg-white border border-darkGray rounded-2xl p-6 sm:shadow-testimonialsRightImageShadow shadow-testimonialsSmRightImageShadow min-h-full">
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
    </>
  );
};

export default Testimonials;
