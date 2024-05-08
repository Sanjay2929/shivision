/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="px-5 xl:px-0 py-8 md:py-16 lg:py-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid md:grid-cols-2 items-center md:justify-between text-center md:text-start justify-center gap-10 lg:gap-20 xl:gap-[115px]">
          <div className="max-w-[550px] md:max-w-none mt-3 sm:mt-6 order-2 md:order-1 md:mt-0">
            <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-dark font-bold xl:!leading-[40px]">
              Join Us Now
            </h2>
            <p className="font-normal text-sm sm:text-base text-dark text-opacity-70 mt-[10px] mb-6 sm:mb-7 md:mb-10 xl:!leading-6">
              Ready to embark on a journey towards better animal health and
              well-being? Join us now at Shivision and become part of a
              community dedicated to advancing the care of our furry friends.
              Whether you're a pet owner, veterinarian, or animal enthusiast,
              there's a place for you in our mission to make a positive impact
              on the lives of animals worldwide. Together, let's create a
              brighter future for our beloved companions. Join us now and let's
              make a difference, one paw at a time.
            </p>
            <a
              href="#"
              className="text-sm sm:text-base border border-orange text-orange text-opacity-80 py-3 px-5 sm:py-4 sm:px-6 rounded-lg font-black !leading-5 hover:bg-orange hover:text-white duration-300 hover:scale-95 inline-block"
            >
              Contact Now
            </a>
          </div>
          <div className="pe-4 sm:pe-5 order-1 md:order-2" >
            <Image
              className="max-w-[400px] md:max-w-[558px] w-full shadow-aboutSmRightImageShadow sm:shadow-aboutRightImageShadow rounded-[33px] mx-auto md:ms-0"
              width={558}
              height={600}
              src="/assets/images/png/about/join-us-img.png"
              alt="join-us-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
