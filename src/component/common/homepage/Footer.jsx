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
            Lorem ipsum dolor sit amet consectetur. Egestas mollis nisl aliquet
            dignissim eu aliquam sit. Praesent nulla massa habitasse lectus eu
            arcu lorem. Senectus aliquam.
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
        <div className="flex lg:gap-[105px] sm:gap-14 gap-8 justify-between sm:flex-nowrap flex-wrap">
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
                          className="text-sm sm:text-base text-gray opacity-80 hover:opacity-100 duration-300 font-normal hover:text-orange duration-300"
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
          <div>
            <h3 className="font-medium text-xl text-black pb-2.5">Links</h3>
            <ul className="flex flex-col gap-3 ">
              <li>
                <Link
                  className="text-sm sm:text-base text-gray font-normal opacity-80 hover:opacity-100 duration-300 hover:text-orange duration-300"
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm sm:text-base text-gray font-normal opacity-80 hover:opacity-100 duration-300 hover:text-orange duration-300"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <h3 className="font-medium text-xl text-black pb-2.5 sm:pt-10 pt-8">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 ">
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray font-normal opacity-80 hover:opacity-100 duration-300 hover:text-orange duration-300"
                  href="https://wa.me/+917218000880"
                >
                  +917218000880
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray font-normal opacity-80 hover:opacity-100 duration-300 hover:text-orange duration-300"
                  href="mailto:shivisionlifesciencepvtltd@gmail.com"
                >
                  shivisionlifesciencepvtltd@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-4 text-sm sm:text-base border-t border-lightgray border-opacity-80 text-opacity-80 text-center md:mt-0 mt-6">
        ©{currentYear} All Rights Reserved | Shivision
      </p>
    </div>
  );
};

export default Footer;
