import { useState } from 'react';
import { EXPERIENCES, EDUCATION } from "../constants";
import { motion } from 'framer-motion';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="pt-20" id="qualify">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-10 text-center text-4xl"
        >
          Qualifications
        </motion.h2>
        <motion.nav 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10 mt-10"
        >
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 rounded-full transition-all duration-300 
              ${activeTab === 'education' ? 'bg-white text-black font-bold' : 'text-white font-normal hover:font-bold'}`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 rounded-full transition-all duration-300 
              ${activeTab === 'experience' ? 'bg-white text-black font-bold' : 'text-white font-normal hover:font-bold'}`}
          >
            Experiences
          </button>
        </motion.nav>

        <div>
          {activeTab === 'education' && (
            <div>
              {EDUCATION.map((edu, index) => (
                <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4 px-4"
                  >
                    <p className="mb-2 text-sm text-neutral-400">{edu.duration}</p>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4 px-4"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      {edu.logo && (
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      )}
                      <div className="flex-1">
                        <h6 className="font-semibold text-lg">{edu.institution}</h6>
                        <p className="text-sm text-purple-100">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="mb-4 text-neutral-400">
                      {edu.description && edu.description.map((desc, index) => (
                        <div key={index} className={desc === "" ? "h-2" : ""}>
                          {desc}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4 px-4"
                  >
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4 px-4"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      {experience.logo && (
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className={`w-12 h-12 rounded-full ${
                            experience.company === "The Logic Coders" || experience.company === "Luxoft"
                              ? "object-contain bg-white"
                              : "object-cover"
                          }`}
                        />
                      )}
                      <div className="flex-1">
                        <h6 className="font-semibold text-lg">{experience.company}</h6>
                        <p className="text-sm text-purple-100">{experience.role}</p>
                      </div>
                    </div>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-pink-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
