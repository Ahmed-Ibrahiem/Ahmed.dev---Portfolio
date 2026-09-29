"use client";
import { motion, type Variants } from "framer-motion";
import ContactCardInfo from "./ContactCardInfo";
import ContactForm from "./ContactForm";

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

const Contact = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex-start-col snap-start mt-27.5 container max-w-337.5 mx-auto gap-15"
      id="contact"
    >
      <div className="flex-center-col gap-2.5 w-full text-center">
        <motion.span
          variants={itemVariants}
          className="text-accent uppercase font-light tracking-[2] max-w-[80%]"
        >
          Contact
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-dark-lite"
        >
          Contact With Me
        </motion.h2>
      </div>

      <div className="grid gap-10 2xl:grid-cols-2 w-full mx-auto">
        <ContactCardInfo />
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default Contact;
