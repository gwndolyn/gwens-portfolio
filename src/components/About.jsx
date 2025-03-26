import gwenImg from "../assets/gwen.png";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pt-20" id="about">
      <motion.h2 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="mb-8 text-center text-3xl lg:text-4xl"
      >
        About Me
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-96" src={gwenImg} alt="about" />
          </div>
        </motion.div>
        
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col justify-center">
            {ABOUT.map((text, index) => (
              <p key={index} className="my-1 max-w-xl py-6">
                {/* Highlight specific words by wrapping them in <span> */}
                {index === 0 ? (
                  <>
                    I am passionate about <span className="font-bold text-pink-400">technology</span> and using it to help others, positioning myself as a <span className="font-bold text-pink-400">tech all-rounder</span>. My drive comes from the potential to <span className="font-bold text-pink-400">create innovative solutions</span> that make a real difference in people's lives.
                    </>
                ) : (
                  <>
                  Outside of my technical work, I enjoy staying active by playing sports, and volunteering in my community. I find inspiration in hearing the stories of others, as I believe there is unique value in every individual. I am always excited to contribute, grow, and learn from the experiences and insights that those around me bring.
                  </>
                )}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
