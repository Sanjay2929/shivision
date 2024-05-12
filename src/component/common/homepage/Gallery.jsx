import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { galleryThumbsList, gallerySetThumbsList } from "../Helper";
import Image from "next/image";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {galleryThumbsList.map((obj, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className="w-full"
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
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {gallerySetThumbsList.map((obj, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className="w-full"
                width={1140}
                height={558}
                src={obj.img}
                alt="gallery images"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Gallery;
