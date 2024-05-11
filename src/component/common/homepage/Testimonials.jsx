import React from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { testimonialsList } from "../Helper";

const Testimonials = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        // effect="fade"
        loop={true}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {testimonialsList.map((obj, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="bg-white border border-darkGray rounded-2xl p-6">
                <span>{obj.stars}</span>
                <p className="text-dark text-opacity-70 my-3 font-normal !leading-6 text-sm sm:text-base">{obj.description}</p>
                <h3 className="text-black font-bold text-base sm:text-lg">{obj.userName}</h3>
                <p className="text-black text-opacity-70 !leading-6 text-sm sm:text-base">{obj.subName}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
