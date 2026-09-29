"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const {
    title,
    description,
    projectType,
    status,
    tags,
    liveUrl,
    githubUrl,
    details,
  } = project;

  const [visible, setVisible] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden"; // scroll lock for body
    closeRef.current?.focus();
    const raf = requestAnimationFrame(() => setVisible(true)); // fade-in

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const meta = [
    { label: "Role", value: details.role },
    { label: "Type", value: projectType },
    {
      label: "Status",
      value: status === "in-progress" ? "In Progress" : "Completed",
    },
  ];

  // Portal: renders the modal directly inside document.body so it isn't affected by any transform/overflow in the sections
  return createPortal(
    <div
      className={`fixed inset-0  overflow-y-auto bg-page backdrop-blur-sm transition-opacity duration-300 z-2000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`relative mx-auto my-8 w-[92%] max-w-6xl rounded-sm bg-card-style shadow-box p-6 duration-300 md:p-12 ${
          visible ? "translate-y-0" : "-translate-y-6"
        }`}
      >
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 flex-center h-12 w-12 rounded-full shadow-box bg-card text-xl text-accent duration-300 hover:bg-accent hover:text-white"
        >
          <FiX />
        </button>

        {/* Top: slider + info */}
        <div className="grid grid-cols-2 gap-10 pt-10">
          {/* Info */}
          <div className="flex-start-col gap-6">
            <h2
              id="project-modal-title"
              className="text-3xl font-bold leading-tight md:text-4xl"
            >
              {title}
            </h2>
            <p className="text-body leading-7">{description}</p>

            <dl className="grid w-full grid-cols-2 gap-x-8 gap-y-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm uppercase tracking-[1.5] text-body">
                    {item.label}
                  </dt>
                  <dd className="font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-box-style px-3 py-1 text-xs font-medium text-body"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {(liveUrl || githubUrl) && (
              <div className="flex flex-wrap items-center gap-4">
                {liveUrl && (
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium uppercase tracking-[1.5] text-white shadow-button duration-300 hover:-translate-y-1"
                  >
                    Live Demo <FiExternalLink />
                  </Link>
                )}
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-center gap-2 rounded-sm shadow-box bg-card px-6 py-3 text-sm font-medium uppercase tracking-[1.5] text-accent duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white"
                  >
                    Source Code <FiGithub />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Slider */}
          <div className="relative min-w-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              loop={true}
              autoplay={{ delay: 2000 }}
              className="w-full h-full! "
            >
              {details.gallery.map((shot) => (
                <SwiperSlide key={shot.src} className="h-full!">
                  <div className="relative aspect-video w-full h-full overflow-hidden rounded-sm">
                    <Image
                      src={shot.src}
                      alt={`${title} — ${shot.caption}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <hr className="my-10 border-border" />

        {/* Overview + highlights */}
        <p className="max-w-4xl text-body leading-8">{details.overview}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {details.highlights.map((item) => (
            <div key={item.title} className="flex-start-col gap-3">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-body leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
