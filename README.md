# Ahmed — Personal Portfolio

My personal portfolio site, built to showcase my projects and skills as a
Full-Stack Developer.

**Live Demo:** [add your deployed link here]

<!-- Add a screenshot or GIF of the hero section here once the site is deployed -->
<!-- ![Portfolio preview](./public/preview.png) -->

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` config)
- **Animation:** Framer Motion
- **Carousel:** Swiper
- **Icons:** react-icons

## Features

- **Animated Hero** — typewriter-style rotating job titles, measured
  dynamically so it works correctly at any screen size.
- **Skills / What I Do** — a Swiper carousel of real, buildable features
  (role-based access, real-time sync, relational data modeling, social auth,
  API security, SSR), each entering with a scroll-triggered animation.
- **Projects** — a filterable-ready grid of real projects, each opening a
  detail modal with a screenshot gallery, tech tags, and links to the live
  demo and source code.
- **Skills section** — a responsive grid of core skills and tools.
- **Contact** — a contact form plus a direct WhatsApp click-to-chat link.
- **Responsive navigation** — a slide-in mobile drawer, built with Framer
  Motion and a React portal.
- **Scroll-snap sections** — each section takes up the full viewport height
  and snaps into place on scroll.
- Every section animates in (fade + slide up, staggered) the first time it
  scrolls into view.

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
  page.tsx              # assembles all sections
components/
  layout/
    Navbar.tsx
    Footer.tsx
    header.tsx
  sections/
    Hero/
        LeftComponents.tsx  # animated intro + job title rotator
    Features/
        Features.tsx
        FeaturesGrid.tsx    # Swiper carousel
    Portfolio/
        Portfolio.tsx
        ProjectsGrid.tsx
        ProjectCard.tsx
        ProjectModal.tsx
    Resume/
        Resume.tsx
        ResumeCards.tsx
        ResumeCard.tsx
    Contact/
        Contact.tsx
        ContactCardInfo.tsx
        ContactForm.tsx
types.ts                     # Project, Skill, and other shared types
```

## Notes

- The contact form is currently UI-only. Sending messages by email is
  planned to be wired up through [Resend](https://resend.com).
- Project data lives in `types/index.ts` — update it as new projects are
  finished or as project status changes from "in-progress" to "completed".

## Author

**Ahmed**
Full-Stack Developer — [LinkedIn](https://www.linkedin.com/in/ahmed-ibrahiem-1796b7328/) · [GitHub](#)
