"use client";
import React, { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icons";
const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <div
          className={` transition-all duration-300 z-50 fixed right-5 bottom-5 sm:bottom-16 lg:bottom-20 sm:right-4 custom-2xl:bottom-5 cursor-pointer`}
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        >
          <div
            className={`group border outline-none flex items-center bg-primary border-white justify-center hover:bg-transparent group sm:w-12 sm:h-12 w-10 h-10 transition-all duration-300 rounded-full hover:shadow-backToTopShadow hover:shadow-primary `}
          >
            <BackToTopIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
};
export default BackToTop;
