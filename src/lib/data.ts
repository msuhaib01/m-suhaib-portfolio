import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vibesImg from "@/../public/vibes.png";
import traccImg from "@/../public/tracc.png";
import realifyImg from "@/../public/realify.png";
import espaceImg from "@/../public/espace.png";
import cybernetImg from "@/../public/cybernet.png";
import { SiIbm, SiUpwork } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BS CS - National University of Science and Technology ",
    location: "Islamabad, PK",
    description:
      "I will graduate from the highest ranking and hardest to get into Engineering and Technology University in all of Pakistan with a bachelor's of Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Stanford Machine Learning - Professional Certification ",
    location: "Islamabad, PK",
    description:
      "In this Professional Certificate, learners developed and built multiple supervised and unsupervised machine learning algorithms using best industry practices.",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },

  {
    title: "Software Engineer - N-Rays International",
    location: "Islamabad, PK",
    description:
      "I work at N-Rays International which is a Software Development Agency. I'm in charge of software development, cloud development and solutions archtecture. I've built multiple fullstack projects for clients using NextJS, and also SPA React.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Jan - Current",
  },
  {
    title: "Founder - BlackSky International",
    location: "London, UK",
    description:
      "BlackSky Internation is a Cloud and IT Services provider for Enterprises based out of 128 City Road, London, EC1V 2NX.	We provide full stack software development, cloud management, infrastructure management, and DevOps IT Solutions to B2B Clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Oct - Current",
  },

  {
    title: "Upwork - Freelancer",
    location: "Islamabad, PK",
    description:
      "I freelance on upwork and have so far done projects inexcess of $200+. I focus on Fullstack application development and Cloud Solutions Architecture.",
    icon: React.createElement(SiUpwork),
    date: "2023 Oct - Current",
  },
  {
    title: "Goldman Sachs - Software Engineering - Virtual Work Experience",
    location: "Islamabad, PK",
    description:
      "Cracked passwords and suggested security improvements as a Governance Analyst at Goldman Sachs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 July - 2024 June",
  },
  {
    title: "IBM Full Stack Software Developer - Professional Certification",
    location: "Islamabad, PK",
    description:
      "I completed the IBM Full Stack Software Developer Professional Certification, a 12 course long online certification program that is recommended to take from 3 to 4 months to complete. Built multiple fullstack projects and learned all the critical information required to develop applications.",
    icon: React.createElement(SiIbm),
    date: "",
  },
  {
    title: "IBM DevOps and Software Engineering - Professional Certification",
    location: "Islamabad, PK",
    description:
      "I completed the IBM Full Stack Software Developer Professional Certification, a 12 course long online certification program that is recommended to take from 3 to 4 months to complete. Built multiple fullstack projects and learned all the critical information required to develop applications.",
    icon: React.createElement(SiIbm),
    date: "",
  },
  {
    title:
      "Director Web and IT - NUST Research, Innovation & Commercialisation Alumni Homecoming (Fullstack)",
    location: "Islamabad, PK",
    description:
      "I worked as a team lead incharge of 2 other web developers to maintain, analyze and code both on existing legacy code base and a new site for the event. Designed the website in Figma and then statically generated it.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Oct - 2024 Jan",
  },
  {
    title: "Executive Web and IT - NUST Orientation (Frontend)",
    location: "Islamabad, PK",
    description:
      "Worked on a team to build the NUST Orientation website using NextJS. Styled and built many components and pages on the frontend.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Jul - 2023 Sept 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ESpace",
    description:
      "Fullstack property management website with a custom integrated CMS built using NextJS, Tailwind and Firebase. There is a full functional search feature, admin panel and image uploading.",
    tags: ["Paid Project", "React", "Next.js", "Tailwind", "Firebase"],
    imageUrl: espaceImg,
  },
  {
    title: "CyberNet",
    description:
      "Built the highly reactive frontend dashboard for a cyber security company on contract. Integrating both English and French support",
    tags: ["Paid Project", "React", "Redux", "Tailwind", "Chart.js"],
    imageUrl: cybernetImg,
  },
  {
    title: "Vibes",
    description:
      "Built a React front end that takes a users picture and then uses a machine learning model we trained to detect the users emotion to recommend a song.",
    tags: ["Ai Project", "TypeScript", "React", "Python", "Flask"],
    imageUrl: vibesImg,
  },
  {
    title: "Word Analytics",
    description:
      "Built a web app to detect AI generated text using React for frontend and Flask, Google Colab for hosting and Google Drive for file posting, uses my very own CURSED stack.",
    tags: [
      "Ai Project",
      "TypeScript",
      "React",
      "Python",
      "Flask",
      "C.U.R.S.E.D",
    ],
    imageUrl: realifyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "Firebase",
  "MongoDB",
  "Redux",
  "RTK Query",
  // "GraphQL",
  // "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "Go",
  "Docker",
  "Kubernetes",
  "Azure",
  "GCP",
  "AWS",
] as const;
