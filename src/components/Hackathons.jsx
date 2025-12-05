import { HACKATHONS } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hackathons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="py-8" ref={ref}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm text-neutral-400 mb-4 tracking-wide"
      >
        HACKATHONS PARTICIPATED
      </motion.h2>
      <div className="overflow-hidden relative py-4">
        {/* Gradient borders */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent"></div>

        <div className="flex items-center gap-8 relative">
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-12 animate-scroll"
              style={{
                animationPlayState: isInView ? "running" : "paused",
              }}
            >
              {/* Duplicate the list for seamless loop */}
              {[...HACKATHONS, ...HACKATHONS].map((hackathon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-12 whitespace-nowrap"
                >
                  <span className="text-pink-400 text-xl">◆</span>
                  <span className="text-neutral-200 font-medium">
                    {hackathon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hackathons;
