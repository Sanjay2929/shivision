import LatestBlogs from "@/component/LatestBlogs";
import Header from "@/component/common/Header";
import About from "@/component/common/homepage/About";
import AnimalHealth from "@/component/common/homepage/AnimalHealth";
import ContactUs from "@/component/common/homepage/ContactUs";
import Footer from "@/component/common/homepage/Footer";
import JoinUs from "@/component/common/homepage/JoinUs";
import ShowCase from "../component/common/homepage/ShowCase";
import Image from "next/image";
import Testimonials from "@/component/common/homepage/Testimonials";
import Gallery from "@/component/common/homepage/Gallery";
import BackToTop from "@/component/common/BackToTop";
// import Preloader from "@/component/common/Preloader";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* <Preloader/> */}
        <BackToTop/>
        <Header />
        <About />
        <Image
          className="absolute top-0 right-0 xl:w-[439px] lg:w-[400px] sm:w-[340px] w-[50%] h-full pointer-events-none"
          width={439}
          height={1676}
          src="/assets/images/hero/orange_half-circle.webp"
          alt="layer"
        />
      </div>
      <AnimalHealth />
      <Testimonials/>
      <ShowCase />
      <LatestBlogs />
      <JoinUs />
      <Gallery/>
      <ContactUs />
      <Footer />
    </>
  );
}
