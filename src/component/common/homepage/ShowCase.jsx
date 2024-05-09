import Image from "next/image";
import React from "react";
import { showCaseProduct } from "../Helper";

const ShowCase = () => {
  return (
    <div className="max-w-[1140px] px-4 xl:px-0 mx-auto xl:pb-[200px] xl:pt-[152px] py-[120px]">
      <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold leading_[120%] max-w-[605px] mx-auto text-center">
        Showcase our Products
      </h2>
      <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] mb-6 sm:mb-7 md:mb-10 lg:mb-20 xl:!leading-6 mx-auto text-center max-w-[628px]">
        Lorem ipsum dolor sit amet consectetur. Leo ac libero ullamcorper diam a
        morbi. Quis sit aliquam viverra in donec in tortor. Libero odio
        scelerisque adipiscing
      </p>
      <div className="flex flex-wrap gap-y-6">
        {showCaseProduct.map((content, index) => {
          return (
            <div
              className=" lg:w-3/12 md:w-4/12 sm:w-6/12 w-full sm:px-3 sm:max-w-full max-w-[343px] sm:mx-0 mx-auto"
              key={index}
            >
              <div className=" md:border border-[#CCCCCC] bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[rgba(245,130,32,1)] rounded-2xl md:max-w-[267px] md:max-h-[244px] mb-4">
                <Image
                  width={267}
                  height={244}
                  src={content.img}
                  alt="product"
                  className=" w-full"
                />
              </div>
              <p className=" font-normal text-base text-dark mb-5">
                {content.description}
              </p>
              <div className=" flex items-center justify-between">
                <p className="font-medium text-base text-dark">
                  From ${content.price}
                </p>
                <span className=" px-4 py-1 border border-[#A4A4A4] rounded font-medium text-sm text-black cursor-pointer flex items-center justify-center hover:shadow-[0px_150px_0px_-67px_rgba(245,130,32,1)_inset] hover:text-white hover:border-white transition-all ease-in-out duration-300">
                  View Option
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowCase;
