"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../Helper";
import { Cross, Menu } from "../Icons";

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const scrollOverflowHandler = () => {
    document.body.classList.toggle("overflow-hidden");
  };
  const scrollRemoveHandler = () => {
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <div className="shadow-[0px_4px_20.4px_0px_#0000001F] border-b border-orange py-3 rounded-2xl bg-white">
      <div className="xl:max-w-[1140px] container mx-auto xl:px-0 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            width={143}
            height={76}
            className="md:w-[143px] w-[100px]"
            src="/assets/images/hero/shivision-logo.png"
            alt="shivision"
          />
        </Link>
        <div
          className={`flex items-center gap-10 lg:flex-row z-50 duration-300 flex-col lg:static fixed top-0 lg:bg-transparent bg-white lg:min-h-0 min-h-screen lg:w-auto w-full justify-center ${
            navShow ? "left-0" : "-left-full"
          }`}
        >
          <div className="flex gap-7 items-center lg:flex-row flex-col ">
            {navLinks.map((value, index) => {
              return (
                <Link
                  onClick={() => {
                    setNavShow(false);
                    scrollRemoveHandler();
                  }}
                  key={index}
                  href={value.url}
                  className="hover:text-orange duration-300 font-normal text-sm sm:text-base text-gray"
                >
                  {value.title}
                </Link>
              );
            })}
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+917218000880"
            onClick={() => {
              setNavShow(false);
              scrollRemoveHandler();
            }}
            className="py-4 px-6 rounded-lg bg-orange font-black text-sm sm:text-base text-white duration-500 border border-orange hover:text-orange hover:shadow-[0px_150px_0px_-67px_rgba(255,255,255,1)_inset]"
          >
            Call Us Now
          </Link>
        </div>
        <span
          className="relative z-[101] lg:hidden cursor-pointer"
          onClick={() => {
            setNavShow(!navShow);
            scrollOverflowHandler();
          }}
        >
          {navShow ? <Cross /> : <Menu />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
