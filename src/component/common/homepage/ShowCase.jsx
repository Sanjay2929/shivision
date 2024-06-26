import Image from "next/image";
import React from "react";
import { showCaseProduct } from "../Helper";
import Link from "next/link";

const ShowCase = () => {
  return (
    <div id="products" className="max-w-[905px] px-4 xl:px-0 mx-auto ">
      <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold leading_[120%] max-w-[605px] mx-auto text-center">
        Showcase our Products
      </h2>
      <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] mb-6 sm:mb-7 md:mb-10 lg:mb-20 xl:!leading-6 mx-auto text-center max-w-[628px] lg:max-w-[510px] px-4">
        Discover our curated collection of top-quality products, meticulously
        designed to meet your needs.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-10 sm:gap-6 gap-3 max-[500px]:grid-cols-1 md:gap-y-10 gap-y-8">
        {showCaseProduct.map((content, index) => {
          return (
            <div
              className="sm:mx-0 mx-auto group max-[500px]:flex flex-col items-start max-[500px]:items-center"
              key={index}
            >
              <div className="border border-[#CCCCCC] bg-white transition-all duration-300 ease-in-out group-hover:shadow-lg overflow-hidden group-hover:shadow-[rgba(245,130,32,1)] rounded-2xl mb-3">
                <Image
                  width={267}
                  height={244}
                  src={content.img}
                  alt="product"
                  className=" w-full"
                />
              </div>
              <p className=" font-bold text-base text-orange mb-4">
                {content.description}
              </p>
              <Link
                href="https://wa.me/+917218000880"
                className="py-1.5 px-3.5 border border-orange text-sm rounded-md opacity-70 hover:opacity-100 duration-500 hover:text-white hover:shadow-btnHover text-orange"
              >
                Buy Now
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-10">
        <button
          className="py-3 sm:py-4 px-5 sm:px-6 border font-black  border-orange rounded-lg duration-500 hover:text-white hover:shadow-btnHover text-orange 
text-sm sm:text-base"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ShowCase;
