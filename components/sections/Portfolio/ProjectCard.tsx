import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { title, projectType, description, image, tags, status } = project;

  return (
    <article className="group relative h-full w-full flex-start-col gap-5 rounded-sm shadow-box bg-card-style p-5 duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-sm shadow-sm">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 850px) 100vw, (max-width: 1124px) 50vw, 33vw"
          className="object-cover duration-500 group-hover:scale-105"
        />

        {status === "in-progress" && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-[1.5] text-white shadow-button">
            In Progress
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-start-col gap-1.5 grow">
        <span className="text-xs font-medium uppercase tracking-[1.5] text-accent">
          {projectType}
        </span>

        {/* Stretched button: الزرار ده بيغطي الكارت كله (after:inset-0)،
            فالكارت كله clickable من غير ما نلف كل حاجة في <a>/<button> */}
        <h3 className="font-medium text-2xl">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="cursor-pointer text-left after:absolute after:inset-0 after:z-[1] after:rounded-sm focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent"
          >
            {title}
          </button>
        </h3>
        <p className="text-body text-sm leading-7 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Tech badges */}
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-page px-3 py-1 text-xs font-medium text-body"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
