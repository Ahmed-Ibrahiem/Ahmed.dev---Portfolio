"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FiFacebook, FiInstagram, FiLinkedin, FiArrowUp } from "react-icons/fi";

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

// Same sections that actually exist on the page
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-27.5 container mx-auto gap-8 relative border-t border-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        // Runs only once, when ~20% of the footer is visible
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          {/* Brand + socials */}
          <motion.div variants={itemVariants} className="flex-start-col gap-5">
            <span className="text-2xl font-bold">
              AHMED<span className="text-accent">.DEV</span>
            </span>
            <p className="max-w-xs text-body leading-7">
              Full-Stack Developer building clean interfaces and complete,
              working systems behind them.
            </p>
            <div className="flex-start gap-3">
              {socialIcons.map((item, index) => (
                <Link
                  title={item.title}
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 shadow-box rounded-sm text-xl flex-center overflow-hidden group hover:-translate-y-1 duration-500"
                >
                  <span className="absolute inset-0 bg-box-style transition-opacity duration-500 group-hover:opacity-0" />
                  <span className="absolute inset-0 bg-red-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {item.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="flex-start-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-[1.5] text-accent">
              Quick Links
            </h4>
            <ul className="flex-start-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <hr className="my-10 border-border" />

        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-body"
        >
          © {new Date().getFullYear()}. All rights reserved by Ahmed.
        </motion.p>
      </motion.div>

      {/* Back to top: kept as a persistent fixed button, not part of the scroll-in stagger */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-30 flex-center h-12 w-12 rounded-full shadow-box bg-card text-accent duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
