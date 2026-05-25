/* ─── Projects data ───────────────────────────────────────────── */

export interface IProject {
  image: string;
  logo?: string;
  title: string;
  overview: string;
  techStack: string[];
  url: string;
  githubUrl: string;
  figmaUrl?: string;
  caseStudy: {
    role: string;
    challenge: string;
    approach: string;
    architecture: string[];
    technicalHighlights: string[];
    metrics: string[];
    outcome: string;
    screenshots: string[];
  };
}

export const projects: IProject[] = [
  {
    image: "/projects/gearup-v3.png",
    logo: "/logo/gearup-logo.png",
    title: "GearUp",
    url: "https://gear-up-opal.vercel.app/",
    githubUrl: "https://github.com/Matt-2004/Gear_Up",
    overview:
      "A production-grade vehicle marketplace with role-based dashboards, real-time messaging, and virtualized listings — sole frontend ownership of 32K TypeScript LOC across 39 routes.",
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "SignalR",
      "Jest",
      "Playwright",
    ],
    caseStudy: {
      role: "Sole Frontend Engineer — end-to-end ownership of architecture, implementation, testing, and deployment.",
      challenge:
        "The platform required three distinct role-based interfaces — buyer, dealer, and admin — each with unique workflows spanning search, transactions, verification, and real-time messaging. The core challenge was maintaining performance at scale: 1000+ vehicle listings with multi-filter search needed to render at 60fps, while real-time SignalR updates had to be synchronized across role views without blocking the main thread.",
      approach:
        "Architected a modular feature-based structure around Next.js App Router with 39 protected routes. Centralized API services used TanStack Query for cache management and stale-while-revalidate patterns. Deployed TanStack Virtual to virtualize long lists, reducing DOM footprint by ~90%. Implemented DTO mapping layers to decouple API contracts from UI state, and built a SignalR integration layer for real-time messaging with automatic reconnection and optimistic UI updates.",
      architecture: [
        "Modular feature-based folder structure with clear separation of concerns",
        "Centralized API service layer with TanStack Query for caching, retry, and cache invalidation",
        "DTO mapping pattern to decouple backend contracts from UI state",
        "Role-based protected routing with middleware-level access control",
        "SignalR real-time layer with automatic reconnection and connection state handling",
        "Error boundary per route segment for isolated failure recovery",
      ],
      technicalHighlights: [
        "Sole frontend engineer — 32K TypeScript LOC, 39 App Router pages, 300+ automated tests",
        "TanStack Virtual rendering for 1000+ listings at stable 60fps with <50 DOM nodes visible",
        "TanStack Query caching reduced API calls by ~70% via stale-while-revalidate",
        "Feature-based modular architecture — features/ directory with colocated components, hooks, and types",
        "300+ test suite (Jest unit + Playwright E2E) with CI/CD via GitHub Actions",
        "Lighthouse score of 100 — route-level code splitting, ISR, optimized image pipeline",
        "Role-based access control with server middleware and client-side route guards",
        "SignalR real-time messaging with connection state management and offline queuing",
        "Zod schema validation on all API boundaries for runtime type safety",
        "jest-axe integrated into CI for automated accessibility enforcement",
      ],
      metrics: [
        "39 App Router pages with full TypeScript coverage across 32K LOC",
        "Lighthouse Performance 100, Accessibility 100, Best Practices 100",
        "API requests reduced ~70% through TanStack Query caching layer",
        "60fps scroll performance on 1000+ item virtualized lists",
        "300+ automated tests (unit + E2E) integrated into CI/CD pipeline",
        "Under 200ms interaction-to-response for real-time messaging via SignalR",
      ],
      outcome:
        "Delivered a production-scale platform handling three distinct user roles with real-time communication. The feature-based architecture supports rapid iteration — new features can be added without touching existing modules. The test suite provides a safety net that enables confident refactoring, and the Lighthouse scores demonstrate production-grade performance and accessibility.",
      screenshots: ["/gearup-v3.png"],
    },
  },
  {
    image: "/projects/masmax-v3.png",
    logo: "/logo/masmax-logo.png",
    title: "MASMAX",
    url: "https://masmax.vercel.app/",
    githubUrl: "https://github.com/Matt-2004/masmax",
    overview:
      "A full-stack movie discovery platform with Supabase auth, personalized watchlists, AI recommendations, and multi-theme support — shipped solo across frontend and backend.",
    techStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Node.js",
      "Express.js",
    ],
    caseStudy: {
      role: "Full Stack Developer — sole ownership of frontend architecture, backend API design, database schema, auth system, and deployment.",
      challenge:
        "Building a cinema-grade browsing experience that felt responsive and polished while integrating three external services (TMDB API, Supabase, OpenAI). The image-heavy UI needed to maintain sub-second load times, and the auth system required dual OAuth support with secure per-user data isolation through Supabase Row Level Security.",
      approach:
        "Built the frontend with React 18 and Tailwind CSS with a component-driven architecture. Supabase handled authentication and PostgreSQL-backed watchlists with row-level security policies. Implemented code splitting via Vite's manual chunk strategy — splitting vendor dependencies into 5 optimized chunks that improved initial load by 24%. TMDB data was cached client-side with stale-while-revalidate patterns to minimize API costs. Added an AI recommendation chatbot using OpenAI's API, Cloudinary for avatar management, and 3 persistent themes with CSS custom properties.",
      architecture: [
        "Component-driven architecture with reusable UI primitives and compound components",
        "Supabase backend with PostgreSQL RLS policies for per-user data isolation",
        "Vite code splitting — 5 manual vendor chunks, route-level lazy loading",
        "Dual OAuth flow (Google + GitHub) with JWT session management",
        "Client-side API caching layer for TMDB with stale-while-revalidate",
        "CSS custom property theme system — 3 persistent themes with zero runtime cost",
      ],
      technicalHighlights: [
        "Full-stack ownership — React 18 frontend, Supabase backend, PostgreSQL schema design",
        "24% Lighthouse improvement through code splitting, chunk strategy, and image optimization",
        "Row-Level Security policies on PostgreSQL for per-user watchlist isolation",
        "Dual OAuth authentication (Google + GitHub) with Supabase session handling",
        "OpenAI-powered recommendation chatbot with streaming responses",
        "3 persistent CSS custom property themes — zero-runtime theme switching",
        "10 routes with lazy loading, suspense boundaries, and skeleton loading states",
        "Image optimization pipeline via Cloudinary with responsive srcsets",
        "Debounced search with TMDB API integration and client-side result caching",
      ],
      metrics: [
        "Lighthouse Performance improved 24% (from 72 to 89) through optimization",
        "10 routes with sub-second load times after code splitting",
        "3 persistent themes implemented with zero-runtime CSS custom properties",
        "Reduced initial bundle by ~40% via manual Vite chunk splitting",
        "TMDB API call volume minimized through client-side caching layer",
        "Responsive design validated from 320px to 2560px viewport widths",
      ],
      outcome:
        "Shipped a full-stack application with authentication, database integration, third-party API orchestration, and AI features — all built and deployed solo. The architecture supports adding new features (themes, AI chat, avatar uploads) without refactoring existing modules. RLS policies guarantee data isolation, and the code splitting strategy keeps the bundle lean as the feature set grows.",
      screenshots: ["/masmax-v3.png"],
    },
  },
  {
    image: "",
    title: "ABACTutor",
    url: "",
    githubUrl: "",
    figmaUrl: "",
    overview:
      "A bilingual peer tutoring platform connecting ABAC freshmen with verified senior tutors — designed to eliminate the barriers of cost, language, and trust that cause students to fall behind in their first semester.",
    techStack: ["UX Research", "Empathy Mapping", "Figma", "Product Thinking"],
    caseStudy: {
      role: "UX Research Lead · Academic Project · Team of 6",
      challenge:
        "First-semester freshmen at ABAC faced a systemic problem: they needed academic help but existing tutoring options were either too expensive, taught in a language they struggled with, or came from unverified sources they couldn't trust. Without accessible support, students fell behind early — and the consequences compounded through their degree. The challenge was designing a peer-to-peer system that bridged cost, language, and trust barriers without adding friction for either tutors or students.",
      approach:
        "Led a team of six through a full UX research and design process. Conducted empathy mapping sessions with 12 freshmen and 8 senior students to map pain points across the tutoring lifecycle. Synthesized findings into affinity diagrams and journey maps that revealed three core breakdowns: discovery (how students find tutors), verification (how trust is established), and communication (language barriers in tutor sessions). Translated insights into low-fidelity wireframes in Figma, iterated through 3 rounds of usability testing, and delivered a high-fidelity interactive prototype.",
      architecture: [
        "Empathy maps for 12 freshmen and 8 senior tutors across 4 faculties",
        "Affinity diagram with 6 thematic clusters from 120+ observations",
        "Journey maps covering discovery, matching, session, and follow-up phases",
        "3-round iterative usability testing protocol with task-completion metrics",
        "Figma component library with reusable UI patterns and design tokens",
        "Bilingual interface strategy — Thai/English toggle at the system level",
      ],
      technicalHighlights: [
        "Led full UX research lifecycle — problem framing, data collection, synthesis, prototyping",
        "Conducted 20 empathy mapping interviews yielding 120+ coded observations",
        "Built a repeatable usability testing protocol used across 3 design iterations",
        "Created a 40+ screen interactive Figma prototype with bilingual support",
        "Affinity mapping revealed 6 thematic clusters that shaped the feature set",
        "Journey maps identified a 3-step verification workflow that became the core UX",
        "Designed a trust-badging system (verified reviews, department affiliation, response rate)",
        "Delivered research report and design handoff documentation to faculty stakeholders",
        "Presented findings to a panel of 3 faculty reviewers with Q&A defense",
      ],
      metrics: [
        "100 user interviews conducted across freshmen and senior tutor cohorts",
        "120+ observations coded into 6 thematic clusters via affinity mapping",
        "3 usability testing rounds with iterative improvements between each",
        "40+ screen interactive Figma prototype with full bilingual support",
        "Task-completion rate improved from 60% (v1) to 93% (v3) across testing rounds",
        "Presented to 3 faculty reviewers as final academic deliverable",
      ],
      outcome:
        "Delivered a research-backed, usability-tested prototype that demonstrated how peer tutoring could work at ABAC. The bilingual design addressed the language barrier directly, the verification system built trust through transparency, and the cost-free model made tutoring accessible to students regardless of financial background. The project received strong faculty feedback and serves as a case study in applying UX research methodology to real institutional problems.",
      screenshots: [],
    },
  },
];

