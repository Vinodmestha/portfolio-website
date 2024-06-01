// import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import gg from "@/public/gg.png";
import ggcs from "@/public/ggcs.png";
import asianit from "@/public/asianit.png";
import jagdai from "@/public/jagdai.png";
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
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
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
            "I worked as a React Js developer for 3 years in 1 job. I also upskilled to the front-end web application.",
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
        url: 'https://globalgarner.com/'
    },
    {
        title: "GGCS",
        description:
            "Working Hard to Make Digital Marketing Easy Together. Empower Your Business With The Digital Marketing Landscape Through Innovative Strategies And Data-Driven Insights.",
        tags: ["Vite.js", "Tailwind CSS"],
        imageUrl: ggcs,
        url: "https://ggconsultancy.services/"
    },
    {
        title: "JagDai Food",
        description:
            "Designed and developed a static website for a business using React Js & Tailwind CSS. Created a responsive layout to ensure optimal viewing across devices. Implemented interactive elements such as image sliders and contact forms. Worked closely with the client to achieve their desired aesthetic and functionality, delivering the project on time and within budget.",
        tags: ["Vite.js", "Tailwind CSS"],
        imageUrl: jagdai,
        url: "https://jagdai.ggconsultancy.services/"
    },
    {
        title: "Freelancing Project - AsianHope IT Company",
        description:
            "Asian Hope is the fastest growing Manpower solutions, Certified Training' & Career counselling provider in India, with specialized service.",
        tags: ["vite.js", "Tailwind CSS"],
        imageUrl: asianit,
        url: "https://asianhopeit.com/"
    },
    {
        title: "Seat, meal and baggage selection",
        description:
            "Flight seat, meal and baggage selection with json dummy data",
        tags: ["React", "Tailwind CSS"],
        imageUrl: seat,
        url: "https://special-service-mu.vercel.app/"
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Git",
    "Tailwind",
    //   "Prisma",
    //   "MongoDB",
    "Redux",
    //   "GraphQL",
    //   "Apollo",
    // "Expruess",
    //   "PostgreSQL",
    //   "Python",
    //   "Django",
    "Material UI",
    "Ant Design",
    "Framer Motion",
]
