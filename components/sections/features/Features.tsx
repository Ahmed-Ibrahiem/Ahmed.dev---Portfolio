"use client";
import { motion, type Variants } from "framer-motion";
import FeaturesGrid from "./FeaturesGrid";

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

const Features = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:h-screen w-full flex-start-col snap-start mt-27.5 container mx-auto gap-10"
      id="features"
    >
      <div className="flex-start-col gap-2.5">
        <motion.span
          variants={itemVariants}
          className="text-accent font-light tracking-[2]"
        >
          Features
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-dark-lite"
        >
          What I Do
        </motion.h2>
      </div>

      <motion.div variants={itemVariants} className="w-full">
        <FeaturesGrid />
      </motion.div>
    </motion.section>
  );
};

export default Features;
