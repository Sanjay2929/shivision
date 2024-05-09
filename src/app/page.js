import LatestBlogs from "@/component/LatestBlogs";
import Header from "@/component/common/Header";
import About from "@/component/common/homepage/About";
import AnimalHealth from "@/component/common/homepage/AnimalHealth";
import ContactUs from "@/component/common/homepage/ContactUs";
import Footer from "@/component/common/homepage/Footer";
import JoinUs from "@/component/common/homepage/JoinUs";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <AnimalHealth />
      <LatestBlogs />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  );
}
