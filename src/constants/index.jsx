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

import cert1 from "../assets/certs png/AWS Cloud Solutions-1.png";
import cert2 from "../assets/certs png/AWS Fundamentals-1.png";
import cert3 from "../assets/certs png/brainhack.png";
import cert4 from "../assets/certs png/Coursera Google Project-1.png";
import cert5 from "../assets/certs png/Cybersecurity-1.png";
import cert6 from "../assets/certs png/Edusave.png";
import cert7 from "../assets/certs png/Enterprise_Design_Thinking.png";
import cert8 from "../assets/certs png/Google Advanced Data-1.png";
import cert9 from "../assets/certs png/Google Business Intelligence-1.png";
import cert10 from "../assets/certs png/Google Digital Marketing & E-commerce-1.png";
import cert11 from "../assets/certs png/Google IT Automation-1.png";
import cert12 from "../assets/certs png/Google UX Design-1.png";
import cert13 from "../assets/certs png/GoogleDataAnalyticsCertificate-1.png";
import cert14 from "../assets/certs png/IBM AI Engineering-1.png";
import cert15 from "../assets/certs png/IBM Data Engineering-1.png";
import cert16 from "../assets/certs png/IBM DevOps and Software Engineering-1.png";
import cert17 from "../assets/certs png/IT Support-1.png";
import cert18 from "../assets/certs png/np mentors cert-1.png";
import cert19 from "../assets/certs png/oip.png";
import cert20 from "../assets/certs png/Peer helper cert-1.png";
import cert21 from "../assets/certs png/Professional Scrum Master I-1.png";
import cert22 from "../assets/certs png/proid industry showcase-1.png";
import cert23 from "../assets/certs png/Shopee_Code_League.png";
import cert24 from "../assets/certs png/snowflake-1.png";
import cert25 from "../assets/certs png/sql-1.png";
import cert26 from "../assets/certs png/workato automation pro 1-1.png";
import cert27 from "../assets/certs png/AI foundations.png";
import cert28 from "../assets/certs png/RPA Developer Foundation-1.png";

import v1 from "../assets/volunteer/1.jpg";
import v2 from "../assets/volunteer/2.jpg";
import v3 from "../assets/volunteer/3.jpg";
import v4 from "../assets/volunteer/4.jpg";
import v5 from "../assets/volunteer/5.jpg";
import v6 from "../assets/volunteer/6.jpg";
import v7 from "../assets/volunteer/7.jpg";
import v8 from "../assets/volunteer/8.jpg";
import v9 from "../assets/volunteer/ocbc.jpg";
import v10 from "../assets/volunteer/9.jpg";


export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#qualify" },
  { label: "Projects", href: "/projects" },
  { label: "Volunteering", href: "/volunteering" },
  { label: "Certifications", href: "/certifications" },
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
    company: "SMU Patron's Day",
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
    degree: "Bachelor of Science, Information Systems",
    institution: "Singapore Management University",
    duration: "2024 - 2028",
    description: [
      "Web Tech Associate for SMU Patron's Day 2025",
      "Student Assistant for SMU Office of Research",
    ],
  },
  {
    degree: "Diploma in Information Technology, Minor in Global Readiness",
    institution: "Ngee Ann Polytechnic",
    duration: "2021-2024",
    description: [
      "NP Mentors Silver Award, 2022",
      "Certified Peer Helper, 2022",
      "Project ID Industry Showcase (Top 7 Teams in cohort), 2024",
      "Edusave Skills Award, 2024",
    ],
  },
];



export const PROJECT_TAGS = ["All", "Web Development", "Machine Learning", "RPA", "Mobile Apps", "Excel"];

