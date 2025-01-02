import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { PROJECTS, PROJECT_TAGS } from "../constants";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState(["All"]);
  const location = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.includes("All")
    ? PROJECTS
    : PROJECTS.filter((project) =>
        project.tags.some((tag) => selectedTags.includes(tag))
      );

  // Handle tag selection
  const handleTagClick = (tag) => {
    if (tag === "All") {
      setSelectedTags(["All"]); // Reset to All if All is clicked
    } else {
      if (selectedTags.includes("All")) {
        setSelectedTags([tag]); // Replace All with the specific tag
      } else {
        if (selectedTags.includes(tag)) {
          // Deselect the tag
          const updatedTags = selectedTags.filter((t) => t !== tag);
          setSelectedTags(updatedTags.length === 0 ? ["All"] : updatedTags);
        } else {
          // Add the tag
          setSelectedTags([...selectedTags, tag]);
        }
      }
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTags(["All"]);
  };

  return (
    <section className="pt-20" id="projects">
      {/* Header */}
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
            className="text-3xl text-center my-8"
          >
            Projects
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-4 px-4 mt-6">
          {PROJECT_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium transition-all ${
                selectedTags.includes(tag)
                  ? "bg-pink-300 text-black"
                  : "bg-neutral-800 text-pink-300 hover:bg-neutral-700 hover:text-pink-200"
              }`}
            >
              {tag}
            </button>
          ))}
          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium text-pink-300 hover:bg-neutral-700"
          >
            ✖
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-8 mt-10">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl bg-black/30 backdrop-blur-lg shadow-pink-500/50 shadow-lg"
            >
              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {project.description}
                </p>
                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-white text-black hover:bg-gray-300 transition px-3 py-2 text-xs"
                >
                  <div className="flex items-center">
                    <span>View on GitHub</span>
                    <motion.span
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="ml-2"
                    >
                      <FaGithub className="text-sm" />
                    </motion.span>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
