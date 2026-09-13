# Design Skill — Portfolio Visual System

Use this skill whenever making any UI change to the portfolio — new sections, updated components, layout tweaks, or visual polish. It documents the design language so updates stay consistent.

---

## Aesthetic direction

Aged paper / old notebook. The site should feel like flipping through someone's well-worn journal — warm parchment tones, sepia ink, coffee stains, serif typography, and gentle page-lift animations as sections come into view. **No dark mode. No blue accents. No sans-serif.**

---

## Color palette

| Role | Tailwind token | Hex |
|---|---|---|
| Background | `bg-parchment` | `#EDE0C4` |
| Primary text | `text-sepia` | `#2C1A0E` |
| Muted text | `text-sepia-muted` | `#6B5042` |
| Accent (coffee) | `text-coffee` | `#8B6344` |
| Light accent | `text-coffee-light` | `#C4A882` |

Background also has fixed coffee-stain radial gradients + SVG fractal noise at 4.5% opacity (defined in `globals.css` on `body` — do not override).

**Inline styles for borders/backgrounds:** Since opacity variants of custom colors require inline style, use `style={{ borderColor: "rgba(44, 26, 14, 0.18)" }}` rather than Tailwind opacity modifiers on custom tokens.

---

## Typography

- **Fonts**: Playfair Display (headings/labels) loaded via `@import` in `globals.css`, Lora (body) — both from Google Fonts.
- **Tailwind class**: `font-display` → Playfair Display, `font-body` → Lora
- **Section headings**: `font-display text-3xl font-bold text-sepia`
- **Sub-headings**: `font-display text-xl font-semibold text-sepia`
- **Italic accents**: `font-display italic text-coffee` (company names, taglines)
- **Body copy**: `font-body text-sepia/70 leading-relaxed text-sm md:text-base`
- **Labels/nav**: `font-display text-xs tracking-[0.35em] uppercase text-coffee`
- **Never use sans-serif.** Everything is serif.

---

## Section structure

Each section lives inside a `<NotebookPage>` wrapper (from `components/NotebookPage.tsx`). The wrapper:
- Animates in with a slight rotation (`rotate: -0.5° → 0°`) as it enters the viewport
- Has ruled horizontal lines (CSS `repeating-linear-gradient`) at very low opacity
- Has a left margin line (decorative vertical rule at `left-12`)
- Has a subtle parchment-on-parchment box-shadow

`<SectionDivider />` (also from `NotebookPage.tsx`) separates sections in `page.tsx` with `─── · · · ───`.

Section `id` attributes must stay intact — they are NavBar scroll targets.

---

## Section heading pattern

```tsx
<h2 className="font-display text-3xl font-bold text-sepia mb-2">
  Title
  <hr className="w-8 h-0.5 mt-3 bg-coffee/50 border-0" />
</h2>
```

---

## Skill / tech chip

```tsx
<span
  className="font-body text-xs font-medium text-sepia/80 px-3 py-1.5 rounded-sm border"
  style={{ borderColor: "rgba(44, 26, 14, 0.18)", backgroundColor: "rgba(44, 26, 14, 0.04)" }}
>
  Skill Name
</span>
```

---

## CTA buttons (hero)

```tsx
{/* Primary */}
<Link className="px-6 py-2.5 bg-sepia text-parchment font-display text-sm tracking-wide rounded-sm hover:bg-sepia/80 transition-colors cursor-pointer" ...>
  Label
</Link>

{/* Secondary / outline */}
<Link className="px-6 py-2.5 border border-sepia/30 text-sepia font-display text-sm tracking-wide rounded-sm hover:bg-sepia/5 transition-colors cursor-pointer" ...>
  Label
</Link>
```

---

## Icon links

```tsx
<BsGithub size={24} className="transition-transform hover:-translate-y-1 cursor-pointer text-sepia/60 hover:text-sepia" />
```

---

## Animation wrappers

Do not add raw Framer Motion to section components. Use these:

- **`<Appear>`** (`components/Appear.tsx`) — page-lift on scroll: `rotateX -5° → 0°, y 28px → 0, opacity 0 → 1`. Wraps project cards and multi-element sections.
- **`<Reveal>`** from `components/PageTransition.tsx` — subtler lift from above (`rotateX 4° → 0°`). Wraps individual section headings and text blocks.
- **`<NotebookPage>`** (`components/NotebookPage.tsx`) — page-sheet animation: slight rotation + fade on viewport entry. Wraps entire section content blocks in `page.tsx`.

---

## Project cards

Projects with `image: string` use `<Image>` with `rounded-sm` and an inline box-shadow (`2px 4px 14px rgba(44, 26, 14, 0.15)`).

Projects with `image: null` use `<StyledProjectCard>` — a styled div with the project name in large Playfair Display + tech chips on a lightly tinted parchment background.

The `projects` array is in `components/ProjectsSection.tsx`. Add new projects at the top if they're more recent.

```ts
{
  name: "Project Name",
  description: "One or two impactful sentences.",
  image: "/public-image.png", // or null for styled card
  tech: ["Next.js", "FastAPI"],  // shown when image === null
  github: "https://github.com/crosve/repo",
  link: "https://deployed-url.com",
}
```

---

## Adding a new skill

Edit the `skills` array in `components/AboutSection.tsx`:
```ts
{ skill: "New Skill" }
```

---

## Adding a new nav item

Edit `NAV_ITEMS` in `components/NavBar.tsx` and ensure the target section has a matching `id`:
```ts
{ label: "Section", page: "section-id" }
```

---

## What NOT to do

- No blue, purple, or bright accent colors — palette is sepia/coffee/parchment only.
- No sans-serif fonts — every text element uses `font-display` or `font-body`.
- No dark mode — `dark:` classes should not appear anywhere.
- Don't add inline `background-color` to `body` or override the CSS gradient stains in `globals.css`.
- Don't change section `id` attributes — they are nav scroll targets.
- Don't remove `<Appear>` / `<Reveal>` / `<NotebookPage>` wrappers from existing sections.
- Don't split components into subdirectories — keep everything flat in `components/`.
- Don't use `rounded-xl` — the notebook aesthetic uses `rounded-sm` or no rounding.
