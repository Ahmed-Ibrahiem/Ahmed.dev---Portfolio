import ResumeCards from "./ResumeCards";

const Resume = () => {
  return (
    <section
      className="lg:h-screen w-full flex-start-col snap-start pt-27.5 container  mx-auto gap-10"
      id="resume"
    >
      <div className="flex-center-col  gap-2.5 w-full text-center ">
        <span className="text-accent uppercase font-light tracking-[2] max-w-[80%]">
          My professional skills
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-lite">
          My Skills
        </h2>
      </div>

      <ResumeCards />
    </section>
  );
};

export default Resume;
