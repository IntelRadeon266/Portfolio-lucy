import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineMobile,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IService, ISkill, IProject } from "./types";

export const services: IService[] = [
  {
    id: 1,
    title: "Frontend Web Development",
    about:
      "I build beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, <b>React js</b> and <b>Nextjs</b>",
    Icon: RiComputerLine,
  },
  {
    id: 2,
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Node js</b> and <b>Expressjs</b> and <b>Nestjs</b>",
    Icon: FaServer,
  },
  {
    id: 3,
    title: "Frontend Mobile Development",
    about:
      "I build beautiful and scalable cross platform (hybrid) mobile applications, using either <b>React Native</b> or <b>Flutter</b>",
    Icon: AiOutlineMobile,
  },
  {
    id: 4,
    title: "API Development",
    about:
      "I develop robust REST and GraphQL APIs with <b>Node js</b>, <b>Expressjs</b> and <b>Nextjs</b>",
    Icon: AiOutlineApi,
  },
  {
    id: 5,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>Leet Code</b> and <b>Github</b>",
    Icon: MdDeveloperMode,
  },
  {
    id: 6,
    title: "Product Development",
    about:
      "Hack around user experience to deliver the bast <b>customer</b> journey for your users",
    Icon: AiOutlineAntDesign,
  },
];

export const languages: ISkill[] = [
  {
    name: "JavaScript",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "React Native",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "TailwindCss",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "Flutter",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "Python",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Nodejs",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Express js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Nest js",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  { name: "Git", level: "80%", Icon: BsCircleFill },
  { name: "Click Up", level: "80%", Icon: BsCircleFill },
  { name: "Zoom", level: "90%", Icon: BsCircleFill },
  { name: "Google Meet", level: "99%", Icon: BsCircleFill },
  { name: "Figma", level: "45%", Icon: BsCircleFill },
  { name: "VSCode", level: "90%", Icon: BsCircleFill },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Commercial Blog",
    description:
      "This web app show statistics and progress of commercial businesses to the intended reach, showcasing their services and about",
    category: ["Tailwindcss"],
    image_path: "/images/boostrapcss.jpg",
    github_url: "https://github.com/Adiel-Thairu/steffoverflow-website-in-tailwindcss",
    deployed_url: "https://subtle-blancmange-75eeeb.netlify.app",
    key_techs: ["Tailwindcss", "javascript", "Html"],
  },
  {
    id: 2,
    name: "ISP-map project",
    description:
      "A Full Stack website integrated in a telecommunication's website to help customers search for reliable isp service near them for services",
    category: ["javascript", "loopback"],
    image_path: "/images/ispmaps.jpg",
    github_url: "https://github.com/Adiel-Thairu/Google-maps-Isp",
    deployed_url: "https://ispexperiencenetpap.netlify.app",
    key_techs: ["JavaScript", "Material UI", "Html", "Css"],
  },
  {
    id: 3,
    name: "Homeshopping website",
    description:
      "A responsive landing webpage showcasing smart technology for modern homes",
    category: ["Tailwindcss", "javascript"],
    image_path: "/images/homesmart.jpg",
    github_url: "https://github.com/Adiel-Thairu/Modern-landing-page-in-TailwindCss",
    deployed_url: "https://modernlandingpagetailwindcss.netlify.app",
    key_techs: ["Css", "Styled Component", "TailwindCss", "Bootstrap"],
  },
  {
    id: 4,
    name: "Food Sale app",
    description:
      "a responsive organic food webpage showcasing different varieties of healthy organic food available",
    category: ["vuejs"],
    image_path: "/images/organo.jpg",
    github_url: "https://github.com/Adiel-Thairu/organic-landing-page-in-tailwindcss",
    deployed_url: "https://organiclandingpage.netlify.app",
    key_techs: ["Javascript", "Css", "Vuejs", "TailwindCss"],
  },
  {
    id: 5,
    name: "Hardware Online System",
    description:
      "A full-stack Online hardware system integrated with paypal options and add to cart functionality",
    category: ["python"],
    image_path: "/images/Screenshot (451).png",
    github_url: "#",
    
    key_techs: ["Javascript", "Python"],
  },
  {
    id: 6,
    name: "Automative Website",
    description:
      "A web-app built with wordpress to accomodate all interfaces",
    category: ["wordpress"],
    image_path: "/images/site3 ss2.png",
    github_url: "#",
    // deployed_url: "#",
    key_techs: ["Wordpress", "Api", "Elementor"],
  },
  {
    id: 7,
    name: "Insitutional Website",
    description:
      "A simple minimalistic webiste template built with adobeXD",
    category: ["adobeXD"],
    image_path: "/images/educational.jpg",
    github_url: "#",
    // deployed_url: "#",
    key_techs: [
      "AdobeXD",
      "Animated Text Kit",
      "Cloud storage",
      "font",
    ],
  },
  {
    id: 8,
    name: "Professional Website",
    description:
      "A professional website built using tailwind components and vuejs.",
    category: ["Tailwindcss", "javascript", "vuejs"],
    image_path: "/images/site1 ss1.png",
    github_url: "https://github.com/Adiel-Thairu/HomeUItestpage",
    deployed_url: "https://hometestuiwebpage.netlify.app",
    key_techs: ["JavaScript", "Tailwindcss", "Html", "Vuejs"],
  },
  {
    id: 9,
    name: "Portfolio website",
    description:
      "My Portofolio website that shows my experience, a bio about me and also a list of some of my projects",
    category: ["react", "nextjs", "typescript"],
    image_path: "/images/portfolio.png",
    github_url: "https://github.com/Adiel-Thairu/portfolio",
    deployed_url: "https://adieltharu.vercel.app/",
    key_techs: [
      "React",
      "Nextjs",
      "TypeScript",
      "Framer Motion",
      "TailwindCss",
    ],
  },
];
