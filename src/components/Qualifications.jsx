import { useState } from 'react';
import { EXPERIENCES, EDUCATION } from "../constants";
import { motion } from 'framer-motion';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="pt-20" id="qualify">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            whileInView={{ opacity: 1}}
            initial={{ opacity: 0}}
            transition={{ duration: 1 }}
        className="my-5 text-center text-4xl">Qualifications</motion.h2>
        <motion.nav 
            whileInView={{ opacity: 1}}
            initial={{ opacity: 0}}
            transition={{ duration: 1 }}
        className="flex justify-center mb-5">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeTab === 'education' ? 'bg-white text-black' : 'text-white hover:bg-slate-500'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeTab === 'experience' ? 'bg-white text-black' : 'text-white hover:bg-slate-500'
            }`}
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
                  className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{edu.duration}</p>
                  </motion.div>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100}}
                    transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                      {edu.degree} - <span className="text-sm text-purple-100">{edu.institution}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{edu.description}</p>
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
                  className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                  </motion.div>
                  <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100}}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                      {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                      <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                        {tech}
                      </span>
                    ))}
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
