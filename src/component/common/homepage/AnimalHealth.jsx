"use client";
import React, { useEffect, useState } from "react";
import { animals } from "../Helper";
import Image from "next/image";
import { Cross } from "../Icons";
import Link from "next/link";

const AnimalHealth = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = (animal) => {
    setSelectedAnimal(animal);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedAnimal(null);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  return (
    <>
      <div className="xl:max-w-[1140px] container px-4 xl:px-0 mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold !leading-[120%] max-w-[605px] mx-auto text-center">
          Changing Animal Health New Ways for Best Care
        </h2>
        <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] xl:!leading-6 max-w-[628px] mx-auto text-center">
          Elevate your animals&apos; well-being with Shivision. Our innovative
          solutions prioritize their health and happiness. Trust us for
          tailored, research-backed care.
        </p>
        <div className="lg:pt-20 sm:pt-14 pt-6 grid md:grid-cols-3 grid-cols-2 max-[450px]:grid-cols-1 gap-6 lg:gap-x-5 lg:gap-y-[44px]">
          {animals.map((value, index) => (
            <div
              key={index}
              className="shadow-md border border-darkGray rounded-2xl overflow-hidden group hover:shadow-darkCards duration-300"
            >
              <div className="p-3.5">
                <Image
                  className="w-full shadow-animalcards group-hover:scale-110 duration-300"
                  width={339}
                  height={262}
                  src={value.image}
                  alt={value.title}
                />
              </div>
              <button
                onClick={() => handleOpenPopup(value)}
                className="w-full text-center py-4 lg:py-6 bg-orange text-white font-bold lg:text-2xl sm:text-xl text-lg border-t border-orange hover:text-orange duration-500 hover:shadow-[0px_150px_0px_-67px_rgba(255,255,255,1)_inset] mb-[-1px]"
              >
                {value.title}
              </button>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && selectedAnimal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-lg p-6 sm:p-12 relative max-w-[500px] max-h-[450px] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 sm:top-5 end-3 sm:end-5 text-black popup_cross"
              onClick={handleClosePopup}
            >
              <Cross />
            </button>
            <div
              className={`flex min-w-[250px] overflow-x-auto animal_health items-center gap-5 ${
                selectedAnimal.title === "Cattle & Buffalo" ? "pb-5" : ""
              }`}
            >
              {selectedAnimal.popupContent.map((obj, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center w-full"
                >
                  <div className="min-w-[270px] h-full">
                    {obj.img && (
                      <Image
                        src={obj.img}
                        alt={obj.description}
                        width={200}
                        height={200}
                        className="max-w-[300px] w-full min-h-[225px] border border-[#CCCCCC] rounded-2xl"
                      />
                    )}
                    <p
                      className={`font-bold text-base text-orange mb-5 mt-4 ${
                        obj.title === "Coming Soon"
                          ? "text-center text-6xl sm:text-7xl md:text-8xl !leading-[130%]"
                          : ""
                      }`}
                    >
                      {obj.description || obj.title}
                    </p>
                    {!obj.title && (
                      <Link
                        href="https://wa.me/+917218000880"
                        className="py-1.5 px-3.5 border border-orange text-sm rounded-md opacity-70 hover:opacity-100 duration-500 hover:text-white hover:shadow-btnHover text-orange"
                      >
                        Buy Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimalHealth;
