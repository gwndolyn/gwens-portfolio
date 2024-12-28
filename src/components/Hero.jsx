import { useEffect, useState } from "react";
import { HERO } from "../constants";
import roundedTextImg from "../assets/rounded-text.png";
import { HiArrowDown } from "react-icons/hi";
import { FaHandPointUp } from "react-icons/fa"; // Importing hand icon
import { motion } from "framer-motion";
import ComputersCanvas from "./Computers";

const Hero = () => {
  const [visible, setVisible] = useState(true); // State for visibility
  const [typingText, setTypingText] = useState(""); // State for typed text
  const typingSpeed = 150; // Speed of typing effect
  const circleStarImg = "/circle-star.svg";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev); // Toggle visibility
    }, 4000); // Change interval timing as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Typing effect for "Computer Engineer"
  useEffect(() => {
    const fullText = "Computer Engineer"; // Ensure this is defined here
    let index = 0;

    const type = () => {
      // Use the functional form of setTypingText to prevent stale state issues
      setTypingText((prev) => {
        // If the previous text length is less than fullText length, append the next character
        if (prev.length < fullText.length) {
          return prev + fullText.charAt(prev.length);
        } else {
          return prev; // Return the previous text if already complete
        }
      });

      index++;
      if (index < fullText.length) {
        setTimeout(type, typingSpeed); // Call function recursively
      }
    };

    type(); // Start typing effect

    return () => {
      setTypingText(""); // Reset typing text on unmount
    };
  }, []); // Only run on mount, no dependency on `fullText`

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1lzKAgjbBt7qHPINRJ35ixihok1IY61Lx/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="relative flex flex-col md:flex-row min-h-screen items-center" id="home" style={{ height: "100vh" }}>
      <div className="w-full md:w-1/2 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]"
        >
          {HERO.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="p-2 text-3xl tracking-tighter lg:text-4xl"
        >
          {HERO.greet}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 p-2 text-xl"
        >
          I am a{" "}
          <span className="text-pink-500 font-bold">{typingText}</span>{" "}
          passionate about using technology to solve real-world problems.
        </motion.p>

        <div className="flex items-center mx-auto xl:mx-0 relative z-10">
          <motion.div
            onClick={scrollToAbout}
            className="relative w-[110px] h-[110px] flex justify-center items-center bg-cover bg-center group cursor-pointer"
            style={{ backgroundImage: `url(${circleStarImg})` }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <img
              src={roundedTextImg}
              width={85}
              height={85}
              alt="Rounded Text"
              className="w-full h-full max-w-[85px] max-h-[85px] relative z-10 animate-spin-slow"
            />
            <div
              onClick={scrollToAbout}
              className="absolute inset-0 flex justify-center items-center cursor-pointer transition-all duration-300 z-20"
            >
              <HiArrowDown className="text-3xl group-hover:translate-y-2" />
            </div>
          </motion.div>

          <motion.button
            onClick={handleResumeClick}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 1, 0, 1, 1],
              scale: [1, 1.05, 1, 1, 1],
            }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 1],
            }}
            className="ml-10 px-10 py-2 border-2 border-white rounded-lg bg-transparent text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300 hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-500 hover:text-white hover:border-white shadow-md"
          >
            View Resume
          </motion.button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[500px] relative z-10 flex justify-center items-center">
        <ComputersCanvas />

        {visible && (
          <motion.div
            className="absolute xs:bottom-10 bottom-5 w-full flex flex-col items-center fade-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, delay: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="text-white text-4xl cursor-pointer"
            >
              <FaHandPointUp /> {/* Right-pointing Hand Icon */}
            </motion.div>
            <span className="text-white">Scroll to view</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
