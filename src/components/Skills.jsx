import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs, FaPython, FaJs, FaDatabase, FaJava, FaAws,
} from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiFirebase, SiTailwindcss, SiSwagger, SiPhp } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { AiOutlineDotNet } from "react-icons/ai";
import { motion } from "framer-motion";

// Icon floating animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  const technologies = [
    "FullStack Dev", "Machine Learning", "LLM", "Robotic Process Automation", "Salesforce CRM", "Cloud Computing", "Software Engineering", "Data Engineering", "AI Engineering", "Object-Oriented Programming", "Databases", "CI/CD", "DevOps", "API"
  ];

  const skills = [
    { icon: <FaPython className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-400" />, label: "Python", duration: 2.3 },
    { icon: <TbBrandCSharp className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-700" />, label: "C#", duration: 3.8 },
    { icon: <RiReactjsLine className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-400" />, label: "ReactJS", duration: 2.9 },
    { icon: <FaNodeJs className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500" />, label: "Node.js", duration: 4.1 },
    { icon: <SiTypescript className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600" />, label: "TypeScript", duration: 2.7 },
    { icon: <SiTailwindcss className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500" />, label: "Tailwind", duration: 2.7 },
    { icon: <SiSwagger className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500" />, label: "Swagger UI", duration: 2.7 },
    { icon: <FaJs className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400" />, label: "JavaScript", duration: 3.3 },
    { icon: <FaJava className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-500" />, label: "Java", duration: 3.5 },
    { icon: <SiSpringboot className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-700" />, label: "SpringBoot", duration: 3.1 },
    { icon: <AiOutlineDotNet className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-700" />, label: "ASP.NET CORE", duration: 3.1 },
    { icon: <PiMicrosoftExcelLogoFill className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-800" />, label: "Excel", duration: 2.4 },
    { icon: <FaDatabase className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sky-700" />, label: "SQL", duration: 4.2 },
    { icon: <FaAws className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500" />, label: "AWS", duration: 3.7 },
    { icon: <SiFirebase className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500" />, label: "Firebase", duration: 3.7 },
    { icon: <SiPhp className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500" />, label: "PHP", duration: 3.7 },
  ];

  return (
    <section className="pt-20" id="skills">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-10 text-center text-4xl"
        >
          Skills
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                variants={iconVariants(skill.duration)}
                initial="initial"
                animate="animate"
                whileHover={{
                  scale: 1.2,
                  filter: "grayscale(0%) brightness(1.5)",
                }}
                className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
                style={{ filter: "grayscale(100%)" }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-center mt-4">{skill.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center"
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-pink-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
