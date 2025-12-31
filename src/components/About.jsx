import gwenImg from "../assets/gwen.png";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const About = () => {
  const whatIDo = [
    {
      title: "Software Engineering",
      description: "",
      icon:<IoIosSettings />,
      color: "cyan",
      glowColor: "rgba(34, 211, 238, 0.4)",
      link: "/projects",
      linkText: "View Projects"
    },
    {
      title: "Web Development",
      description: "",
      icon: <FaLaptopCode />,
      color: "purple",
      glowColor: "rgba(168, 85, 247, 0.4)",
      link: "/projects",
      linkText: "View Portfolio"
    },
    {
      title: "Marketing",
      description: "",
      icon: <MdOutlineDesignServices />,
      color: "pink",
      glowColor: "rgba(236, 72, 153, 0.4)",
      link: "/marketing",
      linkText: "View Portfolio"
    }
  ];

  return (
    <section className="pt-0 lg:pt-20 relative" id="about">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="mb-12 text-center text-3xl lg:text-4xl relative"
      >
        <span className="relative inline-block">
          What I Do
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </span>
      </motion.h2>

      <div className="flex flex-wrap items-stretch">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-6 lg:p-8"
        >
          <div className="flex items-center justify-center relative h-full">
            {/* Hexagonal border effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full max-w-lg max-h-full">
                <motion.polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="none"
                  stroke="url(#hexGradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <img className="rounded-2xl max-w-md w-full h-auto
             object-contain relative z-10 scale-150" src={gwenImg} alt="about" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-6 lg:p-10"
        >
          <div className="flex flex-col justify-center space-y-6">
            {/* <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 mt-4 relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  WHAT I DO
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </h3>
            </div> */}

            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"
                     style={{ boxShadow: `0 0 20px ${item.glowColor}` }} />

                {/* Main card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-black/40 backdrop-blur-xl p-6 rounded-lg border border-gray-800 overflow-hidden"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-400/50" />

                  {/* Animated scan line */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-b from-transparent via-${item.color}-400/10 to-transparent`}
                    animate={{
                      y: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />

                  {/* Large translucent background icon */}
                  <div className={`absolute -left-8 top-1/2 -translate-y-1/2 text-[120px] text-${item.color}-400/10 pointer-events-none opacity-10`}>
                    {item.icon}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-white group-hover:text-gray-200 transition-colors tracking-wide">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>
                      </div>

                      {/* Tech corner bracket */}
                      <div className={`text-${item.color}-400/30 group-hover:text-${item.color}-400/60 transition-colors text-2xl font-mono ml-4`}>
                        {'//'}
                      </div>
                    </div>

                    {/* View Portfolio/Projects Link */}
                    {item.link && (
                      <motion.a
                        href={item.link}
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center gap-2 mt-4 text-sm font-mono transition-colors group/link ${
                          item.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' :
                          item.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                          item.color === 'pink' ? 'text-pink-400 hover:text-pink-300' : ''
                        }`}
                      >
                        <span className="relative">
                          {item.linkText}
                          <motion.div
                            className={`absolute -bottom-0.5 left-0 right-0 h-px ${
                              item.color === 'cyan' ? 'bg-cyan-400' :
                              item.color === 'purple' ? 'bg-purple-400' :
                              item.color === 'pink' ? 'bg-pink-400' : ''
                            }`}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    )}
                  </div>

                  {/* Data stream effect */}
                  <div className="absolute top-2 right-2 text-xs font-mono text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {`[${String(index + 1).padStart(2, '0')}]`}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
