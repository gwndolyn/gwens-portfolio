import steveImg from "../assets/steve.jpeg";
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
            <img className="rounded-2xl" src={steveImg} alt="about" />
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
                    Whether it's through coding, systems design, or tackling technical challenges, I’m driven by the potential to create <span className="font-bold text-yellow-400">innovative solutions</span>. I have a particular interest in areas that promote <span className="font-bold text-yellow-400">inclusivity</span> and <span className="font-bold text-yellow-400">accessibility</span>, which fuels my curiosity and dedication to learning and developing <span className="font-bold text-yellow-400">impactful projects</span>.
                  </>
                ) : (
                  <>
                    When I'm not on my computer, I love going to the <span className="font-bold text-yellow-400">gym</span>, playing <span className="font-bold text-yellow-400">sports</span>, and <span className="font-bold text-yellow-400">volunteering</span>. Hearing stories inspires me, as I believe there’s unique value in everyone. I’m always excited to <span className="font-bold text-yellow-400">contribute</span>, <span className="font-bold text-yellow-400">grow</span>, and <span className="font-bold text-yellow-400">learn</span> from the experiences and insights others bring.
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
