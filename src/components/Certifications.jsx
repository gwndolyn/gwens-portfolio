import React from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";

const certificationsData = [
  {
    category: "Web Development",
    certs: [
      {
        name: "React Certification",
        image: "path_to_react_cert_image.jpg",
        description: "Certified React Developer",
      },
      {
        name: "JavaScript Mastery",
        image: "path_to_js_cert_image.jpg",
        description: "Mastery of JavaScript fundamentals and advanced concepts",
      },
    ],
  },
  {
    category: "Data Science",
    certs: [
      {
        name: "Python for Data Science",
        image: "path_to_python_cert_image.jpg",
        description: "Complete guide to Python for Data Science applications",
      },
      {
        name: "Machine Learning Specialist",
        image: "path_to_ml_cert_image.jpg",
        description: "Advanced machine learning techniques and models",
      },
    ],
  },
];

const Certifications = () => {
  const handleCategoryClick = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20" id="certifications">
      <div className="border-b border-neutral-800 pb-4">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="text-4xl text-center my-8"
        >
          Certifications
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4 fixed top-1/2 transform -translate-y-1/2 left-0 p-6 text-neutral-400 text-sm">
          <div className="border-l-4 border-pink-400 pl-4">
            <h3 className="font-bold text-xl mb-6">Categories</h3>
            {certificationsData.map((category, idx) => (
              <p
                key={idx}
                className="cursor-pointer mb-4 hover:text-pink-400"
                onClick={() => handleCategoryClick(category.category.replace(/\s+/g, ''))}
              >
                {category.category}
              </p>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-3/4 lg:ml-1/4 space-y-8 p-4 lg:p-8">
          {certificationsData.map((category, idx) => (
            <div
              key={idx}
              id={category.category.replace(/\s+/g, '')}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold">{category.category}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.certs.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="relative group overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center p-4">
                        <p className="font-bold">{cert.name}</p>
                        <p className="text-sm mt-2">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
