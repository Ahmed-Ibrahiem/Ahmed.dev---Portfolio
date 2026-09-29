"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  {
    title: "Facebook",
    icon: <FiFacebook />,
    url: "https://www.facebook.com/POOMMECOM",
  },
  {
    title: "Instagram",
    icon: <FiInstagram />,
    url: "https://www.instagram.com/ahmed_ibrahim187/",
  },
  {
    title: "Linkedin",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/ahmed-ibrahiem-1796b7328/",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="flex max-w-7xl items-center justify-between ">
        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[1.5] text-body duration-300 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="md:hidden! flex-center h-11 w-11 rounded-sm shadow-box text-xl text-accent"
        >
          <FiMenu />
        </button>
      </div>

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-2000 bg-black/80  md:hidden"
                />

                {/* Drawer */}
                <motion.aside
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation menu"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "tween",
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="fixed inset-y-0 left-0 z-2000 flex w-[80%] max-w-xs flex-col gap-8 bg-page p-8  md:hidden"
                >
                  {/* Header: photo + close */}
                  <div className="flex items-center justify-between">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-box">
                      <Image
                        src="/images/me.png"
                        alt="Ahmed"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                      className="flex-center h-10 w-10 rounded-full shadow-box text-accent cursor-pointer"
                    >
                      <FiX />
                    </button>
                  </div>

                  <p className="border-b border-border pb-6 text-sm leading-7 text-body">
                    Full-Stack Developer building clean interfaces and complete,
                    working systems behind them.
                  </p>

                  {/* Links */}
                  <nav className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium uppercase tracking-[1.5] text-heading duration-300 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Socials */}
                  <div className="mt-auto flex-start-col gap-3">
                    <h4 className="text-xs uppercase tracking-[1.5] text-body">
                      Find with me
                    </h4>
                    <div className="flex-start gap-3">
                      {socialIcons.map((item) => (
                        <Link
                          key={item.title}
                          title={item.title}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-center h-11 w-11 rounded-sm shadow-box text-lg text-accent duration-300 hover:bg-accent hover:text-white"
                        >
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default Navbar;
