import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gg from "@/public/gg.png";
import ggcs from "@/public/ggcs.png";
import seat from "@/public/seatApp.png";

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
];

export const experiencesData = [
    //   {
    //     title: "Graduated bootcamp",
    //     location: "Miami, FL",
    //     description:
    //       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    //     icon: React.createElement(LuGraduationCap),
    //     date: "2019",
    //   },
    {
        title: "React Js Developer",
        location: "Bengaluru, Karnataka",
        description:
            "I worked as a React Js developer for 2 years in 1 job. I also upskilled to the front end .",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - Present",
    },
    //   {
    //     title: "Full-Stack Developer",
    //     location: "Houston, TX",
    //     description:
    //       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    //     icon: React.createElement(FaReact),
    //     date: "2021 - present",
    //   },
]

export const projectsData = [
    {
        title: "Global Garner",
        description:
            "I worked as a React JS developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Tailwind", "Redux"],
        imageUrl: gg,
    },
    {
        title: "GGCS",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["Vite.js", "Tailwind CSS"],
        imageUrl: ggcs,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Tailwind CSS"],
        imageUrl: seat,
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    //   "Node.js",
    "Git",
    "Tailwind",
    //   "Prisma",
    //   "MongoDB",
    "Redux",
    //   "GraphQL",
    //   "Apollo",
    "Express",
    //   "PostgreSQL",
    //   "Python",
    //   "Django",
    "Framer Motion",
]
