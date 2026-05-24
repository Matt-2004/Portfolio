# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with next/core-web-vitals + next/typescript
```

Node version is pinned to 24.x via `.nvmrc` and `package.json` engines.

## Architecture

This is a **personal portfolio site** for Wai Yan Aung — a single-page Next.js 16 App Router app with one project detail route.

**Page routes:**
- `/` — single-page layout: Hero → About → Projects → Contact → Footer (all in `src/app/page.tsx`)
- `/projects/abactutor` — dedicated case study page for the ABACTutor UX project

**i18n:** English and Chinese (`zh`) via `src/lib/LanguageContext.tsx`. All translations live in `src/lib/i18n.ts` as a single `translations` object. Language preference persists in `localStorage`. The `useLanguage()` hook exposes `{ language, toggleLanguage, t }` where `t` is the resolved translations object.

**Theming:** Light/dark via `src/context/ThemeContext.tsx`. Uses a `data-theme` attribute on `<html>` (not Tailwind's `dark` class). Theme choice persists in `localStorage`.

**Design tokens:** Defined as CSS custom properties in `:root` (`src/app/globals.css`). The tailwind config maps convenience color aliases (`cream`, `violet`, `orange`, `cyan`, `brand`, `accent`, `base`) to these tokens. Only two real brand colors exist: accent `#0369A1` and brand `#fc6903`; the other aliases are duplicates for backward-compatible class names.

**Animation system:** Reusable Framer Motion variants in `src/lib/animations.ts` — `fadeLift`, `staggerContainer`, `charReveal`, `clipWipe`, `springPill`, `sectionReveal`. `ScrollReveal` wraps children with IntersectionObserver-triggered entrance animations. `SplitText` animates each character individually.

**Project data:** All project metadata (GearUp, MASMAX, ABACTutor) is hardcoded in `src/lib/data.ts` as `IProject[]`. The `CaseStudyModal` renders detailed case studies from this data. Skills data and color maps also live in the same file.

**Component conventions:**
- `src/components/ui/` — reusable primitives (Navbar, CommandPalette, CustomCursor, ThemeToggle, LangToggle, ScrollReveal, SplitText, TechIcon, CaseStudyModal)
- `src/components/sections/` — page sections (About, Contact, Footer, GithubGraph)
- `src/components/Hero.tsx` and `Projects.tsx` — major page-level components (could be sections but sit at the components root)

**Styling:** Tailwind CSS v4 with the `@tailwind` directive pattern. Most components use inline `style` props for dynamic colors from the design token system rather than Tailwind color classes, because the token values change between light/dark themes. The `cn()` utility in `src/lib/utils.ts` merges Tailwind classes via `clsx` + `tailwind-merge`. Custom cursor effects use `data-cursor-hover` attributes.
