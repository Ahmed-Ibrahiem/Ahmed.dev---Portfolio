"use client";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-3.5 fixed top-0 left-0 bg-page border-b border-border z-1000 "
    >
      <div className="container flex-between  w-full gap-5 mx-auto">
        <Profile />
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Header;
