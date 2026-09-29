"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiShield,
  FiZap,
  FiDatabase,
  FiKey,
  FiCheckCircle,
  FiServer,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

interface Feature {
  icon: IconType;
  title: string;
  paragraph: string;
}

export const features: Feature[] = [
  {
    icon: FiShield,
    title: "Role-Based Access",
    paragraph:
      "Different dashboards for Admin, Client, and Guest — each user sees only the data and pages relevant to their role.",
  },
  {
    icon: FiZap,
    title: "Real-Time Updates",
    paragraph:
      "Live data sync powered by Firestore listeners, so users see changes instantly without refreshing the page.",
  },
  {
    icon: FiDatabase,
    title: "Relational Data Modeling",
    paragraph:
      "Structured Postgres schemas with real relationships between Users, Projects, and Tasks — queried through Drizzle ORM.",
  },
  {
    icon: FiKey,
    title: "Social Authentication",
    paragraph:
      "Secure sign-in with Google and GitHub via NextAuth, fully linked to a custom user system in the database.",
  },
  {
    icon: FiCheckCircle,
    title: "Secure API Layer",
    paragraph:
      "Every API route validates incoming data and verifies the user's session before touching the database.",
  },
  {
    icon: FiServer,
    title: "Server-Side Rendering",
    paragraph:
      "Pages fetch fresh data straight from the database on each request — built for speed and up-to-date content.",
  },
];

const FeaturesGrid = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full grow group/swiper-container">
      <Swiper
        modules={[Scrollbar, Pagination, Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl,
          nextEl,
        }}
        pagination={{
          el: paginationEl,
          clickable: true,
        }}
        wrapperClass="items-stretch! h-[430px]! md:h-[380px]!"
        className="max-w-full md:p-6! m-0! cursor-grab active:cursor-grabbing "
        breakpoints={{
          300: { slidesPerView: 1 },
          850: { slidesPerView: 2 },
          1115: { slidesPerView: 3 },
        }}
      >
        {features.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <SwiperSlide key={index} className="h-auto!">
              <Link
                href={"#home"}
                className="h-full w-full rounded-sm shadow-card flex-start-col gap-5 p-8 pt-14 pb-12 relative group duration-500 overflow-hidden hover:text-white!"
              >
                <span className="absolute inset-0 bg-card-style transition-opacity duration-500 group-hover:opacity-0" />
                <span className="absolute inset-0 bg-red-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex-start-col gap-5 group-hover:-translate-y-3 duration-500">
                  <Icon className="text-accent text-4xl z-10 group-hover:text-white!" />
                  <h3 className="font-medium text-2xl z-10">{feat.title}</h3>
                  <p className="leading-7 z-10">{feat.paragraph}</p>
                </div>

                <FaArrowRight
                  className="text-accent opacity-0  group-hover:opacity-100 group-hover:text-white absolute bottom-8 left-8"
                  size={24}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        ref={(node) => setPrevEl(node)}
        aria-label="Previous feature"
        className="absolute top-1/2 cursor-pointer hidden -left-6 -translate-y-1/2 z-20 w-12 h-12
         rounded-full shadow-box bg-card  items-center justify-center text-accent
          hover:bg-accent hover:text-white! transition-all duration-300 
          sm:flex opacity-0 group-hover/swiper-container:opacity-100!"
      >
        <FaArrowLeft size={18} />
      </button>
      <button
        ref={(node) => setNextEl(node)}
        aria-label="Next feature"
        className="absolute top-1/2 cursor-pointer hidden -right-6 -translate-y-1/2 z-20 w-12 h-12
         rounded-full shadow-box bg-card items-center justify-center text-accent hover:bg-accent
          hover:text-white! transition-all duration-300 sm:flex opacity-0 group-hover/swiper-container:opacity-100!"
      >
        <FaArrowRight size={18} />
      </button>

      {/* Pagination Bubbles */}
      <div ref={(node) => setPaginationEl(node)} className={bubblesStyle} />
    </div>
  );
};

const bubblesStyle = `
flex items-center justify-center  -bottom-5! lg:bottom-8! absolute
[&_.swiper-pagination-bullet]:w-2.5! [&_.swiper-pagination-bullet]:h-2.5!
[&_.swiper-pagination-bullet]:rounded-full! [&_.swiper-pagination-bullet]:bg-border!
[&_.swiper-pagination-bullet]:opacity-100! [&_.swiper-pagination-bullet]:transition-all
[&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet]:cursor-pointer
[&_.swiper-pagination-bullet:hover]:bg-accent/40! 
[&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet-active]:bg-accent!
[&_.swiper-pagination-bullet-active]:shadow-[0_2px_8px_rgba(238,63,115,0.4)]!
`;

export default FeaturesGrid;
