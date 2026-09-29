// أنواع المشاريع (هتتحول لـ tabs الفلترة لما المشاريع توصل 8 أو أكتر)
export const projectTypes = ["E-commerce", "SaaS", "LMS", "WordPress"] as const;
export type ProjectType = (typeof projectTypes)[number];

export interface ProjectDetails {
  role: string;
  overview: string;
  // 3 أعمدة تحت الـ overview (زي Strategy / Design / UX في القالب)
  highlights: { title: string; text: string }[];
  // صور الـ slider اللي فوق في صفحة التفاصيل
  gallery: { src: string; caption: string }[];
}

export interface Project {
  slug: string;
  title: string;
  projectType: ProjectType;
  description: string; // سطر واحد: المشكلة اللي بيحلها
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress";
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    slug: "marcedo",
    title: "Marcedo",
    projectType: "E-commerce",
    description:
      "E-commerce platform with a full admin panel for managing products, variants, and categories, plus a fast client-facing store with filtering and search.",
    image: "/images/marcedo-website/marcedo.png",
    tags: [
      "React",
      "Tailwind",
      "Firebase",
      "Firestore",
      "Cloudinary",
      "Vercel",
    ],
    liveUrl: "https://marcedo-website.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Ibrahiem/marcedo-website.git",
    status: "completed",
    details: {
      role: "Full-Stack Developer",
      overview:
        "Marcedo is an e-commerce platform built in two parts: an admin panel for managing the catalog, and a client-facing store. It started with static JSON data and was progressively migrated to Firebase and Firestore.",
      highlights: [
        {
          title: "Admin Panel",
          text: "A 5-step add/edit product form with a manual variant builder, saving through Firestore batch writes across multiple collections.",
        },
        {
          title: "Data Architecture",
          text: "Separate collections for products, variants, pricing, stock, and orders, with a two-tier attribute system for filterable and custom attributes.",
        },
        {
          title: "Storefront",
          text: "Product filtering, variant selection, debounced search, category pages, and cart and wishlist logic with the Context API.",
        },
      ],
      gallery: [
        {
          src: "/images/marcedo-website/dashboard.png",
          caption: "Admin dashboard",
        },
        {
          src: "/images/marcedo-website/product-form.png",
          caption: "Product form",
        },
      ],
    },
  },
  {
    slug: "educora",
    title: "Educora",
    projectType: "LMS",
    description:
      "Learning management system with role-based access, where each user type gets its own dashboard and permissions.",
    image: "/images/educora-website/educora.png",
    tags: ["React", "Context API", "Tailwind"],
    liveUrl: "https://educora-cms-frontend-plateform.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Ibrahiem/Educora-CMS-Frontend-Plateform.git    ",
    status: "completed",
    details: {
      role: "Frontend Developer",
      overview:
        "Educora is a learning management system focused on role-based experiences. The current version is a frontend build with a mock authentication layer, and it is planned to be rebuilt in Next.js with a real database.",
      highlights: [
        {
          title: "Authentication",
          text: "An auth system built from scratch with React Context, covering sign-in state and session handling.",
        },
        {
          title: "Role Management",
          text: "Different user roles with their own permissions and views across the platform.",
        },
        {
          title: "Next Step",
          text: "A rebuild in Next.js with server-side authentication and a real database.",
        },
      ],
      gallery: [{ src: "/images/educora-website/educora.png", caption: "Home Page" }],
    },
  },
  {
    slug: "wakeel",
    title: "Wakeel",
    projectType: "SaaS",
    description:
      "A case and deadline tracker for lawyers — clients, cases, hearings, and automatic email reminders before every hearing date.",
    image: "/projects/wakeel.png",
    tags: ["Next.js", "Neon", "Drizzle", "NextAuth", "Tailwind", "Zod"],
    githubUrl: "#",
    status: "in-progress",
    details: {
      role: "Full-Stack Developer",
      overview:
        "Wakeel is a lawyer-focused tool that keeps clients, cases, hearing dates, and payments in one place, so nothing important gets missed. It is currently in progress.",
      highlights: [
        {
          title: "Data Model",
          text: "A relational schema where one lawyer owns many clients, each client owns many cases, and each case owns hearings, documents, and payments.",
        },
        {
          title: "Reminders",
          text: "Designed around a daily cron job that emails hearing reminders, with a flag per hearing to prevent duplicate sends.",
        },
        {
          title: "Scheduling Logic",
          text: "Hearing-time conflict detection handled in application code inside Server Actions.",
        },
      ],
      gallery: [{ src: "/projects/wakeel.png", caption: "Landing page" }],
    },
  },
];

interface skillValue {
  name: string;
  persentage: number;
}

export interface Skill {
  label: string;
  value: skillValue[];
}

export const skills: Skill[] = [
  {
    label: "Front End Skills",
    value: [
      { name: "HTML", persentage: 100 },
      { name: "CSS", persentage: 100 },
      { name: "JS", persentage: 95 },
      { name: "React.js", persentage: 90 },
      { name: "Next.js", persentage: 87 },
    ],
  },
  {
    label: "Back End Skills",
    value: [
      { name: "Node.js", persentage: 90 },
      { name: "Neon", persentage: 90 },
      { name: "Firebase", persentage: 87 },
      { name: "MongoDB", persentage: 85 },
      { name: "NextAuth", persentage: 80 },
    ],
  },
  {
    label: "Design Skills",
    value: [
      { name: "Adobe XD", persentage: 95 },
      { name: "Figma", persentage: 80 },
    ],
  },
];
