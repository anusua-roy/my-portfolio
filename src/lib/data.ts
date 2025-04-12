// src/lib/data.ts

import { Project } from "@/components/ProjectCard";

export const HERO_HEADING = `Hi, I'm`;
export const HERO_NAME = "Anusua Roy";
export const HERO_TAGLINE = `A Frontend Engineer crafting impactful and elegant user interfaces. I love building scalable apps, testing them rigorously, and exploring AI and full-stack innovation.`;

export const HERO_CTA = [
  {
    label: "View Projects",
    href: "/projects",
    outline: false,
  },
  {
    label: "Let’s Connect",
    href: "/#contact",
    outline: true,
  },
];

export const ABOUT_TEXT = `I’m a detail-oriented frontend engineer with 3+ years of experience,
leading React teams, building scalable MFE architectures, and integrating complex logic into beautiful UI.
Currently exploring AI-powered full-stack tools and prompt engineering.`;

export const EXPERIENCE = [
  {
    company: "Tiger Analytics",
    role: "Senior Engineer",
    duration: "Jan 2025 – Present",
    work: [
      "Frontend lead on data-heavy React dashboards.",
      "Building scalable features and mentoring junior devs.",
    ],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst",
    duration: "Oct 2020 – Dec 2024",
    work: [
      "Built enterprise React dashboards with MUI and AG Grid.",
      "Handled MFE architecture and testing with RTL + Jest.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Financial Tracker App",
    description:
      "Tracks savings, targets, and investments using Google Sheets as backend.",
    techStack: ["Next.js", "Tailwind", "Zustand", "ECharts"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "NodeReact Studio",
    description:
      "AI-powered tool to scaffold full-stack apps using React and Node.",
    techStack: ["React", "Node.js", "MSW", "Jest"],
    githubUrl: "",
  },
  {
    title: "Weather Insight",
    description: "Clean UI with Open-Meteo API and Tailwind components.",
    techStack: ["React", "Tailwind", "API"],
    githubUrl: "",
  },
  {
    title: "Testing Framework Setup",
    description: "React Testing Library + MSW setup for frontend projects.",
    techStack: ["Jest", "MSW", "RTL"],
    githubUrl: "",
  },
];

export const SOCIAL_LINKS = [
  { href: "https://github.com/yourusername", icon: "github" },
  { href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { href: "https://twitter.com/yourusername", icon: "twitter" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
];


export const FOOTER_CTA = {
  label: "Let’s connect",
  href: "/#contact",
};
export const FOOTER_NOTE = `© ${new Date().getFullYear()} Anusua Roy. Built with ❤️ using Next.js`;
