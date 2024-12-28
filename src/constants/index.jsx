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
  name: "STEVE CHIA",
  greet: "Hello there! 👋🏻",
  description:
    "I am a Computer Engineer with a passion for exploring how technology can solve real-world problems.",
};

export const ABOUT = [
  "Whether it's through coding, systems design, or tackling technical challenges, I’m driven by the potential to create innovative solutions. I have a particular interest in areas that promote inclusivity and accessibility, which fuels my curiosity and dedication to learning and developing impactful projects.",
  "When I'm not on my computer, I love going to the gym, playing sports, and volunteering. Hearing stories inspires me, as I believe there’s unique value in everyone. I’m always excited to contribute, grow, and learn from the experiences and insights others bring."
];

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Aug 2024",
    role: "Fulfilment Associate",
    company: "SC Fashion Trading",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions with MongoDB, ensuring efficient data handling. Collaborated with product managers to prioritize features and enhancements, optimizing user experience and functionality.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "Jan 2020 - Apr 2023",
    role: "Officer",
    company: "Singapore Armed Forces",
    description: `Led operational teams and managed resources effectively to optimize performance and readiness. Developed and executed training programs, fostering teamwork and discipline. Recognized for strategic problem-solving and guiding teams through complex challenges, contributing to the organization's success.`,
    technologies: [],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "National University of Singapore",
    duration: "2023 - 2027",
    description:
      "Currently pursuing a Bachelor’s degree in Computer Engineering with a second major in Management and Innovation & Design Programme. The curriculum covers a wide range of topics, including software engineering, systems architecture, data structures, and algorithms. Involvement in various technical projects and hackathons enhances practical skills in programming, project management, and teamwork.",
  },
  {
    degree: "PCME",
    institution: "Nanyang Junior College",
    duration: "2019 - 2020",
    description:
      "Completed studies in the PCME (Physics, Chemistry, Mathematics, and Economics) stream, emphasizing analytical and quantitative skills. Participated in mathematical competitions and collaborative projects, fostering a strong foundation in scientific principles and problem-solving methodologies.",
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
    href: "mailto:stevexchia@gmail.com",
    icon: <MdEmail fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/users/stxvx__",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/stxvx__/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Stevexchia/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/steve-chia-8023591ba/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
