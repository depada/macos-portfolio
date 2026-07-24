const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "safari",
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
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "SAP Case Studies",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "SAP Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "SAP BTP • Managed RAP",
    title: "Purchase Requisition Approval Application",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    id: 2,
    date: "ABAP on HANA • CDS • ALV",
    title: "Sales Order Exception Monitoring Dashboard",
    image: "/images/blog2.png",
    link: "#",
  },
  {
    id: 3,
    date: "SAP Integration Suite • CPI",
    title: "SAP Order Integration and Reprocessing Flow",
    image: "/images/blog3.png",
    link: "#",
  },
  {
    id: 4,
    date: "ABAP Performance Tuning",
    title: "High-Volume Sales Order Performance Optimization",
    image: "/images/blog1.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "SAP Development",
    items: [
      "ABAP",
      "OO ABAP",
      "ABAP on HANA",
      "Modern ABAP Syntax",
      "Open SQL",
    ],
  },
  {
    category: "S/4HANA Development",
    items: [
      "CDS Views",
      "Managed RAP",
      "OData V2/V4",
      "SAP Gateway",
      "Fiori Elements",
    ],
  },
  {
    category: "Interfaces & Integration",
    items: ["BAPI", "RFC", "IDoc/ALE", "SAP AIF", "CPI Monitoring"],
  },
  {
    category: "Enhancements & Forms",
    items: [
      "BAdI",
      "User & Customer Exits",
      "Enhancement Framework",
      "Adobe Forms",
      "Smart Forms",
    ],
  },
  {
    category: "Performance & Support",
    items: ["ST05", "SAT", "ATC & SCI", "ABAP Debugger", "Production Support"],
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
      name: "Accenture — SAP ABAP on HANA Developer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[10vh] left-8",
      children: [
        {
          id: 1,
          name: "accenture-sap-experience.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle:
            "Associate Software Engineer • SAP ABAP on HANA Developer • Hyderabad",
          description: [
            "Delivered 22 SAP technical objects for an S/4HANA greenfield implementation, including ALV reports, CDS Views, managed RAP services, OData services, RFC/BAPI interfaces, IDoc interfaces, enhancements and forms; 21 objects were accepted without UAT rework.",
            "Developed 8 CDS Views, 2 managed RAP services exposed through OData V4 and 2 SEGW-based OData V2 services supporting 3 SAP Fiori applications, reducing average data-retrieval time by 32%.",
            "Integrated SAP with internal and external applications through RFC/BAPI, IDoc and OData, maintaining more than 98% successful processing across approximately 12,000 business records per day.",
            "Automated 5 SAP SD/MM business validations using BAdIs, exits and the Enhancement Framework, saving 24 manual user-hours per month and reducing data-correction requests by 27%.",
            "Optimized 9 custom programs, resolved 42 production and hypercare incidents and supported 12 transport cycles, reducing average report runtime by 40% and mean incident resolution time by 34%.",
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
      subtitle: "SAP ABAP on HANA Developer • S/4HANA Technical Consultant",
      description: [
        "I'm Pavan Kolipaka, an SAP ABAP on HANA Developer with 2 years of experience delivering technical solutions for an S/4HANA greenfield implementation.",
        "My experience covers RICEFW development, OO ABAP, CDS Views, managed RAP, OData services, interfaces, enhancements, forms, performance tuning and production support.",
        "At Accenture, I delivered 22 SAP technical objects, with 21 accepted without UAT rework through structured technical reviews, ATC checks, developer testing and documented test evidence.",
        "I specialize in building reliable SAP backend services, optimizing high-volume programs, debugging production issues and integrating SAP through BAPI, RFC, IDoc, OData and SAP AIF.",
        "I also build portfolio solutions using SAP BTP ABAP Environment, RAP, CDS, Fiori Elements and SAP Integration Suite to strengthen my modern SAP and ABAP Cloud capabilities.",
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
