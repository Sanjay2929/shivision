"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Thumbs, Autoplay, Pagination } from "swiper/modules";
import { galleryThumbsList, gallerySetThumbsList } from "../Helper";
import Image from "next/image";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="max-w-[1140px] mx-auto px-4 xl:px-0 my-16 sm:my-20 md:my-[100px] xl:my-40 gallery_slider">
      <h2 className="text-center text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold xl:!leading-[40px] mb-6 sm:mb-10 lg:mb-20">
        Gallery
      </h2>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay]}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {galleryThumbsList.map((obj, index) => {
          return (
            <SwiperSlide key={index} className=" ps-0 p-3">
              <Image
                className="w-full shadow-gallerySmShadow sm:shadow-galleryShadow rounded-2xl sm:rounded-3xl"
                width={1140}
                height={558}
                src={obj.img}
                alt="gallery images"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Autoplay, Pagination]}
        loop={true}
        pagination={true}
        allowTouchMove={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
        className="gallery_set_thumb mt-3 sm:mt-5 !pb-10 sm:!pb-14"
      >
        {gallerySetThumbsList.map((obj, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className="w-full border border-orange rounded-lg sm:rounded-2xl md:rounded-3xl"
                width={270}
                height={222}
                src={obj.img}
                alt="gallery images"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Gallery;
