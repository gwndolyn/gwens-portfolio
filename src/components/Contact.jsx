import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-5 text-center text-4xl font-semibold tracking-tighter underline"
      >
        Get In Touch
      </motion.h2>

      <div className="mb-10 mt-5">
        <div>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center tracking-wide mb-10 text-xl"
          >
            Thank you for visiting my portfolio—let's create something amazing together!
            <br />
            Feel free to contact me below:
          </motion.p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-8">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.5 }}
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Technology Credits Section */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>
          Loosely designed in{" "}
          <span className="hover:text-blue-400 hover:brightness-125 transition duration-200 font-semibold text-gray-300">
            Figma
          </span>{" "}
          and coded in{" "}
          <span className="hover:text-purple-400 hover:brightness-125 transition duration-200 font-semibold text-gray-300">
            Visual Studio Code
          </span>{" "}
          by yours truly. Built with{" "}
          <span className="hover:text-cyan-400 hover:brightness-125 transition duration-200 font-semibold text-gray-300">
            React
          </span>{" "}
          and{" "}
          <span className="hover:text-sky-400 hover:brightness-125 transition duration-200 font-semibold text-gray-300">
            Tailwind CSS
          </span>
          , deployed with{" "}
          <span className="hover:text-yellow-400 hover:brightness-125 transition duration-200 font-semibold text-gray-300">
            Vercel
          </span>
          .
        </p>
      </div>

      {/* Copyright Section */}
      <p className="mt-2 text-center text-sm tracking-wide text-gray-400">
        &copy;stevechia. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
