import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vibesImg from "@/../public/vibes.png";
import traccImg from "@/../public/tracc.png";
import realifyImg from "@/../public/realify.png";
import espaceImg from "@/../public/espace.png";
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
      "I will graduate from NUST with a bachelor's of Computer Science , the highest ranking and hardest to get into Engineering and Technology University in all of Pakistan.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "President - N-Rays International",
    location: "Islamabad, PK",
    description:
      "I run my own Software Development Agency as it's president. I'm in charge of software development, client acquisition, and all other core business functions. Increased total revenues from 0 to 240,000Rs. I've built multiple fullstack projects for clients using NextJS, and also SPA React.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Jan - Current",
  },
  {
    title: "Upwork - Freelancer",
    location: "Islamabad, PK",
    description:
      "I freelance on upwork and have so far done projects inexcess of $100+. I focus on Fullstack application development using NextJS and React.",
    icon: React.createElement(SiUpwork),
    date: "2023 Jan - Current",
  },
  {
    title: "IBM Full Stack Software Developer - Professional Certification",
    location: "Islamabad, PK",
    description:
      "I completed the IBM Full Stack Software Developer Professional Certification, a 12 course long online certification program that is recommended to take from 3 to 4 months to complete. Built multiple fullstack projects and learned all the critical information required to develop applications.",
    icon: React.createElement(SiIbm),
    date: "2023 Jan - Current",
  },
  {
    title:
      "Director Web and IT - NUST Research, Innovation & Commercialisation Alumni Homecoming (Fullstack)",
    location: "Islamabad, PK",
    description:
      "I worked as a team lead incharge of 2 other web developers to maintain, analyze and code both on existing legacy code base and a new site for the event. Designed the website in Figma and then statically generated it.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Executive Web and IT - NUST Orientation (Frontend)",
    location: "Islamabad, PK",
    description:
      "Worked on a team to build the NUST Orientation website using NextJS. Styled and built many components and pages on the frontend.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: traccImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: vibesImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: realifyImg,
  },
  {
    title: "Word Analyticse",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: espaceImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "RTK Query",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Go",
] as const;
