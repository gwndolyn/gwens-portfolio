import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence and motion
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Volunteering from "./components/Volunteering";
import ErrorPage from "./components/ErrorPage"; // Import the ErrorPage component

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updateLightPosition = () => {
      setLightPosition((prevPosition) => ({
        x: prevPosition.x + (cursorPosition.x - prevPosition.x) * 0.15,
        y: prevPosition.y + (cursorPosition.y - prevPosition.y) * 0.15,
      }));
      requestAnimationFrame(updateLightPosition);
    };

    requestAnimationFrame(updateLightPosition);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);

  return (
    <Router>
      <div className="relative h-full overflow-hidden antialiased">
        {/* Background container with fixed position */}
        <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,149,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Soft Lighting Effect */}
        <div
          style={{
            position: "fixed",
            top: lightPosition.y,
            left: lightPosition.x,
            transform: "translate(-50%, -50%)",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255, 149, 204, 0.2)",
            boxShadow: "0 0 150px rgba(255, 149, 204, 0.7)",
            pointerEvents: "none",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
            filter: "blur(30px)",
          }}
        ></div>

        {/* Navbar will now be included inside the Routes */}
        <Navbar />

        {/* Wrap Routes with AnimatePresence to enable smooth transitions */}
        <AnimatePresence mode="wait">
          <Routes>
            {/* Route for Home page */}
            <Route
              path="/"
              element={
                <motion.div
                  className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Hero />
                  <About />
                  <Skills />
                  <Qualifications />
                  <Projects />
                  <Contact />
                </motion.div>
              }
            />

            {/* Route for Certifications */}
            <Route
              path="/certifications"
              element={
                <motion.div
                  className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Certifications />
                  <Contact />
                </motion.div>
              }
            />

            {/* Route for Volunteering */}
            <Route
              path="/volunteering"
              element={
                <motion.div
                  className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Volunteering />
                  <Contact />
                </motion.div>
              }
            />

            {/* Catch-all Route for 404 - Page Not Found */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
