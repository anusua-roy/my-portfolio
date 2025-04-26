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
    resumeUrl: "https://your-resume-link",
    email: "your@email.com",
};

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

export const siteMetadata = {
    title: "Anusua Roy – React Developer Portfolio",
    description:
        "Portfolio of Anusua Roy – Micro-Frontend specialist, ReactJS & TypeScript Developer, AI learner, and CI/CD explorer. Browse projects, experience, and get in touch.",
};

export const socialLinks = [
    { href: "https://github.com/anusua-roy", icon: "github" },
    { href: "https://linkedin.com/in/anusua-roy", icon: "linkedin" },
];

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/resume.pdf", external: true },
];

export const certifications = [
    "Microsoft Certified: Azure Fundamentals",
    "Prompt Engineering for Beginners – Udemy",
    "Microfrontends with React – Udemy",
    "The Ultimate Redux Toolkit Course – Udemy",
    "GraphQL by Example – Udemy",
    "Agile Crash Course – Udemy",
];

export const awards = [
    {
        title: "Working as One",
        issuer: "Cognizant",
        date: "May 2023",
        description: "Recognized for contributions to the CREOS project — praised for UAT coordination, timely delivery, and product quality.",
    },
    {
        title: "Always Striving, Never Settling",
        issuer: "Cognizant",
        date: "Aug 2022",
        description: "Modernized UI for home loan platform using MFE, built reusable component libraries with AG Grid and Material UI.",
    },
    {
        title: "Working as One",
        issuer: "Cognizant",
        date: "Aug 2022",
        description: "Built reusable AG Grid with custom sorting, filtering, searching in 1 day. Delivered first iteration of UI modernization.",
    },
    {
        title: "Always Striving, Never Settling",
        issuer: "Cognizant",
        date: "Dec 2021",
        description: "Earned Azure certification in record time. Delivered monitoring platform for a global economic organization.",
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
