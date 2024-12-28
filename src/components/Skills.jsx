import { RiReactjsLine } from "react-icons/ri";       // React
import { FaNodeJs, FaPython, FaJs, FaDatabase, FaFireAlt, FaCuttlefish } from "react-icons/fa"; // Node.js, Python, JS, SQL, Firebase, C
import { SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";         // C++
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
  return (
    <section className="pt-20" id="skills">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1}}
            initial={{ opacity: 0}}
            transition={{ duration: 1 }}
          className="my-20 text-center text-4xl"
        >
          Skills
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex items-center justify-center gap-6 flex-nowrap"
        >
          {/* Icon 1 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.3)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaCuttlefish className="text-5xl text-blue-600 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">C</p>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.8)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <CgCPlusPlus className="text-5xl text-white lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">C++</p>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.9)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaJs className="text-5xl text-yellow-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">JavaScript</p>
          </div>

          {/* Icon 4 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(4.1)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <SiTypescript className="text-5xl text-blue-600 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">TypeScript</p>
          </div>

          {/* Icon 5 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaPython className="text-5xl text-blue-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Python</p>
          </div>

          {/* Icon 6 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.3)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <RiReactjsLine className="text-5xl text-cyan-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">ReactJS</p>
          </div>

          {/* Icon 7 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(4.5)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaNodeJs className="text-5xl text-green-500 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Node.js</p>
          </div>

          {/* Icon 8 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(2.2)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaFireAlt className="text-5xl text-orange-400 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">Firebase</p>
          </div>

          {/* Icon 9 */}
          <div className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(3.7)} // floating effect
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }} // Light up and remove grayscale on hover
              className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
              style={{ filter: "grayscale(100%)" }} // Initially in grayscale
            >
              <FaDatabase className="text-5xl text-sky-700 lg:text-6xl" />
            </motion.div>
            <p className="text-center mt-4">SQL</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
