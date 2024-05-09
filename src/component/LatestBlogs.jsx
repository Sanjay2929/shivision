/* eslint-disable @next/next/no-img-element */
import React from "react";
import { blogs } from "./common/Helper";

const LatestBlogs = () => {
  return (
    <div className="py-48">
      <div className="max-w-[1210px] px-4 xl:px-0 mx-auto">
        <h2 className="text-center text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold leading_[120%]">
          Latest Blogs
        </h2>
        <div className="pt-10 flex xl:justify-between justify-center xl:gap-0 gap-8 xl:flex-nowrap flex-wrap">
          {blogs.map((value, index) => (
            <div
              key={index}
              className="p-4 border w-[385px] border-silversand rounded-2xl hover:shadow-blogcards transition-all duration-300 ease-in-out"
            >
              <img
                src={value.img}
                alt="blogs img"
                className="w-[332px] h-[223px] rounded-xl object-cover"
              />
              <div className="pt-4 flex items-center">
                <button className="bg-orange text-white rounded px-3 py-[6px] font-medium text-sm leading-[150%]">
                  {value.viewbutton}
                </button>
                <div className="h-[33px] w-[1px] bg-black_linear_line ms-4"></div>
                <p className="ps-3 text-black font-medium text-sm laeding-[150%] mb-0">
                  {value.date}
                </p>
              </div>
              <p className="pt-[14px] font-bold text-lg ">{value.heading}</p>
              <p className="pt-2 font-normal text-fuscousgray text-sm leading-[150%]">
                {value.description}{" "}
                <span className="font-medium text-orange">
                  {value.readmore}
                </span>
              </p>
              <div className="mt-3 bg-linear_blog_bottom h-[1px] w-full"></div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  <img
                    src={value.profile}
                    alt="profile image"
                    className="w-[40px] h-[40px] rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-base leading-[150%] text-gray">
                      {value.profilename}
                    </p>
                    <p className="font-normal text-sm leading-[150%] text-darkblack">
                      {value.profiledescription}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <a href={value.facebooklink}>{value.facebookicon}</a>
                  <a href={value.linkedinlink}>{value.linkedinicon}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="border border-orange rounded-lg hover:border-transparent hover:bg-orange hover:text-white transition-all duration-300 ease-in-out text-orange px-6 py-4">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
