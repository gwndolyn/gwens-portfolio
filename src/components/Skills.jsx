import { RiReactjsLine } from "react-icons/ri"; // React
import { FaNodeJs, FaPython, FaJs, FaDatabase, FaFireAlt, FaCuttlefish, FaCode, FaJava, FaMicrosoft, FaAws } from "react-icons/fa"; // Node.js, Python, JS, SQL, Firebase, C, Java, Microsoft, AWS
import { SiTypescript } from "react-icons/si"; // TypeScript
import { CgCPlusPlus } from "react-icons/cg"; // C++
import { PiMicrosoftExcelLogoFill } from "react-icons/pi"; // Excel
import { SiSpringboot } from "react-icons/si"; // SpringBoot
import { SiFirebase } from "react-icons/si"; // Firebase
import { SiTailwindcss } from "react-icons/si"; //Tailwind
import { SiSwagger } from "react-icons/si"; //Swagger
import { AiOutlineDotNet } from "react-icons/ai"; //asp
import { TbBrandCSharp } from "react-icons/tb"; //c#
import { motion } from "framer-motion";

// Icon floating animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  const technologies = [
    "FullStack Dev", "Machine Learning", "LLM", "Robotic Process Automation", "Salesforce CRM", "Cloud Computing", "Software Engineering", "Data Engineering", "AI Engineering", "Object-Oriented Programming", "Databases", "CI/CD", "DevOps", "API" // Repeat as many times as needed
  ];
  
  return (
    <section className="pt-20" id="skills">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-20 text-center text-4xl"
        >
          Skills
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {/* Python */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.3)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaPython className="text-5xl text-blue-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Python</p>
          </div>

          {/* C# */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.8)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <TbBrandCSharp className="text-5xl text-purple-700 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">C#</p>
          </div>

          {/* ReactJS */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.9)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <RiReactjsLine className="text-5xl text-cyan-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">ReactJS</p>
          </div>

          {/* NodeJS */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(4.1)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaNodeJs className="text-5xl text-green-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Node.js</p>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <SiTypescript className="text-5xl text-blue-600 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">TypeScript</p>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <SiTailwindcss className="text-5xl text-blue-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Tailwind</p>
          </div>

          {/* Swagger */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <SiSwagger className="text-5xl text-green-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Swagger UI</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.3)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaJs className="text-5xl text-yellow-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">JavaScript</p>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.5)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaJava className="text-5xl text-red-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Java</p>
          </div>

          {/* SpringBoot */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.1)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <SiSpringboot className="text-5xl text-green-700 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">SpringBoot</p>
          </div>

          {/* ASP */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.1)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <AiOutlineDotNet className="text-5xl text-purple-700 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">ASP.NET CORE</p>
          </div>

          {/* Excel */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.4)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <PiMicrosoftExcelLogoFill className="text-5xl text-green-800 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Excel</p>
          </div>

          {/* SQL */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(4.2)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaDatabase className="text-5xl text-sky-700 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">SQL</p>
          </div>

          {/* AWS */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaAws className="text-5xl text-orange-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">AWS</p>
          </div>

          {/* Firebase */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.2,
                filter: "grayscale(0%) brightness(1.5)",
              }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <SiFirebase className="text-5xl text-orange-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Firebase</p>
          </div>

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
