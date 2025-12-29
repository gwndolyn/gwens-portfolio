import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"
import Social from "./Social";


const Contact = () => {
  return (
    <div className="p-4 lg:w-3/4" id="contact">


      <div className="mb-10 mt-5">
        <div>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center tracking-wide mb-10 text-xl"
          >

          </motion.p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-8">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a

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



      {/* Copyright Section */}
      <p className="mt-2 text-center text-sm tracking-wide text-gray-400">
        &copy;{new Date().getFullYear()}, Gwendolyn. All rights reserved.
      </p>
        
    </div>
  );
};

export default Contact;