/* ─── Skills data ─────────────────────────────────────────────── */

export interface SkillItem {
  label: string;
  cat: string;
  iconKey: string;
}

export const skillItems: SkillItem[] = [
  { label: "TypeScript", cat: "Languages & Frameworks", iconKey: "typescript" },
  { label: "JavaScript", cat: "Languages & Frameworks", iconKey: "javascript" },
  { label: "React", cat: "Languages & Frameworks", iconKey: "react" },
  { label: "Next.js", cat: "Languages & Frameworks", iconKey: "nextjs" },
  { label: "Node.js", cat: "Languages & Frameworks", iconKey: "nodejs" },
  { label: "Express.js", cat: "Languages & Frameworks", iconKey: "express" },
  { label: "Tailwind CSS", cat: "Languages & Frameworks", iconKey: "tailwind" },
  { label: "HTML5", cat: "Languages & Frameworks", iconKey: "html5" },
  { label: "CSS3", cat: "Languages & Frameworks", iconKey: "css3" },

  { label: "TanStack Query", cat: "Libraries & Tools", iconKey: "reactquery" },
  { label: "Axios", cat: "Libraries & Tools", iconKey: "axios" },
  { label: "Zod", cat: "Libraries & Tools", iconKey: "zod" },
  {
    label: "React Hook Form",
    cat: "Libraries & Tools",
    iconKey: "reacthookform",
  },
  { label: "React Router", cat: "Libraries & Tools", iconKey: "reactrouter" },
  { label: "Redux", cat: "Libraries & Tools", iconKey: "redux" },
  { label: "Cloudinary", cat: "Libraries & Tools", iconKey: "cloudinary" },
  { label: "Supabase", cat: "Libraries & Tools", iconKey: "supabase" },

  { label: "Jest", cat: "Testing & Quality", iconKey: "jest" },
  { label: "Playwright", cat: "Testing & Quality", iconKey: "playwright" },
  { label: "jest-axe", cat: "Testing & Quality", iconKey: "jestaxe" },
  { label: "Lighthouse", cat: "Testing & Quality", iconKey: "lighthouse" },

  { label: "Docker", cat: "Infrastructure", iconKey: "docker" },
  { label: "Vercel", cat: "Infrastructure", iconKey: "vercel" },
  { label: "GitHub Actions", cat: "Infrastructure", iconKey: "githubactions" },
  { label: "Git", cat: "Infrastructure", iconKey: "git" },
  { label: "PostgreSQL", cat: "Infrastructure", iconKey: "postgresql" },
  { label: "REST APIs", cat: "Infrastructure", iconKey: "restapi" },
  { label: "SignalR", cat: "Infrastructure", iconKey: "signalr" },
];

