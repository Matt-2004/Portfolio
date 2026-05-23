import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiReactquery,
  SiAxios,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiRedux,
  SiCloudinary,
  SiSupabase,
  SiJest,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiGit,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { FlaskConical, Radio, Gauge, Globe, Search, HeartHandshake, Lightbulb } from "lucide-react";

const map: Record<string, React.ComponentType<{ className?: string }>> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "JavaScript (ES6+)": SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Tailwind CSS": SiTailwindcss,
  "TanStack Query": SiReactquery,
  Axios: SiAxios,
  Zod: SiZod,
  "React Hook Form": SiReacthookform,
  "React Router": SiReactrouter,
  Redux: SiRedux,
  Cloudinary: SiCloudinary,
  Supabase: SiSupabase,
  Jest: SiJest,
  Playwright: FlaskConical,
  "jest-axe": Gauge,
  Lighthouse: Globe,
  Docker: SiDocker,
  Vercel: SiVercel,
  "GitHub Actions": SiGithubactions,
  Git: SiGit,
  PostgreSQL: SiPostgresql,
  "REST APIs": Radio,
  SignalR: Radio,
  "UX Research": Search,
  "Empathy Mapping": HeartHandshake,
  Figma: SiFigma,
  "Product Thinking": Lightbulb,
};

interface Props {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-3.5 h-3.5 shrink-0" }: Props) {
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
