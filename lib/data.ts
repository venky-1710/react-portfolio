import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import phonebookImg from "@/public/phonebook.png";
import stressImg from "@/public/stress-level-predection.png";
import covidImg from "@/public/cov-dashboard.png";

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
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    location: "KIET - Korangi",
    description:
      "Aspiring AI engineer pursuing B.Tech in Computer Science and Engineering with AI specialization at KIET College.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Higher Secondary Education(M.P.C)",
    location: "Sri Chaitanya - Kakinada",
    description:
      "I completed my intermediate education at Sri Chaitanya College, where I specialized in the M.P.C (Mathematics, Physics, and Chemistry) branch.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Secondary Education",
    location: "CAMP - Ramachandrapuram",
    description:
      "I completed my secondary education (S.S.C) at Costal Andhra Medium Public School, graduating in 2019",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
] as const;

export const projectsData = [
  {
    title: "PhoneBook-MERN Stack",
    description:
      "PhoneKeeper is a sleek and efficient contact management application built using the MERN-stack.",
    tags: ["React", "Node.js", "MongoDB","express", "mern-stack"],
    imageUrl: phonebookImg,
  },
  {
    title: "Stress Level Predictor",
    description:
      "Stress Level Predictor is a web application that utilizes machine learning to predict an individual's stress level.",
    tags: ["Machine-learning", "python-flask", "numpy", "pandas", "scikit-learn"],
    imageUrl: stressImg,
  },
  {
    title: "COVID-Dashboard",
    description:
      "A responsive React-based COVID-19 dashboard offering real-time data visualization. Designed for intuitive user experience, providing easy-to-understand pandemic statistics and updates.",
    tags: ["React"],
    imageUrl: covidImg,
  },
] as const;

export const skillsData = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express",
  "React",
  "Flask",
  "Numpy",
  
] as const;
