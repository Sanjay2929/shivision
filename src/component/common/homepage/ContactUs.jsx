import Link from "next/link";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="max-w-[1140px] lg:px-10 px-4 mx-auto relative z-10"
    >
      <div className="bg-contact sm:py-[100px] py-[70px] rounded-2xl flex flex-col items-center bg-cover bg-center px-4">
        <h2 className="text-3xl md:text-4xl xl:text-custom-4xl text-white font-bold leading_[120%] text-center">
          Connect with us now
        </h2>
        <p className="font-normal text-sm sm:text-base text-white text-opacity-70 mt-[10px] mb-6 sm:mb-7 md:mb-10 xl:!leading-6 max-w-[631px] mx-auto text-center">
          Connect with us at Shivision to stay updated on the latest news, tips,
          and trends in animal health and well-being. Whether you have
          questions, feedback, or simply want to share your love for animals,
          we&apos;re here to listen and engage with you.
        </p>
        <Link
          href="https://wa.me/+917218000880"
          className="py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base rounded-lg bg-white font-medium text-black duration-500 border border-white hover:text-white hover:shadow-[0px_150px_0px_-67px_rgba(245,130,32,1)_inset]"
        >
          Book A Call Now
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
