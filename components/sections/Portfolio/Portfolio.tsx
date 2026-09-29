"use client";
import { motion, type Variants } from "framer-motion";
import ProjectsGrid from "./ProjectsGrid";

// Parent: staggers its children once it enters the viewport
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each child: fades in and slides up slightly
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Portfolio = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:h-screen w-full flex-start-col snap-start mt-27.5 container mx-auto gap-15"
      id="portfolio"
    >
      <div className="flex-center-col gap-3.5 w-full text-center">
        <motion.span
          variants={itemVariants}
          className="text-accent uppercase font-light tracking-[2] max-w-[80%]"
        >
          Here is a sample of projects I've worked on.
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-dark-lite"
        >
          Selected projects
        </motion.h2>
      </div>

      {/* ProjectsGrid handles its own per-card stagger internally */}
      <ProjectsGrid />
    </motion.section>
  );
};

export default Portfolio;