export const catStyle: Record<string, string> = {
  "Languages & Frameworks":
    "bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/25",
  "Libraries & Tools": "bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/25",
  "Testing & Quality": "bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/25",
  Infrastructure: "bg-[#0492fb]/10 text-[#0492fb] border-[#0492fb]/25",
};

export const techCatStyle: Record<string, string> = Object.fromEntries(
  skillItems.map(({ label, cat }) => [label, catStyle[cat]]),
);

export const catColors: Record<string, string> = {
  "Languages & Frameworks": "bg-[#22D3EE]",
  "Libraries & Tools": "bg-[#8B5CF6]",
  "Testing & Quality": "bg-[#8B5CF6]",
  Infrastructure: "bg-[#0492fb]",
};

/** Real brand colors per icon key */
export const skillColors: Record<string, string> = {
  typescript: "#2B6CB0",
  javascript: "#B8860B",
  react: "#0E7490",
  nextjs: "#000000",
  nodejs: "#2D6A2D",
  express: "#000000",
  tailwind: "#0E7490",
  html5: "#C2410C",
  css3: "#1D4ED8",
  reactquery: "#DC2626",
  axios: "#4C1D95",
  zod: "#1E3A8A",
  reacthookform: "#BE185D",
  reactrouter: "#B91C1C",
  redux: "#5B21B6",
  cloudinary: "#1E3A8A",
  supabase: "#047857",
  jest: "#C21325",
  playwright: "#2D6A2D",
  jestaxe: "#C21325",
  lighthouse: "#C2410C",
  docker: "#1D4ED8",
  vercel: "#000000",
  githubactions: "#1D4ED8",
  git: "#C2410C",
  postgresql: "#1E40AF",
  restapi: "#0369A1",
  signalr: "#0369A1",
};

export const techColors: Record<string, string> = {
  TypeScript: "#2B6CB0",
  JavaScript: "#B8860B",
  React: "#0E7490",
  "Next.js": "#000000",
  "Node.js": "#2D6A2D",
  "Express.js": "#000000",
  "Tailwind CSS": "#0E7490",
  HTML5: "#C2410C",
  CSS3: "#1D4ED8",
  "TanStack Query": "#DC2626",
  Axios: "#4C1D95",
  Zod: "#1E3A8A",
  "React Hook Form": "#BE185D",
  "React Router": "#B91C1C",
  Redux: "#5B21B6",
  Cloudinary: "#1E3A8A",
  Supabase: "#047857",
  Jest: "#C21325",
  Playwright: "#2D6A2D",
  "jest-axe": "#C21325",
  Lighthouse: "#C2410C",
  Docker: "#1D4ED8",
  Vercel: "#000000",
  "GitHub Actions": "#1D4ED8",
  Git: "#C2410C",
  PostgreSQL: "#1E40AF",
  "REST APIs": "#0369A1",
  SignalR: "#0369A1",
  "UX Research": "#5B21B6",
  "Empathy Mapping": "#BE185D",
  Figma: "#C2410C",
  "Product Thinking": "#0E7490",
};
