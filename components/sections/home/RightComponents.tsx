"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const RightComponents = () => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 1, duration: 0.6 } }}
      className="grow h-full flex-center justify-end!"
    >
      <div className="card w-70 h-70 sm:w-80 sm:h-80 md:w-100  md:h-100 rounded-sm bg-box-style relative shadow-card ">
        <Image
          src={"/images/profileImage.png"}
          alt="Ahmed Ibrahiem Profile Image"
          width={400}
          height={400}
          className="absolute bottom-0"
        />
      </div>
    </motion.article>
  );
};

export default RightComponents;
