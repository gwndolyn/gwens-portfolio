import { useEffect, useState } from "react";
import { HERO } from "../constants";
import roundedTextImg from "../assets/rounded-text.png";
import resumePic from "../assets/resumepic.png";
import { HiArrowDown } from "react-icons/hi";
import { FaHandPointUp } from "react-icons/fa"; // Importing hand icon
import { motion } from "framer-motion";
import ComputersCanvas from "./Computers";
import Social from "./Social";
import Folder from "./Folder";


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
    const fullText = "GWENDOLYN LEONG"; // Ensure this is defined here
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
      const aboutPosition = aboutSection.offsetTop; // Get the position relative to the document
      window.scrollTo({
        top: aboutPosition - 80, // Add your offset here
        behavior: "smooth", // Smooth scroll
      });
    }
  };
  
  

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/16uuoqBe_9a1eyrAkCkX8eIq4ruM1eHKW/view?usp=sharing",
      "_blank"
    );
  };

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // check once on mount
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <section className="relative flex flex-col md:flex-row min-h-screen items-center" id="home" style={{ height: "100vh" }}>
      <div className="w-full md:w-1/2 relative z-10 mt-32 lg:-mt-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 mb-4 p-2 text-5xl font-bold md:text-5xl lg:text-[4rem]"
        >
          {typingText}
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
          <Social />
          I am a{" "}
          <span className="text-pink-400 font-bold">Software Engineer</span>{" "}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 1, 1, 1],
              scale: [0.8, 1.1, 1, 1, 1],
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 1],
            }}
            className="ml-10 flex flex-col items-center gap-2"
          >
            <Folder
              color="#FF95C6"
              size={0.6}
              items={[
                <div
                  key="resume"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResumeClick();
                  }}
                  className="flex items-center justify-center h-full cursor-pointer hover:scale-105 transition-transform p-1 overflow-hidden"
                >
                  <img
                    src={resumePic}
                    alt="Resume Preview"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ]}
            />
            <span className="text-xs text-neutral-400">Click to view Resume</span>
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[300px] lg:h-[500px] relative z-10 flex justify-center items-center">
      {!isMobile && <ComputersCanvas />}



        {!isMobile && visible && (
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