export const PROJECTS = [
  {
    id: 1,
    name: "DSTA Brainhack 2024",
    description:
      "Participated in the TIL-AI Autonomous Robotics Challenge. Tasks included Automatic Speech Recognition (ASR), Natural Language Processing (NLP), and Vision-Language Model (VLM) tasks for autonomous target detection and drone takedown.",
    technologies: ["Google Cloud", "Colab", "Python", "HuggingFace"],
    image: "brainhack.png",
    githubLink: "",
    tags: ["AI", "Machine Learning", "Natural Language Processing", "Computer Vision"],
  },
  {
    id: 2,
    name: "OCBC Hackathon",
    description:
      "Developed a Digital Securities Product and Account Application with both a web and mobile application, along with database integration and data visualizations.",
    technologies: ["ASP.NET", "Android Studio", "SQL", "AWS", "Power BI"],
    image:"",
    githubLink: "https://gtgwendolyn.wixsite.com/website/ocbc",
    tags: ["Web Development", "Mobile Apps", "Hackathon"],
  },
  {
    id: 3,
    name: "Blacktag",
    description:
      "Designed and developed an e-commerce website using HTML, CSS, JavaScript, and APIs. Implemented dynamic functionality for a seamless user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "APIs"],
    image:"",
    githubLink: "https://smyyhzai.github.io/ID_blacktag_Website/index.html",
    tags: ["Web Development", "E-Commerce"],
  },
  {
    id: 4,
    name: "Expense Tracker",
    description:
      "Developed a personalized Monthly Expense Tracker using Microsoft Excel. Integrated dropdown menus, charts, and automated calculations for budgeting.",
    technologies: ["Microsoft Excel"],
    image:"",
    githubLink: "https://docs.google.com/spreadsheets/d/1gqsZkwWjw5JaK_Y8QwsuYg05Ni9S4OZy/edit?usp=sharing&ouid=102061921029976045401&rtpof=true&sd=true",
    tags: ["Finance", "Automation", "Excel"],
  },
  {
    id: 5,
    name: "GPA Calculator",
    description:
      "Created a GPA Calculator in Excel to help students calculate their GPA. Designed formulas, error-checking mechanisms, and user-friendly interfaces.",
    technologies: ["Microsoft Excel"],
    image:"",
    githubLink: "https://docs.google.com/spreadsheets/d/1fVEA-7P26Et5SzV413N758VSJ3RE3qUY/edit?usp=sharing&ouid=114436406465873239309&rtpof=true&sd=true",
    tags: ["Education", "Excel", "Automation"],
  },
  {
    id: 6,
    name: "Machine Learning Models",
    description:
      "Developed ensemble models to predict employee promotions and Airbnb prices. Achieved over 85% accuracy on both models.",
    technologies: ["Machine Learning"],
    image:"",
    githubLink: "https://github.com/gwndolyn/Machine-Learning-Assignment",
    tags: ["Machine Learning", "Data Science", "Prediction"],
  },
  {
    id: 7,
    name: "Natural Language Processing",
    description:
      "Used NLP and Text Analysis to extract keywords from BBC documents and predict categories using association rule mining.",
    technologies: ["Natural Language Processing"],
    image:"",
    githubLink: "https://github.com/gwndolyn/Applied-analytics-project",
    tags: ["Natural Language Processing", "Text Analysis", "Machine Learning"],
  },
  {
    id: 8,
    name: "Robotic Process Automation",
    description:
      "Developed automation using UIPath for Vestas Wind Co to scrape financial data, calculate matrices, generate visualizations, and send email reports.",
    technologies: ["RPA", "UIPath"],
    image:"",
    githubLink: "https://github.com/gwndolyn/RPA-uipath-assignment",
    tags: ["RPA", "Automation", "Data Visualization"],
  },
  {
    id: 9,
    name: "ZZ Fashion CRM",
    description:
      "Built a robust CRM website using ASP.NET Core MVC. Integrated features for customer data management, secure authentication, and CRUD operations.",
    technologies: ["C#", "ASP.NET Core MVC"],
    image:"",
    githubLink: "https://bitbucket.org/kamiislu/web2022apr_p02_t3/src/master/",
    tags: ["Web Development", "CRM", "C#"],
  },
];



