import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook } from "../Icons";

const Footer = () => {
  return (
    <div className="xl:max-w-[1140px] container mx-auto xl:px-0 px-4 flex pt-[212px] ">
      <div className="">
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
          <Link className="w-[32px] h-[32px] flex justify-center items-center bg-orange rounded" href="/">
            <Facebook />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
