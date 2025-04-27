// src/lib/data.ts

export const HERO_CTA = [
  { label: "View Projects", href: "/projects" },
  { label: "Let’s Connect", href: "/#contact", outline: true },
];

export const PROJECTS = [
  {
    title: "My Portfolio (This Site!)",
    description:
      "A sleek developer portfolio built with Next.js, Tailwind, and framer-motion. Features dynamic theming, a custom contact form, and a flexible content structure to evolve with future plans.",
    techStack: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/anusua-roy/my-portfolio",
    liveUrl: "https://my-portfolio-anusua-roys-projects.vercel.app/",
    categories: ["Frontend"],
    domain: "Personal",
    visibility: "Public",
  },
  {
    title: "Tweet App",
    description:
      "A full-stack social media app using ASP.NET Web API, MongoDB, and React. Features tweet post/edit/delete, backend Swagger docs + NUnit tests, and frontend unit testing with Jest.",
    techStack: [
      "React",
      "ASP.Net Core",
      "MongoDB",
      "Material UI",
      "Swagger",
      "Jest",
      "NUnit",
      "TypeScript",
      "Full Stack",
    ],
    githubUrl: "https://github.com/anusua-roy/Tweet-App-UI",
    liveUrl: "",
    extraRepos: [
      {
        label: "Backend (ASP.NET Service)",
        url: "https://github.com/anusua-roy/Tweet-App-Service",
      },
    ],
    categories: ["Full Stack", "Frontend", "Backend", "ASP.NET"],
    domain: "Social",
    visibility: "Public",
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
      "https://chat.openai.com/g/g-67dd162411c88191b1fdca844828abff-nodereact-studio",
    githubUrl: "",
    categories: ["AI", "Tooling", "Custom GPT", "Full Stack"],
    domain: "Dev Tools",
    visibility: "Public",
  },
  {
    title: "Financial Tracker",
    description:
      "A private personal finance tracker built with Next.js, Zustand, and Google Sheets. Tracks expenses, savings, SIPs, targets, and reminders — complete with charts, projections, and a full custom UI.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "ECharts",
      "TanStack Table",
      "Google Sheets",
      "TypeScript",
    ],
    githubUrl: "",
    liveUrl: "",
    isPrivate: true,
    categories: ["Full Stack", "Data-Driven", "Finance", "Private"],
    domain: "Finance",
    visibility: "Private",
  },
  {
    title: "Todo API (Node.js)",
    description:
      "A clean and modular REST API built with Node.js and MongoDB. Features CRUD operations, request validation, Swagger documentation, centralized error handling, and JWT-ready structure.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Swagger",
      "Validation",
      "REST API",
    ],
    githubUrl: "https://github.com/anusua-roy/todo-app-api",
    liveUrl: "",
    categories: ["Backend", "API", "Node.js"],
    domain: "Productivity",
    visibility: "Public",
  },
  {
    title: "GraphQL Job Board",
    description:
      "A full-stack job listing app with a React frontend and GraphQL backend. The client uses Apollo Client for querying and navigation, while the server runs on Node.js + Apollo Server.",
    techStack: [
      "React",
      "GraphQL",
      "Apollo Client",
      "Apollo Server",
      "Node.js",
      "Express",
      "Full Stack",
    ],
    githubUrl: "https://github.com/anusua-roy/graphql-job-board-client",
    liveUrl: "",
    extraRepos: [
      {
        label: "Backend (GraphQL Server)",
        url: "https://github.com/anusua-roy/graphql-job-board-server",
      },
    ],
    categories: ["Full Stack", "Frontend", "Backend", "GraphQL"],
    domain: "Jobs",
    visibility: "Public",
  },
  {
    title: "Todo API (Spring Boot)",
    description:
      "A simple TODO backend application built using Java Spring Boot. Includes REST APIs for task creation, update, and deletion with JPA-based persistence and clean structure.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Web",
      "Spring Data JPA",
      "Maven",
      "Backend API",
    ],
    githubUrl: "https://github.com/anusua-roy/todo-api-spring-boot",
    liveUrl: "",
    categories: ["Backend", "Java", "Spring Boot"],
    domain: "Productivity",
    visibility: "Public",
  },
];

export const FOOTER_NOTE = `© ${new Date().getFullYear()} Anusua Roy. Built with ❤️ using Next.js`;
export const FOOTER_CTA = { label: "Let’s Connect", href: "/#contact" };

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

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
];
