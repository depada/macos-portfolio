const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 2026",
    title: "Archy AI — AI Architectural Visualization SaaS",
    image: "/images/blog1.png",
    link: "https://archy-ai.vercel.app/",
  },
  {
    id: 2,
    date: "Jan 2025",
    title: "Zentry-Inspired Interactive Website",
    image: "/images/blog2.png",
    link: "https://gaming-awards.vercel.app/",
  },
  {
    id: 3,
    date: "Dec 2024",
    title: "Xora — Modern UI/UX SaaS Website",
    image: "/images/blog3.png",
    link: "https://saas-landing-page-tau-seven.vercel.app/",
  },
  {
    id: 4,
    date: "Oct 2024",
    title: "Patient Management Application",
    image: "/images/blog1.png",
    link: "https://pms-sable.vercel.app/",
  },
];

const techStack = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Production Support",
    ],
  },
  {
    category: "Data & Messaging",
    items: ["SQL", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Maven", "CI/CD", "Performance Optimization"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Debugging", "Incident Resolution"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/depada",
  },
  {
    id: 2,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://pavan-kolipaka-kp.vercel.app/",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "mailto:Kolipaka.pavan.kp@gmail.com",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/pavan-kolipaka/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Accenture — Associate Software Engineer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[10vh] left-8",
      children: [
        {
          id: 1,
          name: "accenture-experience.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Associate Software Engineer • Hyderabad • 1.5 years",
          description: [
            "Led JDK 8 to 11 upgrade and backend migrations across 5 modules and 14 services; deprecated ~30% legacy APIs, standardized Maven/Docker/CI, doubled deployment frequency, and improved release success from 92% to 99.3%.",
            "Designed custom annotations for validation, logging, and error handling; adopted across services, reducing boilerplate by ~1,100 LOC (24%) and duplicate defects by 28%.",
            "Optimized high-traffic APIs: reduced p50 latency by 50% and p95 by 43%, scaled peak throughput 2.2x, and lowered infrastructure cost per request by 17%.",
            "Engineered a release-validation tool that cut manual checks by 75% (45m to 11m) and increased pre-rollout defect detection by 35%; adopted by 3 teams in 2 sprints.",
            "Resolved 40+ P2/P3 incidents, reduced MTTR by 46% (2.4h to 1.3h), authored 12 runbooks, and mentored 4 engineers to unblock 8 inter-team deliveries.",
          ],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About Pavan",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Backend-focused Software Engineer",
      description: [
        "I'm Pavan Kolipaka, a backend-focused software engineer with 1.5 years of experience building Java and Spring Boot microservices, production-grade APIs, and SQL-backed systems.",
        "At Accenture, I led JDK 8 to 11 upgrades and backend migrations across 5 modules and 14 services, improving release success from 92% to 99.3%.",
        "I designed reusable validation, logging, and error-handling annotations to reduce boilerplate and improve service reliability at scale.",
        "I specialize in API performance tuning, debugging production incidents, and cloud-ready microservice delivery with strong operational ownership.",
        "Alongside backend engineering, I also build polished frontend experiences with React.js and Next.js, enabling effective end-to-end product delivery.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
