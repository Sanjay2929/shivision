import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook } from "../Icons";
import { footerLinks, socialLinks } from "../Helper";

const Footer = () => {
  return (
    <div className="xl:max-w-[1140px] container mx-auto xl:px-0 px-4 flex pt-[212px] justify-between md:flex-row flex-col">
      <div className=" pb-[31px] lg:max-w-[450px] max-w-[350px]">
        <Link href="/">
          <Image
            width={187}
            height={100}
            src="/assets/images/hero/shivision-logo.png"
            alt="logo"
          />
        </Link>
        <p className="font-normal text-base text-dark pt-4 pb-10">
          Lorem ipsum dolor sit amet consectetur. Egestas mollis nisl aliquet
          dignissim eu aliquam sit. Praesent nulla massa habitasse lectus eu
          arcu lorem. Senectus aliquam.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((value, index) => {
            return (
              <Link
                key={index}
                className="w-[32px] h-[32px] flex justify-center items-center bg-orange rounded"
                href={value.url}
              >
                {value.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex lg:gap-[105px] gap-14 justify-between">
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
                        className="text-base text-gray font-normal hover:text-orange duration-300"
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
  );
};

export default Footer;
