"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion, type Variants } from "framer-motion";

const socialIcons = [
  {
    title: "Facebook",
    icon: (
      <FiFacebook className="relative z-10 transition-all duration-500 group-hover:text-white" />
    ),
    url: "https://www.facebook.com/POOMMECOM",
  },
  {
    title: "Instagram",
    icon: (
      <FiInstagram className="relative z-10 transition-all duration-500 group-hover:text-white" />
    ),
    url: "https://www.instagram.com/ahmed_ibrahim187/",
  },
  {
    title: "Linkedin",
    icon: (
      <FiLinkedin className="relative z-10 transition-all duration-500 group-hover:text-white" />
    ),
    url: "https://www.linkedin.com/in/ahmed-ibrahiem-1796b7328/",
  },
];

const jobTitles = [
  "Full-Stack Developer",
  "Next.js Developer",
  "WordPress Developer",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LeftComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleWidth, setTitleWidth] = useState("0px");
  const titleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // step1: start open title (make his with is full depend of currentIndex)
    const measured = titleRefs.current[currentIndex]?.offsetWidth ?? 0;
    setTitleWidth(`${measured + 8}px`);

    // step2: after a fow second return close title
    const shrinkTimer = setTimeout(() => {
      setTitleWidth("0px");
    }, 3000); // 3 seconds to read title

    // step3: after the close transtion end change the title
    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
    }, 4000); // 3000 + 500ms ( CSS transition)

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(nextTimer);
    };
  }, [currentIndex]);

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex-start-col gap-5 xl:w-[55%] h-full"
    >
      <motion.h2
        variants={itemVariants}
        className="text-body font-light uppercase tracking-[2] text-[16px]"
      >
        Welcome to my World
      </motion.h2>

      <div className="flex-start-col gap-2.5 text-[22px] md:text-3xl 2xl:text-5xl font-bold">
        <motion.h3 variants={itemVariants}>
          Hi, I'm <span className="text-accent">Ahmed Ibrahim</span>
        </motion.h3>

        <motion.div variants={itemVariants} className="flex-start gap-2">
          <span className="text-accent">a</span>
          <h3
            className="after:absolute after:h-[90%] after:w-0.75 after:bg-accent after:right-0 after:top-[50%]
                     after:translate-y-[-50%] relative overflow-hidden whitespace-nowrap duration-1000 font-bold"
            style={{ width: titleWidth }}
          >
            {jobTitles.map((title, index) => (
              <b
                ref={(el) => {
                  titleRefs.current[index] = el;
                }}
                className={`font-bold ${index === currentIndex ? "visible" : "hidden"}`}
                key={index}
              >
                {title}
              </b>
            ))}
          </h3>
        </motion.div>
      </div>

      <motion.p
        variants={itemVariants}
        className="text-body xl:max-w-[80%] leading-7"
      >
        I turn business problems into complete, working systems — from the
        interface your users see, to the database and authentication running
        behind it.
      </motion.p>

      {/* Social Media and Best Skills */}
      <motion.div
        variants={itemVariants}
        className="flex-between gap-5 flex-wrap w-full mt-10"
      >
        <div className="flex-start-col gap-5">
          <h3 className="uppercase tracking-[1.5]">Find with me</h3>
          <div className="flex-start gap-5">
            {socialIcons.map((icon, index) => (
              <Link
                title={icon.title}
                key={index}
                className="relative w-15 h-15 shadow-box rounded-sm text-2xl flex-center overflow-hidden group hover:-translate-y-1 duration-500"
                href={icon.url}
              >
                <span className="absolute inset-0 bg-box-style transition-opacity duration-500 group-hover:opacity-0" />
                <span className="absolute inset-0 bg-red-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Best Skills */}
        <div className="flex-start-col gap-5">
          <h3 className="uppercase tracking-[1.5]">Best Skills on</h3>
          <div className="flex-start gap-5">
            <div
              title="Next.js"
              className="relative w-15 h-15 bg-box-style shadow-box rounded-sm text-2xl flex-center overflow-hidden"
            >
              <Image
                src={"/images/next.png"}
                alt="Next.js"
                width={60}
                height={60}
              />
            </div>
            <div
              title="Firebase"
              className="relative w-15 h-15 bg-box-style shadow-box rounded-sm text-2xl flex-center overflow-hidden"
            >
              <Image
                src={"/images/firebase.png"}
                alt="Next.js"
                width={60}
                height={60}
              />
            </div>
            <div
              title="NextAuth"
              className="relative w-15 h-15 bg-box-style shadow-box rounded-sm text-2xl flex-center overflow-hidden"
            >
              <Image
                src={"/images/nextAuth.png"}
                alt="Next.js"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default LeftComponents;
