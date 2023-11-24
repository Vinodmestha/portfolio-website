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
            "I worked as a React Js developer for 2 years in 1 job. I also upskilled to the front-end web application.",
        // icon: React.createElement(CgWorkAlt),
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
            "Cashback, e-commerce, social-network, local business, travel and hotel booking, bill pay and recharge, franchise and make mycart.",
        tags: ["React", "Tailwind", "Redux"],
        imageUrl: gg,
    },
    {
        title: "GGCS",
        description:
            "Working Hard to Make Digital Marketing Easy Together. Empower Your Business With The Digital Marketing Landscape Through Innovative Strategies And Data-Driven Insights.",
        tags: ["Vite.js", "Tailwind CSS"],
        imageUrl: ggcs,
    },
    {
        title: "Seat, meal and baggage selection",
        description:
            "Flight seat, meal and baggage selection with json dummy data",
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
