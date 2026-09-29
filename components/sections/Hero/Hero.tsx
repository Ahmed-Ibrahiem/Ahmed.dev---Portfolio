import LeftComponents from "./LeftComponents";
import RightComponents from "./RightComponents";

const Hero = () => {
  return (
    <section
      className="lg:h-screen w-full snap-start pt-60 md:pt-60 xl:pt-40 container flex-between flex-col-reverse lg:flex-row mx-auto gap-20"
      id="home"
    >
      <LeftComponents />
      <RightComponents />
    </section>
  );
};

export default Hero;
