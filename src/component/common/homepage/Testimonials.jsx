"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsList } from "../Helper";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div id="testimonials" className="xl:max-w-[1140px] mx-auto testimonials my-16 sm:my-20 md:my-[100px] xl:my-40">
      <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold xl:!leading-[40px] text-center">
        Testimonials
      </h2>
      <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] mb-6 md:mb-10 lg:mb-16 xl:!leading-6 text-center lg:max-w-[420px] mx-auto px-4">
      Discover firsthand accounts of our `&apos;` experiences and satisfaction with our services.
      </p>
      <Swiper
        modules={[Pagination, Autoplay]}
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
              <div className="bg-white border border-darkGray rounded-2xl p-6 min-h-[370px] lg:min-h-[346px] xl:min-h-[300px] 2xl:min-h-[370px] sm:hover:shadow-testimonialsRightImageShadow hover:shadow-testimonialsSmRightImageShadow duration-200">
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
