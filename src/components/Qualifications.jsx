import { useState } from 'react';
import { EXPERIENCES, EDUCATION } from "../constants";
import { motion } from 'framer-motion';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="pt-20" id="qualify">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-5 text-center text-4xl"
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
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4"
                  >
                    <p className="mb-2 text-sm text-neutral-400">{edu.duration}</p>
                  </motion.div>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4"
                  >
                    <h6 className="mb-2 font-semibold">
                      {edu.institution} - <span className="text-sm text-purple-100">{edu.degree}</span>
                    </h6>
                    <ul className="mb-4 text-neutral-400 list-inside list-disc">
                      {edu.description && edu.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4"
                  >
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                  </motion.div>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4"
                  >
                    <h6 className="mb-2 font-semibold">
                      {experience.company} - <span className="text-sm text-purple-100">{experience.role}</span>
                    </h6>
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
