/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./homepage/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="xl:max-w-[1440px] xl:px-10 px-4 pt-10 mx-auto lg:pb-[110px] pb-[60px]">
      <Navbar />
      <div className="sm:h-[calc(100vh-181px)] bg-hero bg-cover sm:max-h-[600px] mt-10 bg-right rounded-[40px] sm:pt-[135px] pt-[98px] pb-[98px] overflow-hidden relative">
        <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-4 relative z-10">
          <h1 className="font-black md:text-5xl text-4xl text-black max-w-[560px] leading-[120%] md:text-start text-center md:ms-0 mx-auto">
            Optimizing Animal{" "}
            <span className="text-orange">Health & Performance</span>{" "}
            Sustainable Solutions
          </h1>
          <p className="max-w-[560px] text-black opacity-80 md:text-start text-center font-normal text-base pt-2.5 md:ms-0 mx-auto">
            At <span className="font-medium">SHIVISION</span>, we&apos;re
            committed to enhancing global animal health sustainably. We
            prioritize innovation and ethical practices, offering effective,
            eco-friendly products and services. Join us to improve your
            animals&apos; well-being and contribute to a healthier planet."
          </p>
          <div className="flex gap-4 pt-7 md:justify-start justify-center">
            <button className="py-4 px-6 rounded-lg bg-orange font-black text-base text-white duration-500 border border-orange hover:text-orange hover:shadow-[0px_150px_0px_-67px_rgba(255,255,255,1)_inset]">
              Explore More
            </button>
            <button className="py-4 px-6 rounded-lg text-opacity-80 bg-white font-black text-base text-orange duration-500 border border-orange hover:text-white hover:shadow-[0px_150px_0px_-67px_rgba(245,130,32,1)_inset]">
              Learn More
            </button>
          </div>
        </div>
        <Image
          width={1380}
          height={600}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-0 h-full object-cover"
          src="/assets/images/hero/white_layer.png"
          alt="layer"
        />
      </div>
    </div>
  );
};

export default Header;
