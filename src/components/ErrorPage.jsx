import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  // Animation Variants
  const animationVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white text-center">
      {/* 404 Animation */}
      <motion.div
        className="text-8xl font-bold mb-4"
        variants={animationVariants}
        initial="initial"
        animate="animate"
      >
        404
      </motion.div>

      {/* Message */}
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>

      {/* Redirect Button */}
      <button
        onClick={handleGoHome}
        className="px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-400 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
