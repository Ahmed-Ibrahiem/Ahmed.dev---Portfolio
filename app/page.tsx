import Contact from "@/components/sections/contact/Contact";
import Features from "@/components/sections/features/Features";
import Home from "@/components/sections/home/Home";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Resume from "@/components/sections/resume/Resume";

const page = () => {
  return (
    <div className="">
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

const scrollPageStyle = `lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory lg:scroll-smooth`;
export default page;
