# Crosve Lucero — Portfolio

Personal portfolio site for Crosve Lucero, a software engineer based in NYC.

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + `next-themes` (light/dark)
- **Animations**: Framer Motion (`Appear`, `SlideUp`, `Reveal`, `PageTransition`)
- **Chatbot**: Capybara AI assistant — powered by `@ai-sdk/google` + Pinecone RAG (`app/crosve/route.ts`, `app/lib/pinecone.tsx`)
- **Icons**: `react-icons`
- **Scroll**: `react-scroll` for smooth in-page navigation

## Project structure

```
app/
  layout.tsx          # Root layout: ThemeProvider, Navbar, Footer
  page.tsx            # Home page: renders all sections in order
  globals.css         # Global CSS (Tailwind base + CSS vars)
  crosve/route.ts     # AI chatbot API route
  lib/pinecone.tsx    # Pinecone RAG helper
components/
  NavBar.tsx          # Fixed top nav with smooth-scroll links
  HeroSection.tsx     # Name, tagline, profile image, CTA
  AboutSection.tsx    # Bio text + skills chip grid
  MyExperiences.tsx   # Work/education timeline
  Quiz.jsx            # Interactive quiz component
  ProjectsSection.tsx # Project cards (image, description, GitHub/live links)
  Capybara.tsx        # AI chat widget
  Appear.tsx          # Fade-in scroll animation wrapper
  SlideUp.tsx         # Slide-up animation wrapper
  PageTransition.tsx  # Reveal animation wrapper
  Footer.tsx          # Site footer
styles/
  globals.css         # Imported by layout.tsx
public/              # Static images for projects and profile
datap/               # RAG data pipeline (Jupyter notebooks + source text)
```

## Key conventions

- **Sections** are identified by `id` attributes (`home`, `about`, `experience`, `projects`) — NavBar links use these ids via `react-scroll`.
- **Dark mode** uses Tailwind's `dark:` prefix. Body bg is `dark:bg-stone-900`; text adjusts via `dark:text-neutral-*` classes.
- **Accent color**: `blue-500` / `blue-600` (hr dividers, CTAs, highlighted text).
- **Section headings** follow this pattern:
  ```tsx
  <h1 className="my-10 text-center font-bold text-4xl">
    Section Title
    <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
  </h1>
  ```
- **Animations**: wrap content in `<Appear>` or `<Reveal>` — don't add raw Framer Motion inline unless extending an animation component.
- **Project data** lives as a plain array at the top of `ProjectsSection.tsx` — add new projects there.
- **Skills data** lives as a plain array at the top of `AboutSection.tsx`.
- All components are co-located in `components/` — no subdirectories.

## Development

```bash
npm run dev    # start dev server at localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Design language

See `.claude/skills/design.md` for the full visual system and how to make UI updates consistently.
