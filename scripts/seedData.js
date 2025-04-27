// scripts/seedData.js

export const heroSection = {
    heroHeading: "Hi, I'm",
    heroName: "Anusua Roy",
    taglineLine1: "Frontend Engineer who builds fast, scalable UIs with React, MFE, and a sprinkle of AI.",
    taglineLine2: "Curious about systems, obsessed with polish, and always tinkering with new tools.",
    highlights: "React, MFE, AI",
    aboutText: `Hi, I’m Anusua — a frontend engineer who loves clean design, smart architecture, and building things that just work.

I specialize in React, TypeScript, and Micro-Frontend systems, and I’ve built everything from enterprise UIs to AI-infused tools.
Outside of work, I’m constantly exploring — whether that’s experimenting with FastAPI backends, creating full-stack GPT agents,
or refining the dev setup I probably break too often.

Lately, I’ve been diving into GraphQL, Vite, and no-code automation tools. My favorite projects are the ones that balance performance, UX, and a bit of fun.

Let’s create something cool — fast, scalable, and unapologetically well-crafted.`,
    email: "anusua.roy05@gmail.com",
};

export const siteMetadata = {
    title: "Anusua Roy – React Developer Portfolio",
    description:
        "Portfolio of Anusua Roy – Micro-Frontend specialist, ReactJS & TypeScript Developer, AI learner, and CI/CD explorer. Browse projects, experience, and get in touch.",
};

export const projects = [
    {
        title: "My Portfolio (This Site!)",
        description: "A sleek developer portfolio built with Next.js, Tailwind, and framer-motion. Features dynamic theming, a custom contact form, and a flexible content structure to evolve with future plans.",
        techStack: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
        githubUrl: "https://github.com/anusua-roy/my-portfolio",
        liveUrl: "https://my-portfolio-anusua-roys-projects.vercel.app/",
        categories: ["Frontend"],
        domain: "Personal",
        visibility: "Public",
    },
    {
        title: "Tweet App",
        description: "A full-stack social media app using ASP.NET Web API, MongoDB, and React. Features tweet post/edit/delete, backend Swagger docs + NUnit tests, and frontend unit testing with Jest.",
        techStack: [
            "React", "ASP.Net Core", "MongoDB", "Material UI", "Swagger", "Jest", "NUnit", "TypeScript"
        ],
        githubUrl: "https://github.com/anusua-roy/Tweet-App-UI",
        extraRepos: [
            { label: "Backend (ASP.NET Service)", url: "https://github.com/anusua-roy/Tweet-App-Service" },
        ],
        categories: ["Full Stack", "Backend"],
        domain: "Social",
        visibility: "Public",
    },
    {
        title: "NodeReact Studio",
        description: "A custom GPT that scaffolds full-stack apps using Node.js and React — including modular file structure, API routing, and full Jest/MSW test coverage.",
        techStack: [
            "React", "Node.js", "TypeScript", "Jest", "MSW", "RTL", "Prompt Engineering", "Custom GPT"
        ],
        liveUrl: "https://chat.openai.com/g/g-67dd162411c88191b1fdca844828abff-nodereact-studio",
        categories: ["AI", "Tooling", "Full Stack"],
        domain: "Dev Tools",
        visibility: "Public",
    },
    {
        title: "Financial Tracker",
        description: "A private personal finance tracker built with Next.js, Zustand, and Google Sheets. Tracks expenses, savings, SIPs, targets, and reminders — complete with charts, projections, and a full custom UI.",
        techStack: [
            "Next.js", "Tailwind CSS", "Zustand", "ECharts", "TanStack Table", "Google Sheets", "TypeScript"
        ],
        isPrivate: true,
        categories: ["Full Stack", "Finance"],
        domain: "Finance",
        visibility: "Private",
    },
];


export const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Material UI", "AG Grid", "DevExpress"] },
    { category: "Backend", items: ["FastAPI", "Node.js", "ASP.NET Core", "Java Spring Boot", "MongoDB", "SQL"] },
    { category: "DevOps", items: ["Azure", "CI/CD", "GitHub Actions", "Git", "Docker"] },
    { category: "Testing", items: ["Jest", "React Testing Library", "MSW", "NUnit", "TDD"] },
    { category: "AI Tools", items: ["Prompt Engineering", "OpenAI", "Custom GPTs", "LangChain", "Ollama"] },
    { category: "Tools", items: ["GraphQL", "Redux", "Zustand", "Framer Motion", "Webpack", "VS Code"] },
];

export const certifications = [
    { name: "Microsoft Certified: Azure Fundamentals" },
    { name: "Prompt Engineering for Beginners – Udemy" },
    { name: "Microfrontends with React – Udemy" },
    { name: "The Ultimate Redux Toolkit Course – Udemy" },
    { name: "GraphQL by Example – Udemy" },
    { name: "Agile Crash Course – Udemy" },
];

export const awards = [
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
];

export const education = [
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

export const experience = [
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

export const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/resume.pdf", external: true },
];

export const socialLinks = [
    { href: "https://github.com/anusua-roy", icon: "github" },
    { href: "https://linkedin.com/in/anusua-roy", icon: "linkedin" },
];
