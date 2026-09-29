import Contact from "@/components/sections/contact/Contact";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/Hero/Hero";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Resume from "@/components/sections/resume/Resume";

const page = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

const scrollPageStyle = `lg:h-screen lg:overflow-y-auto lg:snap-y lg:snap-mandatory lg:scroll-smooth`;
export default page;
