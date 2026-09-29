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
- **Forms & Validation:** React Hook Form + Zod
- **Email:** Resend
- **Notifications:** React Toastify

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

Open [ahmed-dev-portfolio-three.vercel.app](https://ahmed-dev-portfolio-three.vercel.app/) to view it.

## Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=the_email_that_receives_messages
```

- `CONTACT_TO_EMAIL` must be the email address of your Resend account
  until you verify a custom domain.
- Restart the dev server after changing env values.
- On Vercel, add the same variables under
  **Project Settings → Environment Variables**, then redeploy.

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

- The contact form uses the Resend test sender (`onboarding@resend.dev`),
  so messages are delivered only to the account owner's email. That is
  enough for a portfolio inbox. To send from a custom address, verify a
  domain in Resend and update the `from` field in `app/api/contact/route.ts`.
- Project data lives in `types/index.ts` — update it as new projects are
  finished or as project status changes from "in-progress" to "completed".

## Author

**Ahmed**
Full-Stack Developer — [LinkedIn](https://www.linkedin.com/in/ahmed-ibrahiem-1796b7328/) · [GitHub](https://github.com/Ahmed-Ibrahiem)
