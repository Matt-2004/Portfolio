/* ─── Projects data ───────────────────────────────────────────── */

export interface IProject {
  image: string;
  title: string;
  overview: string;
  techStack: string[];
  url: string;
}

export const projects: IProject[] = [
  {
    image: "/masmax.png",
    title: "MASMAX",
    url: "https://masmax.vercel.app/",
    overview:
      "Built a full-stack movie ticket booking platform with secure authentication, real-time seat availability, and payment-ready architecture. Implemented RESTful APIs using Golang and integrated MongoDB for scalable data management.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Golang", "MongoDB"],
  },
  {
    image: "/gearup.png",
    title: "GearUp",
    url: "https://gear-up-opal.vercel.app/",
    overview:
      "Developed the frontend of a car marketplace platform with responsive UI, vehicle listing pages, and role-based dashboards. Integrated REST APIs for dynamic data rendering and implemented client-side authentication handling. Optimized large vehicle lists using TanStack Virtual to improve scroll performance and reduce DOM rendering overhead.",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
];

/* ─── Skills data ─────────────────────────────────────────────── */

export interface SkillItem {
  label: string;
  cat: string;
}

export const skillItems: SkillItem[] = [
  // Frontend
  { label: "React", cat: "Frontend" },
  { label: "Next.js", cat: "Frontend" },
  { label: "TypeScript", cat: "Frontend" },
  { label: "JavaScript (ES6+)", cat: "Frontend" },
  { label: "Tailwind CSS", cat: "Frontend" },
  { label: "HTML5", cat: "Frontend" },
  { label: "CSS3", cat: "Frontend" },
  { label: "@tanstack/react-virtual", cat: "Frontend" },
  // Backend
  { label: "Node.js", cat: "Backend" },
  { label: "Express.js", cat: "Backend" },
  { label: "REST API", cat: "Backend" },
  { label: "JWT Authentication", cat: "Backend" },
  { label: "Golang", cat: "Backend" },
  // Database
  { label: "MongoDB", cat: "Database" },
  { label: "MySQL", cat: "Database" },
  { label: "PostgreSQL", cat: "Database" },
  { label: "Firebase", cat: "Database" },
  // Tools
  { label: "Git", cat: "Tools" },
  { label: "GitHub", cat: "Tools" },
  { label: "Vercel", cat: "Tools" },
  { label: "npm", cat: "Tools" },
  { label: "Postman", cat: "Tools" },
  // CS Fundamentals
  { label: "Data Structures", cat: "CS Fundamentals" },
  { label: "Algorithms", cat: "CS Fundamentals" },
  { label: "Computer Architecture", cat: "CS Fundamentals" },
  // Mobile
  { label: "Android Studio", cat: "Mobile" },
  { label: "Kotlin", cat: "Mobile" },
  { label: "XML Layout (Traditional)", cat: "Mobile" },
];

export const catStyle: Record<string, string> = {
  Frontend:
    "bg-orange-500/15 text-orange-500 dark:text-orange-300 border-orange-400/30",
  Backend: "bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-400/30",
  Database:
    "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-400/30",
  Mobile:
    "bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border-indigo-400/30",
  Tools:
    "bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-400/30",
  "CS Fundamentals":
    "bg-rose-500/15 text-rose-600 dark:text-rose-300 border-rose-400/30",
};

/** Maps individual tech label → its category color class */
export const techCatStyle: Record<string, string> = Object.fromEntries(
  skillItems.map(({ label, cat }) => [label, catStyle[cat]]),
);

export const catColors: Record<string, string> = {
  Frontend: "bg-orange-400",
  Backend: "bg-sky-400",
  Database: "bg-emerald-400",
  Tools: "bg-purple-400",
  "CS Fundamentals": "bg-rose-400",
  Mobile: "bg-indigo-400",
};
