// src/lib/data.ts

export const HERO_HEADING = "Hi, I'm";
export const HERO_NAME = "Anusua Roy";
export const HERO_TAGLINE =
  "Frontend Engineer passionate about building clean, intelligent UIs with React, MFE, and TypeScript. Always exploring new tools, pushing boundaries, and sprinkling AI where it matters.";

export const HERO_CTA = [
  { label: "View Projects", href: "/projects" },
  { label: "Let’s Connect", href: "/#contact", outline: true },
];

export const ABOUT_TEXT = `
Hey! I’m Anusua — a frontend engineer with a thing for sleek UI, solid architecture, and nerdy tech rabbit holes.
By day, I build scalable micro-frontend apps. By night, I’m either tweaking my personal projects, playing with AI agents, 
or chasing the perfect dev setup. From React and TypeScript to FastAPI and CI/CD, I love making ideas work — fast and beautifully.

Right now, I’m deep diving into Vite, GraphQL, and FastAPI while dreaming up reusable GPT tools and deploying full-stack projects. 
Let’s build something awesome.
`;

export const EXPERIENCE = [
  {
    title: "Senior Engineer",
    company: "Tiger Analytics",
    location: "Bengaluru, India",
    duration: "Dec 2024 – Present",
    points: [
      "Built data-heavy dashboards with ECharts and TanStack Table.",
      "Improved UI responsiveness by 50% for analytics platform.",
      "Implemented global i18n localization (EN/JP).",
      "Managed Redux-driven state and frontend performance tuning.",
    ],
  },
  {
    title: "Associate",
    company: "Cognizant",
    location: "Bengaluru, India",
    duration: "Aug 2021 – Dec 2024",
    points: [
      "Built micro-frontend apps using Module Federation + React.",
      "Created shared NPM UI libraries with Material UI and AG Grid.",
      "Boosted test coverage to 80%+ using Jest and RTL.",
      "Worked across multiple BFSI clients delivering scalable UIs.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "MCA, Computer Applications (CGPA: 9.3)",
    school: "Kalyani Government Engineering College",
    year: "2018–2021",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "University of Calcutta",
    year: "2015–2018",
  },
];

export const PROJECTS = [
  {
    title: "My Portfolio (This Site!)",
    description:
      "A sleek developer portfolio built with Next.js, Tailwind, and framer-motion. Features dynamic theming, a custom contact form, and a flexible content structure to evolve with future plans.",
    techStack: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/anusua-roy/my-portfolio",
    liveUrl: "https://my-portfolio-anusua.vercel.app", // update if deployed
  },
  {
    title: "Tweet App",
    description:
      "A full-stack social app using ASP.NET, MongoDB, and React. Includes tweet post/edit/delete, API tests with Swagger + NUnit, and frontend tests with Jest.",
    techStack: [
      "React",
      "ASP.Net",
      "MongoDB",
      "Material UI",
      "Jest",
      "Swagger",
    ],
    githubUrl: "https://github.com/anusua-roy/Tweet-App-UI",
  },
  {
    title: "NodeReact Studio",
    description:
      "A custom GPT that scaffolds full-stack apps using Node.js and React — including modular file structure, API routing, and full Jest/MSW test coverage. Built to help devs bootstrap production-ready apps with zero setup.",
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "Jest",
      "MSW",
      "RTL",
      "Prompt Engineering",
      "Custom GPT",
    ],
    liveUrl:
      "https://chatgpt.com/g/g-67dd162411c88191b1fdca844828abff-nodereact-studio",
    githubUrl: "",
  },
];

export const FOOTER_NOTE = `© ${new Date().getFullYear()} Anusua Roy. Built with ❤️ using Next.js`;
export const FOOTER_CTA = { label: "Let’s Connect", href: "/#contact" };

export const SITE_METADATA = {
  title: "Anusua Roy – React Developer Portfolio",
  description:
    "Portfolio of Anusua Roy – Micro-Frontend specialist, ReactJS & TypeScript Developer, AI learner, and CI/CD explorer. Browse projects, experience, and get in touch.",
};

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/anusua-roy",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/anusua-roy",
    icon: "linkedin",
  },
];

export const CERTIFICATIONS = [
  "Microsoft Certified: Azure Fundamentals",
  "Prompt Engineering for Beginners – Udemy",
  "Microfrontends with React – Udemy",
  "The Ultimate Redux Toolkit Course – Udemy",
  "GraphQL by Example – Udemy",
  "Agile Crash Course – Udemy",
];

export const AWARDS = [
  {
    title: "Working as One",
    issuer: "Cognizant",
    date: "May 2023",
    description:
      "Recognized for contributions to the CREOS project — praised for UAT coordination, timely delivery, and product quality.",
  },
  {
    title: "Always Striving, Never Settling",
    issuer: "Cognizant",
    date: "Aug 2022",
    description:
      "Modernized UI for home loan platform using MFE, built reusable component libraries with AG Grid and Material UI.",
  },
  {
    title: "Working as One",
    issuer: "Cognizant",
    date: "Aug 2022",
    description:
      "Built reusable AG Grid with custom sorting, filtering, searching in 1 day. Delivered first iteration of UI modernization.",
  },
  {
    title: "Always Striving, Never Settling",
    issuer: "Cognizant",
    date: "Dec 2021",
    description:
      "Earned Azure certification in record time. Delivered monitoring platform for a global economic organization.",
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "AG Grid",
      "DevExpress",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "ASP.NET Core",
      "Java Spring Boot",
      "MongoDB",
      "SQL",
    ],
  },
  {
    category: "DevOps",
    items: ["Azure", "CI/CD", "GitHub Actions", "Git", "Docker"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "MSW", "NUnit", "TDD"],
  },
  {
    category: "AI Tools",
    items: [
      "Prompt Engineering",
      "OpenAI",
      "Custom GPTs",
      "LangChain",
      "Ollama",
    ],
  },
  {
    category: "Tools",
    items: [
      "GraphQL",
      "Redux",
      "Zustand",
      "Framer Motion",
      "Webpack",
      "VS Code",
    ],
  },
];


export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
];
