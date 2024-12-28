import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import projectImage1 from "../assets/bdaybuddy.jpeg";
import projectImage2 from "../assets/weatherforecast.jpeg";
import projectImage3 from "../assets/website.jpeg";
import projectImage4 from "../assets/mbot.png";
import projectImage5 from "../assets/alex.png";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#qualify" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "GWENDOLYN LEONG",
  greet: "",
  description:
    "I am a Software Engineer with a passion for exploring how technology can solve real-world problems.",
};

export const ABOUT = [
  "Whether it's through coding, systems design, or tackling technical challenges, I’m driven by the potential to create innovative solutions. I have a particular interest in areas that promote inclusivity and accessibility, which fuels my curiosity and dedication to learning and developing impactful projects.",
  "When I'm not on my computer, I love going to the gym, playing sports, and volunteering. Hearing stories inspires me, as I believe there’s unique value in everyone. I’m always excited to contribute, grow, and learn from the experiences and insights others bring."
];

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Jan 2025",
    role: "Web Tech Associate",
    company: "SMU",
    description: ``,
    technologies: ["Figma"],
  },
  {
    year: "Sep 2024 - Oct 2024",
    role: "Student Assistant",
    company: "SMU Office of Research",
    description: ``,
    technologies: ["Excel", "Data Analysis"],
  },
  {
    year: "Jun 2024 - Jun 2025",
    role: "Data Engineer",
    company: "Luxoft",
    description: ``,
    technologies: ["Big Data", "Financial Markets", "Data Architecture"],
  },
  {
    year: "Mar 2024 - Present",
    role: "Python Tutor",
    company: "The Logic Coders",
    description: ``,
    technologies: ["Python"],
  },
  {
    year: "Mar 2023 - Mar 2024",
    role: "Software Developer",
    company: "OCBC",
    description: ``,
    technologies: ["ReactJS", "SpringBoot", "WSO2", "Swagger UI"],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Systems",
    institution: "Singapore Management University",
    duration: "2024 - 2028",
    description: [
      "• Web Tech Associate for SMU Patron's Day 2025",
      "• Student Assistant for SMU Office of Research",
    ],
  },
  {
    degree: "Diploma in Information Technology, Minor in Global Readiness",
    institution: "Ngee Ann Polytechnic",
    duration: "2021-2024",
    description:
      "",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "BdayBuddy",
    description:
      "BdayBuddy is a user-friendly app that enhances the gift-giving experience by offering personalized suggestions based on the recipient's hobbies and interests, making it easy to find the perfect gift for birthdays and special occasions while saving time and reducing stress. It is built using React, Node.js, and Firebase.",
    image: projectImage1,
    githubLink: "https://github.com/Stevexchia/BdayBuddy",
  },
  {
    id: 2,
    name: "PuddleJumpers",
    description:
      "A simple weather app that provides real-time updates based on your city or location. Powered by React and the OpenWeather API, it offers quick access to temperature, weather conditions, and more in an easy-to-use interface.",
    image: projectImage2,
    githubLink: "https://github.com/Stevexchia/PuddleJumpers",
  },
  {
    id: 3,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage3,
    githubLink: "https://github.com/Stevexchia/steve-portfolio",
  },
  {
    id: 4,
    name: "mBot",
    description:
      "mBot navigates mazes by detecting paths and avoiding obstacles. It uses color detection, IR sensors, and ultrasonic sensors to find the quickest route through any challenge.",
    image: projectImage4,
    githubLink: "https://github.com/Stevexchia/mBot",
  },
  {
    id: 5,
    name: "Alex",
    description:
      "Alex locates survivors in tough environments. It uses LiDAR for mapping, powered by Arduino and Raspberry Pi 3, along with heat signature detectors, color sensors, and a buzzer to assist in rescue missions.",
    image: projectImage5,
    githubLink: "https://github.com/Stevexchia/Alex",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "mailto:gwenxdolyn@gmail.com",
    icon: <MdEmail fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/gwenxdolyn/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/gwndolyn/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/gwndolyn",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
