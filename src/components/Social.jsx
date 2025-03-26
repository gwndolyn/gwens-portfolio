import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"


const Social = () => {
    return (
      <div className="lg:w-3/4" id="contact">
  
  
        <div className="mb-6">
          <div>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center tracking-wide text-xl"
            >
  
            </motion.p>
          </div>
  
          {/* Social Media Links */}
          <div className="flex gap-8">
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
        </div>
    );
};
export default Social;