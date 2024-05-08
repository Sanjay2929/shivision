import React from "react";
import { animals } from "../Helper";
import Image from "next/image";

const AnimalHealth = () => {
  return (
    <div className="py-[73px]">
      <div className="max-w-[1140px] px-4 xl:px-0 mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold leading_[120%] max-w-[605px] mx-auto text-center">
          Changing Animal Health New Ways for Best Care
        </h2>
        <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] mb-6 sm:mb-7 md:mb-10 xl:!leading-6 max-w-[628px] mx-auto text-center">
          Elevate your animals&apos; well-being with Shivision. Our innovative
          solutions prioritize their health and happiness. Trust us for
          tailored, research-backed care.&quot;
        </p>
        <div className="lg:pt-20 sm:pt-14 pt-6 grid md:grid-cols-3 grid-cols-2 max-[450px]:grid-cols-1 gap-x-5 gap-y-[44px]">
          {animals.map((value, index) => {
            return (
              <div
                key={index}
                className="shadow-md border border-darkGray rounded-2xl overflow-hidden"
              >
                <div className="p-3.5">
                  <Image
                    className="w-full shadow-animalcards shadow-animalcards"
                    width={339}
                    height={262}
                    src={value.image}
                    alt={value.title}
                  />
                </div>
                <button className="w-full text-center py-6 bg-orange text-white font-bold lg:text-2xl sm:text-xl text-lg border-t border-orange hover:text-orange duration-500 hover:shadow-[0px_150px_0px_-67px_rgba(255,255,255,1)_inset]">
                  {" "}
                  {value.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimalHealth;