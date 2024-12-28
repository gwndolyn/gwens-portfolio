import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";

const App = () => {
  // State for cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 }); // Position for light effect

  // Update cursor position
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updateLightPosition = () => {
      setLightPosition((prevPosition) => ({
        x: prevPosition.x + (cursorPosition.x - prevPosition.x) * 0.15, // Increased smoothing factor for smoother transition
        y: prevPosition.y + (cursorPosition.y - prevPosition.y) * 0.15, // Increased smoothing factor for smoother transition
      }));
      requestAnimationFrame(updateLightPosition); // Call the function again for the next frame
    };

    // Start the animation loop
    requestAnimationFrame(updateLightPosition);

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]); // Only run when cursor position changes

  return (
    <div className="relative h-full overflow-hidden antialiased">
      {/* Background container with fixed position */}
      <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Soft Lighting Effect */}
      <div
        style={{
          position: "fixed",
          top: lightPosition.y,
          left: lightPosition.x,
          transform: "translate(-50%, -50%)", // Center the light effect
          width: "150px", // Increased size for larger glow
          height: "150px", // Increased size for larger glow
          borderRadius: "50%", // Make it circular but with soft edges
          background: "rgba(120, 119, 198, 0.2)", // Base color
          boxShadow: "0 0 150px rgba(120, 119, 198, 0.7)", // Increased glow effect
          pointerEvents: "none", // Prevent mouse events
          transition: "background 0.3s ease, box-shadow 0.3s ease", // Smooth transition
          filter: "blur(30px)", // Increased blur for softer light effect
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