export const certificationsData = [
  {
    category: "AI & Machine Learning",
    certs: [
      {
        name: "IBM AI Engineering Specialization",
        image: cert14,
      },
      {
        name: "Artificial Intelligence Foundations: Neural Networks",
        image: cert27,
      },
    ],
  },
  {
    category: "Data Engineering",
    certs: [
      {
        name: "Google Data Analytics Specialization",
        image: cert13,
      },
      {
        name: "Google Advanced Data Analytics Specialization",
        image: cert8,
      },
      {
        name: "IBM Data Engineering Specialization",
        image: cert15,
      },
      {
        name: "Snowflake",
        image: cert24,
      },
      {
        name: "The complete SQL Bootcamp",
        image: cert25,
      },
    ],
  },
  {
    category: "Cloud Computing",
    certs: [
      {
        name: "AWS Fundamentals Specialization",
        image: cert2,
      },
      {
        name: "AWS Cloud Solution Architect Specialization",
        image: cert1,
      },
    ],
  },
  {
    category: "Software Engineering & Development",
    certs: [
      {
        name: "IBM DevOps and Software Engineering Specialization",
        image: cert16,
      },
      {
        name: "Google IT Automation with Python Specialization",
        image: cert11,
      },
      {
        name: "Google UX Design",
        image: cert12,
      },
      {
        name: "UI Path RPA Developer Foundation",
        image: cert28,
      },
      {
        name: "Workato Automation Pro 1",
        image: cert26,
      },
    ],
  },
  {
    category: "Business & Analytics",
    certs: [
      {
        name: "Google Business Analytics Specialization",
        image: cert9,
      },
      {
        name: "Google Digital Marketing & E-commerce Specialization",
        image: cert10,
      },
    ],
  },
  {
    category: "Project Development",
    certs: [
      {
        name: "Google Project Management Specialization",
        image: cert4,
      },
      {
        name: "Professional Scrum Master I",
        image: cert21,
      },
      {
        name: "Enterprise Design Thinking Practitioner",
        image: cert7,
      },
    ],
  },
  {
    category: "Cybersecurity & IT Support",
    certs: [
      {
        name: "Google Cybersecurity Specialization",
        image: cert5,
      },
      {
        name: "Google IT Support Specialization",
        image: cert17,
      },
    ],
  },
  {
    category: "Hackathons",
    certs: [
      {
        name: "DSTA Brainhack 2024",
        image: cert3,
      },
      {
        name: "Shopee Code League 2022 – Participant",
        image: cert23,
      },
    ],
  },
  {
    category: "Other Certifications",
    certs: [
      {
        name: "Project ID Industry Showcase",
        image: cert22,
      },
      {
        name: "Edusave Skills Award 2024",
        image: cert6,
      },
      {
        name: "NP Mentors Silver Award",
        image: cert18,
      },
      {
        name: "Shenzhen Polytechnic OIP",
        image: cert19,
      },
      {
        name: "Certified Peer Helper",
        image: cert20,
      },
    ],
  },
];

export const VOLUNTEERING_ACTIVITIES = [
  {
    id: 9,
    title: "OCBC Cares",
    description: "Engaged in door knocking and distributed flyers to reach out to seniors living alone. Shared information about diverse active ageing programs and services offered by Lions Befrienders.",
    date: "Jul 2023",
    image: v9, // Replace with the actual image path if available
    organization: "Lions Befrienders",
  },
  {
    id: 4,
    title: "Volunteer Tutor",
    description: "Mentored primary school children at Care Corner Woodlands Centre, assisting with their school work on a weekly basis.",
    date: "Jun 2021 - Dec 2021",
    image: v2, // Replace with the actual image path if available
    organization: "Care Corner Singapore Ltd",
  },
  {
    id: 1,
    title: "Project XL in Excel",
    description: "Facilitated an event to teach children from Chaoyang School how to use Excel and its various functions.",
    date: "Sept 2022",
    image: v6, // Replace with the actual image path if available
    organization: "Chaoyang School",
  },
  {
    id: 2,
    title: "Project Rawr-tastic",
    description: "Organized activities for children and taught them how to create a dessert.",
    date: "Sept 2022",
    image: v5, // Replace with the actual image path if available
    organization: "Chinese Development Assistance Council",
  },
  {
    id: 3,
    title: "Volunteer",
    description: "Educated the elderly on creating photo collages and utilizing various functions in Google Photos.",
    date: "Jul 2022",
    image: v7, // Replace with the actual image path if available
    organization: "Yong-en Care Centre",
  },
  {
    id: 5,
    title: "Project Green Thumbs",
    description: "Hosted an online workshop teaching children how to make and care for their own terrarium.",
    date: "Sept 2021",
    image: v4, // Replace with the actual image path if available
    organization: "Care Corner Tasek Jurong Organisation",
  },
  {
    id: 6,
    title: "Project Interact",
    description: "Participated in bridging the generation gap by engaging with the elderly over Zoom, playing games, and teaching them how to use social media.",
    date: "Jun 2021",
    image: v3, // Replace with the actual image path if available
    organization: "VIA Project",
  },
  {
    id: 7,
    title: "Volunteer",
    description: "Planned and executed a class project, interacting with the elderly and organizing a donation drive for daily necessities.",
    date: "Mar 2019",
    image: v1, // Replace with the actual image path if available
    organization: "Lions Befrienders Senior Activity Centre",
  },
  {
    id: 8,
    title: "Volunteer",
    description: "Tutored underprivileged children and assisting in distributing Christmas packages to families in need.",
    date: "Dec 2018",
    image: v10, // Replace with the actual image path if available
    organization: "Brighton Connection Student Care Centre",
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
