/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <div className="px-4 xl:px-0 relative z-10 my-16 sm:my-20 md:my-[100px] xl:my-40">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid md:grid-cols-2 items-center md:justify-between text-center md:text-start justify-center gap-10 lg:gap-20 xl:gap-[115px]">
          <div className="ps-4 sm:ps-5">
            <Image
              className="max-w-[400px] md:max-w-[558px] w-full hover:shadow-aboutSmLeftImageShadow lg:hover:shadow-aboutLeftImageShadow duration-300 rounded-[33px] mx-auto md:ms-0"
              width={558}
              height={600}
              src="/assets/images/png/about/about-img.png"
              alt="about-img"
            />
          </div>
          <div className="max-w-[550px] md:max-w-none mt-3 sm:mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold xl:!leading-[40px]">
              About SHIVISION
            </h2>
            <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] mb-6 sm:mb-7 md:mb-10 xl:!leading-6">
              "At Shivision, we're passionate about advancing animal health and
              well-being through innovative solutions. With a commitment to
              excellence and sustainability, we strive to provide tailored care
              for every animal we serve. Our team combines expertise with
              compassion to deliver research-backed products and services that
              prioritize the health and happiness of your animals. Partner with
              Shivision and join us in shaping a healthier future for all."
            </p>
            <button className="py-3 sm:py-4 px-5 sm:px-6 border font-black  border-orange rounded-lg duration-500 hover:text-white hover:shadow-btnHover text-orange 
text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
