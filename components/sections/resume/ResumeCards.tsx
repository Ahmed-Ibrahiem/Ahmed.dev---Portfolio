"use client";
import { motion, type Variants } from "framer-motion";
import { Skill, skills } from "@/types";
import ResumeCard from "./ResumeCard";

// Parent grid: staggers each card once the grid enters the viewport
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Each card: fades in and slides up slightly
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ResumeCards = () => {
  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8"
    >
      {skills.map((skill: Skill, index: number) => (
        <motion.div key={index} variants={cardVariants}>
          <ResumeCard skill={skill} />
        </motion.div>
      ))}
    </motion.article>
  );
};

export default ResumeCards;
