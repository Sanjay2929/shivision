import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook } from "../Icons";
import { footerLinks, socialLinks } from "../Helper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-[-124px] shadow-footerTop">
      <div className="xl:max-w-[1140px] container mx-auto xl:px-0 px-4 flex md:pt-[212px] pt-40 justify-between md:flex-row flex-col">
        <div className=" pb-[31px] lg:max-w-[450px] max-w-[350px]">
          <Link href="/" className="inline-block">
            <Image
              width={187}
              height={100}
              src="/assets/images/hero/shivision-logo.png"
              alt="logo"
            />
          </Link>
          <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 pt-4 pb-10">
          Shivision pioneers innovative solutions for animal welfare, blending excellence with sustainability. Join us in shaping a healthier future for all creatures.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((value, index) => {
              return (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="w-[32px] h-[32px] flex justify-center items-center bg-orange rounded hover:scale-110 duration-300"
                  href={value.url}
                >
                  {value.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex lg:gap-[105px] sm:gap-14 justify-between">
          {footerLinks.map((value, index) => {
            return (
              <div key={index}>
                <h3 className="font-medium text-xl text-black pb-2.5">
                  {value.heading}
                </h3>
                <ul className="flex flex-col gap-3 ">
                  {value.link.map((sublink, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className="text-sm sm:text-base text-gray font-normal hover:text-orange duration-300"
                          href={sublink.url}
                        >
                          {sublink.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-4 text-sm sm:text-base border-t border-lightgray border-opacity-80 text-opacity-80 border-opacity-80 text-center md:mt-0 mt-6">
        ©{currentYear} All Rights Reserved | Shivision
      </p>
    </div>
  );
};

export default Footer;
