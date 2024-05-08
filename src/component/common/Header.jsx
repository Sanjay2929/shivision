import React from "react";
import Navbar from "./homepage/Navbar";

const Header = () => {
  return (
    <div className="xl:max-w-[1440px] xl:px-10 px-4 pt-10 mx-auto">
      <Navbar />
      <div className="min-h-[calc()]"></div>
    </div>
  );
};

export default Header;
