"use client";
import { useCallback, useState } from "react";
import { motion, type Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project, projects } from "@/types";
import ProjectModal from "./ProjectModal";

// Parent grid: staggers each card once the grid enters the viewport
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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

const ProjectsGrid = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 "
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={cardVariants}>
            <ProjectCard project={project} onOpen={setSelected} />
          </motion.div>
        ))}
      </motion.div>

      {selected && <ProjectModal project={selected} onClose={handleClose} />}
    </>
  );
};

export default ProjectsGrid;
