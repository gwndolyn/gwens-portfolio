import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { certificationsData } from "../constants"; // Import certifications data from constants

const Certifications = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility on mobile
  const [selectedCert, setSelectedCert] = useState(null); // State for the selected certificate

  // Ensure the page scrolls to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Handle category click to scroll smoothly to that category
  const handleCategoryClick = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = -105; // Offset to avoid navbar cover
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the sidebar on mobile after clicking an item
      setIsSidebarOpen(false);
    }
  };

  // Handle clicking on the Certifications header to scroll to the top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Close the sidebar on mobile after clicking an item
    setIsSidebarOpen(false);
  };

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="pt-20" id="certifications">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="border-b border-neutral-800 pb-4">
          <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-4xl text-center my-8 cursor-pointer"
            onClick={handleScrollToTop} // Scroll to top when clicked
          >
            Certifications
          </motion.h2>
        </div>

        <div className="flex">
          {/* Sidebar for laptop */}
          <motion.div
            className={`lg:w-1/4 fixed top-1/4 left-0 p-6 text-neutral-400 text-sm z-10 transition-all duration-300 hidden lg:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-l-4 border-pink-300 pl-4">
              <h3
                className="font-bold text-xl mb-6 hover:text-pink-300"
                onClick={handleScrollToTop}
              >
                Certifications
              </h3>
              {certificationsData.map((category, idx) => (
                <p
                  key={idx}
                  className="cursor-pointer mb-4 hover:text-pink-300"
                  onClick={() =>
                    handleCategoryClick(category.category.replace(/\s+/g, ""))
                  } // Click to scroll to section
                >
                  {category.category}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-3/4 lg:ml-[25%] space-y-8 p-4">
            {certificationsData.map((category, idx) => (
              <motion.div
                key={idx}
                id={category.category.replace(/\s+/g, "")}
                className="space-y-4"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold pt-8 pb-4">{category.category}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.certs.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="relative group overflow-hidden rounded-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedCert(cert)} // Set selected certificate
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center p-4">
                          <p className="font-bold">{cert.name}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged view */}
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)} // Close modal on backdrop click
          >
            <div
              className="relative  p-6 rounded-md max-w-3xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="absolute top-4 right-4 bg-red-500 text-white font-extrabold p-2 rounded"
                onClick={() => setSelectedCert(null)} // Close modal on button click
              >
                X
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center mt-4 text-lg font-semibold">
                {selectedCert.name}
              </p>
            </div>
          </motion.div>
        )}

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking the backdrop
          />
        )}
        <motion.div
          className={`fixed top-0 left-0 h-full bg-black/40 bg-opacity-70 p-6 text-white text-sm z-30 w-64 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="border-l-4 border-pink-300 pl-4 mt-20">
            <h3
              className="font-bold text-xl mb-6 hover:text-pink-300"
              onClick={handleScrollToTop}
            >
              Certifications
            </h3>
            {certificationsData.map((category, idx) => (
              <p
                key={idx}
                className="cursor-pointer mb-4 hover:text-pink-300"
                onClick={() =>
                  handleCategoryClick(category.category.replace(/\s+/g, ""))
                }
              >
                {category.category}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden fixed bottom-4 left-4 z-40">
          <button
            className="p-4 bg-pink-300 text-white rounded-full flex items-center justify-center shadow-lg"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
